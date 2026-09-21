# Construir frente a comprar

Construir frente a comprar es una comparación estructurada entre el desarrollo a medida y la adquisición comercial, en función del [TCO](../total-cost-of-ownership/) descontado, el tiempo de entrega y el riesgo. Los datos empíricos previos son unilaterales: **los costes reales de construcción suelen superar las previsiones en un 30–40%**, las soluciones compradas se despliegan entre un 40% y un 60% más rápido, y la investigación del MIT sobre IA generativa de 2025 encontró que las herramientas de IA compradas tuvieron éxito ~67% de las veces, frente a aproximadamente un tercio de esa tasa en las construcciones internas.

## Por qué importa

Los sistemas de salud se enfrentan constantemente a esta decisión ("construir frente a encargar" en el lenguaje del NHS), y las organizaciones de ingeniería sistemáticamente se equivocan en la dirección de construir — porque quienes construyen estiman la construcción, no el [TCO](../total-cost-of-ownership/), y porque construir es más divertido. El marco económico obliga a la comparación honesta: ambas opciones valoradas sobre el mismo horizonte, ambas ajustadas por riesgo, y la *diferencia de tiempo valorada como [coste de la demora](../cost-of-delay/)* — el término que con más frecuencia decide la respuesta y que con más frecuencia se omite.

## Las matemáticas

```
Comparar sobre el mismo horizonte de 3–5 años, descontado:

NPV_option = PV(beneficios, desplazados según el tiempo hasta el valor) − PV(TCO)

Ajustes de riesgo (patrón de "sesgo de optimismo" del Green Book):
  coste de construir × 1.3–1.4        (previsión de sobrecoste)
  tiempo hasta el valor de construir + 40–60% (previsión de retraso en el despliegue)
  comprar: añadir en su lugar una comprobación de realidad de integración y costes de salida

Factores de decisión, en el orden en que suelen decidir:
  1. diferenciación — ¿es esta capacidad tu producto, o es fontanería?
  2. tiempo hasta el valor × CoD
  3. TCO ajustado por riesgo
```

## Ejemplo resuelto

Un trust necesita un sistema electrónico de consentimiento. Comprar: £150k/año de SaaS, en marcha en 3 meses. Construir: estimado en £600k + £120k/año de mantenimiento, en marcha en 12 meses.

```
Construcción ajustada por riesgo: 600k × 1.35 = £810k; tiempo hasta el valor ≈ 18 meses
TCO a 5 años:  comprar = 150k × 5 = £750k
               construir = 810k + 120k × 5 = £1,410k
Término de demora: la digitalización del consentimiento ahorra £25k/mes; la construcción llega 15 meses
            más tarde → CoD = 15 × 25k = £375k

Comparación efectiva: £750k frente a £1,785k — comprar gana por ~£1M, y el mayor
término individual después de la propia construcción es el coste de demora que nadie había valorado.
```

Construir sigue siendo la opción correcta cuando la capacidad es diferenciadora (el algoritmo central de tu producto), cuando ningún proveedor cumple una restricción ineludible (seguridad clínica, residencia de datos), o cuando el riesgo de dependencia de proveedor (vendor lock-in) es grave y está valorado.

## Conexión con la ingeniería de software

La disciplina de economía de la salud transferible es triple: **ajuste de riesgo basado en previos** (el incremento del 30–40% por sobrecoste es el sesgo de optimismo del Green Book aplicado al software — aplíquese mecánicamente, y arguméntense las excepciones en lugar de partir de ellas); **honestidad del comparador** (la alternativa a construir no es "nada", es la mejor compra disponible — véase [coste de oportunidad](../opportunity-cost/)); y **pruebas de equivalencia antes de comparar costes** (si comprar y construir realmente cumplen la misma especificación, esto es [análisis de minimización de costes](../cost-minimization-analysis/) y gana la opción más barata; si no, la diferencia de resultados debe valorarse, no darse por supuesta).

## Escollos

- **Comparar el precio de catálogo del proveedor con estimaciones de construcción sin ajustar por riesgo** — doble halago hacia la construcción.
- **Mano de obra interna valorada a coste cero** ("el equipo ya está aquí").
- **Dependencia de proveedor sin valorar en ambas direcciones**: los costes de salida del proveedor, pero también el factor bus y la permanencia del mantenimiento en la construcción propia.
- **Construcciones motivadas por la identidad**: "esto es esencial para nosotros" alegado para lo que en realidad es fontanería — pon a prueba la diferenciación preguntando si los clientes lo notarían.

## Fuentes

- Análisis de TCO de construir frente a comprar. <https://neontri.com/blog/build-vs-buy-software/>
- Hallazgos del MIT sobre la brecha de la IA generativa (tasas de éxito de comprar frente a construir). <https://blueflame.ai/blog/achieving-ai-roi-key-findings-from-mits-genai-report>
- HM Treasury Green Book (sesgo de optimismo). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
