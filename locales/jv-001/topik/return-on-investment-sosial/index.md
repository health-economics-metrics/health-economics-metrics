# Return on Investment Sosial (Social Return on Investment, SROI)

SROI ngluwihi [ROI](../return-on-investment/) menyang asil sing ora diregani pasar — kesejahteraan, sambungan sosial, dampak lingkungan — kanthi monetisasi nganggo proksi finansial, kanggo *kabeh* pemangku kepentingan sing kena.

## Kenapa Iki Penting

Akeh sing diprodhuksi intervensi kesehatan lan komunitas ora tau nyenggol garis anggaran: kesepian suda, kelegaan perawat, gain pagawean, martabat. SROI, diatur pitung prinsip Social Value International (libatake pemangku kepentingan, regani sing penting, aja ngaku kakehan, transparan, verifikasi…), ngasilake pernyataan kaya "£3.20 nilai sosial saben £1 sing diinvestasikan." Syarat nilai-sosial pengadaan umum UK ndadekake bukti gaya-SROI relevan sacara komersial: penawaran kanggo kontrak umum (kalebu NHS) entuk poin kanggo nilai sosial sing dituduhake.

## Matematikane

```
Rasio SROI = PV(asil sosial sing dimonetisasi) / PV(investasi)

Kanggo saben asil:
  nilai = kuantitas × proksi finansial × atribusi × (1 − deadweight) × (1 − displacement)

deadweight   = bakal kedadean tanpa iku
atribusi     = bagean sing disebabake liyane
displacement = manfaat dipindhah saka panggonan liya tinimbang digawe
drop-off     = sirna asil sajrone taun
```

Faktor penyesuaian iku integritas metode: tanpa iku, SROI iku fiksi nganggo tandha mata uang.

## Conto Petungan

Aplikasi befriending sing nyambung wong tuwa sing terisolasi karo relawan; biaya program £200,000/taun; 1,500 pasangan aktif.

```
Asil: kesepian suda kanggo 1,500 wong
  proksi: valuasi kesejahteraan "kelegaan saka kesepian" ≈ £1,800/wong/taun
  deadweight 25% (sawetara bakal nemokake sambungan tanpa iku)
  atribusi 80% (sawetara kredit kanggo layanan liya)

Nilai = 1,500 × 1,800 × 0.80 × 0.75 = £1,620,000

Asil: kunjungan dokter umum suda, 1,500 × 1.2 kunjungan × £42 = £75,600 (nyata-pembayar)

SROI = (1,620,000 + 75,600) / 200,000 ≈ 8.5 : 1
```

Catet rasio iku 96% kesejahteraan sing diregani-proksi lan 4% awis keras. Iku SROI sing sah — nanging kudu diwenehake minangka nilai sosial, ora tau dienggo ngimplikasikan £1.7M bisa disimpen.

## Sambungan karo Rékayasa Piranti Lunak

SROI iku kerangka jujur kanggo karya rékayasa sing penerima manfaate ana ing njaba tim sing mbayar: pangopènan open-source, perbaikan aksesibilitas, karya platform sing dikonsumsi tim liya, investasi komunitas pangembang. Mekanika sing bisa dialihake: kenali kabeh pemangku kepentingan, monetisasi nganggo proksi sing dinyatakake, lan trapake diskon deadweight/atribusi (apa perbaikan OSS kuwi bakal kedadean tanpa iku? pira gain karyamu vs ekosistem?). Disiplin *ndiskon klaim dampak dhewe* iku sing mbedakake SROI saka angka marketing.

## Jebakan

- **Blanja proksi**: milih valuasi kesejahteraan paling loman sing ana.
- **Nglewati deadweight/atribusi** — inflasi paling umum, asring nglipatganda rasio.
- **Perbandingan rasio ing studi**: rasio SROI sensitif-metode; bandhingake mung ing kerangka sing konsisten.
- **Nampilake nilai sosial minangka penghematan sing bisa dicairake** marang pemegang anggaran.

## Sumber

- Social Value International, Guide to SROI. <https://www.socialvalueint.org/guide-to-sroi>
- UK Government guide to SROI. <https://www.gov.uk/government/publications/a-guide-to-social-return-on-investment>
