# Cael Cyfleustod drwy Gyfnewid Amser (TTO)

Mae TTO yn ddull safonol o gael gwerth cyfleustod cyflwr iechyd yn uniongyrchol gan ymatebydd, yn hytrach na dyfeisio un. Mae'n un o'r dulliau cael — ochr yn ochr â gamblo safonol ac arbrofion dewis arwahanol — sy'n cynhyrchu'r setiau gwerth y tu ôl i offerynnau fel [EQ-5D](../eq-5d/), ac felly y tu ôl i'r rhan fwyaf o gyfrifiadau [QALY](../blwyddyn-fywyd-a-addaswyd-yn-ôl-ansawdd/) a ddaw ar eu hôl.

## Pam mae hyn yn bwysig

Roedd yn rhaid i bob pwysau cyfleustod sy'n bwydo cyfrifiad QALY ddod o rywle. TTO yw'r ffordd: ar gyfer cyflwr a ystyrir yn well na marwolaeth, gofynnir i ymatebydd faint o flynyddoedd `X` mewn iechyd llawn y byddent yn ystyried eu bod yn gyfwerth â `T` blynedd yn y cyflwr gwanychol (`X < T`); y cyfleustod yw `X / T`. Ar gyfer cyflwr y mae rhai ymatebwyr yn ei ystyried yn waeth na marwolaeth, mae'r fformiwla safonol yn torri i lawr (ni all gynrychioli cyfleustodau islaw sero yn lân), felly mae TTO estynedig yn berthnasol. Mae peiriannydd meddalwedd neu ddadansoddwr sy'n trin pwysau cyfleustod fel mewnbwn a roddir, heb wybod ei fod wedi gofyn am brotocol cael wedi'i ddilysu i'w gynhyrchu, un cam o ffwrdd o rif na allant ei amddiffyn os caiff ei herio.

## Y Fathemateg

```
TTO safonol (cyflwr gwell na marwolaeth):
  cyfleustod = amser_mewn_iechyd_llawn / amser_yn_y_cyflwr_gwanychol

TTO estynedig (cyflwr gwaeth na marwolaeth):
  cyfleustod = -amser_a_gyfnewidiwyd_am_farwolaeth / (cyfanswm_hyd - amser_a_gyfnewidiwyd_am_farwolaeth)
```

`amser_mewn_iechyd_llawn` / `amser_yn_y_cyflwr_gwanychol` — blynyddoedd `X` mewn iechyd llawn a farnir yn gyfwerth â `T` blynedd yn y cyflwr gwanychol. `amser_a_gyfnewidiwyd_am_farwolaeth` / `cyfanswm_hyd` — yn y fformiwleiddiad gwaeth-na-marwolaeth, blynyddoedd `a` o fywyd sy'n weddill o `T` blynedd y byddai'r ymatebydd yn eu cyfnewid am farwolaeth ar unwaith, gan ffafrio `T − a` blynedd mewn iechyd llawn wedi'i ddilyn gan farwolaeth dros `T` blynedd yn y cyflwr gwaeth-na-marwolaeth. Mae'r canlyniad yn negyddol, wedi'i angori fel bod marwolaeth = 0.

## Enghraifft Waith

**Safonol**: mae ymatebydd mewn cyflwr gwanychol am 10 mlynedd ac yn ddifater ynghylch 7 mlynedd mewn iechyd llawn: cyfleustod = 7 / 10 = **0.7**.

**Gwaeth na marwolaeth**: dros fywyd sy'n weddill o 10 mlynedd, byddai'r ymatebydd yn cyfnewid 2 flynedd am farwolaeth ar unwaith — mae'n well ganddynt 8 mlynedd mewn iechyd llawn wedi'u dilyn gan farwolaeth dros 10 mlynedd yn y cyflwr gwaeth-na-marwolaeth: cyfleustod = −2 / (10 − 2) = −2 / 8 = **−0.25**.

## Cysylltiad Peirianneg Feddalwedd

Mae'r un pwynt y mae arolwg DevEx neu ymgysylltu yn rhedeg i mewn iddo pan fydd yn gofyn i bobl raddio rhywbeth ar raddfa 0–10 heb ei harchwilio yn berthnasol yma i'r gwrthwyneb: mae TTO yn bodoli yn union oherwydd nad yw "gofynnwch i bobl ei raddio" yn ddull cael wedi'i ddilysu ar ei ben ei hun. Cyn adeiladu mynegai cyfansawdd — sgôr DevEx, mynegai ymgysylltu, graddfa llosgi allan — ar ben rhif hunan-raddedig, gofynnwch beth a'i cafodd ac a oedd y dull hwnnw wedi'i ddilysu, yr un cwestiwn y mae economegwyr iechyd yn ei ofyn i bwysau cyfleustod cyn iddo fynd i mewn i QALY.

## Peryglon

- **Cyffredinoli gwerth unigol**: mae gwerthoedd TTO yn cael eu cael o *sampl* o'r cyhoedd cyffredinol (neu gleifion), nid yr unigolyn y penderfynir ar ei ofal — mae defnyddio gwerth TTO un ymatebydd fel pe bai'n cyffredinoli yn wall samplu.
- **Fformiwleiddiad anghywir ar gyfer y cyflwr**: mae'r fformiwla TTO safonol yn tybio bod y cyflwr yn ddiamwys well na marwolaeth; mae ei chymhwyso at gyflwr y byddai rhai ymatebwyr yn ei ystyried yn waeth na marwolaeth, heb newid i'r fformiwleiddiad estynedig, yn cynhyrchu cyfleustod anghywir (positif) yn dawel.
- **Hydau anghymaradwy**: nid yw gwerthoedd TTO a gafwyd gan ddefnyddio gwahanol hydau bywyd sy'n weddill `T` ar gyfer y gymhariaeth gwaeth-na-marwolaeth yn gymaradwy'n uniongyrchol heb wirio bod dyluniad yr astudiaeth wedi cadw `T` yn gyson.

## Ffynonellau

- Torrance GW. "Social preferences for health states: an empirical evaluation of three measurement techniques." Socioecon Plan Sci. 1976;10(3):129-36.
- Patrick DL, Starks HE, Cain KC, Uhlmann RF, Pearlman RA. "Measuring preferences for health states worse than death." Med Decis Making. 1994;14(1):9-18.
