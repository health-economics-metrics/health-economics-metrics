# Canlyniadau a Adroddir gan Gleifion (PROMs, PREMs, MCID)

Offerynnau safonedig yw PROMs lle mae cleifion yn adrodd eu statws iechyd eu hunain (symptomau, swyddogaeth, ansawdd bywyd); mae PREMs yn dal *profiad* y gofal. Y **MCID** — y gwahaniaeth lleiaf sy'n glinigol bwysig — yw'r newid sgôr lleiaf y mae cleifion yn ei ganfod mewn gwirionedd fel un buddiol: y bar y mae'n rhaid i unrhyw welliant a honnir ei glirio.

## Pam mae hyn yn bwysig

PROMs yw'r arian effeithlonrwydd cynradd ar gyfer iechyd digidol: yn anaml y mae apiau'n symud marwolaethau, ond gallant symud sgorau symptomau dilysedig yn gredadwy. Ychydig ac safonedig yw'r offerynnau sy'n bwysig — **PHQ-9** (iselder, 0–27; bandiau difrifoldeb ar 5/10/15/20), **GAD-7** (pryder, 0–21; bandiau ar 5/10/15), **EQ-5D** (defnyddioldeb ar gyfer [QALYs](../quality-adjusted-life-year/)) — ac mae rheoleiddwyr, cyrff HTA, a thalwyr yn eu derbyn yn union oherwydd eu bod yn gymaradwy ar draws cynhyrchion a threialon. Y MCID yw'r porth gonestrwydd: MCID PHQ-9 ≈ 5 pwynt, GAD-7 ≈ 4, mynegai EQ-5D fel arfer ~0.03–0.08 — mae newid PHQ-9 o 1.5 pwynt sy'n ystadegol arwyddocaol ar sampl fawr yn *real ond yn ddiystyr yn glinigol*, a bydd adolygydd tystiolaeth yn dweud hynny.

## Y Fathemateg

```
Sgorio PROM: symiau penodol i'r offeryn (e.e., PHQ-9 = Σ 9 eitem × 0–3)

Amcangyfrif MCID:
  yn seiliedig ar angor:      newid sgôr ymhlith cleifion sy'n adrodd "ychydig yn well"
  yn seiliedig ar ddosbarthiad: ≈ 0.5 × SD sgorau llinell sylfaen (rheol bras)

Fframio cyfradd ymateb (ar gyfer treialon a ffeiliau achos):
  ymatebwr = claf yn gwella ≥ MCID (neu ≥50% ar gyfer confensiwn PHQ-9)
  NNT = 1 / (cyfradd ymatebwr_triniaeth − cyfradd ymatebwr_rheolydd)
  — gweler number-needed-to-treat.md
```

## Enghraifft Waith

Ap cymorth iselder, RCT yn erbyn rhestr aros, 12 wythnos:

```
Newid PHQ-9: ap −6.2 pwynt, rheolydd −2.1 → gwahaniaeth wedi'i addasu −4.1
Gwiriad MCID: 4.1 < 5 → gwahaniaeth cymedrig islaw'r MCID; adroddwch ymatebwyr yn lle hynny:
  ymatebwyr (gostyngiad ≥5-pwynt): ap 48%, rheolydd 22% → ARR 26%
  NNT = 1/0.26 ≈ 4 — pedwar defnyddiwr yn cael eu trin fesul ymateb clinigol ychwanegol

Pont economaidd: enillion EQ-5D ymatebwyr 0.06 yn parhau 6 mis
  = 0.03 QALY; fesul 1,000 defnyddiwr: 260 o ymatebwyr ychwanegol × 0.03 = 7.8 QALY
  ≈ £156,000–£234,000 o werth iechyd ar drothwyon NICE
```

Mae'r fframio ymatebwr/NNT yn goroesi adolygiad lle byddai'r gwahaniaeth cymedrig islaw'r MCID wedi cael ei ddiystyru.

## Cysylltiad Peirianneg Feddalwedd

Mae PROMs yn broblem casglu data y mae meddalwedd mewn sefyllfa unigryw i'w datrys: mae offerynnau o fewn ap yn cael cyfraddau cwblhau a dwysedd hydredol na chyflawnodd papur erioed, gan droi telemetreg cynnyrch arferol yn dystiolaeth o safon HTA (mae [EQ-5D](../eq-5d/) yn bum sgrin). Rheolau peirianneg: defnyddiwch yr offeryn dilysedig *air-i-air* (mae aildrefnu geiriau'n ei ddirymu — mae trwyddedu'n berthnasol); amserlennwch fesur yn ôl protocol, nid cyfleustra ymgysylltu (mae mesur defnyddwyr gweithredol yn unig yn duedd goroeswyr — gweler [cadw](../retention-and-churn/)); a chloi fersiwn data offeryn fel unrhyw sgema — mae newid geiriad hanner ffordd trwy astudiaeth yn llygredd data. Mae PREMs yn mapio i offerynnau o'r math CSAT/NPS, ac mae'r un wers yn berthnasol: mae safonedig yn curo cartref-dyfeisiedig lle bynnag y bo'r gynulleidfa'n dalwr.

## Peryglon

- **Arwyddocâd ystadegol islaw'r MCID** wedi'i gyflwyno fel budd clinigol — chwyddiant mwyaf cyffredin y maes.
- **Atchweliad tuag at y cymedr**: mae defnyddwyr yn ymrestru ar uchafbwyntiau symptomau; mae cyn/wedi un-fraich yn gorbwysleisio'n aruthrol — nid yw cymharyddion yn ddewisol.
- **Siopa offerynnau**: rhedeg PHQ-9, GAD-7, a WHO-5, yna adrodd pa un bynnag a symudodd — cyn-gofrestrwch y prif un.
- **Pwysau arolwg cydsyniad digidol**: mae annog defnyddwyr tuag at ymatebion ffafriol yn llygru'r offeryn (ac mae'r adolygwyr yn gwybod y cyfraddau sylfaen).

## Ffynonellau

- Adolygiad amcangyfrif MCID (EQ-5D). <https://pmc.ncbi.nlm.nih.gov/articles/PMC10526144/>
- Cyflwyniad PROMs yn erbyn PREMs. <https://www.forcetherapeutics.com/blog/whats-the-difference-between-pros-proms-pro-pms-and-prems>
- Kroenke K, et al. Llenyddiaeth ddilysu PHQ-9. <https://pubmed.ncbi.nlm.nih.gov/11556941/>
