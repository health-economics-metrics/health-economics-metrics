# Inkrementalni omjer isplativosti (ICER)

ICER je dodatni trošak po dodatnoj jedinici zdravstvenog učinka kad odaberete jednu opciju umjesto sljedeće najbolje alternative. To je naslovni broj procjene zdravstvenih tehnologija. (Kad je jedinica učinka QALY, naziva se i inkrementalni omjer troška i korisnosti, ICUR.)

## Zašto je važno

Zdravstveni sustavi nikad ne procjenjuju tehnologiju izolirano — uvijek *inkrementalno*, u odnosu na ono što bi se inače radilo. NICE uspoređuje ICER tehnologije sa svojim pragom **20.000–30.000 £ po QALY-ju**; američki institut ICER izvješćuje u rasponu 50.000–200.000 $/QALY; Kanada radi s otprilike 50.000 CAD$/QALY. Je li vaš proizvod „vrijedan toga” za nacionalnu zdravstvenu službu formalno je pitanje prelazi li njegov ICER lokalni prag. Vidi [pragove spremnosti na plaćanje](../pragovi-spremnosti-na-plaćanje/).

## Matematika

```
ICER = (Cost_new − Cost_comparator) / (Effect_new − Effect_comparator)
     = ΔC / ΔE
```

Pravila tumačenja:

- ΔC < 0, ΔE > 0: nova opcija **dominira** — jeftinija i bolja; omjer nije potreban.
- ΔC > 0, ΔE > 0: izračunajte ICER, usporedite s pragom λ; usvojite ako je ICER < λ.
- ΔC > 0, ΔE < 0: nova opcija je dominirana — odbacite.
- Omjeri se loše ponašaju blizu ΔE = 0 — za rangiranje radije koristite [neto novčanu korist](../neto-novčana-korist/).

Komparator mora biti *sljedeća najbolja nedominirana opcija*, a ne „ne raditi ništa” — vidi [dominaciju i granicu učinkovitosti](../dominacija-i-granica-učinkovitosti/).

## Riješeni primjer

Usluga daljinskog praćenja bolesnika sa zatajenjem srca, na 1.000 pacijenata godišnje, naspram uobičajene skrbi:

```
Troškovi: usluga £900,000; izbjegnuti prijmovi štede £600,000
          ΔC = 900,000 − 600,000 = £300,000
Učinci:   raniji zahvat daje 25 QALY-ja
          ΔE = 25

ICER = 300,000 / 25 = £12,000 po QALY-ju
```

12.000 £/QALY je znatno ispod NICE-ova praga od 20.000 £ — snažan slučaj. Primijetite koliko je važan *neto* trošak: bez odbitka od 600.000 £ ICER bi bio 36.000 £/QALY i slučaj bi vjerojatno propao. Odbici troškova i kvaliteta dokaza za njih mjesto su gdje se ove analize dobivaju i gube (vidi [izbjegnute nizvodne troškove](../izbjegnuti-nizvodni-troškovi/)).

## Veza sa softverskim inženjerstvom

Disciplina ICER-a prenosi se u cijelosti na inženjerske odluke:

```
(trošak opcije B − trošak opcije A) / (ishod B − ishod A)
```

— inkrementalni trošak po dodatnom puštanju u rad, po ušteđenom inženjerskom satu, po izbjegnutom incidentu — uvijek u odnosu na sljedeću najbolju alternativu, a ne u odnosu na ne raditi ništa. Dvije navike vrijedne krađe: (1) *izričito imenujte komparator*; većina tvrdnji o ROI-ju alata potajno uspoređuje sa slamnatom lutkom; (2) *prvo netirajte troškove* — alat koji košta 100 tis. £, a istiskuje 80 tis. £ postojeće potrošnje, ima ΔC = 20 tis. £.

## Zamke

- **Uspoređivanje ICER-a među valutama bez izričitog koraka pretvorbe**: ICER izračunan u valuti jedne zemlje mora se pretvoriti navedenom metodom prije usporedbe s pragom druge zemlje — vidi [usporedbu ICER-a među valutama](../usporedba-icer-a-među-valutama/) o tome zašto sam izbor faktora pretvorbe (pariteta kupovne moći naspram tržišnog tečaja) može preokrenuti odluku o usvajanju.
- **Namještanje komparatora**: usporedba sa zastarjelom ili umjetno lošom osnovnom linijom napuhuje ΔE i laska ICER-u.
- **Prosjeci umjesto prirasta**: trošak po QALY-ju cijelog programa nije ICER njegova proširenja ili usvajanja.
- **Štovanje točkovne procjene**: ICER-ovi su omjeri dviju neizvjesnih razlika; iskažite neizvjesnost putem [PSA i CEAC-ova](../probabilistička-analiza-osjetljivosti/).
- **Negativni ICER-ovi su dvosmisleni** (jeftinije-i-bolje i skuplje-i-gore daju isti predznak) — nikad ne iskazujte negativan ICER bez navođenja kojem kvadrantu pripada.

## Izvori

- NICE: cost-effectiveness thresholds FAQ. <https://www.nice.org.uk/what-nice-does/faqs/changes-to-nice-s-cost-effectiveness-thresholds>
- ICER 2023 Value Assessment Framework. <https://icer.org/wp-content/uploads/2023/09/ICER_2023_VAF_For-Publication_092523.pdf>
- York Health Economics Consortium glossary: ICER. <https://yhec.co.uk/glossary/incremental-cost-effectiveness-ratio-icer/>
