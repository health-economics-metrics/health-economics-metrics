# EQ-5D

EQ-5D iku kuesioner standar saka grup EuroQol kanggo ngukur kualitas urip gegandhengan-kesehatan. Iku instrumen sing ngasilake bobot utilitas ing njero umume petungan [QALY](../taun-urip-sing-disesuaikan-kualitas/) — kasus acuan NICE nyebut iku ukuran pilihan kanggo wong diwasa.

## Kenapa Iki Penting

Produk kesehatan digital apa wae sing pengin ngaku QALY butuh utilitas saka instrumen sing wis divalidasi, lan EQ-5D iku standar ing Inggris lan umume Eropa. Cukup cendhak kanggo dilebokake ing aplikasi (5 pitakon + skala visual), tegese produk piranti lunak bisa ngumpulake data asil kelas-HTA minangka efek samping panggunaan normal — kaluwihan struktural tinimbang obat, sing butuh studi khusus.

## Matematikane

EQ-5D-5L takon siji pitakon ing saben **5 dimensi** — mobilitas, perawatan diri, aktivitas biasa, nyeri/ora nyaman, kuatir/depresi — saben dijawab ing **5 tingkat** (ora ana masalah … masalah ekstrem), plus skala analog visual 0–100 (EQ VAS).

```
Kahanan kesehatan = profil 5-digit, contone "21221"
Indeks utilitas   = value_set(profil)

Set nilai iku khusus-negara, asale saka survei time-trade-off /
pilihan-diskret masarakat umum. Jangkar: 1 = kesehatan kebak,
0 = mati; kahanan sing luwih elek tinimbang mati iku negatif (lantai set UK 3L: −0.594).
```

Aritmetika QALY banjur lumaku minangka `durasi × utilitas`.

## Conto Petungan

Aplikasi rehab muskuloskeletal ngukur EQ-5D-5L nalika onboarding lan ing 6 sasi kanggo 1,000 pangguna sing ngrampungake.

```
Utilitas rata-rata ing baseline:  0.62
Utilitas rata-rata ing 6 sasi:    0.71
Gain lestari (dianggep) 1 taun: (0.71 − 0.62) × 1.0 = 0.09 QALY saben pangguna
```

Marang owah-owahan kelompok kontrol 0.03 (pemulihan alami), gain sing bisa disebabake 0.06 QALY/pangguna. Dimonetisasi ing £20,000–£30,000/QALY: **£1,200–£1,800 nilai kesehatan saben pangguna sing ngrampungake** — angka sing nancepake negosiasi rega aplikasi karo pembayar. (Beda penting klinis minimal kanggo indeks EQ-5D biasane ing kisaran 0.03–0.08, mula 0.06 masuk akal nanging kudu lulus perbandingan kontrol; deleng [asil sing dilaporake pasien](../asil-sing-dilaporake-pasien/).)

## Sambungan karo Rékayasa Piranti Lunak

- **Instrumenake.** EQ-5D nalika daftar lan ing interval tindak lanjut iku sawetara layar UI; ganjarane bukti kelas-HTA. Entuk lisensi saka EuroQol (dibutuhake, gratis kanggo sawetara panggunaan).
- **Gunakake set nilai sing bener** kanggo negara deployment — wangsulan sing padha diskor beda ing Inggris vs Jerman vs Jepang.
- **Piwulang desain**: EQ-5D nuduhake kepriye survei standar cilik plus fungsi skor sing diterbitake ngasilake indeks tunggal sing bisa dibandhingake. Iku pola kanggo indeks pengalaman-pangembang sing kredibel uga — instrumen standar, bobot sing diterbitake, dudu firasat ad-hoc. Deleng [SPACE lan DevEx](../space-lan-devex/).

## Jebakan

- **Sadurunge/sawise tanpa pembanding** — regresi menyang rata-rata lan pemulihan alami nggedhekake gain naif.
- **Bias survivorship**: mung ngukur pangguna sing tetep terlibat (deleng [retensi lan churn](../retensi-lan-churn/)).
- **Nyampur versi 3L lan 5L utawa set nilai** ing studi — angka beda sacara sistematis.
- **Efek langit-langit** ing populasi sing kena entheng: akeh pangguna skor cedhak 1.0 ing baseline, ora ana ruang kanggo nuduhake gain.
- **Nganggep set nilai bisa mbenerake dhewe**: angka utilitas sing dibalekake set nilai dhewe dielisitasi saka masarakat liwat survei time-trade-off (utawa adhedhasar-pilihan sing gegandhengan) — deleng [Elicitasi Utilitas Time Trade-Off (TTO)](../elisitasi-utilitas-time-trade-off/) kanggo carane.

## Sumber

- EuroQol: EQ-5D-5L. <https://euroqol.org/information-and-support/euroqol-instruments/eq-5d-5l/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
