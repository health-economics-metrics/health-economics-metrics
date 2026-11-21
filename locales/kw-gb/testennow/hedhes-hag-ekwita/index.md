# Hedhes hag Ekwita

RE-AIM — Reach (Hedhes), Effectiveness (Effeythusnans), Adoption (Degemeryans), Implementation (Gweythresans), Maintenance (Synsyans) — yw an framya savonek rag jujya efekt *pobel* ynterventyans. Y fatematik kresel: **efekt yeghes poblek ≈ hedhes × effeythusnans**. Ostalow digidel a ynkress dimensyon ekwita: an ranndir digidel a wra hedhes anhevel yn system, ha delivrans-digidel-kynsa a yll ledra an bylyow yeghes a vynn degea.

## Perag yth yw posek

Dasvewyansow system a dhevnydh RE-AIM orth mHealth a gav sinans kewar: Hedhes ha Degemeryans krev, **Effeythusnans ha Synsyans gwann** — appys a skoetha yn hwarthus ha dhe lowr kuf. Rag servis yeghes kenedhlek, hemma a styr y hyll produkt splann rag pub devnydhyer bos investyans pobel ankosk, hag ynwedh: ostalow keswar effeythus a hedhas milyow a yll ober moy ages unn splann a hedhas kantow (gwelewgh matematik [HALE](../gwaytyans-bewnans-addasys-yeghes/)). Ekwita nyns yw harth syns mes drivyer talvos: exklusyon digidel a sew oos, dyghtyans, anabalder ha yeth — an pobel ha'n moyha a'n re a'n beras trethys — rag henn an devnydhyer marginal exklusys a'th eus fenowgh potensyal prow *a-ugh an kres*. Rag musur statistek furvel a anyskaleth yeghes sosyoekonomek, gwelewgh [Menegva Kuntellyans](../menegva-kuntellyans/).

## An Matematik

```
Efekt pobel ≈ hedhes × effeythusnans
  hedhes         = kemmerysi / pobel gwiw (gwelewgh activation-and-uptake.md)
  effeythusnans  = efekt gwir a-garevisys dhe'n kemmerysi (pwyssys herwydh synsyans —
                   gwelewgh retention-and-churn.md)

Versyon strata-ekwita:
  efekt_bagas_g = hedhes_g × effeythusnans_g, derivys rag pub kwintil
  dyghtyans / bann oos / bagas yeth
  fowt ekwita = efekt_kwintil uhella − efekt_kwintil isella

Kost-effeythusnans dasparthel: gorra pwysyow ekwita dhe QALYs herwydh
bagas an dhegemerer — QALY dhe'n re wettha a dal moy (astydhyans HTA
a vynn bos kemmyn).
```

## Ensampel gwrys

Program ragweres diabetes digidel, derivys yn dyw fordh:

```
Kuntelles: hedhes 12%, efekt 0.02 QALY/kemmerer → 0.0024 QALY/den gwiw

Strata (kwintilyow dyghtyans):
  Q1 (an lyha dyghtys): hedhes 22%, efekt 0.02 → 0.0044
  Q5 (an moyha dyghtys): hedhes 4%,  efekt 0.025 → 0.0010

An program a re 4.4× moy yeghes dhe'n lyha dyghtys —
hogen efekt Q5 rag kemmerer yw UHELLA (moy a le dhe wellhe). Brys
digidel-gweresys (kosk-pewas dre-deleffon + kevar kemmynieth) a gostya 20%
moy rag kemmerer Q5 hag a dhrehev hedhes Q5 dhe 12% a dri-dhyblans efekt Q5
ha gwellha an kuntelles — an investyans ekwita ESA an investyans effeythusnans
omma.
```

## Kolm gans ynjynnyans medhelweyth

Hedhes yw yn meur unn gwrians ynjynnyans: gorfenys dewis ha OS, tybyansow lydnow bann, skoodhyans yeth, konformita hedhadewder (WCAG), harthow gwiriensow hanow, ha dyllans yn-stor-app yn unnik pub unn a dorr pobel dhort an dynnerydh — fenowgh yn anwelys, drefen na wra devnydhyoryon exklusys omdhiskwedhes yn analytics. Arfer ynjynnyans a dhrehev ekwita: musurewgh an *dynnerydh* (ynstrumentewgh an pobel gwiw, na ny yw devnydhyoryon yn unnik); budjetewgh performya rag devisow kosk ha kevrenn wann; delivrewgh fordhow digidel-gweresys (pellgewsel, SMS, kiosk) avel fordhow kresel, na avel kanalow gwarth; ha strata-ewgh pub musur dashboard herwydh an dimensyonow ekwita — kres heb strata yw an le may kudh anekwita ([kemmeres GDS](../metryks-servis-gds/) a dhelergh an keth gwarnyans).

## Fowtys Kemmyn

- **Effeythusnans derivys war an re a gowlwras, efekt klamys war an pobel** — termow hedhes gesys yn tawesek.
- **Ekwita avel awdit wosa-dro** na avel kevran dhiserghi; adhevyns hedhes yw meur ankosthek ages y dhiserghi dhedhi.
- **Ankov synsyans**: an dimensyon wannha a mHealth yn RE-AIM — klaymow efekt a-ugh horizon termyn an dustuni.
- **Sawyansow kanel digidel-yn-unnik** a dreus kostow dhe'n devnydhyoryon exklusys ha gweythysi a-rag (gwelewgh [metryks servis GDS](../metryks-servis-gds/)).

## Fontynnow

- RE-AIM framework. <https://re-aim.org/>
- RE-AIM systematic reviews of mHealth. <https://pmc.ncbi.nlm.nih.gov/articles/PMC12358350/>
- CDC, PRISM/RE-AIM for equity planning. <https://www.cdc.gov/pcd/issues/2018/17_0271.htm>
