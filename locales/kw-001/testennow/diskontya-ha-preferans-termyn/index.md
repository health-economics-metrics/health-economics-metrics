# Diskontya ha Preferans Termyn

Diskontya a dreyl kostow ha prowyow an termyn a dheu dhe dalvosow lemmyn, drefen bos prow hedhyw moy talvosek ages an keth prow yn pymp bledhen.

## Perag yth yw posek

Pub apprais ekonomek yeghes ha pub kas besneth sektor-poblek kreff a dhiskont lanwesow aml-bledhen. Green Book HM Treasury an Rewlm Unys a arghas reyt preferans termyn sosyal 3.5% bledhenyek; kas kres NICE a dhiskont kostow hag efektys yeghes orth 3.5% pub bledhen (gans reyt 1.5% kas-na-gres rag terapiow ogas-sawya gans prowyow dres 30+ bledhen). Mar klam dha gas besneth medhelweyth "£5 million a sawyansow dres 10 bledhen," arvedhor arghans a wovynn y'n keth termyn rag an figyr diskontys.

## An Matematik

Talvos lemmyn a'n kevran a'n termyn a dheu:

```
PV = FV / (1 + r)^t

PV = talvos lemmyn
FV = talvos termyn a dheu y'n bledhen t
r  = reyt diskont (NICE/Green Book: 0.035)
t  = bledhydhyow dhiworth lemmyn
```

Rag prow bledhenyek kyrghys B dres n bledhen (annuity):

```
PV = B × [1 − (1 + r)^(−n)] / r
```

## Ensampel gwrys

Dha vedhelweyth a sav £100,000 pub bledhen dhe drest NHS rag 5 bledhen, ow talleth unn bledhen wosa go-live.

Oll heb diskontya: £500,000.

Diskontys orth 3.5%:

```
Bledhen 1: 100,000 / 1.035^1 = £96,618
Bledhen 2: 100,000 / 1.035^2 = £93,351
Bledhen 3: 100,000 / 1.035^3 = £90,194
Bledhen 4: 100,000 / 1.035^4 = £87,144
Bledhen 5: 100,000 / 1.035^5 = £84,197

PV oll ≈ £451,505
```

An keyn onest yw dhe-dro £451,000, ogas 10% le ages an tomm es. Lemmyn tybyewgh dalgh delivrans a unn bledhen: pub termyn a symudh unn bledhen diwettha, ha'n PV a goll dhe ogas £436,000 — an golok diskont a'n [kost dalgh](../kost-dalgh/).

## Kolm gans ynjynnyans medhelweyth

- **Dehweles a ded-teknegieth ha treuswerthow platform** a bromisya fosow prow bledhydhyow pell; diskontewgh kyns keskomparya gans ober a bay an kwartran ma.
- **Kostow a-rag, prowyow a-dhelergh** yw furv standard a dreuswerth. Diskontya a bunes an furv na, yn ewn: a bris talvos termyn heb risk a ervira kanasow lemmyn rag talvos diwettha.
- **Klaymow "sawyansow yn bledhen 5"** a dal skeptigyans diwweyth — yns diskontys yn krev hag ansyker yn tre (gwelewgh [analys ansylder](../analys-tebelder/)).

## Fowtys Kemmyn

- **Diskontya kostow mes na ny yw prowyow** (po an tu aral) — an kas kres a dhiskont an dew orth an keth reyt.
- **Devnydhya reyt kenwerthek (8–12%) yn kas sektor-poblek**, po 3.5% yn unn gans arghans venture. Metyewgh an reyt gans an gwrer-dhewisyans.
- **Kemmysk diskontya gans kressans prisow.** Diskontya a dhevnydh dhe dalvosow *gwir* (addasys dhe gressans prisow); na wrewgh an dew yn tawesek.

## Fontynnow

- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- HM Treasury Green Book, gidyans ystynnys diskontya. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-discounting>
