# GDS metrike usluga

Servisni priručnik britanske Government Digital Service (GDS) propisuje četiri KPI-ja za svaku vladinu digitalnu uslugu: **trošak po transakciji, zadovoljstvo korisnika, stopu dovršetka i digitalno prihvaćanje**. Zajedno su minimalna ekonomija javne digitalne usluge — i predložak koji NHS-ove digitalne usluge nasljeđuju.

## Zašto je važno

GDS metrike kodiraju poslovni slučaj prelaska kanala koji je financirao desetljeće digitalizacije vlade: Digital Efficiency Report našao je digitalne transakcije ~20× jeftinijima od telefonskih i ~50× jeftinijima od osobnih (brojke lokalne uprave: web 0,15 £, telefon 2,83 £, osobno 8,62 £). No uštede se ostvaruju samo kad ljudi *dovrše* digitalni put (stopa dovršetka) *umjesto* skupog kanala (prihvaćanje) — četiri KPI-ja su jedan ekonomski model, a ne četiri nadzorne ploče.

## Matematika

```
Trošak po transakciji = ukupni trošak usluge / dovršene transakcije
Stopa dovršetka       = dovršene / započete transakcije × 100
Digitalno prihvaćanje = digitalne transakcije / transakcije svih kanala × 100
Zadovoljstvo korisnika = % zadovoljnih+vrlo zadovoljnih (5-stupanjska, anketa u usluzi)

Ušteda prelaskom kanala = volumen × pomak prihvaćanja × (trošak_stari_kanal − trošak_digitalno)
… minus potražnja zbog neuspjeha: (1 − stopa dovršetka) × trošak pričuvnog kanala
```

## Riješeni primjer

NHS-ova usluga upravljanja terminima: 2 mil. transakcija godišnje, trenutačno 70 % telefon (3,20 £/poziv) / 30 % digitalno (0,25 £). Redizajn podiže digitalno prihvaćanje na 55 % i dovršetak s 84 % na 93 %:

```
Ušteda pomaka prihvaćanja = 2M × 0.25 × (3.20 − 0.25) = £1,475,000/godišnje

Ušteda potražnje zbog neuspjeha: neuspjeli digitalni putovi vraćaju se na telefon
  prije:   2M × 0.30 × 0.16 × £3.20 = £307,200
  poslije: 2M × 0.55 × 0.07 × £3.20 = £246,400
  neto £60,800/godišnje — poboljšanja dovršetka štite dobitke prihvaćanja

Zadovoljstvo je vodeći pokazatelj: nezadovoljni korisnici vraćaju se na telefon,
pa pad zadovoljstva prognozira slabljenje prihvaćanja prije nego se pojavi.
```

## Veza sa softverskim inženjerstvom

Ta četiri KPI-ja su produkcijski primjer [tablice troškova i posljedica](../analiza-troškova-i-posljedica/): jedna metrika troška, tri metrike ishoda, nikad sažete u ocjenu. Za produktne inženjere operativne lekcije: **stopa dovršetka je problem instrumentacije lijevka** (svaka točka napuštanja može se pronaći i popraviti); **trošak po transakciji je [jedinična ekonomija oblaka](../jedinična-ekonomija-oblaka/)** plus troškovi kanala uz pomoć osoblja; **prihvaćanje je metrika pravednosti u prerušenju** — korisnici koji ne mogu ili ne žele promijeniti kanal nerazmjerno su stariji, s invaliditetom i deprivirani, pa agresivno zatvaranje kanala pretvara „uštede” u štetu za pristup (vidi [doseg i pravednost](../doseg-i-pravednost/)). Objavljivanje KPI-ja (GOV.UK to radi, po usluzi) i samo je mehanizam: transparentnost disciplinira prognoze kao što to čine revizije [ostvarenja koristi](../ostvarenje-koristi/).

## Zamke

- **Prihvaćanje prisilom**: zatvaranje telefonske linije podiže prihvaćanje i prebacuje potražnju zbog neuspjeha na osoblje prve linije; mjerite ukupni trošak sustava.
- **Dovršetak mjeren od 2. stranice**: početak lijevka nakon točke napuštanja laska stopi.
- **Trošak po transakciji koji zanemaruje pomoć za digitalno uz asistenciju** i obradu potražnje zbog neuspjeha.
- **Ankete zadovoljstva samo pri uspješnom dovršetku** — nezadovoljni većinom nikad ne dođu do ankete.

## Izvori

- GOV.UK Service Manual, measuring success / mandatory KPIs. <https://www.gov.uk/service-manual/measuring-success/data-you-must-publish>
- Digital Efficiency Report. <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
