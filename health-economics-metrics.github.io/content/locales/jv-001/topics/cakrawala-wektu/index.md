# Cakrawala Wektu (Time Horizon)

Cakrawala wektu iku periode ing ngendi analisis ngetung biaya lan efek. Kudu cukup dawa kanggo nangkep kabeh beda sing bermakna antarane pilihan sing dibandhingake.

## Kenapa Iki Penting

Pilih cakrawala cendhak lan sampeyan kelalen manfaat telat (pencegahan) lan biaya telat (pangopènan). Pilih cakrawala kakehan dawa lan kabeh klelep ing ketidakpastian. Penilaian teknologi kesehatan asring nganggo cakrawala **seumur hidup** kanggo perawatan kanthi efek mortalitas; [analisis dampak anggaran](../analisis-dampak-anggaran/) kanthi sengaja nganggo cakrawala cendhak **1–5 taun** amarga pitakone keterjangkauan, dudu nilai. Cakrawala iku pilihan pemodelan sing dinyatakake, lan cakrawala ora cocog iku cara klasik kanggo dolanan perbandingan.

## Matematikane

Cakrawala iku wates ndhuwur panjumlahan ing evaluasi apa wae:

```
Nilai saiki net = Σ (t = 0 … T) [ (Manfaat_t − Biaya_t) / (1 + r)^t ]

T = cakrawala wektu (taun)
r = tingkat diskon (deleng discounting-and-time-preference.md)
```

Asil kudu dilaporake kanthi cakrawala dinyatakake, lan idealé ditampilake ing pirang-pirang cakrawala.

## Conto Petungan

Sistem e-resep biayane £2 yuta kanggo diimplementasi lan £200,000/taun kanggo mlaku. Nyegah kesalahan obat regane £600,000/taun (biaya perawatan cilaka sing dihindari).

Manfaat net miturut cakrawala (ora didiskon, kanggo kajelasan):

```
Cakrawala 1 taun:  −2,000,000 − 200,000 + 600,000  = −£1,600,000
Cakrawala 3 taun:  −2,000,000 + 3 × 400,000        = −£800,000
Cakrawala 5 taun:  −2,000,000 + 5 × 400,000        =  £0
Cakrawala 10 taun: −2,000,000 + 10 × 400,000       = +£2,000,000
```

Sistem "gagal" ing cakrawala apa wae ing ngisor 5 taun lan "sukses" ing 10. Ora ana sing wangsulan sing bener; laporan jujur nyatakake titik impas lan mbenerake cakrawala miturut umur sistem (pira suwe sadurunge diganti?).

## Sambungan karo Rékayasa Piranti Lunak

- **Evaluasi piranti sing diukur ing siji sprint** sacara sistematis kelalen penurunan kurva-sinau (biaya ing ngarep) lan pangopènan jangka dawa (biaya ing mburi). Pilot asisten coding AI sing diukur ing minggu 2 nangkep puncak anyar, dudu kahanan mapan.
- **Dawa kontrak ≠ cakrawala manfaat.** Kontrak SaaS 1-taun isih bisa dinilai sajrone 5 taun yen sampeyan realistis ngarep-arep pembaruan — nanging nyatakake.
- **Kasus panggantosan warisan** kudu mlaku nganti akhir-umur sing kredibel saka sistem lawas, dudu angka bunder sewenang-wenang.

## Jebakan

- **Blanja cakrawala**: milih cakrawala apa wae sing ndadekake pilihanmu menang. Daftarake cakrawala sadurunge ngitung asil.
- **Cakrawala beda kanggo pilihan beda** ing perbandingan sing padha.
- **Cakrawala seumur hidup tanpa diskon utawa analisis ketidakpastian** — manfaat taun-30 ing nilai nominal iku fiksi. Pasangake cakrawala dawa karo [analisis sensitivitas](../analisis-sensitivitas/).

## Sumber

- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- Sullivan SD, et al. "Budget Impact Analysis — Principles of Good Practice: Report of the ISPOR 2012 Budget Impact Analysis Good Practice II Task Force." Value in Health 2014;17(1):5–14. <https://pubmed.ncbi.nlm.nih.gov/24438712/>
