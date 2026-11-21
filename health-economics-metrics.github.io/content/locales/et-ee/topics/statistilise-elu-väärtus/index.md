# Statistilise elu väärtus (VSL)

Statistilise elu väärtus (VSL) — Briti kasutuses „ärahoitud surma väärtus“ (VPF) — on summa, mille *populatsioon* on kollektiivselt valmis maksma ühe statistilise surma riski vähendamise eest, tuletatud palga ja riski vahetuskaubanduse uuringutest (kui palju lisapalka töötajad nõuavad ohtlikuma töö eest) ja deklareeritud eelistuste küsitlustest. See ei ole ühegi tuvastatud isiku elu hind; see on populatsiooniriski konstruktsioon ning riske vähendavaid süsteeme — triaažialgoritme, kiirabi dispetšerlust, ohutusseiret — ehitav tarkvarainsener peab teadma, et see pärineb teisest teoreetilisest traditsioonist kui [maksevalmiduse lävendid](../maksevalmiduse-lävendid/).

## Miks see on oluline

VSL/VPF on standardvahend suremusriski vähenemiste rahaks teisendamiseks regulatiivses kulu-tulu analüüsis: transpordiohutus, keskkonnaregulatsioon ja mõned rahvatervise sekkumised juhivad oma ärijuhtumid selle kaudu. HM Treasury Green Book avaldab VPF-arvu, mis on tuletatud Briti tööturu- ja küsitlusandmetest, ning Transpordiministeerium kasutab seda otse teedeohutuse hindamisel. See on tõeliselt erinev hindamistraditsioon kui metoodika QALY × maksevalmiduse lävend: lävendipõhine lähenemine hindab tervisetulu selle vastu, mida tervise*eelarve* praegu piiril toodab, samas kui VSL/VPF hindab riskivähenemist selle vastu, mida inimesed tööturul või küsitluses paljastavad, et nad selle eest maksaksid. Need kaks raamistikku ei ole alati ühitatavad ning mõlema kasutamine samas juhtumis seda tunnistamata on levinud analüüsiviga.

## Matemaatika

```
Välditud surmad = populatsioon × riskivähenemine_isiku_kohta
  (riskivähenemine_isiku_kohta on tõenäosus, nt 0,000001 =
   1 miljonist vähenemine aastases suremusriskis)

Ümberarvestatud suremuskasu = välditud_surmad × ärahoitud_surma_väärtus
```

## Lahendatud näide

800 000 inimesega piirkond saab kasu teedeohutuse digitaalsest dispetšer-/triaažisekkumisest, mis vähendab iga inimese aastast suremusriski 1 miljonist (0,000001):

```
Välditud surmad = 800 000 × 0,000001 = 0,8
```

Ühendkuningriigi ärahoitud surma väärtusega £2 180 000 (HM Treasury/DfT arv, 2023/24 hinnad — Green Book ajakohastab seda igal aastal, kontrolli üle enne käimasolevas analüüsis viitamist):

```
Ümberarvestatud suremuskasu = 0,8 × £2 180 000 = £1 744 000/aastas
```

Veidi alla £1,75 miljoni aastas ümberarvestatud suremuskasu, riskivähenemisest, mida enamik mõjutatud populatsioonist ei märkaks kunagi individuaalselt.

## Seos tarkvaraarendusega

Ohutuskriitilise tarkvara meeskonnad — meditsiiniseadmete püsivara, isejuhtivate sõidukite tarkvara, tööstuslikud juhtimissüsteemid — seisavad täpselt selle hinnastamisprobleemi ees, kui nad ehitavad ohutusinvesteeringu kulu-tulu juhtumit: kuidas hinnastada „ära hoida üks katastroofiline rike“, kui rike on haruldane, tõsine ja hajutatud suurele kasutajapopulatsioonile? VSL/VPF on aastakümneid vana, avalikult dokumenteeritud tegelik pretsedent arvu panemiseks haruldasele, tõsisele populatsioonitaseme riskivähenemisele — sama argumendivorm nagu SRE-investeeringu hinnastamine haruldase katastroofilise katkestuse vastu, ainult suremustulemusega seisakutulemuse asemel.

## Lõksud

- **VSL-i käsitamine „tuvastatud elu hinnana“**: see ei ole seda. VSL/VPF on statistiline populatsioonikonstruktsioon, mis on tuletatud riskivähenemise kompromissidest paljude inimeste vahel, mitte konkreetse isiku elu või surma hinnang.
- **Topeltarvestus QALY-põhise netorahalise kasu arvutuse suhtes**: VSL/VPF-arvu ja eraldi QALY × lävend arvutuse kasutamine samas juhtumis, neid ühitamata, loeb vaikselt kaks korda samade välditud surmade väärtust. Vali antud juhtumi jaoks üks raamistik.
- **VSL-i hinnangu ülekandmine kontekstide vahel ilma kohandamiseta**: ühe riigi tööturult või tööealiste palga–riski andmetest tuletatud VSL, mida rakendatakse kohandamata teisele sissetulekukontekstile või teisele populatsioonile (lapsed, pensionärid), on pikaajaline, tõeliselt vaieldav metoodiline küsimus — mitte lahendatud.

## Allikad

- HM Treasury, The Green Book: Central Government Guidance on Appraisal and Evaluation — Value of a Prevented Fatality täiendav juhend (2023/24 hinnad; Green Booki väärtusi ajakohastatakse igal aastal). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- US EPA, „Mortality Risk Valuation“ (USA VSL-traditsiooni kohta, toodud kontrastiks ülaltoodud Briti VPF-arvuga). <https://www.epa.gov/environmental-economics/mortality-risk-valuation>
- Viscusi WK, Aldy JE. „The Value of a Statistical Life: A Critical Review of Market Estimates Throughout the World.“ J Risk Uncertain. 2003;27(1):5-76.
