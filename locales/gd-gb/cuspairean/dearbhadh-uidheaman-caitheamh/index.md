# Dearbhadh uidheaman caitheamh

Bidh meatrachan dearbhaidh a’ tomhas cho math ’s a tha tomhasan uidheim caitheamh a’ aontachadh ri inbhe òir chlionaigeach (ECG airson ìre cridhe, polysomnography airson cadal): **MAPE**, co-cheangal co-chòrdachd, aonta Bland–Altman – a bharrachd air na meatrachan obrachaidh a tha a’ cumail geata air càileachd dàta fìor-shaoghail: **gèilleadh ùine-caitheamh** agus **coileanadh dàta**.

## Carson a tha e cudromach

Tha dearbhadh na ro-chùmhnant airson a h-uile càil sìos-an-t-srutha: chan urrainn do dh’uidheam nach urrainn aonta ri tomhas iomraidh a dhearbhadh [puingean-deiridh didseatach](../puingean-deiridh-didseatach-agus-bith-chomharran/) a thagradh, [cunntas RPM](../eaconamas-sgrùdadh-euslainteach-cian/) a thaiceadh, no tagraidhean clionaigeach a ghiùlan. Stairsnich ghabhaltach an raoin airson ìre cridhe: **MAPE ≤5%** (teann) no **≤10%** (maol) an aghaidh ECG. Puingean-iomraidh bhon litreachas: MAPE HR fois Oura Gen 3 1.67% (CCC 0.97); Fitbit Charge 6 MAPE ~5.5% – tha uidheaman luchd-cleachdaidh a-nis a’ sìneadh thairis crìoch ìre chlionaigeach, agus is e sin dìreach carson a tha an tomhas a’ cunntadh gach uidheam is gach staid.

## A’ mhatamataig

```
MAPE = (1/n) Σ |tomhaiste_i − iomradh_i| / iomradh_i × 100

CCC (co-cheangal co-chòrdachd) = aonta a’ gabhail a-steach an dà chuid co-cheangal
      agus claonadh sistemach (Pearson r air a pheanasachadh le gluasad ionaid/sgèile)

Bland–Altman: claonadh cuibheasach ± crìochan aonta 1.96 SD – a’ sealltainn a bheil
      a’ mhearachd an eisimeil meud na luach

Geataichean obrachaidh:
Gèilleadh ùine-caitheamh = ùine air a caitheamh / ùine pròtacal × 100
Coileanadh dàta          = puingean dàta air am faicinn / ris an robh dùil × 100
```

Feumar dearbhadh a thoirt an cèill **a rèir staid gnìomhachd** (fois, gluasad, cadal) agus a rèir sluaigh – bidh mothachadh optigeach PPG a’ dol sìos le artifact gluasaid, droch cheangal, agus tònaichean craiceann nas dorcha, dòigh fàilligidh a chaidh a chlàradh a tha buntainneach do cho-ionannachd.

## Eisimpleir obrach

Bidh prògram uàird bhrìgheil a’ taghadh uidheam caitheamh sgrùdaidh. Tagraiche A: MAPE fois 2.1%, MAPE eacarsaich 11.4%. Tagraiche B: fois 3.8%, eacarsaich 6.9%.

```
Cùis-chleachdaidh: lorg euslainteach a tha a’ dol sìos aig an taigh – bidh rabhaidhean
a’ brosnachadh air ìre cridhe àrd leantainneach, gu tric rè gnìomhachd.
Bidh ceann-naidheachd tagraiche A (2.1%) a’ buannachadh a’ bhrochure; bidh tagraiche B
a’ buannachadh na cùise-cleachdaidh: aig an staid a tha buntainneach don rabhadh (gluasad),
tha mearachd 11.4% aig A aig HR 100 = ±11 bpm – a’ sìneadh thairis an còmhlan stairsnich
rabhaidh gu lèir, a’ cruthachadh àrdachaidhean meallta (gach fear na ghairm banaltraim, ~£40) no call.

Eaconamas rabhaidhean meallta: 500 euslainteach × 2 rabhadh meallta a bharrachd/seachdain × £40
= £2.08M/bliadhna de chosgais mhearachd bho bhith a’ taghadh an àireamh dearbhaidh cheàrr.
```

## Ceangal ri einnseanaireachd bathar-bog

Bidh einnseanairean a’ cleachdadh dàta dearbhaidh nuair a thaghas iad mothachairean agus *a’ toirt a-mach* e nuair a thogas iad feartan tomhais – feumaidh an dà dhreuchd an aon smachd: deuchainn aig an staid cleachdaidh, chan e an staid taisbeanaidh (co-ionann bathar-bog: tomhas-coimeas air do eallach obrach riochdachaidh, chan e fear an reiceadair). Tha ùine-caitheamh is coileanadh nan toraidhean einnseanaireachd toraidh – bidh comhfhurtachd, beatha bataraidh, dealbhadh deas-ghnàth cathaidh, agus earbsachd sioncronachaidh a’ co-dhùnadh a bheil geata cunntais RPM 16-latha-ann-an-30 air a choinneachadh ([eaconamas sgrùdadh euslaintich o chian](../eaconamas-sgrùdadh-euslainteach-cian/)) agus a bheil seataichean dàta deuchainn rim mion-sgrùdadh. Làimhsich dàta a tha a dhìth mar chomharra dealbhaichte: eadar-dhealaich “gun a bhith air a chaitheamh,” “air a chaitheamh ach gun chomharra,” agus “sioncronachadh air fàiligeadh” anns an sgeama bhon chiad latha – nuair a thèid an cur còmhla gu null, bidh iad a’ puinnseanachadh a h-uile mion-sgrùdadh sìos-an-t-srutha.

## Cunnartan

- **MAPE iomlan a’ falach fàilligeadh sònraichte do staid** – cuilbheart na h-eisimpleir obrach.
- **Sluagh dearbhaidh ≠ sluagh cleachdaidh**: bidh aois, tòn craiceann, crith, reamhrachd uile ag atharrachadh mearachd mhothachairean optigeach; thoir sùil air deamografaigs an sgrùdaidh.
- **Co-cheangal air aithris far a bheil feum air aonta**: bidh Pearson r àrd le claonadh sistemach fhathast a’ mì-sheòrsachadh an aghaidh stairsnich iomlan – cuir cuideam air CCC/Bland–Altman.
- **Coileanadh air a thoirt àrd le ìmpidh**: bàird air an lìonadh air an aithris mar dhàta air fhaicinn.

## Stòran

- Consumer wearable HR validation (Oura Gen 3/4). <https://pmc.ncbi.nlm.nih.gov/articles/PMC12367097/>
- Wearable validity thresholds (MAPE standards). <https://formative.jmir.org/2025/1/e70835>
- Multi-device validation studies. <https://pmc.ncbi.nlm.nih.gov/articles/PMC6431828/>
