# Tingkat Rawat Inap Ulang (Readmission Rate)

Tingkat rawat inap ulang 30-dina iku persentase pasien sing dipulangake lan bali minangka darurat ing 30 dina. Iku metrik *kualitas-pulang* kanonik sistem kesehatan — lan nggawa paukuman finansial langsung.

## Kenapa Iki Penting

Rawat inap ulang tegese pulang pisanan ora nyantol: pulang prematur, serah-terima obat gagal, ora ana tindak lanjut, utawa dhukungan sosial ilang. Pembayar ngukum kanthi eksplisit — Hospital Readmissions Reduction Program AS nyuda nganti 3% pambayaran Medicare rumah sakit; NHS historis ora mbayar rawat inap ulang darurat 30-dina sing bisa dihindari. Dadi ngindhari rawat inap ulang iku salah siji saka sawetara kategori manfaat sing *langsung* gegandhengan awis kanggo panyedhiya, dudu mung kapasitas.

## Matematikane

```
Tingkat rawat inap ulang = rawat inap ulang darurat ing 30 dina / pulang indeks × 100

Perbandingan standar-risiko nyetel campuran kasus; program paukuman
mbandhingake sing diamati vs sing diarep-arep kanggo rumah sakit sing padha.

Nilai ngindhari = rawat inap ulang sing dihindari × (biaya saben spell rawat inap ulang
                  + paparan paukuman saben rawat inap ulang)
```

## Conto Petungan

Aplikasi dhukungan-pulang gagal jantung (pelacakan gejala, peringatan bobot, pangeling obat, eskalasi perawat): 2,000 pulang/taun, tingkat rawat inap ulang dhasar 18%, uji nuduhake 14% karo aplikasi.

```
Rawat inap ulang sing dihindari = 2,000 × (0.18 − 0.14) = 80/taun
Biaya saben spell rawat inap ulang ≈ £3,500 → £280,000/taun biaya perawatan sing dihindari
Plus paparan paukuman/non-pambayaran ing spell kuwi.
Biaya aplikasi: 2,000 × £60 = £120,000/taun
Net ≈ +£160,000/taun, sadurunge klaim QALY apa wae kanggo kemunduran sing dihindari.
```

Angka sing kudu dibela yaiku efek 4-poin-persentase: kudu asale saka perbandingan sing dikontrol, amarga tingkat rawat inap ulang obah karo campuran kasus lan musim.

## Sambungan karo Rékayasa Piranti Lunak

Rawat inap ulang iku **tingkat kegagalan owah-owahan** sistem kesehatan (deleng [metrik DORA](../metrik-dora/)): karya sing "dikirim" lan mantul bali ing 30 dina. Analogine jero — tiket dibukak maneh lan insiden regresi nuduhake "kualitas pulang" elek (verifikasi lemah, panutupan prematur, dokumen serah-terima ilang); akuntansi gaya-paukuman (tim sing ndandani mbayar, dudu tim panampa) ngowahi prilaku; lan loro bidang sinau piwulang sing padha, yen ndorong throughput mentah (pulang luwih cepet, ngirim luwih cepet) tanpa nandur modal ing serah-terima mung ngowahi antrian katon dadi rework ora katon. "Tingkat reopen 30-dina" kalebu ing dasbor tim apa wae sing ngrayakake cycle time.

## Jebakan

- **Dolanan kanthi label ulang**: rawat inap ulang dikode minangka tetep observasi utawa kondisi anyar; audit definisi.
- **Kabeh-sebab vs sebab-gegandhengan**: kabeh-sebab 30-dina kalebu kedadean sing pancen ora gegandhengan; paukuman biasane nganggo kabeh-sebab persis amarga "gegandhengan" bisa dimainake.
- **Buta campuran-kasus**: rumah sakit sing ngladeni populasi sing luwih lara, luwih mlarat rawat inap ulang luwih akeh amarga alasan sing ora ana aplikasi sing ndandani — setel risiko sadurunge mbandhingake.

## Sumber

- CMS, Hospital Readmissions Reduction Program. <https://www.cms.gov/medicare/payment/prospective-payment-systems/acute-inpatient-pps/hospital-readmissions-reduction-program-hrrp>
- NHS Digital, emergency readmissions statistics. <https://digital.nhs.uk/data-and-information/publications/statistical/compendium-emergency-readmissions>
