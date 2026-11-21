# Kulude täpne sendipõhine jaotamine

Kogusumma — ühise toetuse, infrastruktuuriarve, eelarvemõju arvu — jagamine mitme saaja vahel naiivse protsentarvutusega annab tavaliselt osad, mis ei liitu tagasi algse kogusummani. Täpne sendipõhine jaotamine on lahendus: täisarvuline/kümnendmeetod, mis töötab väikseimates valuutaühikutes (sentides) ja garanteerib, et osad liituvad *täpselt* tervikuks, olenemata sellest, kui ebaühtlaselt see jagub. Iga tarkvarainsener, kes peab jagatud summa sendi täpsusega klappima — palgaarvestus, toetuste väljamaksmine, ühisteenuste edasiarveldamine —, vajab seda mustrit, mitte ujukomaprotsente.

## Miks see on oluline

See on nimeline, fundamentaalne muster ettevõttetarkvara inseneerias: Martin Fowleri *Patterns of Enterprise Application Architecture* (2002) dokumenteerib `Money` ja `Allocate` just seetõttu, et „jaga 100 $ kolmeks“ on probleem, mida naiivne kood lahendab pidevalt valesti ja vaikselt valesti — viga ilmneb alles siis, kui keegi viib raamatud kokku ja leiab osad kogusummast sendi võrra väiksemad (või suuremad). Tervishoiumajanduses ja NHS-i rahandustöös pole see akadeemiline: eelarvemõju kogusummasid jagatakse asukohtade, aastate või direktoraatide vahel; ühise infrastruktuuri ja litsentside kulusid jaotatakse osakondadele töötajate arvu või tegevuse osakaalu järgi. Iga selline jaotus peab täpselt klappima, sest rahandusdirektor, kellele antakse osad, mis ei liitu kogusummaks, lakkab usaldamast kogu mudelit.

## Matemaatika

```
Naiivne (vigane) meetod:
  osa_i = ümarda(summa × osakaal_i / Σ osakaalud)     — ümardab iga osa eraldi

Täpne meetod (suurima jäägi / „largest remainder allocation“):
  1. baas_i = põrand(summa_väikseimad_ühikud × osakaal_i / Σ osakaalud)   — ainult täisühikud (sendid)
  2. jääk = summa_väikseimad_ühikud − Σ baas_i                             — üle jäänud sendid, alati < saajate arv
  3. jaga 1 lisaühik igale `jääk` saajale, kellel on suurim murdjääk sammust 1,
     kuni jääk on otsas

Tulemus: Σ osa_i == summa, alati, konstruktsiooni järgi.
```

Täpne meetod ei ümarda kunagi osa eraldi — see ümardab *kogu jaotuse* ühe tehtena, ja see hoiab summainvariandi paigas.

## Lahendatud näide

Jaga 100,00 $ kolmeks võrdseks osaks (`osakaalud = [1, 1, 1]`).

Naiivne meetod: 100,00 $ ÷ 3 = 33,333… $, eraldi lähima sendini ümardatuna annab 33,33 $ igale saajale. Liidetuna: 33,33 $ × 3 = 99,99 $ — üks sent on kadunud ja ükski üksik kirje pole nii „vale“, et seda pealt vaadates märgata.

Täpne meetod: `baas` = 33,33 $ kõigile kolmele (kokku 9 999 väikseimat ühikut `põrand(10 000 / 3) = 3 333` senti igaühele), jättes jäägiks 1 sendi (10 000 − 9 999). See üks üle jäänud sent läheb saajale, kellel on jagamisel suurim murdjääk — milline saaja täpselt, on viigi lahendamise sisemine detail, millele kutsuja ei tohiks toetuda. Kaks saajat saavad 33,33 $ ja üks 33,34 $ ning kolm osa liituvad täpselt 100,00 $-ks.

See on just see aritmeetika, mida [eelarvemõju analüüs](../eelarvemõju-analüüs/) vajab alati, kui eelarvemõju kogusumma tuleb jagada asukohtade, kohortide või majandusaastate vahel ja viia kokku avaldatud summaga — vaata [valuutaturvalist kulude koondamist](../valuutaturvaline-kulude-koondamine/) kaasneva probleemi kohta, kuidas liita paljusid selliseid kirjeid ilma triivita.

## Seos tarkvaraarendusega

See on sõna-sõnalt „Money muster“ ettevõttetarkvara arhitektuurist — fundamentaalne, nimeline muster just selle veaklassi jaoks, mitte ühekordne trikk. Päris finantsi kokkuviimise tõrkeid on toodangusse jõudnud just sellest veaklassist: `f64`-s arvutatud protsentjaotused, saaja kaupa ümardatud ja kunagi algse summa vastu kontrollimata. See seostub otse selle hoidla mooduliga [omamise koguhind](../omamise-koguhind/), mis praegu liidab harilikke ujukomakulusid aastate ja variantide lõikes — sama täpsusdistsipliin kehtib, kui TCO või eelarvemõju kogusumma tuleb jaotada, mitte lihtsalt liita.

## Lõksud

- **Protsent-siis-ümarda suurima jäägi asemel**: jaotamine ujukomaprotsentidega ja iga saaja eraldi ümardamine, mis võimendab ümardusviga ega liitu harva tagasi kogusummani, eriti paljude saajate korral.
- **Valuutade väikseima ühiku astendajate eiramine**: eeldus, et igal valuutal on 2 kümnendkohta — Jaapani jeenil on 0, mõnel valuutal 3 —, käsitsi tehtud protsentjaotus kodeerib tavaliselt 2 kõvasti sisse ja läheb teiste valuutade puhul vaikselt katki; täpne jaotusprotseduur loeb astendaja valuutalt endalt (ISO 4217).
- **Juba jaotatud jäägi uuesti jaotamine**: jaotusprotseduuri uuesti käivitamine sellel, mis eelmisest jaotusest üle jäi, ilma idempotentsuskontrollideta, mis võib kanda sama sendi kaks korda samale saajale.

## Allikad

- Fowler M. „Patterns of Enterprise Application Architecture.“ Addison-Wesley, 2002 — mustrid `Money` ja `Allocate`.
- ISO 4217 — valuuta- ja fondikoodide standard, mis määratleb iga valuuta väikseima ühiku astendaja.
