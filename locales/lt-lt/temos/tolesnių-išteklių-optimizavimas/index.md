# Tolesnių išteklių optimizavimas

Valandos sutaupymas vyresniajam gydytojui – šeimos gydytojui, vyresniajam ordinatoriui, konsultantui – dažnai užkerta kelią kliūčių vėlavimams visai daugiadisciplininei komandai (MDT) slaugytojų, administracijos tarnautojų ir terapeutų, laukiančių klinikinių patvirtinimų. Kliūties atblokavimo vertė yra visų po jos einančių pralaidumas.

## Kodėl tai svarbu

Sveikatos priežiūra veikia leidimų grandinėmis: išrašymai laukia konsultanto patvirtinimo, gydymo planai laukia MDT peržiūros, siuntimai laukia triažo. Kai vėluoja ribojantis vaidmuo, kaina yra ne vieno žmogaus valanda – tai kiekvieno priklausomo vaidmens neveikos ar blokuotas laikas, plius paciento laikas limbe (papildomi [lovadieniai](../sutaupyti-lovadieniai/), ilgesni [RTT laukimai](../siuntimas-gydymui/)). Tai apribojimų teorija, pritaikyta klinikiniams keliams: valanda, sutaupyta *prie apribojimo*, verta visos sistemos ribinio pralaidumo; valanda kitur – gerokai mažiau.

## Matematika

```
Value of unblocking = Σ over downstream roles (blocked hours released × unit cost)
                    + pathway throughput gain × value per pathway completion

Contrast: value of the same hour saved at a non-gating role ≈ that role's
capacity value alone (see practitioner-time.md).
```

Apribojimą nustatykite empiriškai: kur darbas eilėje stovi ilgiausiai? Kieno dėžutę pasiekia vėlavimų ištakos?

## Išspręstas pavyzdys

Palatos išrašymams kiekvieną rytą reikia konsultanto peržiūros. Konsultantas 90 min per dieną renka informaciją, išsklaidytą po sistemas; peržiūros baigiamos iki 14:00, ir 6 išrašymai per dieną baigiami per vėlai tai dienai – kiekvienas kainuoja išvengiamą lovadienį.

Išrašymo santraukos skydelis (laboratoriniai tyrimai, vaistai, žymos viename vaizde) sumažina rinkimą iki 20 minučių; peržiūros baigiamos iki 11:30:

```
Bed days avoided     = 4 of the 6 late discharges × 365 ≈ 1,460 bed days/year
Downstream unblocking: 2 discharge coordinators + pharmacy + transport
                       previously idle-then-crunched each afternoon —
                       ~3 staff-hours/day of blocked time released ≈ 1,100 hrs/yr
```

Paties konsultanto 70 minučių yra *mažiausia* vertės dalis – tai šio rodiklio esmė. Lovadienius vertinkite pagal mechanizmą (žr. [sutaupyti lovadieniai](../sutaupyti-lovadieniai/)), o personalo valandas – kaip pajėgumus.

## Ryšys su programinės įrangos inžinerija

Tai kodo peržiūra, architektūros patvirtinimas ir vyresniojo inžinieriaus gautieji. Kai penki inžinieriai dieną laukia vienintelio žmogaus, galinčio patvirtinti dizainą, kaina yra penkios inžinieriaus dienos plius diena [vėlavimo kainos](../vėlavimo-kaina/) pačiam darbui – ne viena recenzento valanda. Įrankiai, suspaudžiantys ribojančio vaidmens užduotį (geresnis peržiūros kontekstas, automatiniai išankstiniai patikrinimai, skydeliai, surenkantys tai, ko reikia tvirtintojui), perka sistemos pralaidumą, o ne individualų patogumą. Matuokite paėmimo / laukimo laiką ties apribojimu (žr. [srauto rodikliai](../srauto-rodikliai/)) – tai programinės įrangos atitikmuo 14:00 išrašymo uolos.

## Spąstai

- **Ne apribojimo optimizavimas**: gražūs įrankiai vaidmeniui, už kurio niekas neina į eilę, duoda beveik nulinę sistemos vertę.
- **Apribojimo migracija**: atblokavus konsultantą, apribojimas persikelia (į vaistinę, transportą) – prieš deklaruodami visą pralaidumo laimėjimą, modeliuokite *kitą* apribojimą.
- **Tolesnių valandų skaičiavimas kaip pinigų**: blokuoto laiko atlaisvinimas yra pajėgumai, kuriems galioja įprastas [perskirstymo testas](../pinigus-atlaisvinančios-ir-neatlaisvinančios-santaupos/).

## Šaltiniai

- Goldratt EM, *The Goal* (theory of constraints).
- NHS England, NHS productivity. <https://www.england.nhs.uk/long-read/nhs-productivity/>
