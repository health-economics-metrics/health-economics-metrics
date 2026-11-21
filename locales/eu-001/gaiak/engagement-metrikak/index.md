# Engagement metrikak (Engagement Metrics)

Engagement metrikek erabiltzaileek osasun-aplikazio bat benetan zenbat erabiltzen duten neurtzen dute: DAU/MAU stickiness, saio-maiztasuna eta iraupena, funtzionalitateen erabilera. Osasun digitalean, engagementa ez da harrokeria — **dosia** da: edozein efektu klinikok zeharkatu behar duen esposizioa.

## Zergatik axola duen

Botilan gelditzen den sendagaiak ez du inor sendatzen; instalatu gabe edo irekitzen ez den aplikazioa hutsegite-modu bera da. Kontsumorako osasun-produktu baten osasun-ekonomiako aldarrikapen orok engagementaren bidez biderkatzen du — saiakuntzetan erakutsitako eraginkortasuna erabilera-maila batean neurtu zen, eta mundu errealeko balioa hedapeneko erabilera maila horretara zenbat hurbiltzen den eskalatzen da. Produktu-erreferentzia estandarrak: **DAU/MAU %20 inguru osasuntsutzat jotzen da** aplikazio mugikorretan orokorrean, >%25 apartekoa; osasun-aplikazioak maiz baxuagoak izaten dira.

## Matematika

```
Stickiness (DAU/MAU) = eguneko erabiltzaile aktiboak / hileko erabiltzaile aktiboak × 100
Saio-metrikak        = saioak/erabiltzaile/aldi; batez besteko iraupena = denbora osoa / saioak
Funtzionalitate-engagementa = funtsezko ekintza egiten duten erabiltzaileak / erabiltzaile aktiboak

Dosi-erantzunaren enkuadrea (osasun-ekonomiaren eguneratzea):
  lortutako efektua ≈ saiakuntza-efektua × f(benetako erabilera / saiakuntza-erabilera)
  non f dosi-erantzunaren analisitik datorren — ikus adherence-and-persistence.md-ko
  "engagement eraginkorra" kontzeptua: nahi den emaitza lortzeko erabilera nahikoa,
  neurrizkoa eta finitua izan daitekeena
```

## Adibide landua

Odol-presioko aplikazio baten azterketa giltzarriak 6 mmHg sistolikoaren jaitsiera erakutsi zuen astean ≥4 irakurketa erregistratzen zituzten erabiltzaileen artean. 50.000 erabiltzaile erregistraturen hedapenean:

```
MAU 20,000 (%40); horien artean, ≥4×/aste erregistratzen: 7,000
Dosi eraginkorreko erabiltzaileak = 7,000 / 50,000 = erregistratutako oinarriaren %14

Populazio-mailako efektua ≈ saiakuntza-efektua %14ri entregatua, ez %100i:
"50,000 erabiltzaile × 6 mmHg" aipatzen duen edozein eredu ekonomikok ~7× gainestimatzen du.
Eredu zintzoa: 7,000 × efektu osoa + kreditu partziala (dosi-erantzunaren datuetatik,
badaude) atalase azpiko 13,000 erabiltzaileentzat.
```

Biderketa hau — engagement-inbutuaren bidez dosi eraginkorrera — osasun digitaleko ekonomiak gehien puztzen diren lekua da.

## Software ingeniaritzarekin lotura

Ingeniariek engagement-inbutuaren jabe dira, eta horrek aldagai *kliniko* baten jabe bihurtzen ditu: onboarding-marruskadurak, jakinarazpen-estrategiak, kargatze-denborak eta konexiorik gabeko erresilientziak entregatutako dosia mugitzen dute. Bi diseinu-inplikazio: instrumentatu **ekintza klinikoki esanguratsua** (erregistratutako irakurketak, osatutako ikasgaiak), ez irekierak — jakinarazpen-errebotez egindako saioetan eraikitako DAU dosi-iruzurra da; eta tratatu engagement-helburuak *nahikotasun*-helburu gisa, ez maximizazio gisa — astean 5 minututan emaitza lortzen duen eta bidetik kentzen den aplikazioa klinikoki ideala da eta metrikoki "txarra" (ikus engagement eraginkorra [atxikimendua eta jarraitutasuna](../atxikimendua-eta-jarraitutasuna/)-n). Balioetsi engagement-lana bera goiko populazio-efektuaren ereduaren bidez: dosi eraginkorraren zatian 2 puntuko irabaziak QALY lerro kuantifikagarria da.

## Tranpak

- **Engagementa emaitza gisa**: erabilera bidea da; emaitza [PROM](../pazienteek-jakinarazitako-emaitzak/) edo amaiera-puntu klinikoa da.
- **Erabilera bimodalaren gaineko batez bestekoak**: osasun-aplikazioen populazioak erabiltzaile dedikatuetan eta mamuetan banatzen dira; batez bestekoek ez dute inor deskribatzen — kohortetan banandu.
- **Dark-pattern dosi-puzteak**: streak-ek eta errua sortzen duten jakinarazpenek metrikak igotzen dituzte eta osasun-aplikazioek zerbitzatzen dituzten populazio antsiosoak kaltetu ditzakete; produktu klinikoek etika klinikoa daramate.
- **Saltzaile-erreferentzien jatorria**: argitaratutako engagement-erreferentzia gehienak analitika-saltzaileetatik datoz, ez aldizkariko berrikuspenetik; kalibratu zure saiakuntzen aurka.

## Iturriak

- App engagement benchmarks. <https://getstream.io/blog/app-retention-guide/>
- Health app KPI guides. <https://www.darly.solutions/blog/key-metrics-for-health-apps-success-a-guide-to-kpis-and-outcomes>
- Yardley L, et al. on effective engagement. <https://pmc.ncbi.nlm.nih.gov/articles/PMC8726056/>
