# Análisis de coste-efectividad (CEA)

El CEA compara los costes de intervenciones alternativas frente a un único resultado medido en **unidades naturales** — años de vida, casos detectados, ingresos evitados, mmHg de reducción de presión arterial. Su resultado es un coste por unidad de resultado.

## Por qué importa

El CEA es la comparación de referencia cuando todas las opciones persiguen el mismo resultado. Responde a "¿cuál de estas formas de lograr X es el mejor uso del dinero?" — pero *no* a "¿merece la pena lograr X en absoluto?" (para eso hace falta el [análisis de coste-beneficio](../cost-benefit-analysis/)) ni a "¿cómo se compara X con prioridades no relacionadas?" (para eso hace falta el [análisis de coste-utilidad](../cost-utility-analysis/) y un resultado genérico como el QALY).

## Las matemáticas

El estadístico de comparación es el [ICER](../incremental-cost-effectiveness-ratio/) en unidades naturales:

```
ICER = (Coste_A − Coste_B) / (Efecto_A − Efecto_B)
     = £ por caso adicional detectado / ingreso evitado / etc.
```

Procedimiento: define la unidad de resultado; costea cada opción desde la misma [perspectiva](../analysis-perspective/) durante el mismo [horizonte temporal](../time-horizon/); elimina las opciones dominadas ([frontera de eficiencia](../dominance-and-efficiency-frontier/)); calcula los ratios incrementales a lo largo de la frontera.

## Ejemplo resuelto

Tres formas de encontrar fibrilación auricular no diagnosticada en una población de 100,000:

```
Opción                           Coste       Casos encontrados
Controles de pulso oportunistas  £150,000    300
Eventos de cribado en farmacia   £400,000    520
Cribado con dispositivo wearable £900,000    610

ICER farmacia vs pulso:   (400k−150k)/(520−300) = £1,136 por caso adicional
ICER wearable vs farmacia: (900k−400k)/(610−520) = £5,556 por caso adicional
```

Si £5,556 por caso adicional "merece la pena" depende del valor de un caso encontrado (prevención de ictus más adelante) — el CEA ordena las opciones, pero la decisión de adopción necesita esa valoración externa. Nótese que el coste *medio* por caso de la opción wearable (900k/610 = £1,475) parece razonable; el *incremental* de £5,556 es la cifra honesta para la decisión de expansión.

## Conexión con la ingeniería de software

El CEA es la plantilla correcta siempre que las opciones compartan un resultado: coste por test inestable (flaky) eliminado entre tres enfoques de remediación; coste por incidente evitado entre proveedores de observabilidad; coste por despliegue exitoso entre arquitecturas de CI. La disciplina que impone — una unidad de resultado declarada, ratios incrementales (no medios), opciones dominadas eliminadas primero — mata la mayoría de las malas comparaciones de proveedores antes de que empiece la conversación sobre precios.

## Escollos

- **Comparar opciones con resultados distintos** ("casos encontrados" frente a "satisfacción") en un mismo CEA — para eso hace falta el [análisis de coste-consecuencia](../cost-consequence-analysis/) o un resultado genérico.
- **Ratios de coste-efectividad medios** presentados donde se necesitan incrementales (el ejemplo del wearable anterior).
- **Unidades de resultado elegidas para favorecer**: "alertas generadas" es un output, no un resultado; insiste en unidades que transmitan valor.

## Fuentes

- CDC POLARIS: análisis de coste-efectividad. <https://www.cdc.gov/policy/polaris/economics/cost-effectiveness/index.html>
- Glosario de York Health Economics Consortium. <https://yhec.co.uk/glossary/cost-effectiveness-analysis/>
