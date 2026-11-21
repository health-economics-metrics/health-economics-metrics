# Kuntell Kost Sawys-Arghans

Sommya lies linenn mona — fakturow miyek, kostow pub steus, figuryow efekt budjet aml-bledhen — gans niverow floating-point binar kemmyn (`f64`) a gruntell fowtys displegyans byghan, drefen bos an moyha radhow desimal ($1,234.56, rag ensampel) na yllons bos diskwedhys yn tien yn floating-point binar. Pub fowt a-bervedh yw byghan, mes patrom bras a sommya kansow po mylyow a linennow dres hag yn nebes bledhydhyow a yll drifta dre rannow a sent — ha'n drif a dhepyn war an *ordyr* a'n kressansow, ytho yw na-dhaswrusadow. Kuntell arghans gwrys yn aritmetik desimal tien (po unnys minor kowl) a sommya yn tien, ow metya an fordh may res dhe systemow akontya ha lyvrow dew-entra dasparthi dhe'n sent.

## Perag yth yw posek

Hemma yw klass fowt medhelweyth selys dhe dhiskwedhes: an paper Goldberg 1991 ACM Computing Surveys "What Every Computer Scientist Should Know About Floating-Point Arithmetic" yw an skoodhyer standard a berag na yll floating-point binar diskwedhes an moyha talvosow arghans desimal yn tien, ha perag may kressa an fowt pan sommyr lyes anodhans. Patromow ekonomek yeghes ha mona NHS a sommya yn kemmyn lyes bledhen ha lyes klass kost — [kost perghenogyeth kowl](../kost-perghenogeth-hollow/) ha [analys efekt budjet](../analys-efekt-budjet/) an dew a gresa niverow bras a linennow kost `f64` dres horizonow aml-bledhen. Pan res dhe batrom dasparthi dhe'n sent — awdit a dhasrekena an tomm gans dorn a res kavos an figyr *kehaval* — an aritmetik y honan a res bos desimal-tien, na ny yw floating point.

## An Matematik

```
Kuntell kuv:               tomm = Σ f64(linenn_i)         — drif a dhepyn war ordyr
Kuntell sawys-arghans:     tomm = Σ Decimal(linenn_i)      — tien, daswrusadow

Devnydhya addasyans radh (rag ensampel buffer kontinjensi):
  addasys = tomm × multiplyer                — sewyans Decimal tien, a yll dhegh
                                                moy desimal ages exponent
                                                unnys minor an arghans
  rondys  = round(addasys, exponent_arghans, rewl_rondya)  — an rewl rondya
                                                (hanter-yskynn erbynn hanter-eyn/
                                                rondya banker) a res bos derivys
                                                yn splann
```

Merkewgh an dyskyplin dew-step: multiplya kevrann `Decimal` tien gans multiplyer a yll dri moy desimal ages a usi an arghans yn gwir (tri desimal diwar kevrann dew-desimal × multiplyer dew-desimal, rag ensampel) — an akur kres na ny yw rondys dhe-ves yn awtomatek; marnas step rondya splann, gans rewl rondya derivys, a'n dre dhe exponent minor gwir an arghans.

## Ensampel gwrys

Dewdhek faktura miyek kehaval a $1,234.56 pub unn, sommys yn aritmetik desimal tien: $1,234.56 × 12 = **$14,814.72**, yn tien. Keskomparewgh gans sommya an lytheral `f64` `1234.56` dewdhek gweyth yn IEEE-754 double precision, a yll drifta dre rannow a sent herwydh ordyr sommya — klass fowt gwir, dhiskwedhys, na ny yw kudyn rag patrom drehys war aritmetik `Money` desimal tien.

Lemmyn devnydhewgh buffer kontinjensi efekt budjet standard a 5% (multiplyer 1.05×) dhe'n tomm $14,814.72 na: $14,814.72 × 1.05 = $15,555.456 — tri desimal, drefen bos an multiplyans tien ha na ny yw rondys yn awtomatek dhe'n dew desimal an arghans. Y rondya yn splann dhe 2 desimal gans rondya banker (hanter-eyn) a re **$15,555.46** yn tien.

## Kolm gans ynjynnyans medhelweyth

Hemma yw an dyskas dhirek, selys a dhelergh "medhelweyth arghansek a dhevnydh `Decimal`, na ny yw `float`" — hi a golm yn splann dhe vodulyow [kost perghenogyeth kowl](../kost-perghenogeth-hollow/) ha [analys efekt budjet](../analys-efekt-budjet/) an repo ma, an dew a sommya lemmyn kostow floating-point sempel; an argyans ewnder omma ny dhesir treylya an patromow na dhe-lemmyn, mes hi a lever yn splann *pan* res dhe system dasparthi dhe'n sent ha rag henna na dal devnydhya floating point binar rag y aritmetik arghans. Gwelewgh ynwedh [dyssehtyans kost ewn-kans](../dyssehtyans-kost-ewn-kans/) rag an kudyn kowethes a rannans (na ny yw sommya) tommow heb kolli sent.

## Fowtys Kemmyn

- **Treylya dhe `float` y'n chayn**: tenna talvos arghans yn niver floating-point yn hanter an kowntyans (nebes lyverow `Money` a henwi an fordh treylya ma "lossy" avel gwarnyans splann) a dhiwarth an gwarans tienyth yn tawesek rag pub kowntyans a-wartha.
- **"Decimal yw re lent"**: ow tismyssya aritmetik desimal tien avel overheyd dyfyk, pan yw ewnder hag awdit — na ny yw kyfradh kowl — a vri rag rapportya arghansek.
- **Devnydhya kevran kontinjensi heb derivas an rewl rondya**: rondya hanter-yskynn erbynn hanter-eyn (rondya banker) a yll chanjya an sent diwettha; an konvensyon rondya y honan a res bos dewis derivys, awditadow — gwelewgh [analys kost-prow](../analys-kost-prow/) rag gidyans Green Book HM Treasury war addasyansow kontinjensi ha bias owrowayans, an keth sort figyr may devnydhyr an step rondya ma.

## Fontynnow

- Fowler M. "Patterns of Enterprise Application Architecture." Addison-Wesley, 2002 — an patrom `Money`.
- Goldberg D. "What Every Computer Scientist Should Know About Floating-Point Arithmetic." ACM Computing Surveys, 1991.
- HM Treasury, The Green Book — gidyans bias owrowayans ha kontinjensi rag patromya efekt budjet. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
