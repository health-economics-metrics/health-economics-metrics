# Cyfuno Costau sy'n Ddiogel o ran Arian Cyfred

Mae adio llawer o eitemau llinell arian — anfonebau misol, costau fesul safle, ffigurau effaith cyllideb aml-flwyddyn — gyda rhifau pwynt arnawf deuaidd cyffredin (`f64`) yn cronni gwallau cynrychiolaeth bach, oherwydd nid yw'r rhan fwyaf o ffracsiynau degol ($1,234.56, er enghraifft) yn gynrychiadwy'n union mewn pwynt arnawf deuaidd. Mae pob gwall unigol yn fach, ond gall model mawr sy'n adio cannoedd neu filoedd o eitemau llinell dros sawl blwyddyn ddrifftio gan ffracsiynau o geiniog — ac mae'r drifft yn dibynnu ar y *drefn* y mae'r adiadau'n digwydd ynddi, sy'n ei gwneud yn anatgynhyrchadwy. Mae cyfuno arian cyfred a wneir mewn rhifyddeg degol union (neu uned leiaf gyfanrif) yn adio'n union, gan gyfateb i sut mae'n rhaid i systemau cyfrifyddu a chyfriflyfrau dwbl gysoni i'r geiniog.

## Pam mae hyn yn bwysig

Mae hwn yn ddosbarth wedi'i ddogfennu'n dda ac yn sylfaenol o fygiau meddalwedd: papur Goldberg yn ACM Computing Surveys yn 1991, "What Every Computer Scientist Should Know About Floating-Point Arithmetic", yw'r cyfeirnod safonol ar gyfer yn union pam na all pwynt arnawf deuaidd gynrychioli'r rhan fwyaf o werthoedd arian degol yn union, a pham mae adio llawer ohonynt yn cyfansoddi'r gwall. Mae modelau economeg iechyd a modelau cyllid y GIG yn adio'n rheolaidd lawer o flynyddoedd a llawer o gategorïau cost — mae [cyfanswm cost perchnogaeth](../cyfanswm-cost-perchnogaeth/) a [dadansoddiad effaith cyllideb](../dadansoddiad-effaith-ar-y-gyllideb/) ill dau yn crynhoi nifer fawr o eitemau llinell cost `f64` dros orwelion aml-flwyddyn. Pan fo'n rhaid i fodel gysoni i'r geiniog — rhaid i archwiliad sy'n ailgyfrifo'r cyfanswm â llaw gael y ffigur *union yr un fath* — rhaid i'r rhifyddeg ei hun fod yn ddegol union, nid pwynt arnawf.

## Y Fathemateg

```
Cyfuno naïf:                cyfanswm = Σ f64(eitem_i)         — drifft sy'n dibynnu ar drefn
Cyfuno diogel o ran arian:  cyfanswm = Σ Decimal(eitem_i)      — union, atgynhyrchadwy

Cymhwyso addasiad canran (e.e. byffer wrth gefn):
  wedi'i_addasu = cyfanswm × lluosydd      — canlyniad Decimal union, a all gario
                                              mwy o leoedd degol nag esboniwr uned
                                              leiaf yr arian cyfred
  wedi'i_dalgrynnu = talgrynnu(wedi'i_addasu, esboniwr_arian, rheol_talgrynnu)  — rhaid
                                              datgan y rheol talgrynnu (hanner-i-fyny
                                              vs. hanner-i-eilrif/talgrynnu bancwr)
                                              yn benodol
```

Sylwch ar y ddisgyblaeth dau gam: gall lluosi swm `Decimal` union â lluosydd gynhyrchu mwy o leoedd degol nag y mae'r arian cyfred yn eu defnyddio mewn gwirionedd (tri lle degol o swm dau le degol wedi'i luosi â lluosydd dau le degol, er enghraifft) — *nid* yw'r manylder canolradd hwnnw'n cael ei dalgrynnu i ffwrdd yn awtomatig; dim ond cam talgrynnu penodol, gyda rheol talgrynnu wedi'i datgan, sy'n ei ostwng i wir esboniwr uned leiaf yr arian cyfred.

## Enghraifft Waith

Deuddeg anfoneb fisol unfath o $1,234.56 yr un, wedi'u hadio mewn rhifyddeg degol union: $1,234.56 × 12 = **$14,814.72**, yn union. Cyferbynnwch hyn ag adio llythrennol `f64` `1234.56` ddeuddeg gwaith mewn manylder dwbl IEEE-754, a all ddrifftio gan ffracsiynau o geiniog yn dibynnu ar drefn yr adio — dosbarth go iawn, wedi'i ddogfennu o fygiau, nid problem i fodel wedi'i adeiladu ar rifyddeg `Money` degol union.

Nawr cymhwyswch fyffer wrth gefn effaith cyllideb safonol o 5% (lluosydd 1.05) i'r cyfanswm $14,814.72 hwnnw: $14,814.72 × 1.05 = $15,555.456 — tri lle degol, oherwydd bod y lluosi'n union ac nid yw'n cael ei dalgrynnu'n awtomatig i ddau le degol yr arian cyfred. Wrth ei dalgrynnu'n benodol i 2 le degol gan ddefnyddio talgrynnu bancwr (hanner-i-eilrif), ceir yn union **$15,555.46**.

## Cysylltiad Peirianneg Feddalwedd

Dyma'r wers uniongyrchol, sylfaenol y tu ôl i "mae meddalwedd ariannol yn defnyddio `Decimal`, nid `float`" — mae'n cysylltu'n benodol â modiwlau [cyfanswm cost perchnogaeth](../cyfanswm-cost-perchnogaeth/) a [dadansoddiad effaith cyllideb](../dadansoddiad-effaith-ar-y-gyllideb/) y gadwrfa hon, sydd ill dau ar hyn o bryd yn adio costau pwynt arnawf plaen; nid yw'r ddadl cywirdeb yn mynnu mudo'r modelau hynny ar unwaith, ond mae'n datgan yn union *pryd* y mae'n rhaid i system gysoni i'r geiniog ac felly na ddylai ddefnyddio pwynt arnawf deuaidd ar gyfer ei rhifyddeg arian. Gweler hefyd [dyraniad costau i'r geiniog yn union](../dyrannu-costau-i-r-geiniog-yn-union/) ar gyfer y broblem gydymaith o rannu (yn hytrach nag adio) cyfansymiau heb golli ceiniogau.

## Peryglon

- **Trosi i `float` hanner ffordd drwy'r gadwyn**: mae tynnu gwerth arian allan i rif pwynt arnawf hanner ffordd drwy gyfrifiad (mae rhai llyfrgelloedd `Money` hyd yn oed yn enwi'r dull trosi hwn rhywbeth fel "lossy" fel rhybudd penodol) yn gollwng y warant union yn dawel ar gyfer pob cyfrifiad ar ôl y pwynt hwnnw.
- **"Mae Decimal yn rhy araf i drafferthu ag ef"**: diystyru rhifyddeg degol union fel gorbenion diangen pan fo cywirdeb ac archwiliadwyedd — nid trwybwn crai — o bwys ar gyfer adrodd ariannol.
- **Cymhwyso canran wrth gefn heb ddatgan y rheol talgrynnu**: gall hanner-i-fyny yn erbyn hanner-i-eilrif (talgrynnu bancwr) newid y geiniog olaf; rhaid i'r confensiwn talgrynnu ei hun fod yn ddewis a ddatganwyd, y gellir ei archwilio — gweler [dadansoddiad cost a budd](../dadansoddiad-cost-a-budd/) am ganllawiau Llyfr Gwyrdd Trysorlys EF ar addasiadau wrth gefn a thuedd optimistiaeth, yn union y math o ffigur y cymhwysir y cam talgrynnu hwn ato.

## Ffynonellau

- Fowler M. "Patterns of Enterprise Application Architecture." Addison-Wesley, 2002 — y patrwm `Money`.
- Goldberg D. "What Every Computer Scientist Should Know About Floating-Point Arithmetic." ACM Computing Surveys, 1991.
- HM Treasury, The Green Book — canllawiau tuedd optimistiaeth a wrth gefn ar gyfer modelu effaith cyllideb. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
