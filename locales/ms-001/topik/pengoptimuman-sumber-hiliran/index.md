# Pengoptimuman Sumber Hiliran

Menjimatkan sejam bagi pengamal kanan — GP, pendaftar kanan, perunding — sering mencegah kelewatan kesesakan bagi seluruh pasukan pelbagai disiplin (MDT) jururawat, kerani pentadbiran dan ahli terapi yang menunggu kelulusan klinikal. Nilai membuka kesesakan ialah daya pemprosesan semua orang di hiliran daripadanya.

## Mengapa ia penting

Penjagaan kesihatan berjalan atas rantaian kebenaran: discaj menunggu kelulusan perunding, pelan rawatan menunggu semakan MDT, rujukan menunggu triaj. Apabila peranan pemintu ditangguhkan, kosnya bukan sejam seorang — ia masa melahu atau tersekat merentas setiap peranan bergantung, serta masa pesakit dalam limbo ([hari katil](../hari-katil-dijimatkan/) tambahan, [tunggu RTT](../rujukan-ke-rawatan/) lebih lama). Ini teori kekangan yang diterapkan pada laluan klinikal: sejam dijimatkan *pada kekangan* bernilai daya pemprosesan marginal seluruh sistem; sejam dijimatkan di tempat lain bernilai jauh kurang.

## Matematiknya

```
Nilai membuka sekatan = Σ merentas peranan hiliran (jam tersekat dilepaskan × kos unit)
                      + keuntungan daya pemprosesan laluan × nilai setiap penyiapan laluan

Bezakan: nilai sejam sama dijimatkan pada peranan bukan-pemintu ≈ nilai kapasiti
peranan itu sahaja (lihat practitioner-time.md).
```

Kenal pasti kekangan secara empirikal: di mana kerja beratur paling lama? Peti masuk siapa yang dikesan oleh kelewatan?

## Contoh penyelesaian

Discaj wad memerlukan semakan perunding setiap pagi. Perunding menghabiskan 90 min/hari mengumpul maklumat bertaburan merentas sistem; semakan siap menjelang 14:00, dan 6 discaj/hari selesai terlalu lewat untuk hari itu — masing-masing berharga satu hari katil yang boleh dielakkan.

Papan pemuka ringkasan discaj (makmal, ubat, bendera dalam satu paparan) memotong pengumpulan kepada 20 minit; semakan siap menjelang 11:30:

```
Hari katil dielakkan  = 4 daripada 6 discaj lewat × 365 ≈ 1,460 hari katil/tahun
Pembukaan sekatan hiliran: 2 penyelaras discaj + farmasi + pengangkutan
                       sebelum ini melahu-kemudian-mendesak setiap petang —
                       ~3 jam-kakitangan/hari masa tersekat dilepaskan ≈ 1,100 jam/thn
```

70 minit perunding sendiri ialah bahagian *terkecil* nilai — inti metrik ini. Nilaikan hari katil mengikut mekanisme (lihat [hari katil dijimatkan](../hari-katil-dijimatkan/)) dan jam kakitangan sebagai kapasiti.

## Kaitan dengan kejuruteraan perisian

Ini semakan kod, kelulusan seni bina dan peti masuk jurutera kakitangan. Apabila lima jurutera menunggu sehari untuk satu orang yang boleh meluluskan reka bentuk, kosnya lima hari-jurutera serta sehari [kos kelewatan](../kos-kelewatan/) pada kerja itu sendiri — bukan sejam-penyemak. Alat yang memampatkan tugas peranan pemintu (konteks semakan lebih baik, pra-semakan automatik, papan pemuka yang mengumpul apa yang diperlukan peluluskan) membeli daya pemprosesan sistem, bukan kemudahan individu. Ukur masa ambil/tunggu pada kekangan (lihat [metrik aliran](../metrik-aliran/)) — ia setara perisian tebing discaj 14:00.

## Perangkap

- **Mengoptimumkan bukan-kekangan**: alat cantik untuk peranan yang tiada apa beratur di belakangnya menghasilkan nilai sistem hampir sifar.
- **Migrasi kekangan**: buka sekatan perunding dan kekangan berpindah (ke farmasi, ke pengangkutan) — modelkan kekangan *seterusnya* sebelum menuntut keuntungan daya pemprosesan penuh.
- **Mengira jam hiliran sebagai tunai**: pelepasan masa tersekat ialah kapasiti, tertakluk pada [ujian pengagihan semula](../penjimatan-melepaskan-tunai-lwn-tidak-melepaskan-tunai/) biasa.

## Sumber

- Goldratt EM, *The Goal* (theory of constraints).
- NHS England, NHS productivity. <https://www.england.nhs.uk/long-read/nhs-productivity/>
