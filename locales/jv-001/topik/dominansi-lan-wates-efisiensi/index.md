# Dominansi lan Wates Efisiensi (Dominance and the Efficiency Frontier)

Pilihan iku **didominasi** yen pilihan liya biayane luwih murah *lan* ngasilake luwih akeh. **Wates efisiensi** iku sing isih ana sawise nyingkirake pilihan sing didominasi: himpunan pilihan ing ngendi entuk luwih akeh butuh mbayar luwih akeh.

## Kenapa Iki Penting

Sadurunge debat apa wae babagan ambang utawa anggaran, penilaian teknologi kesehatan dhisik nyingkirake pilihan sing ora kena dipilih sapa wae. Nggambar saben pilihan ing bidang biaya-vs-efek lan nggawe wates iku latihan limang menit sing rutin mateni setengah dhaptar cendhak. Perbandingan inkremental ([ICER](../rasio-efektivitas-biaya-inkremental/)) banjur mung diitung *ing sadawane wates*, saben pilihan marang sing paling murah sabanjure sing ora didominasi — ora tau marang "ora nindakake apa-apa" nalika ana pilihan tengah sing luwih apik.

## Matematikane

```
Dominansi ketat:    A ndominasi B yen Biaya_A ≤ Biaya_B lan Efek_A ≥ Efek_B
                    (kanthi paling ora siji ketidaksamaan ketat)

Dominansi lanjutan: B disingkirake yen campuran A lan C nggayuh luwih akeh efek
                    saben pound — kadeteksi nalika ICER mudhun nalika munggah
                    ing wates. ICER wates sing sah kudu mundhak.
```

Prosedur: urutake pilihan miturut efek; singkirake sing didominasi ketat; etung ICER berpasangan antarane tangga teparo; singkirake pilihan apa wae sing ICER-e ngluwihi ICER pilihan sabanjure sing luwih efektif (dominansi lanjutan); baleni nganti ICER mundhak kanthi monoton.

## Conto Petungan

Papat pilihan kanggo nyuda janji sing kelalen (efek = janji sing dipulihake/taun):

```
Pilihan         Biaya/taun  Dipulihake
Ora ngapa-ngapa £0          0
Pangeling SMS   £20,000     2,000
Telpon          £120,000    2,200
SMS + triase AI £90,000     3,500
```

Telpon **didominasi ketat** dening SMS + triase AI (luwih larang, mulihake luwih sithik). Wates: ora ngapa-ngapa → SMS → SMS + AI.

```
ICER(SMS vs ora ngapa-ngapa)  = 20,000 / 2,000  = £10 saben janji sing dipulihake
ICER(SMS+AI vs SMS)           = (90,000 − 20,000) / (3,500 − 2,000) = £46.67 saben janji
```

ICER mundhak → wates sing sah. Ing ~£160 sing dihemat saben janji rumah sakit sing dipulihake (deleng [tingkat ora-rawuh](../tingkat-ora-rawuh/)), loro langkah wates pantes dijupuk; usulan bank telpon ora kena tekan komite.

## Sambungan karo Rékayasa Piranti Lunak

Gawe grafik sing padha kanggo keputusan piranti apa wae: biaya saben taun ing siji sumbu, asil sing diukur (jam sing dihemat, insiden sing dihindari, deploy sing dimungkinake) ing sumbu liyane. Titik ing ndhuwur-lan-kiwa wates disingkirake sadurunge ana sing bantah babagan anggaran. Iki ngowahi pilihan vendor saka debat dhaptar-cek fitur dadi "sampeyan didominasi; rapat wis rampung." Iki uga mbukak pola perusahaan umum tuku pilihan paling larang kanggo keuntungan marginal — sah mung yen rega inkremental saben unit inkremental iku sing bakal dibayar organisasi kanthi sadhar.

## Jebakan

- **Mbandhingake kabeh karo baseline** tinimbang karo pilihan sabanjure ing wates — iki nyenengake pilihan larang kanthi ndhelikake sing murah sing meh padha.
- **Skor efek siji-dimensi** sing ndhelikake sing penting; yen rong asil kudu diitung, gabungake kanthi bisa dipertahanake (deleng [analisis biaya-utilitas](../analisis-biaya-utilitas/)) utawa tampilake rong wates.
- **Nglalekake ketidakpastian**: pilihan cedhak wates bisa ganti panggonan ing [analisis sensitivitas](../analisis-sensitivitas/).

## Sumber

- York Health Economics Consortium glossary: dominance. <https://yhec.co.uk/glossary/dominance/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
