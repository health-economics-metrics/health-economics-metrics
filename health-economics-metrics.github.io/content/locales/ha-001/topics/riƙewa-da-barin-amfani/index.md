# Riƙewa da Barin Amfani

Riƙewa yana auna kason ƙungiyar masu amfani da har yanzu suke aiki kwanaki N bayan farawa (lanƙwasar D1/D7/D30); barin amfani shi ne ƙarin sa. Tushen lafiyar dijital mai tsanani: **kusan 90% na masu amfani da manhajojin lafiya suna barin cikin kwanaki 30** — riƙewar D30 ta lafiyar dijital ~3–4% ce idan aka kwatanta da matsakaicin dukan manhajoji ~6%.

## Dalilin muhimmancinsa

Eysenbach ya sanya wa wannan suna a 2005: **dokar ƙarewa** — rasa masu amfani da yawa siffa ce ta asali ta tsari ta shiga tsakani na eHealth, ba kuskuren aiwatarwa ba, tare da ƙarewar gwaje-gwajen eHealth akai-akai ta wuce 50%. Sakamakon tattalin arziki gabaɗaya ne: riƙewa yana ayyana *tagar magani* da za a iya bayar da kowace fa'ida a cikinta, da [tattalin arzikin naúra](../tattalin-arzikin-naúrar-manhajar-lafiya/) — CAC da aka biya ga kowane mai amfani da ya tsaya kwanaki 12 ba ya isar da LTV ko QALY. Duk wani samfurin tattalin arziki na samfurin lafiya na masu amfani wanda ba ya auna fa'idodi da lanƙwasar riƙewa yana bayyana samfurin da babu shi.

## Lissafin

```
Retention_Dn = users active on day n / cohort size × 100
Churn rate   = users lost in period / users at period start × 100

Benefit weighting (the health-economics move):
  expected benefit per acquired user = Σ_t retention(t) × benefit rate(t)
  ≈ area under the retention curve × per-time benefit
  — NOT trial benefit × 100% of acquired users

Cost per retained-at-D30 user = CAC / D30 retention
  (at 4% D30, a £5 CAC is really £125 per retained user)
```

## Misali da aka lissafa

Manhajar lafiyar hankali: gwaji ya nuna QALY 0.02 da aka samu ga kowane mai amfani da ya kammala makonni 8. Ƙungiyar turawa ta zazzagewa 100,000, riƙewa D7 25%, D30 8%, mako na 8 4%:

```
Completers          = 100,000 × 0.04 = 4,000
QALYs delivered     = 4,000 × 0.02 = 80  (not 100,000 × 0.02 = 2,000)
At £20,000/QALY     = £1.6M of health value (not £40M)

Per-download health value = £16 — the number that should set what a
payer will pay per download, and it is 4% of the naive claim.
Retention improvement case: moving week-8 completion 4% → 6% adds
40 QALYs/year ≈ £800k — retention engineering IS health production.
```

## Alaƙa da injiniyancin manhaja

Riƙewa shi ne ma'aunin da injiniyancin samfur ke ƙera darajar lafiya kai tsaye, bisa lissafin sama. Ayyukan da ke motsa shi na yau da kullum ne: lokacin-zuwa-ƙima-ta-farko na shiga, ƙirar sake jan hankali, aiki, kuma musamman **kammala adadin da aka tsara** — shirin da ke da ƙarshe bayyananne (makonni 8, sannan kammala) ya kamata ya auna *kammalawa*, ba DAU na har abada ba, yana daidaita ma'aunin da samfurin asibiti maimakon samfurin kulawa da talla ke ɗaukar nauyi. Binciken rayuwa shi ne kayan aikin da ya dace (lissafin Kaplan-Meier iri ɗaya da [shekarun rayuwa da aka samu](../shekarun-rayuwa-da-aka-samu/)); raba lanƙwasa bisa tashar samun masu amfani, domin gauraya ta tasha tana canza riƙewa fiye da yawancin siffofi.

## Tarkuna

- **Wanke niyyar-magani a akasin haka**: gwaje-gwaje suna ba da rahoton waɗanda suka kammala; tattalin arzikin turawa dole ya ƙirga duk wanda aka samu (babban gargaɗin Eysenbach).
- **Wasan kwaikwayon riƙewa**: masu amfani "masu aiki" da sanarwa ke tuƙawa waɗanda ba su taɓa yin aikin magani ba (duba [ma'aunan shiga aiki](../ma-aunan-shiga-aiki/)).
- **Kwatanta lanƙwasa a ma'anoni daban-daban**: "mai aiki" da aka ayyana a matsayin buɗewa da aiki mai ma'ana yana canza D30 ninki da dama.
- **Watsi da wanda ke barin amfani**: idan mafi rashin lafiya sun fi barin da sauri, fa'idodin kowane mai amfani suna faɗuwa yayin da riƙewa ke inganta a tsakanin masu lafiya — haɗa lanƙwasa da gauraya na marasa lafiya (duba [isa da adalci](../isa-da-adalci/)).

## Tushe

- Eysenbach G. "The law of attrition." JMIR 2005;7(1):e11. <https://www.jmir.org/2005/1/e11/>
- Mobile app retention benchmarks. <https://uxcam.com/blog/mobile-app-retention-benchmarks/>
- Healthcare product benchmarks. <https://userpilot.com/blog/healthcare-product-metrics-benchmark-report/>
