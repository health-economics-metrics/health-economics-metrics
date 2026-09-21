# Año de Vida Ajustado por Discapacidad (DALY)

Un DALY es un año de vida sana perdido — el espejo, del lado de la carga de enfermedad, del [QALY](../quality-adjusted-life-year/). Donde los QALY cuentan la salud *ganada*, los DALY cuentan la salud *perdida* por la enfermedad; las intervenciones se valoran por los DALY **evitados**.

## Por qué importa

El DALY es el estándar de salud global: la WHO (OMS), el estudio Global Burden of Disease y la mayoría de los ministerios de salud de países de renta baja y media planifican en DALY. Si tu software está dirigido a sistemas de salud internacionales, donantes o programas alineados con la OMS, el lenguaje de valor son los DALY evitados, no los QALY ganados. El referente histórico de la WHO-CHOICE (OMS-CHOICE): una intervención que evita un DALY por menos de 1× el PIB per cápita es "altamente coste-efectiva", de 1 a 3× el PIB per cápita "coste-efectiva" (la OMS ahora desaconseja el uso rígido de estas bandas, pero siguen siendo omnipresentes en la práctica).

## Las matemáticas

```
DALY = YLL + YLD

YLL (años de vida perdidos)            = muertes × esperanza de vida estándar a la edad de la muerte
YLD (años vividos con discapacidad)    = prevalencia × peso de discapacidad

peso de discapacidad ∈ [0, 1], 0 = salud plena, 1 = equivalente a la muerte
(pesos publicados por el estudio Global Burden of Disease)
```

## Ejemplo resuelto

Una plataforma de recordatorios de cribado en una región aumenta la detección precoz de una enfermedad. Anualmente evita 10 muertes prematuras (cada una con una pérdida de 20 años frente a la esperanza de vida estándar) y evita que 200 personas vivan un año con una afección cuyo peso de discapacidad es 0.2.

```
YLL evitados = 10 × 20        = 200
YLD evitados = 200 × 0.2      = 40
DALY evitados                = 240 al año
```

Si la plataforma cuesta 600,000 $/año de funcionamiento, el coste por DALY evitado es 600,000 / 240 = **2,500 $**. En un país con un PIB per cápita de 8,000 $, eso está muy por debajo del referente de 1× el PIB — "altamente coste-efectivo" en términos de la OMS-CHOICE.

## Conexión con la ingeniería de software

- La salud digital dirigida a financiadores de salud global (Gavi, el Fondo Mundial, programas nacionales) debería expresar el impacto como **coste por DALY evitado** — es la métrica en la que ya piensan los evaluadores de subvenciones.
- El DALY es también una plantilla útil de *contabilidad de carga* para la ingeniería: las incidencias, las compilaciones inestables y la fricción del legado son "años vividos con discapacidad" para una base de código — un inventario de carga ponderado por esfuerzo indica dónde la remediación compra más "años de ingeniería sana", igual que las tablas de carga del GBD orientan el gasto sanitario.

## Errores habituales

- **Los QALY ganados no equivalen numéricamente a los DALY evitados** — pesos distintos, tablas de vida distintas, convenciones distintas (los DALY históricamente incorporaban ponderación por edad y descuento dentro de la propia medida). No conviertas sin más.
- **Usar umbrales de múltiplos del PIB como sello de aprobación automático** — la propia OMS advierte de que ignoran presupuestos y coste de oportunidad; véase [umbrales de disposición a pagar](../willingness-to-pay-thresholds/).
- **Reclamar DALY a escala poblacional a partir de la eficacia por usuario** sin multiplicar por la adopción y la adherencia — véase [alcance y equidad](../reach-and-equity/).

## Fuentes

- WHO indicator registry: DALYs. <https://www.who.int/data/gho/indicator-metadata-registry/imr-details/158>
- Bertram MY, et al. "Cost-effectiveness thresholds: pros and cons." (WHO) <https://pmc.ncbi.nlm.nih.gov/articles/PMC4339959/>
- Marseille E, et al. on GDP-based thresholds, Health Policy and Planning. <https://academic.oup.com/heapol/article/32/1/141/2555408>
