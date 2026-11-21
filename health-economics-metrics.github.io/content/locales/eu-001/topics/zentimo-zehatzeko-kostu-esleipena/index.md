# Zentimo zehatzeko kostu-esleipena (Exact-Cents Cost Allocation)

Diru-guztizko bat — diru-laguntza partekatu bat, azpiegitura-faktura bat, aurrekontu-inpaktuaren zifra bat — hartzaile batzuen artean ehuneko-aritmetika inozoz zatitzeak rutinaz sortzen ditu jatorrizko guztizkora berriz batzen ez diren zatiak. Zentimo zehatzeko esleipena konponbidea da: moneta-azpiunitateetan (zentimoetan) lan egiten duen zenbaki oso/hamartar metodo bat, zatiak *zehatz-mehatz* osoa osatzen dutela bermatzen duena, zeinahi irregularki zatitu. Banatutako guztizko bat zentimora koadratu behar duen edozein software-ingeniarik — nomina, diru-laguntzen banaketa, zerbitzu partekatuen kargua — eredu hau behar du, ez koma higikorreko ehunekoak.

## Zergatik axola duen

Hau enpresa-softwarearen ingeniaritzako eredu izendatu eta funtsezko bat da: Martin Fowlerren *Patterns of Enterprise Application Architecture* (2002) liburuak `Money` eta `Allocate` dokumentatzen ditu hain zuzen "$100 hiru modutan zatitu" kode inozoak etengabe gaizki egiten duen arazoa delako, eta isilean gaizki egiten duelako — errorea kontabilitatea koadratzen denean bakarrik azaleratzen da, zatiak guztizkoaren zentimo bat motz (edo gehiegi) daudela aurkitzean. Osasun-ekonomian eta NHSren finantzetan hau ez da akademikoa: aurrekontu-inpaktuaren guztizkoak guneetan, urteetan edo zuzendaritzetan zatitzen dira; azpiegitura eta lizentzia partekatuen kostuak departamentuen artean banatzen dira langile-kopuruaren edo jardueraren zatiaren arabera. Zatiketa horietako bakoitzak zehatz-mehatz koadratu behar du, guztizkora batzen ez diren zatiak ematen dizkioten finantza-zuzendariak eredu osoarekiko konfiantza galtzen baitu.

## Matematika

```
Metodo inozoa (hautsia):
  zatia_i = round(totala × partaidetza_i / Σ partaidetzak)     — zati bakoitza bereizita biribiltzen du

Metodo zehatza (hondar handienaren metodoa / "largest remainder allocation"):
  1. oinarria_i = floor(totala_azpiunitateak × partaidetza_i / Σ partaidetzak)   — azpiunitate osoak (zentimoak) bakarrik
  2. hondarra = totala_azpiunitateak − Σ oinarria_i                  — gelditzen diren zentimoak, hartzaile-kopurua baino gutxiago beti
  3. banatu azpiunitate gehigarri bat `hondarra` hartzaileei, 1. urratseko hondar
     frakzionalik handienarekin, gelditzen dena agortu arte

Emaitza: Σ zatia_i == totala, beti, eraikuntzaz.
```

Metodo zehatzak ez du inoiz zati bat isolatuan biribiltzen — *esleipen osoa* eragiketa bakar gisa biribiltzen du, eta horrek betetzen du batuketaren invariantea.

## Adibide landua

Zatitu $100.00 hiru zati berdinetan (`partaidetzak = [1, 1, 1]`).

Metodo inozoa: $100.00 ÷ 3 = $33.333…, zentimo hurbilenera bereizita biribilduta $33.33 hartzaile bakoitzeko. Batuta: $33.33 × 3 = $99.99 — zentimo bat desagertu da, eta lerro bakar bat ere ez dago ikuskapenaz antzemateko bezain "gaizki".

Metodo zehatza: `oinarria` = $33.33 hirurentzat (9.999 azpiunitate guztira, `floor(10,000 / 3) = 3,333` zentimo bakoitzeko), 1 zentimoko hondarra utziz (10,000 − 9,999). Gelditzen den zentimo bakar hori zatiketan hondar frakzional handiena duen hartzaileari doa — hartzaile zehatza barne-berdinketa-hausteko xehetasuna da, ez deitzaile batek menpeko izan beharko lukeena. Bi hartzailek $33.33 eta batek $33.34 jasotzen dute, eta hiru zatiek zehatz-mehatz $100.00 batzen dituzte.

Hau da zehazki [aurrekontu-inpaktuaren analisiak](../aurrekontu-inpaktuaren-analisia/) behar duen aritmetika aurrekontu-inpaktuaren guztizkoa guneetan, kohorteetan edo finantza-urteetan zatitu eta argitaratutako guztizkora koadratu behar denean — ikus [moneta-segurua den kostu-agregazioa](../moneta-segurua-den-kostu-agregazioa/) lerro horietako asko noraezik gabe batzeko arazo lagunarentzat.

## Software ingeniaritzarekin lotura

Hau literalki enpresa-softwarearen arkitekturako "Money eredua" da — hain zuzen akats-klase honetarako izendatutako eredu funtsezkoa, ez trikimailu isolatu bat. Finantza-koadraketako benetako hutsegiteak bidali dira akats-klase horretatik: ehuneko-zatiketak `f64`z kalkulatuak, hartzaile bakoitzeko biribilduak eta jatorrizko guztizkoarekin inoiz egiaztatu gabeak. Biltegi honetako [jabetzaren kostu osoa](../jabetzaren-kostu-osoa/) moduluarekin zuzenean lotzen da, gaur egun urteetan eta aukeretan koma higikorreko kostuak besterik gabe batzen dituena — zehaztasun-diziplina bera aplikatzen da TCO edo aurrekontu-inpaktuaren guztizko bat batu beharrean banatu behar denean.

## Tranpak

- **Ehuneko-gero-biribildu hondar handienaren ordez**: koma higikorreko ehunekoekin esleitzea eta hartzaile bakoitza bereizita biribiltzea, biribiltze-errorea konposatzen duena eta guztizkora gutxitan batzen dena, batez ere hartzaile askorekin.
- **Monetaren azpiunitate-berretzaileak ez ikustea**: moneta guztiek 2 hamartar dituztela suposatzea — Yen japoniarrak 0 ditu, moneta batzuek 3 — eskuz egindako ehuneko-zatiketa batek normalean 2 finkatzen du eta isilean hausten da beste monetetan; esleipen zehatzeko errutina batek berretzailea monetatik bertatik irakurtzen du (ISO 4217).
- **Dagoeneko esleitutako hondarra berriz esleitzea**: esleipen-errutina aurreko esleipen baten hondarrean berriro exekutatzea, idempotentzia-egiaztapenik gabe, zentimo bera hartzaile berari bi aldiz kredituta egon daitekeena.

## Iturriak

- Fowler M. "Patterns of Enterprise Application Architecture." Addison-Wesley, 2002 — the `Money` and `Allocate` patterns.
- ISO 4217 — currency and funds code standard, which defines each currency's minor-unit exponent.
