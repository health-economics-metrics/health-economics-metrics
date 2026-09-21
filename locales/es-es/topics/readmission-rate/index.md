# Tasa de Reingreso

La tasa de reingreso a 30 días es el porcentaje de pacientes dados de alta que vuelven como urgencia dentro de los 30 días siguientes. Es la métrica canónica de *calidad del alta* del sistema de salud, y conlleva penalizaciones financieras directas.

## Por qué importa

Un reingreso significa que la primera alta no funcionó: alta prematura, transferencia de medicación fallida, falta de seguimiento o apoyo social ausente. Los pagadores lo penalizan explícitamente: el Hospital Readmissions Reduction Program de EE. UU. descuenta hasta un 3% de los pagos de Medicare a un hospital; el NHS históricamente no ha pagado los reingresos urgentes evitables dentro de los 30 días. Así que evitar reingresos es una de las pocas categorías de beneficio que es *directamente* relevante en términos de caja para un proveedor, no solo de capacidad.

## Las matemáticas

```
Tasa de reingreso = reingresos urgentes en 30 días / altas índice × 100

Las comparaciones ajustadas por riesgo ajustan por la mezcla de casos;
los programas de penalización comparan lo observado frente a lo esperado
para hospitales similares.

Valor de evitarlos = reingresos evitados × (coste por episodio de reingreso
                     + exposición a penalización por reingreso)
```

## Ejemplo trabajado

Una app de apoyo al alta en insuficiencia cardiaca (seguimiento de síntomas, alertas de peso, recordatorios de medicación, escalado a enfermería): 2,000 altas/año, tasa de reingreso basal 18%, el ensayo muestra 14% con la app.

```
Reingresos evitados = 2,000 × (0.18 − 0.14) = 80/año
Coste por episodio de reingreso ≈ 3,500 £ → 280,000 £/año de coste de tratamiento evitado
Más la exposición a penalización/no pago sobre esos episodios.
Coste de la app: 2,000 × 60 £ = 120,000 £/año

Neto ≈ +160,000 £/año, antes de cualquier reivindicación de QALY por deterioro evitado.
```

La cifra que hay que defender es el efecto de 4 puntos porcentuales: debe proceder de una comparación controlada, porque las tasas de reingreso oscilan con la mezcla de casos y la estación.

## Conexión con la ingeniería de software

El reingreso es la **tasa de fallos en cambios** del sistema de salud (véase [métricas DORA](../dora-metrics/)): trabajo que se "envió" y rebotó dentro de los 30 días. Las analogías calan hondo — los tickets reabiertos y los incidentes de regresión indican mala "calidad de alta" (verificación débil, cierre prematuro, documentación de traspaso ausente); la contabilidad de tipo penalización (paga el equipo que arregla, no el que recibe) cambia el comportamiento; y ambos campos aprendieron la misma lección: empujar throughput bruto (alta más rápida, envíos más rápidos) sin invertir en el traspaso simplemente convierte colas visibles en retrabajo invisible. Una "tasa de reapertura a 30 días" pertenece a cualquier panel de equipo que celebre el tiempo de ciclo.

## Errores habituales

- **Manipulación mediante reetiquetado**: reingresos codificados como estancias de observación o nuevas afecciones; audita la definición.
- **Toda causa frente a causa relacionada**: los 30 días de toda causa incluyen eventos genuinamente no relacionados; las penalizaciones suelen usar toda causa precisamente porque "relacionado" es manipulable.
- **Ceguera a la mezcla de casos**: un hospital que atiende a poblaciones más enfermas y más pobres reingresa más por razones que ninguna app arregla; ajusta por riesgo antes de comparar.

## Fuentes

- CMS, Hospital Readmissions Reduction Program. <https://www.cms.gov/medicare/payment/prospective-payment-systems/acute-inpatient-pps/hospital-readmissions-reduction-program-hrrp>
- NHS Digital, emergency readmissions statistics. <https://digital.nhs.uk/data-and-information/publications/statistical/compendium-emergency-readmissions>
