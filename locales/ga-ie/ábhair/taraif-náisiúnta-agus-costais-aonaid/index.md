# Taraif náisiúnta agus costais aonaid

Íocann an NHS soláthraithe as gníomhaíocht faoi liosta praghsanna náisiúnta rialacha-bhunaithe — go stairiúil an Taraif Náisiúnta / Íocaíocht de réir Torthaí, a cuireadh in ionad le **Scéim Íocaíochta an NHS (NHSPS)** an 1 Aibreán 2023. Taobh thiar de na praghsanna tá bonneagar costála aonaid náisiúnta: an **National Cost Collection (NCC)** agus an tiomsú **PSSRU Unit Costs of Health and Social Care**.

## Cén fáth a bhfuil tábhacht leis

Is iad seo ainmneoirí gach cáis ghnó chreidiúnaigh den NHS. Nuair a deir éileamh “tá freastal othair sheachtraigh fiú £160” nó “cosnaíonn uair altra Banda 6 £31”, tagann na huimhreacha sin ón mbonneagar seo — agus is é na figiúirí oifigiúla a úsáid seachas figiúirí cumtha a fhágann go bhfuil meastóireachtaí neamhspleácha inchomparáide agus foirne airgeadais ina gcomhoibreoirí. Do dhíoltóir, sainmhíníonn an taraif an taobh *ioncaim* freisin: luacháiltear gníomhaíocht a chumasaíonn do bhogearraí (cliniceanna breise, leapacha athlíonta) ar phraghsanna na scéime.

## An mhatamaitic

```
Tariff price per unit of activity (HRG-coded spell, outpatient attendance)
  = national average unit cost (from NCC) × Market Forces Factor (local adjustment)
  under NHSPS: blended fixed + variable ("aligned payment and incentive") elements

NCC unit cost = trust-reported total cost of an activity type / activity volume
                (built on Patient-Level Information and Costing Systems, PLICS)

PSSRU compendium: ~80 standard unit costs (GP consultation, nurse-hour by band,
ED attendance…) — the default source in UK economic evaluations.
```

## Sampla oibrithe

Scaoileann do bhogearraí uair an chloig in aghaidh an lae d’am altra Banda 6 i mbliain oibre 250 lá:

```
PSSRU-based Band 6 cost incl. overheads ≈ £31/hour (check current edition)
Capacity value = 250 × £31 = £7,750/nurse/year (non-cash-releasing)
```

Nó reáchtálann an t-altra 2 choinne leantacha sheachtracha bhreise in aghaidh an lae ar luach scéime ~£160: 500 × £160 = **£80,000/bliain de ghníomhaíocht mhaoinithe** — difríocht deich n-uaire i luach éilithe ag brath ar athimlonnú, ó chostais aonaid oifigiúla ar fad. Is féidir an dá éileamh a iniúchadh toisc go bhfuil na hainmneoirí foilsithe; sin é pointe iomlán an scéil.

## An nasc le hinnealtóireacht bogearraí

Seo an patrún **leabhar praghsanna inmheánach**. Oibríonn eacnamaíocht sláinte na RA toisc go n-úsáideann gach meastóireacht na costais aonaid fhoilsithe chéanna; bíonn easpa seo ar fhormhór na n-eagraíochtaí innealtóireachta, mar sin cumann gach cás gnó a chostas féin ar uair innealtóra, eachtra, imscaradh. Is féidir le foireann ardáin leabhar den chineál sin a fhoilsiú — costas luchtaithe in aghaidh uair innealtóra de réir leibhéil, in aghaidh eachtra de réir déine, in aghaidh nóiméad tógála — agus a úsáid a éileamh i ngach moladh. Macasamhlaíonn córais athmhuirir/taispeána modhanna teipe aitheanta na taraife freisin: tiomáineann praghsáil meánchostais cluiche toirte, tiomáineann íocaíochtaí seasta fo-sholáthar. Is fiche bliain de cheachtanna i ndearadh dreasachta d’fhorbairt praghsála ardáin inmheánaigh é éabhlóid an NHSPS ó íocaíocht ghníomhaíochta íon go seasta+inathraithe measctha.

## Gaistí

- **Figiúirí atá as dáta**: athnuaitear praghsanna NCC, PSSRU agus NHSPS go bliantúil — dátaigh gach uimhir.
- **Praghas taraife ≠ costas**: meáin náisiúnta le coigeartuithe is ea praghsanna; tá do chostas imeallach áitiúil difriúil (féach [costas imeallach vs meánchostas](../costas-imeallach-vs-meánchostas/)).
- **Acmhainn a luacháil ar tharaif gan mheicníocht** chun an ghníomhaíocht bhreise a sheachadadh agus íocaíocht a fháil as.

## Foinsí

- NHS England, NHS Payment Scheme. <https://www.england.nhs.uk/pay-syst/national-tariff/national-tariff-payment-system/>
- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
- PSSRU, Unit Costs of Health and Social Care. <https://www.pssru.ac.uk/unitcostsreport/>
