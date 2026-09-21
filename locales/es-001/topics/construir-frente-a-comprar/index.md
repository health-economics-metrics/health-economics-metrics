# Construir frente a Comprar

Construir-frente-a-comprar es una comparación estructurada del desarrollo a medida frente a la adquisición comercial, sobre el [CTP](../coste-total-de-propiedad/) descontado, el tiempo de entrega y el riesgo. Las prioridades empíricas son unilaterales: **los costes reales de construcción típicamente superan las proyecciones en un 30-40%**, las soluciones compradas se despliegan un 40-60% más rápido, y la investigación de IA generativa de MIT de 2025 encontró que las herramientas de IA compradas tuvieron éxito ~67% de las veces mientras que las construcciones internas tuvieron éxito aproximadamente un tercio de esa frecuencia.

## Por qué importa

Los sistemas de salud enfrentan esta decisión constantemente ("hacer frente a encargar" en el lenguaje del NHS), y las organizaciones de ingeniería sistemáticamente se equivocan en la dirección de construir — porque quienes construyen estiman la construcción, no el [CTP](../coste-total-de-propiedad/), y porque construir es más divertido. El marco económico fuerza la comparación honesta: ambas opciones tasadas sobre el mismo horizonte, ambas ajustadas por riesgo, y la *diferencia de tiempo tasada como [coste de retraso](../coste-de-retraso/)* — el término que más a menudo decide la respuesta y más a menudo se omite.

## El cálculo

```
Compara sobre el mismo horizonte de 3-5 años, descontado:

VPN_opción = VP(beneficios, desplazados por tiempo hasta el valor) − VP(CTP)

Ajustes de riesgo (patrón de "sesgo de optimismo" del Green Book):
  coste de construcción × 1,3–1,4        (prioridad de sobrecoste)
  tiempo hasta el valor de construcción + 40–60% (prioridad de retraso de despliegue)
  comprar: añade en su lugar verificación de realidad de integración y costes de salida

Impulsores de decisión, en el orden en que suelen decidir:
  1. diferenciación — ¿es esta capacidad tu producto, o infraestructura?
  2. tiempo hasta el valor × CdR
  3. CTP ajustado por riesgo
```

## Ejemplo resuelto

Un fideicomiso necesita un sistema de consentimiento electrónico. Comprar: £150k/año SaaS, en vivo en 3 meses. Construir: estimado £600k + £120k/año de mantenimiento, en vivo en 12 meses.

```
Construcción ajustada por riesgo: 600k × 1,35 = £810k; tiempo hasta el valor ≈ 18 meses
CTP a 5 años:  comprar = 150k × 5 = £750k
           construir = 810k + 120k × 5 = £1.410k
Término de retraso: la digitalización del consentimiento ahorra £25k/mes; la construcción llega 15 meses
            después → CdR = 15 × 25k = £375k

Comparación efectiva: £750k frente a £1.785k — comprar gana por ~£1M, y el mayor
término único después de la propia construcción es el coste de retraso que nadie había tasado.
```

Construir sigue siendo correcto cuando la capacidad es diferenciadora (el algoritmo central de tu producto), cuando ningún proveedor cumple una restricción dura (seguridad clínica, residencia de datos), o cuando el riesgo de bloqueo de proveedor es severo y está tasado.

## Conexión con la ingeniería de software

La disciplina transferible de la economía de la salud es triple: **ajuste de riesgo basado en prioridades** (el incremento del 30-40% por sobrecoste es el sesgo de optimismo del Green Book del software — aplícalo mecánicamente, argumenta a favor de excepciones en lugar de partir de ellas); **honestidad del comparador** (la alternativa a construir no es "nada", es la mejor compra disponible — ver [coste de oportunidad](../coste-de-oportunidad/)); y **prueba de equivalencia antes de la comparación de costes** (si comprar y construir realmente cumplen la misma especificación, esto es [análisis de minimización de costes](../análisis-de-minimización-de-costes/) y gana el más barato; si no, la diferencia de resultado debe valorarse, no afirmarse).

## Errores comunes

- **Comparar el precio de lista del proveedor con estimaciones de construcción no ajustadas por riesgo** — doble halago hacia construir.
- **Trabajo interno con coste cero** ("el equipo ya está aquí").
- **Bloqueo no tasado en ambas direcciones**: costes de salida del proveedor, pero también el factor de autobús y la permanencia de mantenimiento de la construcción.
- **Construcciones impulsadas por identidad**: "esto es central para nosotros" reclamado para infraestructura — prueba la diferenciación contra si los clientes lo notarían.

## Fuentes

- Análisis de CTP construir-frente-a-comprar. <https://neontri.com/blog/build-vs-buy-software/>
- Hallazgos de la división de IA generativa de MIT (tasas de éxito comprar frente a construir). <https://blueflame.ai/blog/achieving-ai-roi-key-findings-from-mits-genai-report>
- HM Treasury Green Book (sesgo de optimismo). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
