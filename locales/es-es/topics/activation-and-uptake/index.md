# Activación y adopción

La tasa de activación es la proporción de altas que llegan al primer valor significativo (la acción "aha" — primera lectura registrada, primera lección completada). La adopción (uptake) es la versión poblacional: la proporción de la población *elegible* que adopta la solución en cualquier medida. Juntas forman las puertas de entrada del embudo de valor: adquisición → adopción → activación → [retención](../retention-and-churn/) → resultado.

## Por qué importa

Los usuarios no activados son puro coste: gasto de adquisición, aprovisionamiento, superficie de soporte — cero valor clínico. Los datos de referencia sitúan la activación del software sanitario *por debajo* de la media entre sectores (≈24% frente a ≈37% de activación de nuevos usuarios en un conjunto de referencia de SaaS; finalización de listas de verificación de incorporación ~20%), lo que refleja una incorporación más pesada (identidad, consentimiento, seguridad clínica). La adopción implica lo que está en juego a nivel poblacional: en el [marco RE-AIM](../reach-and-equity/), el impacto en salud pública ≈ alcance × efectividad — una aplicación excelente adoptada por el 3% de la población elegible mueve la aguja poblacional solo un 3%. Para las terapias digitales prescritas, la puerta de adopción es visible en los datos nacionales: **~81% de las prescripciones alemanas de DiGA se activan** — uno de cada cinco tratamientos prescritos y pagados nunca llega a iniciarse (véase [vía rápida DiGA](../diga-fast-track/)).

## Las matemáticas

```
Tasa de activación = usuarios que completan la acción clave dentro del plazo / altas × 100
Tasa de adopción    = adoptantes / población elegible × 100
Tasa de cumplimentación DTx = códigos de prescripción activados / prescripciones emitidas × 100

Modelo de valor del embudo:
  elegibles × adopción × activación × beneficio ponderado por retención = valor poblacional
  — cuatro multiplicaciones; mejorar el factor más pequeño suele
  dominar (teoría de las restricciones aplicada a embudos)
```

## Ejemplo resuelto

Un comisionado ofrece una aplicación de prevención de diabetes a 80,000 residentes elegibles:

```
Invitados → registrados:  80,000 → 12,000  (adopción 15%)
Registrados → activados (primera sesión + objetivo fijado, 7 días): 12,000 → 5,400 (45%)
Activados → completaron el programa de 6 meses: 5,400 → 1,600 (30%)

Efecto del programa (ensayo, quienes completan): 0.03 AVAC + £180 de costes evitados
Valor poblacional = 1,600 × (0.03 × £20,000 + £180) ≈ £1.25M
Valor por persona elegible = £15.6 — frente a £780 si todas las personas elegibles completaran el programa.

¿Dónde invertir? Duplicar la adopción (15→30%) duplica el valor; elevar
la activación del 45→65% añade ~44%; ambas opciones superan seguir puliendo
el contenido del programa que las 1,600 personas ya completan.
```

## Conexión con la ingeniería de software

La activación es la etapa del embudo más tratable desde la ingeniería: la fricción de verificación de identidad, los flujos de consentimiento, el diseño de estados vacíos y el tiempo hasta el primer valor son código, no política (en el sector sanitario, la mediana de tiempo hasta el valor es ≈1 día y 7 horas en datos de referencia — cada hora adicional es exposición a la pérdida de usuarios). La adopción es un problema de sistemas de distribución: integración en las vías de derivación (el momento de la prescripción), invitaciones respaldadas por el médico de cabecera (la confianza se transfiere) y accesibilidad (idioma, competencias digitales — véase [alcance y equidad](../reach-and-equity/)). El modelo de valor del embudo anterior es el generador del caso de negocio para ambas: multiplique los factores, encuentre la restricción, ponga precio a la solución en función del valor poblacional que libera.

## Trampas habituales

- **Definir la activación como conveniencia** (correo electrónico verificado) en lugar de significado clínico (primera acción terapéutica) — infla la métrica y rompe la cadena de valor.
- **Juegos con el denominador de la adopción**: "de quienes visitaron el sitio" frente a la población realmente elegible — a los comisionados les importa la segunda.
- **Efectos de selección**: los usuarios fáciles de activar son los menos enfermos y menos desfavorecidos; las mejoras del embudo pueden ampliar las brechas de equidad mientras mejoran las medias.

## Fuentes

- Referencias de activación (SaaS sanitario). <https://userpilot.com/blog/healthcare-product-metrics-benchmark-report/>
- Datos de activación de DiGA, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01137-1>
- Marco RE-AIM. <https://re-aim.org/>
