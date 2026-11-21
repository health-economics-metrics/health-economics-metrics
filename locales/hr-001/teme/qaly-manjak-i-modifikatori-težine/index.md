# QALY manjak i modifikatori težine

QALY manjak (shortfall) mjeri koliko budućeg zdravlja bolest oduzima pacijentima u usporedbi s općom populacijom. NICE ga koristi za primjenu **modifikatora težine**: što je populacija bolesnija, to svaki dobiveni QALY vrijedi više — do 1,7× standardnog praga.

## Zašto je važno

Od priručnika NICE-a iz 2022. težina bolesti je izričit množitelj vrijednosti zdravstvenih dobitaka, koji zamjenjuje stari dodatak za kraj života. Tehnologija za tešku bolest procjenjuje se prema učinkovitom pragu do ~51.000 £/QALY umjesto 30.000 £. Ako vaš softver služi teško pogođenoj populaciji (uznapredovalo zatajenje srca, teška mentalna bolest), modifikator težine može biti razlika između financirljivog i nefinancirljivog ekonomskog slučaja — a za to vam treba matematika manjka.

## Matematika

Dvije mjere, izračunate kroz preostali životni vijek uz trenutačni standard skrbi:

```
Apsolutni manjak     = QALY_opća_populacija − QALY_sa_stanjem
Proporcionalni manjak = Apsolutni manjak / QALY_opća_populacija
```

Težine NICE-a 2022. (primjenjuje se ona mjera koja daje višu težinu):

```
Težina ×1.0: apsolutni < 12 i proporcionalni < 0.85
Težina ×1.2: apsolutni ≥ 12 ili proporcionalni ≥ 0.85
Težina ×1.7: apsolutni ≥ 18 ili proporcionalni ≥ 0.95
```

Težina množi ΔE (ili ekvivalentno prag): učinkoviti λ postaje 24–36 tis. £ pri ×1,2 i 34–51 tis. £ pri ×1,7.

## Riješeni primjer

Pacijenti s agresivnim stanjem, prosječne dobi 60 godina. Opća populacija u dobi od 60 očekuje 14,2 diskontirana QALY-ja; sa stanjem uz trenutačnu skrb, 2,1.

```
Apsolutni manjak      = 14.2 − 2.1 = 12.1  (≥ 12 → kvalificira za ×1.2)
Proporcionalni manjak = 12.1 / 14.2 = 0.852 (≥ 0.85 → također ×1.2)
```

ICER vaše platforme za praćenje je 26.000 £/QALY — iznad standardne sredine procjene 20–30 tis. £, granično. Uz težinu ×1,2: učinkoviti ICER = 26.000 / 1,2 ≈ **21.700 £/QALY** — udobno financirljivo. Izračun manjka upravo je pomaknuo odluku.

## Veza sa softverskim inženjerstvom

Ponderiranje težine formalna je inačica onoga što inženjerske organizacije rade instinktivno: troše više po jedinici poboljšanja na sustavima koji su u najgorem stanju. Prenosivi obrazac — izračunajte „SLO manjak” svake usluge (koliko je ispod očekivane zdrave osnovne razine, apsolutno i proporcionalno) i prema tome ponderirajte vrijednost sanacije. To opravdava, aritmetikom umjesto argumentima, zašto zapaljeni naslijeđeni sustav dobiva više ulaganja po ušteđenom satu od zdravoga. Nosi i istu lekciju upravljanja: objavite težine *prije* sastanka o određivanju prioriteta, ili će svaki tim tvrditi težinu.

## Zamke

- **Računanje manjka prema pogrešnoj osnovnoj liniji**: mjeri se pod *trenutačnim standardom skrbi*, a ne prema neliječenom prirodnom tijeku.
- **Osjetljivost na dob**: manjak jako ovisi o dobi populacije (mlađi pacijenti imaju više QALY-ja za izgubiti → viši apsolutni manjak); koristite stvarnu dobnu distribuciju liječene populacije.
- **Pretpostavka da se modifikator primjenjuje drugdje** — to je mehanizam NICE-a (Engleska); druga HTA tijela težinu rješavaju drukčije (ili uopće ne).

## Izvori

- Analysis of NICE severity modifier decisions, Value in Health 2024. <https://www.sciencedirect.com/science/article/pii/S1098301524000858>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- Mtech Access, NICE HTA decision modifiers explainer. <https://mtechaccess.co.uk/nice-hta-decision-modifier/>
