# Produktivnost programera uz AI

Metrike za ono što AI pomoć pri kodiranju doista čini inženjerskom učinku: stope prihvaćanja prijedloga, ubrzanja iz kontroliranih studija, propusnost PR-ova i zadržavanje koda. Baza dokaza je doista proturječna — što je čini savršenom studijom slučaja razlike između učinkovitosti (efficacy) i djelotvornosti (effectiveness) za koju je zdravstvena ekonomija izgrađena.

## Zašto je važno

Dvije najcitiranije kontrolirane studije upućuju u suprotnim smjerovima:

- **Peng i sur. 2023. (RCT GitHub Copilota)**: programeri su zadatak HTTP-poslužitelja od nule dovršili **55,8 % brže** uz Copilot (1 h 11 min naspram 2 h 41 min, n=95).
- **METR 2025. RCT**: iskusni programeri otvorenog koda koji rade na *vlastitim zrelim repozitorijima* bili su **19 % sporiji** uz AI alate s početka 2025. (16 programera, 246 zadataka) — dok su *vjerovali* da su 20 % brži.

Obje su dobre studije. Proturječje je nalaz: učinkovitost na zadacima od nule ne prenosi se na djelotvornost u zreloj bazi koda, a *percipirana* korist ne može zamijeniti izmjerenu. Medicina ima imena za oba fenomena (eksplanatorna naspram pragmatičnih ispitivanja; problem placeba) i mehanizam za njihovo rješavanje.

## Matematika

```
Stopa prihvaćanja  = prihvaćeni prijedlozi / prikazani prijedlozi
                     (GitHub telemetrija ~30% prosj.; varira: SQL 45%, Python 35%, JS 28%)
Stopa zadržavanja  = AI kod koji preživi do spajanja / prihvaćeni AI kod (~88% prijavljeno)
Ubrzanje           = (t_kontrola − t_AI) / t_kontrola  (SAMO iz kontrolirane usporedbe)
Delta propusnosti  = Δ spojenih PR-ova/programeru/tjedno (GitHub/Accenture terenski podaci: +8.7%)

Model vrijednosti  = programeri × ušteđeno vrijeme × puna satnica × faktor iskorištenosti
                     — svaki član traži lokalno mjerenje; vidi tornado u
                     sensitivity-analysis.md, gdje ušteđeno vrijeme dominira nad svim
                     ostalim parametrima zajedno
```

## Riješeni primjer

Organizacija od 500 programera pilotira asistenta s pravom kontrolom (usklađeni timovi, 3 mjeseca, unaprijed registrirane metrike):

```
Rezultat pilota: vrijeme ciklusa PR-a −18%; spojeni PR-ovi +6%; CFR nepromijenjen;
                 samoprijavljeno ušteđeno vrijeme 45 min/dan; izmjereno na razini zadatka ≈ 15 min/dan

Vrednujte IZMJERENI broj: 500 × 0.25h × 220d × £60 × 0.6 iskorištenost
                          ≈ £990,000/godišnje kapaciteta (ne oslobađa gotovinu)
Trošak: 500 × £39/mj × 12 ≈ £234,000/godišnje
Neto omjer kapaciteta ≈ 4:1 — financirljivo, uz jednu trećinu samoprijavljene tvrdnje.
```

Trostruki jaz između percipiranog i izmjerenog je METR-ov nalaz na djelu u divljini; proračun na temelju samoprijave utrostručio bi stavku koristi.

## Veza sa softverskim inženjerstvom

Uvozi iz zdravstvene ekonomije za svakoga tko evaluira AI alate: provedite **pragmatična ispitivanja** (vaša baza koda, vaši inženjeri, stvarni tiketi — ne demo zadaci dobavljača); **stopu prihvaćanja tretirajte kao proxy, a ne ishod** (to je [PPV](../evaluacija-kliničkog-ai-ja/) prijedloga iz programerove perspektive — visoko prihvaćanje uz nisko zadržavanje je prekomjerna dijagnoza); svaki dobitak u propusnosti uparite s **provjerom stabilnosti** (DORA 2025.: AI podiže propusnost, šteti stabilnosti — intervencija s nuspojavama traži analizu neto koristi, prema [DORA metrikama](../dora-metrike/)); i korist pošteno razvrstajte kao kapacitet ([uštede koje oslobađaju gotovinu naspram onih koje je ne oslobađaju](../uštede-koje-oslobađaju-gotovinu-naspram-onih-koje-je-ne-oslobađaju/)).

## Zamke

- **Presađivanje studija dobavljača**: brojke RCT-a od nule primijenjene na rad na naslijeđenoj bazi koda — upravo pogreška koju je METR-ova studija razotkrila.
- **Samoprijava kao mjerenje**: jaz u percepciji od 20 postotnih bodova je najveća poznata pristranost u ovoj literaturi.
- **Napuhavanje aktivnosti**: više PR-ova i više koda su Activity, a ne ishodi ([SPACE](../space-i-devex/)); uparite s ponovnim radom i CFR-om.
- **Zanemarivanje krivulje učenja**: mjerenja u 2. tjednu bilježe učinke novosti u bilo kojem smjeru; mjerite u stabilnom stanju ([vremenski horizont](../vremenski-horizont/)).

## Izvori

- Peng S, et al. "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot." 2023. <https://arxiv.org/abs/2302.06590>
- METR, "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity." 2025. <https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/>
- DORA 2025 report. <https://dora.dev/dora-report-2025/>
