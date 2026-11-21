# Valuutaturvaline kulude koondamine

Paljude rahasummade — kuuarvete, kulude asukoha kaupa, mitmeaastaste eelarvemõju arvude — liitmine harilike kahendkujuga ujukomaarvudega (`f64`) kogub väikeseid esitusvigu, kuna enamikku kümnendmurde (näiteks 1 234,56 $) ei saa kahendujukomas täpselt esitada. Iga üksikvea on pisike, kuid suur mudel, mis liidab sadu või tuhandeid kirjeid mitme aasta jooksul, võib triivida sendimurdude võrra — ja triiv sõltub liitmiste *järjekorrast*, mis teeb selle mittetaastoodetavaks. Täpses kümnendaritmeetikas (või täisarvulises väikseimas ühikus) tehtud valuutakoondamine liidab täpselt, vastavalt sellele, kuidas raamatupidamissüsteemid ja topeltkirjendamine peavad sendi täpsusega klappima.

## Miks see on oluline

See on hästi dokumenteeritud, fundamentaalne tarkvaravigade klass: Goldbergi 1991. aasta artikkel ACM Computing Surveys'is, „What Every Computer Scientist Should Know About Floating-Point Arithmetic“, on standardallikas selle kohta, miks kahendujukoma ei suuda enamikku kümnendrahalisi väärtusi täpselt esitada ja miks paljude liitmine viga võimendab. Tervishoiumajanduse ja NHS-i rahandusmudelid liidavad rutiinselt palju aastaid ja palju kulukategooriaid — [omamise koguhind](../omamise-koguhind/) ja [eelarvemõju analüüs](../eelarvemõju-analüüs/) koondavad mõlemad suure hulga `f64`-kulukirjeid mitmeaastastel horisontidel. Kui mudel peab klappima sendi täpsusega — auditeerimine, mis arvutab summa käsitsi uuesti, peab saama *identse* arvu —, peab aritmeetika ise olema täpne kümnend-, mitte ujukomaaritmeetika.

## Matemaatika

```
Naiivne koondamine:           summa = Σ f64(kanne_i)         — järjekorrast sõltuv triiv
Valuutaturvaline koondamine:  summa = Σ Decimal(kanne_i)      — täpne, taastoodetav

Protsendikorrektsiooni rakendamine (nt reservipuhver):
  korrigeeritud = summa × kordaja          — täpne Decimal-tulemus, võib sisaldada
                                              rohkem kümnendkohti kui valuuta
                                              väikseima ühiku astendaja
  ümardatud = ümarda(korrigeeritud, valuuta_astendaja, ümardusreegel)  — ümardusreegel
                                              (half-up vs half-even/pangaümardus)
                                              tuleb selgelt ära märkida
```

Pane tähele kaheastmelist distsipliini: täpse `Decimal`-summa korrutamine kordajaga võib anda rohkem kümnendkohti, kui valuuta tegelikult kasutab (näiteks kolm kümnendkohta kahe kohaga summast korrutatud kahe kohaga kordajaga) — seda vaheprotsessi täpsust *ei* ümardata automaatselt ära; ainult selge ümardusetapp märgitud ümardusreegliga toob selle valuuta tegeliku väikseima ühiku astendajani.

## Lahendatud näide

Kaksteist identset kuuarvet, igaüks 1 234,56 $, liidetud täpses kümnendaritmeetikas: 1 234,56 $ × 12 = **14 814,72 $**, täpselt. Vastandage see `f64`-literaali `1234.56` kaheteistkordse liitmisega IEEE-754 kahekordse täpsusega, mis võib liitmisjärjekorrast sõltuvalt triivida sendimurdude võrra — päris, dokumenteeritud veaklass, mitte probleem täpsele kümnendkujulisele `Money`-aritmeetikale ehitatud mudelile.

Rakenda nüüd tavapärast eelarvemõju reservipuhvrit 5% (kordaja 1,05) sellele summale 14 814,72 $: 14 814,72 $ × 1,05 = 15 555,456 $ — kolm kümnendkohta, sest korrutamine on täpne ja seda ei ümardata automaatselt valuuta kahe kümnendkohani. Selgelt kahe kümnendkohani ümardatuna pangaümardusega (half-even) saame täpselt **15 555,46 $**.

## Seos tarkvaraarendusega

See on otsene, fundamentaalne õppetund mõtte „finantstarkvara kasutab `Decimal`-i, mitte `float`-i“ taga — see seostub selgelt selle hoidla moodulitega [omamise koguhind](../omamise-koguhind/) ja [eelarvemõju analüüs](../eelarvemõju-analüüs/), mis mõlemad liidavad praegu harilikke ujukomakulusid; korrektsusargument ei nõua nende mudelite kohest migreerimist, kuid see sedastab täpselt, *millal* süsteem peab sendi täpsusega klappima ega tohi seetõttu oma rahaaritmeetikas kasutada kahendujukomat. Vaata ka [kulude täpne sendipõhine jaotamine](../kulude-täpne-sendipõhine-jaotamine/) kaasneva probleemi kohta, kuidas summasid jagada (mitte liita) sente kaotamata.

## Lõksud

- **Ahela keskel `float`-iks teisendamine**: rahaväärtuse väljavõtmine ujukomaarvuks arvutuse keskel (mõned `Money`-teegid nimetavad seda teisendusmeetodit isegi midagi „lossy“-taolist selge hoiatusena) loobub vaikselt täpsusegarantiist iga sellele punktile järgneva arvutuse jaoks.
- **„Decimal on liiga aeglane, et vaevuda“**: täpse kümnendaritmeetika kõrvale heitmine tarbetu lisakuluna, kui finantsaruandluses loevad korrektsus ja auditeeritavus, mitte toores läbilaskevõime.
- **Reserviprotsendi rakendamine ümardusreeglit märkimata**: half-up vs half-even (pangaümardus) võib viimast senti muuta; ümardamiskokkulepe ise peab olema märgitud, auditeeritav valik — vaata [kulu-tulu analüüsi](../kulu-tulu-analüüs/) HM Treasury Green Booki juhendi kohta reservide ja optimism bias'e korrektsioonide kohta, just selliste arvude kohta, millele see ümardusetapp rakendub.

## Allikad

- Fowler M. „Patterns of Enterprise Application Architecture.“ Addison-Wesley, 2002 — `Money` muster.
- Goldberg D. „What Every Computer Scientist Should Know About Floating-Point Arithmetic.“ ACM Computing Surveys, 1991.
- HM Treasury, The Green Book — optimism bias'e ja reservide juhend eelarvemõju modelleerimiseks. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
