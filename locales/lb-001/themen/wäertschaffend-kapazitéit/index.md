# Wäertschaffend Kapazitéit (Operationellen Turnaround)

Wäertschaffend Kapazitéit ass de „Opportunitéitsnotzen" vu fräigesater Zäit: wat de Spidol elo mat de Stonnen *erreeche* kann, déi Är Software fräisetzt. Dat ass d'Metrik, déi de Chief Operating Officer a Medezinesch Direktere am meeschte wichteg ass, well se an där Währung schwätzt, no där si geféiert ginn — Aktivitéit, Ziler an Turnaround.

## Firwat et wichteg ass

Den NHS huet massiv Referral-to-Treatment-Réckstäng, an Trusts, déi national Waardezäitstandarden net erreechen, hunn et mat reglementarescher Kontroll an Interventioun ze dinn (kuckt [Referral to Treatment](../iwwerweisung-bis-behandlung/)). Anstellen ass lues a begrenzt; Immobilie si fix. De Facteur, dee séier wierkt, ass, méi wäertschaffend Aktivitéit aus existéierendem Personal a Raum erauszehuelen. Software, déi Spezialistenzäit zeréckgewënnt, „spuert" net just Geld — si *prägt Kapazitéit*: Ambulanzen, déi et net kéinte ginn, Assessmenter, déi net kéinte geplangt ginn, ouni anzestellen oder ze bauen.

## D'Mathematik

```
Geschaafe verstoppte Kapazitéit = fräigesat Zäit → ermëglecht Aktivitéitseenheeten × Schema-Wäert

Aktivitéitseenheeten: ambulant Besicher, prä-operativ Assessmenter, Iwwerwaachungsreviewen
Schema-Wäert:        nationalen Tarif / NHS-Payment-Scheme-Präisser
                     (kuckt national-tariff-and-unit-costs.md)
```

Dat ass d'Output-baséiert Bewäertung vun der [Zäit vum Praktiker](../zäit-vum-praktiker/), op eng Servicelinn skaléiert an an den Aktivitéitseenheeten ausgedréckt, an deenen d'Operatiounsequipe schonn plangt.

## Berechent Beispill

Spezialistepfleeger vum Band 6 féieren prä-operativ Assessment-Ambulanzen. Dokumentatiounsautomatiséierung gewënnt 1 Stonn/Dag fir jidderee vun 25 Pfleeger zréck; all Stonn passen 2 Assessmenter.

```
Zousätzlech Assessmenter = 25 Pfleeger × 2/Dag × 250 Deeg = 12.500/Joer
Bei ~120 £ Schema-Wäert pro prä-op Assessment:
  12.500 × 120 £ = 1,5 Mio. £/Joer u geschafener Versuergungskapazitéit
```

— ouni eenzege Pfleeger unzestellen oder een eenzege Raum ze bauen. (Dat wäit zitéiert Modell, dat dëse Stub ursprénglech zitéiert huet, huet d'Zuel op 766.920 £/Joer fir eng méi kleng Kohort gesat; d'arithmetescht Muster ass dat selwecht — d'Zuel skaléiert mat Pfleeger × Sessiounen × Tarif.) D'operationell Rummen fir de COO: prä-op Assessment hält op, de Flaschenhals bei den Operatiounssaal-Lëschte ze sinn — Operatiounen, déi um selwechten Dag annuléiert ginn, falen, an d'Operatiounssaal-Auslastung klëmmt, wat d'Plaz ass, wou déi *nächst* Notzenzeil ufänkt (kuckt [Optiméierung vun nodelege Ressourcen](../optiméierung-vun-nodelege-ressourcen/)).

## Bezuch zur Softwareentwécklung

Déiselwecht Reframing rett Entwéckler-Produktivitéitsbehaaptungen vun der Loun-Mathematik: fräigesaten Engineering-Zäit, ausgedréckt als *ausgeliwwert Fäegkeet, déi d'Organisatioun sech soss net kéint leeschten* — Features, Migratiounen, Zouverlässegkeetsaarbecht —, bewäert zu deem, wat d'Organisatioun fir esou Fäegkeet um Rand bezilt (Contractor-Taxen, oder Equivalenter vu verschobenen Astellungen). Dem COO seng Rummen léiert och eppes iwwer d'Pitch vu Plattformaarbecht: de Notzen an den Eenheeten ausdrécken, no deenen d'Publikum geféiert gëtt. Ops-Leader denken an Aktivitéit an Ziler, net a abstrakte Stonnen; Engineering-Leader denken a Roadmap-Elementer an Headcount, net a gespuerte Minutten.

## Falen

- **Kapazitéitsbehaaptungen ouni Nofro**: 12.500 zousätzlech Assessment-Plazen zielen just, wann d'chirurgesch Pipeline se fëllt — déi nodeeleg Contrainte préifen.
- **Tarifwäert ouni Zuelungsmechanismus**: ënner gemëschter Zuelung bréngt zousätzlech Aktivitéit vläicht keen zousätzlecht Akommes; de Wäert ka stattdessen Reduktioun vun der Waardelëscht sinn (kuckt [Impakt op d'Waardelëscht](../impakt-op-d-waardelëscht/)).
- **Kapazitéit als Cash presentéieren** — dat ass de Flaggschëff-net-cash-fräisetzenden Notzen; beschrëften (kuckt [Cash-fräisetzend vs. net cash-fräisetzend Ersparnisser](../cash-fräisetzend-vs-net-cash-fräisetzend-ersparnisser/)).

## Quellen

- NHS England, NHS Payment Scheme. <https://www.england.nhs.uk/pay-syst/national-tariff/national-tariff-payment-system/>
- NHS England, elective care recovery plan. <https://www.england.nhs.uk/coronavirus/publication/delivery-plan-for-tackling-the-covid-19-backlog-of-elective-care/>
