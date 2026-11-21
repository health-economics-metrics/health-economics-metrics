# Nilai Informasi Sampel sing Dikarepake (Expected Value of Sample Information, EVSI)

EVSI iku nilai *studi tartamtu sing diusulake* — desain tartamtu, ukuran sampel tartamtu — sadurunge dilakokake, beda karo [EVPI](../nilai-informasi-sampurna-sing-dikarepake/), sing ngregani ngilangi kabeh ketidakpastian babar pisan. EVSI njawab pitakon sing bener-bener diadhepi pendana riset: "apa uji *iki*, ing ukuran *iki*, pantes karo biayane?"

## Kenapa Iki Penting

EVPI ngandhani langit-langit apa regane riset apa wae; ora tau ngandhani apa uji ing ngarepmu nglewati bar. Pendana riset nasional sing milih antarane pilot 50-pasien lan uji definitif 500-pasien kudu ngerti pira regane *saben desain tartamtu*, dudu mung nilai kemahatahuan. EVSI nyedhiyakake angka kuwi, lan amarga skala karo ukuran sampel, ngidini pendana nemokake ukuran sampel sing nggedhekake manfaat net sing dikarepake tinimbang ngira-ngira.

Iki uga sebabe EVSI tansah kurang saka utawa padha karo EVPI: sampel winates mung bisa sebagian ngrampungake ketidakpastian, lan studi sing katon luwih aji tinimbang informasi sampurna iku tandha petungan salah, dudu asil nyata.

## Matematikane

```
Umum:
EVSI(n) = E_data[ max_d E_θ|data[NB(d,θ)] ]  −  max_d E_θ[NB(d,θ)]
  (pangarep-arep bersarang: njaba ing asil studi sing bisa kelakon, njero ing
  kapercayan posterior bab θ sawise ndeleng asil kuwi — biasane dikira nganggo
  Monte Carlo bersarang / pembaruan Bayesian ing draw analisis
  sensitivitas probabilistik)

Perkiraan normal bentuk-tertutup (siji parameter ora mesthi, model
normal-normal konjugat — dalan cendhak standar, ora persis kanggo saben model):
EVSI(n) = EVPI × n / (n + n0)

n  = ukuran sampel studi sing diusulake
n0 = "ukuran sampel setara-prior" — ukuran sampel khayalan sing
     bakal nggawa informasi padha karo prior saiki, asale saka
     rasio varians data marang varians prior
ENBS(n) = EVSI(n) − Biaya(n)
EVSI populasi = EVSI saben-keputusan × keputusan sing kena
```

Wujud umum iku pangarep-arep bersarang amarga asil mbesuk studi dhewe ora mesthi: sampeyan kudu ngrata-rata ing saben dataset sing bisa diasilake studi, lan kanggo saben siji ngetung ulang keputusan paling apik diwenehi kapercayan sing dianyari (posterior). Perkiraan normal bentuk-tertutup nuker biaya komputasi kuwi kanggo siji rasio, sah nalika parameter ora mesthi lan data (kira-kira) normal lan konjugat — kenyamanan, dudu hukum universal. Monte Carlo bersarang lengkap iku metode serba-guna nalika asumsi ora kasembadan. Deleng [analisis sensitivitas probabilistik](../analisis-sensitivitas-probabilistik/) kanggo draw PSA sing biasane dienggo ngira EVSI.

## Conto Petungan

Nerusake conto petungan [EVPI](../nilai-informasi-sampurna-sing-dikarepake/) — ngluncurake asisten dokumentasi AI marang 5,000 dokter, ing ngendi EVPI ketemu £1.2M — nyatakake EVPI sing padha ing kene ing pound utuh: **EVPI = £1,200,000**.

Studi pilot sing diusulake saka 50 dokter ana ing meja. Saka rasio varians kapercayan prior marang presisi pangukuran pilot, ukuran sampel setara-prior metu `n0 = 75`:

```
EVSI(50) = 1,200,000 × 50 / (50 + 75)
         = 1,200,000 × 50 / 125
         = 1,200,000 × 0.4
         = £480,000
```

Pilot biayane £120,000:

```
ENBS = EVSI − Biaya = 480,000 − 120,000 = £360,000
```

ENBS positif sing jelas: danai pilot. Yen keputusan pengadaan sing padha bola-bali ing 3 trust regional sing padha, nilai pilot skala:

```
EVSI populasi = 480,000 × 3 = £1,440,000
```

## Sambungan karo Rékayasa Piranti Lunak

EVSI iku ekonomi milih *sepira gedhe* pilot utawa A/B test, dudu mung apa kudu dilakokake babar pisan:

- **Keputusan ukuran-sampel-minangka-investasi.** Beta 50-pangguna lan peluncuran bertahap 5,000-pangguna iku "studi" beda kanthi EVSI lan biaya beda — EVSI ngidini sampeyan mbandhingake ing dhasar sing padha tinimbang default "data luwih akeh tansah luwih apik."
- **ENBS, dudu EVSI wae, tes komisioning.** Studi kanthi EVSI dhuwur nanging biaya sing mangan umume iku usulan lemah; aturan keputusan yaiku manfaat net sing dikarepake saka sampling, persis kaya kasus bisnis ngurangi biaya saka manfaat tinimbang nglaporake manfaat wae.
- **Pengembalian sing nyusut eksplisit.** Amarga EVSI(n) mundhak karo `n/(n+n0)`, nglipatganda ukuran pilot ora tau nglipatganda nilaine — versi formal naluri rékayasa yen eksperimen sing luwih gedhe duwe nilai informasi marginal sing nyusut.

## Jebakan

- **Nrapake perkiraan normal ing njaba asumsine.** Mung sah kanggo ketidakpastian siji-parameter sing kira-kira konjugat; model keputusan nonlinear utawa multi-parameter butuh Monte Carlo bersarang lengkap, dudu dalan cendhak iki.
- **Mbandhingake EVSI karo biaya awis wae.** EVSI kudu ditimbang marang biaya *lengkap* studi, kalebu biaya tundha-keputusan dhewe — deleng [biaya keterlambatan](../biaya-keterlambatan/) — dudu mung tagihan studi.
- **Nganggep EVSI > EVPI minangka temuan nyata.** EVSI ora bisa ngluwihi EVPI kanthi desain; petungan sing ngasilake iki iku bug pemodelan, dudu panemuan.

## Sumber

- Ades AE, Lu G, Claxton K. "Expected value of sample information calculations in medical decision modeling." Medical Decision Making 2004;24(2):207-27.
- Willan AR, Pinto EM. "The value of information and optimal clinical trial design." Statistics in Medicine 2005;24(12):1791-806.
- Strong M, Oakley JE. "When is a model-based value of information analysis feasible?" Medical Decision Making 2014.
