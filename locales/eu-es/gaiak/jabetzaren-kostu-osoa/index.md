# Jabetzaren kostu osoa (Total Cost of Ownership, TCO)

TCO sistema baten bizitza osoko kostu osoa da: eskuratzea edo eraikitzea, integrazioa, eragiketa, mantentze-lanak, laguntza, prestakuntza eta desaktibazioa. Oinarri deserosoa: **mantentze-lanak softwarearen TCOaren %50–80 dira** — bizitza osoko kostuaren hiru laurden inguru abian jarri *ondoren* iristen dira.

## Zergatik axola duen

Osasun-teknologiaren ebaluazioak aspaldi ikasi zuen sendagai baten prezioa ez dela bere kostua: administrazioa, monitorizazioa eta albo-ondorioen kudeaketa ereduan sartzen dira. Eraikuntza/lizentzia-kostua bakarrik zenbatzen duten software-negozio-kasuek sendagaien prezio inozoaren akatsa errepikatzen dute, eta sistematikoki gutxiesten dute elikatzen dituzten [ICER](../kostu-eraginkortasun-gehigarriaren-ratioa/) eta [aurrekontuaren inpaktu](../aurrekontu-inpaktuaren-analisia/) bakoitzaren kostu-aldea. NHSren erosketetan, TCO diziplinak egiten du produktu digital baten kostu-eraginkortasunaren aldarrikapena zintzoa — eta bertan galtzen dute merke itxura duten aukerek.

## Matematika

```
TCO = initial cost (build/licence + integration + data migration + training)
    + Σ_t [operations + maintenance + support + infrastructure + upgrades
           + compliance/assurance]_t / (1 + r)^t
    + decommissioning cost (exit, data extraction, parallel running)

Horizon: 3–5 years commercial, system-lifetime for clinical infrastructure
r: 3.5% public sector (Green Book), 8–12% commercial
Benchmarks: annual maintenance ≈ 15–20% of build cost; ~78% of lifetime
TCO post-launch; ignore decommissioning and vendor lock-in prices itself.
```

## Adibide landua

Behaketa elektronikoen sistema baterako bi aukera, 5 urteko horizontea:

```
                        Vendor SaaS     In-house build
Year 0 (licence/build)  £250,000        £900,000
Integration + training  £180,000        £150,000
Annual run (yrs 1–5)    £120,000/yr     £190,000/yr  (hosting + 1.5 FTE maint.)
Exit/decommission       £60,000         £30,000

Undiscounted TCO        £1,090,000      £2,030,000
```

Eraikuntza-aukeraren ingeniaritza-estimazioa (£900k) bere benetako TCOaren %44 baino ez zen — eta eraikuntza-estimazioek berek %30–40ko gainkostua izan ohi dute (ikus [eraiki vs erosi](../eraiki-vs-erosi/)). Etxeko aukerak *emaitza* nabarmen ezberdinak entregatzen ez baditu, [kostu-minimizazioaren](../kostu-minimizazio-analisia/) logika aplikatzen da eta SaaSek irabazten du ~£940k-ko aldearekin.

## Software ingeniaritzarekin lotura

Ingeniariek beren arloko mantentze-datuak gutxiesten dituzte eraikuntzak defendatzean: eraikuntza-kostuaren %15–20ko urteko mantentze-arauak esan nahi du £1M-ko sistema bakoitzak isilean £150–200k/urteko etorkizuneko gaitasuna konprometitzen duela — [zor teknikoaren](../zor-teknikoa/) balantze mental berean egon behar duen pasiboa. TCO biltegi honetako metrika orotako kostu-erdia ere bada: hedapen bakoitzeko kostua, [hodei-unitate ekonomia](../hodei-unitateen-ekonomia/) eta HTAk sendagai-sustatzaileei ezartzen dien izendatzailearen diziplina. Zure produktuaren prezioa zalantzan jartzen denean, aurrekoaren benetako eragiketa-kostuak barne hartzen dituen TCO alderaketa izan ohi da eskuragarri dagoen birformulazio indartsuena. Goiko bezalako urte anitzeko TCO zifra denboran zehar kostu-lerro askoren batura da — ikus [moneta-segurua den kostuen bilketa](../moneta-segurua-den-kostu-agregazioa/) eredu batek zentimora arte bateratu behar duenean batura hori puntu mugikorrekoa baino hamartar zehatzekoa zergatik izan behar den jakiteko, eta [zentimo zehatzeko kostu-esleipena](../zentimo-zehatzeko-kostu-esleipena/) TCO osoa kostu-zentroen artean zentimorik galdu gabe banatzeko.

## Tranpak

- **Abiarazte-kostuan aingura jartzea**: aukerak 0. urteko kostuan alderatzea, sailkapena 3. urterako irauli egiten denean.
- **Barne-lan doakoaren faltsukeria**: etxeko mantentze-lana zero kostuz zenbatzea "taldea dagoeneko ordainduta dagoelako" — ikus [aukera-kostua](../aukera-kostua/).
- **Irteera-kostuak ez ikustea**: datuen irteera, kontratuaren amaiera eta paralelo-exekuzioa dira SaaS "merkea" garestitzen den lekua.
- **Horizonte bera ez errespetatzea**: 3 urteko SaaS TCO bat 10 urteko eraikuntza-amortizazio batekin alderatzea (ikus [denbora-horizontea](../denbora-horizontea/)).

## Iturriak

- IBM, total cost of ownership. <https://www.ibm.com/think/topics/total-cost-of-ownership>
- Software maintenance cost benchmarks. <https://pegotec.net/software-maintenance-cost-percentage-2026-industry-benchmarks/>
