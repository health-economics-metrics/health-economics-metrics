# Optiméierung vun nodelege Ressourcen

Eng Stonn fir e Senior-Praktiker ze spueren — en Hausdokter, e Senior Registrar, e Beroder — verhënnert dacks Engpassverzögerungen fir e ganzt multidisziplinärt Team (MDT) vun Infirmièren, Verwaltungsmataarbechter an Therapeuten, déi op klinesch Fräigabe waarden. De Wäert vum Engpass ze entblockéieren ass den Duerchsaz vun allen, déi doropper nodeeleg sinn.

## Firwat et wichteg ass

D'Gesondheetsversuergung leeft op Autorisatiounsketten: Entloossunge waarden op d'Fräigab vum Beroder, Behandlungspläng waarden op MDT-Review, Iwwerweisunge waarden op Triage. Wann déi gatend Roll verzögert gëtt, ass d'Käschte net eng Stonn vun enger Persoun — et ass idle oder blockéiert Zäit iwwer all ofhängeg Roll, plus Patientezäit an der Schwiewe (zousätzlech [Bettdeeg](../agespuert-bettdeeg/), méi laang [RTT-Waardezäiten](../iwwerweisung-bis-behandlung/)). Dat ass Theory of Constraints ugewannt op klinesch Pfaden: eng Stonn, déi *um Engpass* gespuert gëtt, ass de marginalen Duerchsaz vum ganze System wäert; eng Stonn, déi soss iergendwou gespuert gëtt, ass vill manner wäert.

## D'Mathematik

```
Wäert vum Entblockéieren = Σ iwwer nodeeleg Rollen (fräigesate blockéiert Stonnen × Stéckkäschten)
                         + Duerchsazgewënn vum Pfad × Wäert pro Pfadofschloss

Kontrast: Wäert vun där selwechter Stonn, déi bei enger net gatender Roll gespuert gëtt ≈ nëmmen
de Kapazitéitswäert vun där Roll (kuckt practitioner-time.md).
```

Den Engpass empiresch identifizéieren: wou stécht d'Aarbecht am längsten an der Schlaang? A wiere sengem Postkëscht féiere Verzögerunge zréck?

## Berechent Beispill

Dem Entloossunge vun enger Statioun brauchen all Moien d'Review vum Beroder. De Beroder verbréngt 90 Min/Dag domat, Informatiounen ze sammelen, déi iwwer Systemer verstreet sinn; Reviews sinn um 14:00 fäerdeg, a 6 Entloossunge/Dag sinn ze spéit fir deen Dag — jidderee kascht e vermeidbare Bettdag.

En Entloossungs-Zesummefaassungs-Dashboard (Labor, Medikamenter, Flaggen an enger Vue) senkt d'Assemblage op 20 Minutten; Reviews sinn um 11:30 fäerdeg:

```
Vermeid Bettdeeg     = 4 vun de 6 spéide Entloossungen × 365 ≈ 1.460 Bettdeeg/Joer
Nodeeleg Entblockéierung: 2 Entloossungskoordinatoren + Apdikt + Transport
                       virdrun all Nomëtteg idle-dann-gehetzt —
                       ~3 Personal-Stonnen/Dag fräigesate blockéiert Zäit ≈ 1.100 Std./Joer
```

Dem Beroder seng eege 70 Minutten sinn deen *klengsten* Deel vum Wäert — de Punkt vun dëser Metrik. D'Bettdeeg no Mechanismus bewäerten (kuckt [Agespuert Bettdeeg](../agespuert-bettdeeg/)) an d'Personalstonnen als Kapazitéit.

## Bezuch zur Softwareentwécklung

Dat ass Code-Review, Architektur-Fräigab an de Postkëscht vum Staff-Engineer. Wann fënnef Ingenieuren e Dag op déi eng Persoun waarden, déi en Design ka genehmegen, ass d'Käschte fënnef Engineer-Deeg plus e Dag [Cost of Delay](../verzögerungskäschten/) op der Aarbecht selwer — net eng Reviewer-Stonn. Tooling, dat d'Aufgab vun der gatender Roll kompriméiert (besser Review-Kontext, automatiséiert Pre-Checks, Dashboards, déi sammelen, wat de Genehmeger brauch), kaaft Systemduerchsaz, keng individuell Bequemlechkeet. Pickup-/Waardezäit um Engpass moossen (kuckt [Flow-Metriken](../flow-metriken/)) — et ass dat Software-Äquivalent vum 14:00-Entloossungs-Cliff.

## Falen

- **E Net-Engpass optiméieren**: schéint Tooling fir eng Roll, hannert där sech näischt stauche léisst, produzéiert bal null Systemwäert.
- **Engpass-Migratioun**: de Beroder entblockéieren a den Engpass wandert (an d'Apdikt, an den Transport) — den *nächsten* Engpass modelléieren, ier voll Duerchsazgewënn behaapt ginn.
- **Nodeeleg Stonnen als Cash zielen**: d'Fräisetze vu blockéierter Zäit ass Kapazitéit, ënnerleien dem üblechen [Ëmverdeelungstest](../cash-fräisetzend-vs-net-cash-fräisetzend-ersparnisser/).

## Quellen

- Goldratt EM, *The Goal* (theory of constraints).
- NHS England, NHS productivity. <https://www.england.nhs.uk/long-read/nhs-productivity/>
