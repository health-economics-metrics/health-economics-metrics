# WSJF dan CD3

CD3 (Cost of Delay Divided by Duration) dan WSJF (Weighted Shortest Job First) adalah aturan prioritisasi yang menjadwalkan pekerjaan berdasarkan **kepadatan-nilai**: berapa banyak biaya-keterlambatan yang dihilangkan per unit kapasitas-langka yang dikonsumsi. Di bawah kapasitas bersama dan tetap, tertinggi-CD3-dulu adalah urutan yang secara-matematis optimal untuk meminimalkan total-biaya-keterlambatan.

## Mengapa Ini Penting

Setiap backlog adalah masalah penjatahan: banyak item-layak, satu pipeline. Ekonomi kesehatan memecahkan masalah yang sama untuk anggaran-kesehatan dengan tabel-liga efektivitas-biaya — rangking intervensi berdasarkan kesehatan-diperoleh per pound, danai daftarnya ke-bawah hingga anggaran habis. CD3 adalah logika identik untuk kapasitas-penyampaian: manfaat per unit dari *sumber-daya-yang-terkendala*, didanai berurutan-rangking. Membetulkan urutan adalah uang gratis — pekerjaan yang sama, kapasitas yang sama, lebih sedikit total-biaya-keterlambatan.

## Perhitungan

```
CD3  = Biaya Keterlambatan (£/minggu) / Durasi (minggu)      — unit nyata (Black Swan Farming)

WSJF = (nilai pengguna-bisnis + kritikalitas-waktu + pengurangan-risiko/
        pemungkinan-peluang) / ukuran-pekerjaan       — proksi skala-relatif SAFe,
                                                        skor Fibonacci-termodifikasi
```

CD3 dengan mata-uang genuine ([biaya keterlambatan](../biaya-keterlambatan/)) secara ketat lebih-kuat daripada poin-tanpa-unit WSJF — WSJF berhubungan dengan CD3 sebagaimana penilaian-multi-kriteria berhubungan dengan [analisis biaya-utilitas](../analisis-biaya-utilitas/) penuh: dapat-digunakan ketika moneterisasi tidak-praktis, dapat-dimanipulasi ketika skor tidak memiliki jangkar.

## Contoh yang Diselesaikan

Tiga fitur, satu tim:

```
Fitur    CoD (£/mgg)   Durasi     CD3
A        30.000        10 mgg     3.000
B        12.000        2 mgg      6.000
C        5.000         1 mgg      5.000
```

Urutan CD3: B, C, A. Bandingkan total-biaya-keterlambatan terhadap "CoD-terbesar-dulu" (A, B, C):

```
Urutan CD3  (B,C,A): A menunggu 3 mgg, C menunggu 2 → 30rb×3 + 5rb×2  = £100rb biaya keterlambatan
Urutan CoD  (A,B,C): B menunggu 10, C menunggu 12   → 12rb×10 + 5rb×12 = £180rb
```

Fitur yang sama, tim yang sama — pengurutan saja menghemat £80.000. Intuisinya: item kecil dan mendesak pergi dulu karena mereka melepaskan biaya-keterlambatan mereka dengan murah; item besar kehilangan sedikit dengan menunggu sebentar.

## Hubungan dengan Rekayasa Perangkat Lunak

Untuk portofolio perangkat-lunak-kesehatan, nyatakan CoD dalam unit yang diajarkan repositori ini: QALY/minggu × ambang + £/minggu operasional, dan backlog menjadi langsung dapat-dibandingkan dengan sisa apa yang dibeli sistem-kesehatan. Dua catatan praktis: (1) durasi berarti *waktu-kalender yang menempati kendala*, bukan usaha — item 2-minggu-berlalu yang membutuhkan 2 hari tim-hambatan lebih murah daripada kelihatannya (lihat [optimasi sumber-daya hilir](../optimasi-sumber-daya-hilir/)); (2) rumah sakit menjalankan aturan yang sama secara implisit ketika mereka mengurutkan daftar-teater berdasarkan throughput-berbobot-urgensi — kategori prioritisasi klinis adalah CD3 berbobot-keparahan (lihat [defisit QALY dan modifier keparahan](../defisit-qaly-dan-modifier-keparahan/)).

## Jebakan

- **Teater skor WSJF**: debat Fibonacci-tanpa-unit konvergen pada siapa-pun yang berargumen paling-keras; jangkarkan setidaknya item-teratas-backlog dalam CoD nyata.
- **Manipulasi durasi**: membagi item untuk menggembungkan rangking-CD3 — baik-baik-saja ketika pembagian menyampaikan nilai secara independen, curang ketika tidak.
- **Mengabaikan profil urgensi**: CoD berbentuk-tenggat (tanggal-regulasi) memecahkan asumsi-tingkat-tetap; jadwalkan mereka berdasarkan kelayakan-tanggal, lalu CD3 sisanya.
- **Kekacauan pengurutan-ulang**: CD3 untuk keputusan-pengurutan pada waktu-komitmen, bukan untuk pengaturan-ulang harian dari pekerjaan-dalam-penerbangan (lihat [metrik alur](../metrik-alur/) tentang WIP).

## Sumber

- Black Swan Farming, CD3 and WSJF. <https://blackswanfarming.com/wsjf-weighted-shortest-job-first/>
- SAFe, WSJF. <https://framework.scaledagile.com/wsjf>
- Reinertsen DG, *The Principles of Product Development Flow*.
