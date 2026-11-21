# Vermeidbar Outsourcing-Käschten

Wann en Trust Ziler net mat internen Kapazitéiten erreeche kann, kaaft e Kapazitéit zu Premium-Tariffer: Weekend-Iwwerstonne fir säi eegent Personal oder Prozeduren, déi un privat Leeschtungserbrénger ausgelagert ginn. Den ökonomesche Wäert vu kapazitéitfräisetzender Software enthält déi **vermeidbar Käschte vun där Premium-Aarbecht**.

## Firwat et wichteg ass

Ënner dem Drock vun der Erhuelung vun den Elektivbehandlungen bezuele Trusten routinéiert privatsektoral Spotpräisser (dacks 1,2–1,5× vum NHS-Scheme-Präis) oder Premium-Waiting-List-Initiative-Tariffer un hir eege Beroder fir Weekend-Lëschten. Anescht wéi normal Kapazitéitsbehaaptungen ass vermeed Outsourcing **cash-fräisetzend**: d'Rechnung un de private Leeschtungserbrénger gëtt wierklech net ausgestallt. Dat mécht et zu enger vun de stäerkste Notzenzeilen fir Software, déi den internen Duerchsaz erhéicht — an zu enger vun den einfachsten ze beleeën, well d'Outsourcing-Ausgab schonn eng siichtbar Budgetzeil ass.

## D'Mathematik

```
Vermeidbar Outsourcing-Käschten = an d'Haus zréckgeholl Aktivitéit × (Outsourcing-Stéckpräis
                                  − interne Grenzkäschte pro Fall)

Intern Grenzkäschten: Verbrauchsmaterial + variabelt Personal fir déi zousätzlech Aktivitéit
— d'fix Immobilie ass scho bezuelt (kuckt marginal-vs-average-cost.md).
```

D'Behaaptung verlaangt, datt fräigesate intern Kapazitéit d'Aktivitéit wierklech opnëmmt: Operatiounssäll-Sessiounen, Better a Personal mussen all verfügbar sinn (de bindenden Engpass entscheet — erëm Theory of Constraints).

## Berechent Beispill

E Trust lagert 800 Katarakt-Prozeduren/Joer zu je 900 £ aus: 720.000 £/Joer externen Ausgaben, géint e Scheme-Präis vu ~750 £.

Operatiounssall-Planungssoftware (Lëschtenoptimiséierung, Lücken-Opfëllung aus Annulatiounen, Tracking vun der Ëmschlagzäit) erhéicht d'intern Operatiounssall-Auslaaschtung genuch, fir 500 Prozeduren zréckzehuelen:

```
Intern Grenzkäschte pro Fall ≈ 350 £ (Verbrauchsmaterial + Sessiounspersonal)
Ersparnis = 500 × (900 − 350) = 275.000 £/Joer — cash-fräisetzend
Rescht-Outsourcing: 300 × 900 £ = 270.000 £ (virdrun 720.000 £)
```

Softwarekäschte 90.000 £/Joer → Netto ≈ **+185.000 £/Joer u realiséierbarem Cash**, plus Qualitéits- an Ausbildungsvirdeeler, wann d'Aarbecht am Haus bleift.

## Bezuch zur Softwareentwécklung

Dat direkt Analogon ass de **Contractor- a Beroder-Premium**: wann intern Engineering-Kapazitéit Verflichtunge net ka packen, kafe Organisatiounen extern Kapazitéit zu 1,5–3× vun de belaaschten internen Tariffer. Plattform- a Produktivitéitsinvestitiounen, déi den internen Duerchsaz erhéijen, sollen vermeide Contractor-Ausgaben genau esou behaapten — externen Dagessaz minus interne Grenzkäschten, mol zréckgeholl Aarbecht — well et eng vun de wéinege wierklech cash-fräisetzenden Zeilen an engem Business Case fir Entwécklerproduktivitéit ass. Dee selwechte Virbehalt gëllt: déi intern Kapazitéit muss wierklech existéieren a fir déi zréckgeholl Aarbecht agepland ginn, soss ass d'Behaaptung Fiktioun.

## Falen

- **Repatriatioun behaapten ouni déi voll Kapazitéitskette** — Chirurge fräigesat, awer keng Operatiounssall-Slots (oder Ingenieuren fräigesat, awer keng Product-Management-Bandbreet) hëlt näischt zréck.
- **Outsourcing-Präis mat internen Duerchschnëttskäschte vergläichen** amplaz mat de Grenzkäschten — ënnerschätzt kurioserweis d'Ersparnis; d'Fixkäschte lafen op jiddwer Fall weider.
- **Qualitéits-/Komplexitéitsasymmetrie**: ausgelagert Fäll sinn dacks déi einfach; se zréckzehuelen ännert den internen Case-Mix an d'Stéckkäschten.

## Quellen

- NHS England, elective care recovery plan. <https://www.england.nhs.uk/coronavirus/publication/delivery-plan-for-tackling-the-covid-19-backlog-of-elective-care/>
- NHS England, NHS Payment Scheme. <https://www.england.nhs.uk/pay-syst/national-tariff/national-tariff-payment-system/>
