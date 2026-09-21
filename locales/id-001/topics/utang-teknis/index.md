# Utang Teknis

Utang teknis adalah biaya-masa-depan yang tersirat dari keputusan-masa-lalu yang ekspedien dalam sebuah basis-kode: pekerjaan-perbaikan yang terhutang (**pokok**) dan tarikan berkelanjutan yang diberikannya pada penyampaian (**bunga**). Metode kuantifikasi seperti SQALE mengubahnya dari metafora menjadi kewajiban yang berbiaya.

## Mengapa Ini Penting

Tanpa dikuantifikasi, utang-teknis adalah keluhan; dikuantifikasi, ia adalah kasus bisnis. Tolok ukur industri (CAST Appmarq, 1.400 aplikasi / 550 juta LOC): secara historis ≈ **$3,61 pokok-utang-teknis per baris kode**, dengan basis-kode tipikal membawa rasio-utang 15–20% dari biaya-pembangunan-ulang, dibandingkan bar-kesehatan yang umum digunakan ≤5% (nilai "A" SonarQube). Kerangka ekonomi-kesehatan cocok dengan tepat: utang adalah *kondisi kronis* — tidak-dirawat, ia berkembang, "bunga"-nya berbunga-majemuk sebagai penyampaian-lebih-lambat dan tingkat-cacat-lebih-tinggi, dan perbaikan bersaing untuk kapasitas melawan pekerjaan-fitur persis seperti pencegahan bersaing dengan perawatan.

## Perhitungan

```
Pokok SQALE   = Σ atas pelanggaran (waktu perbaikan) × tarif biaya pengembang
Rasio Utang Teknis (TDR) = biaya perbaikan / biaya pembangunan-ulang × 100
                    (nilai SonarQube: A ≤ 5%, B ≤ 10%, C ≤ 20%, D ≤ 50%)

Bunga (angka yang membenarkan kasus-perbaikan):
  bunga/tahun = Δ kecepatan-penyampaian × nilai per-unit-kecepatan
                + Δ tingkat-cacat × biaya per-cacat
Kasus perbaikan  = PV(bunga dihindari sepanjang horizon) − biaya perbaikan
                (didiskon — lihat discounting-and-time-preference.md)
```

Pokok menyatakan kewajibannya; **bunga** menciptakan kasus-investasi. Membayar £500rb pokok untuk menghindari £40rb/tahun bunga adalah perdagangan buruk; untuk menghindari £400rb/tahun, luar biasa.

## Contoh yang Diselesaikan

Lapisan integrasi rekaman-klinis 400rb-LOC: pokok SQALE 3.800 jam × £75 = **£285rb**; TDR ≈ 12% (nilai C). Bunga terukur: tim yang menyentuh lapisan ini menunjukkan waktu-siklus 40% lebih lama dan tingkat kegagalan-perubahan 2× dibandingkan garis-dasar aset. Lapisannya mengonsumsi 6.000 jam-pengembang/tahun:

```
Bunga ≈ 6.000 × 0,40 × £75      = £180.000/tahun (tarikan kecepatan)
         + 12 kegagalan ekstra × £8.000 = £96.000/tahun (pekerjaan-ulang/insiden)
         ≈ £276.000/tahun

Perbaiki 30% terburuk dari pokok (£85rb) menargetkan hotspot → pengurangan
bunga yang dimodelkan 60%: menghemat ~£166rb/tahun. Pengembalian ≈ 6 bulan.
```

Penargetan-hotspot penting: bunga-utang terkonsentrasi di mana frekuensi-perubahan × kepadatan-utang mencapai puncak — memperbaiki utang yang-jarang-tersentuh tidak membeli apa pun, seperti merawat kondisi yang tidak akan pernah berkembang ([ekonomi pencegahan](../ekonomi-pencegahan/)).

## Hubungan dengan Rekayasa Perangkat Lunak

Impor ekonomi-kesehatan yang meningkatkan argumen utang-teknis: ekspresikan aset sebagai **inventaris beban** (gaya-[DALY](../tahun-kehidupan-yang-disesuaikan-disabilitas/) — di mana tahun-rekayasa-sehat yang hilang?); benarkan pembayaran dengan matematika perkembangan, secara jujur (biasanya efektif-biaya, bukan hemat-biaya); bobot perbaikan sistem-terburuk berdasarkan [defisit keparahan](../defisit-qaly-dan-modifier-keparahan/); dan ajukan proposal-perbaikan besar dengan analisis-offset yang bertahan aturan [biaya hilir yang dihindari](../biaya-hilir-yang-dihindari/) — berbobot-probabilitas, didiskon, dihitung sekali.

## Jebakan

- **Pelaporan hanya-pokok**: angka besar yang menakutkan tanpa estimasi-bunga tidak membenarkan apa-apa.
- **Angka-utang yang dihasilkan-alat diambil secara literal**: SQALE menghitung pelanggaran-aturan; ia melewatkan utang-arsitektur (jenis yang mahal) dan menghitung hal-sepele.
- **Utopianisme utang-nol**: tingkat-utang optimal bukan nol — utang adalah leverage; pertanyaannya adalah tingkat-bunganya.
- **"Penulisan-ulang menghindari semuanya"**: proposal penulisan-ulang harus melewati aturan-offset yang sama — biaya kontrafaktual, probabilitas, diskon.

## Sumber

- CAST, technical debt estimation. <https://www.castsoftware.com/glossary/technical-debt-estimation>
- Letouzey J-L, "The SQALE method for evaluating Technical Debt." <https://www.researchgate.net/publication/239763591_The_SQALE_method_for_evaluating_Technical_Debt>
