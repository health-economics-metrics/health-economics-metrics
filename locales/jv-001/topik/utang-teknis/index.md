# Utang Teknis (Technical Debt)

Utang teknis iku biaya mbesuk sing diimplikasikake saka keputusan cepet-cepet kepungkur ing basis kode: karya remediasi sing dibayar (**pokok**) lan seret terus-terusan marang panyampaian (**bunga**). Metode kuantifikasi kaya SQALE ngowahi saka metafora dadi kewajiban sing diregani.

## Kenapa Iki Penting

Ora dikuantifikasi, utang teknis iku keluhan; dikuantifikasi, iku kasus bisnis. Baseline industri (CAST Appmarq, 1,400 aplikasi / 550M LOC): historis ≈ **$3.61 pokok utang-teknis saben baris kode**, kanthi basis kode khas nggawa rasio utang 15–20% saka biaya mbangun maneh, versus bar kesehatan sing umum dienggo ≤5% (nilai "A" SonarQube). Pigura ekonomi kesehatan pas persis: utang iku *kondisi kronis* — ora diobati, berkembang, "bunga"-ne nambah minangka panyampaian luwih alon lan tingkat cacat luwih dhuwur, lan remediasi saingan kapasitas karo karya fitur persis kaya pencegahan saingan karo perawatan.

## Matematikane

```
Pokok SQALE        = Σ ing pelanggaran (wektu remediasi) × tarif biaya pangembang
Rasio utang teknis (TDR) = biaya remediasi / biaya pangembangan ulang × 100
                    (nilai SonarQube: A ≤ 5%, B ≤ 10%, C ≤ 20%, D ≤ 50%)

Bunga (angka sing mbenerake pelunasan):
  bunga/taun = Δ kacepetan panyampaian × nilai saben unit kacepetan
             + Δ tingkat cacat × biaya saben cacat

Kasus pelunasan = PV(bunga sing dihindari ing cakrawala) − biaya remediasi
                (didiskon — deleng discounting-and-time-preference.md)
```

Pokok nyatakake kewajiban; **bunga** nggawe kasus investasi. Mbayar pokok £500k kanggo ngindhari bunga £40k/taun iku dagang elek; kanggo ngindhari £400k/taun, apik banget.

## Conto Petungan

Lapisan integrasi rekam-klinis 400k-LOC: pokok SQALE 3,800 jam × £75 = **£285k**; TDR ≈ 12% (nilai C). Bunga sing diukur: tim sing nyenggol lapisan iki nuduhake cycle time 40% luwih dawa lan tingkat gagal-owah 2× versus baseline estate. Lapisan nyerep 6,000 jam-pangembang/taun:

```
Bunga ≈ 6,000 × 0.40 × £75        = £180,000/taun (seret kacepetan)
      + 12 kegagalan ekstra × £8,000 = £96,000/taun (rework/insiden)
      ≈ £276,000/taun

Remediasi 30% pokok paling elek (£85k) nyasar hotspot → pangurangan bunga
sing dimodelake 60%: ngirit ~£166k/taun. Payback ≈ 6 sasi.
```

Penargetan hotspot penting: bunga utang kumpul ing ngendi frekuensi-owah × kapadhetan-utang puncak — remediasi utang sing arang disenggol ora tuku apa-apa, kaya ngobati kondisi sing ora bakal berkembang ([ekonomi pencegahan](../ekonomi-pencegahan/)).

## Sambungan karo Rékayasa Piranti Lunak

Impor ekonomi kesehatan sing ningkatake argumen utang-teknis: nyatakake estate minangka **inventaris beban** (gaya-[DALY](../taun-urip-sing-disesuaikan-disabilitas/) — ing ngendi taun-rékayasa-sehat sing ilang?); mbenerake pelunasan nganggo matematika perkembangan, kanthi jujur (biasane efektif-biaya, dudu ngirit-biaya); bobotana remediasi sistem paling elek miturut [shortfall keparahan](../shortfall-qaly-lan-pengubah-keparahan/); lan ngirim usulan remediasi gedhe kanthi analisis offset sing slamet saka aturan [biaya hilir sing dihindari](../biaya-hilir-sing-dihindari/) — dibobot-probabilitas, didiskon, diitung sepisan.

## Jebakan

- **Pelaporan pokok-wae**: angka gedhe nakutake tanpa perkiraan bunga ora mbenerake apa-apa.
- **Angka utang sing digawe piranti dianggep harfiah**: SQALE ngetung pelanggaran aturan; kelalen utang arsitektur (jinis sing larang) lan ngetung hal sepele.
- **Utopianisme-utang-nol**: tingkat utang optimal dudu nol — utang iku leverage; pitakonane tingkat bunga.
- **"Tulis ulang ngindhari kabeh"**: usulan tulis ulang kudu lulus aturan offset sing padha — biaya kontrafaktual, probabilitas, diskon.

## Sumber

- CAST, technical debt estimation. <https://www.castsoftware.com/glossary/technical-debt-estimation>
- Letouzey J-L, "The SQALE method for evaluating Technical Debt." <https://www.researchgate.net/publication/239763591_The_SQALE_method_for_evaluating_Technical_Debt>
