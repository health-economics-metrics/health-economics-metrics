# Analiza utjecaja na proračun (BIA)

BIA procjenjuje što usvajanje intervencije čini **proračunu** određenog platitelja kroz sljedećih 1–5 godina. Odgovara na *pristupačnost*; isplativost odgovara na *vrijednost*. Tehnologija može biti odlične vrijednosti, a ipak nepristupačna — ili pristupačna, a slabe vrijednosti. Ozbiljne procjene zahtijevaju oboje.

## Zašto je važno

Pitanje financijskog direktora nikad nije „koliki je ICER?” — nego „što ovo čini proračunu iduće godine?” Smjernice dobre prakse ISPOR-a (standard struke) propisuju: vlastitu perspektivu platitelja, horizont od 1–5 godina, *nediskontirane* godišnje novčane tokove, realistične krivulje prihvaćanja i scenarijsku (ne probabilističku) neizvjesnost. NICE zahtijeva informacije o utjecaju na proračun uz isplativost; proizvod s nacionalnim utjecajem na proračun iznad ~20 mil. £/godišnje u Engleskoj pokreće komercijalne pregovore bez obzira na njegov ICER.

## Matematika

```
BI_godina_t = Trošak_scenarij_s_novim(t) − Trošak_scenarij_trenutni(t)

Trošak_scenarij(t) = Σ po skupinama pacijenata:
   prihvatljiva populacija(t) × prihvaćanje(t) × neto trošak po pacijentu(t)

neto trošak po pacijentu = trošak intervencije − trošak istisnute skrbi + trošak inducirane skrbi
```

Ključni izbori modeliranja: rast prihvatljive populacije, krivulja prihvaćanja (usvajanje nikad nije trenutno), što nova opcija istiskuje i svaka potražnja koju *inducira* (lakši pristup → više korisnika).

## Riješeni primjer

Platitelj koji pokriva 2 mil. ljudi razmatra digitalnu terapiju po 300 £/pacijent/godišnje; 1,5 % članova prihvatljivo (30.000); prihvaćanje 20 % → 40 % → 60 % kroz 3 godine; svaki korisnik istiskuje 120 £/godišnje druge skrbi.

```
Neto trošak po korisniku = 300 − 120 = £180

Godina 1: 30,000 × 0.20 × 180 = £1.08M
Godina 2: 30,000 × 0.40 × 180 = £2.16M
Godina 3: 30,000 × 0.60 × 180 = £3.24M
```

Čak i ako je ICER proizvoda sjajnih 8.000 £/QALY, platitelj do 3. godine mora pronaći 3,24 mil. £ *novog novca* — istisnutih 120 £ raspršeno je po drugim proračunskim stavkama i neće se osloboditi kao gotovina (vidi [uštede koje oslobađaju gotovinu naspram onih koje je ne oslobađaju](../uštede-koje-oslobađaju-gotovinu-naspram-onih-koje-je-ne-oslobađaju/)). Zato su vrijednost po jedinici i pristupačnost odvojene prepreke.

## Veza sa softverskim inženjerstvom

BIA je upravo dopuna ROI-ju po licenci okrenuta financijskom direktoru: „isplativo je po programeru, ali možemo li si priuštiti uvođenje u cijeloj organizaciji ove fiskalne godine?” Modelirajte licenčne razrede, S-krivulju usvajanja, istisnutu potrošnju na alate koja oslobađa gotovinu tek kad se stari ugovori stvarno prekinu i induciranu uporabu (jeftiniji CI → više CI-ja). Prikaz trogodišnje tablice utjecaja na proračun uz ROI čini prijedlog poslovnog alata financijski vjerodostojnim. Podjela objavljenog ukupnog utjecaja na proračun po lokacijama, kohortama ili financijskim godinama — tako da se dijelovi točno slažu s objavljenim iznosom — upravo je [raspodjela troškova na točan cent](../raspodjela-troškova-na-točan-cent/); zbrajanje mnogih stavki koje uopće tvore ukupni iznos je [valutno siguran zbroj troškova](../valutno-siguran-zbroj-troškova/).

## Zamke

- **Fantazija o trenutnom prihvaćanju**: utjecaj u 1. godini izračunan uz usvajanje stabilnog stanja.
- **Brojanje istisnutog troška kao gotovine** kad je to raspršen kapacitet.
- **Zanemarivanje inducirane potražnje** — poboljšanja pristupa povećavaju uporabu prihvatljive populacije.
- **Brkanje horizonata/diskontiranja BIA i CEA**: BIA je po dizajnu kratkog horizonta, nediskontirana i specifična za platitelja.

## Izvori

- Sullivan SD, et al. ISPOR BIA Good Practice II Task Force. Value in Health 2014;17(1):5–14. <https://pubmed.ncbi.nlm.nih.gov/24438712/>
- ISPOR good practices: budget impact analysis. <https://www.ispor.org/heor-resources/good-practices/article/principles-of-good-practice-for-budget-impact-analysis-ii>
