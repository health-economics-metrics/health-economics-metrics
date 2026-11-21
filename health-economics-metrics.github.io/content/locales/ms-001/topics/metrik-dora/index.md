# Metrik DORA

Metrik DORA (DevOps Research and Assessment) ialah empat ukuran prestasi penyampaian perisian — kekerapan penggunaan, masa pimpinan untuk perubahan, kadar kegagalan perubahan dan masa pemulihan penggunaan gagal — serta kebolehpercayaan sebagai yang kelima. Ia penanda aras penyampaian paling disahkan dalam bidang ini, dan setiap satu mempunyai bacaan ekonomi kesihatan langsung.

## Mengapa ia penting

Penyelidikan sedekad DORA mengaitkan metrik ini dengan prestasi organisasi. Kelompok laporan 2024: pasukan **elit** menggunakan atas permintaan (beberapa kali/hari), mengambil kurang sehari daripada commit ke pengeluaran, gagal ~5% perubahan dan pulih dalam kurang sejam; prestasi **rendah** menggunakan sebulan sekali-atau-kurang, mengambil berbulan-bulan, gagal ~40% perubahan dan pulih dalam minggu. Bagi sistem kesihatan, ini bukan angka kesombongan IT: ia menentukan betapa pantas nilai klinikal sampai kepada pesakit dan berapa banyak risiko dibawa setiap perubahan.

## Matematiknya

```
Kekerapan penggunaan   = penggunaan pengeluaran / masa
Masa pimpinan perubahan = t(guna) − t(commit), median
Kadar kegagalan perubahan = perubahan gagal / jumlah perubahan × 100
Masa pemulihan (MTTR)  = t(dipulihkan) − t(kegagalan), median
Kebolehpercayaan       = pencapaian SLO (ketersediaan, kependaman, ketepatan)
```

Terjemahan ekonomi kesihatan:

```
Masa pimpinan → cost-of-delay.md: minggu dalam saluran paip × CoD (£ atau QALY/minggu)
Kadar kegagalan → kadar peristiwa buruk perubahan perisian: CFR × kos setiap insiden
Masa pemulihan → bahaya henti masa: MTTR × (aktiviti klinikal hilang + pendedahan keselamatan)/jam
Kebolehpercayaan → diskaun manfaat: perkhidmatan pada ketersediaan 99% menyampaikan ≈ 0.99
                dari manfaat yang dimodelkan — analogi perisian bagi pematuhan
```

## Contoh penyelesaian

Pasukan perisian aliran pesakit sesebuah trust, sebelum/selepas pelaburan kejuruteraan penyampaian:

```
                    Sebelum     Selepas
Penggunaan          bulanan     mingguan
Masa pimpinan       6 minggu    4 hari
CFR                 25%         8%
MTTR                2 hari      2 jam
```

Pasukan menghantar ~30 penambahbaikan/tahun dengan purata nilai setiap penambahbaikan £4,000/minggu ([CoD](../kos-kelewatan/)). Pemotongan masa pimpinan ~5.4 minggu menarik aliran manfaat setiap penambahbaikan ke hadapan: 30 × 5.4 × 4,000 ≈ **£648,000/tahun** nilai disampaikan lebih awal. Penambahbaikan CFR: 30 × (0.25 − 0.08) = ~5 perubahan gagal lebih sedikit/tahun × £15,000 purata kos insiden (henti masa sistem klinikal, pemulihan) = **£76,500/tahun**. Pelaburan penyampaian dinilai dalam mata wang sama seperti sebarang intervensi klinikal.

## Kaitan dengan kejuruteraan perisian

Ini *ialah* sisi perisian — kaitan yang patut dinyatakan ialah pemetaan songsang: metrik DORA ialah metrik operasi hospital yang berpakaian berbeza. Masa pimpinan ↔ [rujukan-ke-rawatan](../rujukan-ke-rawatan/); kadar kegagalan perubahan ↔ [kadar kemasukan semula](../kadar-kemasukan-semula/) (kerja yang melantun balik); MTTR ↔ tindak balas kecemasan; kekerapan penggunaan ↔ daya pemprosesan klinik. Kaedah penambahbaikan berpindah dalam kedua-dua arah kerana kedua-duanya sistem beratur di bawah kekangan keselamatan. Perhatikan juga dapatan AI DORA 2025: penerimaan AI kini berkorelasi dengan daya pemprosesan lebih tinggi tetapi kestabilan *lebih buruk* — intervensi dengan keberkesanan dan kesan sampingan, menuntut analisis manfaat-bersih tepat yang diajar repositori ini (lihat [produktiviti pembangun AI](../produktiviti-pembangun-ai/)).

## Perangkap

- **Permainan metrik**: kiraan penggunaan dikembungkan oleh keluaran tanpa-op; CFR dikempiskan dengan tidak mengira hotfix sebagai kegagalan. Takrifkan peristiwa dengan tepat, seperti HTA mentakrif titik akhir.
- **Jadual liga rentas pasukan**: kelompok DORA membandingkan amalan, bukan pasukan dengan profil risiko berbeza; pasukan sistem klinikal pada "tinggi" mungkin optimum di mana "elit" akan melulu.
- **Mengoptimumkan satu metrik**: kelajuan tanpa CFR/kebolehpercayaan ialah pertukaran daya pemprosesan-ketakstabilan — sentiasa laporkan keempat-empatnya bersama (ia [jadual kos-akibat](../analisis-kos-akibat/), bukan skor).

## Sumber

- DORA research and reports. <https://dora.dev/>
- 2024 DORA benchmarks summary. <https://octopus.com/devops/metrics/dora-metrics/>
- DORA 2025 State of AI-assisted Software Development. <https://dora.dev/dora-report-2025/>
