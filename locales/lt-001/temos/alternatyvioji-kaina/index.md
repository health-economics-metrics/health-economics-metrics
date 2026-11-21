# Alternatyvioji kaina

Alternatyvioji kaina – tai geriausios alternatyvos, kurios atsisakote įsipareigodami panaudoti išteklių, vertė. Sveikatos sistemoje su fiksuotu biudžetu 1 mln. £ išleidimas vienam dalykui reiškia 1 mln. £ sveikatos, *nesukurtos* kitur.

## Kodėl tai svarbu

Alternatyvioji kaina yra giliausia sveikatos ekonomikos idėja ir ta, kurią programinės įrangos inžinieriai dažniausiai praleidžia. Sveikatos biudžetai bet kuriais metais yra fiksuoti, todėl nauja technologija niekada nefinansuojama iš „papildomų“ pinigų – ji kažką išstumia. Klausimas, kurį mokėtojas iš tikrųjų užduoda, nėra „ar tai gerai?“, o „ar tai geriau už tai, ką tie patys pinigai šiuo metu perka?“

Todėl apskritai egzistuoja ekonominio efektyvumo slenksčiai: slenkstis yra sveikatos, kurią pinigai perka dabartinės sistemos ribose, įvertis. Žr. [norimo mokėti slenksčiai](../pasirengimo-mokėti-slenksčiai/).

## Matematika

Vienos formulės nėra; alternatyvioji kaina yra palyginimo disciplina:

```
Opportunity cost of choosing A = value of best forgone alternative B
Net gain from A = value(A) − value(B)
```

Empirinis etalonas: Claxton et al. (2015) įvertino, kad NHS ribose sukuria vieną QALY maždaug už **13 000 £**. Taigi 13 000 £, išleisti technologijai, kuri sukuria mažiau nei vieną QALY, daro tautą *mažiau* sveiką, net jei technologija „veikia“.

## Išspręstas pavyzdys

NHS trestos pertvarkos biudžetas gali finansuoti lygiai vieną iš:

- **A parinktis**: el. darbo grafikų programinė įranga – sutaupo 400 000 £ per metus agentūrinio personalo išlaidų.
- **B parinktis**: išrašymo koordinavimo programinė įranga – sutaupo 2 000 lovadienių per metus. Esant ribinei maždaug 150 £ kainai už faktiškai atlaisvintą lovadienį, tai 300 000 £ per metus, plius ankstesnis gydymas laukiantiems pacientams.

A finansavimas reiškia B atsisakymą. A alternatyvioji kaina yra B 300 000 £ + paciento nauda; *grynoji* A bylos vertė yra tik skirtumas, o ne A antraštinės 400 000 £. Bet kuri verslo byla, lyginanti pasiūlymą su „nieko nedaryti“, o ne su geriausia alternatyva, pervertina savo vertę.

## Ryšys su programinės įrangos inžinerija

Inžinerijos pajėgumai taip pat yra fiksuotas biudžetas – kelrodžio vietos, o ne svarai. Platformos komanda, finansuojanti įrankį A, sutaupantį inžinieriaus valandas po 500 £/val., kai įrankis B tą patį pasiekia po 200 £/val., naikina pajėgumus, lygiai taip, kaip sveikatos sistema, finansuojanti 40 000 £/QALY vaistą, išstumia 13 000 £/QALY priežiūrą. Disciplina perkeliama tiesiogiai:

- Visada įvardykite palyginamąjį („palyginti su kuo?“).
- Inžinieriaus laiką vertinkite tuo, ką jis kitu atveju sukurtų, o ne vien atlyginimu.
- „Dar turime biudžeto“ traktuokite kaip analizės pradžią, o ne pabaigą.

## Spąstai

- **Lyginimas su nieku.** Teisingas palyginamasis yra kitas geriausias pinigų panaudojimas, kuris retai yra „nieko nedaryti“.
- **Prielaida, kad sutaupytas laikas turi nulinę alternatyviąją kainą.** Sutaupytas laikas vertingas tik jei perskirstytas kam nors vertingam – žr. [pinigus atlaisvinančios ir neatlaisvinančios santaupos](../pinigus-atlaisvinančios-ir-neatlaisvinančios-santaupos/).
- **Išstūmimo ignoravimas.** „Biudžetas išsiplės“ beveik niekada netiesa nacionalinėje sveikatos tarnyboje tais pačiais metais.
- **Ignoravimas, kuris metodas vertina išstumtą išteklių.** Būtent prarastam produktyvumui – dėl ligos, negalios ar išeinančio darbuotojo – žr. [žmogiškojo kapitalo metodas ir trinties kaštų metodas](../žmogiškojo-kapitalo-metodas-ir-trinties-kaštų-metodas/), produktyvumo sąnaudoms specifinė šios idėjos versija.

## Šaltiniai

- Claxton K, et al. "Methods for the estimation of the NICE cost effectiveness threshold." Health Technology Assessment 2015;19(14). <https://www.journalslibrary.nihr.ac.uk/hta/hta19140/>
- York Health Economics Consortium glossary. <https://yhec.co.uk/glossary/opportunity-cost/>
