# Return on Investment AI (AI Return on Investment)

ROI AI iku asil P&L sing bisa diukur lan disebabake inisiatif AI. Tolok ukur sing nggegirisi: riset "GenAI Divide" MIT 2025 nemokake yen sanajan ana investasi GenAI perusahaan $30–40B, **~95% pilot ora nuduhake asil P&L sing bisa diukur** — lan 5% sing sukses duwe pakulinan sing bisa dikenali.

## Kenapa Iki Penting

Sistem kesehatan duwe jeneng kanggo pola pilot-AI: **pilotitis** — kuburan NHS saka aplikasi sing janjeni nanging dipilot salawase lan ora tau diskala. Temuan MIT cocog banget karo apa sing wis dingerteni penilaian teknologi kesehatan: klaim nilai butuh titik pungkasan sing ditetepake sadurunge, atribusi butuh pembanding, lan "kabeh rumangsa mbantu" dudu garis manfaat. Minoritas sukses ing data MIT kumpul ing otomatisasi back-office kanthi baseline biaya sing bisa dilacak, lan **piranti sing dituku sukses ~67% wektu dibandhingake build internal kira-kira sapratelone** — prior sing kudu ana ing saben kasus investasi AI (deleng [build vs buy](../mbangun-vs-tuku/)).

## Matematikane

```
ROI AI = (manfaat sing disebabake − total biaya AI) / total biaya AI

Total biaya AI = lisensi/inferensi (deleng inference-unit-economics.md)
              + integrasi + kesiapan data + evaluasi
              + desain ulang alur kerja + tata kelola/jaminan
              (lisensi biasane minoritas saka denominator)

Manfaat sing disebabake: diukur marang baseline utawa kontrol, digolongake
tunai / kapasitas / kualitas miturut cash-releasing-vs-non-cash-releasing.md
```

## Conto Petungan

Sawijining grup rumah sakit nyebar AI kanggo rong kasus panggunaan:

```
Kasus A — nyusun layang klinis (back office, bisa dilacak):
  baseline: transkripsi outsourcing £380k/taun
  sawise:   kontrak transkripsi dibatalake; wektu review dokter +£60k
  biaya AI: £120k/taun kabeh-kalebu
  ROI = (380k − 60k − 120k) / 120k ≈ 167% — cash-releasing, bisa diaudit ✓

Kasus B — "AI copilot kanggo dokter" (amba, ora dilacak):
  klaim manfaat: "ngirit wektu ing 4,000 staf" — ora ana baseline sing dicathet
  efek P&L sing diukur: ora ana sing bisa dibuktekake
  → bucket 95%, sanajan bener-bener mbantu apa ora
```

Bedane dudu kualitas AI — iku apa manfaat nduweni **baseline, pemilik, lan garis anggaran** ([realisasi manfaat](../realisasi-manfaat/)).

## Sambungan karo Rékayasa Piranti Lunak

Playbook bentuk-HTA kanggo investasi AI: **tahapake bukti kaya [tingkat NICE ESF](../kerangka-standar-bukti-nice/)** — bukti kelas-demo kanggo piranti taruhan-rendah, pilot terkontrol sadurunge belanja sak-organisasi, kanthi gerbang rollout sing didaftarake sadurunge (pola daftar-sementara-karo-tenggat [DiGA](../jalur-cepet-diga-jerman/)); **etung penghindaran biaya cara ekonomi kesehatan ngetung penghindaran permintaan** — nyata mung yen garis anggaran tartamtu obah; lan **regani pilot dhewe nganggo [EVPI](../nilai-informasi-sampurna-sing-dikarepake/)** — pilot sing ora bisa ngowahi keputusan rollout regane £0. Kanggo irisan piranti pangembang khusus, deleng [produktivitas pangembang AI](../produktivitas-pangembang-karo-ai/).

## Jebakan

- **Difusi manfaat**: nilai sing nyebar tipis ing ewonan pangguna ora bisa diukur saka dhasare; pilih kasus panggunaan kanthi baseline sing kumpul lan bisa dilacak.
- **Ngetung biaya lisensi wae**: integrasi, evaluasi, lan desain ulang alur kerja biasane nguwasani denominator sing bener.
- **Nyolong atribusi**: AI sing disebar bareng desain ulang proses ngaku kabeh delta.
- **Eskalasi pilot sing wis kadhung metu ragad**: nambah pilot sing gagal amarga mandheg ateges ngakoni gagal — tanggal sunset kudu disepakati sadurunge.

## Sumber

- MIT Project NANDA "GenAI Divide" coverage. <https://fortune.com/2025/08/18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo/>
- MIT GenAI ROI findings summary. <https://blueflame.ai/blog/achieving-ai-roi-key-findings-from-mits-genai-report>
- MIT Technology Review, finding ROI on AI. <https://www.technologyreview.com/2025/10/28/1126693/finding-return-on-ai-investments-across-industries/>
