# Analýza citlivosti

Deterministická analýza citlivosti (DSA) mění jeden předpoklad po druhém napříč věrohodným rozsahem, aby se zjistilo, zda závěr přežije. Standardní vizualizací je tornádový diagram: parametry seřazené podle toho, jak moc výsledek rozkývají.

## Proč na tom záleží

Každý ekonomický model stojí na odhadech – ušetřený čas, přijetí, jednotkové náklady. Hodnocení zdravotnických technologií odmítá přijmout bodový odhad („ROI je 340 %“) bez důkazu, že závěr je odolný vůči rozumné neshodě o vstupech. Tornádový diagram říká rozhodovateli, *který předpoklad vyslechnout*: pokud případ funguje jen tehdy, když je nejspornější parametr na optimistickém konci, všichni to okamžitě vidí.

Je to nejpřenositelnější návyk z health economics do softwarových byznys případů.

## Matematika

Pro každý parametr p s věrohodným rozsahem [p_low, p_high]:

```
Result_low  = model(p = p_low,  all others at base case)
Result_high = model(p = p_high, all others at base case)
Swing(p)    = |Result_high − Result_low|
```

Seřaďte parametry podle rozkyvu; vykreslete vodorovné pruhy kolem výsledku základního případu. Varianty: dvoucestná DSA (měňte dva parametry na mřížce), prahová analýza (najděte hodnotu parametru, kde se rozhodnutí převrací).

## Řešený příklad

Asistent AI pro programování pro 200 vývojářů. Základní případ: licence 39 £/vývojáře/měsíc; ušetřeno 30 min/vývojáře/den; plné náklady 60 £/hodinu; 220 pracovních dnů.

```
Base-case annual benefit = 200 × 0.5h × 220 × £60 = £1,320,000
Annual cost              = 200 × £39 × 12         = £93,600
Base-case net            = £1,226,400
```

Tornádo (jeden parametr po druhém):

```
Time saved 0.1–1.0 h/day: net = £170,400 … £2,546,400   (swing £2.38M) ← dominates
Loaded cost £40–£80/h:    net = £786,400 … £1,666,400   (swing £0.88M)
Working days 200–240:     net = £1,106,400 … £1,346,400 (swing £0.24M)
Licence £30–£50/mo:       net = £1,248,000 … £1,200,000 (swing £48k)
```

Prahová analýza: čistý přínos dosáhne nuly při ušetřených asi **2,1 minutách/den**. Rozhodnutí je necitlivé na cenu licence a závisí výhradně na odhadu ušetřeného času – takže měřte to, ne zbytek. (A pamatujte, že výsledkem je kapacita, nikoli hotovost – viz [uvolňující vs neuvolňující hotovost](../úspory-uvolňující-hotovost-vs-neuvolňující-hotovost/).)

## Souvislost se softwarovým inženýrstvím

Inženýři to už dělají instinktivně jako „co když se mýlíme v X?“ – DSA to jen činí systematickým a viditelným. Vložte tornádový diagram do každého návrhu nástrojů, kapacitního plánu a analýzy vyrobit-vs-koupit. Mění spory o tom, čí pocit je správný, na dohody o tom, který parametr jít změřit – často prostřednictvím pilotu, jehož hodnotu lze sama ocenit (viz [očekávaná hodnota perfektní informace](../očekávaná-hodnota-perfektní-informace/)).

## Úskalí

- **Rozsahy zvolené pro lichotku**: ±10 % kolem každého vstupu bez ohledu na skutečnou nejistotu. Odhady ušetřeného času zaslouží ±80 %; ceny licencí ±10 %.
- **Jeden po druhém míjí interakce** – korelované parametry (přijetí a ušetřený čas) potřebují dvoucestnou analýzu nebo plnou [pravděpodobnostní analýzu citlivosti](../pravděpodobnostní-analýza-citlivosti/).
- **Provést analýzu a ignorovat ji**: pokud tornádo říká, že případ závisí na jednom měkkém čísle, dalším krokem je měření, nikoli schválení.

## Zdroje

- York Health Economics Consortium glossary: deterministic sensitivity analysis. <https://yhec.co.uk/glossary/deterministic-sensitivity-analysis/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
