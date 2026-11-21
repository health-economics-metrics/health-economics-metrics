# Neto novčana korist (NMB)

NMB pretvara rezultat isplativosti u jednu novčanu vrijednost: zdravstveni dobitak vrednovan po pragu spremnosti na plaćanje, minus trošak. Njezin blizanac, neto zdravstvena korist (NHB), izražava isto pravilo u zdravstvenim jedinicama.

## Zašto je važno

Omjeri ([ICER-ovi](../inkrementalni-omjer-isplativosti/)) su nezgodni: eksplodiraju blizu nultog učinka, ne mogu se usrednjavati preko izvlačenja neizvjesnosti i ne mogu čisto rangirati tri ili više opcija. NMB sve to popravlja — linearan je pa možete rangirati opcije, usrednjavati Monte Carlo izvlačenja i rastavljati doprinose. To je i oblik zdravstveno-ekonomske matematike koji svaki inženjer već poznaje: *vrijednost minus trošak*.

## Matematika

```
NMB = (ΔE × λ) − ΔC
NHB = ΔE − (ΔC / λ)

ΔE = inkrementalni učinak (npr. QALY-ji)
ΔC = inkrementalni trošak
λ  = prag spremnosti na plaćanje (vidi pragove spremnosti na plaćanje)

Pravilo odlučivanja: usvojiti ako je NMB > 0 (ekvivalentno NHB > 0).
Među alternativama: izabrati najveći NMB.
```

NMB > 0 ⇔ ICER < λ (kad je ΔE > 0), dakle pravila se slažu — NMB se samo bolje ponaša.

## Riješeni primjer

Tri opcije za uslugu za dijabetes, na 1.000 pacijenata, λ = 20.000 £/QALY:

```
Opcija              ΔC          ΔE (QALY)   NMB = 20,000×ΔE − ΔC
Aplikacija + coaching £400,000    30           600,000 − 400,000 = £200,000
Samo aplikacija     £150,000    12           240,000 − 150,000 = £90,000
Dodatne klinike     £700,000    32           640,000 − 700,000 = −£60,000
```

Dodatne klinike dobivaju najviše QALY-ja, ali pri tom pragu uništavaju vrijednost (NMB < 0). Aplikacija + coaching pobjeđuje. Primijetite da NMB omogućuje *rangiranje sve tri odjednom* — parni ICER-ovi trebali bi postupak granice iz [dominacije i granice učinkovitosti](../dominacija-i-granica-učinkovitosti/) i došli bi do istog odgovora.

NHB prikaz pobjednika: 30 − 400.000/20.000 = 30 − 20 = **10 QALY-ja neto** — zdravlje stečeno povrh onoga što bi isti novac proizveo drugdje.

## Veza sa softverskim inženjerstvom

`(ušteđeni sati × puna satnica) − trošak alata` — svakodnevni poslovni slučaj za alat — doslovno je izračun NMB-a s λ = puni trošak inženjera. Dvije nadogradnje koje dodaje zdravstvena ekonomija:

- **Učinite λ varijablom, a ne konstantom.** Nacrtajte NMB naspram λ („vrijednost inženjerskog sata”) i pokažite gdje se odluka preokreće; različiti dionici tada mogu primijeniti vlastito vrednovanje bez ponavljanja vaše matematike.
- **NHB razmišljanje**: „ova platforma štedi 5.000 inženjerskih sati, ali troši proračun koji bi kupio 3.000 sati kapaciteta vanjskih suradnika — neto 2.000 sati” prisiljava na usporedbu oportunitetnog troška u jedinicama kapaciteta. Vidi [oportunitetni trošak](../oportunitetni-trošak/).

## Zamke

- **Skrivanje praga**: NMB je besmislen bez navedenog λ; iskažite NMB pri 20 tis. i 30 tis. £ ili nacrtajte krivulju.
- **Korištenje NMB-a za pranje sićušnih učinaka**: golema populacija puta zanemariv učinak po osobi može dati velik NMB — uz to iskažite učinke po osobi.
- **Zaboravljanje da NMB nasljeđuje svu neizvjesnost** u ΔC i ΔE — uparite s [probabilističkom analizom osjetljivosti](../probabilistička-analiza-osjetljivosti/).

## Izvori

- York Health Economics Consortium glossary: net monetary benefit. <https://yhec.co.uk/glossary/net-monetary-benefit/>
- Stinnett AA, Mullahy J. "Net health benefits: a new framework for the analysis of uncertainty in cost-effectiveness analysis." <https://pmc.ncbi.nlm.nih.gov/articles/PMC2528971/>
