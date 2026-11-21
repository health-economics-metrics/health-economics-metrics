# Költségminimalizálási elemzés (CMA)

A CMA csak a költségeket hasonlítja össze, és a legolcsóbb lehetőséget választja — *csak* akkor jogos, ha az alternatívák kimeneteiről bebizonyosodott, hogy egyenértékűek.

## Miért fontos

A CMA a legegyszerűbb és leginkább visszaélt elemzés. Az egyenértékűségi állítás végzi el az egész munkát: ha a kimenetek valóban nem különböznek (egy biosimilar és az originátora; ugyanazon szolgáltatás két beszállítója, amelyek ugyanazt a specifikációt teljesítik), akkor a költség az egyetlen kérdés, és a CMA helyes. A szigor az egyenértékűség előzetes *bizonyításában* rejlik — jellemzően előre meghatározott határral végzett nem-alacsonyabbrendűségi vizsgálattal —, ami pontosan az a lépés, amelyet a vásárlók általában kihagynak.

## A matematika

```
Given evidence that Effect_A ≈ Effect_B (within a pre-specified margin δ):
Choose min(Cost_A, Cost_B)

Costs measured from the same perspective, over the same horizon,
including switching/transition costs.
```

Ha az egyenértékűség nem bizonyítható, a CMA érvénytelen — használj helyette [CEA](../költséghatékonysági-elemzés/)/[CUA](../költség-hasznosság-elemzés/)-t.

## Kidolgozott példa

Egy tröszt két videókonzultációs platform között választ. Egy 3 hónapos párhuzamos kísérleti projekt befejezési arányokat mutat 94,1% és 93,8%, betegelégedettséget 4,4 és 4,4 — a különbségek az előre megegyezett 2 százalékpontos δ-n belül. Kimenetek: egyenértékűek. Költségek 3 évre:

```
                     Platform A     Platform B
Licences             £360,000       £210,000
Integration          £80,000        £150,000
Training/support     £60,000        £90,000
Total                £500,000       £450,000
```

A B platform 50 000 £-dal nyer — a magasabb integrációs költségét *beleértve*. A kísérleti projekt nélkül az egyenértékűségi állítás szállítói brosúrákon nyugodna, és egy 1 százalékpontos befejezési arány-különbség (≈ évi több ezer sikertelen konzultáció) eltörpítené az 50 000 £-ot.

## Kapcsolat a szoftverfejlesztéssel

A CMA a hétköznapi áruk beszerzésének formális alakja: két CI-szolgáltató azonos SLO-kkal, két objektumtároló azonos tartóssági specifikációval. Az egészséggazdasági tanulság a *műveletek sorrendje*: először bizonyítsd az egyenértékűséget (mérd a terhelésedhez, kísérletezz az SLO-iddal szemben, a határt előre megállapodva), aztán hasonlítsd össze a teljes költségeket, a migrációt is beleértve. A „lényegében ugyanazok, a B olcsóbb" az első lépés nélkül az, ahogyan a szervezetek 10%-kal olcsóbb és 40%-kal rosszabb eszközt vesznek. Következmény: amikor egy szállító árral érvel, kérd meg, hogy mondja ki az egyenértékűséget — ez fordított irányban is kötelező.

## Buktatók

- **Feltételezett egyenértékűség** — a meghatározó bűn; a különbség bizonyítékának hiánya nem az egyenértékűség bizonyítéka (az alulméretezett kísérleti projektek ingyen „mutatnak" egyenértékűséget).
- **A váltási költségek kihagyása** — a migráció, az újratanítás és a párhuzamos futtatás a költségoldalhoz tartozik.
- **Egyenértékűség a rossz kimeneteken**: egyenértékű a mért mutatón, eltérő egy olyanon, amely számít (akadálymentesség, farok-késleltetés, adatkiáramlás).

## Források

- York Health Economics Consortium glossary: cost-minimization analysis. <https://yhec.co.uk/glossary/cost-minimisation-analysis/>
- Briggs AH, O'Brien BJ. "The death of cost-minimization analysis?" Health Economics 2001. <https://pubmed.ncbi.nlm.nih.gov/11288052/>
