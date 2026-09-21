# Durée de Séjour (DDS)

La durée de séjour est le nombre de jours entre l'admission hospitalière et la sortie — la métrique centrale d'efficience de flux des soins hospitaliers. Les moyennes aiguës britanniques tournent autour de 4-5 jours ; chaque jour excédentaire consomme un lit rare et expose le patient à des risques acquis à l'hôpital.

## Pourquoi c'est important

La DDS pilote presque tout dans l'économie hospitalière aiguë : capacité de lits, débit programmé, flux d'urgence, personnel. Réduire la DDS moyenne même de fractions de jour à l'échelle libère une capacité énorme (voir [journées-lits économisées](../journées-lits-économisées/)). La DDS est aussi un signal de qualité dans les deux sens — trop longue suggère un échec de processus (diagnostic retardé, paperasse de sortie, attentes de soins sociaux) ; trop courte peut signifier une sortie prématurée, ce qui apparaît plus tard sous forme de [réadmissions](../taux-de-réadmission/).

## Le calcul

```
DDS (par séjour)  = date de sortie − date d'admission
DDS moyenne      = journées-lits occupées / sorties (rapportez la moyenne ET la médiane ;
                   la DDS est fortement asymétrique à droite par les valeurs
                   aberrantes de longs séjours)

Les comparaisons nécessitent un ajustement du mix de cas (âge, diagnostic, acuité),
ou vous mesurez qui l'hôpital admet, pas comment il performe.
```

La Loi de Little relie les variables de flux : `lits occupés = taux d'admission × DDS moyenne` — la même loi qui gouverne les files d'attente logicielles (voir [métriques de flux](../métriques-de-flux/)).

## Exemple résolu

Un trust admet 40 patients médicaux d'urgence/jour avec une DDS moyenne de 6,0 jours : 240 lits en permanence occupés (40 × 6). Un logiciel de coordination des sorties (suivi des tâches, automatisation pharmacie-à-emporter, réservation de transport) réduit la queue non clinique des séjours de 0,4 jour en moyenne.

```
Lits nécessaires = 40 × 5,6 = 224 → 16 lits libérés en continu
            = 16 × 365 = 5 840 journées-lits/an
```

Valorisez les 5 840 journées-lits par mécanisme (reremplir/fermer/marge) selon [journées-lits économisées](../journées-lits-économisées/). Notez ce qui a bougé : pas la médecine, mais l'*attente* — le patient était médicalement apte ; le système faisait encore de la paperasse. C'est un problème de file d'attente, et le logiciel est bon pour les problèmes de file d'attente.

## Lien avec l'ingénierie logicielle

La DDS est le temps de cycle de l'hôpital, et le manuel d'amélioration est identique au travail de flux de livraison : instrumentez les étapes (admission → traitement → médicalement apte → réellement sorti), trouvez où le temps s'accumule (ce sont les transferts), éliminez les états d'attente plutôt que d'ajouter de la capacité. La cohorte « médicalement apte pour la sortie mais occupant encore un lit » est la version hospitalière d'une PR approuvée mais non fusionnée. Opportunités logicielles directes : orchestration des tâches de sortie, délai de rendu du diagnostic, prescription électronique des médicaments de sortie, intégration de recommandation vers les soins sociaux.

## Pièges

- **Rapport uniquement de la moyenne** — les valeurs aberrantes dominent ; une moyenne décroissante peut cacher une queue de longs séjours croissante.
- **Aucun ajustement du mix de cas** dans les allégations avant/après : les seuils d'admission changent saisonnièrement et séculairement.
- **Réduction de DDS qui réapparaît comme réadmission** — associez toujours les allégations de DDS aux données de réadmission à 30 jours.

## Sources

- OCDE, indicateur de durée de séjour hospitalier. <https://www.oecd.org/en/data/indicators/length-of-hospital-stay.html>
- NHS England, Collecte Nationale de Coûts. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
