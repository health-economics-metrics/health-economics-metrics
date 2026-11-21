# Simulasi Kohort Markov (Markov Cohort Simulation)

Model kohort Markov iku teknik pemodelan HTA standar kanggo intervensi sing efeke dumadi ing pirang-pirang periode wektu (siklus), dudu sepisan. Kohort hipotetis diwiwiti kabeh ing siji kahanan kesehatan, lan saben siklus set probabilitas transisi tetep mindhah pecahan kohort antarane kahanan; biaya lan QALY ngumpul saben siklus proporsional karo pira kohort nempati saben kahanan, lan didiskon bali menyang nilai saiki. Insinyur piranti lunak apa wae sing mbangun model kasus bisnis kesehatan-digital pirang-pirang taun — ing ngendi pangguna utawa pasien pindhah antarane kahanan kaya "terlibat", "lapse", utawa "churn" sajrone wektu — nggawe struktur sing padha.

## Kenapa Iki Penting

Umume keputusan teknologi-kesehatan nyata dudu perbandingan sepisan biaya lan asil siji periode. Kondisi kronis berkembang, kambuh, nanggapi perawatan, utawa mateni, sajrone pirang-pirang taun — lan [analisis efektivitas-biaya](../analisis-efektivitas-biaya/) siji-periode ora bisa makili kuwi. Pengajuan NICE, ICER, lan CADTH kanggo intervensi penyakit kronis, dinilai liwat [penilaian teknologi kesehatan](../penilaian-teknologi-kesehatan/), meh tansah dibangun minangka model kohort Markov kanthi cakrawala wektu seumur hidup, amarga alternatife — nggawe model saben jalur pasien individu — ora bisa ditangani ing skala. Model Markov tingkat-kohort nuker sawetara realisme tingkat-individu (ora gampang makili memori kahanan kepungkur, mula "Markov": masa depan mung gumantung kahanan saiki) kanggo model sing transparan, bisa diaudit, lan cukup cepet kanggo mlaku ewonan kali ing [analisis sensitivitas probabilistik](../analisis-sensitivitas-probabilistik/).

## Matematikane

```
Pembaruan kohort siji siklus (vektor-baris x matriks transisi):
  kahanan_anyar[j] = sum_i kahanan[i] * matriks_transisi[i][j]

Biaya siji siklus:
  biaya_siklus = sum_s kahanan[s] * biaya_saben_siklus[s]

QALY siji siklus:
  qaly_siklus = sum_s kahanan[s] * utilitas[s] * dawa_siklus_taun

Simulasi lengkap ing `siklus` siklus, didiskon ing `tingkat_diskon`:
  total_biaya_didiskon  = sum_{t=0}^{siklus-1} biaya_siklus(kahanan_t)  / (1 + tingkat_diskon)^t
  total_qaly_didiskon   = sum_{t=0}^{siklus-1} qaly_siklus(kahanan_t) / (1 + tingkat_diskon)^t
  ing ngendi kahanan_0 = distribusi_awal, kahanan_{t+1} = majokake_kohort(kahanan_t, matriks_transisi)
```

Ndiskon saben siklus bali menyang nilai saiki nganggo persis rumus [diskon lan preferensi wektu](../diskon-lan-preferensi-wektu/), ditrapake siklus-saben-siklus tinimbang taun-saben-taun.

## Conto Petungan

**Klinis**: model 2-kahanan — `Sehat` lan `Mati` — ing ngendi 10% kohort mati saben siklus lan `Mati` iku nyerap (probabilitas transisi-dhewene 1.0; ngilangi self-loop kuwi bakal nggawe massa kohort ilang sawise siji siklus ing `Mati`). Kohort miwiti kabeh `Sehat`, biayane £1,000 saben siklus nalika `Sehat` (£0 yen wis `Mati`), lan entuk 0.8 QALY saben taun nalika `Sehat`. Disimulasikake 3 siklus taunan ing tingkat diskon 3.5% NICE:

```
Siklus 0: kahanan = [1.00, 0.00] (100% Sehat)
  biaya = £1,000.00, qaly = 0.800, faktor diskon = 1.000000
  didiskon: biaya = £1,000.00, qaly = 0.8000

Siklus 1: kahanan = [0.90, 0.10] (90% Sehat, 10% Mati)
  biaya = £900.00, qaly = 0.720, faktor diskon = 0.966184
  didiskon: biaya = £869.57, qaly = 0.6957

Siklus 2: kahanan = [0.81, 0.19] (81% Sehat, 19% Mati)
  biaya = £810.00, qaly = 0.648, faktor diskon = 0.933511
  didiskon: biaya = £756.14, qaly = 0.6049

Total biaya didiskon  ≈ £2,625.71
Total QALY didiskon   ≈ 2.1006
```

Kahanan saben siklus iku kahanan siklus sadurunge sing dilewatake liwat matriks transisi — 90% saka 90% sing isih `Sehat` ing siklus 1 tetep `Sehat` ing siklus 2 (0.9 × 0.9 = 0.81), dene 19% liyane saiki wis mati (0.9 × 0.1 + 0.1 × 1.0 = 0.19). Catet yen kohort ora tau ngosongake `Sehat` babar pisan: kanthi mortalitas 10% saben siklus konstan lan ora ana mlebu maneh, bagean `Sehat` bosok sacara geometris tinimbang tekan nol ing cacah siklus winates apa wae.

## Sambungan karo Rékayasa Piranti Lunak

Kanggo carane model HTA multi-siklus dienggo ing njero penilaian nyata, deleng [penilaian teknologi kesehatan](../penilaian-teknologi-kesehatan/) — kasus acuan sing ngatur tingkat diskon, sumber utilitas, lan cakrawala wektu apa sing kudu dienggo model Markov sing diajukake.

Model kohort Markov sacara struktural iku mesin-kahanan kanthi transisi probabilistik, dijalanake kanggo cacah tick tetep, ndiskon nilai saben tick. Wujud sing padha nyimulasikake retensi/transisi-kahanan kohort pangguna sajrone wektu — deleng [metrik DORA](../metrik-dora/) kanggo versi keandalan-operasional "pira bagean sistem ing kahanan degradasi periode iki, lan regane pira". Konkret:

- **Pemodelan retensi/churn** iku model kohort Markov kanthi kahanan kaya "aktif", "ing risiko", "churn": matriks transisi saben sasi tetep, dijalanake kanggo 12 utawa 24 siklus sasi, ngandhani cacah pangguna aktif (lan pendapatan) sing dikarepake ing sasi mbesuk apa wae, kaya `Sehat`/`Mati` ngandhani sing slamet sing dikarepake.
- **Keandalan lan ekonomi insiden**: kahanan sistem (sehat, degradasi, mati) bisa dimodelake kanthi cara sing padha, kanthi "biaya saben siklus" cilaka downtime ngumpul nalika sistem nempati kahanan degradasi/mati — ngowahi argumen frekuensi-insiden dadi argumen biaya-didiskon sing bisa dibandhingake karo biaya karya keandalan sing bakal ngowahi probabilitas transisi.
- **Kahanan nyerap minangka kahanan terminal**: `Mati` ing model klinis persis kahanan "langganan dibatalake" utawa "offline permanen" ing model piranti lunak — loro-lorone butuh probabilitas transisi-dhewe eksplisit 1.0, utawa simulasi meneng-meneng kelangan massa.

## Jebakan

- **Probabilitas transisi sing ora jumlah 1 saben baris.** Baris sing jumlahe luwih utawa kurang saka 1 meneng-meneng ndadekake kohort "bocor" utawa "tuwuh" massa saben siklus — tansah priksa jumlah baris sadurunge percaya output model, amarga ora ana sing ana ing struktur model dhewe sing menehi tandha kesalahan.
- **Dawa siklus kakehan kasar kanggo dinamika nyata penyakit.** Siklus taunan kanggo kondisi sing ngowahi kahanan kanthi signifikan ing minggu-minggu nyepelekake transisi sing kedadean ing tengah siklus; pilih dawa siklus sing cendhak relatif marang sepira cepet proses sing dimodelake bener-bener obah.
- **Lali self-loop kahanan nyerap.** Kahanan nyerap (pati, mandheg permanen) butuh probabilitas transisi-dhewe persis 1.0. Ilangi lan massa kohort ing kahanan kuwi nguap sawise siji siklus, nyepelekake biaya kumulatif utawa kerugian QALY.
- **Nganggep model wis divalidasi amarga mlaku.** Model kohort Markov kanthi probabilitas transisi sing katon masuk akal isih bisa salah sacara struktural (kahanan ilang, prilaku nyerap salah); validasi marang tolok ukur epidemiologis sing dikenal (contone apa kaslametan sing dimodelake ing 5 taun cocog karo kurva kaslametan sing diterbitake) sadurunge percaya output.

## Sumber

- Sonnenberg FA, Beck JR. "Markov models in medical decision making: a practical guide." Medical Decision Making. 1993;13(4):322-38. <https://pubmed.ncbi.nlm.nih.gov/8246705/>
- Briggs A, Sculpher M. "An introduction to Markov modelling for economic evaluation." PharmacoEconomics. 1998;13(4):397-409. <https://pubmed.ncbi.nlm.nih.gov/10178664/>
