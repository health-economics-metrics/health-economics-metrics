# Binciken Rage Kuɗi (CMA)

CMA tana kwatanta kuɗi kawai, kuma tana zaɓar mafi arha — halal *ne kawai* idan an nuna cewa sakamakon madadin daidai yake.

## Dalilin muhimmancinsa

CMA ita ce mafi sauƙin bincike kuma wadda aka fi cin zarafi. Da'awar daidaito ita ce ke yin dukan aikin: idan sakamako ba su bambanta da gaske ba (biosimilar da asalinsa; masu samar da hidima iri ɗaya biyu masu cika ƙayyadewa ɗaya), to kuɗi ne kaɗai tambaya kuma CMA daidai ce. Tsanani yana cikin *tabbatar* da daidaito tukuna — yawanci ta binciken rashin ƙasa tare da iyaka da aka tsara tukuna — wanda daidai matakin da masu saye ke tsallakewa yawanci.

## Lissafin

```
Given evidence that Effect_A ≈ Effect_B (within a pre-specified margin δ):
Choose min(Cost_A, Cost_B)

Costs measured from the same perspective, over the same horizon,
including switching/transition costs.
```

Idan ba za a iya tabbatar da daidaito da shaida ba, CMA ba ta inganta ba — a yi amfani da [CEA](../binciken-tasirin-kuɗi/)/[CUA](../binciken-amfanin-kuɗi/) maimakon haka.

## Misali da aka lissafa

Asusun asibiti yana zaɓa tsakanin dandamalin shawarwarin bidiyo biyu. Gwajin layi ɗaya na watanni 3 ya nuna adadin kammalawa 94.1% da 93.8%, gamsuwar majiyyaci 4.4 da 4.4 — bambance-bambance cikin δ da aka amince da shi tukuna na maki 2 na kashi. Sakamako: daidai. Kuɗi a shekaru 3:

```
                     Platform A     Platform B
Licences             £360,000       £210,000
Integration          £80,000        £150,000
Training/support     £60,000        £90,000
Total                £500,000       £450,000
```

Dandamali B yana nasara da £50,000 — *har da* ƙarin kuɗin haɗawarsa. Ba tare da gwajin ba, da'awar daidaito za ta kasance a kan ƙasidar mai sayarwa, kuma bambancin kammalawa na maki 1 (≈ dubban shawarwari da suka gaza/shekara) zai fi £50,000 yawa.

## Alaƙa da injiniyancin manhaja

CMA ita ce siffar hukuma ta sayen kayayyakin yau da kullum: masu samar da CI biyu masu cika SLO iri ɗaya, wuraren ajiyar abubuwa biyu masu ƙayyadewar dorewa iri ɗaya. Darasin tattalin arzikin lafiya shi ne *tsarin aiki*: da farko a tabbatar da daidaito da shaida (a gwada da nauyin aikinka, a gwada da SLO ɗinka, tare da iyakar da aka amince da ita tukuna), sannan a kwatanta jimillar kuɗi har da ƙaura. "Su ɗaya ne, B ya fi arha" ba tare da matakin farko ba shi ne yadda ƙungiyoyi ke sayen kayan da ya fi arha da 10% kuma ya fi muni da 40%. Sakamako: idan mai sayarwa yana muhawara a kan farashi, a sa shi ya yarda da daidaito — yana ɗaure ta wata hanya ma.

## Tarkuna

- **Daidaito da aka ɗauka** — babban zunubi; rashin shaidar bambanci ba shaidar daidaito ba ce (gwaje-gwajen da ba su da isasshen ƙarfi "suna nuna" daidaito kyauta).
- **Barin kuɗin sauyawa** — ƙaura, sake horarwa, da gudanar da layi ɗaya na cikin ɓangaren kuɗi.
- **Daidaito a kan sakamako mara kyau**: daidai a ma'aunin da aka auna, daban a wani da ke da muhimmanci (samun dama, latency na wutsiya, fitar bayanai).

## Tushe

- York Health Economics Consortium glossary: cost-minimization analysis. <https://yhec.co.uk/glossary/cost-minimisation-analysis/>
- Briggs AH, O'Brien BJ. "The death of cost-minimization analysis?" Health Economics 2001. <https://pubmed.ncbi.nlm.nih.gov/11288052/>
