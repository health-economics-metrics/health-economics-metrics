# Tahun Hayat Terlaras Hilang Upaya (DALY)

DALY ialah satu tahun hayat sihat yang hilang — cerminan sisi beban bagi [QALY](../tahun-hayat-terlaras-kualiti/). Di mana QALY mengira kesihatan yang *diperoleh*, DALY mengira kesihatan yang *hilang* kerana penyakit; intervensi dinilai mengikut DALY yang **dielakkan**.

## Mengapa ia penting

DALY ialah piawai kesihatan global (WHO, kajian Global Burden of Disease, dan kebanyakan kementerian kesihatan negara berpendapatan rendah dan sederhana merancang dalam DALY). Jika perisian anda menyasarkan sistem kesihatan antarabangsa, penderma atau program sejajar WHO, bahasa nilainya ialah DALY dielakkan, bukan QALY diperoleh. Penanda aras sejarah WHO-CHOICE: intervensi yang mengelakkan DALY pada kurang daripada 1× KDNK per kapita ialah "sangat kos-efektif," 1–3× KDNK per kapita "kos-efektif" (WHO kini tidak menggalakkan penggunaan jalur ini secara tegar, tetapi ia kekal di mana-mana dalam amalan).

## Matematiknya

```
DALY = YLL + YLD

YLL (tahun hayat hilang)               = kematian × jangka hayat piawai pada umur kematian
YLD (tahun hidup dengan hilang upaya)  = prevalens × pemberat hilang upaya

pemberat hilang upaya ∈ [0, 1], 0 = kesihatan penuh, 1 = setara kematian
(pemberat diterbitkan oleh kajian Global Burden of Disease)
```

## Contoh penyelesaian

Platform peringatan saringan di sesebuah rantau meningkatkan pengesanan awal penyakit. Setahun ia mencegah 10 kematian pramatang (masing-masing kehilangan 20 tahun berbanding jangka hayat piawai) dan mencegah 200 orang hidup setahun dengan keadaan yang pemberat hilang upayanya 0.2.

```
YLL dielakkan = 10 × 20        = 200
YLD dielakkan = 200 × 0.2      = 40
DALY dielakkan                 = 240 setahun
```

Jika platform berharga $600,000/tahun untuk dijalankan, kos bagi setiap DALY dielakkan ialah 600,000 / 240 = **$2,500**. Di negara dengan KDNK per kapita $8,000, itu jauh di bawah penanda aras 1× KDNK — "sangat kos-efektif" dari segi WHO-CHOICE.

## Kaitan dengan kejuruteraan perisian

- Kesihatan digital yang menyasarkan pembiaya kesihatan global (Gavi, Global Fund, program kebangsaan) patut menyatakan impak sebagai **kos bagi setiap DALY dielakkan** — ia metrik yang sudah difikirkan oleh penyemak geran.
- DALY juga templat *perakaunan beban* yang berguna untuk kejuruteraan: insiden, binaan tidak stabil dan geseran warisan ialah "tahun hidup dengan hilang upaya" bagi pangkalan kod — inventori beban berpemberat kerja susah memberitahu di mana pemulihan membeli paling banyak "tahun kejuruteraan sihat," sama seperti jadual beban GBD mengarahkan perbelanjaan kesihatan.

## Perangkap

- **QALY diperoleh ≠ DALY dielakkan secara numerik** — pemberat berbeza, jadual hayat berbeza, konvensyen berbeza (DALY secara sejarah menggunakan pemberat umur dan diskaun dalam ukuran). Jangan tukar sambil lewa.
- **Menggunakan ambang gandaan-KDNK sebagai cop getah** — WHO sendiri memberi amaran ia mengabaikan bajet dan kos peluang; lihat [ambang kesanggupan membayar](../ambang-kesanggupan-membayar/).
- **Menuntut DALY skala populasi daripada keberkesanan setiap pengguna** tanpa mendarab melalui pengambilan dan pematuhan — lihat [capaian dan ekuiti](../capaian-dan-ekuiti/).

## Sumber

- WHO indicator registry: DALYs. <https://www.who.int/data/gho/indicator-metadata-registry/imr-details/158>
- Bertram MY, et al. "Cost-effectiveness thresholds: pros and cons." (WHO) <https://pmc.ncbi.nlm.nih.gov/articles/PMC4339959/>
- Marseille E, et al. on GDP-based thresholds, Health Policy and Planning. <https://academic.oup.com/heapol/article/32/1/141/2555408>
