# Ma'aunin Taruwa

Ma'aunin Taruwa (Wagstaff, Paci, van Doorslaer, 1991) shi ne daidaitaccen ma'aunin ƙididdiga na rashin daidaito mai alaƙa da matsayin arziki a cikin sauyin lafiya, daga -1 zuwa 1. Mara kyau yana nufin sauyin lafiya yana taruwa a tsakanin marasa galihu na zamantakewa da tattalin arziki, mai kyau yana nufin yana taruwa a tsakanin masu wadata, sifili kuma yana nufin babu daidaitaccen gangare na matsayin arziki — yana mayar da zato game da rarraba marar daidai zuwa lamba ɗaya da za a iya kwatantawa.

## Dalilin muhimmancinsa

Shiri na iya zama mai tasiri a jimilla amma ya isar da fa'idarsa kusan gaba ɗaya ga mutanen da suke masu wadata tuni. Damuwoyin rarrabawa irin wannan daidai su ne abin da [isa da adalci](../isa-da-adalci/) ke bi a bayyane — isa da aka raba bisa ƙwayoyin talauci, giɓin adalci tsakanin rukunin sama da ƙasa — amma teburin da aka raba ba ya matsawa zuwa layin yanayi ɗaya, kuma ba za a iya kwatanta shi cikin sauƙi tsakanin shiga tsakani biyu daban-daban da aka auna a ma'auni dabam ba. Ma'aunin Taruwa yana magance duka matsalolin: ana lissafa shi iri ɗaya ga kowane sauyin lafiya a kan kowane jerin matsayin arziki, don haka hidimar lafiya ta ƙasa za ta iya bin ko rashin daidaiton wata hidimar dijital yana faɗaɗa ko raguwa fitowa bayan fitowa, kuma ta kwatanta adalcin rarraba na fitar da manhaja da, misali, shirin gwajin bincike, a kan ma'auni mai daidaito ɗaya.

## Lissafin

```
CI = (2 / mean(health_values)) × Cov(health_values, socioeconomic_ranks)

Cov(X, Y) = mean(X × Y) − mean(X) × mean(Y)   (population covariance)

socioeconomic_ranks: each person's fractional rank in the socioeconomic
distribution, in [0, 1] (0 = most disadvantaged, 1 = most advantaged;
for grouped/banded data, conventionally the midpoint rank of each group)
```

Wannan ita ce "dabarar covariance mai sauƙi" (O'Donnell, van Doorslaer, Wagstaff, Lindelow, World Bank 2008) — gajeriyar hanyar masu aiki ta al'ada don lissafin Ma'aunin Taruwa kai tsaye daga abubuwan da aka haɗa bibbiyu, ba tare da zana da haɗa ƙarƙashin lanƙwasar taruwa da farko ba.

## Misali da aka lissafa

Maki na lafiya mai kyau da aka bayar da kai (1 = mafi muni, 4 = mafi kyau) da aka lura a faɗin kwata huɗu masu girma ɗaya na matsayin arziki, kowanne wakilcin matsayin tsakiyar kwatansa:

```
health_values        = [1.0, 2.0, 3.0, 4.0]
socioeconomic_ranks  = [0.125, 0.375, 0.625, 0.875]

mean(health_values)        = 2.5
mean(health × rank)        = mean([0.125, 0.75, 1.875, 3.5]) = 1.5625
mean(socioeconomic_ranks)  = 0.5

Cov = 1.5625 − 2.5 × 0.5 = 0.3125

CI = 2 × 0.3125 / 2.5 = 0.25
```

`0.25` mai kyau yana nufin wannan makin lafiya yana taruwa a tsakanin rukunin masu wadata — masu amsa da suka fi maki suna karkata zuwa ƙarshen jeri na masu wadata.

## Alaƙa da injiniyancin manhaja

Wannan auna rashin daidaito ce mai tushen covariance da ake amfani da ita a tattalin arziki gaba ɗaya (ɗan uwan Gini coefficient), kuma tana dacewa da auna ko fa'idodin samfurin manhaja suna taruwa a tsakanin sassan masu amfani da suke masu wadata tuni maimakon a yaɗa su daidai — faɗaɗa [isa da adalci](../isa-da-adalci/) kai tsaye (ɓangaren "isa" na RE-AIM) zuwa ma'aunin ƙididdiga na hukuma maimakon giɓin da aka kwatanta. Inda isa-da-adalci ke bayar da rahoton tasiri ga kowane rukuni, Ma'aunin Taruwa yana matse dukan rarraba zuwa lamba ɗaya mai alama, mai dacewa a matsayin KPI ɗaya da ake bi a faɗin fitowa — mai amfani ga allon bayanai, inda cikakken rarrabuwa ba zai yiwu ba.

## Tarkuna

- **Gudun al'adar alama**: alamar tana dogara ne a kan yadda aka ayyana sauyin lafiya da matsayi duka — juya ɗayansu yana juya alamar, don haka dole a bayyana al'adar da aka yi amfani da ita a fili tare da kowace ƙima da aka bayar.
- **Matsayin iyaka maimakon matsayin tsakiya**: bayanan matsayin arziki da aka rarraba (misali kwata biyar) suna buƙatar amfani da matsayin kowane rukuni a *tsakiyarsa*, ba iyakarsa ba, in ba haka ba ma'aunin yana da son zuciya.
- **Karanta "kusa da sifili" a matsayin "babu rashin daidaito"**: Ma'aunin Taruwa kusa da sifili yana nufin "babu daidaitaccen gangaren matsayin arziki", ba "babu rashin daidaito" a cikakken ma'ana ba — rashin daidaito masu gaba da juna a hanyoyi dabam za su iya soke juna.

## Tushe

- Wagstaff A, Paci P, van Doorslaer E. "On the measurement of inequalities in health." Soc Sci Med. 1991;33(5):545-57.
- O'Donnell O, van Doorslaer E, Wagstaff A, Lindelow M. "Analyzing Health Equity Using Household Survey Data." World Bank. 2008 — the standard practitioner handbook, source of the convenient covariance formula used here. <https://openknowledge.worldbank.org/entities/publication/98380884-0d1d-53d2-b95f-ec6be2019414>
