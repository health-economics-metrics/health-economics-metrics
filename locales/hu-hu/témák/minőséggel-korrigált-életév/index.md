# Minőséggel korrigált életév (QALY)

A QALY egy tökéletes egészségben eltöltött életév. Egyesíti, *mennyi ideig* élnek az emberek azzal, *milyen jól* élnek, így a rossz egészségben eltöltött év kevesebbet számít egy QALY-nál — ezzel gyökeresen eltérő egészségügyi beavatkozásokat tesz összehasonlíthatóvá egyetlen skálán.

## Miért fontos

A QALY az egészségügyi technológiaértékelés közös valutája. A NICE (Anglia) az egészségnyereséget **20 000–30 000 £ per QALY** értékre becsüli: az a beavatkozás, amely ennél a küszöbnél olcsóbban vásárol QALY-kat, általában ajánlott; amelyik drágábban, azt általában elutasítják. Ezzel az egyetlen számmal hasonlít össze egy nemzeti egészségügyi szolgálat egy rákgyógyszert, egy csípőprotézist és egy triázsalkalmazást ugyanazon a tengelyen. Ha a szoftvered hitelesen állíthat QALY-kat — a romlás megelőzésével, a kezelés gyorsításával vagy a biztonság javításával —, az egészségi értékét ugyanabban a valutában árazhatod, mint magát az orvostudományt.

## A matematika

```
QALYs = Σ_i (duration_i × utility_i)

duration_i = years spent in health state i
utility_i  = quality weight of state i, anchored at 1 = perfect health, 0 = dead
             (negative values allowed for states worse than death)
```

A hasznossági súlyok validált kérdőívekből származnak, leggyakrabban az [EQ-5D](../eq-5d/)-ből. Egy beavatkozás QALY-*nyeresége* a vele és nélküle számított QALY-áramok különbsége, a NICE referenciaesetben évi 3,5%-kal [diszkontálva](../diszkontálás-és-időpreferencia/).

## Kidolgozott példa

Egy beteg szívkezelésre vár 0,6 hasznosságú állapotban. A kezelés 0,85 hasznosságra állítja vissza.

- **Most kezelve**: 1 év 0,85-on = 0,85 QALY ebben az évben.
- **6 hónapos késéssel kezelve**: 0,5 × 0,6 + 0,5 × 0,85 = 0,725 QALY.
- **Betegenkénti QALY-veszteség a késedelemből**: 0,85 − 0,725 = **0,125 QALY**.

A NICE küszöbével pénzre váltva: 0,125 × 20 000–30 000 £ = **2500–3750 £ elveszett egészségérték betegenként 6 hónapos késedelemnél**. Ha az útvonalat gyorsító szoftver évi 400 betegnek megszünteti ezt a késedelmet, az egészségérték 50 QALY ≈ **1,0–1,5 millió £/év** — bármilyen működési megtakarítás beszámítása előtt.

## Kapcsolat a szoftverfejlesztéssel

- **Gyorsabb útvonalak = korábbi QALY-k.** Minden, ami lerövidíti a [beutalástól a kezelésig](../beutalástól-a-kezelésig/) tartó időt, a várakozási idő hasznosságcsökkenését egészségnyereséggé alakítja, a fentiek szerint értékelve.
- **Biztonság = megőrzött QALY-k.** A megelőzött gyógyszerelési hibák és elmulasztott diagnózisok elkerült QALY-veszteségek.
- **A QALY egyben mutatótervezési sablon is**: mennyiség × minőség összetétele, a minőségi súlyokat szabványosított kérdőívből kikérdezve. A „minőséggel korrigált mérnöki év" (idő × DevEx-felmérési súly) ugyanez a konstrukció — lásd [SPACE és DevEx](../space-és-devex/).
- A QALY-k pénzzé alakításához egy üzleti esetben használd a [nettó pénzbeli hasznot](../nettó-pénzbeli-haszon/); döntéssé alakításukhoz a [fizetési hajlandósági küszöböket](../fizetési-hajlandósági-küszöbök/).

## Buktatók

- **Hasznossági súlyok kitalálása.** A súlyoknak validált kérdőívekből (EQ-5D) és közzétett értékkészletekből kell származniuk, nem megérzésből.
- **QALY-k állítása oksági útvonal nélkül.** „Az alkalmazásunk javítja a jólétet" nem QALY-állítás; „X hét várakozást szüntet meg 0,6 hasznosságú állapotban" az.
- **Dupla számítás**: ugyanannak az elkerült romlásnak mind a QALY-nyereségét, mind a költségmegtakarítását állítani gondosságot igényel, hogy valóban különállóak legyenek.
- **Méltányossági vakfoltok**: a QALY az életkiterjesztés egy évét az alaphasznosság szerint értékeli, ami hátrányosan érintheti a fogyatékossággal élőket — ezért közli az ICER (USA) az evLYG-t is (lásd [nyert életévek](../nyert-életévek/)).

## Források

- NICE glossary: QALY. <https://www.nice.org.uk/glossary?letter=q>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- ICER, "Cost-Effectiveness, the QALY, and the evLYG." <https://icer.org/our-approach/methods-process/cost-effectiveness-the-qaly-and-the-evlyg/>
