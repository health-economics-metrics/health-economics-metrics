# Tabbatar da Na'urorin Sawa

Ma'aunan tabbatarwa suna ƙididdige yadda aunawar na'urar sawa ke dacewa da ma'aunin zinari na asibiti (ECG don bugun zuciya, polysomnography don barci): **MAPE**, daidaiton haɗin kai, yarjejeniyar Bland–Altman — tare da ma'aunan aiki da ke ƙofar ingancin bayanai na zahiri: **bin ƙa'idar lokacin sawa** da **cikar bayanai**.

## Dalilin muhimmancinsa

Tabbatarwa ita ce sharaɗin farko na duk abin da ke ƙasa: na'urar da ba za ta iya tabbatar da yarjejeniya da aunawar tunani ba ba za ta iya ɗaukar [ƙarshen dijital](../ƙarshen-dijital-da-alamomin-halitta/), tallafa wa [lissafin RPM](../tattalin-arzikin-sa-ido-na-nesa-kan-marasa-lafiya/), ko ɗaukar da'awar asibiti ba. Iyakokin da fagen ya karɓa don bugun zuciya: **MAPE ≤5%** (tsaurara) ko **≤10%** (sassauƙa) a kan ECG. Wuraren tunani daga wallafe-wallafe: Oura Gen 3 MAPE na bugun zuciya a hutu 1.67% (CCC 0.97); Fitbit Charge 6 MAPE ~5.5% — na'urorin masu amfani yanzu suna ketare iyakar matakin asibiti, wanda shi ne daidai dalilin da ma'aunin ke da muhimmanci ga kowace na'ura da kowane yanayi.

## Lissafin

```
MAPE = (1/n) Σ |measured_i − reference_i| / reference_i × 100

CCC (concordance correlation) = agreement including both correlation
      and systematic bias (Pearson r penalized by location/scale shift)

Bland–Altman: mean bias ± 1.96 SD limits of agreement — shows whether
      error depends on the value's magnitude

Operational gates:
Wear-time compliance = time worn / protocol time × 100
Data completeness    = observed data points / expected × 100
```

Dole a ba da rahoton tabbatarwa **ga kowane yanayin aiki** (hutu, motsi, barci) da kowace al'umma — hasken PPG na gani yana lalacewa da kayan motsi, rashin kyakkyawar taɓawa, da launukan fata masu duhu, hanyar gazawa da aka rubuta mai alaƙa da adalci.

## Misali da aka lissafa

Shirin sashen kama-da-wane yana zaɓar na'urar sawa ta sa ido. Ɗan takara A: MAPE a hutu 2.1%, motsa jiki MAPE 11.4%. Ɗan takara B: hutu 3.8%, motsa jiki 6.9%.

```
Use case: deteriorating-patient detection at home — alerts trigger on
sustained elevated HR, often during activity.
Candidate A's headline (2.1%) wins the brochure; candidate B wins the
use case: at the alert-relevant condition (motion), A's 11.4% error
at HR 100 = ±11 bpm — spanning the entire alert threshold band,
generating false escalations (each a nurse callout, ~£40) or misses.

False-alert economics: 500 patients × 2 extra false alerts/week × £40
= £2.08M/year of error cost from choosing the wrong validation number.
```

## Alaƙa da injiniyancin manhaja

Injiniyoyi suna cinye bayanan tabbatarwa lokacin zaɓar na'urori masu auna kuma suna *samar* da su lokacin gina siffofin aunawa — ayyukan biyu suna buƙatar tarbiyya ɗaya: gwada a yanayin turawa, ba yanayin nuni ba (kwatankwacin manhaja: gwada aiki a kan nauyin aikin samarwarka, ba na mai siyarwa ba). Lokacin sawa da cikawa sakamakon injiniyancin samfur ne — jin daɗi, rayuwar baturi, ƙirar al'adar caji, da amincin daidaitawa suna ƙayyade ko an cika ƙofar lissafin RPM na kwanaki-16-cikin-30 ([tattalin arzikin sa ido na nesa kan marasa lafiya](../tattalin-arzikin-sa-ido-na-nesa-kan-marasa-lafiya/)) kuma ko ana iya nazarin bayanan gwaji. Ɗauki rashi a matsayin sigina da aka tsara: bambanta "ba a sa ba," "an sa amma babu sigina," da "daidaitawa ta gaza" a cikin tsari tun ranar farko — idan aka haɗa su zuwa null, suna gurɓata kowane bincike na ƙasa.

## Tarkuna

- **MAPE jimilla yana ɓoye gazawar takamaiman yanayi** — tarkon misalin da aka lissafa.
- **Al'ummar tabbatarwa ≠ al'ummar turawa**: shekaru, launin fata, rawar jiki, kiba duk suna canza kuskuren na'urar auna ta gani; duba bayanan al'ummar binciken.
- **Ba da rahoton daidaito inda ake buƙatar yarjejeniya**: Pearson r mai girma tare da son zuciya na tsari har yanzu yana rarraba kuskure a kan iyakoki cikakku — nace da CCC/Bland–Altman.
- **Cika da aka ƙara ta hanyar ƙirƙira**: giɓin da aka cika ana ba da rahoton su a matsayin bayanan da aka lura da su.

## Tushe

- Consumer wearable HR validation (Oura Gen 3/4). <https://pmc.ncbi.nlm.nih.gov/articles/PMC12367097/>
- Wearable validity thresholds (MAPE standards). <https://formative.jmir.org/2025/1/e70835>
- Multi-device validation studies. <https://pmc.ncbi.nlm.nih.gov/articles/PMC6431828/>
