# Udržení a odchod uživatelů

Udržení (retention) měří, jaký zlomek kohorty uživatelů je stále aktivní N dní po zahájení (křivky D1/D7/D30); odchod (churn) je jeho doplněk. Brutální výchozí stav digitálního zdraví: **zhruba 90 % uživatelů zdravotních aplikací odejde do 30 dnů** – retence D30 v digitálním zdraví činí ~3–4 % oproti průměru všech aplikací ~6 %.

## Proč na tom záleží

Eysenbach to pojmenoval v roce 2005: **zákon úbytku (law of attrition)** – ztráta uživatelů ve vysokém tempu je vnitřní, strukturální vlastnost intervencí eHealth, nikoli implementační chyba, přičemž úbytek ve studiích eHealth běžně přesahuje 50 %. Ekonomický důsledek je totální: udržení definuje *léčebné okno*, v němž lze doručit jakýkoli přínos, a [jednotková ekonomika](../jednotková-ekonomika-zdravotních-aplikací/) – CAC zaplacené za uživatele, který zůstane 12 dní, nedoručí ani LTV, ani QALY. Každý ekonomický model spotřebního zdravotního produktu, který neváží přínosy křivkou udržení, popisuje produkt, který neexistuje.

## Matematika

```
Retention_Dn = users active on day n / cohort size × 100
Churn rate   = users lost in period / users at period start × 100
Benefit weighting (the health-economics move):
  expected benefit per acquired user = Σ_t retention(t) × benefit rate(t)
  ≈ area under the retention curve × per-time benefit
  — NOT trial benefit × 100% of acquired users
Cost per retained-at-D30 user = CAC / D30 retention
  (at 4% D30, a £5 CAC is really £125 per retained user)
```

## Řešený příklad

Aplikace pro duševní zdraví: studie ukázala 0,02 získaného QALY na uživatele dokončujícího 8 týdnů. Nasazovací kohorta 100 000 stažení, retence D7 25 %, D30 8 %, 8. týden 4 %:

```
Completers          = 100,000 × 0.04 = 4,000
QALYs delivered     = 4,000 × 0.02 = 80  (not 100,000 × 0.02 = 2,000)
At £20,000/QALY     = £1.6M of health value (not £40M)
Per-download health value = £16 — the number that should set what a
payer will pay per download, and it is 4% of the naive claim.
Retention improvement case: moving week-8 completion 4% → 6% adds
40 QALYs/year ≈ £800k — retention engineering IS health production.
```

## Souvislost se softwarovým inženýrstvím

Udržení je metrika, kde produktové inženýrství nejpřímo vyrábí zdravotní hodnotu, podle aritmetiky výše. Postupy, které s ním hýbou, jsou obyčejné: čas do první hodnoty při onboardingu, návrh opětovného zapojení, výkon a zásadně **plánované dokončení dávky** – program s definovaným koncem (8 týdnů, pak absolvování) by měl měřit *dokončení*, nikoli věčné DAU, sladit metriku s klinickým modelem místo s reklamou financovaným modelem pozornosti. Správným nástrojem je analýza přežití (táž matematika Kaplana–Meiera jako u [získaných let života](../získané-roky-života/)); segmentujte křivky podle akvizičního kanálu, protože mix kanálů mění udržení víc než většina funkcí.

## Úskalí

- **Praní intention-to-treat naruby**: studie vykazují ty, kdo dokončili; ekonomika nasazení musí počítat všechny získané (hlavní varování Eysenbacha).
- **Divadlo udržení**: „aktivní“ uživatelé řízení notifikacemi, kteří nikdy neprovedou terapeutickou akci (viz [metriky zapojení](../metriky-zapojení/)).
- **Srovnávání křivek napříč definicemi**: „aktivní“ definované jako otevření vs smysluplná akce posouvá D30 o násobky.
- **Ignorování toho, kdo odchází**: pokud nejnemocnější odcházejí nejrychleji, přínosy na uživatele klesají, jak se zlepšuje udržení mezi zdravými – spárujte křivky s případovým mixem (viz [dosah a rovnost](../dosah-a-rovnost/)).

## Zdroje

- Eysenbach G. "The law of attrition." JMIR 2005;7(1):e11. <https://www.jmir.org/2005/1/e11/>
- Mobile app retention benchmarks. <https://uxcam.com/blog/mobile-app-retention-benchmarks/>
- Healthcare product benchmarks. <https://userpilot.com/blog/healthcare-product-metrics-benchmark-report/>
