# Metrik Aliran

Metrik aliran mengukur bagaimana kerja bergerak melalui sistem penyampaian: masa kitar, masa pimpinan, daya pemprosesan, kerja dalam proses (WIP) dan kecekapan aliran. Ia dikawal oleh Hukum Little — matematik beratur sama yang mengawal katil hospital dan senarai menunggu.

## Mengapa ia penting

Kebanyakan masa penyampaian bukan kerja — ia menunggu. Kajian kecekapan aliran bagi kerja pengetahuan lazimnya mendapati item hanya dikerjakan secara aktif **5–15%** daripada masa berlalunya; selebihnya baris gilir. Itu bermakna pecutan termurah ialah penyingkiran baris gilir, bukan pengambilan pekerja — tepat wawasan yang ditemui program aliran pesakit hospital tentang katil. Bagi apa-apa yang mempunyai [kos kelewatan](../kos-kelewatan/), metrik aliran mengesan di mana kos kelewatan terkumpul.

## Matematiknya

```
Masa kitar       = t(selesai) − t(mula)
Masa pimpinan    = t(disampaikan) − t(diminta)     (termasuk baris gilir pra-kerja)
Daya pemprosesan = item selesai / tempoh
WIP              = item bermula tetapi belum selesai
Kecekapan aliran = masa aktif / (aktif + masa menunggu) × 100

Hukum Little:  purata WIP = daya pemprosesan × purata masa kitar
               (setara: masa kitar = WIP / daya pemprosesan)
```

Hukum Little ialah tuasnya: pada daya pemprosesan tetap, memotong WIP memotong masa kitar secara berkadar. Ia juga menjalankan hospital: `katil diduduki = kemasukan/hari × tempoh tinggal`.

## Contoh penyelesaian

Pasukan mempunyai 40 item dalam proses dan menyelesaikan 10/minggu: masa kitar = 40/10 = 4 minggu. Mereka mengenakan had WIP, memotong WIP kepada 15: masa kitar = 15/10 = **1.5 minggu** — orang sama, daya pemprosesan sama, penyampaian 62% lebih pantas, semata-mata daripada disiplin baris gilir.

Dihargai dengan CoD: jika item purata £3,000/minggu kos kelewatan, setiap item kini menghabiskan 2.5 minggu kurang dalam baris gilir: 10 item/minggu × 2.5 × 3,000 = **£75,000/minggu kos kelewatan dihapuskan** — daripada perubahan dasar yang tidak berkos.

Cermin hospital: 40 kemasukan/hari × 6.0 hari LOS = 240 katil; potong menunggu bukan-klinikal dalam LOS kepada 5.6 hari dan 16 katil dibebaskan ([tempoh tinggal](../tempoh-tinggal/)) — hukum sama, tuas sama.

## Kaitan dengan kejuruteraan perisian

Metrik aliran ialah bahasa bersama antara kejuruteraan penyampaian dan operasi kesihatan:

- **Penanda aras sub-peringkat PR** (LinearB, ~8J PR): masa ambil elit < 7j, semakan < 6j, jumlah kitar < ~26j — masa ambil ialah baris gilir tulen, perkara pertama untuk diserang.
- **[Senarai menunggu](../impak-senarai-menunggu/)** ialah tunggakan; **[RTT](../rujukan-ke-rawatan/)** ialah masa pimpinan; **[penghunian katil](../hari-katil-dijimatkan/)** ialah WIP. Penambahbaikan berpindah dalam kedua-dua arah: had WIP ↔ pelicinan kemasukan; instrumentasi masa baris gilir ↔ penjejakan peringkat laluan.
- Kecekapan aliran di bawah 15% adalah normal dalam kedua-dua domain, dan kedua-duanya menyembunyikannya kerana *orang* sibuk sementara *kerja* menunggu — ukur jam kerja itu, bukan jam pekerja.

## Perangkap

- **Pemujaan penggunaan**: memacu penggunaan pekerja menghampiri 100% meletupkan masa baris gilir secara tak linear (M/M/1: tunggu ∝ ρ/(1−ρ)) — sebab hospital 95%-diduduki sesak dan pasukan 95%-diperuntukkan terhenti.
- **Purata ke atas taburan condong**: masa kitar berekor berat; ramal dengan persentil (p85), bukan min.
- **Memotong WIP dengan menolak kerja di hulu** dan memanggilnya penambahbaikan aliran — permintaan tidak lenyap, ia beratur di luar sempadan pengukuran (versi hospital: ambulans menunggu di luar ED).

## Sumber

- Little's Law and flow metrics overviews. <https://agility-at-scale.com/safe/lpm/flow-metrics/> ; <https://getdx.com/blog/flow-metrics/>
- LinearB engineering benchmarks. <https://linearb.io/resources/engineering-benchmarks>
- Reinertsen DG, *The Principles of Product Development Flow*.
