# Kostu marjinala vs batez bestekoa (Marginal vs Average Cost)

Batez besteko kostua kostu osoa ekoitzitako unitateekin zatituta da. Kostu marjinala *unitate gehigarri* bat ekoizteko kostua da. Erabakiak kostu marjinalean hartu behar dira — baina argitaratutako unitate-kostuak ia beti batez bestekoak dira.

## Zergatik axola duen

Osasun digitaleko negozio-kasuetako akatsik ohikoena aurreztutako baliabide bat bere **batez besteko** kostuan balioestea da, benetako aurrezkia kostu **marjinala** denean. Ospitaleko ohe-egun batek batez besteko (guztiz xurgatutako) kostua £400+ du, baina ohe-egun bat askatzeak ez ditu £400 aurrezten — eraikinak, berokuntzak eta langile-kostu gehienak jarraitzen dute. Benetan askatutako dirua £50–£150 izan daiteke, nahikoa ohe askatu ez badira ataria ixteko.

## Matematika

```
Batez besteko kostua: AC = TC / Q
Kostu marjinala:      MC = dTC/dQ   (unitate bat gehiago/gutxiago egiteko kostua)

TC = kostu osoa, Q = kantitatea
```

Kostu finkoek MC < AC egiten dute ahalmen-murrizketetan, eta MC zerorantz hurbil daiteke ahalmen soberakina dagoenean. Aurrezki-aldarrikapenek hau erabili behar dute:

```
Benetako aurrezkia = ΔQ × MC          (aldaketa txikiak)
Benetako aurrezkia = TCren urrats-aldaketa (ahalmen-atalase bat gainditzen duten aldaketa handiak, adib. ataria ixtea)
```

## Adibide landua

Zure softwareak batez besteko egonaldiaren iraupena murrizten du, trust batean urtean 1.000 ohe-egun askatuz.

- **Aldarrikapen inozoa**: 1,000 × £400 batez besteko kostua = **£400,000 aurreztuta**. Okerra.
- **Aldarrikapen marjinala**: ohe-egun bakoitzeko kostu aldakorra (janaria, garbitegia, kontsumigarriak, erizaintzaren zati malgu bat) ≈ £120. Aurrezkia = 1,000 × £120 = **£120,000**, *gehi* askatutako ahalmenaren balioa oheak aukerako itxaroten dauden pazienteekin berriz betetzen badira (jardueran oinarritutako ordainketapeko sarrerak, edo itxaron-zerrendaren murrizketa).
- **Urrats-aldaketaren aldarrikapena**: trustak urtean 7.300 ohe-egun askatzen baditu (20 oheko ataria) benetan ataria itxi dezake: langileak + funtzionamendua ≈ £1.5 milioi/urte dirutan. Orain batez besteko kostuaren matematika egiatik hurbilago dago.

Esku-hartze bera, hiru zenbaki defendagarri, aldaketak ahalmen-urrats bat gainditzen duen ala ez.

## Software ingeniaritzarekin lotura

Hodei-ekonomia kostu marjinalaren lurralde berezkoa da:

- Erreserbatutako ahalmenean CI exekuzio bat gehiagoren kostu marjinala ≈ £0 da, exekuzio bakoitzeko batez besteko kostua (plataformaren gastu osoa ÷ exekuzioak) libera batzuk izan daitezkeen bitartean. Batez besteko kostua kobratzen duten chargeback sistemek taldeak marjinan doakoa den ahalmen partekatua gutxiegi erabiltzera bultzatzen dituzte.
- Alderantziz, "konputazioaren %30 aurreztu dugu" dirua askatzen du instantziak benetan amaitzen direnean edo erreserbak murrizten direnean bakarrik — ohe-egunen tranparen software-bertsioa. Ikus [diru-sarrera sortzen duten aurrezkiak vs sortzen ez dituztenak](../diru-sarrera-sortzen-duten-aurrezkiak-vs-sortzen-ez-dituztenak/).

## Tranpak

- **Ahalmena batez besteko kostuan balioestea** eta dirutzat aurkeztea (klasikoa).
- **Kostu marjinala konstantea dela suposatzea.** Ahalmen-mugetan urratsez aldatzen da (ataleko itxierak, lizentzia-mailak, instantzia-erreserben konpromisoak).
- **Kostu marjinala hedapen-erabakietarako eta batez bestekoa murrizketarako erabiltzea** kasu berean — aukeratu benetako erabakiaren arabera.

## Iturriak

- York Health Economics Consortium glossary: marginal cost. <https://yhec.co.uk/glossary/marginal-cost/>
- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
