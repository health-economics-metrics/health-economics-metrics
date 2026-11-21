# Populasjonsattribuerbar andel (PAF)

PAF er andelen av en sykdoms- eller utfallsbyrde i en befolkning som kan tilskrives eksponering for en bestemt risikofaktor: den delen som ville forsvinne hvis eksponeringen ble fjernet helt. Den gjør «denne risikofaktoren dobler oddsen din» om til et tall på befolkningsnivå som en bestiller faktisk kan planlegge ut fra: hvor mange tilfeller, og hvor mye kostnad, en gitt eksponering virkelig er verdt å bekjempe.

## Hvorfor det er viktig

Levin introduserte PAF i 1953 for å svare på et smalt, konkret spørsmål: hvis ingen røykte, hvor mye lungekreft ville forsvinne? Den samme aritmetikken dimensjonerer nå nasjonal forebyggingsplanlegging overalt, fra tobakks- og fedmestrategier til rangeringene av risikofaktorer i WHOs Global Burden of Disease-studie, fordi en relativ risiko alene ikke sier noe om virkning: en risikofaktor kan doble oddsen for en sjelden hendelse og knapt flytte sykdomsbyrden i befolkningen, eller bare øke oddsen for en vanlig hendelse litt og likevel forklare en enorm andel av tilfellene. PAF er det som gjør «risikofaktor X er farlig» om til «å fjerne risikofaktor X ville forebygge så mange tilfeller i året», tallet forretningscasen for et forebyggingsprogram faktisk trenger. Se [forebyggingsøkonomi](../forebyggingsøkonomi/) for hva det koster å handle på det tallet når du har det.

## Matematikken

```
PAF = forekomst_eksponerte × (relativ_risiko − 1) / (1 + forekomst_eksponerte × (relativ_risiko − 1))

forekomst_eksponerte = andelen av befolkningen som er eksponert for risikofaktoren (0–1)
relativ_risiko       = risiko for utfallet hos eksponerte mot ueksponerte (f.eks. 2,5 = 2,5×)

Attribuerbare tilfeller = totale_tilfeller × PAF
```

PAF stiger med både eksponeringsforekomst og relativ risiko: en moderat forhøyet relativ risiko (si 1,5×) knyttet til en svært vanlig eksponering kan gi en større PAF enn en dramatisk relativ risiko (si 5×) knyttet til en sjelden. Det er hele grunnen til at den finnes som et eget tall ved siden av relativ risiko.

## Gjennomarbeidet eksempel

En risikofaktor er til stede hos 30 % av en befolkning (`forekomst_eksponerte = 0,3`) og øker risikoen for utfallet 2,5 ganger (`relativ_risiko = 2,5`):

```
PAF = 0,3 × (2,5 − 1) / (1 + 0,3 × (2,5 − 1))
    = 0,3 × 1,5 / (1 + 0,3 × 1,5)
    = 0,45 / 1,45
    ≈ 0,3103 (31,0 %)

Med 1 000 tilfeller/år i befolkningen:
Attribuerbare tilfeller = 1 000 × 0,3103 ≈ 310 tilfeller/år
```

Litt under en tredjedel av denne utfallsbyrden per år kan tilskrives eksponeringen: å eliminere den helt (det teoretiske taket; ingen reell intervensjon oppnår 100 % fjerning av eksponeringen) ville forebygge omtrent 310 av de 1 000 tilfellene hvert år.

## Kobling til programvareutvikling

PAF er den epidemiologiske versjonen av «hvor stor del av hendelsesvolumet vårt kan tilskrives denne ene rotårsaken?»: samme type spørsmål som team stiller når de dimensjonerer en bestemt klasse av utrullinger eller avhengigheter mot samlede produksjonshendelser, i stedet for å behandle hver hendelse som like verdt å rette på samme måte. En rotårsakskategori som finnes i en stor andel av utrullingene og bare har en moderat relativ risiko for å forårsake en hendelse, kan gå foran en sjelden kategori med høy relativ risiko når man skal avgjøre hvor ingeniørinnsatsen settes inn først: nøyaktig PAF-innsikten, oversatt.

## Fallgruver

- **Å summere PAF-er på tvers av risikofaktorer**: PAF-er for flere faktorer som påvirker samme utfall summerer seg ikke til 100 %; til sammen kan de overstige det, fordi faktorer samvirker og deler årsaksveier. Behandle hver PAF som «hvis bare denne faktoren ble fjernet», aldri som en deling av total risiko.
- **Å flytte en relativ risiko mellom befolkninger**: en relativ risiko estimert i én befolkning (annen grunnleggende eksponeringsforekomst, andre konfunderende faktorer) gir en misvisende PAF når den anvendes på en annen befolknings eksponeringsforekomst.
- **Å forveksle PAF med attribuerbar risiko hos de eksponerte**: PAF er på befolkningsnivå og avhenger av eksponeringsforekomsten; attribuerbar risiko hos de eksponerte er på individnivå og gjør det ikke. De besvarer ulike spørsmål: ikke bruk det ene for å svare på det andre.

## Kilder

- Levin ML. «The occurrence of lung cancer in man.» Acta Unio Int Contra Cancrum. 1953;9(3):531-41.
- Rockhill B, Newman B, Weinberg C. «Use and misuse of population attributable fractions.» Am J Public Health. 1998;88(1):15-9.
