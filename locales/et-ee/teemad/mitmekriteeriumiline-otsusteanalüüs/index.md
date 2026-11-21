# Mitmekriteeriumiline otsusteanalüüs (MCDA)

Mitmekriteeriumiline otsusteanalüüs (MCDA) on kaalutud summaga punktimudel, mida kasutatakse tervisetehnoloogia hindamisel, kui üksainus ICER-i/maksevalmiduse lävend ei hõlma kõike, mis otsustajale korda läheb: võrdsus, rahuldamata vajadus, innovatsioon, eelarvemõju, haiguse raskus. Igale kriteeriumile antakse kaal, mis kajastab selle tähtsust (saadud huvirühmadelt, kaalud liituvad 1-ks), igale variandile antakse kriteeriumi kohta normaliseeritud skoor (tavaliselt 0–1) ja koguskoor on kaalutud summa — sama matemaatiline kuju kui tarkvaratarnija valimise hindamiskaardil.

## Miks see on oluline

MCDA-d kasutatakse raamistikes nagu EVIDEM ja mõnes HTA asutuses orbravimite/haruldaste haiguste hindamisel, kus rangest kulu-QALY-kohta lävendi lähenemisest peetakse liiga kitsaks, et hõlmata kõike, mis otsuse juures oluline. ISPORi MCDA Emerging Good Practices Task Force vormistas hea tava juhised kaalude ja skooride kaitstavaks hankimiseks, just seetõttu, et mitteametlikult kaalutud otsust on lihtne konstrueerida ja lihtne mänguväljana kasutada. Kui tervisetehnoloogial on tõesti väärtusmõõtmeid, mida üksainus [maksevalmiduse lävend](../maksevalmiduse-lävendid/) esitada ei suuda — raskus, innovatsioon, võrdsus —, annab MCDA otsustajatele selge, auditeeritava struktuuri nende ühendamiseks, selle asemel et lausumata hinnang.

## Matemaatika

```
MCDA skoor = Σ_i (kaal_i × skoor_i)

kaalud peaksid liituma 1-ks (hangitud huvirühma meetoditega nagu
swing-kaalumine või Analytic Hierarchy Process)
```

## Lahendatud näide

HTA komisjon hindab digitaalset ravi nelja kriteeriumi alusel:

```
Kriteerium                         Kaal     Skoor   Kaal × Skoor
Kliiniline kasu                    0,4      0,8     0,32
Kulumõju                           0,3      0,5     0,15
Haiguse raskus / rahuldamata vajadus 0,2    0,9     0,18
Innovatsioon                       0,1      0,6     0,06
                                    ─────                ─────
                                    1,0                  0,71
```

Kaalud liituvad 1,0-ks (0,4 + 0,3 + 0,2 + 0,1) ja MCDA skoor on 0,71 (0,32 + 0,15 + 0,18 + 0,06). Komisjon võrdleb 0,71 eelnevalt kokku lepitud lävendiga või järjestab selle samamoodi hinnatud konkureerivate tehnoloogiate vastu.

## Seos tarkvaraarendusega

See on täpselt sama matemaatika mis kaalutud tarnijavaliku hindamiskaart, RFP hindamismaatriks või funktsioonide prioriseerimise punktimudel — vaata [osta versus ehita](../osta-versus-ehita/), kaalutud hindamiskaardi klassikalist kasutusjuhtu tarkvarahangetes. Seda tasub ka vastandada [WSJF-ile ja CD3-le](../wsjf-ja-cd3/): WSJF/CD3 on *suhtel* põhinev prioriseerimismeetod (viivituse kulu jagatud töö suuruse või kestusega), samas kui MCDA on kaalutud *summa*. MCDA ja WSJF/CD3 on kaks struktuurselt erinevat vastust küsimusele „kuidas me konkureerivaid variante järjestame“ ning teadmine, kumba antud otsus tegelikult nõuab — liitväärtust sõltumatute kriteeriumide üle või väärtustihedust napi võimsuse ühiku kohta —, loeb rohkem kui see, milline valem tundub rangem.

## Lõksud

- **Kaalude hankimise nihe**: see, kes kaalud seab, määrab praktiliselt ette järjestuse, nii et „valem“ võib poliitilise või kommertsotsuse objektiivseks arvutuseks pesta. Dokumenteeri, kes kaalud seadis ja kuidas.
- **Kriteeriumi topeltarvestus, mis on juba mujal hõlmatud**: „kulutõhususe“ hindamine ühe kriteeriumina *ja lisaks* eraldi „kulumõju“ hindamine kaalub raha teiste kriteeriumidega võrreldes üle, ilma et keegi seda tahaks.
- **Näiv täpsus**: kahe kümnendkohaga kaalutud skoor (0,71) vihjab suuremale rangusele, kui aluseks olevad huvirühmade hinnangud skaalal 0–10 tegelikult kannavad, ja hindajatevaheline varieeruvus nendes hinnangutes jäetakse sageli üldse raporteerimata.

## Allikad

- Thokala P, Devlin N, Marsh K, et al. „Multiple Criteria Decision Analysis for Health Care Decision Making — An Introduction: Report 1 of the ISPOR MCDA Emerging Good Practices Task Force.“ Value Health. 2016;19(1):1-13.
- Goetghebeur MM, Wagner M, Khoury H, et al. „Evidence and Value: Impact on DEcisionMaking — the EVIDEM framework and potential applications.“ BMC Health Serv Res. 2008;8:270.
