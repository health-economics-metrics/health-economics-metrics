# Stopa nedolazaka (DNA)

Stopa DNA je postotak zakazanih termina kod kojih pacijent niti dođe niti otkaže. Kliničar, prostorija i termin su plaćeni; ne događa se ništa. To je najčišća metrika rasipanja u zdravstvu — i jedna od onih koje se softverom najlakše popravljaju.

## Zašto je važno

Brojke NHS Englanda (2019.): propušteni termini kod liječnika opće prakse premašuju 15 milijuna godišnje po ~30 £ svaki — preko **216 mil. £ godišnje** — a nedolasci u bolničkim ambulantama iznose ~8 mil. godišnje (~6,4 % termina) uz prosječno ~**160 £** po propuštenom terminu. Budući da je granični trošak podsjetnika sitniš, a vraćena vrijednost je potpuno popunjen klinički termin, smanjenje DNA ima neke od najboljih ROI aritmetika u digitalnom zdravlju, zbog čega su SMS podsjetnici, jednostavno ponovno zakazivanje i prediktivno prekomjerno zakazivanje bili među prvim dokazanim pobjedama digitalnog zdravlja.

## Matematika

```
DNA stopa = DNA / zakazani termini × 100

Vrijednost smanjenja = termini × ΔDNA stopa × vrijednost po vraćenom terminu

vrijednost po vraćenom terminu: termin se ponovno popuni (vrijednost aktivnosti /
smanjenje liste čekanja) ili ne (vrijeme osoblja djelomično se može ponovno
koristiti) — mehanizam je važan, kao u bed-days-saved.md.
```

## Riješeni primjer

Ambulantno odjeljenje: 200.000 termina godišnje, stopa DNA 8 %. Usluga podsjetnika i ponovnog zakazivanja (SMS s ponovnim zakazivanjem jednim dodirom, informacijama o prijevozu, pristupačnim formatima) snižava DNA na 5,5 %.

```
Vraćeni termini = 200,000 × 0.025 = 5,000/godišnje
Ponovno popunjeno s liste čekanja uz prosječnu ambulantnu vrijednost ~£160:
  5,000 × £160 = £800,000/godišnje vraćene aktivnosti
Trošak usluge: 200,000 × £0.40 = £80,000/godišnje

Povrat ≈ 10:1, plus 5,000 pacijenata s liste čekanja primljeno ranije
(vidi waiting-list-impact.md i referral-to-treatment.md).
```

Veličina učinka (2,5 boda) je realistična: RCT-ovi podsjetnika dosljedno pokazuju 25–40 % relativnog smanjenja DNA.

## Veza sa softverskim inženjerstvom

- **Ovo je problem sustava zakazivanja**: podsjetnici, samoposlužno ponovno zakazivanje, automatsko popunjavanje liste čekanja iz otkazivanja i modeli predviđanja nedolazaka koji pokreću ciljano dvostruko zakazivanje. Svako je običan softverski inženjering s neobično jasnim ekonomskim slučajem.
- **Inženjerska analogija**: nedolasci za rezervirani kapacitet — zakazani a neiskorišteni CI slotovi, rezervirani oblačni kapacitet, sobe za sastanke, ploče za intervjue. Ekonomija se prenosi: jeftino automatsko podsjećanje (ili automatsko oslobađanje neiskorištenih rezervacija) vraća skupi angažirani kapacitet.
- **Pregled etike predviđanja**: modeli nedolazaka istrenirani na podacima o dolascima kodiraju deprivaciju i prepreke pristupu; njihovo korištenje za *deprioritiziranje* vjerojatnih nedolazaka pojačava nejednakost, a korištenje za *podršku* dolasku (pomoć s prijevozom, telefonske alternative) smanjuje je. Vidi [doseg i pravednost](../doseg-i-pravednost/).

## Zamke

- **Dvostruko brojanje otkazanog i ponovno zakazanog kao vraćene vrijednosti.**
- **Vrednovanje vraćenih termina koji se ne popune** — prazan termin sa poslanim podsjetnikom i dalje je prazan.
- **Jurnjava DNA prema nuli**: posljednji bodovi DNA su pacijenti koji se suočavaju sa stvarnim preprekama; kaznene pristupe (otpust nakon N nedolazaka) metriku smanjuju napuštanjem pacijenata.

## Izvori

- NHS England, "Missed GP appointments costing NHS millions" (2019). <https://www.england.nhs.uk/2019/01/missed-gp-appointments-costing-nhs-millions/>
- DNA cost summaries. <https://www.deep-medical.ai/cost-of-missed-nhs-appointments/>
