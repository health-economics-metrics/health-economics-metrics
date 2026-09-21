# Ahorros Duros Liberadores de Efectivo (Defensa del Déficit)

Los ahorros duros liberadores de efectivo son partidas que un hospital puede eliminar activamente **del presupuesto del próximo mes** debido a tu software. Para un contable financiero estricto — y para un fideicomiso que gestiona un déficit — esta es la única clase de beneficio que cuenta completamente.

## Por qué importa

Muchos fideicomisos del NHS operan bajo planes de recuperación de déficit con un escrutinio intenso de cada línea de gasto. En ese entorno, los beneficios de capacidad y las mejoras de calidad — por reales que sean — no cierran la brecha; solo lo hace el efectivo. Un producto de software que puede probar que elimina partidas de presupuesto se *autofinancia desde la perspectiva del CFO*, lo que transforma la adquisición: la conversación deja de ser "¿podemos permitírnoslo?" y se convierte en "¿podemos permitirnos no hacerlo?". Este documento es el extremo agudo frente al déficit de [ahorros liberadores de efectivo frente a no liberadores de efectivo](../ahorros-liberadores-de-efectivo-frente-a-no-liberadores-de-efectivo/).

## El cálculo

El objetivo de efectivo duro más fiable del NHS es el **personal temporal de tarifa premium**. Los fideicomisos cubren las brechas con personal interno "Bank" (pagado a tarifas casi estándar) y personal externo de "Agencia" (a menudo 2-3× las tarifas de Agenda for Change, limitadas pero frecuentemente incumplidas para roles escasos).

```
Ahorro duro = turnos premium evitados × (tarifa premium − tarifa sustantiva)
            + horas extra evitadas × prima de horas extra
            + contratos externos cancelados × valor del contrato

Requisito de mecanismo: nombra la línea de presupuesto específica y el gestor
que confirmará su reducción. Si nadie puede señalar la línea, no es efectivo duro.
```

## Ejemplo resuelto

Una enfermera de Banda 6 pierde ~1 hora/turno en gastos administrativos generales; la documentación regularmente se extiende más allá del fin del turno hasta las horas extra, y las salas reservan cobertura extra de Bank para ponerse al día con la documentación.

El software devuelve esa hora al turno programado a través de 300 enfermeras:

```
Horas extra evitadas:   300 enfermeras × 2,5 h extra pagadas/semana × £8 prima × 46 semanas
                    ≈ £276.000/año
Turnos de bank/agencia: 15 turnos de recuperación/semana × £180 prima × 52
                    ≈ £140.400/año
Total de efectivo duro     ≈ £416.000/año frente a un coste de licencia de ~£150.000
```

Cada libra es auditable contra los sistemas de programación electrónica y nómina — que es exactamente cómo debería demostrarse el beneficio, mensualmente, a través de la [realización de beneficios](../realización-de-beneficios/). (Los modelos de fuerza laboral del NHS publicados han reclamado ratios de hasta £11+ ahorrados por cada £1 gastado en este mecanismo; trata cualquier ratio así como una hipótesis para los datos de programación de *tu* fideicomiso, no como un hecho portable.)

## Conexión con la ingeniería de software

Los equivalentes de ingeniería de la prima de agencia son las compras de emergencia propias de la organización: tarifas diarias de contratistas que cubren brechas de entrega, horas extra impulsadas por incidentes, contratos de soporte acelerado y pánico de precio spot en la nube. El software de productividad que reclama efectivo duro debería apuntar a esas líneas con la misma disciplina — nombra la línea de presupuesto, el propietario y el mes en que se reduce. Todo lo demás que entrega es capacidad ([capacidad generadora de valor](../capacidad-generadora-de-valor-cambio-operativo/)) o calidad: real, valiosa y diferente.

## Errores comunes

- **Llamar "ahorros" a la capacidad** — el matamoscas instantáneo de credibilidad con finanzas; ver la taxonomía en [ahorros liberadores de efectivo frente a no liberadores de efectivo](../ahorros-liberadores-de-efectivo-frente-a-no-liberadores-de-efectivo/).
- **Ratios de modelo de proveedor presentados como hecho local** (el problema £11:£1) — reconstruye el modelo sobre los datos de programación propios del fideicomiso.
- **Confusión único-frente-recurrente**: un contrato cancelado ahorra su valor una vez al año, no una sola vez; un puesto eliminado ahorra salario solo mientras permanezca eliminado.

## Fuentes

- NHS England, reduciendo el gasto en agencias en el NHS. <https://www.england.nhs.uk/long-read/reducing-agency-spend-in-the-nhs/>
- Guía de caso de negocio de NHS Digital, caso económico. <https://digital.nhs.uk/services/networks-and-connectivity-transformation-frontline-capabilities/connectivity-hub/advice-and-guidance/making-the-business-case-for-connectivity-infrastructure-investment---guidance/economic-case>
