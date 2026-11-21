# Optimizacija nizvodnih resursa

Ušteda sata višeg zdravstvenog djelatnika — liječnika opće prakse, višeg specijalizanta, konzultanta — često sprječava zastoje na uskom grlu cijelog multidisciplinarnog tima (MDT) medicinskih sestara, administrativnih službenika i terapeuta koji čekaju kliničke potpise. Vrijednost deblokade uskog grla je propusnost svih koji su nizvodno od njega.

## Zašto je važno

Zdravstvo se odvija po lancima odobrenja: otpusti čekaju potpis konzultanta, planovi liječenja čekaju pregled MDT-a, upute čekaju trijažu. Kad je uloga koja ograničava odgođena, trošak nije sat jedne osobe — to je prazno ili blokirano vrijeme kroz svaku zavisnu ulogu, plus vrijeme pacijenata u limbu (dodatni [bolnički dani](../ušteđeni-bolnički-dani/), dulja [RTT čekanja](../od-upute-do-liječenja/)). To je teorija ograničenja primijenjena na kliničke puteve: sat ušteđen *na ograničenju* vrijedi graničnu propusnost cijelog sustava; sat ušteđen drugdje vrijedi znatno manje.

## Matematika

```
Vrijednost deblokade = Σ po nizvodnim ulogama (oslobođeni blokirani sati × jedinični trošak)
                     + dobitak u propusnosti puta × vrijednost po završetku puta

Usporedba: vrijednost istog ušteđenog sata na ulozi koja ne ograničava ≈ samo
vrijednost kapaciteta te uloge (vidi practitioner-time.md).
```

Ograničenje utvrdite empirijski: gdje se rad najdulje nakuplja u redu? Do čijeg sandučića vode kašnjenja?

## Riješeni primjer

Otpusti na odjelu zahtijevaju pregled konzultanta svako jutro. Konzultant provodi 90 min/dan sastavljajući informacije raspršene po sustavima; pregledi završavaju do 14:00, a 6 otpusta dnevno završi prekasno za taj dan — svaki košta izbjegivi bolnički dan.

Nadzorna ploča sažetka otpusta (laboratorijski nalazi, lijekovi, oznake u jednom prikazu) skraćuje sastavljanje na 20 minuta; pregledi završavaju do 11:30:

```
Izbjegnuti bolnički dani = 4 od 6 kasnih otpusta × 365 ≈ 1,460 bolničkih dana/godišnje
Nizvodna deblokada: 2 koordinatora otpusta + ljekarna + prijevoz
                    ranije prazni-pa-pod-pritiskom svako poslijepodne —
                    ~3 radna sata/dan blokiranog vremena oslobođeno ≈ 1,100 sati/god
```

Konzultantovih vlastitih 70 minuta *najmanji* je dio vrijednosti — u tome je smisao ove metrike. Vrednujte bolničke dane po mehanizmu (vidi [ušteđene bolničke dane](../ušteđeni-bolnički-dani/)), a sate osoblja kao kapacitet.

## Veza sa softverskim inženjerstvom

To je code review, arhitektonsko odobrenje i sandučić glavnog inženjera. Kad pet inženjera čeka dan na jednu osobu koja može odobriti dizajn, trošak je pet inženjerskih dana plus dan [troška odgode](../trošak-odgode/) na samom radu — a ne jedan sat recenzenta. Alati koji sažimaju zadatak uloge koja ograničava (bolji kontekst recenzije, automatske predprovjere, nadzorne ploče koje sastavljaju ono što odobravatelju treba) kupuju propusnost sustava, a ne pojedinačnu udobnost. Mjerite vrijeme preuzimanja/čekanja na ograničenju (vidi [metrike toka](../metrike-toka/)) — to je softverski ekvivalent litice otpusta u 14:00.

## Zamke

- **Optimizacija onoga što nije ograničenje**: prekrasni alati za ulogu iza koje se ništa ne nakuplja daju gotovo nultu vrijednost za sustav.
- **Migracija ograničenja**: deblokirajte konzultanta i ograničenje se seli (u ljekarnu, u prijevoz) — modelirajte *sljedeće* ograničenje prije nego što tvrdite pune dobitke u propusnosti.
- **Brojanje nizvodnih sati kao gotovine**: oslobađanje blokiranog vremena je kapacitet, podložan uobičajenom [testu preusmjeravanja](../uštede-koje-oslobađaju-gotovinu-naspram-onih-koje-je-ne-oslobađaju/).

## Izvori

- Goldratt EM, *The Goal* (theory of constraints).
- NHS England, NHS productivity. <https://www.england.nhs.uk/long-read/nhs-productivity/>
