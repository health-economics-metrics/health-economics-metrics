# Analyse coût-utilité (Cost-Utility Analysis, CUA)

La CUA est une analyse coût-efficacité utilisant un **résultat générique, pondéré par les préférences** — presque toujours le [QALY](../quality-adjusted-life-year/) (ou le [DALY](../disability-adjusted-life-year/) évité). Comme l'unité de résultat est universelle, la CUA permet de comparer des interventions relevant de pathologies totalement différentes.

## Pourquoi c'est important

Un service de santé national doit arbitrer, avec un seul budget, entre un médicament anticancéreux, une application de santé mentale et un robot chirurgical. Les unités naturelles ne permettent pas de les comparer ; les QALYs, si. La CUA est donc la méthode de référence (« reference case ») du NICE et de la plupart des organismes d'évaluation des technologies de santé (HTA) : son résultat — le coût par QALY, jugé au regard d'un [seuil](../willingness-to-pay-thresholds/) — est ce qui se rapproche le plus, en politique de santé, d'un taux de change universel. Si vous voulez que votre logiciel soit financé *à la place d'autre chose*, la CUA est le terrain de jeu.

## Le calcul

```
ICUR = ΔCoût / ΔQALYs      (l'ICER avec les QALYs comme unité d'effet)

ΔQALYs = Σ (durée_i × utilité_i)_nouveau − Σ (durée_i × utilité_i)_ancien
```

Les utilités proviennent d'instruments validés ([EQ-5D](../eq-5d/)) ; coûts et QALYs sont tous deux [actualisés](../discounting-and-time-preference/) à 3,5 % (reference case NICE) ; l'incertitude est traitée via une [PSA](../probabilistic-sensitivity-analysis/).

## Exemple chiffré

Une application de TCC pour anxiété modérée comparée à une liste d'attente pour thérapie en présentiel, par patient :

```
Coûts : licence appli + support         £250
        thérapie évitée               −£680   (40 % des utilisateurs n'en ont plus besoin)
        ΔC = 250 − 680 = −£430 (fait économiser de l'argent)

QALYs : 6 mois à une utilité de 0,76 au lieu de 0,68 en attente
        ΔE = 0,5 × (0,76 − 0,68) = +0,04 QALY
```

ΔC < 0 et ΔE > 0 : l'application **domine** — meilleure et moins chère, aucun ratio n'est nécessaire. Si l'hypothèse de substitution de thérapie n'avait été que de 10 %, ΔC = 250 − 170 = +£80, et ICUR = 80 / 0,04 = **£2 000/QALY** — encore très en dessous de £20 000. Le dossier tient même avec l'hypothèse clé fortement dégradée : c'est à cela que ressemble une CUA robuste (et le [diagramme en tornade](../sensitivity-analysis/) le prouve).

## Lien avec l'ingénierie logicielle

L'idée profonde de la CUA — *une unité composite unique, pondérée par les préférences, pour comparer des choses hétérogènes* — est le modèle à suivre pour comparer des investissements techniques hétérogènes (sécurité vs expérience développeur vs fiabilité). Les options honnêtes sont soit une unité composite défendable (rare), soit un [tableau coût-conséquence](../cost-consequence-analysis/) explicite (le cas usuel). Ce contre quoi la CUA met en garde, c'est le faux composite : un « score d'impact » pondéré dont les poids ont été ajustés après coup pour faire gagner l'option préférée. L'économie de la santé a passé des décennies à standardiser le recueil des utilités précisément pour que les poids précèdent la comparaison.

## Pièges

- **Des gains d'utilité en dessous de la sensibilité de l'instrument** (voir la différence minimale cliniquement importante dans les [résultats rapportés par les patients](../patient-reported-outcomes/)) — un ΔE minuscule multiplié par de grandes populations est un classique tour de blanchiment.
- **Omettre la substitution de soins du comparateur** — le principal poste de coût des produits numériques est souvent ce qu'ils remplacent.
- **Convertir des scores non préférentiels en utilités** via des grilles de correspondance non validées.

## Sources

- York Health Economics Consortium glossary: cost-utility analysis. <https://yhec.co.uk/glossary/cost-utility-analysis/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
