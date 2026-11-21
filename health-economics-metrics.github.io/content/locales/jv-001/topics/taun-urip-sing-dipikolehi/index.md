# Taun Urip sing Dipikolehi (Life-Years Gained, LYG)

Taun urip sing dipikolehi iku kaslametan tambahan sing disebabake intervensi, tanpa penyesuaian kualitas: area antarane kurva kaslametan kanthi lan tanpa intervensi. Taun urip sing dipikolehi nilai-padha (evLYG) iku varian modern sing menehi kredit padha marang kabeh perpanjangan urip.

## Kenapa Iki Penting

LYG iku asil kesehatan paling mentah: sepira luwih dawa wong urip? Penting nalika data kualitas ilang, nalika mbandhingake karo pamirsa sing skeptis-QALY, lan ing onkologi ing ngendi kurva kaslametan iku output uji utama. **evLYG** (dienggo institut ICER AS bareng biaya/QALY) ana kanggo alasan etika: QALY ngregani taun urip sing dilanjutake miturut utilitas pasien, mula nglanjutake urip wong sing duwe disabilitas "diitung luwih sithik" — evLYG ngregani saben taun sing dilanjutake ing utilitas tetep, ngilangi diskriminasi kuwi.

## Matematikane

```
LYG = mean kaslametan_anyar − mean kaslametan_pembanding
    = area antarane kurva kaslametan (diwatesi ing cakrawala wektu)

Pandangan QALY babagan perpanjangan urip:  perpanjangan × utilitas pasien
Pandangan evLYG babagan perpanjangan urip: perpanjangan × utilitas tetep (ICER nganggo ~0.851,
                                           utilitas populasi AS rata-rata)
```

Loro-lorone [didiskon](../diskon-lan-preferensi-wektu/) ing model ekonomi.

## Conto Petungan

Algoritma peringatan-dini sepsis ing rumah sakit: pemodelan nuduhake antibiotik luwih awal nyegah 12 pati/taun; umur rata-rata pasien kuwi menehi 8 taun urip sing isih ana saben siji ing utilitas 0.7.

```
LYG   = 12 × 8            = 96 taun-urip/taun
QALY  = 96 × 0.7          = 67.2
evLYG = 96 × 0.851        = 81.7
```

Ing £20,000 saben QALY, pigura QALY ngregani kaslametan £1.34M/taun; pigura evLYG £1.63M. Jurang kuwi persis pertimbangan etika apa taun urip ing utilitas 0.7 regane 70% saka siji "kebak." Dossier serius nglaporake loro.

## Sambungan karo Rékayasa Piranti Lunak

- Analisis kaslametan iku piranti bareng: kurva Kaplan-Meier kanggo pasien lan kanggo *layanan* (wektu-nganti-gagal, wektu-nganti-churn) iku matematika sing padha. "Taun-layanan sing dipikolehi" saka investasi keandalan = area antarane kurva kaslametan sistem kanthi/tanpa — pigura sing luwih jujur tinimbang klaim MTTF titik.
- evLYG uga nggawa peringatan desain-metrik kanggo rékayasa: metrik produktivitas apa wae sing mbobot output nganggo faktor "kualitas tim" bakal sacara sistematis nyepelekake perbaikan kanggo tim sing kekurangan utawa berjuang — kadhang sampeyan pengin varian nilai-padha kanthi sengaja.

## Jebakan

- **Kaslametan median vs mean**: model ekonomi butuh mean (area ing ngisor kurva); uji asring nggawe judhul median. Beda banget ing distribusi miring.
- **Ekstrapolasi ngluwihi tindak lanjut uji** nguwasani LYG sing dimodelake ing penyakit kronis — nyatakake model ekstrapolasi lan ujine ing [analisis sensitivitas](../analisis-sensitivitas/).
- **Ngaku pati sing dicegah saka data sadurunge/sawise observasional** tanpa nyetel campuran kasus lan tren sekuler.

## Sumber

- York Health Economics Consortium glossary: life-years gained. <https://yhec.co.uk/glossary/life-years-gained/>
- ICER, "Cost-Effectiveness, the QALY, and the evLYG." <https://icer.org/our-approach/methods-process/cost-effectiveness-the-qaly-and-the-evlyg/>
