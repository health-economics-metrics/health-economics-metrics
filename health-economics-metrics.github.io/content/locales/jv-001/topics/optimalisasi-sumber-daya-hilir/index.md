# Optimalisasi Sumber Daya Hilir (Downstream Resource Optimization)

Ngirit sajam kanggo praktisi senior — dokter umum, registrar senior, konsultan — asring nyegah tundha bottleneck kanggo kabeh tim multi-disiplin (MDT) perawat, juru tulis administratif, lan terapis sing ngenteni persetujuan klinis. Nilai mbukak bottleneck iku throughput kabeh sing ana ing hilire.

## Kenapa Iki Penting

Perawatan kesehatan mlaku ing rantai otorisasi: pulang ngenteni tandha tangan konsultan, rencana perawatan ngenteni review MDT, rujukan ngenteni triase. Nalika peran gerbang telat, biayane dudu sajam siji wong — iku wektu nganggur utawa keblokir ing saben peran gumantung, plus wektu pasien ing limbo ([dina amben](../dina-amben-sing-dihemat/) ekstra, [ngenteni RTT](../rujukan-menyang-perawatan/) luwih suwe). Iki teori kendala ditrapake ing jalur klinis: sajam sing dihemat *ing kendala* regane throughput marginal kabeh sistem; sajam sing dihemat ing panggonan liya regane luwih sithik.

## Matematikane

```
Nilai mbukak bottleneck = Σ ing peran hilir (jam keblokir sing dibebasake × biaya unit)
                    + gain throughput jalur × nilai saben jalur rampung

Kontras: nilai jam sing padha sing dihemat ing peran non-gerbang ≈ nilai kapasitas
peran kuwi wae (deleng practitioner-time.md).
```

Kenali kendala kanthi empiris: ing endi karya antri paling suwe? Kothak mlebu sapa sing dilacak tundha?

## Conto Petungan

Pulang bangsal mbutuhake review konsultan saben esuk. Konsultan ngentekake 90 mnt/dina ngumpulake informasi sing kasebar ing sistem; review rampung jam 14:00, lan 6 pulang/dina rampung telat banget kanggo dina kuwi — saben siji ngentek dina amben sing bisa dihindari.

Dasbor ringkesan-pulang (lab, obat, tandha ing siji tampilan) nyuda ngumpulake dadi 20 menit; review rampung jam 11:30:

```
Dina amben sing dihindari = 4 saka 6 pulang telat × 365 ≈ 1,460 dina amben/taun
Mbukak hilir: 2 koordinator pulang + apotek + transportasi
              sadurunge nganggur-banjur-keburu saben sore —
              ~3 jam-staf/dina wektu keblokir dibebasake ≈ 1,100 jam/taun
```

70 menit konsultan dhewe iku bagean *paling cilik* saka nilai — titik metrik iki. Regani dina amben miturut mekanisme (deleng [dina amben sing dihemat](../dina-amben-sing-dihemat/)) lan jam staf minangka kapasitas.

## Sambungan karo Rékayasa Piranti Lunak

Iki code review, persetujuan arsitektur, lan kothak mlebu staff engineer. Nalika lima insinyur ngenteni sedina kanggo siji wong sing bisa nyetujoni desain, biayane lima insinyur-dina plus sedina [biaya keterlambatan](../biaya-keterlambatan/) ing karya dhewe — dudu sajam reviewer. Piranti sing nyuda tugas peran gerbang (konteks review sing luwih apik, pra-pamriksan otomatis, dasbor sing ngumpulake sing dibutuhake sing nyetujoni) tuku throughput sistem, dudu kenyamanan individu. Ukur wektu jupuk/ngenteni ing kendala (deleng [metrik aliran](../metrik-aliran/)) — iku padha piranti lunak saka jurang pulang jam 14:00.

## Jebakan

- **Ngoptimalake non-kendala**: piranti apik kanggo peran sing ora ana sing antri ing mburine ngasilake nilai sistem meh nol.
- **Migrasi kendala**: bukak konsultan lan kendala pindhah (menyang apotek, menyang transportasi) — modelake kendala *sabanjure* sadurunge ngaku gain throughput lengkap.
- **Ngetung jam hilir minangka awis**: pelepasan wektu-keblokir iku kapasitas, kena [tes redeployment](../penghematan-cash-releasing-vs-non-cash-releasing/) biasa.

## Sumber

- Goldratt EM, *The Goal* (theory of constraints).
- NHS England, NHS productivity. <https://www.england.nhs.uk/long-read/nhs-productivity/>
