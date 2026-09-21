# Retención y Abandono

La retención mide qué fracción de una cohorte de usuarios sigue activa N días después de empezar (curvas D1/D7/D30); el abandono es su complemento. La línea base brutal de la salud digital: **aproximadamente el 90% de los usuarios de aplicaciones de salud abandonan dentro de 30 días** — la retención D30 de la salud digital ronda el ~3–4% frente a un promedio de todas las aplicaciones de ~6%.

## Por qué importa

Eysenbach lo nombró en 2005: la **ley de atrición** — perder usuarios a altas tasas es una propiedad estructural intrínseca de las intervenciones de eSalud, no un error de implementación, con la atrición en ensayos de eSalud superando rutinariamente el 50%. La consecuencia económica es total: la retención define la *ventana de tratamiento* dentro de la cual se puede entregar cualquier beneficio, y la [economía unitaria](../economía-unitaria-de-aplicaciones-de-salud/) — el CAC pagado por usuario que se queda 12 días no entrega ni LTV ni AVAC. Cualquier modelo económico para un producto de salud de consumo que no pondere los beneficios por la curva de retención está describiendo un producto que no existe.

## El cálculo

```
Retención_Dn = usuarios activos el día n / tamaño de cohorte × 100
Tasa de abandono   = usuarios perdidos en el periodo / usuarios al inicio del periodo × 100

Ponderación de beneficio (la mejora de economía de la salud):
  beneficio esperado por usuario adquirido = Σ_t retención(t) × tasa de beneficio(t)
  ≈ área bajo la curva de retención × beneficio por tiempo
  — NO beneficio de ensayo × 100% de usuarios adquiridos

Coste por usuario retenido en D30 = CAC / retención D30
  (a 4% D30, un CAC de £5 es realmente £125 por usuario retenido)
```

## Ejemplo resuelto

Una aplicación de salud mental: el ensayo mostró 0,02 AVAC ganados por usuario que completa 8 semanas. Cohorte de despliegue de 100.000 descargas, retención D7 25%, D30 8%, semana-8 4%:

```
Completadores          = 100.000 × 0,04 = 4.000
AVAC entregados     = 4.000 × 0,02 = 80  (no 100.000 × 0,02 = 2.000)
A £20.000/AVAC     = £1,6M de valor de salud (no £40M)

Valor de salud por descarga = £16 — la cifra que debería fijar lo que
pagará un pagador por descarga, y es el 4% de la reclamación ingenua.
Caso de mejora de retención: mover la finalización de semana-8 de 4% → 6% añade
40 AVAC/año ≈ £800k — la ingeniería de retención ES producción de salud.
```

## Conexión con la ingeniería de software

La retención es la métrica donde la ingeniería de producto fabrica de forma más directa valor de salud, según la aritmética anterior. Las prácticas que la mueven son ordinarias: tiempo hasta el primer valor de la incorporación, diseño de reenganche, rendimiento y, crucialmente, la **finalización de dosis planificada** — un programa con un final definido (8 semanas, luego graduación) debería medir la *finalización*, no el DAU perpetuo, alineando la métrica con el modelo clínico en lugar del modelo de atención financiado por anuncios. El análisis de supervivencia es el conjunto de herramientas correcto (la misma matemática de Kaplan-Meier que [años de vida ganados](../años-de-vida-ganados/)); segmenta las curvas por canal de adquisición, ya que la mezcla de canal cambia la retención más que la mayoría de las funcionalidades.

## Errores comunes

- **Blanqueo inverso de intención-de-tratar**: los ensayos informan sobre completadores; la economía de despliegue debe contar a todos los adquiridos (la advertencia central de Eysenbach).
- **Teatro de retención**: usuarios "activos" impulsados por notificaciones que nunca realizan la acción terapéutica (ver [métricas de compromiso](../métricas-de-compromiso/)).
- **Comparar curvas entre definiciones**: "activo" definido como abrir frente a acción significativa cambia el D30 por múltiplos.
- **Ignorar quién abandona**: si los más enfermos abandonan más rápido, los beneficios por usuario caen a medida que mejora la retención entre los sanos — combina las curvas con la mezcla de casos (ver [alcance y equidad](../alcance-y-equidad/)).

## Fuentes

- Eysenbach G. "The law of attrition." JMIR 2005;7(1):e11. <https://www.jmir.org/2005/1/e11/>
- Puntos de referencia de retención de aplicaciones móviles. <https://uxcam.com/blog/mobile-app-retention-benchmarks/>
- Puntos de referencia de productos sanitarios. <https://userpilot.com/blog/healthcare-product-metrics-benchmark-report/>
