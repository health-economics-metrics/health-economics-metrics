# Prieaugio sąnaudų efektyvumo santykis (ICER)

ICER – tai papildomos sąnaudos vienam papildomam poveikio sveikatai vienetui, kai pasirenkate vieną parinktį vietoje kitos geriausios alternatyvos. Tai pagrindinis sveikatos technologijų vertinimo skaičius. (Kai poveikio vienetas yra QALY, jis taip pat vadinamas prieaugio sąnaudų naudingumo santykiu, ICUR.)

## Kodėl tai svarbu

Sveikatos sistemos niekada nevertina technologijos atskirai – visada *prieaugiu*, palyginti su tuo, kas kitu atveju būtų daroma. NICE lygina technologijos ICER su savo **20 000–30 000 £ už QALY** slenksčiu; JAV ICER institutas pateikia 50 000–200 000 USD/QALY ribose; Kanada dirba apie 50 000 CAD/QALY. Ar jūsų produktas nacionalinei sveikatos tarnybai „vertas“, formaliai yra tai, ar jo ICER peržengia vietinį slenkstį. Žr. [norimo mokėti slenksčiai](../pasirengimo-mokėti-slenksčiai/).

## Matematika

```
ICER = (Cost_new − Cost_comparator) / (Effect_new − Effect_comparator)
     = ΔC / ΔE
```

Aiškinimo taisyklės:

- ΔC < 0, ΔE > 0: nauja parinktis **dominuoja** – pigesnė ir geresnė; santykio nereikia.
- ΔC > 0, ΔE > 0: apskaičiuokite ICER, palyginkite su slenksčiu λ; priimkite, jei ICER < λ.
- ΔC > 0, ΔE < 0: nauja parinktis dominuojama – atmeskite.
- Santykiai elgiasi blogai prie ΔE = 0 – reitinguodami pirmenybę teikite [grynajai piniginei naudai](../grynoji-piniginė-nauda/).

Palyginamasis turi būti *kita geriausia nedominuojama parinktis*, o ne „nieko nedaryti“ – žr. [dominavimas ir efektyvumo riba](../dominavimas-ir-efektyvumo-riba/).

## Išspręstas pavyzdys

Nuotolinės stebėsenos paslauga širdies nepakankamumo pacientams, 1 000 pacientų per metus, palyginti su įprasta priežiūra:

```
Costs:   service £900,000; admissions avoided save £600,000
         ΔC = 900,000 − 600,000 = £300,000
Effects: earlier intervention gains 25 QALYs
         ΔE = 25

ICER = 300,000 / 25 = £12,000 per QALY
```

12 000 £/QALY yra patogiai žemiau NICE 20 000 £ slenksčio – stipri byla. Atkreipkite dėmesį, kaip svarbios *grynosios* sąnaudos: be 600 000 £ užskaitos ICER būtų 36 000 £/QALY ir byla greičiausiai žlugtų. Sąnaudų užskaitos ir jų įrodymų kokybė yra vieta, kur šios analizės laimimos ar pralaimimos (žr. [išvengtos tolesnės sąnaudos](../išvengtos-tolesnės-sąnaudos/)).

## Ryšys su programinės įrangos inžinerija

ICER disciplina pilnai perkeliama į inžinerinius sprendimus:

```
(cost of option B − cost of option A) / (outcome B − outcome A)
```

– prieaugio kaina vienam papildomam diegimui, vienai sutaupytai inžinieriaus valandai, vienam išvengtam incidentui – visada pagal kitą geriausią alternatyvą, o ne pagal nieko nedarymą. Du įpročiai, kuriuos verta pasisavinti: (1) *aiškiai įvardykite palyginamąjį*; dauguma įrankių ROI teiginių slapčia lygina su šiaudiniu manekenu; (2) *pirmiausia atimkite sąnaudas* – įrankis, kainuojantis 100 tūkst. £, bet išstumiantis 80 tūkst. £ esamų išlaidų, turi ΔC = 20 tūkst. £.

## Spąstai

- **ICER palyginimas skirtingomis valiutomis be aiškaus konvertavimo žingsnio**: vienos šalies valiuta apskaičiuotas ICER prieš lyginant su kitos šalies slenksčiu turi būti konvertuotas nurodytu metodu – žr. [ICER palyginimas skirtingomis valiutomis](../icer-palyginimas-skirtingomis-valiutomis/), kodėl konversijos koeficiento pasirinkimas (perkamosios galios paritetas ar rinkos valiutos kursas) pats gali apversti priėmimo sprendimą.
- **Palyginamojo žaidimai**: lyginimas su pasenusia ar dirbtinai bloga baze išpučia ΔE ir pataikauja ICER.
- **Vidurkiai vietoje prieaugių**: visos programos kaina vienam QALY nėra jos plėtimo ar priėmimo ICER.
- **Taškinio įverčio garbinimas**: ICER yra dviejų neapibrėžtų skirtumų santykis; pateikite neapibrėžtumą per [PSA ir CEAC](../tikimybinė-jautrumo-analizė/).
- **Neigiami ICER dviprasmiški** (pigiau ir geriau prieš brangiau ir blogiau duoda tą patį ženklą) – niekada nepateikite neigiamo ICER nepasakę, kuriame kvadrante jis yra.

## Šaltiniai

- NICE: cost-effectiveness thresholds FAQ. <https://www.nice.org.uk/what-nice-does/faqs/changes-to-nice-s-cost-effectiveness-thresholds>
- ICER 2023 Value Assessment Framework. <https://icer.org/wp-content/uploads/2023/09/ICER_2023_VAF_For-Publication_092523.pdf>
- York Health Economics Consortium glossary: ICER. <https://yhec.co.uk/glossary/incremental-cost-effectiveness-ratio-icer/>
