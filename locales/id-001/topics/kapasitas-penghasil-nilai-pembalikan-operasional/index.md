# Kapasitas Penghasil-Nilai (Pembalikan Operasional)

Kapasitas penghasil-nilai adalah "manfaat-peluang" dari waktu yang dibebaskan: apa yang sekarang dapat *dicapai* rumah sakit dengan jam-jam yang dilepaskan perangkat-lunak Anda. Ini adalah metrik yang paling penting bagi Chief Operating Officer dan Direktur Medis, karena ia berbicara dalam mata-uang di mana mereka dikelola — aktivitas, target, dan pembalikan.

## Mengapa Ini Penting

NHS menghadapi backlog masif rujukan-untuk-perawatan, dan trust yang melewatkan standar waktu-tunggu nasional menghadapi pengawasan regulasi dan intervensi (lihat [rujukan untuk perawatan](../rujukan-untuk-perawatan/)). Perekrutan lambat dan terbatas; aset tetap. Satu-satunya tuas cepat adalah mendapatkan lebih banyak aktivitas penghasil-nilai dari staf dan ruang yang ada. Perangkat lunak yang merebut-kembali waktu-spesialis tidak hanya "menghemat uang" — ia *mencetak kapasitas*: klinik yang tidak bisa ada, penilaian yang tidak bisa dijadwalkan, tanpa merekrut atau membangun.

## Perhitungan

```
Kapasitas tersembunyi yang diciptakan = waktu dilepaskan → unit-aktivitas dimungkinkan × nilai-skema

Unit aktivitas: kunjungan rawat-jalan, penilaian pra-operasi, tinjauan pemantauan
Nilai skema:    harga tarif-nasional / NHS Payment Scheme
                (lihat national-tariff-and-unit-costs.md)
```

Ini adalah penilaian basis-output dari [waktu praktisi](../waktu-praktisi/), diskalakan ke lini-layanan dan dinyatakan dalam unit-aktivitas di mana tim operasi sudah merencanakan.

## Contoh yang Diselesaikan

Perawat-spesialis Band 6 menjalankan klinik penilaian-pra-operasi. Otomasi dokumentasi merebut-kembali 1 jam/hari untuk masing-masing dari 25 perawat; setiap jam menampung 2 penilaian.

```
Penilaian ekstra = 25 perawat × 2/hari × 250 hari = 12.500/tahun
Pada nilai-skema ~£120 per penilaian-pra-operasi:
  12.500 × £120 = £1,5 juta/tahun kapasitas-perawatan diciptakan
```

— tanpa merekrut satu perawat atau membangun satu ruangan. (Model yang banyak dikutip yang awalnya dirujuk stub ini menempatkan angkanya pada £766.920/tahun untuk kohort yang lebih kecil; pola aritmatikanya sama — angkanya berskala dengan perawat × sesi × tarif.) Pembingkaian-operasional untuk COO: penilaian-pra-operasi berhenti menjadi kendala pada daftar-teater — operasi dibatalkan-di-hari-yang-sama turun, dan pemanfaatan-teater naik, yang merupakan tempat garis-manfaat *berikutnya* dimulai (lihat [optimasi sumber-daya hilir](../optimasi-sumber-daya-hilir/)).

## Hubungan dengan Rekayasa Perangkat Lunak

Pembingkaian-ulang yang sama menyelamatkan klaim-produktivitas-pengembang dari aritmatika-gaji: waktu-rekayasa yang dilepaskan, dinyatakan sebagai *kapabilitas-yang-dikirim yang seharusnya tidak-mampu-dibayar organisasi* — fitur, migrasi, pekerjaan-keandalan — dinilai berdasarkan apa yang dibayar organisasi untuk kapabilitas semacam itu pada marjinnya (tarif-kontraktor, atau setara-perekrutan-yang-ditunda). Pembingkaian COO juga mengajarkan sesuatu tentang mempromosikan pekerjaan-platform: nyatakan manfaat dalam unit di mana audiens dikelola. Pemimpin-operasi berpikir dalam aktivitas dan target, bukan jam-abstrak; pemimpin-rekayasa berpikir dalam item-roadmap dan jumlah-staf, bukan menit-yang-dihemat.

## Jebakan

- **Klaim kapasitas tanpa permintaan**: 12.500 slot-penilaian-ekstra hanya penting jika pipeline-bedah mengisinya — periksa kendala hilir.
- **Nilai-tarif tanpa mekanisme-pembayaran**: di bawah pembayaran-campuran, aktivitas-ekstra mungkin tidak membawa pendapatan-ekstra; nilainya mungkin sebaliknya pengurangan-daftar-tunggu (lihat [dampak daftar-tunggu](../dampak-daftar-tunggu/)).
- **Menyajikan kapasitas sebagai kas** — ini adalah manfaat-andalan bukan-pelepas-kas; labeli demikian (lihat [pelepasan-kas vs bukan-pelepasan-kas](../penghematan-pelepas-kas-vs-bukan-pelepas-kas/)).

## Sumber

- NHS England, NHS Payment Scheme. <https://www.england.nhs.uk/pay-syst/national-tariff/national-tariff-payment-system/>
- NHS England, elective care recovery plan. <https://www.england.nhs.uk/coronavirus/publication/delivery-plan-for-tackling-the-covid-19-backlog-of-elective-care/>
