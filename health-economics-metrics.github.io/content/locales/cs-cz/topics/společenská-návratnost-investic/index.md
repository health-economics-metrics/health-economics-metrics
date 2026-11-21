# Společenská návratnost investic (SROI)

SROI rozšiřuje [ROI](../návratnost-investic/) na výsledky, které trhy neoceňují – wellbeing, sociální vazby, dopad na životní prostředí – jejich monetizací pomocí finančních proxy pro *všechny* dotčené zainteresované strany.

## Proč na tom záleží

Velká část toho, co zdravotní a komunitní intervence vytvářejí, se nikdy nedotkne rozpočtové řádky: snížená osamělost, úleva pečovatelům, zisky v zaměstnanosti, důstojnost. SROI, řízená sedmi principy Social Value International (zapojit zainteresované strany, oceňovat, na čem záleží, nepřehánět, být transparentní, ověřovat…), vytváří výroky jako „3,20 £ společenské hodnoty na 1 £ investice“. Požadavky na společenskou hodnotu v britském veřejném zadávání činí důkazy ve stylu SROI komerčně relevantními: nabídky na veřejné zakázky (včetně NHS) získávají body za prokázanou společenskou hodnotu.

## Matematika

```
SROI ratio = PV(monetized social outcomes) / PV(investment)
For each outcome:
  value = quantity × financial proxy × attribution × (1 − deadweight) × (1 − displacement)
deadweight   = would have happened anyway
attribution  = share caused by others
displacement = benefit moved from elsewhere rather than created
drop-off     = decay of the outcome over years
```

Úpravné faktory jsou integritou metody: bez nich je SROI fikce s měnovým znakem.

## Řešený příklad

Aplikace pro „přátelství“ spojující izolované starší dospělé s dobrovolníky; náklady programu 200 000 £/rok; 1 500 aktivních dvojic.

```
Outcome: reduced loneliness for 1,500 people
  proxy: wellbeing valuation of "relief from loneliness" ≈ £1,800/person/yr
  deadweight 25% (some would have found connection anyway)
  attribution 80% (some credit to other services)
Value = 1,500 × 1,800 × 0.80 × 0.75 = £1,620,000
Outcome: reduced GP visits, 1,500 × 1.2 visits × £42 = £75,600 (payer-real)
SROI = (1,620,000 + 75,600) / 200,000 ≈ 8.5 : 1
```

Všimněte si, že poměr je z 96 % wellbeing oceněný proxy a ze 4 % tvrdá hotovost. To je legitimní SROI – ale musí být prezentováno jako společenská hodnota, nikdy nesmí naznačovat, že 1,7 mil. £ je zajistitelných.

## Souvislost se softwarovým inženýrstvím

SROI je poctivý rámec pro inženýrskou práci, jejíž příjemci jsou mimo platící tým: údržba open source, zlepšení přístupnosti, práce na platformě spotřebovávaná jinými týmy, investice do vývojářské komunity. Přenositelná mechanika: identifikujte všechny zainteresované strany, monetizujte uvedenými proxy a aplikujte slevy za deadweight/přičtení (stala by se ta oprava OSS tak jako tak? jak velká část zisku je vaše práce vs ekosystému?). Disciplína *slevování vlastních tvrzení o dopadu* je to, co odlišuje SROI od marketingového čísla.

## Úskalí

- **Nakupování proxy**: volba nejštědřejšího dostupného ocenění wellbeingu.
- **Přeskakování deadweight/přičtení** – nejčastější nafouknutí, často zdvojnásobující poměr.
- **Srovnávání poměrů napříč studiemi**: poměry SROI jsou citlivé na metodu; srovnávejte jen v rámci konzistentního rámce.
- **Prezentace společenské hodnoty jako zpeněžitelných úspor** držiteli rozpočtu.

## Zdroje

- Social Value International, Guide to SROI. <https://www.socialvalueint.org/guide-to-sroi>
- UK Government guide to SROI. <https://www.gov.uk/government/publications/a-guide-to-social-return-on-investment>
