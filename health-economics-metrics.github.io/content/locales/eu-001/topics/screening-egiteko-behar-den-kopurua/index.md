# Screening egiteko behar den kopurua (Number Needed to Screen, NNS)

NNS da definitutako jarraipen-aldi batean **ondorio kaltegarri bat** saihesteko screening-a egin behar zaien pertsona kopurua (ez soilik tratatu behar direnena), populazioaren oinarrizko arriskua eta detekzio goiztiarrak eta tratamenduak lortzen duten arrisku erlatiboaren murrizketa kontuan hartuta. NNTren screening-programa mailako parekoa da: NNTk zenbat pertsona *tratatu* behar diren galdetzen du ondorio bat saihesteko; NNSk zenbat pertsonak egin behar duten *screening-a-eta-gero-tratamendua* bide osoa.

## Zergatik axola duen

Remboldek 1998an sartu zuen NNS, screening-programak tratamenduekin oinarri berean konpara zitezen, screening-proba baten arrisku erlatiboaren murrizketa nagusiak tratamendu batenak ez dituen bi gauza ezkutatzen baitituelako: screening-ra benetan gonbidatutako populazioaren oinarrizko arriskua, eta screening-a egiten duten guztiek, ez onura jasoko duen gutxiengoak bakarrik, probaren kostua eta positibo faltsuen zama jasaten dutela. Erresuma Batuko National Screening Committee-ren kostu-eraginkortasun iragazkia (ikus [screening-aren ekonomia](../screening-aren-ekonomia/)) bereizketa horretan oinarritzen da: oinarrizko arrisku txikiko populazio batean arrisku erlatiboaren murrizketa harrigarria duen screening-programa batek milaka batzuetako NNS izan dezake, eta orduan saihestutako ondorio bakoitzeko programaren kostua bihurtzen da benetako galdera.

## Matematika

```
NNS = 1 / (baseline_risk × relative_risk_reduction)

baseline_risk           = probability of the outcome in the screened
                           population over the follow-up period (0–1)
relative_risk_reduction = proportional risk reduction achieved by
                           screening-enabled early treatment (0–1)

Program cost per outcome prevented = NNS × cost_per_screen
```

Konparatu zuzenean [NNT](../tratatu-behar-den-kopurua/) delakoarekin: NNSk screening → diagnostikoa → tratamendua hodi osoaren eraginkortasuna zenbaki bakarrean biltzen du, NNTk pazientea diagnostikatuta dagoela eta tratamenduan hasten ari dela suposatzen duen bitartean.

## Adibide landua

Screening-programa baten helburu-populazioak ikasketa-aldian %2ko oinarrizko gertaera-arriskua du (`baseline_risk = 0.02`), eta detekzio goiztiarrak %25eko arrisku erlatiboaren murrizketa lortzen du (`relative_risk_reduction = 0.25`):

```
NNS = 1 / (0.02 × 0.25) = 1 / 0.005 = 200

200 people must be screened to prevent one outcome.

At £50 per screen:
Programme cost per outcome prevented = 200 × £50 = £10,000
```

£10.000ko zifra hori da ondorioaren beraren kostuarekin eta galduko zituen QALYekin alderatu beharrekoa: [prebentzioaren ekonomia](../prebentzioaren-ekonomia/) atalak prebentzio-programa orokorrentzat egiten duen konparazio bera.

## Software ingeniaritzarekin lotura

NNS da "zenbat erabiltzaile, gertaera edo eskaera igaro behar diren detekzio- edo triage-fluxu batetik jarduteko merezi duen egiazko positibo bat harrapatzeko"; zuzenean garrantzitsua da alertetan oinarritutako monitorizazio- eta triage-sistemetan, non helburu-egoeraren prebalentzia txikiak NNS puztu egiten duen, balio prediktibo positiboa erortzen duen modu berean (ikus [screening-aren ekonomia](../screening-aren-ekonomia/) eta [AA klinikoaren ebaluazioa](../aa-klinikoaren-ebaluazioa/)). Benetako harrapaketa bakoitzeko 200 gertaera prozesatu behar dituen monitorizazio-arau bat exekutatzea merezi du soilik harrapaketak gertaera bakoitzeko triage-kostua 200 aldiz gutxienez balio badu: goiko osasun-adibide landuaren aritmetika bera.

## Tranpak

- **Oinarrizko arriskuaren mendekotasuna alde batera uztea**: screening-proba edo -programa berak NNS (eta kostu-eraginkortasun) oso desberdina du arrisku handiko populazio batean eta arrisku txikiko batean. Ez eman inoiz NNS bat kalkulatu zen populazioa adierazi gabe.
- **Izendatzaile okerra zenbatzea**: NNSk *screening-a egin zaien* pertsonak zenbatzen ditu, ez positibo eman dutenak edo tratamenduan hasi direnak; hodi osoaren eraginkortasuna jada barnean dauka, beraz ez da inoiz positiboen gainean soilik zenbatutako metrika batekin alderatu behar.
- **Jarraipen-aldiak alderatzea**: jarraipen-aldi laburragoak NNS puztu ohi du, leihoan gertaera gutxiago behatzen direlako. NNS zifrak jarraipen-iraupen berean kalkulatuta daudenean bakarrik dira alderagarriak.

## Iturriak

- Rembold CM. "Number needed to screen: development of a statistic for disease screening." BMJ. 1998;317(7154):307-12.
