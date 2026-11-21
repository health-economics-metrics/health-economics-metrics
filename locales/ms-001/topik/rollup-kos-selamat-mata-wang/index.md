# Rollup Kos Selamat Mata Wang

Menjumlahkan banyak butiran baris wang — invois bulanan, kos setiap tapak, angka impak bajet berbilang tahun — dengan nombor titik terapung binari biasa (`f64`) mengumpul ralat perwakilan kecil, kerana kebanyakan pecahan perpuluhan ($1,234.56, misalnya) tidak boleh diwakili dengan tepat dalam titik terapung binari. Setiap ralat individu kecil, tetapi model besar yang menjumlahkan ratusan atau ribuan butiran baris selama beberapa tahun boleh menyimpang sebanyak pecahan sen — dan penyimpangan itu bergantung pada *susunan* penambahan berlaku, menjadikannya tidak boleh dihasilkan semula. Rollup mata wang yang dilakukan dalam aritmetik perpuluhan tepat (atau unit minor integer) menjumlahkan dengan tepat, sepadan dengan cara sistem perakaunan dan lejar catatan berganda mesti berdamai hingga ke sen.

## Mengapa ia penting

Ini kelas pepijat asas yang didokumenkan dengan baik: kertas ACM Computing Surveys 1991 Goldberg "What Every Computer Scientist Should Know About Floating-Point Arithmetic" ialah rujukan piawai tentang mengapa titik terapung binari tidak dapat mewakili kebanyakan nilai wang perpuluhan dengan tepat, dan mengapa menjumlahkan banyak daripadanya menggandakan ralat. Model ekonomi kesihatan dan kewangan NHS lazimnya menjumlahkan banyak tahun dan banyak kategori kos — [jumlah kos pemilikan](../jumlah-kos-pemilikan/) dan [analisis impak bajet](../analisis-impak-bajet/) kedua-duanya mengagregat sejumlah besar butiran baris kos `f64` atas ufuk berbilang tahun. Apabila model mesti berdamai hingga ke sen — audit yang mengira semula jumlah dengan tangan mesti mendapat angka yang *sama* — aritmetik itu sendiri mesti perpuluhan tepat, bukan titik terapung.

## Matematiknya

```
Rollup naif:               jumlah = Σ f64(butiran_baris_i)    — hanyutan bergantung susunan
Rollup selamat mata wang:  jumlah = Σ Decimal(butiran_baris_i) — tepat, boleh dihasilkan semula

Menggunakan pelarasan peratusan (cth. penimbal luar jangka):
  dilaras  = jumlah × pengganda                — hasil Decimal tepat, boleh membawa
                                                  lebih banyak tempat perpuluhan
                                                  daripada eksponen unit minor mata wang
  dibundar = round(dilaras, eksponen_mata_wang, peraturan_pembundaran)  — peraturan
                                                  pembundaran (half-up lwn half-even/
                                                  pembundaran jurubank) mesti dinyatakan jelas
```

Perhatikan disiplin dua langkah: mendarab jumlah `Decimal` tepat dengan pengganda boleh menghasilkan lebih banyak tempat perpuluhan daripada yang digunakan mata wang sebenarnya (tiga tempat perpuluhan daripada jumlah dua tempat perpuluhan darab pengganda dua tempat perpuluhan, misalnya) — ketepatan perantaraan itu *tidak* dibundarkan secara automatik; hanya langkah pembundaran yang jelas, dengan peraturan pembundaran yang dinyatakan, membawanya turun ke eksponen unit minor sebenar mata wang.

## Contoh penyelesaian

Dua belas invois bulanan sama sebanyak $1,234.56 setiap satu, dijumlahkan dalam aritmetik perpuluhan tepat: $1,234.56 × 12 = **$14,814.72**, tepat. Bezakan dengan menjumlahkan literal `f64` `1234.56` dua belas kali dalam ketepatan berganda IEEE-754, yang boleh menyimpang sebanyak pecahan sen bergantung pada susunan penjumlahan — kelas pepijat sebenar yang didokumenkan, bukan masalah bagi model yang dibina atas aritmetik `Money` perpuluhan tepat.

Sekarang gunakan penimbal luar jangka impak bajet piawai 5% (pengganda 1.05×) pada jumlah $14,814.72 itu: $14,814.72 × 1.05 = $15,555.456 — tiga tempat perpuluhan, kerana pendaraban itu tepat dan tidak dibundarkan secara automatik kepada dua tempat perpuluhan mata wang. Membundarkannya dengan jelas kepada 2 tempat perpuluhan menggunakan pembundaran jurubank (half-even) memberi tepat **$15,555.46**.

## Kaitan dengan kejuruteraan perisian

Ini pengajaran asas langsung di sebalik "perisian kewangan menggunakan `Decimal`, bukan `float`" — ia berkait jelas dengan modul [jumlah kos pemilikan](../jumlah-kos-pemilikan/) dan [analisis impak bajet](../analisis-impak-bajet/) repositori ini, yang kini kedua-duanya menjumlahkan kos titik terapung biasa; hujah ketepatan di sini tidak menuntut migrasi model-model itu serta-merta, tetapi ia menyatakan dengan tepat *bila* sesebuah sistem mesti berdamai hingga ke sen dan oleh itu tidak boleh menggunakan titik terapung binari untuk aritmetik wangnya. Lihat juga [peruntukan kos sen tepat](../peruntukan-kos-sen-tepat/) untuk masalah pasangan iaitu memisahkan (bukan menjumlahkan) jumlah tanpa kehilangan sen.

## Perangkap

- **Menukar kepada `float` di tengah rantaian**: menarik nilai wang keluar kepada nombor titik terapung di tengah pengiraan (sesetengah pustaka `Money` malah menamakan kaedah penukaran ini sesuatu seperti "lossy" sebagai amaran jelas) senyap-senyap membuang jaminan ketepatan bagi setiap pengiraan di hiliran titik itu.
- **"Decimal terlalu perlahan untuk diambil peduli"**: menolak aritmetik perpuluhan tepat sebagai overhed tidak perlu sedangkan ketepatan dan kebolehauditan — bukan daya pemprosesan mentah — yang penting untuk pelaporan kewangan.
- **Menggunakan peratusan luar jangka tanpa menyatakan peraturan pembundaran**: pembundaran half-up lwn half-even (pembundaran jurubank) boleh mengubah sen akhir; konvensyen pembundaran itu sendiri mesti pilihan yang dinyatakan dan boleh diaudit — lihat [analisis kos-manfaat](../analisis-kos-manfaat/) untuk panduan Green Book HM Treasury tentang pelarasan luar jangka dan bias optimisme, yang tepat jenis angka yang dikenakan langkah pembundaran ini.

## Sumber

- Fowler M. "Patterns of Enterprise Application Architecture." Addison-Wesley, 2002 — the `Money` pattern.
- Goldberg D. "What Every Computer Scientist Should Know About Floating-Point Arithmetic." ACM Computing Surveys, 1991.
- HM Treasury, The Green Book — optimism-bias and contingency guidance for budget-impact modelling. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
