# Total Biaya Kepemilikan (Total Cost of Ownership, TCO)

TCO iku biaya lengkap sistem sajrone umure: akuisisi utawa build, integrasi, operasi, pangopènan, dhukungan, latihan, lan penghentian. Baseline sing ora nyenengake: **pangopènan iku 50–80% TCO piranti lunak** — kira-kira telung perempat biaya sakumur teka *sawise* peluncuran.

## Kenapa Iki Penting

Penilaian teknologi kesehatan wis suwe sinau yen rega obat dudu biayane — administrasi, pemantauan, lan ngurus efek samping kabeh kalebu ing model. Kasus bisnis piranti lunak sing mung ngetung biaya build/lisensi mbaleni kesalahan rega-obat-naif lan sacara sistematis nyepelekake sisi biaya saben [ICER](../rasio-efektivitas-biaya-inkremental/) lan [dampak anggaran](../analisis-dampak-anggaran/) sing disuplai. Kanggo pengadaan NHS, disiplin TCO iku sing ndadekake klaim efektivitas-biaya produk digital jujur — lan ing kana pilihan sing katon murah kalah.

## Matematikane

```
TCO = biaya wiwitan (build/lisensi + integrasi + migrasi data + latihan)
    + Σ_t [operasi + pangopènan + dhukungan + infrastruktur + upgrade
           + kepatuhan/jaminan]_t / (1 + r)^t
    + biaya penghentian (metu, ekstraksi data, mlaku paralel)

Cakrawala: 3–5 taun komersial, umur-sistem kanggo infrastruktur klinis
r: 3.5% sektor publik (Green Book), 8–12% komersial

Tolok ukur: pangopènan taunan ≈ 15–20% biaya build; ~78% saka TCO
sakumur pasca-peluncuran; ngabaikake penghentian lan lock-in vendor
ngregani dhewe.
```

## Conto Petungan

Rong pilihan kanggo sistem e-observasi, cakrawala 5-taun:

```
                        SaaS vendor     Build internal
Taun 0 (lisensi/build)  £250,000        £900,000
Integrasi + latihan     £180,000        £150,000
Operasi taunan (1–5)    £120,000/taun   £190,000/taun  (hosting + 1.5 FTE pangopènan)
Metu/penghentian        £60,000         £30,000
TCO tanpa diskon        £1,090,000      £2,030,000
```

Perkiraan rékayasa pilihan build (£900k) mung 44% saka TCO sejatine — lan perkiraan build dhewe biasane ngluwihi 30–40% (deleng [mbangun vs tuku](../mbangun-vs-tuku/)). Kajaba pilihan internal ngirim *asil* sing beda sacara material, logika [minimalisasi-biaya](../analisis-minimalisasi-biaya/) ditrapake lan SaaS menang kanthi ~£940k.

## Sambungan karo Rékayasa Piranti Lunak

Insinyur nyepelekake data pangopènan bidange dhewe nalika mbela build: aturan pangopènan-taunan-15–20%-biaya-build tegese saben sistem £1M meneng-meneng komit £150–200k/taun kapasitas mbesuk — kewajiban sing kalebu ing neraca mental padha karo [utang teknis](../utang-teknis/). TCO uga sisi biaya saben metrik ing repositori iki: biaya saben deployment, [ekonomi unit cloud](../ekonomi-unit-cloud/), lan disiplin denominator sing dipeksa HTA marang sponsor obat. Nalika rega produkmu ditantang, perbandingan TCO sing kalebu biaya mlaku sejati incumbent biasane pigura ulang paling kuwat sing ana. Angka TCO pirang-pirang taun kaya ing ndhuwur iku jumlah akeh item garis biaya sajrone wektu — deleng [rollup biaya aman-mata-uang](../rollup-biaya-aman-mata-uang/) kenapa jumlah kuwi kudu desimal-persis tinimbang floating point nalika model kudu rekonsiliasi nganti sen, lan [alokasi biaya sen-pas](../alokasi-biaya-sen-pas/) kanggo mecah total TCO ing pusat biaya tanpa kelangan sen.

## Jebakan

- **Jangkar biaya-peluncuran**: mbandhingake pilihan ing biaya taun-0 nalika urutane mbalik ing taun 3.
- **Kesalahan tenaga-kerja-internal-gratis**: pangopènan internal diregani nol amarga "tim wis dibayar" — deleng [biaya peluang](../biaya-peluang/).
- **Ngabaikake biaya metu**: egress data, pungkasan kontrak, lan mlaku paralel iku ing ngendi SaaS "murah" dadi larang.
- **Nglanggar cakrawala-padha**: mbandhingake TCO SaaS 3-taun marang amortisasi build 10-taun (deleng [cakrawala wektu](../cakrawala-wektu/)).

## Sumber

- IBM, total cost of ownership. <https://www.ibm.com/think/topics/total-cost-of-ownership>
- Software maintenance cost benchmarks. <https://pegotec.net/software-maintenance-cost-percentage-2026-industry-benchmarks/>
