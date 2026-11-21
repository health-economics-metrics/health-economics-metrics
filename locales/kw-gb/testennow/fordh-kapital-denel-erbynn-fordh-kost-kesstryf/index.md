# Fordh Kapital Denel erbynn Fordh Kost Kesstryf

An dhew ma yw an dew fordh kesstrif rag talvosya produktivita kellys — dhort klevyd, anabalder, po mernans — yn studhyansow kost-klevyd ha kost-prow. Fordh Kapital Denel (HCA) a dalvos oll an dhelivrans kellys rag hys kowl an absens orth an reyt pagyow; Fordh Kost Kesstryf (FCM) a dalvos yn unnik rag an termyn berrha may res dhe vestrow dasserghi produksyon. Dewis ynter an dew a chanj estymasyon kost anplag dre dhew-weyth po moy.

## Perag yth yw posek

Kostow anplag (produktivita) yw unn a'n linennow an moyha dadhlys yn ekonomek yeghes yn pur drefen bos an dhew fordh standard a dhisenana mar greff. HCA a drett pub dydh a absens avel dydh a dhelivrans a goll an ekonomek yn gwir, talvosys orth pagyow kowl rag hys kowl — po, rag mernans po anabalder berthek, rag an bewnans oberya a-dhelergh. FCM a argya y'n ekonomek gans diswodhyans ha slak marghas-lavur, an moyha rann a absens hir ny wra leha delivrans kenedhlek wosa may hyll mester dyski dasdhegemeres po dyllas ober yn-dresadow; yn unnik an "termyn kesstryf" — an termyn dhe dhasserghi produksyon dhe'y nivel kyns — a dhiskwedh koll gwir. FCM a dhelivr ytho estymasyonow kost anplag peub-prys le, moy konsyrvativ ages HCA, ha nyns yw an dhew fordh nodyow-isel kemysk: yns teoriow ekonomek dyffrans a'n pyth a styr "produktivita kellys". Hemma yw ynwedh perag y hwra [kas kres NICE](../gwerthjyans-teknologi-yeghes/) dyberth kostow produktivita dre dhyffolt, ow rapportya anodhans, mar a gyrdh, avel analys ansylder a berspektiv sosyal dispar yn le aga mesk y'n ICER kas-kres — gwelewgh [perspektiv analys](../perspektiv-analys/).

## An Matematik

```
Fordh Kapital Denel:
kost_HCA = pagyow_dydhyek × dydhyow_kellys

Fordh Kost Kesstryf (sempel, furv kesys-orth-termyn-kesstryf):
kost_FCM = pagyow_dydhyek × min(dydhyow_kellys, dydhyow_termyn_kesstryf)

dydhyow_termyn_kesstryf = estymasyon pow/sektor-spesifek a dermyn-dasserghi
                        produksyon (istorek ~85 dydh yn gidyans kostya Iholandek
                        iMTA; a dhiffer dre bow ha dasestymys yn termynnow)
```

An dhisenana kowl ynter an dhew fordh a vyw y'n `min()`: HCA na gess `dydhyow_kellys` bythkweth, ytho kost a gressa rag hys kowl an absens, hag FCM a gess an dydhyow kowntys orth an termyn kesstryf, kyn fo hir an absens gwir.

## Ensampel gwrys

Gwas a vyth mes a'n ober rag `dydhyow_kellys = 180` dydh, ow gwaynya `pagyow_dydhyek = £150`.

**Fordh Kapital Denel**:

```
kost_HCA = 150 × 180 = £27,000
```

**Fordh Kost Kesstryf**, gans termyn kesstryf a `dydhyow_termyn_kesstryf = 85` (skoodhyer istorek iMTA Iholandek, herwydh dasestymyans termynnek an gidyans):

```
kost_FCM = 150 × min(180, 85) = 150 × 85 = £12,750
```

£12,750 FCM yw le ages hanter £27,000 HCA rag an *keth* absens — an dewis fordh yn unnik a chanj yn materyal kas kost-klevyd, kyns tuchya kenyver tybyans aral.

## Kolm gans ynjynnyans medhelweyth

Hemma a vapya dhirek dhe fatell wra tim talvosya ynjynnyer ow tyfarth:

- **Kostya dilanans stil-HCA**: talvosya an koll avel pagyow kowl an ynjynnyer dyfarthys rag hys kowl a vo an rol gwag. Hemma yw an versyon sempel a'n moyha patromow kost-dilanans, ha re-vesur an koll rag an keth kaus may re-vesur HCA kolli produktivita — hi a dyb bos an kanasow gwag oll produktiv pub prys ha na ny dhegemeras tra aral an slak. Gwelewgh [synsyans lanwes](../synsyans-gweythlu/), usi a ystyn an chayn recrusya/dallethyans/kudhyans-gwag may fid an fordh ma.
- **Kostya dilanans stil-FCM**: talvosya an koll yn unnik rag an termyn gwir dhe daskovya-ha-dalleth kemmyska — an "termyn kesstryf" ynjynnyans. Hemma yw an niver moy defendyek rag kas besneth, kepar dell yw FCM an dewis moy konsyrvativ yn studhyans kost-klevyd.
- An dyskyplin downder yw an keth a'n [kost an dewis](../kost-an-dewis/): talvosewgh kanasow displasys dre an pyth a gollys yn gwir, na ny yw dre hys keyn multiplyys gans reyt.

## Fowtys Kemmyn

- **Kemmyska HCA ha FCM y'n keth analys, po derivas unn yn unnik heb dyllyas an dewis.** An keth data absens a yll dhri diffrans 2×+ yn kost derivys herwydh an fordh; an dewis a res bos derivys, na ny yw kudhys.
- **Devnydhya HCA rag kas perspektiv sosyal heb y verkya avel analys ansylder.** Kas kres NICE a dhiberth yn splann kostow produktivita; estymasyon HCA perspektiv sosyal a dal yn analys senario, na ny yw an ICER a-ughel.
- **Devnydhya an fordh po y'n aral dhe ober dihaspys po na-varghas (rag ensampel kuransek) heb addasya.** An dhew fordh a dyb proxy reyt-pagyow rag talvos, hag ny dreuswerth yn glan dhe ober heb pagyow marghas.

## Fontynnow

- Koopmanschap MA, Rutten FFH, van Ineveld BM, van Roijen L. "The friction cost method for measuring indirect costs of disease." Journal of Health Economics 1995;14(2):171-89.
- Drummond MF, Sculpher MJ, Claxton K, Stoddart GL, Torrance GW. "Methods for the Economic Evaluation of Health Care Programmes." 4th ed. Oxford University Press — tema kostow produktivita.
- NICE health technology evaluations manual (PMG36) — perspektiv kas-kres ha gidyans perspektiv sosyal dewisek. <https://www.nice.org.uk/process/pmg36>
