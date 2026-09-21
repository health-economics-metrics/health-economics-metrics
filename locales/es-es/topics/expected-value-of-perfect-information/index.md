# Valor Esperado de la Información Perfecta (EVPI)

EVPI es la cantidad máxima que un responsable de decisiones debería pagar para eliminar la incertidumbre antes de decidir — el precio formal de "hagamos primero un estudio".

## Por qué importa

Los sistemas de salud se enfrentan constantemente a la disyuntiva: adoptar ahora con evidencia imperfecta, o financiar primero más investigación. EVPI pone una cifra a la segunda opción. Si EVPI es £50,000 y el ensayo propuesto cuesta £2 millones, adopte ahora. Si EVPI es £20 millones, el ensayo es una ganga. La misma pregunta — "¿deberíamos pilotar esto antes de implantarlo?" — surge en toda decisión sobre herramientas empresariales, y casi nadie la valora.

## Las matemáticas

EVPI es la brecha entre decidir con previsión perfecta y decidir ahora sobre expectativas:

```
EVPI = E_θ[ max_j NMB(j, θ) ]  −  max_j E_θ[ NMB(j, θ) ]

θ        = parámetros inciertos (con su distribución conjunta)
NMB(j,θ) = beneficio monetario neto de la opción j dado θ
```

Primer término: la media del pago de la mejor opción en cada mundo posible (siempre acierta). Segundo término: el pago de la única opción que es mejor en promedio (hay que comprometerse ahora). EVPI ≥ 0 siempre. El EVPI poblacional se multiplica por el número de decisiones afectadas. Se calcula directamente a partir de extracciones del [PSA](../probabilistic-sensitivity-analysis/).

## Ejemplo práctico

Implantar un asistente de documentación con IA para 5,000 clínicos, o no. Dos mundos:

```
Mundo A (p = 0.6): el asistente ahorra 20 min/día → NMB de la implantación = +£8M
Mundo B (p = 0.4): el asistente ahorra ~0 (fricción de flujo de trabajo) → NMB = −£3M
NMB de "no implantar" = £0 en ambos mundos.
```

Decidir ahora: E[NMB implantación] = 0.6 × 8 − 0.4 × 3 = **+£3.6M** → implantar.

Con información perfecta: en el mundo A se elige implantar (+£8M), en el mundo B se elige no hacer nada (£0). Valor esperado = 0.6 × 8 + 0.4 × 0 = **£4.8M**.

```
EVPI = 4.8M − 3.6M = £1.2M
```

Un piloto riguroso de 3 meses que cuesta £150,000 y resuelve sustancialmente en qué mundo estamos merece la pena de forma rotunda — y cualquier piloto que cueste más de £1.2M no la merece, por muy exhaustivo que sea.

## Conexión con la ingeniería de software

EVPI es la economía del spike, del piloto, del test A/B y de la prueba de concepto. Produce dos reglas prácticas:

- **Un piloto solo merece financiación si la decisión pudiera cambiar realmente.** Si de todos modos implantaría el resultado del piloto, EVPI = 0 y el piloto es teatro.
- **Limite el gasto del piloto al EVPI.** El valor de la información está acotado por el valor de la decisión a la que informa.

El EVPI parcial (EVPPI) extiende esto a parámetros individuales: "¿qué vale determinar con precisión específicamente la cifra de tiempo ahorrado?" — lo cual indica qué debería medir el piloto.

## Escollos

- **Ejecutar pilotos sin una regla de decisión asociada** — la información que no puede cambiar la elección no vale nada por definición.
- **Ignorar el coste del retraso de recabar información**: un piloto de 6 meses retrasa 6 meses de beneficio ([coste del retraso](../cost-of-delay/)); el valor neto del piloto = EVPI resuelto − coste del retraso − coste del piloto.
- **Tratar EVPI como una previsión.** Es una cota superior del valor de la información, no una estimación de lo que entregará un estudio concreto.

## Fuentes

- Claxton K. "Exploring uncertainty in cost-effectiveness analysis." PharmacoEconomics 2008. <https://pubmed.ncbi.nlm.nih.gov/18279550/>
- Glosario de York Health Economics Consortium: EVPI. <https://yhec.co.uk/glossary/expected-value-of-perfect-information-evpi/>
