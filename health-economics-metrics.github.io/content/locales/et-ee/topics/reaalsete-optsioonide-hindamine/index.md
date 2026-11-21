# Reaalsete optsioonide hindamine

Reaalsete optsioonide hindamine rakendab finantsoptsioonide hinnastamise loogikat reaalsetele (mitte finantsturul kaubeldavatele) investeerimisotsustele — täpsemalt *laiendamisoptsioonile*, et projekti hiljem laiendada, kui see õnnestub, ilma et peaks seda tegema. Lihtsustatud ühe perioodi binoomimudel (Cox, Ross, Rubinstein, 1979) hindab seda paindlikkust otse, muutes „tarnime väikselt ja vaatame“ aimdusest hinnastatud arvuks.

## Miks see on oluline

Staatiline nüüdisväärtuse arvutus hinnastab projekti kõik-või-mitte-midagi-panusena: rahasta või ära, tänases mastaabis, igaveseks. Tegelikke projekte — ja eriti etapiviisilisi digitervise kasutuselevõtte — pannakse harva nii: tervishoiusüsteem saab rahastada väikese piloodi, vaadata, mis juhtub, ja seada rohkem raha sidumisele ainult siis, kui see töötab. Sellel paindlikkusel on tegelik väärtus ning selle eiramine alahindab etapiviisilisi investeeringuid süstemaatiliselt ühekordsete suhtes, mis on täpselt vastupidine hankeprotsessidele, mis premeerivad turvalisemana näivat etapiviisilist ettepanekut. Reaalsete optsioonide hindamine hinnastab paindlikkuse enda, nii et etapiviisilist ettepanekut saab õiglaselt võrrelda täieliku pühendumisega alternatiiviga, selle asemel et karistada selle eest, et see näib naiivsel nüüdisväärtuse real väiksem.

## Matemaatika

```
„Üles“-seisundi riskineutraalne tõenäosus:
  p = ((1 + riskivaba_intress) − allategur) / (ülestegur − allategur)

Laiendamise väljamakse igas seisundis (nulliga alt piiratud — laiendamine on valikuline):
  väljamakse_üles = max(projekti_väärtus × ülestegur − laiendamiskulu, 0)
  väljamakse_alla = max(projekti_väärtus × allategur − laiendamiskulu, 0)

Optsiooni väärtus (diskonteeritud oodatav väljamakse):
  optsiooni_väärtus = (p × väljamakse_üles + (1 − p) × väljamakse_alla) / (1 + riskivaba_intress)

Laiendatud NPV = staatiline_npv + optsiooni_väärtus
```

Projekti väärtus kas tõuseb (`ülestegur`) või langeb (`allategur`) järgmise otsuspunktini. Laiendamine teostatakse ainult siis, kui see on selles seisundis tulus — nulliga alt piiramine väljamaksel teebki sellest tõelise *optsiooni*, mitte kohustuse. Selle kohta, kuidas hinnata optsiooni koguda esmalt infot, mitte optsiooni laiendada hiljem, vaata [täiusliku info oodatavat väärtust](../täiusliku-info-oodatav-väärtus/). Selle otsusega ootamise kulu kohta vaata [viivituse kulu](../viivituse-kulu/).

## Lahendatud näide

Digiteenuse piloot, mille `projekti_väärtus = £1 000 000`, võimaliku tõusuga 1,5×-ni või langusega 0,5×-ni järgmise otsuspunktini, riskivaba intress 8% ja laiendamiskulu £600 000:

```
p = (1,08 − 0,5) / (1,5 − 0,5) = 0,58

väljamakse_üles = max(1 000 000 × 1,5 − 600 000, 0) =  900 000
väljamakse_alla = max(1 000 000 × 0,5 − 600 000, 0) = max(−100 000, 0) = 0

Alumine piir loeb: optsiooni EI teostataks, kui turg pettumuse valmistab —
laiendamiskulu £600 000 ületab £500 000, mida projekt „alla“-seisundis väärt oleks.

optsiooni_väärtus = (0,58 × 900 000 + 0,42 × 0) / 1,08
                  = 522 000 / 1,08
                  ≈ £483 333,33
```

Optsiooni väärtuse lisamisel staatilisele NPV baasile £200 000: laiendatud NPV = 200 000 + 483 333,33 ≈ **£683 333,33**. Ainult staatilise NPV £200 000 raporteerimine ilma selle optsiooni väärtuseta alahindaks etapiviisilise projekti tegelikku väärtust rohkem kui kahekordselt.

## Seos tarkvaraarendusega

See on „tarni nüüd minimaalne versioon, säilita optsioon edasi investeerida, kui see peale hakkab“ formaalne versioon — otseselt oluline digitaalse tervisetoote etapiviisilise kasutuselevõtu jaoks, struktuurselt paralleelne järjestamise raamistikuga ebakindluse all [viivituse kulus](../viivituse-kulu/) ja [WSJF/CD3-s](../wsjf-ja-cd3/) ning täiendav [täiusliku info oodatavale väärtusele](../täiusliku-info-oodatav-väärtus/) ja [valimiinfo oodatavale väärtusele](../valimiinfo-oodatav-väärtus/) — kõik kolm hinnastavad paindlikkust või infot ebakindluse all, erinevatest nurkadest.

## Lõksud

- **Riskineutraalse hinnastamise laenamine ilma kaubeldava vara eeldust, millele see tugineb**: reaalsete optsioonide mudelid laenavad riskineutraalse tõenäosuse finantsoptsioonide hinnastamisest, mis eeldab, et aluseks olev väärtus on *kaubeldav* vara — tõeliselt kaubeldamatu reaalse projekti puhul on see modelleerimismugavus, mitte sõna-sõnaline turufakt.
- **`ülestegur`/`allategur` käsitamine vabade parameetritena**: binoomi üles/alla sisendid on ise eeldused, mis vajavad põhjendust, mitte vabad parameetrid, mis valitakse soovitud vastuse saamiseks.
- **Ainult optsiooni väärtuse raporteerimine**: reaalse optsiooni väärtus on *liituv* eraldiseisva projekti staatilise NPV-ga — levinud viga on raporteerida ainult optsiooni väärtus ja jätta baasjuhtum välja, mis liialdab juhtumit, kui staatiline NPV on negatiivne, ja alahindab seda (nagu ülaltoodud lahendatud näites), kui staatiline NPV jäetakse täielikult välja.

## Allikad

- Cox JC, Ross SA, Rubinstein M. „Option pricing: a simplified approach.“ J Financ Econ. 1979;7(3):229-63.
- Trigeorgis L. *Real Options: Managerial Flexibility and Strategy in Resource Allocation*. MIT Press. 1996.
- Driffield T, Smith PC. „A real options approach to watchful waiting: theory and an illustration.“ Med Decis Making. 2007;27(2):178-88 — seob reaalsed optsioonid otse tervishoiumajandusliku otsuskontekstiga. <https://pubmed.ncbi.nlm.nih.gov/17395932/>
