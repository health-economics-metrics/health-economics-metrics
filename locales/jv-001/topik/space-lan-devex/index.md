# SPACE lan DevEx (SPACE and DevEx)

SPACE (Satisfaction & well-being, Performance, Activity, Communication & collaboration, Efficiency & flow) lan DevEx (feedback loop, beban kognitif, kahanan flow) iku kerangka kanggo ngukur produktivitas pangembang **sacara multi-dimensi** — wangsulan bidang kanggo panemuan yen ora ana metrik tunggal sing slamet nalika ketemu kasunyatan.

## Kenapa Iki Penting

Loro kerangka nyandi piwulang kangelan sing padha sing disinaoni riset asil kesehatan puluhan taun sadurunge: angka tunggal (baris kode; tekanan darah) salah makili kasunyatan multi-dimensi, lan ngoptimalake iku ngasilake dolanan, dudu perbaikan. SPACE nuntut nggabungake metrik saka paling ora telung dimensi, nyampur telemetri karo laporan-dhewe — struktural identik karo carane [EQ-5D](../eq-5d/) mrofil limang dimensi sadurunge indeks apa wae diitung, lan sebabe [PROM](../asil-sing-dilaporake-pasien/) ana bareng ukuran klinis. Kepuasan/kesejahteraan uga dudu hiasan alus: iku nyuplai ekonomi [retensi tenaga kerja](../retensi-tenaga-kerja/), ing ngendi attrisi diregani ing sasi gaji sarat.

## Matematikane

Ora ana kerangka sing rumus; loro-lorone desain pangukuran:

```
Aturan SPACE: ≥ 3 dimensi, ≥ 1 metrik persepsi (survei) + ≥ 1 metrik sistem (telemetri)

Dimensi DevEx lan pasangan conto:
  feedback loop    → durasi CI (telemetri) + "ngenteni rasane alon" (survei)
  beban kognitif   → kemudahan nemokake dokumen, wektu onboarding + usaha sing dirasakake
  kahanan flow     → kapadhetan rapat/gangguan + fokus sing dilaporake dhewe

Indeks turunan (contone, DXI DX) mapake komposit survei menyang wektu:
klaim vendor ≈ 13 mnt/pangembang/minggu saben poin indeks — anggep iku
tolok ukur vendor sing kudu divalidasi lokal, dudu konstanta alam.
```

## Conto Petungan

Tim platform mbenerake investasi DevEx (nyepetake CI + overhaul dokumen) kanggo 300 pangembang:

```
Baseline: CI p75 = 28 mnt; survei "aku ilang fokus ngenteni build": 62% setuju
Sawise:   CI p75 = 9 mnt;  persetujuan 24%

Wektu sing dibalekake (telemetri): 6 build/dina × 19 mnt × 0.4 bisa dienggo = ~45 mnt/dina/pangembang

Nilai kapasitas: 300 × 0.75j × 220d × £60/j ≈ £2.97M/taun (non-cash-releasing —
deleng cash-releasing-vs-non-cash-releasing.md; faktor kegunaan 0.4 iku
diskon fragmentasi saka practitioner-time.md)

Korobarasi persepsi iku sing ndadekake klaim telemetri kredibel — salah siji
piyambak bisa dimainake; bareng, padha triangulasi.
```

## Sambungan karo Rékayasa Piranti Lunak

Dokumen iki *iku* sisi piranti lunak; transfer mlaku menyang ekonomi kesehatan. "Taun-insinyur sing disesuaikan kualitas" — wektu sing dibobot indeks pengalaman standar — iku konstruksi [QALY](../taun-urip-sing-disesuaikan-kualitas/) sing ditrapake ing kapasitas rékayasa, lan mewarisi aturan QALY: bobot saka instrumen sing divalidasi (survei konsisten, skor sing diterbitake), dielisitasi *sadurunge* perbandingan, ora tau disetel kanggo ngelem piranti favorit. Piwulang [SF-6D vs EQ-5D](../eq-5d/) uga ditrapake: instrumen beda menehi angka beda sacara sistematis, mula aja mbandhingake indeks DevEx ing instrumen vendor.

## Jebakan

- **Ambruk-metrik-tunggal**: dasbor sing nyuda SPACE dadi siji skor nggawe maneh masalah sing arep dicegah kerangka.
- **Metrik aktivitas minangka asil**: commit, PR, lan story point iku Aktivitas — dimensi sing SPACE peringatan paling gampang dimainake (analog kesehatan: ngetung prosedur, dudu pemulihan).
- **Kesel survei lan efek Hawthorne**: instrumen ringan saben kuartal ngungkuli interogasi saben minggu.
- **Mbandhingake tim**: kaya tabel liga rumah sakit tanpa penyesuaian campuran-kasus — beda konteks (domain, beban warisan, on-call) nguwasani.

## Sumber

- Forsgren N, et al. "The SPACE of Developer Productivity." ACM Queue 2021. <https://queue.acm.org/detail.cfm?id=3454124>
- Noda A, Forsgren N, Storey MA, Greiler M. "DevEx: What Actually Drives Productivity." ACM Queue 2023. <https://queue.acm.org/detail.cfm?id=3595878>
