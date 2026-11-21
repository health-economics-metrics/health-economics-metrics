# Kostu-utilitate analisia (Cost-Utility Analysis, CUA)

CUA **emaitza generiko eta lehentasunen arabera haztatua** duen kostu-eraginkortasun analisia da — ia beti [QALY](../kalitatez-doitutako-bizi-urtea/) (edo saihestutako [DALY](../ezgaitasunez-doitutako-bizi-urtea/)). Emaitza-unitatea unibertsala denez, CUAk erabat desberdinak diren gaixotasunen esku-hartzeak alderatu ditzake.

## Zergatik axola duen

Osasun-zerbitzu nazional batek minbiziaren aurkako sendagai bat, osasun mentaleko aplikazio bat eta kirurgia-robot bat aukeratu behar ditu aurrekontu bakar batetik. Unitate naturalek ezin dituzte alderatu; QALYek bai. CUA da, beraz, NICEren eta HTA erakunde gehienen erreferentzia-kasuko metodoa: bere irteera — QALY bakoitzeko kostua, [atalase](../ordaintzeko-borondatearen-atalaseak/) baten aurka epaitua — osasun-politikak duen truke-tasa unibertsalaren hurbilena da. Zure softwarea *beste zerbaiten ordez* finantzatzea nahi baduzu, CUA da arena.

## Matematika

```
ICUR = ΔKostua / ΔQALY      (ICERa efektu-unitate gisa QALYekin)

ΔQALY = Σ (iraupena_i × utilitatea_i)_berria − Σ (iraupena_i × utilitatea_i)_zaharra
```

Utilitateak tresna balioztatuetatik ([EQ-5D](../eq-5d/)); kostuak eta QALYak biak [eguneratuak](../eguneratzea-eta-denbora-lehentasuna/) %3,5ean (NICEren erreferentzia-kasua); ziurgabetasuna [PSA](../sentikortasun-analisi-probabilistikoa/) bidez.

## Adibide landua

Antsietate moderaturako TCC aplikazio bat vs aurrez aurreko terapiarako itxaron-zerrenda, pazienteko:

```
Kostuak: aplikazio-lizentzia + laguntza        £250
         ordezkatutako terapia                 −£680   (erabiltzaileen %40ek ez dute gehiago behar)
         ΔC = 250 − 680 = −£430 (dirua aurrezten du)

QALYak:  6 hilabete 0.76 utilitatearekin 0.68ren ordez itxaroten ari diren bitartean
         ΔE = 0.5 × (0.76 − 0.68) = +0.04 QALY
```

ΔC < 0 eta ΔE > 0: aplikazioak **menderatzen du** — hobea eta merkeagoa, ratiorik ez da behar. Terapia-ordezkapenaren hipotesia %10 bakarrik balitz, ΔC = 250 − 170 = +£80, eta ICUR = 80 / 0.04 = **£2,000/QALY** — oraindik £20,000 baino askoz txikiagoa. Kasuak irauten du funtsezko hipotesia murriztuta ere: horrela itxura du CUA sendo batek (eta [tornado diagramak](../sentikortasun-analisia/) frogatzen du).

## Software ingeniaritzarekin lotura

CUAren ideia sakona — *lehentasunen arabera haztatutako unitate konposatu bakarra elkarren antzekoak ez direnak alderatzeko* — ingeniaritza-inbertsio desberdinak (segurtasuna vs garatzaile-esperientzia vs fidagarritasuna) alderatzeko ereduaren patroia da. Aukera zintzoak unitate konposatu defendagarri bat (arraroa) edo [kostu-ondorio taula](../kostu-ondorio-analisia/) esplizitu bat (ohikoa) dira. CUAk ohartarazten duena konposatu faltsuaren aurka da: pisuak gerora doitu dituen "inpaktu-puntuazio" haztatua, nahi den aukerak irabazteko. Osasun-ekonomiak hamarkadak eman ditu utilitate-lorpena estandarizatzen pisuek konparaketaren aurretik joan daitezen.

## Tranpak

- **Tresnaren sentsibilitatearen azpiko utilitate-irabaziak** (ikus aldaketa kliniko garrantzitsu minimoa [pazienteek jakinarazitako emaitzak](../pazienteek-jakinarazitako-emaitzak/)-n) — ΔE txikia × populazio handiak trikimailu klasikoa da.
- **Konparatzailearen arreta-ordezkapena falta** — produktu digitalen kostu-termino handiena maiz ordezkatzen dutena da.
- **Lehentasun-gabeko puntuazioak utilitatera mapatzea** balioztatu gabeko ordainketa-taulekin.

## Iturriak

- York Health Economics Consortium glossary: cost-utility analysis. <https://yhec.co.uk/glossary/cost-utility-analysis/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
