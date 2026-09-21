# Tasa de Reingreso

La tasa de reingreso a 30 días es el porcentaje de pacientes dados de alta que regresan como emergencia dentro de 30 días. Es la métrica canónica de *calidad de alta* del sistema de salud — y conlleva penalizaciones financieras directas.

## Por qué importa

Un reingreso significa que la primera alta no funcionó: alta prematura, transferencia de medicación fallida, sin seguimiento, o apoyo social faltante. Los pagadores lo penalizan explícitamente — el **Hospital Readmissions Reduction Program** de EE. UU. recorta hasta el 3% de los pagos de Medicare de un hospital; el NHS históricamente no paga por reingresos de emergencia evitables a 30 días. Así que la evitación de reingresos es una de las pocas categorías de beneficio que es *directamente* relevante en efectivo para un proveedor, no solo capacidad.

## El cálculo

```
Tasa de reingreso = reingresos de emergencia dentro de 30 días / altas índice × 100

Las comparaciones estandarizadas por riesgo se ajustan por mezcla de casos; los
programas de penalización comparan lo observado frente a lo esperado para hospitales similares.

Valor de la evitación = reingresos evitados × (coste por episodio de reingreso
                     + exposición a penalización por reingreso)
```

## Ejemplo resuelto

Una aplicación de apoyo al alta para insuficiencia cardíaca (seguimiento de síntomas, alertas de peso, recordatorios de medicación, escalada de enfermería): 2.000 altas/año, tasa de reingreso base 18%, el ensayo muestra 14% con la aplicación.

```
Reingresos evitados = 2.000 × (0,18 − 0,14) = 80/año
Coste por episodio de reingreso ≈ £3.200 → £280.000/año de coste de tratamiento evitado
Más la exposición a penalización/no pago en esos episodios.
Coste de la aplicación: 2.000 × £60 = £120.000/año

Neto ≈ +£160.000/año, antes de cualquier reclamación de AVAC por deterioro evitado.
```

La cifra a defender es el efecto de 4 puntos porcentuales: debe provenir de una comparación controlada, porque las tasas de reingreso oscilan con la mezcla de casos y la estación.

## Conexión con la ingeniería de software

El reingreso es la **tasa de fallo de cambios** del sistema de salud (ver [métricas DORA](../métricas-dora/)): trabajo que "se envió" y rebotó dentro de 30 días. Las analogías son profundas: los tickets reabiertos y los incidentes de regresión indican una "calidad de alta" pobre (verificación débil, cierre prematuro, documentación de transferencia faltante); la contabilidad estilo penalización (paga el equipo que arregla, no el que recibe) cambia el comportamiento; y ambos campos aprendieron la misma lección, que empujar el rendimiento bruto (alta más rápida, envío más rápido) sin invertir en la transferencia simplemente convierte colas visibles en retrabajo invisible. Una "tasa de reapertura a 30 días" pertenece a cualquier panel de equipo que celebre el tiempo de ciclo.

## Errores comunes

- **Manipulación por reetiquetado**: reingresos codificados como estancias de observación o condiciones nuevas; audita la definición.
- **Toda causa frente a causa relacionada**: el toda-causa a 30 días incluye eventos genuinamente no relacionados; las penalizaciones usualmente usan toda-causa precisamente porque "relacionado" es manipulable.
- **Ceguera de mezcla de casos**: un hospital que sirve poblaciones más enfermas y pobres reingresa más por razones que ninguna aplicación arregla — ajusta por riesgo antes de comparar.

## Fuentes

- CMS, Hospital Readmissions Reduction Program. <https://www.cms.gov/medicare/payment/prospective-payment-systems/acute-inpatient-pps/hospital-readmissions-reduction-program-hrrp>
- NHS Digital, estadísticas de reingresos de emergencia. <https://digital.nhs.uk/data-and-information/publications/statistical/compendium-emergency-readmissions>
