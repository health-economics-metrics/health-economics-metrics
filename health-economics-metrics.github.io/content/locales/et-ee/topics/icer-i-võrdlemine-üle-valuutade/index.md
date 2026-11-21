# ICER-i võrdlemine üle valuutade

Ühe riigi valuutas arvutatud [ICER-i](../juurdekasvav-kulutõhususe-suhe/) võrdlemine teise riigi [maksevalmiduse lävendiga](../maksevalmiduse-lävendid/) — või mitmeriikliku uuringu kulude andmete koondamine — nõuab selget, auditeeritavat valuutaümberarvestuse sammu. Kui ümberarvestusmeetod valitakse valesti, võib sama alusmaterjal pöörata kasutuselevõtuotsuse, kuigi kliinilistes ega kuluandmetes pole midagi muutunud.

## Miks see on oluline

ISPORi metoodikajuhend mitmeriiklike kliiniliste uuringute jaoks (Willke jt, *Health Economics*, 1998) soovitab arvestada ressursikulud ümber **ostujõupariteedi (PPP)** järgi, mitte turuvahetuskursside järgi, kui võrreldakse ressursside reaalset majanduslikku väärtust riikide vahel, ja jätta turu valuutakursid sellele, milleks need tegelikult mõeldud on: tegelike piiriüleste sularahamaksete voogude modelleerimiseks. Nende kahe segamini ajamine on üks levinumaid metoodilisi vigu mitmeriiklikus HTA-s, just seetõttu, et mõlemad paistavad juhendit lugemata inimesele „vahetuskursina“ ja tabelarvutus ei takista seda valesti tegemast.

## Matemaatika

```
icer_kohalikus_valuutas = arvesta_ümber(icer_lähtevaluutas, ümberarvestustegur)

ümberarvestustegur peaks olema:
  PPP ümberarvestustegur — ressursside reaalse majandusliku väärtuse
                            võrdlemiseks riikide vahel (ISPORi soovitatud
                            mitmeriikliku CEA jaoks)
  turuvahetuskurss       — ainult tegelike piiriüleste sularahamaksete jaoks

võta kasutusele, kui icer_kohalikus_valuutas < kohalik_lävend
```

Otsusereegel ise on tavaline [ICER-i lävendireegel](../maksevalmiduse-lävendid/) — `võta kasutusele, kui ICER < λ`; selle teema metoodiline küsimus puudutab täielikult seda, *milline ümberarvestustegur* annab arvu `icer_kohalikus_valuutas`, millele see reegel rakendub.

## Lahendatud näide

Ravimi ICER USA uuringust on 45 000 $/QALY. Hüpoteetiline importiv riik seab oma illustratiivse lävendi tasemele £34 000/QALY (hüpoteetiline riigipõhine arv ainult selle näite jaoks — tegelikud lävendid erinevad riigiti ja muutuvad ajas ning need tuleb alati allika ja kuupäevaga varustada).

**PPP ümberarvestusteguriga 0,72** (illustratiivne, ainult selle lahendatud näite jaoks): 45 000 $ × 0,72 = £32 400/QALY. £32 400 < £34 000 → **võta kasutusele**.

**Turuvahetuskursiga 0,79** selle asemel (illustratiivne): 45 000 $ × 0,79 = £35 550/QALY. £35 550 > £34 000 → **lükka tagasi**.

Sama aluseks olev ICER 45 000 $/QALY annab PPP-ümberarvestusega kasutuselevõtuotsuse ja turukursi järgi ümberarvestusega tagasilükkamisotsuse. See on konkreetne illustratsioon, miks ISPORi juhend käsitleb ümberarvestusteguri valikut metoodiliselt otsustavana — mitte ümardamisdetailina ega millegi sellisena, mille võib jätta kaudseks tabelarvutusvalemis, mida keegi üle ei kontrolli.

## Seos tarkvaraarendusega

See on tervishoiumajanduse peegelpilt tuntud inseneriala kohta: mitme valuutaga hinnakujunduse i18n/l10n korrektsus kommertstarkvaras, kus SaaS-i hinnaleht ei tohi kunagi vaikselt võrrelda `$`-summat `£`-hinnaga. Tüübitaseme garantii, mille annab hästi ehitatud `Money`-tüüp — võrdlusmeetodid, mis keelduvad ebaühtivate valuutade võrdlemisest ja sunnivad esmalt tegema selge ümberarvestuse sammu —, on otsene tarkvaratehniline paralleel siinsele tervishoiumajanduslikule metoodilisele punktile: ära võrdle ümberarvestamata arve üle valuutade ja ära lase ümberarvestuse sammul olla kaudne ega dokumenteerimata.

## Lõksud

- **Eri valuutade summade vaikne võrdlemine**: ad hoc HTA-töö tabelarvutuses, mis lahutab või võrdleb dollari- ja naelasummat ilma eelneva ümberarvestuseta — veaklass, mille päris valuutateadlik `Money`-tüüp püüab kinni konstruktsiooni enda poolt, selle asemel et jätta vaikseks veaks.
- **Turuvahetuskursi segiajamine PPP-ga**: ISPORi juhendi järgi mitmeriikliku HTA levinuim metoodiline viga — need kaks arvu võivad oluliselt erineda ja vastavad eri küsimustele (reaalne majanduslik väärtus vs tegelik rahavoog).
- **Kasutatud vahetuskursi või PPP indeksi kuupäevastamata jätmine**: mõlemad liiguvad ajas, nii et iga viidatud ümberarvestustegur tuleb kuupäevastada samamoodi, nagu see hoidla kuupäevastab oma teisi võrdlusarve (Green Booki süsinikuväärtused, ärahoitud surma väärtus jne).

## Allikad

- Willke RJ, Glick HA, Polsky D, Schulman K. „Estimating country-specific cost-effectiveness from multinational clinical trials.“ *Health Economics*. 1998;7(6):481-93.
- OECD, Purchasing Power Parities (PPP) data. <https://www.oecd.org/en/data/indicators/purchasing-power-parities-ppp.html>
