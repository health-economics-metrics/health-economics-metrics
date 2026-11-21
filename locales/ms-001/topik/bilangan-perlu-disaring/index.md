# Bilangan Perlu Disaring (NNS)

NNS ialah bilangan orang yang mesti disaring — bukan sekadar dirawat — untuk mencegah **satu** hasil buruk dalam tempoh susulan yang ditakrifkan, diberi risiko garis asas populasi dan pengurangan risiko relatif yang dicapai oleh pengesanan dan rawatan awal. Ia analogi NNT peringkat program saringan: NNT bertanya berapa ramai mesti *dirawat* untuk mencegah satu hasil; NNS bertanya berapa ramai mesti melalui seluruh laluan *saring-kemudian-rawat* untuk sampai ke sana.

## Mengapa ia penting

Rembold memperkenalkan NNS pada 1998 khusus supaya program saringan boleh dibandingkan atas landasan sama seperti rawatan, kerana pengurangan risiko relatif tajuk ujian saringan menyembunyikan dua perkara yang tidak disembunyikan oleh rawatan: risiko garis asas populasi yang sebenarnya dijemput untuk disaring, dan hakikat bahawa setiap orang yang disaring menanggung kos ujian dan beban positif-palsu, bukan sekadar minoriti yang seterusnya mendapat manfaat. Pintu kos-keberkesanan Jawatankuasa Saringan Kebangsaan UK (lihat [ekonomi saringan](../ekonomi-saringan/)) dibina atas perbezaan tepat ini — program saringan dengan pengurangan risiko relatif yang mengagumkan dalam populasi risiko-garis-asas rendah masih boleh mempunyai NNS beribu, pada ketika itu kos program bagi setiap hasil dicegah menjadi soalan sebenar.

## Matematiknya

```
NNS = 1 / (risiko_garis_asas × pengurangan_risiko_relatif)

risiko_garis_asas            = kebarangkalian hasil dalam populasi disaring
                               sepanjang tempoh susulan (0–1)
pengurangan_risiko_relatif   = pengurangan risiko berkadar yang dicapai oleh
                               rawatan awal dibolehkan saringan (0–1)

Kos program bagi setiap hasil dicegah = NNS × kos_setiap_saringan
```

Bandingkan terus dengan [NNT](../bilangan-perlu-dirawat/): NNS melipat keberkesanan seluruh corong saring → diagnosis → rawat ke dalam satu nombor, di mana NNT sudah mengandaikan pesakit didiagnosis dan memulakan rawatan.

## Contoh penyelesaian

Populasi sasaran program saringan mempunyai risiko peristiwa garis asas 2% sepanjang tempoh kajian (`risiko_garis_asas = 0.02`), dan pengesanan awal mencapai pengurangan risiko relatif 25% (`pengurangan_risiko_relatif = 0.25`):

```
NNS = 1 / (0.02 × 0.25) = 1 / 0.005 = 200

200 orang mesti disaring untuk mencegah satu hasil.

Pada £50 setiap saringan:
Kos program bagi setiap hasil dicegah = 200 × £50 = £10,000
```

Angka £10,000 itu ialah apa yang patut ditimbang terhadap kos hasil itu sendiri dan QALY yang akan dikosnya — perbandingan sama yang dibuat [ekonomi pencegahan](../ekonomi-pencegahan/) bagi program pencegahan amnya.

## Kaitan dengan kejuruteraan perisian

NNS ialah "berapa ramai pengguna, peristiwa atau permintaan mesti melalui aliran pengesanan atau triaj untuk menangkap satu positif benar yang berbaloi ditindak" — relevan terus kepada sistem pemantauan dan triaj berasaskan amaran, di mana keadaan sasaran berprevalens rendah mengembangkan NNS sebagaimana ia meruntuhkan nilai ramalan positif (lihat [ekonomi saringan](../ekonomi-saringan/) dan [penilaian AI klinikal](../penilaian-ai-klinikal/)). Peraturan pemantauan yang mesti memproses 200 peristiwa bagi setiap tangkapan sebenar hanya berbaloi dijalankan jika tangkapan itu bernilai sekurang-kurangnya 200 kali kos triaj setiap peristiwa — aritmetik sama dengan contoh penyelesaian penjagaan kesihatan di atas.

## Perangkap

- **Mengabaikan pergantungan risiko garis asas**: ujian atau program saringan sama mempunyai NNS — dan kos-keberkesanan — yang sangat berbeza dalam populasi risiko tinggi lwn rendah. Jangan sekali-kali memetik NNS tanpa menyatakan populasi yang dikiranya.
- **Mengira penyebut yang salah**: NNS mengira orang yang *disaring*, bukan orang yang positif atau memulakan rawatan — ia sudah membenamkan keberkesanan seluruh corong, jadi tidak patut dibandingkan dengan metrik yang dikira atas positif sahaja.
- **Membandingkan merentas tempoh susulan**: tempoh susulan lebih pendek umumnya mengembangkan NNS, kerana lebih sedikit peristiwa diperhatikan dalam tetingkap. Angka NNS hanya boleh dibandingkan apabila dikira atas tempoh susulan sama.

## Sumber

- Rembold CM. "Number needed to screen: development of a statistic for disease screening." BMJ. 1998;317(7154):307-12.
