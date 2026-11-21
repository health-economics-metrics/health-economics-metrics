# Populatsiooni omistatav osa (PAF)

PAF on osa haiguse või tulemuse koormusest populatsioonis, mis on omistatav konkreetsele riskiteguri mõjule — osa, mis kaoks, kui mõju täielikult kõrvaldataks. See muudab „see riskitegur kahekordistab sinu šansse“ populatsioonitaseme arvuks, mille ümber saab tellija tegelikult kavandada: mitu juhtumit ja kui palju kulu on antud mõju tegelikult väärt vastu võitlemiseks.

## Miks see on oluline

Levin võttis PAF-i kasutusele 1953. aastal, et vastata kitsale, konkreetsele küsimusele: kui keegi ei suitsetaks, kui palju kopsuvähki kaoks? Sama aritmeetika määrab nüüd riikliku ennetusplaneerimise mastaapi kõikjal alates tubaka- ja rasvumisstrateegiatest kuni WHO Global Burden of Disease uuringu riskitegurite pingeridadeni, sest suhteline risk üksi ei ütle mõju kohta midagi — riskitegur võib kahekordistada haruldase sündmuse šansse ja populatsiooni haigusekoormust vaevu liigutada või tõsta tavalise sündmuse šansse vaid veidi ja selgitada siiski tohutut osa juhtumitest. PAF teeb „riskitegur X on ohtlik“ asemel „riskiteguri X kõrvaldamine hoiaks aastas ära nii palju juhtumeid“, arvu, mida ennetusprogrammi ärijuhtum tegelikult vajab. Vaata [ennetusmajandust](../ennetusmajandus/), mis maksab selle arvu põhjal tegutsemine, kui see on olemas.

## Matemaatika

```
PAF = mõjutatute_levimus × (suhteline_risk − 1) / (1 + mõjutatute_levimus × (suhteline_risk − 1))

mõjutatute_levimus = riskiteguri mõju all oleva populatsiooni osa (0–1)
suhteline_risk     = tulemuse risk mõjutatutel vs mittemõjutatutel (nt 2,5 = 2,5×)

Omistatavad juhtumid = juhtumid_kokku × PAF
```

PAF kasvab nii mõju levimuse kui ka suhtelise riskiga — mõõdukalt kõrgenenud suhteline risk (ütleme 1,5×), mis on seotud väga levinud mõjuga, võib anda suurema PAF-i kui dramaatiline suhteline risk (ütleme 5×), mis on seotud haruldasega. See on kogu põhjus, miks see eksisteerib eraldi arvuna suhtelise riski kõrval.

## Lahendatud näide

Riskitegur esineb 30%-l populatsioonist (`mõjutatute_levimus = 0,3`) ja tõstab tulemuse riski 2,5-kordseks (`suhteline_risk = 2,5`):

```
PAF = 0,3 × (2,5 − 1) / (1 + 0,3 × (2,5 − 1))
    = 0,3 × 1,5 / (1 + 0,3 × 1,5)
    = 0,45 / 1,45
    ≈ 0,3103 (31,0%)

1 000 juhtumiga aastas populatsioonis:
Omistatavad juhtumid = 1 000 × 0,3103 ≈ 310 juhtumit aastas
```

Veidi alla kolmandiku selle tulemuse aastasest koormusest on omistatav mõjule — selle täielik kõrvaldamine (teoreetiline lagi; ükski tegelik sekkumine ei saavuta 100% mõju kõrvaldamist) hoiaks igal aastal ära ligikaudu 310 juhtumit 1 000-st.

## Seos tarkvaraarendusega

PAF on küsimuse „milline osa meie intsidentide mahust on omistatav sellele ühele algpõhjusele?“ epidemioloogiline versioon — sama tüüpi küsimus, mida meeskonnad esitavad, kui nad mõõdavad konkreetset kasutuselevõttude või sõltuvuste klassi tootmisintsidentide kogumi suhtes, selle asemel et käsitada iga intsidenti ühtmoodi parandamist väärivana. Algpõhjuse kategooria, mis esineb suures osas kasutuselevõttudest ja millel on intsidendi põhjustamise suhteline risk vaid mõõdukas, võib edestada haruldast kõrge suhtelise riskiga kategooriat selle poolest, kuhu insenerivaeva esmalt suunata — täpselt PAF-i tähelepanek, ümber tõlgitud.

## Lõksud

- **PAF-ide liitmine üle riskitegurite**: mitme sama tulemust mõjutava teguri PAF-id ei liitu 100%-ks — kokku võivad need seda ületada, sest tegurid mõjutavad üksteist ja jagavad põhjuslikke teid. Käsitle iga PAF-i kui „kui ainult see tegur kõrvaldataks“, mitte kunagi kogu riski jaotusena.
- **Suhtelise riski ülekandmine populatsioonide vahel**: ühes populatsioonis hinnatud suhteline risk (erinev baasmõju levimus, erinevad segavad tegurid) annab eksitava PAF-i, kui seda rakendada teise populatsiooni mõju levimusele.
- **PAF-i segiajamine omistatava riskiga mõjutatutel**: PAF on populatsioonitasemel ja sõltub mõju levimusest; omistatav risk mõjutatutel on indiviiditasemel ega sõltu. Nad vastavad erinevatele küsimustele — ära too üht teise küsimusele vastamiseks.

## Allikad

- Levin ML. „The occurrence of lung cancer in man.“ Acta Unio Int Contra Cancrum. 1953;9(3):531-41.
- Rockhill B, Newman B, Weinberg C. „Use and misuse of population attributable fractions.“ Am J Public Health. 1998;88(1):15-9.
