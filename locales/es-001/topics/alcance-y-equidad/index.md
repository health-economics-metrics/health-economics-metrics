# Alcance y Equidad

RE-AIM — Alcance, Efectividad, Adopción, Implementación, Mantenimiento — es el marco estándar para juzgar el impacto *poblacional* de una intervención. Su aritmética central: **impacto en salud pública ≈ alcance × efectividad**. Las herramientas digitales añaden una dimensión de equidad: la brecha digital significa que el alcance es sistemáticamente desigual, y la entrega digital-primero puede ampliar las brechas de salud que pretende cerrar.

## Por qué importa

Las revisiones sistemáticas que aplican RE-AIM a mHealth encuentran una firma consistente: Alcance y Adopción fuertes, **Efectividad y Mantenimiento débiles** — las aplicaciones se difunden fácilmente y se desvanecen rápido. Para un servicio de salud nacional, esto significa que un producto impresionante por usuario puede ser una mala inversión poblacional, y viceversa: una herramienta modestamente efectiva que alcanza a millones puede superar a una brillante que alcanza a miles (ver la aritmética de [EVAS](../esperanza-de-vida-ajustada-por-salud/)). La equidad no es una restricción secundaria sino un impulsor de valor: la exclusión digital sigue a la edad, la privación, la discapacidad y el idioma — exactamente las poblaciones que llevan la carga más tratable — así que el usuario marginal excluido a menudo tiene un beneficio potencial *superior al promedio*.

## El cálculo

```
Impacto poblacional ≈ alcance × efectividad
  alcance         = participantes / población elegible (ver activation-and-uptake.md)
  efectividad     = efecto en el mundo real entre participantes (ponderado por retención —
                  ver retention-and-churn.md)

Versión estratificada por equidad:
  impacto_grupo_g = alcance_g × efectividad_g, informado por quintil
  de privación / franja de edad / grupo lingüístico
  brecha de equidad = impacto_quintil_superior − impacto_quintil_inferior

Coste-efectividad distribucional: aplica pesos de equidad a los AVAC por
grupo receptor — un AVAC para el peor situado cuenta más (una extensión
de ETS cada vez más común).
```

## Ejemplo resuelto

Un programa digital de prevención de diabetes, informado de dos formas:

```
Agregado: alcance 12%, efecto 0,02 AVAC/participante → 0,0024 AVAC/persona elegible

Estratificado (quintiles de privación):
  Q1 (menos privados): alcance 22%, efecto 0,02 → 0,0044
  Q5 (más privados):  alcance 4%,  efecto 0,025 → 0,0010

El programa entrega 4,4× más salud a los menos privados —
mientras el efecto por participante de Q5 es MAYOR (más margen). Un
brazo digital asistido (coaching telefónico + acceso comunitario) costando 20%
más por participante de Q5 que eleva el alcance de Q5 al 12% triplica el
impacto de Q5 y mejora el agregado — la inversión en equidad ES la
inversión en eficiencia aquí.
```

## Conexión con la ingeniería de software

El alcance es sustancialmente un artefacto de ingeniería: los requisitos mínimos de dispositivo y SO, las suposiciones de ancho de banda, el soporte de idioma, la conformidad de accesibilidad (WCAG), los obstáculos de verificación de identidad y la distribución solo por tienda de aplicaciones recortan cada uno poblaciones del denominador — usualmente de forma invisible, porque los usuarios excluidos nunca aparecen en la analítica. Las prácticas de ingeniería que mueven la equidad: mide el *denominador* (instrumenta la población elegible, no solo los usuarios); presupuesta el rendimiento para dispositivos antiguos y conectividad pobre; envía vías digitales asistidas (teléfono, SMS, quiosco) como flujos de primera clase en lugar de canales de vergüenza; y estratifica cada métrica del panel por las dimensiones de equidad — un promedio no estratificado es donde se esconde la desigualdad (la [adopción de GDS](../métricas-de-servicio-gds/) conlleva la misma advertencia).

## Errores comunes

- **Efectividad informada sobre quienes completan, impacto reclamado sobre poblaciones** — los términos de alcance descartados silenciosamente.
- **Equidad como auditoría de última hora** en lugar de una entrada de diseño; adaptar el alcance retroactivamente es mucho más costoso que diseñarlo.
- **Amnesia de mantenimiento**: la dimensión mHealth más débil de RE-AIM — reclamaciones de impacto más allá del horizonte temporal de la evidencia.
- **Ahorros de canal solo-digital** que desplazan costes a usuarios excluidos y personal de primera línea (ver [métricas de servicio GDS](../métricas-de-servicio-gds/)).

## Fuentes

- Marco RE-AIM. <https://re-aim.org/>
- Revisiones sistemáticas RE-AIM de mHealth. <https://pmc.ncbi.nlm.nih.gov/articles/PMC12358350/>
- CDC, PRISM/RE-AIM para planificación de equidad. <https://www.cdc.gov/pcd/issues/2018/17_0271.htm>
