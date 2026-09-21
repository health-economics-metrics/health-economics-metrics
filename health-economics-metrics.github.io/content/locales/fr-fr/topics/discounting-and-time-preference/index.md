# Actualisation et préférence temporelle

L'actualisation convertit des coûts et bénéfices futurs en valeurs présentes, parce qu'un bénéfice aujourd'hui vaut plus que le même bénéfice dans cinq ans.

## Pourquoi c'est important

Toute évaluation d'économie de la santé et tout dossier économique sérieux du secteur public actualise les flux pluriannuels. Le Green Book de HM Treasury (Royaume-Uni) impose un taux de préférence temporelle sociale de 3,5 % par an ; la reference case du NICE actualise à la fois les coûts et les effets sur la santé à 3,5 % par an (avec un taux hors reference case de 1,5 % pour les thérapies quasi curatives dont les bénéfices s'étendent sur 30 ans ou plus). Si votre dossier économique logiciel avance « £5 millions d'économies sur 10 ans », un contrôleur financier demandera immédiatement le chiffre actualisé.

## Le calcul

Valeur présente d'un montant futur :

```
VP = VF / (1 + r)^t

VP = valeur présente
VF = valeur future en année t
r  = taux d'actualisation (NICE/Green Book : 0,035)
t  = nombre d'années à partir de maintenant
```

Pour un bénéfice annuel constant B sur n années (une rente) :

```
VP = B × [1 − (1 + r)^(−n)] / r
```

## Exemple chiffré

Votre logiciel fait économiser à un trust du NHS £100 000 par an pendant 5 ans, à partir d'un an après la mise en service.

Total non actualisé : £500 000.

Actualisé à 3,5 % :

```
Année 1 : 100 000 / 1,035^1 = £96 618
Année 2 : 100 000 / 1,035^2 = £93 351
Année 3 : 100 000 / 1,035^3 = £90 194
Année 4 : 100 000 / 1,035^4 = £87 144
Année 5 : 100 000 / 1,035^5 = £84 197

VP totale ≈ £451 505
```

Le chiffre honnête à mettre en avant est d'environ £451 000, soit environ 10 % de moins que la somme naïve. Supposons maintenant que la livraison glisse d'un an : chaque terme se décale d'un an, et la VP tombe à environ £436 000 — la vision par l'actualisation du [coût du retard](../cost-of-delay/).

## Lien avec l'ingénierie logicielle

- **Le remboursement de la dette technique et les migrations de plateforme** promettent des flux de bénéfices à plusieurs années — actualisez-les avant de les comparer à un travail qui se rembourse ce trimestre.
- **Coûts en début de période, bénéfices en fin de période** est la forme standard d'une migration. L'actualisation pénalise cette forme, à juste titre : elle chiffre la valeur-temps sans risque d'engager de la capacité maintenant pour une valeur plus tard.
- **Les promesses d'« économies en année 5 »** méritent un scepticisme redoublé — elles sont à la fois fortement actualisées et hautement incertaines (voir [analyse de sensibilité](../sensitivity-analysis/)).

## Pièges

- **Actualiser les coûts mais pas les bénéfices** (ou l'inverse) — la reference case actualise les deux, au même taux.
- **Utiliser un taux commercial (8–12 %) dans un dossier du secteur public**, ou 3,5 % dans un dossier financé par du capital-risque. Adaptez le taux au décideur.
- **Confondre actualisation et inflation.** L'actualisation s'applique aux valeurs *réelles* (corrigées de l'inflation) ; ne faites pas les deux implicitement.

## Sources

- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- HM Treasury Green Book, discounting supplementary guidance. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-discounting>
