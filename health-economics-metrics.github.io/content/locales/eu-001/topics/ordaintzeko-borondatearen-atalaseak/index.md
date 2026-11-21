# Ordaintzeko borondatearen atalaseak (Willingness-to-Pay Thresholds)

Ordaintzeko borondatearen (WTP) atalasea erabakitzaile batek osasun-irabazi unitate bakoitzeko ordainduko duen gehienezkoa da — [ICER](../kostu-eraginkortasun-gehigarriaren-ratioa/) bat hartu/baztertu erabaki bihurtzen duen lerroa.

## Zergatik axola duen

Atalasea osasun-ekonomiak neurketa izateari utzi eta politika bihurtzen den lekua da. Sistema nazional guztiek bat dute, esplizitua edo inplizitua, eta tokiko zenbakia ezagutzeak osasun-balioaren aldarrikapen bat nola prezioa jarri zehazki esaten dizu:

| Erakundea | Atalasea (ikertu bezala, 2024–2025) |
|---|---|
| NICE (England) | £20,000–£30,000 per QALY; empirical average decision threshold ≈ £24,400 (2022–24); severity modifiers raise effective ceiling to ~£36k–£51k; highly specialized technologies up to £100k+ |
| ICER (US, non-governmental) | $100,000–$150,000 per QALY/evLYG price benchmarks; reports $50k–$200k range |
| Canada (CADTH / CDA-AMC) | ≈ CAD$50,000 per QALY working threshold |
| WHO-CHOICE (historical, global) | 1–3× GDP per capita per DALY averted (now discouraged as too blunt) |
| Empirical UK supply side (Claxton et al.) | ≈ £13,000 per QALY actually displaced at the NHS margin |

## Matematika

λ atalasea erabaki-arau guztietan sartzen da:

```
Adopt if ICER = ΔC/ΔE < λ
Equivalently: adopt if NMB = λ×ΔE − ΔC > 0
```

λ *zer den* azaltzen duten bi teoria:

- **Eskari-aldea**: gizarteak osasunagatik ordaintzeko prest dagoena (balio-judizioa).
- **Eskaintza-aldea**: aurrekontuak gaur marjinan sortzen duen osasuna (kantitate enpirikoa — Claxtonen ~£13k/QALY). Erabakietarako erabilitako λ eskaintza-aldeko tasa baino handiagoa bada, teknologia berria onartzeak gehitzen duena baino osasun gehiago desplazatzen du.

## Adibide landua

Zure terapeutika digitalak 0.05 QALY entregatzen ditu tratatutako paziente bakoitzeko, £800ko kostu garbiarekin (prezioa ken konpentsazioak).

```
ICER = 800 / 0.05 = £16,000 per QALY
```

- England: £20k azpitik → finantzagarria. Defendagarria den gehienezko prezioa: λ = £20,000-n, price_max = 0.05 × 20,000 + offsets = £1,000 + offsets.
- AEBetako esparru komertziala $150k/QALYn: balioan oinarritutako prezioa askoz handiagoa da.
- Biztanleko BPGko $4,000ko atalasea duen herrialde bat: produktu berak ~$200 baino gutxiago kostatu behar du garbi.

Produktu bera, hiru merkatu, hiru prezio — atalasea *da* prezio-eredua. Hau balioan oinarritutako prezioa da, λtik alderantziz exekutatua.

## Software ingeniaritzarekin lotura

Ingeniaritza-erakunde guztiek λ inplizitu bat dute: ingeniari-ordu aurreztuko tresnak finantzatzen dituen oztopoa. Esplizitu bihurtzeak —"ingeniari-ordu sinesgarri aurreztuko £40 azpiko edozer finantzatzen dugu"— plataforma-inbertsioen sailkapen-taulen alderaketa ahalbidetzen du, QALY bakoitzeko kostuaren sailkapen-taulek osasun-gastua sailkatzen duten bezala. Eskaintza-aldeko ikasgaia ere transferitzen da: zure benetako barne λ zure *oraingo* backlogak marjinan sortzen duena da, ez zuzendaritzak denborak balio duela esaten duena.

## Tranpak

- **Atalase-erosketa** jurisdikzioen artean edo HST mugaren aipamena produktu arruntarentzat.
- **λ prezio-zoru gisa tratatzea**: atalasea gainditzea beharrezkoa da, ez nahikoa — [aurrekontuaren inpaktuak](../aurrekontu-inpaktuaren-analisia/) unitateko ordaindu daitekeen produktua hondoratu dezake.
- **Atalaseak mugitzen direla ez ikustea**: NICEren larritasun-aldatzaileek (2022) eta aldizkako berrikuspenek λ eraginkorra aldatzen dute; datatu zure aldarrikapenak.
- **ICER bat beste moneta bateko atalase baten aurka lehenik bihurtu gabe alderatzea**: ikus [monetak gurutzatutako ICER alderaketa](../moneta-arteko-icer-konparaketa/) — bihurketa-metodoa (erosteko ahalmenaren paritatea vs merkatuko truke-tasa) metodologikoki garrantzitsua da, ez biribilketa-xehetasuna.
- **λn oinarritutako balioespena lan-merkatuko VSL/VPF tradizioarekin nahastea**: tradizio teoriko ezberdinetatik datoz (osasun-aurrekontuak mugatutako metodologia vs soldata-arrisku trukeetatik agerian utzitako lehentasuna) eta ez dira beti bateragarriak — bizitza baloratzeko agerian utzitako lehentasunaren ikuspegi alternatiborako, ikus [bizitza estatistikoaren balioa](../bizitza-estatistikoaren-balioa/).

## Iturriak

- NICE: changes to cost-effectiveness thresholds. <https://www.nice.org.uk/news/articles/changes-to-nice-s-cost-effectiveness-thresholds-confirmed>
- Empirical NICE threshold analysis, Value in Health 2024. <https://www.sciencedirect.com/science/article/pii/S1098301524000858>
- Claxton K, et al. HTA 2015;19(14). <https://www.journalslibrary.nihr.ac.uk/hta/hta19140/>
- ICER 2023 Value Assessment Framework. <https://icer.org/wp-content/uploads/2023/09/ICER_2023_VAF_For-Publication_092523.pdf>
