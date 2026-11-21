# Analiza isplativosti (CEA)

CEA uspoređuje troškove alternativnih intervencija naspram jednog ishoda mjerenog u **prirodnim jedinicama** — godine života, otkriveni slučajevi, izbjegnuti prijmovi, mmHg sniženja krvnog tlaka. Izlaz je trošak po jedinici ishoda.

## Zašto je važno

CEA je radni konj usporedbe kad sve opcije ciljaju isti ishod. Odgovara na „koji je od ovih načina postizanja X najbolja uporaba novca?” — ali *ne* na „vrijedi li X uopće postizati?” (za to treba [analiza troškova i koristi](../analiza-troškova-i-koristi/)) i *ne* na „kako se X uspoređuje s nepovezanim prioritetima?” (za to treba [analiza troška i korisnosti](../analiza-troška-i-korisnosti/) i generički ishod poput QALY-ja).

## Matematika

Usporedna statistika je [ICER](../inkrementalni-omjer-isplativosti/) u prirodnim jedinicama:

```
ICER = (Cost_A − Cost_B) / (Effect_A − Effect_B)
     = £ po dodatnom otkrivenom slučaju / izbjegnutom prijmu / itd.
```

Postupak: definirajte jedinicu ishoda; cijenite svaku opciju iz iste [perspektive](../perspektiva-analize/) kroz isti [vremenski horizont](../vremenski-horizont/); uklonite dominirane opcije ([granica učinkovitosti](../dominacija-i-granica-učinkovitosti/)); izračunajte inkrementalne omjere duž granice.

## Riješeni primjer

Tri načina za pronalaženje nedijagnosticirane fibrilacije atrija u populaciji od 100.000:

```
Opcija                       Trošak      Pronađeni slučajevi
Oportunistička mjerenja pulsa £150,000       300
Događaji probira u ljekarnama £400,000       520
Probir temeljen na nosivim uređajima £900,000  610

ICER ljekarna vs puls:   (400k−150k)/(520−300) = £1,136 po dodatnom slučaju
ICER nosivi vs ljekarna: (900k−400k)/(610−520) = £5,556 po dodatnom slučaju
```

Je li 5.556 £ po dodatnom slučaju „vrijedno” ovisi o vrijednosti pronađenog slučaja (nizvodna prevencija moždanog udara) — CEA rangira opcije, ali odluka o usvajanju treba to vanjsko vrednovanje. Primijetite da *prosječni* trošak po slučaju za opciju s nosivim uređajima (900k/610 = 1.475 £) izgleda u redu; *inkrementalnih* 5.556 £ je pošten broj za odluku o proširenju.

## Veza sa softverskim inženjerstvom

CEA je pravi predložak kad god opcije dijele jedan ishod: trošak po uklonjenom nepouzdanom testu kroz tri pristupa sanaciji; trošak po izbjegnutom incidentu kroz dobavljače observabilnosti; trošak po uspješnom puštanju u rad kroz CI arhitekture. Disciplina koju nameće — jedna deklarirana jedinica ishoda, inkrementalni (ne prosječni) omjeri, dominirane opcije uklonjene prve — ubija većinu loših usporedbi dobavljača prije nego što rasprava o cijenama počne.

## Zamke

- **Uspoređivanje opcija s različitim ishodima** („pronađeni slučajevi” naspram „zadovoljstvo”) u jednoj CEA — to treba [analizu troškova i posljedica](../analiza-troškova-i-posljedica/) ili generički ishod.
- **Prosječni omjeri isplativosti** prikazani gdje trebaju inkrementalni (gornji primjer s nosivim uređajima).
- **Jedinice ishoda birane radi laskanja**: „generirana upozorenja” su izlaz, a ne ishod; inzistirajte na jedinicama koje nose vrijednost.

## Izvori

- CDC POLARIS: cost-effectiveness analysis. <https://www.cdc.gov/policy/polaris/economics/cost-effectiveness/index.html>
- York Health Economics Consortium glossary. <https://yhec.co.uk/glossary/cost-effectiveness-analysis/>
