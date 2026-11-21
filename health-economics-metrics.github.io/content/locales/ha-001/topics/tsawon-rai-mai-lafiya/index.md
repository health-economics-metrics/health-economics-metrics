# Tsawon Rai Mai Lafiya (HALE)

HALE taƙaitaccen bayani ne na matakin al'umma: adadin shekarun da mutum zai iya tsammanin rayuwa *cikin cikakkiyar lafiya*, ba tare da ƙidaya shekarun da aka kwashe cikin rashin lafiya ko nakasa ba. HALE na duniya a haihuwa ya kai kusan shekaru 61.9 da tsawon rai na 73.3 (WHO, bayanan 2019) — bil'adama suna rayuwa shekarun su na ƙarshe, a matsakaici, cikin ƙasa da cikakkiyar lafiya.

## Dalilin muhimmancinsa

HALE shi ne ma'aunin arewa na manufofin lafiyar ƙasa da duniya — lambar "tsufa cikin lafiya" da giɓin da yake bayyanawa (tsawon rai ragewa HALE) shi ne nauyin da rigakafi, shiga tsakani da wuri, da sarrafa cututtuka na dindindin ke nufin rufewa. Ana tabbatar da dabarun lafiyar dijital na matakin ma'aikata a harshen HALE; jerin manhajoji, hidimomin gwajin bincike, da shirye-shiryen sa ido a ƙarshe suna taruwa a nan.

## Lissafin

Daidaitaccen lissafi shi ne **hanyar Sullivan**:

```
HALE_age_x = Σ (life-table person-years at each age ≥ x × proportion in full health)
             / survivors at age x

"proportion in full health" = 1 − Σ (prevalence_condition × disability weight)
```

Abubuwan shigarwa: daidaitaccen teburin rayuwa tare da yaɗuwa da nauyin nakasa don yanayin lafiya (daga bayanan Global Burden of Disease). HALE yana da alaƙa da [DALY](../shekarar-rayuwa-da-aka-daidaita-da-nakasa/) — nauyin DALY na al'umma da giɓin HALE ra'ayoyi biyu ne na lafiyar da aka rasa iri ɗaya.

## Misali da aka lissafa

Shirin hawan jini na dijital na ƙasa: mutane 500,000 da aka yi wa rajista, matsakaicin sarrafa hawan jini yana inganta isa don rage faruwar bugun jini da maki 0.2 na kashi/shekara. A cikin samfurin rayuwar ƙungiyar, bugun jini da aka kauce wa yana ceton shekaru 15,000 masu nauyin nakasa (YLD a nauyi 0.32 tare da YLL daga bugun jini masu kisa).

```
HALE contribution ≈ 15,000 healthy years / 500,000 people
                  ≈ 0.03 years (≈ 11 days) of HALE per enrolled person
```

Kwana goma sha ɗaya suna ji ƙanana — amma a girman al'umma wannan shi ne yadda ma'aunan ƙasa ke motsawa a zahiri: ma'aikatu suna sayen miliyoyin ƙananan ribobin kowane mutum. Wannan lissafin kuma yana nuna dalilin da ya sa **isa ke mamayewa**: shiga tsakani mai tasiri sau biyu amma tare da kashi ɗaya cikin goma na rajista yana motsa HALE sau biyar ƙasa. Duba [isa da adalci](../isa-da-adalci/).

## Alaƙa da injiniyancin manhaja

HALE tsarin ma'aunin lafiyar rundunar ne: **tsammanin rayuwar hidima × kason wannan rayuwar da aka kwashe cikin lafiya**. Ƙungiyar dandamali za ta iya lissafa "tsammanin rayuwar hidima mai lafiya" a faɗin kayanta — shekarun da ake tsammanin hidima za ta yi aiki, an rage su da lokacin da aka kwashe a yanayin lalacewa, an daina tallafawa, ko abubuwan da suka faru (nauyi daga gibin SLO). Yana sake tsara amincin aiki daga samuwa ta lokaci-ɗaya zuwa lafiyar rayuwa gabaɗaya, kuma yana jagorantar gyara a kan tsarin da ke jan HALE na kayan zuwa ƙasa.

## Tarkuna

- **HALE yana motsawa a hankali kuma ta dalilai da yawa** — babu shiga tsakani ɗaya da "ke motsa HALE" da za a iya aunawa; a yi da'awar gudummawar da aka ƙera, ba alkaluman ƙasa ba.
- **Bayanan yaɗuwa suna jinkiri** shekaru; ribobin kwanan nan ba za su bayyana a HALE na hukuma ba.
- **Kwatanta HALE tsakanin ƙasashe** masu auna yanayin lafiya daban yana da haɗari; a yi amfani da shi a tsawon lokaci a cikin tsari ɗaya.

## Tushe

- WHO indicator registry: HALE. <https://www.who.int/data/gho/indicator-metadata-registry/imr-details/66>
- Global Burden of Disease study (IHME). <https://www.healthdata.org/research-analysis/gbd>
