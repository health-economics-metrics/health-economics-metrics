# Jalur Cepet DiGA Jerman (Germany's DiGA Fast-Track)

DiGA (Digitale Gesundheitsanwendungen) iku jalur "aplikasi nganggo resep" resmi Jerman — sistem nasional pisanan ing donya ing ngendi dokter ngresepake aplikasi kesehatan sing disetujoni lan asuransi resmi kudu ngganti ragad. Iku eksperimen urip paling ngarep kanggo mbayar terapi digital ing skala nasional.

## Kenapa Iki Penting

DiGA njawab pitakon sing ditakoni saben perusahaan kesehatan digital — "sapa sing bakal bener-bener mbayar?" — nganggo undang-undang (DVG, 2019). Desaine luar biasa:

- **Keputusan cepet**: BfArM (regulator) kudu mutusake ing 3 sasi.
- **Daftar sementara**: aplikasi bisa kadaftar 12 sasi *nalika isih ngasilake bukti* — entuk pendapatan nalika studi pivotal.
- **Tenggat bukti**: buktekake "efek perawatan kesehatan positif" (manfaat medis, utawa perbaikan struktural/prosedural sing relevan kanggo pasien) liwat studi komparatif — biasane RCT — utawa dicopot saka daftar. Kira-kira setengah entri sementara gagal dadi permanen.
- **Rega**: produsen nyetel rega taun-1 kanthi bebas; banjur dirundingake karo federasi asuransi. Rega awal 3-sasi median kira-kira €500; unsur rega adhedhasar kinerja teka wiwit 2026.

Pamriksan realitas pasar (riset nganti pungkasan 2024): ~68 aplikasi kadaftar, >1M resep kumulatif, ~81% resep diaktifake, ~€234M belanja asuransi kumulatif — pasar nyata, nanging sederhana dibandhingake gembar-gembor, lan kepatuhan sawise aktivasi tetep titik lemah.

## Matematikane

Model komersial sing dijalanake saben pendiri DiGA:

```
Pendapatan = resep × tingkat aktivasi × rega saben periode resep
Biaya bukti = RCT pivotal (biasane €1M–3M) ing jendhela 12 sasi
Nilai sing dikarepake = P(bukti sukses) × pendapatan kahanan-mapan − biaya bukti

Kanthi ~50% kegagalan konversi, P kudu dinilai kanthi jujur — setengah bidang
mbuwang dhuwit RCT lan kelangan daftar.
```

## Conto Petungan

Aplikasi manajemen depresi kadaftar sementara ing €450/kuartal:

```
Taun 1: 20,000 resep × 81% aktivasi × €450 ≈ €7.3M pendapatan
Biaya RCT: €2M, mlaku bebarengan
Asil A (bukti positif): daftar permanen, rega sing dirundingake ~€380,
  kahanan mapan 60,000 resep/taun ≈ €18.5M/taun
Asil B (bukti gagal): dicopot saka daftar ing sasi 12; pendapatan mandheg.
```

Taun sementara mbiayai generasi bukti — inovasi inti jalur kuwi. Bandhingake urutan tradisional (bukti dhisik, pendapatan pirang-pirang taun mengko), sing nglaparake persis produk sing dikarepake DiGA ana.

## Sambungan karo Rékayasa Piranti Lunak

Pola DiGA — **adopsi sementara kanthi metrik sukses sing didaftarake sadurunge lan sunset otomatis** — bisa langsung disalin kanggo tata kelola piranti rékayasa: kirimake piranti marang pangguna produksi sajrone 12 sasi, daftarake metrik sadurunge (wektu sing dihemat sing diukur, pangurangan insiden), kadaluwarsa otomatis kajaba bukti teka. Iku ngrampungake paradoks pilot (piranti sing butuh skala kanggo mbuktekake nilai ora tau entuk skala) tanpa menehi jabatan permanen marang teknologi sing durung kabukten. Data aktivasi-81%/kepatuhan-rendah uga nggawa piwulang produk: resep (utawa mandat eksekutif) entuk instal; mung kualitas produk entuk panggunaan lestari — deleng [kepatuhan lan persistensi](../kepatuhan-lan-persistensi/).

## Jebakan

- **Nganggep pendaftaran minangka garis finish** — resep butuh kapercayan sing ngresepake; akeh DiGA sing kadaftar weruh volume sing ora signifikan.
- **Studi pivotal kurang daya** kanggo ngirit dhuwit nalika taun pendapatan — ekonomi palsu sing nerangake umume tingkat kegagalan 50%.
- **Mindhah model tanpa pembayar**: DiGA bisa amarga reimbursement iku resmi; salinan tanpa pembayaran sing diamanatake mung program pilot.

## Sumber

- Analysis of the DiGA market, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01137-1>
- DiGA pricing trends, npj Digital Medicine 2025. <https://www.nature.com/articles/s41746-025-01879-6>
- BfArM, Digital Health Applications. <https://www.bfarm.de/EN/Medical-devices/Tasks/DiGA-and-DiPA/Digital-Health-Applications/_node.html>
