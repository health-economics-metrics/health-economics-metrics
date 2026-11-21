# Urruneko pazienteen monitorizazioaren ekonomia (Remote Patient Monitoring Economics)

Pazienteak etxean monitorizatzeko itzulketa- eta kostu-konpentsazio ekonomia: AEBetan, CPT kodeen diru-sarrera-pila definitu bat; osasun-zerbitzu nazionaletan, ospitaleratzeen saihespena eta ward birtualen ekonomia, **etxeko ospitale** ordezkapen osora arte.

## Zergatik axola duen

RPM gailuen datuak osasun-arreta fakturagarri bihurtzen diren lekua da. AEBetako Medicare egitura (2025eko batez besteko nazionalak) ezohiko esplizitua da:

```
99453  setup & patient education     ~$19.73  one-time (after 16 days of data)
99454  device supply + transmission  ~$43.03  per 30 days — REQUIRES ≥16 days
                                              of readings in the 30
99457  first 20 min/month management ~$47.87  requires ≥20 logged minutes
99458  each additional 20 min        ~$38.49
```

Betetzen duen paziente-hilabete batek gutxi gorabehera **$90–130 PMPM** pilatzen ditu. Kostu-konpentsazioaren aldetik, etxeko ospitale programek (CMS Acute Hospital Care at Home salbuespena: 300+ ospitale) ~$1.800–$3.000 aurrezten dituzte topaketa bakoitzeko ospitaleratze-arretaren aldean, berrospitalizazio eta infekzio gutxiagorekin: monitorizazioak eta arreta birtualak sistemako baliabiderik garestia, langileekin hornitutako ohea, ordezka dezaketela erakusten duen frogarik argiena.

## Matematika

```
RPM revenue (US)  = enrolled × billing-compliant fraction × code stack PMPM
  — the 16-day rule makes wear-time compliance (wearable-validation.md)
    a revenue variable, and the 20-minute rule makes clinical-time
    logging an engineering requirement

NHS-style value   = admissions avoided × marginal admission cost
                  + bed days substituted × (inpatient − virtual-ward day cost)
                  − service cost (devices, platform, monitoring staff)
  (see emergency-attendance-avoidance.md and bed-days-saved.md for the
   attribution and marginal-cost rules)
```

## Adibide landua

AEBetako kontsulta batek 400 hipertentsio-paziente matrikulatzen ditu; %70k 16 eguneko atalasea betetzen du hilabete tipiko batean; kudeaketa-minutuak %60rentzat erregistratuta:

```
Monthly revenue ≈ 400 × [0.70 × 43.03 + 0.60 × 47.87] = 400 × 58.84 ≈ $23,500
Annual ≈ $282,000; service cost (devices $12/mo, staff 0.8 FTE) ≈ $180,000
Margin ≈ $100k/year — and note the levers are engineering levers:
raising the 16-day compliance from 70% → 85% adds ~$31k/year
(device comfort, sync reliability, reminder design).
```

NHSko ispilua: %80ko okupazioarekin 50 ohetako ward birtual batek ospitaleratze-egunak ordezkatzen ditu £150 aurrezki garbi/egun: 50 × 0,8 × 365 × 150 ≈ **£2,19M/urte** gordina, plataformaren, gailuen eta langileak jartzen dituen erizaintza komunitarioko taldearen aurka.

## Software ingeniaritzarekin lotura

RPM plataformak **funtzionatze-denborak eta sinkronizazio-fidagarritasunak zuzenean diru-sarrera bihurtzen diren** produktu bakanetakoak dira (sinkronizazio hutsegindako aste batek kohorte baten 16 eguneko atea hausten du), eta non auditoria-mailako denbora-jarraipena (20 minutuko araua) lehen mailako eginbidea den, ez ondorengo pentsamendu bat. Eraiki honetarako: paziente bakoitzeko betetze-panelak, berreskura daitekeen bitartean faktura-hilabete arriskuan daudenak azaleratzen dituztenak; denbora-zigilatutako, manipulazio-ebidentzia duten datu-aztarnak (ordaintzaileen auditoriak errutinazkoak dira); eta alerta-ekonomiaren doikuntza: alerta bakoitzak monitorizazio-taldearen minutuak kontsumitzen ditu, eta horiek dira fakturagarria den unitatea eta baliabide urria ([screening-aren ekonomia](../screening-aren-ekonomia/) atalaseen aukeraketa gobernatzen du).

## Tranpak

- **Matrikulazioa ≠ diru-sarrera**: betetze-zatia da zenbakia; modelatu, ez suposatu.
- **AEBetako kodeak NHSko kasuetara transplantatzea** — osasun-zerbitzu nazionalek ospitaleratzeen saihespena erosten dute, ez CPT pilak; exekutatu bigarren eredua.
- **Konpentsazio-aldarrikapenak batez besteko kostuan** kostu finkoak geratzen diren ospitaleratzeentzat (ikus [kostu marjinala vs batez bestekoa](../kostu-marjinala-vs-batez-bestekoa/)).
- **Monitorizazio-taldearen saturazioa**: alerta-bolumena matrikulazioarekin eskalatzen da; langile-lerroa eredu gehienek ahazten duten murrizketa loteslea da.

## Iturriak

- RPM CPT codes and 2025 rates. <https://blog.prevounce.com/quick-guide-remote-patient-monitoring-rpm-cpt-codes-to-know>
- CMS hospital-at-home outcomes reporting. <https://www.mcknightshomecare.com/news/hospital-at-home-achieved-cost-savings-among-all-top-diagnosis-groups-cms-reports/>
- Telehealth.HHS.gov, billing for RPM. <https://telehealth.hhs.gov/providers/best-practice-guides/telehealth-and-remote-patient-monitoring/billing-remote-patient>
