# Pecahan Boleh Dikaitkan Populasi (PAF)

PAF ialah perkadaran beban penyakit atau hasil dalam populasi yang boleh dikaitkan dengan pendedahan faktor risiko tertentu — bahagian yang akan lenyap jika pendedahan dihapuskan sepenuhnya. Ia menukar "faktor risiko ini menggandakan peluang anda" kepada nombor peringkat populasi yang sebenarnya boleh dirancang oleh pesuruhjaya: berapa banyak kes, dan berapa banyak kos, yang berbaloi dikejar bagi sesuatu pendedahan.

## Mengapa ia penting

Levin memperkenalkan PAF pada 1953 untuk menjawab soalan sempit dan konkrit: jika tiada siapa merokok, berapa banyak kanser paru-paru akan lenyap? Aritmetik sama kini menentukan saiz perancangan pencegahan kebangsaan dari strategi tembakau dan obesiti hingga kedudukan faktor risiko kajian Global Burden of Disease WHO, kerana risiko relatif sahaja tidak memberitahu apa-apa tentang impak — faktor risiko boleh menggandakan peluang peristiwa jarang dan hampir tidak menggerakkan beban penyakit populasi, atau menaikkan peluang peristiwa lazim sedikit sahaja namun menyumbang bahagian besar kes. PAF ialah apa yang menukar "faktor risiko X berbahaya" kepada "menghapuskan faktor risiko X akan mencegah sekian banyak kes setahun," yang merupakan nombor sebenarnya diperlukan kes perniagaan program pencegahan. Lihat [ekonomi pencegahan](../ekonomi-pencegahan/) untuk berapa kos bertindak atas nombor itu sebaik anda memilikinya.

## Matematiknya

```
PAF = prevalens_terdedah × (risiko_relatif − 1) / (1 + prevalens_terdedah × (risiko_relatif − 1))

prevalens_terdedah = pecahan populasi terdedah kepada faktor risiko (0–1)
risiko_relatif     = risiko hasil pada orang terdedah lwn tidak terdedah (cth. 2.5 = 2.5×)

Kes boleh dikaitkan = jumlah_kes × PAF
```

PAF meningkat dengan kedua-dua prevalens pendedahan dan risiko relatif — risiko relatif yang meningkat sederhana (katakan 1.5×) yang dikaitkan dengan pendedahan sangat lazim boleh menghasilkan PAF lebih besar daripada risiko relatif dramatik (katakan 5×) yang dikaitkan dengan pendedahan jarang. Itulah keseluruhan sebab ia wujud sebagai nombor berbeza daripada risiko relatif.

## Contoh penyelesaian

Faktor risiko hadir dalam 30% populasi (`prevalens_terdedah = 0.3`) dan menaikkan risiko hasil 2.5 kali ganda (`risiko_relatif = 2.5`):

```
PAF = 0.3 × (2.5 − 1) / (1 + 0.3 × (2.5 − 1))
    = 0.3 × 1.5 / (1 + 0.3 × 1.5)
    = 0.45 / 1.45
    ≈ 0.3103 (31.0%)

Dengan 1,000 kes/tahun dalam populasi:
Kes boleh dikaitkan = 1,000 × 0.3103 ≈ 310 kes/tahun
```

Kurang sedikit daripada satu pertiga beban tahunan hasil ini boleh dikaitkan dengan pendedahan — menghapuskannya sepenuhnya (siling teori; tiada intervensi sebenar mencapai penyingkiran pendedahan 100%) akan mencegah kira-kira 310 daripada 1,000 kes setiap tahun.

## Kaitan dengan kejuruteraan perisian

PAF ialah versi epidemiologi "berapa banyak volum insiden kami boleh dikaitkan dengan satu punca akar ini?" — bentuk soalan sama yang ditanya pasukan apabila menentukan saiz kelas penggunaan atau kebergantungan tertentu terhadap jumlah insiden pengeluaran, dan bukan menganggap setiap insiden sama berbaloi dibaiki dengan cara sama. Kategori punca akar yang hadir dalam bahagian besar penggunaan dengan risiko relatif sederhana untuk menyebabkan insiden boleh mengatasi kategori jarang berisiko-relatif-tinggi untuk di mana membelanjakan usaha kejuruteraan dahulu — tepat wawasan PAF, diterjemahkan.

## Perangkap

- **Menjumlahkan PAF merentas faktor risiko**: PAF bagi pelbagai faktor yang menjejaskan hasil sama tidak berjumlah 100% — ia boleh melebihinya secara keseluruhan, kerana faktor berinteraksi dan berkongsi laluan sebab. Anggap setiap PAF sebagai "jika faktor ini sahaja dihapuskan," bukan sebagai pembahagian jumlah risiko.
- **Memindahkan risiko relatif merentas populasi**: risiko relatif yang dianggar dalam satu populasi (prevalens pendedahan garis asas berbeza, pengacau berbeza) mengira PAF yang mengelirukan apabila diterapkan pada prevalens pendedahan populasi lain.
- **Mengelirukan PAF dengan risiko boleh dikaitkan dalam yang terdedah**: PAF peringkat populasi dan bergantung pada prevalens pendedahan; risiko boleh dikaitkan dalam yang terdedah peringkat individu dan tidak. Ia menjawab soalan berbeza — jangan petik satu untuk menjawab yang lain.

## Sumber

- Levin ML. "The occurrence of lung cancer in man." Acta Unio Int Contra Cancrum. 1953;9(3):531-41.
- Rockhill B, Newman B, Weinberg C. "Use and misuse of population attributable fractions." Am J Public Health. 1998;88(1):15-9.
