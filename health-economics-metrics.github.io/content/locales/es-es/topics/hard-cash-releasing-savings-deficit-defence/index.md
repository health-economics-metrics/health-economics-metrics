# Ahorros Duros que Liberan Efectivo (Defensa del Déficit)

Los ahorros duros que liberan efectivo son partidas que un hospital puede **eliminar activamente del presupuesto del mes siguiente** gracias a su software. Para un contable financiero estricto — y para un trust que opera en déficit — esta es la única clase de beneficio que cuenta plenamente.

## Por qué importa

Muchos trusts del NHS operan bajo planes de recuperación de déficit con un escrutinio intenso de cada línea de gasto. En ese entorno, los beneficios de capacidad y las mejoras de calidad — por reales que sean — no cierran la brecha; solo el efectivo lo hace. Un producto de software que pueda demostrar que elimina partidas presupuestarias se *autofinancia desde la perspectiva del director financiero*, lo que transforma la contratación: la conversación deja de ser "¿podemos permitírnoslo?" y pasa a ser "¿podemos permitirnos no tenerlo?". Este documento es el extremo afilado, orientado al déficit, de [ahorros que liberan efectivo frente a los que no lo liberan](../cash-releasing-vs-non-cash-releasing/).

## Las matemáticas

El objetivo de efectivo duro más fiable del NHS es el **personal temporal a tarifa premium**. Los trusts cubren huecos con personal interno de "Bank" (pagado a tarifas más o menos estándar) y personal externo de "Agency" (a menudo 2–3× las tarifas de Agenda for Change, con topes que se incumplen con frecuencia para puestos escasos).

```
Ahorro duro = turnos premium evitados × (tarifa premium − tarifa sustantiva)
            + horas extra evitadas × prima de horas extra
            + contratos externos cancelados × valor del contrato

Requisito del mecanismo: nombrar la partida presupuestaria específica y al
gestor que confirmará su reducción. Si nadie puede señalar la partida, no
es efectivo duro.
```

## Ejemplo práctico

Una enfermera de Banda 6 pierde ~1 hora/turno por carga administrativa; la documentación se desborda habitualmente más allá del final del turno hasta las horas extra, y las salas reservan cobertura extra de Bank para ponerse al día con la documentación.

El software devuelve esa hora al turno programado en 300 enfermeras:

```
Horas extra evitadas: 300 enfermeras × 2.5 h extra pagadas/semana × £8 prima × 46 semanas
                    ≈ £276,000/año
Turnos de Bank/agencia: 15 turnos de recuperación/semana × £180 prima × 52
                    ≈ £140,400/año
Efectivo duro total ≈ £416,000/año frente a un coste de licencia de ~£150,000
```

Cada libra es auditable contra los sistemas de e-rostering y nómina — que es exactamente cómo debe evidenciarse el beneficio, mensualmente, mediante la [realización de beneficios](../benefits-realization/). (Los modelos de fuerza laboral del NHS publicados han reclamado ratios de hasta £11+ ahorradas por cada £1 gastada en este mecanismo; trate cualquier ratio de ese tipo como una hipótesis para los datos de rostering de *su* trust, no como un hecho trasladable.)

## Conexión con la ingeniería de software

Los equivalentes de ingeniería de la prima de agencia son las compras de emergencia de la propia organización: las tarifas diarias de contratistas que cubren huecos de entrega, las horas extra impulsadas por incidentes, los contratos de soporte urgente y el pánico por precios spot de la nube. El software de productividad que reclama efectivo duro debería apuntar a esas partidas con la misma disciplina — nombrar la partida presupuestaria, el propietario y el mes en que se reduce. Todo lo demás que entrega es capacidad ([capacidad generadora de valor](../value-generating-capacity-operational-turnaround/)) o calidad: real, valiosa, y distinta.

## Escollos

- **Llamar "ahorros" a la capacidad** — el matador de credibilidad instantáneo con finanzas; véase la taxonomía en [ahorros que liberan efectivo frente a los que no lo liberan](../cash-releasing-vs-non-cash-releasing/).
- **Ratios de modelos de proveedor presentados como hecho local** (el problema del £11:£1) — reconstruya el modelo sobre los propios datos de rostering del trust.
- **Confusión entre puntual y recurrente**: un contrato cancelado ahorra su valor una vez al año, no una vez; un puesto eliminado ahorra salario solo mientras siga eliminado.

## Fuentes

- NHS England, reducción del gasto en agencia en el NHS. <https://www.england.nhs.uk/long-read/reducing-agency-spend-in-the-nhs/>
- Guía de caso de negocio de NHS Digital, caso económico. <https://digital.nhs.uk/services/networks-and-connectivity-transformation-frontline-capabilities/connectivity-hub/advice-and-guidance/making-the-business-case-for-connectivity-infrastructure-investment---guidance/economic-case>
