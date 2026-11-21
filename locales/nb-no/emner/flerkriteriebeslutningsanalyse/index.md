# Flerkriteriebeslutningsanalyse (MCDA)

Flerkriteriebeslutningsanalyse (MCDA) er en poengmodell med vektet sum som brukes i vurdering av helseteknologi når én enkelt ICER-/betalingsvillighetsterskel ikke fanger alt en beslutningstaker bryr seg om: rettferdighet, udekket behov, innovasjon, budsjettvirkning, sykdommens alvorlighetsgrad. Hvert kriterium får en vekt som gjenspeiler dets viktighet (hentet fra interessenter, vekter som summerer til 1), hvert alternativ får en normalisert poengsum per kriterium (typisk 0–1), og den samlede poengsummen er den vektede summen: samme matematiske form som et poengkort for valg av programvareleverandør.

## Hvorfor det er viktig

MCDA brukes i rammeverk som EVIDEM, og av enkelte HTA-organer ved vurderinger av legemidler mot sjeldne sykdommer, der en streng terskeltilnærming med kostnad per QALY anses som for snever til å fange alt som betyr noe i en beslutning. ISPORs MCDA Emerging Good Practices Task Force formaliserte veiledning om god praksis for å hente ut vekter og poengsummer på en forsvarlig måte, nettopp fordi en uformelt vektet beslutning er lett å konstruere og lett å manipulere. Når en helseteknologi virkelig har verdidimensjoner som en enkelt [betalingsvillighetsterskel](../betalingsvillighetsterskler/) ikke kan representere, som alvorlighetsgrad, innovasjon og rettferdighet, gir MCDA beslutningstakere en eksplisitt, etterprøvbar struktur for å kombinere dem, i stedet for en uuttalt skjønnsvurdering.

## Matematikken

```
MCDA-poengsum = Σ_i (vekt_i × poeng_i)

vektene bør summere til 1 (hentet med interessentmetoder som
swing-vekting eller Analytic Hierarchy Process)
```

## Gjennomarbeidet eksempel

Et HTA-utvalg gir en digital terapi poeng på fire kriterier:

```
Kriterium                          Vekt     Poeng   Vekt × Poeng
Klinisk nytte                      0,4      0,8     0,32
Kostnadseffekt                     0,3      0,5     0,15
Sykdommens alvorlighet / udekket behov 0,2  0,9     0,18
Innovasjon                         0,1      0,6     0,06
                                    ─────                ─────
                                    1,0                  0,71
```

Vektene summerer til 1,0 (0,4 + 0,3 + 0,2 + 0,1), og MCDA-poengsummen er 0,71 (0,32 + 0,15 + 0,18 + 0,06). Utvalget sammenligner 0,71 med en på forhånd avtalt terskel, eller rangerer den mot konkurrerende teknologier som er vurdert på samme måte.

## Kobling til programvareutvikling

Dette er nøyaktig den samme matematikken som et vektet poengkort for leverandørvalg, en evalueringsmatrise for en RFP eller en poengmodell for prioritering av funksjonalitet; se [bygge kontra kjøpe](../bygge-kontra-kjøpe/), et klassisk bruksområde for vektede poengkort i programvareinnkjøp. Det er også verdt å sette den opp mot [WSJF og CD3](../wsjf-og-cd3/): WSJF/CD3 er en *forholdsbasert* prioriteringsmetode (kostnad ved forsinkelse delt på jobbstørrelse eller varighet), mens MCDA er en vektet *sum*. MCDA og WSJF/CD3 er to strukturelt ulike svar på «hvordan rangerer vi konkurrerende alternativer», og å vite hvilken en gitt beslutning faktisk krever, additiv verdi over uavhengige kriterier eller verdi­tetthet per enhet knapp kapasitet, betyr mer enn hvilken formel som ser mest streng ut.

## Fallgruver

- **Skjevhet i hentingen av vekter**: den som setter vektene, forhåndsbestemmer i praksis rangeringen, slik at en «formel» kan hvitvaske en politisk eller kommersiell beslutning som en objektiv beregning. Dokumenter hvem som satte vektene og hvordan.
- **Dobbelttelling av et kriterium som allerede er fanget opp andre steder**: å gi poeng for «kostnadseffektivitet» som ett kriterium og *i tillegg* gi poeng for «kostnadseffekt» separat, gir penger uforholdsmessig stor vekt i forhold til de andre kriteriene uten at noen har ment det.
- **Falsk presisjon**: en vektet poengsum med to desimaler (0,71) antyder mer strenghet enn de underliggende interessentvurderingene på en skala fra 0–10 faktisk bærer, og variasjonen mellom vurderere i disse vurderingene rapporteres ofte ikke i det hele tatt.

## Kilder

- Thokala P, Devlin N, Marsh K, et al. «Multiple Criteria Decision Analysis for Health Care Decision Making — An Introduction: Report 1 of the ISPOR MCDA Emerging Good Practices Task Force.» Value Health. 2016;19(1):1-13.
- Goetghebeur MM, Wagner M, Khoury H, et al. «Evidence and Value: Impact on DEcisionMaking — the EVIDEM framework and potential applications.» BMC Health Serv Res. 2008;8:270.
