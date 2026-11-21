# Többszempontú döntéselemzés (MCDA)

A többszempontú döntéselemzés (MCDA) súlyozott összegű pontozási modell, amelyet az egészségügyi technológiaértékelésben akkor használnak, amikor egyetlen ICER/fizetési hajlandósági küszöb nem fog meg mindent, ami egy döntéshozónak fontos: méltányosság, kielégítetlen szükséglet, innováció, költségvetési hatás, betegségsúlyosság. Minden szempont súlyt kap, amely a fontosságát tükrözi (az érdekeltektől kikérdezve, a súlyok összege 1), minden lehetőség normalizált pontszámot kap szempontonként (jellemzően 0–1), és az összpontszám a súlyozott összeg — ugyanaz a matematikai alak, mint egy szoftverszállító-kiválasztási pontozólap.

## Miért fontos

Az MCDA-t az olyan keretrendszerekben használják, mint az EVIDEM, és néhány HTA-testület az árva/ritka betegségek értékelésénél, ahol a szigorú QALY-nkénti költségküszöb megközelítést túl szűknek tartják ahhoz, hogy megragadjon mindent, ami egy döntésnél számít. Az ISPOR MCDA Emerging Good Practices Task Force formalizálta a súlyok és pontszámok védhető kikérdezésének jó gyakorlati útmutatóját, éppen mert egy informálisan súlyozott döntés könnyen megkonstruálható és könnyen játszható. Amikor egy egészségügyi technológiának valóban vannak olyan értékdimenziói, amelyeket egyetlen [fizetési hajlandósági küszöb](../fizetési-hajlandósági-küszöbök/) nem tud ábrázolni — súlyosság, innováció, méltányosság —, az MCDA kifejezett, auditálható szerkezetet ad a döntéshozóknak ezek egyesítésére, kimondatlan ítélet helyett.

## A matematika

```
MCDA score = Σ_i (weight_i × score_i)

weights should sum to 1 (elicited via stakeholder methods such as swing
weighting or the Analytic Hierarchy Process)
```

## Kidolgozott példa

Egy HTA-bizottság négy szempont szerint pontoz egy digitális terápiát:

```
Criterion                          Weight   Score   Weight × Score
Clinical benefit                   0.4      0.8     0.32
Cost impact                        0.3      0.5     0.15
Disease severity / unmet need      0.2      0.9     0.18
Innovation                         0.1      0.6     0.06
                                    ─────                ─────
                                    1.0                  0.71
```

A súlyok összege 1,0 (0,4 + 0,3 + 0,2 + 0,1), és az MCDA-pontszám 0,71 (0,32 + 0,15 + 0,18 + 0,06). A bizottság a 0,71-et egy előre megállapodott küszöbhöz hasonlítja, vagy ugyanígy pontozott versengő technológiákkal rangsorolja.

## Kapcsolat a szoftverfejlesztéssel

Ez pontosan ugyanaz a matematika, mint egy súlyozott szállítóválasztási pontozólap, egy RFP-értékelési mátrix vagy egy funkció-priorizálási pontozómodell — lásd [építés vagy vásárlás](../építés-vagy-vásárlás/), a szoftverbeszerzés klasszikus súlyozott pontozólapos esete. Érdemes szembeállítani a [WSJF és CD3](../wsjf-és-cd3/) módszerrel is: a WSJF/CD3 *hányados*-alapú priorizálási módszer (a késedelem költsége osztva a munka méretével vagy időtartamával), míg az MCDA súlyozott *összeg*. Az MCDA és a WSJF/CD3 két szerkezetileg eltérő válasz arra, „hogyan rangsoroljuk a versengő lehetőségeket", és annak tudása, melyiket kívánja meg valójában egy adott döntés — additív érték független szempontokon át, vagy értéksűrűség szűkös kapacitás egységére —, fontosabb annál, melyik képlet látszik szigorúbbnak.

## Buktatók

- **Súlykikérdezési torzítás**: aki a súlyokat meghatározza, gyakorlatilag előre meghatározza a rangsort, így egy „képlet" politikai vagy kereskedelmi döntést moshat tisztára objektív számításként. Dokumentáld, ki és hogyan állította be a súlyokat.
- **Máshol már megragadott szempont dupla számítása**: a „költséghatékonyság" egy szempontként pontozása, miközben *külön* a „költséghatást" is pontozzák, anélkül hogy bárki szándékozná, túlsúlyozza a pénzt a többi szemponthoz képest.
- **Hamis pontosság**: egy kétjegyű súlyozott pontszám (0,71) nagyobb szigort sugall, mint amennyit az alapul szolgáló 0–10-es érdekelti értékelések ténylegesen megtámogatnak, és az értékelők közötti változékonyságot gyakran egyáltalán nem közlik.

## Források

- Thokala P, Devlin N, Marsh K, et al. "Multiple Criteria Decision Analysis for Health Care Decision Making — An Introduction: Report 1 of the ISPOR MCDA Emerging Good Practices Task Force." Value Health. 2016;19(1):1-13.
- Goetghebeur MM, Wagner M, Khoury H, et al. "Evidence and Value: Impact on DEcisionMaking — the EVIDEM framework and potential applications." BMC Health Serv Res. 2008;8:270.
