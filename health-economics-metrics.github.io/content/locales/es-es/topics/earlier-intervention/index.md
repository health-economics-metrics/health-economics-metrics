# Intervención Más Temprana

Si la capacidad ahorrada permite a un profesional revisar antes las listas de espera diagnósticas, los pacientes pasan de la lista de espera al tratamiento activo más rápido — y tratar antes suele ser más barato y mejor que tratar después, porque las condiciones no tratadas progresan.

## Por qué importa

La progresión de la enfermedad es el interés compuesto de la atención sanitaria. Un paciente que espera con una condición no tratada no está en un estado estable: los cánceres cambian de estadio, la insuficiencia cardíaca se descompensa, la depresión leve se vuelve grave. Intervenir antes ofrece, por tanto, un doble dividendo — **mejores resultados** (más AVAC, tratados desde una línea de base más saludable) y a menudo **menores costes de tratamiento** (el tratamiento en fase temprana es menos intensivo que el rescate en fase tardía). Este mecanismo es lo que eleva las "vías más rápidas" de una comodidad operativa a un imperativo clínico y económico — y es la razón profunda por la que el [coste del retraso](../cost-of-delay/) se aplica al software clínico.

## Las matemáticas

```
Valor de la intervención más temprana (por paciente) =
    [Coste_tardío − Coste_temprano]                 (compensación del coste de tratamiento)
  + [AVAC_temprano − AVAC_tardío] × λ                (ganancia de salud × umbral)
  × P(progresión durante el retraso)                 (ponderación por probabilidad)
```

La ponderación por probabilidad es esencial: no todo paciente en espera progresa. Modele la probabilidad de transición por unidad de tiempo (a partir de datos de historia natural), no el peor escenario. Después descuente: los costes evitados en años lejanos valen menos hoy ([descuento](../discounting-and-time-preference/)) — y observe que la mayoría de la intervención temprana es coste-*efectiva* en lugar de coste-*ahorradora* (véase [economía de la prevención](../prevention-economics/)).

## Ejemplo práctico

Lista de espera de cribado de retinopatía diabética: 4,000 pacientes, 6 meses de retraso. La graduación asistida por IA triplica el rendimiento y despeja la cola en 8 semanas. Historia natural: ~2 % de los pacientes en espera/año progresa a estadios que amenazan la visión mientras no se revisan.

```
Eventos de progresión evitados por ~4 meses de aceleración:
  4,000 × 2% × (4/12) ≈ 27 pacientes

Por progresión evitada:
  compensación de tratamiento (terapia intravítrea vs láser) ≈ £4,000
  ganancia de AVAC (visión preservada) ≈ 0.8 AVAC × £20,000 = £16,000

Valor ≈ 27 × (4,000 + 16,000) ≈ £540,000 — de una sola lista despejada una vez,
antes de contar la ganancia de rendimiento permanente.
```

## Conexión con la ingeniería de software

Dos transferencias. Primero, la obvia: el software que acelera las vías diagnósticas y de tratamiento (triaje, graduación por IA, enrutamiento de resultados) se monetiza mediante este mismo modelo — y el modelo indica qué vía acelerar: la de curva de progresión más pronunciada, no la cola más larga. Segundo, el espejo de ingeniería: **los defectos también progresan**. Un error detectado en el diseño cuesta una conversación; en producción cuesta un incidente; la curva de coste del "shift-left" (10–100× según la fase) es un modelo de progresión, y la versión honesta lleva la misma salvedad — la detección temprana suele ser coste-efectiva, no dinero gratis, porque las revisiones y las pruebas tienen costes reales y la mayoría de los problemas detectados nunca habrían progresado.

## Escollos

- **Progresión del peor caso asumida para todos** — la ponderación por probabilidad es la diferencia entre análisis y activismo.
- **Sesgo de tiempo de anticipación (lead-time bias)**: detectar la enfermedad antes sin cambiar los resultados parece un beneficio pero no lo es; la afirmación es la *intervención efectiva* más temprana, no la detección temprana por sí sola (véase [economía del cribado](../screening-economics/)).
- **Doble contabilización** con reclamaciones de lista de espera y de RTT basadas en la misma aceleración — una mejora de la vía, un conjunto de beneficios, asignado una sola vez.

## Fuentes

- Cohen JT, Neumann PJ, Weinstein MC. "Does preventive care save money?" NEJM 2008. <https://www.nejm.org/doi/full/10.1056/NEJMp0708558>
- NHS England, programa de cribado ocular diabético. <https://www.gov.uk/topic/population-screening-programmes/diabetic-eye>
