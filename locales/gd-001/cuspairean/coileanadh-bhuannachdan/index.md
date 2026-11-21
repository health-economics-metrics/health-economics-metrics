# Coileanadh bhuannachdan

Is e riaghladh coileanaidh bhuannachdan (BRM) an smachd air aithneachadh, suidheachadh bunait, sgrùdadh, agus *dearbhadh* gun do thàinig na buannachdan a chaidh a ghealltainn ann an cùis-ghnìomhachais gu buil às dèidh lìbhrigeadh. Ann an tasgadh poblach san RA tha e taobh a-staigh **Modail Còig Cùis** Green Book Roinn an Ionmhais; ann an leigheas, is e sgrùdadh às dèidh margaidh a cho-ogha.

## Carson a tha e cudromach

Is e geallaidhean a th’ ann an cùisean-gnìomhachais; is e sgrùdadh a th’ ann an coileanadh bhuannachdan. Lorg measaidhean air prògraman didseatach mòra an NHS a-rithist buannachdan ro-innseach nach tàinig gu buil – agus nuair nach robh buannachdan a’ leigeil a-mach airgead, cha do rinn iad dad airson bun-loidhne an urrais. Is e freagairt an Green Book: feumaidh gach cùis chosgais **còig cùisean** a thoirt seachad (ro-innleachdail, eaconamach, malairteach, ionmhasail, riaghlaidh), le coileanadh bhuannachdan air a phlanadh sa chùis riaghlaidh *mus tèid aontachadh* – sealbhadairean air an ainmeachadh, bunaitean air an glacadh, ceann-latha tomhais air an suidheachadh. Às aonais seo, bidh “shàbhail am bathar-bog 30 mionaid gach nìghinn” na uirsgeul reiceadair gu sìorraidh.

## A’ mhatamataig

```
Ìre coileanaidh = buannachdan a thàinig gu buil / buannachdan ro-innseach   (gach buannachd, gach ùine)

Meacanaigeachd a nì e àireamhachail:
  bunait air a ghlacadh ROIMH go-live (air neo tha an delta do-thomhaiste)
  gach buannachd: sealbhadair, meatrach, stòr dàta, clàr tomhais
  ro-innse air atharrachadh airson claonadh dòchais aig measadh (òrdugh Green Book)
  buannachdan seòrsaichte airgead / neo-airgead / càileachdail agus air an leantainn air leth
  (faic cash-releasing-vs-non-cash-releasing.md)
```

## Eisimpleir obrach

Gheall cùis-ghnìomhachais e-rostering, gach bliadhna: lùghdachadh caitheamh bàigh £450k (airgead), 8,000 uair manaidsear-uàird (comas), cumail ri ìre-lìonaidh nas fheàrr (càileachdail). Dà mhìos deug às dèidh go-live:

```
Buannachd           Ro-innse    Air a choileanadh    Ìre    Fianais
Caitheamh bàigh     £450,000    £287,000             64%    leabhar-cunntais an aghaidh bliadhna bunait
Uairean manaidsear  8,000       5,100                64%    sampall ùine-gluasaid
Cumail ri lìonadh   +10pp       +12pp                120%   dàta siostam rostering

Gnìomhan on ath-sgrùdadh (am prìomh phuing aig BRM):
easbhaidh bhàigh air a lorg gu dà uàrd nach deach a thoirt a-steach → thoir a-steach iad;
mearachd dòchais 30% anns a’ mhodail ro-innse air a chlàradh → air a chur an sàs san ath chùis.
```

Chan e fàilligeadh a th’ ann an coileanadh 64% – is e *eòlas* a th’ ann. Bidh cùisean gun tomhas a’ tagradh 100% gu sìorraidh.

## Ceangal ri einnseanaireachd bathar-bog

Bidh buidhnean einnseanaireachd ag aontachadh tasgaidhean àrd-ùrlair air buannachdan ro-innseach agus cha mhòr nach dèan iad sgrùdadh orra – an dearbh euslaintiche a leigheasas BRM. An port aotrom: bidh gach moladh os cionn stairsnich ag ainmeachadh sealbhadairean buannachd, meatrachan bunait, agus ceann-latha ath-sgrùdaidh T+6 mìosan; bidh ìrean coileanaidh a’ biathadh air ais gu dè cho mòr ’s a lasaicheas a’ bhuidheann ro-innse an sgioba sin (no an reiceadair). Is e seo cuideachd am freagairt do amharas mu innealan AI: tha [lorg MIT nach do sheall ~95% de phìleatan GenAI tilleadh P&L so-tomhaiste](../tilleadh-air-tasgadh-ai/) na thoradh coileanaidh bhuannachdan – bha loidhnichean buannachd so-lorgte le sealbhadair aig na pìleatan a *thill*. Is e ro-innse → tomhas → ath-chalibradh an aon lùb ri pìleatan le prìs [EVPI](../luach-ris-a-bheil-dùil-de-fhiosrachadh-foirfe/), air a ruith aig sgèile pasgain.

## Cunnartan

- **Gun bhunait ro go-live** – an dearmad marbhteach, do-leasaichte.
- **Dìth sealbhadair buannachd**: gun sealbhadair ainmichte chan eil duine a’ cruinneachadh an dàta agus can a h-uile ath-sgrùdadh “mu choinneamh air an t-slighe”.
- **Buannachdan air an dùblachadh thar phrògraman** a’ tagradh an aon chomais shaoraichte – cùm clàr bhuannachdan thar a’ phasgain.
- **Taigh-cluiche coileanaidh**: a’ tomhas na buannachdan càileachdail furasta fhad ’s a tha na loidhnichean airgid gun sgrùdadh gu sàmhach.

## Stòran

- HM Treasury, Green Book and Five Case Model guidance. <https://www.gov.uk/government/collections/the-green-book-and-accompanying-guidance-and-documents>
- Global Digital Exemplar programme evaluation (NHS digital benefits lessons). <https://pmc.ncbi.nlm.nih.gov/articles/PMC8685936/>
