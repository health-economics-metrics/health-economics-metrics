# Németország DiGA gyorsított eljárása

A DiGA (Digitale Gesundheitsanwendungen) Németország törvényes „receptre felírható alkalmazások" útvonala — a világ első nemzeti rendszere, ahol az orvosok jóváhagyott egészségügyi alkalmazásokat írnak fel, és a társadalombiztosításnak meg kell térítenie azokat. A digitális terápiák nemzeti léptékű fizetésének vezető élő kísérlete.

## Miért fontos

A DiGA törvényhozással (a DVG, 2019) válaszolta meg a kérdést, amelyet minden digitális egészségügyi cég feltesz: „ki fog valójában fizetni?" A kialakítás figyelemre méltó:

- **Gyors döntés**: a BfArM-nek (a szabályozó) 3 hónapon belül döntenie kell.
- **Ideiglenes listázás**: az alkalmazások 12 hónapra felkerülhetnek a listára, *miközben még bizonyítékot állítanak elő* — bevételt szerezve a kulcsfontosságú vizsgálatuk alatt.
- **Bizonyítási határidő**: „pozitív egészségügyi hatást" (orvosi haszon, vagy betegek számára releváns szerkezeti/eljárási javulás) kell bizonyítani összehasonlító vizsgálattal — általában RCT-vel — különben törlik a listáról. Az ideiglenes bejegyzések nagyjából fele nem konvertálódik.
- **Árazás**: a gyártó az 1. év árát szabadon állapítja meg; utána a biztosítók szövetségével tárgyalják. A medián kezdeti 3 hónapos ár körülbelül 500 €; teljesítményalapú árazási elemek 2026-tól érkeznek.

Piaci realitásellenőrzés (kutatás 2024 végéig): ~68 listázott alkalmazás, >1 M kumulatív recept, a receptek ~81%-át aktiválták, ~234 M€ kumulatív biztosítói kiadás — valódi piac, de szerény a felhajtáshoz képest, és az aktiválás utáni adherencia marad a gyenge pont.

## A matematika

A kereskedelmi modell, amelyet minden DiGA-alapító futtat:

```
Revenue = prescriptions × activation rate × price per prescription period
Evidence cost = pivotal RCT (typically €1M–3M) within the 12-month window
Expected value = P(evidence succeeds) × steady-state revenue − evidence cost

With ~50% conversion failure, P must be honestly assessed — half the field
spends the RCT money and loses the listing.
```

## Kidolgozott példa

Egy depresszió-kezelő alkalmazás ideiglenesen 450 €/negyedév áron kerül listázásra:

```
Year 1: 20,000 prescriptions × 81% activation × €450 ≈ €7.3M revenue
RCT cost: €2M, running concurrently
Outcome A (evidence positive): permanent listing, negotiated price ~€380,
  steady state 60,000 scripts/yr ≈ €18.5M/yr
Outcome B (evidence fails): delisted at month 12; revenue stops.
```

Az ideiglenes év finanszírozza a bizonyítékgenerálást — az útvonal központi újítása. Hasonlítsd ezt a hagyományos sorrendhez (előbb bizonyíték, bevétel évekkel később), amely éppen azokat a termékeket éhezteti, amelyeknek a DiGA léteznie akar.

## Kapcsolat a szoftverfejlesztéssel

A DiGA mintája — **ideiglenes bevezetés előre regisztrált sikermutatóval és automatikus lejárattal** — közvetlenül másolható mérnöki eszközirányításra: szállítsd az eszközt éles felhasználóknak 12 hónapra, regisztráld előre a mutatót (mért megtakarított idő, incidenscsökkenés), és automatikusan járjon le, hacsak a bizonyíték meg nem érkezik. Megoldja a kísérleti projekt-paradoxont (az olyan eszközök, amelyeknek léptékre van szükségük az érték bizonyításához, soha nem kapnak lépéket) anélkül, hogy végleges bérletet adna a bizonyítatlan technológiának. A 81%-os aktiválás/alacsony adherencia adat termékleckét is hordoz: a recept (vagy a vezetői megbízás) telepítéseket hoz; csak a termékminőség hoz tartós használatot — lásd [adherencia és perzisztencia](../adherencia-és-perzisztencia/).

## Buktatók

- **A listázás célvonalként kezelése** — a receptekhez felíró bizalom kell; sok listázott DiGA elhanyagolható forgalmat lát.
- **A kulcsfontosságú vizsgálat alulméretezése** a bevételi év alatti pénzmegtakarításért — a hamis gazdaságosság, amely magyarázza a 50%-os hibaarány nagy részét.
- **A modell átvitele a finanszírozó nélkül**: a DiGA azért működik, mert a térítés törvényi; a kötelező fizetés nélküli másolat csak kísérleti program.

## Források

- Analysis of the DiGA market, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01137-1>
- DiGA pricing trends, npj Digital Medicine 2025. <https://www.nature.com/articles/s41746-025-01879-6>
- BfArM, Digital Health Applications. <https://www.bfarm.de/EN/Medical-devices/Tasks/DiGA-and-DiPA/Digital-Health-Applications/_node.html>
