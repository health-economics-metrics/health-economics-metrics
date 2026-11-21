# Evaluacija kliničkog AI-ja

Osnovne statistike za evaluaciju kliničkog AI ili dijagnostičkog modela: osjetljivost, specifičnost, AUROC, prediktivne vrijednosti i broj potreban za probir. Središnja ekonomska lekcija: **odličan AUROC ne čini isplativo uvođenje** — vrijednost ovisi o radnoj točki, prevalenciji i onome što se događa nizvodno od svakog pozitivnog.

## Zašto je važno

Regulatori (FDA, MHRA) odobravaju klinički AI na **zaključanoj radnoj točki** — određenom paru osjetljivost/specifičnost (npr. prvi autonomni sustav za dijabetičku retinopatiju s FDA odobrenjem: osjetljivost 87,2 %, specifičnost 90,7 % u ključnom ispitivanju). Zdravstveni ekonomisti zatim postavljaju pitanje na koje metrike točnosti ne mogu odgovoriti: pri prevalenciji vaše populacije uvođenja, koliko košta svako otkrivanje i isplati li se djelovati na njega? Ekonomska evaluacija AI probira retinopatije (npj Digital Medicine 2024.) pokazala je da sama veća točnost nije jamčila isplativost kad su se uračunali troškovi upućivanja.

## Matematika

```
Osjetljivost  = TP / (TP + FN)        — od istinski pozitivnih, udio uhvaćenih
Specifičnost  = TN / (TN + FP)        — od istinski negativnih, udio razriješenih
AUROC         = P(model rangira nasumični pozitivni iznad nasumičnog negativnog)
                0.5 slučajno … 1.0 savršeno; neovisan o pragu — pa stoga
                nedovoljan za odluku o uvođenju

PPV = TP / (TP + FP)   ← ovisi o prevalenciji (Bayes); kolabira kad je rijetko
NPV = TN / (TN + FN)

NNS  ≈ 1 / (prevalencija × osjetljivost)       — probirano po pravom pronađenom slučaju
Trošak po pravom slučaju = trošak programa / TP — ekonomski rezultat
```

## Riješeni primjer

Isti model, dva okruženja — osjetljivost 90 %, specifičnost 93 %:

```
Specijalistička ambulanta (prevalencija 20%):
  PPV = (0.9×0.2)/(0.9×0.2 + 0.07×0.8) = 0.18/0.236 ≈ 76%  → 3 od 4 upozorenja stvarna

Primarna skrb (prevalencija 1%):
  PPV = (0.9×0.01)/(0.9×0.01 + 0.07×0.99) = 0.009/0.0783 ≈ 11.5%
  → 8 od 9 upozorenja lažno; obrada po £350 svaka:
  trošak po pravom slučaju = (0.009 + 0.0693) × 350 / 0.009 ≈ £3,045 po pronađenom slučaju
```

Identičan model, radikalno različita ekonomija — zato je evaluacija specifična za lokaciju regulatorna tema i zato je „naš model ima 0,95 AUROC” početak ekonomskog slučaja, a ne kraj. Vidi [ekonomiju probira](../ekonomija-probira/) za punu matematiku programa.

## Veza sa softverskim inženjerstvom

Za inženjere koji grade ili kupuju klinički AI: **isporučite matricu zabune pri prevalenciji uvođenja**, a ne samo ROC krivulju; **pustite da prag bude ekonomska odluka** — kompromis osjetljivost/specifičnost treba minimizirati očekivani trošak (propušteni slučajevi × trošak propusta naspram lažnih uzbuna × trošak obrade), a ne maksimizirati statistiku mjerila; i prepoznajte istu matematiku u vlastitim alatima — sustavi upozorenja, detektori anomalija i sigurnosni skeneri su dijagnostički testovi nad tokovima događaja niske prevalencije, sa zamorom od upozorenja kao [NNH-om](../broj-potreban-za-liječenje/). Ažuriranja modela koja pomiču radnu točku ponovno otvaraju ekonomiju (i regulatorno odobrenje — vidi [regulatornu evaluaciju AI-ja](../regulatorna-evaluacija-ai-ja/)).

## Zamke

- **Kupovina AUROC-a**: uspoređivanje modela po AUROC-u kad će raditi na jednom pragu — usporedite na radnoj točki.
- **PPV iz prevalencije ispitivanja naveden za stvarno uvođenje** — klasika; uvijek ponovno izračunajte pri lokalnoj prevalenciji.
- **Pristranost spektra**: modeli validirani na očitim slučajevima naspram zdravih kontrola precjenjuju se u dvosmislenoj sredini koja dominira u praksi.
- **Bez troškovanja nizvodnog puta**: svaki pozitivni pokreće obradu; model je intervencija na ekonomiju *cijelog puta*.

## Izvori

- Diagnostic accuracy measures reference. <https://www.medcalc.org/en/manual/roc-curves.php>
- Economic evaluation of AI retinopathy screening, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01032-9>
- Laupacis et al., NEJM 1988 (NNT foundations). <https://pubmed.ncbi.nlm.nih.gov/3374545/>
