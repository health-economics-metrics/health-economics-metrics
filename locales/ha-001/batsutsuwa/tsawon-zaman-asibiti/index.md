# Tsawon Zaman Asibiti (LOS)

Tsawon zaman asibiti shi ne adadin kwanaki daga shigar asibiti zuwa sallama — babban ma'aunin ingancin gudana na kulawar marasa lafiya da ke kwance. Matsakaicin asibitocin gaggawa na Birtaniya yana kusa da kwana 4–5; kowace rana ta ƙari tana cinye gado mai ƙarancin yawa kuma tana fallasa majiyyaci ga haɗarin da asibiti ke haifarwa.

## Dalilin muhimmancinsa

LOS yana tuƙa kusan duk abin da ke cikin tattalin arzikin asibitin gaggawa: ƙarfin gado, fitarwar tiyatar zaɓi, kwararar gaggawa, ma'aikata. Rage matsakaicin LOS ko da ɓangarorin rana a girma yana 'yantar da ƙarfi mai yawa (duba [kwanakin gado da aka ceta](../kwanakin-gado-da-aka-ceta/)). LOS kuma alamar inganci ce ta hanyoyi biyu — tsayi yana nuna gazawar tsari (jinkirin bincike, takardun sallama, jiran kulawar zamantakewa); gajeru na iya nufin sallama da wuri, wanda ke bayyana daga baya a matsayin [komawa asibiti](../adadin-komawa-asibiti/).

## Lissafin

```
LOS (per spell)  = discharge date − admission date
Average LOS      = occupied bed days / discharges (report mean AND median;
                   LOS is heavily right-skewed by long-stay outliers)

Comparisons require case-mix adjustment (age, diagnosis, acuity),
or you are measuring who the hospital admits, not how it performs.
```

Dokar Little tana haɗa masu canjin gudana: `beds occupied = admission rate × average LOS` — doka ɗaya da ke mulkin jerin gwano na manhaja (duba [ma'aunan gudana](../ma-aunan-gudana/)).

## Misali da aka lissafa

Asusun asibiti yana karɓar marasa lafiya na gaggawa na likitanci 40/rana a matsakaicin LOS na kwana 6.0: gadaje 240 suna cike har abada (40 × 6). Manhajar haɗa sallama (bin ayyuka, sarrafa magungunan sallama ta atomatik, yin rajistar sufuri) tana rage wutsiyar zaman da ba ta asibiti ba da kwana 0.4 a matsakaici.

```
Beds needed = 40 × 5.6 = 224 → 16 beds freed continuously
            = 16 × 365 = 5,840 bed days/year
```

A ƙimanta kwanakin gado 5,840 bisa hanya (sake cikawa/rufewa/sassauci) bisa [kwanakin gado da aka ceta](../kwanakin-gado-da-aka-ceta/). A lura da abin da ya motsa: ba magani ba, sai *jira* — majiyyaci ya riga ya dace da lafiya; tsarin yana ci gaba da takardu. Wannan matsalar jerin gwano ce, kuma manhaja tana da kyau a matsalolin jerin gwano.

## Alaƙa da injiniyancin manhaja

LOS shi ne lokacin zagayen asibiti, kuma littafin ingantawa iri ɗaya ne da aikin kwararar isarwa: a sanya kayan aiki a matakai (shiga → magani → ya dace da lafiya → an sallame shi a zahiri), a nemo inda lokaci ke taruwa (a mika aiki ne), a cire jiran maimakon ƙara ƙarfi. Rukunin "ya dace da lafiya don sallama amma har yanzu yana mamaye gado" shi ne sigar asibiti ta PR da aka amince amma ba a haɗa ba. Damar manhaja kai tsaye: tsara ayyukan sallama, saurin sakamakon bincike, rubuta magungunan sallama ta e-prescribing, haɗa turawa zuwa kulawar zamantakewa.

## Tarkuna

- **Bayar da rahoton matsakaici kawai** — masu fice suna mamaye; matsakaici mai faɗuwa na iya ɓoye wutsiyar dogon zama mai girma.
- **Rashin gyaran haɗin lamuri** a da'awar kafin/bayan: iyakokin shigar asibiti suna canzawa bisa lokutan shekara da shekaru.
- **Rage LOS da ke sake bayyana a matsayin komawa asibiti** — koyaushe a haɗa da'awar LOS da bayanan komawa na kwanaki 30.

## Tushe

- OECD, length of hospital stay indicator. <https://www.oecd.org/en/data/indicators/length-of-hospital-stay.html>
- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
