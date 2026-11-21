# Metrik Layanan GDS (GDS Service Metrics)

Service Manual Government Digital Service (GDS) Inggris ngamanatake papat KPI kanggo saben layanan digital pemerintah: **biaya saben transaksi, kepuasan pangguna, tingkat rampung, lan panampa digital**. Bareng, iku ekonomi minimal layanan digital umum — lan cithakan sing diwarisi layanan digital NHS.

## Kenapa Iki Penting

Metrik GDS nyandi kasus bisnis pergeseran-saluran sing mbiayai sepuluh taun digitalisasi pemerintah: Digital Efficiency Report nemokake transaksi digital ~20× luwih murah tinimbang telpon lan ~50× luwih murah tinimbang tatap muka (angka pemerintah lokal: web £0.15, telpon £2.83, tatap muka £8.62). Nanging penghematan mung kelakon yen wong *ngrampungake* perjalanan digital (tingkat rampung) *tinimbang* saluran larang (panampa) — papat KPI iku siji model ekonomi, dudu papat dasbor.

## Matematikane

```
Biaya saben transaksi = total biaya layanan / transaksi rampung
Tingkat rampung       = rampung / transaksi diwiwiti × 100
Panampa digital       = transaksi digital / transaksi kabeh saluran × 100
Kepuasan pangguna     = % puas+banget puas (5-poin, survei ing-layanan)

Penghematan pergeseran-saluran = volume × pergeseran panampa × (biaya_saluran_lawas − biaya_digital)
… dikurangi permintaan gagal: (1 − tingkat rampung) × biaya saluran cadangan
```

## Conto Petungan

Layanan manajemen janji NHS: 2M transaksi/taun, saiki 70% telpon (£3.20/panggilan) / 30% digital (£0.25). Desain ulang munggahake panampa digital dadi 55% lan rampung saka 84% dadi 93%:

```
Penghematan pergeseran-panampa = 2M × 0.25 × (3.20 − 0.25) = £1,475,000/taun

Penghematan permintaan-gagal: perjalanan digital gagal bali menyang telpon
  sadurunge: 2M × 0.30 × 0.16 × £3.20 = £307,200
  sawise:    2M × 0.55 × 0.07 × £3.20 = £246,400
  net £60,800/taun — perbaikan rampung nglindhungi gain panampa

Kepuasan iku indikator ngarep: pangguna sing ora puas bali menyang telpon,
mula penurunan kepuasan ngramal bosok panampa sadurunge katon.
```

## Sambungan karo Rékayasa Piranti Lunak

Papat KPI iki conto kelas-produksi saka [tabel biaya-akibat](../analisis-biaya-akibat/): siji metrik biaya, telung metrik asil, ora tau digulung dadi skor. Kanggo insinyur produk, piwulang operasional: **tingkat rampung iku masalah instrumentasi corong** (saben titik ngetokake bisa ditemokake lan didandani); **biaya saben transaksi iku [ekonomi unit cloud](../ekonomi-unit-cloud/)** plus biaya saluran-dibantu-staf; **panampa iku metrik keadilan sing nyamar** — pangguna sing ora bisa utawa ora gelem pindhah saluran ora proporsional wong tuwa, disabilitas, lan kekurangan, mula penutupan saluran agresif ngowahi "penghematan" dadi cilaka akses (deleng [jangkauan lan keadilan](../jangkauan-lan-keadilan/)). Nerbitake KPI (GOV.UK nindakake, saben layanan) iku mekanisme dhewe: transparansi ndisiplinake ramalan kaya audit [realisasi manfaat](../realisasi-manfaat/).

## Jebakan

- **Panampa kanthi paksa**: nutup saluran telpon munggahake panampa lan mbuwang permintaan gagal marang staf ngarep; ukur total biaya sistem.
- **Rampung diukur saka kaca-2**: miwiti corong sawise titik drop-off nyenengake tingkat.
- **Biaya saben transaksi ngabaikake dhukungan digital-dibantu** lan penanganan permintaan-gagal.
- **Survei kepuasan mung nalika rampung sukses** — sing ora puas umume ora tau tekan survei.

## Sumber

- GOV.UK Service Manual, measuring success / mandatory KPIs. <https://www.gov.uk/service-manual/measuring-success/data-you-must-publish>
- Digital Efficiency Report. <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
