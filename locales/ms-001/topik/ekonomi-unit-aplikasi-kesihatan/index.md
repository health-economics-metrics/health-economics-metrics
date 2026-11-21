# Ekonomi Unit Aplikasi Kesihatan

Aritmetik komersial produk kesihatan pengguna: kos perolehan pelanggan (CAC), nilai seumur hidup (LTV), purata hasil setiap pengguna (ARPU), harga per-ahli-sebulan (PMPM), dan perbezaan pasaran majikan antara **ROI dan VOI** (nilai atas pelaburan).

## Mengapa ia penting

Aplikasi kesihatan menghadapi himpitan struktur: perolehan mahal (tuntutan terkawal selia, halangan kepercayaan, kos pematuhan) manakala pengekalan paling teruk dalam mana-mana vertikal perisian (~90% pengabaian dalam 30 hari — lihat [pengekalan dan churn](../pengekalan-dan-churn/)). Ujian daya maju piawai — **LTV:CAC ≥ 3:1** — justeru sangat sukar dalam kesihatan pengguna, sebab itu industri berhijrah ke model B2B2C: majikan, penanggung insurans dan sistem kesihatan membayar PMPM untuk populasi, di mana pembeli bukan individu yang churn.

## Matematiknya

```
CAC   = perbelanjaan jualan + pemasaran / pelanggan berbayar baharu
ARPU  = hasil / pengguna aktif (setiap tempoh)
LTV   = ARPU × purata hayat  =  ARPU / kadar churn
Daya maju: LTV : CAC ≥ 3, tempoh bayar balik ≤ 12–18 bulan

CAC berkesan setiap pengguna dikekalkan = CAC / pengekalan(t)
  — pada pengekalan D30 4%, £5 setiap pemasangan = £125 bagi setiap pengguna dikekalkan 30 hari

Hasil PMPM = kadar × ahli didaftarkan × bulan
  margin vendor = PMPM − kos-untuk-layani setiap ahli sebulan
  — penglibatan menyongsangkan tanda: di bawah langganan B2C penglibatan memacu
    hasil; di bawah PMPM, ahli terlibat BERKOS lebih untuk dilayani
    daripada yang dorman, dan kontrak hasil menyongsangkannya semula
```

## Contoh penyelesaian

Aplikasi tidur B2C: £6.99/bulan, churn bulanan 18%, CAC campuran £38.

```
LTV = 6.99 / 0.18 ≈ £38.8 → LTV:CAC ≈ 1.0 — tidak berdaya maju

Beralih ke PMPM majikan: £1.20 PMPM × 40,000 nyawa dilindungi = £48k/bulan
Kos-untuk-layani: infrastruktur £0.15 + sokongan £0.10 + kandungan £0.05
  setiap ahli ≈ £0.30 → margin ~75%, kitaran jualan panjang tetapi churn
  ialah peringkat kontrak (tahunan), bukan peringkat pengguna (harian)

Soalan majikan mengubah metrik: ROI wang-keras (tuntutan dikurangkan,
ketidakhadiran) jarang dapat ditunjukkan bagi produk kesejahteraan —
jawapan industri ialah VOI: produktiviti, tarikan pengambilan pekerja,
penglibatan — jujur hanya apabila dilabel VOI, bukan dipakaikan
sebagai ROI (lihat return-on-investment.md dan social-return-on-investment.md).
```

## Kaitan dengan kejuruteraan perisian

Pilihan kejuruteraan menetapkan kedua-dua sisi nisbah: **kos-untuk-layani** ialah seni bina ([ekonomi unit awan](../ekonomi-unit-awan/) — margin PMPM hidup atau mati pada kos infrastruktur setiap ahli), dan **LTV** ialah kejuruteraan pengekalan (setiap titik churn ialah hasil aritmetik — matematik QALY dokumen [pengekalan](../pengekalan-dan-churn/) mempunyai kembar hasil yang tepat). Bagi produk kesihatan khususnya, papan pemuka ekonomi unit patut membawa baris ketiga di sebelah LTV dan CAC: **nilai kesihatan bagi setiap pengguna diperoleh** (QALY berpemberat pengekalan × ambang) — kerana pasaran pembayar dan gaya DiGA semakin menetapkan harga atasnya, dan kerana produk yang ekonomi unit komersial dan klinikalnya berbeza (menguntungkan tetapi lembam kesihatan, atau berkesan tetapi tidak boleh dibiayai) perlu tahu masalah mana yang dihadapinya.

## Perangkap

- **LTV daripada churn kohort awal**: churn stabil menurun; tetapi juga bias survivor — penerima awal mengekalkan lebih baik daripada khalayak berskala. Gunakan data kohort matang.
- **CAC campuran merentas saluran**: CAC sosial berbayar dan CAC rujukan klinisian berbeza 10×, dengan profil pengekalan bertentangan — segmenkan atau tersesat.
- **PMPM tanpa had penggunaan**: ahli terlibat luar biasa boleh menyongsangkan margin; modelkan taburan, bukan min.
- **VOI dibentangkan sebagai ROI** kepada CFO — kegagalan kredibiliti yang industri kesejahteraan majikan habiskan sedekad untuk mendapatnya.

## Sumber

- Healthtech unit economics primers. <https://smart-it.io/blog/how-to-calculate-unit-economics-for-healthcare-startups/>
- PMPM pricing frameworks for digital health. <https://www.quintupleaim.com/blog/strategic-pricing-for-digital-health-startups-in-value-based-care-per-member-per-month-pmpm-frameworks>
