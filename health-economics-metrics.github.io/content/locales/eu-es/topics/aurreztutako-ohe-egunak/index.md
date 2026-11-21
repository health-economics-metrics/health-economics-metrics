# Aurreztutako ohe-egunak (Bed Days Saved)

Ohe-egun bat paziente batek ospitaleko ohe bat egun batez okupatzea da. "Aurreztutako ohe-egunak" — lehenago altarekin, ospitalizazioak saihestuz edo ospitale birtualekin — NHSren negozio-kasu digitaletako onura nagusia da, eta gehien gainbaloratzen dena.

## Zergatik axola duen

Ohea arreta akutuaren murrizketa lotesle da: oheak betetzen direnean, aukerako kirurgia bertan behera uzten da, anbulantziak ilaran gelditzen dira eta larrialdi-zerbitzua pilatzen da. Beraz, ohe-egunak askatzen dituzten esku-hartzeek benetako balioa dute, baina balio horren *mota* erabat askatutako oheari gertatzen zaionaren araberakoa da. Finantza-zuzendariek ikasi dute ohe-egunen aldarrikapen inozoak asko deskontatzen; aritmetika hau ondo egitea sinesgarritasun-proba bat da.

## Matematika

```
Aurreztutako ohe-egunak = eragindako pazienteak × Δ egonaldiaren iraupena (edo saihestutako ospitalizazioak × batez besteko LOS)

Balioa askatutako ahalmenaren erabileraren araberakoa da:
  aukerako jarduerarekin berriz beteta → balioa = jarduera-sarrera edo itxaron-zerrendaren onura
  ataria itxita / jaitsita              → balioa = askatutako langile + funtzionamendu-kostua (dirua)
  tarte gisa xurgatuta                  → balioa ≈ kostu marjinala (hotel) bakarrik, £50–£150/egun
```

Ohe-egun akutu baten batez besteko kostu osoa £400+ gisa aipatzen da maiz (National Cost Collection historikoki ~£350 ohe-egun gehigarrietarako) — baina ikus [kostu marjinala vs batez bestekoa](../kostu-marjinala-vs-batez-bestekoa/): batez bestekoa ia inoiz ez da aurrezkia.

## Adibide landua

Urruneko monitorizazioko "ospitale birtual" batek urtean 600 pazienteri 2 egun lehenago etxera joaten uzten die: 1.200 ohe-egun aurreztuta.

- **Aldarrikapen inozoa**: 1,200 × £400 = £480,000. Okerra, ataria ixten ez bada.
- **Aldarrikapen zintzoa**: trustak oheak aukerako ortopedia-pazienteekin berriz betetzen ditu. 1.200 ohe-egun ÷ 3 eguneko batez besteko egonaldia = 400 aukerako epealdi gehigarri, jardueran oinarritutako ordainketapean ~£6,000 sarrera bakoitza = **£2.4M finantzatutako jarduera gehigarri** (pazienteak tratatzearen kostu marjinala kenduta), *eta* 400 paziente itxaron-zerrendatik kanpo. Ospitale birtualaren funtzionamendu-kostua (£350,000) honi kentzen zaio.

*Berrerabilitako* ahalmen askatuak maiz diru-aldarrikapen inozoak baino balio handiagoa du — baina balio mota desberdina da eta hala etiketatu behar da ([diru-sarrera sortzen duten aurrezkiak vs sortzen ez dituztenak](../diru-sarrera-sortzen-duten-aurrezkiak-vs-sortzen-ez-dituztenak/)).

## Software ingeniaritzarekin lotura

"Aurreztutako zerbitzari-egunek" berdin jokatzen dute. Beti piztuta dauden inguruneak desegiteak dirua askatzen du instantziak amaitzen direnean edo erreserbak iraungitzen direnean bakarrik; multzora itzultzen den ahalmenak bere kostu marjinala balio du (~0 konprometitutako gastuan). Diziplina paraleloa: aldarrikatutako aurrezki guztiarentzat, izendatu *mekanismoa* — amaitua, lan baliotsuarekin berriz beteta, edo lurrundua. Ospitaleko egonaldia murrizten duen softwareak (altaren koordinazioa, urruneko monitorizazioa, diagnostikoen erantzun-denbora) hiru agertokiak modelatu behar ditu eta trustak ataleko aukeratzen utzi.

## Tranpak

- Ahalmen marjinalaren **batez besteko kostuko balioztapena** — akats kanonikoa.
- **Zenbaketa bikoitza**: ohe bera askatzeagatik aurreztutako ohe-egunak *eta* saihestutako ospitalizazioak *eta* itxaron-zerrendaren murrizketa.
- **Aurreztutako egunak garestiak direla suposatzea**: egonaldiaren amaieran aurreztutako egunak merkeenak dira (akutasun baxuko egunak).

## Iturriak

- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
- Economics by Design, NHS cost calculator. <https://economicsbydesign.com/tools/nhs-cost-calculator/>
