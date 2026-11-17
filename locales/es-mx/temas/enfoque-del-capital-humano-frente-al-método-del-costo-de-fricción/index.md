# Enfoque del capital humano frente al método del costo de fricción

Son dos métodos rivales para valorar la productividad perdida por enfermedad, discapacidad o muerte en los estudios de costo de la enfermedad y de costo-beneficio. El enfoque del capital humano (HCA) valora toda la producción perdida durante todo el tiempo de ausencia a la tasa salarial; el método del costo de fricción (FCM) valora solo el periodo más corto que el empleador necesita realmente para restablecer la producción. La elección entre ambos cambia la estimación de los costos indirectos en un factor de dos o más.

## Por qué importa

Los costos indirectos (de productividad) son una de las partidas más discutidas de la economía de la salud, justamente porque los dos métodos estándar divergen tanto. El HCA trata cada día de ausencia como un día de producción que la economía pierde de verdad, valorado a salario completo durante toda la duración, o durante el resto de la vida laboral en caso de muerte o discapacidad permanente. El FCM sostiene que, en una economía con desempleo y holgura en el mercado laboral, la mayor parte de las ausencias largas no reduce en realidad la producción nacional, porque el empleador forma a un sustituto o redistribuye el trabajo; solo el «periodo de fricción» (el tiempo para restablecer la producción a su nivel anterior) es la pérdida real. El FCM da, por tanto, estimaciones de costos indirectos sistemáticamente más bajas y más conservadoras que el HCA, y los dos no son notas a pie de página intercambiables: son teorías económicas distintas de lo que significa «productividad perdida». Por eso el [caso de referencia de NICE](../evaluación-de-tecnología-sanitaria/) excluye por defecto los costos de productividad y, si acaso, los informa como un análisis de sensibilidad de perspectiva social aparte, en lugar de mezclarlos en el ICER del caso de referencia; véase [perspectiva del análisis](../perspectiva-del-análisis/).

## Las matemáticas

```
Enfoque del capital humano:
costo_HCA = salario_diario × días_perdidos

Método del costo de fricción (simplificado, acotado por el periodo de fricción):
costo_FCM = salario_diario × min(días_perdidos, días_periodo_de_fricción)

días_periodo_de_fricción = estimación específica de cada país/sector del tiempo
                           para restablecer la producción (históricamente
                           ~85 días en la guía de costos iMTA neerlandesa;
                           varía por país y se reevalúa periódicamente)
```

Todo el desacuerdo entre los dos métodos está en el `min()`: el HCA nunca acota `días_perdidos`, así que el costo crece durante toda la ausencia; el FCM acota los días contados al periodo de fricción, por larga que sea la ausencia real.

## Ejemplo resuelto

Un empleado se ausenta `días_perdidos = 180` días con un `salario_diario = £150`.

**Enfoque del capital humano**:

```
costo_HCA = 150 × 180 = £27,000
```

**Método del costo de fricción**, con `días_periodo_de_fricción = 85` (la referencia histórica neerlandesa iMTA, según la reevaluación periódica de la guía):

```
costo_FCM = 150 × min(180, 85) = 150 × 85 = £12,750
```

Los £12,750 del FCM son menos de la mitad de los £27,000 del HCA para la *misma* ausencia: la sola elección del método cambia de forma sustancial el argumento del costo de la enfermedad, antes de tocar ningún otro supuesto.

## Conexión con la ingeniería de software

Se corresponde directamente con la forma en que un equipo estima el costo de la salida de un ingeniero:

- **Cálculo del costo de rotación al estilo HCA**: valorar la pérdida como el salario completo del ingeniero que se va durante todo el tiempo que el puesto queda vacante. Es la versión ingenua de la mayoría de los modelos de costo de rotación, y sobrestima por la misma razón por la que el HCA sobrestima la productividad perdida: supone que la capacidad vacante era plenamente productiva y que nada más absorbió el hueco. Véase [retención de personal](../retención-de-la-fuerza-laboral/), que cuantifica la cadena de contratación/incorporación/cobertura de la vacante que alimenta este método.
- **Cálculo del costo de rotación al estilo FCM**: valorar la pérdida solo por el tiempo real que cuesta encontrar e incorporar a un sustituto: el «periodo de fricción» de la ingeniería. Es la cifra más defendible para un caso de negocio, igual que el FCM es la opción más conservadora en un estudio de costo de la enfermedad.
- La disciplina subyacente es la del [costo de oportunidad](../costo-de-oportunidad/): valorar el recurso desplazado por lo que realmente se pierde, no por el producto de la duración titular y la tasa.

## Trampas habituales

- **Mezclar HCA y FCM en un mismo análisis, o informar de uno solo sin revelar la elección.** Los mismos datos de ausencia pueden dar un costo informado que difiere en un factor de 2 o más según el método; la elección debe nombrarse, no ocultarse.
- **Usar el HCA en un caso de perspectiva social sin señalarlo como análisis de sensibilidad.** El caso de referencia de NICE excluye explícitamente los costos de productividad; una estimación HCA de perspectiva social pertenece al análisis de escenarios, no al ICER principal.
- **Aplicar cualquiera de los dos métodos al trabajo no remunerado o no mercantil (por ejemplo, los cuidados) sin ajustar.** Ambos usan la tasa salarial como sustituto del valor, que no se traslada limpiamente al trabajo sin salario de mercado.

## Fuentes

- Koopmanschap MA, Rutten FFH, van Ineveld BM, van Roijen L. "The friction cost method for measuring indirect costs of disease." Journal of Health Economics 1995;14(2):171-89.
- Drummond MF, Sculpher MJ, Claxton K, Stoddart GL, Torrance GW. "Methods for the Economic Evaluation of Health Care Programmes." 4th ed. Oxford University Press — capítulo sobre costos de productividad.
- NICE health technology evaluations manual (PMG36) — perspectiva del caso de referencia y guía opcional de perspectiva social. <https://www.nice.org.uk/process/pmg36>
