# WSJF da CD3

CD3 (Kuɗin Jinkiri da aka Raba da Tsawon Lokaci — Cost of Delay Divided by Duration) da WSJF (Weighted Shortest Job First) ƙa'idodin fifiko ne da ke tsara aiki bisa **yawan daraja**: nawa kuɗin jinkiri ake cirewa ga kowace naúrar ƙarfi mai ƙaranci da aka cinye. A ƙarƙashin ƙarfi tsayayye da aka raba, mafi girman-CD3-na-farko shi ne jerin mafi kyau a lissafi don rage jimillar kuɗin jinkiri.

## Dalilin muhimmancinsa

Kowane tarin aiki matsalar rarrabawa ce: abubuwa da yawa masu cancanta, bututu ɗaya. Tattalin arzikin lafiya ya warware matsala iri ɗaya ga kasafin lafiya da teburin gasa na tasirin kuɗi — jera shiga tsakani bisa lafiyar da aka samu ga kowane fam, ba da kuɗi ƙasa jerin har kasafi ya ƙare. CD3 dabara ɗaya ce ga ƙarfin isarwa: fa'ida ga kowace naúrar *albarkatu da aka ƙuntata*, ana ba da kuɗi bisa jere. Samun jerin daidai kuɗi ne kyauta — aiki ɗaya, ƙarfi ɗaya, ƙarancin jimillar kuɗin jinkiri.

## Lissafin

```
CD3  = Cost of Delay (£/week) / Duration (weeks)      — real units (Black Swan Farming)

WSJF = (user-business value + time criticality + risk reduction/opportunity
        enablement) / job size                         — SAFe's relative-scale proxy,
                                                        modified-Fibonacci scores
```

CD3 da kuɗi na gaske ([kuɗin jinkiri](../kuɗin-jinkiri/)) ya fi WSJF ƙarfi a tsantsa na maki marasa naúra — WSJF ga CD3 yake kamar yadda maki masu ma'auni da yawa ke ga cikakken [binciken amfanin kuɗi](../binciken-amfanin-kuɗi/): mai amfani lokacin da mayar da kuɗi bai da amfani, mai yiwuwar yin wasa da shi idan maki ba su da tushe.

## Misali da aka lissafa

Siffofi uku, ƙungiya ɗaya:

```
Feature   CoD (£/wk)   Duration   CD3
A         30,000       10 wks     3,000
B         12,000       2 wks      6,000
C         5,000        1 wk       5,000
```

Jerin CD3: B, C, A. Kwatanta jimillar kuɗin jinkiri da "mafi girman CoD na farko" (A, B, C):

```
CD3 order  (B,C,A): A waits 3 wks, C waits 2 → 30k×3 + 5k×2  = £100k delay cost
CoD order  (A,B,C): B waits 10, C waits 12   → 12k×10 + 5k×12 = £180k
```

Siffofi iri ɗaya, ƙungiya ɗaya — jeri kaɗai yana ceton £80,000. Hankalin: ƙananan abubuwa masu gaggawa suna farawa saboda suna sakin kuɗin jinkirinsu da arha; babban abu yana rasa kaɗan ta jira na ɗan lokaci.

## Alaƙa da injiniyancin manhaja

Ga fayilolin manhajar lafiya, bayyana CoD a naúrorin da wannan ma'ajiya ke koyarwa: QALY/mako × iyaka + £/mako na aiki, kuma tarin aiki yana zama mai kwatankwacin juna kai tsaye da yadda tsarin lafiya ke jera duk sauran abin da yake saya. Bayanan aiki biyu: (1) tsawon lokaci yana nufin *lokacin kalanda da ke mamaye cikas*, ba ƙoƙari ba — abu na mako 2 na lokacin da ya wuce da ke buƙatar kwanaki 2 na ƙungiyar cikas ya fi arha fiye da yadda yake kama (duba [inganta albarkatu na ƙasa](../inganta-albarkatu-na-ƙasa/)); (2) asibitoci suna gudanar da ƙa'ida ɗaya a ɓoye lokacin da suke jera jerin ɗakin tiyata bisa kayan aiki da aka auna da gaggawa — rukunan fifikon asibiti CD3 ne da aka auna da tsanani (duba [gibin QALY da masu gyaran tsanani](../gibin-qaly-da-masu-gyaran-tsanani/)).

## Tarkuna

- **Wasan kwaikwayon maki na WSJF**: muhawarar Fibonacci marasa naúra tana haɗuwa a wanda ya fi ƙara murya; ɗaure aƙalla abubuwan saman tarin aiki a CoD na gaske.
- **Yin wasa da tsawon lokaci**: raba abubuwa don ƙara matsayin CD3 — lafiya idan rabuwar tana isar da daraja daban-daban, zamba idan ba haka ba.
- **Watsi da bayanan gaggawa**: CoD mai siffar wa'adi (kwanakin ƙa'ida) yana karya zaton adadi tsayayye; tsara waɗannan bisa yiwuwar kwanan wata, sannan CD3 sauran.
- **Sauya jerin akai-akai**: CD3 don shawarwarin jeri ne a lokacin alƙawari, ba don sake haɗa aikin da ke gudana kullum ba (duba [ma'aunan gudana](../ma-aunan-gudana/) kan WIP).

## Tushe

- Black Swan Farming, CD3 and WSJF. <https://blackswanfarming.com/wsjf-weighted-shortest-job-first/>
- SAFe, WSJF. <https://framework.scaledagile.com/wsjf>
- Reinertsen DG, *The Principles of Product Development Flow*.
