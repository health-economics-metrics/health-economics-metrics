# Dadansoddiad Cost-Effeithiolrwydd (CEA)

Mae CEA yn cymharu costau ymyriadau amgen yn erbyn un canlyniad wedi'i fesur mewn **unedau naturiol** — blynyddoedd bywyd, achosion wedi'u canfod, derbyniadau wedi'u hosgoi, mmHg o ostyngiad pwysedd gwaed. Ei allbwn yw cost fesul uned o ganlyniad.

## Pam mae'n bwysig

CEA yw'r gymhariaeth waith caib-a-rhaw pan fo pob opsiwn yn targedu'r un canlyniad. Mae'n ateb "pa un o'r ffyrdd hyn o gyflawni X sydd orau i ddefnyddio arian?" — ond *nid* "a yw X werth ei gyflawni o gwbl?" (mae angen [dadansoddiad cost-budd](../cost-benefit-analysis/) am hynny) a *nid* "sut mae X yn cymharu â blaenoriaethau anghysylltiedig?" (mae angen [dadansoddiad cost-cyfleustod](../cost-utility-analysis/) a chanlyniad generig fel y QALY am hynny).

## Y mathemateg

Yr ystadegyn cymharu yw'r [ICER](../incremental-cost-effectiveness-ratio/) mewn unedau naturiol:

```
ICER = (Cost_A − Cost_B) / (Effaith_A − Effaith_B)
     = £ fesul achos ychwanegol a ganfuwyd / derbyniad a osgowyd / ac ati
```

Y drefn: diffiniwch uned y canlyniad; costiwch bob opsiwn o'r un [persbectif](../analysis-perspective/) dros yr un [gorwel amser](../time-horizon/); dilëwch opsiynau a ddominyddir ([ffin effeithlonrwydd](../dominance-and-efficiency-frontier/)); cyfrifwch gymarebau cynyddrannol ar hyd y ffin.

## Enghraifft wedi'i gweithio

Tair ffordd o ddod o hyd i ffibriliad atriaidd heb ei ddiagnosio mewn poblogaeth o 100,000:

```
Opsiwn                       Cost         Achosion a ganfuwyd
Gwiriadau pwls cyfleus        £150,000       300
Digwyddiadau sgrinio fferyllfa £400,000      520
Sgrinio ar sail dyfais wisgadwy £900,000     610

ICER fferyllfa vs pwls:  (400k−150k)/(520−300) = £1,136 fesul achos ychwanegol
ICER dyfais wisgadwy vs fferyllfa: (900k−400k)/(610−520) = £5,556 fesul achos ychwanegol
```

Mae a yw £5,556 fesul achos ychwanegol "werth chweil" yn dibynnu ar werth achos a ganfuwyd (atal strôc i lawr yr afon) — mae CEA yn graddio'r opsiynau ond mae angen y prisiad allanol hwnnw ar y penderfyniad mabwysiadu. Sylwch fod cost *gyfartalog* opsiwn y ddyfais wisgadwy fesul achos (900k/610 = £1,475) yn edrych yn iawn; y £5,556 *cynyddrannol* yw'r ffigur gonest ar gyfer y penderfyniad ehangu.

## Cysylltiad â pheirianneg meddalwedd

CEA yw'r templed cywir pryd bynnag y bydd opsiynau'n rhannu un canlyniad: cost fesul prawf ansefydlog a ddilëwyd ar draws tri dull unioni; cost fesul digwyddiad a osgowyd ar draws gwerthwyr arsylwadaeth; cost fesul defnydd llwyddiannus ar draws pensaernïaethau CI. Mae'r ddisgyblaeth y mae'n ei gorfodi — un uned canlyniad ddatganedig, cymarebau cynyddrannol (nid cyfartalog), opsiynau a ddominyddir wedi'u dileu'n gyntaf — yn lladd y rhan fwyaf o gymariaethau gwerthwr gwael cyn i'r drafodaeth brisio ddechrau.

## Peryglon

- **Cymharu opsiynau â chanlyniadau gwahanol** ("achosion a ganfuwyd" yn erbyn "boddhad") mewn un CEA — mae angen [dadansoddiad cost-canlyniad](../cost-consequence-analysis/) neu ganlyniad generig am hynny.
- **Cymarebau cost-effeithiolrwydd cyfartalog** wedi'u cyflwyno lle mae angen rhai cynyddrannol (yr enghraifft dyfais wisgadwy uchod).
- **Unedau canlyniad wedi'u dewis i wenieithu**: allbwn yw "rhybuddion a gynhyrchwyd," nid canlyniad; mynnwch unedau sy'n cario gwerth.

## Ffynonellau

- CDC POLARIS: dadansoddiad cost-effeithiolrwydd. <https://www.cdc.gov/policy/polaris/economics/cost-effectiveness/index.html>
- Geirfa York Health Economics Consortium. <https://yhec.co.uk/glossary/cost-effectiveness-analysis/>
