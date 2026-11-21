# Rámec standardů důkazů NICE (ESF)

ESF je rámec NICE specifikující, **kolik důkazů digitální zdravotnická technologie potřebuje, úměrně svému riziku**. Je to nejbližší oficiální odpověď na „co musíme prokázat, než NHS koupí naši aplikaci?“

## Proč na tom záleží

ESF (poprvé vydán 2019, aktualizován 2022 o AI a adaptivní algoritmy) klasifikuje digitální zdravotnické technologie do úrovní podle klinické funkce, s **kumulativními** standardy důkazů – 21 standardů v 5 skupinách (návrhové faktory, hodnota, výkon/účinnost, ekonomický dopad, nasazení):

```
Tier A — system services, no direct patient outcome (e.g., e-rostering)
         → basic standards: credibility, data protection, technical assurance
Tier B — inform, simple monitoring, communication (e.g., symptom diary)
         → + evidence of user benefit, appropriate reliability
Tier C — treat, diagnose, or actively guide clinical management
         → + high-quality comparative effectiveness evidence (ideally RCT)
           and economic analysis
```

Pro ekonomické důkazy je [analýza nákladů a důsledků](../analýza-nákladů-a-důsledků/) přijatelná pro většinu úrovní; [analýza nákladů a užitku](../analýza-nákladů-a-užitku/) se očekává u nejvyššího rizika. ESF definuje vaše **náklady na důkazy pro vstup na trh** – rozpočtujte je jako jakékoli jiné náklady na vývoj.

## Matematika

Žádné vzorce – rozhodovací tabulka. Operativním výpočtem je komerční:

```
Evidence investment required = f(tier)
  Tier A: documentation + assurance ≈ £10k–50k
  Tier B: observational/comparative user-benefit study ≈ £50k–250k
  Tier C: RCT-grade comparative study + economic model ≈ £250k–£2M+

Position your product's claims deliberately: claiming "supports clinical
decisions" instead of "informs patients" moves you a tier and can 10× the bill.
```

## Řešený příklad

Tvůrce aplikace s připomínkami léků zvažuje přidání funkce doporučení úpravy dávky.

- Jako aplikace s připomínkami: **úroveň B** – stačí kohortová studie ukazující zlepšení adherence.
- S doporučením dávky: **úroveň C** – důkazy o srovnávací účinnosti (pravděpodobně RCT proti obvyklé péči) plus ekonomická analýza.

Pokud RCT stojí 600 tis. £ a inkrementální příjem funkce dávek je 200 tis. £/rok, funkce musí držet hodnotu 3+ roky, než se náklady na důkazy vyrovnají – produktové rozhodnutí, které po ocenění úrovně ESF vypadá zcela jinak. Mnoho týmů dodá produkt úrovně B a tvrzení úrovně C odloží za financování.

## Souvislost se softwarovým inženýrstvím

ESF je nejpřenositelnější vzor správy v tomto repozitáři: **požadavky na důkazy odstupňované podle rizika pro přijetí nástrojů**. Interní verze: formátovač kódu potřebuje demo (úroveň A); nástroj produktivity tvrdící ušetřené hodiny potřebuje změřený pilot (úroveň B); brána AI, která automaticky blokuje nasazení nebo automaticky píše klinický kód, potřebuje důkazy na úrovni kontrolované studie před rozšířením napříč organizací (úroveň C). Úměrné důkazy zastaví oba způsoby selhání – byrokracii dusící triviální nástroje a pocity dodávající důsledné. Viz také [rychlá cesta DiGA](../rychlá-cesta-diga-v-německu/) jako doplněk „předběžné přijetí s termínem pro důkazy“.

## Úskalí

- **Chybná klasifikace úrovně zbožným přáním** – regulátoři a kupující klasifikují podle toho, co produkt *dělá*, nikoli podle marketingu.
- **Důkazy budované po produktu**: dodatečné vtlačení RCT na dodaný produkt bez instrumentace nebo equipoise je pomalé a často nemožné.
- **Splnění ESF a zapomenutí zbytku**: ESF stojí vedle DTAC (klinická bezpečnost, ochrana dat, interoperabilita) a u AI regulačního schválení – viz [regulační hodnocení AI](../regulační-hodnocení-ai/).

## Zdroje

- NICE Evidence Standards Framework (ECD7). <https://www.nice.org.uk/corporate/ecd7>
- ESF evidence standards tables. <https://www.nice.org.uk/corporate/ecd7/chapter/section-c-evidence-standards-tables>
