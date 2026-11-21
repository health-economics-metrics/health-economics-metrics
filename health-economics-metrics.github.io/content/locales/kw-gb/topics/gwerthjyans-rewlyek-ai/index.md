# Gwerthjyans Rewlyek AI

An framyow rewlyek a rewl AI yn yeghes — rewl Medhelweyth avel Dehweles Medhygel (SaMD) FDA gans **Towlow Kontrol Chanj Rag-Dhesyns (PCCPs)**, ha towlow gwerthjyans bys gwir kepar ha Gober AI yn Yeghes ha Kuransek NHS — ha pyth a gostons ha pyth a wrons possybyl yn ekonomek.

## Perag yth yw posek

Rewl a dhepyn **kost skoodhyans entra marghas** ha **kost pub nowedhyans model a-wosa** — rag produktow AI, an nessa a vri moy menowgh. Fordh tradisyonel FDA (kudhya an model; dasglerya rag chanjow) a wrug gwellha kendonek bryntyn dhe'n ekonomek. An **gidyans PCCP (kowlwrys mis Kevardhu 2024)** a chanjis an ekonomek: gwrier a yll rag-awthorya nowedhyansow model *spesifys* a'n termyn a dheu — deskrifans a chanjow towlys, protokol chanj (fatell vydh pub unn gwiryes), ha asessyans efekt — may tevons gwellheansow awthoryes heb sommas nowydh. Moy ages 1,000 dyvis AI-gweythresys a'n jeves awtorita FDA; an FDA a wra ynwedh previa wolok perfformyans bys gwir (musurow rag-spesifys: ratyow FP/FN dalleth-linenn, drif kalibrya, arwodhyow shift-dhomen).

## An Matematik

An PCCP yw ekonomek [termyn kelgh DORA](../metryks-dora/) devnydhys dhe vodelys rewlys:

```
Kost rag nowedhyans model (tradisyonel) = kost dhasskrifa + dalgh dhasvewa × CoD
Kost rag nowedhyans model (a-bervedh PCCP) = kost gwrians protokol yn unnik

Ekonomek nowedhyansow dres bywnans produkt:
  N nowedhyans × (kost sommas + mis a dhasvew × kost-dalgh pub mis)
  erbynn kost unnwaith skrifa PCCP + N × gwrians protokol
```

Rag patrom Gober AI NHS, an rol musurow yw ehanga ages ewnder: gwerthjyansow bys gwir anserbyek a assessya perfformyans klinikel, efektys lanwes/displegyans, hag efekt ekonomek — an chayn kowl [effeythusnans → effeythus → kost-effeythusnans](../produktivita-displegyer-gans-ai/) dhe vos sefsys.

## Ensampel gwrys

Gwerther radiolegieth-AI a dowl gwellheansow model pub kwartran dres 3 bledhen (12 nowedhyans):

```
Tradisyonel: 12 × (£80k sommas + 4 mis × £50k/mis CoD prow-dalghes)
           = 12 × £280k = £3.36M
Fordh PCCP:  £250k skrifa PCCP + 12 × £30k gwrians protokol = £610k
Sawyans ≈ £2.75M — ha klevyon a gemmer pub gwellheans ~4 mis skonnyk:
12 × 4 mis × prow klinikel an nowedhyans, linenn QALY yn y gwir honan.
```

An PCCP yw aswonnvos rewlyek a **vos talvos klinikel dhe frekwens displegya** — chayn kawsek mestrel an repo ma, kemmerys gans rewler.

## Kolm gans ynjynnyans medhelweyth

Ynjynnya PCCP yn ewn yw kudyn medhelweyth: rolyow gwerthjyans rag-dyskrifys, setys data versyonys, pibelynnow gwiryans awtomatek, wolok drif — kowdhrewl rewlyek a displegyans kesys, le may yw an "yet displegya" protokol gwiryes yn le dasview kod. Tymow gans isstrukter eval aswonnys ([ansawor AI](../musurow-ansawor-ai/)) a dhrehedh PCCPs yn es; tymow heb a gavas bos an strishyans rewlyek yn gwir strishyans aswonnyes ynjynnyans. Rag produktow ow entra NHS, an stak kehaval yw DTAC (sawder klinikel, gwithyans data, kesoberyans) ha klassow skoodhyans [NICE ESF](../framya-standardys-skoodhyans-nice/) — budjettewgh an oll avel [TCO](../kost-perghenogeth-hollow/) entra marghas.

## Fowtys Kemmyn

- **Hwans dhe vrassa skope PCCP**: yn unnik klassow chanj *spesifys* yw rag-awthoryes; chanjow arkitektur po devnydhyow bwrys nowydh a res hwath gwerthjyans kowl.
- **Drif bys gwir heb holya**: awtorita orth perfformyans dalleth + drif pobel tawesek = produkt ow perfformya a-der y envelope kovadhys; holya yw ha gwayans rewlyek ha difres honan.
- **Kemmysk kovadhow ha talvos**: kovadhow FDA/UKCA ≠ nagonan a bays — hemma yw an bar [HTA](../gwerthjyans-teknologi-yeghes/), rag dispar.

## Fontynnow

- FDA, medhelweyth dyvis gweythresys AI / SaMD. <https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-software-medical-device>
- Analys gidyans gwrians PCCP. <https://intuitionlabs.ai/articles/fda-pccp-implementation-guide-ai-ml-samd>
- NHS England, dyskansow gwerthjyansow bys gwir Gober AI yn Yeghes ha Kuransek. <https://www.england.nhs.uk/long-read/planning-and-implementing-real-world-ai-evaluations-lessons-from-the-ai-in-health-and-care-award/>
