# Usporedba ICER-a među valutama

Usporedba [ICER-a](../inkrementalni-omjer-isplativosti/) izračunanog u valuti jedne zemlje s [pragom spremnosti na plaćanje](../pragovi-spremnosti-na-plaćanje/) druge zemlje — ili udruživanje podataka o troškovima prikupljenih u multinacionalnom ispitivanju — zahtijeva izričit, provjerljiv korak pretvorbe valuta. Ako se metoda pretvorbe pogrešno odabere, isti temeljni dokazi mogu preokrenuti odluku o usvajanju, iako se ništa u kliničkim podacima ili podacima o troškovima nije promijenilo.

## Zašto je važno

ISPOR-ove metodološke smjernice za multinacionalna klinička ispitivanja (Willke i sur., *Health Economics*, 1998.) preporučuju pretvaranje troškova resursa pomoću **pariteta kupovne moći (PPP)** — a ne tržišnih tečajeva — pri usporedbi stvarne ekonomske vrijednosti resursa među zemljama, a tržišne devizne tečajeve čuvaju za ono za što služe: modeliranje stvarnih prekograničnih novčanih tokova. Brkanje to dvoje jedna je od najčešćih metodoloških pogrešaka u multinacionalnom HTA-u, upravo zato što oboje izgleda kao „tečaj” nekome tko nije pročitao smjernice, a proračunska tablica vas ne sprječava da to učinite pogrešno.

## Matematika

```
icer_in_local_currency = convert(icer_in_source_currency, conversion_factor)

conversion_factor treba biti:
  PPP faktor pretvorbe — za usporedbu stvarne ekonomske vrijednosti resursa
                          među zemljama (preporuka ISPOR-a za
                          multinacionalni CEA)
  tržišni devizni tečaj — samo za stvarna prekogranična novčana plaćanja

usvojiti ako je icer_in_local_currency < local_threshold
```

Samo pravilo odlučivanja je obično [pravilo praga ICER-a](../pragovi-spremnosti-na-plaćanje/) — `usvojiti ako je ICER < λ` — a metodološko pitanje kojim se bavi ova tema u cijelosti je o tome *koji faktor pretvorbe* daje iznos `icer_in_local_currency` na koji se to pravilo primjenjuje.

## Riješeni primjer

ICER lijeka iz američkog ispitivanja je 45.000 $/QALY. Hipotetska zemlja uvoznica postavlja vlastiti ilustrativni prag na 34.000 £/QALY (hipotetski iznos specifičan za zemlju samo za ovaj primjer — stvarni pragovi razlikuju se po zemljama i mijenjaju se kroz vrijeme te se uvijek moraju navesti uz izvor i datum).

**Uz PPP faktor pretvorbe 0,72** (ilustrativno, samo za ovaj primjer): 45.000 $ × 0,72 = 32.400 £/QALY. 32.400 £ < 34.000 £ → **usvojiti**.

**Uz tržišni devizni tečaj 0,79** umjesto toga (ilustrativno): 45.000 $ × 0,79 = 35.550 £/QALY. 35.550 £ > 34.000 £ → **odbaciti**.

Isti temeljni ICER od 45.000 $/QALY daje odluku usvojiti pri PPP pretvorbi i odluku odbaciti pri pretvorbi tržišnim tečajem. To je konkretna ilustracija zašto ISPOR-ove smjernice izbor faktora pretvorbe tretiraju kao metodološki presudan — a ne kao detalj zaokruživanja, niti nešto što treba prepustiti implicitnim u formuli proračunske tablice koju nitko dvaput ne provjerava.

## Veza sa softverskim inženjerstvom

Ovo je zdravstveno-ekonomsko zrcalo poznatog inženjerskog područja: ispravnosti viševalutnog određivanja cijena u i18n/l10n komercijalnog softvera, gdje stranica s cijenama SaaS-a nikad ne smije tiho usporediti iznos u `$` s cijenom u `£`. Jamstvo na razini tipa koje daje dobro izgrađen tip `Money` — metode usporedbe koje odbijaju usporediti nepodudarne valute, prisiljavajući prvo na izričit korak pretvorbe — izravna je softversko-inženjerska paralela metodološkoj točki zdravstvene ekonomije ovdje: ne uspoređujte nepretvorene iznose među valutama i ne dopustite da korak pretvorbe bude implicitan ili nedokumentiran.

## Zamke

- **Tiho uspoređivanje iznosa u različitim valutama**: ad hoc HTA rad u proračunskim tablicama koji oduzima ili uspoređuje iznos u dolarima i iznos u funtama bez prethodnog koraka pretvorbe — klasa grešaka koju pravi tip `Money` svjestan valuta hvata po konstrukciji umjesto da ostane tiha pogreška.
- **Brkanje tržišnog deviznog tečaja i PPP-a**: najčešća pojedinačna metodološka pogreška u multinacionalnom HTA-u prema ISPOR-ovim smjernicama — ta dva broja mogu se bitno razlikovati i odgovaraju na različita pitanja (stvarna ekonomska vrijednost naspram stvarnog novčanog toka).
- **Nedatiranje korištenog tečaja ili PPP indeksa**: oba se mijenjaju kroz vrijeme, pa se svaki navedeni faktor pretvorbe mora datirati na isti način na koji ovaj repozitorij datira druge referentne brojke (vrijednosti ugljika iz Green Booka, vrijednost spriječene smrti itd.).

## Izvori

- Willke RJ, Glick HA, Polsky D, Schulman K. "Estimating country-specific cost-effectiveness from multinational clinical trials." *Health Economics*. 1998;7(6):481-93.
- OECD, Purchasing Power Parities (PPP) data. <https://www.oecd.org/en/data/indicators/purchasing-power-parities-ppp.html>
