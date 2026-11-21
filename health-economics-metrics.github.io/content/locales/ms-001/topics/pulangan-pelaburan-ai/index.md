# Pulangan Pelaburan AI

ROI AI ialah pulangan P&L terukur yang boleh dikaitkan dengan inisiatif AI. Penanda aras yang menyedarkan: penyelidikan "GenAI Divide" MIT 2025 mendapati bahawa walaupun pelaburan GenAI perusahaan sebanyak $30–40B, **~95% projek perintis tidak menunjukkan pulangan P&L yang boleh diukur** — dan 5% yang berjaya berkongsi tabiat yang dapat dikenal pasti.

## Mengapa ia penting

Sistem kesihatan mempunyai nama bagi corak projek perintis AI: **pilotitis** — kubur NHS bagi aplikasi menjanjikan yang dipilot selama-lamanya dan tidak pernah dikembangkan. Dapatan MIT selari dengan apa yang sudah diketahui oleh penilaian teknologi kesihatan: tuntutan nilai memerlukan titik akhir pratentu, atribusi memerlukan pembanding, dan "semua orang rasa ia membantu" bukan baris manfaat. Minoriti yang berjaya dalam data MIT tertumpu pada automasi pejabat belakang dengan garis asas kos yang boleh dijejaki, dan **alat yang dibeli berjaya ~67% masa berbanding binaan dalaman pada kira-kira satu pertiga daripada itu** — andaian awal yang patut ada dalam setiap kes pelaburan AI (lihat [bina lwn beli](../bina-lwn-beli/)).

## Matematiknya

```
ROI AI = (manfaat boleh dikaitkan − jumlah kos AI) / jumlah kos AI

Jumlah kos AI = lesen/inferens (lihat inference-unit-economics.md)
              + integrasi + kesediaan data + penilaian
              + reka bentuk semula aliran kerja + tadbir urus/jaminan
              (lesen biasanya minoriti penyebut)

Manfaat boleh dikaitkan: diukur berbanding garis asas atau kawalan, dikelaskan
tunai / kapasiti / kualiti mengikut cash-releasing-vs-non-cash-releasing.md
```

## Contoh penyelesaian

Kumpulan hospital menggunakan AI untuk dua kes penggunaan:

```
Kes A — penyediaan surat klinikal (pejabat belakang, boleh dijejaki):
  garis asas: transkripsi luar £380k/thn
  selepas:    kontrak transkripsi dibatalkan; masa semakan klinisian +£60k
  kos AI:     £120k/thn semua-sekali
  ROI = (380k − 60k − 120k) / 120k ≈ 167% — melepaskan tunai, boleh diaudit ✓

Kes B — "pembantu juruterbang AI untuk klinisian" (luas, tidak dijejaki):
  tuntutan manfaat: "menjimatkan masa merentas 4,000 kakitangan" — tiada garis asas direkodkan
  kesan P&L terukur: tiada yang boleh ditunjukkan
  → baldi 95%, tanpa mengira sama ada ia benar-benar membantu
```

Perbezaannya bukan kualiti AI — tetapi sama ada manfaat itu mempunyai **garis asas, pemilik dan baris bajet** ([realisasi manfaat](../realisasi-manfaat/)).

## Kaitan dengan kejuruteraan perisian

Buku main berbentuk HTA untuk pelaburan AI: **peringkatkan bukti seperti [peringkat NICE ESF](../kerangka-piawaian-bukti-nice/)** — bukti gred demo untuk alat berisiko rendah, projek perintis terkawal sebelum perbelanjaan seluruh organisasi, dengan get pelancaran didaftarkan awal (corak penyenaraian sementara-dengan-tarikh-akhir [DiGA](../laluan-pantas-diga-jerman/)); **kira pengelakan kos seperti ekonomi kesihatan mengira pengelakan permintaan** — nyata hanya apabila baris bajet tertentu bergerak; dan **harga projek perintis itu sendiri dengan [EVPI](../nilai-jangkaan-maklumat-sempurna/)** — projek perintis yang tidak dapat mengubah keputusan pelancaran bernilai £0. Bagi bahagian alat pembangun khususnya, lihat [produktiviti pembangun AI](../produktiviti-pembangun-ai/).

## Perangkap

- **Penyebaran manfaat**: nilai yang tersebar nipis merentas beribu pengguna tidak boleh diukur secara reka bentuk; pilih kes penggunaan dengan garis asas tertumpu dan boleh dijejaki.
- **Pengiraan kos lesen sahaja**: integrasi, penilaian dan reka bentuk semula aliran kerja biasanya menguasai penyebut sebenar.
- **Perampasan atribusi**: AI yang dikerahkan bersama reka bentuk semula proses menuntut keseluruhan delta.
- **Peningkatan projek perintis tenggelam**: melanjutkan projek perintis yang gagal kerana berhenti bermakna mengaku gagal — tarikh penamat mesti dipersetujui awal.

## Sumber

- MIT Project NANDA "GenAI Divide" coverage. <https://fortune.com/2025/08/18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo/>
- MIT GenAI ROI findings summary. <https://blueflame.ai/blog/achieving-ai-roi-key-findings-from-mits-genai-report>
- MIT Technology Review, finding ROI on AI. <https://www.technologyreview.com/2025/10/28/1126693/finding-return-on-ai-investments-across-industries/>
