# Klinikai MI értékelése

Egy klinikai MI- vagy diagnosztikai modell értékelésének alapstatisztikái: szenzitivitás, specificitás, AUROC, prediktív értékek és szűrendő személyek száma. A központi gazdasági tanulság: **egy nagyszerű AUROC nem tesz költséghatékony bevezetést** — az érték a működési ponttól, a prevalenciától és attól függ, mi történik minden pozitív eredmény után.

## Miért fontos

A szabályozók (FDA, MHRA) a klinikai MI-t **rögzített működési ponton** engedélyezik — egy konkrét szenzitivitás/specificitás párral (pl. az első FDA-engedélyezett autonóm diabéteszes retinopátia rendszer: szenzitivitás 87,2%, specificitás 90,7% a kulcsfontosságú vizsgálatában). Az egészséggazdászok ezután azt a kérdést teszik fel, amelyre a pontossági mutatók nem tudnak válaszolni: a bevezetési populációd prevalenciáján mibe kerül az egyes észlelés, és megéri-e cselekedni rá? Egy retinopátiaszűrő MI gazdasági értékelése (npj Digital Medicine 2024) megmutatta, hogy a magasabb pontosság önmagában nem garantált költséghatékonyságot, amint a beutalási költségeket beszámították.

## A matematika

```
Sensitivity = TP / (TP + FN)        — of the truly positive, share caught
Specificity = TN / (TN + FP)        — of the truly negative, share cleared
AUROC       = P(model ranks a random positive above a random negative)
              0.5 chance … 1.0 perfect; threshold-independent — and therefore
              deployment-decision-insufficient

PPV = TP / (TP + FP)   ← prevalence-dependent (Bayes); collapses when rare
NPV = TN / (TN + FN)

NNS  ≈ 1 / (prevalence × sensitivity)       — screened per true case found
Cost per true case = programme cost / TP      — the economic bottom line
```

## Kidolgozott példa

Ugyanaz a modell, két környezetben — szenzitivitás 90%, specificitás 93%:

```
Specialist clinic (prevalence 20%):
  PPV = (0.9×0.2)/(0.9×0.2 + 0.07×0.8) = 0.18/0.236 ≈ 76%  → 3 in 4 alerts real

Primary care (prevalence 1%):
  PPV = (0.9×0.01)/(0.9×0.01 + 0.07×0.99) = 0.009/0.0783 ≈ 11.5%
  → 8 in 9 alerts false; workup at £350 each:
  cost per true case = (0.009 + 0.0693) × 350 / 0.009 ≈ £3,045 per case found
```

Azonos modell, gyökeresen eltérő gazdaságtan — ezért téma a helyspecifikus értékelés a szabályozásban, és ezért az „a modellünk AUROC-ja 0,95" egy gazdasági eset kezdete, nem a vége. A teljes programmatematikához lásd [a szűrés gazdaságtana](../a-szűrés-gazdaságtana/).

## Kapcsolat a szoftverfejlesztéssel

Klinikai MI-t építő vagy vásároló mérnököknek: **a tévesztési mátrixot a bevezetési prevalencián szállítsd**, ne csak az ROC-görbét; **legyen a küszöb gazdasági döntés** — a szenzitivitás/specificitás kompromisszumnak a várható költséget kell minimalizálnia (elmulasztott esetek × mulasztás költsége vs téves riasztások × kivizsgálási költség), nem egy viszonyítási statisztikát maximalizálnia; és ismerd fel ugyanezt a matematikát a saját eszközeidben — a riasztórendszerek, az anomáliadetektorok és a biztonsági szkennerek diagnosztikai tesztek alacsony prevalenciájú eseményfolyamokon, a riasztási fáradtság pedig az [NNH](../kezelendő-betegek-száma/). A működési pontot eltoló modellfrissítések újranyitják a gazdaságtant (és a szabályozói engedélyt — lásd [MI szabályozási értékelése](../mi-szabályozási-értékelése/)).

## Buktatók

- **AUROC-vásárlás**: modellek összehasonlítása AUROC-n, amikor egy küszöbön fognak futni — hasonlíts a működési ponton.
- **A vizsgálati prevalencián számított PPV idézése valós bevezetésre** — a klasszikus; mindig számítsd újra a helyi prevalencián.
- **Spektrumtorzítás**: az nyilvánvaló esetekre vs egészséges kontrollokra validált modellek túlteljesítenek a kétértelmű középmezőnyön, amely a gyakorlatot dominálja.
- **Nincs lefelé irányuló útvonal költségezése**: minden pozitív kivizsgálást vált ki; a modell beavatkozás a *teljes útvonal* gazdaságtanára.

## Források

- Diagnostic accuracy measures reference. <https://www.medcalc.org/en/manual/roc-curves.php>
- Economic evaluation of AI retinopathy screening, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01032-9>
- Laupacis et al., NEJM 1988 (NNT foundations). <https://pubmed.ncbi.nlm.nih.gov/3374545/>
