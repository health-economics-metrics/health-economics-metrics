# Pengembalian Investasi AI

ROI AI adalah pengembalian P&L terukur yang dapat diatribusikan pada inisiatif AI. Tolok ukur yang menyadarkan: penelitian "GenAI Divide" MIT 2025 menemukan bahwa meskipun ada investasi GenAI perusahaan sebesar $30–40 miliar, **~95% uji coba tidak menunjukkan pengembalian P&L terukur** — dan 5% yang berhasil berbagi kebiasaan yang dapat diidentifikasi.

## Mengapa Ini Penting

Sistem kesehatan memiliki nama untuk pola uji-coba-AI ini: **pilotitis** — kuburan NHS untuk aplikasi menjanjikan yang diuji coba selamanya dan tidak pernah diskalakan. Temuan MIT terpetakan dengan rapi ke apa yang sudah diketahui penilaian teknologi kesehatan: klaim nilai memerlukan titik akhir yang ditentukan sebelumnya, atribusi memerlukan pembanding, dan "semua orang merasa ini membantu" bukanlah garis manfaat. Minoritas yang berhasil dalam data MIT terkonsentrasi pada otomatisasi back-office dengan garis dasar biaya yang dapat dilacak, dan **alat yang dibeli berhasil ~67% dari waktunya dibandingkan pembangunan internal pada sekitar sepertiga dari tingkat itu** — prior yang termasuk dalam setiap kasus investasi AI (lihat [membangun vs membeli](../membangun-vs-membeli/)).

## Perhitungan

```
ROI AI = (manfaat teratribusi − total biaya AI) / total biaya AI

Total biaya AI = lisensi/inferensi (lihat inference-unit-economics.md)
              + integrasi + kesiapan data + evaluasi
              + desain ulang alur kerja + tata kelola/jaminan
              (lisensi biasanya minoritas dari penyebut)

Manfaat teratribusi: diukur terhadap garis dasar atau kontrol, diklasifikasikan
kas / kapasitas / kualitas sesuai cash-releasing-vs-non-cash-releasing.md
```

## Contoh yang Diselesaikan

Sebuah kelompok rumah sakit menerapkan AI untuk dua kasus penggunaan:

```
Kasus penggunaan A — penyusunan surat klinis (back office, dapat dilacak):
  garis dasar: transkripsi outsourcing £380rb/thn
  setelah:    kontrak transkripsi dibatalkan; waktu tinjauan klinisi +£60rb
  biaya AI:   £120rb/thn semua termasuk
  ROI = (380rb − 60rb − 120rb) / 120rb ≈ 167% — melepaskan kas, dapat diaudit ✓

Kasus penggunaan B — "kopilot AI untuk klinisi" (luas, tidak dilacak):
  klaim manfaat: "menghemat waktu di 4.000 staf" — tidak ada garis dasar yang ditangkap
  efek P&L terukur: tidak ada yang dapat ditunjukkan
  → ember 95%, terlepas dari apakah benar-benar membantu
```

Perbedaannya bukan kualitas AI — tetapi apakah manfaat memiliki **garis dasar, pemilik, dan garis anggaran** ([realisasi manfaat](../realisasi-manfaat/)).

## Hubungan dengan Rekayasa Perangkat Lunak

Buku pedoman berbentuk HTA untuk investasi AI: **tahapkan bukti seperti [tingkatan NICE ESF](../kerangka-standar-bukti-nice/)** — bukti tingkat-demo untuk alat berisiko rendah, uji coba terkontrol sebelum pengeluaran seluruh organisasi, dengan gerbang peluncuran terdaftar sebelumnya (pola [pendaftaran-sementara-dengan-tenggat](../jalur-cepat-diga-jerman/) DiGA); **hitung penghindaran biaya sebagaimana ekonomi kesehatan menghitung penghindaran permintaan** — nyata hanya ketika garis anggaran tertentu bergerak; dan **hargai uji coba itu sendiri dengan [EVPI](../nilai-harapan-dari-informasi-sempurna/)** — uji coba yang tidak dapat mengubah keputusan peluncuran bernilai £0. Untuk irisan alat pengembang secara khusus, lihat [produktivitas pengembang dengan AI](../produktivitas-pengembang-dengan-ai/).

## Jebakan

- **Difusi manfaat**: nilai yang tersebar tipis di ribuan pengguna tidak dapat diukur berdasarkan konstruksinya; pilih kasus penggunaan dengan garis dasar yang terkonsentrasi dan dapat dilacak.
- **Penentuan biaya hanya-lisensi**: integrasi, evaluasi, dan desain ulang alur kerja biasanya mendominasi penyebut sebenarnya.
- **Pencurian atribusi**: AI yang diterapkan bersamaan dengan desain ulang proses mengklaim seluruh selisih.
- **Eskalasi uji-coba-tenggelam**: memperpanjang uji coba yang gagal karena berhenti mengakui kegagalan — tanggal berakhir harus disepakati sebelumnya.

## Sumber

- MIT Project NANDA "GenAI Divide" coverage. <https://fortune.com/2025/08/18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo/>
- MIT GenAI ROI findings summary. <https://blueflame.ai/blog/achieving-ai-roi-key-findings-from-mits-genai-report>
- MIT Technology Review, finding ROI on AI. <https://www.technologyreview.com/2025/10/28/1126693/finding-return-on-ai-investments-across-industries/>
