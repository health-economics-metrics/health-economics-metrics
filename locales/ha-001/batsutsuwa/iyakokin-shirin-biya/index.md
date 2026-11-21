# Iyakokin Shirin Biya

Iyakar shirin biya (WTP) ita ce mafi yawan abin da mai yanke shawara zai biya ga kowace naúrar ribar lafiya — layin da ke mayar da [ICER](../rabon-ƙarin-tasirin-kuɗi/) zuwa shawarar karɓa/ƙi.

## Dalilin muhimmancinsa

Iyaka ita ce inda tattalin arzikin lafiya ya daina zama aunawa ya zama manufa. Kowane tsarin ƙasa yana da ɗaya, a bayyane ko a fakaice, kuma sanin lambar gida yana gaya maka daidai yadda za a yi wa da'awar darajar lafiya farashi:

| Hukuma | Iyaka (kamar yadda aka bincika, 2024–2025) |
|---|---|
| NICE (Ingila) | £20,000–£30,000 ga kowane QALY; matsakaicin iyakar shawara ta zahiri ≈ £24,400 (2022–24); masu gyaran tsanani suna ɗaga rufin tasiri zuwa ~£36k–£51k; fasahohi na musamman sosai har £100k+ |
| ICER (Amurka, ba na gwamnati ba) | ma'aunan farashi $100,000–$150,000 ga kowane QALY/evLYG; yana ba da rahoton kewayon $50k–$200k |
| Kanada (CADTH / CDA-AMC) | ≈ CAD$50,000 ga kowane QALY iyakar aiki |
| WHO-CHOICE (na tarihi, na duniya) | 1–3× GDP ga kowane mutum ga kowane DALY da aka kauce wa (yanzu ba a ba da shawara ba saboda ya yi sauƙi) |
| Ɓangaren samarwa na Burtaniya na zahiri (Claxton et al.) | ≈ £13,000 ga kowane QALY da aka maye gurbi a gaskiya a iyakar NHS |

## Lissafin

Iyakar λ tana shiga kowace ƙa'idar shawara:

```
Adopt if ICER = ΔC/ΔE < λ
Equivalently: adopt if NMB = λ×ΔE − ΔC > 0
```

Ka'idoji biyu na menene λ *take*:

- **Ɓangaren buƙata**: abin da al'umma ke son biya don lafiya (hukuncin daraja).
- **Ɓangaren samarwa**: lafiyar da kasafi ke samarwa a iyaka a yanzu (adadi na zahiri — ~£13k/QALY na Claxton). Idan λ da ake amfani da ita don shawarwari ta wuce adadin ɓangaren samarwa, amincewa da sabuwar fasaha tana maye gurbin lafiya fiye da yadda take ƙarawa.

## Misali da aka lissafa

Maganin dijital naka yana isar da QALY 0.05 ga kowane majiyyaci da aka yi wa magani a kuɗin net (farashi rage tanade-tanade) £800.

```
ICER = 800 / 0.05 = £16,000 per QALY
```

- Ingila: ƙasa da £20k → ana iya ba da kuɗi. Mafi girman farashi da za a iya kare: a λ = £20,000, price_max = 0.05 × 20,000 + offsets = £1,000 + offsets.
- Tsarin kasuwanci na Amurka a $150k/QALY: farashin bisa daraja ya fi girma sosai.
- Iyakar ƙasa mai GDP ga kowane mutum $4,000: samfurin ɗaya dole ya kashe ƙasa da ~$200 net.

Samfuri ɗaya, kasuwanni uku, farashi uku — iyaka *ita ce* samfurin farashi. Wannan farashi ne bisa daraja, da aka gudanar a baya daga λ.

## Alaƙa da injiniyancin manhaja

Kowace ƙungiyar injiniya tana da λ ta fakaice: matakin da take ba da kuɗin kayan aiki ga kowace sa'ar injiniya da aka ceta. Bayyana ta — "muna ba da kuɗi ga duk abin da ke ƙasa da £40 ga kowace sa'ar injiniya da aka ceta cikin sahihanci" — yana ba da damar kwatancen teburin gasa na jarin dandali, daidai yadda teburin gasa na kuɗi-ga-QALY ke jera kashe kuɗin lafiya. Darasin ɓangaren samarwa shi ma yana canjawa: ainihin λ ɗinka ta cikin gida ita ce abin da tarin aikinka *na yanzu* ke samarwa a iyaka, ba abin da shugabanci ke cewa lokaci yana da daraja ba.

## Tarkuna

- **Zaɓen iyaka** a faɗin hukunce-hukunce ko ambaton rufin HST ga samfurin yau da kullum.
- **Ɗaukar λ a matsayin ƙasan farashi**: cika iyaka yana da muhimmanci, ba isa ba — [tasirin kasafin kuɗi](../binciken-tasirin-kasafin-kuɗi/) na iya nutsar da samfurin da ke da araha ga kowace naúra.
- **Watsi da cewa iyakoki suna motsawa**: masu gyaran tsanani na NICE (2022) da bita na lokaci-lokaci suna canza λ mai tasiri; sanya kwanan wata a da'awarka.
- **Kwatanta ICER da iyaka a wani kuɗi daban ba tare da canzawa tukuna ba**: duba [kwatanta ICER tsakanin kuɗaɗe](../kwatanta-icer-tsakanin-kuɗaɗe/) — hanyar canzawa (daidaiton ikon saye da canjin kasuwa) tana da sakamako na hanya, ba bayanin zagaye ba.
- **Rikita ƙimar da ta dogara da λ da al'adar VSL/VPF ta kasuwar ƙwadago**: sun fito daga al'adun ka'ida daban (hanyar da kasafin lafiya ke ƙuntatawa da fifikon da aka bayyana daga musanyar albashi-haɗari) kuma ba koyaushe ake daidaita su — don madadin hanyar fifikon da aka bayyana na darajar rayuwa, duba [Darajar Rayuwar Ƙididdiga](../darajar-rayuwar-ƙididdiga/).

## Tushe

- NICE: changes to cost-effectiveness thresholds. <https://www.nice.org.uk/news/articles/changes-to-nice-s-cost-effectiveness-thresholds-confirmed>
- Empirical NICE threshold analysis, Value in Health 2024. <https://www.sciencedirect.com/science/article/pii/S1098301524000858>
- Claxton K, et al. HTA 2015;19(14). <https://www.journalslibrary.nihr.ac.uk/hta/hta19140/>
- ICER 2023 Value Assessment Framework. <https://icer.org/wp-content/uploads/2023/09/ICER_2023_VAF_For-Publication_092523.pdf>
