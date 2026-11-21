# Bina lwn Beli

Bina-lwn-beli ialah perbandingan berstruktur antara pembangunan khas dengan perolehan komersial, berdasarkan [TCO](../jumlah-kos-pemilikan/) terdiskaun, masa penyampaian dan risiko. Andaian awal empirik berat sebelah: **kos binaan sebenar lazimnya melebihi unjuran sebanyak 30–40%**, penyelesaian yang dibeli digunakan 40–60% lebih pantas, dan penyelidikan GenAI MIT 2025 mendapati alat AI yang dibeli berjaya ~67% masa manakala binaan dalaman berjaya kira-kira satu pertiga sekerap itu.

## Mengapa ia penting

Sistem kesihatan menghadapi keputusan ini secara berterusan ("buat lwn komisen" dalam bahasa NHS), dan organisasi kejuruteraan secara sistematik tersilap ke arah membina — kerana pembina menganggar binaan, bukan [TCO](../jumlah-kos-pemilikan/), dan kerana membina lebih menyeronokkan. Kerangka ekonomi memaksa perbandingan jujur: kedua-dua pilihan dihargai atas ufuk sama, kedua-duanya dilaras risiko, dan *perbezaan masa dihargai sebagai [kos kelewatan](../kos-kelewatan/)* — sebutan yang paling kerap menentukan jawapan dan paling kerap ditinggalkan.

## Matematiknya

```
Bandingkan atas ufuk 3–5 tahun yang sama, didiskaun:

NPV_pilihan = PV(manfaat, dianjak mengikut masa-ke-nilai) − PV(TCO)

Pelarasan risiko (corak "bias optimisme" Green Book):
  kos binaan × 1.3–1.4        (andaian awal lebihan)
  masa-ke-nilai binaan + 40–60% (andaian awal kelewatan penggunaan)
  beli: tambah semakan realiti integrasi dan kos keluar sebagai ganti

Pemacu keputusan, mengikut susunan lazim ia menentukan:
  1. pembezaan — adakah keupayaan ini produk anda, atau paip?
  2. masa-ke-nilai × CoD
  3. TCO terlaras risiko
```

## Contoh penyelesaian

Sebuah trust memerlukan sistem e-persetujuan. Beli: SaaS £150k/tahun, aktif dalam 3 bulan. Bina: dianggar £600k + £120k/tahun penyelenggaraan, aktif dalam 12 bulan.

```
Binaan terlaras risiko: 600k × 1.35 = £810k; masa-ke-nilai ≈ 18 bulan
TCO 5 tahun:  beli = 150k × 5 = £750k
              bina = 810k + 120k × 5 = £1,410k
Sebutan kelewatan: pendigitalan persetujuan menjimatkan £25k/bulan; binaan tiba 15 bulan
            lewat → CoD = 15 × 25k = £375k

Perbandingan berkesan: £750k lwn £1,785k — beli menang sekitar £1J, dan sebutan
tunggal terbesar selepas binaan itu sendiri ialah kos kelewatan yang tiada siapa harga.
```

Bina kekal betul apabila keupayaan itu membezakan (algoritma teras produk anda), apabila tiada vendor memenuhi kekangan keras (keselamatan klinikal, kediaman data), atau apabila risiko penguncian vendor teruk dan dihargai.

## Kaitan dengan kejuruteraan perisian

Disiplin ekonomi kesihatan yang boleh dipindahkan ada tiga: **pelarasan risiko berasaskan andaian awal** (kenaikan lebihan 30–40% ialah bias optimisme Green Book versi perisian — gunakan secara mekanikal, hujahkan pengecualian dan bukan bermula daripadanya); **kejujuran pembanding** (alternatif kepada membina bukan "tiada apa-apa," tetapi pembelian terbaik yang ada — lihat [kos peluang](../kos-peluang/)); dan **ujian kesetaraan sebelum perbandingan kos** (jika beli dan bina benar-benar memenuhi spesifikasi sama, ini [analisis pengurangan kos](../analisis-pengurangan-kos/) dan yang murah menang; jika tidak, perbezaan hasil mesti dinilai, bukan ditegaskan).

## Perangkap

- **Membandingkan harga senarai vendor dengan anggaran binaan tanpa laras risiko** — dua kali pujian ke arah bina.
- **Buruh dalaman berharga sifar** ("pasukan sudah ada di sini").
- **Penguncian tidak berharga dalam kedua-dua arah**: kos keluar vendor, tetapi juga faktor-bas binaan dan tempoh penyelenggaraan.
- **Binaan didorong identiti**: "ini teras kepada kami" dituntut untuk paip — uji pembezaan dengan sama ada pelanggan akan perasan.

## Sumber

- Build-vs-buy TCO analyses. <https://neontri.com/blog/build-vs-buy-software/>
- MIT GenAI divide findings (buy-vs-build success rates). <https://blueflame.ai/blog/achieving-ai-roi-key-findings-from-mits-genai-report>
- HM Treasury Green Book (optimism bias). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
