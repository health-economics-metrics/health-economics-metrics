# ເສດຖະສາດການຕິດຕາມຜູ້ປ່ວຍທາງໄກ

ເສດຖະສາດການຊົດເຊີຍ ແລະ ການຫັກລົບຕົ້ນທຶນຂອງການຕິດຕາມຜູ້ປ່ວຍຢູ່ເຮືອນ: ໃນສະຫະລັດ, ຊຸດລາຍຮັບລະຫັດ CPT ທີ່ກຳນົດໄວ້; ໃນບໍລິການສຸຂະພາບແຫ່ງຊາດ, ການຫຼີກລ່ຽງການນອນໂຮງໝໍ ແລະ ເສດຖະສາດຫວອດສະເໝືອນຈົນເຖິງການທົດແທນເຕັມຮູບແບບດ້ວຍ **ໂຮງໝໍຢູ່ເຮືອນ**.

## ເປັນຫຍັງຈຶ່ງສຳຄັນ

RPM ແມ່ນບ່ອນທີ່ຂໍ້ມູນອຸປະກອນກາຍເປັນການດູແລສຸຂະພາບທີ່ເກັບເງິນໄດ້. ໂຄງສ້າງ Medicare ຂອງສະຫະລັດ (ຄ່າສະເລ່ຍແຫ່ງຊາດປີ 2025) ຊັດເຈນຜິດປົກກະຕິ:

```
99453  setup & patient education     ~$19.73  one-time (after 16 days of data)
99454  device supply + transmission  ~$43.03  per 30 days — REQUIRES ≥16 days
                                              of readings in the 30
99457  first 20 min/month management ~$47.87  requires ≥20 logged minutes
99458  each additional 20 min        ~$38.49
```

ເດືອນຜູ້ປ່ວຍທີ່ປະຕິບັດຕາມລວມກັນປະມານ **$90–130 PMPM**. ດ້ານການຫັກລົບຕົ້ນທຶນ, ໂຄງການໂຮງໝໍຢູ່ເຮືອນ (ການຍົກເວັ້ນ CMS Acute Hospital Care at Home: 300+ ໂຮງໝໍ) ສະແດງການປະຢັດ ~$1,800–$3,000 ຕໍ່ການພົບທຽບກັບການນອນໂຮງໝໍ ພ້ອມການກັບມານອນຊ້ຳ ແລະ ການຕິດເຊື້ອຕ່ຳກວ່າ — ການສາທິດທີ່ຊັດເຈນທີ່ສຸດວ່າການຕິດຕາມບວກການດູແລເສມືນສາມາດທົດແທນຊັບພະຍາກອນທີ່ແພງທີ່ສຸດໃນລະບົບ, ຕຽງທີ່ມີພະນັກງານ.

## ຄະນິດສາດ

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

## ຕົວຢ່າງການຄິດໄລ່

ຄລີນິກສະຫະລັດລົງທະບຽນຜູ້ປ່ວຍຄວາມດັນເລືອດສູງ 400 ຄົນ; 70% ບັນລຸເກນ 16 ວັນໃນເດືອນປົກກະຕິ; ນາທີການຄຸ້ມຄອງຖືກບັນທຶກສຳລັບ 60%:

```
Monthly revenue ≈ 400 × [0.70 × 43.03 + 0.60 × 47.87] = 400 × 58.84 ≈ $23,500
Annual ≈ $282,000; service cost (devices $12/mo, staff 0.8 FTE) ≈ $180,000
Margin ≈ $100k/year — and note the levers are engineering levers:
raising the 16-day compliance from 70% → 85% adds ~$31k/year
(device comfort, sync reliability, reminder design).
```

ກະຈົກ NHS: ຫວອດສະເໝືອນ 50 ຕຽງທີ່ການຄອບຄອງ 80% ທົດແທນວັນນອນໂຮງໝໍທີ່ປະຢັດສຸດທິ £150/ວັນ ≈ 50 × 0.8 × 365 × 150 ≈ **£2.19M/ປີ** ລວມ — ທຽບກັບແພລດຟອມ, ອຸປະກອນ ແລະ ທີມພະຍາບານຊຸມຊົນທີ່ເຮັດວຽກມັນ.

## ຄວາມເຊື່ອມໂຍງກັບວິສະວະກຳຊອບແວ

ແພລດຟອມ RPM ແມ່ນຜະລິດຕະພັນຫາຍາກທີ່ **ເວລາທຳງານ ແລະ ຄວາມໜ້າເຊື່ອຖືການຊິງຄ໌ແປງເປັນລາຍຮັບໂດຍກົງ** (ອາທິດຂອງການຊິງຄ໌ລົ້ມເຫຼວທຳລາຍປະຕູ 16 ວັນຂອງກຸ່ມ) ແລະ ບ່ອນທີ່ການຕິດຕາມເວລາລະດັບກວດສອບ (ກົດ 20 ນາທີ) ເປັນຄຸນສົມບັດຊັ້ນໜຶ່ງ, ບໍ່ແມ່ນການຄິດພາຍຫຼັງ. ສ້າງສຳລັບ: ແດຊບອດການປະຕິບັດຕາມຕໍ່ຜູ້ປ່ວຍທີ່ສະແດງເດືອນເກັບເງິນທີ່ມີຄວາມສ່ຽງໃນຂະນະທີ່ຍັງແກ້ໄຂໄດ້; ເສັ້ນທາງຂໍ້ມູນທີ່ມີເຄື່ອງໝາຍເວລາ ແລະ ທົນຕໍ່ການດັດແປງ (ການກວດສອບຂອງຜູ້ຈ່າຍເງິນເປັນປົກກະຕິ); ແລະ ການປັບເສດຖະສາດການແຈ້ງເຕືອນ — ທຸກການແຈ້ງເຕືອນໃຊ້ນາທີຂອງທີມຕິດຕາມ, ເຊິ່ງເປັນທັງຫົວໜ່ວຍເກັບເງິນ ແລະ ຊັບພະຍາກອນທີ່ຫາຍາກ ([ເສດຖະສາດການຄັດກອງ](../ເສດຖະສາດການຄັດກອງ/) ຄວບຄຸມການເລືອກເກນ).

## ຂໍ້ຜິດພາດທີ່ພົບເລື້ອຍ

- **ການລົງທະບຽນ ≠ ລາຍຮັບ**: ສ່ວນທີ່ປະຕິບັດຕາມແມ່ນຕົວເລກ; ສ້າງແບບຈຳລອງ, ຢ່າສົມມຸດ.
- **ເອົາລະຫັດສະຫະລັດມາໃສ່ກໍລະນີ NHS** — ບໍລິການສຸຂະພາບແຫ່ງຊາດຊື້ການຫຼີກລ່ຽງການນອນໂຮງໝໍ, ບໍ່ແມ່ນຊຸດ CPT; ຣັນແບບຈຳລອງທີສອງ.
- **ການອ້າງການຫັກລົບທີ່ຕົ້ນທຶນສະເລ່ຍ** ສຳລັບການນອນທີ່ຕົ້ນທຶນຄົງທີ່ຍັງຢູ່ (ເບິ່ງ [ຕົ້ນທຶນສ່ວນເພີ່ມ ທຽບກັບ ຕົ້ນທຶນສະເລ່ຍ](../ຕົ້ນທຶນສ່ວນເພີ່ມ-ທຽບກັບ-ຕົ້ນທຶນສະເລ່ຍ/)).
- **ທີມຕິດຕາມອີ່ມຕົວ**: ປະລິມານການແຈ້ງເຕືອນຂະຫຍາຍຕາມການລົງທະບຽນ; ລາຍການພະນັກງານແມ່ນຂໍ້ຈຳກັດຜູກມັດທີ່ແບບຈຳລອງສ່ວນໃຫຍ່ລະເວັ້ນ.

## ແຫຼ່ງອ້າງອີງ

- RPM CPT codes and 2025 rates. <https://blog.prevounce.com/quick-guide-remote-patient-monitoring-rpm-cpt-codes-to-know>
- CMS hospital-at-home outcomes reporting. <https://www.mcknightshomecare.com/news/hospital-at-home-achieved-cost-savings-among-all-top-diagnosis-groups-cms-reports/>
- Telehealth.HHS.gov, billing for RPM. <https://telehealth.hhs.gov/providers/best-practice-guides/telehealth-and-remote-patient-monitoring/billing-remote-patient>
