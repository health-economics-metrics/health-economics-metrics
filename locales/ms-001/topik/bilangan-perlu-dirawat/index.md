# Bilangan Perlu Dirawat (NNT)

NNT ialah bilangan pesakit yang mesti menerima intervensi supaya **satu** pesakit tambahan mendapat manfaat, dalam jangka masa yang dinyatakan. Ia menukar pengurangan risiko peratusan — yang mengelirukan — kepada unit usaha-bagi-setiap-manfaat yang boleh difikirkan sesiapa pun.

## Mengapa ia penting

"Mengurangkan serangan jantung sebanyak 25%!" kedengaran muktamad. Jika risiko garis asas 4% dalam 5 tahun, pengurangan mutlak ialah 1 mata peratusan, jadi **100 orang mesti mengambil ubat selama 5 tahun supaya 1 mendapat manfaat** — dan kesemua 100 menanggung kos dan kesan sampingan. NNT ialah penawar kepada pemasaran risiko-relatif, sebab itu perubatan berasaskan bukti mendahulukannya. Statin untuk pencegahan primer: NNT ≈ 50–100 dalam 5 tahun bagi setiap serangan jantung dielakkan. Cerminannya, **NNH** (bilangan perlu dimudaratkan), mengira berapa ramai dirawat bagi setiap orang dimudaratkan.

## Matematiknya

```
ARR = kadar peristiwa kawalan − kadar peristiwa rawatan   (pengurangan risiko mutlak)
NNT = 1 / ARR

NNH = 1 / (kadar bahaya_rawatan − kadar bahaya_kawalan)

Jambatan ekonomi:
kos bagi setiap peristiwa dicegah = NNT × kos setiap kursus rawatan
```

Sentiasa nyatakan jangka masa dan populasi garis asas — NNT tidak bermakna tanpa kedua-duanya.

## Contoh penyelesaian

Sistem ramalan jatuh di hospital menandakan pesakit berisiko tinggi untuk intervensi (penderia katil, semakan, penyeliaan). Percubaan: jatuh dengan kecederaan turun daripada 3.2% kepada 2.4% kemasukan.

```
ARR = 0.8 mata peratusan → NNT = 1/0.008 = 125
   (125 pesakit mesti mendapat bundel intervensi untuk mencegah 1 jatuh berkecederaan)

Kos intervensi ≈ £40/pesakit → kos bagi setiap jatuh dicegah = 125 × 40 = £5,000
Kos jatuh pesakit dalam berkecederaan (tinggal tambahan, pengimejan, litigasi) ≈ £12,000
Bersih: pencegahan membayar ~2.4:1 — dan keuntungan QALY di atasnya.
```

Perhatikan bagaimana NNT mengekalkan tuntutan jujur: "mengurangkan jatuh 25%" dan "mencegah satu jatuh bagi setiap 125 pesakit dirawat" ialah keputusan sama, dengan daya pujuk berbeza.

## Kaitan dengan kejuruteraan perisian

NNT ialah unit yang betul bagi mana-mana get atau semakan yang bertindak ke atas banyak item untuk menangkap sedikit: **"bilangan PR yang mesti melalui get semakan AI untuk menangkap satu kecacatan menuju pengeluaran."** Jika get menyemak 400 PR bagi setiap tangkapan sebenar (NNT = 400) pada 4 minit perhatian pembangun setiap satu, satu tangkapan berharga ~27 jam-pembangun — kini bandingkan dengan kos insiden yang dicegahnya. NNH terpeta kepada positif palsu: berapa PR bagi setiap bendera *palsu*, dan berapa kos setiapnya dalam perhatian dan kepercayaan? Alat gaya saringan (linter, pengimbas keselamatan, pengesanan anomali) patut dihantar dengan aritmetik NNT/NNH — lihat [ekonomi saringan](../ekonomi-saringan/) untuk sebab prevalens rendah menjadikan nombor ini kejam. [Bilangan perlu disaring](../bilangan-perlu-disaring/) ialah angka analog satu peringkat ke atas, untuk seluruh program saring-kemudian-rawat dan bukan rawatan sahaja.

## Perangkap

- **Tiada jangka masa**: "NNT = 50" tidak bermakna apa-apa; "NNT = 50 dalam 5 tahun" ialah tuntutan.
- **Pemindahan risiko-garis-asas**: NNT yang dikira dalam populasi percubaan berisiko tinggi runtuh dalam populasi penggunaan berisiko rendah.
- **Mengabaikan NNH** — get dengan NNT 400 dan NNH 3 ialah penjana gangguan, bukan sistem keselamatan.

## Sumber

- Laupacis A, Sackett DL, Roberts RS. "An assessment of clinically useful measures of the consequences of treatment." NEJM 1988. <https://pubmed.ncbi.nlm.nih.gov/3374545/>
- TheNNT explained. <https://www.thennt.com/thennt-explained/>
