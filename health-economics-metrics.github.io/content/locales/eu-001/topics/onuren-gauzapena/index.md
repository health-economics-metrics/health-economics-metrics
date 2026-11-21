# Onuren gauzapena (Benefits Realization)

Onuren gauzapenaren kudeaketa (BRM) negozio-kasu batean agindutako onurak entregaren ostean benetan gauzatu direla identifikatzeko, oinarrizkoa finkatzeko, jarraitzeko eta *frogatzeko* diziplina da. Erresuma Batuko inbertsio publikoan HM Treasury-ren Green Book-eko **Bost Kasuen Ereduaren** barruan bizi da; medikuntzan, bere lehengusua merkaturatu osteko zaintza da.

## Zergatik axola duen

Negozio-kasuak promesak dira; onuren gauzapena auditoria da. NHSren programa digital nagusien ebaluazioek behin eta berriz aurkitu dituzte inoiz gauzatu ez ziren onura aurreikusiak — eta onurak diru-sarrera sortzen ez zutenean, ez zuten ezer egin trustaren azken emaitzarako. Green Book-en erantzuna: gastu-kasu orok **bost kasuak** gainditu behar ditu (estrategikoa, ekonomikoa, komertziala, finantzarioa, kudeaketakoa), onuren gauzapena kudeaketa-kasuan planifikatuta *onartu aurretik* — jabeak izendatuta, oinarriak jasota, neurketa-datak ezarrita. Hori gabe, "softwareak 30 minutu aurrezten ditu erizain bakoitzeko" saltzailearen fikzio izaten jarraitzen du betiko.

## Matematika

```
Gauzapen-tasa = gauzatutako onurak / aurreikusitako onurak   (onura bakoitzeko, aldi bakoitzeko)

Kalkulagarri egiten duten mekanikak:
  oinarria go-live-a BAINO LEHEN jasota (bestela delta neurtezina da)
  onura bakoitza: jabea, metrika, datu-iturria, neurketa-egutegia
  aurreikuspena baloratzean baikortasun-alborapenerako doituta (Green Book-en agindua)
  onurak cash / ez-cash / kualitatibo gisa sailkatuta eta bereizita jarraituta
  (ikus cash-releasing-vs-non-cash-releasing.md)
```

## Adibide landua

E-rostering negozio-kasu batek urtean agindu zuen: £450k agentzia-gastuaren murrizketa (cash), 8.000 ataleko-arduradun ordu (ahalmena), betetze-tasa hobetzearen betetzea (kualitatiboa). Go-live-aren ondoko hamabi hilabetera:

```
Onura             Aurreikuspena  Gauzatua   Tasa   Ebidentzia
Agentzia-gastua   £450,000       £287,000   %64    liburua vs oinarri-urtea
Arduradun-orduak  8,000          5,100      %64    denbora-mugimendu laginketa
Betetze-betekizuna +10pp         +12pp      %120   rostering sistemaren datuak

Berrikuspenaren ondorengo ekintzak (BRMren helburua):
agentzia-hutsunea inoiz barneratu ez ziren bi ataleri egotzi → barneratu;
aurreikuspen-ereduaren %30eko baikortasun-errorea erregistratu → hurrengo kasuari aplikatu.
```

%64ko gauzapena ez da porrota — *ezagutza* da. Neurtu gabeko kasuek %100 aldarrikatzen dute betiko.

## Software ingeniaritzarekin lotura

Ingeniaritza-erakundeek plataforma-inbertsioak onura-aurreikuspenetan oinarrituta onartzen dituzte eta ia inoiz ez dituzte auditatzen — BRMk konpontzen duen patologia bera. Eramate arina: atalase bat gainditzen duen proposamen orok onura-jabeak, oinarri-metrikak eta T+6 hilabeteko berrikuspen-data izendatzen ditu; gauzapen-tasek erakundeak talde horren (edo saltzailearen) hurrengo aurreikuspena zenbat deskontatzen duen elikatzen dute. Hau da AA tresnen eszeptizismoaren erantzuna ere: [GenAI pilotuen ~%95ek P&L itzulkin neurgarririk ez zuela dioen MITen aurkikuntza](../aaren-inbertsioaren-itzulkina/) onuren gauzapenaren emaitza da — itzuli *zuten* pilotuek jarraigarriak eta jabedunak ziren onura-lerroak zituzten. Aurreikusi → neurtu → birkalibratu [EVPIrekin](../informazio-perfektuaren-balio-esperoa/) prezioztatutako pilotuen begizta bera da, zorro-eskalan exekutatuta.

## Tranpak

- **Go-live-aren aurreko oinarririk ez** — omisio hilgarria eta konponezina.
- **Onuren umezurtztasuna**: jabe izendaturik ez badago, inork ez ditu datuak biltzen eta berrikuspen guztiek "orokorrean bidean" diote.
- **Programen arteko onura bikoiztuak** askatutako ahalmen bera aldarrikatzen dutenak — mantendu onura-erregistro bat zorro osoan.
- **Gauzapen-antzerkia**: irabazi kualitatibo errazak neurtzea diru-lerroak isilean aztertu gabe uzten diren bitartean.

## Iturriak

- HM Treasury, Green Book and Five Case Model guidance. <https://www.gov.uk/government/collections/the-green-book-and-accompanying-guidance-and-documents>
- Global Digital Exemplar programme evaluation (NHS digital benefits lessons). <https://pmc.ncbi.nlm.nih.gov/articles/PMC8685936/>
