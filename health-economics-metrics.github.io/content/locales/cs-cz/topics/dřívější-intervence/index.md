# Dřívější intervence

Pokud uvolněná kapacita umožní praktikovi dříve projít diagnostické nedodělky, pacienti přejdou z čekací listiny k aktivní léčbě rychleji – a léčit dříve je obvykle levnější a lepší než léčit později, protože neléčené stavy progredují.

## Proč na tom záleží

Progrese nemoci je složený úrok zdravotní péče. Pacient čekající s neléčeným stavem není v ustáleném stavu: nádory mění stadium, srdeční selhání dekompenzuje, mírná deprese se stává těžkou. Dřívější zásah proto přináší dvojí dividendu – **lepší výsledky** (více QALY, léčeno z lepšího výchozího stavu) a často **nižší náklady na léčbu** (léčba v raném stadiu je méně intenzivní než pozdní záchrana). Tento mechanismus povyšuje „rychlejší cesty“ z provozní hezkosti na klinický a ekonomický imperativ – a je hlubokým důvodem, proč se na klinický software vztahují [náklady zpoždění](../náklady-zpoždění/).

## Matematika

```
Value of earlier intervention (per patient) =
    [Cost_late − Cost_early]                       (treatment-cost offset)
  + [QALYs_early − QALYs_late] × λ                 (health gain × threshold)
  × P(progression during the delay)                 (probability weighting)
```

Pravděpodobnostní vážení je zásadní: ne každý čekající pacient progreduje. Modelujte pravděpodobnost přechodu za jednotku času (z dat o přirozeném průběhu), nikoli nejhorší případ. Pak diskontujte: náklady odvrácené o roky později mají dnes menší hodnotu ([diskontování](../diskontování-a-časová-preference/)) – a všimněte si, že většina dřívějších intervencí je spíše nákladově *efektivní* než nákladově *úsporná* (viz [ekonomika prevence](../ekonomika-prevence/)).

## Řešený příklad

Nedodělek screeningu diabetické retinopatie: 4 000 pacientů, 6 měsíců pozadu. Hodnocení podporované AI ztrojnásobí propustnost a vyčistí frontu za 8 týdnů. Přirozený průběh: ~2 % čekajících pacientů ročně progreduje do stadií ohrožujících zrak, dokud nejsou přezkoumáni.

```
Progression events avoided by ~4 months' acceleration:
  4,000 × 2% × (4/12) ≈ 27 patients

Per avoided progression:
  treatment offset (intravitreal therapy vs laser) ≈ £4,000
  QALY gain (vision preserved) ≈ 0.8 QALYs × £20,000 = £16,000

Value ≈ 27 × (4,000 + 16,000) ≈ £540,000 — from one backlog cleared once,
before counting the permanent throughput gain.
```

## Souvislost se softwarovým inženýrstvím

Dva přenosy. Zaprvé zřejmý: software urychlující diagnostické a léčebné cesty (triáž, hodnocení AI, směrování výsledků) se zpeněžuje právě tímto modelem – a model říká, kterou cestu urychlit: tu s nejstrmější křivkou progrese, nikoli s nejdelší frontou. Zadruhé inženýrské zrcadlo: **i vady progredují**. Chyba zachycená při návrhu stojí rozhovor; v produkci stojí incident; křivka nákladů „shift-left“ (10–100× podle fáze) je model progrese a poctivá verze nese stejné upozornění – včasné odhalení je obvykle nákladově efektivní, nikoli peníze zadarmo, protože revize a testy mají skutečné náklady a většina zachycených problémů by nikdy neprogredovala.

## Úskalí

- **Předpoklad nejhorší progrese pro každého** – pravděpodobnostní vážení je rozdíl mezi analýzou a advokacií.
- **Zkreslení předstihem (lead-time bias)**: nalezení nemoci dříve bez změny výsledků vypadá jako přínos, ale není; tvrzením je dřívější *účinná intervence*, nikoli jen dřívější detekce (viz [ekonomika screeningu](../ekonomika-screeningu/)).
- **Dvojí započtení** s tvrzeními o čekací listině a RTT postavenými na témže urychlení – jedno zlepšení cesty, jedna sada přínosů, alokovaná jednou.

## Zdroje

- Cohen JT, Neumann PJ, Weinstein MC. "Does preventive care save money?" NEJM 2008. <https://www.nejm.org/doi/full/10.1056/NEJMp0708558>
- NHS England, diabetic eye screening programme. <https://www.gov.uk/topic/population-screening-programmes/diabetic-eye>
