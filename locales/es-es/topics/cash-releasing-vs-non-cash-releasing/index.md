# Ahorros liberadores de efectivo frente a ahorros no liberadores de efectivo

Los ahorros liberadores de efectivo reducen el gasto real — una línea presupuestaria se reduce. Los ahorros no liberadores de efectivo liberan tiempo o capacidad que se *reutiliza* en lugar de contabilizarse como ahorro. Los directores financieros de los sistemas de salud tratan estas dos cosas como especies distintas, y tú deberías hacer lo mismo.

## Por qué importa

Esta es la prueba de honestidad más exigente que se aplica a cualquier caso de negocio digital en un servicio nacional de salud. Los marcos de beneficios del NHS clasifican explícitamente cada beneficio reclamado como liberador de efectivo, no liberador de efectivo, o cualitativo. La mayoría de los "ahorros" de la salud digital — minutos de personal clínico ahorrados por paciente, documentación más rápida — son no liberadores de efectivo: valiosos, pero no reducen el déficit. Un director financiero de un trust que se enfrenta a un desfase de financiación solo puede gastar efectivo. Véase también [ahorros duros liberadores de efectivo](../hard-cash-releasing-savings-deficit-defence/).

## Las matemáticas

```
Ahorro liberador de efectivo   = línea presupuestaria antes − línea presupuestaria después
                          (debe ser extraíble: un contrato cancelado, una planta cerrada,
                           un gasto en agencias reducido, una compra evitada)

Valor no liberador de efectivo = tiempo liberado × coste unitario de ese tiempo
                          (valorado al coste de oportunidad; el dinero NO es extraíble)
```

El mismo evento físico (una hora ahorrada) cae en una categoría u otra según lo que ocurra después:

```
hora ahorrada → turno de horas extra/agencia cancelado        → liberador de efectivo
hora ahorrada → el clínico atiende a un paciente más en espera → no liberador de efectivo (capacidad)
hora ahorrada → absorbida en el margen, nada cambia            → ningún beneficio en absoluto
```

## Ejemplo resuelto

Un software ahorra a cada una de 100 enfermeras 30 minutos por turno. Eso son 100 × 0.5 × 5 turnos/semana × 46 semanas ≈ 11,500 horas/año. A un coste laboral de Banda 5 de ~£25/hora, el titular tentador es £287,500/año.

El reparto honesto:

- El 20% del tiempo cae donde las plantas actualmente pagan la prima de personal de banco/agencia para cubrir retrasos en la documentación: 2,300 horas × £35 tarifa de agencia = **£80,500 liberadores de efectivo** (turnos que genuinamente dejan de reservarse).
- El 60% se redespliega en atención directa al paciente: 6,900 horas × £25 = **£172,500 de capacidad no liberadora de efectivo** — valor real, que se reporta por separado, nunca llamado "ahorro".
- El 20% se disipa en pausas e interrupciones: **£0**. Reclamarlo sería ficción.

Un caso de negocio que presenta £80.5k de efectivo + £172.5k de capacidad es creíble. Uno que presenta £287.5k de "ahorros" es rechazado por el primer contable que lo lea.

## Conexión con la ingeniería de software

La misma lógica rige el ROI de los asistentes de codificación con IA: "30 minutos por desarrollador al día" es capacidad no liberadora de efectivo a menos que la plantilla, el gasto en contratistas o el coste de la nube realmente disminuyan. Reporta las categorías por separado:

- Liberador de efectivo: contratos de contratistas cancelados, licencias de herramientas dadas de baja, gasto en la nube reducido.
- Capacidad: funcionalidades entregadas antes (valor vía [coste de la demora](../cost-of-delay/)), reducción del backlog.
- Nada: minutos ahorrados que se fragmentan en cambios de contexto.

Haz seguimiento también de *a dónde fue realmente el tiempo liberado* — la realización de beneficios ([benefits-realization.md](../benefits-realization/)) existe porque las ganancias de capacidad reclamadas se evaporan con frecuencia al auditarlas.

## Escollos

- **Multiplicar minutos por salario y llamarlo ahorro** — el pecado canónico.
- **Valorar el tiempo liberado al coste medio cargado** cuando el uso marginal de ese tiempo es de bajo valor — véase [coste marginal frente a coste medio](../marginal-vs-average-cost/).
- **Contar la misma hora dos veces**: como efectivo (turno evitado) y como capacidad (más pacientes atendidos).

## Fuentes

- Guía de casos de negocio de conectividad de NHS Digital, caso económico (categorías de beneficios). <https://digital.nhs.uk/services/networks-and-connectivity-transformation-frontline-capabilities/connectivity-hub/advice-and-guidance/making-the-business-case-for-connectivity-infrastructure-investment---guidance/economic-case>
- NHS England, productividad del NHS. <https://www.england.nhs.uk/long-read/nhs-productivity/>
