# Analyse de Sensibilité

L'analyse de sensibilité déterministe (ASD) fait varier une hypothèse à la fois sur une plage plausible pour voir si la conclusion survit. La visualisation standard est un diagramme en tornade : les paramètres classés selon combien ils font osciller le résultat.

## Pourquoi c'est important

Chaque modèle économique est construit sur des estimations — temps économisé, adoption, coûts unitaires. L'évaluation des technologies de santé refuse d'accepter une estimation ponctuelle (« le ROI est de 340 % ») sans preuve que la conclusion est robuste face à un désaccord raisonnable sur les entrées. Un diagramme en tornade dit au décideur *quelle hypothèse interroger* : si le dossier ne fonctionne que lorsque le paramètre le plus contesté est à son extrémité optimiste, tout le monde peut le voir immédiatement.

C'est l'habitude individuelle la plus transférable de l'économie de la santé vers les dossiers de décision logiciels.

## Le calcul

Pour chaque paramètre p avec une plage plausible [p_bas, p_haut] :

```
Résultat_bas  = modèle(p = p_bas,  tous les autres au cas de base)
Résultat_haut = modèle(p = p_haut, tous les autres au cas de base)
Oscillation(p)    = |Résultat_haut − Résultat_bas|
```

Classez les paramètres par oscillation ; tracez des barres horizontales autour du résultat de cas de base. Variantes : ASD bidirectionnelle (faire varier deux paramètres sur une grille), analyse de seuil (trouver la valeur de paramètre où la décision bascule).

## Exemple résolu

Assistant de codage IA pour 200 développeurs. Cas de base : licence à 39 £/dév/mois ; 30 min/dév/jour économisées ; coût chargé 60 £/heure ; 220 jours de travail.

```
Bénéfice annuel du cas de base = 200 × 0,5h × 220 × 60 £ = 1 320 000 £
Coût annuel              = 200 × 39 £ × 12         = 93 600 £
Net du cas de base            = 1 226 400 £
```

Tornade (un paramètre à la fois) :

```
Temps économisé 0,1–1,0 h/jour : net = 170 400 £ … 2 546 400 £   (oscillation 2,38 M£) ← domine
Coût chargé 40–80 £/h :    net = 786 400 £ … 1 666 400 £   (oscillation 0,88 M£)
Jours de travail 200–240 :     net = 1 106 400 £ … 1 346 400 £ (oscillation 0,24 M£)
Licence 30–50 £/mois :       net = 1 248 000 £ … 1 200 000 £ (oscillation 48k£)
```

Analyse de seuil : le bénéfice net atteint zéro à environ **2,1 minutes/jour** économisées. La décision est insensible au prix de licence et repose entièrement sur l'estimation de temps économisé — donc mesurez cela, pas le reste. (Et rappelez-vous que le résultat est de la capacité, pas de la trésorerie — voir [libérateur de trésorerie contre non libérateur](../économies-libératrices-de-trésorerie-contre-non-libératrices/).)

## Lien avec l'ingénierie logicielle

Les ingénieurs font déjà cela d'instinct comme « et si nous avons tort sur X ? » — l'ASD le systématise simplement et le rend visible. Mettez un diagramme en tornade dans chaque proposition d'outillage, plan de capacité, et analyse développer-contre-acheter. Cela convertit les débats sur qui a raison en accords sur quel paramètre aller mesurer — souvent via un pilote, dont la valeur peut elle-même être tarifée (voir [valeur espérée de l'information parfaite](../valeur-espérée-de-l-information-parfaite/)).

## Pièges

- **Plages choisies pour flatter** : ±10 % autour de chaque entrée indépendamment de l'incertitude réelle. Les estimations de temps économisé méritent ±80 % ; les prix de licence ±10 %.
- **Un-à-la-fois rate les interactions** — les paramètres corrélés (adoption et temps économisé) nécessitent une analyse bidirectionnelle ou une [analyse de sensibilité probabiliste](../analyse-de-sensibilité-probabiliste/) complète.
- **Faire l'analyse et l'ignorer** : si la tornade dit que le dossier repose sur un chiffre mou, la prochaine étape est la mesure, pas l'approbation.

## Sources

- Glossaire du York Health Economics Consortium : analyse de sensibilité déterministe. <https://yhec.co.uk/glossary/deterministic-sensitivity-analysis/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
