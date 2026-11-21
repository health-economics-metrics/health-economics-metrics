# Idirghabháil níos luaithe

Má ligeann cumas sábháilte do chleachtóir riaráistí diagnóiseacha a athbhreithniú níos luaithe, bogann othair ón liosta feithimh go cóireáil ghníomhach níos tapúla — agus is minic gur saoire agus níos fearr é cóireáil níos luaithe ná cóireáil níos déanaí, toisc go dtéann riochtaí gan chóireáil chun cinn.

## Cén fáth a bhfuil tábhacht leis

Is é dul chun cinn galair an ús ilchodach sa chúram sláinte. Níl othar atá ag fanacht le riocht gan chóireáil i staid sheasmhach: aistríonn ailsí céim, dícomhbhogann teip chroí, éiríonn dúlagar éadrom dian. Mar sin tugann idirghabháil níos luaithe díbhinn dhúbailte — **torthaí níos fearr** (níos mó QALY, cóireáilte ó bhonnlíne níos sláintiúla) agus go minic **costais cóireála níos ísle** (tá cóireáil céime luaithe níos lú déine ná tarrtháil céime déanaí). Is é an mheicníocht seo a ardaíonn “bealaí níos tapúla” ó mhaisiúlacht oibríochtúil go riachtanas cliniciúil agus eacnamaíoch — agus is í an chúis dhomhain a mbaineann [costas moille](../costas-moille/) le bogearraí cliniciúla.

## An mhatamaitic

```
Luach idirghabhála níos luaithe (in aghaidh an othair) =
    [Costas_déanach − Costas_luath]                (fritháireamh costais cóireála)
  + [QALY_luath − QALY_déanach] × λ                (gnóthachan sláinte × tairseach)
  × P(dul chun cinn le linn na moille)              (ualú dóchúlachta)
```

Tá an t-ualú dóchúlachta riachtanach: ní théann gach othar atá ag fanacht chun cinn. Samhlaigh an dóchúlacht aistrithe in aghaidh an aonaid ama (ó shonraí stair nádúrtha), ní an cás is measa. Ansin lascainigh: tá luach níos lú inniu ar chostais seachanta blianta uainn ([lascainiú](../lascainiú-agus-rogha-ama/)) — agus tabhair faoi deara go bhfuil formhór na hidirghabhála luaithe costéifeachtúil seachas coigilteach (féach [eacnamaíocht an chosc](../eacnamaíocht-cosanta/)).

## Sampla oibrithe

Riaráiste scagthástála réitinipiteolaíochta diaibéitigh: 4,000 othar, 6 mhí ar gcúl. Triplíonn grádú le cúnamh AI tréchur agus glanann sé an scuaine in 8 seachtaine. Stair nádúrtha: ~2% d’othair atá ag fanacht/bliain ag dul chun cinn go céimeanna a chuireann radharc i mbaol agus iad gan athbhreithniú.

```
Imeachtaí dul chun cinn seachanta le luasghéarú ~4 mhí:
  4,000 × 2% × (4/12) ≈ 27 othar

In aghaidh gach dul chun cinn seachanta:
  fritháireamh cóireála (teiripe intravitreal vs léasair) ≈ £4,000
  gnóthachan QALY (radharc caomhnaithe) ≈ 0.8 QALY × £20,000 = £16,000

Luach ≈ 27 × (4,000 + 16,000) ≈ £540,000 — ó riaráiste amháin glanta uair amháin,
sula gcomhaireamhtar an gnóthachan buan tréchuir.
```

## An nasc le hinnealtóireacht bogearraí

Dhá aistriú. Ar an gcéad dul síos, an ceann soiléir: airgeadaíonn bogearraí a luasghéaraíonn bealaí diagnóiseacha agus cóireála (triaiste, grádú AI, bealach torthaí) leis an tsamhail chéanna — agus insíonn an tsamhail duit cén bealach le luasghéarú: an ceann leis an gcuar dul chun cinn is géire, ní an scuaine is faide. Ar an dara dul síos, an scáthán innealtóireachta: **téann lochtanna chun cinn freisin**. Cosnaíonn fabht a ghabhtar sa dearadh comhrá; sa táirgeadh cosnaíonn sé teagmhas; is samhail dul chun cinn é cuar costais “aistriú ar chlé” (10–100× de réir céime), agus iompraíonn an leagan macánta an rabhadh céanna — is costéifeachtúil de ghnáth é braite luath, ní hairgead saor in aisce, mar go bhfuil fíorchostais ag athbhreithnithe agus tástálacha agus ní rachadh formhór na saincheisteanna a gabhadh chun cinn riamh.

## Gaistí

- **Dul chun cinn an cháis is measa a ghlacadh do gach duine** — is é an t-ualú dóchúlachta an difríocht idir anailís agus abhcóideacht.
- **Claonadh ama seolta**: breathnaíonn galar a aimsiú níos luaithe gan torthaí a athrú cosúil le sochar ach ní hé; is é *idirghabháil éifeachtach* níos luaithe an t-éileamh, ní braite níos luaithe amháin (féach [eacnamaíocht scagthástála](../eacnamaíocht-scagtha/)).
- **Comhaireamh dúbailte** le héilimh liosta feithimh agus RTT bunaithe ar an luasghéarú céanna — feabhsú bealaigh amháin, tacar sochar amháin, leithdháilte uair amháin.

## Foinsí

- Cohen JT, Neumann PJ, Weinstein MC. "Does preventive care save money?" NEJM 2008. <https://www.nejm.org/doi/full/10.1056/NEJMp0708558>
- NHS England, diabetic eye screening programme. <https://www.gov.uk/topic/population-screening-programmes/diabetic-eye>
