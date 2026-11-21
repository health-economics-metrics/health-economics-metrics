# NICE bizonyítékszabványi keretrendszer (ESF)

Az ESF a NICE keretrendszere, amely meghatározza, **mennyi bizonyítékra van szüksége egy digitális egészségügyi technológiának, a kockázatával arányosan**. Ez a legközelebbi dolog egy hivatalos válaszhoz arra a kérdésre, hogy „mit kell bizonyítanunk, mielőtt az NHS megveszi az alkalmazásunkat?"

## Miért fontos

Az ESF (először 2019-ben jelent meg, 2022-ben frissítették az MI-re és az adaptív algoritmusokra) a digitális egészségügyi technológiákat klinikai funkció szerint szintekbe sorolja, **kumulatív** bizonyítékszabványokkal — 21 szabvány 5 csoportban (tervezési tényezők, érték, teljesítmény/hatásosság, gazdasági hatás, bevezetés):

```
Tier A — system services, no direct patient outcome (e.g., e-rostering)
         → basic standards: credibility, data protection, technical assurance
Tier B — inform, simple monitoring, communication (e.g., symptom diary)
         → + evidence of user benefit, appropriate reliability
Tier C — treat, diagnose, or actively guide clinical management
         → + high-quality comparative effectiveness evidence (ideally RCT)
           and economic analysis
```

A gazdasági bizonyítékhoz a [költség-következmény elemzés](../költség-következmény-elemzés/) a legtöbb szinten elfogadható; a [költség-hasznosság elemzés](../költség-hasznosság-elemzés/) a legmagasabb kockázatnál várt. Az ESF határozza meg a **piacra lépés bizonyítékköltségét** — költségvetésezd úgy, mint bármely más fejlesztési költséget.

## A matematika

Nincsenek képletek — döntési táblázat. A működő számítás kereskedelmi:

```
Evidence investment required = f(tier)
  Tier A: documentation + assurance ≈ £10k–50k
  Tier B: observational/comparative user-benefit study ≈ £50k–250k
  Tier C: RCT-grade comparative study + economic model ≈ £250k–£2M+

Position your product's claims deliberately: claiming "supports clinical
decisions" instead of "informs patients" moves you a tier and can 10× the bill.
```

## Kidolgozott példa

Egy gyógyszeremlékeztető alkalmazás készítője egy adagolás-módosítási javaslat funkció hozzáadását fontolgatja.

- Emlékeztető alkalmazásként: **B szint** — az adherencia javulását mutató kohorszvizsgálat elég.
- Adagolási javaslatokkal: **C szint** — összehasonlító hatásossági bizonyíték (valószínűleg RCT a szokásos ellátással szemben) plusz gazdasági elemzés.

Ha az RCT 600 ezer £-ba kerül, és az adagolási funkció inkrementális bevétele 200 ezer £/év, a funkciónak 3+ évig meg kell tartania az értékét, mielőtt a bizonyítékköltségek megtérülnek — termékdöntés, amely egészen másként néz ki, ha az ESF-szint árazott. Sok csapat a B szintű terméket szállítja, és a C szintű állítást a finanszírozás mögé szakaszolja.

## Kapcsolat a szoftverfejlesztéssel

Az ESF a legátvihetőbb irányítási minta ebben a repóban: **kockázati szintek szerinti bizonyítékkövetelmények az eszközbevezetéshez**. Belső változat: egy kódformázónak demó kell (A szint); az órákat megtakarítást állító termelékenységi eszköznek mért kísérleti projekt (B szint); egy MI-kapu, amely automatikusan blokkolja a telepítéseket vagy automatikusan ír klinikai kódot, kontrollált vizsgálat szintű bizonyítékot igényel a szervezetszintű bevezetés előtt (C szint). Az arányos bizonyíték mindkét hibamódot megállítja — a triviális eszközöket fojtogató bürokráciát és a következményes eszközöket szállító hangulatot. Lásd még [DiGA gyorsított eljárás](../németország-diga-gyorsított-eljárása/) a „ideiglenes bevezetés bizonyítási határidővel" kiegészítéséhez.

## Buktatók

- **Szint-félreosztályozás vágyvezérelt gondolkodással** — a szabályozók és vevők aszerint osztályoznak, amit a termék *csinál*, nem amit a marketing mond.
- **A termék után épített bizonyíték**: egy RCT utólagos ráillesztése egy kiszállított termékre műszerezés vagy ekvipoiz nélkül lassú és gyakran lehetetlen.
- **Az ESF teljesítése és a többi elfelejtése**: az ESF a DTAC (klinikai biztonság, adatvédelem, interoperabilitás) mellett áll, és MI esetén a szabályozói engedély mellett — lásd [MI szabályozási értékelése](../mi-szabályozási-értékelése/).

## Források

- NICE Evidence Standards Framework (ECD7). <https://www.nice.org.uk/corporate/ecd7>
- ESF evidence standards tables. <https://www.nice.org.uk/corporate/ecd7/chapter/section-c-evidence-standards-tables>
