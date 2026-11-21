# Multicriteria-beslisanalyse (MCDA)

Multicriteria-beslisanalyse (MCDA) is een scoremodel met gewogen som dat in de beoordeling van gezondheidstechnologie wordt gebruikt wanneer één enkele ICER-/betalingsbereidheidsdrempel niet alles vangt waar een beslisser om geeft: billijkheid, onvervulde behoefte, innovatie, budgetimpact, ernst van de ziekte. Elk criterium krijgt een gewicht dat zijn belang weerspiegelt (afgeleid van belanghebbenden, gewichten die optellen tot 1), elke optie krijgt per criterium een genormaliseerde score (doorgaans 0–1), en de totaalscore is de gewogen som: dezelfde wiskundige vorm als een scorekaart voor de selectie van een softwareleverancier.

## Waarom het ertoe doet

MCDA wordt gebruikt in kaders als EVIDEM en door sommige HTA-instanties bij beoordelingen van weesgeneesmiddelen en zeldzame aandoeningen, waar een strikte benadering met een drempel voor kosten per QALY als te beperkt wordt gezien om alles te vangen wat bij een beslissing van belang is. De ISPOR MCDA Emerging Good Practices Task Force heeft richtlijnen voor goede praktijk geformaliseerd om gewichten en scores verdedigbaar af te leiden, juist omdat een informeel gewogen beslissing makkelijk te construeren en makkelijk te manipuleren is. Wanneer een gezondheidstechnologie werkelijk waardedimensies heeft die één enkele [betalingsbereidheidsdrempel](../betalingsbereidheidsdrempels/) niet kan weergeven, zoals ernst, innovatie en billijkheid, geeft MCDA beslissers een expliciete, controleerbare structuur om ze te combineren in plaats van een onuitgesproken oordeel.

## De wiskunde

```
MCDA-score = Σ_i (gewicht_i × score_i)

gewichten horen op te tellen tot 1 (afgeleid via methoden voor
belanghebbenden zoals swing-weging of het Analytic Hierarchy Process)
```

## Uitgewerkt voorbeeld

Een HTA-commissie scoort een digitale therapie op vier criteria:

```
Criterium                          Gewicht  Score   Gewicht × Score
Klinisch voordeel                  0,4      0,8     0,32
Kosteneffect                       0,3      0,5     0,15
Ernst van de ziekte / onvervulde behoefte 0,2  0,9  0,18
Innovatie                          0,1      0,6     0,06
                                    ─────                ─────
                                    1,0                  0,71
```

De gewichten tellen op tot 1,0 (0,4 + 0,3 + 0,2 + 0,1) en de MCDA-score is 0,71 (0,32 + 0,15 + 0,18 + 0,06). De commissie vergelijkt 0,71 met een vooraf overeengekomen drempel of rangschikt het tegen concurrerende technologieën die op dezelfde manier zijn gescoord.

## Verbinding met software-engineering

Dit is exact dezelfde wiskunde als een gewogen scorekaart voor leveranciersselectie, een beoordelingsmatrix voor een RFP of een scoremodel voor het prioriteren van functionaliteit; zie [bouwen versus kopen](../bouwen-versus-kopen/), een klassiek gebruiksgeval van een gewogen scorekaart bij software-inkoop. Het loont ook om het af te zetten tegen [WSJF en CD3](../wsjf-en-cd3/): WSJF/CD3 is een op een *verhouding* gebaseerde prioriteringsmethode (kosten van vertraging gedeeld door omvang of duur van het werk), terwijl MCDA een gewogen *som* is. MCDA en WSJF/CD3 zijn twee structureel verschillende antwoorden op "hoe rangschikken we concurrerende opties", en weten welke een bepaalde beslissing werkelijk vraagt (additieve waarde over onafhankelijke criteria, of waardedichtheid per eenheid schaarse capaciteit) is belangrijker dan welke formule rigoureuzer oogt.

## Valkuilen

- **Vertekening bij het afleiden van gewichten**: wie de gewichten vaststelt, bepaalt feitelijk de rangorde vooraf, zodat een "formule" een politieke of commerciële beslissing als objectieve berekening kan witwassen. Documenteer wie de gewichten heeft vastgesteld en hoe.
- **Dubbeltelling van een criterium dat elders al is meegenomen**: "kosteneffectiviteit" als één criterium scoren en *daarnaast* apart "kosteneffect" scoren, laat geld ongewild zwaarder wegen ten opzichte van de andere criteria.
- **Schijnprecisie**: een gewogen score met twee decimalen (0,71) suggereert meer rigoureusheid dan de onderliggende beoordelingen van belanghebbenden op een schaal van 0–10 feitelijk kunnen dragen, en de variabiliteit tussen beoordelaars in die beoordelingen wordt vaak helemaal niet gerapporteerd.

## Bronnen

- Thokala P, Devlin N, Marsh K, et al. "Multiple Criteria Decision Analysis for Health Care Decision Making — An Introduction: Report 1 of the ISPOR MCDA Emerging Good Practices Task Force." Value Health. 2016;19(1):1-13.
- Goetghebeur MM, Wagner M, Khoury H, et al. "Evidence and Value: Impact on DEcisionMaking — the EVIDEM framework and potential applications." BMC Health Serv Res. 2008;8:270.
