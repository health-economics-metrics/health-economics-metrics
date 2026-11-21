# Produktivita Displegyer gans AI

Musurow a'n pyth a wra skoodhyans kodya gans AI dhe'n displegyans ynjynnyans: ratyow degemeryans an styryansow, spedyansow previys kontrolys, tremena PR, ha synsyans kod. An skoedhyans yw gwir kesskodyek — hag yma hedna ow gul ensampel kowl a'n dhiffrans yntra effeythusnans ha effeythus yn bys, a veu gwrys a'y wul dhe'n ekonomek yeghes.

## Perag yth yw posek

An dew studhyans kontrolys an moyha menegys a dhiskwedh war an lavar kontrari:

- **Peng et al. 2023 (RCT GitHub Copilot)**: displegyoryon a gowlwrug tasg servyer HTTP nowydh **55.8% yn tooth** gans Copilot (1h11m erbynn 2h41m, n=95).
- **RCT METR 2025**: displegyoryon skentel opyn-fenten ow ’oberi war *aga repoyow gwrys aga honan* o **19% lent** gans ark AI a dhalleth 2025 (16 displegyer, 246 tasg) — hag y *grysis* y fowns 20% yn tooth.

Dew studhyans da yw. An kontrari yw an kavans: effeythusnans tasg nowydh na dremena dhe effeythus kodlyver gwrys; ha prow *gweladow* na yll ommys dhe brow musurys. Medhegieth a'n jeves hanow a'n dhew dra (previansow displegya erbynn pragmatek; kudyn an plasebo) ha jynn rag aga hwithra.

## An Matematik

```
Ratyo degemeryans = styryansow degemerys / styryansow diskwedhys
                   (telemetri GitHub ~30% kres; ow chanjya: SQL 45%, Python 35%, JS 28%)
Ratyo synsyans    = kod AI a dhelli bys y unnyans / kod AI degemerys (~88% derivadys)
Spedyans          = (t_kontrol − t_AI) / t_kontrol  (dhort keskomparyans kontrolys YN UNNIK)
Delta tremena     = Δ PR unnys/displegyer/seythun (data fylt GitHub/Accenture: +8.7%)

Patrom talvos     = displegyoryon × termyn sawys × reyt kowlvaghys × faktour devnydh
                    — pub termyn a res musur leel; gwelewgh an tornado yn
                    sensitivity-analysis.md, le mayth yw termyn-sawys moy ages
                    pub parametrow aral warbarth
```

## Ensampel gwrys

Kowethyans a 500 displegyer a brev skoodhyer gans kontrol ewn (tymow kehaval, 3 mis, musurow rag-skrifys):

```
Sewyans previans: termyn kelgh PR −18%; PR unnys +6%; CFR heb chanj;
                  termyn sawys derivadys 45 mynysenn/dydh; musurys, nivel tasg ≈ 15 mynysenn/dydh

Talvos an niver MUSURYS: 500 × 0.25h × 220d × £60 × 0.6 devnydh
                          ≈ £990,000/bledhen a ganasow (heb relasya arghans)
Kost: 500 × £39/mis × 12 ≈ £234,000/bledhen
Ratyo kowlvarghans ≈ 4:1 — a yll bos arghanses, orth unn tredhel a'n derivadow.
```

An bwlghgap 3× yntra gweladow ha musurys yw an kavans METR orth ober y'n gwyls; budjettya diwar derivadow-yn-honan a'n jeves tredhlys an linenn brow.

## Kolm gans ynjynnyans medhelweyth

An dhelivrow ekonomek yeghes rag nebonan a wra gwerthjya ark AI: gwrewgh **previansow pragmatek** (dha godlyver, dha ynjynnoryon, tiketow gwir — na ny yw tasgow demo an gwerther); trewgh **ratyo degemeryans avel proxy, na ny yw sewyans** (hi yw an [PPV](../gwerthjyans-ai-klinikel/) a'n styryansow dhort golok an displegyer — degemeryans uhel gans synsyans isel yw gorddyagnosa); parhewgh pub kressans tremena gans **kwitthans stabilder** (DORA 2025: AI a dhrehedh tremena, a wra drog dhe stabilder — ynkleth gans efektys a'n tu res analys prow-nett, herwydh [metryks DORA](../metryks-dora/)); ha klassewgh an prow yn onest avel kanasow ([kost-relasyek erbynn heb relasya](../sawyansow-relasya-arghans-erbynn-heb-relasya-arghans/)).

## Fowtys Kemmyn

- **Treusplansya studhyans gwerther**: niverow RCT nowydh devnydhys war ober kodlyver hen — an keth fowt a dhiskudhis METR.
- **Derivadow avel musur**: an bwlghgap 20-poynt a berspektiv yw an bias an moyha godhvedhys y'n lien ma.
- **Hwythyans oberen**: moy PR ha moy kod yw Oberen, na ny yw sewyansow ([SPACE](../space-ha-devex/)); parhewgh gans dasober ha CFR.
- **Dyghtya an kromyth dyski**: musurow seythun-2 a gemmer efektys nowydh yn pub tu; musurewgh orth stat-kadarn ([horizon termyn](../horizon-termyn/)).

## Fontynnow

- Peng S, et al. "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot." 2023. <https://arxiv.org/abs/2302.06590>
- METR, "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity." 2025. <https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/>
- Derivas DORA 2025. <https://dora.dev/dora-report-2025/>
