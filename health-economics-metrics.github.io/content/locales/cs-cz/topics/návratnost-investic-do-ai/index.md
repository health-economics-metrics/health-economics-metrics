# Návratnost investic do AI

ROI AI je měřitelná návratnost ve výkazu zisku a ztráty přičitatelná iniciativám AI. Střízlivý benchmark: výzkum MIT „GenAI Divide“ z roku 2025 zjistil, že navzdory investicím podniků do GenAI ve výši 30–40 mld. USD **~95 % pilotů nevykázalo měřitelnou návratnost ve výkazu zisku a ztráty** – a úspěšných 5 % sdílelo identifikovatelné návyky.

## Proč na tom záleží

Zdravotní systémy mají pro vzorec pilotů AI jméno: **pilotitis** – hřbitov slibných aplikací v NHS, které se pilotují donekonečna a nikdy se nerozšíří. Zjištění MIT se čistě promítají do toho, co health technology assessment už ví: tvrzení o hodnotě potřebují předem stanovené cílové ukazatele, přičítání potřebuje komparátory a „všichni cítí, že to pomáhá“ není přínosová řádka. Úspěšná menšina v datech MIT se soustředila na automatizaci back-office s dohledatelnými nákladovými základnami a **zakoupené nástroje uspěly přibližně v 67 % případů oproti interním vývojům s asi třetinovou úspěšností** – apriorní pravděpodobnosti, které patří do každého investičního případu AI (viz [vyrobit vs koupit](../vyrobit-nebo-koupit/)).

## Matematika

```
AI ROI = (attributable benefit − total AI cost) / total AI cost

Total AI cost = licences/inference (see inference-unit-economics.md)
              + integration + data readiness + evaluation
              + workflow redesign + governance/assurance
              (the licence is typically the minority of the denominator)

Attributable benefit: measured against a baseline or control, classed
cash / capacity / quality per cash-releasing-vs-non-cash-releasing.md
```

## Řešený příklad

Nemocniční skupina nasazuje AI pro dva případy použití:

```
Use case A — clinical-letter drafting (back office, trackable):
  baseline: outsourced transcription £380k/yr
  after:    transcription contract cancelled; clinician review time +£60k
  AI cost:  £120k/yr all-in
  ROI = (380k − 60k − 120k) / 120k ≈ 167% — cash-releasing, auditable ✓

Use case B — "AI copilot for clinicians" (broad, untracked):
  benefit claim: "saves time across 4,000 staff" — no baseline captured
  measured P&L effect: none demonstrable
  → the 95% bucket, regardless of whether it actually helps
```

Rozdíl není v kvalitě AI – je v tom, zda přínos měl **základní hodnotu, vlastníka a rozpočtovou řádku** ([realizace přínosů](../realizace-přínosů/)).

## Souvislost se softwarovým inženýrstvím

Playbook ve stylu HTA pro investice do AI: **odstupňujte důkazy jako [úrovně NICE ESF](../rámec-standardů-důkazů-nice/)** – důkazy na úrovni dema pro nástroje s nízkými sázkami, kontrolované piloty před výdaji v celé organizaci, s předem registrovanými branami rozšíření (vzor předběžného zařazení s termínem u [DiGA](../rychlá-cesta-diga-v-německu/)); **vyhnutí se nákladům počítejte tak, jak health economics počítá vyhnutí se poptávce** – skutečné je jen tehdy, když se pohne konkrétní rozpočtová řádka; a **cenu samotného pilotu stanovte pomocí [EVPI](../očekávaná-hodnota-perfektní-informace/)** – pilot, který nemůže změnit rozhodnutí o rozšíření, má hodnotu 0 £. Pro segment vývojářských nástrojů viz [produktivita vývojářů s AI](../produktivita-vývojářů-s-ai/).

## Úskalí

- **Rozptyl přínosu**: hodnota rozptýlená na tisíce uživatelů je z principu neměřitelná; vybírejte případy použití se soustředěnými, dohledatelnými základními hodnotami.
- **Kalkulace jen licencí**: integrace, vyhodnocení a přepracování procesů obvykle tvoří většinu skutečného jmenovatele.
- **Krádež přičítání**: AI nasazená spolu s přepracováním procesů si nárokuje celý rozdíl.
- **Eskalace utopeného pilotu**: prodlužování neúspěšných pilotů, protože zastavení by znamenalo přiznat neúspěch – datum ukončení musí být předem dohodnuto.

## Zdroje

- MIT Project NANDA "GenAI Divide" coverage. <https://fortune.com/2025/08/18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo/>
- MIT GenAI ROI findings summary. <https://blueflame.ai/blog/achieving-ai-roi-key-findings-from-mits-genai-report>
- MIT Technology Review, finding ROI on AI. <https://www.technologyreview.com/2025/10/28/1126693/finding-return-on-ai-investments-across-industries/>
