# Bashin Fasaha

Bashin fasaha shi ne kuɗin nan gaba da aka ɗauka na shawarwarin da suka gabata na gaggawa a cikin tushen lamba: aikin gyara da ake bi (**tushe**) da jan ragamar isarwa da yake yi a kai a kai (**riba**). Hanyoyin ƙididdigewa kamar SQALE suna mayar da shi daga misali zuwa wajibi mai farashi.

## Dalilin muhimmancinsa

Idan ba a ƙididdige shi ba, bashin fasaha gunaguni ne; idan an ƙididdige shi, shari'ar kasuwanci ce. Tushen masana'antu (CAST Appmarq, manhajoji 1,400 / LOC miliyan 550): a tarihi ≈ **$3.61 na tushen bashin fasaha ga kowane layin lamba**, tare da tushen lamba na yau da kullum yana ɗauke da rabon bashi na 15–20% na kuɗin sake ginawa, idan aka kwatanta da matakin lafiya da ake amfani da shi ≤5% (daraja "A" ta SonarQube). Tsarin tattalin arzikin lafiya yana dacewa daidai: bashi *yanayi ne na dindindin* — idan ba a magance shi ba, yana ci gaba, "ribarsa" tana ninkuwa a matsayin isarwa mai jinkiri da ƙarin adadin lahani, kuma gyara yana gogayya don ƙarfi da aikin siffofi daidai yadda rigakafi ke gogayya da magani.

## Lissafin

```
SQALE principal   = Σ over violations (remediation time) × developer cost rate
Technical debt ratio (TDR) = remediation cost / redevelopment cost × 100
                    (SonarQube grades: A ≤ 5%, B ≤ 10%, C ≤ 20%, D ≤ 50%)

Interest (the number that justifies paydown):
  interest/year = Δ delivery velocity × value per unit velocity
                + Δ defect rate × cost per defect
Paydown case  = PV(interest avoided over horizon) − remediation cost
                (discounted — see discounting-and-time-preference.md)
```

Tushe yana bayyana wajibi; **riba** ita ce ke yin shari'ar jari. Biyan tushen £500k don kauce wa riba £40k/shekara ciniki ne mara kyau; don kauce wa £400k/shekara, mai kyau sosai.

## Misali da aka lissafa

Layin haɗin bayanan marasa lafiya na LOC 400k: tushen SQALE sa'o'i 3,800 × £75 = **£285k**; TDR ≈ 12% (daraja C). Ribar da aka auna: ƙungiyoyin da ke taɓa wannan layi suna nuna lokutan zagaye 40% mafi tsayi da adadin gazawar canji 2× idan aka kwatanta da tushen gida. Layin yana cin sa'o'in mai haɓakawa 6,000/shekara:

```
Interest ≈ 6,000 × 0.40 × £75      = £180,000/year (velocity drag)
         + 12 extra failures × £8,000 = £96,000/year (rework/incidents)
         ≈ £276,000/year

Remediate the worst 30% of principal (£85k) targeting hotspots → modelled
interest reduction 60%: saves ~£166k/year. Payback ≈ 6 months.
```

Nufin wurare masu zafi yana da muhimmanci: ribar bashi tana taruwa inda yawan canji × yawan bashi ya fi girma — gyara bashin da ba a taɓa shi da wuya ba ba ya sayen komai, kamar magance yanayin da ba zai taɓa ci gaba ba ([tattalin arzikin rigakafi](../tattalin-arzikin-rigakafi/)).

## Alaƙa da injiniyancin manhaja

Abubuwan da aka shigo da su daga tattalin arzikin lafiya da ke inganta muhawarar bashin fasaha: bayyana gidan a matsayin **kayan nauyi** (salon [DALY](../shekarar-rayuwa-da-aka-daidaita-da-nakasa/) — ina shekarun injiniya masu lafiya da aka rasa suke?); hujjar biya da lissafin ci gaba, da gaskiya (yawanci mai tasirin kuɗi, ba mai ceton kuɗi ba); auna gyaran tsarin da suka fi muni da [gibin tsanani](../gibin-qaly-da-masu-gyaran-tsanani/); kuma a gabatar da manyan shawarwarin gyara tare da binciken rage kuɗi da ke tsira ƙa'idodin [kuɗin ƙasa da aka kauce wa](../kuɗin-ƙasa-da-aka-kauce-wa/) — an auna da yiwuwa, an rage daraja, an ƙirga sau ɗaya.

## Tarkuna

- **Bayar da rahoton tushe kawai**: babbar lamba mai ban tsoro ba tare da kiyasin riba ba ba ta hujjar komai.
- **Ɗaukar lambobin bashi da kayan aiki suka samar a zahiri**: SQALE yana ƙirga keta ƙa'idoji; yana rasa bashin gine-gine (nau'in mai tsada) kuma yana ƙirga ƙananan abubuwa.
- **Mafarkin bashi-sifili**: matakin bashi mafi kyau ba sifili ba ne — bashi shi ne amfani da jari; tambayar ita ce adadin riba.
- **"Sake rubutawa yana kauce wa duka"**: shawarwarin sake rubutawa dole su cika ƙa'idodin rage kuɗi iri ɗaya — kuɗin yanayin da ba a yi ba, yiwuwa, rage daraja.

## Tushe

- CAST, technical debt estimation. <https://www.castsoftware.com/glossary/technical-debt-estimation>
- Letouzey J-L, "The SQALE method for evaluating Technical Debt." <https://www.researchgate.net/publication/239763591_The_SQALE_method_for_evaluating_Technical_Debt>
