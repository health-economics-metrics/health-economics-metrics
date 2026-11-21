# Productivité au travail et altération de l'activité (WPAI)

Le WPAI est un questionnaire autodéclaré validé (Reilly, Zbrozek, Dasbach, 1993) qui mesure dans quelle mesure un problème de santé affecte le travail rémunéré et les activités quotidiennes, généralement sur les 7 derniers jours. Il sépare la perte en *absentéisme* (absenteeism) — le temps de travail perdu au sens littéral — et *présentéisme* (presenteeism) — la productivité réduite tout en étant physiquement au travail —, ce dernier étant généralement la composante de coût la plus grande et la plus cachée.

## Pourquoi c'est important

Un simple décompte des jours d'arrêt maladie ne voit que l'absentéisme. Un médecin ou un travailleur du savoir qui ne s'absente jamais mais travaille à 60 % de sa capacité à cause d'une affection chronique n'ajoute rien au registre des absences et génère pourtant une perte de productivité importante et réelle — le WPAI a été conçu précisément pour rendre visible ce coût invisible. Comme c'est un instrument validé et non une enquête ad hoc, ses scores peuvent être utilisés dans les dossiers de preuves de [résultats rapportés par les patients](../résultats-rapportés-par-les-patients/) et dans les études de coût de la maladie sans que l'évaluateur ait à revalider la mesure. En tant qu'instrument autodéclaré, il est lui-même une forme de PROM, qui se distingue surtout par son accent sur le travail et l'activité plutôt que sur les symptômes ou la qualité de vie.

## Le calcul

```
Absentéisme % = heures_perdues_pour_raison_de_santé / (heures_perdues_pour_raison_de_santé + heures_travaillées) × 100

Présentéisme % = altération autodéclarée 0–10 pendant le travail × 10
                  (prise directement du questionnaire, non dérivée ici)

Altération totale du travail % =
    Absentéisme% + (1 − Absentéisme%/100) × Présentéisme%
    (combine les deux parties de sorte que la somme ne dépasse jamais 100 %)

coût_de_productivité = Altération_totale_du_travail% / 100 × revenu_de_la_période
```

La formule de l'altération totale n'est volontairement pas une simple somme : additionner directement les deux pourcentages pourrait dépasser 100 %, donc le présentéisme s'applique seulement à la fraction *restante* (non absente) du temps de travail.

## Exemple chiffré

Un salarié migraineux est planifié pour une semaine de 40 heures mais en manque 4 :

```
heures_perdues = 4, heures_travaillées = 36
Absentéisme% = 4 / (4 + 36) × 100 = 10 %
```

Il évalue séparément son impact sur la productivité pendant le travail à 3 sur 10 dans le questionnaire WPAI, soit `Présentéisme% = 30 %` (cette étape est la réponse brute au questionnaire, non dérivée des autres chiffres) :

```
Altération_totale_du_travail% = 10 + (1 − 10/100) × 30
                              = 10 + 0.9 × 30
                              = 10 + 27
                              = 37 %
```

Sur une semaine de 5 jours avec un revenu de 800 £ (160 £/jour) :

```
coût_de_productivité = 37/100 × 800 = £296
```

Notez qu'un décompte naïf des jours d'arrêt maladie n'aurait enregistré que les 4 heures perdues (10 %) — la composante de présentéisme triple presque l'altération réelle lorsqu'on la prend en compte.

## Lien avec l'ingénierie logicielle

Cela correspond directement aux indicateurs de santé d'une équipe d'ingénierie :

- **L'absentéisme**, ce sont les arrêts maladie et les congés payés — la partie visible, déjà suivie et facile.
- **Le présentéisme**, c'est l'ingénieur épuisé ou fatigué par les changements de contexte, présent à chaque stand-up mais travaillant à capacité réduite — généralement le coût le plus grand et le plus caché, invisible dans les données d'effectif ou de présence. Il apparaît plutôt comme un débit réduit dans [DORA](../métriques-dora/) et les [indicateurs de flux](../indicateurs-de-flux/), ou comme une résolution plus lente de cette même [dette technique](../dette-technique/) dont les « intérêts » aggravent l'altération.
- La leçon d'ingénierie est la même que la leçon clinique : mesurer seulement l'absentéisme et l'appeler « perte de productivité » sous-estime systématiquement le coût réel, car cela passe à côté de tous ceux qui sont présents mais diminués.

## Pièges

- **Biais de rappel dans l'autodéclaration.** La fenêtre de rappel de 7 jours est soumise aux mêmes distorsions de déclaration que toute autoévaluation rétrospective.
- **Traiter l'échelle 0–10 comme une vraie mesure physique.** C'est une échelle ordinale issue d'une autoévaluation, non une grandeur physique validée — traiter les différences sur celle-ci comme strictement linéaires ou d'intervalle est une commodité de modélisation, non un fait physique validé.
- **Agréger les scores entre variantes du WPAI.** Le WPAI a plusieurs versions propres à une situation — WPAI:GH (santé générale), WPAI:SHP (problème de santé précis) et variantes propres à une maladie — et les scores de variantes différentes ne doivent pas être agrégés ni comparés sans vérifier d'abord qu'il s'agit de la même version de l'instrument.

## Sources

- Reilly MC, Zbrozek AS, Dasbach EJ. "The validity and reproducibility of a work productivity and activity impairment instrument." PharmacoEconomics 1993;4(5):353-65.
- Documentation de l'instrument WPAI, Reilly Associates — la référence officielle de notation. <https://www.reillyassociates.net/>
