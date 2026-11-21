# Vrijeme zdravstvenog djelatnika

Vrijeme zdravstvenog djelatnika najoskudniji je resurs u većini zdravstvenih sustava. Mjerenje vrijednosti ušteda minuta kliničara dnevno zahtijeva prijelaz s jednostavne matematike plaće na **oportunitetni trošak i kapacitet sustava**: u nacionalnoj zdravstvenoj službi vrijeme djelatnika je kruto operativno usko grlo, a ne troškovna stavka koja se fleksibilno prilagođava.

## Zašto je važno

Ne možete brzo proizvesti više liječnika opće prakse, konzultanata ili specijalističkih medicinskih sestara — obrazovni cjevovodi traju 5–15 godina, a slobodna mjesta su kronična. Stoga ušteđeni sat zdravstvenog djelatnika nije „izbjegnuta plaća” (djelatnik je i dalje plaćen); to je *oslobođeni kapacitet uskog grla*, a kapacitet uskog grla vrijedi koliko usko grlo proizvodi. Zato su tvrdnje „štedi 10 minuta po konzultaciji” istodobno najčešća i najkrivlje cijenjena stavka u digitalnom zdravlju.

## Matematika

Tri razine vrednovanja, po rastućoj poštenosti:

```
1. Osnova plaće:      sati × puna satnica (PSSRU jedinični troškovi)
                      — što vrijeme košta, a ne što proizvodi
2. Osnova učinka:     sati → omogućeni termini/zahvati × vrijednost sheme
                      (vidi national-tariff-and-unit-costs.md)
3. Osnova uskog grla: ako ova uloga ograničava cijeli put, sati × vrijednost
                      oslobođene propusnosti puta (teorija ograničenja)
```

Popust za fragmentaciju: vrijeme ušteđeno u krhotinama ispod iskoristivog kvanta (npr. 3 minute raspršene po ambulanti) loše se preusmjerava; primijenite navedeni faktor iskorištenosti.

## Riješeni primjer

Ambijentalno bilježenje štedi liječniku opće prakse 2 minute po konzultaciji, 30 konzultacija/dan: 60 minuta/dan, odnosno **220 sati godišnje po liječniku** kroz 220 radnih dana.

```
Osnova plaće:  220 × £80 (puni sat liječnika opće prakse, PSSRU-regija) ≈ £17,600/liječniku/godišnje
Osnova učinka: 60 min/dan = 5 dodatnih 12-minutnih konzultacija/dan
               = 1,100 dodatnih termina/liječniku/godišnje × £42 ≈ £46,200/liječniku/godišnje
               — ili isti termini apsorbirani kao smanjen prekovremeni rad i
               sigurnije, neužurbane konzultacije (kvalitativna stavka)
```

Kroz federaciju od 50 liječnika opće prakse, kapacitet po osnovi učinka vrijedi ~2,3 mil. £/godišnje — pod uvjetom da su minute stvarne (izmjerene, a ne tvrdnja dobavljača), konsolidirane (cijele konzultacije, a ne fragmenti) i preusmjerene (vidi [uštede koje oslobađaju gotovinu naspram onih koje je ne oslobađaju](../uštede-koje-oslobađaju-gotovinu-naspram-onih-koje-je-ne-oslobađaju/)).

## Veza sa softverskim inženjerstvom

Vrijeme višeg inženjera ponaša se identično: to je usko grlo kroz koje teku dizajni, recenzije i incidenti, pa ga vrednujte prema onome što usko grlo ograničava, a ne prema plaći. Ista trorazinska valorizacija primjenjuje se na svaku tvrdnju „AI štedi svakom programeru X minuta” — matematika plaće laska malim brojevima; pošteno je pitati konsolidiraju li se minute u iskoristive blokove i što oslobođeni kapacitet stvarno proizvodi. Vidi [optimizaciju nizvodnih resursa](../optimizacija-nizvodnih-resursa/) za multiplikator kad ušteđeni sat pripada osobi na koju svi ostali čekaju.

## Zamke

- **Minute × plaća = uštede** — kanonsko napuhavanje; to je kapacitet, i to samo pri navedenoj iskorištenosti.
- **Zanemarivanje problema kvanta**: 12 × 5-minutnih ušteda ≠ jedan slobodan sat.
- **Vrednovanje svih uloga jednako**: sat uskog grla puta vrijedi višestruko više od sata uloge koja ne ograničava.

## Izvori

- PSSRU, Unit Costs of Health and Social Care. <https://www.pssru.ac.uk/unitcostsreport/>
- NHS England, NHS productivity. <https://www.england.nhs.uk/long-read/nhs-productivity/>
