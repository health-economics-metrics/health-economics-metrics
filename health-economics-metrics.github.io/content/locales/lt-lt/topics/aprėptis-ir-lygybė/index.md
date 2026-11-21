# Aprėptis ir lygybė

RE-AIM – aprėptis (Reach), veiksmingumas (Effectiveness), priėmimas (Adoption), įgyvendinimas (Implementation), išlaikymas (Maintenance) – yra standartinė sistema intervencijos *populiacijos* poveikiui vertinti. Jos pagrindinė aritmetika: **visuomenės sveikatos poveikis ≈ aprėptis × veiksmingumas**. Skaitmeniniai įrankiai prideda lygybės dimensiją: skaitmeninė atskirtis reiškia, kad aprėptis sistemingai netolygi, o pirmiausia skaitmeninis teikimas gali padidinti sveikatos spragas, kurias siekia uždaryti.

## Kodėl tai svarbu

Sisteminės apžvalgos, taikančios RE-AIM mSveikatai, randa nuoseklų parašą: stipri aprėptis ir priėmimas, **silpnas veiksmingumas ir išlaikymas** – programėlės plinta lengvai ir greitai nyksta. Nacionalinei sveikatos tarnybai tai reiškia, kad įspūdingas produktas vienam vartotojui gali būti prasta populiacijos investicija, ir atvirkščiai: kukliai veiksmingas įrankis, pasiekiantis milijonus, gali pralenkti puikų, pasiekiantį tūkstančius (žr. [HALE](../sveikatos-požiūriu-pakoreguota-gyvenimo-trukmė/) aritmetiką). Lygybė nėra šalutinis apribojimas, o vertės veiksnys: skaitmeninė atskirtis seka amžių, nepriteklių, negalią ir kalbą – būtent populiacijas, nešančias daugiausia gydomos naštos – todėl ribinis atskirtas vartotojas dažnai turi *didesnį nei vidutinį* potencialios naudos lygį. Formaliam statistiniam su socialine ir ekonomine padėtimi susijusios sveikatos nelygybės matui žr. [Koncentracijos indeksas](../koncentracijos-indeksas/).

## Matematika

```
Population impact ≈ reach × effectiveness
  reach         = participants / eligible population (see activation-and-uptake.md)
  effectiveness = real-world effect among participants (retention-weighted —
                  see retention-and-churn.md)

Equity-stratified version:
  impact_group_g = reach_g × effectiveness_g, reported per deprivation
  quintile / age band / language group
  equity gap = impact_top quintile − impact_bottom quintile

Distributional cost-effectiveness: apply equity weights to QALYs by
recipient group — a QALY to the worst-off counts more (an increasingly
mainstream HTA extension).
```

## Išspręstas pavyzdys

Skaitmeninė diabeto prevencijos programa, pateikta dviem būdais:

```
Aggregate: reach 12%, effect 0.02 QALYs/participant → 0.0024 QALYs/eligible person

Stratified (deprivation quintiles):
  Q1 (least deprived): reach 22%, effect 0.02 → 0.0044
  Q5 (most deprived):  reach 4%,  effect 0.025 → 0.0010

The programme delivers 4.4× more health to the least deprived —
while Q5's per-participant effect is HIGHER (more headroom). An
assisted-digital arm (phone coaching + community access) costing 20%
more per Q5 participant that lifts Q5 reach to 12% triples Q5 impact
and improves the aggregate — the equity investment IS the efficiency
investment here.
```

## Ryšys su programinės įrangos inžinerija

Aprėptis iš esmės yra inžinerinis artefaktas: įrenginių ir OS minimalūs reikalavimai, pralaidumo prielaidos, kalbų palaikymas, prieinamumo atitiktis (WCAG), tapatybės patvirtinimo kliūtys ir platinimas tik per programėlių parduotuves kiekvienas išima populiacijas iš vardiklio – paprastai nematomai, nes atskirti vartotojai niekada nepasirodo analitikoje. Inžinerinės praktikos, judinančios lygybę: matuokite *vardiklį* (instrumentuokite tinkamą populiaciją, o ne tik vartotojus); biudžetuokite našumą senoms ierangoms ir prastam ryšiui; pristatykite padedamo skaitmeninio kelio (telefonas, SMS, kioskas) srautus kaip pirmos klasės, o ne gėdos kanalus; ir stratifikuokite kiekvieną skydelio rodiklį pagal lygybės dimensijas – nestratifikuotas vidurkis yra vieta, kur slepiasi nelygybė ([GDS naudojimas](../gds-paslaugų-rodikliai/) neša tą patį įspėjimą).

## Spąstai

- **Veiksmingumas, pateiktas užbaigusiems, o poveikis deklaruojamas populiacijoms** – aprėpties nariai tyliai atmetami.
- **Lygybė kaip paskutinė minutė audito**, o ne dizaino įvestis; aprėpties pritaikymas vėliau yra gerokai brangesnis nei projektavimas jai.
- **Išlaikymo amnezija**: silpniausia RE-AIM mSveikatos dimensija – poveikio teiginiai už įrodymų laiko horizonto.
- **Tik skaitmeninio kanalo santaupos**, perkeliančios sąnaudas atskirtiems vartotojams ir priekinės linijos personalui (žr. [GDS paslaugų rodikliai](../gds-paslaugų-rodikliai/)).

## Šaltiniai

- RE-AIM framework. <https://re-aim.org/>
- RE-AIM systematic reviews of mHealth. <https://pmc.ncbi.nlm.nih.gov/articles/PMC12358350/>
- CDC, PRISM/RE-AIM for equity planning. <https://www.cdc.gov/pcd/issues/2018/17_0271.htm>
