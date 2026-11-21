# Realisasi Manfaat

Pengurusan realisasi manfaat (BRM) ialah disiplin mengenal pasti, menetapkan garis asas, menjejak dan *membuktikan* bahawa manfaat yang dijanjikan dalam kes perniagaan benar-benar terhasil selepas penyampaian. Dalam pelaburan awam UK, ia terletak dalam **Model Lima Kes** Green Book HM Treasury; dalam perubatan, sepupunya ialah pengawasan pascapasaran.

## Mengapa ia penting

Kes perniagaan ialah janji; realisasi manfaat ialah audit. Penilaian program digital NHS utama berulang kali mendapati manfaat ramalan yang tidak pernah terhasil — dan apabila manfaat tidak melepaskan tunai, ia tidak berbuat apa-apa untuk garis bawah trust. Jawapan Green Book: setiap kes perbelanjaan mesti lulus **lima kes** (strategik, ekonomi, komersial, kewangan, pengurusan), dengan realisasi manfaat dirancang dalam kes pengurusan *sebelum kelulusan* — pemilik dinamakan, garis asas direkodkan, tarikh pengukuran ditetapkan. Tanpa ini, "perisian menjimatkan 30 minit setiap jururawat" kekal fiksyen vendor selama-lamanya.

## Matematiknya

```
Kadar realisasi = manfaat direalisasikan / manfaat diramal   (setiap manfaat, setiap tempoh)

Mekanik yang menjadikannya boleh dikira:
  garis asas direkodkan SEBELUM go-live (jika tidak delta tidak boleh diukur)
  setiap manfaat: pemilik, metrik, sumber data, jadual pengukuran
  ramalan dilaraskan untuk bias optimisme semasa penilaian (mandat Green Book)
  manfaat dikelaskan tunai / bukan tunai / kualitatif dan dijejak berasingan
  (lihat cash-releasing-vs-non-cash-releasing.md)
```

## Contoh penyelesaian

Kes perniagaan e-penggiliran menjanjikan, setahun: pengurangan perbelanjaan agensi £450k (tunai), 8,000 jam pengurus wad (kapasiti), pematuhan kadar pengisian yang lebih baik (kualitatif). Dua belas bulan selepas go-live:

```
Manfaat           Ramalan     Direalisasi  Kadar  Bukti
Perbelanjaan agensi £450,000  £287,000     64%    lejar lwn tahun garis asas
Jam pengurus      8,000       5,100        64%    sampel masa-gerak
Pematuhan pengisian +10pp     +12pp        120%   data sistem penggiliran

Tindakan daripada semakan (tujuan BRM):
kekurangan agensi dikesan kepada dua wad yang tidak pernah dimasukkan → masukkan mereka;
ralat optimisme 30% model ramalan dilog → digunakan pada kes seterusnya.
```

Realisasi 64% bukan kegagalan — ia *pengetahuan*. Kes yang tidak diukur menuntut 100% selama-lamanya.

## Kaitan dengan kejuruteraan perisian

Organisasi kejuruteraan meluluskan pelaburan platform atas manfaat ramalan dan hampir tidak pernah mengauditnya — patologi tepat yang dibaiki BRM. Port ringan: setiap cadangan melebihi ambang menamakan pemilik manfaat, metrik garis asas dan tarikh semakan T+6 bulan; kadar realisasi disuap kembali kepada berapa banyak organisasi mendiskaun ramalan seterusnya pasukan (atau vendor) itu. Ini juga jawapan kepada keraguan alat AI: [dapatan MIT bahawa ~95% projek perintis GenAI tidak menunjukkan pulangan P&L terukur](../pulangan-pelaburan-ai/) ialah keputusan realisasi manfaat — projek perintis yang *memberi* pulangan mempunyai baris manfaat yang boleh dijejak dan dimiliki. Ramal → ukur → kalibrasi semula ialah gelung yang sama seperti projek perintis berharga [EVPI](../nilai-jangkaan-maklumat-sempurna/), dijalankan pada skala portfolio.

## Perangkap

- **Tiada garis asas sebelum go-live** — peninggalan maut yang tidak boleh dibaiki.
- **Manfaat yatim**: tiada pemilik dinamakan bermakna tiada siapa mengumpul data dan setiap semakan berkata "secara umum mengikut landasan."
- **Manfaat dikira berganda merentas program** yang menuntut kapasiti dibebaskan yang sama — simpan daftar manfaat merentas portfolio.
- **Teater realisasi**: mengukur kemenangan kualitatif yang mudah sementara baris tunai dibiarkan tidak diperiksa.

## Sumber

- HM Treasury, Green Book and Five Case Model guidance. <https://www.gov.uk/government/collections/the-green-book-and-accompanying-guidance-and-documents>
- Global Digital Exemplar programme evaluation (NHS digital benefits lessons). <https://pmc.ncbi.nlm.nih.gov/articles/PMC8685936/>
