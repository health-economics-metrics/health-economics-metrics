# Lettyans Produktivita Ober ha Aktivita (WPAI)

WPAI yw govynnlyver hunnys-derivas validys (Reilly, Zbrozek, Dasbach, 1993) a vusur pygemmys a efekt kudyn yeghes war ober paydhys ha gwriansow pub dydh, yn kemmyn dres an 7 dydh diwettha. Hi a dhiberth an kollyans yn *absens* — termyn ober kellys yn gwir — ha *presens-lettys* — produktivita le ow bos yn ober yn korf — hag an nessa yw fenowgh an rann kost moy kudhys.

## Perag yth yw posek

Kontyans dydhyow kleves syml a wel absens yn unnik. Klinikyer po ober-kiaswas na gemmer dydh vyth dhe-ves mes a oberi orth 60% a gapasita dres kondysyon kronek a re nul dhe'n rol absens hogen ow kenertha kollyans produktivita gwir meur — WPAI yw dyghtys yn arbennik dhe dhiskudha an kost anwelys na. Drefen y vos ynstrument validys na ny yw sorvey a-dro, y skorow a yll bos devnydhys yn pakkow evydens [sewyans derivys klav](../sewyansow-derivys-gans-klav/) ha studhyansow kost-kleves heb othem dhe'n arvwyer dhe dhasvalidya an musur. Avel ynstrument hunnys-derivas, y honan yw furv a PROM, dyskrysys dre y fokus war ober ha gwriansow na war arwodhow po sawder-bewnans.

## An Matematik

```
Absens % = oursow_kellys_drefen_yeghes / (oursow_kellys_drefen_yeghes + oursow_oberys) × 100

Presens-lettys %  = lettyans hunnys-rateys 0–10 ow oberi, × 10
                    (dyskudhys yn dhirek dre govynnlyver, na ny yw dyrivys omma)

Lettyans Ober Ollrann % =
    Absens% + (1 − Absens%/100) × Presens-lettys%
    (a gesunn an dhew may na yll an hollow bos a-ugh 100%)

Kost produktivita = Lettyans Ober Ollrann% / 100 × gober_an_termyn
```

An furvel lettyans ollrann a ny yw sommyans syml yn avis: keworra an dhew gorranneth yn dhirek a yll tremena 100%, ytho presens-lettys a vo devnydhys yn unnik war an rann *gesys* (nag-absens) a dermyn ober.

## Ensampel gwrys

Gweythyer gans migraine a lever bos rolys rag seythun 40-our mes kelli 4 our anodho:

```
oursow_kellys = 4, oursow_oberys = 36
Absens% = 4 / (4 + 36) × 100 = 10%
```

Y hunnys-rata yn arbennik y efekt produktivita ow oberi dhe 3 a 10 war govynnlyver WPAI, hen yw `Presens-lettys% = 30%` (an kamm ma yw gorthyp pur a'n govynnlyver, na ny yw tra dyrivys dhort niverow erel):

```
Lettyans Ober Ollrann% = 10 + (1 − 10/100) × 30
                        = 10 + 0.9 × 30
                        = 10 + 27
                        = 37%
```

Dres seythun 5-dydh orth gober £800 (£160/dydh):

```
Kost produktivita = 37/100 × 800 = £296
```

Merkewgh bos kontyans naïv a dydhyow kleves a vensa notya 4 our yn unnik (10%) — an rann presens-lettys a dres teyr-gwyth an gwir lettyans pan vo kontys.

## Kolm gans ynjynnyans medhelweyth

Hemma a vap yn dhirek dhe vusurow yeghes skuadron ynjynnyans:

- **Absens** yw kampyans kleves ha PTO — gwelys, tracys kyns, ha an rann es.
- **Presens-lettys** yw an ynjynnyer skwith po gans re a strevya kontekst a yw present yn pub stand-up hogen ow oberi orth kapasita le — fenowgh an kost moy ha moy kudhys, ha anwelys dhe data niver-pennow po dewder-devedh. Y fydh gwelys yn le avel leha throughput yn [DORA](../metryks-dora/) ha [metryks lanwes](../metryks-lanwes/), po avel yagha kosk a'n [dalgh teknegel](../dalgh-teknegel/) mayth ynkress y "dheweth" an lettyans pelha.
- An dyskas ynjynnyans yw an keth avel an klinikel: musurya absens yn unnik ha'y hanwel "kollyans produktivita" a dhisprisya yn rewlys an gwir kost, drefen y gollo pubonan present mes lettys.

## Fowtys Kemmyn

- **Tebel-kov hunnys-derivas.** Fenester kov 7-dydh a'th eus an keth dhisplegyansow derivas avel pub hunnys-derivas a-dhelergh.
- **Dyghtya skala presens-lettys 0–10 avel musuryans korfel gwir.** Yth yw ordnal, dyskudhys dre hunnys-rata, na ny yw kevrenn korfel validys — dyghtya dyffransow warnodho avel linennek strik po intervallek yw sawder modell, na ny yw fakt korfel validys.
- **Kuntell skorow a-dreus gwariyansow WPAI.** WPAI a'th eus lies versyon kondysyon-spesyfek — WPAI:GH (yeghes kemmyn), WPAI:SHP (kudyn yeghes spesyfek), ha gwariyansow kleves-spesyfek — ha skorow dhort versyon dyffrans na dal bos kuntellys po keskomparys heb gwiriens kyns y hyns an keth versyon ynstrument.

## Fontynnow

- Reilly MC, Zbrozek AS, Dasbach EJ. "The validity and reproducibility of a work productivity and activity impairment instrument." PharmacoEconomics 1993;4(5):353-65.
- WPAI instrument documentation, Reilly Associates — the official scoring reference. <https://www.reillyassociates.net/>
