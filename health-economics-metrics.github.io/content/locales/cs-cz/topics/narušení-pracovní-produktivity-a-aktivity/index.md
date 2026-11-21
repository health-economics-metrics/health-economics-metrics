# Narušení pracovní produktivity a aktivity (WPAI)

WPAI je validovaný dotazník sebehodnocení (Reilly, Zbrozek, Dasbach, 1993) měřící, jak moc zdravotní problém ovlivňuje placenou práci a každodenní činnosti, obvykle za posledních 7 dnů. Rozděluje ztrátu na *absenci* – pracovní čas doslova zmeškaný – a *prezentismus* – sníženou produktivitu při fyzické přítomnosti v práci – přičemž to druhé je obvykle větší, skrytější nákladovou složkou.

## Proč na tom záleží

Prosté počty dnů nemoci vidí jen absenci. Klinik nebo znalostní pracovník, který si nikdy nevezme volno, ale pracuje na 60 % kapacity s chronickým onemocněním, přispívá do registru absencí nulou a přitom vytváří velkou, skutečnou ztrátu produktivity – WPAI je navržen právě k odhalení tohoto neviditelného nákladu. Protože jde o validovaný nástroj, nikoli o zakázkový průzkum, jeho skóre lze použít v balíčcích důkazů o [výsledcích hlášených pacienty](../výsledky-hlášené-pacienty/) a ve studiích nákladů nemoci, aniž by recenzent musel měření znovu validovat. Jako nástroj sebehodnocení je sám formou PROM, odlišenou hlavně zaměřením na práci a aktivitu spíše než na příznaky nebo kvalitu života.

## Matematika

```
Absenteeism % = hours_missed_due_to_health / (hours_missed_due_to_health + hours_worked) × 100
Presenteeism %  = self-rated 0–10 impairment while working, × 10
                  (elicited directly via questionnaire, not derived here)
Overall Work Impairment % =
    Absenteeism% + (1 − Absenteeism%/100) × Presenteeism%
    (combines the two so the total can never exceed 100%)
Productivity cost = Overall Work Impairment% / 100 × period_earnings
```

Vzorec celkového narušení záměrně není prostý součet: přímé sečtení obou procent by mohlo přesáhnout 100 %, takže prezentismus se aplikuje jen na *zbývající* (nepřítomný) podíl pracovního času.

## Řešený příklad

Zaměstnanec s migrénou uvádí, že je naplánován na 40hodinový týden, ale 4 hodiny z něj zmešká:

```
hours_missed = 4, hours_worked = 36
Absenteeism% = 4 / (4 + 36) × 100 = 10%
```

Samostatně si ohodnotí dopad na produktivitu při práci jako 3 z 10 v dotazníku WPAI, tj. `Presenteeism% = 30%` (tento krok je surová odpověď z dotazníku, nikoli něco odvozeného z jiných čísel):

```
Overall Work Impairment% = 10 + (1 − 10/100) × 30
                          = 10 + 0.9 × 30
                          = 10 + 27
                          = 37%
```

Při 5denním týdnu s výdělkem 800 £ (160 £/den):

```
Productivity cost = 37/100 × 800 = £296
```

Všimněte si, že naivní počet dnů nemoci by zaznamenal jen 4 zmeškané hodiny (10 %) – složka prezentismu skutečné narušení téměř ztrojnásobí, jakmile se započítá.

## Souvislost se softwarovým inženýrstvím

Promítá se přímo do metrik zdraví inženýrských týmů:

- **Absence** je nemocenská a dovolená – viditelná, už sledovaná a snadná část.
- **Prezentismus** je vyhořelý nebo přetížený přepínáním kontextu inženýr, který je přítomen na každém stand-upu, zatímco pracuje se sníženou kapacitou – obvykle větší a skrytější náklad, neviditelný v datech o počtu lidí či docházce. Projeví se místo toho jako snížená propustnost v [DORA](../metriky-dora/) a [metrikách toku](../metriky-toku/) nebo jako pomalejší řešení právě toho [technického dluhu](../technický-dluh/), jehož „úrok“ narušení dále skládá.
- Inženýrské poučení je stejné jako klinické: měřit jen absenci a nazývat to „ztrátou produktivity“ systematicky podhodnocuje skutečný náklad, protože míjí každého, kdo je přítomen, ale narušen.

## Úskalí

- **Zkreslení vzpomínkou při sebehodnocení.** Sedmidenní okno vzpomínky podléhá stejným zkreslením hlášení jako každé retrospektivní sebehodnocení.
- **Pojímání škály prezentismu 0–10 jako skutečného fyzického měření.** Je ordinální, zjišťovaná sebehodnocením, nikoli validovaná fyzikální veličina – zacházet s rozdíly na ní jako se striktně lineárními či intervalovými je modelovací pohodlí, nikoli validovaný fyzikální fakt.
- **Slučování skóre napříč variantami WPAI.** WPAI má několik verzí specifických pro stav – WPAI:GH (obecné zdraví), WPAI:SHP (specifický zdravotní problém) a varianty specifické pro nemoc – a skóre z různých variant by se nemělo slučovat ani srovnávat, aniž se ověří, že jde o tutéž verzi nástroje.

## Zdroje

- Reilly MC, Zbrozek AS, Dasbach EJ. "The validity and reproducibility of a work productivity and activity impairment instrument." PharmacoEconomics 1993;4(5):353-65.
- WPAI instrument documentation, Reilly Associates — the official scoring reference. <https://www.reillyassociates.net/>
