# Perbandingan ICER Lintas Mata Uang

Membandingkan [ICER](../rasio-efektivitas-biaya-inkremental/) yang dihitung dalam mata uang suatu negara dengan [ambang batas kesediaan membayar](../ambang-batas-kesediaan-membayar/) negara lain — atau menggabungkan data biaya yang dikumpulkan dari uji coba multinasional — memerlukan langkah konversi mata uang yang eksplisit dan dapat diaudit. Memilih metode konversi yang salah dapat membalik keputusan adopsi dari bukti yang sama, padahal data klinis maupun biayanya tidak berubah.

## Mengapa ini penting

Panduan metodologis ISPOR untuk uji klinis multinasional (Willke dkk., *Health Economics*, 1998) merekomendasikan konversi biaya sumber daya dengan **paritas daya beli (PPP)** — bukan kurs pasar — ketika membandingkan nilai ekonomi riil sumber daya antarnegara, dan menyimpan kurs pasar untuk tujuan sebenarnya: memodelkan arus kas lintas batas yang nyata. Mencampuradukkan keduanya adalah salah satu kesalahan metodologis paling umum dalam HTA multinasional, kerana bagi yang belum membaca panduannya keduanya tampak seperti "satu kurs", dan lembar kerja tidak akan mencegah Anda berbuat salah.

## Matematika

```
icer_dalam_mata_uang_lokal = konversi(icer_dalam_mata_uang_sumber, faktor_konversi)

faktor_konversi seharusnya:
  faktor konversi PPP    — untuk membandingkan nilai ekonomi riil sumber daya
                           antarnegara (rekomendasi ISPOR untuk CEA multinasional)
  kurs pasar             — hanya untuk pembayaran tunai lintas batas yang nyata

adopsi jika icer_dalam_mata_uang_lokal < ambang_lokal
```

Aturan keputusannya sendiri adalah [aturan ICER](../ambang-batas-kesediaan-membayar/) biasa — `adopsi jika ICER < λ` — pertanyaan metodologis topik ini adalah *faktor konversi mana* yang menghasilkan `icer_dalam_mata_uang_lokal` tempat aturan itu diterapkan.

## Contoh yang diselesaikan

Sebuah ubat memiliki ICER dari uji coba di Amerika Serikat sebesar $45.000/QALY. Sebuah negara pengimpor hipotetis telah menetapkan ambang gabungannya sendiri sebesar £34.000/QALY (angka hipotetis khusus negara hanya untuk contoh ini — ambang riil bervariasi menurut negara dan berubah seiring waktu, dan harus selalu mencantumkan sumber dan tanggal).

**Dengan faktor konversi PPP 0,72** (angka ilustratif hanya untuk contoh ini): $45.000 × 0,72 = £32.400/QALY. £32.400 < £34.000 → **adopsi**.

**Dengan kurs pasar 0,79** (angka ilustratif): $45.000 × 0,79 = £35.550/QALY. £35.550 > £34.000 → **tolak**.

ICER $45.000/QALY yang sama memberi keputusan adopsi saat dikonversi dengan PPP dan keputusan tolak saat dikonversi dengan kurs pasar. Ini ilustrasi konkret mengapa panduan ISPOR menganggap pilihan faktor konversi bermakna secara metodologis — bukan detail pembulatan, dan bukan sesuatu yang dibiarkan implisit dalam rumus lembar kerja yang tak ditinjau siapa pun.

## Hubungan dengan rekayasa perisian

Ini adalah cerminan dalam ekonomi kesihatan dari masalah rekayasa yang sudah dikenal: kebenaran penetapan harga multi-mata uang i18n/l10n dalam perisian komersial, di mana halaman harga SaaS tidak boleh diam-diam membandingkan jumlah `$` dengan harga `£`. Jaminan kadar tipe yang diberikan tipe `Money` yang dirancang baik — metode pembandingan yang menolak membandingkan mata uang yang tidak cocok dan memaksa langkah konversi eksplisit terlebih dahulu — adalah padanan langsung dalam rekayasa perisian dari poin metodologis ekonomi kesihatan di sini: jangan bandingkan angka yang belum dikonversi lintas mata uang, dan jangan biarkan langkah konversi implisit atau tak terdokumentasi.

## Jebakan

- **Diam-diam membandingkan jumlah dalam mata uang berbeda**: pekerjaan HTA ad hoc di lembar kerja yang mengurangi atau membandingkan angka dolar dengan angka pound tanpa mengonversi lebih dulu — jenis bug yang ditangkap tipe `Money` yang sadar mata uang secara struktural, bukan dibiarkan menjadi galat senyap.
- **Mencampuradukkan kurs pasar dengan PPP**: kesalahan metodologis paling umum dalam HTA multinasional menurut panduan ISPOR — kedua angka itu bisa sangat berbeda dan menjawab pertanyaan berbeda (nilai ekonomi riil versus arus kas nyata).
- **Tidak mencantumkan tanggal kurs atau indeks PPP yang dipakai**: keduanya berubah seiring waktu, sehingga setiap faktor konversi yang dikutip harus bertanggal sebagaimana repositori ini memberi tanggal pada angka rujukan lainnya (harga karbon Green Book, nilai kematian yang dicegah, dan sebagainya).

## Sumber

- Willke RJ, Glick HA, Polsky D, Schulman K. "Estimating country-specific cost-effectiveness from multinational clinical trials." *Health Economics*. 1998;7(6):481-93.
- OECD, Purchasing Power Parities (PPP) data. <https://www.oecd.org/en/data/indicators/purchasing-power-parities-ppp.html>
