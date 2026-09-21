# Resultados Informados por el Paciente (PROM, PREM, DMCI)

Los PROM son instrumentos estandarizados donde los pacientes informan su propio estado de salud (síntomas, función, calidad de vida); los PREM capturan la *experiencia* de atención. La **DMCI** — diferencia mínima clínicamente importante — es el cambio de puntuación más pequeño que los pacientes realmente perciben como beneficioso: el listón que cualquier mejora reclamada debe superar.

## Por qué importa

Los PROM son la moneda de eficacia principal para la salud digital: las aplicaciones rara vez mueven la mortalidad, pero pueden mover creíblemente puntuaciones de síntomas validadas. Los instrumentos que importan son pocos y estandarizados — **PHQ-9** (depresión, 0–27; bandas de gravedad en 5/10/15/20), **GAD-7** (ansiedad, 0–21; bandas en 5/10/15), **EQ-5D** (utilidad para [AVAC](../año-de-vida-ajustado-por-calidad/)) — y los reguladores, organismos de ETS y pagadores los aceptan precisamente porque son comparables entre productos y ensayos. La DMCI es la puerta de honestidad: DMCI de PHQ-9 ≈ 5 puntos, GAD-7 ≈ 4, índice EQ-5D comúnmente ~0,03–0,08 — un cambio de PHQ-9 de 1,5 puntos estadísticamente significativo en una muestra grande es *real pero clínicamente insignificante*, y un revisor de evidencia lo dirá.

## El cálculo

```
Puntuación PROM: sumas específicas del instrumento (p. ej., PHQ-9 = Σ 9 ítems × 0–3)

Estimación de DMCI:
  basada en ancla:      cambio de puntuación entre pacientes que informan "algo mejor"
  basada en distribución: ≈ 0,5 × DE de puntuaciones base (heurística aproximada)

Encuadre de tasa de respuesta (para ensayos y dosieres):
  respondedor = paciente que mejora ≥ DMCI (o ≥50% para la convención PHQ-9)
  NNT = 1 / (tasa de respondedor_tratamiento − tasa de respondedor_control)
  — ver number-needed-to-treat.md
```

## Ejemplo resuelto

Una aplicación de apoyo a la depresión, ECA frente a lista de espera, 12 semanas:

```
Cambio PHQ-9: aplicación −6,2 puntos, control −2,1 → diferencia ajustada −4,1
Comprobación DMCI: 4,1 < 5 → diferencia media bajo DMCI; informa respondedores en su lugar:
  respondedores (caída ≥5 puntos): aplicación 48%, control 22% → RRA 26%
  NNT = 1/0,26 ≈ 4 — cuatro usuarios tratados por respuesta clínica adicional

Puente económico: la ganancia EQ-5D de los respondedores 0,06 sostenida 6 meses
  = 0,03 AVAC; por 1.000 usuarios: 260 respondedores extra × 0,03 = 7,8 AVAC
  ≈ £156.000–£234.000 de valor de salud a umbrales de NICE
```

El encuadre respondedor/NNT sobrevive a la revisión donde la diferencia media sub-DMCI habría sido descartada.

## Conexión con la ingeniería de software

Los PROM son un problema de recopilación de datos que el software está en una posición única para resolver: los instrumentos dentro de la aplicación obtienen tasas de finalización y densidad longitudinal que el papel nunca logró, convirtiendo la telemetría rutinaria del producto en evidencia de grado ETS ([EQ-5D](../eq-5d/) son cinco pantallas). Reglas de ingeniería: usa el instrumento validado *literalmente* (reformular lo invalida — se aplica licenciamiento); programa la medición por protocolo, no por conveniencia de compromiso (medir solo usuarios activos es sesgo de supervivencia — ver [retención](../retención-y-abandono/)); y bloquea la versión de los datos del instrumento como cualquier esquema — un cambio de redacción a mitad de estudio es corrupción de datos. Los PREM se mapean a instrumentos estilo CSAT/NPS, y aplica la misma lección: lo estandarizado supera a lo casero dondequiera que la audiencia sea un pagador.

## Errores comunes

- **Significancia estadística por debajo de DMCI** presentada como beneficio clínico — la inflación más común del campo.
- **Regresión a la media**: los usuarios se inscriben en picos de síntomas; el antes/después de un solo brazo sobreestima enormemente — los comparadores son innegociables.
- **Compra de instrumentos**: ejecutar PHQ-9, GAD-7 y WHO-5, luego informar el que se movió — preregistra el primario.
- **Presión de encuesta de consentimiento digital**: empujar a los usuarios hacia respuestas favorables corrompe el instrumento (y los revisores conocen las tasas base).

## Fuentes

- Revisión de estimación de DMCI (EQ-5D). <https://pmc.ncbi.nlm.nih.gov/articles/PMC10526144/>
- Introducción PROM vs PREM. <https://www.forcetherapeutics.com/blog/whats-the-difference-between-pros-proms-pro-pms-and-prems>
- Kroenke K, et al. Literatura de validación de PHQ-9. <https://pubmed.ncbi.nlm.nih.gov/11556941/>
