# Inimkapitali lähenemine versus hõõrdekulu meetod

Need on kaks konkureerivat meetodit kaotatud tootlikkuse hindamiseks — haiguse, puude või surma tõttu — haigusekulu- ja kulu-tulu uuringutes. Inimkapitali lähenemine (HCA) hindab kogu kaotatud toodangu kogu äraoleku kestuse eest palgamääraga; hõõrdekulu meetod (FCM) hindab seda ainult lühema perioodi eest, mida tööandja tootmise taastamiseks tegelikult vajab. Valik nende vahel muudab kaudsete kulude hinnangut kaks korda või rohkem.

## Miks see on oluline

Kaudsed (tootlikkuse) kulud on tervishoiumajanduses üks vaieldavamaid kirjeid just seetõttu, et kaks standardmeetodit lähevad nii järsult lahku. HCA käsitab iga äraoleku päeva päevana toodangut, mille majandus tegelikult kaotab, hinnatuna täispalga järgi kogu kestuse eest — või surma või püsiva puude korral ülejäänud tööelu eest. FCM väidab, et töötuse ja tööjõuturu vaba ruumiga majanduses ei vähenda suurem osa pikast äraolekust tegelikult riiklikku toodangut, kui tööandja on asendaja välja õpetanud või töö ümber jaotanud; ainult „hõõrdeperiood“ — aeg tootmise taastamiseks varasemale tasemele — kujutab endast tegelikku kadu. FCM annab seega süstemaatiliselt madalamaid, konservatiivsemaid kaudsete kulude hinnanguid kui HCA ja need kaks meetodit pole vahetatavad joonealused märkused: need on erinevad majandusteooriad selle kohta, mida „kaotatud tootlikkus“ tähendab. See on ka põhjus, miks [NICE referentsjuhtum](../tervisetehnoloogia-hindamine/) jätab tootlikkuse kulud vaikimisi välja ja raporteerib neid, kui üldse, eraldi ühiskondliku perspektiivi tundlikkusanalüüsina, mitte ei sega neid referentsjuhtumi ICER-i — vaata [analüüsi perspektiivi](../analüüsi-perspektiiv/).

## Matemaatika

```
Inimkapitali lähenemine:
HCA_kulu = päevapalk × kaotatud_päevad

Hõõrdekulu meetod (lihtsustatud, hõõrdeperioodiga piiratud vorm):
FCM_kulu = päevapalk × min(kaotatud_päevad, hõõrdeperiood_päevi)

hõõrdeperiood_päevi = riigi/sektori-spetsiifiline hinnang tootmise
                      taastamise ajale (ajalooliselt ~85 päeva Hollandi
                      iMTA kuluarvestuse juhendis; erineb riigiti ja
                      hinnatakse perioodiliselt uuesti)
```

Kogu lahkarvamus kahe meetodi vahel peitub `min()`-is: HCA ei piira kunagi `kaotatud_päevad`, nii et kulu kasvab kogu äraoleku vältel, FCM piirab loetud päevad hõõrdeperioodiga, hoolimata sellest, kui kaua tegelik äraolek kestab.

## Lahendatud näide

Töötaja on töölt eemal `kaotatud_päevad = 180` päeva, teenides `päevapalk = £150`.

**Inimkapitali lähenemine**:

```
HCA_kulu = 150 × 180 = £27 000
```

**Hõõrdekulu meetod**, hõõrdeperioodiga `hõõrdeperiood_päevi = 85` (ajalooline Hollandi iMTA võrdlusalus, juhendi perioodilise ümberhindamise järgi):

```
FCM_kulu = 150 × min(180, 85) = 150 × 85 = £12 750
```

FCM-i £12 750 on alla poole HCA £27 000-st *sama* äraoleku kohta — meetodi valik üksi muudab haigusekulu juhtumit oluliselt, enne kui mõnda muud eeldust on puudutatud.

## Seos tarkvaraarendusega

See kaardistub otse sellele, kuidas meeskond hindab inseneri lahkumist:

- **HCA-stiilis voolavuse kuluarvestus**: kaotuse hindamine lahkunud inseneri täispalgana kogu selle aja eest, mil ametikoht jääb vabaks. See on enamiku voolavuskulu mudelite naiivne versioon ja see ülehindab kaotust samal põhjusel, miks HCA ülehindab tootlikkuse kadu — see eeldab, et vaba võimsus oli kogu aeg täielikult tootlik ja miski muu ei neelanud vabadust. Vaata [tööjõu hoidmist](../tööjõu-hoidmine/), mis kvantifitseerib värbamise/sisseelamise/vaba ametikoha katmise ahela, millesse see meetod toidab.
- **FCM-stiilis voolavuse kuluarvestus**: kaotuse hindamine ainult tegeliku aja eest, mis kulub asendaja leidmiseks ja sisseelamiseks — inseneeria „hõõrdeperiood“. See on ärijuhtumi jaoks kaitstavam arv, täpselt nagu FCM on haigusekulu uuringus konservatiivsem valik.
- Aluseks olev distsipliin on sama mis [alternatiivkulus](../alternatiivkulu/): hinda tõrjutud ressurssi selle järgi, mis tegelikult kaotsi läheb, mitte pealkirjakestuse ja määra korrutise järgi.

## Lõksud

- **HCA ja FCM segamine ühes analüüsis või ainult ühe raporteerimine valikut avaldamata.** Samad äraoleku andmed võivad anda meetodist sõltuvalt 2x või suurema erinevuse raporteeritud kulus; valik tuleb nimetada, mitte peita.
- **HCA kasutamine ühiskondliku perspektiivi juhtumis ilma seda tundlikkusanalüüsina märkimata.** NICE referentsjuhtum jätab tootlikkuse kulud selgelt välja; ühiskondliku perspektiivi HCA hinnang kuulub stsenaariumianalüüsi, mitte pealkirja-ICER-i.
- **Kummagi meetodi rakendamine tasustamata või mitteturutöö (nt hoolduse) puhul ilma kohandamiseta.** Mõlemad meetodid eeldavad väärtuse asendajana palgamäära, mis ei kandu puhtalt üle tööle ilma turupalgata.

## Allikad

- Koopmanschap MA, Rutten FFH, van Ineveld BM, van Roijen L. „The friction cost method for measuring indirect costs of disease.“ Journal of Health Economics 1995;14(2):171-89.
- Drummond MF, Sculpher MJ, Claxton K, Stoddart GL, Torrance GW. „Methods for the Economic Evaluation of Health Care Programmes.“ 4th ed. Oxford University Press — tootlikkuse kulusid käsitlev teema.
- NICE health technology evaluations manual (PMG36) — referentsjuhtumi perspektiiv ja valikuline ühiskondliku perspektiivi juhend. <https://www.nice.org.uk/process/pmg36>
