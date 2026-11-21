# Analýza nákladů a důsledků (CCA)

CCA představuje náklady vedle **dezagregované tabulky všech výsledků** – klinických, provozních, zkušenostních – bez jejich sbalení do jediného poměru nebo skóre. Kompromisy výslovně váží ten, kdo rozhoduje.

## Proč na tom záleží

CCA je **preferovaný ekonomický formát NICE pro většinu technologií digitálního zdraví** podle Evidence Standards Framework. Digitální produkty vytvářejí heterogenní účinky (ušetřený čas, spokojenost, snížení DNA, malé klinické zisky), které odolávají poctivé agregaci do jednoho čísla QALY. Místo vynucování křehkého kompozitu ukazuje CCA celou účetní knihu. U většiny softwarových byznys případů je to nejpoctivější i nejpřesvědčivější formát, protože každý zainteresovaný najde svůj vlastní řádek důležitý pro rozhodnutí.

## Matematika

Záměrně neexistuje agregační vzorec. Výstupem je tabulka:

```
                          Intervention   Comparator   Difference
Costs (annual)            £X             £Y           ΔC
Outcome 1 (natural units) …              …            Δ1
Outcome 2                 …              …            Δ2
Qualitative outcomes      described, not scored
```

Každý řádek si ponechává vlastní jednotky. Pravidla: každý důsledek předem specifikován (žádné vybírání po výsledcích); po celou dobu stejná [perspektiva](../perspektiva-analýzy/) a [horizont](../časový-horizont/); nejistota na řádek.

## Řešený příklad

Digitální platforma předoperačního posouzení vs telefonický proces, ročně, jeden trust:

```
                              Digital      Phone       Difference
Running cost                  £180,000     £95,000     +£85,000
Nurse hours on assessments    6,200        11,800      −5,600 hrs
On-day surgery cancellations  92           174         −82
Patient satisfaction (CSAT)   4.5/5        3.9/5       +0.6
Assessments lost/incomplete   1.2%         4.8%        −3.6 pp
```

Žádné jediné skóre – ale rozhodnutí je snadné zdůvodnit: 85 000 £ koupí 5 600 sesterských hodin (≈ 15 £/hod, daleko pod jakýmikoli náklady na personál), 82 odvrácených zrušení (každé plýtvá operačním termínem v hodnotě ~1 200 £) a lepší zkušenost. Komise také přesně vidí, co *nedostává*: žádný tvrzený účinek na QALY nebo úmrtnost.

## Souvislost se softwarovým inženýrstvím

CCA je formální verze vyváženého scorecardu, který už dobrý návrh platformy používá: náklady vedle metrik DORA, skóre DevEx, počtů incidentů – neagregované. Disciplína z health economics, kterou přidat: **předem specifikujte řádky** (rozhodněte, co se počítá, před pilotem, abyste nemohli tiše vypustit metriku, která se zhoršila), a **ukazujte nepříznivé řádky** – CCA jen s dobrými zprávami je marketing. Používejte CCA, když neexistuje obhajitelný kompozit, což u vývojářských nástrojů je téměř vždy.

## Úskalí

- **Vybrané důsledky** – integrita formátu závisí na předběžné specifikaci.
- **Propašovaná agregace**: barevné kódování nebo „celková skóre“ znovu zavádějí svévolné váhy, kterým se CCA má vyhnout.
- **Paralýza rozhodování**: CCA potřebuje rozhodovatele ochotného vážit kompromisy; spárujte ji s doporučením a zdůvodněním.

## Zdroje

- NICE Evidence Standards Framework for digital health technologies (ECD7). <https://www.nice.org.uk/corporate/ecd7>
- ESF evidence standards tables. <https://www.nice.org.uk/corporate/ecd7/chapter/section-c-evidence-standards-tables>
