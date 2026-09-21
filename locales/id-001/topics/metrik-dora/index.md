# Metrik DORA

Metrik DORA (DevOps Research and Assessment) adalah empat ukuran kinerja penyampaian perangkat lunak — frekuensi penerapan, waktu tunggu untuk perubahan, tingkat kegagalan perubahan, dan waktu pemulihan penerapan-gagal — ditambah keandalan sebagai yang kelima. Ini adalah tolok ukur penyampaian yang paling tervalidasi di bidangnya, dan masing-masing memiliki pembacaan ekonomi-kesehatan langsung.

## Mengapa Ini Penting

Satu dekade penelitian DORA menghubungkan metrik-metrik ini dengan kinerja organisasi. Klaster laporan 2024: tim **elite** menerapkan sesuai permintaan (berkali-kali/hari), memerlukan kurang dari sehari dari commit ke produksi, gagal ~5% perubahan, dan pulih dalam kurang dari satu jam; pelaku-kinerja **rendah** menerapkan bulanan-atau-lebih-jarang, memerlukan berbulan-bulan, gagal ~40% perubahan, dan pulih dalam berminggu-minggu. Untuk sistem kesehatan, ini bukan angka kesombongan TI: mereka menentukan seberapa cepat nilai klinis mencapai pasien dan seberapa besar risiko yang dibawa setiap perubahan.

## Perhitungan

```
Frekuensi penerapan     = penerapan produksi / waktu
Waktu tunggu perubahan   = t(terapkan) − t(commit), median
Tingkat kegagalan perubahan = perubahan gagal / total perubahan × 100
Waktu pemulihan (MTTR)   = t(dipulihkan) − t(kegagalan), median
Keandalan                = pencapaian SLO (ketersediaan, latensi, kebenaran)
```

Terjemahan ekonomi-kesehatan:

```
Waktu tunggu       → cost-of-delay.md: minggu dalam pipeline × CoD (£ atau QALY/minggu)
Tingkat kegagalan  → tingkat peristiwa-merugikan perubahan perangkat lunak: TKP × biaya per insiden
Waktu pemulihan    → bahaya downtime: MTTR × (aktivitas klinis hilang + eksposur keselamatan)/jam
Keandalan          → diskon manfaat: layanan pada ketersediaan 99% menyampaikan ≈ 0,99
                    dari manfaat yang dimodelkannya — analog perangkat lunak dari kepatuhan
```

## Contoh yang Diselesaikan

Tim perangkat lunak alur-pasien sebuah trust, sebelum/sesudah investasi rekayasa-penyampaian:

```
                    Sebelum     Sesudah
Penerapan           bulanan     mingguan
Waktu tunggu        6 minggu    4 hari
TKP                 25%         8%
MTTR                2 hari      2 jam
```

Tim menyampaikan ~30 perbaikan/tahun dengan nilai rata-rata per-perbaikan £4.000/minggu ([CoD](../biaya-keterlambatan/)). Pemotongan waktu-tunggu ~5,4 minggu menarik ke depan aliran manfaat setiap perbaikan: 30 × 5,4 × 4.000 ≈ **£648.000/tahun** nilai yang disampaikan lebih cepat. Perbaikan TKP: 30 × (0,25 − 0,08) = ~5 perubahan gagal lebih sedikit/tahun × biaya insiden rata-rata £15.000 (downtime sistem klinis, perbaikan) = **£76.500/tahun**. Investasi penyampaian dinilai dalam mata uang yang sama dengan intervensi klinis mana pun.

## Hubungan dengan Rekayasa Perangkat Lunak

Ini *adalah* sisi perangkat lunak — hubungan yang layak dinyatakan adalah pemetaan terbaliknya: metrik DORA adalah metrik operasional rumah sakit yang mengenakan pakaian berbeda. Waktu tunggu ↔ [rujukan untuk perawatan](../rujukan-untuk-perawatan/); tingkat kegagalan perubahan ↔ [tingkat readmisi](../tingkat-readmisi/) (pekerjaan yang memantul kembali); MTTR ↔ respons darurat; frekuensi penerapan ↔ throughput klinik. Metode perbaikan ditransfer dalam kedua arah karena keduanya adalah sistem antrean di bawah kendala keselamatan. Perhatikan juga temuan AI DORA 2025: adopsi AI sekarang berkorelasi dengan throughput yang lebih tinggi tetapi stabilitas yang *lebih buruk* — intervensi dengan efikasi dan efek samping, menuntut persis analisis manfaat-bersih yang diajarkan repositori ini (lihat [produktivitas pengembang dengan AI](../produktivitas-pengembang-dengan-ai/)).

## Jebakan

- **Manipulasi metrik**: jumlah penerapan digembungkan oleh rilis no-op; TKP dikurangi dengan tidak menghitung hotfix sebagai kegagalan. Definisikan peristiwa secara tepat, sebagaimana HTA mendefinisikan titik akhir.
- **Tabel-liga antar-tim**: klaster DORA membandingkan praktik, bukan tim dengan profil risiko berbeda; tim sistem-klinis pada "tinggi" mungkin optimal di mana "elite" akan sembrono.
- **Mengoptimalkan satu metrik**: kecepatan tanpa TKP/keandalan adalah trade-off throughput-instabilitas — selalu laporkan keempatnya bersama (mereka adalah [tabel biaya-konsekuensi](../analisis-biaya-konsekuensi/), bukan skor).

## Sumber

- DORA research and reports. <https://dora.dev/>
- 2024 DORA benchmarks summary. <https://octopus.com/devops/metrics/dora-metrics/>
- DORA 2025 State of AI-assisted Software Development. <https://dora.dev/dora-report-2025/>
