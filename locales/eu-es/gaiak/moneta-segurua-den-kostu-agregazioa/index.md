# Moneta-segurua den kostu-agregazioa (Currency-Safe Cost Rollup)

Diru-lerro asko batzeak — hileko fakturak, gune bakoitzeko kostuak, urte anitzeko aurrekontu-inpaktuko zifrak — koma higikor bitarreko (`f64`) zenbaki arruntekin errepresentazio-errore txikiak pilatzen ditu, zatiki hamartar gehienak ($1,234.56, adibidez) ez direlako zehatz-mehatz errepresentagarriak koma higikor bitarrean. Errore bakoitza txikia da, baina urte askotako ehunka edo milaka lerro batzen dituen eredu handi batek zentimo-zatiki batzuk noraeza dezake — eta noraeza gehiketak egiten diren *ordenaren* mende dago, birsortezina bihurtuz. Hamar zehatzeko (edo zenbaki oso azpiunitate) aritmetikaz egindako moneta-agregazio batek zehatz-mehatz batzen du, kontabilitate-sistemek eta partida bikoitzeko liburuek zentimora koadratu behar duten moduan.

## Zergatik axola duen

Hau software-akats klase dokumentatu eta funtsezkoa da: Goldbergen 1991ko ACM Computing Surveys artikulua "What Every Computer Scientist Should Know About Floating-Point Arithmetic" erreferentzia estandarra da koma higikor bitarrak diru-balio hamartar gehienak zehatz-mehatz ezin errepresentatzeko arrazoiarentzat, eta horietako asko batzeak errorea nola konposatzen duen. Osasun-ekonomiako eta NHSren finantza-ereduek urte asko eta kostu-kategoria asko batzen dituzte — [jabetzaren kostu osoa](../jabetzaren-kostu-osoa/) eta [aurrekontu-inpaktuaren analisia](../aurrekontu-inpaktuaren-analisia/) biek `f64` kostu-lerro kopuru handia agregatzen dute urte anitzeko horizonteetan. Eredu batek zentimora koadratu behar duenean — eskuz guztizkoa birkalkulatzen duen auditoria batek zifra *berdina* lortu behar duenean — aritmetika bera hamar zehatza izan behar da, ez koma higikorra.

## Matematika

```
Agregazio inozoa:           total = Σ f64(lerro_i)         — ordenaren araberako noraeza
Moneta-segurua den agregazioa: total = Σ Decimal(lerro_i)      — zehatza, birsortzailea

Ehuneko-doikuntza aplikatzea (adib. kontingentzia-bufferra):
  doitua   = total × biderkatzailea            — Decimal emaitza zehatza, monetaren
                                                 azpiunitate-berretzailea baino
                                                 hamartar gehiago eduki ditzake
  biribildua = round(doitua, moneta_berretzailea, biribiltze_araua)  — biribiltze-araua
                                                 (half-up vs half-even/banker-en
                                                 biribiltzea) esplizituki adierazi behar da
```

Kontuan izan bi urratseko diziplina: `Decimal` zenbateko zehatz bat biderkatzaile batekin biderkatzeak monetak benetan erabiltzen duena baino hamartar gehiago sor ditzake (hiru hamartar bi hamartarreko zenbateko bider bi hamartarreko biderkatzaile batetik, adibidez) — tarteko zehaztasun hori *ez* da automatikoki biribiltzen; biribiltze-urrats esplizitu batek bakarrik, biribiltze-arau adierazi batekin, jaisten du monetaren benetako azpiunitate-berretzailera.

## Adibide landua

$1,234.56ko hamabi hileroko faktura berdin, hamar aritmetika zehatzean batuta: $1,234.56 × 12 = **$14,814.72**, zehatz-mehatz. Alderatu `1234.56` `f64` literala hamabi aldiz IEEE-754 doitasun bikoitzean batzearekin, zentimo-zatiki batzuk noraeza daitekeena batuketa-ordenaren arabera — benetako akats-klase dokumentatua, ez arazo `Money` hamar zehatzeko aritmetikan eraikitako eredu batentzat.

Orain aplikatu %5eko aurrekontu-inpaktuko kontingentzia-buffer estandarra (1.05× biderkatzailea) $14,814.72 guztizko horri: $14,814.72 × 1.05 = $15,555.456 — hiru hamartar, biderketa zehatza delako eta ez delako automatikoki monetaren bi hamartarretara biribiltzen. Esplizituki 2 hamartarretara biribiltzeak banker-en biribiltzea (half-even) erabiliz **$15,555.46** ematen du zehatz-mehatz.

## Software ingeniaritzarekin lotura

Hau "finantza-softwareak `Decimal` erabiltzen du, ez `float`" esaldiaren atzean dagoen ikasgai zuzena eta funtsezkoa da — biltegi honetako [jabetzaren kostu osoa](../jabetzaren-kostu-osoa/) eta [aurrekontu-inpaktuaren analisia](../aurrekontu-inpaktuaren-analisia/) moduluekin esplizituki lotzen da, biek koma higikorreko kostu soilak batzen dituztelako gaur egun; hemengo zuzentasun-argudioak ez du eredu horiek berehala migratzea eskatzen, baina zehatz-mehatz adierazten du *noiz* behar duen sistema batek zentimora koadratu eta, beraz, ez duen koma higikor bitarrik erabili behar bere diru-aritmetikarako. Ikus [zentimo zehatzeko kostu-esleipena](../zentimo-zehatzeko-kostu-esleipena/) ere guztizkoak zatitzeko (batu beharrean) zentimorik galdu gabe arazo lagunarentzat.

## Tranpak

- **Kateamenduaren erdian `float`era bihurtzea**: diru-balio bat koma higikorreko zenbaki batera ateratzea kalkulu baten erdian (`Money` liburutegi batzuek bihurketa-metodo hori "lossy" bezalako zerbait deitzen dute abisu esplizitu gisa) puntu horren ondorengo kalkulu guztien zehaztasun-bermea isilean baztertzen du.
- **"Decimal motelegia da kezkatzeko"**: hamar zehatzeko aritmetika gainkostu alferrekotzat baztertzea, finantza-txostenetarako zuzentasuna eta auditagarritasuna — ez emaritza gordina — axola direnean.
- **Kontingentzia-ehunekoa biribiltze-araua adierazi gabe aplikatzea**: half-up vs half-even (banker-en biribiltzea) biribiltzeak azken zentimoa alda dezake; biribiltze-konbentzioa bera adierazitako hautu auditagarria izan behar da — ikus [kostu-onura analisia](../kostu-onura-analisia/) HM Treasury Green Book-en kontingentzia eta baikortasun-alborapenaren doikuntzen gidarako, biribiltze-urrats hau aplikatzen zaion zifra mota hain zuzen.

## Iturriak

- Fowler M. "Patterns of Enterprise Application Architecture." Addison-Wesley, 2002 — the `Money` pattern.
- Goldberg D. "What Every Computer Scientist Should Know About Floating-Point Arithmetic." ACM Computing Surveys, 1991.
- HM Treasury, The Green Book — optimism-bias and contingency guidance for budget-impact modelling. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
