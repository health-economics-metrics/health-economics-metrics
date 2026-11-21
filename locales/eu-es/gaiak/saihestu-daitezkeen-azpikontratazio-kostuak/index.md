# Saihestu daitezkeen azpikontratazio-kostuak (Avoidable Outsourcing Costs)

Trust batek barne-ahalmenarekin helburuak bete ezin dituenean, ahalmena prezio gorenean erosten du: bere langileen asteburuko ordu estrak edo prozedurak hornitzaile pribatuei azpikontratatzea. Ahalmena askatzen duen softwarearen balio ekonomikoak **prezio handiko lan horren saihestu daitekeen kostua** barne hartzen du.

## Zergatik axola duen

Aukerako jarduera berreskuratzeko presioan, trustek sarri sektore pribatuaren berehalako prezioak (askotan NHSren eskema-prezioaren 1,2–1,5 aldiz) edo itxaron-zerrenda ekimenen tasa handiak ordaintzen dizkiete beren aholkulariei asteburuko zerrendengatik. Ahalmen-aldarrikapen arruntek ez bezala, azpikontratazio saihestua **diru-sarrera sortzen duena** da: hornitzaile pribatuari fakturarik ez zaio sortzen. Horrek barne-emaritza handitzen duen softwarearentzako onura-lerro sendoenetakoa eta frogatzeko errazenetakoa bihurtzen du, azpikontratazio-gastua dagoeneko aurrekontu-lerro ikusgaia baita.

## Matematika

```
Saihestu daitekeen azpikontratazio-kostua = barrura ekarritako jarduera × (azpikontratatutako
                                           unitate-prezioa − barne-kostu marjinala kasuko)

Barne-kostu marjinala: kontsumigarriak + jarduera gehigarriaren langile aldakorrak
— instalazio finkoa ordainduta dago jada (ikus marginal-vs-average-cost.md).
```

Aldarrikapenak eskatzen du askatutako barne-ahalmenak benetan jarduera xurgatzea: kirofanoak, ohe eta langileak eskuragarri egon behar dute (murrizketa lotesleak agintzen du — berriro murrizketen teoria).

## Adibide landua

Trust batek urtean 800 kataratako prozedura azpikontratatzen ditu £900ean: £720,000/urte kanpo-gastua, eskema-prezioa ~£750 izanik.

Kirofano-programazioko softwareak (zerrenda-optimizazioa, bertan behera utzitakoekin hutsuneak betetzea, txandaketa-denboraren jarraipena) barne-kirofanoen erabilera handitzen du 500 prozedura berrekartzeko adina:

```
Kasuko barne-kostu marjinala ≈ £350 (kontsumigarriak + saioko langileak)
Aurrezkia = 500 × (900 − 350) = £275,000/urte — diru-sarrera sortzen duena
Gelditzen den azpikontratazioa: 300 × £900 = £270,000 (lehen £720,000)
```

Softwarearen kostua £90,000/urte → garbia ≈ **+£185,000/urte kutxan sartzeko dirutan**, gehi lana barnean mantentzearen kalitate- eta prestakuntza-onurak.

## Software ingeniaritzarekin lotura

Analogo zuzena **kontratisten eta aholkularitzen prima** da: barne-ingeniaritza ahalmenak konpromisoak bete ezin dituenean, erakundeek kanpo-ahalmena erosten dute barne-tasa osoaren 1,5–3 aldiz. Barne-emaritza handitzen duten plataforma- eta produktibitate-inbertsioek saihestutako kontratista-gastua aldarrikatu behar dute goian bezala — kanpo-eguneko tasa ken barne-kostu marjinala, bider berrekarritako lana — garatzaile-produktibitateko negozio-kasu batean benetan diru-sarrera sortzen duten lerro gutxietako bat delako. Ohar bera aplikatzen da: barne-ahalmenak benetan existitu behar du eta berrekarritako lanera programatua egon, bestela aldarrikapena fikzioa da.

## Tranpak

- **Berrekartzea aldarrikatzea ahalmen-kate osorik gabe** — kirurgilariak aske baina kirofano-txandarik ez (edo ingeniariak aske baina produktu-kudeaketako bandwidth-ik ez) ez da ezer berrekartzea.
- **Azpikontratatutako prezioa barne-batez besteko kostuarekin alderatzea** kostu marjinalaren ordez — aurrezkia gutxiesten du, bitxia bada ere; kostu finkoak biak batean egiten dira.
- **Kalitate/konplexutasun asimetria**: azpikontratatutako kasuak sinpleenak izan ohi dira; berrekartzeak barne kasu-nahasketa eta unitate-kostuak aldatzen ditu.

## Iturriak

- NHS England, elective care recovery plan. <https://www.england.nhs.uk/coronavirus/publication/delivery-plan-for-tackling-the-covid-19-backlog-of-elective-care/>
- NHS England, NHS Payment Scheme. <https://www.england.nhs.uk/pay-syst/national-tariff/national-tariff-payment-system/>
