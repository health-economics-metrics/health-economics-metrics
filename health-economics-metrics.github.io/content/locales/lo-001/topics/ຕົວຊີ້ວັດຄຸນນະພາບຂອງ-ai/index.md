# ຕົວຊີ້ວັດຄຸນນະພາບຂອງ AI

ຕົວຊີ້ວັດຂອງຄວາມຖືກຕ້ອງຂອງຜົນຜະລິດທີ່ AI ສ້າງຂຶ້ນ: ຄວາມຖືກຕ້ອງທຽບກັບຄວາມຈິງພື້ນຖານ, **ຄວາມສັດຊື່ຕໍ່ຕົ້ນສະບັບ/ການອີງຂໍ້ມູນ (faithfulness/groundedness)** (ທຸກຂໍ້ອ້າງຖືກສະໜັບສະໜູນໂດຍບໍລິບົດທີ່ໃຫ້ມາບໍ?), ແລະ **ອັດຕາການຫຼອນ (hallucination rate)** (ຜົນຜະລິດສ່ວນໃດມີເນື້ອຫາທີ່ບໍ່ມີຫຼັກຖານ ຫຼື ບໍ່ຖືກຕ້ອງ?). ໃນສະພາບແວດລ້ອມສຸຂະພາບ ສິ່ງເຫຼົ່ານີ້ບໍ່ແມ່ນເລື່ອງຄຸນນະພາບທີ່ເພີ່ມເຕີມ — ມັນແມ່ນອັດຕາຄວາມເສຍຫາຍ.

## ເປັນຫຍັງຈຶ່ງສຳຄັນ

ເກນທຽບດ້ານການແພດວັດອັດຕາການຫຼອນໄດ້**ສູງກວ່າ 60% ສຳລັບ LLM ທີ່ບໍ່ອີງຂໍ້ມູນ** ໃນໜ້າວຽກການແພດ (ບາງໂມເດລເປີດ >80%), ໃນຂະນະທີ່ການອີງຂໍ້ມູນ, ການດຶງຂໍ້ມູນ, ແລະ ໂໝດການໃຫ້ເຫດຜົນຫຼຸດອັດຕາລົງຢ່າງຫຼວງຫຼາຍ (ເຊັ່ນ ໂໝດ thinking ຂອງ GPT-5 ຫຼຸດການຫຼອນໃນ HealthBench ຈາກ 3.6% → 1.6% ໃນເກນທຽບໜຶ່ງ). ປະລິມານຢາທີ່ຫຼອນ ຫຼື ການອ້າງອີງທີ່ປະດິດຂຶ້ນໃນຂັ້ນຕອນຄລີນິກແມ່ນ**ເຫດການຂໍ້ມູນຜິດທີ່ມີເສັ້ນທາງສູ່ອັນຕະລາຍ** — ມັນຢູ່ໃນດ້ານອັນຕະລາຍຂອງແບບຈຳລອງເສດຖະກິດໃດໆ ແລະ ຖືກຕີລາຄາຄືຜົນບວກປອມໃນ[ເສດຖະສາດການຄັດກອງ](../ເສດຖະສາດການຄັດກອງ/): ທຸກເຫດການກໍ່ໃຫ້ເກີດຕົ້ນທຶນຕໍ່ເນື່ອງ (ການປະຕິບັດຕາມຂໍ້ມູນຜິດ, ແຮງງານກວດຢືນຢັນ, ຄວາມສ່ຽງທາງການແພດ-ກົດໝາຍ, ຄວາມໄວ້ວາງໃຈທີ່ກັດກ່ອນ).

## ຄະນິດສາດ

```
Hallucination rate = outputs containing unsupported/false content / total outputs
  intrinsic:  contradicts the provided context
  extrinsic:  unverifiable fabrication beyond the context

Faithfulness (RAGAS-style) = supported claims in answer / total claims in answer
Context precision/recall   = retrieval quality feeding the generator

Economic weighting — not all hallucinations cost alike:
  expected harm cost = Σ over error types (rate × P(undetected) ×
                       P(acted upon) × cost per acted-upon error)
  The human-review layer sets P(undetected) — and its cost belongs
  in the model too (reviewer minutes × volume).
```

## ຕົວຢ່າງການຄິດໄລ່

ຜູ້ຊ່ວຍລະຫັດຄລີນິກດ້ວຍ AI ປະມວນຜົນ 200,000 ກໍລະນີ/ປີ; ການກວດສອບສະແດງວ່າ 2% ຂອງຜົນຜະລິດມີຂໍ້ຜິດພາດໃນການລະຫັດທີ່ສຳຄັນ; ຜູ້ໃຫ້ລະຫັດທີ່ເປັນມະນຸດຈັບໄດ້ 85% ຂອງສິ່ງເຫຼົ່ານັ້ນ:

```
Errors reaching submission = 200,000 × 0.02 × 0.15 = 600/year
Cost per uncaught error (mis-billing avg + audit exposure) ≈ £250
Expected error cost         = 600 × 250 = £150,000/year
Review cost (2 min × 200k × £0.50/min)  = £200,000/year

Improvement case: retrieval grounding cuts error rate to 0.8%
→ uncaught errors 240, error cost £60,000 (−£90k/yr); review time
  can also drop (sampling instead of full review) — the quality
  investment pays before any speed claim.
```

## ຄວາມເຊື່ອມໂຍງກັບວິສະວະກຳຊອບແວ

ປະຕິບັດຕໍ່ຄຸນນະພາບແບບຈຳລອງຄືເສດຖະສາດຂອງການຄຸ້ມຄອງການທົດສອບ ດ້ວຍລະບຽບວິໄນລະດັບສຸຂະພາບ: **ຊຸດປະເມີນຜົນຄືການທົດລອງທາງຄລີນິກຂອງທ່ານ** — ລົງທະບຽນລ່ວງໜ້າ, ເປັນຕົວແທນຂອງສ່ວນປະສົມກໍລະນີ*ຂອງທ່ານ*, ອັບເດດຕາມການລອຍຕົວ (drift); **ການອີງຂໍ້ມູນຊະນະຂະໜາດ**ສຳລັບໜ້າວຽກຂໍ້ເທັດຈິງ (ການດຶງຂໍ້ມູນ + prompt ທີ່ບັງຄັບໃຫ້ອ້າງອີງ ມັກເປັນວິທີຫຼຸດການຫຼອນທີ່ຖືກທີ່ສຸດ — ເບິ່ງ [ເສດຖະສາດຫົວໜ່ວຍຂອງການອະນຸມານ](../ເສດຖະສາດຫົວໜ່ວຍຂອງການອະນຸມານ/) ສຳລັບພາລະ token ຂອງມັນ); ແລະ **ເຜີຍແຜ່ຈຸດປະຕິບັດການ**: ຄືກັບ[ຄວາມອ່ອນໄຫວ/ຄວາມຈຳເພາະ](../ການປະເມີນ-ai-ທາງຄລີນິກ/) "ຄວາມສັດຊື່ 97%" ບໍ່ມີຄວາມໝາຍຫາກບໍ່ມີການແຈກຢາຍໜ້າວຽກ ແລະ ເກນການກວດຈັບ. ຄະນິດສາດຂອງຊັ້ນກວດທານຂ້າງເທິງແມ່ນເລກຄະນິດ[NNT/NNH](../ຈຳນວນທີ່ຕ້ອງຮັກສາ/) ດຽວກັນກັບດ່ານຄັດກອງໃດໆ.

## ຂໍ້ຜິດພາດທີ່ພົບເລື້ອຍ

- **ການຍ້າຍຈາກເກນທຽບໄປສູ່ການນຳໃຊ້ຈິງ**: ອັດຕາການຫຼອນຂຶ້ນກັບໜ້າວຽກຢ່າງຫຼາຍ; ສ່ວນປະສົມກໍລະນີຂອງທ່ານເອງຄືເກນທຽບດຽວທີ່ນັບ.
- **ການກວດທານໂດຍມະນຸດທີ່ບໍ່ໄດ້ຄິດຕົ້ນທຶນ**: "ແພດກວດທຸກຢ່າງ" ເຮັດໃຫ້ຜົນປະໂຫຍດຫຼຸດເຄິ່ງໜຶ່ງ ແລະ ຕ້ອງປາກົດໃນແຖວຕົ້ນທຶນ — ແລະ ຄວາມລະມັດລະວັງຫຼຸດລົງ (ຄວາມປະໝາດຈາກລະບົບອັດຕະໂນມັດ) ດັ່ງນັ້ນ P(ບໍ່ກວດພົບ) ເພີ່ມຂຶ້ນຕາມຄວາມໄວ້ວາງໃຈ.
- **ປັບຄຸນນະພາບສະເລ່ຍໃຫ້ດີ ໃນຂະນະທີ່ຄວາມສ່ຽງຫາງແບກຮັບອັນຕະລາຍ**: ບັນທຶກພູມແພ້ທີ່ປະດິດຂຶ້ນອັນດຽວໜັກກວ່າຖ້ອຍຄຳທີ່ອືດອາດພັນອັນ; ໃຫ້ນ້ຳໜັກຂໍ້ຜິດພາດຕາມຜົນທີ່ຕາມມາ ຕາມສູດອັນຕະລາຍທີ່ຄາດໄວ້.

## ແຫຼ່ງອ້າງອີງ

- Hallucination evaluation methods and metrics. <https://www.braintrust.dev/articles/ai-hallucination-evaluations-metrics-methods-2026>
- Medical LLM hallucination statistics. <https://sqmagazine.co.uk/llm-hallucination-statistics/>
- RAG faithfulness metrics. <https://www.getmaxim.ai/articles/measuring-llm-hallucinations-the-metrics-that-actually-matter-for-reliable-ai-apps/>
