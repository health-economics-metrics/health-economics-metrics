# Analisis Kos-Manfaat (CBA)

CBA menilai kedua-dua kos *dan* hasil dalam wang. Ia satu-satunya jenis analisis yang dapat menjawab "adakah ini patut dilakukan langsung?" — bukan sekadar "pilihan mana terbaik?" — kerana manfaat yang dimonetisasi boleh dibandingkan terus dengan kos.

## Mengapa ia penting

CBA ialah piawai **Green Book** HM Treasury UK untuk semua penilaian perbelanjaan awam, termasuk kesihatan apabila hasil boleh dimonetisasi. Di mana [CEA](../analisis-kos-keberkesanan/)/[CUA](../analisis-kos-utiliti/) berhenti pada "kos bagi setiap unit kesihatan," CBA menghargai kesihatan itu sendiri (QALY × nilai ambang) dan segala yang lain — masa, perjalanan, karbon — dan melaporkan satu angka bersih. Setiap kes perniagaan digital NHS penuh mengandungi kes ekonomi berbentuk CBA.

## Matematiknya

```
NPV (nilai sosial kini bersih) = Σ_t [ (Manfaat_t − Kos_t) / (1 + r)^t ]
BCR (nisbah manfaat-kos)       = PV(manfaat) / PV(kos)

Terima jika NPV > 0 (setara BCR > 1); pangkatkan mengikut NPV, bukan BCR.
r = 3.5% (kadar keutamaan masa sosial Green Book)
```

Kesan kesihatan boleh masuk sebagai dimonetisasi iaitu QALY × λ (lihat [ambang kesanggupan membayar](../ambang-kesanggupan-membayar/)). Green Book juga mewajibkan **pelarasan bias optimisme** — menaikkan anggaran kos dan memotong manfaat dengan peratusan berasaskan bukti, kerana penilaian secara sistematik terlalu cerah.

## Contoh penyelesaian

Sistem e-rujukan, ufuk 5 tahun, diskaun 3.5%:

```
Kos:      binaan £1.2J (tahun 0), operasi £300k/thn (tahun 1–5)
Manfaat:  penjimatan pentadbiran £250k/thn, diagnostik bertindih dielakkan £280k/thn,
          masa pesakit dijimatkan 40,000 jam/thn × £15 = £600k/thn → £1,130k/thn

PV kos     = 1,200k + 300k × 4.515 (faktor anuiti) = £2,555k
PV manfaat = 1,130k × 4.515                         = £5,102k

NPV = 5,102 − 2,555 = +£2,547k     BCR = 2.0
```

Gunakan bias optimisme Green Book (katakan +40% pada kos binaan, −20% pada manfaat): PV kos ≈ £3,035k, PV manfaat ≈ £4,082k, NPV ≈ **+£1,047k** — masih positif, itulah tujuan pelarasan: kes patut bertahan terhadap optimismenya sendiri.

## Kaitan dengan kejuruteraan perisian

Kes perniagaan kejuruteraan ialah CBA tidak formal. Peningkatan Green Book yang patut dicuri:

- **Bias optimisme sebagai kenaikan piawai** — jurutera memperkecilkan kos migrasi sama konsisten seperti kementerian memperkecilkan kos infrastruktur; gunakan kenaikan yang dinyatakan dan bukan berpura-pura kali ini berbeza.
- **Monetisasi manfaat dominan dengan jujur atau tidak langsung** — masa pesakit/pengguna dimonetisasi pada kadar yang boleh dipertahankan; "nilai jenama" tidak.
- **NPV memberi pangkat, BCR tidak**: projek kecil dengan BCR 5 boleh kurang penting daripada projek besar dengan BCR 1.6.

## Perangkap

- **Memonetisasi yang tidak boleh dimonetisasi** untuk mengembungkan manfaat (moral, "penyelarasan strategik") — kekalkan secara kualitatif, mengikut [analisis kos-akibat](../analisis-kos-akibat/).
- **Mengira pindahan sebagai manfaat**: wang berpindah antara badan awam menjadi sifar pada [perspektif](../perspektif-analisis/) masyarakat.
- **Tiada kontrafaktual**: manfaat diukur berbanding pilihan buat-minimum, bukan berbanding sifar.

## Sumber

- HM Treasury, The Green Book. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
- Green Book discounting guidance. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-discounting>
