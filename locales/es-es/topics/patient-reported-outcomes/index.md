# Resultados Reportados por el Paciente (PROMs, PREMs, MCID)

Los PROMs son instrumentos estandarizados mediante los que los pacientes informan de su propio estado de salud (síntomas, función, calidad de vida); los PREMs recogen la *experiencia* asistencial. La **MCID** — diferencia mínima clínicamente importante — es el menor cambio de puntuación que los pacientes perciben realmente como beneficioso: el listón que cualquier mejora reivindicada debe superar.

## Por qué importa

Los PROMs son la moneda de eficacia primaria para la salud digital: las apps rara vez mueven la mortalidad, pero pueden mover de forma creíble puntuaciones de síntomas validadas. Los instrumentos que importan son pocos y estandarizados — **PHQ-9** (depresión, 0–27; bandas de gravedad en 5/10/15/20), **GAD-7** (ansiedad, 0–21; bandas en 5/10/15), **EQ-5D** (utilidad para [QALYs](../quality-adjusted-life-year/)) — y los reguladores, los organismos de evaluación de tecnologías sanitarias (HTA) y los pagadores los aceptan precisamente porque son comparables entre productos y ensayos. La MCID es el filtro de honestidad: la MCID del PHQ-9 es ≈ 5 puntos, la del GAD-7 ≈ 4, la del índice EQ-5D suele ser ~0.03–0.08 — un cambio de 1.5 puntos en el PHQ-9 estadísticamente significativo en una muestra grande es *real pero clínicamente irrelevante*, y cualquier revisor de evidencia lo señalará.

## Las matemáticas

```
Puntuación PROM: sumas específicas del instrumento (p. ej., PHQ-9 = Σ 9 ítems × 0–3)

Estimación de la MCID:
  basada en ancla:        cambio de puntuación entre pacientes que declaran "algo mejor"
  basada en distribución: ≈ 0.5 × DE de las puntuaciones basales (heurística aproximada)

Encuadre de tasa de respuesta (para ensayos y dosieres):
  respondedor = paciente que mejora ≥ MCID (o ≥50% por convención en el PHQ-9)
  NNT = 1 / (tasa de respondedores_tratamiento − tasa de respondedores_control)
  — véase number-needed-to-treat.md
```

## Ejemplo trabajado

Una app de apoyo a la depresión, ECA frente a lista de espera, 12 semanas:

```
Cambio PHQ-9: app −6.2 puntos, control −2.1 → diferencia ajustada −4.1
Comprobación MCID: 4.1 < 5 → la diferencia media está por debajo de la MCID; se reporta
  la tasa de respondedores en su lugar:
  respondedores (caída ≥5 puntos): app 48%, control 22% → RAR 26%
  NNT = 1/0.26 ≈ 4 — cuatro usuarios tratados por respuesta clínica adicional

Puente económico: ganancia EQ-5D de los respondedores 0.06 sostenida 6 meses
  = 0.03 QALYs; por 1,000 usuarios: 260 respondedores adicionales × 0.03 = 7.8 QALYs
  ≈ 156,000–234,000 £ de valor en salud a los umbrales de NICE
```

El encuadre de respondedores/NNT sobrevive a la revisión donde la diferencia media por debajo de la MCID habría sido descartada.

## Conexión con la ingeniería de software

Los PROMs son un problema de captura de datos que el software está en una posición única para resolver: los instrumentos dentro de la app logran tasas de finalización y densidad longitudinal que el papel nunca alcanzó, convirtiendo la telemetría de producto rutinaria en evidencia de calidad HTA ([EQ-5D](../eq-5d/) son cinco pantallas). Reglas de ingeniería: usa el instrumento validado *literalmente* (reformularlo lo invalida; se aplican licencias); programa la medición según el protocolo, no según la conveniencia de engagement (medir solo a los usuarios activos es sesgo de supervivencia; véase [retención](../retention-and-churn/)); y bloquea la versión de los datos del instrumento como cualquier esquema: un cambio de redacción a mitad de estudio es corrupción de datos. Los PREMs se corresponden con instrumentos tipo CSAT/NPS, y aplica la misma lección: lo estandarizado gana a lo casero siempre que la audiencia sea un pagador.

## Errores habituales

- **Significación estadística por debajo de la MCID** presentada como beneficio clínico: la inflación más común del campo.
- **Regresión a la media**: los usuarios se inscriben en picos de síntomas; el antes/después de un solo brazo sobrestima enormemente — los comparadores no son negociables.
- **Compra de instrumentos ("instrument shopping")**: aplicar PHQ-9, GAD-7 y WHO-5, y reportar el que se movió; preregistra el primario.
- **Presión de encuesta por consentimiento digital**: empujar a los usuarios hacia respuestas favorables corrompe el instrumento (y los revisores conocen las tasas base).

## Fuentes

- MCID estimation review (EQ-5D). <https://pmc.ncbi.nlm.nih.gov/articles/PMC10526144/>
- PROMs vs PREMs primer. <https://www.forcetherapeutics.com/blog/whats-the-difference-between-pros-proms-pro-pms-and-prems>
- Kroenke K, et al. PHQ-9 validation literature. <https://pubmed.ncbi.nlm.nih.gov/11556941/>
