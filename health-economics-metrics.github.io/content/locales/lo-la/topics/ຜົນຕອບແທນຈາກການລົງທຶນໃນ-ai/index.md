# ຜົນຕອບແທນຈາກການລົງທຶນໃນ AI

ROI ຂອງ AI ແມ່ນຜົນຕອບແທນດ້ານກຳໄລຂາດທຶນ (P&L) ທີ່ວັດໄດ້ ແລະ ເຊື່ອມໂຍງກັບໂຄງການ AI. ເກນທຽບທີ່ໜ້າຄິດ: ການຄົ້ນຄວ້າ "GenAI Divide" ປີ 2025 ຂອງ MIT ພົບວ່າ ເຖິງວ່າຈະມີການລົງທຶນ GenAI ໃນວິສາຫະກິດ $30–40B **ປະມານ 95% ຂອງໂຄງການທົດລອງບໍ່ສະແດງຜົນຕອບແທນ P&L ທີ່ວັດໄດ້** — ແລະ 5% ທີ່ສຳເລັດມີນິໄສທີ່ລະບຸໄດ້ຮ່ວມກັນ.

## ເປັນຫຍັງຈຶ່ງສຳຄັນ

ລະບົບສຸຂະພາບມີຊື່ເອີ້ນຮູບແບບການທົດລອງ AI: **pilotitis** — ສຸສານຂອງ NHS ສຳລັບແອັບທີ່ມີແວວດີແຕ່ທົດລອງຕະຫຼອດໄປແລະບໍ່ເຄີຍຂະຫຍາຍ. ຜົນການຄົ້ນພົບຂອງ MIT ກົງກັບສິ່ງທີ່ການປະເມີນເຕັກໂນໂລຢີສຸຂະພາບຮູ້ແລ້ວຢ່າງຊັດເຈນ: ຂໍ້ອ້າງຄຸນຄ່າຕ້ອງມີຈຸດສິ້ນສຸດທີ່ກຳນົດລ່ວງໜ້າ, ການເຊື່ອມໂຍງຕ້ອງມີກຸ່ມປຽບທຽບ, ແລະ "ທຸກຄົນຮູ້ສຶກວ່າມັນຊ່ວຍ" ບໍ່ແມ່ນແຖວຜົນປະໂຫຍດ. ຜູ້ສ່ວນໜ້ອຍທີ່ສຳເລັດໃນຂໍ້ມູນ MIT ກະຈຸກຢູ່ໃນການເຮັດວຽກຫຼັງບ້ານອັດຕະໂນມັດທີ່ມີພື້ນຖານຕົ້ນທຶນທີ່ຕິດຕາມໄດ້, ແລະ **ເຄື່ອງມືທີ່ຊື້ມາສຳເລັດປະມານ 67% ຂອງເວລາ ທຽບກັບການສ້າງເອງພາຍໃນທີ່ປະມານໜຶ່ງສ່ວນສາມຂອງນັ້ນ** — ຄ່າກ່ອນທີ່ຄວນຢູ່ໃນທຸກກໍລະນີການລົງທຶນ AI (ເບິ່ງ [ສ້າງເທິງຊື້](../ສ້າງເອງ-ທຽບກັບ-ຊື້/)).

## ຄະນິດສາດ

```
AI ROI = (attributable benefit − total AI cost) / total AI cost

Total AI cost = licences/inference (see inference-unit-economics.md)
              + integration + data readiness + evaluation
              + workflow redesign + governance/assurance
              (the licence is typically the minority of the denominator)

Attributable benefit: measured against a baseline or control, classed
cash / capacity / quality per cash-releasing-vs-non-cash-releasing.md
```

## ຕົວຢ່າງການຄິດໄລ່

ກຸ່ມໂຮງໝໍນຳໃຊ້ AI ສຳລັບສອງກໍລະນີ:

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

ຄວາມແຕກຕ່າງບໍ່ແມ່ນຄຸນນະພາບຂອງ AI — ແຕ່ແມ່ນວ່າຜົນປະໂຫຍດມີ**ພື້ນຖານ, ເຈົ້າຂອງ, ແລະ ແຖວງົບປະມານ**ຫຼືບໍ່ ([ການເຮັດໃຫ້ຜົນປະໂຫຍດເກີດຂຶ້ນຈິງ](../ການເຮັດໃຫ້ຜົນປະໂຫຍດເກີດຂຶ້ນຈິງ/)).

## ຄວາມເຊື່ອມໂຍງກັບວິສະວະກຳຊອບແວ

ຄູ່ມືແບບ HTA ສຳລັບການລົງທຶນ AI: **ຈັດລຳດັບຫຼັກຖານຄືກັບ[ຊັ້ນ NICE ESF](../ກອບມາດຕະຖານຫຼັກຖານຂອງ-nice/)** — ຫຼັກຖານລະດັບສາທິດສຳລັບເຄື່ອງມືທີ່ມີຄວາມສ່ຽງຕ່ຳ, ການທົດລອງແບບຄວບຄຸມກ່ອນໃຊ້ຈ່າຍທົ່ວອົງກອນ, ດ້ວຍດ່ານການນຳໃຊ້ທີ່ລົງທະບຽນລ່ວງໜ້າ (ຮູບແບບການລົງລາຍຊື່ຊົ່ວຄາວພ້ອມກຳນົດເວລາຂອງ [DiGA](../ເສັ້ນທາງລັດ-diga-ຂອງເຢຍລະມັນ/)); **ນັບການຫຼີກລ່ຽງຕົ້ນທຶນແບບທີ່ເສດຖະສາດສຸຂະພາບນັບການຫຼີກລ່ຽງຄວາມຕ້ອງການ** — ເປັນຈິງກໍຕໍ່ເມື່ອແຖວງົບປະມານສະເພາະໜຶ່ງເຄື່ອນໄຫວ; ແລະ **ຕີລາຄາການທົດລອງເອງດ້ວຍ [EVPI](../ມູນຄ່າທີ່ຄາດໄວ້ຂອງຂໍ້ມູນສົມບູນແບບ/)** — ການທົດລອງທີ່ປ່ຽນການຕັດສິນໃຈນຳໃຊ້ບໍ່ໄດ້ມີຄ່າ £0. ສຳລັບສ່ວນເຄື່ອງມືນັກພັດທະນາໂດຍສະເພາະ ເບິ່ງ [ຜະລິດຕະພາບຂອງນັກພັດທະນາດ້ວຍ AI](../ຜະລິດຕະພາບຂອງນັກພັດທະນາດ້ວຍ-ai/).

## ຂໍ້ຜິດພາດທີ່ພົບເລື້ອຍ

- **ການກະຈາຍຕົວຂອງຜົນປະໂຫຍດ**: ຄຸນຄ່າທີ່ກະຈາຍບາງໆໃນຜູ້ໃຊ້ຫຼາຍພັນຄົນບໍ່ສາມາດວັດໄດ້ໂດຍທຳມະຊາດ; ເລືອກກໍລະນີການໃຊ້ທີ່ມີພື້ນຖານເຂັ້ມຂຸ້ນແລະຕິດຕາມໄດ້.
- **ຄິດຕົ້ນທຶນສະເພາະໃບອະນຸຍາດ**: ການເຊື່ອມປະສານ, ການປະເມີນ, ແລະ ການອອກແບບຂັ້ນຕອນການເຮັດວຽກໃໝ່ ມັກຄອບງຳຕົວຫານທີ່ແທ້ຈິງ.
- **ການຂະໂມຍການເຊື່ອມໂຍງ**: AI ທີ່ນຳໃຊ້ຄຽງຄູ່ກັບການອອກແບບຂະບວນການໃໝ່ ອ້າງຜົນຕ່າງທັງໝົດ.
- **ການຍົກລະດັບໂຄງການທົດລອງທີ່ຈົມທຶນແລ້ວ**: ຕໍ່ອາຍຸໂຄງການທົດລອງທີ່ລົ້ມເຫຼວເພາະການຢຸດໝາຍເຖິງການຍອມຮັບຄວາມລົ້ມເຫຼວ — ຕ້ອງຕົກລົງວັນຍຸຕິລ່ວງໜ້າ.

## ແຫຼ່ງອ້າງອີງ

- MIT Project NANDA "GenAI Divide" coverage. <https://fortune.com/2025/08/18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo/>
- MIT GenAI ROI findings summary. <https://blueflame.ai/blog/achieving-ai-roi-key-findings-from-mits-genai-report>
- MIT Technology Review, finding ROI on AI. <https://www.technologyreview.com/2025/10/28/1126693/finding-return-on-ai-investments-across-industries/>
