# Valeur d'une vie statistique (VSL)

La valeur d'une vie statistique (VSL) — dans l'usage britannique « valeur d'un décès évité » (VPF) — est la somme qu'une *population* est collectivement prête à payer pour réduire le risque d'un décès statistique, déduite d'études de compensation salaire-risque (combien de salaire supplémentaire les travailleurs exigent pour un emploi plus dangereux) et d'enquêtes de préférences déclarées. Ce n'est pas le prix de la vie d'une personne identifiée ; c'est une construction de risque de population, et un ingénieur logiciel qui construit des systèmes réduisant des risques — algorithmes de tri, régulation des ambulances, supervision de la sécurité — doit savoir qu'elle provient d'une tradition théorique différente de celle des [seuils de disposition à payer](../seuils-de-disposition-à-payer/).

## Pourquoi c'est important

La VSL/VPF est l'outil standard pour monétiser les réductions du risque de mortalité dans l'analyse coûts-bénéfices réglementaire : la sécurité des transports, la réglementation environnementale et certaines interventions de santé publique construisent leur dossier économique à travers elle. Le Green Book du HM Treasury publie un chiffre de VPF déduit de données du marché du travail et d'enquêtes britanniques, et le ministère des Transports l'utilise directement pour évaluer la sécurité routière. C'est une tradition d'évaluation réellement distincte de la méthodologie QALY × seuil de disposition à payer : l'approche par seuil valorise le gain de santé par rapport à ce que le *budget de santé* produit actuellement à la marge, tandis que la VSL/VPF valorise la réduction du risque par rapport à ce que les gens révèlent, sur le marché du travail ou dans une enquête, qu'ils paieraient pour elle. Les deux cadres ne sont pas toujours compatibles, et utiliser les deux dans un même dossier sans le reconnaître est une erreur d'analyse courante.

## Le calcul

```
Décès évités = population × réduction_du_risque_par_personne
  (réduction_du_risque_par_personne est une probabilité, ex. 0,000001 =
   une réduction d'un millionième du risque annuel de mortalité)

Bénéfice_de_mortalité_monétisé = décès_évités × valeur_d_un_décès_évité
```

## Exemple chiffré

Une région de 800 000 habitants bénéficie d'une intervention numérique de régulation/tri en sécurité routière qui réduit le risque annuel de mortalité de chaque personne d'un millionième (0,000001) :

```
Décès évités = 800,000 × 0.000001 = 0.8
```

Avec la valeur britannique d'un décès évité de 2 180 000 £ (chiffre HM Treasury/DfT, prix 2023/24 ; le Green Book la met à jour chaque année, à vérifier avant de la citer dans une analyse en cours) :

```
Bénéfice de mortalité monétisé = 0.8 × £2,180,000 = £1,744,000/an
```

Un peu moins de 1,75 million de £ par an de bénéfice de mortalité monétisé, issu d'une réduction du risque que la plupart des personnes concernées ne remarqueraient jamais individuellement.

## Lien avec l'ingénierie logicielle

Les équipes logicielles critiques pour la sécurité — micrologiciel de dispositifs médicaux, logiciels de véhicules autonomes, systèmes de contrôle industriel — se heurtent précisément à ce problème de valorisation lorsqu'elles construisent le dossier coûts-bénéfices d'un investissement de sécurité : comment chiffrer « éviter une défaillance catastrophique » lorsque la défaillance est rare, grave et répartie sur une vaste population d'utilisateurs ? La VSL/VPF offre un précédent réel, public, vieux de plusieurs décennies pour mettre un chiffre sur une réduction rare et grave du risque au niveau de la population — la même forme d'argument que la valorisation d'un investissement SRE face à une panne catastrophique rare, avec simplement un résultat de mortalité au lieu d'un résultat d'indisponibilité.

## Pièges

- **Traiter la VSL comme le « prix d'une vie identifiée »** : elle ne l'est pas. La VSL/VPF est une construction statistique de population déduite d'arbitrages de réduction du risque entre de nombreuses personnes, non une évaluation de la vie ou de la mort d'un individu précis.
- **Double comptage avec un calcul de bénéfice monétaire net fondé sur les QALY** : utiliser un chiffre de VSL/VPF et un calcul séparé QALY × seuil dans le même dossier, sans les concilier, compte en silence deux fois la valeur des mêmes décès évités. Il faut choisir un cadre par dossier.
- **Transférer une estimation de VSL d'un contexte à l'autre sans ajustement** : une VSL déduite du marché du travail ou de données salaire-risque de la population active d'un pays, appliquée sans ajustement à un autre contexte de revenu ou à une autre population (enfants, personnes âgées), est une question méthodologique réellement disputée et ancienne — non résolue.

## Sources

- HM Treasury, The Green Book: Central Government Guidance on Appraisal and Evaluation — indications complémentaires sur la Value of a Prevented Fatality (prix 2023/24 ; les valeurs du Green Book sont mises à jour chaque année). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- US EPA, "Mortality Risk Valuation" (pour la tradition américaine de la VSL, fournie en contraste avec le chiffre de VPF britannique ci-dessus). <https://www.epa.gov/environmental-economics/mortality-risk-valuation>
- Viscusi WK, Aldy JE. "The Value of a Statistical Life: A Critical Review of Market Estimates Throughout the World." J Risk Uncertain. 2003;27(1):5-76.
