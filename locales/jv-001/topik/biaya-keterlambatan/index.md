# Biaya Keterlambatan (Cost of Delay, CoD)

Biaya Keterlambatan iku nilai ekonomi sing ilang saben unit wektu nalika fitur, produk, utawa layanan *ora* dikirim. Iku jembatan paling kuwat antarane metrik panyampaian piranti lunak lan ekonomi kesehatan: ngowahi "kita ngirim telat" dadi mata uang — utawa dadi QALY.

## Kenapa Iki Penting

Aturan Reinertsen: "Yen sampeyan mung ngitung siji bab, etungen Biaya Keterlambatan." Umume organisasi ngerti pira biaya proyek nanging ora pira biaya telat sasi, mula ngoptimalake anggaran nalika getihen nilai-wektu. Kanggo piranti lunak kesehatan taruhane harfiah: saben minggu perbaikan jalur ditundha, pasien ngenteni luwih suwe ing kahanan kesehatan sing luwih elek. CoD iku kerangka matematis paling kuwat kanggo diwenehake marang pemangku kepentingan NHS amarga ngregani *ora anane* piranti lunakmu.

## Matematikane

```
CoD = manfaat saben unit wektu sing ilang nalika durung dikirim   (£/minggu utawa QALY/minggu)

Total kerugian tundha = CoD × durasi tundha

Kanggo prioritisasi, deleng wsjf-and-cd3.md: CD3 = CoD / durasi.
```

Kanggo piranti lunak klinis, denominasi ing kesehatan uga dhuwit:

```
CoD_kesehatan = pasien sing kena saben minggu × keuntungan QALY saben pasien
CoD_dhuwit    = CoD_kesehatan × λ (ambang kesediaan-mbayar, £20k–30k/QALY)
                + penghematan operasional saben minggu sing ilang
```

## Conto Petungan

**Operasional**: piranti lunak ngirit £200 saben pasien ing sawijining jalur; trust ngolah 50 pasien kaya ngono saben minggu.

```
CoD = 200 × 50 = £10,000/minggu
Tundha pengadaan 10 minggu biayane 200 × 50 × 10 = £100,000 limbah sing bisa dihindari.
```

**Klinis**: perbaikan triase nyingkirake 5 minggu nunggu (utilitas 0.68 → 0.80 luwih awal) kanggo 100 pasien/minggu:

```
Keuntungan QALY saben pasien = (5/52) × 0.12 ≈ 0.0115
CoD_kesehatan = 100 × 0.0115 = 1.15 QALY/minggu
CoD_dhuwit    = 1.15 × £20,000 ≈ £23,000/minggu nilai kesehatan
```

Tundha deployment 6 sasi "biayane" ~30 QALY — argumen sing ngowahi telat go-live IT dadi kedadean klinis. (Tolok ukur kanggo skala: analisis Maersk sing misuwur saka Black Swan Farming nemokake fitur tunggal kanthi CoD ≈ $200k/minggu sing wis ngenteni 38 minggu.)

## Sambungan karo Rékayasa Piranti Lunak

CoD iku metrik sing ndadekake [lead time DORA](../metrik-dora/) lan [efisiensi aliran](../metrik-aliran/) bisa diwaca sacara finansial: lead time × CoD = dhuwit (utawa kesehatan) sing kobong ing antrian. Panggunaan:

- **Prioritisasi**: urutake karya miturut CoD/durasi ([WSJF/CD3](../wsjf-lan-cd3/)) tinimbang pemangku kepentingan sing paling banter.
- **Ekonomi proses**: irama rilis 2-minggu duwe biaya tundha sing dikarepake ~1 minggu × CoD saben fitur dibandhingake continuous delivery — regani batch.
- **Pengadaan**: siklus pengadaan NHS 6–18 sasi duwe CoD; nuduhake iku ngowahi obrolan urgensi (deleng [analisis dampak anggaran](../analisis-dampak-anggaran/) kanggo pasangan keterjangkauan).

## Jebakan

- **Nganggep CoD linear**: sawetara karya duwe nilai bentuk-tenggat (tanggal regulasi — CoD tanpa wates sawise tanggal, nol sadurunge) utawa nilai sing sirna (jendhela first-mover). Klasifikasi profil urgensi sadurunge ngalikake.
- **CoD ing output sing ora dikarepake**: tundha mung larang yen barang kuwi nduweni nilai; sampah sing ditundha iku gratis.
- **Ngetung ganda tundha lan diskon**: [diskon](../diskon-lan-preferensi-wektu/) wis ngregani wektu ing cakrawala pirang-pirang taun; CoD iku versi operasional njero-cakrawala. Gunakake CoD kanggo minggu/sasi, pergeseran NPV kanggo taun.

## Sumber

- Reinertsen DG, *The Principles of Product Development Flow*.
- Black Swan Farming, Cost of Delay. <https://blackswanfarming.com/cost-of-delay/>
- Cost of delay overview. <https://en.wikipedia.org/wiki/Cost_of_delay>
