# Pakartotinių hospitalizacijų rodiklis

30 dienų pakartotinių hospitalizacijų rodiklis – tai procentas išrašytų pacientų, kurie per 30 dienų grįžta skubiai. Tai kanoninis sveikatos sistemos *išrašymo kokybės* rodiklis – ir jis turi tiesiogines finansines baudas.

## Kodėl tai svarbu

Pakartotinė hospitalizacija reiškia, kad pirmasis išrašymas neišsilaikė: per ankstyvas išrašymas, nepavykęs vaistų perdavimas, nėra tolesnės priežiūros ar trūksta socialinės paramos. Mokėtojai aiškiai baudžia: JAV Hospital Readmissions Reduction Program atskaito iki 3 % ligoninės Medicare mokėjimų; NHS istoriškai nemokėjo už išvengiamas 30 dienų skubias pakartotines hospitalizacijas. Todėl pakartotinių hospitalizacijų išvengimas yra viena iš nedaugelio naudos kategorijų, *tiesiogiai* svarbių teikėjo pinigams, o ne vien pajėgumams.

## Matematika

```
Readmission rate = emergency readmissions within 30 days / index discharges × 100

Risk-standardized comparisons adjust for case mix; penalty programmes
compare observed vs expected for like hospitals.

Value of avoidance = avoided readmissions × (cost per readmission spell
                     + penalty exposure per readmission)
```

## Išspręstas pavyzdys

Širdies nepakankamumo išrašymo palaikymo programėlė (simptomų sekimas, svorio perspėjimai, vaistų priminimai, slaugytojos eskalavimas): 2 000 išrašymų per metus, bazinis pakartotinių hospitalizacijų rodiklis 18 %, tyrimas rodo 14 % su programėle.

```
Avoided readmissions = 2,000 × (0.18 − 0.14) = 80/year
Cost per readmission spell ≈ £3,500 → £280,000/year avoided treatment cost
Plus penalty/non-payment exposure on those spells.
App cost: 2,000 × £60 = £120,000/year

Net ≈ +£160,000/year, before any QALY claim for avoided deterioration.
```

Skaičius, kurį reikia ginti – 4 procentinių punktų poveikis: jis turi ateiti iš kontroliuojamo palyginimo, nes pakartotinių hospitalizacijų rodikliai svyruoja pagal atvejų struktūrą ir sezoną.

## Ryšys su programinės įrangos inžinerija

Pakartotinė hospitalizacija yra sveikatos sistemos **pakeitimų nesėkmių dalis** (žr. [DORA rodikliai](../dora-rodikliai/)): darbas, kuris „išleistas“ ir per 30 dienų grįžo. Analogijos gilios – iš naujo atidaryti bilietai ir regresijos incidentai rodo prastą „išrašymo kokybę“ (silpna verifikacija, per ankstyvas uždarymas, trūkstami perdavimo dokumentai); baudų tipo apskaita (taiso komanda, o ne gaunanti komanda) keičia elgesį; ir abi sritys išmoko tą pačią pamoką, kad žalias pralaidumo stūmimas (greitesnis išrašymas, greitesnis išleidimas) neinvestuojant į perdavimą tiesiog paverčia matomas eiles nematomu perdirbimu. „30 dienų pakartotinio atidarymo rodiklis“ priklauso bet kuriam komandos skydeliui, švenčiančiam ciklo trukmę.

## Spąstai

- **Žaidimai pervadinant**: pakartotinės hospitalizacijos užkoduotos kaip stebėjimo viešnagės ar naujos būklės; auditą atlikite apibrėžimui.
- **Visų priežasčių ir susijusių priežasčių**: 30 dienų visų priežasčių apima tikrai nesusijusius įvykius; baudos paprastai naudoja visų priežasčių būtent todėl, kad „susijusi“ galima žaisti.
- **Atvejų struktūros aklumas**: ligoninė, aptarnaujanti sergančias, skurdesnes populiacijas, grąžina daugiau dėl priežasčių, kurių jokia programėlė netaiso – prieš lyginant koreguokite pagal riziką.

## Šaltiniai

- CMS, Hospital Readmissions Reduction Program. <https://www.cms.gov/medicare/payment/prospective-payment-systems/acute-inpatient-pps/hospital-readmissions-reduction-program-hrrp>
- NHS Digital, emergency readmissions statistics. <https://digital.nhs.uk/data-and-information/publications/statistical/compendium-emergency-readmissions>
