# Número Necesario a Tratar (NNT)

El NNT es el número de pacientes que deben recibir una intervención para que **uno** adicional se beneficie, durante un plazo declarado. Convierte las reducciones de riesgo porcentual — que engañan — en unidades de esfuerzo-por-beneficio que cualquiera puede razonar.

## Por qué importa

"¡Reduce los ataques cardíacos en un 25%!" suena decisivo. Si el riesgo base es del 4% en 5 años, la reducción absoluta es 1 punto porcentual, así que **100 personas deben tomar el medicamento durante 5 años para que 1 se beneficie** — y las 100 pagan los costes y efectos secundarios. El NNT es el antídoto al marketing de riesgo relativo, por lo que la medicina basada en evidencia lo encabeza. Estatinas para prevención primaria: NNT ≈ 50–100 en 5 años por ataque cardíaco evitado. Su espejo, **NND** (número necesario para dañar), cuenta cuántos tratados por persona dañada.

## El cálculo

```
RRA = tasa de eventos de control − tasa de eventos de tratamiento   (reducción absoluta de riesgo)
NNT = 1 / RRA

NND = 1 / (tasa de daño_tratamiento − tasa de daño_control)

Puente económico:
coste por evento prevenido = NNT × coste por ciclo de tratamiento
```

Declara siempre el plazo y la población base — el NNT no tiene sentido sin ambos.

## Ejemplo resuelto

Un sistema de predicción de caídas en un hospital marca a pacientes de alto riesgo para intervención (sensores de cama, revisión, supervisión). Ensayo: las caídas con lesión caen del 3,2% al 2,4% de los ingresos.

```
RRA = 0,8 puntos porcentuales → NNT = 1/0,008 = 125
   (125 pacientes deben recibir el paquete de intervención para prevenir 1 caída con lesión)

Coste de la intervención ≈ £40/paciente → coste por caída prevenida = 125 × 40 = £5.000
Coste de una caída hospitalaria con lesión (estancia extra, imagenología, litigio) ≈ £12.000
Neto: la prevención paga ~2,4:1 — y la ganancia de AVAC está encima.
```

Nota cómo el NNT mantiene honesta la reclamación: "reduce las caídas 25%" y "previene una caída por cada 125 pacientes tratados" son el mismo resultado, persuasivo de forma diferente.

## Conexión con la ingeniería de software

El NNT es la unidad correcta para cualquier puerta o comprobación que actúa sobre muchos elementos para capturar pocos: **"número de PR que deben pasar por la puerta de revisión de IA para capturar un defecto que va a producción".** Si la puerta revisa 400 PR por captura real (NNT = 400) a 4 minutos de atención de desarrollador cada uno, una captura cuesta ~27 horas-desarrollador — ahora compara eso con el coste del incidente que previene. El NND se mapea a los falsos positivos: ¿cuántos PR por señal *falsa*, y qué cuesta cada uno en atención y confianza? Las herramientas estilo cribado (linters, escáneres de seguridad, detección de anomalías) deberían enviarse con aritmética NNT/NND — ver [economía del cribado](../economía-del-cribado/) para por qué la baja prevalencia hace estas cifras brutales.

## Errores comunes

- **Sin plazo**: "NNT = 50" no significa nada; "NNT = 50 en 5 años" es una reclamación.
- **Trasplante de riesgo base**: el NNT calculado en una población de ensayo de alto riesgo colapsa en una población de despliegue de bajo riesgo.
- **Ignorar el NND** — una puerta con NNT 400 y NND 3 es un generador de molestias, no un sistema de seguridad.

## Fuentes

- Laupacis A, Sackett DL, Roberts RS. "An assessment of clinically useful measures of the consequences of treatment." NEJM 1988. <https://pubmed.ncbi.nlm.nih.gov/3374545/>
- TheNNT explicado. <https://www.thennt.com/thennt-explained/>
