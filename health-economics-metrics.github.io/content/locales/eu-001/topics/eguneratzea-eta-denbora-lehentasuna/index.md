# Eguneratzea eta denbora-lehentasuna (Discounting and Time Preference)

Eguneratzeak etorkizuneko kostuak eta onurak egungo balio bihurtzen ditu, gaurko onura bat bost urte barruko onura bera baino gehiago balio duelako.

## Zergatik axola duen

Osasun-ekonomiako ebaluazio orok eta sektore publikoko negozio-kasu serio orok urte anitzeko fluxuak eguneratzen ditu. Erresuma Batuko HM Treasury-ren Green Book-ek urteko %3,5eko gizarte-denbora-lehentasun tasa agintzen du; NICEren erreferentzia-kasuak kostuak eta osasun-efektuak biak %3,5ean eguneratzen ditu urtean (%1,5eko erreferentzia-ez-kasuko tasarekin 30+ urteko onurak dituzten sendatze-hurbileko terapietarako). Zure software-negozio-kasuak "£5 milioiko aurrezkiak 10 urtean" aldarrikatzen badu, finantza-berrikusle batek berehala eguneratutako zifra eskatuko du.

## Matematika

Etorkizuneko zenbateko baten egungo balioa:

```
PV = FV / (1 + r)^t

PV = egungo balioa
FV = t urteko etorkizuneko balioa
r  = eguneratze-tasa (NICE/Green Book: 0.035)
t  = gaurtik urteak
```

n urtetan urteko onura konstante B baterako (anualitatea):

```
PV = B × [1 − (1 + r)^(−n)] / r
```

## Adibide landua

Zure softwareak NHS trust bati £100,000 aurrezten dizkio urtean 5 urtez, go-live-aren ondoko urtetik hasita.

Eguneratu gabeko guztizkoa: £500,000.

%3,5ean eguneratuta:

```
1. urtea: 100,000 / 1.035^1 = £96,618
2. urtea: 100,000 / 1.035^2 = £93,351
3. urtea: 100,000 / 1.035^3 = £90,194
4. urtea: 100,000 / 1.035^4 = £87,144
5. urtea: 100,000 / 1.035^5 = £84,197

PV guztira ≈ £451,505
```

Titular zintzoa £451,000 ingurukoa da, batuketa inozoa baino %10 gutxiago. Orain demagun entrega urte batez atzeratzen dela: termino guztiak urte bat geroagora mugitzen dira, eta PV £436,000 ingurura jaisten da — [atzerapenaren kostuaren](../atzerapenaren-kostua/) eguneratze-ikuspegia.

## Software ingeniaritzarekin lotura

- **Zor teknikoaren amortizazioak eta plataforma-migrazioek** urte batzuk haratago onura-fluxuak agintzen dituzte; eguneratu itzazu hiruhileko honetan itzultzen den lanarekin alderatu aurretik.
- **Aurrean kostuak, atzean onurak** migrazio baten forma estandarra da. Eguneratzeak forma hori zigortzen du, zuzen: ahalmena orain konprometitzearen denbora-balio arrisku-gabea prezioztatzen du, geroago balioa lortzeko.
- **"5. urteko aurrezkien" aldarrikapenek** bi aldiz eszeptizismoa merezi dute — bai asko eguneratuak bai oso ziurgabeak ([sentsibilitate-analisia](../sentikortasun-analisia/) ikus).

## Tranpak

- **Kostuak eguneratzea baina onurak ez** (edo alderantziz) — erreferentzia-kasuak biak eguneratzen ditu, tasa berean.
- **Tasa komertziala (%8–12) sektore publikoko kasuan erabiltzea**, edo %3,5 kapital-arriskuko batean. Egokitu tasa erabaki-hartzaileari.
- **Eguneratzea eta inflazioa nahastea.** Eguneratzea balio *errealei* (inflazioz doituei) aplikatzen zaie; ez egin biak inplizituki.

## Iturriak

- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- HM Treasury Green Book, discounting supplementary guidance. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-discounting>
