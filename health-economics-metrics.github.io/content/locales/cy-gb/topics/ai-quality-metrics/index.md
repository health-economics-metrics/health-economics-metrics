# Metrigau Ansawdd AI

Metrigau ar gyfer cywirdeb allbwn a gynhyrchir gan AI: cywirdeb yn erbyn y gwir sail, **ffyddlondeb/seiliad** (a yw pob honiad wedi'i gefnogi gan y cyd-destun a ddarparwyd?), a **chyfradd rhithdybio** (pa gyfran o allbynnau sy'n cynnwys cynnwys heb ei gefnogi neu anwir?). Mewn lleoliadau iechyd nid mireinion ansawdd yw'r rhain — cyfraddau niwed ydynt.

## Pam mae hyn yn bwysig

Mae meincnodau ym maes meddygaeth wedi mesur cyfraddau rhithdybio **uwch na 60% ar gyfer LLMs heb eu seilio** ar dasgau meddygol (rhai modelau agored >80%), tra bod seilio, adalw, a moddau rhesymu yn torri cyfraddau'n ddramatig (e.e. gostyngodd modd meddwl GPT-5 rithdybiadau HealthBench 3.6% → 1.6% ar un meincnod). Mae dos wedi'i rithdybio neu ddyfyniad wedi'i ffugio mewn llif gwaith clinigol yn **ddigwyddiad gwybodaeth anwir gyda llwybr niwed** — mae'n perthyn i fraich niwed unrhyw fodel economaidd, wedi'i brisio fel ffug-bositifau [economeg sgrinio](../screening-economics/): mae pob un yn sbarduno cost ddiweddarach (gweithredu ar wybodaeth anghywir, llafur gwirio, risg feddyg-gyfreithiol, ymddiriedaeth wedi erydu).

## Y Fathemateg

```
Cyfradd rhithdybio = allbynnau sy'n cynnwys cynnwys heb ei gefnogi/anwir / cyfanswm allbynnau
  cynhenid:    yn gwrthddweud y cyd-destun a ddarparwyd
  allanol:     ffugiad na ellir ei wirio y tu hwnt i'r cyd-destun

Ffyddlondeb (arddull RAGAS) = honiadau wedi'u cefnogi yn yr ateb / cyfanswm yr honiadau yn yr ateb
Manwl gywirdeb/adalw cyd-destun = ansawdd yr adalw sy'n bwydo'r generadur

Pwysoli economaidd — nid yr un yw cost pob rhithdybiaeth:
  cost niwed disgwyliedig = Σ dros fathau o wallau (cyfradd × P(heb ei ganfod) ×
                       P(wedi gweithredu arno) × cost fesul gwall y gweithredwyd arno)
  Mae'r haen adolygu dynol yn gosod P(heb ei ganfod) — ac mae ei chost
  hi'n perthyn yn y model hefyd (munudau adolygydd × cyfaint).
```

## Enghraifft Waith

Mae cynorthwyydd codio clinigol AI yn prosesu 200,000 o achosion/blwyddyn; mae archwiliad yn dangos bod 2% o'r allbynnau'n cynnwys gwall codio sylweddol; mae codwyr dynol yn dal 85% o'r rheiny:

```
Gwallau'n cyrraedd cyflwyniad = 200,000 × 0.02 × 0.15 = 600/blwyddyn
Cost fesul gwall heb ei ddal (cyfartaledd camfilio + risg archwilio) ≈ £250
Cost wallau disgwyliedig       = 600 × 250 = £150,000/blwyddyn
Cost adolygu (2 funud × 200k × £0.50/munud)  = £200,000/blwyddyn

Achos gwelliant: mae seilio adalw'n torri'r gyfradd wallau i 0.8%
→ 240 o wallau heb eu dal, cost wallau £60,000 (−£90k/blwyddyn); gall amser
  adolygu ostwng hefyd (samplu yn hytrach nag adolygiad llawn) — mae'r
  buddsoddiad ansawdd yn talu cyn unrhyw honiad cyflymder.
```

## Cysylltiad Peirianneg Feddalwedd

Trinwch ansawdd model fel economeg gorchudd profi, gyda disgyblaeth radd-iechyd: **mae setiau gwerthuso'n cynrychioli eich treial clinigol** — wedi'u cofrestru ymlaen llaw, yn gynrychioliadol o gymysgedd achosion *eich* sefydliad chi, wedi'u hadnewyddu yn erbyn drifft; **mae seilio'n curo maint ar gyfer tasgau ffeithiol** (mae adalw + annog dyfynnu gorfodol fel arfer yn lleihad rhithdybio rhataf sydd ar gael — cf. [economeg unedau casgliadau](../inference-unit-economics/) am ei orbenion tocynnau); a **chyhoeddwch y pwynt gweithredu**: fel [sensitifrwydd/penodolrwydd](../clinical-ai-evaluation/), nid yw "97% ffyddlon" yn golygu dim heb ddosbarthiad y dasg a'r trothwy canfod. Mae mathemateg yr haen adolygu uchod yr un mathemateg [NNT/NNH](../number-needed-to-treat/) ag unrhyw borth sgrinio.

## Peryglon

- **Trawsblannu meincnod-i-gynhyrchu**: mae cyfraddau rhithdybio'n ddibynnol iawn ar dasg; eich cymysgedd achosion chi yw'r unig feincnod sy'n cyfrif.
- **Adolygiad dynol heb ei brisio**: mae "clinigwr yn gwirio popeth" yn haneru'r budd a rhaid iddo ymddangos yn y llinell gost — ac mae gwyliadwriaeth yn dirywio (hunanfoddhad awtomeiddio), felly mae P(heb ei ganfod) yn codi wrth i ymddiriedaeth godi.
- **Optimeiddio ansawdd cyfartalog tra bod risg y gynffon yn cario'r niwed**: mae un nodyn alergedd wedi'i ffugio'n gorbwyso mil o eiriad lletchwith; pwyswch wallau yn ôl canlyniad, yn ôl y fformiwla niwed disgwyliedig.

## Ffynonellau

- Dulliau a metrigau gwerthuso rhithdybio. <https://www.braintrust.dev/articles/ai-hallucination-evaluations-metrics-methods-2026>
- Ystadegau rhithdybio LLM meddygol. <https://sqmagazine.co.uk/llm-hallucination-statistics/>
- Metrigau ffyddlondeb RAG. <https://www.getmaxim.ai/articles/measuring-llm-hallucinations-the-metrics-that-actually-matter-for-reliable-ai-apps/>
