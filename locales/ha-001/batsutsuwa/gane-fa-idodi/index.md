# Gane Fa'idodi

Gudanar da gane fa'idodi (BRM) horo ne na ganowa, kafa tushe, bin diddigi, da *tabbatar da* cewa fa'idodin da aka yi alƙawari a shari'ar kasuwanci sun tabbata da gaske bayan isarwa. A saka hannun jarin gwamnati na Birtaniya yana cikin **Five Case Model** na Green Book na HM Treasury; a likitanci, ɗan uwansa shi ne sa ido bayan kasuwa.

## Dalilin muhimmancinsa

Shari'o'in kasuwanci alƙawura ne; gane fa'idodi shi ne binciken kuɗi. Kimantawar manyan shirye-shiryen dijital na NHS akai-akai sun gano fa'idodin da aka hasashe waɗanda ba su taɓa tabbata ba — kuma idan fa'idodin ba su saki kuɗi ba, ba su yi komai ga ribar asusun asibiti ba. Amsar Green Book: kowace shari'ar kashe kuɗi dole ta wuce **shari'o'i biyar** (dabara, tattalin arziki, kasuwanci, kuɗi, gudanarwa), tare da shirin gane fa'idodi a cikin shari'ar gudanarwa *kafin amincewa* — an ambaci masu mallaka, an kafa tushe, an saita ranakun aunawa. Ba tare da wannan ba, "manhajar ta ceci mintuna 30 ga kowace ma'aikaciyar jinya" ta kasance almara ta mai sayarwa har abada.

## Lissafin

```
Realization rate = benefits realized / benefits forecast   (per benefit, per period)

Mechanics that make it computable:
  baseline captured BEFORE go-live (else the delta is unmeasurable)
  each benefit: owner, metric, data source, measurement schedule
  forecast adjusted for optimism bias at appraisal (Green Book mandate)
  benefits classed cash / non-cash / qualitative and tracked separately
  (see cash-releasing-vs-non-cash-releasing.md)
```

## Misali da aka lissafa

Shari'ar kasuwanci ta e-rostering ta yi alƙawari, a kowace shekara: rage kuɗin hukumomi £450k (kuɗi), sa'o'in manajan ɗaki 8,000 (ƙarfi), ingantaccen bin ka'idar cike jadawali (na inganci). Watanni goma sha biyu bayan ƙaddamarwa:

```
Benefit           Forecast    Realized    Rate   Evidence
Agency spend      £450,000    £287,000    64%    ledger vs baseline year
Manager hours     8,000       5,100       64%    time-motion sample
Fill compliance   +10pp       +12pp       120%   rostering system data

Actions from the review (the point of BRM):
agency shortfall traced to two wards never onboarded → onboard them;
forecast model's 30%-optimism error logged → applied to the next case.
```

Gane kashi 64% ba gazawa ba ne — *ilimi* ne. Shari'o'in da ba a auna ba suna da'awar 100% har abada.

## Alaƙa da injiniyancin manhaja

Ƙungiyoyin injiniya suna amincewa da jarin dandamali bisa fa'idodin da aka hasashe kuma kusan ba sa duba su — daidai cutar da BRM ke warkarwa. Sauƙaƙen shigowa: kowace shawara sama da iyaka tana ambaton masu mallakar fa'ida, ma'aunan tushe, da ranar bita ta T+watanni 6; adadin gane fa'idodi yana komawa cikin yawan da ƙungiyar ke rage hasashen ƙungiyar (ko mai sayarwa) na gaba. Wannan kuma amsa ce ga shakkar kayan AI: [binciken MIT cewa ~95% na gwajin GenAI ba su nuna dawowar P&L da za a auna ba](../dawowar-jari-ta-ai/) sakamakon gane fa'idodi ne — gwajin da *suka* dawo suna da layukan fa'ida da za a bi masu mallaka. Hasashe → aunawa → sake daidaitawa shi ne zagayen da gwaje-gwajen da aka ƙayyade farashinsu da [EVPI](../darajar-da-ake-tsammani-ta-cikakken-bayani/), da aka gudanar a girman jerin ayyuka.

## Tarkuna

- **Rashin tushe kafin ƙaddamarwa** — rashin da ba za a iya gyarawa ba, mai kisa.
- **Rashin mai mallakar fa'ida**: rashin ambaton mai mallaka na nufin ba wanda ke tattara bayanai kuma kowace bita tana cewa "gabaɗaya a kan hanya."
- **Ƙidaya fa'idodi sau biyu a tsakanin shirye-shirye** masu da'awar ƙarfin da aka 'yantar iri ɗaya — a ajiye rajistar fa'ida a faɗin jerin ayyuka.
- **Wasan kwaikwayon gane fa'ida**: auna nasarori masu sauƙi na inganci alhali layukan kuɗi ba a duba su ba a shiru.

## Tushe

- HM Treasury, Green Book and Five Case Model guidance. <https://www.gov.uk/government/collections/the-green-book-and-accompanying-guidance-and-documents>
- Global Digital Exemplar programme evaluation (NHS digital benefits lessons). <https://pmc.ncbi.nlm.nih.gov/articles/PMC8685936/>
