# Kietosios pinigus atlaisvinančios santaupos (deficito gynyba)

Kietosios pinigus atlaisvinančios santaupos – tai eilutės, kurias ligoninė gali aktyviai **ištrinti iš kito mėnesio biudžeto** dėl jūsų programinės įrangos. Griežtam finansų buhalteriui – ir deficitu veikiančiam trestui – tai vienintelė naudos klasė, kuri visiškai skaičiuojama.

## Kodėl tai svarbu

Daugelis NHS trestų veikia pagal deficito atkūrimo planus su intensyvia kiekvienos išlaidų eilutės priežiūra. Tokioje aplinkoje pajėgumų nauda ir kokybės pagerinimai – kad ir tikri – spragos neuždaro; ją uždaro tik pinigai. Programinės įrangos produktas, galintis įrodyti, kad naikina biudžeto eilutes, yra *savarankiškai finansuojamas finansų direktoriaus akimis*, o tai pakeičia pirkimus: pokalbis nustoja būti „ar galime sau tai leisti?“ ir tampa „ar galime sau leisti to nedaryti?“. Šis dokumentas yra deficitui skirtas aštrusis [pinigus atlaisvinančių ir neatlaisvinančių santaupų](../pinigus-atlaisvinančios-ir-neatlaisvinančios-santaupos/) galas.

## Matematika

Patikimiausias NHS kietųjų pinigų taikinys yra **padidinto įkainio laikinas personalas**. Trestai spragas padengia vidiniu „Bank“ personalu (mokamu maždaug standartiniais įkainiais) ir išoriniu „Agency“ personalu (dažnai 2–3× Agenda for Change įkainiai, riboti, bet dažnai viršijami retiems vaidmenims).

```
Hard saving = premium shifts avoided × (premium rate − substantive rate)
            + overtime hours avoided × overtime premium
            + external contracts cancelled × contract value

Mechanism requirement: name the specific budget line and the manager who
will confirm its reduction. If no one can point to the line, it isn't hard cash.
```

## Išspręstas pavyzdys

6 pakopos slaugytoja praranda ~1 valandą per pamainą administraciniam krūviui; dokumentavimas reguliariai išsilieja už pamainos pabaigos į viršvalandžius, o palatos užsako papildomą Bank pamainą dokumentavimui pasivyti.

Programinė įranga grąžina tą valandą suplanuotai pamainai 300 slaugytojų:

```
Overtime avoided:   300 nurses × 2.5 paid overtime hrs/week × £8 premium × 46 wks
                    ≈ £276,000/year
Bank/agency shifts: 15 catch-up shifts/week × £180 premium × 52
                    ≈ £140,400/year
Hard cash total     ≈ £416,000/year against a licence cost of ~£150,000
```

Kiekvienas svaras audituojamas pagal el. darbo grafikų ir darbo užmokesčio sistemas – būtent taip nauda ir turėtų būti įrodoma kas mėnesį per [naudos realizavimą](../naudos-realizavimas/). (Paskelbti NHS darbo jėgos modeliai deklaravo net 11+ £ sutaupymo už 1 £ šiam mechanizmui; bet kokį tokį santykį traktuokite kaip hipotezę *jūsų* trestos darbo grafikų duomenims, o ne kaip perkeliamą faktą.)

## Ryšys su programinės įrangos inžinerija

Inžinerinis agentūros priemokos atitikmuo yra paties organizacijos nelaimės pirkimai: rangovų dienos įkainiai, dengiantys pristatymo spragas, incidentų sukelti viršvalandžiai, skubios pagalbos sutartys ir debesijos spot kainų panika. Produktyvumo programinė įranga, deklaruojanti kietuosius pinigus, turėtų taikyti tas eilutes su ta pačia disciplina – įvardyti biudžeto eilutę, savininką ir mėnesį, kai ji mažėja. Viskas, ką ji dar duoda, yra pajėgumai ([vertę kuriantys pajėgumai](../vertę-kuriantys-pajėgumai/)) ar kokybė: tikra, vertinga ir kitokia.

## Spąstai

- **Pajėgumų vadinimas „santaupomis“** – tiesioginis patikimumo žudikas su finansais; žr. taksonomiją [pinigus atlaisvinančios ir neatlaisvinančios santaupos](../pinigus-atlaisvinančios-ir-neatlaisvinančios-santaupos/).
- **Tiekėjo modelio santykiai, pateikti kaip vietinis faktas** (11 £ : 1 £ problema) – perkurkite modelį pagal trestos savo darbo grafikų duomenis.
- **Vienkartinio ir pasikartojančio painiava**: atšaukta sutartis sutaupo savo vertę kartą per metus, o ne vieną kartą; ištrintas etatas sutaupo atlyginimą tik kol lieka ištrintas.

## Šaltiniai

- NHS England, reducing agency spend in the NHS. <https://www.england.nhs.uk/long-read/reducing-agency-spend-in-the-nhs/>
- NHS Digital business case guidance, economic case. <https://digital.nhs.uk/services/networks-and-connectivity-transformation-frontline-capabilities/connectivity-hub/advice-and-guidance/making-the-business-case-for-connectivity-infrastructure-investment---guidance/economic-case>
