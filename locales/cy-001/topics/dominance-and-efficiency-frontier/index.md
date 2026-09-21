# Trechiant a'r Ffin Effeithlonrwydd

Mae opsiwn wedi'i **drechu** os yw opsiwn arall yn costio llai *ac* yn cyflawni mwy. Y **ffin effeithlonrwydd** yw'r hyn sy'n weddill ar ôl dileu opsiynau a drechwyd: y set o ddewisiadau lle mae cael mwy'n golygu talu mwy.

## Pam mae'n bwysig

Cyn unrhyw ddadl am drothwyon neu gyllidebau, mae asesu technoleg iechyd yn gyntaf yn dileu opsiynau na ddylai neb byth eu dewis. Mae plotio pob opsiwn ar blân cost-yn-erbyn-effaith a thynnu'r ffin yn ymarfer pum munud sy'n lladd hanner rhestr fer yn rheolaidd. Wedyn, cyfrifir cymariaethau cynyddrannol ([ICERs](../incremental-cost-effectiveness-ratio/)) yn unig *ar hyd y ffin*, pob opsiwn yn erbyn yr un rhataf nesaf na threchwyd — byth yn erbyn "gwneud dim" pan fo opsiynau canolradd gwell yn bodoli.

## Y fathemateg

```
Trechiant llym:      Mae A yn trechu B os yw Cost_A ≤ Cost_B ac Effaith_A ≥ Effaith_B
                     (gydag o leiaf un anghydraddoldeb llym)

Trechiant estynedig: Diystyrir B os yw cymysgedd o A a C yn cyflawni mwy o effaith
                     y bunt — a ganfyddir pan fo ICERs yn gostwng wrth i chi symud
                     i fyny'r ffin. Rhaid i ICERs ffin dilys fod yn cynyddu.
```

Gweithdrefn: trefnwch opsiynau yn ôl effaith; dilëwch y rhai a drechwyd yn llym; cyfrifwch ICERs pâr rhwng cymdogion; dilëwch unrhyw opsiwn y mae ei ICER yn fwy na'r un ar gyfer yr opsiwn mwy effeithiol nesaf (trechiant estynedig); ailadroddwch nes bod ICERs yn cynyddu'n undonig.

## Enghraifft wedi'i datrys

Pedwar opsiwn ar gyfer lleihau apwyntiadau a gollwyd (effaith = apwyntiadau a adferwyd/flwyddyn):

```
Opsiwn                  Cost/flwyddyn   Wedi'u hadfer
Gwneud dim              £0              0
Nodiadau atgoffa SMS    £20,000         2,000
Galwadau ffôn           £120,000        2,200
SMS + brysbennu AI      £90,000         3,500
```

Mae galwadau ffôn wedi'u **trechu'n llym** gan SMS + brysbennu AI (yn costio mwy, yn adfer llai). Ffin: dim byd → SMS → SMS + AI.

```
ICER(SMS yn erbyn dim byd)   = 20,000 / 2,000  = £10 fesul apwyntiad a adferwyd
ICER(SMS+AI yn erbyn SMS)    = (90,000 − 20,000) / (3,500 − 2,000) = £46.67 fesul apwyntiad
```

ICERs cynyddol → ffin ddilys. Ar ~£160 wedi'i arbed fesul apwyntiad ysbyty a adferwyd (gweler [cyfradd peidio â mynychu](../did-not-attend-rate/)), mae'r ddau gam ar y ffin yn werth eu cymryd; ni ddylai'r cynnig canolfan-ffôn byth gyrraedd y pwyllgor.

## Cysylltiad â pheirianneg meddalwedd

Adeiladwch yr un siart ar gyfer unrhyw benderfyniad offer: cost y flwyddyn ar un echelin, canlyniad wedi'i fesur (oriau a arbedwyd, digwyddiadau a osgowyd, defnyddio wedi'i alluogi) ar y llall. Dilëir pwyntiau i fyny-ac-i'r-chwith o'r ffin cyn i unrhyw un ddadlau am gyllideb. Mae hyn yn ail-fframio dewis gwerthwyr o ddadleuon rhestr wirio nodweddion i "rydych chi wedi'ch trechu; mae'r cyfarfod ar ben." Mae hefyd yn dinoethi'r patrwm menter cyffredin o brynu'r opsiwn drutaf am enillion ymylol — dim ond yn ddilys os yw'r pris cynyddrannol fesul uned gynyddrannol yn un y byddai'r sefydliad yn ei dalu'n fwriadol.

## Peryglon

- **Cymharu popeth â'r llinell sylfaen** yn hytrach na'r opsiwn nesaf ar y ffin — mae hyn yn gwneud opsiynau drud edrych yn well trwy guddio cyfatebiaethau rhatach agos.
- **Sgoriau effaith un-dimensiwn** sy'n cuddio'r hyn sy'n bwysig; os yw dau ganlyniad yn cyfrif, naill ai cyfunwch hwy'n amddiffynadwy (gweler [dadansoddiad cost-cyfleustod](../cost-utility-analysis/)) neu dangoswch ddwy ffin.
- **Anghofio ansicrwydd**: gall opsiynau ger y ffin newid lle o dan [ddadansoddiad sensitifrwydd](../sensitivity-analysis/).

## Ffynonellau

- Geirfa Consortiwm Economeg Iechyd Efrog: trechiant. <https://yhec.co.uk/glossary/dominance/>
- Gwerthusiadau technoleg iechyd NICE: y llawlyfr (PMG36). <https://www.nice.org.uk/process/pmg36>
