# Capaian dan Ekuiti

RE-AIM — Capaian (Reach), Keberkesanan (Effectiveness), Penerimaan (Adoption), Pelaksanaan (Implementation), Penyelenggaraan (Maintenance) — ialah kerangka piawai untuk menilai impak *populasi* sesuatu intervensi. Aritmetik terasnya: **impak kesihatan awam ≈ capaian × keberkesanan**. Alat digital menambah dimensi ekuiti: jurang digital bermakna capaian secara sistematik tidak sekata, dan penyampaian digital-dahulu boleh melebarkan jurang kesihatan yang bertujuan ditutupnya.

## Mengapa ia penting

Kajian sistematik yang menerapkan RE-AIM pada mHealth mendapati tanda konsisten: Capaian dan Penerimaan kuat, **Keberkesanan dan Penyelenggaraan lemah** — aplikasi tersebar mudah dan pudar cepat. Bagi perkhidmatan kesihatan kebangsaan, ini bermakna produk setiap-pengguna yang mengagumkan boleh menjadi pelaburan populasi yang buruk, dan sebaliknya: alat berkesan sederhana yang sampai berjuta-juta boleh mengatasi yang cemerlang yang sampai beribu (lihat aritmetik [HALE](../jangka-hayat-terlaras-kesihatan/)). Ekuiti bukan kekangan sampingan tetapi pemacu nilai: pengecualian digital mengikut umur, kedaifan, hilang upaya dan bahasa — tepat populasi yang menanggung beban paling boleh dirawat — jadi pengguna terkecuali marginal selalunya mempunyai potensi manfaat *di atas purata*. Untuk ukuran statistik formal ketidaksamaan kesihatan berkaitan sosioekonomi, lihat [Indeks Penumpuan](../indeks-penumpuan/).

## Matematiknya

```
Impak populasi ≈ capaian × keberkesanan
  capaian       = peserta / populasi layak (lihat activation-and-uptake.md)
  keberkesanan  = kesan dunia sebenar dalam kalangan peserta (berpemberat pengekalan —
                  lihat retention-and-churn.md)

Versi berstrata ekuiti:
  impak_kumpulan_g = capaian_g × keberkesanan_g, dilaporkan bagi setiap kuintil
  kedaifan / jalur umur / kumpulan bahasa
  jurang ekuiti = impak_kuintil atas − impak_kuintil bawah

Kos-keberkesanan pengagihan: gunakan pemberat ekuiti pada QALY mengikut
kumpulan penerima — QALY kepada yang paling kurang bernasib baik dikira lebih
(lanjutan HTA yang semakin arus perdana).
```

## Contoh penyelesaian

Program pencegahan diabetes digital, dilaporkan dua cara:

```
Agregat: capaian 12%, kesan 0.02 QALY/peserta → 0.0024 QALY/orang layak

Berstrata (kuintil kedaifan):
  K1 (paling kurang daif): capaian 22%, kesan 0.02 → 0.0044
  K5 (paling daif):        capaian 4%,  kesan 0.025 → 0.0010

Program menyampaikan 4.4× lebih banyak kesihatan kepada yang paling kurang daif —
sedangkan kesan setiap peserta K5 LEBIH TINGGI (lebih ruang). Lengan digital-dibantu
(bimbingan telefon + akses komuniti) berkos 20% lebih bagi setiap peserta K5 yang
menaikkan capaian K5 kepada 12% melipat tigakan impak K5 dan memperbaiki agregat —
pelaburan ekuiti ialah pelaburan kecekapan di sini.
```

## Kaitan dengan kejuruteraan perisian

Capaian sebahagian besarnya artifak kejuruteraan: keperluan lantai peranti dan OS, andaian lebar jalur, sokongan bahasa, pematuhan kebolehcapaian (WCAG), halangan pengesahan identiti dan pengedaran kedai-aplikasi-sahaja masing-masing memotong populasi daripada penyebut — biasanya tanpa kelihatan, kerana pengguna terkecuali tidak pernah muncul dalam analitik. Amalan kejuruteraan yang menggerakkan ekuiti: ukur *penyebut* (instrumenkan populasi layak, bukan sekadar pengguna); bajetkan prestasi untuk peranti lama dan sambungan lemah; hantar laluan digital-dibantu (telefon, SMS, kiosk) sebagai aliran kelas pertama dan bukan saluran memalukan; dan stratakan setiap metrik papan pemuka mengikut dimensi ekuiti — purata tidak berstrata ialah tempat ketidaksamaan bersembunyi ([pengambilan GDS](../metrik-perkhidmatan-gds/) membawa amaran sama).

## Perangkap

- **Keberkesanan dilaporkan pada penamat, impak dituntut pada populasi** — sebutan capaian digugurkan secara senyap.
- **Ekuiti sebagai audit selepas fakta** dan bukan input reka bentuk; memasang capaian kemudian jauh lebih mahal daripada mereka bentuknya.
- **Amnesia penyelenggaraan**: dimensi mHealth paling lemah RE-AIM — tuntutan impak melangkaui ufuk masa bukti.
- **Penjimatan saluran digital-sahaja** yang mengalihkan kos kepada pengguna terkecuali dan kakitangan barisan hadapan (lihat [metrik perkhidmatan GDS](../metrik-perkhidmatan-gds/)).

## Sumber

- RE-AIM framework. <https://re-aim.org/>
- RE-AIM systematic reviews of mHealth. <https://pmc.ncbi.nlm.nih.gov/articles/PMC12358350/>
- CDC, PRISM/RE-AIM for equity planning. <https://www.cdc.gov/pcd/issues/2018/17_0271.htm>
