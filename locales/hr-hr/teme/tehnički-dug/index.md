# Tehnički dug

Tehnički dug je implicirani budući trošak prošlih prečaca u bazi koda: dugovani rad sanacije (**glavnica**) i stalno opterećenje koje vrši na isporuku (**kamata**). Metode kvantifikacije poput SQALE-a pretvaraju ga iz metafore u troškovno iskazanu obvezu.

## Zašto je važno

Nekvantificiran, tehnički dug je kukanje; kvantificiran, poslovni je slučaj. Industrijske osnovne vrijednosti (CAST Appmarq, 1.400 aplikacija / 550 mil. LOC): povijesno ≈ **3,61 $ glavnice tehničkog duga po retku koda**, pri čemu tipične baze koda nose omjer duga od 15–20 % troška ponovne izgradnje, naspram uobičajeno korištene zdrave granice od ≤5 % (SonarQubeova ocjena „A”). Zdravstveno-ekonomski okvir točno pristaje: dug je *kronično stanje* — neliječen, napreduje, njegova „kamata” raste složeno kao sporija isporuka i veće stope defekata, a sanacija se natječe za kapacitet s radom na funkcionalnostima baš kao što se prevencija natječe s liječenjem.

## Matematika

```
SQALE glavnica   = Σ po prekršajima (vrijeme sanacije) × programerska satnica
Omjer tehničkog duga (TDR) = trošak sanacije / trošak ponovnog razvoja × 100
                   (SonarQube ocjene: A ≤ 5%, B ≤ 10%, C ≤ 20%, D ≤ 50%)

Kamata (broj koji opravdava otplatu):
  kamata/godišnje = Δ brzina isporuke × vrijednost po jedinici brzine
                  + Δ stopa defekata × trošak po defektu
Slučaj otplate  = PV(izbjegnuta kamata kroz horizont) − trošak sanacije
                  (diskontirano — vidi discounting-and-time-preference.md)
```

Glavnica navodi obvezu; **kamata** čini investicijski slučaj. Plaćanje glavnice od 500 tis. £ da se izbjegne kamata od 40 tis. £/godišnje loša je trgovina; za izbjegavanje 400 tis. £/godišnje, izvrsna.

## Riješeni primjer

Integracijski sloj kliničkih zapisa od 400 tis. LOC: SQALE glavnica 3.800 sati × 75 £ = **285 tis. £**; TDR ≈ 12 % (ocjena C). Izmjerena kamata: timovi koji diraju ovaj sloj imaju 40 % dulje vrijeme ciklusa i 2× veću stopu neuspjeha promjena naspram osnovne razine inventara. Sloj upija 6.000 programerskih sati godišnje:

```
Kamata ≈ 6,000 × 0.40 × £75        = £180,000/godišnje (teret brzine)
       + 12 dodatnih kvarova × £8,000 = £96,000/godišnje (ponovni rad/incidenti)
       ≈ £276,000/godišnje

Sanirajte najgorih 30% glavnice (£85k) ciljajući žarišta → modelirano
smanjenje kamate 60%: štedi ~£166k/godišnje. Povrat ≈ 6 mjeseci.
```

Ciljanje žarišta je važno: kamata duga koncentrira se gdje vrhuncu dolazi učestalost promjena × gustoća duga — sanacija rijetko dirana duga ne kupuje ništa, poput liječenja stanja koje nikad ne bi napredovalo ([ekonomija prevencije](../ekonomija-prevencije/)).

## Veza sa softverskim inženjerstvom

Uvozi iz zdravstvene ekonomije koji nadograđuju argumente o tehničkom dugu: izrazite inventar kao **popis tereta** (u stilu [DALY-ja](../godina-života-prilagođena-invaliditetu/) — gdje su izgubljene zdrave inženjerske godine?); opravdajte otplatu matematikom napredovanja, pošteno (obično isplativo, a ne štedljivo); ponderirajte sanaciju najgorih sustava [manjkom težine](../qaly-manjak-i-modifikatori-težine/); i podnosite velike prijedloge sanacije s analizom odbitaka koja preživljava pravila [izbjegnutih nizvodnih troškova](../izbjegnuti-nizvodni-troškovi/) — ponderirano vjerojatnošću, diskontirano, brojano jednom.

## Zamke

- **Izvještavanje samo glavnice**: velik zastrašujući broj bez procjene kamate ne opravdava ništa.
- **Doslovno uzimanje brojki duga koje generiraju alati**: SQALE broji prekršaje pravila; propušta arhitektonski dug (skupu vrstu) i broji sitnice.
- **Utopizam nultog duga**: optimalna razina duga nije nula — dug je poluga; pitanje je kamatna stopa.
- **„Prepisivanje izbjegava sve to”**: prijedlozi prepisivanja moraju proći ista pravila odbitaka — kontrafaktualni trošak, vjerojatnost, diskontiranje.

## Izvori

- CAST, technical debt estimation. <https://www.castsoftware.com/glossary/technical-debt-estimation>
- Letouzey J-L, "The SQALE method for evaluating Technical Debt." <https://www.researchgate.net/publication/239763591_The_SQALE_method_for_evaluating_Technical_Debt>
