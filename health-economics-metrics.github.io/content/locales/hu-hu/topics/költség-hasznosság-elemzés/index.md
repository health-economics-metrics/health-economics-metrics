# Költség-hasznosság elemzés (CUA)

A CUA olyan költséghatékonysági elemzés, amelynek **általános, preferenciasúlyozott kimenete** van — szinte mindig a [QALY](../minőséggel-korrigált-életév/) (vagy az elkerült [DALY](../fogyatékossággal-korrigált-életév/)). Mivel a kimeneti egység univerzális, a CUA teljesen különböző betegségek beavatkozásait is összehasonlíthatja.

## Miért fontos

Egy nemzeti egészségügyi szolgálatnak egyetlen költségvetésből kell választania egy rákgyógyszer, egy mentálhigiénés alkalmazás és egy sebészi robot között. A természetes egységek nem tudják összehasonlítani őket; a QALY-k igen. A CUA ezért a referenciaesetbeli módszer a NICE-nál és a legtöbb HTA-testületnél: kimenete — a QALY-nkénti költség, [küszöbhöz](../fizetési-hajlandósági-küszöbök/) mérve — a legközelebbi dolog az egészségpolitikában az univerzális átváltási árfolyamhoz. Ha azt akarod, hogy a szoftvered *valami más helyett* kapjon finanszírozást, a CUA az aréna.

## A matematika

```
ICUR = ΔCost / ΔQALYs      (the ICER with QALYs as the effect unit)

ΔQALYs = Σ (duration_i × utility_i)_new − Σ (duration_i × utility_i)_old
```

A hasznosságok validált kérdőívekből ([EQ-5D](../eq-5d/)); a költségeket és QALY-kat is 3,5%-kal [diszkontálják](../diszkontálás-és-időpreferencia/) (NICE referenciaeset); a bizonytalanságot [PSA](../valószínűségi-érzékenységvizsgálat/) kezeli.

## Kidolgozott példa

Közepes szorongás CBT-alkalmazása és személyes terápiára várólista összehasonlítása, betegenként:

```
Costs:  app licence + support        £250
        therapy displaced            −£680   (40% of users no longer need it)
        ΔC = 250 − 680 = −£430 (saves money)

QALYs:  6 months at utility 0.76 instead of 0.68 while waiting
        ΔE = 0.5 × (0.76 − 0.68) = +0.04 QALYs
```

ΔC < 0 és ΔE > 0: az alkalmazás **dominál** — jobb és olcsóbb, hányados nem szükséges. Ha a terápiakiváltási feltevés csak 10% lett volna, ΔC = 250 − 170 = +80 £, és az ICUR = 80 / 0,04 = **2000 £/QALY** — még mindig jóval 20 000 £ alatt. Az eset akkor is túléli, ha a kulcsfeltevést lefaragják: így néz ki egy robusztus CUA (és ezt a [tornádódiagram](../érzékenységvizsgálat/) bizonyítja).

## Kapcsolat a szoftverfejlesztéssel

A CUA mély gondolata — *egyetlen összetett, preferenciasúlyozott egység eltérő dolgok összehasonlítására* — a minta eltérő mérnöki befektetések (biztonság vs fejlesztői élmény vs megbízhatóság) összehasonlítására. Az őszinte lehetőségek vagy egy védhető összetett egység (ritka), vagy egy kifejezett [költség-következmény táblázat](../költség-következmény-elemzés/) (szokásos). Amitől a CUA óv, az a hamis összetett mutató: egy súlyozott „hatáspontszám", amelynek súlyait utólag hangolták úgy, hogy a kedvelt lehetőség nyerjen. Az egészséggazdaságtan évtizedeket töltött a hasznosság-kikérdezés szabványosításával, éppen azért, hogy a súlyok megelőzzék az összehasonlítást.

## Buktatók

- **A mérőeszköz érzékenysége alatti hasznosságnyereségek** (lásd a minimális klinikailag fontos különbséget a [betegek által jelentett kimenetelekben](../betegek-által-jelentett-kimenetelek/)) — az apró ΔE szorozva nagy populációkkal klasszikus tisztára mosási trükk.
- **Az összehasonlító ellátás kiváltásának hiánya** — a digitális termékek legnagyobb költségtétele gyakran az, amit helyettesítenek.
- **Nem preferencia-alapú pontszámok hasznosságokra leképezése** nem validált átváltási táblákkal.

## Források

- York Health Economics Consortium glossary: cost-utility analysis. <https://yhec.co.uk/glossary/cost-utility-analysis/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
