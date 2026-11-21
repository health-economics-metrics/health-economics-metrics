# Profesionalen denbora (Practitioner Time)

Profesionalen denbora osasun-sistema gehienetako baliabide urriena da. Mediku bati egunean minutu batzuk aurrezteak duen balioa neurtzeak soldata-matematika sinpletik **aukera-kostura eta sistemaren kapazitatera** pasatzea eskatzen du: osasun-zerbitzu nazional baten barruan, profesional baten denbora operatiboki botila-lepo zurruna da, ez malgutzen den kostu-lerroa.

## Zergatik axola duen

Ezin dira azkar mediku orokor, aholkulari edo erizain espezialista gehiago sortu: prestakuntza-kanalek 5–15 urte irauten dute eta bakanteak kronikoak dira. Beraz, aurreztutako profesionalen ordu bat ez da "saihestutako soldata" (profesionalak ordaintzen jarraitzen da); *botila-lepoaren kapazitate askatua* da, eta botila-lepoaren kapazitateak botila-lepoak sortzen duena balio du. Horregatik dira "kontsulta bakoitzeko 10 minutu aurrezten ditu" aldarrikapenak osasun digitalean aldi berean ohikoenak eta gaizki prezioztatuenak.

## Matematika

Hiru balorazio-maila, zintzotasun gero eta handiagoarekin:

```
1. Wage basis:        hours × loaded salary rate (PSSRU unit costs)
                      — what the time costs, not what it produces
2. Output basis:      hours → appointments/procedures enabled × scheme value
                      (see national-tariff-and-unit-costs.md)
3. Bottleneck basis:  if this role gates a whole pathway, hours × value of
                      pathway throughput released (theory of constraints)
```

Zatiketa-deskontua: erabilgarria den kuantu baten azpiko apurretan aurreztutako denbora (adibidez, 3 minutu kontsulta osoan sakabanatuta) gaizki birbideratzen da; aplikatu adierazitako erabilera-faktore bat.

## Adibide landua

Idazkaritza anbientalak mediku orokor bati kontsulta bakoitzeko 2 minutu aurrezten dizkio, egunean 30 kontsultarekin: 60 minutu/egun, edo **220 ordu/urte mediku bakoitzeko** 220 lan-egunetan.

```
Wage basis:   220 × £80 (loaded GP hour, PSSRU-region) ≈ £17,600/GP/year
Output basis: 60 min/day = 5 extra 12-min consultations/day
              = 1,100 extra appointments/GP/year × £42 ≈ £46,200/GP/year
              — or the same appointments absorbed as reduced overtime and
              safer, unhurried consultations (qualitative line)
```

50 medikuko federazio batean, irteeran oinarritutako kapazitateak ~£2,3M/urte balio du, baldin eta minutuak errealak badira (neurtuak, ez saltzailearen aldarrikatuak), bateratuak (kontsulta osoak, ez zatiak) eta birbideratuak (ikus [diru-sarrera sortzen duten aurrezkiak vs sortzen ez dituztenak](../diru-sarrera-sortzen-duten-aurrezkiak-vs-sortzen-ez-dituztenak/)).

## Software ingeniaritzarekin lotura

Ingeniari seniorraren denborak berdin jokatzen du: diseinuak, berrikuspenak eta intzidentziak igarotzen diren botila-lepoa da, beraz baloratu ezazu botila-lepoak zer blokeatzen duenaren arabera, ez soldataren arabera. Hiru mailako balorazio bera aplikatzen zaio "AAk garatzaile bakoitzari X minutu aurrezten dizkio" aldarrikapen orori: soldata-matematikak zenbaki txikiak lausengatzen ditu; galdera zintzoak dira minutuak bloke erabilgarri bihurtzen diren eta askatutako kapazitateak benetan zer sortzen duen. Ikus [beheranzko baliabideen optimizazioa](../beheranzko-baliabideen-optimizazioa/) aurreztutako ordua gainerako guztiek itxaroten duten pertsonarena denean dagoen biderkatzailerako.

## Tranpak

- **Minutuak × soldata = aurrezkiak** — puzte kanonikoa; kapazitatea da, eta adierazitako erabileran soilik.
- **Kuantuaren arazoa alde batera uztea**: 12 × 5 minutuko aurrezkiak ≠ ordu libre bat.
- **Rol guztiak berdin baloratzea**: bide-botila-lepoko ordu batek balio du botila-lepoa ez den rol baten ordu bat baino askoz gehiago.

## Iturriak

- PSSRU, Unit Costs of Health and Social Care. <https://www.pssru.ac.uk/unitcostsreport/>
- NHS England, NHS productivity. <https://www.england.nhs.uk/long-read/nhs-productivity/>
