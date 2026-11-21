# Diffyk QALY ha Chanjyoryon Ankevri

Diffyk QALY a vusur pygemmys a yeghes a dhe a gemmer klevesow dhort klavjiyon war-barth gans an pobel kenedhlek. NICE a'n devnydh rag gweres **chanjyoryon ankevri**: an moy klav yw an pobel, an moy a dal pub QALY gwrys — bys yn 1.7× an harth savonek.

## Perag yth yw posek

Dhort manual NICE 2022, ankevri yw multiplier splann war dalvos nowodhow yeghes, ow ankevres an gwobrer kyns a dhiwedh-bewnans. Teknologi rag klevesow ankevri yw jujys erbynn harth effeythus a-bell dhe ~£51,000/QALY y'n le a £30,000. Mars yw dha medhelweyth ow servya pobel ankevri (fyll kolon dyskwrys, klevesow-spyrys ankevri), an chanjyer ankevri a yll bos an dyffrans inter kas ekonomek hwath arghansys hag ankewn — hag y fyth othem a vatematik diffyk dh'y glamya.

## An Matematik

Dyw musur, jorrys wor-bar an bewnans a-dhelergh gans gwithyans savonek a-vyken:

```
Diffyk assolut         = QALYs_pobel_kenedhlek − QALYs_gans_kleves
Diffyk gorrannek       = Diffyk assolut / QALYs_pobel_kenedhlek
```

Pwysyow NICE 2022 (an musur a re an pwys uhella a wra gweres):

```
Pwys ×1.0: assolut < 12 ha gorrannek < 0.85
Pwys ×1.2: assolut ≥ 12 po gorrannek ≥ 0.85
Pwys ×1.7: assolut ≥ 18 po gorrannek ≥ 0.95
```

An pwys a multiplya ΔE (po kehaval an harth): λ effeythus a dheu bos £24k–£36k orth ×1.2 ha £34k–£51k orth ×1.7.

## Ensampel gwrys

Klavjiyon gans kleves ankevrys, oos kres 60. An pobel kenedhlek orth 60 a wayt 14.2 QALY diskontys; gans an kleves yn gwithyans a-vyken, 2.1.

```
Diffyk assolut     = 14.2 − 2.1 = 12.1  (≥ 12 → ow talvesa rag ×1.2)
Diffyk gorrannek   = 12.1 / 14.2 = 0.852 (≥ 0.85 → ynwedh ×1.2)
```

ICER dha blatform monitoryans yw £26,000/QALY — a-ugh an kres a £20k–£30k, ledhek. Gans pwys ×1.2: ICER effeythus = 26,000 / 1.2 ≈ **£21,700/QALY** — arghansys yn esy. An jorrans diffyk a dhisplas an dewisyans.

## Kolm gans ynjynnyans medhelweyth

Pwyssya ankevri yw versyon furvel a neppyth a wra bagasow ynjynnyans dre anyen: spena moy dre unn gwellhe war an system a'n gwettha. An patroun treusdroys — jorrewgh "diffyk SLO" a bub servis (pygemmys yw hi a-woeles an linenn-vonn yagh gwaytys, yn assolut ha gorrannek), ha pwyssewgh talvos an kewarnans herwydh. Hemma a justyf, gans matematik yn le argyans, perag y hwra an system dewys gwyns kavos moy investyans pub our sawys ages unn yagh. Y hwor ynwedh an kyth dyskans governans: dyskwedhewgh an pwysyow *kyns* an kuntelles a ragorderyans, po pub tim a glam ankevri.

## Fowtys Kemmyn

- **Jorra diffyk erbynn an linenn-vonn kabm**: yth yw musurys yn *gwithyans savonek a-vyken*, na ny yw hanes naturel heb tretyans.
- **Tebelder oos**: an diffyk a dhepen meur a oos an pobel (klavjiyon yowynkoo a'th eus moy QALYs dhe goll → diffyk assolut uhelha); devnydhewgh dasparth oos an pobel tretys gwir.
- **Gesya bos an chanjyer ow talvesa yn le aral** — mekanik NICE (Pow Sows) yw; kowethyans HTA erel a dhelergh ankevri yn fordh dyffrans (po heb).

## Fontynnow

- Analysis of NICE severity modifier decisions, Value in Health 2024. <https://www.sciencedirect.com/science/article/pii/S1098301524000858>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- Mtech Access, NICE HTA decision modifiers explainer. <https://mtechaccess.co.uk/nice-hta-decision-modifier/>
