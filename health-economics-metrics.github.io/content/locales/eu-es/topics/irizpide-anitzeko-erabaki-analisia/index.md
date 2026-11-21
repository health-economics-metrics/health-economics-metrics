# Irizpide anitzeko erabaki-analisia (Multi-Criteria Decision Analysis, MCDA)

Irizpide anitzeko erabaki-analisia (MCDA) osasun-teknologien ebaluazioan erabiltzen den batura haztatuko puntuazio-eredu bat da, ICER/ordaintzeko borondatearen atalase bakar batek erabaki-hartzaile batek axola dion guztia jasotzen ez duenean: ekitatea, asebete gabeko beharra, berrikuntza, aurrekontu-inpaktua, gaixotasunaren larritasuna. Irizpide bakoitzak bere garrantzia islatzen duen pisu bat jasotzen du (interesdunengandik lortua, pisuak 1era batuz), aukera bakoitzak irizpide bakoitzeko puntuazio normalizatu bat (normalean 0–1), eta puntuazio orokorra batura haztatua da — software-saltzaileen hautaketako scorecard baten forma matematiko bera.

## Zergatik axola duen

MCDA EVIDEM bezalako esparruetan erabiltzen da, eta HTA erakunde batzuek gaixotasun umezurtz/arraroen ebaluazioetarako, QALY bakoitzeko kostuaren atalase zorrotzaren ikuspegia erabaki bati buruz axola duen guztia jasotzeko estuegia dela uste denean. ISPORen MCDA Emerging Good Practices Task Force-k pisuak eta puntuazioak defendagarriki lortzeko jardunbide onen gida formalizatu zuen hain zuzen eta informalki haztatutako erabaki bat eraikitzeko erraza eta manipulatzeko erraza delako. Osasun-teknologia batek benetan [ordaintzeko borondatearen atalase](../ordaintzeko-borondatearen-atalaseak/) bakar batek errepresentatu ezin dituen balio-dimentsioak dituenean — larritasuna, berrikuntza, ekitatea —, MCDAk erabaki-hartzaileei horiek konbinatzeko egitura esplizitu eta auditagarri bat ematen die, epai-deia isil baten ordez.

## Matematika

```
MCDA puntuazioa = Σ_i (pisua_i × puntuazioa_i)

pisuek 1era batu behar dute (interesdunen metodoen bidez lortuak, adib. swing
weighting edo Analytic Hierarchy Process)
```

## Adibide landua

HTA batzorde batek terapia digital bat lau irizpidetan puntuatzen du:

```
Irizpidea                          Pisua    Puntuazioa   Pisua × Puntuazioa
Onura klinikoa                     0.4      0.8          0.32
Kostu-inpaktua                     0.3      0.5          0.15
Gaixotasunaren larritasuna / beharra 0.2    0.9          0.18
Berrikuntza                        0.1      0.6          0.06
                                    ─────                ─────
                                    1.0                  0.71
```

Pisuek 1.0ra batzen dute (0.4 + 0.3 + 0.2 + 0.1), eta MCDA puntuazioa 0.71 da (0.32 + 0.15 + 0.18 + 0.06). Batzordeak 0.71 aurrez adostutako atalase batekin alderatzen du, edo modu berean puntuatutako lehiakide-teknologiekin sailkatzen du.

## Software ingeniaritzarekin lotura

Hau saltzaile-hautaketako scorecard haztatu, RFP ebaluazio-matrize edo funtzionalitate-lehenespeneko puntuazio-eredu baten matematika bera da — ikus [eraiki vs erosi](../eraiki-vs-erosi/), software-erosketetan scorecard haztatuaren erabilera klasikoa. [WSJF eta CD3](../wsjf-eta-cd3/)rekin kontrastatzea ere merezi du: WSJF/CD3 *ratio* oinarritutako lehenespen-metodoa da (atzerapenaren kostua lan-tamainaz edo iraupenaz zatituta), MCDA berriz batura *haztatua*. MCDA eta WSJF/CD3 "nola sailkatzen ditugu aukera lehiakideak" galderaren bi erantzun egituraz desberdinak dira, eta erabaki jakin batek benetan zein eskatzen duen jakitea — balio gehigarria irizpide independenteetan, edo balio-dentsitatea ahalmen urriaren unitate bakoitzeko — formula zorrotzagoa zein dirudien baino gehiago axola du.

## Tranpak

- **Pisuen lorpen-alborapena**: pisuak ezartzen dituenak sailkapena aurrez zehazten du, beraz "formula" batek erabaki politiko edo komertzial bat kalkulu objektibo gisa zuritu dezake. Dokumentatu nork ezarri zituen pisuak eta nola.
- **Beste nonbait jasotako irizpide bat bi aldiz zenbatzea**: "kostu-eraginkortasuna" irizpide gisa puntuatzea eta *gainera* "kostu-inpaktua" bereizita puntuatzea dirua gainontzeko irizpideekiko gehiegi haztatzen du inork nahi gabe.
- **Zehaztasun faltsua**: bi hamartarreko puntuazio haztatu batek (0.71) azpiko 0–10eko interesdunen balorazioek benetan onartzen dutena baino zorroztasun gehiago iradokitzen du, eta balorazio horien ebaluatzaile arteko aldakortasuna maiz batere jakinarazten ez da.

## Iturriak

- Thokala P, Devlin N, Marsh K, et al. "Multiple Criteria Decision Analysis for Health Care Decision Making — An Introduction: Report 1 of the ISPOR MCDA Emerging Good Practices Task Force." Value Health. 2016;19(1):1-13.
- Goetghebeur MM, Wagner M, Khoury H, et al. "Evidence and Value: Impact on DEcisionMaking — the EVIDEM framework and potential applications." BMC Health Serv Res. 2008;8:270.
