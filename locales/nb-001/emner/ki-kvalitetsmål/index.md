# KI-kvalitetsmål

KI-kvalitetsmål måler nøyaktigheten, påliteligheten og sikkerheten til modellens output: presisjon, gjenkalling, hallusinasjonsrate.

## Hvorfor det er viktig

Selv KI-systemer med høy gjennomstrømning kan ha nedstrøms korrigeringskostnader som overstiger besparelsene hvis kvaliteten er lav.

## Matematikken

```
F1-score = 2 × (presisjon × gjenkalling) / (presisjon + gjenkalling)
```

## Gjennomarbeidet eksempel

Et KI-verktøy for klinisk koding: presisjon 0,85, gjenkalling 0,78 = F1 0,81.

## Kobling til programvareutvikling

Generelle programvarekvalitetsmål som er grunnlaget for [klinisk KI-evaluering](../klinisk-ki-evaluering/).

## Fallgruver

- **Å bare se på nøyaktighet, ignorere klasseubalanse.**

## Kilder

- Google, ML evaluation best practices.
- Ji Z, et al., Survey of Hallucination in Natural Language Generation.
