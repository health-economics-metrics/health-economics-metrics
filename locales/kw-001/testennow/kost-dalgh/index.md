# Kost Dalgh (CoD)

Kost Dalgh yw an talvos economek kellys rag pub unnys termyn may *na* veu delivrys nodhow, produkt po servis. Yw an unn pons krevha ynter musurow delivrans medhelweyth hag ekonomek yeghes: hi a dreyl "ni a dhelivras diwettha" dhe vona — po dhe QALYs.

## Perag yth yw posek

Rewl Reinertsen: "Mar na vusurowgh marnas unn tra, musurewgh Kost Dalgh." An moyha kowethyansow a woer pyth a gost towl mes na ny woer pyth a gost mis a dhalgh, ytho a wellha budjettow ha kolli talvos-termyn. Rag medhelweyth yeghes an gwodhow yw lyterel: pub seythun may dhalgh gwellhe fordh, klevyon a worta hirra yn stat yeghes gwettha. CoD yw an framya matematek an krevha dhe rann-perghenogyon NHS drefen bos hi ow prisya an *absens* a'th medhelweyth.

## An Matematik

```
CoD = prow rag unnys termyn kellys pan na veu delivrys   (£/seythun po QALY/seythun)

Kolli dalgh oll = CoD × hys an dalgh

Rag rankya, gwelewgh wsjf-and-cd3.md: CD3 = CoD / hys.
```

Rag medhelweyth klinikel, denomynewgh yn yeghes kepar ha mona:

```
CoD_yeghes = klevyon a'n tuch pub seythun × gwayn QALY rag klav
CoD_mona   = CoD_yeghes × λ (threshold parys-dhe-bayi, £20k–30k/QALY)
             + sawyansow oberyes pub seythun kellys
```

## Ensampel gwrys

**Oberyes**: medhelweyth a sav £200 rag pub klav war fordh; trest a dhevnydh 50 klav a'n par ma/seythun.

```
CoD = 200 × 50 = £10,000/seythun
Dalgh prenyans 10-seythun a gost 200 × 50 × 10 = £100,000 a wast hwithys.
```

**Klinikel**: gwellheans triage a dhiwor 5 seythun a worta (utility 0.68 → 0.80 skonnyk) rag 100 klav/seythun:

```
Gwayn QALY rag klav = (5/52) × 0.12 ≈ 0.0115
CoD_yeghes = 100 × 0.0115 = 1.15 QALY/seythun
CoD_mona   = 1.15 × £20,000 ≈ £23,000/seythun a dalvos yeghes
```

Dalgh displegyans 6-mis a "gosty" ~30 QALY — an argyans a dhre-framya slip go-live IT avel hwarvos klinikel. (Skoodhyer rag skala: dyskudhans Maersk Black Swan Farming a gavas nodhow unnik gans CoD ≈ $200k/seythun a veu gortys 38 seythun.)

## Kolm gans ynjynnyans medhelweyth

CoD yw an metrik a wra [termyn kelgh DORA](../metryks-dora/) ha [effeythusnans lanwes](../metryks-lanwes/) redyadow yn arghans: termyn kelgh × CoD = mona (po yeghes) lowsys yn rewlyow. Devnydhyow:

- **Rankya**: rankewgh ober dre CoD/hys ([WSJF/CD3](../wsjf-ha-cd3/)) yn le an rann-perghenek uhella y lev.
- **Ekonomek proses**: kadans delivrans 2-seythun a'n jeves kost dalgh ragwelys a ~1 seythun × CoD rag nodhow erbynn delivrans kesys — prisewgh an bagas.
- **Provians**: kelghyow provians NHS a 6–18 mis a'n jeves CoD; y dhiskwedhes a chanj an kewsel a dhefredh (gwelewgh [analys efekt budjet](../analys-efekt-budjet/) rag an kowdhrewl kyfarwodhyans).

## Fowtys Kemmyn

- **Tybya CoD linear**: nebes ober a'n jeves talvos furvys dydhyow-ha-dhedhek (dydhyow rewlyek — CoD heb worfenn wosa an dydh, nul kyns) po talvos ow tefyn (fenestri kensa-gwyth). Klassewgh an profil hast kyns multiplya.
- **CoD war worrow na vynn nagonan**: dalgh a gost yn unnik mar kwra an dra talvos; skrap dalghes yw rydh.
- **Kowntya dalgh ha diskontya dew-weyth**: [diskontya](../diskontya-ha-preferans-termyn/) a bris termyn seulabrys war horizonow aml-bledhen; CoD yw an versyon oberyes y'n horizon. Devnydhewgh CoD rag seythunyow/misyow, shift NPV rag bledhydhyow.

## Fontynnow

- Reinertsen DG, *The Principles of Product Development Flow*.
- Black Swan Farming, Cost of Delay. <https://blackswanfarming.com/cost-of-delay/>
- Gwelyansow kost dalgh. <https://en.wikipedia.org/wiki/Cost_of_delay>
