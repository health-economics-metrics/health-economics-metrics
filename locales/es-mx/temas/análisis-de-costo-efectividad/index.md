# Análisis de Costo-Efectividad (AEC)

El AEC compara los costos de intervenciones alternativas frente a un único resultado medido en **unidades naturales** — años de vida, casos detectados, ingresos evitados, mmHg de presión arterial reducida. Su resultado es un costo por unidad de resultado.

## Por qué importa

El AEC es la comparación de trabajo pesado cuando todas las opciones apuntan al mismo resultado. Responde "¿cuál de estas formas de lograr X es el mejor uso del dinero?" — pero *no* "¿merece la pena lograr X en absoluto?" (eso necesita [análisis de costo-beneficio](../análisis-de-costo-beneficio/)) y *no* "¿cómo se compara X con prioridades no relacionadas?" (eso necesita [análisis de costo-utilidad](../análisis-de-costo-utilidad/) y un resultado genérico como el AVAC).

## El cálculo

La estadística de comparación es el [RCEI](../ratio-de-costo-efectividad-incremental/) en unidades naturales:

```
RCEI = (Costo_A − Costo_B) / (Efecto_A − Efecto_B)
     = £ por caso adicional detectado / ingreso evitado / etc.
```

Procedimiento: define la unidad de resultado; tasa cada opción desde la misma [perspectiva](../perspectiva-del-análisis/) durante el mismo [horizonte temporal](../horizonte-temporal/); elimina las opciones dominadas ([frontera de eficiencia](../dominancia-y-la-frontera-de-eficiencia/)); calcula razones incrementales a lo largo de la frontera.

## Ejemplo resuelto

Tres formas de encontrar fibrilación auricular no diagnosticada en una población de 100.000:

```
Opción                    Costo        Casos encontrados
Comprobaciones de pulso oportunistas  £150.000       300
Eventos de cribado en farmacia  £400.000       520
Cribado basado en wearable  £900.000       610

RCEI farmacia vs pulso:  (400k−150k)/(520−300) = £1.136 por caso adicional
RCEI wearable vs farmacia:(900k−400k)/(610−520) = £5.556 por caso adicional
```

Si £5.556 por caso adicional "merece la pena" depende del valor de un caso encontrado (prevención de accidente cerebrovascular posterior) — el AEC clasifica las opciones pero la decisión de adopción necesita esa valoración externa. Nota que el costo *promedio* por caso de la opción wearable (900k/610 = £1.475) se ve bien; el £5.556 *incremental* es la cifra honesta para la decisión de expansión.

## Conexión con la ingeniería de software

El AEC es la plantilla correcta siempre que las opciones comparten un resultado: costo por prueba inestable eliminada a través de tres enfoques de remediación; costo por incidente evitado a través de proveedores de observabilidad; costo por despliegue exitoso a través de arquitecturas de CI. La disciplina que impone — una unidad de resultado declarada, razones incrementales (no promedio), opciones dominadas eliminadas primero — mata la mayoría de las malas comparaciones de proveedores antes de que empiece la discusión de precios.

## Errores comunes

- **Comparar opciones con diferentes resultados** ("casos encontrados" frente a "satisfacción") en un solo AEC — eso necesita [análisis de costo-consecuencia](../análisis-de-costo-consecuencia/) o un resultado genérico.
- **Razones de costo-efectividad promedio** presentadas donde se necesitan las incrementales (el ejemplo del wearable arriba).
- **Unidades de resultado elegidas para halagar**: "alertas generadas" es un producto, no un resultado; insiste en unidades que llevan valor.

## Fuentes

- CDC POLARIS: análisis de costo-efectividad. <https://www.cdc.gov/policy/polaris/economics/cost-effectiveness/index.html>
- Glosario del York Health Economics Consortium. <https://yhec.co.uk/glossary/cost-effectiveness-analysis/>
