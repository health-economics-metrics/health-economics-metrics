# KI-Qualitéitsmetriken

Metriken fir d'Korrektheet vun KI-generéiertem Output: Genauegkeet géint Ground Truth, **Faithfulness/Groundedness** (ass all Behaaptung vum geliwwerte Kontext ënnerstëtzt?) an **Halluzinatiounsquote** (wéi en Undeel vun den Outputs enthält ongestëtzten oder falschen Inhalt?). Am Gesondheetskontext sinn dat keng Qualitéits-Nettigkeeten — et sinn Schuedensquoten.

## Firwat et wichteg ass

Benchmarks aus dem medezinesche Beräich hunn Halluzinatiounsquote **iwwer 60 % bei net verankerte LLMs** bei medezineschen Aufgaben gemoossen (verschidde oppe Modeller >80 %), während Verankerung (Grounding), Retrieval a Reasoning-Modi d'Quoten dramatesch senken (z. B. huet dem GPT-5 säin Thinking-Modus d'HealthBench-Halluzinatioune vun 3,6 % → 1,6 % op engem Benchmark reduzéiert). Eng halluzinéiert Dosis oder eng erfonne Zitatioun an engem klineschen Workflow ass en **Falschinformatiouns-Evenement mat engem Schuedespfad** — et gehéiert an den Schuedenzweig vun all ökonomesche Modell, bewäert wéi d'Falschpositiver vun der [Screening-Ökonomie](../ökonomie-vum-screening/): jidderee léist nodeeleg Käschte aus (Handelen op falsch Informatioun, Verifikatiounsaarbecht, medezinesch-juristesch Exposition, erodéiert Vertrauen).

## D'Mathematik

```
Halluzinatiounsquote = Outputs mat ongestëtztem/falschem Inhalt / Outputs insgesamt
  intrinsesch: widdersprécht dem geliwwerte Kontext
  extrinsesch: net verifizéierbar Erfindung iwwer de Kontext eraus

Faithfulness (RAGAS-Stil) = ënnerstëtzt Behaaptungen an der Äntwert / Behaaptungen an der Äntwert insgesamt
Context Precision/Recall  = Retrieval-Qualitéit, déi de Generator fiddert

Ökonomesch Gewiichtung — net all Halluzinatioun kascht d'selwecht:
  erwaarte Schuedenskäschten = Σ iwwer Feelertypen (Quote × P(onerkannt) ×
                       P(drop gehandelt) × Käschte pro Feeler, drop gehandelt gouf)
  D'mënschlech Iwwerpréiwungsschicht setzt P(onerkannt) — a
  seng Käschte gehéieren och an de Modell (Reviewer-Minutten × Volumen).
```

## Berechent Beispill

E KI-Assistent fir klinesch Codéierung veraarbecht 200.000 Episoden/Joer; den Audit weist, datt 2 % vun den Outputs e wesentleche Codéierungsfeeler enthalen; mënschlech Codéierer fänke 85 % dovun of:

```
Feeler, déi bis zur Soumissioun duerchkommen = 200.000 × 0,02 × 0,15 = 600/Joer
Käschte pro net erkannte Feeler (Duerchschnëtt Falschfakturéierung + Audit-Exposition) ≈ 250 £
Erwaarte Feelerkäschten     = 600 × 250 = 150.000 £/Joer
Iwwerpréiwungskäschten (2 Min × 200k × 0,50 £/Min)  = 200.000 £/Joer

Verbesserungsfall: Retrieval-Verankerung senkt d'Feelerquote op 0,8 %
→ net erkannte Feeler 240, Feelerkäschten 60.000 £ (−90k £/Joer); d'Iwwer-
  préiwungszäit kann och falen (Stéchprouf amplaz vollstänneger Iwwerpréiwung) —
  d'Qualitéitsinvestitioun rentéiert sech virun all Vitesse-Behaaptung.
```

## Bezuch zur Softwareentwécklung

Behandel d'Modellqualitéit wéi d'Ökonomie vun der Test-Coverage, mat Disziplin op Gesondheetsniveau: **Evaluatiounssäts sinn deng klinesch Studie** — preregistréiert, representativ fir *däi* Case-Mix, géint Drift erneiert; **Verankerung schléit Gréisst** bei faktualen Aufgaben (Retrieval + Zitéierpflicht-Prompting ass normalerweis déi bëllegst verfügbar Halluzinatiounsreduktioun — vgl. [Inferenz-Unit-Economics](../inferenz-unit-economics/) fir säin Token-Overhead); a **de Betriebspunkt publizéieren**: wéi bei [Sensitivitéit/Spezifizitéit](../evaluatioun-vu-klinescher-ki/) heescht „97 % faithful" näischt ouni d'Aufgabeverdeelung an d'Detektiounsschwell. D'Mathematik vun der Iwwerpréiwungsschicht hei uewen ass déiselwecht [NNT/NNH](../number-needed-to-treat/)-Arithmetik wéi bei all Screening-Gatter.

## Falen

- **Benchmark-zu-Produktioun-Transplantatioun**: Halluzinatiounsquote si wëll aufgabeofhängeg; däi Case-Mix ass deen eenzege Benchmark, deen zielt.
- **Net bezifferte mënschlech Iwwerpréiwung**: „e Kliniker kontrolléiert alles" hallefert den Notzen a muss an der Käschtenzeil erschéngen — a Wuessamkeet erlécht (Automatiséierungs-Selbstzefriddenheet), also klëmmt P(onerkannt) mam Vertrauen.
- **Duerchschnëttsqualitéit optiméieren, wärend d'Tail-Risiko de Schued dréit**: eng erfonne Allergie-Notiz weit méi wéi dausend ongeschéckt Formuléierungen; Feeler no Konsequenz gewiichten, no der Formel vum erwaarte Schued.

## Quellen

- Hallucination evaluation methods and metrics. <https://www.braintrust.dev/articles/ai-hallucination-evaluations-metrics-methods-2026>
- Medical LLM hallucination statistics. <https://sqmagazine.co.uk/llm-hallucination-statistics/>
- RAG faithfulness metrics. <https://www.getmaxim.ai/articles/measuring-llm-hallucinations-the-metrics-that-actually-matter-for-reliable-ai-apps/>
