# Kapasitas Penghasil Nilai (Pemulihan Operasional) (Value-Generating Capacity, Operational Turnaround)

Kapasitas penghasil-nilai iku "manfaat peluang" saka wektu sing dibebasake: apa sing saiki bisa *digayuh* rumah sakit nganggo jam-jam sing dibebasake piranti lunakmu. Iki metrik sing paling penting kanggo Chief Operating Officer lan Medical Director, amarga ngomong ing mata uang sing dadi dhasar penilaian dheweke — aktivitas, target, lan pemulihan.

## Kenapa Iki Penting

NHS ngadhepi tumpukan rujukan-menyang-perawatan sing gedhe banget, lan trust sing ora nyukupi standar wektu-ngenteni nasional ngadhepi pengawasan lan intervensi regulasi (deleng [rujukan-menyang-perawatan](../rujukan-menyang-perawatan/)). Nyewa alon lan diwatesi; estate tetep. Siji-sijine tuas cepet yaiku njupuk luwih akeh aktivitas penghasil-nilai saka staf lan ruang sing ana. Piranti lunak sing nuntut maneh wektu spesialis ora mung "ngirit dhuwit" — iku *nyetak kapasitas*: klinik sing ora bisa ana, penilaian sing ora bisa dijadwalake, tanpa nyewa utawa mbangun.

## Matematikane

```
Kapasitas ndhelik sing digawe = wektu sing dibebasake → unit aktivitas sing dimungkinake × nilai skema

Unit aktivitas: kunjungan rawat jalan, penilaian pra-op, review pemantauan
Nilai skema:    tarif nasional / rega NHS Payment Scheme
                (deleng national-tariff-and-unit-costs.md)
```

Iki valuasi dhasar-output saka [wektu praktisi](../wektu-praktisi/), diskala menyang garis layanan lan dinyatakake ing unit aktivitas sing wis direncanakake tim operasi.

## Conto Petungan

Perawat spesialis Band 6 mlakokake klinik penilaian pra-operasi. Otomatisasi dokumentasi nuntut maneh 1 jam/dina kanggo saben 25 perawat; saben jam cocog 2 penilaian.

```
Penilaian ekstra = 25 perawat × 2/dina × 250 dina = 12,500/taun
Ing ~£120 nilai skema saben penilaian pra-op:
  12,500 × £120 = £1.5M/taun kapasitas perawatan sing digawe
```

— tanpa nyewa siji perawat utawa mbangun siji ruangan. (Model sing akeh dikutip sing asline dikutip stub iki nyebutake angka £766,920/taun kanggo kohort sing luwih cilik; pola aritmetikane padha — angka skala karo perawat × sesi × tarif.) Pigura operasional kanggo COO: penilaian pra-op mandheg dadi kendala ing dhaptar teater — operasi sing dibatalake ing dina kuwi mudhun, lan utilisasi teater munggah, sing ing kana garis manfaat *sabanjure* diwiwiti (deleng [optimalisasi sumber daya hilir](../optimalisasi-sumber-daya-hilir/)).

## Sambungan karo Rékayasa Piranti Lunak

Pigura ulang sing padha nylametake klaim produktivitas-pangembang saka matematika upah: wektu rékayasa sing dibebasake, dinyatakake minangka *kapabilitas sing dikirim sing ora bisa dituku organisasi liya* — fitur, migrasi, karya keandalan — diregani ing apa sing dibayar organisasi kanggo kapabilitas kuwi ing margin (tarif kontraktor, utawa padha-sewa-ditundha). Pigura COO uga mulangake bab pitching karya platform: nyatakake manfaat ing unit sing dadi dhasar penilaian pamirsa. Pimpinan ops mikir ing aktivitas lan target, dudu jam abstrak; pimpinan rékayasa mikir ing item peta dalan lan headcount, dudu menit sing dihemat.

## Jebakan

- **Klaim kapasitas tanpa permintaan**: 12,500 slot penilaian ekstra mung penting yen pipeline bedah ngisi; priksa kendala hilir.
- **Nilai tarif tanpa mekanisme pambayaran**: ing pambayaran campuran, aktivitas ekstra bisa ora nggawa penghasilan ekstra; nilai bisa dadi pangurangan dhaptar tunggu (deleng [dampak dhaptar tunggu](../dampak-dhaptar-tunggu/)).
- **Nampilake kapasitas minangka awis** — iki manfaat non-cash-releasing andalan; wenehana label (deleng [cash-releasing vs non-cash-releasing](../penghematan-cash-releasing-vs-non-cash-releasing/)).

## Sumber

- NHS England, NHS Payment Scheme. <https://www.england.nhs.uk/pay-syst/national-tariff/national-tariff-payment-system/>
- NHS England, elective care recovery plan. <https://www.england.nhs.uk/coronavirus/publication/delivery-plan-for-tackling-the-covid-19-backlog-of-elective-care/>
