# Povrat ulaganja u AI

ROI AI-ja je mjerljiv povrat u P&L-u pripisiv AI inicijativama. Otrežnjujuće mjerilo: MIT-ovo istraživanje „GenAI Divide” iz 2025. pokazalo je da je unatoč 30–40 mlrd. $ ulaganja poduzeća u GenAI **~95 % pilota pokazalo nikakav mjerljiv povrat u P&L-u** — a uspješnih 5 dijelilo je prepoznatljive navike.

## Zašto je važno

Zdravstveni sustavi imaju ime za obrazac AI pilota: **pilotitis** — NHS-ovo groblje obećavajućih aplikacija pilotiranih zauvijek, a nikad skaliranih. MIT-ovi nalazi čisto se preslikavaju na ono što procjena zdravstvenih tehnologija već zna: tvrdnje o vrijednosti trebaju unaprijed određene ishode, pripisivanje treba komparatore, a „svi osjećaju da pomaže” nije stavka koristi. Uspješna manjina u MIT-ovim podacima koncentrirala se u automatizaciji pozadinskih poslova s troškovnim osnovnim linijama koje se mogu pratiti, a **kupljeni alati uspijevali su ~67 % vremena naspram internih izgradnji otprilike trećinu toga** — prioris koji pripadaju u svaki slučaj ulaganja u AI (vidi [izgradi ili kupi](../izgradi-ili-kupi/)).

## Matematika

```
AI ROI = (pripisiva korist − ukupni AI trošak) / ukupni AI trošak

Ukupni AI trošak = licence/inferencija (vidi inference-unit-economics.md)
                 + integracija + spremnost podataka + evaluacija
                 + redizajn tijeka rada + upravljanje/jamstvo
                 (licenca je tipično manjina nazivnika)

Pripisiva korist: mjerena naspram osnovne linije ili kontrole, razvrstana kao
gotovina / kapacitet / kvaliteta prema cash-releasing-vs-non-cash-releasing.md
```

## Riješeni primjer

Bolnička grupa uvodi AI za dva slučaja uporabe:

```
Slučaj A — izrada kliničkih pisama (pozadinski posao, prati se):
  osnovno: eksternalizirana transkripcija £380k/god
  poslije: ugovor o transkripciji otkazan; vrijeme pregleda kliničara +£60k
  AI trošak: £120k/god sve uključeno
  ROI = (380k − 60k − 120k) / 120k ≈ 167% — oslobađa gotovinu, provjerljivo ✓

Slučaj B — „AI kopilot za kliničare” (širok, ne prati se):
  tvrdnja o koristi: „štedi vrijeme kroz 4,000 zaposlenika” — osnovna linija nije utvrđena
  izmjereni učinak na P&L: nije dokaziv
  → kanta od 95%, bez obzira pomaže li doista
```

Razlika nije kvaliteta AI-ja — nego ima li korist **osnovnu liniju, vlasnika i proračunsku stavku** ([ostvarenje koristi](../ostvarenje-koristi/)).

## Veza sa softverskim inženjerstvom

Priručnik za ulaganje u AI oblikovan prema HTA-u: **stupnjujte dokaze kao [razine NICE ESF-a](../nice-evidence-standards-framework/)** — dokazi razine demoa za alate niskih uloga, kontrolirani piloti prije potrošnje u cijeloj organizaciji, s unaprijed registriranim vratima uvođenja (obrazac [DiGA-inog](../njemački-diga-fast-track/) privremenog popisa s rokom); **izbjegnuti trošak brojite kao što zdravstvena ekonomija broji izbjegnutu potražnju** — stvaran samo kad se pomakne konkretna proračunska stavka; i **cijenite sam pilot [EVPI-jem](../očekivana-vrijednost-savršene-informacije/)** — pilot koji ne može promijeniti odluku o uvođenju vrijedi 0 £. Za segment razvojnih alata posebno vidi [produktivnost programera uz AI](../produktivnost-programera-uz-ai/).

## Zamke

- **Difuzija koristi**: vrijednost razmazana preko tisuća korisnika nemjerljiva je po konstrukciji; birajte slučajeve uporabe s koncentriranim, osnovnim linijama koje se mogu pratiti.
- **Troškovanje samo licence**: integracija, evaluacija i redizajn tijeka rada obično dominiraju pravim nazivnikom.
- **Krađa pripisivanja**: AI uveden uz redizajn procesa tvrdi cijelu deltu.
- **Eskalacija potopljenog pilota**: produljivanje neuspjelih pilota jer bi prekid priznao neuspjeh — datum zalaska mora biti unaprijed dogovoren.

## Izvori

- MIT Project NANDA "GenAI Divide" coverage. <https://fortune.com/2025/08/18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo/>
- MIT GenAI ROI findings summary. <https://blueflame.ai/blog/achieving-ai-roi-key-findings-from-mits-genai-report>
- MIT Technology Review, finding ROI on AI. <https://www.technologyreview.com/2025/10/28/1126693/finding-return-on-ai-investments-across-industries/>
