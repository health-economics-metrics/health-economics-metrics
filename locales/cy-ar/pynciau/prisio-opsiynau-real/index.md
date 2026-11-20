# Prisio Opsiynau Real

Mae prisio opsiynau real yn cymhwyso rhesymeg prisio opsiynau ariannol at benderfyniadau buddsoddi real (nad ydynt yn rhai marchnad ariannol) — yn benodol, yr *opsiwn i ehangu* prosiect yn ddiweddarach os yw'n llwyddo, heb fod o dan rwymedigaeth i wneud hynny. Mae model binomaidd un cyfnod symlach (Cox, Ross, Rubinstein, 1979) yn prisio'r hyblygrwydd hwn yn uniongyrchol, gan droi "gadewch i ni gludo'n fach a gweld" o deimlad greddfol yn rhif wedi'i brisio i mewn.

## Pam mae hyn yn bwysig

Mae cyfrifiad NPV statig yn prisio prosiect fel bet popeth-neu-ddim: ei ariannu neu beidio, ar raddfa heddiw, am byth. Anaml y caiff prosiectau go iawn — ac yn enwedig cyflwyniadau iechyd digidol fesul cam — eu betio fel hyn: gall system iechyd ariannu peilot bach, gwylio beth sy'n digwydd, a dim ond ymrwymo mwy o arian os yw'n gweithio. Mae gan yr hyblygrwydd hwnnw werth go iawn, ac mae ei anwybyddu yn tanbrisio buddsoddiadau fesul cam yn systematig o'i gymharu â rhai un ergyd, sydd i'r gwrthwyneb yn llwyr ar gyfer prosesau caffael sy'n gwobrwyo'r cynnig fesul cam sy'n edrych yn fwy diogel. Mae prisio opsiynau real yn prisio'r hyblygrwydd ei hun, fel y gellir cymharu cynnig fesul cam yn deg â dewis arall o ymrwymiad llawn yn hytrach na'i gosbi am edrych yn llai ar linell NPV naïf.

## Y Fathemateg

```
Tebygolrwydd risg-niwtral y cyflwr "i fyny":
  p = ((1 + cyfradd_ddi-risg) − ffactor_i_lawr) / (ffactor_i_fyny − ffactor_i_lawr)

Taliad ehangu ym mhob cyflwr (wedi'i lawr-gapio ar sero — mae ehangu'n ddewisol):
  taliad_i_fyny = max(gwerth_prosiect × ffactor_i_fyny − cost_ehangu, 0)
  taliad_i_lawr = max(gwerth_prosiect × ffactor_i_lawr − cost_ehangu, 0)

Gwerth opsiwn (taliad disgwyliedig disgowntiedig):
  gwerth_opsiwn = (p × taliad_i_fyny + (1 − p) × taliad_i_lawr) / (1 + cyfradd_ddi-risg)

NPV wedi'i ehangu = npv_statig + gwerth_opsiwn
```

Mae gwerth y prosiect naill ai'n codi (`ffactor_i_fyny`) neu'n disgyn (`ffactor_i_lawr`) erbyn y pwynt penderfynu nesaf. Dim ond os yw'n broffidiol yn y cyflwr hwnnw y gweithredir ehangu — y llawr ar sero yn y taliad sy'n gwneud hyn yn *opsiwn* gwirioneddol yn hytrach na rhwymedigaeth. Ar gyfer prisio'r opsiwn i gasglu gwybodaeth yn gyntaf, yn hytrach na'r opsiwn i ehangu yn ddiweddarach, gweler [gwerth disgwyliedig gwybodaeth berffaith](../gwerth-disgwyliedig-gwybodaeth-berffaith/). Ar gyfer cost aros i wneud y penderfyniad hwnnw, gweler [cost oedi](../cost-oedi/).

## Enghraifft Waith

Peilot gwasanaeth digidol gyda `gwerth_prosiect = £1,000,000`, codiad posibl i 1.5× neu ostyngiad i 0.5× erbyn y pwynt penderfynu nesaf, cyfradd ddi-risg o 8%, a chost ehangu o £600,000:

```
p = (1.08 − 0.5) / (1.5 − 0.5) = 0.58

taliad_i_fyny = max(1,000,000 × 1.5 − 600,000, 0) =  900,000
taliad_i_lawr = max(1,000,000 × 0.5 − 600,000, 0) = max(−100,000, 0) = 0

Mae'r llawr yn bwysig: NI fyddai'r opsiwn yn cael ei arfer pe bai'r farchnad
yn siomi — mae'r gost ehangu o £600,000 yn fwy na'r £500,000 y byddai'r
prosiect yn werth yn y cyflwr i lawr.

gwerth_opsiwn = (0.58 × 900,000 + 0.42 × 0) / 1.08
              = 522,000 / 1.08
              ≈ £483,333.33
```

Gan ychwanegu gwerth yr opsiwn at linell sylfaen NPV statig o £200,000: NPV wedi'i ehangu = 200,000 + 483,333.33 ≈ **£683,333.33**. Byddai adrodd yr NPV statig o £200,000 yn unig, heb y gwerth opsiwn hwn, yn tanamcangyfrif gwir werth y prosiect fesul cam fwy na dwywaith.

## Cysylltiad Peirianneg Feddalwedd

Dyma'r fersiwn ffurfiol o "cludwch fersiwn leiaf nawr, cadwch yr opsiwn i fuddsoddi ymhellach os yw'n cydio" — yn uniongyrchol berthnasol i gyflwyno cynnyrch iechyd digidol fesul cam, yn gyfochrog yn strwythurol â fframio dilyniannu o dan ansicrwydd [cost oedi](../cost-oedi/) a [WSJF/CD3](../wsjf-a-cd3/), ac yn ategu [gwerth disgwyliedig gwybodaeth berffaith](../gwerth-disgwyliedig-gwybodaeth-berffaith/) a [gwerth disgwyliedig gwybodaeth sampl](../gwerth-disgwyliedig-gwybodaeth-sampl/) — mae'r tri'n prisio hyblygrwydd neu wybodaeth o dan ansicrwydd, o wahanol onglau.

## Peryglon

- **Benthyg prisio risg-niwtral heb y dybiaeth ased masnachol y mae'n dibynnu arni**: mae modelau opsiynau real yn benthyg tebygolrwydd risg-niwtral o brisio opsiynau ariannol, sy'n tybio bod y gwerth sylfaenol yn ased *masnachol* — ar gyfer prosiect real heb ei fasnachu mewn gwirionedd, hwylustod modelu yw hyn, nid ffaith marchnad lythrennol.
- **Trin `ffactor_i_fyny`/`ffactor_i_lawr` fel paramedrau rhydd**: mae mewnbynnau i fyny/i lawr y binomaidd eu hunain yn rhagdybiaethau sy'n gofyn am gyfiawnhad, nid paramedrau rhydd a ddewiswyd i gynhyrchu ateb dymunol.
- **Adrodd gwerth yr opsiwn yn unig**: mae gwerth opsiynau real yn *ychwanegol* at NPV statig prosiect annibynnol — gwall cyffredin yw adrodd gwerth yr opsiwn yn unig a gollwng yr achos sylfaenol, sy'n gorddatgan yr achos os yw'r NPV statig yn negyddol ac yn ei danddatgan (fel yn yr enghraifft waith uchod) pan adewir yr NPV statig allan yn gyfan gwbl.

## Ffynonellau

- Cox JC, Ross SA, Rubinstein M. "Option pricing: a simplified approach." J Financ Econ. 1979;7(3):229-63.
- Trigeorgis L. *Real Options: Managerial Flexibility and Strategy in Resource Allocation*. MIT Press. 1996.
- Driffield T, Smith PC. "A real options approach to watchful waiting: theory and an illustration." Med Decis Making. 2007;27(2):178-88 — yn clymu opsiynau real yn uniongyrchol â chyd-destun penderfynu economeg iechyd. <https://pubmed.ncbi.nlm.nih.gov/17395932/>
