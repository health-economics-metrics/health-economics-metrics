# Kerangka Standar Bukti NICE (NICE Evidence Standards Framework, ESF)

ESF iku kerangka NICE sing nemtokake **sepira akeh bukti sing dibutuhake teknologi kesehatan digital, proporsional karo risikone**. Iku sing paling cedhak karo wangsulan resmi kanggo "apa sing kudu dibuktekake sadurunge NHS tuku aplikasi kita?"

## Kenapa Iki Penting

ESF (dirilis pisanan 2019, dianyari 2022 kanggo nyakup AI lan algoritma adaptif) nggolongake teknologi kesehatan digital dadi tingkat miturut fungsi klinis, kanthi standar bukti **kumulatif** — 21 standar ing 5 kelompok (faktor desain, nilai, kinerja/efektivitas, dampak ekonomi, deployment):

```
Tingkat A — layanan sistem, ora ana asil pasien langsung (contone, e-rostering)
            → standar dhasar: kredibilitas, pangayoman data, jaminan teknis
Tingkat B — ngandhani, pemantauan prasaja, komunikasi (contone, buku harian gejala)
            → + bukti manfaat pangguna, keandalan sing cocog
Tingkat C — ngobati, diagnosis, utawa aktif nuntun manajemen klinis
            → + bukti efektivitas komparatif kualitas dhuwur (idealé RCT)
              lan analisis ekonomi
```

Kanggo bukti ekonomi, [analisis biaya-akibat](../analisis-biaya-akibat/) bisa ditampa kanggo umume tingkat; [analisis biaya-utilitas](../analisis-biaya-utilitas/) diarep-arep ing risiko paling dhuwur. ESF nemtokake **biaya bukti kanggo mlebu pasarmu** — anggarake kaya biaya build liyane.

## Matematikane

Ora ana rumus — tabel keputusan. Petungan sing operatif iku komersial:

```
Investasi bukti sing dibutuhake = f(tingkat)
  Tingkat A: dokumentasi + jaminan ≈ £10k–50k
  Tingkat B: studi manfaat-pangguna observasional/komparatif ≈ £50k–250k
  Tingkat C: studi komparatif kelas-RCT + model ekonomi ≈ £250k–£2M+

Posisi klaim produkmu kanthi sengaja: ngaku "ndhukung keputusan klinis"
tinimbang "ngandhani pasien" mindhah sampeyan siji tingkat lan bisa 10× tagihan.
```

## Conto Petungan

Pembuat aplikasi pangeling-obat nimbang nambah fitur rekomendasi-penyesuaian-dosis.

- Minangka aplikasi pangeling: **Tingkat B** — studi kohort sing nuduhake perbaikan kepatuhan cukup.
- Kanthi rekomendasi dosis: **Tingkat C** — bukti efektivitas komparatif (kemungkinan RCT marang perawatan biasa) plus analisis ekonomi.

Yen RCT biayane £600k lan pendapatan inkremental fitur dosis £200k/taun, fitur kudu njaga nilai 3+ taun sadurunge biaya bukti impas — keputusan produk sing katon babar pisan beda sawise tingkat ESF diregani. Akeh tim ngirim produk Tingkat B lan ngatur klaim Tingkat C ing mburi pendanaan.

## Sambungan karo Rékayasa Piranti Lunak

ESF iku pola tata kelola paling bisa dialihake ing repositori iki: **syarat bukti bertingkat-risiko kanggo adopsi piranti**. Versi internal: pemformat kode butuh demo (Tingkat A); piranti produktivitas sing ngaku jam dihemat butuh pilot sing diukur (Tingkat B); gerbang AI sing otomatis mblokir deploy utawa otomatis nulis kode klinis butuh bukti kelas-uji-kontrol sadurunge peluncuran saorganisasi (Tingkat C). Bukti proporsional nyegah loro mode kegagalan — birokrasi nyekik piranti sepele, lan firasat ngirim sing konsekuensial. Deleng uga [jalur cepet DiGA](../jalur-cepet-diga-jerman/) kanggo pelengkap "adopsi sementara karo tenggat bukti."

## Jebakan

- **Salah-klasifikasi tingkat amarga angen-angen** — regulator lan pembeli nggolongake miturut apa sing *ditindakake* produk, dudu apa sing dikandhakake marketing.
- **Bukti dibangun sawise produk**: nambah RCT ing produk sing wis dikirim tanpa instrumentasi utawa equipoise iku alon lan asring ora mungkin.
- **Nyukupi ESF lan lali liyane**: ESF ana bareng DTAC (keslametan klinis, pangayoman data, interoperabilitas) lan, kanggo AI, izin regulasi — deleng [evaluasi regulasi AI](../evaluasi-regulasi-ai/).

## Sumber

- NICE Evidence Standards Framework (ECD7). <https://www.nice.org.uk/corporate/ecd7>
- ESF evidence standards tables. <https://www.nice.org.uk/corporate/ecd7/chapter/section-c-evidence-standards-tables>
