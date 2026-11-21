# Elisitasi Utilitas Time Trade-Off (Time Trade-Off, TTO)

TTO iku metode standar kanggo ngelisitasi nilai utilitas kahanan-kesehatan langsung saka responden, tinimbang nggawe sing. Iku salah siji metode elisitasi — bareng standard gamble lan eksperimen pilihan-diskret — sing ngasilake set nilai ing mburi instrumen kaya [EQ-5D](../eq-5d/), lan mula ing mburi umume petungan [QALY](../taun-urip-sing-disesuaikan-kualitas/) ing hilir.

## Kenapa Iki Penting

Saben bobot utilitas sing nyuplai petungan QALY kudu asale saka endi wae. TTO iku carane: kanggo kahanan sing dianggep luwih apik tinimbang mati, responden ditakoni pira taun `X` ing kesehatan kebak sing dianggep setara karo `T` taun ing kahanan cacat (`X < T`); utilitas iku `X / T`. Kanggo kahanan sing dianggep sawetara responden luwih elek tinimbang mati, rumus standar ambruk (ora bisa makili utilitas ing ngisor nol kanthi resik), mula TTO lanjutan ditrapake. Insinyur piranti lunak utawa analis sing nganggep bobot utilitas minangka input sing diwenehake, tanpa ngerti butuh protokol elisitasi sing divalidasi kanggo ngasilake, siji langkah adoh saka angka sing ora bisa dibela yen ditantang.

## Matematikane

```
TTO standar (kahanan luwih apik tinimbang mati):
  utilitas = wektu_ing_kesehatan_kebak / wektu_ing_kahanan_cacat

TTO lanjutan (kahanan luwih elek tinimbang mati):
  utilitas = -wektu_didagang_kanggo_mati / (total_durasi - wektu_didagang_kanggo_mati)
```

`wektu_ing_kesehatan_kebak` / `wektu_ing_kahanan_cacat` — taun `X` ing kesehatan kebak sing dinilai setara karo `T` taun ing kahanan cacat. `wektu_didagang_kanggo_mati` / `total_durasi` — ing rumusan luwih-elek-tinimbang-mati, taun `a` saka umur sisa `T`-taun sing responden gelem dagang kanggo mati langsung, luwih milih `T − a` taun ing kesehatan kebak banjur mati tinimbang `T` taun ing kahanan luwih-elek-tinimbang-mati. Asile negatif, dijangkar supaya mati = 0.

## Conto Petungan

**Standar**: responden ing kahanan cacat 10 taun lan ora mbedakake karo 7 taun ing kesehatan kebak: utilitas = 7 / 10 = **0.7**.

**Luwih elek tinimbang mati**: ing umur sisa 10-taun, responden gelem dagang 2 taun kanggo mati langsung — luwih milih 8 taun ing kesehatan kebak banjur mati tinimbang 10 taun ing kahanan luwih-elek-tinimbang-mati: utilitas = −2 / (10 − 2) = −2 / 8 = **−0.25**.

## Sambungan karo Rékayasa Piranti Lunak

Titik sing padha sing ditemoni survei DevEx utawa keterlibatan nalika njaluk wong menehi rating barang ing skala 0–10 sing ora dipriksa ditrapake ing kene kanthi kosok balene: TTO ana persis amarga "mung takon wong kanggo ngrating" dudu metode elisitasi sing divalidasi dhewe. Sadurunge mbangun indeks komposit — skor DevEx, indeks keterlibatan, skala burnout — ing ndhuwur angka sing dirating-dhewe, takon apa sing ngelisitasi lan apa metode kuwi divalidasi, pitakon sing padha sing ditakoni ekonom kesehatan babagan bobot utilitas sadurunge mlebu QALY.

## Jebakan

- **Generalisasi nilai-individu**: nilai TTO dielisitasi saka *sampel* masarakat umum (utawa pasien), dudu individu sing perawatane arep diputusake — nggunakake nilai TTO siji responden kaya generalisasi iku kesalahan sampling.
- **Rumusan sing salah kanggo kahanan**: rumus TTO standar nganggep kahanan jelas luwih apik tinimbang mati; nrapake kanggo kahanan sing dianggep sawetara responden luwih elek tinimbang mati, tanpa ngalih menyang rumusan lanjutan, meneng-meneng ngasilake utilitas sing salah (positif).
- **Durasi sing ora bisa dibandhingake**: nilai TTO sing dielisitasi nganggo durasi umur sisa `T` beda kanggo perbandingan luwih-elek-tinimbang-mati ora langsung bisa dibandhingake tanpa mriksa desain studi njaga `T` konstan.

## Sumber

- Torrance GW. "Social preferences for health states: an empirical evaluation of three measurement techniques." Socioecon Plan Sci. 1976;10(3):129-36.
- Patrick DL, Starks HE, Cain KC, Uhlmann RF, Pearlman RA. "Measuring preferences for health states worse than death." Med Decis Making. 1994;14(1):9-18.
