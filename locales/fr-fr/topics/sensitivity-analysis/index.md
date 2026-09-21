# Analyse de sensibilité

L'analyse de sensibilité déterministe (DSA) fait varier une hypothèse à la fois sur une plage plausible pour voir si la conclusion résiste. La visualisation standard est le diagramme en tornade : les paramètres classés selon l'ampleur avec laquelle ils font varier le résultat.

## Pourquoi c'est important

Chaque modèle économique repose sur des estimations — temps gagné, taux d'adoption, coûts unitaires. L'évaluation des technologies de santé refuse d'accepter une estimation ponctuelle (« le ROI est de 340 % ») sans preuve que la conclusion résiste à un désaccord raisonnable sur les données d'entrée. Un diagramme en tornade indique au décideur *quelle hypothèse interroger* : si le dossier ne tient que lorsque le paramètre le plus contesté est à son extrémité optimiste, tout le monde le voit immédiatement.

C'est l'habitude la plus transférable, de l'économie de la santé vers les dossiers d'affaires du logiciel.

## Le calcul

Pour chaque paramètre p avec une plage plausible [p_bas, p_haut] :

```
Résultat_bas  = modèle(p = p_bas,  tous les autres au cas de base)
Résultat_haut = modèle(p = p_haut, tous les autres au cas de base)
Amplitude(p)  = |Résultat_haut − Résultat_bas|
```

Classer les paramètres par amplitude ; tracer des barres horizontales autour du résultat du cas de base. Variantes : DSA à deux voies (faire varier deux paramètres sur une grille), analyse de seuil (trouver la valeur du paramètre où la décision bascule).

## Exemple chiffré

Assistant de codage par IA pour 200 développeurs. Cas de base : licence 39 £/dev/mois ; 30 min/dev/jour économisées ; coût chargé 60 £/heure ; 220 jours ouvrés.

```
Bénéfice annuel du cas de base = 200 × 0,5h × 220 × 60 £ = 1 320 000 £
Coût annuel                    = 200 × 39 £ × 12          = 93 600 £
Net du cas de base              = 1 226 400 £
```

Tornade (un paramètre à la fois) :

```
Temps gagné 0,1–1,0 h/jour : net = 170 400 £ … 2 546 400 £   (amplitude 2,38 M£) ← domine
Coût chargé 40–80 £/h :      net = 786 400 £ … 1 666 400 £   (amplitude 0,88 M£)
Jours ouvrés 200–240 :       net = 1 106 400 £ … 1 346 400 £ (amplitude 0,24 M£)
Licence 30–50 £/mois :       net = 1 248 000 £ … 1 200 000 £ (amplitude 48 k£)
```

Analyse de seuil : le bénéfice net atteint zéro pour un gain d'environ **2,1 minutes/jour**. La décision est insensible au prix de la licence et repose entièrement sur l'estimation du temps gagné — c'est donc cela qu'il faut mesurer, et rien d'autre. (Et il faut se rappeler que le résultat est de la capacité, pas de la trésorerie — voir [libérant de la trésorerie vs ne libérant pas de trésorerie](../cash-releasing-vs-non-cash-releasing/).)

## Lien avec l'ingénierie logicielle

Les ingénieurs font déjà cela par instinct, sous la forme « et si on se trompait sur X ? » — la DSA ne fait que systématiser et rendre visible ce réflexe. Il faut placer un diagramme en tornade dans chaque proposition d'outillage, plan de capacité et analyse build-vs-buy. Cela transforme des débats sur qui a la bonne intuition en accords sur quel paramètre aller mesurer — souvent via un pilote, dont la valeur peut elle-même être chiffrée (voir [valeur espérée de l'information parfaite](../expected-value-of-perfect-information/)).

## Pièges

- **Plages choisies pour flatter le résultat** : ±10 % sur chaque donnée d'entrée sans tenir compte de l'incertitude réelle. Les estimations de temps gagné méritent ±80 % ; les prix de licence, ±10 %.
- **L'analyse à un paramètre à la fois manque les interactions** — des paramètres corrélés (adoption et temps gagné) nécessitent une analyse à deux voies ou une [analyse de sensibilité probabiliste](../probabilistic-sensitivity-analysis/) complète.
- **Faire l'analyse et l'ignorer** : si la tornade indique que le dossier repose sur un seul chiffre incertain, l'étape suivante est la mesure, pas la validation.

## Sources

- Glossaire du York Health Economics Consortium : analyse de sensibilité déterministe. <https://yhec.co.uk/glossary/deterministic-sensitivity-analysis/>
- NICE, évaluations des technologies de santé : le manuel (PMG36). <https://www.nice.org.uk/process/pmg36>
