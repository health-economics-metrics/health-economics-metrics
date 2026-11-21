# Evaluasi Regulasi AI (AI Regulatory Evaluation)

Kerangka regulasi sing ngatur AI ing perawatan kesehatan — rezim Software as a Medical Device (SaMD) FDA kanthi **Predetermined Change Control Plans (PCCP)**, lan program evaluasi donya nyata kaya NHS AI in Health and Care Award — lan apa biaya lan kemungkinan ekonomine.

## Kenapa Iki Penting

Regulasi nemtokake **biaya bukti kanggo mlebu pasar** lan **biaya saben nganyari model sabanjure** — kanggo produk AI, sing nomer loro asring luwih penting. Mode tradisional FDA (kunci model; resertifikasi yen ana owah-owahan) njalari perbaikan terus-terusan dadi abot sacara ekonomi. **Pedoman PCCP (dirampungake Desember 2024)** ngowahi ekonomine: produsen bisa nyetujoni sadurunge nganyari model mbesuk sing *ditetepake* — deskripsi modifikasi sing direncanakake, protokol modifikasi (kepriye saben validasi), lan penilaian dampak — saengga perbaikan sing wis disetujoni bisa dirilis tanpa pengajuan anyar. Luwih saka 1,000 piranti AI duwe otorisasi FDA; FDA saiki uga nyelidiki pemantauan kinerja donya nyata (metrik sing ditetepake sadurunge: tingkat FP/FN dasar, drift kalibrasi, indikator pergeseran domain).

## Matematikane

PCCP iku ekonomi [lead time DORA](../metrik-dora/) sing ditrapake ing model sing diatur:

```
Biaya saben nganyari model (tradisional) = biaya pengajuan ulang + tundha review × CoD
Biaya saben nganyari model (lingkup PCCP) = biaya eksekusi protokol wae

Ekonomi nganyari sajrone umur produk:
  N nganyari × (biaya pengajuan + sasi review × biaya-tundha saben sasi)
  lawan biaya nulis PCCP sepisan + N × eksekusi protokol
```

Kanggo pola NHS AI Award, set metrik luwih amba tinimbang akurasi: evaluasi donya nyata independen ngukur kinerja klinis, efek alur kerja/implementasi, lan dampak ekonomi — jalur [efikasi → efektivitas → efektivitas-biaya](../produktivitas-pangembang-karo-ai/) kanthi lengkap sing dilembagakake.

## Conto Petungan

Vendor AI radiologi ngrencanakake perbaikan model saben kuartal sajrone 3 taun (12 nganyari):

```
Tradisional: 12 × (£80k pengajuan + 4 sasi × £50k/sasi CoD manfaat-tertunda)
           = 12 × £280k = £3.36M
Jalur PCCP:  £250k nulis PCCP + 12 × £30k eksekusi protokol = £610k
Hemat ≈ £2.75M — lan pasien nampa saben perbaikan ~4 sasi luwih awal:
12 × 4 sasi × manfaat klinis nganyari, garis QALY dhewe.
```

PCCP iku pangakuan regulasi yen **frekuensi deployment nduweni nilai klinis** — rantai kausal master repositori iki, sing didhukung regulator.

## Sambungan karo Rékayasa Piranti Lunak

Ngrékayasa PCCP kanthi apik iku masalah piranti lunak: suite evaluasi sing ditetepake sadurunge, dataset sing diversi, pipeline validasi otomatis, pemantauan drift — sedulur sing diatur saka continuous deployment, ing ngendi "gerbang deploy" iku protokol sing divalidasi tinimbang code review. Tim kanthi infrastruktur eval mateng ([metrik kualitas AI](../metrik-kualitas-ai/)) entuk PCCP kanthi murah; tim tanpa iku nemokake yen kendala regulasi iku nyatane kendala kematangan rékayasa. Kanggo produk sing mlebu NHS, tumpukan paralele yaiku DTAC (keslametan klinis, pangayoman data, interoperabilitas) plus tingkat bukti [NICE ESF](../kerangka-standar-bukti-nice/) — anggarake kabeh minangka [TCO](../total-biaya-kepemilikan/) mlebu pasar.

## Jebakan

- **Impen PCCP sing kelewat lingkup**: mung jinis modifikasi *sing ditetepake* sing wis diotorisasi; owah-owahan arsitektur utawa panggunaan anyar sing dikarepake isih butuh review lengkap.
- **Drift donya nyata ora dipantau**: otorisasi ing kinerja peluncuran + drift populasi meneng-meneng = produk sing kerja ing njaba amplop sing wis diresmekake; pemantauan iku pangarep-arep regulasi lan pertahanan diri.
- **Mbingungake izin karo nilai**: izin FDA/UKCA ≠ ana sing gelem mbayar — iku alangan [HTA](../penilaian-teknologi-kesehatan/), sing mlaku kapisah.

## Sumber

- FDA, AI-enabled device software / SaMD. <https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-software-medical-device>
- PCCP implementation guidance analysis. <https://intuitionlabs.ai/articles/fda-pccp-implementation-guide-ai-ml-samd>
- NHS England, lessons from AI in Health and Care Award real-world evaluations. <https://www.england.nhs.uk/long-read/planning-and-implementing-real-world-ai-evaluations-lessons-from-the-ai-in-health-and-care-award/>
