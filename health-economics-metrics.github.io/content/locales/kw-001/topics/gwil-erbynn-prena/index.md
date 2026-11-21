# Gwil erbynn Prena

Gwil-erbynn-prena yw keskomparyans strethys a displegyans mesurys erbynn kemeres kenwerthek, war [TCO](../kost-perghenogeth-hollow/) diskontys, termyn delivrans ha risk. An prevyansow empirik yw unn-tu: **kostow gwil gwir a dhrehedh menowgh ragwelow dre 30–40%**, solusyons prenys a dhelivrer 40–60% skonnyk, ha gwerthjyans GenAI MIT 2025 a gavas arghyow AI prenys a sewya ~67% a'n termyn ha gwilyow ynterna a sewya ogas unn tredhel a hedna.

## Perag yth yw posek

Systemow yeghes a wynn an dewis ma pub prys ("gwil erbynn komyssyoni" yn tavas NHS), ha kowethyansow ynjynnyans a fyll yn systemek y'n tu gwil — drefen y wil estymya an gwil, na ny yw an [TCO](../kost-perghenogeth-hollow/), hag drefen bos gwil hweg. An framya ekonomek a re an keskomparyans onest: an dew dewis pris-wrys dres an keth horizon, an dew risk-addasys, ha'n *diffrans termyn pris-wrys avel [kost a dhelanow](../kost-dalgh/)* — an termyn a dhesyd an gorthyp an moyha menowgh hag a vydh gesys yn menowgh.

## An Matematik

```
Keskomparya dres an keth horizon 3–5 bledhen, diskontys:

NPV_dewis = PV(prowyow, displasys gans termyn-dhe-dalvos) − PV(TCO)

Addasyansow risk (patrom "bias owrowayans" Green Book):
  kost gwil × 1.3–1.4         (rag-wodhvos dres-kost)
  gwil termyn-dhe-dalvos + 40–60% (rag-wodhvos dalgh delivrans)
  prena: gwrewgh kwitthans an integrans ha kostow ladhva yn le hedna

Gyrysi diwar, y'n ordyr may dhesydons yn kemmyn:
  1. dyffransans — yw an kanasow ma dha broduk, po pybyer?
  2. termyn-dhe-dalvos × CoD
  3. TCO risk-addasys
```

## Ensampel gwrys

Trest a res system e-kensentyans. Prena: SaaS £150k/bledhen, bew yn 3 mis. Gwil: estymys £600k + £120k/bledhen gwitha, bew yn 12 mis.

```
Gwil risk-addasys: 600k × 1.35 = £810k; termyn-dhe-dalvos ≈ 18 mis
TCO 5-bl:  prena = 150k × 5 = £750k
           gwil  = 810k + 120k × 5 = £1,410k
Termyn dalgh: digitalya kensentyans a sav £25k/mis; gwil a dheu 15 mis
              diwettha → CoD = 15 × 25k = £375k

Keskomparyans effeythus: £750k erbynn £1,785k — prena a wynn dre ~£1M, ha'n
unn termyn a-ugh an gwil y honan yw kost an dalgh na veu pris-wrys.
```

Gwil a bys ewn pan yw an kanasow dyffransek (algorythm kres a'th produkt), pan na yll gwerther vyth kemmeres kloes (sawder klinikel, trigva data), po pan yw risk ledhva-gwerther kales ha pris-wrys.

## Kolm gans ynjynnyans medhelweyth

An dyskyplin ekonomek yeghes treuswerthadow yw teyrdhyghow: **addasyans risk diwar rag-wodhvos** (an yskynnyans 30–40% yw bias owrowayans Green Book medhelweyth — gwrewgh yn mekanikel, arghewgh a-erbynn ankavadow yn le dhort anodhans); **onester keskomparyer** (an dewis dhe wil nyns yw "nagonan," yw an prena gwella kavadow — gwelewgh [kost an dewis](../kost-an-dewis/)); ha **previans keskehavalder kyns keskomparyans kost** (mar kehaval an prena ha'n gwil dhe'n keth spesifikasyon, hemma yw [analys kost-minimya](../analys-minimya-kost/) hag an es a wynn; mar nyns yw, an diffrans sewyans a res bos talvosys, na ny yw hwarvos).

## Fowtys Kemmyn

- **Keskomparya pris rol gwerther orth estymasyons gwil heb risk-addasya** — gweres dew-plyg dhe'n gwil.
- **Lavur ynterna orth pris nul** ("an tim yw omma seulabrys").
- **Kloes heb pris yn dew dhirek**: kostow ladhva gwerther, mes ynwedh bus-faktour an gwil ha parys gwitha.
- **Gwilyow dhiwar hunnel**: "yw kres dhyn" klamys rag plumbing — previewgh dyffransans erbynn a vynnas kuvyonoryon gweles.

## Fontynnow

- Analysow TCO gwil erbynn prena. <https://neontri.com/blog/build-vs-buy-software/>
- Kavansow MIT GenAI (ratyow sewyans prena erbynn gwil). <https://blueflame.ai/blog/achieving-ai-roi-key-findings-from-mits-genai-report>
- HM Treasury Green Book (bias owrowayans). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
