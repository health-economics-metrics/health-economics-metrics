# Jumlah sing Perlu Diskrining (Number Needed to Screen, NNS)

NNS iku cacah wong sing kudu diskrining — dudu mung diobati — kanggo nyegah **siji** asil ora becik sajrone periode tindak lanjut sing ditetepake, diwenehi risiko dhasar populasi lan pangurangan risiko relatif sing digayuh deteksi lan perawatan awal. Iku analog tingkat-program-skrining saka NNT: NNT takon pira sing kudu *diobati* kanggo nyegah siji asil; NNS takon pira sing kudu ngliwati kabeh jalur *skrining-banjur-ngobati* kanggo tekan kana.

## Kenapa Iki Penting

Rembold ngenalake NNS ing 1998 khusus supaya program skrining bisa dibandhingake ing pijakan sing padha karo perawatan, amarga pangurangan risiko relatif judhul tes skrining ndhelikake rong bab sing ora ditindakake perawatan: risiko dhasar populasi sing bener-bener diundang skrining, lan kasunyatan yen saben wong sing diskrining nanggung biaya tes lan beban positif-palsu, dudu mung minoritas sing banjur entuk manfaat. Gerbang efektivitas-biaya National Screening Committee UK (deleng [ekonomi skrining](../ekonomi-skrining/)) dibangun ing persis bedane iki — program skrining kanthi pangurangan risiko relatif sing nyengsemake ing populasi risiko-dhasar-rendah isih bisa duwe NNS ewonan, ing wektu kuwi biaya program saben asil sing dicegah dadi pitakon nyata.

## Matematikane

```
NNS = 1 / (risiko_dhasar × pangurangan_risiko_relatif)

risiko_dhasar            = probabilitas asil ing populasi sing diskrining
                           sajrone periode tindak lanjut (0–1)
pangurangan_risiko_relatif = pangurangan risiko proporsional sing digayuh
                           perawatan-awal sing dimungkinake skrining (0–1)

Biaya program saben asil sing dicegah = NNS × biaya_saben_skrining
```

Bandhingake langsung karo [NNT](../jumlah-sing-perlu-diobati/): NNS nglipet efektivitas kabeh corong skrining → diagnosis → perawatan dadi siji angka, dene NNT wis nganggep pasien didiagnosis lan miwiti perawatan.

## Conto Petungan

Populasi target program skrining duwe risiko kedadean dhasar 2% sajrone periode studi (`risiko_dhasar = 0.02`), lan deteksi awal nggayuh pangurangan risiko relatif 25% (`pangurangan_risiko_relatif = 0.25`):

```
NNS = 1 / (0.02 × 0.25) = 1 / 0.005 = 200

200 wong kudu diskrining kanggo nyegah siji asil.
Ing £50 saben skrining:
Biaya program saben asil sing dicegah = 200 × £50 = £10,000
```

Angka £10,000 kuwi sing kudu ditimbang marang biaya asil dhewe lan QALY sing bakal ilang — perbandingan padha sing digawe [ekonomi pencegahan](../ekonomi-pencegahan/) kanggo program pencegahan umume.

## Sambungan karo Rékayasa Piranti Lunak

NNS iku "pira pangguna, kedadean, utawa panjaluk sing kudu ngliwati alur deteksi utawa triase kanggo nangkep siji positif bener sing pantes ditindakake" — langsung relevan karo sistem pemantauan lan triase adhedhasar-peringatan, ing ngendi kondisi target prevalensi-rendah nggedhekake NNS kanthi cara sing padha karo ambruke nilai prediktif positif (deleng [ekonomi skrining](../ekonomi-skrining/) lan [evaluasi AI klinis](../evaluasi-ai-klinis/)). Aturan pemantauan sing kudu ngolah 200 kedadean saben tangkapan nyata mung pantes dijalanake yen tangkapan regane paling ora 200 kali biaya triase saben-kedadean — aritmetika sing padha karo conto petungan kesehatan ing ndhuwur.

## Jebakan

- **Ngabaikake ketergantungan risiko dhasar**: tes utawa program skrining sing padha duwe NNS — lan efektivitas-biaya — beda banget ing populasi risiko-dhuwur versus risiko-rendah. Aja ngutip NNS tanpa nyatakake populasi sing diitung.
- **Ngetung denominator sing salah**: NNS ngetung wong sing *diskrining*, dudu wong sing tes positif utawa miwiti perawatan — wis ngemot efektivitas kabeh corong, mula ora kena dibandhingake karo metrik sing diitung ing positif wae.
- **Mbandhingake lintas periode tindak lanjut**: periode tindak lanjut sing luwih cendhak umume nggedhekake NNS, amarga luwih sithik kedadean sing diamati ing jendhela. Angka NNS mung bisa dibandhingake yen diitung ing durasi tindak lanjut sing padha.

## Sumber

- Rembold CM. "Number needed to screen: development of a statistic for disease screening." BMJ. 1998;317(7154):307-12.
