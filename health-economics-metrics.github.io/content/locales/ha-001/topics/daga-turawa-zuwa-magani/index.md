# Daga Turawa zuwa Magani (RTT)

Daga turawa zuwa magani shi ne lokacin da ya wuce daga turawar GP zuwa farkon magani da likita ƙwararre ke jagoranta. Kundin Tsarin NHS ya kafa ƙa'idar: **92% na marasa lafiya su fara magani cikin makonni 18**. RTT shi ne ma'aunin aiki mafi bayyana a siyasa a NHS ta Ingila.

## Dalilin muhimmancinsa

Asibitocin da suka kasa cimma maƙasudin RTT suna fuskantar bincike na ƙa'ida, shiga tsakani, da lalacewar suna; jerin jiran ƙasa lamba ce ta shafin gaba. Kowane mako da majiyyaci ke jira lafiya ce da aka rasa (jira a mummunan yanayin lafiya — duba lissafin QALY a ƙasa) kuma sau da yawa kuɗi ne da aka samu (yanayi suna ta'azzara; duba [shiga tsakani da wuri](../shiga-tsakani-da-wuri/)). Manhajar da ke ceton lokaci a ko'ina cikin hanyar daga turawa zuwa magani — rarrabawa, saurin sakamakon gwaje-gwaje, ƙarfin asibiti, tsarawa — tana rage sakamakon aiki da na kuɗi na gazawa a ƙa'ida kai tsaye, shi ya sa tasirin RTT yake layin fa'ida na farko a shari'o'in kasuwanci na dijital na NHS.

## Lissafin

```
RTT performance = patients treated within 18 weeks / total treated × 100
Waiting-time health cost per patient = wait duration × (utility_treated − utility_waiting)

Pathway view: RTT = Σ stage durations (referral triage → first appointment →
diagnostics → decision → treatment) — improve the longest queue, not the
busiest stage (see flow-metrics.md).
```

## Misali da aka lissafa

Wani fanni yana yi wa marasa lafiya 5,000 hidima a shekara; matsakaicin jira makonni 24; amfanin jira 0.68 da na magani 0.80.

Rarrabawa ta dijital tare da ƙa'idodin kai-tsaye-zuwa-gwaji suna cire makonni 5 na jerin gwano zalla:

```
QALY gain = 5,000 × (5/52) × (0.80 − 0.68) = 57.7 QALYs/year
Monetized at £20,000–£30,000/QALY (see willingness-to-pay-thresholds.md):
  ≈ £1.15M–£1.73M/year of health value
```

— kuma asibitin yana sauya daga ketare zuwa cimma ƙa'idar makonni 18, wanda yake da darajar shugabanci da ba wani maƙunsar bayanai da ke ɗauka gaba ɗaya.

## Alaƙa da injiniyancin manhaja

RTT **ma'aunin lokacin jagoranci ne a kan jerin gwano na matakai da yawa** — sigar asibiti ta lokacin jagoranci daga commit zuwa samarwa (duba [ma'aunan DORA](../ma-aunan-dora/)). Hanyar ingantawa iri ɗaya ce: sanya kayan aunawa a kowane mataki, nemo inda lokacin kalanda ke taruwa (kusan koyaushe mika aiki da jerin gwano ne, ba aikin asibiti ba), kuma cire yanayin jira. Nasarorin manhaja na gama-gari: rarrabawa ta e-triage da ke tura turawa cikin sa'o'i maimakon rukunin mako-mako, tura sakamakon gwaje-gwaje maimakon alƙawuran bibiya, da sharuɗɗan kai-tsaye-zuwa-gwaji ta atomatik. Daraja ingantawar da [kuɗin jinkiri](../kuɗin-jinkiri/) da aka auna a QALY/mako.

## Tarkuna

- **Inganta matakin da ba shi ne cikas ba** — rage jiran alƙawari na farko yayin da jerin gwajin bincike ke girma kawai yana motsa tafkin.
- **Yin wasa da lambobi**: sake saita hanya da dakatar da agogo na iya inganta RTT da aka ruwaito ba tare da yi wa kowa magani da wuri ba; duba rarraba ta ƙasa.
- **Da'awar ingantawar dukan hanyar** ga kayan aiki ɗaya yayin da canje-canje da dama suka sauka tare — danganta yana buƙatar mai kwatantawa.

## Tushe

- NHS England, RTT waiting times statistics. <https://www.england.nhs.uk/statistics/statistical-work-areas/rtt-waiting-times/>
- NHS England, elective care recovery plan. <https://www.england.nhs.uk/coronavirus/publication/delivery-plan-for-tackling-the-covid-19-backlog-of-elective-care/>
