# ການຢືນຢັນອຸປະກອນສວມໃສ່

ຕົວຊີ້ວັດການຢືນຢັນວັດປະລິມານວ່າການວັດຂອງອຸປະກອນສວມໃສ່ສອດຄ່ອງກັບມາດຕະຖານທອງຄຳທາງຄລີນິກຫຼາຍປານໃດ (ECG ສຳລັບອັດຕາຫົວໃຈ, polysomnography ສຳລັບການນອນ): **MAPE**, ສະຫະສຳພັນຄວາມສອດຄ່ອງ, ຄວາມສອດຄ່ອງ Bland–Altman — ບວກຕົວຊີ້ວັດການດຳເນີນງານທີ່ຄວບຄຸມຄຸນນະພາບຂໍ້ມູນໃນໂລກຈິງ: **ການປະຕິບັດຕາມເວລາສວມໃສ່** ແລະ **ຄວາມສົມບູນຂອງຂໍ້ມູນ**.

## ເປັນຫຍັງຈຶ່ງສຳຄັນ

ການຢືນຢັນແມ່ນເງື່ອນໄຂເບື້ອງຕົ້ນຂອງທຸກຢ່າງຕໍ່ໄປ: ອຸປະກອນທີ່ພິສູດຄວາມສອດຄ່ອງກັບການວັດອ້າງອີງບໍ່ໄດ້ ບໍ່ສາມາດຍຶດ [ຈຸດສິ້ນສຸດດິຈິຕອນ](../ຈຸດສິ້ນສຸດດິຈິຕອນ-ແລະ-ໄບໂອມາກເກີ/), ຮອງຮັບ [ການເກັບເງິນ RPM](../ເສດຖະສາດການຕິດຕາມຜູ້ປ່ວຍທາງໄກ/), ຫຼື ມີການອ້າງທາງຄລີນິກ. ເກນທີ່ສາຂານີ້ຍອມຮັບສຳລັບອັດຕາຫົວໃຈ: **MAPE ≤5%** (ເຄັ່ງ) ຫຼື **≤10%** (ຜ່ອນ) ທຽບກັບ ECG. ຈຸດອ້າງອີງຈາກເອກະສານ: Oura Gen 3 MAPE ອັດຕາຫົວໃຈຕອນພັກ 1.67% (CCC 0.97); Fitbit Charge 6 MAPE ~5.5% — ອຸປະກອນຜູ້ບໍລິໂພກປັດຈຸບັນຄຸມຂອບເຂດລະດັບຄລີນິກ, ເຊິ່ງເປັນເຫດຜົນທີ່ການວັດສຳຄັນຕໍ່ອຸປະກອນ ແລະ ຕໍ່ສະພາບ.

## ຄະນິດສາດ

```
MAPE = (1/n) Σ |measured_i − reference_i| / reference_i × 100

CCC (concordance correlation) = agreement including both correlation
      and systematic bias (Pearson r penalized by location/scale shift)

Bland–Altman: mean bias ± 1.96 SD limits of agreement — shows whether
      error depends on the value's magnitude

Operational gates:
Wear-time compliance = time worn / protocol time × 100
Data completeness    = observed data points / expected × 100
```

ການຢືນຢັນຕ້ອງລາຍງານ **ຕາມສະພາບກິດຈະກຳ** (ພັກ, ເຄື່ອນໄຫວ, ນອນ) ແລະ ຕາມປະຊາກອນ — ການຮັບຮູ້ແສງ PPG ເສື່ອມດ້ວຍສິ່ງລົບກວນການເຄື່ອນໄຫວ, ການສຳຜັດບໍ່ດີ ແລະ ສີຜິວເຂັ້ມກວ່າ, ຮູບແບບຄວາມລົ້ມເຫຼວທີ່ມີເອກະສານ ແລະ ກ່ຽວຂ້ອງກັບຄວາມເທົ່າທຽມ.

## ຕົວຢ່າງການຄິດໄລ່

ໂຄງການຫວອດສະເໝືອນເລືອກອຸປະກອນສວມໃສ່ເພື່ອຕິດຕາມ. ຜູ້ສະໝັກ A: MAPE ຕອນພັກ 2.1%, ຕອນອອກກຳລັງ 11.4%. ຜູ້ສະໝັກ B: ພັກ 3.8%, ອອກກຳລັງ 6.9%.

```
Use case: deteriorating-patient detection at home — alerts trigger on
sustained elevated HR, often during activity.
Candidate A's headline (2.1%) wins the brochure; candidate B wins the
use case: at the alert-relevant condition (motion), A's 11.4% error
at HR 100 = ±11 bpm — spanning the entire alert threshold band,
generating false escalations (each a nurse callout, ~£40) or misses.

False-alert economics: 500 patients × 2 extra false alerts/week × £40
= £2.08M/year of error cost from choosing the wrong validation number.
```

## ຄວາມເຊື່ອມໂຍງກັບວິສະວະກຳຊອບແວ

ວິສະວະກອນໃຊ້ຂໍ້ມູນການຢືນຢັນເມື່ອເລືອກເຊັນເຊີ ແລະ *ຜະລິດ* ມັນເມື່ອສ້າງຄຸນສົມບັດການວັດ — ທັງສອງບົດບາດຕ້ອງການວິໄນດຽວກັນ: ທົດສອບທີ່ສະພາບການນຳໃຊ້, ບໍ່ແມ່ນສະພາບການສາທິດ (ທຽບເທົ່າຊອບແວ: ວັດປະສິດທິພາບເທິງ workload ການຜະລິດຂອງທ່ານ, ບໍ່ແມ່ນຂອງຜູ້ຂາຍ). ເວລາສວມໃສ່ ແລະ ຄວາມສົມບູນແມ່ນຜົນຂອງວິສະວະກຳຜະລິດຕະພັນ — ຄວາມສະບາຍ, ອາຍຸແບັດເຕີຣີ, ການອອກແບບພິທີຊາດ, ແລະ ຄວາມໜ້າເຊື່ອຖືການຊິງຄ໌ກຳນົດວ່າປະຕູເກັບເງິນ RPM 16-ວັນໃນ-30 ບັນລຸຫຼືບໍ່ ([ເສດຖະສາດການຕິດຕາມຜູ້ປ່ວຍທາງໄກ](../ເສດຖະສາດການຕິດຕາມຜູ້ປ່ວຍທາງໄກ/)) ແລະ ຊຸດຂໍ້ມູນການທົດລອງວິເຄາະໄດ້ຫຼືບໍ່. ຖືຂໍ້ມູນທີ່ຂາດເປັນສັນຍານທີ່ອອກແບບ: ແຍກ "ບໍ່ໄດ້ສວມ", "ສວມແຕ່ບໍ່ມີສັນຍານ" ແລະ "ຊິງຄ໌ລົ້ມເຫຼວ" ໃນ schema ຕັ້ງແຕ່ມື້ທຳອິດ — ຖືກຍຸບເປັນ null ພວກມັນເປັນພິດຕໍ່ທຸກການວິເຄາະຕໍ່ໄປ.

## ຂໍ້ຜິດພາດທີ່ພົບເລື້ອຍ

- **MAPE ລວມທີ່ເຊື່ອງຄວາມລົ້ມເຫຼວສະເພາະສະພາບ** — ກັບດັກຂອງຕົວຢ່າງການຄິດໄລ່.
- **ປະຊາກອນການຢືນຢັນ ≠ ປະຊາກອນການນຳໃຊ້**: ອາຍຸ, ສີຜິວ, ອາການສັ່ນ, ໂລກອ້ວນ ລ້ວນປ່ຽນຄວາມຜິດພາດຂອງເຊັນເຊີແສງ; ກວດປະຊາກອນຂອງການສຶກສາ.
- **ລາຍງານສະຫະສຳພັນໃນບ່ອນທີ່ຕ້ອງການຄວາມສອດຄ່ອງ**: Pearson r ສູງພ້ອມອະຄະຕິລະບົບຍັງຈັດປະເພດຜິດທຽບກັບເກນສົມບູນ — ຢືນຢັນ CCC/Bland–Altman.
- **ຄວາມສົມບູນທີ່ເພີ່ມດ້ວຍການຖົມ (imputation)**: ຊ່ອງຫວ່າງທີ່ເຕີມລາຍງານເປັນຂໍ້ມູນທີ່ສັງເກດ.

## ແຫຼ່ງອ້າງອີງ

- Consumer wearable HR validation (Oura Gen 3/4). <https://pmc.ncbi.nlm.nih.gov/articles/PMC12367097/>
- Wearable validity thresholds (MAPE standards). <https://formative.jmir.org/2025/1/e70835>
- Multi-device validation studies. <https://pmc.ncbi.nlm.nih.gov/articles/PMC6431828/>
