# Elemzési nézőpont

A nézőpont határozza meg, *kinek* a költségei és előnyei számítanak egy gazdasági elemzésben: a finanszírozóé, a szolgáltatóé vagy a társadalom egészéé. Ugyanaz a beavatkozás az egyik nézőpontból remekül, a másikból borzalmasan festhet.

## Miért fontos

Minden gazdasági értékelésnek előre ki kell mondania a nézőpontját, mert a nézőpont dönti el, mely tételek léteznek:

- **Finanszírozói nézőpont** (pl. NHS-megrendelő, biztosító): csak a költségek, amelyeket a finanszírozó megtérít.
- **Szolgáltatói nézőpont** (pl. kórházi tröszt): belső szolgáltatási költségek, személyzet, ingatlanok.
- **Társadalmi nézőpont**: minden — beleértve a betegek idejét, utazását, a családtagok informális gondozását és a munkáltatókat érő termelékenységi veszteségeket.

A NICE referenciaesete a költségekhez az **NHS és a személyes szociális szolgáltatások (PSS)** nézőpontját használja. Az amerikai Második Költséghatékonysági Testület azt javasolja, hogy egészségügyi ágazati és társadalmi elemzést is közöljenek, egy „hatásleltárral", amely felsorolja, mi szerepel benne.

## A matematika

Nincs képlet — ez egy hatókör-meghatározási szabály, amelyet bármilyen matematika előtt alkalmazunk:

```
Included cost/benefit categories = f(perspective)
```

Hasznos ellenőrzés: készíts hatásleltár-táblázatot, soronként egy költséggel/előnnyel és oszloponként egy nézőponttal, és jelöld meg, mely cellák számítanak.

## Kidolgozott példa

Egy tünetellenőrző alkalmazás évente 10 000 háziorvosi látogatást terel önellátásba.

- **Finanszírozó (NHS)**: 10 000 × 42 £ háziorvosi konzultációnként = **420 000 £/év** megtakarítás — erősen pozitív.
- **Szolgáltató (háziorvosi praxis)**: ha a praxisokat fejkvóta szerint fizetik, a bevételük változatlan, de a munkaterhelésük csökken — enyhén pozitív.
- **Társadalmi**: add hozzá a betegek megtakarított utazási és várakozási idejét, mondjuk 10 000 × 2 óra × 15 £/óra = 300 000 £ időérték; de vond le a kárt, ha 2%-ukat tévesen megnyugtatják, és később, betegebben jelentkeznek, 200 × 3000 £ = 600 000 £ többletkezeléssel. Társadalmi nettó: 420 000 + 300 000 − 600 000 = **120 000 £/év** — pozitív, de a biztonsági feltevés dominálja.

Ugyanaz az alkalmazás, három különböző válasz. A nézőpont kinyilvánítása teszi összehasonlíthatóvá és őszintévé a számokat.

## Kapcsolat a szoftverfejlesztéssel

Az eszközök és platformok megtérülésének is vannak nézőpontjai:

- **Csapatköltségvetés („finanszírozó")**: belefér-e a licencdíj a költséghelyembe?
- **Platformszervezet („szolgáltató")**: a teljes költség, beleértve az integrációt, a támogatást és a karbantartást.
- **Vállalat („társadalom")**: számítsd bele az ügyfélhatást, a biztonsági externáliákat és minden érintett csapat idejét.

Egy CI-eszköz, amely a vásárló csapatnak olcsó, de a migrációs munkát további 40 csapatra hárítja, a költségáthárítás szoftveres változata — csak a tágabb nézőpontból látható. Minden üzleti esetben nevezd meg a nézőpontot; az átvizsgálók nem tudják megkérdőjelezni azokat a feltevéseket, amelyeket nem látnak.

## Buktatók

- **Hallgatólagos nézőpontváltás**: társadalmi előnyöket számolni, de csak finanszírozói költségeket, bármit költséghatékonynak mutat.
- **Dupla számítás** a nézőpontok összevonásakor (pl. egy megtakarított háziorvosi időpont számlálása finanszírozói megtakarításként és betegidő-megtakarításként is, amikor a finanszírozói szám már tartalmazza a személyzet idejét).
- **A költségáthárítás figyelmen kívül hagyása**: „megtakarítások", amelyek csupán a költséget a betegekre, gondozókra vagy egy másik osztályra viszik át.

## Források

- Sanders GD, et al. "Recommendations for Conduct, Methodological Practices, and Reporting of Cost-effectiveness Analyses: Second Panel on Cost-Effectiveness in Health and Medicine." JAMA 2016. <https://jamanetwork.com/journals/jama/fullarticle/2552214>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
