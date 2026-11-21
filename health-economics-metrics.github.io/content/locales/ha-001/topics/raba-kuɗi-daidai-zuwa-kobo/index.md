# Raba Kuɗi Daidai Zuwa Kobo

Raba jimlar kuɗi — tallafi na tarayya, takardar kuɗin kayayyakin more rayuwa, lambar tasirin kasafin kuɗi — a tsakanin masu karɓa da yawa ta lissafin kashi mara zurfi yana samar da sassan da ba sa komawa ga asalin jimlar akai-akai. Raba daidai zuwa kobo shi ne gyaran: hanyar lamba/goma, da ke aiki a ƙananan naúrorin kuɗi (kobo), tana tabbatar da sassan suna haɗuwa *daidai* zuwa duka, komai rashin daidaiton rabuwa. Duk injiniyan manhaja da dole ya daidaita jimlar da aka raba zuwa kobo — albashi, rabon tallafi, cajin hidimar tarayya — yana buƙatar wannan tsari, ba kashi na floating-point ba.

## Dalilin muhimmancinsa

Wannan tsari ne mai suna, na tushe a injiniyancin manhajar kamfani: littafin Martin Fowler *Patterns of Enterprise Application Architecture* (2002) ya rubuta `Money` da `Allocate` daidai domin "raba $100 ta hanyoyi uku" matsala ce da lamba mara zurfi ke yin kuskure a kai a kai, kuma a shiru — kuskuren yana bayyana ne kawai idan wani ya daidaita littattafai ya gano sassan sun gaza (ko sun wuce) jimlar da kobo ɗaya. A aikin tattalin arzikin lafiya da kuɗin NHS wannan ba ilimi ba ne kawai: jimlar tasirin kasafin kuɗi ana raba su a tsakanin wurare, shekaru, ko daraktoci; kuɗin kayayyakin more rayuwa da lasisi na tarayya ana raba su a tsakanin sassa bisa yawan ma'aikata ko kason aiki. Kowane ɗaya daga cikin waɗannan rabe-rabe dole ya daidaita daidai, domin daraktan kuɗi da aka ba sassan da ba sa haɗuwa zuwa jimla yana daina amincewa da dukan samfurin.

## Lissafin

```
Naive (broken) method:
  part_i = round(total × share_i / Σ shares)     — rounds each part independently

Exact method (largest remainder / "largest remainder allocation"):
  1. base_i = floor(total_minor_units × share_i / Σ shares)   — whole minor units (cents) only
  2. remainder = total_minor_units − Σ base_i                  — leftover cents, always < number of recipients
  3. distribute 1 extra minor unit each to the `remainder` recipients with the
     largest fractional remainder from step 1, until the leftover is exhausted

Result: Σ part_i == total, always, by construction.
```

Hanyar daidai ba ta taɓa zagaye sashe shi kaɗai ba — tana zagaye *dukan rabon* a matsayin aiki ɗaya, wanda shi ne ke sa ka'idar jimla ta tabbata.

## Misali da aka lissafa

A raba $100.00 ta hanyoyi uku daidai (`shares = [1, 1, 1]`).

Hanya mara zurfi: $100.00 ÷ 3 = $33.333…, an zagaye ta daban-daban zuwa kobo mafi kusa tana ba da $33.33 ga kowane mai karɓa. Idan aka ƙara: $33.33 × 3 = $99.99 — kobo ɗaya ya ɓace, kuma babu layin abu guda ɗaya da yake "kuskure" isa a gane ta dubawa.

Hanya daidai: `base` = $33.33 ga duka ukun (jimlar ƙananan naúrori 9,999 daga `floor(10,000 / 3) = 3,333` kobo kowanne), ya bar saura na kobo 1 (10,000 − 9,999). Wannan kobo ɗaya da ya rage yana tafiya ga duk mai karɓa da ke da mafi girman saura mai ɓangare a rabuwar — takamaiman mai karɓa dalla-dalla ne na ciki na yanke tsaka, ba abin da mai kira ya dogara da shi ba. Masu karɓa biyu suna samun $33.33 ɗaya kuma $33.34, kuma sassan uku suna haɗuwa daidai zuwa $100.00.

Wannan daidai lissafin da [binciken tasirin kasafin kuɗi](../binciken-tasirin-kasafin-kuɗi/) ke buƙata a duk lokacin da jimlar tasirin kasafin kuɗi dole a raba ta a tsakanin wurare, rukuni, ko shekarun kuɗi kuma a daidaita zuwa jimlar da aka wallafa — duba [jimlar kuɗi mai tsaron kuɗin ƙasa](../jimlar-kuɗi-mai-tsaron-kuɗin-ƙasa/) don matsalar abokiya ta ƙara layukan abubuwa da yawa ba tare da karkacewa ba.

## Alaƙa da injiniyancin manhaja

Wannan a zahiri "tsarin Money" ne daga gine-ginen manhajar kamfani — tsari mai suna, na tushe don daidai wannan ajin kwaro, ba dabara ta lokaci ɗaya ba. Ainihin gazawar daidaita kuɗi sun fito daga daidai wannan ajin kwaro: rabe-raben kashi da aka lissafa a `f64`, aka zagaye ga kowane mai karɓa, ba a taɓa dubawa da asalin jimla ba. Yana haɗuwa kai tsaye da sashin [jimillar kuɗin mallaka](../jimillar-kuɗin-mallaka/) na wannan ma'ajiya, wanda a yanzu yana ƙara kuɗin floating-point na yau da kullum a tsakanin shekaru da zaɓuɓɓuka — horon daidaito iri ɗaya yana shafar duk lokacin da jimlar TCO ko tasirin kasafin kuɗi dole a raba ta maimakon kawai a ƙara ta.

## Tarkuna

- **Kashi-sannan-zagaye maimakon mafi girman saura**: raba da kashi na floating-point da zagaye kowane mai karɓa daban, wanda ke tara kuskuren zagaye kuma da wuya ya koma jimla, musamman a masu karɓa da yawa.
- **Watsi da ma'aunin ƙaramar naúrar kuɗi**: zaton kowane kuɗi yana da ɓangarorin goma 2 — Yen na Japan yana da 0, wasu kuɗaɗe suna da 3 — rabon kashi da aka rubuta da hannu yawanci yana ɗaure 2 kuma yana karyewa a shiru ga wasu kuɗaɗe; aikin raba daidai yana karanta ma'aunin daga kuɗin da kansa (ISO 4217).
- **Sake raba saura da aka riga aka raba**: gudanar da aikin raba kuma a kan abin da ya rage daga rabon da ya gabata, ba tare da duban idempotency ba, wanda zai iya ba wa mai karɓa ɗaya kobo ɗaya sau biyu.

## Tushe

- Fowler M. "Patterns of Enterprise Application Architecture." Addison-Wesley, 2002 — the `Money` and `Allocate` patterns.
- ISO 4217 — currency and funds code standard, which defines each currency's minor-unit exponent.
