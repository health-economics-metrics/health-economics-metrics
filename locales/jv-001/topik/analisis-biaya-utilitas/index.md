# Analisis Biaya-Utilitas (Cost-Utility Analysis, CUA)

CUA iku analisis efektivitas-biaya kanthi **asil generik sing dibobot preferensi** — meh tansah [QALY](../taun-urip-sing-disesuaikan-kualitas/) (utawa [DALY](../taun-urip-sing-disesuaikan-disabilitas/) sing dihindari). Amarga unit asil iku universal, CUA bisa mbandhingake intervensi ing penyakit sing babar pisan beda.

## Kenapa Iki Penting

Layanan kesehatan nasional kudu milih antarane obat kanker, aplikasi kesehatan mental, lan robot bedah saka siji anggaran. Unit alami ora bisa mbandhingake; QALY bisa. CUA mula iku metode kasus-acuan ing NICE lan umume badan HTA: output-e — biaya saben QALY, dinilai marang [ambang](../ambang-kesediaan-mbayar/) — iku sing paling cedhak karo kurs universal ing kabijakan kesehatan. Yen pengin piranti lunakmu didanai *tinimbang barang liyane*, CUA iku arena-ne.

## Matematikane

```
ICUR = ΔBiaya / ΔQALY      (ICER kanthi QALY minangka unit efek)

ΔQALY = Σ (durasi_i × utilitas_i)_anyar − Σ (durasi_i × utilitas_i)_lawas
```

Utilitas saka instrumen sing wis divalidasi ([EQ-5D](../eq-5d/)); biaya lan QALY loro-lorone [didiskon](../diskon-lan-preferensi-wektu/) ing 3.5% (kasus acuan NICE); ketidakpastian liwat [PSA](../analisis-sensitivitas-probabilistik/).

## Conto Petungan

Aplikasi CBT kanggo kuatir sedheng vs dhaptar tunggu terapi tatap muka, saben pasien:

```
Biaya:  lisensi aplikasi + dhukungan   £250
        terapi sing diganti            −£680   (40% pangguna ora butuh maneh)
        ΔC = 250 − 680 = −£430 (ngirit dhuwit)

QALY:   6 sasi ing utilitas 0.76 tinimbang 0.68 nalika ngenteni
        ΔE = 0.5 × (0.76 − 0.68) = +0.04 QALY
```

ΔC < 0 lan ΔE > 0: aplikasi **ndominasi** — luwih apik lan luwih murah, ora butuh rasio. Yen asumsi penggantian terapi mung 10%, ΔC = 250 − 170 = +£80, lan ICUR = 80 / 0.04 = **£2,000/QALY** — isih adoh ing ngisor £20,000. Kasus slamet sanajan asumsi kunci dipotong: kuwi CUA sing kuwat (lan [diagram tornado](../analisis-sensitivitas/) mbuktekake).

## Sambungan karo Rékayasa Piranti Lunak

Gagasan jero CUA — *siji unit komposit sing dibobot preferensi kanggo mbandhingake barang sing ora padha* — iku pola kanggo mbandhingake investasi rékayasa sing ora padha (keamanan vs pengalaman pangembang vs kaandhalan). Pilihan jujur yaiku unit komposit sing bisa dipertahanake (langka) utawa [tabel biaya-akibat](../analisis-biaya-akibat/) eksplisit (biasa). Sing diwanti-wanti CUA yaiku komposit palsu: "skor dampak" kanthi bobot sing disetel sawise kedadean supaya pilihan favorit menang. Ekonomi kesehatan ngentekake puluhan taun nyeragamake elicitasi utilitas supaya bobot sadurunge perbandingan.

## Jebakan

- **Keuntungan utilitas ing ngisor sensitivitas instrumen** (deleng beda penting klinis minimal ing [asil sing dilaporake pasien](../asil-sing-dilaporake-pasien/)) — ΔE cilik dikalikan populasi gedhe iku trik pencucian klasik.
- **Ora ana perpindahan perawatan pembanding** — suku biaya paling gedhe kanggo produk digital asring apa sing diganti.
- **Mapping skor non-preferensi menyang utilitas** nganggo crosswalk sing durung divalidasi.

## Sumber

- York Health Economics Consortium glossary: cost-utility analysis. <https://yhec.co.uk/glossary/cost-utility-analysis/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
