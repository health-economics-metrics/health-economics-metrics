# Kapacitet koji stvara vrijednost (operativni preokret)

Kapacitet koji stvara vrijednost je „oportunitetna korist” oslobođenog vremena: što bolnica sada može *postići* satima koje vaš softver oslobađa. To je metrika koja je najvažnija operativnim direktorima i medicinskim direktorima, jer govori valutom prema kojoj se njima upravlja — aktivnost, ciljevi i preokret.

## Zašto je važno

NHS se suočava s golemim zaostacima od upute do liječenja, a trustovi koji promaše nacionalne standarde čekanja suočavaju se s regulatornim nadzorom i intervencijom (vidi [od upute do liječenja](../od-upute-do-liječenja/)). Zapošljavanje je sporo i ograničeno; prostori su fiksni. Jedina brza poluga je izvući više aktivnosti koja stvara vrijednost iz postojećeg osoblja i prostora. Softver koji vraća specijalističko vrijeme ne „štedi novac” samo — on *kuje kapacitet*: ambulante koje nisu mogle postojati, procjene koje nisu mogle biti zakazane, bez zapošljavanja ili gradnje.

## Matematika

```
Stvoreni skriveni kapacitet = oslobođeno vrijeme → omogućene jedinice aktivnosti × vrijednost sheme

Jedinice aktivnosti: ambulantni dolasci, predoperativne procjene, kontrolni pregledi praćenja
Vrijednost sheme:    nacionalna tarifa / cijene NHS Payment Schemea
                     (vidi national-tariff-and-unit-costs.md)
```

To je valorizacija po učinku iz [vremena zdravstvenog djelatnika](../vrijeme-zdravstvenog-djelatnika/), skalirana na uslužnu liniju i izražena u jedinicama aktivnosti u kojima operativni tim već planira.

## Riješeni primjer

Specijalističke medicinske sestre Band 6 vode ambulante za predoperativnu procjenu. Automatizacija dokumentacije vraća 1 sat/dan svakoj od 25 sestara; u svaki sat stanu 2 procjene.

```
Dodatne procjene = 25 sestara × 2/dan × 250 dana = 12,500/godišnje
Uz ~£120 vrijednosti sheme po predoperativnoj procjeni:
  12,500 × £120 = £1.5M/godišnje stvorenog kapaciteta skrbi
```

— bez zapošljavanja ijedne sestre i gradnje ijedne sobe. (Široko citirani model koji je ovaj nacrt izvorno navodio dao je brojku od 766.920 £/godišnje za manju kohortu; obrazac aritmetike je isti — broj skalira s sestre × sesije × tarifa.) Operativno uokvirivanje za operativnog direktora: predoperativna procjena prestaje biti ograničenje na listama operacijskih sala — otkazane operacije na dan zahvata padaju, a iskorištenost sala raste, što je mjesto gdje počinje *sljedeća* stavka koristi (vidi [optimizaciju nizvodnih resursa](../optimizacija-nizvodnih-resursa/)).

## Veza sa softverskim inženjerstvom

Isto preoblikovanje spašava tvrdnje o produktivnosti programera od matematike plaće: oslobođeno inženjersko vrijeme, izraženo kao *isporučena sposobnost koju organizacija inače ne bi mogla priuštiti* — funkcionalnosti, migracije, rad na pouzdanosti — vrednovano onim što organizacija plaća za takvu sposobnost na margini (stope vanjskih suradnika ili ekvivalenti odgođenih zapošljavanja). Okvir operativnog direktora uči i nešto o predstavljanju platformskog rada: izrazite korist u jedinicama prema kojima se publika mjeri. Operativni čelnici razmišljaju o aktivnosti i ciljevima, a ne o apstraktnim satima; inženjerski čelnici o stavkama plana i broju zaposlenih, a ne o ušteđenim minutama.

## Zamke

- **Tvrdnje o kapacitetu bez potražnje**: 12.500 dodatnih termina procjene važno je samo ako ih kirurški cjevovod popuni — provjerite nizvodno ograničenje.
- **Vrijednost tarife bez mehanizma plaćanja**: pri kombiniranom plaćanju dodatna aktivnost možda neće donijeti dodatni prihod; vrijednost može biti umjesto toga smanjenje liste čekanja (vidi [utjecaj na listu čekanja](../utjecaj-na-listu-čekanja/)).
- **Prikaz kapaciteta kao gotovine** — to je glavna korist koja ne oslobađa gotovinu; označite je (vidi [uštede koje oslobađaju gotovinu naspram onih koje je ne oslobađaju](../uštede-koje-oslobađaju-gotovinu-naspram-onih-koje-je-ne-oslobađaju/)).

## Izvori

- NHS England, NHS Payment Scheme. <https://www.england.nhs.uk/pay-syst/national-tariff/national-tariff-payment-system/>
- NHS England, elective care recovery plan. <https://www.england.nhs.uk/coronavirus/publication/delivery-plan-for-tackling-the-covid-19-backlog-of-elective-care/>
