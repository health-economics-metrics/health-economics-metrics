# Ekonomi Pemantauan Pasien Jarak Adoh (Remote Patient Monitoring Economics)

Ekonomi reimbursement lan offset-biaya saka mantau pasien ing omah: ing AS, tumpukan pendapatan kode CPT sing ditetepake; ing layanan kesehatan nasional, ekonomi ngindhari-rawat-inap lan bangsal virtual nganti substitusi **hospital-at-home** lengkap.

## Kenapa Iki Penting

RPM iku ing ngendi data piranti dadi perawatan kesehatan sing bisa ditagih. Struktur Medicare AS (rata-rata nasional 2025) luar biasa eksplisit:

```
99453  setup & edukasi pasien         ~$19.73  sepisan (sawise 16 dina data)
99454  suplai piranti + transmisi     ~$43.03  saben 30 dina — MBUTUHAKE ≥16 dina
                                              pembacaan ing 30
99457  20 mnt pisanan manajemen/sasi  ~$47.87  mbutuhake ≥20 menit sing dicathet
99458  saben 20 mnt tambahan          ~$38.49
```

Sasi-pasien sing patuh numpuk kira-kira **$90–130 PMPM**. Ing sisi offset-biaya, program hospital-at-home (waiver Acute Hospital Care at Home CMS: 300+ rumah sakit) nuduhake ~$1,800–$3,000 sing dihemat saben pertemuan dibandhingake perawatan inap kanthi rawat inap ulang lan infeksi luwih sithik — demonstrasi paling jelas yen pemantauan plus perawatan virtual bisa ngganti sumber daya paling larang ing sistem, amben kanthi staf.

## Matematikane

```
Pendapatan RPM (AS) = kadaftar × pecahan patuh-penagihan × tumpukan kode PMPM
  — aturan 16-dina ndadekake kepatuhan wear-time (wearable-validation.md)
    dadi variabel pendapatan, lan aturan 20-menit ndadekake
    pencatatan wektu klinis syarat rékayasa

Nilai gaya-NHS    = rawat inap sing dihindari × biaya rawat inap marginal
                  + dina amben sing diganti × (rawat inap − biaya dina bangsal virtual)
                  − biaya layanan (piranti, platform, staf pemantauan)
  (deleng emergency-attendance-avoidance.md lan bed-days-saved.md kanggo
   aturan atribusi lan biaya marginal)
```

## Conto Petungan

Praktik AS ndaftarake 400 pasien hipertensi; 70% nyukupi ambang 16-dina ing sasi khas; menit manajemen dicathet kanggo 60%:

```
Pendapatan saben sasi ≈ 400 × [0.70 × 43.03 + 0.60 × 47.87] = 400 × 58.84 ≈ $23,500
Taunan ≈ $282,000; biaya layanan (piranti $12/sasi, staf 0.8 FTE) ≈ $180,000
Margin ≈ $100k/taun — lan tuas-tuase kabeh iku tuas rékayasa:
munggahake kepatuhan 16-dina saka 70% → 85% nambah ~$31k/taun
(kenyamanan piranti, keandalan sync, desain pangeling).
```

Pantulan NHS: bangsal virtual 50-amben ing okupansi 80% ngganti dina inap ing £150 penghematan net/dina ≈ 50 × 0.8 × 365 × 150 ≈ **£2.19M/taun** kotor — marang platform, piranti, lan tim perawat komunitas sing nyedhiyani staf.

## Sambungan karo Rékayasa Piranti Lunak

Platform RPM iku produk langka ing ngendi **uptime lan keandalan sync langsung dadi pendapatan** (minggu sync gagal ngrusak gerbang 16-dina kanggo kohort) lan ing ngendi pelacakan wektu kelas-audit (aturan 20-menit) iku fitur kelas-siji, dudu pikiran sawise kedadean. Bangun kanggo: dasbor kepatuhan saben-pasien sing nuduhake sasi penagihan beresiko nalika isih bisa dipulihake; jejak data bercap-wektu, tahan-ngganti (audit pembayar iku rutin); lan penyetelan ekonomi-peringatan — saben peringatan nggunakake menit tim pemantauan, sing loro-lorone unit sing bisa ditagih lan sumber daya langka ([ekonomi skrining](../ekonomi-skrining/) ngatur pilihan ambang).

## Jebakan

- **Pendaftaran ≠ pendapatan**: pecahan patuh iku angka; modelake, aja nganggep.
- **Kode AS dipindhah menyang kasus NHS** — layanan kesehatan nasional tuku ngindhari-rawat-inap, dudu tumpukan CPT; jalanake model nomer loro.
- **Klaim offset ing biaya rata-rata** kanggo rawat inap sing biaya tetepe tetep (deleng [biaya marginal vs rata-rata](../biaya-marginal-vs-rata-rata/)).
- **Saturasi tim pemantauan**: volume peringatan skala karo pendaftaran; garis staf iku kendala ngiket sing diilangi umume model.

## Sumber

- RPM CPT codes and 2025 rates. <https://blog.prevounce.com/quick-guide-remote-patient-monitoring-rpm-cpt-codes-to-know>
- CMS hospital-at-home outcomes reporting. <https://www.mcknightshomecare.com/news/hospital-at-home-achieved-cost-savings-among-all-top-diagnosis-groups-cms-reports/>
- Telehealth.HHS.gov, billing for RPM. <https://telehealth.hhs.gov/providers/best-practice-guides/telehealth-and-remote-patient-monitoring/billing-remote-patient>
