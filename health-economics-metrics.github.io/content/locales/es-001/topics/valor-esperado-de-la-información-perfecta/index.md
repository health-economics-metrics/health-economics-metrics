# Valor Esperado de la Información Perfecta (VECI)

El VECI es la cantidad máxima que un tomador de decisiones debería pagar para eliminar la incertidumbre antes de decidir — el precio formal de "hagamos primero un estudio".

## Por qué importa

Los sistemas de salud enfrentan constantemente la elección: adoptar ahora con evidencia imperfecta, o financiar más investigación primero. El VECI pone una cifra a la segunda opción. Si el VECI es £50.000 y el ensayo propuesto cuesta £2 millones, adopta ahora. Si el VECI es £20 millones, el ensayo es una ganga. La misma pregunta — "¿deberíamos pilotar esto antes de desplegarlo?" — surge para cada decisión de herramienta empresarial, y casi nadie la tasa.

## El cálculo

El VECI es la brecha entre decidir con previsión perfecta y decidir ahora con expectativas:

```
VECI = E_θ[ max_j VMN(j, θ) ]  −  max_j E_θ[ VMN(j, θ) ]

θ        = parámetros inciertos (con su distribución conjunta)
VMN(j,θ) = valor monetario neto de la opción j dado θ
```

Primer término: promedio del pago de la mejor elección a través de cada mundo posible (siempre eliges bien). Segundo término: pago de la única opción que es mejor en promedio (debes comprometerte ahora). El VECI ≥ 0 siempre. El VECI poblacional se multiplica por el número de decisiones afectadas. Calculado directamente a partir de extracciones de [ASP](../análisis-de-sensibilidad-probabilístico/).

## Ejemplo resuelto

Desplegar un asistente de documentación con IA a 5.000 clínicos, o no. Dos mundos:

```
Mundo A (p = 0,6): el asistente ahorra 20 min/día → VMN del despliegue = +£8M
Mundo B (p = 0,4): el asistente ahorra ~0 (fricción de flujo de trabajo) → VMN del despliegue = −£3M
VMN de "no desplegar" = £0 en ambos mundos.
```

Decide ahora: E[VMN despliegue] = 0,6 × 8 − 0,4 × 3 = **+£3,6M** → desplegar.

Con información perfecta: en el mundo A elige desplegar (+£8M), en el mundo B elige nada (£0). Valor esperado = 0,6 × 8 + 0,4 × 0 = **£4,8M**.

```
VECI = 4,8M − 3,6M = £1,2M
```

Un piloto riguroso de 3 meses que cuesta £150.000 y resuelve sustancialmente en qué mundo estás merece claramente la pena — y cualquier piloto que cueste más de £1,2M no la merece, por muy exhaustivo que sea.

## Conexión con la ingeniería de software

El VECI es la economía del sprint exploratorio, el piloto, la prueba A/B y la prueba de concepto. Produce dos reglas prácticas:

- **Un piloto solo vale la pena financiarlo si la decisión realmente podría cambiar.** Si desplegarías de todos modos independientemente del resultado del piloto, el VECI = 0 y el piloto es teatro.
- **Limita el gasto del piloto al VECI.** El valor de la información está acotado por el valor de la decisión que informa.

El VECI parcial (VEIPP) extiende esto a parámetros individuales: "¿qué vale fijar específicamente la cifra de tiempo ahorrado?" — lo que te dice qué debería medir el piloto.

## Errores comunes

- **Ejecutar pilotos sin ninguna regla de decisión adjunta** — la información que no puede cambiar la elección no tiene valor por definición.
- **Ignorar el coste de retraso de recopilar información**: un piloto de 6 meses retrasa 6 meses de beneficio ([coste de retraso](../coste-de-retraso/)); el valor neto del piloto = VECI resuelto − coste de retraso − coste del piloto.
- **Tratar el VECI como una previsión.** Es un límite superior del valor de la información, no una estimación de lo que entregará un estudio específico.

## Fuentes

- Claxton K. "Exploring uncertainty in cost-effectiveness analysis." PharmacoEconomics 2008. <https://pubmed.ncbi.nlm.nih.gov/18279550/>
- Glosario del York Health Economics Consortium: VECI. <https://yhec.co.uk/glossary/expected-value-of-perfect-information-evpi/>
