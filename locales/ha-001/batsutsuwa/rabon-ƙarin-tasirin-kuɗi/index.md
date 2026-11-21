# Rabon Ƙarin Tasirin Kuɗi (ICER)

ICER shi ne ƙarin kuɗi ga kowace ƙarin naúrar tasirin lafiya lokacin da ka zaɓi zaɓi ɗaya maimakon na gaba mafi kyau. Shi ne lambar kanun labarai ta tantance fasahar lafiya. (Idan naúrar tasirin QALY ne, ana kuma kiransa rabon ƙarin amfanin kuɗi, ICUR.)

## Dalilin muhimmancinsa

Tsarin lafiya ba sa kimanta fasaha shi kaɗai — koyaushe *a ƙari*, a kan abin da za a yi in ba haka ba. NICE tana kwatanta ICER na fasaha da iyakarta ta **£20,000–£30,000 ga kowane QALY**; cibiyar ICER ta Amurka tana ba da rahoto a $50,000–$200,000/QALY; Kanada tana aiki kusan CAD$50,000/QALY. Ko samfurinka "ya cancanta" ga hidimar lafiya ta ƙasa, a hukumance, shi ne ko ICER ɗinsa ya wuce iyakar gida. Duba [iyakokin shirin biya](../iyakokin-shirin-biya/).

## Lissafin

```
ICER = (Cost_new − Cost_comparator) / (Effect_new − Effect_comparator)
     = ΔC / ΔE
```

Ƙa'idodin fassara:

- ΔC < 0, ΔE > 0: sabon zaɓi **yana mamayewa** — mai arha kuma mafi kyau; babu bukatar rabo.
- ΔC > 0, ΔE > 0: a lissafa ICER, a kwatanta da iyaka λ; a ɗauka idan ICER < λ.
- ΔC > 0, ΔE < 0: an mamaye sabon zaɓi — a ƙi.
- Rabo suna yin mummunar ɗabi'a kusa da ΔE = 0 — a fi son [ribar kuɗi net](../ribar-kuɗi-net/) don jera.

Abin kwatantawa dole ya zama *zaɓi na gaba mafi kyau wanda ba a mamaye ba*, ba "kada a yi komai" ba — duba [mamaya da iyakar inganci](../mamaya-da-iyakar-inganci/).

## Misali da aka lissafa

Hidimar sa ido daga nesa ga marasa lafiya masu gazawar zuciya, ga kowane marasa lafiya 1,000/shekara, idan aka kwatanta da kulawa ta yau da kullum:

```
Costs:   service £900,000; admissions avoided save £600,000
         ΔC = 900,000 − 600,000 = £300,000
Effects: earlier intervention gains 25 QALYs
         ΔE = 25

ICER = 300,000 / 25 = £12,000 per QALY
```

£12,000/QALY yana ƙasa da iyakar NICE ta £20,000 sosai — shari'a mai ƙarfi. A lura yadda kuɗin *net* ke da muhimmanci: ba tare da ragewar £600,000 ba, ICER zai zama £36,000/QALY kuma shari'ar za ta faɗi mai yiwuwa. Ragewar kuɗi da ingancin shaidarsu su ne inda ake cin nasara ko faɗuwa a waɗannan bincike (duba [kuɗin ƙasa da aka kauce wa](../kuɗin-ƙasa-da-aka-kauce-wa/)).

## Alaƙa da injiniyancin manhaja

Horon ICER yana wucewa gaba ɗaya zuwa shawarwarin injiniya:

```
(cost of option B − cost of option A) / (outcome B − outcome A)
```

— ƙarin kuɗi ga kowane ƙarin aikawa, ga kowace sa'ar injiniya da aka ceta, ga kowane abin da aka kauce wa — koyaushe a kan madadin na gaba mafi kyau, ba a kan rashin yin komai ba. Ɗabi'u biyu da suka cancanci sata: (1) *a ambaci abin kwatantawa a fili*; yawancin da'awar ROI na kayan aiki a ɓoye suna kwatantawa da mutum na bambaro; (2) *a cire kuɗi net da farko* — kayan aiki da ke kashe £100k amma yana maye gurbin £80k na kashe-kashen da ke akwai yana da ΔC = £20k.

## Tarkuna

- **Kwatanta ICER tsakanin kuɗaɗe ba tare da matakin sauyawa a bayyane ba**: ICER da aka lissafa a kuɗin ƙasa ɗaya dole a sauya shi da hanyar da aka bayyana kafin a kwatanta shi da iyakar wata ƙasa — duba [kwatanta ICER tsakanin kuɗaɗe](../kwatanta-icer-tsakanin-kuɗaɗe/) don dalilin da ya sa zaɓin abin sauyawa (daidaiton ikon sayayya da farashin musayar kasuwa) shi kansa zai iya juya shawarar ɗauka.
- **Wasan abin kwatantawa**: kwatanta da tushe da ya tsufa ko mara kyau da gangan yana ƙara ΔE kuma yana yabon ICER.
- **Matsakaici maimakon ƙari**: kuɗi ga kowane QALY na dukan shiri ba shi ne ICER na faɗaɗa ko ɗauka ba.
- **Bautar lamba ɗaya**: ICER rabo ne na bambance-bambance biyu marasa tabbas; a bayar da rahoton rashin tabbas ta [PSA da CEAC](../binciken-jin-canji-na-yiwuwa/).
- **ICER marasa kyau suna da duhu** (mai arha-da-kyau da mai tsada-da-muni suna ba da alama iri ɗaya) — kada a taɓa bayar da rahoton ICER mara kyau ba tare da faɗin wace kwata ba ce.

## Tushe

- NICE: cost-effectiveness thresholds FAQ. <https://www.nice.org.uk/what-nice-does/faqs/changes-to-nice-s-cost-effectiveness-thresholds>
- ICER 2023 Value Assessment Framework. <https://icer.org/wp-content/uploads/2023/09/ICER_2023_VAF_For-Publication_092523.pdf>
- York Health Economics Consortium glossary: ICER. <https://yhec.co.uk/glossary/incremental-cost-effectiveness-ratio-icer/>
