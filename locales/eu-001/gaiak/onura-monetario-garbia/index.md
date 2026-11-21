# Onura monetario garbia (Net Monetary Benefit, NMB)

NMBk kostu-eraginkortasunaren emaitza diru-balio bakar bihurtzen du: ordaintzeko borondatearen atalasean prezioztatutako osasun-irabazia, ken kostua. Bere bikiak, Onura Osasun Garbiak (NHB), arau bera adierazten du osasun-unitateetan.

## Zergatik axola duen

Ratioak ([ICER](../kostu-eraginkortasun-gehigarriaren-ratioa/)) deserosoak dira: efektu nulutik gertu lehertu egiten dira, ezin dira batez bestekatu ziurgabetasun-lagin artean, eta ezin dituzte hiru aukera edo gehiago garbi sailkatu. NMBk hori guztia konpontzen du: linealak izanik, aukerak sailka daitezke, Monte Carlo laginen batez bestekoa kalkula daiteke eta ekarpenak deskonposa daitezke. Gainera, ingeniari orok ezagutzen duen osasun-ekonomiaren matematika-forma da: *balioa ken kostua*.

## Matematika

```
NMB = (ΔE × λ) − ΔC
NHB = ΔE − (ΔC / λ)

ΔE = incremental effect (e.g., QALYs)
ΔC = incremental cost
λ  = willingness-to-pay threshold (see willingness-to-pay-thresholds.md)

Decision rule: adopt if NMB > 0 (equivalently NHB > 0).
Among alternatives: choose the highest NMB.
```

NMB > 0 ⇔ ICER < λ (ΔE > 0 denean), beraz bi arauek bat egiten dute; NMB, besterik gabe, hobeto portatzen da.

## Adibide landua

Diabetes-zerbitzu baterako hiru aukera, 1.000 paziente bakoitzeko, λ = £20.000/QALY:

```
Option           ΔC          ΔE (QALYs)   NMB = 20,000×ΔE − ΔC
App + coaching   £400,000    30           600,000 − 400,000 = £200,000
App only         £150,000    12           240,000 − 150,000 = £90,000
Extra clinics    £700,000    32           640,000 − 700,000 = −£60,000
```

Ambulatorio gehigarriek QALY gehien lortzen dituzte, baina atalase honetan balioa suntsitzen dute (NMB < 0). App + coaching da irabazlea. Kontuan izan NMBk hiru aukerak *aldi berean sailkatzen* dituela; binakako ICERek [menderatzea eta eraginkortasun-muga](../menderatzea-eta-eraginkortasun-muga/) atalean azaltzen den prozedura beharko lukete, eta emaitza bera lortuko lukete.

Irabazlearen NHB ikuspegia: 30 − 400.000/20.000 = 30 − 20 = **10 QALY garbi**: diru bera beste nonbait sortuko zukeenaz gaindi lortutako osasuna.

## Software ingeniaritzarekin lotura

`(aurreztutako orduak × ordu-tasa osoa) − tresnaren kostua` (eguneroko tresnen negozio-kasua) literalki NMB kalkulu bat da, λ = ingeniariaren kostu osoa izanik. Osasun-ekonomiak bi hobekuntza gehitzen ditu:

- **Bihurtu λ aldagai bat, ez konstante bat.** Marraztu NMB λren aurka ("ingeniari-orduaren balioa") eta erakutsi erabakia non aldatzen den; interesdun bakoitzak bere balorazioa aplika dezake zure matematika berriro egin gabe.
- **NHB pentsamoldea**: "plataforma honek 5.000 ingeniari-ordu aurrezten ditu, baina kontratistaren 3.000 ingeniari-orduko kapazitatea erosiko lukeen aurrekontua kontsumitzen du; guztira 2.000 ordu garbi" esateak aukera-kostuaren konparazioa kapazitate-unitateetan egitera behartzen du. Ikus [aukera-kostua](../aukera-kostua/).

## Tranpak

- **Atalasea ezkutatzea**: NMB zentzugabea da λ adierazi gabe; jakinarazi NMB £20k eta £30k-tan, edo marraztu kurba.
- **NMBrekin efektu txikiak zuritzea**: populazio erraldoi bat bider pertsona bakoitzeko efektu arbuiagarri bat NMB handia sor dezake; jakinarazi pertsona bakoitzeko efektuak ere.
- **NMBk ΔC eta ΔE-ko ziurgabetasun guztiak heredatzen dituela ahaztea**: bikoiztu [sentikortasun-analisi probabilistikoarekin](../sentikortasun-analisi-probabilistikoa/).

## Iturriak

- York Health Economics Consortium glossary: net monetary benefit. <https://yhec.co.uk/glossary/net-monetary-benefit/>
- Stinnett AA, Mullahy J. "Net health benefits: a new framework for the analysis of uncertainty in cost-effectiveness analysis." <https://pmc.ncbi.nlm.nih.gov/articles/PMC2528971/>
