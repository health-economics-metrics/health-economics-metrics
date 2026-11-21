# Nilai Nyawa Statistik (VSL)

Nilai nyawa statistik (VSL) — dipanggil "nilai kematian dicegah" (VPF) dalam penggunaan UK — ialah jumlah yang *populasi* secara kolektif sanggup bayar untuk mengurangkan risiko satu kematian statistik, diperoleh daripada kajian tukar ganti upah-risiko (berapa gaji tambahan yang dituntut pekerja untuk kerja lebih berisiko) dan tinjauan keutamaan-dinyatakan. Ia bukan harga nyawa mana-mana individu yang dikenal pasti; ia binaan risiko-populasi, dan jurutera perisian yang membina sistem pengurang risiko — algoritma triaj, penghantaran ambulans, pemantauan keselamatan — perlu tahu ia datang daripada tradisi teori berbeza daripada [ambang kesanggupan membayar](../ambang-kesanggupan-membayar/).

## Mengapa ia penting

VSL/VPF ialah alat piawai untuk memonetisasi pengurangan risiko kematian dalam analisis kos-manfaat kawal selia: keselamatan pengangkutan, kawal selia alam sekitar dan sesetengah intervensi kesihatan awam semuanya menjalankan kes perniagaan mereka melaluinya. Green Book HM Treasury menerbitkan angka VPF yang diperoleh daripada bukti pasaran buruh dan tinjauan UK, dan Jabatan Pengangkutan menggunakannya terus dalam penilaian keselamatan jalan raya. Ini tradisi penilaian yang benar-benar berbeza daripada metodologi QALY × ambang-kesanggupan-membayar: pendekatan ambang menilai keuntungan kesihatan terhadap apa yang *bajet* kesihatan kini hasilkan di margin, manakala VSL/VPF menilai pengurangan risiko terhadap apa yang didedahkan oleh orang dalam pasaran buruh atau tinjauan bahawa mereka sanggup bayar. Kedua-dua kerangka tidak selalu boleh didamaikan, dan menggunakan kedua-duanya dalam kes sama tanpa mengakuinya ialah kesilapan analitik yang lazim.

## Matematiknya

```
Kematian dielakkan = populasi × pengurangan_risiko_setiap_orang
  (pengurangan_risiko_setiap_orang ialah kebarangkalian, cth. 0.000001 = pengurangan
   1-dalam-sejuta dalam risiko kematian tahunan)

Manfaat kematian dimonetisasi = kematian_dielakkan × nilai_kematian_dicegah
```

## Contoh penyelesaian

Rantau 800,000 orang mendapat manfaat daripada intervensi penghantaran/triaj digital keselamatan jalan raya yang mengurangkan risiko kematian tahunan setiap orang sebanyak 1 dalam sejuta (0.000001):

```
Kematian dielakkan = 800,000 × 0.000001 = 0.8
```

Menggunakan Nilai Kematian Dicegah UK, £2,180,000 (angka HM Treasury/DfT, harga 2023/24 — Green Book mengemas kini ini setiap tahun, sahkan semula sebelum memetik dalam analisis sebenar):

```
Manfaat kematian dimonetisasi = 0.8 × £2,180,000 = £1,744,000/tahun
```

Kurang sedikit daripada £1.75 juta setahun manfaat kematian dimonetisasi, daripada pengurangan risiko yang kebanyakan populasi terjejas tidak akan perasan secara individu.

## Kaitan dengan kejuruteraan perisian

Pasukan perisian kritikal-keselamatan — perisian tegar peranti perubatan, perisian kenderaan autonomi, sistem kawalan industri — menghadapi masalah penetapan harga tepat ini apabila membina kes kos-manfaat untuk pelaburan keselamatan: bagaimana anda menghargai "mencegah satu kegagalan bencana" apabila kegagalan itu jarang, teruk dan tersebar merentas populasi pengguna yang besar? VSL/VPF ialah duluan dunia sebenar yang didokumenkan secara awam sedekad lamanya untuk meletakkan nombor pada pengurangan risiko peringkat-populasi yang jarang dan teruk — bentuk hujah sama seperti menghargai pelaburan SRE terhadap gangguan bencana jarang, cuma dengan hasil kematian dan bukan henti masa.

## Perangkap

- **Menganggap VSL sebagai "harga nyawa yang dikenal pasti"**: ia bukan. VSL/VPF ialah binaan statistik populasi yang diperoleh daripada tukar ganti pengurangan-risiko merentas ramai orang, bukan penilaian nyawa atau kematian mana-mana orang tertentu.
- **Pengiraan berganda terhadap pengiraan manfaat monetari bersih berasaskan QALY**: menggunakan angka VSL/VPF dan pengiraan QALY × ambang berasingan dalam kes sama, tanpa mendamaikannya, senyap-senyap mengira berganda nilai kematian dielakkan yang sama. Pilih satu kerangka bagi sesuatu kes.
- **Memindahkan anggaran VSL merentas konteks tanpa pelarasan**: VSL daripada pasaran buruh satu negara, atau daripada data upah-risiko umur bekerja, diterapkan tanpa laras pada konteks pendapatan berbeza atau populasi berbeza (kanak-kanak, pesara) ialah isu metodologi yang sudah lama dan benar-benar dipertikaikan — bukan yang diselesaikan.

## Sumber

- HM Treasury, The Green Book: Central Government Guidance on Appraisal and Evaluation — Value of a Prevented Fatality supplementary guidance (2023/24 prices; Green Book values are updated annually). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- US EPA, "Mortality Risk Valuation" (for the US VSL tradition, cited for contrast with the UK VPF figure above). <https://www.epa.gov/environmental-economics/mortality-risk-valuation>
- Viscusi WK, Aldy JE. "The Value of a Statistical Life: A Critical Review of Market Estimates Throughout the World." J Risk Uncertain. 2003;27(1):5-76.
