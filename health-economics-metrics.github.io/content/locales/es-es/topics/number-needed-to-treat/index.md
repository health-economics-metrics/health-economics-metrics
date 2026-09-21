# Número Necesario a Tratar (NNT)

El NNT es el número de pacientes que deben recibir una intervención para que **un** paciente adicional se beneficie, en un periodo de tiempo determinado. Convierte las reducciones de riesgo porcentuales —que inducen a error— en unidades de esfuerzo por beneficio que cualquiera puede razonar.

## Por qué importa

«¡Reduce los infartos en un 25%!» suena contundente. Si el riesgo basal es del 4% a 5 años, la reducción absoluta es de 1 punto porcentual, así que **100 personas deben tomar el fármaco durante 5 años para que 1 se beneficie**: y las 100 asumen los costes y efectos secundarios. El NNT es el antídoto contra el marketing de riesgo relativo, por lo que la medicina basada en la evidencia lo pone por delante. Estatinas en prevención primaria: NNT ≈ 50-100 a 5 años por infarto evitado. Su espejo, el **NNH** (número necesario para dañar), cuenta cuántos tratados por cada persona dañada.

## Las matemáticas

```
ARR = tasa de eventos en control − tasa de eventos en tratamiento   (reducción absoluta del riesgo)
NNT = 1 / ARR

NNH = 1 / (tasa de daño_tratamiento − tasa de daño_control)

Puente económico:
coste por evento evitado = NNT × coste por curso de tratamiento
```

Indica siempre el periodo de tiempo y la población basal: el NNT no tiene sentido sin ambos.

## Ejemplo resuelto

Un sistema de predicción de caídas en un hospital marca a los pacientes de alto riesgo para intervención (sensores de cama, revisión, supervisión). Ensayo: las caídas con lesión bajan del 3.2% al 2.4% de los ingresos.

```
ARR = 0.8 puntos porcentuales → NNT = 1/0.008 = 125
   (125 pacientes deben recibir el paquete de intervención para evitar 1 caída con lesión)

Coste de la intervención ≈ £40/paciente → coste por caída evitada = 125 × 40 = £5,000
Coste de una caída con lesión en un paciente ingresado (estancia extra, imagen, litigio) ≈ £12,000
Neto: la prevención compensa ~2.4:1, y la ganancia en QALY va aparte.
```

Nótese cómo el NNT mantiene honesta la afirmación: «reduce las caídas un 25%» y «evita una caída por cada 125 pacientes tratados» son el mismo resultado, con distinto grado de persuasión.

## Conexión con la ingeniería de software

El NNT es la unidad adecuada para cualquier puerta o comprobación que actúa sobre muchos elementos para detectar pocos: **«número de PR que deben pasar por la puerta de revisión de IA para detectar un defecto que llegaría a producción»**. Si la puerta revisa 400 PR por cada detección real (NNT = 400) con 4 minutos de atención del desarrollador cada una, una detección cuesta ~27 horas-desarrollador: ahora compáralo con el coste del incidente que evita. El NNH corresponde a los falsos positivos: ¿cuántos PR por cada aviso *falso*, y cuánto cuesta cada uno en atención y confianza? Las herramientas de tipo cribado (linters, escáneres de seguridad, detección de anomalías) deberían venir con aritmética de NNT/NNH; véase [screening economics](../screening-economics/) para entender por qué una prevalencia baja hace que estas cifras sean brutales.

## Trampas habituales

- **Sin periodo de tiempo**: «NNT = 50» no significa nada; «NNT = 50 a 5 años» es una afirmación.
- **Trasplante del riesgo basal**: un NNT calculado en una población de ensayo de alto riesgo se desmorona en una población de despliegue de bajo riesgo.
- **Ignorar el NNH**: una puerta con NNT 400 y NNH 3 es un generador de molestias, no un sistema de seguridad.

## Fuentes

- Laupacis A, Sackett DL, Roberts RS. "An assessment of clinically useful measures of the consequences of treatment." NEJM 1988. <https://pubmed.ncbi.nlm.nih.gov/3374545/>
- TheNNT explained. <https://www.thennt.com/thennt-explained/>
