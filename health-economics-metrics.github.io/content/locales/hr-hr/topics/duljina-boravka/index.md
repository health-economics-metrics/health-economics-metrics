# Duljina boravka (LOS)

Duljina boravka je broj dana od prijma u bolnicu do otpusta — temeljna metrika učinkovitosti toka bolničke skrbi. Britanski akutni prosjeci kreću se oko 4–5 dana; svaki višak dana troši oskudan krevet i izlaže pacijenta bolničkim rizicima.

## Zašto je važno

LOS pokreće gotovo sve u ekonomiji akutne bolnice: kapacitet kreveta, propusnost elektivnih zahvata, hitni tok, osoblje. Smanjenje prosječnog LOS-a čak i za djeliće dana u velikom opsegu oslobađa golem kapacitet (vidi [ušteđene bolničke dane](../ušteđeni-bolnički-dani/)). LOS je i signal kvalitete u oba smjera — predug upućuje na neuspjeh procesa (odgođena dijagnostika, papirologija otpusta, čekanja socijalne skrbi); prekratak može značiti prerani otpust, što se kasnije pokazuje kao [ponovni prijmovi](../stopa-ponovnih-prijma/).

## Matematika

```
LOS (po epizodi)  = datum otpusta − datum prijma
Prosječni LOS     = zauzeti bolnički dani / otpusti (iskažite prosjek I medijan;
                    LOS je jako desno asimetričan zbog dugotrajnih odstupanja)

Usporedbe zahtijevaju prilagodbu za sastav slučajeva (dob, dijagnoza, akutnost),
inače mjerite koga bolnica prima, a ne kako radi.
```

Littleov zakon povezuje varijable toka: `zauzeti kreveti = stopa prijma × prosječni LOS` — isti zakon koji vlada softverskim redovima (vidi [metrike toka](../metrike-toka/)).

## Riješeni primjer

Trust prima 40 hitnih internističkih pacijenata dnevno uz prosječni LOS 6,0 dana: 240 kreveta trajno zauzeto (40 × 6). Softver za koordinaciju otpusta (praćenje zadataka, automatizacija otpusne terapije iz ljekarne, rezervacija prijevoza) skraćuje neklinički rep boravaka za prosječno 0,4 dana.

```
Potrebni kreveti = 40 × 5.6 = 224 → 16 kreveta trajno oslobođeno
                 = 16 × 365 = 5,840 bolničkih dana/godišnje
```

Vrednujte 5.840 bolničkih dana po mehanizmu (ponovna popuna/zatvaranje/prazan hod) prema [ušteđenim bolničkim danima](../ušteđeni-bolnički-dani/). Primijetite što se pomaknulo: ne medicina, nego *čekanje* — pacijent je bio medicinski spreman; sustav je još obavljao papirologiju. To je problem redova, a softver je dobar u problemima redova.

## Veza sa softverskim inženjerstvom

LOS je vrijeme ciklusa bolnice, a priručnik poboljšanja identičan je radu na toku isporuke: instrumentirajte faze (prijam → liječenje → medicinski spreman → stvarno otpušten), pronađite gdje se vrijeme nakuplja (to su primopredaje), uklonite stanja čekanja umjesto dodavanja kapaciteta. Kohorta „medicinski spreman za otpust, a još zauzima krevet” bolnička je inačica PR-a koji je odobren, ali nije spojen. Izravne softverske prilike: orkestracija zadataka otpusta, brzina dijagnostike, e-propisivanje otpusne terapije, integracija upute za socijalnu skrb.

## Zamke

- **Iskazivanje samo prosjeka** — odstupanja dominiraju; padajući prosjek može sakriti rastući rep dugih boravaka.
- **Bez prilagodbe za sastav slučajeva** u tvrdnjama prije/poslije: pragovi prijma mijenjaju se sezonski i sekularno.
- **Smanjenje LOS-a koje se ponovno pojavi kao ponovni prijam** — tvrdnje o LOS-u uvijek uparite s podacima o 30-dnevnom ponovnom prijmu.

## Izvori

- OECD, length of hospital stay indicator. <https://www.oecd.org/en/data/indicators/length-of-hospital-stay.html>
- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
