# Társadalmi megtérülés (SROI)

Az SROI kiterjeszti a [ROI](../befektetés-megtérülése/)-t olyan kimenetekre, amelyeket a piacok nem árazanak — jólét, társas kapcsolat, környezeti hatás — pénzügyi helyettesítő értékekkel pénzzé téve őket, *minden* érintett érdekelt számára.

## Miért fontos

Amit az egészségügyi és közösségi beavatkozások létrehoznak, annak nagy része soha nem érint költségvetési sort: kevesebb magány, gondozói tehermentesítés, foglalkoztatási nyereségek, méltóság. Az SROI, amelyet a Social Value International hét alapelve irányít (vond be az érdekelteket, azt értékeld, ami számít, ne állíts túl, légy átlátható, ellenőrizz…), olyan állításokat hoz létre, mint „1 £ befektetésre 3,20 £ társadalmi érték". Az egyesült királyságbeli közbeszerzés társadalmiérték-követelményei kereskedelmileg relevánssá teszik az SROI-stílusú bizonyítékot: a közszerződésekre (az NHS-ét is beleértve) benyújtott pályázatok pontot kapnak a bizonyított társadalmi értékért.

## A matematika

```
SROI ratio = PV(monetized social outcomes) / PV(investment)

For each outcome:
  value = quantity × financial proxy × attribution × (1 − deadweight) × (1 − displacement)

deadweight   = would have happened anyway
attribution  = share caused by others
displacement = benefit moved from elsewhere rather than created
drop-off     = decay of the outcome over years
```

A korrekciós tényezők a módszer integritása: nélkülük az SROI pénznemjellel ellátott fikció.

## Kidolgozott példa

Egy barátkozó alkalmazás, amely elszigetelt időseket önkéntesekkel köt össze; a program költsége évi 200 000 £; 1500 aktív pár.

```
Outcome: reduced loneliness for 1,500 people
  proxy: wellbeing valuation of "relief from loneliness" ≈ £1,800/person/yr
  deadweight 25% (some would have found connection anyway)
  attribution 80% (some credit to other services)

Value = 1,500 × 1,800 × 0.80 × 0.75 = £1,620,000

Outcome: reduced GP visits, 1,500 × 1.2 visits × £42 = £75,600 (payer-real)

SROI = (1,620,000 + 75,600) / 200,000 ≈ 8.5 : 1
```

Figyeld meg, hogy az arány 96%-ban helyettesítő értékű jólét és 4%-ban kemény készpénz. Ez jogos SROI — de társadalmi értékként kell bemutatni, soha nem szabad azt sugallnia, hogy 1,7 M£ felhasználható.

## Kapcsolat a szoftverfejlesztéssel

Az SROI az őszinte keretrendszer olyan mérnöki munkához, amelynek haszonélvezői a fizető csapaton kívül vannak: nyílt forráskódú karbantartás, akadálymentesítési javítások, más csapatok által fogyasztott platformmunka, fejlesztői közösségi befektetés. Az átvihető mechanika: azonosítsd az összes érdekeltet, pénzzé tedd kimondott helyettesítő értékekkel, és alkalmazz holtteher/tulajdonítási diszkontokat (megtörtént volna az az OSS-javítás úgyis? a nyereség mekkora része a te munkád, és mekkora az ökoszisztémáé?). A *saját hatásállításaid diszkontálásának* fegyelme választja el az SROI-t a marketingszámtól.

## Buktatók

- **Helyettesítő érték vásárlás**: a rendelkezésre álló legbőkezűbb jólét-értékelés kiválasztása.
- **A holtteher/tulajdonítás kihagyása** — a leggyakoribb felfújás, gyakran megduplázza az arányt.
- **Arányok összehasonlítása vizsgálatok között**: az SROI-arányok módszerérzékenyek; csak egy következetes keretrendszeren belül hasonlíts.
- **A társadalmi érték bemutatása felhasználható megtakarításként** egy költségvetés-felelősnek.

## Források

- Social Value International, Guide to SROI. <https://www.socialvalueint.org/guide-to-sroi>
- UK Government guide to SROI. <https://www.gov.uk/government/publications/a-guide-to-social-return-on-investment>
