# Zor teknikoa (Technical Debt)

Zor teknikoa kode-oinarri batean iraganeko erabaki bizkorren etorkizuneko kostu inplizitua da: zor den konponketa-lana (**principal**, kapitala) eta entregan etengabe eragiten duen oztopoa (**interesa**). SQALE bezalako kuantifikazio-metodoek metafora izatetik kostuan jarritako pasibo izatera pasatzen dute.

## Zergatik axola duen

Kuantifikatu gabe, zor teknikoa kexa bat da; kuantifikatuta, negozio-kasu bat. Industria-oinarriak (CAST Appmarq, 1,400 aplikazio / 550M LOC): historikoki ≈ **$3.61 zor teknikoaren kapital kode-lerroko**, kode-oinarri tipikoek berreraikuntza-kostuaren %15–20ko zor-ratioa daramate, ohiko osasun-barra ≤%5ekoaren aurrean (SonarQube-ren "A" nota). Osasun-ekonomiaren markoa zehazki egokitzen da: zorra *egoera kronikoa* da — tratatu gabe, aurrera egiten du, bere "interesa" entrega motelago eta akats-tasa handiago gisa konposatzen da, eta konponketak gaitasunagatik lehiatzen du eginbide-lanarekin, prebentzioak tratamenduarekin lehiatzen duen bezala.

## Matematika

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

Kapitalak pasiboa adierazten du; **interesak** inbertsio-kasua egiten du. £500k kapital ordaintzea £40k/urteko interesa saihesteko truke txarra da; £400k/urte saihesteko, bikaina.

## Adibide landua

400k LOCko erregistro klinikoen integrazio-geruza bat: SQALE kapitala 3,800 ordu × £75 = **£285k**; TDR ≈ %12 (C nota). Neurtutako interesa: geruza hau ukitzen duten taldeek ziklo-denborak %40 luzeagoak eta aldaketen hutsegite-tasa 2 aldiz handiagoak erakusten dituzte jabetza osoaren oinarriarekin alderatuta. Geruzak 6,000 garatzaile-ordu/urte xurgatzen ditu:

```
Interest ≈ 6,000 × 0.40 × £75      = £180,000/year (velocity drag)
         + 12 extra failures × £8,000 = £96,000/year (rework/incidents)
         ≈ £276,000/year

Remediate the worst 30% of principal (£85k) targeting hotspots → modelled
interest reduction 60%: saves ~£166k/year. Payback ≈ 6 months.
```

Hotspot-en helburuak axola du: zor-interesa aldaketa-maiztasuna × zor-dentsitatea gailurrean dauden lekuan kontzentratzen da — gutxitan ukitzen den zorra konpontzeak ez du ezer erosten, inoiz aurrera egingo ez lukeen egoera bat tratatzea bezala ([prebentzioaren ekonomia](../prebentzioaren-ekonomia/)).

## Software ingeniaritzarekin lotura

Zor teknikoaren argudioak hobetzen dituzten osasun-ekonomiaren inportazioak: adierazi ondarea **zama-inbentario** gisa ([DALY](../ezgaitasunez-doitutako-bizi-urtea/) estilokoa — non daude galdutako ingeniaritza-urte osasuntsuak?); justifikatu amortizazioa progresio-matematikarekin, zintzo (normalean kostu-eraginkorra, ez kostu-aurrezlea); pisatu sistema okerrenen konponketa [larritasun-defizitaren](../qaly-defizita-eta-larritasun-modifikatzaileak/) arabera; eta aurkeztu konponketa-proposamen handiak [saihestutako behe-ibilbideko kostuen](../saihestutako-beheranzko-kostuak/) arauak gainditzen dituen konpentsazio-analisiarekin — probabilitatez pisatua, deskontatua, behin zenbatua.

## Tranpak

- **Kapitala bakarrik jakinaraztea**: interesaren estimaziorik gabeko zenbaki handi beldurgarriak ez du ezer justifikatzen.
- **Tresnek sortutako zor-zifrak hitzez hitz hartzea**: SQALEk arau-urraketak zenbatzen ditu; arkitektura-zorra (garestia dena) galtzen du eta hutsalkeriak zenbatzen ditu.
- **Zor-zeroaren utopismoa**: zor-maila optimoa ez da zero — zorra palanka da; galdera interes-tasa da.
- **"Berridazketak dena saihesten du"**: berridazketa-proposamenek konpentsazio-arau berak gainditu behar dituzte — kostu kontrafaktuala, probabilitatea, deskontua.

## Iturriak

- CAST, technical debt estimation. <https://www.castsoftware.com/glossary/technical-debt-estimation>
- Letouzey J-L, "The SQALE method for evaluating Technical Debt." <https://www.researchgate.net/publication/239763591_The_SQALE_method_for_evaluating_Technical_Debt>
