# Metrike kvalitete AI-ja

Metrike ispravnosti izlaza koji generira AI: točnost naspram stvarne istine, **vjernost/utemeljenost** (je li svaka tvrdnja podržana danim kontekstom?) i **stopa halucinacija** (koji udio izlaza sadrži nepodržan ili lažan sadržaj?). U zdravstvenim okruženjima to nisu kvalitetne ljepote — to su stope štete.

## Zašto je važno

Medicinska mjerila izmjerila su stope halucinacija **iznad 60 % za neutemeljene LLM-ove** na medicinskim zadacima (neki otvoreni modeli >80 %), dok utemeljenje, dohvaćanje i načini zaključivanja drastično smanjuju stope (npr. GPT-5-ov način razmišljanja smanjio je halucinacije HealthBench-a s 3,6 % na 1,6 % na jednom mjerilu). Halucinirana doza ili izmišljena citacija u kliničkom tijeku rada je **događaj lažne informacije s putem štete** — pripada u granu šteta svakog ekonomskog modela, cijenjen kao lažno pozitivni iz [ekonomije probira](../ekonomija-probira/): svaki pokreće nizvodni trošak (djelovanje na pogrešnoj informaciji, rad provjere, medicinsko-pravna izloženost, narušeno povjerenje).

## Matematika

```
Stopa halucinacija = izlazi koji sadrže nepodržan/lažan sadržaj / ukupni izlazi
  intrinzična:  proturječi danom kontekstu
  ekstrinzična: neprovjerljiva izmišljotina izvan konteksta

Vjernost (u stilu RAGAS) = podržane tvrdnje u odgovoru / ukupne tvrdnje u odgovoru
Preciznost/odziv konteksta = kvaliteta dohvaćanja koje hrani generator

Ekonomsko ponderiranje — sve halucinacije ne koštaju jednako:
  očekivani trošak štete = Σ po vrstama pogrešaka (stopa × P(neotkriveno) ×
                           P(djelovano) × trošak po pogrešci na koju se djelovalo)
  Sloj ljudske provjere određuje P(neotkriveno) — a njegov trošak također
  pripada u model (minute recenzenta × volumen).
```

## Riješeni primjer

AI asistent za kliničko kodiranje obrađuje 200.000 epizoda godišnje; revizija pokazuje da 2 % izlaza sadrži materijalnu pogrešku kodiranja; ljudski kodiranti hvataju 85 % njih:

```
Pogreške koje stignu do predaje = 200,000 × 0.02 × 0.15 = 600/godišnje
Trošak po neuhvaćenoj pogrešci (prosj. pogrešnog obračuna + izloženost reviziji) ≈ £250
Očekivani trošak pogrešaka    = 600 × 250 = £150,000/godišnje
Trošak provjere (2 min × 200k × £0.50/min) = £200,000/godišnje

Slučaj poboljšanja: utemeljenje dohvaćanjem smanjuje stopu pogrešaka na 0.8%
→ neuhvaćene pogreške 240, trošak pogrešaka £60,000 (−£90k/god); vrijeme provjere
  također može pasti (uzorkovanje umjesto pune provjere) — ulaganje u kvalitetu
  isplati se prije ikakve tvrdnje o brzini.
```

## Veza sa softverskim inženjerstvom

Kvalitetu modela tretirajte kao ekonomiju pokrivenosti testovima, uz zdravstvenu disciplinu: **skupovi za evaluaciju su vaše kliničko ispitivanje** — unaprijed registrirani, reprezentativni za *vaš* sastav slučajeva, osvježavani naspram pomaka; **utemeljenje nadmašuje veličinu** za činjenične zadatke (dohvaćanje + upit koji zahtijeva citiranje obično je najjeftinije dostupno smanjenje halucinacija — usp. [jediničnu ekonomiju inferencije](../jedinična-ekonomija-inferencije/) za njegovu režiju tokena); i **objavite radnu točku**: kao [osjetljivost/specifičnost](../evaluacija-kliničkog-ai-ja/), „97 % vjerno” ne znači ništa bez distribucije zadataka i praga detekcije. Matematika sloja provjere gore je ista aritmetika [NNT/NNH](../broj-potreban-za-liječenje/) kao svaka vrata probira.

## Zamke

- **Presađivanje s mjerila u produkciju**: stope halucinacija jako ovise o zadatku; vaš sastav slučajeva jedino je mjerilo koje se računa.
- **Neocijenjena ljudska provjera**: „kliničar sve provjerava” prepolovljuje korist i mora se pojaviti u stavci troška — a budnost slabi (samozadovoljstvo automatizacijom), pa P(neotkriveno) raste s povjerenjem.
- **Optimizacija prosječne kvalitete dok rep rizika nosi štetu**: jedna izmišljena bilješka o alergiji nadmašuje tisuću nespretnih fraza; ponderirajte pogreške posljedicom, prema formuli očekivane štete.

## Izvori

- Hallucination evaluation methods and metrics. <https://www.braintrust.dev/articles/ai-hallucination-evaluations-metrics-methods-2026>
- Medical LLM hallucination statistics. <https://sqmagazine.co.uk/llm-hallucination-statistics/>
- RAG faithfulness metrics. <https://www.getmaxim.ai/articles/measuring-llm-hallucinations-the-metrics-that-actually-matter-for-reliable-ai-apps/>
