# Pendekatan Modal Manusia vs Metode Biaya Friksi

Ini dua metode yang bersaing untuk menilai produktivitas yang hilang akibat penyakit, disabilitas, atau kematian dalam studi biaya penyakit dan biaya-manfaat. Pendekatan modal manusia (HCA) menilai seluruh keluaran yang hilang selama seluruh durasi ketidakhadiran pada tarif upah; metode biaya friksi (FCM) hanya menilai periode yang lebih pendek yang benar-benar dibutuhkan pemberi kerja untuk memulihkan produksi. Pilihan di antara keduanya mengubah estimasi biaya tidak langsung dua kali lipat atau lebih.

## Mengapa ini penting

Biaya tidak langsung (produktivitas) adalah salah satu butir paling diperdebatkan dalam ekonomi kesihatan, justru kerana dua metode standar itu berbeda begitu tajam. HCA memperlakukan setiap hari ketidakhadiran sebagai hari keluaran yang benar-benar hilang bagi perekonomian, dinilai dengan upah penuh selama seluruh durasi — atau sisa masa kerja dalam kasus kematian atau disabilitas permanen. FCM berargumen bahwa dalam perekonomian dengan pengangguran dan kelonggaran pasar tenaga kerja, sebagian besar ketidakhadiran panjang tidak benar-benar mengurangi keluaran nasional, kerana pemberi kerja melatih pengganti atau mendistribusikan ulang pekerjaan; hanya "periode friksi" — waktu untuk memulihkan produksi ke kadar semula — yang merupakan kerugian nyata. Kerana itu FCM menghasilkan estimasi biaya tidak langsung yang secara sistematis lebih rendah dan lebih konservatif daripada HCA, dan keduanya bukan catatan kaki yang dapat dipertukarkan: keduanya adalah teori ekonomi berbeda tentang apa arti "produktivitas yang hilang". Itu pula sebabnya [kasus acuan NICE](../penilaian-teknologi-kesihatan/) secara bawaan mengecualikan biaya produktivitas dan, jika ada, melaporkannya sebagai analisis sensitivitas perspektif masyarakat tersendiri, alih-alih mencampurnya ke dalam ICER kasus acuan — lihat [perspektif analisis](../perspektif-analisis/).

## Matematika

```
Pendekatan modal manusia:
biaya_HCA = upah_harian × hari_hilang

Metode biaya friksi (disederhanakan, dibatasi periode friksi):
biaya_FCM = upah_harian × min(hari_hilang, hari_periode_friksi)

hari_periode_friksi = estimasi spesifik negara/sektor tentang waktu untuk
                      memulihkan produksi (secara historis ~85 hari dalam
                      panduan biaya iMTA Belanda; bervariasi menurut negara
                      dan dinilai ulang secara berkala)
```

Seluruh ketidaksepakatan antara kedua metode terletak pada `min()`: HCA tidak pernah membatasi `hari_hilang` sehingga biaya terus tumbuh selama ketidakhadiran, sedangkan FCM membatasi hari yang dihitung pada periode friksi, sepanjang apa pun ketidakhadiran sebenarnya.

## Contoh yang diselesaikan

Seorang karyawan tidak hadir `hari_hilang = 180` hari, dengan `upah_harian = £150`.

**Pendekatan modal manusia**:

```
biaya_HCA = 150 × 180 = £27,000
```

**Metode biaya friksi**, dengan `hari_periode_friksi = 85` (tolok ukur historis iMTA Belanda, menurut penilaian ulang berkala panduannya):

```
biaya_FCM = 150 × min(180, 85) = 150 × 85 = £12,750
```

£12.750 milik FCM kurang dari setengah £27.000 milik HCA untuk ketidakhadiran yang *sama* — pilihan metode saja sudah mengubah argumen biaya penyakit secara berarti, sebelum menyentuh asumsi lain apa pun.

## Hubungan dengan rekayasa perisian

Ini langsung terpetakan pada cara tim memperkirakan biaya kepergian seorang insinyur:

- **Perhitungan biaya perputaran gaya HCA**: menilai kerugian sebagai gaji penuh insinyur yang pergi selama seluruh waktu posisi kosong. Ini versi naif dari sebagian besar model biaya perputaran, dan melebih-lebihkan kerana alasan yang sama HCA melebih-lebihkan produktivitas yang hilang — mengasumsikan kapasitas yang kosong itu sepenuhnya produktif dan tidak ada hal lain yang mengisi kekosongan. Lihat [retensi tenaga kerja](../retensi-tenaga-kerja/), yang mengukur rantai rekrutmen/orientasi/pengisian lowongan yang diumpani metode ini.
- **Perhitungan biaya perputaran gaya FCM**: menilai kerugian hanya untuk waktu nyata yang dibutuhkan untuk menemukan dan mengorientasi pengganti — "periode friksi" dalam rekayasa. Ini angka yang lebih dapat dipertahankan untuk kasus bisnis, sebagaimana FCM adalah pilihan yang lebih konservatif dalam studi biaya penyakit.
- Disiplin yang mendasarinya sama dengan [biaya peluang](../biaya-peluang/): nilai sumber daya yang tergeser berdasarkan apa yang benar-benar hilang, bukan berdasarkan hasil kali durasi judul dan tarif.

## Jebakan

- **Mencampur HCA dan FCM dalam satu analisis, atau hanya melaporkan salah satunya tanpa mengungkapkan pilihan.** Data ketidakhadiran yang sama dapat menghasilkan biaya terlapor yang berbeda 2 kali lipat atau lebih menurut metode; pilihan itu harus disebut, bukan disembunyikan.
- **Memakai HCA dalam kasus perspektif masyarakat tanpa menandainya sebagai analisis sensitivitas.** Kasus acuan NICE secara eksplisit mengecualikan biaya produktivitas; estimasi HCA perspektif masyarakat termasuk dalam analisis skenario, bukan ICER utama.
- **Menerapkan salah satu metode pada kerja tak berbayar atau non-pasar (mis. perawatan) tanpa penyesuaian.** Keduanya memakai tarif upah sebagai pengganti nilai, yang tidak berpindah dengan bersih ke pekerjaan tanpa upah pasar.

## Sumber

- Koopmanschap MA, Rutten FFH, van Ineveld BM, van Roijen L. "The friction cost method for measuring indirect costs of disease." Journal of Health Economics 1995;14(2):171-89.
- Drummond MF, Sculpher MJ, Claxton K, Stoddart GL, Torrance GW. "Methods for the Economic Evaluation of Health Care Programmes." 4th ed. Oxford University Press — bab tentang biaya produktivitas.
- NICE health technology evaluations manual (PMG36) — perspektif kasus acuan dan panduan perspektif masyarakat opsional. <https://www.nice.org.uk/process/pmg36>
