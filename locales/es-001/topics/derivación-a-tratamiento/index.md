# Derivación a Tratamiento (RTT)

La derivación a tratamiento es el tiempo transcurrido desde la derivación de un médico de cabecera hasta el inicio del tratamiento dirigido por consultor. La Constitución del NHS establece el estándar: **el 92% de los pacientes deberían comenzar el tratamiento dentro de 18 semanas**. El RTT es la métrica operativa individual más visible políticamente en el NHS inglés.

## Por qué importa

Los fideicomisos que no cumplen los objetivos de RTT enfrentan escrutinio regulatorio, intervención y daño reputacional; la lista de espera nacional es una cifra de primera plana. Cada semana que un paciente espera es salud perdida (esperar en un peor estado de salud — ver la matemática de AVAC abajo) y a menudo coste ganado (las condiciones se deterioran; ver [intervención más temprana](../intervención-más-temprana/)). El software que ahorra tiempo en cualquier punto de la vía derivación-a-tratamiento — triaje, tiempo de respuesta de diagnóstico, capacidad de clínica, programación — mitiga directamente las consecuencias operativas y financieras de fallar el estándar, por lo que el impacto en RTT es una línea de beneficio de primera clase en los casos de negocio digitales del NHS.

## El cálculo

```
Rendimiento RTT = pacientes tratados dentro de 18 semanas / total tratados × 100
Coste de salud del tiempo de espera por paciente = duración de espera × (utilidad_tratado − utilidad_esperando)

Vista de vía: RTT = Σ duraciones de etapa (triaje de derivación → primera cita →
diagnóstico → decisión → tratamiento) — mejora la cola más larga, no la etapa
más ocupada (ver flow-metrics.md)
```

## Ejemplo resuelto

Una especialidad trata a 5.000 pacientes de vía/año; espera media 24 semanas; utilidad de espera 0,68 frente a tratado 0,80.

El triaje digital más los protocolos directo-a-prueba eliminan 5 semanas de cola pura:

```
Ganancia de AVAC = 5.000 × (5/52) × (0,80 − 0,68) = 57,7 AVAC/año
Monetizado a £20.000–£30.000/AVAC (ver willingness-to-pay-thresholds.md):
  ≈ £1,15M–£1,73M/año de valor de salud
```

— más el fideicomiso pasa de incumplir a cumplir el estándar de 18 semanas, lo que tiene un valor de gobernanza que ninguna hoja de cálculo captura completamente.

## Conexión con la ingeniería de software

El RTT es una **métrica de tiempo de espera sobre una cola multietapa** — la versión hospitalaria del tiempo de espera de commit a producción (ver [métricas DORA](../métricas-dora/)). El método de mejora es idéntico: instrumenta cada etapa, encuentra dónde se acumula el tiempo de calendario (son casi siempre las transferencias y las colas, no el trabajo clínico), y elimina los estados de espera. Ganancias de software típicas: e-triaje que enruta derivaciones en horas en lugar de lotes semanales, envío push de resultados diagnósticos en lugar de citas de seguimiento, y criterios directo-a-prueba automatizados. Tasa la mejora con el [coste de retraso](../coste-de-retraso/) denominado en AVAC/semana.

## Errores comunes

- **Mejorar una etapa que no es la restricción** — recortar las esperas de primera cita mientras las colas de diagnóstico crecen solo mueve el estancamiento.
- **Manipulación**: los reinicios de vía y las pausas de reloj pueden mejorar el RTT informado sin tratar a nadie antes; audita la distribución subyacente.
- **Reclamar toda la mejora de vía** para una herramienta cuando varios cambios llegaron juntos — la atribución necesita un comparador.

## Fuentes

- NHS England, estadísticas de tiempos de espera RTT. <https://www.england.nhs.uk/statistics/statistical-work-areas/rtt-waiting-times/>
- NHS England, plan de recuperación de atención electiva. <https://www.england.nhs.uk/coronavirus/publication/delivery-plan-for-tackling-the-covid-19-backlog-of-elective-care/>
