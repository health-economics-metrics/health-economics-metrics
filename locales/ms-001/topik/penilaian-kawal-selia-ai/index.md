# Penilaian Kawal Selia AI

Kerangka kawal selia yang mengawal AI dalam penjagaan kesihatan — rejim Perisian sebagai Peranti Perubatan (SaMD) FDA dengan **Pelan Kawalan Perubahan Dipratentukan (PCCP)**, dan program penilaian dunia sebenar seperti Anugerah AI dalam Kesihatan dan Penjagaan NHS — serta kos dan kebolehan ekonominya.

## Mengapa ia penting

Kawal selia menentukan **kos bukti untuk memasuki pasaran** dan **kos setiap kemas kini model berikutnya** — bagi produk AI, yang kedua sering lebih penting. Mod tradisional FDA (kunci model; kelulusan semula untuk perubahan) menjadikan penambahbaikan berterusan sangat mahal dari segi ekonomi. **Panduan PCCP (dimuktamadkan Disember 2024)** mengubah ekonomi itu: pengilang boleh memberi kebenaran awal kepada kemas kini model masa depan yang *dinyatakan* — huraian pengubahsuaian yang dirancang, protokol pengubahsuaian (bagaimana setiap satu akan disahkan) dan penilaian impak — supaya penambahbaikan yang dibenarkan dilancarkan tanpa penyerahan baharu. Lebih 1,000 peranti berkuasa AI mempunyai kebenaran FDA; FDA kini turut menyelidik pemantauan prestasi dunia sebenar (metrik pratentu: kadar FP/FN garis asas, hanyutan penentukuran, penunjuk anjakan domain).

## Matematiknya

PCCP ialah ekonomi [masa pimpinan DORA](../metrik-dora/) yang diterapkan pada model terkawal selia:

```
Kos setiap kemas kini model (tradisional) = kos penyerahan semula + kelewatan semakan × CoD
Kos setiap kemas kini model (skop PCCP)   = kos pelaksanaan protokol sahaja

Ekonomi kemas kini sepanjang hayat produk:
  N kemas kini × (kos penyerahan + bulan semakan × kos-kelewatan sebulan)
  lwn kos penulisan PCCP sekali sahaja + N × pelaksanaan protokol
```

Bagi corak Anugerah AI NHS, set metrik lebih luas daripada ketepatan: penilaian dunia sebenar bebas menilai prestasi klinikal, kesan aliran kerja/pelaksanaan dan impak ekonomi — saluran paip penuh [keberkesanan → keberkesanan sebenar → kos-keberkesanan](../produktiviti-pembangun-ai/) yang diinstitusikan.

## Contoh penyelesaian

Vendor AI radiologi merancang penambahbaikan model suku tahunan selama 3 tahun (12 kemas kini):

```
Tradisional: 12 × (£80k penyerahan + 4 bulan × £50k/bulan CoD manfaat tertangguh)
           = 12 × £280k = £3.36J
Laluan PCCP: £250k penulisan PCCP + 12 × £30k pelaksanaan protokol = £610k
Penjimatan ≈ £2.75J — dan pesakit menerima setiap penambahbaikan ~4 bulan lebih awal:
12 × 4 bulan × manfaat klinikal kemas kini itu, satu baris QALY tersendiri.
```

PCCP ialah pengiktirafan kawal selia bahawa **kekerapan penggunaan mempunyai nilai klinikal** — rantaian sebab induk repositori ini, disahkan oleh pengawal selia.

## Kaitan dengan kejuruteraan perisian

Merekayasa PCCP dengan baik ialah masalah perisian: suite penilaian pratentu, set data berversi, saluran paip pengesahan automatik, pemantauan hanyutan — sepupu terkawal selia bagi penggunaan berterusan, yang "get penggunaan"nya ialah protokol yang disahkan dan bukan semakan kod. Pasukan dengan infrastruktur penilaian matang ([metrik kualiti AI](../metrik-kualiti-ai/)) memperoleh PCCP dengan murah; pasukan tanpanya mendapati bahawa kekangan kawal selia sebenarnya kekangan kematangan kejuruteraan. Bagi produk yang memasuki NHS, timbunan selari ialah DTAC (keselamatan klinikal, perlindungan data, kebolehoperasian bersama) serta peringkat bukti [NICE ESF](../kerangka-piawaian-bukti-nice/) — bajetkan kesemuanya sebagai [TCO](../jumlah-kos-pemilikan/) kemasukan pasaran.

## Perangkap

- **Impian skop PCCP yang melebar**: hanya jenis pengubahsuaian yang *dinyatakan* diberi kebenaran awal; perubahan seni bina atau kegunaan baharu yang dimaksudkan masih memerlukan semakan penuh.
- **Hanyutan dunia sebenar tidak dipantau**: kebenaran pada prestasi pelancaran + hanyutan populasi senyap = produk yang berprestasi di luar sampul yang diluluskan; pemantauan ialah jangkaan kawal selia sekali gus pertahanan diri.
- **Mengelirukan kelulusan dengan nilai**: kelulusan FDA/UKCA ≠ ada yang akan membayar — itu halangan [HTA](../penilaian-teknologi-kesihatan/), dijalankan secara berasingan.

## Sumber

- FDA, AI-enabled device software / SaMD. <https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-software-medical-device>
- PCCP implementation guidance analysis. <https://intuitionlabs.ai/articles/fda-pccp-implementation-guide-ai-ml-samd>
- NHS England, lessons from AI in Health and Care Award real-world evaluations. <https://www.england.nhs.uk/long-read/planning-and-implementing-real-world-ai-evaluations-lessons-from-the-ai-in-health-and-care-award/>
