# Moneta arteko ICER konparaketa (Cross-Currency ICER Comparison)

Herrialde baten monetan kalkulatutako [ICER](../kostu-eraginkortasun-gehigarriaren-ratioa/) bat beste herrialde baten [ordaintzeko borondatearen atalase](../ordaintzeko-borondatearen-atalaseak/)arekin alderatzeak — edo nazioarteko saiakuntza batean bildutako kostu-datuak biltzeak — monetak bihurtzeko urrats esplizitu eta auditagarri bat eskatzen du. Bihurtze-metodoa gaizki egiten bada, azpiko ebidentzia bera onarpen-erabaki bat irauli dezake, datu kliniko edo kostuekin ezer aldatu ez bada ere.

## Zergatik axola duen

ISPORen nazioarteko saiakuntza klinikoetarako metodo-gidak (Willke et al., *Health Economics*, 1998) kostu-baliabideak **erosteko ahalmenaren parekotasuna (PPP)** erabiliz bihurtzea gomendatzen du — ez merkatu-truke tasak —, herrialde artean baliabideen benetako balio ekonomikoa alderatzean, eta merkatu-truke tasak benetan zertarako diren erreserbatzea: mugaz gaindiko diru-ordainketen fluxu errealak modelatzeko. Biak nahastea nazioarteko HTAko metodologia-akatsik ohikoenetakoa da, bi zenbakiak "truke-tasa" dirudielako gida irakurri ez duenarentzat, eta kalkulu-orri batek ez zaituelako gaizki egitetik gelditzen.

## Matematika

```
icer_tokiko_monetan = convert(icer_iturburu_monetan, bihurketa_faktorea)

bihurketa_faktorea hau izan behar da:
  PPP bihurketa-faktorea — herrialde artean baliabideen benetako balio ekonomikoa
                            alderatzeko (ISPORek gomendatua nazioarteko
                            CEArako)
  merkatu-truke tasa     — mugaz gaindiko benetako diru-ordainketetarako bakarrik

onartu icer_tokiko_monetan < tokiko_atalasea bada
```

Erabaki-araua bera [ICER atalase-arau](../ordaintzeko-borondatearen-atalaseak/) arrunta da — `onartu ICER < λ bada` — gai honek jorratzen duen metodologia-galdera erabat da *zein bihurketa-faktorek* sortzen duen arau hori aplikatzen zaion `icer_tokiko_monetan` zifra.

## Adibide landua

AEBetako saiakuntza bateko sendagai baten ICERa $45,000/QALY da. Hipotetikoki, inportatzen duen herrialde batek bere atalase ilustratiboa £34,000/QALY ezartzen du (adibide honetarako bakarrik herrialde-zifra hipotetikoa — benetako atalaseak herrialdeen arabera aldatzen dira eta denboran zehar aldatzen dira, eta beti iturri eta data adierazi behar dira).

**0.72ko PPP bihurketa-faktorea erabiliz** (ilustratiboa, adibide landu honetarako bakarrik): $45,000 × 0.72 = £32,400/QALY. £32,400 < £34,000 → **onartu**.

**0.79ko merkatu-truke tasa erabiliz** horren ordez (ilustratiboa): $45,000 × 0.79 = £35,550/QALY. £35,550 > £34,000 → **baztertu**.

$45,000/QALYko ICER berak onartze-erabakia sortzen du PPP bihurketarekin eta baztertze-erabakia merkatu-FX bihurketarekin. Hori da ISPORen gidak bihurketa-faktorearen aukera metodologikoki garrantzitsutzat zergatik hartzen duen adibide konkretua — ez biribiltze-xehetasuna, ezta inork bi aldiz egiaztatzen ez duen kalkulu-orriko formula batean inplizitu uzteko zerbait.

## Software ingeniaritzarekin lotura

Hau ingeniaritza-domeinu ezagun baten osasun-ekonomiako ispilua da: softwarea komertzialean i18n/l10n moneta anitzeko prezioen zuzentasuna, non SaaS prezio-orri batek ez duen inoiz isilean `$` zenbateko bat `£` prezio batekin alderatu behar. `Money` mota on batek ematen duen mota-mailako bermea — moneta ez-parekatuak alderatzeari uko egiten dioten konparaketa-metodoak, lehen bihurtze-urrats esplizitu bat behartuz — hemengo osasun-ekonomiako puntu metodologikoaren paralelo zuzena da: ez alderatu bihurtu gabeko zifrak monetetan zehar, eta ez utzi bihurtze-urratsa inplizitu edo dokumentatu gabe.

## Tranpak

- **Moneta desberdinetako zenbatekoak isilean alderatzea**: ad hoc kalkulu-orriko HTA lana, dolar-zifra eta libera-zifra bat bihurketa-urratsik gabe kentzen edo alderatzen dituena — benetako moneta-kontziente `Money` motak eraikuntzaz harrapatzen duen akats-klasea, errore isil gisa utzi beharrean.
- **Merkatu-truke tasa eta PPP nahastea**: ISPORen gidaren arabera nazioarteko HTA metodoetako akats ohikoena — bi zenbakiek asko alda daitezke eta galdera desberdinei erantzuten diete (benetako balio ekonomikoa vs benetako diru-fluxua).
- **Erabilitako truke-tasa edo PPP indizea datatu gabe uztea**: biak denboran mugitzen dira, beraz aipatutako bihurketa-faktore orok datatuta egon behar du biltegi honek bere beste erreferentzia-zifrak datatzen dituen moduan (Green Book-eko karbono-balioak, saihestutako heriotzaren balioa, eta abar).

## Iturriak

- Willke RJ, Glick HA, Polsky D, Schulman K. "Estimating country-specific cost-effectiveness from multinational clinical trials." *Health Economics*. 1998;7(6):481-93.
- OECD, Purchasing Power Parities (PPP) data. <https://www.oecd.org/en/data/indicators/purchasing-power-parities-ppp.html>
