# Dampak Dhaptar Tunggu (Waiting List Impact)

Dampak dhaptar tunggu ngowahi kapasitas klinis sing dihemat dadi pasien sing dibusak saka (utawa dipindhah luwih cepet liwat) dhaptar tunggu. Ngowahi jam sing dihemat dadi slot klinik ekstra langsung nyuda ukuran dhaptar tunggu trust — cara paling nyata kanggo nuduhake sistem kesehatan kanggo apa kapasitas sing dibebasake iku.

## Kenapa Iki Penting

Dhaptar tunggu elektif iku tantangan penentu NHS pasca-pandemi (ukurane iku metrik politik nasional), lan saben trust mlakokake program pemulihan-elektif marang iku. Kasus bisnis sing ngomong "ngirit 2,000 jam perawat" iku abstrak; sing ngomong "nggawe 4,000 slot janji tambahan, ndeleng 3,800 pasien sing ngenteni, nyuda dhaptar spesialisasi 9%" iku crita sing bisa digawa Chief Operating Officer menyang dewane. Dampak dhaptar tunggu iku *unit akun* alami kanggo [kapasitas non-cash-releasing](../penghematan-cash-releasing-vs-non-cash-releasing/).

## Matematikane

```
Slot ekstra        = jam sing dibebasake / durasi slot × utilisasi
Pasien sing dideleng = slot ekstra × (1 − tingkat DNA)
Pangurangan dhaptar  = pasien sing dideleng − permintaan anyar sing diinduksi
Gain wektu-ngenteni  = perbaikan antrian saka tingkat layanan sing luwih dhuwur
                       (kanggo antrian stabil, nyuda backlog N kanthi ΔN ing
                       tingkat layanan μ narik kabeh wong maju ~ΔN/μ)
```

Nilai kesehatan saka ngenteni luwih cendhak: pasien ngentekake minggu luwih sithik ing kahanan utilitas pra-perawatan sing luwih murah — aritmetika QALY ing [rujukan-menyang-perawatan](../rujukan-menyang-perawatan/).

## Conto Petungan

Piranti lunak dokumentasi ambient ngirit saben 20 perawat klinik 45 mnt/dina. Ing 250 dina: 20 × 0.75 × 250 = 3,750 jam/taun.

```
Slot (30 mnt, 85% bisa dienggo) = 3,750 / 0.5 × 0.85 = 6,375 slot
Pasien sing dideleng (7% DNA)   = 6,375 × 0.93       ≈ 5,929/taun
```

Kanggo spesialisasi kanthi dhaptar 12,000-pasien lan 24,000 janji/taun kapasitas sing cocog-permintaan, ~5,900 janji tambahan nyuda ngenteni rata-rata kira-kira saperempat — mindhah trust kanthi material menyang standar 18-minggu tanpa nyewa. Ing ~£160 nilai skema saben kunjungan aktivitas regane ~£949,000/taun (deleng [tarif nasional lan biaya unit](../tarif-nasional-lan-biaya-unit/)) — nanging presentake pigura *dhaptar-tunggu* dhisik; iku sing dadi dhasar sistem dikelola.

## Sambungan karo Rékayasa Piranti Lunak

Dhaptar tunggu iku backlog, lan ekonomi backlog-burndown pindhah ing loro arah. Saka kesehatan menyang piranti lunak: regani pangurangan backlog miturut sepira suwe *pangguna* ngenteni nilai, dudu miturut item sing ditutup ([biaya keterlambatan](../biaya-keterlambatan/) saben item antri). Saka piranti lunak menyang kesehatan: Hukum Little ngomong dhaptar mung nyusut yen tingkat layanan ngluwihi tingkat kedatangan — gain kapasitas sing diserap rujukan sing mundhak ninggalake ngenteni ora owah, mula modelake kedatangan uga. Lan ing loro domain, prioritisasi miturut nilai sing dibobot-keparahan (kategori urgensi klinis ↔ [pengubah keparahan](../shortfall-qaly-lan-pengubah-keparahan/)), dudu first-in-first-out.

## Jebakan

- **Slot ≠ pasien**: lali tingkat DNA lan serpihan wektu sing dibebasake sing ora bisa dienggo.
- **Permintaan sing diinduksi**: kapasitas ekstra sing katon narik rujukan; dampak dhaptar net luwih cilik tinimbang kotor.
- **Ngaku awis**: dampak dhaptar tunggu iku nilai kapasitas; klaim awis (outsourcing sing dihindari saka karya backlog) iku garis beda — deleng [biaya outsourcing sing bisa dihindari](../biaya-outsourcing-sing-bisa-dihindari/).

## Sumber

- NHS England, RTT waiting times statistics. <https://www.england.nhs.uk/statistics/statistical-work-areas/rtt-waiting-times/>
- NHS England, elective care recovery plan. <https://www.england.nhs.uk/coronavirus/publication/delivery-plan-for-tackling-the-covid-19-backlog-of-elective-care/>
