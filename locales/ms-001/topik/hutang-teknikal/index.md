# Hutang Teknikal

Hutang teknikal ialah kos masa depan tersirat daripada keputusan lalu yang mudah dalam pangkalan kod: kerja pemulihan yang terhutang (**prinsipal**) dan seretan berterusan yang dikenakannya pada penyampaian (**faedah**). Kaedah pengkuantifikasian seperti SQALE menukarnya daripada metafora kepada liabiliti berkos.

## Mengapa ia penting

Tidak dikuantifikasi, hutang teknikal ialah rungutan; dikuantifikasi, ia kes perniagaan. Garis asas industri (CAST Appmarq, 1,400 aplikasi / 550J LOC): secara sejarah ≈ **$3.61 prinsipal hutang teknikal bagi setiap baris kod**, dengan pangkalan kod lazim membawa nisbah hutang 15–20% kos bina semula, berbanding palang kesihatan yang lazim digunakan ≤5% (gred "A" SonarQube). Kerangka ekonomi kesihatan sesuai tepat: hutang ialah *keadaan kronik* — tidak dirawat, ia berkembang, "faedah"nya berkompaun sebagai penyampaian lebih perlahan dan kadar kecacatan lebih tinggi, dan pemulihan bersaing untuk kapasiti dengan kerja ciri tepat seperti pencegahan bersaing dengan rawatan.

## Matematiknya

```
Prinsipal SQALE   = Σ merentas pelanggaran (masa pemulihan) × kadar kos pembangun
Nisbah hutang teknikal (TDR) = kos pemulihan / kos pembangunan semula × 100
                    (gred SonarQube: A ≤ 5%, B ≤ 10%, C ≤ 20%, D ≤ 50%)

Faedah (nombor yang membenarkan pembayaran balik):
  faedah/tahun = Δ halaju penyampaian × nilai setiap unit halaju
               + Δ kadar kecacatan × kos setiap kecacatan
Kes pembayaran = PV(faedah dielakkan sepanjang ufuk) − kos pemulihan
                 (didiskaun — lihat discounting-and-time-preference.md)
```

Prinsipal menyatakan liabiliti; **faedah** membuat kes pelaburan. Membayar prinsipal £500k untuk mengelakkan faedah £40k/tahun ialah perdagangan buruk; untuk mengelakkan £400k/tahun, cemerlang.

## Contoh penyelesaian

Lapisan integrasi rekod klinikal 400k-LOC: prinsipal SQALE 3,800 jam × £75 = **£285k**; TDR ≈ 12% (gred C). Faedah terukur: pasukan yang menyentuh lapisan ini menunjukkan masa kitar 40% lebih panjang dan kadar kegagalan-perubahan 2× berbanding garis asas hartanah. Lapisan menyerap 6,000 jam-pembangun/tahun:

```
Faedah ≈ 6,000 × 0.40 × £75        = £180,000/tahun (seretan halaju)
       + 12 kegagalan tambahan × £8,000 = £96,000/tahun (kerja semula/insiden)
       ≈ £276,000/tahun

Pulihkan 30% terburuk prinsipal (£85k) menyasarkan titik panas → pengurangan faedah
dimodelkan 60%: menjimatkan ~£166k/tahun. Bayar balik ≈ 6 bulan.
```

Penyasaran titik panas penting: faedah hutang tertumpu di mana kekerapan perubahan × ketumpatan hutang memuncak — memulihkan hutang yang jarang disentuh tidak membeli apa-apa, seperti merawat keadaan yang tidak akan berkembang ([ekonomi pencegahan](../ekonomi-pencegahan/)).

## Kaitan dengan kejuruteraan perisian

Import ekonomi kesihatan yang menaik taraf hujah hutang teknikal: nyatakan hartanah sebagai **inventori beban** (gaya [DALY](../tahun-hayat-terlaras-hilang-upaya/) — di mana tahun kejuruteraan sihat yang hilang?); benarkan pembayaran dengan matematik perkembangan, secara jujur (biasanya kos-efektif, bukan menjimatkan-kos); beratkan pemulihan sistem paling teruk dengan [kekurangan keterukan](../kekurangan-qaly-dan-pengubah-suai-keterukan/); dan serahkan cadangan pemulihan besar dengan analisis offset yang bertahan terhadap peraturan [kos hiliran dielakkan](../kos-hiliran-yang-dielakkan/) — berpemberat kebarangkalian, didiskaun, dikira sekali.

## Perangkap

- **Pelaporan prinsipal sahaja**: nombor besar menakutkan tanpa anggaran faedah tidak membenarkan apa-apa.
- **Angka hutang janaan alat diambil secara literal**: SQALE mengira pelanggaran peraturan; ia terlepas hutang seni bina (jenis mahal) dan mengira perkara remeh.
- **Utopianisme hutang-sifar**: tahap hutang optimum bukan sifar — hutang ialah leveraj; soalannya ialah kadar faedah.
- **"Penulisan semula mengelakkan semuanya"**: cadangan penulisan semula mesti melepasi peraturan offset yang sama — kos kontrafaktual, kebarangkalian, diskaun.

## Sumber

- CAST, technical debt estimation. <https://www.castsoftware.com/glossary/technical-debt-estimation>
- Letouzey J-L, "The SQALE method for evaluating Technical Debt." <https://www.researchgate.net/publication/239763591_The_SQALE_method_for_evaluating_Technical_Debt>
