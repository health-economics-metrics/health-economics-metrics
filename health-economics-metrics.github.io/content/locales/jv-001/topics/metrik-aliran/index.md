# Metrik Aliran (Flow Metrics)

Metrik aliran ngukur kepriye karya obah liwat sistem panyampaian: cycle time, lead time, throughput, work in progress (WIP), lan efisiensi aliran. Iki diatur dening Hukum Little — matematika antrian sing padha sing ngatur amben rumah sakit lan dhaptar tunggu.

## Kenapa Iki Penting

Umume wektu panyampaian dudu karya — iku ngenteni. Studi efisiensi-aliran karya kawruh rutin nemokake item mung digarap aktif **5–15%** saka wektu trep; sisane antrian. Tegese akselerasi paling murah iku ngilangi antrian, dudu nyewa — persis wawasan sing ditemokake program aliran-pasien rumah sakit babagan amben. Kanggo apa wae sing duwe [biaya keterlambatan](../biaya-keterlambatan/), metrik aliran nemokake ing ngendi biaya tundha ngumpul.

## Matematikane

```
Cycle time      = t(rampung) − t(diwiwiti)
Lead time       = t(dikirim) − t(dijaluk)     (kalebu antrian pra-karya)
Throughput      = item rampung / periode
WIP             = item sing diwiwiti nanging durung rampung
Efisiensi aliran = wektu aktif / (aktif + wektu ngenteni) × 100

Hukum Little:  rata-rata WIP = throughput × rata-rata cycle time
               (setara: cycle time = WIP / throughput)
```

Hukum Little iku tuas: ing throughput tetep, nyuda WIP nyuda cycle time proporsional. Iki uga mlakokake rumah sakit: `amben dienggo = admisi/dina × lama inap`.

## Conto Petungan

Tim duwe 40 item ing proses lan ngrampungake 10/minggu: cycle time = 40/10 = 4 minggu. Dheweke nggawe wates WIP, nyuda WIP dadi 15: cycle time = 15/10 = **1.5 minggu** — wong padha, throughput padha, panyampaian 62% luwih cepet, mung saka disiplin antrian.

Diregani nganggo CoD: yen item rata-rata £3,000/minggu biaya tundha, saben item saiki ngentekake 2.5 minggu luwih sithik ing antrian: 10 item/minggu × 2.5 × 3,000 = **£75,000/minggu biaya tundha dieliminasi** — saka owah-owahan kabijakan sing ora ana biayane.

Pantulan rumah sakit: 40 admisi/dina × 6.0 dina LOS = 240 amben; nyuda ngenteni non-klinis ing njero LOS dadi 5.6 dina lan 16 amben bebas ([lama inap](../lama-inap/)) — hukum padha, tuas padha.

## Sambungan karo Rékayasa Piranti Lunak

Metrik aliran iku basa bareng antarane rékayasa panyampaian lan operasi kesehatan:

- **Tolok ukur sub-tahap PR** (LinearB, ~8M PR): pickup time elite < 7j, review < 6j, total cycle < ~26j — pickup time iku antrian murni, sing pertama diserang.
- **[Dhaptar tunggu](../dampak-dhaptar-tunggu/)** iku backlog; **[RTT](../rujukan-menyang-perawatan/)** iku lead time; **[okupansi amben](../dina-amben-sing-dihemat/)** iku WIP. Perbaikan pindhah ing loro arah: wates WIP ↔ pelicinan admisi; instrumentasi wektu-antrian ↔ pelacakan tahap-jalur.
- Efisiensi aliran ing ngisor 15% iku normal ing loro domain, lan loro-lorone ndhelikake amarga *wong* sibuk nalika *karya* ngenteni — ukuren jam karya, dudu jam pekerja.

## Jebakan

- **Nyembah utilisasi**: ndorong utilisasi pekerja nganti 100% njeblug wektu antrian sacara nonlinear (M/M/1: ngenteni ∝ ρ/(1−ρ)) — sebab rumah sakit 95%-kebak macet lan tim 95%-dialokasi mandheg.
- **Rata-rata ing distribusi miring**: cycle time iku buntut-abot; ramalake nganggo persentil (p85), dudu rata-rata.
- **Nyuda WIP kanthi nolak karya ing hulu** lan nyebut perbaikan aliran — permintaan ora ilang, antri ing njaba wates pangukuran (versi rumah sakit: ambulans ngenteni ing njaba ED).

## Sumber

- Little's Law and flow metrics overviews. <https://agility-at-scale.com/safe/lpm/flow-metrics/> ; <https://getdx.com/blog/flow-metrics/>
- LinearB engineering benchmarks. <https://linearb.io/resources/engineering-benchmarks>
- Reinertsen DG, *The Principles of Product Development Flow*.
