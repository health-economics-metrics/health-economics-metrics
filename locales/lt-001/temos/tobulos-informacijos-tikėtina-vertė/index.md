# Tobulos informacijos tikėtina vertė (EVPI)

EVPI – tai didžiausia suma, kurią sprendimų priėmėjas turėtų mokėti, kad pašalintų neapibrėžtumą prieš apsispręsdamas – formali kaina už „pirmiausia atlikime tyrimą“.

## Kodėl tai svarbu

Sveikatos sistemos nuolat susiduria su pasirinkimu: diegti dabar pagal netobulus įrodymus ar pirmiausia finansuoti tolesnius tyrimus. EVPI antrajai galimybei priskiria skaičių. Jei EVPI yra 50 000 £, o siūlomas tyrimas kainuoja 2 mln. £, diegti dabar. Jei EVPI yra 20 mln. £, tyrimas yra pigus. Tas pats klausimas – „ar turėtume tai išbandyti prieš plečiant?“ – kyla kiekvienam įmonės įrankio sprendimui, ir beveik niekas jo neįkainoja. Kaip įkainoti galimybę vėliau išplėsti projektą, o ne galimybę pirmiausia rinkti informaciją, žr. [Realiųjų pasirinkimo galimybių vertinimas](../realiųjų-pasirinkimo-galimybių-vertinimas/).

## Matematika

EVPI – tai skirtumas tarp sprendimo su tobulu žinojimu ir sprendimo dabar pagal lūkesčius:

```
EVPI = E_θ[ max_j NMB(j, θ) ]  −  max_j E_θ[ NMB(j, θ) ]

θ        = uncertain parameters (with their joint distribution)
NMB(j,θ) = net monetary benefit of option j given θ
```

Pirmas narys: geriausio pasirinkimo išmokos vidurkis kiekviename galimame pasaulyje (visada pasirenkate teisingai). Antras narys: vienos, vidutiniškai geriausios parinkties išmoka (turite įsipareigoti dabar). EVPI visada ≥ 0. Populiacijos EVPI padauginamas iš paveiktų sprendimų skaičiaus. Skaičiuojamas tiesiai iš [PSA](../tikimybinė-jautrumo-analizė/) traukimų.

## Išspręstas pavyzdys

Diegti DI dokumentavimo asistentą 5 000 gydytojų ar ne. Du pasauliai:

```
World A (p = 0.6): assistant saves 20 min/day → NMB of rollout = +£8M
World B (p = 0.4): assistant saves ~0 (workflow friction) → NMB of rollout = −£3M
NMB of "don't roll out" = £0 in both worlds.
```

Sprendžiant dabar: E[NMB diegimo] = 0,6 × 8 − 0,4 × 3 = **+3,6 mln. £** → diegti.

Su tobula informacija: A pasaulyje rinktis diegimą (+8 mln. £), B pasaulyje – nieko (0 £). Tikėtina vertė = 0,6 × 8 + 0,4 × 0 = **4,8 mln. £**.

```
EVPI = 4.8M − 3.6M = £1.2M
```

Griežtas 3 mėnesių bandymas, kainuojantis 150 000 £ ir iš esmės išsprendžiantis, kuriame pasaulyje esate, yra neabejotinai vertas – o bet kuris bandymas, kainuojantis daugiau nei 1,2 mln. £, nėra, kad ir koks kruopštus.

## Ryšys su programinės įrangos inžinerija

EVPI yra spike, bandomojo projekto, A/B testo ir koncepcijos įrodymo ekonomika. Ji duoda dvi praktines taisykles:

- **Bandomąjį projektą verta finansuoti tik jei sprendimas iš tikrųjų galėtų pasikeisti.** Jei diegtumėte nepriklausomai nuo bandymo rezultato, EVPI = 0, o bandymas yra teatras.
- **Riboti bandymo išlaidas EVPI.** Informacijos vertė ribojama sprendimo, kurį ji informuoja, verte.

Dalinis EVPI (EVPPI) tai išplečia iki atskirų parametrų: „kiek verta tiksliai nustatyti būtent sutaupyto laiko skaičių?“ – tai nurodo, ką bandymas turėtų matuoti. Kaip įkainoti *konkretų* siūlomą tyrimą, o ne viso neapibrėžtumo pašalinimą, žr. [EVSI](../imties-informacijos-tikėtina-vertė/).

## Spąstai

- **Bandymų vykdymas be priskirtos sprendimo taisyklės** – informacija, kuri negali pakeisti pasirinkimo, pagal apibrėžimą beverte.
- **Informacijos rinkimo vėlavimo kainos ignoravimas**: 6 mėnesių bandymas atideda 6 mėnesių naudą ([vėlavimo kaina](../vėlavimo-kaina/)); bandymo grynoji vertė = išspręstas EVPI − vėlavimo kaina − bandymo kaina.
- **EVPI laikymas prognoze.** Tai viršutinė informacijos vertės riba, o ne konkretaus tyrimo duosimo įvertis.

## Šaltiniai

- Claxton K. "Exploring uncertainty in cost-effectiveness analysis." PharmacoEconomics 2008. <https://pubmed.ncbi.nlm.nih.gov/18279550/>
- York Health Economics Consortium glossary: EVPI. <https://yhec.co.uk/glossary/expected-value-of-perfect-information-evpi/>
