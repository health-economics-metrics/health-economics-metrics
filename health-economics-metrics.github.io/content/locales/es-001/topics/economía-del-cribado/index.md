# Economía del Cribado

La economía del cribado rige el valor de examinar poblaciones asintomáticas. El hecho matemático central: **a baja prevalencia de enfermedad, incluso las pruebas excelentes generan mayormente falsos positivos** — y el coste posterior de perseguirlos puede inundar el beneficio de los hallazgos verdaderos.

## Por qué importa

Desde 1968, los criterios de Wilson-Jungner de la OMS han fijado el listón para el cribado poblacional: la condición debe ser importante, la prueba aceptable y precisa, debe existir tratamiento efectivo, y la economía debe equilibrarse. El Comité Nacional de Cribado del Reino Unido aplica análisis formal de coste-efectividad antes de aprobar cualquier programa nacional — y rechaza la mayoría de las propuestas. Cada presentación de "la IA cribará a todos para todo" choca con esta maquinaria, y usualmente pierde frente a la aritmética de abajo.

## El cálculo

El valor predictivo positivo (VPP) — la probabilidad de que un resultado positivo sea real — colapsa a baja prevalencia:

```
VPP = (sens × prev) / [sens × prev + (1 − esp) × (1 − prev)]

Ejemplo: sensibilidad 90%, especificidad 95%, prevalencia 0,5%:
VPP = (0,9 × 0,005) / (0,9 × 0,005 + 0,05 × 0,995)
    = 0,0045 / (0,0045 + 0,04975) ≈ 8,3%
```

Once de cada doce positivos son falsos. Economía completa del programa:

```
Coste por caso verdadero encontrado = (coste de cribado + coste de estudio × todos los positivos) / verdaderos positivos
Luego: ¿vale la pena encontrar un caso? (valor de intervención más temprana por caso,
      menos daño de sobrediagnóstico — casos encontrados que nunca habrían importado)
```

## Ejemplo resuelto

Cribado de retina con IA para una condición rara, 100.000 personas, prevalencia 0,5%, sens 90%, esp 95%, escaneo £15, estudio confirmatorio £400:

```
Verdaderos positivos:  100.000 × 0,005 × 0,90 = 450
Falsos positivos: 100.000 × 0,995 × 0,05 = 4.975
Coste = 100.000 × 15 + (450 + 4.975) × 400 = 1,5M + 2,17M = £3,67M
Coste por caso verdadero ≈ £8.156
```

Si el tratamiento temprano ahorra £20.000 + 1 AVAC por caso, el programa despeja fácilmente. Eleva la especificidad al 99% (menos falsas alarmas): el coste de estudio cae a (450 + 995) × 400 = £0,58M, total £2,08M, coste por caso ≈ **£4.622** — la especificidad, no la sensibilidad, es donde se gana la economía del cribado a baja prevalencia.

## Conexión con la ingeniería de software

El análisis estático, el escaneo de seguridad y la detección de anomalías son programas de cribado sobre bases de código y telemetría, con una prevalencia de defecto verdadero a menudo muy por debajo del 1% por oportunidad de alerta. La misma matemática explica la fatiga de alertas: un escáner con 95% de especificidad sobre código de baja prevalencia ahoga a los equipos en falsos positivos, y cada falso positivo cuesta atención y erosiona la confianza hasta que las alertas reales se ignoran (el término clínico es *daño de cribado*; el término de ingeniería es *entumecimiento del buscapersonas*). Los remedios se trasladan desde la salud: eleva la especificidad antes que la sensibilidad, examina subpoblaciones de mayor prevalencia (focalización basada en riesgo ↔ escaneo solo-de-código-cambiado), y cuenta el coste de triaje en la economía de la herramienta — ver [NNT](../número-necesario-a-tratar/) y [evaluación clínica de la IA](../evaluación-clínica-de-la-ia/).

## Errores comunes

- **Citar sensibilidad/especificidad sin la prevalencia** — la precisión sin el VPP es marketing.
- **Ignorar el sobrediagnóstico**: encontrar "enfermedad" indolente que nunca habría dañado desencadena costes y daños de tratamiento reales.
- **Sesgo de tiempo de adelanto**: la detección más temprana sin resultados cambiados infla la supervivencia aparente — ver [intervención más temprana](../intervención-más-temprana/).

## Fuentes

- Wilson JMG, Jungner G. "Principles and practice of screening for disease." WHO 1968. <https://apps.who.int/iris/handle/10665/37650>
- UK National Screening Committee. <https://www.gov.uk/government/groups/uk-national-screening-committee-uk-nsc>
