# Penjimatan Melepaskan Tunai lwn Tidak Melepaskan Tunai

Penjimatan melepaskan tunai mengurangkan perbelanjaan sebenar — baris bajet mengecil. Penjimatan tidak melepaskan tunai membebaskan masa atau kapasiti yang *digunakan semula* dan bukan disimpan. Pengarah kewangan sistem kesihatan menganggap kedua-duanya spesies berbeza, dan anda juga patut.

## Mengapa ia penting

Ini ujian kejujuran paling tajam yang dikenakan pada mana-mana kes perniagaan digital dalam perkhidmatan kesihatan kebangsaan. Kerangka manfaat NHS dengan jelas mengkategorikan setiap manfaat yang dituntut sebagai melepaskan tunai, tidak melepaskan tunai atau kualitatif. Kebanyakan "penjimatan" kesihatan digital — minit klinisian dijimatkan bagi setiap pesakit, dokumentasi lebih pantas — tidak melepaskan tunai: bernilai, tetapi tidak mengurangkan defisit. CFO trust yang menghadapi jurang pembiayaan hanya boleh membelanjakan tunai. Lihat juga [penjimatan tunai keras](../penjimatan-melepaskan-tunai-keras/).

## Matematiknya

```
Penjimatan melepaskan tunai = baris bajet sebelum − baris bajet selepas
                          (mesti boleh diekstrak: kontrak dibatalkan, wad ditutup,
                           perbelanjaan agensi dikurangkan, pembelian dielakkan)

Nilai tidak melepaskan tunai = masa dilepaskan × kos unit masa itu
                          (dinilai pada kos peluang; wang TIDAK boleh diekstrak)
```

Peristiwa fizikal yang sama (sejam dijimatkan) jatuh ke satu kategori atau yang lain bergantung pada apa berlaku seterusnya:

```
sejam dijimatkan → syif lebih masa/agensi dibatalkan      → melepaskan tunai
sejam dijimatkan → klinisian melihat seorang lagi pesakit menunggu → tidak melepaskan tunai (kapasiti)
sejam dijimatkan → diserap ke dalam kelonggaran, tiada perubahan → tiada manfaat langsung
```

## Contoh penyelesaian

Perisian menjimatkan 30 minit setiap syif bagi setiap seorang daripada 100 jururawat. Itu 100 × 0.5 × 5 syif/minggu × 46 minggu ≈ 11,500 jam/tahun. Pada kos majikan Band 5 ~£25/jam, tajuk yang menggoda ialah £287,500/tahun.

Pecahan jujur:

- 20% masa jatuh di mana wad kini membayar premium bank/agensi untuk menampung lebihan dokumentasi: 2,300 jam × kadar agensi £35 = **£80,500 melepaskan tunai** (syif benar-benar tidak ditempah).
- 60% diagihkan semula kepada penjagaan pesakit langsung: 6,900 jam × £25 = **£172,500 kapasiti tidak melepaskan tunai** — nilai sebenar, dilaporkan berasingan, tidak pernah dipanggil "penjimatan."
- 20% hilang dalam rehat dan gangguan: **£0**. Menuntutnya ialah rekaan.

Kes perniagaan yang membentangkan £80.5k tunai + £172.5k kapasiti boleh dipercayai. Yang membentangkan £287.5k "penjimatan" ditolak oleh akauntan pertama yang membacanya.

## Kaitan dengan kejuruteraan perisian

Logik yang sama mengawal ROI pembantu pengekodan AI: "30 minit setiap pembangun setiap hari" ialah kapasiti tidak melepaskan tunai kecuali bilangan kakitangan, perbelanjaan kontraktor atau kos awan benar-benar turun. Laporkan kategori secara berasingan:

- Melepaskan tunai: perikatan kontraktor dibatalkan, lesen alat dinyahtauliah, perbelanjaan awan dikurangkan.
- Kapasiti: ciri dihantar lebih awal (nilai melalui [kos kelewatan](../kos-kelewatan/)), tunggakan dihabiskan.
- Tiada: minit dijimatkan yang berpecah menjadi pertukaran konteks.

Jejak juga *ke mana masa yang dilepaskan sebenarnya pergi* — realisasi manfaat ([benefits-realization.md](../realisasi-manfaat/)) wujud kerana keuntungan kapasiti yang dituntut kerap lenyap semasa audit.

## Perangkap

- **Mendarab minit dengan gaji dan memanggilnya penjimatan** — dosa kanonik.
- **Menilai masa dilepaskan pada kos termuat purata** apabila penggunaan marginal masa itu bernilai rendah — lihat [kos marginal lwn purata](../kos-marginal-lwn-kos-purata/).
- **Mengira jam yang sama dua kali**: sebagai tunai (syif dielakkan) dan sebagai kapasiti (pesakit tambahan dilihat).

## Sumber

- NHS Digital connectivity business case guidance, economic case (benefit categories). <https://digital.nhs.uk/services/networks-and-connectivity-transformation-frontline-capabilities/connectivity-hub/advice-and-guidance/making-the-business-case-for-connectivity-infrastructure-investment---guidance/economic-case>
- NHS England, NHS productivity. <https://www.england.nhs.uk/long-read/nhs-productivity/>
