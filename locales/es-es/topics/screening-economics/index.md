# Economía del cribado

La economía del cribado rige el valor de someter a pruebas a poblaciones asintomáticas. El hecho matemático central: **con una prevalencia baja de la enfermedad, incluso pruebas excelentes generan sobre todo falsos positivos** — y el coste posterior de perseguirlos puede superar al beneficio de los verdaderos hallazgos.

## Por qué importa

Desde 1968, los criterios de Wilson-Jungner de la OMS (Organización Mundial de la Salud) han marcado el listón para el cribado poblacional: la condición debe ser importante, la prueba aceptable y precisa, debe existir un tratamiento eficaz, y la economía debe cuadrar. El UK National Screening Committee aplica un análisis formal de coste-efectividad antes de aprobar cualquier programa nacional — y rechaza la mayoría de las propuestas. Todo discurso de "la IA cribará a todo el mundo para todo" choca con esta maquinaria y, por lo general, pierde frente a la aritmética siguiente.

## Las matemáticas

El valor predictivo positivo (VPP) — la probabilidad de que un resultado positivo sea real — se desploma con una prevalencia baja:

```
VPP = (sens × prev) / [sens × prev + (1 − espec) × (1 − prev)]

Ejemplo: sensibilidad 90%, especificidad 95%, prevalencia 0.5%:
VPP = (0.9 × 0.005) / (0.9 × 0.005 + 0.05 × 0.995)
    = 0.0045 / (0.0045 + 0.04975) ≈ 8.3%
```

Once de cada doce positivos son falsos. Economía completa del programa:

```
Coste por caso verdadero encontrado = (coste del cribado + coste del estudio × todos los positivos) / verdaderos positivos
Entonces: ¿merece la pena ese coste por encontrar un caso? (valor de la intervención
      más temprana por caso, menos el daño del sobrediagnóstico — casos
      encontrados que nunca habrían importado)
```

## Ejemplo práctico

Cribado retiniano con IA para una afección rara, 100,000 personas, prevalencia 0.5%, sens 90%, espec 95%, escaneo 15£, estudio confirmatorio 400£:

```
Verdaderos positivos: 100,000 × 0.005 × 0.90 = 450
Falsos positivos:     100,000 × 0.995 × 0.05 = 4,975
Coste = 100,000 × 15 + (450 + 4,975) × 400 = 1.5M + 2.17M = 3.67 M£
Coste por caso verdadero ≈ 8,156£
```

Si el tratamiento temprano ahorra 20,000£ + 1 QALY por caso, el programa se justifica con holgura. Si se eleva la especificidad al 99% (menos falsas alarmas): el coste del estudio cae a (450 + 995) × 400 = 0.58 M£, total 2.08 M£, coste por caso ≈ **4,622£** — la especificidad, no la sensibilidad, es donde se gana la partida de la economía del cribado a prevalencia baja.

## Conexión con la ingeniería de software

El análisis estático, el escaneo de seguridad y la detección de anomalías son programas de cribado sobre bases de código y telemetría, con una prevalencia real del defecto a menudo muy por debajo del 1% por oportunidad de alerta. La misma aritmética explica la fatiga de alertas: un escáner con un 95% de especificidad sobre código de baja prevalencia inunda a los equipos de falsos positivos, y cada falso positivo cuesta atención y erosiona la confianza hasta que las alertas reales dejan de atenderse (el término clínico es *daño del cribado*; el término de ingeniería es *insensibilización a las alertas*). Los remedios se trasladan desde la salud: eleva la especificidad antes que la sensibilidad, criba subpoblaciones de mayor prevalencia (segmentación por riesgo ↔ escanear solo el código modificado), y cuenta el coste del triaje en la economía de la herramienta — véanse [NNT](../number-needed-to-treat/) y [evaluación clínica de la IA](../clinical-ai-evaluation/).

## Escollos

- **Citar sensibilidad/especificidad sin la prevalencia** — la precisión sin el VPP es marketing.
- **Ignorar el sobrediagnóstico**: encontrar una "enfermedad" indolente que nunca habría hecho daño desencadena costes y daños de tratamiento reales.
- **Sesgo del tiempo de adelanto**: la detección más temprana sin cambios en los resultados infla la supervivencia aparente — véase [intervención más temprana](../earlier-intervention/).

## Fuentes

- Wilson JMG, Jungner G. "Principles and practice of screening for disease." WHO 1968. <https://apps.who.int/iris/handle/10665/37650>
- UK National Screening Committee. <https://www.gov.uk/government/groups/uk-national-screening-committee-uk-nsc>
