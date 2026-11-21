# Ishodi koje prijavljuju pacijenti (PROM, PREM, MCID)

PROM-ovi su standardizirani instrumenti u kojima pacijenti sami prijavljuju svoje zdravstveno stanje (simptome, funkciju, kvalitetu života); PREM-ovi bilježe *iskustvo* skrbi. **MCID** — minimalna klinički važna razlika — je najmanja promjena rezultata koju pacijenti zaista doživljavaju kao korisnu: letvica koju mora preći svako tvrđeno poboljšanje.

## Zašto je važno

PROM-ovi su primarna valuta učinkovitosti digitalnog zdravlja: aplikacije rijetko pomiču smrtnost, ali mogu vjerodostojno pomaknuti validirane rezultate simptoma. Instrumenti koji su važni su malobrojni i standardizirani — **PHQ-9** (depresija, 0–27; pojasevi težine na 5/10/15/20), **GAD-7** (anksioznost, 0–21; pojasevi na 5/10/15), **EQ-5D** (korisnost za [QALY-je](../godina-života-prilagođena-kvaliteti/)) — a regulatori, HTA tijela i platitelji prihvaćaju ih upravo zato što su usporedivi među proizvodima i ispitivanjima. MCID je vrata poštenja: MCID za PHQ-9 ≈ 5 bodova, GAD-7 ≈ 4, EQ-5D indeks obično ~0,03–0,08 — statistički značajna promjena PHQ-9 od 1,5 boda na velikom uzorku je *stvarna, ali klinički besmislena*, a recenzent dokaza to će reći.

## Matematika

```
PROM bodovanje: zbrojevi specifični za instrument (npr. PHQ-9 = Σ 9 čestica × 0–3)

Procjena MCID-a:
  temeljena na sidru:        promjena rezultata među pacijentima koji prijavljuju „nešto bolje”
  temeljena na distribuciji: ≈ 0.5 × SD osnovnih rezultata (gruba heuristika)

Okvir stope odgovora (za ispitivanja i dosjee):
  odgovarač = pacijent koji se poboljša ≥ MCID (ili ≥50% za PHQ-9 konvenciju)
  NNT = 1 / (stopa odgovarača_liječenje − stopa odgovarača_kontrola)
  — vidi number-needed-to-treat.md
```

## Riješeni primjer

Aplikacija za podršku kod depresije, RCT naspram liste čekanja, 12 tjedana:

```
PHQ-9 promjena: aplikacija −6.2 boda, kontrola −2.1 → prilagođena razlika −4.1
Provjera MCID-a: 4.1 < 5 → prosječna razlika ispod MCID-a; iskažite umjesto toga odgovarače:
  odgovarači (pad ≥5 bodova): aplikacija 48%, kontrola 22% → ARR 26%
  NNT = 1/0.26 ≈ 4 — četiri liječena korisnika po dodatnom kliničkom odgovoru

Ekonomski most: EQ-5D dobitak odgovarača 0.06 održan 6 mjeseci
  = 0.03 QALY-ja; na 1,000 korisnika: 260 dodatnih odgovarača × 0.03 = 7.8 QALY-ja
  ≈ £156,000–£234,000 zdravstvene vrijednosti pri pragovima NICE-a
```

Okvir odgovarača/NNT preživljava recenziju tamo gdje bi razlika prosjeka ispod MCID-a bila odbačena.

## Veza sa softverskim inženjerstvom

PROM-ovi su problem prikupljanja podataka koji je softver jedinstveno sposoban riješiti: instrumenti u aplikaciji postižu stope dovršetka i longitudinalnu gustoću koju papir nikad nije postigao, pretvarajući rutinsku telemetriju proizvoda u dokaze razine HTA ([EQ-5D](../eq-5d/) je pet ekrana). Inženjerska pravila: koristite validirani instrument *doslovno* (preformuliranje ga poništava — vrijedi licenciranje); raspoređujte mjerenje prema protokolu, a ne prema pogodnosti angažmana (mjerenje samo aktivnih korisnika je pristranost preživjelih — vidi [zadržavanje](../zadržavanje-i-odljev/)); i verzijski zaključajte podatke instrumenta kao svaku shemu — promjena formulacije usred studije je korupcija podataka. PREM-ovi se preslikavaju na instrumente u stilu CSAT/NPS, a vrijedi ista lekcija: standardizirano pobjeđuje domaće gdje je publika platitelj. Za instrument specifičan za radnu produktivnost vidi [WPAI](../narušenost-radne-produktivnosti-i-aktivnosti/).

## Zamke

- **Statistička značajnost ispod MCID-a** predstavljena kao klinička korist — najčešće napuhavanje u struci.
- **Regresija prema sredini**: korisnici se uključuju na vrhuncima simptoma; jednokračni prije/poslije jako precjenjuje — komparatori nisu pregovorni.
- **Kupovina instrumenta**: provođenje PHQ-9, GAD-7 i WHO-5, pa iskazivanje onoga što se pomaklo — unaprijed registrirajte primarni.
- **Pritisak ankete uz digitalni pristanak**: guranje korisnika prema povoljnim odgovorima kvari instrument (a recenzenti znaju osnovne stope).

## Izvori

- MCID estimation review (EQ-5D). <https://pmc.ncbi.nlm.nih.gov/articles/PMC10526144/>
- PROMs vs PREMs primer. <https://www.forcetherapeutics.com/blog/whats-the-difference-between-pros-proms-pro-pms-and-prems>
- Kroenke K, et al. PHQ-9 validation literature. <https://pubmed.ncbi.nlm.nih.gov/11556941/>
