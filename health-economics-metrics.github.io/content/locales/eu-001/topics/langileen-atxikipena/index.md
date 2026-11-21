# Langileen atxikipena (Workforce Retention)

Langileen atxikipenaren ekonomiak langile-errotazioak osasun-sistema bati zenbat kostatzen dion zenbatesten du —kontratazioa, sarrera-prestakuntza, hutsune-estaldura— eta, beraz, administrazio-nekea murrizten duen softwareak zenbat balio duen. Administrazio-datuen zeregin errepikakorrek eragindako nekea (burnout) NHSko langile-errotazioaren eta gaixotasun-absentismoaren eragile nagusietako bat da.

## Zergatik axola duen

Klinikari batek alde egiten duenean, trusta hiru aldiz ordaintzen du: ordezkoa kontratatzeko (iragarkiak, agentzia-tarifak, elkarrizketak), sarrera-prestakuntzarako (produktibitate murriztuko hilabeteak, gainbegiratzea) eta tarte horretan hutsunea estaltzeko —normalean agentziako edo ordezko langileekin, Agenda for Change oinarrizko tarifen 2–3 aldiz (ikus [saihestu daitezkeen azpikontratazio-kostuak](../saihestu-daitezkeen-azpikontratazio-kostuak/) eta [diru-sarrera zuzena askatzen duten aurrezpen gogorrak](../diru-sarrera-sortzen-duten-aurrezki-gogorrak/)). Errotazio-kostuak benetako dirua direnez, atxikipenaren hobekuntzak finantza-zuzendari batek kontabilizatu ditzakeen langile-onura urrietako dira. Administrazio-marruskadura etengabe aipatzen da klinikoen nekearen eragile nagusien artean, eta horrek software bidez konpon daitekeen kostu bihurtzen du.

## Matematika

```
Cost per leaver = recruitment cost + onboarding/productivity-ramp cost
                + vacancy cover premium × vacancy duration

Annual turnover cost = headcount × turnover rate × cost per leaver

Value of software  = headcount × Δturnover rate × cost per leaver
                   + sickness-absence reduction × cover cost/day
```

Kausa-kateak bi lotura estimatu ditu —softwarea → neke/marruskadura, eta nekea → errotazioa—, beraz, bientzako ebidentzia bildu (langile-inkestak aurretik/ondoren; argitaratutako neke-uzte asoziazioak) eta eskatutako Δ neurritsu mantendu.

## Adibide landua

Trust batek 1,200 erizain ditu; errotazioa %11/urte. Alde egiten duen bakoitzaren kostua:

```
Recruitment ≈ £4,500;  onboarding/ramp ≈ £6,000
Vacancy cover: 4 months × 0.6 WTE covered by agency premium ≈ £8,000
Total ≈ £18,500 per leaver
Baseline turnover cost = 1,200 × 0.11 × 18,500 ≈ £2.44M/year
```

Dokumentazio-karga arintzen duen softwareak (ebaluazio automatikoki betetzeak, sarbide bakarra, diktaketa) errotazioa ehuneko-puntu 1 mugi dezake sinesgarriki:

```
Value = 1,200 × 0.01 × 18,500 = £222,000/year cash-relevant
```

Langile-inkestetako marruskadura-puntuazioek babesten duten 1 puntuko eskaera sinesgarria da; 4 puntukoa ez. Exekutatu [tornadoa](../sentikortasun-analisia/) Δerrotazioaren gainean: ereduko gainerako guztia menderatzen du.

## Software ingeniaritzarekin lotura

Ingeniaritzaren atxikipenaren matematika berdina da eta dokumentazio okerragoa du: ingeniari senior bat ordezkatzeak soldata osoaren 6–12 hilabete kostatzen ditu (kontratazioa, abiapuntua, galdutako testuingurua), beraz, urteko %15eko erorketa duen 200 pertsonako erakunde batek milioika erretzen ditu urtero errotazioan. Garatzaile-esperientziaren inbertsioa ([SPACE eta DevEx](../space-eta-devex/)) erizainentzako dokumentazio-karga arintzearen analogo zuzena da, eta modu berean justifikatu behar da: marruskadura-puntuazio neurtuak, atxikipenean eragin neurritsu bat eta alde egiten duen bakoitzaren kostua zure finantza-datuetatik. Kopiatzeko osasun-ekonomiaren diziplina *alde egiten duena zintzo kostuan jartzea* da, jendea tresnengatik "benetan" joaten den ala ez eztabaidatu beharrean.

## Tranpak

- **Errotazioaren mugimendu guztia zure esku-hartzeari egoztea** — lan-merkatuek softwareak baino askoz gehiago mugitzen dute errotazioa; erabili kontrol-taldeak edo, gutxienez, sektoreko joeraren doikuntza.
- **Bikoiztutako zenbaketa**: atxikipen-aurrezkiak eta agentzia-gastuaren aurrezkiak gainjartzen dira (hutsune-estaldura agentzia-gastua *da*); bateratu lerroak.
- **Atzerapena ez ikustea**: nekeak eragindako uzteak marruskaduraren aldaketei 1–2 urtean erantzuten die, ez hurrengo hiruhilekoan.

## Iturriak

- NHS England, reducing agency spend. <https://www.england.nhs.uk/long-read/reducing-agency-spend-in-the-nhs/>
- NHS Staff Survey (burnout and intention-to-leave data). <https://www.nhsstaffsurveys.com/>
