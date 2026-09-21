# Retención y abandono (churn)

La retención mide qué fracción de una cohorte de usuarios sigue activa N días después de empezar (curvas D1/D7/D30); el abandono (churn) es su complemento. La brutal línea base de la salud digital: **aproximadamente el 90% de los usuarios de aplicaciones de salud abandona en 30 días** — la retención a D30 en salud digital ronda el 3-4% frente a una media del ~6% para todas las aplicaciones.

## Por qué importa

Eysenbach lo bautizó en 2005: la **ley de la atrición** — perder usuarios a un ritmo elevado es una propiedad estructural e intrínseca de las intervenciones de eSalud, no un fallo de implementación, con una atrición en los ensayos de eSalud que supera habitualmente el 50%. La consecuencia económica es total: la retención define la *ventana de tratamiento* dentro de la cual puede entregarse cualquier beneficio, y la [economía unitaria](../health-app-unit-economics/) — el CAC pagado por un usuario que permanece 12 días no genera ni LTV ni QALY. Cualquier modelo económico para un producto de salud de consumo que no pondere los beneficios según la curva de retención está describiendo un producto que no existe.

## Las matemáticas

```
Retención_Dn = usuarios activos el día n / tamaño de la cohorte × 100
Tasa de abandono = usuarios perdidos en el periodo / usuarios al inicio del periodo × 100

Ponderación del beneficio (el movimiento propio de la economía de la salud):
  beneficio esperado por usuario adquirido = Σ_t retención(t) × tasa de beneficio(t)
  ≈ área bajo la curva de retención × beneficio por unidad de tiempo
  — NO beneficio del ensayo × 100% de los usuarios adquiridos

Coste por usuario retenido a D30 = CAC / retención a D30
  (con un 4% a D30, un CAC de 5£ son en realidad 125£ por usuario retenido)
```

## Ejemplo práctico

Una aplicación de salud mental: el ensayo mostró 0.02 QALY ganados por usuario que completaba 8 semanas. Cohorte de despliegue de 100,000 descargas, retención D7 25%, D30 8%, semana 8 4%:

```
Usuarios que completan  = 100,000 × 0.04 = 4,000
QALY entregados         = 4,000 × 0.02 = 80  (no 100,000 × 0.02 = 2,000)
A 20,000£/QALY           = 1.6 M£ de valor en salud (no 40 M£)

Valor en salud por descarga = 16£ — la cifra que debería fijar cuánto pagará
un pagador por descarga, y es el 4% de la reclamación ingenua.
Caso de mejora de la retención: elevar la finalización en la semana 8 del 4% al 6%
añade 40 QALY/año ≈ 800.000£ — la ingeniería de la retención ES producción de salud.
```

## Conexión con la ingeniería de software

La retención es la métrica donde la ingeniería de producto fabrica más directamente valor en salud, según la aritmética anterior. Las prácticas que la mueven son ordinarias: el tiempo hasta el primer valor en la incorporación, el diseño de reenganche, el rendimiento y, de forma crucial, la **finalización de la dosis planificada** — un programa con un final definido (8 semanas y luego graduación) debería medir la *finalización*, no el DAU perpetuo, alineando la métrica con el modelo clínico en lugar de con el modelo de atención financiado por publicidad. El análisis de supervivencia es el conjunto de herramientas adecuado (las mismas matemáticas de Kaplan-Meier que [los años de vida ganados](../life-years-gained/)); segmenta las curvas por canal de adquisición, ya que la mezcla de canales cambia la retención más que la mayoría de las funcionalidades.

## Escollos

- **Blanqueo inverso de la intención de tratar**: los ensayos reportan a quienes completan; la economía del despliegue debe contar a todos los adquiridos (la advertencia central de Eysenbach).
- **Teatro de retención**: usuarios "activos" impulsados por notificaciones que nunca realizan la acción terapéutica (véase [métricas de engagement](../engagement-metrics/)).
- **Comparar curvas entre definiciones**: definir "activo" como abrir la app frente a realizar una acción significativa cambia el D30 por múltiplos.
- **Ignorar quién abandona**: si los más enfermos abandonan más rápido, los beneficios por usuario caen a medida que mejora la retención entre los sanos; combina las curvas con el case-mix (véase [alcance y equidad](../reach-and-equity/)).

## Fuentes

- Eysenbach G. "The law of attrition." JMIR 2005;7(1):e11. <https://www.jmir.org/2005/1/e11/>
- Referencias de retención de aplicaciones móviles. <https://uxcam.com/blog/mobile-app-retention-benchmarks/>
- Referencias de métricas de productos sanitarios. <https://userpilot.com/blog/healthcare-product-metrics-benchmark-report/>
