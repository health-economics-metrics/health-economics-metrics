# Derivación a Tratamiento (RTT)

La derivación a tratamiento (referral to treatment, RTT) es el tiempo transcurrido desde la derivación de un médico de cabecera hasta el inicio del tratamiento dirigido por un especialista. La Constitución del NHS fija el estándar: **el 92% de los pacientes debe iniciar el tratamiento en un plazo de 18 semanas**. RTT es la métrica operativa individual más visible políticamente en el NHS inglés.

## Por qué importa

Los trusts que incumplen los objetivos de RTT se enfrentan a escrutinio regulatorio, intervención y daño reputacional; la lista de espera nacional es una cifra de portada. Cada semana que espera un paciente es salud perdida (esperar en un peor estado de salud; véanse las matemáticas de QALY más abajo) y a menudo coste ganado (las enfermedades se deterioran; véase [intervención más temprana](../earlier-intervention/)). El software que ahorra tiempo en cualquier punto de la vía de derivación a tratamiento — triaje, tiempo de respuesta diagnóstica, capacidad de consulta, programación de citas — mitiga directamente las consecuencias operativas y financieras de incumplir el estándar, razón por la cual el impacto en RTT es una línea de beneficio de primer nivel en los casos de negocio digitales del NHS.

## Las matemáticas

```
Rendimiento RTT = pacientes tratados dentro de 18 semanas / total tratados × 100
Coste en salud del tiempo de espera por paciente = duración de la espera × (utilidad_tratado − utilidad_esperando)

Visión de la vía: RTT = Σ duraciones de etapa (triaje de derivación → primera cita →
diagnóstico → decisión → tratamiento) — mejora la cola más larga, no la etapa
más ocupada (véase flow-metrics.md).
```

## Ejemplo trabajado

Una especialidad trata a 5,000 pacientes de la vía/año; espera media de 24 semanas; utilidad en espera 0.68 frente a tratado 0.80.

El triaje digital junto con protocolos de "directo a prueba" eliminan 5 semanas de cola pura:

```
Ganancia QALY = 5,000 × (5/52) × (0.80 − 0.68) = 57.7 QALYs/año
Monetizado a 20,000–30,000 £/QALY (véase willingness-to-pay-thresholds.md):
  ≈ 1.15 M–1.73 M £/año de valor en salud
```

— además, el trust pasa de incumplir a cumplir el estándar de 18 semanas, lo que tiene un valor de gobernanza que ninguna hoja de cálculo captura por completo.

## Conexión con la ingeniería de software

RTT es una **métrica de lead time sobre una cola multietapa** — la versión hospitalaria del lead time de commit a producción (véase [métricas DORA](../dora-metrics/)). El método de mejora es idéntico: instrumenta cada etapa, encuentra dónde se acumula el tiempo de calendario (casi siempre en traspasos y colas, no en el trabajo clínico), y elimina los estados de espera. Ganancias típicas del software: e-triaje que enruta derivaciones en horas en lugar de en lotes semanales, envío proactivo de resultados diagnósticos en lugar de citas de seguimiento, y criterios automatizados de "directo a prueba". Valora la mejora con el [coste del retraso](../cost-of-delay/) denominado en QALYs/semana.

## Errores habituales

- **Mejorar una etapa que no es la restricción** — reducir las esperas de primera cita mientras las colas de diagnóstico crecen simplemente traslada la acumulación.
- **Manipulación**: los reinicios de vía y las pausas de reloj pueden mejorar el RTT reportado sin tratar a nadie antes; audita la distribución subyacente.
- **Reivindicar toda la mejora de la vía** para una sola herramienta cuando varios cambios se implantaron juntos — la atribución necesita un comparador.

## Fuentes

- NHS England, RTT waiting times statistics. <https://www.england.nhs.uk/statistics/statistical-work-areas/rtt-waiting-times/>
- NHS England, elective care recovery plan. <https://www.england.nhs.uk/coronavirus/publication/delivery-plan-for-tackling-the-covid-19-backlog-of-elective-care/>
