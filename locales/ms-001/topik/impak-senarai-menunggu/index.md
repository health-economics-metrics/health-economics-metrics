# Impak Senarai Menunggu

Impak senarai menunggu menukar kapasiti klinikal yang dijimatkan kepada pesakit yang dikeluarkan daripada (atau dipercepat melalui) senarai menunggu. Menukar jam dijimatkan kepada slot klinik tambahan secara langsung mengurangkan saiz senarai menunggu trust — cara paling ketara untuk menunjukkan kepada sistem kesihatan apa gunanya kapasiti yang dibebaskan.

## Mengapa ia penting

Senarai menunggu elektif ialah cabaran penentu NHS selepas pandemik (saiznya ialah metrik politik kebangsaan), dan setiap trust menjalankan program pemulihan elektif terhadapnya. Kes perniagaan yang berkata "menjimatkan 2,000 jam-jururawat" abstrak; yang berkata "mencipta 4,000 slot temujanji tambahan, melihat 3,800 pesakit menunggu, memotong senarai kepakaran sebanyak 9%" ialah cerita yang boleh dibawa Ketua Pegawai Operasi kepada lembaga mereka. Impak senarai menunggu ialah *unit akaun* semula jadi bagi [kapasiti tidak-melepaskan-tunai](../penjimatan-melepaskan-tunai-lwn-tidak-melepaskan-tunai/).

## Matematiknya

```
Slot tambahan      = jam dilepaskan / tempoh slot × penggunaan
Pesakit dilihat    = slot tambahan × (1 − kadar DNA)
Pengurangan senarai = pesakit dilihat − permintaan baharu teraruh
Keuntungan masa tunggu = penambahbaikan beratur daripada kadar perkhidmatan lebih tinggi
                     (bagi baris gilir stabil, memotong tunggakan N sebanyak ΔN pada
                     kadar perkhidmatan μ menarik semua orang ke hadapan ~ΔN/μ)
```

Nilai kesihatan tunggu lebih pendek: pesakit menghabiskan lebih sedikit minggu dalam keadaan utiliti pra-rawatan lebih rendah — aritmetik QALY dalam [rujukan-ke-rawatan](../rujukan-ke-rawatan/).

## Contoh penyelesaian

Perisian dokumentasi ambien menjimatkan 45 min/hari bagi setiap seorang daripada 20 jururawat klinik. Atas 250 hari: 20 × 0.75 × 250 = 3,750 jam/tahun.

```
Slot (30 min, 85% boleh guna) = 3,750 / 0.5 × 0.85 = 6,375 slot
Pesakit dilihat (7% DNA)      = 6,375 × 0.93       ≈ 5,929/tahun
```

Bagi kepakaran dengan senarai 12,000 pesakit dan 24,000 temujanji/tahun kapasiti selaras-permintaan, ~5,900 temujanji tambahan memotong purata tunggu kira-kira suku — menggerakkan trust secara material ke arah piawai 18 minggu tanpa mengambil pekerja. Pada nilai skim ~£160 bagi setiap kehadiran aktiviti itu bernilai ~£949,000/tahun (lihat [tarif kebangsaan dan kos unit](../tarif-kebangsaan-dan-kos-unit/)) — tetapi bentangkan pembingkaian *senarai menunggu* dahulu; itulah yang sistem diuruskan.

## Kaitan dengan kejuruteraan perisian

Senarai menunggu ialah tunggakan, dan ekonomi pembakaran-tunggakan berpindah dalam kedua-dua arah. Daripada kesihatan ke perisian: nilaikan pengurangan tunggakan mengikut berapa lama *pengguna* menunggu nilai, bukan item ditutup ([kos kelewatan](../kos-kelewatan/) bagi setiap item beratur). Daripada perisian ke kesihatan: Hukum Little mengatakan senarai mengecut hanya jika kadar perkhidmatan melebihi kadar ketibaan — keuntungan kapasiti yang diserap oleh rujukan meningkat membiarkan tunggu tidak berubah, jadi modelkan ketibaan juga. Dan dalam kedua-dua domain, utamakan mengikut nilai berpemberat keterukan (kategori keutamaan klinikal ↔ [pengubah suai keterukan](../kekurangan-qaly-dan-pengubah-suai-keterukan/)), bukan masuk-dahulu-keluar-dahulu.

## Perangkap

- **Slot ≠ pesakit**: melupakan kadar DNA dan serpihan masa dilepaskan yang tidak boleh guna.
- **Permintaan teraruh**: kapasiti tambahan yang kelihatan menarik rujukan; impak senarai bersih lebih kecil daripada kasar.
- **Menuntut tunai**: impak senarai menunggu ialah nilai kapasiti; tuntutan tunai (penyumberluaran kerja tunggakan dielakkan) ialah baris berbeza — lihat [kos penyumberluaran boleh dielakkan](../kos-penyumberluaran-yang-boleh-dielakkan/).

## Sumber

- NHS England, RTT waiting times statistics. <https://www.england.nhs.uk/statistics/statistical-work-areas/rtt-waiting-times/>
- NHS England, elective care recovery plan. <https://www.england.nhs.uk/coronavirus/publication/delivery-plan-for-tackling-the-covid-19-backlog-of-elective-care/>
