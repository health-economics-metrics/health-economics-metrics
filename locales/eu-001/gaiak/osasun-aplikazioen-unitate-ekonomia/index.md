# Osasun-aplikazioen unitate-ekonomia (Health App Unit Economics)

Kontsumorako osasun-produktuen aritmetika komertziala: bezeroak eskuratzeko kostua (CAC), bizitza osoko balioa (LTV), erabiltzaile bakoitzeko batez besteko diru-sarrera (ARPU), kide bakoitzeko hilero (PMPM) prezioak, eta enplegatzaile-merkatuko **ROI eta VOI** (value on investment) arteko bereizketa.

## Zergatik axola duen

Osasun-aplikazioek estutze estrukturala jasaten dute: eskuraketa garestia da (aldarrikapen erregulatuak, konfiantza-oztopoak, betetze-kostuak) eta atxikipena software-bertikal guztietan txarrena (~%90eko abandonua 30 egunen barruan — ikus [atxikipena eta abandonua](../atxikipena-eta-uzte-tasa/)). Bideragarritasun-proba estandarra — **LTV:CAC ≥ 3:1** — beraz bortitz gogorra da kontsumorako osasunean, eta horregatik migratzen du industriak B2B2C ereduetara: enplegatzaileak, aseguratzaileak eta osasun-sistemak populazioengatik PMPM ordaintzen, non erosleak ez den abandonatzen duen norbanakoa.

## Matematika

```
CAC   = salmenta + marketing gastua / ordaintzen duten bezero berriak
ARPU  = diru-sarrerak / erabiltzaile aktiboak (aldi bakoitzeko)
LTV   = ARPU × batez besteko bizitza  =  ARPU / abandonu-tasa
Bideragarritasuna: LTV : CAC ≥ 3, berreskuratze-epea ≤ 12–18 hilabete

Atxikitako erabiltzaile bakoitzeko CAC eraginkorra = CAC / atxikipena(t)
  — %4ko D30 atxikipenarekin, £5 instalazio bakoitzeko = £125 30 egunez atxikitako erabiltzaile bakoitzeko

PMPM diru-sarrerak = tasa × izena emandako kideak × hilabeteak
  saltzailearen marjina = PMPM − kide bakoitzeko hileroko zerbitzatzeko kostua
  — engagementak zeinua aldatzen du: B2C harpidetzetan engagementak diru-sarrerak
    gidatzen ditu; PMPMn, kide engaged-ek zerbitzatzeko KOSTU gehiago dute lo daudenek
    baino, eta emaitzetan oinarritutako kontratuek berriro irauli egiten dute
```

## Adibide landua

B2C lo-aplikazio bat: £6.99/hilabete, hileroko abandonua %18, CAC mistoa £38.

```
LTV = 6.99 / 0.18 ≈ £38.8 → LTV:CAC ≈ 1.0 — ez bideragarria

Birbideratu enplegatzaile PMPMra: £1.20 PMPM × 40,000 estalitako bizitza = £48k/hilabete
Zerbitzatzeko kostua: azpiegitura £0.15 + laguntza £0.10 + edukia £0.05
  kide bakoitzeko ≈ £0.30 → marjina ~%75, salmenta-zikloa luzea baina abandonua
  kontratu-mailakoa da (urtekoa), ez erabiltzaile-mailakoa (eguneroa)

Enplegatzailearen galderak metrika aldatzen du: dolar gogorreko ROIa (erreklamazio
murriztuak, absentismoa) gutxitan frogagarria da ongizate-produktuetan —
industriaren erantzuna VOI da: produktibitatea, kontratazio-erakargarritasuna,
engagementa — zintzoa VOI gisa etiketatuta bakarrik, ROI gisa jantzita ez
(ikus return-on-investment.md eta social-return-on-investment.md).
```

## Software ingeniaritzarekin lotura

Ingeniaritza-hautuek ratioaren bi aldeak finkatzen dituzte: **zerbitzatzeko kostua** arkitektura da ([hodei-unitateen ekonomia](../hodei-unitateen-ekonomia/) — PMPM marjina kide bakoitzeko azpiegitura-kostuaren mende bizi edo hiltzen da), eta **LTV** atxikipenaren ingeniaritza da (abandonu-puntu bakoitza diru-sarrera aritmetikoa da — [atxikipena](../atxikipena-eta-uzte-tasa/) dokumentuaren QALY matematikak diru-sarreren bikote zehatza du). Osasun-produktuetarako bereziki, unitate-ekonomiako dashboardak hirugarren lerro bat eraman behar luke LTV eta CACren ondoan: **eskuratutako erabiltzaile bakoitzeko osasun-balioa** (atxikipenaren arabera haztatutako QALY × atalasea) — ordaintzaile- eta DiGA estiloko merkatuek gero eta gehiago horretan prezioztatzen dutelako, eta bere unitate-ekonomia komertziala eta klinikoa aldentzen diren produktu batek (errentagarria baina osasunarentzat inerte, edo eraginkorra baina finantza-ezina) jakin behar duelako zein arazo duen.

## Tranpak

- **LTV lehen kohorteko abandonutik**: abandonua behera egonkortzen da; baina baita bizirauletza-alborapena — lehen erabiltzaileek hobeto atxikitzen dute eskalatutako publikoek baino. Erabili kohorte helduen datuak.
- **CAC kanalen gainean nahasia**: social ordainduaren CAC eta klinikoaren deribazio-CAC 10× desberdinak dira, atxikipen-profil kontrakoekin — segmentatu edo engainatu.
- **PMPM erabilera-mugarik gabe**: engagement-muturreko kideek marjinak irauli ditzakete; modelatu banaketa, ez batez bestekoa.
- **VOI ROI gisa aurkeztea** finantza-zuzendari bati — enplegatzaileen ongizate-industriak hamarkada bat eman zuen irabazten duen sinesgarritasun-hutsegitea.

## Iturriak

- Healthtech unit economics primers. <https://smart-it.io/blog/how-to-calculate-unit-economics-for-healthcare-startups/>
- PMPM pricing frameworks for digital health. <https://www.quintupleaim.com/blog/strategic-pricing-for-digital-health-startups-in-value-based-care-per-member-per-month-pmpm-frameworks>
