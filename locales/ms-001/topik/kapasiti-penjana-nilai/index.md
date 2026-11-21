# Kapasiti Penjana Nilai (Pusing Balik Operasi)

Kapasiti penjana nilai ialah "manfaat peluang" masa yang dibebaskan: apa yang kini boleh *dicapai* hospital dengan jam yang dilepaskan perisian anda. Ini metrik yang paling penting kepada Ketua Pegawai Operasi dan Pengarah Perubatan, kerana ia bercakap dalam mata wang yang digunakan untuk menguruskan mereka — aktiviti, sasaran dan pusing balik.

## Mengapa ia penting

NHS menghadapi tunggakan rujukan-ke-rawatan yang besar, dan trust yang terlepas piawai masa menunggu kebangsaan menghadapi penelitian dan campur tangan kawal selia (lihat [rujukan-ke-rawatan](../rujukan-ke-rawatan/)). Pengambilan pekerja perlahan dan terkekang; harta tanah tetap. Satu-satunya tuas pantas ialah mendapat lebih banyak aktiviti penjana nilai daripada kakitangan dan ruang sedia ada. Perisian yang menuntut semula masa pakar bukan sekadar "menjimatkan wang" — ia *mencetak kapasiti*: klinik yang tidak boleh wujud, penilaian yang tidak boleh dijadualkan, tanpa mengambil pekerja atau membina.

## Matematiknya

```
Kapasiti tersembunyi dicipta = masa dilepaskan → unit aktiviti dibolehkan × nilai skim

Unit aktiviti: kehadiran pesakit luar, penilaian pra-op, semakan pemantauan
Nilai skim:    tarif kebangsaan / harga Skim Pembayaran NHS
               (lihat national-tariff-and-unit-costs.md)
```

Ini penilaian asas-output bagi [masa pengamal](../masa-pengamal/), diskalakan kepada barisan perkhidmatan dan dinyatakan dalam unit aktiviti yang sudah dirancang pasukan operasi.

## Contoh penyelesaian

Jururawat pakar Band 6 menjalankan klinik penilaian praoperatif. Automasi dokumentasi menuntut semula 1 jam/hari bagi setiap seorang daripada 25 jururawat; setiap jam muat 2 penilaian.

```
Penilaian tambahan = 25 jururawat × 2/hari × 250 hari = 12,500/tahun
Pada nilai skim ~£120 bagi setiap penilaian pra-op:
  12,500 × £120 = £1.5J/tahun kapasiti penjagaan dicipta
```

— tanpa mengambil seorang jururawat atau membina sebuah bilik. (Model yang dipetik meluas yang asalnya disebut oleh stub ini meletakkan angka £766,920/tahun bagi kohort lebih kecil; corak aritmetik sama — nombor berskala dengan jururawat × sesi × tarif.) Pembingkaian operasi untuk COO: penilaian pra-op berhenti menjadi kekangan senarai teater — pembedahan dibatalkan-pada-hari-H berkurang, dan penggunaan teater meningkat, di mana baris manfaat *seterusnya* bermula (lihat [pengoptimuman sumber hiliran](../pengoptimuman-sumber-hiliran/)).

## Kaitan dengan kejuruteraan perisian

Pembingkaian semula sama menyelamatkan tuntutan produktiviti pembangun daripada matematik upah: masa kejuruteraan dilepaskan, dinyatakan sebagai *keupayaan dihantar yang organisasi tidak mampu sebaliknya* — ciri, migrasi, kerja kebolehpercayaan — dinilai pada apa yang organisasi bayar untuk keupayaan sebegitu di margin (kadar kontraktor, atau setara pengambilan-ditangguh). Pembingkaian COO juga mengajar sesuatu tentang mempromosi kerja platform: nyatakan manfaat dalam unit yang digunakan untuk menguruskan khalayak. Pemimpin operasi berfikir dalam aktiviti dan sasaran, bukan jam abstrak; pemimpin kejuruteraan berfikir dalam item peta jalan dan bilangan kakitangan, bukan minit dijimatkan.

## Perangkap

- **Tuntutan kapasiti tanpa permintaan**: 12,500 slot penilaian tambahan hanya penting jika saluran paip pembedahan mengisinya — semak kekangan hiliran.
- **Nilai tarif tanpa mekanisme pembayaran**: di bawah pembayaran campuran, aktiviti tambahan mungkin tidak membawa pendapatan tambahan; nilai mungkin pengurangan senarai menunggu sebaliknya (lihat [impak senarai menunggu](../impak-senarai-menunggu/)).
- **Membentangkan kapasiti sebagai tunai** — ini manfaat tidak-melepaskan-tunai andalan; labelkannya (lihat [melepaskan tunai lwn tidak melepaskan tunai](../penjimatan-melepaskan-tunai-lwn-tidak-melepaskan-tunai/)).

## Sumber

- NHS England, NHS Payment Scheme. <https://www.england.nhs.uk/pay-syst/national-tariff/national-tariff-payment-system/>
- NHS England, elective care recovery plan. <https://www.england.nhs.uk/coronavirus/publication/delivery-plan-for-tackling-the-covid-19-backlog-of-elective-care/>
