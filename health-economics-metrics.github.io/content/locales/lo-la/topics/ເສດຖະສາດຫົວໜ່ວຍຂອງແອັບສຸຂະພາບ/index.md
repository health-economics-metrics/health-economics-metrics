# ເສດຖະສາດຫົວໜ່ວຍຂອງແອັບສຸຂະພາບ

ເລກຄະນິດດ້ານການຄ້າຂອງຜະລິດຕະພັນສຸຂະພາບສຳລັບຜູ້ບໍລິໂພກ: ຕົ້ນທຶນການຫາລູກຄ້າ (CAC), ມູນຄ່າຕະຫຼອດອາຍຸລູກຄ້າ (LTV), ລາຍຮັບສະເລ່ຍຕໍ່ຜູ້ໃຊ້ (ARPU), ການຕັ້ງລາຄາຕໍ່ສະມາຊິກຕໍ່ເດືອນ (PMPM), ແລະ ຄວາມແຕກຕ່າງໃນຕະຫຼາດນາຍຈ້າງລະຫວ່າງ **ROI ແລະ VOI** (ມູນຄ່າຈາກການລົງທຶນ).

## ເປັນຫຍັງຈຶ່ງສຳຄັນ

ແອັບສຸຂະພາບປະເຊີນກັບການຖືກບີບຢ່າງເປັນໂຄງສ້າງ: ການຫາລູກຄ້າມີລາຄາແພງ (ການອ້າງສິດທິຜົນທີ່ຖືກຄວບຄຸມ, ອຸປະສັກດ້ານຄວາມໄວ້ວາງໃຈ, ຕົ້ນທຶນການປະຕິບັດຕາມກົດລະບຽບ) ໃນຂະນະທີ່ການຮັກສາຜູ້ໃຊ້ຕ່ຳທີ່ສຸດໃນບັນດາຂະແໜງຊອບແວທັງໝົດ (ປະມານ 90% ເລີກໃຊ້ພາຍໃນ 30 ວັນ — ເບິ່ງ [ການຮັກສາຜູ້ໃຊ້ ແລະ ການຫຼຸດຫາຍ](../ການຮັກສາຜູ້ໃຊ້-ແລະ-ການຫຼຸດຫາຍ/)). ການທົດສອບຄວາມຢູ່ລອດມາດຕະຖານ — **LTV:CAC ≥ 3:1** — ຈຶ່ງຍາກຢ່າງຮຸນແຮງໃນສຸຂະພາບຂອງຜູ້ບໍລິໂພກ, ເຊິ່ງເປັນເຫດຜົນທີ່ອຸດສາຫະກຳຍ້າຍໄປຫາຮູບແບບ B2B2C: ນາຍຈ້າງ, ບໍລິສັດປະກັນໄພ ແລະ ລະບົບສຸຂະພາບຈ່າຍ PMPM ສຳລັບກຸ່ມປະຊາກອນ, ໃນກໍລະນີທີ່ຜູ້ຊື້ບໍ່ແມ່ນບຸກຄົນທີ່ເລີກໃຊ້ໄດ້ງ່າຍ.

## ຄະນິດສາດ

```
CAC   = sales + marketing spend / new paying customers
ARPU  = revenue / active users (per period)
LTV   = ARPU × average lifetime  =  ARPU / churn rate
Viability: LTV : CAC ≥ 3, payback period ≤ 12–18 months

Effective CAC per retained user = CAC / retention(t)
  — at 4% D30 retention, £5 per install = £125 per 30-day-retained user

PMPM revenue = rate × enrolled members × months
  vendor margin = PMPM − cost-to-serve per member per month
  — engagement flips sign: under B2C subscriptions engagement drives
    revenue; under PMPM, engaged members COST more to serve than
    dormant ones, and outcomes contracts flip it back again
```

## ຕົວຢ່າງການຄິດໄລ່

ແອັບນອນຫຼັບແບບ B2C: £6.99/ເດືອນ, ອັດຕາການຫຼຸດຫາຍລາຍເດືອນ 18%, CAC ລວມ £38.

```
LTV = 6.99 / 0.18 ≈ £38.8 → LTV:CAC ≈ 1.0 — non-viable

Pivot to employer PMPM: £1.20 PMPM × 40,000 covered lives = £48k/month
Cost-to-serve: infrastructure £0.15 + support £0.10 + content £0.05
  per member ≈ £0.30 → margin ~75%, sales cycle long but churn is
  contract-level (annual), not user-level (daily)

The employer's question shifts the metric: hard-dollar ROI (reduced
claims, absenteeism) is rarely demonstrable for wellness products —
the industry answer is VOI: productivity, recruitment appeal,
engagement — which is honest only when labelled as VOI, not dressed
as ROI (see return-on-investment.md and social-return-on-investment.md).
```

## ຄວາມເຊື່ອມໂຍງກັບວິສະວະກຳຊອບແວ

ທາງເລືອກດ້ານວິສະວະກຳກຳນົດທັງສອງດ້ານຂອງອັດຕາສ່ວນ: **ຕົ້ນທຶນໃນການໃຫ້ບໍລິການ** ແມ່ນສະຖາປັດຕະຍະກຳ ([ເສດຖະສາດຫົວໜ່ວຍຂອງຄລາວ](../ເສດຖະສາດຫົວໜ່ວຍຂອງຄລາວ/) — ກຳໄລ PMPM ຂຶ້ນກັບຕົ້ນທຶນໂຄງລ່າງພື້ນຖານຕໍ່ສະມາຊິກ), ແລະ **LTV** ແມ່ນວິສະວະກຳການຮັກສາຜູ້ໃຊ້ (ທຸກຈຸດທີ່ຜູ້ໃຊ້ເລີກໃຊ້ແມ່ນລາຍຮັບທີ່ຄິດໄລ່ໄດ້ — ເລກ QALY ໃນເອກະສານ [ການຮັກສາຜູ້ໃຊ້](../ການຮັກສາຜູ້ໃຊ້-ແລະ-ການຫຼຸດຫາຍ/) ມີຄູ່ແຝດດ້ານລາຍຮັບທີ່ຕົງກັນພໍດີ). ສຳລັບຜະລິດຕະພັນສຸຂະພາບໂດຍສະເພາະ, ແດຊບອດເສດຖະສາດຫົວໜ່ວຍຄວນມີເສັ້ນທີສາມຄຽງຂ້າງ LTV ແລະ CAC: **ມູນຄ່າດ້ານສຸຂະພາບຕໍ່ຜູ້ໃຊ້ທີ່ຫາມາໄດ້** (QALY ຖ່ວງນ້ຳໜັກດ້ວຍການຮັກສາຜູ້ໃຊ້ × ເກນ) — ເພາະຜູ້ຈ່າຍເງິນ ແລະ ຕະຫຼາດແບບ DiGA ຕັ້ງລາຄາຈາກມັນຫຼາຍຂຶ້ນເລື້ອຍໆ, ແລະ ເພາະຜະລິດຕະພັນທີ່ເສດຖະສາດຫົວໜ່ວຍດ້ານການຄ້າ ແລະ ດ້ານຄລີນິກແຕກຕ່າງກັນ (ມີກຳໄລແຕ່ບໍ່ມີຜົນຕໍ່ສຸຂະພາບ, ຫຼື ມີປະສິດທິຜົນແຕ່ຫາທຶນບໍ່ໄດ້) ຈຳເປັນຕ້ອງຮູ້ວ່າຕົນມີບັນຫາໃດ.

## ຂໍ້ຜິດພາດທີ່ພົບເລື້ອຍ

- **LTV ຈາກອັດຕາການຫຼຸດຫາຍຂອງກຸ່ມຜູ້ໃຊ້ຍຸກທຳອິດ**: ການຫຼຸດຫາຍຈະຄົງທີ່ລົງ; ແຕ່ກໍມີອະຄະຕິຜູ້ລອດຊີວິດດ້ວຍ — ຜູ້ໃຊ້ຍຸກທຳອິດຮັກສາໄດ້ດີກວ່າກຸ່ມຜູ້ຊົມທີ່ຂະຫຍາຍແລ້ວ. ໃຫ້ໃຊ້ຂໍ້ມູນຂອງກຸ່ມ (cohort) ທີ່ເຕີບໃຫຍ່ເຕັມທີ່.
- **CAC ລວມຈາກທຸກຊ່ອງທາງ**: CAC ຂອງໂຄສະນາສັງຄົມແບບຈ່າຍເງິນ ແລະ CAC ຂອງການແນະນຳໂດຍແພດແຕກຕ່າງກັນ 10 ເທົ່າ, ດ້ວຍໂປຣໄຟລ໌ການຮັກສາຜູ້ໃຊ້ທີ່ກົງກັນຂ້າມ — ຕ້ອງແບ່ງສ່ວນ ຫຼື ຖືກຊັກນຳໃຫ້ເຂົ້າໃຈຜິດ.
- **PMPM ໂດຍບໍ່ມີເພດານການໃຊ້ງານ**: ສະມາຊິກທີ່ມີສ່ວນຮ່ວມຜິດປົກກະຕິສາມາດເຮັດໃຫ້ກຳໄລກັບດ້ານກັນ; ຕ້ອງສ້າງແບບຈຳລອງການແຈກຢາຍ, ບໍ່ແມ່ນຄ່າສະເລ່ຍ.
- **ນຳສະເໜີ VOI ເປັນ ROI** ຕໍ່ CFO — ຄວາມລົ້ມເຫຼວດ້ານຄວາມໜ້າເຊື່ອຖືທີ່ອຸດສາຫະກຳສຸຂະພາບສຸຂະພາບພະນັກງານໃຊ້ເວລາຫຼາຍທົດສະວັດເພື່ອໃຫ້ໄດ້ມາ.

## ແຫຼ່ງອ້າງອີງ

- Healthtech unit economics primers. <https://smart-it.io/blog/how-to-calculate-unit-economics-for-healthcare-startups/>
- PMPM pricing frameworks for digital health. <https://www.quintupleaim.com/blog/strategic-pricing-for-digital-health-startups-in-value-based-care-per-member-per-month-pmpm-frameworks>
