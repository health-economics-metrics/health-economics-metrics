# Analyse Coût-Utilité (ACU)

L'ACU est une analyse coût-efficacité avec un **résultat générique, pondéré par préférence** — presque toujours le [QALY](../année-de-vie-ajustée-par-la-qualité/) (ou l'[AVCI](../année-de-vie-corrigée-du-facteur-invalidité/) évité). Parce que l'unité de résultat est universelle, l'ACU peut comparer des interventions à travers des maladies complètement différentes.

## Pourquoi c'est important

Un système de santé national doit choisir entre un médicament anticancéreux, une application de santé mentale et un robot chirurgical avec un seul budget. Les unités naturelles ne peuvent les comparer ; les QALY le peuvent. L'ACU est donc la méthode de cas de référence chez NICE et la plupart des organismes d'ETS : son résultat — coût par QALY, jugé contre un [seuil](../seuils-de-disposition-à-payer/) — est ce qui se rapproche le plus d'un taux de change universel pour la politique de santé. Si vous voulez que votre logiciel soit financé *plutôt qu'autre chose*, l'ACU est l'arène.

## Le calcul

```
RCUI = ΔCoût / ΔQALY      (le RCEI avec les QALY comme unité d'effet)

ΔQALY = Σ (durée_i × utilité_i)_nouvelle − Σ (durée_i × utilité_i)_ancienne
```

Utilités issues d'instruments validés ([EQ-5D](../eq-5d/)) ; coûts et QALY tous deux [actualisés](../actualisation-et-préférence-temporelle/) à 3,5 % (cas de référence NICE) ; incertitude via [ASP](../analyse-de-sensibilité-probabiliste/).

## Exemple résolu

Une application de TCC pour anxiété modérée contre une liste d'attente pour thérapie en présentiel, par patient :

```
Coûts :  licence de l'application + support        250 £
        thérapie déplacée            −680 £   (40 % des utilisateurs n'en ont plus besoin)
        ΔC = 250 − 680 = −430 £ (économise de l'argent)

QALY :  6 mois à utilité 0,76 au lieu de 0,68 pendant l'attente
        ΔE = 0,5 × (0,76 − 0,68) = +0,04 QALY
```

ΔC < 0 et ΔE > 0 : l'application **domine** — meilleure et moins chère, aucun ratio nécessaire. Si l'hypothèse de déplacement de thérapie n'avait été que de 10 %, ΔC = 250 − 170 = +80 £, et RCUI = 80 / 0,04 = **2 000 £/QALY** — toujours bien en dessous de 20 000 £. Le dossier survit même avec l'hypothèse clé fortement réduite : c'est à cela que ressemble une ACU robuste (et le [diagramme en tornade](../analyse-de-sensibilité/) le prouve).

## Lien avec l'ingénierie logicielle

L'idée profonde de l'ACU — *une unité composite unique, pondérée par préférence, pour comparer des choses dissemblables* — est le modèle pour comparer des investissements d'ingénierie dissemblables (sécurité contre expérience développeur contre fiabilité). Les options honnêtes sont soit une unité composite défendable (rare) soit un [tableau coûts-conséquences](../analyse-coûts-conséquences/) explicite (habituel). Ce contre quoi l'ACU met en garde, c'est le faux composite : un « score d'impact » pondéré dont les pondérations ont été ajustées après coup pour faire gagner l'option préférée. L'économie de la santé a passé des décennies à standardiser l'obtention des utilités précisément pour que les pondérations précèdent la comparaison.

## Pièges

- **Gains d'utilité en dessous de la sensibilité de l'instrument** (voir la différence minimale cliniquement importante dans les [résultats rapportés par le patient](../résultats-rapportés-par-le-patient/)) — un ΔE minuscule multiplié par de grandes populations est une astuce de blanchiment classique.
- **Déplacement de soins comparateur manquant** — le plus grand terme de coût pour les produits numériques est souvent ce qu'ils remplacent.
- **Mapper des scores sans préférence vers des utilités** avec des passerelles non validées.

## Sources

- Glossaire du York Health Economics Consortium : analyse coût-utilité. <https://yhec.co.uk/glossary/cost-utility-analysis/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
