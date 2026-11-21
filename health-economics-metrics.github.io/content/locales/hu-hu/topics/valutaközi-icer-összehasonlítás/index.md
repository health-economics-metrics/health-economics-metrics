# Valutaközi ICER-összehasonlítás

Az egyik ország pénznemében számított [ICER](../inkrementális-költséghatékonysági-mutató/) összehasonlítása egy másik ország [fizetési hajlandósági küszöbével](../fizetési-hajlandósági-küszöbök/) — vagy egy multinacionális vizsgálatban gyűjtött költségadatok összevonása — kifejezett, auditálható valutaátváltási lépést igényel. Ha az átváltási módszer téves, ugyanaz az alapul szolgáló bizonyíték megfordíthat egy bevezetési döntést, noha a klinikai vagy költségadatokban semmi sem változott.

## Miért fontos

Az ISPOR multinacionális klinikai vizsgálatokra vonatkozó módszertani útmutatója (Willke és mtsai, *Health Economics*, 1998) azt javasolja, hogy az erőforrásköltségeket **vásárlóerő-paritással (PPP)** váltsák át — nem piaci árfolyamokkal — az erőforrások valódi gazdasági értékének országok közötti összehasonlításakor, a piaci devizaárfolyamokat pedig arra tartsák fenn, amire valók: valós határokon átnyúló készpénzfizetési áramlások modellezésére. A kettő összekeverése az egyik leggyakoribb multinacionális HTA módszertani hiba, éppen mert mindkettő „az árfolyamnak" látszik annak, aki nem olvasta az útmutatót, és a táblázatkezelő nem akadályozza meg a hibás megoldást.

## A matematika

```
icer_in_local_currency = convert(icer_in_source_currency, conversion_factor)

conversion_factor should be:
  PPP conversion factor  — for comparing real economic value of resources
                            across countries (ISPOR-recommended for
                            multinational CEA)
  market FX rate         — only for actual cross-border cash payments

adopt if icer_in_local_currency < local_threshold
```

Maga a döntési szabály a szokásos [ICER-küszöbszabály](../fizetési-hajlandósági-küszöbök/) — `adopt if ICER < λ` —, a téma által megválaszolt módszertani kérdés teljes egészében arról szól, hogy *melyik átváltási tényező* állítja elő azt az `icer_in_local_currency` számot, amelyre a szabályt alkalmazzák.

## Kidolgozott példa

Egy gyógyszer ICER-je egy amerikai vizsgálatból 45 000 $/QALY. Egy hipotetikus importáló ország a saját szemléltető küszöbét 34 000 £/QALY-nél állapítja meg (kizárólag ehhez a példához hipotetikus országspecifikus szám — a valódi küszöbök országonként eltérnek és idővel változnak, és mindig forrásmegjelöléssel és keltezéssel kell megadni őket).

**0,72-es PPP-átváltási tényezővel** (szemléltető, csak ehhez a kidolgozott példához): 45 000 $ × 0,72 = 32 400 £/QALY. 32 400 £ < 34 000 £ → **elfogadás**.

**0,79-es piaci árfolyammal** helyette (szemléltető): 45 000 $ × 0,79 = 35 550 £/QALY. 35 550 £ > 34 000 £ → **elutasítás**.

Ugyanaz az alapul szolgáló 45 000 $/QALY ICER elfogadó döntést ad PPP-átváltással és elutasítót piaci devizaárfolyam-átváltással. Ez a konkrét szemléltetése annak, miért kezeli az ISPOR-útmutató az átváltási tényező megválasztását módszertanilag következményesnek — nem kerekítési részlet, és nem olyasmi, amit hallgatólagosan egy táblázati képletben hagyunk, amelyet senki nem ellenőriz újra.

## Kapcsolat a szoftverfejlesztéssel

Ez egy jól ismert mérnöki terület egészséggazdaságtani tükörképe: a kereskedelmi szoftverek i18n/l10n többvalutás árazási helyessége, ahol egy SaaS-árazási oldal soha nem hasonlíthat csendben egy `$`-összeget egy `£`-árhoz. A típusszintű garancia, amelyet egy jól megépített `Money` típus nyújt — összehasonlító metódusok, amelyek megtagadják az eltérő pénznemek összehasonlítását, kikényszerítve előbb a kifejezett átváltási lépést — közvetlen szoftvermérnöki párhuzama az itteni egészséggazdasági módszertani pontnak: ne hasonlíts át nem váltott számokat pénznemek között, és ne hagyd az átváltási lépést hallgatólagosnak vagy dokumentálatlannak.

## Buktatók

- **Eltérő pénznemű összegek csendes összehasonlítása**: ad hoc táblázatos HTA-munka, amely dollár- és fontszámot von ki vagy hasonlít össze átváltási lépés nélkül — egy hibaosztály, amelyet egy valódi pénznem-tudatos `Money` típus konstrukcióból elkap, ahelyett hogy csendes hibaként hagyná.
- **A piaci árfolyam és a PPP összekeverése**: az ISPOR-útmutató szerint a leggyakoribb multinacionális HTA-módszertani hiba — a két szám lényegesen eltérhet, és különböző kérdésekre válaszol (valódi gazdasági érték és tényleges pénzáramlás).
- **A használt árfolyam vagy PPP-index keltezésének hiánya**: mindkettő időben mozog, ezért minden idézett átváltási tényezőt ugyanúgy kell keltezni, ahogy ez a repó a többi viszonyítási adatát keltezi (Green Book szén-dioxid-értékek, megelőzött haláleset értéke stb.).

## Források

- Willke RJ, Glick HA, Polsky D, Schulman K. "Estimating country-specific cost-effectiveness from multinational clinical trials." *Health Economics*. 1998;7(6):481-93.
- OECD, Purchasing Power Parities (PPP) data. <https://www.oecd.org/en/data/indicators/purchasing-power-parities-ppp.html>
