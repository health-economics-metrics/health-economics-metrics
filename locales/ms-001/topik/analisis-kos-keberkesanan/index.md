# Analisis Kos-Keberkesanan (CEA)

CEA membandingkan kos intervensi alternatif dengan satu hasil yang diukur dalam **unit semula jadi** — tahun hayat, kes dikesan, kemasukan dielakkan, mmHg tekanan darah dikurangkan. Outputnya ialah kos bagi setiap unit hasil.

## Mengapa ia penting

CEA ialah perbandingan utama apabila semua pilihan menyasarkan hasil yang sama. Ia menjawab "antara cara-cara mencapai X ini, yang mana penggunaan wang terbaik?" — tetapi *bukan* "adakah X berbaloi dicapai langsung?" (itu memerlukan [analisis kos-manfaat](../analisis-kos-manfaat/)) dan *bukan* "bagaimana X dibandingkan dengan keutamaan tidak berkaitan?" (itu memerlukan [analisis kos-utiliti](../analisis-kos-utiliti/) dan hasil generik seperti QALY).

## Matematiknya

Statistik perbandingan ialah [ICER](../nisbah-kos-keberkesanan-inkremental/) dalam unit semula jadi:

```
ICER = (Kos_A − Kos_B) / (Kesan_A − Kesan_B)
     = £ bagi setiap kes tambahan dikesan / kemasukan dielakkan / dll.
```

Prosedur: takrifkan unit hasil; kos setiap pilihan dari [perspektif](../perspektif-analisis/) yang sama atas [ufuk masa](../ufuk-masa/) yang sama; singkirkan pilihan yang didominasi ([sempadan kecekapan](../dominasi-dan-sempadan-kecekapan/)); kira nisbah inkremental sepanjang sempadan.

## Contoh penyelesaian

Tiga cara mengesan fibrilasi atrium tidak didiagnosis dalam populasi 100,000:

```
Pilihan                    Kos         Kes ditemui
Semakan nadi oportunistik  £150,000       300
Acara saringan farmasi     £400,000       520
Saringan berasaskan boleh pakai £900,000  610

ICER farmasi lwn nadi:  (400k−150k)/(520−300) = £1,136 bagi setiap kes tambahan
ICER boleh pakai lwn farmasi:(900k−400k)/(610−520) = £5,556 bagi setiap kes tambahan
```

Sama ada £5,556 bagi setiap kes tambahan "berbaloi" bergantung pada nilai kes yang ditemui (pencegahan strok di hiliran) — CEA memangkatkan pilihan tetapi keputusan penerimaan memerlukan penilaian luar itu. Perhatikan bahawa kos *purata* setiap kes pilihan boleh pakai (900k/610 = £1,475) kelihatan baik; £5,556 *inkremental* ialah angka jujur bagi keputusan pengembangan.

## Kaitan dengan kejuruteraan perisian

CEA ialah templat yang betul apabila pilihan berkongsi satu hasil: kos bagi setiap ujian tidak stabil dihapuskan merentas tiga pendekatan pemulihan; kos bagi setiap insiden dielakkan merentas vendor kebolehcerapan; kos bagi setiap penggunaan berjaya merentas seni bina CI. Disiplin yang dikuatkuasakannya — satu unit hasil diisytiharkan, nisbah inkremental (bukan purata), pilihan didominasi disingkirkan dahulu — membunuh kebanyakan perbandingan vendor yang buruk sebelum perbincangan harga bermula.

## Perangkap

- **Membandingkan pilihan dengan hasil berbeza** ("kes ditemui" lwn "kepuasan") dalam satu CEA — itu memerlukan [analisis kos-akibat](../analisis-kos-akibat/) atau hasil generik.
- **Nisbah kos-keberkesanan purata** dibentangkan di mana yang inkremental diperlukan (contoh boleh pakai di atas).
- **Unit hasil dipilih untuk memuji**: "amaran dijana" ialah output, bukan hasil; berkeras pada unit yang membawa nilai.

## Sumber

- CDC POLARIS: cost-effectiveness analysis. <https://www.cdc.gov/policy/polaris/economics/cost-effectiveness/index.html>
- York Health Economics Consortium glossary. <https://yhec.co.uk/glossary/cost-effectiveness-analysis/>
