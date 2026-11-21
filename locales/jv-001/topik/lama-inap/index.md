# Lama Inap (Length of Stay, LOS)

Lama inap iku cacah dina saka admisi rumah sakit nganti pulang — metrik efisiensi-aliran inti saka perawatan rawat inap. Rata-rata akut Inggris kira-kira 4–5 dina; saben dina ekses nggunakake amben langka lan mbukak pasien marang risiko sing dipikolehi rumah sakit.

## Kenapa Iki Penting

LOS nggerakake meh kabeh ing ekonomi rumah sakit akut: kapasitas amben, throughput elektif, aliran darurat, staf. Nyuda rata-rata LOS sanajan pecahan dina ing skala mbebasake kapasitas gedhe banget (deleng [dina amben sing dihemat](../dina-amben-sing-dihemat/)). LOS uga sinyal kualitas ing loro arah — kedawan nuduhake kegagalan proses (diagnostik telat, administrasi pulang, nunggu perawatan-sosial); kecendhaken bisa tegese pulang prematur, sing katon mengko minangka [rawat inap ulang](../tingkat-rawat-inap-ulang/).

## Matematikane

```
LOS (saben spell)  = tanggal pulang − tanggal admisi
Rata-rata LOS      = dina amben dienggo / pulang (laporake mean LAN median;
                     LOS miring-tengen banget dening outlier inap-dawa)

Perbandingan butuh penyesuaian campuran-kasus (umur, diagnosis, keparahan),
yen ora sampeyan ngukur sapa sing diadmisi rumah sakit, dudu kepriye kinerjane.
```

Hukum Little nyambung variabel aliran: `amben dienggo = tingkat admisi × rata-rata LOS` — hukum padha sing ngatur antrian piranti lunak (deleng [metrik aliran](../metrik-aliran/)).

## Conto Petungan

Trust ngadmisi 40 pasien medis darurat/dina ing mean LOS 6.0 dina: 240 amben ditempati permanen (40 × 6). Piranti lunak koordinasi-pulang (pelacakan tugas, otomatisasi apotek-menyang-take-out, pesen transportasi) nyuda buntut non-klinis inap rata-rata 0.4 dina.

```
Amben sing dibutuhake = 40 × 5.6 = 224 → 16 amben bebas terus-terusan
                      = 16 × 365 = 5,840 dina amben/taun
```

Regani 5,840 dina amben miturut mekanisme (isi-maneh/tutup/kelonggaran) miturut [dina amben sing dihemat](../dina-amben-sing-dihemat/). Catet apa sing obah: dudu kedokteran, nanging *ngenteni* — pasien wis fit medis; sistem isih nindakake administrasi. Iku masalah antrian, lan piranti lunak apik ing masalah antrian.

## Sambungan karo Rékayasa Piranti Lunak

LOS iku cycle time rumah sakit, lan playbook perbaikane identik karo karya aliran-panyampaian: instrumenake tahap (admisi → perawatan → fit-medis → pancen-pulang), temokake ing ngendi wektu nggenang (iku serah-terima), busak kahanan ngenteni tinimbang nambah kapasitas. Kohort "fit medis kanggo pulang nanging isih nempati amben" iku versi rumah sakit saka PR sing disetujoni nanging durung di-merge. Kesempatan piranti lunak langsung: orkestrasi tugas pulang, kacepetan diagnostik, e-resep obat pulang, integrasi rujukan perawatan-sosial.

## Jebakan

- **Pelaporan mean wae** — outlier nguwasani; mean sing mudhun bisa ndhelikake buntut inap-dawa sing tuwuh.
- **Ora ana penyesuaian campuran-kasus** ing klaim sadurunge/sawise: ambang admisi owah musiman lan sekuler.
- **Pangurangan LOS sing muncul maneh minangka rawat inap ulang** — tansah pasangake klaim LOS karo data rawat inap ulang 30-dina.

## Sumber

- OECD, length of hospital stay indicator. <https://www.oecd.org/en/data/indicators/length-of-hospital-stay.html>
- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
