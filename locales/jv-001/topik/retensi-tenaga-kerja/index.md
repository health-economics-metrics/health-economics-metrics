# Retensi Tenaga Kerja (Workforce Retention)

Ekonomi retensi tenaga kerja ngitung pira biaya turnover staf kanggo sistem kesehatan — rekrutmen, onboarding, cakupan lowongan — lan mula pira regane piranti lunak sing nyuda burnout administratif. Burnout saka tugas data administratif sing bola-bali iku pendorong utama turnover staf lan absen lara ing NHS.

## Kenapa Iki Penting

Nalika dokter lunga, trust mbayar kaping telu: kanggo ngrekrut pengganti (iklan, ragad agensi, wawancara), kanggo onboarding (sasi-sasi produktivitas suda, pengawasan), lan kanggo nutupi lowongan ing wektu kuwi — biasane nganggo staf agensi utawa locum ing 2–3× tarif substantif Agenda for Change (deleng [biaya outsourcing sing bisa dihindari](../biaya-outsourcing-sing-bisa-dihindari/) lan [penghematan hard cash-releasing](../penghematan-hard-cash-releasing/)). Amarga biaya turnover iku awis nyata, perbaikan retensi kalebu sawetara manfaat tenaga kerja sing bisa disimpen direktur keuangan. Gesekan administratif terus-terusan kalebu pendorong paling dhuwur sing dikutip saka burnout klinis, sing ndadekake biaya sing bisa ditangani piranti lunak.

## Matematikane

```
Biaya saben sing lunga = biaya rekrutmen + biaya onboarding/ramp-produktivitas
                       + premium cakupan lowongan × durasi lowongan

Biaya turnover taunan = headcount × tingkat turnover × biaya saben sing lunga

Nilai piranti lunak   = headcount × Δtingkat turnover × biaya saben sing lunga
                      + pangurangan absen-lara × biaya cakupan/dina
```

Rantai kausal duwe rong pranala sing dikira — piranti lunak → burnout/gesekan, lan burnout → turnover — mula buktekake loro-lorone (survei staf sadurunge/sawise; asosiasi burnout-attrisi sing diterbitake) lan njaga Δ sing diklaim sederhana.

## Conto Petungan

Trust makarya 1,200 perawat; turnover 11%/taun. Biaya saben sing lunga:

```
Rekrutmen ≈ £4,500;  onboarding/ramp ≈ £6,000
Cakupan lowongan: 4 sasi × 0.6 WTE ditutup premium agensi ≈ £8,000
Total ≈ £18,500 saben sing lunga

Biaya turnover dhasar = 1,200 × 0.11 × 18,500 ≈ £2.44M/taun
```

Piranti lunak beban-dokumentasi (penilaian sing diisi-otomatis, single sign-on, dikte) masuk akal ngobahake turnover 1 poin persentase:

```
Nilai = 1,200 × 0.01 × 18,500 = £222,000/taun gegandhengan-awis
```

Klaim 1-poin sing didhukung skor gesekan survei staf iku kredibel; klaim 4-poin ora. Jalanake [tornado](../analisis-sensitivitas/) ing Δturnover: nguwasani kabeh liyane ing model.

## Sambungan karo Rékayasa Piranti Lunak

Matematika retensi rékayasa identik lan luwih elek didokumentasi: ngganti insinyur senior biayane 6–12 sasi gaji sarat (rekrutmen, ramp, konteks ilang), mula organisasi 200-wong ing attrisi 15% ngobong jutaan saben taun ing churn. Investasi pengalaman-pangembang ([SPACE lan DevEx](../space-lan-devex/)) iku analog langsung saka relief beban-dokumentasi kanggo perawat — lan kudu dibenerake kanthi cara sing padha: skor gesekan sing diukur, efek sederhana sing diklaim ing attrisi, biaya saben sing lunga saka data keuangan dhewe. Disiplin ekonomi kesehatan sing kudu ditiru yaiku *ngregani sing lunga kanthi jujur* tinimbang mbantah apa wong "pancen" lunga amarga piranti.

## Jebakan

- **Nyebabake kabeh obah turnover marang intervensimu** — pasar tenaga kerja ngobahake turnover luwih akeh tinimbang piranti lunak; gunakake kelompok kontrol utawa paling ora penyesuaian tren sektor.
- **Ngetung ganda**: penghematan retensi lan penghematan belanja-agensi tumpang tindih (cakupan lowongan *iku* belanja agensi); rekonsiliasi garis-garis.
- **Ngabaikake lag**: attrisi sing didorong burnout nanggapi owah-owahan gesekan sajrone 1–2 taun, dudu kuartal sabanjure.

## Sumber

- NHS England, reducing agency spend. <https://www.england.nhs.uk/long-read/reducing-agency-spend-in-the-nhs/>
- NHS Staff Survey (burnout and intention-to-leave data). <https://www.nhsstaffsurveys.com/>
