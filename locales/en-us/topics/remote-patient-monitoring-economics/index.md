# Remote Patient Monitoring Economics

The reimbursement and cost-offset economics of monitoring patients at home: in the US, a defined CPT-code revenue stack; in national health services, admission-avoidance and virtual-ward economics up to full **hospital-at-home** substitution.

## Why it matters

RPM is where device data becomes billable healthcare. The US Medicare structure (2025 national averages) is unusually explicit:

```
99453  setup & patient education     ~$19.73  one-time (after 16 days of data)
99454  device supply + transmission  ~$43.03  per 30 days — REQUIRES ≥16 days
                                              of readings in the 30
99457  first 20 min/month management ~$47.87  requires ≥20 logged minutes
99458  each additional 20 min        ~$38.49
```

A compliant patient-month stacks to roughly **$90–130 PMPM**. On the cost-offset side, hospital-at-home programs (CMS Acute Hospital Care at Home waiver: 300+ hospitals) show ~$1,800–$3,000 saved per encounter versus inpatient care with lower readmissions and infections — the clearest demonstration that monitoring plus virtual care can substitute for the most expensive resource in the system, the staffed bed.

## The math

```
RPM revenue (US)  = enrolled × billing-compliant fraction × code stack PMPM
  — the 16-day rule makes wear-time compliance (wearable-validation.md)
    a revenue variable, and the 20-minute rule makes clinical-time
    logging an engineering requirement

NHS-style value   = admissions avoided × marginal admission cost
                  + bed days substituted × (inpatient − virtual-ward day cost)
                  − service cost (devices, platform, monitoring staff)
  (see emergency-attendance-avoidance.md and bed-days-saved.md for the
   attribution and marginal-cost rules)
```

## Worked example

A US practice enrolls 400 hypertension patients; 70% meet the 16-day threshold in a typical month; management minutes logged for 60%:

```
Monthly revenue ≈ 400 × [0.70 × 43.03 + 0.60 × 47.87] = 400 × 58.84 ≈ $23,500
Annual ≈ $282,000; service cost (devices $12/mo, staff 0.8 FTE) ≈ $180,000
Margin ≈ $100k/year — and note the levers are engineering levers:
raising the 16-day compliance from 70% → 85% adds ~$31k/year
(device comfort, sync reliability, reminder design).
```

NHS mirror: a 50-bed virtual ward at 80% occupancy substituting inpatient days at £150 net saving/day ≈ 50 × 0.8 × 365 × 150 ≈ **£2.19M/year** gross — against platform, devices, and the community nursing team that staffs it.

## Software engineering connection

RPM platforms are the rare product where **uptime and sync reliability convert directly to revenue** (a week of failed syncs breaks the 16-day gate for a cohort) and where audit-grade time-tracking (the 20-minute rule) is a first-class feature, not an afterthought. Build for: per-patient compliance dashboards that surface at-risk billing months while recoverable; timestamped, tamper-evident data trails (payer audits are routine); and alert-economics tuning — every alert consumes the monitoring team's minutes, which are both the billable unit and the scarce resource ([screening economics](../screening-economics/) governs the threshold choice).

## Pitfalls

- **Enrollment ≠ revenue**: the compliant fraction is the number; model it, don't assume it.
- **US codes transplanted into NHS cases** — national health services buy admission avoidance, not CPT stacks; run the second model.
- **Offset claims at average cost** for admissions whose fixed costs remain (see [marginal vs average cost](../marginal-vs-average-cost/)).
- **Monitoring-team saturation**: alert volume scales with enrollment; the staffing line is the binding constraint most models omit.

## Sources

- RPM CPT codes and 2025 rates. <https://blog.prevounce.com/quick-guide-remote-patient-monitoring-rpm-cpt-codes-to-know>
- CMS hospital-at-home outcomes reporting. <https://www.mcknightshomecare.com/news/hospital-at-home-achieved-cost-savings-among-all-top-diagnosis-groups-cms-reports/>
- Telehealth.HHS.gov, billing for RPM. <https://telehealth.hhs.gov/providers/best-practice-guides/telehealth-and-remote-patient-monitoring/billing-remote-patient>
