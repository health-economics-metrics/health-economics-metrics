# Jimillar Kuɗin Mallaka (TCO)

TCO shi ne cikakken kuɗin tsari a tsawon rayuwarsa: samu ko ginawa, haɗawa, aiki, kulawa, tallafi, horarwa, da rushewa. Tushen da ba shi da daɗi: **kulawa shi ne 50–80% na TCO na manhaja** — kusan kashi uku cikin huɗu na kuɗin rayuwa yana zuwa *bayan* ƙaddamarwa.

## Dalilin muhimmancinsa

Tantance fasahar lafiya ta koya tuntuni cewa farashin magani ba shi ne kuɗinsa ba — bayarwa, sa ido, da sarrafa illolin gefe duk suna cikin samfurin. Shari'o'in kasuwanci na manhaja da ke ƙirga kuɗin ginawa/lasisi kawai suna maimaita kuskuren farashin magani mai sauƙi, kuma suna rage ɓangaren kuɗi na kowane [ICER](../rabon-ƙarin-tasirin-kuɗi/) da [tasirin kasafin kuɗi](../binciken-tasirin-kasafin-kuɗi/) da suke ciyarwa a tsari. Ga sayayyar NHS, tarbiyyar TCO ita ce ke sa da'awar tasirin kuɗi ta samfurin dijital ta zama ta gaskiya — kuma nan ne zaɓuɓɓuka masu kama da arha ke faɗuwa.

## Lissafin

```
TCO = initial cost (build/licence + integration + data migration + training)
    + Σ_t [operations + maintenance + support + infrastructure + upgrades
           + compliance/assurance]_t / (1 + r)^t
    + decommissioning cost (exit, data extraction, parallel running)

Horizon: 3–5 years commercial, system-lifetime for clinical infrastructure
r: 3.5% public sector (Green Book), 8–12% commercial
Benchmarks: annual maintenance ≈ 15–20% of build cost; ~78% of lifetime
TCO post-launch; ignore decommissioning and vendor lock-in prices itself.
```

## Misali da aka lissafa

Zaɓuɓɓuka biyu na tsarin e-observations, tsawon shekaru 5:

```
                        Vendor SaaS     In-house build
Year 0 (licence/build)  £250,000        £900,000
Integration + training  £180,000        £150,000
Annual run (yrs 1–5)    £120,000/yr     £190,000/yr  (hosting + 1.5 FTE maint.)
Exit/decommission       £60,000         £30,000

Undiscounted TCO        £1,090,000      £2,030,000
```

Kiyasin injiniya na zaɓin ginawa (£900k) kawai 44% na ainihin TCO ɗinsa ne — kuma kiyasin gini da kansu yawanci suna wuce 30–40% (duba [gina da saye](../gina-da-saye/)). Sai dai idan zaɓin cikin gida ya isar da *sakamako* daban sosai, dabarar [rage kuɗi](../binciken-rage-kuɗi/) tana aiki kuma SaaS yana cin nasara da ~£940k.

## Alaƙa da injiniyancin manhaja

Injiniyoyi suna raina bayanan kulawa na fagensu lokacin da suke ba da shawarar gina: ƙa'idar kulawa ta shekara ta 15–20%-na-kuɗin-ginawa tana nufin kowane tsarin £1M a shiru yana ɗaukar nauyin £150–200k/shekara na ƙarfi na gaba — wajibi da ya kamata ya kasance a ma'auni na tunani ɗaya da [bashin fasaha](../bashin-fasaha/). TCO shi ma ɓangaren kuɗi ne na kowane ma'auni a wannan ma'ajiya: kuɗi ga kowace turawa, [tattalin arzikin naúrar gajimare](../tattalin-arzikin-naúrar-gajimare/), da tarbiyyar mai rabawa da HTA ke tilastawa masu ɗaukar nauyin magani. Idan aka ƙalubalanci farashin samfurinka, kwatancen TCO da ya haɗa ainihin kuɗin gudanar da wanda yake kan mulki yawanci shi ne mafi ƙarfin sake tsarawa da ake da shi. Lambar TCO ta shekaru da yawa kamar ta sama jimilla ce ta layukan kuɗi da yawa a lokaci — duba [jimlar kuɗi mai tsaron kuɗin ƙasa](../jimlar-kuɗi-mai-tsaron-kuɗin-ƙasa/) don dalilin da ya sa wannan jimla ya kamata ta zama ta ƙima mai ainihin ƙima ba floating point ba da zarar samfuri dole ya daidaita zuwa kobo, da [raba kuɗi daidai zuwa kobo](../raba-kuɗi-daidai-zuwa-kobo/) don raba jimillar TCO a tsakanin cibiyoyin kuɗi ba tare da rasa kobo ba.

## Tarkuna

- **Mannewa da kuɗin ƙaddamarwa**: kwatanta zaɓuɓɓuka a kuɗin shekara 0 yayin da jerin ke juyawa zuwa shekara ta 3.
- **Ƙaryar aiki na cikin gida kyauta**: kulawar cikin gida da aka ƙididdige a sifili domin "ƙungiyar an riga an biya ta" — duba [farashin damar da aka bari](../farashin-damar-da-aka-bari/).
- **Watsi da kuɗin fita**: fitar da bayanai, ƙarshen kwangila, da gudanar da tsarori biyu a lokaci ɗaya su ne inda SaaS "mai arha" ke yin tsada.
- **Keta ka'idar tsawon lokaci ɗaya**: kwatanta TCO na SaaS na shekaru 3 da amortization na ginawa na shekaru 10 (duba [tsawon lokacin bincike](../tsawon-lokacin-bincike/)).

## Tushe

- IBM, total cost of ownership. <https://www.ibm.com/think/topics/total-cost-of-ownership>
- Software maintenance cost benchmarks. <https://pegotec.net/software-maintenance-cost-percentage-2026-industry-benchmarks/>
