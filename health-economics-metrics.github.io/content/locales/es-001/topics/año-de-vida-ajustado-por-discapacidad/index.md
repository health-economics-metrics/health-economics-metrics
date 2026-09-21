# Año de Vida Ajustado por Discapacidad (AVAD)

Un AVAD es un año perdido de vida sana — el espejo del lado de la carga del [AVAC](../año-de-vida-ajustado-por-calidad/). Donde los AVAC cuentan la salud *ganada*, los AVAD cuentan la salud *perdida* por enfermedad; las intervenciones se valoran por AVAD **evitados**.

## Por qué importa

El AVAD es el estándar de salud global (OMS, el estudio de Carga Global de Enfermedad, y la mayoría de los ministerios de salud de países de ingresos bajos y medios planifican en AVAD). Si tu software se dirige a sistemas de salud internacionales, donantes o programas alineados con la OMS, el lenguaje de valor son los AVAD evitados, no los AVAC ganados. El punto de referencia histórico de la OMS-CHOICE: una intervención que evita un AVAD por menos de 1× el PIB per cápita es "altamente coste-efectiva", 1-3× el PIB per cápita "coste-efectiva" (la OMS ahora desaconseja el uso rígido de estas bandas, pero siguen siendo omnipresentes en la práctica).

## El cálculo

```
AVAD = AVP + AVD

AVP (años de vida perdidos)         = muertes × esperanza de vida estándar a la edad de muerte
AVD (años vividos con discapacidad) = prevalencia × peso de discapacidad

peso de discapacidad ∈ [0, 1], 0 = salud completa, 1 = equivalente a la muerte
(pesos publicados por el estudio de Carga Global de Enfermedad)
```

## Ejemplo resuelto

Una plataforma de recordatorio de cribado en una región aumenta la detección temprana de una enfermedad. Anualmente previene 10 muertes prematuras (cada una perdiendo 20 años frente a la esperanza de vida estándar) y previene que 200 personas vivan un año con una condición cuyo peso de discapacidad es 0,2.

```
AVP evitados = 10 × 20        = 200
AVD evitados = 200 × 0,2      = 40
AVAD evitados               = 240 por año
```

Si la plataforma cuesta $600.000/año para funcionar, el coste por AVAD evitado es 600.000 / 240 = **$2.500**. En un país con PIB per cápita de $8.000, eso está muy por debajo del punto de referencia de 1× PIB — "altamente coste-efectivo" en términos de la OMS-CHOICE.

## Conexión con la ingeniería de software

- La salud digital dirigida a financiadores de salud global (Gavi, Fondo Mundial, programas nacionales) debería expresar el impacto como **coste por AVAD evitado** — es la métrica en la que ya piensan los revisores de subvenciones.
- El AVAD también es una plantilla útil de *contabilidad de carga* para la ingeniería: los incidentes, las compilaciones inestables y la fricción heredada son "años vividos con discapacidad" para una base de código — un inventario de carga ponderado por esfuerzo tedioso te dice dónde la remediación compra más "años de ingeniería sana", de la misma manera que las tablas de carga de la CGE dirigen el gasto en salud.

## Errores comunes

- **AVAC ganados ≠ AVAD evitados numéricamente** — pesos diferentes, tablas de vida diferentes, convenciones diferentes (los AVAD históricamente usaban ponderación por edad y descuento dentro de la medida). No conviertas casualmente.
- **Usar umbrales de múltiplo del PIB como sello de goma** — la propia OMS advierte que ignoran los presupuestos y el coste de oportunidad; ver [umbrales de disposición a pagar](../umbrales-de-disposición-a-pagar/).
- **Reclamar AVAD a escala poblacional a partir de la eficacia por usuario** sin multiplicar por la adopción y la adherencia — ver [alcance y equidad](../alcance-y-equidad/).

## Fuentes

- Registro de indicadores de la OMS: AVAD. <https://www.who.int/data/gho/indicator-metadata-registry/imr-details/158>
- Bertram MY, et al. "Cost-effectiveness thresholds: pros and cons." (OMS) <https://pmc.ncbi.nlm.nih.gov/articles/PMC4339959/>
- Marseille E, et al. sobre umbrales basados en el PIB, Health Policy and Planning. <https://academic.oup.com/heapol/article/32/1/141/2555408>
