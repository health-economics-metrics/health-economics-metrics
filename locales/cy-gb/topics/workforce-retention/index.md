# Cadw Gweithlu

Mae economeg cadw gweithlu'n meintioli cost trosiant staff i system iechyd — recriwtio, sefydlu, cwmpasu swyddi gwag — ac felly beth yw gwerth meddalwedd sy'n lleihau llosgi allan gweinyddol. Llosgi allan o dasgau data gweinyddol ailadroddus yw un o'r prif ysgogwyr trosiant staff ac absenoldeb salwch yn y GIG.

## Pam mae hyn yn bwysig

Pan fydd clinigwr yn gadael, mae'r ymddiriedolaeth yn talu deirgwaith: i recriwtio olynydd (hysbysebu, ffioedd asiantaeth, cyfweliadau), i'w sefydlu (misoedd o gynhyrchiant is, goruchwyliaeth), ac i gwmpasu'r swydd wag yn y cyfamser — fel arfer gyda staff asiantaeth neu locwm ar 2–3× cyfraddau sylfaenol Agenda ar gyfer Newid (gweler [costau allanoli y gellir eu hosgoi](../avoidable-outsourcing-costs/) a [arbedion caled sy'n rhyddhau arian parod](../hard-cash-releasing-savings-deficit-defence/)). Gan fod costau trosiant yn arian parod go iawn, mae gwelliannau cadw ymhlith yr ychydig fuddion gweithlu y gall cyfarwyddwr cyllid eu bancio. Mae ffrithiant gweinyddol yn gyson ymhlith y prif ysgogwyr y cyfeirir atynt ar gyfer llosgi allan clinigol, sy'n ei wneud yn gost y gellir mynd i'r afael â hi drwy feddalwedd.

## Y Fathemateg

```
Cost fesul un sy'n gadael = cost recriwtio + cost sefydlu/cynyddu cynhyrchiant
                           + premiwm cwmpasu swydd wag × hyd y swydd wag

Cost trosiant blynyddol = nifer y staff × cyfradd trosiant × cost fesul un sy'n gadael

Gwerth meddalwedd    = nifer y staff × Δcyfradd trosiant × cost fesul un sy'n gadael
                      + gostyngiad absenoldeb salwch × cost cwmpasu/dydd
```

Mae gan y gadwyn achosol ddau gyswllt a amcangyfrifir — meddalwedd → llosgi allan/ffrithiant, a llosgi allan → trosiant — felly tystiolaethwch y ddau (arolygon staff cyn/ar ôl; cysylltiadau llosgi allan-traul a gyhoeddwyd) a chadwch y Δ a hawlir yn gymedrol.

## Enghraifft Waith

Mae ymddiriedolaeth yn cyflogi 1,200 o nyrsys; trosiant 11%/blwyddyn. Cost fesul un sy'n gadael:

```
Recriwtio ≈ £4,500;  sefydlu/cynyddu ≈ £6,000
Cwmpasu swydd wag: 4 mis × 0.6 WTE wedi'i gwmpasu gan bremiwm asiantaeth ≈ £8,000
Cyfanswm ≈ £18,500 fesul un sy'n gadael
Cost trosiant llinell sylfaen = 1,200 × 0.11 × 18,500 ≈ £2.44M/blwyddyn
```

Mae'n gredadwy y gallai meddalwedd sy'n lleihau baich dogfennaeth (asesiadau a lenwir yn awtomatig, mewngofnodi sengl, arddweud) symud trosiant 1 pwynt canran:

```
Gwerth = 1,200 × 0.01 × 18,500 = £222,000/blwyddyn yn berthnasol i arian parod
```

Mae honiad 1 pwynt wedi'i gefnogi gan sgoriau ffrithiant arolwg staff yn gredadwy; nid yw honiad 4 pwynt. Rhedwch y [tornado](../sensitivity-analysis/) ar Δtrosiant: mae'n dominyddu popeth arall yn y model.

## Cysylltiad Peirianneg Feddalwedd

Mae mathemateg cadw peirianyddol yn union yr un fath ac wedi'i dogfennu'n waeth: mae disodli peiriannydd uwch yn costio 6–12 mis o gyflog llwythog (recriwtio, cynyddu, cyd-destun a gollwyd), felly mae sefydliad 200 o bobl ar 15% o draul yn llosgi miliynau'n flynyddol ar drosiant. Mae buddsoddiad mewn profiad datblygwyr ([SPACE a DevEx](../space-and-devex/)) yn gyfatebiaeth uniongyrchol i leddfu baich dogfennaeth i nyrsys — a dylid ei gyfiawnhau yn yr un modd: sgoriau ffrithiant a fesurwyd, effaith gymedrol a honnir ar draul, cost fesul un sy'n gadael o'ch data cyllid eich hun. Y ddisgyblaeth economeg iechyd i'w chopïo yw *costio'r un sy'n gadael yn onest* yn hytrach na dadlau a yw pobl yn "wirioneddol" yn gadael oherwydd offer.

## Peryglon

- **Priodoli holl symudiad trosiant i'ch ymyriad** — mae marchnadoedd llafur yn symud trosiant lawer mwy na meddalwedd; defnyddiwch grwpiau rheoli neu o leiaf addasiad tuedd sector.
- **Cyfrif dwbl**: mae arbedion cadw ac arbedion gwariant asiantaeth yn gorgyffwrdd (cwmpasu swydd wag *yw* gwariant asiantaeth); cysoni'r llinellau.
- **Anwybyddu'r oediad**: mae traul a achosir gan losgi allan yn ymateb i newidiadau ffrithiant dros 1–2 flynedd, nid y chwarter nesaf.

## Ffynonellau

- GIG Lloegr, lleihau gwariant asiantaeth. <https://www.england.nhs.uk/long-read/reducing-agency-spend-in-the-nhs/>
- Arolwg Staff y GIG (data llosgi allan a bwriad i adael). <https://www.nhsstaffsurveys.com/>
