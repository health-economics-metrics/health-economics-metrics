# Intervención Más Temprana

Si la capacidad ahorrada permite a un profesional revisar antes los retrasos de diagnóstico, los pacientes pasan de la lista de espera al tratamiento activo más rápido — y tratar antes suele ser más barato y mejor que tratar después, porque las condiciones no tratadas progresan.

## Por qué importa

La progresión de la enfermedad es el interés compuesto de la atención sanitaria. Un paciente que espera con una condición no tratada no está en un estado estable: los cánceres cambian de estadio, la insuficiencia cardíaca se descompensa, la depresión leve se vuelve grave. Por lo tanto, intervenir antes entrega un doble dividendo — **mejores resultados** (más AVAC, tratados desde una línea base más saludable) y a menudo **menores costes de tratamiento** (el tratamiento en fase temprana es menos intensivo que el rescate en fase tardía). Este mecanismo es lo que eleva las "vías más rápidas" de una comodidad operativa a un imperativo clínico y económico — y es la razón profunda por la que el [coste de retraso](../coste-de-retraso/) se aplica al software clínico.

## El cálculo

```
Valor de la intervención más temprana (por paciente) =
    [Coste_tardío − Coste_temprano]                       (compensación de coste de tratamiento)
  + [AVAC_temprano − AVAC_tardío] × λ                 (ganancia de salud × umbral)
  × P(progresión durante el retraso)                 (ponderación de probabilidad)
```

La ponderación de probabilidad es esencial: no todo paciente en espera progresa. Modela la probabilidad de transición por unidad de tiempo (de datos de historia natural), no el peor caso. Luego descuenta: los costes evitados a años de distancia valen menos hoy ([descuento](../descuento-y-preferencia-temporal/)) — y nota que la mayoría de la intervención temprana es coste-*efectiva* en lugar de coste-*ahorradora* (ver [economía de la prevención](../economía-de-la-prevención/)).

## Ejemplo resuelto

Retraso de cribado de retinopatía diabética: 4.000 pacientes, 6 meses de retraso. La calificación asistida por IA triplica el rendimiento y despeja la cola en 8 semanas. Historia natural: ~2% de los pacientes en espera/año progresan a etapas que amenazan la visión mientras no son revisados.

```
Eventos de progresión evitados por ~4 meses de aceleración:
  4.000 × 2% × (4/12) ≈ 27 pacientes

Por progresión evitada:
  compensación de tratamiento (terapia intravítrea frente a láser) ≈ £4.000
  ganancia de AVAC (visión preservada) ≈ 0,8 AVAC × £20.000 = £16.000

Valor ≈ 27 × (4.000 + 16.000) ≈ £540.000 — de un retraso despejado una vez,
antes de contar la ganancia de rendimiento permanente.
```

## Conexión con la ingeniería de software

Dos traslados. Primero, el obvio: el software que acelera las vías de diagnóstico y tratamiento (triaje, calificación por IA, enrutamiento de resultados) se monetiza vía este mismo modelo — y el modelo te dice qué vía acelerar: la de la curva de progresión más pronunciada, no la cola más larga. Segundo, el espejo de ingeniería: **los defectos también progresan**. Un error detectado en el diseño cuesta una conversación; en producción cuesta un incidente; la curva de coste de "shift-left" (10-100× según la etapa) es un modelo de progresión, y la versión honesta lleva la misma advertencia — la detección temprana suele ser coste-efectiva, no dinero gratis, porque las revisiones y pruebas tienen costes reales y la mayoría de los problemas detectados nunca habrían progresado.

## Errores comunes

- **Asumir la progresión del peor caso para todos** — la ponderación de probabilidad es la diferencia entre análisis y defensa.
- **Sesgo de tiempo de adelanto**: encontrar la enfermedad antes sin cambiar los resultados parece un beneficio pero no lo es; la *intervención efectiva* más temprana es la reclamación, no la detección más temprana sola (ver [economía del cribado](../economía-del-cribado/)).
- **Doble contabilización** con reclamaciones de lista de espera y RTT construidas sobre la misma aceleración — una mejora de vía, un conjunto de beneficios, asignado una vez.

## Fuentes

- Cohen JT, Neumann PJ, Weinstein MC. "Does preventive care save money?" NEJM 2008. <https://www.nejm.org/doi/full/10.1056/NEJMp0708558>
- NHS England, programa de cribado ocular diabético. <https://www.gov.uk/topic/population-screening-programmes/diabetic-eye>
