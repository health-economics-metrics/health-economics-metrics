# Actualisation et Préférence Temporelle

L'actualisation convertit les coûts et bénéfices futurs en valeurs actuelles, car un bénéfice aujourd'hui vaut plus que le même bénéfice dans cinq ans.

## Pourquoi c'est important

Chaque évaluation d'économie de la santé et chaque dossier de décision sérieux du secteur public actualise les flux pluriannuels. Le Green Book de HM Treasury britannique impose un taux de préférence temporelle sociale annuel de 3,5 % ; le cas de référence de NICE actualise à la fois les coûts et les effets de santé à 3,5 % par an (avec un taux hors référence de 1,5 % pour les thérapies proches de la guérison avec des bénéfices sur plus de 30 ans). Si le dossier de décision de votre logiciel revendique « 5 millions £ d'économies sur 10 ans », un relecteur financier demandera immédiatement le chiffre actualisé.

## Le calcul

Valeur actuelle d'un montant futur :

```
VA = VF / (1 + r)^t

VA = valeur actuelle
VF = valeur future en année t
r  = taux d'actualisation (NICE/Green Book : 0,035)
t  = années à partir de maintenant
```

Pour un bénéfice annuel constant B sur n années (une rente) :

```
VA = B × [1 − (1 + r)^(−n)] / r
```

## Exemple résolu

Votre logiciel économise à un trust du NHS 100 000 £ par an pendant 5 ans, à partir d'un an après la mise en service.

Total non actualisé : 500 000 £.

Actualisé à 3,5 % :

```
Année 1 : 100 000 / 1,035^1 = 96 618 £
Année 2 : 100 000 / 1,035^2 = 93 351 £
Année 3 : 100 000 / 1,035^3 = 90 194 £
Année 4 : 100 000 / 1,035^4 = 87 144 £
Année 5 : 100 000 / 1,035^5 = 84 197 £

VA totale ≈ 451 505 £
```

Le titre honnête est d'environ 451 000 £, à peu près 10 % de moins que la somme naïve. Supposez maintenant que la livraison glisse d'un an : chaque terme se décale d'un an plus tard, et la VA tombe à environ 436 000 £ — la vue actualisation du [coût de retard](../coût-de-retard/).

## Lien avec l'ingénierie logicielle

- **Le remboursement de la dette technique et les migrations de plateforme** promettent des flux de bénéfices des années plus tard ; actualisez-les avant de les comparer avec un travail qui se rembourse ce trimestre.
- **Coûts en amont, bénéfices en aval** est la forme standard d'une migration. L'actualisation pénalise cette forme, correctement : elle tarife la valeur temporelle sans risque d'engager de la capacité maintenant pour une valeur plus tard.
- **Les allégations « d'économies en année 5 »** méritent le scepticisme deux fois — elles sont à la fois fortement actualisées et hautement incertaines (voir [analyse de sensibilité](../analyse-de-sensibilité/)).

## Pièges

- **Actualiser les coûts mais pas les bénéfices** (ou l'inverse) — le cas de référence actualise les deux, au même taux.
- **Utiliser un taux commercial (8-12 %) dans un dossier du secteur public**, ou 3,5 % dans un dossier soutenu par du capital-risque. Adaptez le taux au décideur.
- **Confondre actualisation et inflation.** L'actualisation s'applique à des valeurs *réelles* (ajustées de l'inflation) ; ne faites pas les deux implicitement.

## Sources

- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- Guide complémentaire d'actualisation du Green Book de HM Treasury. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-discounting>
