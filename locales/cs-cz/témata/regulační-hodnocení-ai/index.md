# Regulační hodnocení AI

Regulační rámce, které řídí AI ve zdravotní péči – režim FDA pro software jako zdravotnický prostředek (SaMD) s **plány předem stanovené kontroly změn (PCCP)** a programy hodnocení v reálném provozu, jako je NHS AI in Health and Care Award – a to, co ekonomicky stojí a umožňují.

## Proč na tom záleží

Regulace určuje jak **náklady na důkazy pro vstup na trh**, tak **náklady každé další aktualizace modelu** – u produktů AI je to druhé často důležitější. Tradiční režim FDA (model zamknout; při změnách znovu schvalovat) dělal kontinuální zlepšování ekonomicky brutálním. **Pokyn k PCCP (finalizovaný v prosinci 2024)** ekonomiku změnil: výrobce může předem autorizovat *specifikované* budoucí aktualizace modelu – popis plánovaných úprav, protokol úprav (jak bude každá validována) a posouzení dopadu – takže schválená zlepšení se nasazují bez nového podání. FDA autorizovala přes 1 000 prostředků s AI; FDA nyní také zkoumá monitorování výkonu v reálném provozu (předem stanovené metriky: základní míry FP/FN, drift kalibrace, indikátory posunu domény).

## Matematika

PCCP je ekonomika [doby realizace DORA](../metriky-dora/) aplikovaná na regulované modely:

```
Cost per model update (traditional) = re-submission cost + review delay × CoD
Cost per model update (PCCP-scoped) = protocol-execution cost only

Update economics over a product life:
  N updates × (submission cost + months of review × cost-of-delay per month)
  vs one-time PCCP authoring cost + N × protocol executions
```

U vzoru NHS AI Award je sada metrik širší než přesnost: nezávislá hodnocení v reálném provozu posuzují klinický výkon, vlivy na pracovní postup/implementaci a ekonomický dopad – zinstitucionalizovaný celý řetězec [účinnost → efektivita → nákladová efektivita](../produktivita-vývojářů-s-ai/).

## Řešený příklad

Dodavatel radiologické AI plánuje čtvrtletní vylepšení modelu po 3 roky (12 aktualizací):

```
Traditional: 12 × (£80k submission + 4 months × £50k/month delayed-benefit CoD)
           = 12 × £280k = £3.36M
PCCP route:  £250k PCCP authoring + 12 × £30k protocol execution = £610k
Saving ≈ £2.75M — and patients receive each improvement ~4 months sooner:
12 × 4 months × the update's clinical benefit, a QALY line in its own right.
```

PCCP je regulační uznání, že **frekvence nasazení má klinickou hodnotu** – hlavní kauzální řetězec tohoto repozitáře schválený regulátorem.

## Souvislost se softwarovým inženýrstvím

Dobře vytvořit PCCP je softwarový problém: předem specifikované vyhodnocovací sady, verzované datasety, automatizované validační pipeline, monitorování driftu – regulovaný příbuzný kontinuálního nasazování, kde „bránou nasazení“ je validovaný protokol místo revize kódu. Týmy se zralou vyhodnocovací infrastrukturou ([metriky kvality AI](../metriky-kvality-ai/)) získají PCCP levně; týmy bez ní zjistí, že regulační omezení je ve skutečnosti omezení inženýrské vyspělosti. U produktů vstupujících do NHS je paralelním balíkem DTAC (klinická bezpečnost, ochrana dat, interoperabilita) plus úrovně důkazů [NICE ESF](../rámec-standardů-důkazů-nice/) – všechno rozpočtujte jako [TCO](../celkové-náklady-vlastnictví/) vstupu na trh.

## Úskalí

- **Sny o rozšiřování PCCP**: předem autorizované jsou jen *specifikované* typy úprav; změny architektury nebo nová zamýšlená použití stále vyžadují úplné posouzení.
- **Nemonitorovaný drift v reálném provozu**: autorizace při výkonu při spuštění + tichý drift populace = produkt fungující mimo schválenou obálku; monitorování je zároveň regulační očekávání i sebeobrana.
- **Zaměňování schválení s hodnotou**: schválení FDA/UKCA ≠ někdo zaplatí – to je překážka [HTA](../hodnocení-zdravotnických-technologií/), která se řeší zvlášť.

## Zdroje

- FDA, AI-enabled device software / SaMD. <https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-software-medical-device>
- PCCP implementation guidance analysis. <https://intuitionlabs.ai/articles/fda-pccp-implementation-guide-ai-ml-samd>
- NHS England, lessons from AI in Health and Care Award real-world evaluations. <https://www.england.nhs.uk/long-read/planning-and-implementing-real-world-ai-evaluations-lessons-from-the-ai-in-health-and-care-award/>
