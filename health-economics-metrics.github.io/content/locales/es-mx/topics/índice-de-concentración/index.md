# Índice de concentración

El índice de concentración (Wagstaff, Paci, van Doorslaer, 1991) es la medida estadística estándar de la desigualdad socioeconómica en una variable de salud. Va de −1 a 1: un valor negativo significa que la variable de salud se concentra entre los más desfavorecidos socioeconómicamente, uno positivo que se concentra entre los más acomodados, y cero que no existe un gradiente socioeconómico sistemático. Convierte la sospecha de un reparto desigual en una única cifra comparable.

## Por qué importa

Un programa puede parecer eficaz en conjunto y, aun así, llevar casi todo su beneficio a quienes ya estaban mejor. Esa es la preocupación distributiva que [Alcance y equidad](../alcance-y-equidad/) sigue de forma descriptiva (alcance estratificado por quintiles de privación, brecha de equidad entre el grupo superior y el inferior), pero una tabla estratificada no se resume en una línea de tendencia y es difícil de comparar entre dos medidas distintas medidas en escalas diferentes. El índice de concentración resuelve ambos problemas: se calcula igual para cualquier variable de salud respecto a cualquier ordenación socioeconómica, de modo que un servicio nacional de salud puede seguir si la desigualdad de un servicio digital concreto se amplía o se reduce de una versión a otra, y comparar la equidad distributiva del despliegue de una aplicación con la de, por ejemplo, un programa de cribado, en una escala normalizada.

## Las matemáticas

```
CI = (2 / media(valor_salud)) × Cov(valor_salud, rango_socioeconómico)

Cov(X, Y) = media(X × Y) − media(X) × media(Y)   (covarianza poblacional)

rango_socioeconómico: el rango fraccional de cada persona en la distribución
socioeconómica, en [0, 1] (0 = más desfavorecido, 1 = más aventajado; con
datos agrupados/en bandas se suele usar el rango del punto medio de cada grupo)
```

Esta es la «fórmula cómoda de la covarianza» (O'Donnell, van Doorslaer, Wagstaff, Lindelow, Banco Mundial 2008): el atajo estándar de los profesionales para calcular el índice de concentración directamente a partir de datos observados emparejados, sin trazar ni integrar bajo la curva de concentración.

## Ejemplo resuelto

Una puntuación de salud autoinformada (1 = peor, 4 = mejor) observada en cuatro cuartiles socioeconómicos de igual tamaño, cada uno representado por su rango del punto medio:

```
valor_salud                   = [1.0, 2.0, 3.0, 4.0]
rango_socioeconómico          = [0.125, 0.375, 0.625, 0.875]

media(valor_salud)            = 2.5
media(salud × rango)          = media([0.125, 0.75, 1.875, 3.5]) = 1.5625
media(rango)                  = 0.5

Cov = 1.5625 − 2.5 × 0.5 = 0.3125

CI = 2 × 0.3125 / 2.5 = 0.25
```

El valor positivo `0.25` significa que esta puntuación de salud se concentra entre los socioeconómicamente aventajados: quienes responden con puntuaciones más altas se inclinan hacia el extremo más acomodado de la ordenación.

## Conexión con la ingeniería de software

Es una medida de desigualdad basada en la covarianza, de la misma familia que las usadas en economía en general (pariente del coeficiente de Gini), y se traslada a medir si los beneficios de un producto de software se concentran en los grupos de usuarios que ya estaban aventajados o se reparten equitativamente: una extensión directa de [Alcance y equidad](../alcance-y-equidad/) (la dimensión «reach» de RE-AIM) hacia una medida estadística formal en lugar de una brecha descrita. Mientras que alcance y equidad informan del impacto estrato a estrato, el índice de concentración comprime toda la distribución en un único número con signo, apto como KPI único para seguir a lo largo de las versiones, práctico para paneles donde no cabe la distribución estratificada completa.

## Trampas habituales

- **Deriva en el convenio de signo**: el signo depende de cómo se definan tanto la variable de salud como el rango; invertir cualquiera de ellos invierte el signo, así que hay que indicar siempre el convenio empleado al informar un valor.
- **Usar rangos de límite en lugar de rangos de punto medio**: los datos socioeconómicos agrupados o en bandas (por ejemplo, quintiles) requieren el rango fraccional de cada grupo en su *punto medio*, no en su borde; de lo contrario el índice queda sesgado.
- **Leer «cerca de cero» como «sin desigualdad»**: un índice de concentración cercano a cero significa «sin gradiente socioeconómico sistemático», no «sin desigualdad» en sentido absoluto: las desigualdades de sentido opuesto pueden anularse.

## Fuentes

- Wagstaff A, Paci P, van Doorslaer E. "On the measurement of inequalities in health." Soc Sci Med. 1991;33(5):545-57.
- O'Donnell O, van Doorslaer E, Wagstaff A, Lindelow M. "Analyzing Health Equity Using Household Survey Data." World Bank. 2008 — el manual estándar para profesionales y fuente de la fórmula cómoda de la covarianza usada aquí. <https://openknowledge.worldbank.org/entities/publication/98380884-0d1d-53d2-b95f-ec6be2019414>
