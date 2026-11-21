# Regulatorna evaluacija AI-ja

Regulatorni okviri koji upravljaju AI-jem u zdravstvu — FDA-in režim Software as a Medical Device (SaMD) s **Predetermined Change Control Plans (PCCP)** i programi evaluacije u stvarnoj praksi poput NHS-ove nagrade AI in Health and Care — te što koštaju i što omogućuju ekonomski.

## Zašto je važno

Regulacija određuje i **trošak dokaza za ulazak na tržište** i **trošak svakog sljedećeg ažuriranja modela** — za AI proizvode ovo drugo često je važnije. FDA-in tradicionalni način (zaključaj model; ponovno odobri za promjene) činio je kontinuirano poboljšanje ekonomski brutalnim. **PCCP smjernice (dovršene u prosincu 2024.)** promijenile su ekonomiju: proizvođač može unaprijed odobriti *navedena* buduća ažuriranja modela — opis planiranih izmjena, protokol izmjena (kako će se svaka validirati) i procjenu utjecaja — pa se odobrena poboljšanja isporučuju bez nove prijave. Više od 1.000 uređaja s AI-jem ima FDA odobrenje; FDA sada ispituje i praćenje učinka u stvarnoj praksi (unaprijed određene metrike: osnovne stope FP/FN, pomak kalibracije, pokazatelji pomaka domene).

## Matematika

PCCP je ekonomija [DORA vremena isporuke](../dora-metrike/) primijenjena na regulirane modele:

```
Trošak po ažuriranju modela (tradicionalno) = trošak ponovne prijave + odgoda pregleda × CoD
Trošak po ažuriranju modela (u opsegu PCCP-a) = samo trošak izvršenja protokola

Ekonomija ažuriranja kroz životni vijek proizvoda:
  N ažuriranja × (trošak prijave + mjeseci pregleda × trošak odgode po mjesecu)
  naspram jednokratnog troška izrade PCCP-a + N × izvršenja protokola
```

Za obrazac NHS AI Awarda, skup metrika je širi od točnosti: neovisne evaluacije u stvarnoj praksi procjenjuju klinički učinak, učinke na tijek rada/uvođenje i ekonomski utjecaj — cijeli [učinkovitost → djelotvornost → isplativost](../produktivnost-programera-uz-ai/) cjevovod institucionaliziran.

## Riješeni primjer

Dobavljač AI-ja za radiologiju planira tromjesečna poboljšanja modela kroz 3 godine (12 ažuriranja):

```
Tradicionalno: 12 × (£80k prijava + 4 mjeseca × £50k/mjesec CoD odgođene koristi)
             = 12 × £280k = £3.36M
PCCP put:      £250k izrada PCCP-a + 12 × £30k izvršenje protokola = £610k
Ušteda ≈ £2.75M — a pacijenti dobivaju svako poboljšanje ~4 mjeseca ranije:
12 × 4 mjeseca × klinička korist ažuriranja, QALY stavka sama za sebe.
```

PCCP je regulatorno priznanje da **učestalost puštanja u rad ima kliničku vrijednost** — glavni uzročni lanac repozitorija, potvrđen od regulatora.

## Veza sa softverskim inženjerstvom

Dobro inženjerstvo PCCP-a je softverski problem: unaprijed određeni skupovi za evaluaciju, verzionirani skupovi podataka, automatizirani cjevovodi validacije, nadzor pomaka — regulirani rođak kontinuiranog puštanja u rad, gdje je „vrata puštanja” validirani protokol umjesto code reviewa. Timovi sa zrelom infrastrukturom evaluacije ([metrike kvalitete AI-ja](../metrike-kvalitete-ai-ja/)) dobivaju PCCP jeftino; oni bez nje otkrivaju da je regulatorno ograničenje zapravo ograničenje inženjerske zrelosti. Za proizvode koji ulaze u NHS, paralelni stog je DTAC (klinička sigurnost, zaštita podataka, interoperabilnost) plus razine dokaza [NICE ESF-a](../nice-evidence-standards-framework/) — budžetirajte sve kao [TCO](../ukupni-trošak-vlasništva/) ulaska na tržište.

## Zamke

- **PCCP snovi o širenju opsega**: unaprijed su odobrene samo *navedene* vrste izmjena; promjene arhitekture ili nove namjene i dalje trebaju puni pregled.
- **Nenadzirani pomak u stvarnoj praksi**: odobrenje pri učinku u lansiranju + tihi pomak populacije = proizvod koji radi izvan odobrene ovojnice; nadzor je i regulatorno očekivanje i samoobrana.
- **Brkanje odobrenja s vrijednošću**: FDA/UKCA odobrenje ≠ netko će platiti — to je zasebna [HTA](../procjena-zdravstvenih-tehnologija/) prepreka.

## Izvori

- FDA, AI-enabled device software / SaMD. <https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-software-medical-device>
- PCCP implementation guidance analysis. <https://intuitionlabs.ai/articles/fda-pccp-implementation-guide-ai-ml-samd>
- NHS England, lessons from AI in Health and Care Award real-world evaluations. <https://www.england.nhs.uk/long-read/planning-and-implementing-real-world-ai-evaluations-lessons-from-the-ai-in-health-and-care-award/>
