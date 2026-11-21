# Ekonomi Pemantauan Pesakit Jauh

Ekonomi bayaran balik dan offset-kos pemantauan pesakit di rumah: di AS, timbunan hasil kod CPT yang ditakrifkan; dalam perkhidmatan kesihatan kebangsaan, ekonomi pengelakan kemasukan dan wad maya sehingga penggantian penuh **hospital-di-rumah**.

## Mengapa ia penting

RPM ialah tempat data peranti menjadi penjagaan kesihatan yang boleh dibil. Struktur Medicare AS (purata kebangsaan 2025) luar biasa jelas:

```
99453  penyediaan & pendidikan pesakit  ~$19.73  sekali (selepas 16 hari data)
99454  bekalan peranti + penghantaran   ~$43.03  setiap 30 hari — MEMERLUKAN ≥16 hari
                                                  bacaan dalam 30
99457  pengurusan 20 min pertama/bulan  ~$47.87  memerlukan ≥20 minit direkod
99458  setiap 20 min tambahan            ~$38.49
```

Bulan-pesakit patuh menyusun kepada kira-kira **$90–130 PMPM**. Di sisi offset-kos, program hospital-di-rumah (waiver Penjagaan Hospital Akut di Rumah CMS: 300+ hospital) menunjukkan ~$1,800–$3,000 dijimatkan setiap pertemuan berbanding penjagaan pesakit dalam dengan kemasukan semula dan jangkitan lebih rendah — demonstrasi paling jelas bahawa pemantauan serta penjagaan maya boleh menggantikan sumber paling mahal dalam sistem, iaitu katil berkakitangan.

## Matematiknya

```
Hasil RPM (AS)  = didaftarkan × pecahan patuh-pengebilan × timbunan kod PMPM
  — peraturan 16-hari menjadikan pematuhan masa-pakai (wearable-validation.md)
    pemboleh ubah hasil, dan peraturan 20-minit menjadikan pembalakan
    masa klinikal keperluan kejuruteraan

Nilai gaya-NHS  = kemasukan dielakkan × kos kemasukan marginal
                + hari katil digantikan × (kos hari pesakit dalam − wad maya)
                − kos perkhidmatan (peranti, platform, kakitangan pemantauan)
  (lihat emergency-attendance-avoidance.md dan bed-days-saved.md untuk
   peraturan atribusi dan kos marginal)
```

## Contoh penyelesaian

Amalan AS mendaftarkan 400 pesakit hipertensi; 70% memenuhi ambang 16-hari dalam bulan lazim; minit pengurusan direkod bagi 60%:

```
Hasil bulanan ≈ 400 × [0.70 × 43.03 + 0.60 × 47.87] = 400 × 58.84 ≈ $23,500
Tahunan ≈ $282,000; kos perkhidmatan (peranti $12/bln, kakitangan 0.8 FTE) ≈ $180,000
Margin ≈ $100k/tahun — dan perhatikan tuasnya ialah tuas kejuruteraan:
menaikkan pematuhan 16-hari daripada 70% → 85% menambah ~$31k/tahun
(keselesaan peranti, kebolehpercayaan segerak, reka bentuk peringatan).
```

Cermin NHS: wad maya 50-katil pada penghunian 80% menggantikan hari pesakit dalam pada penjimatan bersih £150/hari ≈ 50 × 0.8 × 365 × 150 ≈ **£2.19J/tahun** kasar — berbanding platform, peranti dan pasukan kejururawatan komuniti yang mengkakitanginya.

## Kaitan dengan kejuruteraan perisian

Platform RPM ialah produk jarang di mana **masa operasi dan kebolehpercayaan segerak bertukar terus kepada hasil** (seminggu segerak gagal memutuskan get 16-hari bagi satu kohort) dan di mana penjejakan masa gred audit (peraturan 20-minit) ialah ciri kelas pertama, bukan renungan kemudian. Bina untuk: papan pemuka pematuhan setiap pesakit yang memaparkan bulan pengebilan berisiko ketika masih boleh dipulihkan; jejak data bercap masa, nyata-pengusikan (audit pembayar rutin); dan penalaan ekonomi amaran — setiap amaran menggunakan minit pasukan pemantauan, yang kedua-duanya unit boleh dibil dan sumber terhad ([ekonomi saringan](../ekonomi-saringan/) mengawal pilihan ambang).

## Perangkap

- **Pendaftaran ≠ hasil**: pecahan patuh ialah nombornya; modelkan, jangan andaikan.
- **Kod AS dipindahkan ke kes NHS** — perkhidmatan kesihatan kebangsaan membeli pengelakan kemasukan, bukan timbunan CPT; jalankan model kedua.
- **Tuntutan offset pada kos purata** bagi kemasukan yang kos tetapnya kekal (lihat [kos marginal lwn purata](../kos-marginal-lwn-kos-purata/)).
- **Ketepuan pasukan pemantauan**: volum amaran berskala dengan pendaftaran; baris kakitangan ialah kekangan mengikat yang ditinggalkan kebanyakan model.

## Sumber

- RPM CPT codes and 2025 rates. <https://blog.prevounce.com/quick-guide-remote-patient-monitoring-rpm-cpt-codes-to-know>
- CMS hospital-at-home outcomes reporting. <https://www.mcknightshomecare.com/news/hospital-at-home-achieved-cost-savings-among-all-top-diagnosis-groups-cms-reports/>
- Telehealth.HHS.gov, billing for RPM. <https://telehealth.hhs.gov/providers/best-practice-guides/telehealth-and-remote-patient-monitoring/billing-remote-patient>
