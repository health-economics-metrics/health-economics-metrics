# Kuɗin Jinkiri (CoD)

Kuɗin Jinkiri shi ne darajar tattalin arziki da ake asara a kowace naúrar lokaci da fasali, samfur, ko hidima ba a isar ba. Shi ne gada mafi ƙarfi tsakanin ma'aunan isar da manhaja da tattalin arzikin lafiya: yana mayar da "mun aika a makara" zuwa kuɗi — ko zuwa QALY.

## Dalilin muhimmancinsa

Ƙa'idar Reinertsen: "Idan za ka ƙididdige abu ɗaya kawai, ƙididdige Kuɗin Jinkiri." Yawancin ƙungiyoyi sun san abin da aikin ke kashewa amma ba abin da wata ɗaya na jinkiri ke kashewa ba, don haka suna inganta kasafin kuɗi alhali suna zubar da darajar lokaci. Ga manhajar kula da lafiya, abin da ke kan layi na zahiri ne: kowane mako da aka jinkirta inganta hanya, marasa lafiya suna jira tsawon lokaci cikin mafi munin yanayin lafiya. CoD ita ce mafi ƙarfin tsarin lissafi da za a gabatar wa masu ruwa da tsaki na NHS domin tana ƙayyade farashin *rashin* manhajarka.

## Lissafin

```
CoD = benefit per unit time forgone while undelivered   (£/week or QALYs/week)

Total delay loss = CoD × delay duration

For prioritization, see wsjf-and-cd3.md: CD3 = CoD / duration.
```

Ga manhajar asibiti, a bayyana a lafiya da kuɗi duka:

```
CoD_health = patients affected per week × QALY gain per patient
CoD_money  = CoD_health × λ (willingness-to-pay threshold, £20k–30k/QALY)
             + operational savings per week forgone
```

## Misali da aka lissafa

**Aiki**: manhaja tana adana £200 ga kowane majiyyaci a kan hanya; asusun asibiti yana sarrafa irin waɗannan marasa lafiya 50/mako.

```
CoD = 200 × 50 = £10,000/week
A 10-week procurement delay costs 200 × 50 × 10 = £100,000 in avoidable waste.
```

**Asibiti**: ingantaccen rarrabewa yana cire makonni 5 na jira (amfani 0.68 → 0.80 da wuri) ga marasa lafiya 100/mako:

```
QALY gain per patient = (5/52) × 0.12 ≈ 0.0115
CoD_health = 100 × 0.0115 = 1.15 QALYs/week
CoD_money  = 1.15 × £20,000 ≈ £23,000/week of health value
```

Jinkirin turawa na watanni 6 "yana kashe" ~QALY 30 — hujjar da ke sake tsara jinkirin ƙaddamar da IT a matsayin lamarin asibiti. (Ma'auni na girma: sanannen binciken Maersk na Black Swan Farming ya gano fasalolin guda ɗaya masu CoD ≈ $200k/mako waɗanda suka jira makonni 38.)

## Alaƙa da injiniyancin manhaja

CoD ita ce ma'aunin da ke sa [lokacin jagoranci na DORA](../ma-aunan-dora/) da [ingancin gudana](../ma-aunan-gudana/) su zama masu iya karantuwa a kuɗi: lokacin jagoranci × CoD = kuɗi (ko lafiya) da aka ƙone a jerin gwano. Amfani:

- **Fifiko**: a jera aiki bisa CoD/tsawon lokaci ([WSJF/CD3](../wsjf-da-cd3/)) maimakon mai ruwa da tsaki mafi surutu.
- **Tattalin arzikin tsari**: jadawalin fitarwa na makonni 2 yana da kuɗin jinkiri da ake tsammani na ~mako 1 × CoD ga kowane fasali idan aka kwatanta da ci gaba da isarwa — a ƙayyade farashin tarin.
- **Sayayya**: zagayen sayen NHS na watanni 6–18 yana da CoD; nuna shi yana canza tattaunawar gaggawa (duba [binciken tasirin kasafin kuɗi](../binciken-tasirin-kasafin-kuɗi/) don takwaran iya biya).

## Tarkuna

- **Zaton CoD mai layi**: wasu ayyuka suna da daraja mai siffar wa'adi (ranakun ƙa'ida — CoD marar iyaka bayan ranar, sifili kafin ita) ko daraja mai ruɓewa (tagogin mai fara farko). A rarraba siffar gaggawa kafin a ninka.
- **CoD a kan fitarwa da babu mai so**: jinkiri yana kashe kuɗi ne kawai idan abin yana da daraja; shara da aka jinkirta kyauta ce.
- **Ƙidaya jinkiri da rage daraja sau biyu**: [rage daraja](../rage-daraja-da-fifikon-lokaci/) ya riga ya ƙayyade farashin lokaci a tsawon shekaru da yawa; CoD sigar aiki ce ta cikin tsawon lokaci. A yi amfani da CoD don makonni/watanni, sauya NPV don shekaru.

## Tushe

- Reinertsen DG, *The Principles of Product Development Flow*.
- Black Swan Farming, Cost of Delay. <https://blackswanfarming.com/cost-of-delay/>
- Cost of delay overview. <https://en.wikipedia.org/wiki/Cost_of_delay>
