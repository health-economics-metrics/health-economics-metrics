# Aukera errealen balorazioa (Real Options Valuation)

Aukera errealen balorazioak finantza-aukerak prezioztatzeko logika aplikatzen die inbertsio-erabaki errealei (finantza-merkaturik gabekoei), zehazki proiektu bat arrakastatsua bada geroago *zabaltzeko aukerari*, hartara behartuta egon gabe. Aldi bakarreko eredu binomial sinplifikatu batek (Cox, Ross, Rubinstein, 1979) malgutasun hori zuzenean baloratzen du, "bidal dezagun txikia eta ikus dezagun" susmo izatetik prezioztatutako zenbaki izatera pasatuz.

## Zergatik axola duen

NPV estatiko batek proiektu bat dena-edo-ezer apustu gisa prezioztatzen du: finantzatu ala ez, gaurko eskalan, betiko. Proiektu errealak, eta bereziki faseka egindako osasun digitaleko hedapenak, gutxitan apostatzen dira horrela: osasun-sistema batek pilotu txiki bat finantza dezake, zer gertatzen den ikusi, eta funtzionatzen badu bakarrik konprometitu diru gehiago. Malgutasun horrek balio erreala du, eta alde batera uzteak sistematikoki gutxiesten ditu faseka egindako inbertsioak aldi bakarrekoen aldean, kontratazio-prozesuentzat hori guztiz alderantzizkoa da, faseka egindako proposamen seguruagoa dirudiena saritzen baitute. Aukera errealen balorazioak malgutasuna bera prezioztatzen du, faseka egindako proposamen bat konpromiso osoko alternatibarekin ondo konpara dadin, NPV inozo batean txikiagoa dirudielako zigortu beharrean.

## Matematika

```
Risk-neutral probability of the "up" state:
  p = ((1 + risk_free_rate) − down_factor) / (up_factor − down_factor)

Expansion payoff in each state (floored at zero — expanding is optional):
  payoff_up   = max(project_value × up_factor   − expansion_cost, 0)
  payoff_down = max(project_value × down_factor − expansion_cost, 0)

Option value (discounted expected payoff):
  option_value = (p × payoff_up + (1 − p) × payoff_down) / (1 + risk_free_rate)

Expanded NPV = static_npv + option_value
```

Proiektuaren balioa igo egiten da (`up_factor`) edo jaisten da (`down_factor`) hurrengo erabaki-punturako. Zabaltzea egoera horretan errentagarria bada bakarrik gauzatzen da: zeroko lurzoruak egiten du hau benetako *aukera* bat eta ez betebehar bat. Lehenik informazioa biltzeko aukera prezioztatzeko, geroago zabaltzeko aukeraren ordez, ikus [informazio perfektuaren balio esperoa](../informazio-perfektuaren-balio-esperoa/). Erabaki hori hartzeko itxaroteko kostuarentzat, ikus [atzerapenaren kostua](../atzerapenaren-kostua/).

## Adibide landua

Zerbitzu digital baten pilotua `project_value = £1.000.000`-ekin, hurrengo erabaki-punturako 1,5×-ra igo edo 0,5×-ra jaisteko aukerarekin, %8ko arrisku gabeko tasarekin eta £600.000ko zabaltze-kostuarekin:

```
p = (1.08 − 0.5) / (1.5 − 0.5) = 0.58

payoff_up   = max(1,000,000 × 1.5 − 600,000, 0) =  900,000
payoff_down = max(1,000,000 × 0.5 − 600,000, 0) = max(−100,000, 0) = 0

The floor matters: the option would NOT be exercised if the market
disappoints — the £600,000 expansion cost exceeds the £500,000 the
project would be worth in the down state.

option_value = (0.58 × 900,000 + 0.42 × 0) / 1.08
             = 522,000 / 1.08
             ≈ £483,333.33
```

Aukeraren balioa £200.000ko NPV estatikoaren oinarrira gehituta: NPV zabaldua = 200.000 + 483.333,33 ≈ **£683.333,33**. Aukera-balio hori gabe £200.000ko NPV estatikoa bakarrik jakinaraztea faseka egindako proiektuaren benetako balioa bikoitza baino gehiago gutxiestea litzateke.

## Software ingeniaritzarekin lotura

Hau "bidali orain gutxieneko bertsio bat, eta gorde aukera gehiago inbertitzeko arrakasta badu" ideiaren bertsio formala da: zuzenean garrantzitsua da faseka egindako osasun-produktu digital baten hedapenerako, egituraz paraleloa da [atzerapenaren kostua](../atzerapenaren-kostua/) eta [WSJF/CD3](../wsjf-eta-cd3/)-ren ziurgabetasunpeko sekuentziazioaren marko-lanarekin, eta osagarria da [informazio perfektuaren balio esperoa](../informazio-perfektuaren-balio-esperoa/) eta [lagin-informazioaren balio esperoa](../lagin-informazioaren-balio-esperoa/) ikuspegiekin: hirurek malgutasuna edo informazioa prezioztatzen dute ziurgabetasunpean, angelu desberdinetatik.

## Tranpak

- **Arrisku-neutroen prezioztapena mailegatzea oinarritzen den aktibo-merkaturatuaren hipotesirik gabe**: aukera errealen ereduek finantza-aukeren prezioztapenetik mailegatzen dute arrisku-neutroaren probabilitatea, eta horrek suposatzen du azpiko balioa aktibo *merkaturatua* dela; benetan merkaturatu gabeko proiektu errealentzat modelatze-erosotasuna da, ez merkatu-egitate literala.
- **`up_factor`/`down_factor` parametro libre gisa tratatzea**: goi/behe sarrera binomialak beraiek justifikazioa behar duten hipotesiak dira, nahi den erantzuna sortzeko aukeratutako parametro libreak ez.
- **Aukera-balioa bakarrik jakinaraztea**: aukera errealen balioa proiektu autonomo baten NPV estatikoari *gehitzen* zaio; akats ohikoa aukera-balioa bakarrik jakinaraztea eta oinarri-kasua uztea da, eta horrek kasua gehiegi estimatzen du NPV estatikoa negatiboa bada, eta gutxiesten du (goiko adibide landuan bezala) NPV estatikoa guztiz kanpoan uzten denean.

## Iturriak

- Cox JC, Ross SA, Rubinstein M. "Option pricing: a simplified approach." J Financ Econ. 1979;7(3):229-63.
- Trigeorgis L. *Real Options: Managerial Flexibility and Strategy in Resource Allocation*. MIT Press. 1996.
- Driffield T, Smith PC. "A real options approach to watchful waiting: theory and an illustration." Med Decis Making. 2007;27(2):178-88 — ties real options directly to a health-economics decision context. <https://pubmed.ncbi.nlm.nih.gov/17395932/>
