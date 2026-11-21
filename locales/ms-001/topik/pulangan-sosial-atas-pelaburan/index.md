# Pulangan Sosial atas Pelaburan (SROI)

SROI memanjangkan [ROI](../pulangan-pelaburan/) kepada hasil yang tidak dihargai pasaran — kesejahteraan, hubungan sosial, impak alam sekitar — dengan memonetisasinya menggunakan proksi kewangan, untuk *semua* pihak berkepentingan yang terjejas.

## Mengapa ia penting

Banyak yang dihasilkan intervensi kesihatan dan komuniti tidak pernah menyentuh baris bajet: kesunyian berkurangan, kelegaan penjaga, keuntungan pekerjaan, maruah. SROI, dikawal tujuh prinsip Social Value International (libatkan pihak berkepentingan, nilai apa yang penting, jangan tuntut berlebihan, telus, sahkan…), menghasilkan pernyataan seperti "£3.20 nilai sosial bagi setiap £1 dilaburkan." Keperluan nilai-sosial perolehan awam UK menjadikan bukti gaya SROI relevan secara komersial: bidaan untuk kontrak awam (termasuk NHS) mendapat mata bagi nilai sosial yang ditunjukkan.

## Matematiknya

```
Nisbah SROI = PV(hasil sosial dimonetisasi) / PV(pelaburan)

Bagi setiap hasil:
  nilai = kuantiti × proksi kewangan × atribusi × (1 − berat-mati) × (1 − penyesaran)

berat-mati (deadweight) = akan berlaku juga tanpa intervensi
atribusi                = bahagian disebabkan oleh pihak lain
penyesaran              = manfaat dipindahkan dari tempat lain dan bukan dicipta
susut-turun (drop-off)  = pereputan hasil selama bertahun
```

Faktor pelarasan ialah integriti kaedah: tanpanya, SROI ialah fiksyen dengan tanda mata wang.

## Contoh penyelesaian

Aplikasi persahabatan yang menghubungkan warga emas terpencil dengan sukarelawan; kos program £200,000/tahun; 1,500 pasangan aktif.

```
Hasil: kesunyian berkurangan bagi 1,500 orang
  proksi: penilaian kesejahteraan "kelegaan daripada kesunyian" ≈ £1,800/orang/thn
  berat-mati 25% (sesetengah akan menemui hubungan juga)
  atribusi 80% (sedikit kredit kepada perkhidmatan lain)

Nilai = 1,500 × 1,800 × 0.80 × 0.75 = £1,620,000

Hasil: lawatan GP berkurangan, 1,500 × 1.2 lawatan × £42 = £75,600 (sebenar-pembayar)

SROI = (1,620,000 + 75,600) / 200,000 ≈ 8.5 : 1
```

Perhatikan nisbah ialah 96% kesejahteraan dinilai-proksi dan 4% tunai keras. Itu SROI sah — tetapi mesti dibentangkan sebagai nilai sosial, tidak sekali-kali dibiarkan membayangkan £1.7J boleh disimpan.

## Kaitan dengan kejuruteraan perisian

SROI ialah kerangka jujur untuk kerja kejuruteraan yang penerima manfaatnya di luar pasukan membayar: penyelenggaraan sumber terbuka, penambahbaikan kebolehcapaian, kerja platform yang digunakan pasukan lain, pelaburan komuniti pembangun. Mekanik yang boleh dipindahkan: kenal pasti semua pihak berkepentingan, monetisasi dengan proksi dinyatakan, dan gunakan diskaun berat-mati/atribusi (adakah pembaikan OSS itu akan berlaku juga? berapa bahagian keuntungan kerja anda berbanding ekosistem?). Disiplin *mendiskaun tuntutan impak anda sendiri* ialah yang membezakan SROI daripada nombor pemasaran.

## Perangkap

- **Membeli-belah proksi**: memilih penilaian kesejahteraan paling murah hati yang ada.
- **Melangkau berat-mati/atribusi** — penggembungan paling lazim, selalunya menggandakan nisbah.
- **Perbandingan nisbah merentas kajian**: nisbah SROI sensitif kaedah; bandingkan hanya dalam kerangka konsisten.
- **Membentangkan nilai sosial sebagai penjimatan boleh-tunaikan** kepada pemegang bajet.

## Sumber

- Social Value International, Guide to SROI. <https://www.socialvalueint.org/guide-to-sroi>
- UK Government guide to SROI. <https://www.gov.uk/government/publications/a-guide-to-social-return-on-investment>
