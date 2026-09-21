# Ahorros Liberadores de Efectivo frente a No Liberadores de Efectivo

Los ahorros liberadores de efectivo reducen el gasto real — una línea de presupuesto se encoge. Los ahorros no liberadores de efectivo liberan tiempo o capacidad que se *reutiliza* en lugar de capitalizarse. Los directores financieros de sistemas de salud tratan estas como especies diferentes, y tú también deberías.

## Por qué importa

Esta es la prueba de honestidad más aguda aplicada a cualquier caso de negocio digital en un sistema de salud nacional. Los marcos de beneficios del NHS categorizan explícitamente cada beneficio reclamado como liberador de efectivo, no liberador de efectivo o cualitativo. La mayoría de los "ahorros" de salud digital — minutos de clínico ahorrados por paciente, documentación más rápida — no liberan efectivo: valiosos, pero no reducen el déficit. Un CFO de fideicomiso que enfrenta una brecha de financiación solo puede gastar efectivo. Ver también [ahorros duros liberadores de efectivo](../ahorros-duros-liberadores-de-efectivo-defensa-del-déficit/).

## El cálculo

```
Ahorro liberador de efectivo   = línea de presupuesto antes − línea de presupuesto después
                          (debe ser extraíble: un contrato cancelado, sala cerrada,
                           gasto de agencia reducido, compra evitada)

Valor no liberador de efectivo = tiempo liberado × coste unitario de ese tiempo
                          (tasado a coste de oportunidad; el dinero NO es extraíble)
```

El mismo evento físico (una hora ahorrada) cae en una categoría u otra según lo que pase después:

```
hora ahorrada → turno de horas extra/agencia cancelado        → libera efectivo
hora ahorrada → el clínico atiende a un paciente más en espera → no libera efectivo (capacidad)
hora ahorrada → absorbida en holgura, nada cambia    → ningún beneficio en absoluto
```

## Ejemplo resuelto

El software ahorra a cada una de 100 enfermeras 30 minutos por turno. Eso es 100 × 0,5 × 5 turnos/semana × 46 semanas ≈ 11.500 horas/año. A un coste de empleador de Banda 5 de ~£25/hora, el titular tentador es £287.500/año.

La división honesta:

- El 20% del tiempo cae donde las salas actualmente pagan prima de banco/agencia para cubrir excesos de documentación: 2.300 horas × £35 tarifa de agencia = **£80.500 liberadores de efectivo** (turnos genuinamente no reservados).
- El 60% se redespliega a atención directa al paciente: 6.900 horas × £25 = **£172.500 de capacidad no liberadora de efectivo** — valor real, informado por separado, nunca llamado "ahorros".
- El 20% se disipa en descansos e interrupciones: **£0**. Reclamarlo sería ficción.

Un caso de negocio que presenta £80,5k de efectivo + £172,5k de capacidad es creíble. Uno que presenta £287,5k de "ahorros" es rechazado por el primer contable que lo lee.

## Conexión con la ingeniería de software

Una lógica idéntica gobierna el ROI del asistente de codificación con IA: "30 minutos por desarrollador por día" es capacidad no liberadora de efectivo a menos que la plantilla, el gasto en contratistas o el coste de la nube realmente caigan. Informa las categorías por separado:

- Libera efectivo: contrataciones de contratistas canceladas, licencias de herramientas desmanteladas, gasto en la nube reducido.
- Capacidad: funcionalidades entregadas antes (valor vía [coste de retraso](../coste-de-retraso/)), retraso acumulado reducido.
- Nada: minutos ahorrados que se fragmentan en cambio de contexto.

También rastrea *a dónde fue realmente el tiempo liberado* — la realización de beneficios ([benefits-realization.md](../realización-de-beneficios/)) existe porque las ganancias de capacidad reclamadas frecuentemente se evaporan en la auditoría.

## Errores comunes

- **Multiplicar minutos por salario y llamarlo ahorros** — el pecado canónico.
- **Valorar el tiempo liberado al coste promedio cargado** cuando el uso marginal de ese tiempo es de bajo valor — ver [coste marginal frente a promedio](../coste-marginal-frente-a-promedio/).
- **Contar la misma hora dos veces**: como efectivo (turno evitado) y como capacidad (pacientes extra atendidos).

## Fuentes

- Guía de caso de negocio de conectividad de NHS Digital, caso económico (categorías de beneficio). <https://digital.nhs.uk/services/networks-and-connectivity-transformation-frontline-capabilities/connectivity-hub/advice-and-guidance/making-the-business-case-for-connectivity-infrastructure-investment---guidance/economic-case>
- NHS England, productividad del NHS. <https://www.england.nhs.uk/long-read/nhs-productivity/>
