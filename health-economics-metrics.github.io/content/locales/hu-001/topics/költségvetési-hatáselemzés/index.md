# Költségvetési hatáselemzés (BIA)

A BIA azt becsüli, mit tesz egy beavatkozás bevezetése egy adott finanszírozó **költségvetésével** a következő 1–5 évben. A *megfizethetőségre* válaszol; a költséghatékonyság az *értékre*. Egy technológia lehet kiváló érték és mégis megfizethetetlen — vagy megfizethető és gyenge érték. A komoly értékelések mindkettőt megkövetelik.

## Miért fontos

A pénzügyi igazgató kérdése soha nem az, hogy „mennyi az ICER?" — hanem hogy „mit tesz ez a jövő évi költségvetéssel?" Az ISPOR jó gyakorlati útmutatója (az ágazati szabvány) ezt írja elő: a finanszírozó saját nézőpontja, 1–5 éves horizont, *diszkontálatlan* éves pénzáramok, reális felvételi görbék, valamint forgatókönyv-alapú (nem valószínűségi) bizonytalanság. A NICE a költséghatékonyság mellett költségvetési hatásra vonatkozó információt is megkövetel; az a termék, amelynek országos költségvetési hatása Angliában évi ~20 M£ fölött van, kereskedelmi tárgyalást indít az ICER-től függetlenül.

## A matematika

```
BI_year_t = Cost_scenario_with_new(t) − Cost_scenario_current(t)

Cost_scenario(t) = Σ over patient groups:
   eligible population(t) × uptake(t) × net cost per patient(t)

net cost per patient = intervention cost − displaced care cost + induced care cost
```

Fő modellezési döntések: a jogosult populáció növekedése, a felvételi görbe (a bevezetés soha nem azonnali), mit vált ki az új lehetőség, és milyen keresletet *indukál* (könnyebb hozzáférés → több felhasználó).

## Kidolgozott példa

Egy 2 millió főt fedező finanszírozó egy digitális terápiát fontolgat betegenként évi 300 £-ért; a tagok 1,5%-a jogosult (30 000); a felvétel 20% → 40% → 60% 3 év alatt; minden felhasználó évi 120 £ egyéb ellátást vált ki.

```
Net cost per user = 300 − 120 = £180

Year 1: 30,000 × 0.20 × 180 = £1.08M
Year 2: 30,000 × 0.40 × 180 = £2.16M
Year 3: 30,000 × 0.60 × 180 = £3.24M
```

Még ha a termék ICER-je kiváló 8000 £/QALY is, a finanszírozónak 3. évre 3,24 M£ *új pénzt* kell találnia — a kiváltott 120 £ szétterül más költségvetési sorokon, és nem szabadul fel készpénzként (lásd [készpénzfelszabadító és nem készpénzfelszabadító](../készpénzfelszabadító-és-nem-készpénzfelszabadító-megtakarítások/)). Ezért külön akadály az egységenkénti érték és a megfizethetőség.

## Kapcsolat a szoftverfejlesztéssel

A BIA pontosan a pénzügyi igazgatónak szóló kiegészítője az egy főre jutó ROI-állításnak: „fejlesztőnként költséghatékony, de megengedhetjük-e a szervezetszintű bevezetést ebben a pénzügyi évben?" Modellezd a licencszinteket, a felvételi S-görbét, a kiváltott eszközkiadást, amely csak akkor szabadít fel készpénzt, ha a régi szerződések ténylegesen megszűnnek, és az indukált használatot (olcsóbb CI → több CI). A 3 éves költségvetési hatástáblázat bemutatása a ROI mellett teszi pénzügyileg hitelessé a vállalati eszközjavaslatot. Egy közzétett költségvetési hatás-összeg felosztása telephelyek, kohorszok vagy pénzügyi évek között — úgy, hogy a részek pontosan kiadják a közzétett számot — pontosan a [fillérre pontos költségfelosztás](../fillérre-pontos-költségfelosztás/); az összeget tápláló sok tételsor összegzése pedig a [valutabiztos költségösszesítés](../valutabiztos-költségösszesítés/).

## Buktatók

- **Azonnali felvételi fantázia**: az 1. évi hatás állandósult állapotú bevezetésnél számolva.
- **A kiváltott költség készpénzként számlálása**, amikor az szórt kapacitás.
- **Az indukált kereslet figyelmen kívül hagyása** — a hozzáférés javítása növeli a jogosult populáció használatát.
- **A BIA és a CEA horizontjának/diszkontálásának összekeverése**: a BIA rövid horizontú, diszkontálatlan, finanszírozó-specifikus a tervezés szerint.

## Források

- Sullivan SD, et al. ISPOR BIA Good Practice II Task Force. Value in Health 2014;17(1):5–14. <https://pubmed.ncbi.nlm.nih.gov/24438712/>
- ISPOR good practices: budget impact analysis. <https://www.ispor.org/heor-resources/good-practices/article/principles-of-good-practice-for-budget-impact-analysis-ii>
