# NICE Ebidentzia Estandarren Esparrua (NICE Evidence Standards Framework, ESF)

ESF NICEren esparrua da, eta zehazten du **teknologia digital batek zenbat ebidentzia behar duen, bere arriskuaren proportzioan**. "Zer frogatu behar dugu NHSk gure aplikazioa erosi aurretik?" galderari erantzun ofizialenetik gertuen dagoena da.

## Zergatik axola duen

ESFk (2019an kaleratua, 2022an eguneratua AA eta algoritmo egokitzaileak barne hartzeko) osasun-teknologia digitalak mailatan sailkatzen ditu funtzio klinikoaren arabera, ebidentzia-estandar **metagarriekin**: 21 estandar 5 taldetan (diseinu-faktoreak, balioa, errendimendua/eraginkortasuna, eragin ekonomikoa, hedapena):

```
Tier A — system services, no direct patient outcome (e.g., e-rostering)
         → basic standards: credibility, data protection, technical assurance
Tier B — inform, simple monitoring, communication (e.g., symptom diary)
         → + evidence of user benefit, appropriate reliability
Tier C — treat, diagnose, or actively guide clinical management
         → + high-quality comparative effectiveness evidence (ideally RCT)
           and economic analysis
```

Ebidentzia ekonomikoari dagokionez, [kostu-ondorio analisia](../kostu-ondorio-analisia/) onargarria da maila gehienetan; [kostu-utilitate analisia](../kostu-utilitate-analisia/) arrisku handienean espero da. ESFk zure **merkatuan sartzeko ebidentzia-kostua** definitzen du: aurrekontua egin ezazu beste edozein eraikuntza-kostu bezala.

## Matematika

Formularik ez: erabaki-taula bat. Kalkulu eragilea komertziala da:

```
Evidence investment required = f(tier)
  Tier A: documentation + assurance ≈ £10k–50k
  Tier B: observational/comparative user-benefit study ≈ £50k–250k
  Tier C: RCT-grade comparative study + economic model ≈ £250k–£2M+

Position your product's claims deliberately: claiming "supports clinical
decisions" instead of "informs patients" moves you a tier and can 10× the bill.
```

## Adibide landua

Medikazio-gogorarazleen aplikazio baten egileak dosia doitzeko gomendio-eginbide bat gehitzea aztertzen du.

- Gogorarazle-aplikazio gisa: **B maila**; atxikimenduaren hobekuntza erakusten duen kohorte-azterketa batek nahikoa du.
- Dosi-gomendioekin: **C maila**; eraginkortasun konparatiboaren ebidentzia (ziur aski ohiko arretaren aurkako RCT bat) eta analisi ekonomikoa.

RCTak £600k balio badu eta dosi-eginbidearen diru-sarrera gehigarria £200k/urte bada, eginbideak 3 urte baino gehiagoz eutsi behar dio balioari ebidentzia-kostuak berdintzeko; ESF mailaren prezioa kontuan hartuta erabat desberdina dirudien produktu-erabakia. Talde askok B mailako produktua kaleratzen dute eta C mailako aldarrikapena finantzaketaren atzean uzten dute.

## Software ingeniaritzarekin lotura

ESF errepositorio honetako gobernantza-eredurik transferigarriena da: **tresnak hartzeko arriskuaren araberako ebidentzia-eskakizunak**. Barne-bertsioa: kode-formatzaile batek demo bat behar du (A maila); ordu-aurrezpena aldarrikatzen duen produktibitate-tresna batek pilotu neurtu bat behar du (B maila); hedapenak automatikoki blokeatzen dituen edo kode klinikoa automatikoki idazten duen AA ate batek kontrolatutako saiakuntza mailako ebidentzia behar du erakunde osoan zabaldu aurretik (C maila). Ebidentzia proportzionalak bi hutsegite saihesten ditu: burokraziak tresna hutsalak itotzea, eta sentsazioek ondorio handiko tresnak kaleratzea. Ikus, halaber, [DiGA fast-track](../alemaniako-diga-fast-track/), "ebidentzia-epemugadun behin-behineko onarpenaren" osagarri gisa.

## Tranpak

- **Mailaren gaizki sailkapena nahi onez** — arautzaileek eta erosleek produktuak *egiten duenaren* arabera sailkatzen dute, ez marketinak dioenaren arabera.
- **Produktuaren ondoren eraikitako ebidentzia**: kaleratutako produktu bati RCT bat erantsi instrumentaziorik edo equipoise-rik gabe motela da eta sarri ezinezkoa.
- **ESF betetzea eta gainerakoa ahaztea**: ESF DTACrekin (segurtasun klinikoa, datuen babesa, elkarreragingarritasuna) batera doa, eta AAren kasuan, baimen arautzailearekin ere; ikus [AAren ebaluazio erregulatzailea](../aaren-ebaluazio-erregulatzailea/).

## Iturriak

- NICE Evidence Standards Framework (ECD7). <https://www.nice.org.uk/corporate/ecd7>
- ESF evidence standards tables. <https://www.nice.org.uk/corporate/ecd7/chapter/section-c-evidence-standards-tables>
