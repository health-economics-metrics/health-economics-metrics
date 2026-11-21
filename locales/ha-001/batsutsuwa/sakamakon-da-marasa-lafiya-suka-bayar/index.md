# Sakamakon da Marasa Lafiya Suka Bayar (PROMs, PREMs, MCID)

PROMs kayan aiki ne na ƙa'ida inda marasa lafiya ke bayar da rahoton yanayin lafiyarsu (alamomi, aiki, ingancin rayuwa); PREMs suna ɗaukar *ƙwarewar kulawa*. **MCID** — mafi ƙarancin bambanci mai muhimmanci a asibiti — shi ne mafi ƙarancin canjin maki da marasa lafiya ke ji da gaske a matsayin mai amfani: matakin da kowace ingantuwa da aka yi da'awa dole ta ketare.

## Dalilin muhimmancinsa

PROMs su ne kuɗin tasiri na farko na lafiyar dijital: manhajoji da wuya su motsa mace-mace, amma za su iya motsa maki na alamomi da aka tabbatar cikin sahihanci. Kayan aikin da suke da muhimmanci kaɗan ne kuma na ƙa'ida — **PHQ-9** (baƙin ciki, 0–27; rukunin tsanani a 5/10/15/20), **GAD-7** (damuwa, 0–21; rukunai a 5/10/15), **EQ-5D** (amfani don [QALY](../shekarar-rayuwa-da-aka-daidaita-da-inganci/)) — kuma masu ƙa'ida, hukumomin HTA, da masu biya suna karɓarsu daidai domin ana iya kwatanta su a faɗin samfura da gwaje-gwaje. MCID shi ne ƙofar gaskiya: MCID na PHQ-9 ≈ maki 5, GAD-7 ≈ 4, ma'aunin EQ-5D yawanci ~0.03–0.08 — canjin PHQ-9 na maki 1.5 mai muhimmanci a lissafi a babban samfuri *gaskiya ne amma ba shi da ma'ana a asibiti*, kuma mai bitar shaida zai faɗi hakan.

## Lissafin

```
PROM scoring: instrument-specific sums (e.g., PHQ-9 = Σ 9 items × 0–3)

MCID estimation:
  anchor-based:      score change among patients who report "somewhat better"
  distribution-based: ≈ 0.5 × SD of baseline scores (rough heuristic)

Response rate framing (for trials and dossiers):
  responder = patient improving ≥ MCID (or ≥50% for PHQ-9 convention)
  NNT = 1 / (responder rate_treatment − responder rate_control)
  — see number-needed-to-treat.md
```

## Misali da aka lissafa

Manhajar tallafin baƙin ciki, RCT da jerin jira, makonni 12:

```
PHQ-9 change: app −6.2 points, control −2.1 → adjusted difference −4.1
MCID check: 4.1 < 5 → mean difference below MCID; report responders instead:
  responders (≥5-point drop): app 48%, control 22% → ARR 26%
  NNT = 1/0.26 ≈ 4 — four users treated per additional clinical response

Economic bridge: responders' EQ-5D gain 0.06 sustained 6 months
  = 0.03 QALYs; per 1,000 users: 260 extra responders × 0.03 = 7.8 QALYs
  ≈ £156,000–£234,000 of health value at NICE thresholds
```

Tsarin masu amsa/NNT yana tsira daga bita inda za a yi watsi da bambancin matsakaici da ke ƙasa da MCID.

## Alaƙa da injiniyancin manhaja

PROMs matsalar tattara bayanai ce da manhaja ta fi dacewa ta warware: kayan aiki a cikin manhaja suna samun yawan kammalawa da yawan bayanai na tsawon lokaci da takarda ba ta taɓa samu ba, suna mayar da telemetry na samfur na yau da kullum zuwa shaida mai darajar HTA ([EQ-5D](../eq-5d/) allo biyar ne). Ƙa'idojin injiniya: yi amfani da kayan aikin da aka tabbatar *kalma-da-kalma* (sake rubuta kalmomi yana ɓata shi — lasisi yana aiki); tsara aunawa bisa ƙa'ida, ba bisa sauƙin shiga aiki ba (auna masu amfani masu aiki kawai son zuciya ne na tsira — duba [riƙewa](../riƙewa-da-barin-amfani/)); kuma kulle sigar bayanan kayan aiki kamar kowane tsari — canjin kalmomi a tsakiyar bincike ɓarnar bayanai ne. PREMs suna kama da kayan aikin irin CSAT/NPS, kuma darasin ɗaya ne: na ƙa'ida ya fi na gida duk inda masu sauraro mai biya ne. Don kayan aiki na musamman na ƙwazon aiki, duba [WPAI](../tawaya-a-aiki-da-ayyuka/).

## Tarkuna

- **Muhimmancin lissafi a ƙasa da MCID** da aka gabatar a matsayin fa'idar asibiti — ƙarin ƙima mafi yawa a fagen.
- **Komawa matsakaici**: masu amfani suna shiga a kololuwar alamomi; kafin/bayan na hannu ɗaya yana ƙara girma sosai — masu kwatantawa ba za a yi ba tare da su ba.
- **Zaɓen kayan aiki**: gudanar da PHQ-9, GAD-7, da WHO-5, sannan a ba da rahoton duk wanda ya motsa — yi rajista kafin lokaci na farko.
- **Matsin binciken yarda na dijital**: tura masu amfani zuwa amsoshi masu kyau yana ɓata kayan aikin (kuma masu bita sun san adadin tushe).

## Tushe

- MCID estimation review (EQ-5D). <https://pmc.ncbi.nlm.nih.gov/articles/PMC10526144/>
- PROMs vs PREMs primer. <https://www.forcetherapeutics.com/blog/whats-the-difference-between-pros-proms-pro-pms-and-prems>
- Kroenke K, et al. PHQ-9 validation literature. <https://pubmed.ncbi.nlm.nih.gov/11556941/>
