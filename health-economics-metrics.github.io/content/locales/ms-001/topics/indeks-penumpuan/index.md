# Indeks Penumpuan

Indeks Penumpuan (Wagstaff, Paci, van Doorslaer, 1991) ialah ukuran statistik piawai bagi ketidaksamaan berkaitan sosioekonomi dalam pemboleh ubah kesihatan, berjulat dari -1 hingga 1. Negatif bermakna pemboleh ubah kesihatan tertumpu dalam kalangan yang kurang bernasib baik dari segi sosioekonomi, positif bermakna ia tertumpu dalam kalangan yang lebih berada, dan sifar bermakna tiada kecerunan sosioekonomi yang konsisten — ia menukar syak wasangka tentang pengagihan tidak sama kepada satu nombor yang boleh dibandingkan.

## Mengapa ia penting

Sesuatu program boleh kelihatan berkesan secara agregat namun menyampaikan manfaatnya hampir sepenuhnya kepada orang yang sudah lebih berada. Kebimbangan pengagihan sebegini tepat apa yang dijejak [capaian dan ekuiti](../capaian-dan-ekuiti/) secara deskriptif — capaian berstrata mengikut kuintil kedaifan, jurang ekuiti antara kumpulan atas dan bawah — tetapi jadual berstrata tidak dapat dimampatkan menjadi satu garis aliran, dan tidak mudah dibandingkan merentas dua intervensi yang sama sekali berbeza yang diukur pada skala berbeza. Indeks Penumpuan menyelesaikan kedua-dua masalah: ia dikira dengan cara sama bagi mana-mana pemboleh ubah kesihatan terhadap mana-mana susunan sosioekonomi, jadi perkhidmatan kesihatan kebangsaan boleh menjejak sama ada ketidaksamaan perkhidmatan digital tertentu melebar atau mengecil dari keluaran ke keluaran, dan boleh membandingkan keadilan pengagihan pelancaran aplikasi dengan, katakan, program saringan, pada skala ternormal yang sama.

## Matematiknya

```
CI = (2 / purata(nilai_kesihatan)) × Kov(nilai_kesihatan, pangkat_sosioekonomi)

Kov(X, Y) = purata(X × Y) − purata(X) × purata(Y)   (kovarians populasi)

pangkat_sosioekonomi: pangkat pecahan setiap orang dalam taburan sosioekonomi,
dalam [0, 1] (0 = paling kurang bernasib baik, 1 = paling bernasib baik;
bagi data berkumpulan/berjalur, lazimnya pangkat titik tengah setiap kumpulan)
```

Ini "formula kovarians mudah" (O'Donnell, van Doorslaer, Wagstaff, Lindelow, World Bank 2008) — jalan pintas pengamal piawai untuk mengira Indeks Penumpuan terus daripada pemerhatian berpasangan, tanpa melukis dan mengamir di bawah lengkung penumpuan terlebih dahulu.

## Contoh penyelesaian

Skor kesihatan baik yang dilaporkan sendiri (1 = paling teruk, 4 = paling baik) diperhatikan merentas empat kuartil sosioekonomi bersaiz sama, masing-masing diwakili oleh pangkat titik tengah kuartilnya:

```
nilai_kesihatan        = [1.0, 2.0, 3.0, 4.0]
pangkat_sosioekonomi   = [0.125, 0.375, 0.625, 0.875]

purata(nilai_kesihatan)        = 2.5
purata(kesihatan × pangkat)    = purata([0.125, 0.75, 1.875, 3.5]) = 1.5625
purata(pangkat_sosioekonomi)   = 0.5

Kov = 1.5625 − 2.5 × 0.5 = 0.3125

CI = 2 × 0.3125 / 2.5 = 0.25
```

`0.25` positif bermakna skor kesihatan ini tertumpu dalam kalangan kumpulan sosioekonomi yang bernasib baik — responden berskor lebih tinggi condong ke hujung yang lebih berada dalam susunan.

## Kaitan dengan kejuruteraan perisian

Ini pengukuran ketidaksamaan berasaskan kovarians yang sama digunakan dalam ekonomi umumnya (sepupu pekali Gini), dan ia dipetakan kepada mengukur sama ada manfaat produk perisian tertumpu dalam segmen pengguna yang sudah bernasib baik dan bukan tersebar secara saksama — lanjutan langsung [capaian dan ekuiti](../capaian-dan-ekuiti/) (dimensi "capaian" RE-AIM) kepada ukuran statistik formal dan bukan jurang yang diperihalkan. Di mana capaian-dan-ekuiti melaporkan impak setiap strata, Indeks Penumpuan memampatkan seluruh taburan kepada satu nombor bertanda, sesuai sebagai satu KPI yang dijejak merentas keluaran — praktikal untuk papan pemuka, di mana pecahan berstrata penuh tidak sesuai.

## Perangkap

- **Hanyutan konvensyen tanda**: tanda bergantung pada bagaimana pemboleh ubah kesihatan dan pangkat ditakrifkan — membalikkan salah satu membalikkan tanda, jadi konvensyen yang digunakan mesti sentiasa dinyatakan secara jelas bersama sebarang nilai yang dilaporkan.
- **Pangkat sempadan dan bukan pangkat titik tengah**: data sosioekonomi berkumpulan atau berjalur (cth., kuintil) memerlukan pangkat pecahan setiap kumpulan pada *titik tengahnya*, bukan sempadannya, jika tidak indeks berat sebelah.
- **Membaca "hampir sifar" sebagai "tiada ketidaksamaan"**: Indeks Penumpuan hampir sifar bermaksud "tiada kecerunan sosioekonomi yang konsisten", bukan "tiada ketidaksamaan" dalam erti mutlak — ketidaksamaan yang saling mengimbangi dalam arah berbeza boleh saling membatalkan.

## Sumber

- Wagstaff A, Paci P, van Doorslaer E. "On the measurement of inequalities in health." Soc Sci Med. 1991;33(5):545-57.
- O'Donnell O, van Doorslaer E, Wagstaff A, Lindelow M. "Analyzing Health Equity Using Household Survey Data." World Bank. 2008 — the standard practitioner handbook, source of the convenient covariance formula used here. <https://openknowledge.worldbank.org/entities/publication/98380884-0d1d-53d2-b95f-ec6be2019414>
