# Dina Amben sing Dihemat (Bed Days Saved)

Sedina amben (bed day) iku siji pasien nempati siji amben rumah sakit sedina. "Dina amben sing dihemat" — liwat pulang luwih awal, ngindhari rawat inap, utawa bangsal virtual — iku manfaat andalan ing kasus bisnis digital NHS, lan sing paling kerep diregani kegedhen.

## Kenapa Iki Penting

Amben iku kendala ngiket perawatan akut: nalika amben kebak, operasi elektif dibatalake, ambulans antri, lan unit gawat darurat macet. Intervensi sing mbebasake dina amben mula nggawa nilai nyata — nanging *jinis* nilai gumantung babar pisan apa sing kedadean marang amben sing dibebasake. Direktur keuangan wis sinau ngurangi klaim dina-amben naif kanthi akeh; nggawe aritmetika iki bener iku tes kredibilitas.

## Matematikane

```
Dina amben sing dihemat = pasien sing kena × Δ lama inap (utawa rawat inap sing dihindari × rata-rata LOS)

Nilai gumantung panggunaan kapasitas sing dibebasake:
  diisi maneh karo aktivitas elektif → nilai = penghasilan aktivitas utawa manfaat daftar tunggu
  bangsal ditutup / dikurangi      → nilai = staf + biaya operasional sing dibebasake (awis)
  diserap minangka kelonggaran     → nilai ≈ mung biaya marginal (hotel), £50–£150/dina
```

Biaya rata-rata kebak sedina amben akut asring dikutip £400+ (National Cost Collection biyen ~£350 kanggo dina amben ekses) — nanging deleng [biaya marginal vs rata-rata](../biaya-marginal-vs-rata-rata/): rata-rata meh ora tau dadi penghematan.

## Conto Petungan

"Bangsal virtual" pemantauan jarak adoh ngidini 600 pasien/taun mulih 2 dina luwih awal: 1,200 dina amben dihemat.

- **Klaim naif**: 1,200 × £400 = £480,000. Salah kajaba bangsal ditutup.
- **Klaim jujur**: trust ngisi maneh amben karo pasien ortopedi elektif. 1,200 dina amben ÷ rata-rata inap 3 dina = 400 spell elektif tambahan ing ~£6,000 penghasilan saben siji miturut pambayaran adhedhasar aktivitas = **£2.4M aktivitas sing didanai tambahan** (dikurangi biaya marginal ngrawat pasien kuwi), *plus* 400 pasien metu saka daftar tunggu. Biaya operasional bangsal virtual (£350,000) dikurangi saka iki.

Kapasitas sing dibebasake lan *dienggo maneh* asring regane luwih saka klaim awis naif — nanging iku jinis nilai beda lan kudu diwenehi label mangkono ([cash-releasing vs non-cash-releasing](../penghematan-cash-releasing-vs-non-cash-releasing/)).

## Sambungan karo Rékayasa Piranti Lunak

"Dina server sing dihemat" tumindake padha. Mateni lingkungan sing mesthi urip mung ngeculake awis nalika instans dihentikan utawa reservasi kadaluwarsa; kapasitas sing diserap bali menyang pool regane biaya marginale (~0 ing belanja sing wis dikomit). Disiplin paralel: kanggo saben penghematan sing diklaim, jenengi *mekanisme* — dihentikan, diisi maneh karo karya bernilai, utawa nguap. Piranti lunak sing nyuda lama inap rumah sakit (koordinasi pulang, pemantauan jarak adoh, kacepetan diagnostik) kudu nggawe model telung skenario lan ngidini trust milih saben bangsal.

## Jebakan

- **Valuasi biaya-rata-rata** kanggo kapasitas marginal — kesalahan kanonik.
- **Ngetung ganda**: dina amben sing dihemat *lan* rawat inap sing dihindari *lan* pangurangan daftar tunggu saka amben sing padha.
- **Nganggep dina sing dihemat iku dina sing larang**: dina sing dihemat ing pungkasan inap iku dina paling murah (akut-rendah).

## Sumber

- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
- Economics by Design, NHS cost calculator. <https://economicsbydesign.com/tools/nhs-cost-calculator/>
