# Jimlar Kuɗi Mai Tsaron Kuɗin Ƙasa

Ƙara layukan kuɗi da yawa — takardun kuɗi na wata-wata, kuɗin kowane wuri, alkaluman tasirin kasafin kuɗi na shekaru da yawa — da lambobin binary floating-point na yau da kullum (`f64`) yana tara ƙananan kurakuran wakilci, domin yawancin ɓangarorin goma ($1,234.56, misali) ba za a iya wakiltar su daidai a binary floating point ba. Kowane kuskure ƙarami ne, amma babban samfuri da ke ƙara ɗaruruwa ko dubban layukan abubuwa a tsawon shekaru da yawa na iya karkacewa da ɓangarorin kobo — kuma karkacewar tana dogara ne a kan *tsarin* da ake ƙara a ciki, wanda ke sa ta zama wadda ba za a iya maimaitawa ba. Jimlar kuɗi da aka yi a lissafin goma daidai (ko na lamba cikakkiyar ƙaramar naúrar) tana ƙara daidai, tana dacewa da yadda tsarin lissafin kuɗi da littattafan shigarwa biyu dole su daidaita zuwa kobo.

## Dalilin muhimmancinsa

Wannan aji ne na kwaro na manhaja da aka rubuta sosai kuma na tushe: takardar Goldberg ta 1991 ta ACM Computing Surveys "What Every Computer Scientist Should Know About Floating-Point Arithmetic" ita ce ma'aunin tunani don daidai dalilin da ya sa binary floating point ba zai iya wakiltar yawancin darajojin kuɗi na goma daidai ba, da dalilin da ya sa ƙara su da yawa ke ƙara kuskuren. Samfuran tattalin arzikin lafiya da kuɗin NHS suna ƙara shekaru da yawa da rukunan kuɗi da yawa a kai a kai — [jimillar kuɗin mallaka](../jimillar-kuɗin-mallaka/) da [binciken tasirin kasafin kuɗi](../binciken-tasirin-kasafin-kuɗi/) duka suna haɗa manyan lambobi na layukan kuɗin `f64` a tsawon shekaru da yawa. Lokacin da samfuri dole ya daidaita zuwa kobo — bincike da ke sake lissafin jimlar da hannu dole ya sami lamba *iri ɗaya* — lissafin kansa dole ya zama na goma daidai, ba floating point ba.

## Lissafin

```
Naive rollup:              total = Σ f64(line_item_i)         — order-dependent drift
Currency-safe rollup:      total = Σ Decimal(line_item_i)      — exact, reproducible

Applying a percentage adjustment (e.g. a contingency buffer):
  adjusted = total × multiplier                — exact Decimal result, may carry
                                                  more decimal places than the
                                                  currency's minor-unit exponent
  rounded  = round(adjusted, currency_exponent, rounding_rule)  — the rounding rule
                                                  (half-up vs half-even/banker's
                                                  rounding) must be stated explicitly
```

A lura da horon matakai biyu: ninka adadin `Decimal` daidai da mai ninkawa na iya samar da ɓangarorin goma fiye da yadda kuɗin ke amfani da su (ɓangarorin goma uku daga adadin ɓangarorin goma biyu ninka mai ninkawa mai ɓangarorin goma biyu, misali) — wannan daidaito na tsakiya *ba* ya zagaye ta atomatik; matakin zagaye a bayyane kawai, tare da ƙa'idar zagaye da aka bayyana, ke saukar da shi zuwa ainihin ma'aunin ƙaramar naúrar kuɗin.

## Misali da aka lissafa

Takardun kuɗi na wata-wata goma sha biyu iri ɗaya na $1,234.56 kowanne, aka ƙara a lissafin goma daidai: $1,234.56 × 12 = **$14,814.72**, daidai. Wannan ya bambanta da ƙara `f64` literal `1234.56` sau goma sha biyu a IEEE-754 double precision, wanda zai iya karkacewa da ɓangarorin kobo bisa tsarin ƙarawa — aji na kwaro na gaske, da aka rubuta, ba matsala ba ce ga samfurin da aka gina a kan lissafin `Money` na goma daidai.

Yanzu a yi amfani da daidaitaccen ƙarin tsaro na tasirin kasafin kuɗi na 5% (mai ninkawa 1.05×) a kan wannan jimlar $14,814.72: $14,814.72 × 1.05 = $15,555.456 — ɓangarorin goma uku, domin ninkawar daidai ce kuma ba a zagaye ta ta atomatik zuwa ɓangarorin goma biyu na kuɗin ba. Zagaye wannan a bayyane zuwa ɓangarorin goma 2 ta amfani da zagayen banker (half-even) yana ba da daidai **$15,555.46**.

## Alaƙa da injiniyancin manhaja

Wannan shi ne darasi kai tsaye, na tushe a bayan "manhajar kuɗi tana amfani da `Decimal`, ba `float` ba" — yana haɗuwa a bayyane da sassan [jimillar kuɗin mallaka](../jimillar-kuɗin-mallaka/) da [binciken tasirin kasafin kuɗi](../binciken-tasirin-kasafin-kuɗi/) na wannan ma'ajiya, duka biyun a yanzu suna ƙara kuɗin floating-point na yau da kullum; hujjar daidaito a nan ba ta buƙatar ƙaura da waɗannan samfura nan take ba, amma tana bayyana daidai *lokacin* da tsarin dole ya daidaita zuwa kobo kuma don haka kada ya yi amfani da binary floating point don lissafin kuɗinsa. Duba kuma [raba kuɗi daidai zuwa kobo](../raba-kuɗi-daidai-zuwa-kobo/) don matsalar abokiya ta raba (maimakon ƙara) jimloli ba tare da asarar kobo ba.

## Tarkuna

- **Mayarwa zuwa `float` a tsakiyar sarkar**: cire ƙimar kuɗi zuwa lambar floating-point a tsakiyar lissafi (wasu ɗakunan karatu na `Money` ma suna sanya wa wannan hanyar sauyawa suna kamar "lossy" a matsayin gargaɗi a bayyane) yana jefar da tabbacin daidaito a shiru ga kowane lissafi bayan wannan wurin.
- **"Decimal ya yi jinkiri don damuwa da shi"**: ƙin lissafin goma daidai a matsayin nauyi mara amfani alhali daidaito da iya dubawa — ba ɗanyen saurin ba — su ne ke da muhimmanci ga rahoton kuɗi.
- **Yin amfani da kaso na tsaro ba tare da bayyana ƙa'idar zagaye ba**: zagayen half-up da half-even (zagayen banker) na iya canza kobo na ƙarshe; al'adar zagaye kanta dole ta zama zaɓi da aka bayyana, mai iya dubawa — duba [binciken riba da kuɗi](../binciken-riba-da-kuɗi/) don jagorar Green Book ta HM Treasury kan gyaran tsaro da son zuciya na kyakkyawan fata, wanda daidai nau'in lambar da wannan matakin zagaye ake shafa ma.

## Tushe

- Fowler M. "Patterns of Enterprise Application Architecture." Addison-Wesley, 2002 — the `Money` pattern.
- Goldberg D. "What Every Computer Scientist Should Know About Floating-Point Arithmetic." ACM Computing Surveys, 1991.
- HM Treasury, The Green Book — optimism-bias and contingency guidance for budget-impact modelling. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
