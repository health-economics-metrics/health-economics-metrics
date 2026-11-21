# Metryks DORA

Metryks DORA (DevOps Research and Assessment) yw peswar musur a berfformyans delivrans medhelweyth — frekwens displegya, termyn kelgh rag chanjow, ratyo fyll chanj, ha termyn dasserghi displegyans fyllys — ha kefyth ynwedh fydhyansri avel pympes. Yns an skoodhyow delivrans an moyha gwiryes y'n maes, ha pub unn a'n jeves golok ekonomek yeghes dhirek.

## Perag yth yw posek

Dekvledhydhyow DORA a golm an metryks ma dhe berfformyans kowethyans. Klusterow derivas 2024: tymow **elit** a dhisplas orth erghyans (lies gweyth/dydh), kemmeres le ages unn dydh a gommit dhe broduksyon, fyllya ~5% a chanjow, ha dasserghi yn le ages unn eur; **isel** a dhisplas miyek po le, kemmeres misyow, fyllya ~40% a chanjow, ha dasserghi yn seythunyow. Rag system yeghes, nyns yw niverow IT gwag — hi a dhesyd fatell skonnyk a dheu talvos klinikel dhe glevyon ha pyth risk a'n jeves pub chanj.

## An Matematik

```
Frekwens displegya      = displegyansow produksyon / termyn
Termyn kelgh chanj      = t(displegya) − t(kommitya), kres-lies
Ratyo fyll chanj        = chanjow fyllys / oll chanjow × 100
Termyn dasserghi (MTTR) = t(dasserghys) − t(fyll), kres-lies
Fydhyansri              = sewyans SLO (kavadowder, latensi, ewnder)
```

Treylyansow ekonomek yeghes:

```
Termyn kelgh  → cost-of-delay.md: seythunyow y'n pibelyn × CoD (£ po QALY/seythun)
Ratyo fyll    → ratyo hwarvos drog chanj medhelweyth: CFR × kost rag hwarvos
Termyn dasserghi → drog downtime: MTTR × (gwrians klinikel kellys + ekspoziyans sawder)/eur
Fydhyansri    → diskont prow: servis orth kavadowder 99% a dhelivr ≈ 0.99
                a'y brow patromys — an analog medhelweyth a orholedh
```

## Ensampel gwrys

Tim medhelweyth lanwes-klav trest, kyns/wosa investyans ynjynnyans delivrans:

```
                    Kyns        Wosa
Displegyansow       miyek       seythunyek
Termyn kelgh        6 seythun   4 dydh
CFR                 25%         8%
MTTR                2 dydh      2 eur
```

An tim a dhelivr ~30 gwellheans/bledhen gans talvos kres rag gwellheans £4,000/seythun ([CoD](../kost-dalgh/)). Leha termyn kelgh a ~5.4 seythun a dennyas lanwes prow pub gwellheans war-rag: 30 × 5.4 × 4,000 ≈ **£648,000/bledhen** a dalvos delivrys skonnyk. Gwellheans CFR: 30 × (0.25 − 0.08) = ~5 le a chanjow fyllys/bledhen × £15,000 kost kres hwarvos (downtime system klinikel, dasserghi) = **£76,500/bledhen**. An investyans delivrans yw talvosys y'n keth arghans kepar ha pub ynkleth klinikel.

## Kolm gans ynjynnyans medhelweyth

Hemma *yw* an tu medhelweyth — an kolm a dal y dhyski yw an mapya bys-an-chons: metryks DORA yw metryks oberyes an klavji yn gwiskow dyffrans. Termyn kelgh ↔ [referral to treatment](../kemmyskyans-dhe-dretyans/); ratyo fyll chanj ↔ [ratyo dasvynnyans](../ratyo-dasvynnyans/) (ober a dhasbrenas); MTTR ↔ gorthyp brys; frekwens displegya ↔ tremena klinik. Fordhow gwellha a dreuswerth yn dew gyrha drefen bos an dew system rol ynnans dann strishyansow sawder. Merkewgh ynwedh kavans AI DORA 2025: degemeryans AI lemmyn a gesradh gans tremena uhella mes stabilder *gwettha* — ynkleth gans effeythusnans ha efektys a-denn, ow tesira an keth analys prow-nett a dhysk an repo ma (gwelewgh [produktivita displegyer AI](../produktivita-displegyer-gans-ai/)).

## Fowtys Kemmyn

- **Gwari metrik**: niverow displegya ynkressys gans relysow gwag; CFR leha dre na gowntya hotfixes avel fyll. Dyllewgh hwarvosow yn splann, kepar dell wra HTA dyllas pennow diwedh.
- **Tablow kroes-tim**: klusterow DORA a geskomparya praktisys, na ny yw tymow gans profilys risk dyffrans; tim systemow klinikel orth "uhel" a yll bos opimal le may "elit" a via didhewsys.
- **Ewnhe unn metrik**: spedyans heb CFR/fydhyansri yw an dyskerth tremena-ansefh — derivewgh pup-prys an peswar warbarth (yns [tabel kost-sewyans](../analys-kost-sewyans/), na ny yw skor).

## Fontynnow

- Hwilans ha derivasow DORA. <https://dora.dev/>
- Skoodhyow DORA 2024, berrdhyllans. <https://octopus.com/devops/metrics/dora-metrics/>
- DORA 2025 State of AI-assisted Software Development. <https://dora.dev/dora-report-2025/>
