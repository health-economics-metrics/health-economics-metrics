# Allocation de coûts exacte au centime

Répartir un montant total — une subvention partagée, une facture d'infrastructure, un chiffre d'impact budgétaire — entre plusieurs bénéficiaires avec une arithmétique de pourcentages naïve donne souvent des parts qui ne s'additionnent pas au total d'origine. L'allocation exacte au centime est le remède : une méthode en entiers/décimaux qui travaille dans la plus petite unité de la devise (le centime) et garantit que les parts s'additionnent *exactement* au total, aussi inégale que soit la division. Tout ingénieur logiciel qui doit faire tomber juste au centime un total réparti — paie, versement de subventions, refacturation de services partagés — a besoin de ce patron, pas de pourcentages en virgule flottante.

## Pourquoi c'est important

C'est un patron fondamental nommé de l'ingénierie logicielle d'entreprise : *Patterns of Enterprise Application Architecture* de Martin Fowler (2002) documente `Money` et `Allocate` précisément parce que « répartir 100 $ en trois » est un problème que le code naïf traite toujours mal, et en silence : l'erreur apparaît quand quelqu'un rapproche les comptes et constate que les parts font un centime de moins (ou de plus) que le total. Dans le travail d'économie de la santé et de finances du NHS, ce n'est pas théorique : un chiffre d'impact budgétaire est réparti par site, par année ou par organisme ; les coûts partagés d'infrastructure et de licences sont répartis entre services selon l'effectif ou la part d'activité. Chacune de ces répartitions doit tomber juste, car un directeur financier qui reçoit des parts dont la somme n'égale pas le total cessera de se fier à l'ensemble du modèle.

## Le calcul

```
Méthode naïve (erronée) :
  part_i = arrondir(total × proportion_i / Σ proportions)     — arrondit chaque part séparément

Méthode exacte (plus fort reste / "largest remainder allocation") :
  1. base_i = plancher(total_en_plus_petite_unité × proportion_i / Σ proportions)   — plus petites unités entières seulement (centimes)
  2. reste = total_en_plus_petite_unité − Σ base_i                                    — centimes restants, toujours < nombre de bénéficiaires
  3. donner 1 plus petite unité supplémentaire à chacun des `reste` bénéficiaires ayant
     la plus grande partie fractionnaire de l'étape 1, jusqu'à épuisement du reste

Résultat : Σ part_i == total toujours, par construction
```

La méthode exacte n'arrondit jamais une part isolée : elle arrondit *toute l'allocation* en une seule opération, et c'est ce qui rend vrai l'invariant de la somme.

## Exemple chiffré

Répartir 100,00 $ en trois parts égales (`proportions = [1, 1, 1]`).

Méthode naïve : 100,00 $ ÷ 3 = 33,333… $ ; arrondi séparément au centime le plus proche, cela donne 33,33 $ par bénéficiaire. Somme : 33,33 $ × 3 = 99,99 $ — un centime a disparu, et aucune ligne isolée n'est assez « fausse » pour qu'on le remarque à l'œil.

Méthode exacte : `base` = 33,33 $ pour les trois (9 999 plus petites unités au total, avec `plancher(10 000 / 3) = 3 333` centimes par bénéficiaire). Il reste 1 centime (10 000 − 9 999). Ce centime restant va au bénéficiaire ayant la plus grande partie fractionnaire dans la division ; lequel exactement relève d'un détail interne de départage, sur lequel l'appelant ne doit pas s'appuyer. Deux bénéficiaires reçoivent 33,33 $ et un reçoit 33,34 $, et les trois parts s'additionnent exactement à 100,00 $.

C'est l'arithmétique dont l'[analyse d'impact budgétaire](../analyse-d-impact-budgétaire/) a besoin chaque fois qu'un chiffre d'impact budgétaire total doit être réparti par site, groupe de population ou exercice et rapproché du total publié — voir [Agrégation de coûts sûre vis-à-vis des devises](../agrégation-de-coûts-sûre-vis-à-vis-des-devises/) pour le problème complémentaire consistant à additionner de nombreuses lignes de ce type sans dérive.

## Lien avec l'ingénierie logicielle

C'est exactement le « patron Money » de l'architecture logicielle d'entreprise — le patron fondamental nommé pour cette classe précise de bogue, et non une astuce ponctuelle. De véritables défauts de rapprochement financier ont atteint la production à cause de ce même bogue : une répartition proportionnelle calculée en `f64`, arrondie par bénéficiaire et jamais vérifiée par rapport au total d'origine. Il se rattache directement au module [coût total de possession](../coût-total-de-possession/) de ce dépôt, qui agrège aujourd'hui des coûts en virgule flottante ordinaire sur les années et les options : la même discipline d'exactitude s'applique quand un total de TCO ou d'impact budgétaire doit être *alloué*, et pas seulement additionné.

## Pièges

- **Pourcentage puis arrondi au lieu du plus fort reste** : allouer avec des pourcentages en virgule flottante et arrondir chaque bénéficiaire séparément, ce qui compose les erreurs d'arrondi et revient rarement au total, surtout avec beaucoup de bénéficiaires.
- **Ignorer l'exposant de la plus petite unité de la devise** : supposer que toutes les devises ont 2 décimales (le yen japonais en a 0, certaines devises 3) ; une répartition proportionnelle écrite à la main fige souvent le 2 et casse en silence avec d'autres devises. La routine d'allocation exacte lit l'exposant dans la devise elle-même (ISO 4217).
- **Réallouer un reste déjà alloué** : relancer la routine d'allocation sur ce qui reste d'une allocation précédente sans contrôle d'idempotence, ce qui peut créditer deux fois le même centime au même bénéficiaire.

## Sources

- Fowler M. "Patterns of Enterprise Application Architecture." Addison-Wesley, 2002 — les patrons `Money` et `Allocate`.
- ISO 4217 — la norme des codes de devises et de fonds, qui définit l'exposant de la plus petite unité de chaque devise.
