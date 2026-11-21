# Unit Economics vu Gesondheets-Apps

D'kommerziell Arithmetik vu Konsumenten-Gesondheetsprodukter: Client-Akquisitiounskäschten (CAC), Lifetime Value (LTV), duerchschnëttlechen Ëmsaz pro Notzer (ARPU), Per-Member-Per-Month-Präisser (PMPM) an den Employer-Maart-Ënnerscheed tëscht **ROI a VOI** (Value on Investment).

## Firwat et wichteg ass

Gesondheets-Apps stinn ënner engem strukturelle Squeeze: Akquisitioun ass deier (reglementéiert Behaaptungen, Vertrauensbarrièren, Compliance-Käschten), wärend Retention déi schlechtst vun all Softwareverticals ass (~90 % Ofbroch bannent 30 Deeg — kuckt [Retention a Churn](../retention-a-churn/)). De Standard-Viabilitéitstest — **LTV:CAC ≥ 3:1** — ass dofir brutal schwéier an der Konsumentegesondheet, dofir wandert d'Industrie Richtung B2B2C-Modeller: Employeren, Versécherer a Gesondheetssystemer, déi PMPM fir Populatioune bezuelen, wou de Keefer net deen abbrechenden Eenzelen ass.

## D'Mathematik

```
CAC   = Sales- + Marketing-Ausgaben / nei bezuelend Cliente
ARPU  = Ëmsaz / aktiv Notzer (pro Zäitraum)
LTV   = ARPU × duerchschnëttlech Liewensdauer  =  ARPU / Churn-Quote
Viabilitéit: LTV : CAC ≥ 3, Payback-Zäit ≤ 12–18 Méint

Effektive CAC pro gehaltene Notzer = CAC / Retention(t)
  — bei 4 % D30-Retention sinn 5 £ pro Installatioun = 125 £ pro 30-Deeg-gehaltene Notzer

PMPM-Ëmsaz = Saz × ageschriwwe Memberen × Méint
  Vendor-Marge = PMPM − Käschte fir ze bedéinen pro Member pro Mount
  — Engagement dréit d'Virzeechen ëm: bei B2C-Abonnementer dreift Engagement
    den Ëmsaz; bei PMPM kaschten engagéiert Memberen MÉI ze bedéinen wéi
    rouend, an Outcomes-Kontrakter dréinen et erëm zréck
```

## Berechent Beispill

Eng B2C-Schlof-App: 6,99 £/Mount, monatlech Churn 18 %, gemëschte CAC 38 £.

```
LTV = 6,99 / 0,18 ≈ 38,8 £ → LTV:CAC ≈ 1,0 — net viabel

Pivot op Employer-PMPM: 1,20 £ PMPM × 40.000 ofgedeckt Liewen = 48k £/Mount
Käschte fir ze bedéinen: Infrastruktur 0,15 £ + Support 0,10 £ + Inhalt 0,05 £
  pro Member ≈ 0,30 £ → Marge ~75 %, Sales-Zyklus laang, awer Churn ass
  op Kontraktniveau (jäerlech), net Notzerniveau (deeglech)

D'Fro vum Employer verréckelt d'Metrik: Hard-Dollar-ROI (reduzéiert
Ufroen, Absenzen) ass bei Wellness-Produkter selten demonstréierbar —
d'Industrie-Äntwert ass VOI: Produktivitéit, Rekrutéierungsattraktivitéit,
Engagement — éierlech nëmmen, wann als VOI gelabelt, net als ROI verkleet
(kuckt return-on-investment.md a social-return-on-investment.md).
```

## Bezuch zur Softwareentwécklung

Engineering-Wielen setzen béid Säite vum Verhältnis: **Käschte fir ze bedéinen** ass Architektur ([Cloud-Unit-Economics](../cloud-unit-economics/) — d'PMPM-Marge liewt oder stierft un de Pro-Member-Infrastrukturkäschten), an **LTV** ass Retention-Engineering (all Churn-Punkt ass arithmetesch Ëmsaz — dem [Retention](../retention-a-churn/)-Dokument seng QALY-Mathematik huet en exakten Ëmsaz-Zwilling). Speziell fir Gesondheetsprodukter soll den Unit-Economics-Dashboard eng drëtt Zeil nieft LTV an CAC droen: **Gesondheetswäert pro akquiréierte Notzer** (retentiounsgewiichte QALYs × Schwell) — well Zueler- an DiGA-Stil-Mäert ëmmer méi dorop präisen, a well e Produkt, dessen kommerziell a klinesch Unit Economics ausenanerdriften (profitabel awer gesondheetsinert, oder effektiv awer net finanzéierbar), wëssen muss, wéi ee Problem et huet.

## Falen

- **LTV aus Früh-Kohorten-Churn**: Churn stabiliséiert sech no ënnen; awer och Survivorship — fréi Adopter halen besser wéi skaléiert Audienzen. Mat Daten vun ausgereifte Kohorten schaffen.
- **CAC iwwer Kanäl gemëscht**: Paid-Social-CAC a Kliniker-Referral-CAC ënnerscheeden sech ëm 10×, mat entgéintgesate Retention-Profiler — segmentéieren oder irregefouert ginn.
- **PMPM ouni Notzungsdeckelen**: Ausreisser-Memberen mat héijem Engagement kënnen Margen ëmdréinen; d'Verdeelung modelléieren, net de Mëttelwäert.
- **VOI als ROI engem CFO presentéiert** — de Glaubwürdegkeetsfehler, deen d'Employer-Wellness-Industrie sech en Joerzéngt laang verdéngt huet.

## Quellen

- Healthtech unit economics primers. <https://smart-it.io/blog/how-to-calculate-unit-economics-for-healthcare-startups/>
- PMPM pricing frameworks for digital health. <https://www.quintupleaim.com/blog/strategic-pricing-for-digital-health-startups-in-value-based-care-per-member-per-month-pmpm-frameworks>
