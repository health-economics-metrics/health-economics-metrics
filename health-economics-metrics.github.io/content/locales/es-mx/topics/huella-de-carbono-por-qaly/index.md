# Huella de carbono por QALY

El carbono por QALY es un ratio de eficiencia: las emisiones de carbono de una intervención (o las evitadas) divididas entre los QALY que genera. Es paralelo directo al costo por QALY y permite evaluar la eficiencia en carbono junto a la eficiencia en costos. El «NMB ajustado por carbono» va un paso más allá: monetiza el impacto de carbono con el valor oficial del carbono no comercializado del Green Book del Reino Unido y lo resta del [beneficio monetario neto](../beneficio-monetario-neto/) estándar.

## Por qué importa

NICE y NHS England esperan ahora que el impacto ambiental se considere junto al costo y los QALY. El NHS tiene un compromiso público de emisiones netas cero: cero neto en emisiones directas para 2040 y en toda la huella de la cadena de suministro para 2045. El manual de evaluación de tecnologías sanitarias de NICE (PMG36) menciona la sostenibilidad ambiental como una consideración emergente al evaluar tecnologías. Para los productos de salud digital, esto significa que el carbono se está convirtiendo en el cuarto pilar del argumento de valor, junto al costo, los QALY y la [dominancia en la frontera de eficiencia](../dominancia-y-la-frontera-de-eficiencia/): no sustituye a ninguno, sino que es una dimensión que un buen caso de negocio debe informar cada vez más.

## Las matemáticas

```
carbono_por_qaly = emisiones_totales_t_co2e / qaly_total
  (un valor negativo significa emisiones netas evitadas por QALY ganado:
  doble beneficio, mejor salud y menos carbono)

impacto_carbono_monetizado = emisiones_t_co2e × precio_carbono_por_tonelada
  (emisiones negativas × precio positivo = costo negativo, es decir, beneficio)

NMB_ajustado_por_carbono = beneficio_monetario_neto − impacto_carbono_monetizado
```

Esto extiende la idea de frontera de eficiencia costo/QALY con un segundo eje, el carbono por QALY, con la misma lógica de «representar cada alternativa y ver cuál queda dominada» de [Dominancia y la frontera de eficiencia](../dominancia-y-la-frontera-de-eficiencia/), pero aplicada al carbono en lugar de al costo.

## Ejemplo resuelto

Un servicio de telemedicina sustituye consultas presenciales, eliminando 5,000 desplazamientos en coche al año, de unos 8 kg de CO2e cada uno: evita 40 toneladas de CO2e, expresadas como emisiones negativas (−40.0 t), y aporta 25 QALY al año:

```
carbono_por_qaly = −40.0 / 25.0 = 1.6 t de CO2e evitadas por QALY ganado
```

Con el precio del carbono no comercializado del Green Book (cifra ilustrativa, valor central no comercializado de 2023 ≈ £269/t de CO2e; el Green Book actualiza anualmente los valores del carbono, así que conviene verificarlos antes de citarlos en un análisis real):

```
impacto_carbono_monetizado = −40.0 × £269 = −£10,760
```

El «costo» negativo de −£10,760 es un beneficio de £10,760. Si el beneficio monetario neto propio de la intervención es de £500,000:

```
NMB_ajustado_por_carbono = £500,000 − (−£10,760) = £510,760
```

El ahorro de carbono refuerza el caso en lugar de debilitarlo: es exactamente el doble beneficio que el marco de emisiones negativas está diseñado para hacer visible.

## Conexión con la ingeniería de software

Este es el punto de cruce actual con la economía de la IA y de la nube: la huella de carbono de la computación empleada para entrenar y ejecutar modelos de IA ya es una partida real en las compras del NHS, porque los contratos de proveedores del NHS que superan cierto umbral exigen un Plan de Reducción de Carbono (Carbon Reduction Plan). La [economía unitaria de la nube](../economía-unitaria-de-la-nube/) ya sigue el costo por unidad de producción de cómputo; el carbono por QALY es la plantilla natural de una futura métrica de «costo de carbono por inferencia», que extendería ese módulo y la economía unitaria de la inferencia a la dimensión ambiental, aunque esa métrica todavía no exista.

## Trampas habituales

- **Manipular los límites del sistema**: contar solo las emisiones directas (alcance 1) y excluir las de la cadena de suministro (alcance 3), que suelen ser la mayor parte de la huella real de un producto de salud digital.
- **Usar un precio del carbono obsoleto**: el Green Book actualiza anualmente los valores del carbono no comercializado, por lo que una cifra de £/t citada debe llevar fecha y no presentarse como una constante.
- **Tratar el «ahorro de carbono» como sustituto de la «costo-efectividad»**: una intervención de bajas emisiones pero poco valor sigue siendo un mal uso de los recursos del NHS. El carbono es el cuarto pilar junto al costo y los QALY, no un sustituto de ninguno.

## Fuentes

- NHS England, "Delivering a Net Zero National Health Service" (2020, actualizado en 2022). <https://www.england.nhs.uk/greenernhs/publication/delivering-a-net-zero-national-health-service/>
- HM Treasury, The Green Book: Carbon Values supplementary guidance (actualizado anualmente; valor central no comercializado ≈ £269/tCO2e, 2023; fechar cada cita). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
