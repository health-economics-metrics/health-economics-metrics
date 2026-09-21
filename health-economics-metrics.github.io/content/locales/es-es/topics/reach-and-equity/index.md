# Alcance y Equidad

RE-AIM — Reach, Effectiveness, Adoption, Implementation, Maintenance (Alcance, Efectividad, Adopción, Implementación, Mantenimiento) — es el marco estándar para juzgar el impacto *poblacional* de una intervención. Su aritmética central: **impacto en salud pública ≈ alcance × efectividad**. Las herramientas digitales añaden una dimensión de equidad: la brecha digital hace que el alcance sea sistemáticamente desigual, y la prestación digital-first puede ampliar las brechas de salud que pretende cerrar.

## Por qué importa

Las revisiones sistemáticas que aplican RE-AIM a la mHealth encuentran un patrón consistente: Alcance y Adopción fuertes, **Efectividad y Mantenimiento débiles** — las apps se difunden fácilmente y se desvanecen rápido. Para un servicio nacional de salud, esto significa que un producto impresionante por usuario puede ser una mala inversión poblacional, y viceversa: una herramienta modestamente efectiva que llega a millones puede superar en producción a una brillante que llega a miles (véase la aritmética de [HALE](../health-adjusted-life-expectancy/)). La equidad no es una restricción secundaria, sino un motor de valor: la exclusión digital sigue la pauta de la edad, la privación, la discapacidad y el idioma, precisamente las poblaciones que cargan con la mayor carga tratable, así que el usuario marginal excluido a menudo tiene un beneficio potencial *superior a la media*.

## Las matemáticas

```
Impacto poblacional ≈ alcance × efectividad
  alcance        = participantes / población elegible (véase activation-and-uptake.md)
  efectividad    = efecto en el mundo real entre los participantes (ponderado por
                   retención — véase retention-and-churn.md)

Versión estratificada por equidad:
  impacto_grupo_g = alcance_g × efectividad_g, reportado por quintil de
  privación / banda de edad / grupo lingüístico
  brecha de equidad = impacto_quintil_superior − impacto_quintil_inferior

Coste-efectividad distribucional: aplica ponderaciones de equidad a los QALYs
por grupo receptor — un QALY para el peor parado cuenta más (una extensión
de HTA cada vez más mainstream).
```

## Ejemplo trabajado

Un programa digital de prevención de la diabetes, reportado de dos formas:

```
Agregado: alcance 12%, efecto 0.02 QALYs/participante → 0.0024 QALYs/persona elegible

Estratificado (quintiles de privación):
  Q1 (menos desfavorecido): alcance 22%, efecto 0.02 → 0.0044
  Q5 (más desfavorecido):   alcance 4%,  efecto 0.025 → 0.0010

El programa entrega 4.4× más salud al grupo menos desfavorecido —
mientras que el efecto por participante de Q5 es MAYOR (más margen de
mejora). Un brazo de digital asistido (coaching telefónico + acceso
comunitario) que cuesta un 20% más por participante de Q5 y que eleva
el alcance de Q5 al 12% triplica el impacto de Q5 y mejora el
agregado: aquí la inversión en equidad ES la inversión en eficiencia.
```

## Conexión con la ingeniería de software

El alcance es, en buena medida, un artefacto de ingeniería: los requisitos mínimos de dispositivo y sistema operativo, las suposiciones de ancho de banda, el soporte de idiomas, la conformidad de accesibilidad (WCAG), las barreras de verificación de identidad y la distribución exclusiva por tienda de apps recortan poblaciones del denominador, normalmente de forma invisible, porque los usuarios excluidos nunca aparecen en la analítica. Prácticas de ingeniería que mueven la equidad: medir el *denominador* (instrumentar la población elegible, no solo a los usuarios); presupuestar el rendimiento pensando en dispositivos antiguos y conectividad pobre; enviar rutas de digital asistido (teléfono, SMS, quiosco) como flujos de primera clase en lugar de canales vergonzantes; y estratificar cada métrica del panel por las dimensiones de equidad — una media sin estratificar es donde se esconde la desigualdad (la [adopción de GDS](../gds-service-metrics/) lleva la misma advertencia).

## Errores habituales

- **Efectividad reportada sobre quienes completan, impacto reivindicado sobre poblaciones** — los términos de alcance descartados en silencio.
- **Equidad como auditoría a posteriori** en lugar de como input de diseño; adaptar el alcance después es mucho más costoso que diseñar para él desde el principio.
- **Amnesia de mantenimiento**: la dimensión más débil de RE-AIM en mHealth — reivindicaciones de impacto más allá del horizonte temporal de la evidencia.
- **Ahorros de canal exclusivamente digital** que trasladan costes a los usuarios excluidos y al personal de primera línea (véase [métricas de servicio de GDS](../gds-service-metrics/)).

## Fuentes

- RE-AIM framework. <https://re-aim.org/>
- RE-AIM systematic reviews of mHealth. <https://pmc.ncbi.nlm.nih.gov/articles/PMC12358350/>
- CDC, PRISM/RE-AIM for equity planning. <https://www.cdc.gov/pcd/issues/2018/17_0271.htm>
