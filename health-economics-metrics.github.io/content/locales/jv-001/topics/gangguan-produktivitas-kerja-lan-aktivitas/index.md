# Gangguan Produktivitas Kerja lan Aktivitas (Work Productivity and Activity Impairment, WPAI)

WPAI iku kuesioner laporan-dhewe sing divalidasi (Reilly, Zbrozek, Dasbach, 1993) sing ngukur sepira masalah kesehatan mengaruhi karya bayaran lan aktivitas saben dina, biasane sajrone 7 dina pungkasan. Mecah kerugian dadi *absenteisme* — wektu kerja sing harfiah kelalen — lan *presenteisme* — produktivitas suda nalika fisik ana ing karya — lan sing nomer loro biasane komponen biaya sing luwih gedhe lan luwih ndhelik.

## Kenapa Iki Penting

Itungan dina-lara prasaja mung weruh absenteisme. Dokter utawa pekerja kawruh sing ora tau cuti nanging makarya ing 60% kapasitas amarga kondisi kronis nyumbang nol ing register absen nalika isih ngasilake kerugian produktivitas sing gedhe lan nyata — WPAI dirancang khusus kanggo nampilake biaya sing ora katon kuwi. Amarga instrumen sing divalidasi tinimbang survei khusus, skor-skore bisa dienggo ing paket bukti [asil sing dilaporake pasien](../asil-sing-dilaporake-pasien/) lan studi biaya-penyakit tanpa reviewer kudu validasi maneh ukurane. Minangka instrumen laporan-dhewe, iku dhewe wujud PROM, sing dibedakake utamane dening fokuse ing karya lan aktivitas tinimbang gejala utawa kualitas urip.

## Matematikane

```
Absenteisme % = jam_kelalen_amarga_kesehatan / (jam_kelalen_amarga_kesehatan + jam_makarya) × 100

Presenteisme %  = rating-dhewe 0–10 gangguan nalika makarya, × 10
                  (dielisitasi langsung liwat kuesioner, ora diturunake ing kene)

Gangguan Kerja Sakabehe % =
    Absenteisme% + (1 − Absenteisme%/100) × Presenteisme%
    (nggabungake loro supaya total ora bisa ngluwihi 100%)

Biaya produktivitas = Gangguan Kerja Sakabehe% / 100 × penghasilan_periode
```

Rumus gangguan-sakabehe sengaja dudu jumlah prasaja: nambah loro persentase langsung bisa ngluwihi 100%, mula presenteisme mung ditrapake ing bagean wektu kerja *sing isih* (ora absen).

## Conto Petungan

Karyawan kanthi migrain nglaporake dijadwalake minggu 40-jam nanging kelalen 4 jam saka iku:

```
jam_kelalen = 4, jam_makarya = 36
Absenteisme% = 4 / (4 + 36) × 100 = 10%
```

Dheweke kapisah nilai-dhewe dampak produktivitas nalika makarya 3 saka 10 ing kuesioner WPAI, yaiku `Presenteisme% = 30%` (langkah iki jawaban kuesioner mentah, dudu sing diturunake saka angka liyane):

```
Gangguan Kerja Sakabehe% = 10 + (1 − 10/100) × 30
                          = 10 + 0.9 × 30
                          = 10 + 27
                          = 37%
```

Sajrone minggu 5-dina entuk £800 (£160/dina):

```
Biaya produktivitas = 37/100 × 800 = £296
```

Catet yen itungan dina-lara naif bakal nyathet mung 4 jam (10%) sing kelalen — komponen presenteisme meh nglipatigakake gangguan sejati yen diitung.

## Sambungan karo Rékayasa Piranti Lunak

Iki dipetakake langsung ing metrik kesehatan tim rékayasa:

- **Absenteisme** iku cuti lara lan PTO — katon, wis dilacak, lan bagean sing gampang.
- **Presenteisme** iku insinyur sing burnout utawa kebanjiran ganti-konteks sing ana ing saben stand-up nalika makarya ing kapasitas suda — biasane biaya sing luwih gedhe lan luwih ndhelik, lan ora katon ing data headcount utawa kehadiran. Muncul minangka throughput suda ing [DORA](../metrik-dora/) lan [metrik aliran](../metrik-aliran/), utawa minangka penyelesaian luwih alon saka [utang teknis](../utang-teknis/) sing "bunga"-ne nambah gangguan luwih jauh.
- Piwulang rékayasa padha karo sing klinis: ngukur mung absen lan nyebut "kerugian produktivitas" sacara sistematis nyepelekake biaya nyata, amarga kelalen kabeh wong sing ana nanging keganggu.

## Jebakan

- **Bias ngelingi laporan-dhewe.** Jendhela ngelingi 7-dina kena distorsi pelaporan sing padha karo laporan-dhewe retrospektif apa wae.
- **Nganggep skala presenteisme 0–10 minangka pangukuran fisik sejati.** Iku ordinal, dielisitasi liwat rating-dhewe, dudu kuantitas fisik sing divalidasi — nganggep beda ing kono linear utawa interval kanthi ketat iku kenyamanan pemodelan, dudu fakta fisik sing divalidasi.
- **Nggabungake skor ing varian WPAI.** WPAI duwe sawetara versi khusus-kondisi — WPAI:GH (kesehatan umum), WPAI:SHP (masalah kesehatan tartamtu), lan varian khusus-penyakit — lan skor saka varian beda ora kena digabung utawa dibandhingake tanpa mriksa dhisik yen versi instrumen padha.

## Sumber

- Reilly MC, Zbrozek AS, Dasbach EJ. "The validity and reproducibility of a work productivity and activity impairment instrument." PharmacoEconomics 1993;4(5):353-65.
- WPAI instrument documentation, Reilly Associates — the official scoring reference. <https://www.reillyassociates.net/>
