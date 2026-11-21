# Shekarun Rayuwa da Aka Samu (LYG)

Shekarun rayuwa da aka samu shi ne ƙarin rayuwa da za a danganta ga shiga tsakani, ba tare da gyaran inganci ba: yankin da ke tsakanin lanƙwasar rayuwa tare da ita da ba tare da ita ba. Shekarar rayuwa mai daraja daidai da aka samu (evLYG) sigar zamani ce da ke ba da daraja daidai ga duk tsawaita rayuwa.

## Dalilin muhimmancinsa

LYG shi ne ɗanyen sakamakon lafiya: nawa ne tsawon da mutane ke rayuwa? Yana da muhimmanci lokacin da bayanan inganci suka ɓace, lokacin kwatantawa da masu sauraro masu shakkar QALY, da a fannin ciwon daji inda lanƙwasar rayuwa ita ce babban fitarwar gwaji. **evLYG** (cibiyar ICER ta Amurka tana amfani da shi tare da kuɗi/QALY) yana wanzuwa saboda dalili na ɗabi'a: QALY yana ƙimanta shekarar tsawaita rayuwa ta amfanin majiyyaci, don haka tsawaita rayuwar mai nakasa "yana ƙidayuwa ƙasa" — evLYG yana ƙimanta kowace shekara da aka tsawaita a amfani tsayayye, yana cire wannan nuna wariya.

## Lissafin

```
LYG = mean survival_new − mean survival_comparator
    = area between survival curves (restricted to the time horizon)

QALY view of life extension:  extension × patient utility
evLYG view of life extension: extension × fixed utility (ICER uses ~0.851,
                              the average US population utility)
```

Duka ana [rage darajarsu](../rage-daraja-da-fifikon-lokaci/) a samfuran tattalin arziki.

## Misali da aka lissafa

Algorithm na gargaɗin farko na sepsis a asibiti: samfuri yana nuna maganin rigakafi da wuri yana hana mutuwa 12/shekara; matsakaicin shekarun waɗannan marasa lafiya yana ba da shekarun rayuwa 8 da suka rage kowanne a amfani 0.7.

```
LYG   = 12 × 8            = 96 life-years/year
QALYs = 96 × 0.7          = 67.2
evLYG = 96 × 0.851        = 81.7
```

A £20,000 ga kowane QALY, tsarin QALY yana ƙimanta rayuwa a £1.34M/shekara; tsarin evLYG a £1.63M. Giɓin shi ne daidai hukuncin ɗabi'a game da ko shekarar rayuwa a amfani 0.7 tana da daraja 70% na "cikakkiya." Dossier masu tsanani suna bayar da rahoton duka biyun.

## Alaƙa da injiniyancin manhaja

- Binciken rayuwa kayan aiki ne da aka raba: lanƙwasar Kaplan-Meier ga marasa lafiya da ga *hidimomi* (lokaci-zuwa-gazawa, lokaci-zuwa-barin amfani) lissafi iri ɗaya ne. "Shekarun hidima da aka samu" daga jarin aminci = yankin tsakanin lanƙwasar rayuwar tsarin tare da/ba tare da — tsari mai gaskiya fiye da da'awar MTTF na maki.
- evLYG yana ɗauke da gargaɗin ƙirar ma'auni ga injiniya ma: duk ma'aunin ƙwazo da ke auna fitarwa da ma'aunin "ingancin ƙungiya" zai ƙasƙantar da ingantawa ga ƙungiyoyi masu ƙuntatawa ko masu wahala — wani lokaci kana son sigar daraja daidai da gangan.

## Tarkuna

- **Matsakaici da tsakiyar rayuwa**: samfuran tattalin arziki suna buƙatar matsakaici (yankin ƙarƙashin lanƙwasa); gwaje-gwaje akai-akai suna kanun labarai da tsaka. Suna bambanta sosai a rarrabuwa masu karkata.
- **Faɗaɗawa fiye da bin gwaji** yana mamaye LYG da aka ƙera a cututtuka na dindindin — a bayyana samfurin faɗaɗawa kuma a gwada shi a [binciken jin canji](../binciken-jin-canji/).
- **Da'awar mutuwar da aka hana daga bayanan kafin/bayan na lura** ba tare da gyara haɗin lamuri da yanayin shekaru ba.

## Tushe

- York Health Economics Consortium glossary: life-years gained. <https://yhec.co.uk/glossary/life-years-gained/>
- ICER, "Cost-Effectiveness, the QALY, and the evLYG." <https://icer.org/our-approach/methods-process/cost-effectiveness-the-qaly-and-the-evlyg/>
