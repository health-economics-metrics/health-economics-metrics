# WSJF dan CD3

CD3 (Kos Kelewatan Dibahagi Tempoh) dan WSJF (Kerja Terpendek Berpemberat Dahulu) ialah peraturan pengutamaan yang menjadualkan kerja mengikut **ketumpatan nilai**: berapa banyak kos kelewatan dihapuskan bagi setiap unit kapasiti terhad yang digunakan. Di bawah kapasiti dikongsi dan tetap, CD3-tertinggi-dahulu ialah urutan optimum secara matematik untuk meminimumkan jumlah kos kelewatan.

## Mengapa ia penting

Setiap tunggakan ialah masalah catuan: banyak item bernilai, satu saluran paip. Ekonomi kesihatan menyelesaikan masalah sama untuk bajet kesihatan dengan jadual liga kos-keberkesanan — pangkatkan intervensi mengikut kesihatan diperoleh bagi setiap paun, biayai menuruni senarai sehingga bajet habis. CD3 ialah logik sama untuk kapasiti penyampaian: manfaat bagi setiap unit *sumber terkekang*, dibiayai mengikut pangkat. Mendapat penjujukan betul ialah wang percuma — kerja sama, kapasiti sama, kos kelewatan keseluruhan lebih rendah.

## Matematiknya

```
CD3  = Kos Kelewatan (£/minggu) / Tempoh (minggu)      — unit sebenar (Black Swan Farming)

WSJF = (nilai pengguna-perniagaan + kritikal masa + pengurangan risiko/pembolehan
        peluang) / saiz kerja                          — proksi skala relatif SAFe,
                                                        skor Fibonacci terubah suai
```

CD3 dengan mata wang sebenar ([kos kelewatan](../kos-kelewatan/)) lebih kuat secara ketat daripada mata tanpa unit WSJF — WSJF kepada CD3 ialah seperti pemarkahan pelbagai kriteria kepada [analisis kos-utiliti](../analisis-kos-utiliti/) penuh: boleh digunakan apabila monetisasi tidak praktikal, boleh dipermainkan apabila skor tiada sauh.

## Contoh penyelesaian

Tiga ciri, satu pasukan:

```
Ciri      CoD (£/mgu)  Tempoh     CD3
A         30,000       10 mgu     3,000
B         12,000       2 mgu      6,000
C         5,000        1 mgu      5,000
```

Susunan CD3: B, C, A. Bandingkan jumlah kos kelewatan dengan "CoD terbesar dahulu" (A, B, C):

```
Susunan CD3 (B,C,A): A menunggu 3 mgu, C menunggu 2 → 30k×3 + 5k×2  = £100k kos kelewatan
Susunan CoD (A,B,C): B menunggu 10, C menunggu 12    → 12k×10 + 5k×12 = £180k
```

Ciri sama, pasukan sama — penjujukan sahaja menjimatkan £80,000. Intuisinya: item kecil, mendesak pergi dahulu kerana ia melepaskan kos kelewatannya dengan murah; item besar rugi sedikit dengan menunggu seketika.

## Kaitan dengan kejuruteraan perisian

Bagi portfolio perisian penjagaan kesihatan, nyatakan CoD dalam unit yang diajar repositori ini: QALY/minggu × ambang + £/minggu operasi, dan tunggakan menjadi setanding terus dengan cara sistem kesihatan memangkatkan segala yang lain dibelinya. Dua nota amalan: (1) tempoh bermakna *masa kalendar menduduki kekangan*, bukan usaha — item berlalu-2-minggu yang memerlukan 2 hari pasukan kesesakan lebih murah daripada yang dilihat (lihat [pengoptimuman sumber hiliran](../pengoptimuman-sumber-hiliran/)); (2) hospital menjalankan peraturan sama secara tersirat apabila menyusun senarai teater mengikut daya pemprosesan berpemberat-keperluan — kategori pengutamaan klinikal ialah CD3 berpemberat-keterukan (lihat [kekurangan QALY dan pengubah suai keterukan](../kekurangan-qaly-dan-pengubah-suai-keterukan/)).

## Perangkap

- **Teater skor WSJF**: perdebatan Fibonacci tanpa unit menumpu kepada sesiapa yang berhujah paling lantang; sauhkan sekurang-kurangnya item teratas tunggakan dalam CoD sebenar.
- **Permainan tempoh**: memecahkan item untuk mengembungkan pangkat CD3 — sah apabila pecahan menyampaikan nilai secara bebas, penipuan apabila tidak.
- **Mengabaikan profil kecemasan**: CoD berbentuk tarikh akhir (tarikh kawal selia) memecahkan andaian kadar mantap; jadualkan yang itu mengikut kebolehlaksanaan tarikh, kemudian CD3 selebihnya.
- **Pusingan semula pangkat**: CD3 untuk keputusan penjujukan pada masa komitmen, bukan untuk menyusun semula kerja dalam-penerbangan setiap hari (lihat [metrik aliran](../metrik-aliran/) tentang WIP).

## Sumber

- Black Swan Farming, CD3 and WSJF. <https://blackswanfarming.com/wsjf-weighted-shortest-job-first/>
- SAFe, WSJF. <https://framework.scaledagile.com/wsjf>
- Reinertsen DG, *The Principles of Product Development Flow*.
