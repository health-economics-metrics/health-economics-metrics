# Zadržavanje i odljev

Zadržavanje mjeri koji je udio kohorte korisnika još aktivan N dana nakon početka (D1/D7/D30 krivulje); odljev je njegov komplement. Brutalna osnovna razina digitalnog zdravlja: **otprilike 90 % korisnika zdravstvenih aplikacija odustane unutar 30 dana** — D30 zadržavanje digitalnog zdravlja iznosi ~3–4 % naspram prosjeka svih aplikacija od ~6 %.

## Zašto je važno

Eysenbach je to imenovao 2005.: **zakon odljeva (law of attrition)** — gubitak korisnika po visokim stopama je intrinzično, strukturno svojstvo eHealth intervencija, a ne greška implementacije, s odljevom u eHealth ispitivanjima koji rutinski premašuje 50 %. Ekonomska posljedica je potpuna: zadržavanje definira *terapijski prozor* u kojem se može isporučiti bilo kakva korist, a [jedinična ekonomija](../jedinična-ekonomija-zdravstvenih-aplikacija/) — CAC plaćen po korisniku koji ostane 12 dana ne isporučuje ni LTV ni QALY-je. Svaki ekonomski model potrošačkog zdravstvenog proizvoda koji ne ponderira koristi krivuljom zadržavanja opisuje proizvod koji ne postoji.

## Matematika

```
Zadržavanje_Dn = korisnici aktivni na dan n / veličina kohorte × 100
Stopa odljeva  = korisnici izgubljeni u razdoblju / korisnici na početku razdoblja × 100

Ponderiranje koristi (zdravstveno-ekonomski potez):
  očekivana korist po stečenom korisniku = Σ_t zadržavanje(t) × stopa koristi(t)
  ≈ površina ispod krivulje zadržavanja × korist po vremenu
  — NE učinak ispitivanja × 100% stečenih korisnika

Trošak po korisniku zadržanom na D30 = CAC / D30 zadržavanje
  (pri 4% D30, CAC od £5 je zapravo £125 po zadržanom korisniku)
```

## Riješeni primjer

Aplikacija za mentalno zdravlje: ispitivanje je pokazalo 0,02 QALY-ja dobivenih po korisniku koji dovrši 8 tjedana. Kohorta uvođenja od 100.000 preuzimanja, zadržavanje D7 25 %, D30 8 %, tjedan 8 4 %:

```
Dovršitelji         = 100,000 × 0.04 = 4,000
Isporučeni QALY-ji  = 4,000 × 0.02 = 80  (ne 100,000 × 0.02 = 2,000)
Uz £20,000/QALY     = £1.6M zdravstvene vrijednosti (ne £40M)

Zdravstvena vrijednost po preuzimanju = £16 — broj koji bi trebao odrediti
koliko će platitelj platiti po preuzimanju, a to je 4% naivne tvrdnje.
Slučaj poboljšanja zadržavanja: pomak dovršetka tjedna 8 s 4% na 6% dodaje
40 QALY-ja/godišnje ≈ £800k — inženjering zadržavanja JEST proizvodnja zdravlja.
```

## Veza sa softverskim inženjerstvom

Zadržavanje je metrika kod koje produktno inženjerstvo najizravnije proizvodi zdravstvenu vrijednost, prema gornjoj aritmetici. Prakse koje je pomiču su uobičajene: vrijeme uvođenja do prve vrijednosti, dizajn ponovnog angažmana, performanse i presudno **planirani dovršetak doze** — program s definiranim krajem (8 tjedana, zatim diploma) treba mjeriti *dovršetak*, a ne vječni DAU, usklađujući metriku s kliničkim modelom umjesto s modelom pažnje financiranim oglasima. Analiza preživljenja je pravi alat (ista Kaplan-Meierova matematika kao [dobivene godine života](../dobivene-godine-života/)); segmentirajte krivulje po kanalu akvizicije, jer sastav kanala mijenja zadržavanje više od većine funkcionalnosti.

## Zamke

- **Pranje intention-to-treat u obrnutom smjeru**: ispitivanja iskazuju dovršitelje; ekonomija uvođenja mora brojati sve stečene (Eysenbachovo temeljno upozorenje).
- **Kazalište zadržavanja**: „aktivni” korisnici potaknuti obavijestima koji nikad ne izvode terapijsku radnju (vidi [metrike angažmana](../metrike-angažmana/)).
- **Usporedba krivulja kroz definicije**: „aktivan” definiran kao otvaranje naspram značajne radnje pomiče D30 višestruko.
- **Zanemarivanje tko odlazi**: ako najbolesniji odlaze najbrže, koristi po korisniku padaju kako zadržavanje raste među zdravima — uparite krivulje sa sastavom slučajeva (vidi [doseg i pravednost](../doseg-i-pravednost/)).

## Izvori

- Eysenbach G. "The law of attrition." JMIR 2005;7(1):e11. <https://www.jmir.org/2005/1/e11/>
- Mobile app retention benchmarks. <https://uxcam.com/blog/mobile-app-retention-benchmarks/>
- Healthcare product benchmarks. <https://userpilot.com/blog/healthcare-product-metrics-benchmark-report/>
