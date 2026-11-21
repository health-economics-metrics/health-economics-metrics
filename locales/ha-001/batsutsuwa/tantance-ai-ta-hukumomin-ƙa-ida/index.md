# Tantance AI ta Hukumomin Ƙa'ida

Tsare-tsaren ƙa'ida da ke mulkin AI a kulawar lafiya — tsarin Software as a Medical Device (SaMD) na FDA tare da **Predetermined Change Control Plans (PCCPs)**, da shirye-shiryen tantance duniya ta zahiri kamar NHS AI in Health and Care Award — da kuma abin da suke kashewa da abin da suke ba da dama a fannin tattalin arziki.

## Dalilin muhimmancinsa

Ƙa'ida tana ƙayyade **kuɗin shaida na shiga kasuwa** da **kuɗin kowane sabunta samfuri na gaba** — ga samfuran AI, na biyun yakan fi muhimmanci. Hanyar FDA ta gargajiya (a kulle samfurin; a sake amincewa idan an canza) ta sa ci gaba da inganta ya zama mai tsada ƙwarai. **Jagoran PCCP (an kammala shi a Disamba 2024)** ya canza tattalin arzikin: mai ƙera zai iya amincewa tukuna da sabuntawar samfuri *na musamman* na gaba — bayanin gyare-gyaren da aka tsara, yarjejeniyar gyara (yadda za a tabbatar da kowanne), da tantance tasiri — domin ingantawar da aka amince da ita ta fita ba tare da sabon gabatarwa ba. Na'urori masu AI sama da 1,000 sun sami izinin FDA; yanzu FDA tana kuma bincika sa ido kan aikin duniya ta zahiri (ma'auni da aka tsara tukuna: adadin FP/FN na tushe, gudun daidaitawa, alamun sauyin yanki).

## Lissafin

PCCP shi ne tattalin arzikin [lokacin jagoranci na DORA](../ma-aunan-dora/) da aka shafa wa samfuran da ake sarrafawa:

```
Cost per model update (traditional) = re-submission cost + review delay × CoD
Cost per model update (PCCP-scoped) = protocol-execution cost only

Update economics over a product life:
  N updates × (submission cost + months of review × cost-of-delay per month)
  vs one-time PCCP authoring cost + N × protocol executions
```

Ga tsarin NHS AI Award, saitin ma'auni ya fi daidaito faɗi: tantancewar duniya ta zahiri masu zaman kansu suna auna aikin asibiti, tasirin tsarin aiki/aiwatarwa, da tasirin tattalin arziki — cikakken bututun [tasirin gwaji → tasirin amfani → tasirin kuɗi](../ƙwazon-mai-haɓaka-manhaja-da-ai/) da aka kafa a matsayin cibiya.

## Misali da aka lissafa

Mai sayar da AI na rediyo yana shirin ingantawar samfuri kowane kwata cikin shekaru 3 (sabuntawa 12):

```
Traditional: 12 × (£80k submission + 4 months × £50k/month delayed-benefit CoD)
           = 12 × £280k = £3.36M
PCCP route:  £250k PCCP authoring + 12 × £30k protocol execution = £610k
Saving ≈ £2.75M — and patients receive each improvement ~4 months sooner:
12 × 4 months × the update's clinical benefit, a QALY line in its own right.
```

PCCP amincewar ƙa'ida ce cewa **yawan aikawa yana da darajar asibiti** — babban sarkar sababi na wannan ma'ajiya, wadda mai ƙa'ida ya amince da ita.

## Alaƙa da injiniyancin manhaja

Gina PCCP da kyau matsala ce ta manhaja: rukunin kimantawa da aka tsara tukuna, bayanan da aka yi wa sigar, bututun tabbatarwa na atomatik, sa ido kan gudun — ɗan uwa mai ƙa'ida na ci gaba da aikawa, inda "ƙofar aikawa" ke zama yarjejeniyar da aka tabbatar maimakon duban lamba. Ƙungiyoyi masu ingantattun kayayyakin kimantawa ([ma'aunan ingancin AI](../ma-aunan-ingancin-ai/)) suna samun PCCP a arha; waɗanda ba su da su suna gano cewa ƙuntatawar ƙa'ida a zahiri ƙuntatawar girman injiniya ce. Ga samfuran da ke shiga NHS, jerin makamancin haka shi ne DTAC (aminci na asibiti, kariyar bayanai, haɗin kai) tare da matakan shaida na [NICE ESF](../tsarin-matsayin-shaida-na-nice/) — a kasafta duka a matsayin [TCO](../jimillar-kuɗin-mallaka/) na shiga kasuwa.

## Tarkuna

- **Mafarkin faɗaɗa iyakar PCCP**: nau'ukan gyara *na musamman* kaɗai aka amince da su tukuna; sauye-sauyen gine-gine ko sabbin amfani da aka nufa har yanzu suna buƙatar cikakken bita.
- **Gudun duniya ta zahiri ba a sa ido ba**: izini a aikin ƙaddamarwa + gudun al'umma a ɓoye = samfurin da ke aiki a wajen iyakar da aka amince da shi; sa ido tsammanin ƙa'ida ne kuma kariyar kai.
- **Rikita izini da daraja**: izinin FDA/UKCA ≠ wani zai biya — wannan shingen [HTA](../tantance-fasahar-lafiya/) ne, wanda ake gudanarwa daban.

## Tushe

- FDA, AI-enabled device software / SaMD. <https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-software-medical-device>
- PCCP implementation guidance analysis. <https://intuitionlabs.ai/articles/fda-pccp-implementation-guide-ai-ml-samd>
- NHS England, lessons from AI in Health and Care Award real-world evaluations. <https://www.england.nhs.uk/long-read/planning-and-implementing-real-world-ai-evaluations-lessons-from-the-ai-in-health-and-care-award/>
