# Ekonomija daljinskog praćenja pacijenata

Ekonomija nadoknade i odbitaka troškova praćenja pacijenata kod kuće: u SAD-u definiran stog prihoda CPT kodova; u nacionalnim zdravstvenim službama ekonomija izbjegavanja prijma i virtualnih odjela, sve do potpune supstitucije **bolnice kod kuće (hospital-at-home)**.

## Zašto je važno

RPM je mjesto gdje podaci uređaja postaju naplativa zdravstvena skrb. Američka Medicare struktura (nacionalni prosjeci 2025.) neobično je izričita:

```
99453  postavljanje i edukacija pacijenta   ~$19.73  jednokratno (nakon 16 dana podataka)
99454  oprema uređaja + prijenos            ~$43.03  po 30 dana — ZAHTIJEVA ≥16 dana
                                                    očitanja u tih 30
99457  prvih 20 min/mjesečno upravljanja    ~$47.87  zahtijeva ≥20 zabilježenih minuta
99458  svakih dodatnih 20 min               ~$38.49
```

Sukladan pacijentov mjesec zbraja se na otprilike **90–130 $ PMPM**. Na strani odbitaka troška, programi bolnice kod kuće (CMS-ova Acute Hospital Care at Home iznimka: 300+ bolnica) pokazuju ~1.800–3.000 $ ušteđeno po susretu naspram bolničkog liječenja uz manje ponovnih prijma i infekcija — najjasnija demonstracija da praćenje plus virtualna skrb mogu zamijeniti najskuplji resurs u sustavu, krevet s osobljem.

## Matematika

```
RPM prihod (SAD)  = uključeni × udio usklađen s naplatom × stog kodova PMPM
  — pravilo od 16 dana čini sukladnost nošenja (wearable-validation.md)
    varijablom prihoda, a pravilo od 20 minuta čini bilježenje kliničkog
    vremena inženjerskim zahtjevom

Vrijednost u stilu NHS-a = izbjegnuti prijmovi × granični trošak prijma
                         + zamijenjeni bolnički dani × (trošak bolničkog − dana virtualnog odjela)
                         − trošak usluge (uređaji, platforma, osoblje za praćenje)
  (vidi emergency-attendance-avoidance.md i bed-days-saved.md za
   pravila pripisivanja i graničnog troška)
```

## Riješeni primjer

Američka ordinacija uključuje 400 pacijenata s hipertenzijom; 70 % zadovoljava prag od 16 dana u tipičnom mjesecu; minute upravljanja zabilježene za 60 %:

```
Mjesečni prihod ≈ 400 × [0.70 × 43.03 + 0.60 × 47.87] = 400 × 58.84 ≈ $23,500
Godišnje ≈ $282,000; trošak usluge (uređaji $12/mj, osoblje 0.8 FTE) ≈ $180,000
Marža ≈ $100k/godišnje — i primijetite da su poluge inženjerske poluge:
podizanje sukladnosti od 16 dana sa 70% → 85% dodaje ~$31k/godišnje
(udobnost uređaja, pouzdanost sinkronizacije, dizajn podsjetnika).
```

NHS zrcalo: virtualni odjel od 50 kreveta uz 80 % popunjenosti koji zamjenjuje bolničke dane uz neto uštedu od 150 £/dan ≈ 50 × 0,8 × 365 × 150 ≈ **2,19 mil. £/godišnje** bruto — naspram platforme, uređaja i tima njege u zajednici koji ga osigurava.

## Veza sa softverskim inženjerstvom

RPM platforme su rijedak proizvod gdje se **dostupnost i pouzdanost sinkronizacije izravno pretvaraju u prihod** (tjedan neuspjelih sinkronizacija lomi vrata od 16 dana za kohortu) i gdje je praćenje vremena razine revizije (pravilo od 20 minuta) prvoklasna funkcija, a ne naknadna misao. Gradite za: nadzorne ploče sukladnosti po pacijentu koje prikazuju mjesece naplate u riziku dok se još mogu spasiti; vremenski označene, na neovlaštene izmjene otporne tragove podataka (revizije platitelja su rutinske); i podešavanje ekonomije upozorenja — svako upozorenje troši minute tima za praćenje, koje su i naplativa jedinica i oskudan resurs ([ekonomija probira](../ekonomija-probira/) upravlja izborom praga).

## Zamke

- **Uključenje ≠ prihod**: sukladni udio je broj; modelirajte ga, ne pretpostavljajte.
- **Američki kodovi presađeni u NHS slučajeve** — nacionalne zdravstvene službe kupuju izbjegavanje prijma, a ne CPT stogove; pokrenite drugi model.
- **Tvrdnje o odbicima po prosječnom trošku** za prijmove čiji fiksni troškovi ostaju (vidi [granični naspram prosječnog troška](../granični-naspram-prosječnog-troška/)).
- **Zasićenje tima za praćenje**: volumen upozorenja skalira s uključenjem; stavka osoblja je obvezujuće ograničenje koje većina modela izostavlja.

## Izvori

- RPM CPT codes and 2025 rates. <https://blog.prevounce.com/quick-guide-remote-patient-monitoring-rpm-cpt-codes-to-know>
- CMS hospital-at-home outcomes reporting. <https://www.mcknightshomecare.com/news/hospital-at-home-achieved-cost-savings-among-all-top-diagnosis-groups-cms-reports/>
- Telehealth.HHS.gov, billing for RPM. <https://telehealth.hhs.gov/providers/best-practice-guides/telehealth-and-remote-patient-monitoring/billing-remote-patient>
