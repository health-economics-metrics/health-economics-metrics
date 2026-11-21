# Tingkat Ora-Rawuh (Did-Not-Attend, DNA Rate)

Tingkat DNA iku persentase janji sing dipesen ing ngendi pasien ora rawuh lan ora mbatalake. Dokter, ruangan, lan slot wis dibayar; ora ana sing kedadean. Iku metrik limbah paling murni ing perawatan kesehatan — lan siji saka sing paling bisa didandani nganggo piranti lunak.

## Kenapa Iki Penting

Angka NHS England (2019): janji dokter umum sing kelalen ngluwihi 15 yuta/taun ing ~£30 saben siji — luwih saka **£216M/taun** — lan DNA rawat jalan rumah sakit ~8M/taun (~6.4% janji) kanthi rata-rata ~**£160** saben slot sing kelalen. Amarga biaya marginal pangeling mung sen lan nilai sing dipulihake yaiku slot klinis kanthi staf lengkap, pangurangan DNA duwe aritmetika ROI paling apik ing kesehatan digital, mula pangeling SMS, pesen ulang gampang, lan overbooking prediktif kalebu kemenangan kesehatan digital pisanan sing kabukten.

## Matematikane

```
Tingkat DNA = DNA / janji sing dipesen × 100

Nilai pangurangan = janji × Δ tingkat DNA × nilai saben slot sing dipulihake

nilai saben slot sing dipulihake: slot diisi maneh (nilai aktivitas / pangurangan
dhaptar tunggu) utawa ora (wektu staf sebagian bisa dienggo maneh) — mekanisme penting,
kaya ing bed-days-saved.md.
```

## Conto Petungan

Departemen rawat jalan: 200,000 janji/taun, tingkat DNA 8%. Layanan pangeling-plus-pesen-ulang (SMS kanthi pesen ulang siji-ketuk, info transportasi, format aksesibel) nyuda DNA dadi 5.5%.

```
Slot sing dipulihake = 200,000 × 0.025 = 5,000/taun
Diisi maneh saka dhaptar tunggu ing ~£160 nilai rawat jalan rata-rata:
  5,000 × £160 = £800,000/taun aktivitas sing dipulihake
Biaya layanan: 200,000 × £0.40 = £80,000/taun

Imbal balik ≈ 10:1, plus 5,000 pasien dhaptar tunggu ditangani luwih awal
(deleng waiting-list-impact.md lan referral-to-treatment.md).
```

Ukuran efek (2.5 poin) iku realistis: RCT pangeling terus nuduhake pangurangan DNA relatif 25–40%.

## Sambungan karo Rékayasa Piranti Lunak

- **Iki masalah sistem penjadwalan**: pangeling, pesen ulang layanan-mandiri, isi-otomatis dhaptar tunggu saka pembatalan, lan model prediksi ora-rawuh sing ngarahake double-booking sing disasar. Saben siji iku rékayasa piranti lunak biasa kanthi kasus ekonomi sing ora biasa cetha.
- **Analog rékayasa**: ora-rawuh kanggo kapasitas sing dipesen — slot CI sing dipesen nanging nganggur, kapasitas cloud sing dipesen, ruang rapat, panel wawancara. Ekonomine pindhah: dorongan otomatis murah (utawa pelepasan-otomatis reservasi sing ora dienggo) mulihake kapasitas sing dikomit sing larang.
- **Pratayang etika prediksi**: model ora-rawuh sing dilatih ing data kehadiran nyandi kekurangan lan alangan akses; nggunakake kuwi kanggo *ngedhunake prioritas* sing mungkin ora rawuh nggedhekake ketimpangan, nggunakake kanggo *ndhukung* kehadiran (bantuan transportasi, alternatif telpon) nyuda. Deleng [jangkauan lan keadilan](../jangkauan-lan-keadilan/).

## Jebakan

- **Ngetung dibatalake-lan-dipesen-ulang minangka nilai sing dipulihake kaping pindho.**
- **Ngregani slot sing dipulihake sing ora diisi maneh** — slot kosong sing wis dikirimi pangeling isih kosong.
- **Ngoyak DNA nganti nol**: poin DNA pungkasan iku pasien sing ngadhepi alangan nyata; pendekatan punitif (dipulangake sawise N DNA) nyuda metrik kanthi ninggalake pasien.

## Sumber

- NHS England, "Missed GP appointments costing NHS millions" (2019). <https://www.england.nhs.uk/2019/01/missed-gp-appointments-costing-nhs-millions/>
- DNA cost summaries. <https://www.deep-medical.ai/cost-of-missed-nhs-appointments/>
