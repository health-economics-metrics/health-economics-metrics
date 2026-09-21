# Adeiladu vs Prynu

Mae adeiladu-vs-prynu yn gymhariaeth strwythuredig o ddatblygu pwrpasol yn erbyn caffael masnachol, ar sail [TCO](../total-cost-of-ownership/) wedi'i ddisgowntio, amser cyflenwi, a risg. Mae'r rhagdybiaethau empirig yn unochrog: mae **costau adeiladu gwirioneddol fel arfer yn fwy na'r rhagamcaniadau o 30–40%**, mae datrysiadau a brynwyd yn cael eu defnyddio 40–60% yn gyflymach, a chanfu ymchwil GenAI 2025 MIT fod offer AI a brynwyd yn llwyddo ~67% o'r amser tra bo adeiladu mewnol yn llwyddo tua thraean cyn amled.

## Pam mae'n bwysig

Mae systemau iechyd yn wynebu'r penderfyniad hwn yn gyson ("gwneud vs comisiynu" yn iaith yr NHS), ac mae sefydliadau peirianneg yn ei gael yn systematig o'i le i gyfeiriad adeiladu — oherwydd bod adeiladwyr yn amcangyfrif yr adeiladu, nid y [TCO](../total-cost-of-ownership/), ac oherwydd bod adeiladu'n fwy o hwyl. Mae'r ffrâm economaidd yn gorfodi'r gymhariaeth onest: y ddau opsiwn wedi'u prisio dros yr un gorwel, y ddau wedi'u haddasu ar gyfer risg, a'r *gwahaniaeth amser wedi'i brisio fel [cost oedi](../cost-of-delay/)* — y term sy'n penderfynu'r ateb amlaf ac sy'n cael ei hepgor amlaf.

## Y mathemateg

```
Cymharwch dros yr un gorwel o 3–5 mlynedd, wedi'i ddisgowntio:

NPV_opsiwn = GP(buddiannau, wedi'u symud yn ôl amser-i-werth) − GP(TCO)

Addasiadau risg (patrwm "tuedd optimistiaeth" y Llyfr Gwyrdd):
  cost adeiladu × 1.3–1.4        (rhagdybiaeth ordrafod)
  amser-i-werth adeiladu + 40–60% (rhagdybiaeth oedi cyflwyno)
  prynu: ychwanegwch wiriad realiti integreiddio a chostau ymadael yn lle hynny

Sbardunau penderfynu, yn y drefn y maent fel arfer yn penderfynu:
  1. gwahaniaethu — ai eich cynnyrch yw'r gallu hwn, neu blymwaith?
  2. amser-i-werth × cost oedi
  3. TCO wedi'i addasu ar gyfer risg
```

## Enghraifft wedi'i gweithio

Mae angen system e-gydsyniad ar ymddiriedolaeth. Prynu: £150k/flwyddyn SaaS, yn fyw ymhen 3 mis. Adeiladu: amcangyfrifir £600k + £120k/flwyddyn cynnal a chadw, yn fyw ymhen 12 mis.

```
Adeiladu wedi'i addasu ar gyfer risg: 600k × 1.35 = £810k; amser-i-werth ≈ 18 mis
TCO 5 mlynedd:  prynu = 150k × 5 = £750k
                adeiladu = 810k + 120k × 5 = £1,410k
Term oedi: mae digido cydsyniad yn arbed £25k/mis; mae adeiladu'n cyrraedd 15 mis
           yn hwyrach → cost oedi = 15 × 25k = £375k

Cymhariaeth effeithiol: £750k vs £1,785k — mae prynu'n ennill o ~£1M, a'r
term unigol mwyaf ar ôl yr adeiladu ei hun yw cost yr oedi na wnaeth neb ei brisio.
```

Mae adeiladu'n dal yn iawn pan fo'r gallu'n wahaniaethol (algorithm craidd eich cynnyrch eich hun), pan nad oes unrhyw werthwr yn bodloni cyfyngiad caled (diogelwch clinigol, preswyliad data), neu pan fo risg cloi-i-mewn gwerthwr yn ddifrifol ac wedi'i brisio.

## Cysylltiad â pheirianneg meddalwedd

Mae'r ddisgyblaeth economeg-iechyd y gellir ei throsglwyddo yn dridarn: **addasu risg ar sail rhagdybiaeth** (mae'r codiad ordrafod o 30–40% yn dueddiad optimistiaeth y Llyfr Gwyrdd i feddalwedd — cymhwyswch ef yn fecanyddol, dadleuwch dros eithriadau yn hytrach nag o'u plaid); **gonestrwydd cymharydd** (nid "dim byd" yw'r dewis arall i adeiladu, ond y prynu gorau sydd ar gael — gweler [cost cyfle](../opportunity-cost/)); a **phrofi cyfwerthedd cyn cymharu cost** (os yw prynu ac adeiladu mewn gwirionedd yn bodloni'r un fanyleb, [dadansoddiad lleihau cost](../cost-minimization-analysis/) yw hyn a'r un rhataf sy'n ennill; os na, rhaid prisio'r gwahaniaeth canlyniad, nid ei honni).

## Peryglon

- **Cymharu pris rhestr gwerthwr ag amcangyfrifon adeiladu heb eu haddasu ar gyfer risg** — gwenieithio dwbl tuag at adeiladu.
- **Llafur mewnol wedi'i brisio'n sero** ("mae'r tîm yma'n barod").
- **Cloi-i-mewn heb ei brisio i'r ddau gyfeiriad**: costau ymadael gwerthwr, ond hefyd ffactor bws yr adeiladu a'i gyfnod cynnal a chadw.
- **Adeiladau a sbardunir gan hunaniaeth**: "mae hyn yn greiddiol i ni" yn cael ei honni am blymwaith — profwch wahaniaethu yn erbyn a fyddai cwsmeriaid yn sylwi.

## Ffynonellau

- Dadansoddiadau TCO adeiladu-vs-prynu. <https://neontri.com/blog/build-vs-buy-software/>
- Canfyddiadau MIT ar y "rhaniad GenAI" (cyfraddau llwyddiant prynu-vs-adeiladu). <https://blueflame.ai/blog/achieving-ai-roi-key-findings-from-mits-genai-report>
- Llyfr Gwyrdd EM Trysorlys (tuedd optimistiaeth). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
