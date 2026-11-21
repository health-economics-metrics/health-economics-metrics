# Jangka Hayat Terlaras Kesihatan (HALE)

HALE ialah ringkasan peringkat populasi: bilangan tahun seseorang boleh jangka hidup *dalam kesihatan penuh*, mendiskaun tahun yang dihabiskan dalam penyakit atau hilang upaya. HALE global semasa lahir kira-kira 61.9 tahun berbanding jangka hayat 73.3 (WHO, data 2019) — manusia hidup dekad terakhirnya, secara purata, dalam kesihatan kurang daripada penuh.

## Mengapa ia penting

HALE ialah metrik bintang utara dasar kesihatan kebangsaan dan global — pengangka sasaran "penuaan sihat" dan jurang yang didedahkannya (jangka hayat tolak HALE) ialah beban yang pencegahan, intervensi awal dan pengurusan penyakit kronik bertujuan menutup. Strategi kesihatan digital peringkat kementerian dibenarkan dalam istilah HALE; portfolio aplikasi, perkhidmatan saringan dan program pemantauan akhirnya bergulung ke sini.

## Matematiknya

Pengiraan piawai ialah **kaedah Sullivan**:

```
HALE_umur_x = Σ (tahun-orang jadual hayat pada setiap umur ≥ x × perkadaran dalam kesihatan penuh)
              / yang hidup pada umur x

"perkadaran dalam kesihatan penuh" = 1 − Σ (prevalens_keadaan × pemberat hilang upaya)
```

Input: jadual hayat piawai serta prevalens dan pemberat hilang upaya bagi keadaan kesihatan (daripada data Global Burden of Disease). HALE berkait dengan [DALY](../tahun-hayat-terlaras-hilang-upaya/) — beban DALY populasi dan jurang HALE ialah dua pandangan kesihatan hilang yang sama.

## Contoh penyelesaian

Program hipertensi digital kebangsaan: 500,000 didaftarkan, kawalan tekanan darah purata bertambah baik cukup untuk memotong insiden strok sebanyak 0.2 mata peratusan/tahun. Dimodelkan sepanjang hayat kohort, strok dielakkan menjimatkan 15,000 tahun terpemberat hilang upaya (YLD pada pemberat 0.32 serta YLL daripada strok maut).

```
Sumbangan HALE ≈ 15,000 tahun sihat / 500,000 orang
               ≈ 0.03 tahun (≈ 11 hari) HALE bagi setiap orang didaftarkan
```

Sebelas hari kedengaran kecil — tetapi pada skala populasi begitulah metrik kebangsaan benar-benar bergerak: kementerian membeli berjuta keuntungan kecil setiap orang. Aritmetik ini juga menunjukkan mengapa **capaian mendominasi**: intervensi dua kali lebih berkesan dengan sepersepuluh pendaftaran menggerakkan HALE lima kali kurang. Lihat [capaian dan ekuiti](../capaian-dan-ekuiti/).

## Kaitan dengan kejuruteraan perisian

HALE ialah corak metrik kesihatan armada: **jangka hayat perkhidmatan dijangka × perkadaran hayat itu dihabiskan sihat**. Pasukan platform boleh mengira "jangka hayat perkhidmatan sihat" merentas hartanahnya — tahun perkhidmatan dijangka berjalan, didiskaun oleh masa dalam keadaan merosot, usang atau insiden (pemberat daripada kekurangan SLO). Ia membingkai semula kebolehpercayaan daripada ketersediaan titik kepada kesihatan sepanjang hayat, dan mengarahkan pemulihan pada sistem yang menarik HALE hartanah ke bawah.

## Perangkap

- **HALE bergerak perlahan dan berbilang sebab** — tiada intervensi tunggal "menggerakkan HALE" secara terukur; tuntut sumbangan yang dimodelkan, bukan statistik kebangsaan.
- **Data prevalens ketinggalan** bertahun; keuntungan terkini tidak akan muncul dalam HALE rasmi.
- **Membandingkan HALE merentas negara** dengan pengukuran keadaan kesihatan berbeza adalah berbahaya; gunakannya secara membujur dalam satu sistem.

## Sumber

- WHO indicator registry: HALE. <https://www.who.int/data/gho/indicator-metadata-registry/imr-details/66>
- Global Burden of Disease study (IHME). <https://www.healthdata.org/research-analysis/gbd>
