# DORA metrikak (DORA Metrics)

DORA (DevOps Research and Assessment) metrikak software-entregaren errendimenduaren lau neurri dira — hedapen-maiztasuna, aldaketen lead time, aldaketen hutsegite-tasa eta hutsegindako hedapenaren berreskuratze-denbora —, gehi fidagarritasuna bosgarren gisa. Arloko entrega-erreferentzia gehien balioztatuak dira, eta bakoitzak osasun-ekonomiako irakurketa zuzena du.

## Zergatik axola duen

DORAren hamarkada bateko ikerketak metrika hauek erakundearen errendimenduarekin lotzen ditu. 2024ko txostenaren klusterrak: **elite** taldeek eskariaren arabera hedatzen dute (egunean hainbat aldiz), commit-etik produkziora egun bat baino gutxiago behar dute, aldaketen ~%5 huts egiten dute eta ordubete baino gutxiagotan berreskuratzen dira; **baxuko** errendimenduak hilean behin edo gutxiagotan hedatzen dituzte, hilabeteak behar dituzte, aldaketen ~%40 huts egiten dute eta asteetan berreskuratzen dira. Osasun-sistema batentzat, hauek ez dira IT harrokeriako zenbakiak: balio klinikoa pazienteengana zein azkar iristen den eta aldaketa bakoitzak zenbat arrisku daraman zehazten dute.

## Matematika

```
Hedapen-maiztasuna       = produkzio-hedapenak / denbora
Aldaketen lead time      = t(hedatu) − t(commit), mediana
Aldaketen hutsegite-tasa = huts egindako aldaketak / aldaketa guztiak × 100
Berreskuratze-denbora (MTTR) = t(berreskuratu) − t(hutsegitea), mediana
Fidagarritasuna          = SLO lorpena (erabilgarritasuna, latentzia, zuzentasuna)
```

Osasun-ekonomiako itzulpenak:

```
Lead time     → cost-of-delay.md: asteak pipeline-ean × CoD (£ edo QALY/aste)
Hutsegite-tasa → software-aldaketaren gertaera kaltegarrien tasa: CFR × intzidentzia bakoitzeko kostua
Berreskuratze-denbora → geldialdi-kaltea: MTTR × (galdutako jarduera klinikoa + segurtasun-esposizioa)/ordu
Fidagarritasuna → onuraren deskontua: %99ko erabilgarritasuna duen zerbitzuak ≈ 0.99 entregatzen du
                  bere eredutako onuraren — atxikimenduaren software-analogoa
```

## Adibide landua

Trust baten pazienteen fluxuko software-taldea, entrega-ingeniaritzako inbertsio baten aurretik/ondoren:

```
                    Aurretik    Ondoren
Hedapenak           hilero      astero
Lead time           6 aste      4 egun
CFR                 %25         %8
MTTR                2 egun      2 ordu
```

Taldeak ~30 hobekuntza entregatzen ditu urtean, hobekuntza bakoitzaren batez besteko balioa £4,000/aste ([CoD](../atzerapenaren-kostua/)). ~5,4 asteko lead time murrizketak hobekuntza bakoitzaren onura-fluxua aurreratzen du: 30 × 5.4 × 4,000 ≈ **£648,000/urte** lehenago entregatutako balio. CFR hobekuntza: 30 × (0.25 − 0.08) = ~5 aldaketa huts gutxiago urtean × £15,000 batez besteko intzidentzia-kostua (sistema klinikoaren geldialdia, konponketa) = **£76,500/urte**. Entrega-inbertsioa edozein esku-hartze klinikoren moneta berean balioesten da.

## Software ingeniaritzarekin lotura

Hau software aldea *da* — aipatzeko balio duen lotura alderantzizko mapaketa da: DORA metrikak ospitalearen eragiketa-metrikak dira, beste jantzi batekin. Lead time ↔ [deribaziotik tratamendura](../bidalketatik-tratamendura/); aldaketen hutsegite-tasa ↔ [berrospitalizazio-tasa](../berrospitalizazio-tasa/) (itzuli zen lana); MTTR ↔ larrialdi-erantzuna; hedapen-maiztasuna ↔ kontsultaren emaritza. Hobekuntza-metodoak bi noranzkoetan transferitzen dira, biak segurtasun-murrizketapeko ilara-sistemak direlako. Kontuan hartu DORA 2025eko AA aurkikuntza ere: AA onarpena orain emaritza handiagoarekin korrelatzen da baina egonkortasun *okerragoarekin* — eraginkortasuna eta albo-ondorioak dituen esku-hartzea, biltegi honek irakasten duen onura garbiaren analisia zehatz-mehatz eskatzen duena (ikus [AAren garatzaile-produktibitatea](../aaren-garatzaile-produktibitatea/)).

## Tranpak

- **Metrika manipulatzea**: hedapen-zenbaketak no-op bertsioekin puztuak; CFR hotfix-ak hutsegite gisa ez zenbatuz jaitsia. Definitu gertaerak zehatz-mehatz, HTAk amaiera-puntuak definitzen dituen bezala.
- **Taldeen arteko sailkapen-taulak**: DORA klusterrek praktikak alderatzen dituzte, ez arrisku-profil desberdinak dituzten taldeak; "high" mailako sistema klinikoetako talde bat optimoa izan daiteke "elite" arduragabea litzatekeen lekuan.
- **Metrika bakarra optimizatzea**: CFR/fidagarritasunik gabeko abiadura emaritza-ezegonkortasun trukea da — jakinarazi beti lauak batera ([kostu-ondorio taula](../kostu-ondorio-analisia/) dira, ez puntuazio bat).

## Iturriak

- DORA research and reports. <https://dora.dev/>
- 2024 DORA benchmarks summary. <https://octopus.com/devops/metrics/dora-metrics/>
- DORA 2025 State of AI-assisted Software Development. <https://dora.dev/dora-report-2025/>
