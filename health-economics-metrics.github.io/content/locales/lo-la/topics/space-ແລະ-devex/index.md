# SPACE ແລະ DevEx

SPACE (Satisfaction & well-being, Performance, Activity, Communication & collaboration, Efficiency & flow) ແລະ DevEx (ວົງຈອນຄວາມຄິດເຫັນ, ພາລະທາງປັນຍາ, ສະຖານະ flow) ແມ່ນກອບສຳລັບວັດຜະລິດຕະພາບນັກພັດທະນາ **ແບບຫຼາຍມິຕິ** — ຄຳຕອບຂອງສາຂານີ້ຕໍ່ການຄົ້ນພົບວ່າບໍ່ມີຕົວຊີ້ວັດດຽວທີ່ລອດຈາກການພົບກັບຄວາມເປັນຈິງ.

## ເປັນຫຍັງຈຶ່ງສຳຄັນ

ທັງສອງກອບເຂົ້າລະຫັດບົດຮຽນທີ່ໄດ້ມາຍາກດຽວກັນທີ່ການຄົ້ນຄວ້າຜົນລັບສຸຂະພາບຮຽນຮູ້ຫຼາຍທົດສະວັດກ່ອນ: ຕົວເລກດຽວ (ຈຳນວນແຖວໂຄ້ດ; ຄວາມດັນເລືອດ) ສະແດງຄວາມເປັນຈິງຫຼາຍມິຕິຜິດ, ແລະ ການເພີ່ມປະສິດທິພາບມັນຜະລິດການຫຼິ້ນກົນ, ບໍ່ແມ່ນການປັບປຸງ. SPACE ກຳນົດໃຫ້ລວມຕົວຊີ້ວັດຈາກຢ່າງໜ້ອຍສາມມິຕິ, ປະສົມ telemetry ກັບການລາຍງານຕົນເອງ — ເປັນໂຄງສ້າງດຽວກັນກັບທີ່ [EQ-5D](../eq-5d/) ສ້າງໂປຣໄຟລ໌ຫ້າມິຕິກ່ອນຄິດໄລ່ດັດຊະນີ, ແລະ ເປັນເຫດຜົນທີ່ [PROM](../ຜົນລັບທີ່ຜູ້ປ່ວຍລາຍງານ/) ມີຄຽງຂ້າງມາດຕະການທາງຄລີນິກ. ຄວາມພໍໃຈ/ສຸຂະພາບດີບໍ່ແມ່ນເຄື່ອງປະດັບອ່ອນ: ມັນປ້ອນເສດຖະສາດ [ການຮັກສາກຳລັງແຮງງານ](../ການຮັກສາກຳລັງແຮງງານ/), ບ່ອນທີ່ການລາອອກຖືກຕັ້ງລາຄາເປັນເດືອນຂອງເງິນເດືອນເຕັມ.

## ຄະນິດສາດ

ທັງສອງກອບບໍ່ແມ່ນສູດ; ທັງສອງແມ່ນການອອກແບບການວັດ:

```
SPACE rule: ≥ 3 dimensions, ≥ 1 perceptual (survey) + ≥ 1 system (telemetry) metric

DevEx dimensions and example pairings:
  feedback loops  → CI duration (telemetry) + "waiting feels slow" (survey)
  cognitive load  → docs findability, onboarding time + perceived effort
  flow state      → meeting/interrupt density + self-reported focus

Derived indices (e.g., DX's DXI) map survey composites to time:
vendor claim ≈ 13 min/dev/week per index point — treat as a vendor
benchmark to validate locally, not a constant of nature.
```

## ຕົວຢ່າງການຄິດໄລ່

ທີມແພລດຟອມໃຫ້ເຫດຜົນການລົງທຶນ DevEx (ເລັ່ງ CI + ປັບປຸງເອກະສານ) ສຳລັບນັກພັດທະນາ 300 ຄົນ:

```
Baseline: CI p75 = 28 min; survey "I lose focus waiting for builds": 62% agree
After:    CI p75 = 9 min;  agreement 24%

Time reclaimed (telemetry): 6 builds/day × 19 min × 0.4 usable = ~45 min/day/dev
Capacity value: 300 × 0.75h × 220d × £60/h ≈ £2.97M/year (non-cash-releasing —
see cash-releasing-vs-non-cash-releasing.md; the 0.4 usability factor is the
fragmentation discount from practitioner-time.md)
Perceptual corroboration is what makes the telemetry claim credible — either
alone is gameable; together they triangulate.
```

## ຄວາມເຊື່ອມໂຍງກັບວິສະວະກຳຊອບແວ

ເອກະສານນີ້ *ແມ່ນ* ດ້ານຊອບແວ; ການໂອນໄປທາງເສດຖະສາດສຸຂະພາບ. "ປີວິສະວະກອນທີ່ປັບດ້ວຍຄຸນນະພາບ" — ເວລາຖ່ວງນ້ຳໜັກດ້ວຍດັດຊະນີປະສົບການມາດຕະຖານ — ແມ່ນໂຄງສ້າງຂອງ [QALY](../ປີຊີວິດທີ່ປັບດ້ວຍຄຸນນະພາບ/) ທີ່ນຳໃຊ້ກັບຄວາມຈຸວິສະວະກຳ, ແລະ ມັນສືບທອດກົດຂອງ QALY: ນ້ຳໜັກຈາກເຄື່ອງມືທີ່ຢືນຢັນແລ້ວ (ການສຳຫຼວດທີ່ສອດຄ່ອງ, ການໃຫ້ຄະແນນທີ່ເຜີຍແຜ່), ດຶງ *ກ່ອນ* ການປຽບທຽບ, ບໍ່ເຄີຍປັບເພື່ອຍົກຍ້ອງເຄື່ອງມືທີ່ມັກ. ບົດຮຽນ [SF-6D ທຽບກັບ EQ-5D](../eq-5d/) ກໍນຳໃຊ້ໄດ້: ເຄື່ອງມືຕ່າງກັນໃຫ້ຕົວເລກຕ່າງກັນຢ່າງເປັນລະບົບ, ດັ່ງນັ້ນຢ່າປຽບທຽບດັດຊະນີ DevEx ຂ້າມເຄື່ອງມືຂອງຜູ້ຂາຍ.

## ຂໍ້ຜິດພາດທີ່ພົບເລື້ອຍ

- **ການຍຸບຕົວຊີ້ວັດດຽວ**: ແດຊບອດທີ່ຫຼຸດ SPACE ເປັນຄະແນນດຽວສ້າງບັນຫາທີ່ກອບມີຢູ່ເພື່ອປ້ອງກັນຄືນໃໝ່.
- **ຕົວຊີ້ວັດກິດຈະກຳເປັນຜົນລັບ**: commit, PR ແລະ story point ແມ່ນ Activity — ມິຕິທີ່ SPACE ເຕືອນຢ່າງຊັດເຈນວ່າຫຼິ້ນກົນໄດ້ງ່າຍທີ່ສຸດ (ທຽບເທົ່າສຸຂະພາບ: ນັບຂັ້ນຕອນ, ບໍ່ແມ່ນການຟື້ນຕົວ).
- **ຄວາມເມື່ອຍຈາກການສຳຫຼວດ ແລະ ຜົນ Hawthorne**: ເຄື່ອງມືເບົາລາຍໄຕມາດດີກວ່າການສອບຖາມລາຍອາທິດ.
- **ປຽບທຽບທີມ**: ຄືຕາຕະລາງລີກໂຮງໝໍໂດຍບໍ່ມີການປັບ case-mix — ຄວາມແຕກຕ່າງຂອງບໍລິບົດ (ໂດເມນ, ພາລະມໍລະດົກ, on-call) ຄອບງຳ.

## ແຫຼ່ງອ້າງອີງ

- Forsgren N, et al. "The SPACE of Developer Productivity." ACM Queue 2021. <https://queue.acm.org/detail.cfm?id=3454124>
- Noda A, Forsgren N, Storey MA, Greiler M. "DevEx: What Actually Drives Productivity." ACM Queue 2023. <https://queue.acm.org/detail.cfm?id=3595878>
