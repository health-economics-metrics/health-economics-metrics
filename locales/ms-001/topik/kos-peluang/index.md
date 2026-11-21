# Kos Peluang

Kos peluang ialah nilai alternatif terbaik yang anda lepaskan apabila anda memperuntukkan sesuatu sumber. Dalam sistem kesihatan dengan bajet tetap, membelanjakan £1 juta untuk satu perkara bermakna £1 juta kesihatan *tidak* dihasilkan di tempat lain.

## Mengapa ia penting

Kos peluang ialah idea paling mendalam dalam ekonomi kesihatan, dan yang paling kerap dilangkau jurutera perisian. Bajet kesihatan tetap dalam mana-mana tahun tertentu, jadi teknologi baharu tidak pernah dibiayai daripada wang "tambahan" — ia menyesarkan sesuatu. Soalan yang sebenarnya ditanya pembayar bukan "adakah ini baik?" tetapi "adakah ini lebih baik daripada apa yang dibeli wang sama sekarang?"

Inilah sebabnya ambang kos-keberkesanan wujud langsung: ambang ialah anggaran kesihatan yang dibeli wang itu pada margin sistem semasa. Lihat [ambang kesanggupan membayar](../ambang-kesanggupan-membayar/).

## Matematiknya

Tiada formula tunggal; kos peluang ialah disiplin perbandingan:

```
Kos peluang memilih A = nilai alternatif B terbaik yang dilepaskan
Keuntungan bersih daripada A = nilai(A) − nilai(B)
```

Penanda aras empirik: Claxton et al. (2015) menganggar NHS menghasilkan satu QALY pada kira-kira **£13,000** di margin. Jadi £13,000 yang dibelanjakan pada teknologi yang menghasilkan kurang daripada satu QALY menjadikan negara *kurang* sihat, walaupun teknologi itu "berfungsi."

## Contoh penyelesaian

Bajet transformasi trust NHS boleh membiayai tepat satu daripada:

- **Pilihan A**: perisian e-penggiliran — menjimatkan £400,000/tahun perbelanjaan kakitangan agensi.
- **Pilihan B**: perisian penyelarasan discaj — menjimatkan 2,000 hari katil/tahun. Pada kos marginal kira-kira £150 bagi setiap hari katil yang benar-benar dibebaskan, itu £300,000/tahun, serta rawatan lebih awal untuk pesakit menunggu.

Membiayai A bermakna melepaskan B. Kos peluang A ialah £300,000 B + manfaat pesakit; kes *bersih* untuk A hanya perbezaannya, bukan tajuk £400,000 A. Mana-mana kes perniagaan yang membandingkan cadangan dengan "tidak berbuat apa-apa" dan bukan alternatif terbaik melebih-lebihkan nilainya.

## Kaitan dengan kejuruteraan perisian

Kapasiti kejuruteraan juga bajet tetap — slot peta jalan, bukan paun. Pasukan platform yang membiayai alat A yang menjimatkan jam-jurutera pada £500/jam apabila alat B menyampaikan yang sama pada £200/jam memusnahkan kapasiti, tepat seperti sistem kesihatan yang membiayai ubat £40,000/QALY menyesarkan penjagaan £13,000/QALY. Disiplin itu berpindah terus:

- Sentiasa namakan pembanding ("berbanding apa?").
- Nilaikan masa jurutera mengikut apa yang akan dihasilkannya sebaliknya, bukan gaji sahaja.
- Anggap "kami masih ada bajet" sebagai permulaan analisis, bukan penghujungnya.

## Perangkap

- **Membandingkan dengan tiada apa-apa.** Pembanding yang betul ialah penggunaan wang terbaik seterusnya, yang jarang "tidak berbuat apa-apa."
- **Mengandaikan masa dijimatkan tiada kos peluang.** Masa dijimatkan hanya bernilai jika diagihkan semula kepada sesuatu yang bernilai — lihat [penjimatan melepaskan tunai lwn tidak melepaskan tunai](../penjimatan-melepaskan-tunai-lwn-tidak-melepaskan-tunai/).
- **Mengabaikan penyesaran.** "Bajet akan mengembang untuk muat" hampir tidak pernah benar dalam perkhidmatan kesihatan kebangsaan dalam tahun semasa.
- **Mengabaikan kaedah mana menilai sumber yang disesarkan.** Bagi produktiviti hilang khususnya — daripada penyakit, hilang upaya atau pekerja yang berhenti — lihat [pendekatan modal insan lwn kaedah kos geseran](../pendekatan-modal-insan-lwn-kaedah-kos-geseran/), versi khusus-kos-produktiviti bagi idea ini.

## Sumber

- Claxton K, et al. "Methods for the estimation of the NICE cost effectiveness threshold." Health Technology Assessment 2015;19(14). <https://www.journalslibrary.nihr.ac.uk/hta/hta19140/>
- York Health Economics Consortium glossary. <https://yhec.co.uk/glossary/opportunity-cost/>
