# Agrégation de coûts sûre vis-à-vis des devises

Additionner de nombreuses lignes monétaires (factures mensuelles, coûts par site, chiffres d'impact budgétaire pluriannuels) avec des nombres à virgule flottante binaire ordinaires (`f64`) accumule de petites erreurs de représentation, car la plupart des fractions décimales (comme 1 234,56 $) ne peuvent pas être représentées exactement en virgule flottante binaire. Chaque erreur est minuscule, mais un grand modèle qui additionne des centaines ou des milliers de lignes sur plusieurs années peut dériver d'une fraction de centime — et la dérive dépend de l'*ordre* d'addition, donc elle n'est pas reproductible. L'agrégation monétaire faite en arithmétique décimale exacte (ou en entiers de la plus petite unité) s'additionne exactement, en accord avec la façon dont les systèmes comptables et la comptabilité en partie double doivent tomber juste au centime.

## Pourquoi c'est important

C'est un type de bogue logiciel bien documenté et fondamental : l'article de Goldberg de 1991 dans ACM Computing Surveys, "What Every Computer Scientist Should Know About Floating-Point Arithmetic", est la référence standard expliquant pourquoi la virgule flottante binaire ne peut pas représenter exactement la plupart des montants décimaux et pourquoi en additionner beaucoup compose l'erreur. Les modèles d'économie de la santé et de finances du NHS additionnent couramment plusieurs années et plusieurs catégories de coûts : le [coût total de possession](../coût-total-de-possession/) et l'[analyse d'impact budgétaire](../analyse-d-impact-budgétaire/) additionnent tous deux de nombreuses lignes de coût `f64` sur plusieurs années. Lorsqu'un modèle doit tomber juste au centime — un audit qui calcule le total à la main doit arriver au chiffre *exact* — l'arithmétique elle-même doit être décimale exacte, et non en virgule flottante.

## Le calcul

```
Agrégation naïve :              total = Σ f64(ligne_i)       — dérive dépendant de l'ordre
Agrégation sûre vis-à-vis des devises : total = Σ Decimal(ligne_i)  — exacte, reproductible

Application d'un ajustement en pourcentage (par exemple une provision) :
  ajusté = total × multiplicateur    — résultat Decimal exact, pouvant avoir plus
                                       de décimales que l'exposant de la plus
                                       petite unité de la devise
  arrondi = arrondir(ajusté, exposant_devise, règle_d_arrondi)
                                     — la règle d'arrondi (half-up contre
                                       half-even/arrondi bancaire) doit être
                                       indiquée explicitement
```

Notez la discipline en deux temps : multiplier un `Decimal` exact par un multiplicateur peut donner plus de décimales que la devise n'en utilise réellement (par exemple trois décimales à partir d'un montant à deux décimales multiplié par un multiplicateur à deux décimales) ; cette précision intermédiaire n'est *pas* tronquée automatiquement : seule une étape d'arrondi explicite, avec une règle d'arrondi indiquée, la ramène à l'exposant réel de la plus petite unité de la devise.

## Exemple chiffré

Douze factures mensuelles identiques de 1 234,56 $, additionnées en arithmétique décimale exacte : 1 234,56 $ × 12 = **14 814,72 $** exactement, contre l'addition de la constante `f64` `1234.56` douze fois en double précision IEEE-754, qui peut dériver d'une fraction de centime selon l'ordre d'addition — un type de bogue réel et documenté, qui ne pose pas de problème à un modèle construit sur une arithmétique `Money` décimale exacte.

Appliquons maintenant une provision d'impact budgétaire standard de 5 % (multiplicateur 1,05) à ce total de 14 814,72 $ : 14 814,72 $ × 1,05 = 15 555,456 $ — trois décimales, car la multiplication est exacte et n'est pas automatiquement arrondie aux deux décimales de la devise. Arrondi explicitement à 2 décimales par arrondi bancaire (half-even), on obtient exactement **15 555,46 $**.

## Lien avec l'ingénierie logicielle

C'est la leçon fondamentale directe derrière le principe « les logiciels financiers utilisent `Decimal`, pas `float` », liée explicitement aux modules [coût total de possession](../coût-total-de-possession/) et [analyse d'impact budgétaire](../analyse-d-impact-budgétaire/) de ce dépôt, qui agrègent aujourd'hui des coûts en virgule flottante ordinaire. L'argument de justesse n'exige pas de migrer ces modèles immédiatement ; il précise *quand* un système doit tomber juste au centime et ne doit donc pas utiliser la virgule flottante binaire pour son arithmétique monétaire. Voir [Allocation de coûts exacte au centime](../allocation-de-coûts-exacte-au-centime/) pour le problème complémentaire consistant à *répartir* (plutôt qu'additionner) un total sans perdre un centime.

## Pièges

- **Convertir en `float` en cours de route** : extraire une valeur monétaire sous forme de nombre à virgule flottante en plein calcul (certaines bibliothèques `Money` nomment même cette méthode de conversion « lossy », en avertissement explicite) abandonne en silence la garantie d'exactitude pour tout calcul ultérieur.
- **« Decimal est trop lent pour qu'on s'en soucie »** : écarter l'arithmétique décimale exacte comme une charge inutile, alors que le reporting financier a besoin de justesse et d'auditabilité, pas de débit brut.
- **Appliquer un pourcentage de provision sans indiquer la règle d'arrondi** : half-up contre half-even (arrondi bancaire) peut changer le dernier centime ; la convention d'arrondi elle-même doit être un choix déclaré et auditable — voir [Analyse coûts-bénéfices](../analyse-coûts-bénéfices/) pour les indications du Green Book du HM Treasury sur les ajustements de provision et le biais d'optimisme, le type de chiffres auxquels cette étape d'arrondi s'applique.

## Sources

- Fowler M. "Patterns of Enterprise Application Architecture." Addison-Wesley, 2002 — le patron `Money`.
- Goldberg D. "What Every Computer Scientist Should Know About Floating-Point Arithmetic." ACM Computing Surveys, 1991.
- HM Treasury, The Green Book — indications sur le biais d'optimisme et les provisions pour la modélisation de l'impact budgétaire. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
