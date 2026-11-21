# Bertaratu ez izanaren tasa (Did-Not-Attend Rate, DNA)

DNA tasa pazienteak bertaratzen ez diren eta bertan behera uzten ez dituen erreserbatutako hitzorduen ehunekoa da. Klinikoa, gela eta txanda ordainduta daude; ez da ezer gertatzen. Osasun-arretako xahutze-metrika purena da — eta softwareaz konpon daitezkeenetako bat.

## Zergatik axola duen

NHS Englandeko zifrek (2019): hutsegindako GP hitzordu kopurua urtean 15 milioi gainditzen du, bakoitza ~£30ean — **£216M/urte** baino gehiago — eta ospitaleko kanpo-kontsulten DNAk ~8M/urte dira (hitzorduen ~%6,4), hutsegindako txanda bakoitzeko batez beste ~**£160**ean. Gogorarazpen baten kostu marjinala zentimoak direlako eta berreskuratutako balioa langilez beteta dagoen txanda kliniko oso bat delako, DNA murrizketak osasun digitaleko ROI aritmetikarik onenetakoa du, eta horregatik izan ziren SMS gogorarazpenak, berriz erreserbatze erraza eta overbooking predikzionala osasun digitaleko lehen irabazi frogatuen artean.

## Matematika

```
DNA tasa = DNAk / erreserbatutako hitzorduak × 100

Murrizketaren balioa = hitzorduak × ΔDNA tasa × berreskuratutako txanda bakoitzeko balioa

berreskuratutako txanda bakoitzeko balioa: txanda berriz betetzen da (jarduera-balioa /
itxaron-zerrendaren murrizketa) edo ez (langileen denbora partzialki berrerabilgarria) —
mekanismoak axola du, bed-days-saved.md-n bezala.
```

## Adibide landua

Kanpo-kontsulten departamentu bat: 200.000 hitzordu/urte, DNA tasa %8. Gogorarazpen-gehi-berriz-erreserbatze zerbitzu batek (SMS ukitu bakarreko berriz erreserbatzearekin, garraio-informazioarekin, formatu irisgarriekin) DNAak %5,5era jaisten ditu.

```
Berreskuratutako txandak = 200,000 × 0.025 = 5,000/urte
Itxaron-zerrendatik berriz beteta ~£160 batez besteko kanpo-kontsulta balioan:
  5,000 × £160 = £800,000/urte berreskuratutako jarduera
Zerbitzuaren kostua: 200,000 × £0.40 = £80,000/urte

Itzulkina ≈ 10:1, gehi itxaron-zerrendako 5.000 paziente lehenago artatuak
(ikus waiting-list-impact.md eta referral-to-treatment.md).
```

Efektu-tamaina (2,5 puntu) errealista da: gogorarazpenen RCTek etengabe erakusten dute DNAren %25–40 murrizketa erlatiboa.

## Software ingeniaritzarekin lotura

- **Hau programazio-sistemen arazoa da**: gogorarazpenak, norberak egindako berriz erreserbatzea, bertan behera utzitakoekin itxaron-zerrendaren auto-betetzea eta overbooking zuzendua gidatzen duten no-show iragarpen-ereduak. Bakoitza ingeniaritza-lan arrunta da, kasu ekonomiko bereziki zorrotzarekin.
- **Ingeniaritzako analogoa**: erreserbatutako ahalmenaren no-showak — erreserbatu baina alferrik dauden CI txandak, hodei-ahalmen erreserbatua, bilera-gelak, elkarrizketa-panelak. Ekonomia transferitzen da: bultzada automatiko merke batek (edo erabili gabeko erreserben auto-askatzeak) konprometitutako ahalmen garestia berreskuratzen du.
- **Iragarpenaren etikaren aurrebista**: bertaratze-datuetan entrenatutako no-show ereduek pobrezia eta sarbide-oztopoak kodetzen dituzte; bertaratuko ez direnak *lehentasun gutxiagorekin* tratatzeko erabiltzeak ezberdintasuna anplifikatzen du, bertaratzea *laguntzeko* (garraio-laguntza, telefono-alternatibak) erabiltzeak murrizten du. Ikus [irismena eta ekitatea](../irismena-eta-ekitatea/).

## Tranpak

- **Bertan behera utzi eta berriz erreserbatua berreskuratutako balio gisa bi aldiz zenbatzea.**
- **Berriz betetzen ez diren berreskuratutako txandak balioestea** — gogorarazpena bidali den txanda hutsak huts jarraitzen du.
- **DNA zerora jaistea bilatzea**: DNAren azken puntuak benetako oztopoak dituzten pazienteak dira; ikuspegi zigortzaileek (N DNAren ondoren alta ematea) metrika jaisten dute pazienteak abandonatuz.

## Iturriak

- NHS England, "Missed GP appointments costing NHS millions" (2019). <https://www.england.nhs.uk/2019/01/missed-gp-appointments-costing-nhs-millions/>
- DNA cost summaries. <https://www.deep-medical.ai/cost-of-missed-nhs-appointments/>
