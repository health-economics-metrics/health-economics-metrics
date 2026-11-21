# Analys Kost-Prow (CBA)

CBA a dalvos kostow *ha* sewyansow yn mona. Yw an unn eghen analys a yll gorthyp "a dal hemma dhe vos gwrys hag oll?" — na ny yw "pyth dewis yw gwell?" — drefen bos prowyow monodhys kehaval yn dhirek erbynn kostow.

## Perag yth yw posek

CBA yw standard **Green Book** HM Treasury an Rewlm Unys rag pub apprais spena poblek, yeghes ynwedh pan yll sewyansow bos monodhys. Le may hedh [CEA](../analys-kost-effeythusnans/)/[CUA](../analys-kost-talvos/) orth "kost rag unys yeghes," CBA a brissya an yeghes y honan (QALY × talvos threshold) ha pub tra aral — termyn, viaj, karbon — hag a dhelivr unn figyr nett. Pub kas ekonomek kowl a vesnath nombrek NHS a'n jeves kas ekonomek furvys avel CBA.

## An Matematik

```
NPV (talvos sosyal nett lemmyn) = Σ_t [ (Prowyow_t − Kostow_t) / (1 + r)^t ]
BCR (ratyo prow-kost)           = PV(prowyow) / PV(kostow)

Degemerewgh mar NPV > 0 (kehaval BCR > 1); rankewgh dre NPV, na ny yw BCR.
r = 3.5% (reyt preferans termyn sosyal Green Book)
```

Efektys yeghes a yll entra monodhys avel QALYs × λ (gwelewgh [threshold parys-dhe-bayi](../harthow-bodh-dhe-dhalleth/)). An Green Book a arghas ynwedh **addasyansow bias owrowayans** — ow yskynna estymasyons kost ha ow trehi prowyow dre radhow diwar skoodhyans, drefen bos apprais yn systemek rosek.

## Ensampel gwrys

System e-gerghyans, horizon 5 bledhen, diskont 3.5%:

```
Kostow:   gwil £1.2M (bledhen 0), oberya £300k/bl (bledhydhyow 1–5)
Prowyow:  sawyansow admin £250k/bl, diagnostek dewblys hwithys £280k/bl,
          termyn klav sawys 40,000 eur/bl × £15 = £600k/bl → £1,130k/bl

PV kostow    = 1,200k + 300k × 4.515 (faktour annuity) = £2,555k
PV prowyow   = 1,130k × 4.515                          = £5,102k

NPV = 5,102 − 2,555 = +£2,547k     BCR = 2.0
```

Devnydhewgh bias owrowayans Green Book (lavar +40% war kost gwil, −20% war prowyow): PV kostow ≈ £3,035k, PV prowyow ≈ £4,082k, NPV ≈ **+£1,047k** — hwath pozitiv, hag hedna yw poynt an addasyans: kasow a res gwitha aga owrowayans aga honan.

## Kolm gans ynjynnyans medhelweyth

Kasow besneth ynjynnyans yw CBAs anfurvys. An gwellheansow Green Book a dal aga ladra:

- **Bias owrowayans avel yskynnyans standard** — ynjynnoryon a dhiwoeth kost trelyans yn kehaval avel ministrys a dhiwoeth kost isstrukter; devnydhewgh yskynnyans derivys yn le gwul kepar ha pan veu an termyn ma dyffrans.
- **Monodhewgh an prow dyffrans yn onest po na ny wrewgh** — termyn klav/devnydhyer yw monodhys orth ratyow defendyek; "talvos brand" nyns yw.
- **NPV a rank, BCR na wra**: towl byghan gans BCR 5 a yll bos a le vri ages unn vras gans BCR 1.6.

## Fowtys Kemmyn

- **Monodhya an dhimonodhadow** dhe worbrisya prowyow (kolon, "kesdheweth strategek") — gwithewgh an re na kwalitativ, herwydh [analys kost-sewyans](../analys-kost-sewyans/).
- **Kowntya treuslywyansow avel prowyow**: mona ow tremena ynter korfow poblek a dheu dhe nul orth [perspektiv](../perspektiv-analys/) sosyal.
- **Heb kontrafaktel**: prowyow yw musurys erbynn an dewis do-minimum, na ny yw erbynn nul.

## Fontynnow

- HM Treasury, The Green Book. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
- Gidyans diskontya Green Book. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-discounting>
