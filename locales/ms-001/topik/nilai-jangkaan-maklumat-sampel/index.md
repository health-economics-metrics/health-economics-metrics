# Nilai Jangkaan Maklumat Sampel (EVSI)

EVSI ialah nilai *kajian tertentu yang dicadangkan* — reka bentuk tertentu, saiz sampel tertentu — sebelum ia dijalankan, berbanding [EVPI](../nilai-jangkaan-maklumat-sempurna/), yang menghargai penghapusan semua ketidakpastian secara total. EVSI menjawab soalan yang sebenarnya dihadapi pembiaya penyelidikan: "adakah percubaan *ini*, pada saiz *ini*, berbaloi dengan kosnya?"

## Mengapa ia penting

EVPI memberitahu anda siling bagi apa jua penyelidikan yang mungkin bernilai; ia tidak pernah memberitahu sama ada percubaan di hadapan anda melepasi ambang. Pembiaya penyelidikan kebangsaan yang memilih antara projek perintis 50 pesakit dan percubaan muktamad 500 pesakit perlu tahu berapa nilai *setiap reka bentuk khusus*, bukan sekadar nilai serba-tahu. EVSI membekalkan nombor itu, dan kerana ia berskala dengan saiz sampel, ia membolehkan pembiaya mencari saiz sampel yang memaksimumkan manfaat bersih jangkaan dan bukan meneka.

Inilah juga sebab EVSI sentiasa kurang daripada atau sama dengan EVPI: sampel terhingga hanya boleh menyelesaikan ketidakpastian sebahagian, dan kajian yang kelihatan bernilai lebih daripada maklumat sempurna ialah tanda pengiraan salah, bukan keputusan sebenar.

## Matematiknya

```
Umum:
EVSI(n) = E_data[ max_d E_θ|data[NB(d,θ)] ]  −  max_d E_θ[NB(d,θ)]
  (jangkaan bersarang: luar atas keputusan kajian yang mungkin, dalam atas
  kepercayaan posterior tentang θ selepas melihat keputusan itu — biasanya
  dianggar melalui Monte Carlo bersarang / pengemaskinian Bayesian atas
  cabutan analisis kepekaan probabilistik)

Anggaran normal bentuk tertutup (satu parameter tidak pasti, model
normal-normal konjugat — jalan pintas piawai, tidak tepat untuk setiap model):
EVSI(n) = EVPI × n / (n + n0)

n  = saiz sampel kajian yang dicadangkan
n0 = "saiz sampel setara-prior" — saiz sampel khayalan yang akan membawa
     maklumat sama seperti prior semasa, diperoleh daripada
     nisbah varians data kepada varians prior
ENBS(n) = EVSI(n) − Kos(n)
EVSI populasi = EVSI setiap keputusan × keputusan terjejas
```

Bentuk umum ialah jangkaan bersarang kerana keputusan masa depan kajian itu sendiri tidak pasti: anda mesti purata atas setiap set data yang boleh dihasilkan kajian, dan bagi setiap satu kira semula keputusan terbaik berdasarkan kepercayaan yang dikemas kini (posterior). Anggaran normal bentuk tertutup menukar kos pengiraan itu dengan satu nisbah, sah apabila parameter tidak pasti dan data (kira-kira) bertaburan normal dan konjugat — kemudahan, bukan hukum sejagat. Monte Carlo bersarang penuh ialah kaedah serba guna apabila andaian itu tidak terpakai. Lihat [analisis kepekaan probabilistik](../analisis-kepekaan-probabilistik/) untuk cabutan PSA yang biasanya dijadikan asas anggaran EVSI.

## Contoh penyelesaian

Berdasarkan contoh penyelesaian [EVPI](../nilai-jangkaan-maklumat-sempurna/) — melancarkan pembantu dokumentasi AI kepada 5,000 klinisian, di mana EVPI didapati £1.2J — nyatakan EVPI sama di sini dalam paun penuh: **EVPI = £1,200,000**.

Kajian perintis 50 klinisian dicadangkan. Daripada nisbah varians kepercayaan prior kepada ketepatan ukuran perintis, saiz sampel setara-prior ialah `n0 = 75`:

```
EVSI(50) = 1,200,000 × 50 / (50 + 75)
         = 1,200,000 × 50 / 125
         = 1,200,000 × 0.4
         = £480,000
```

Perintis berharga £120,000:

```
ENBS = EVSI − Kos = 480,000 − 120,000 = £360,000
```

ENBS positif jelas: biayai perintis. Jika keputusan perolehan sama berulang merentas 3 trust serantau yang serupa, nilai perintis berskala:

```
EVSI populasi = 480,000 × 3 = £1,440,000
```

## Kaitan dengan kejuruteraan perisian

EVSI ialah ekonomi memilih *seberapa besar* projek perintis atau ujian A/B patut, bukan sekadar sama ada menjalankannya:

- **Saiz-sampel-sebagai-keputusan-pelaburan.** Beta 50 pengguna dan pelancaran berperingkat 5,000 pengguna ialah "kajian" berbeza dengan EVSI dan kos berbeza — EVSI membolehkan anda membandingkannya atas asas sama dan bukan lalai kepada "lebih banyak data sentiasa lebih baik."
- **ENBS, bukan EVSI sahaja, ujian pentauliahan.** Kajian dengan EVSI tinggi tetapi kos yang memakan kebanyakannya ialah cadangan lemah; peraturan keputusan ialah manfaat bersih jangkaan persampelan, sebagaimana kes perniagaan menolak manfaat daripada kos dan bukan melaporkan manfaat sahaja.
- **Pulangan berkurangan adalah jelas.** Kerana EVSI(n) naik dengan `n/(n+n0)`, menggandakan saiz perintis tidak pernah menggandakan nilainya — versi formal naluri kejuruteraan bahawa eksperimen lebih besar mempunyai nilai maklumat marginal yang berkurangan.

## Perangkap

- **Menggunakan anggaran normal di luar andaiannya.** Ia hanya terpakai bagi ketidakpastian satu-parameter yang hampir konjugat; model keputusan benar-benar tak linear atau berbilang parameter memerlukan Monte Carlo bersarang penuh, bukan jalan pintas ini.
- **Membandingkan EVSI dengan kos tunai sahaja.** EVSI mesti ditimbang terhadap kos *penuh* kajian, termasuk kos kelewatan keputusannya sendiri — lihat [kos kelewatan](../kos-kelewatan/) — bukan sekadar invois kajian.
- **Menganggap EVSI > EVPI sebagai dapatan sebenar.** EVSI tidak pernah boleh melebihi EVPI secara pembinaan; pengiraan yang menghasilkan ini ialah pepijat pemodelan, bukan penemuan.

## Sumber

- Ades AE, Lu G, Claxton K. "Expected value of sample information calculations in medical decision modeling." Medical Decision Making 2004;24(2):207-27.
- Willan AR, Pinto EM. "The value of information and optimal clinical trial design." Statistics in Medicine 2005;24(12):1791-806.
- Strong M, Oakley JE. "When is a model-based value of information analysis feasible?" Medical Decision Making 2014.
