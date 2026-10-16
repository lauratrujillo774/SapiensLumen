// Teoría de Matemáticas, grado 9°. Formato compacto (ver grado6/matematicas.js).
export const area = "Matematicas";

export const temas = [
  {
    tema: "Radicales y racionalización",
    resumen: "Los radicales son raíces de números que no siempre dan resultados exactos. Con sus propiedades se pueden simplificar, operar y expresar sin raíces en el denominador.",
    objetivos: ["Simplificarás radicales.", "Operarás con radicales.", "Racionalizarás denominadores."],
    partes: [
      ["√", "Raíces y propiedades", "La raíz n-ésima de un número a es el valor que, elevado a n, da a. Propiedades principales:\n- √(a·b) = √a · √b\n- √(a/b) = √a / √b\n- (√a)² = a\n- Una raíz también se puede escribir como potencia: ⁿ√aᵐ = a^(m/n).", "√36 = 6, pero √50 no es exacta. √(4·9) = √4 · √9 = 2 · 3 = 6.", "La raíz de un producto es el producto de las raíces."],
      ["✂️", "Simplificar radicales", "Para simplificar, se busca el mayor cuadrado perfecto (o la mayor potencia perfecta) que divide al número dentro de la raíz y se extrae.", "- √50 = √(25·2) = 5√2\n- √72 = √(36·2) = 6√2\n- ³√54 = ³√(27·2) = 3·³√2", "Saca de la raíz los factores perfectos."],
      ["➕", "Suma y resta de radicales", "Solo se pueden sumar o restar radicales semejantes, es decir, con el mismo índice y el mismo radicando. Se suman los coeficientes. A veces hay que simplificar primero.", "- 3√2 + 5√2 = 8√2\n- √8 + √18 = 2√2 + 3√2 = 5√2", "Semejantes: mismo radical, se suman los coeficientes."],
      ["✖️", "Multiplicación y división", "Con el mismo índice, se multiplican (o dividen) los radicandos y los coeficientes.", "- √3 · √12 = √36 = 6\n- 2√5 · 3√2 = 6√10\n- √20 ÷ √5 = √4 = 2", "Con el mismo índice, multiplica los radicandos."],
      ["🎯", "Racionalización", "Racionalizar es eliminar las raíces del denominador sin cambiar el valor de la fracción.\n- Si el denominador es un monomio, multiplica arriba y abajo por esa raíz.\n- Si es un binomio, multiplica por su conjugado (el mismo binomio con el signo central cambiado).", "- 1/√2 = (1·√2)/(√2·√2) = √2/2\n- 3/(2√5) = 3√5/10\n- 1/(√3 + 1) = (√3 − 1)/((√3 + 1)(√3 − 1)) = (√3 − 1)/2", "Multiplica arriba y abajo por el conjugado."]
    ],
    mapa: ["Radicales", [["Propiedades", ["√(a·b) = √a · √b", "√(a/b) = √a / √b", "Raíz como potencia"]], ["Simplificar", ["Extraer cuadrados perfectos"]], ["Operaciones", ["Suma: radicales semejantes", "Producto: radicandos"]], ["Racionalizar", ["Monomio: multiplicar por la raíz", "Binomio: multiplicar por el conjugado"]]]],
    tarjetas: [["Simplifica √18.", "3√2."], ["Simplifica √75.", "5√3."], ["¿Cuánto es 2√3 + 4√3?", "6√3."], ["¿Cuánto es √2 · √8?", "4."], ["Racionaliza 1/√3.", "√3/3."], ["¿Qué es el conjugado de √5 + 2?", "√5 − 2."], ["¿Cómo se escribe √x como potencia?", "x^(1/2)."]],
    videos: ["radicales y racionalización noveno grado", "simplificar radicales", "racionalizar denominadores con conjugado"],
    n: 14
  },
  {
    tema: "Ecuaciones cuadráticas",
    resumen: "Una ecuación cuadrática tiene la incógnita elevada al cuadrado. Puede tener dos, una o ninguna solución real, y se resuelve por factorización o con la fórmula general.",
    objetivos: ["Reconocerás la forma general.", "Resolverás por factorización y con la fórmula general.", "Interpretarás el discriminante y resolverás problemas."],
    partes: [
      ["📐", "Forma general", "Una ecuación cuadrática se escribe ax² + bx + c = 0, con a ≠ 0. Se llama completa si b y c son distintos de cero, e incompleta si falta b o c.", "- x² − 5x + 6 = 0 (completa)\n- x² − 9 = 0 (incompleta, b = 0)\n- x² + 4x = 0 (incompleta, c = 0)", "El término cuadrático nunca es cero."],
      ["🧩", "Ecuaciones incompletas", "- Si falta b: se despeja x² y se saca raíz (con ±).\n- Si falta c: se factoriza x.", "- x² − 9 = 0 → x² = 9 → x = 3 o x = −3\n- x² + 4x = 0 → x(x + 4) = 0 → x = 0 o x = −4", "Una ecuación cuadrática puede tener dos soluciones."],
      ["✂️", "Por factorización", "Se lleva todo a un lado, se factoriza y se iguala cada factor a cero (porque si un producto es cero, uno de los factores es cero).", "x² − 5x + 6 = 0\n- (x − 2)(x − 3) = 0\n- x − 2 = 0 → x = 2\n- x − 3 = 0 → x = 3", "Producto igual a cero: cada factor puede ser cero."],
      ["🧮", "Fórmula general", "x = (−b ± √(b² − 4ac)) ÷ (2a). Sirve para cualquier ecuación cuadrática, incluso cuando no se puede factorizar fácilmente.", "2x² + 3x − 2 = 0, con a = 2, b = 3, c = −2:\n- b² − 4ac = 9 + 16 = 25\n- x = (−3 ± 5) ÷ 4\n- x = 1/2 o x = −2", "Identifica a, b y c y reemplaza."],
      ["🔍", "El discriminante y problemas", "El discriminante es Δ = b² − 4ac.\n- Si Δ > 0: dos soluciones reales distintas.\n- Si Δ = 0: una solución real doble.\n- Si Δ < 0: ninguna solución real.\nLas cuadráticas aparecen en problemas de áreas, caída de objetos y números.", "Un rectángulo tiene un lado 3 m más largo que el otro y su área es 40 m²:\n- x(x + 3) = 40 → x² + 3x − 40 = 0\n- (x + 8)(x − 5) = 0 → x = 5 m (la solución −8 no sirve)\nLos lados miden 5 m y 8 m.", "Verifica que la solución tenga sentido en el problema."]
    ],
    mapa: ["Ecuaciones cuadráticas", [["Forma", ["ax² + bx + c = 0", "a ≠ 0"]], ["Métodos", ["Factorización", "Fórmula general"]], ["Discriminante", ["Δ > 0: dos soluciones", "Δ = 0: una", "Δ < 0: ninguna real"]], ["Aplicaciones", ["Áreas", "Movimiento", "Números"]]]],
    tarjetas: [["¿Cuál es la fórmula general?", "x = (−b ± √(b² − 4ac)) ÷ 2a."], ["Resuelve x² − 16 = 0.", "x = 4 o x = −4."], ["Resuelve x² − 7x + 12 = 0.", "x = 3 o x = 4."], ["¿Qué es el discriminante?", "b² − 4ac."], ["Si Δ < 0, ¿cuántas soluciones reales hay?", "Ninguna."], ["Resuelve x² + 3x = 0.", "x = 0 o x = −3."], ["¿Cuántas soluciones tiene si Δ = 0?", "Una solución doble."]],
    videos: ["ecuaciones cuadráticas noveno grado", "fórmula general cuadrática paso a paso", "discriminante de una ecuación cuadrática"],
    n: 16
  },
  {
    tema: "Función cuadrática y la parábola",
    resumen: "La función cuadrática f(x) = ax² + bx + c tiene como gráfica una parábola. Con ella se modelan lanzamientos, puentes, antenas y problemas de máximos y mínimos.",
    objetivos: ["Reconocerás la forma y la gráfica de una función cuadrática.", "Hallarás el vértice y los cortes con los ejes.", "Resolverás problemas de máximos y mínimos."],
    partes: [
      ["📈", "La parábola", "La gráfica de f(x) = ax² + bx + c es una curva llamada parábola, simétrica respecto a una recta vertical (eje de simetría). Si a > 0, se abre hacia arriba y tiene un punto mínimo; si a < 0, se abre hacia abajo y tiene un punto máximo. Cuanto mayor es |a|, más cerrada es.", "Una antena parabólica y el arco de una fuente de agua tienen forma de parábola.", "El signo de a indica hacia dónde abre."],
      ["📍", "El vértice", "El vértice es el punto más alto o más bajo de la parábola. Su abscisa es x = −b ÷ (2a) y su ordenada es f(x) reemplazando ese valor. El eje de simetría es la recta x = −b ÷ (2a).", "f(x) = x² − 4x + 3:\n- x_v = 4 ÷ 2 = 2\n- f(2) = 4 − 8 + 3 = −1\n- Vértice: (2, −1)", "x del vértice = −b/(2a)."],
      ["✖️", "Cortes con los ejes", "- Con el eje y: se hace x = 0; el punto es (0, c).\n- Con el eje x: se resuelve ax² + bx + c = 0; son las raíces o ceros de la función.", "Para f(x) = x² − 4x + 3:\n- Eje y: (0, 3)\n- Eje x: (x − 1)(x − 3) = 0 → (1, 0) y (3, 0)", "Los cortes con el eje x son las soluciones de la ecuación."],
      ["🖊️", "Cómo graficar", "1) Halla el vértice. 2) Halla los cortes con los ejes. 3) Haz una tabla con valores a ambos lados del vértice. 4) Ubica los puntos y traza la curva simétrica.", "Para f(x) = x² − 4x + 3, los puntos (0, 3) y (4, 3) son simétricos respecto a x = 2.", "Aprovecha la simetría para ahorrar puntos."],
      ["🏀", "Máximos y mínimos", "El vértice responde a preguntas de «lo más alto» o «lo menor».", "La altura de un balón lanzado es h(t) = −5t² + 20t metros.\n- t_v = −20 ÷ (2·(−5)) = 2 s\n- h(2) = −20 + 40 = 20 m: altura máxima\n- h = 0 cuando t = 0 o t = 4: el balón vuelve al suelo a los 4 s.\nCon 40 m de malla para un corral rectangular, el área máxima se obtiene con un cuadrado de 10 m × 10 m (100 m²).", "El vértice es la solución de los problemas de optimización."]
    ],
    mapa: ["Función cuadrática", [["Forma", ["f(x) = ax² + bx + c", "Parábola"]], ["Apertura", ["a > 0: hacia arriba, mínimo", "a < 0: hacia abajo, máximo"]], ["Elementos", ["Vértice", "Eje de simetría", "Cortes con los ejes"]], ["Aplicaciones", ["Lanzamientos", "Máximos y mínimos"]]]],
    tarjetas: [["¿Cómo se llama la gráfica de una función cuadrática?", "Parábola."], ["¿Hacia dónde abre si a > 0?", "Hacia arriba."], ["¿Cuál es la abscisa del vértice?", "x = −b ÷ (2a)."], ["Vértice de f(x) = x² − 6x + 5.", "(3, −4)."], ["¿Dónde corta f(x) = x² + 2x − 3 al eje y?", "En (0, −3)."], ["¿Qué son los ceros de una función?", "Los valores de x donde f(x) = 0."], ["Si a < 0, ¿el vértice es máximo o mínimo?", "Máximo."]],
    videos: ["función cuadrática noveno grado", "vértice de una parábola", "problemas de máximos y mínimos con parábolas"],
    n: 16
  },
  {
    tema: "Inecuaciones lineales",
    resumen: "Una inecuación es una desigualdad con una incógnita. Su solución no es un solo número sino un conjunto de valores que se puede representar en la recta numérica.",
    objetivos: ["Resolverás inecuaciones lineales.", "Representarás soluciones en la recta y con intervalos.", "Plantearás problemas con inecuaciones."],
    partes: [
      ["⚖️", "Desigualdades", "Los símbolos son: < (menor que), > (mayor que), ≤ (menor o igual) y ≥ (mayor o igual). Una inecuación como 2x + 3 < 11 tiene infinitas soluciones.", "Si x = 3, 2(3) + 3 = 9 < 11 es verdadero. Si x = 5, 2(5) + 3 = 13 < 11 es falso.", "Una inecuación tiene muchas soluciones."],
      ["🔧", "Reglas para resolver", "- Se puede sumar o restar el mismo número en ambos lados.\n- Se puede multiplicar o dividir por un número positivo.\n- Si se multiplica o divide por un número negativo, el sentido de la desigualdad se invierte.", "−3x ≥ 12\n- Dividir entre −3 invierte el signo: x ≤ −4", "Multiplicar por un negativo invierte la desigualdad."],
      ["📝", "Resolver paso a paso", "Se despeja la incógnita como en una ecuación, cuidando la regla del signo negativo.", "2x + 3 < 11\n- 2x < 8\n- x < 4\nLa solución son todos los números menores que 4.", "Despeja igual que en una ecuación."],
      ["📏", "Representar la solución", "- En la recta numérica: círculo abierto (○) si no incluye el extremo (< o >); círculo cerrado (●) si lo incluye (≤ o ≥).\n- Con intervalos: x < 4 es (−∞, 4); x ≥ −4 es [−4, ∞).\n- Inecuación doble: −1 < 2x + 1 ≤ 7 → −2 < 2x ≤ 6 → −1 < x ≤ 3, es decir, (−1, 3].", "El paréntesis significa que no incluye el extremo y el corchete que sí lo incluye.", "Paréntesis excluye; corchete incluye."],
      ["🛒", "Problemas", "Las inecuaciones modelan límites: presupuestos, capacidades, mínimos para aprobar.", "Con $50.000 quiero comprar cuadernos de $4.500 cada uno:\n- 4.500x ≤ 50.000\n- x ≤ 11,1\nComo x debe ser entero, puedo comprar máximo 11 cuadernos.", "Interpreta la solución según el contexto."]
    ],
    mapa: ["Inecuaciones lineales", [["Símbolos", ["<  >  ≤  ≥"]], ["Reglas", ["Sumar o restar", "Multiplicar por negativo: invertir"]], ["Representación", ["Recta numérica", "Intervalos"]], ["Problemas", ["Presupuestos", "Límites"]]]],
    tarjetas: [["Resuelve x + 5 > 9.", "x > 4."], ["Resuelve −2x < 10.", "x > −5."], ["¿Qué pasa con la desigualdad al dividir por un número negativo?", "Se invierte."], ["¿Cómo se escribe x ≥ 3 en intervalo?", "[3, ∞)."], ["¿Qué indica un círculo abierto?", "Que el extremo no está incluido."], ["Resuelve 3x − 1 ≤ 8.", "x ≤ 3."], ["¿Una inecuación lineal tiene una o infinitas soluciones?", "Infinitas."]],
    videos: ["inecuaciones lineales noveno grado", "intervalos y recta numérica", "problemas con inecuaciones"],
    n: 14
  },
  {
    tema: "Funciones: dominio, rango y gráficas",
    resumen: "Una función asigna a cada valor de entrada un único valor de salida. El dominio y el rango indican qué valores pueden entrar y cuáles pueden salir, y las gráficas muestran su comportamiento.",
    objetivos: ["Reconocerás cuándo una relación es función.", "Hallarás dominio y rango.", "Interpretarás gráficas de funciones."],
    partes: [
      ["🔄", "Qué es una función", "Una función es una regla que asigna a cada elemento x del dominio exactamente un elemento y. Se escribe y = f(x). En la gráfica, se comprueba con la prueba de la recta vertical: ninguna recta vertical corta la curva en más de un punto.", "El costo de x kilos de arroz a $4.000 es f(x) = 4.000x. Cada cantidad tiene un solo precio.", "Cada entrada tiene una sola salida."],
      ["📥", "Dominio", "El dominio es el conjunto de valores de x para los que la función está definida. Hay restricciones:\n- No se puede dividir por cero.\n- No se puede sacar raíz cuadrada de un número negativo (en los reales).", "- f(x) = 1/(x − 2): x ≠ 2, dominio = todos los reales menos el 2.\n- f(x) = √(x − 1): x − 1 ≥ 0 → x ≥ 1.", "El dominio son los x permitidos."],
      ["📤", "Rango", "El rango (o recorrido) es el conjunto de valores de y que la función puede tomar. Se puede ver en la gráfica mirando qué alturas alcanza la curva.", "- f(x) = x²: el rango es y ≥ 0.\n- f(x) = 2x + 1: el rango son todos los reales.", "El rango son los y que se obtienen."],
      ["📊", "Funciones conocidas", "- Lineal: recta.\n- Cuadrática: parábola.\n- Raíz cuadrada: media parábola.\n- Valor absoluto, f(x) = |x|: forma de V.\n- Racional, como 1/x: dos ramas.", "En la función valor absoluto, f(−3) = 3 y f(3) = 3; el rango es y ≥ 0.", "Reconoce la forma de las gráficas."],
      ["🔍", "Interpretar gráficas", "En una gráfica se pueden leer: los cortes con los ejes, dónde la función crece o decrece, los máximos y mínimos y su comportamiento general. Se usa para describir situaciones como la temperatura durante el día o el precio de un producto.", "Si una gráfica sube de 6 a. m. a 2 p. m. y luego baja, la temperatura alcanzó su máximo hacia las 2 p. m.", "Una gráfica cuenta una historia."]
    ],
    mapa: ["Funciones", [["Definición", ["Una salida por entrada", "Recta vertical"]], ["Dominio", ["x permitidos", "No dividir por cero", "No raíz de negativo"]], ["Rango", ["y obtenidos"]], ["Gráficas", ["Lineal", "Cuadrática", "Raíz", "Valor absoluto"]]]],
    tarjetas: [["¿Qué es una función?", "Una regla que asigna a cada x un único y."], ["¿Qué es el dominio?", "El conjunto de valores de x permitidos."], ["¿Qué es el rango?", "El conjunto de valores de y que se obtienen."], ["Dominio de f(x) = 1/x.", "Todos los reales, excepto 0."], ["Dominio de f(x) = √x.", "x ≥ 0."], ["¿Para qué sirve la prueba de la recta vertical?", "Para saber si una gráfica es una función."], ["Rango de f(x) = x².", "y ≥ 0."]],
    videos: ["funciones dominio y rango noveno grado", "prueba de la recta vertical", "cómo hallar el dominio de una función"],
    n: 14
  },
  {
    tema: "Sistemas de ecuaciones: aplicaciones",
    resumen: "Los sistemas de ecuaciones sirven para resolver problemas con dos cantidades desconocidas relacionadas entre sí: mezclas, edades, precios, movimientos y figuras geométricas.",
    objetivos: ["Plantearás sistemas a partir de un enunciado.", "Resolverás el sistema con el método adecuado.", "Interpretarás y verificarás la solución."],
    partes: [
      ["📋", "Pasos para resolver un problema", "1) Lee el problema y define dos incógnitas (x e y). 2) Escribe dos ecuaciones a partir de los datos. 3) Resuelve el sistema (sustitución, igualación o reducción). 4) Responde con unidades. 5) Verifica en el enunciado.", "Siempre pregúntate: ¿qué me piden hallar? Esas son las incógnitas.", "Define bien las incógnitas."],
      ["🎟️", "Problemas de cantidades y precios", "Se usa una ecuación para el número de objetos y otra para el dinero.", "En una función de cine se vendieron 100 boletas, unas de $5.000 y otras de $8.000, por un total de $620.000.\n- x + y = 100\n- 5.000x + 8.000y = 620.000\nAl resolver: y = 40 boletas de $8.000 y x = 60 de $5.000.", "Una ecuación cuenta objetos; la otra, dinero."],
      ["☕", "Problemas de mezclas", "Se mezclan dos productos para obtener una cantidad con cierto precio o concentración.", "¿Cuántos kilos de café de $12.000 y de $8.000 se mezclan para tener 10 kg a $10.000 el kilo?\n- x + y = 10\n- 12x + 8y = 100\n- x = 5 y y = 5.", "El valor total de la mezcla es la suma de los valores."],
      ["👪", "Problemas de edades", "Se relacionan las edades actuales y las de otro momento.", "El padre tiene el triple de la edad de su hijo, y dentro de 10 años tendrá el doble.\n- p = 3h\n- p + 10 = 2(h + 10)\n- 3h + 10 = 2h + 20 → h = 10 y p = 30.", "Cuida cuándo se refiere el enunciado: ahora, antes o después."],
      ["🚴", "Movimiento y geometría", "Con distancia = velocidad × tiempo, y con perímetros y áreas, también se forman sistemas.", "Un rectángulo tiene perímetro 36 cm y un lado mide el doble del otro:\n- 2x + 2y = 36\n- x = 2y\n- 6y = 36 → y = 6 y x = 12.", "Comprueba que la respuesta cumple las dos condiciones."]
    ],
    mapa: ["Aplicaciones de sistemas", [["Pasos", ["Incógnitas", "Dos ecuaciones", "Resolver", "Verificar"]], ["Cantidades y precios", ["Boletas", "Productos"]], ["Mezclas y edades", ["Café", "Padre e hijo"]], ["Otros", ["Movimiento", "Geometría"]]]],
    tarjetas: [["¿Cuántas ecuaciones se necesitan para dos incógnitas?", "Dos."], ["Dos números suman 20 y su diferencia es 4. ¿Cuáles son?", "12 y 8."], ["¿Cuál es el primer paso para resolver un problema con sistemas?", "Definir las incógnitas."], ["¿Qué se hace al final?", "Verificar la solución en el enunciado."], ["¿Qué fórmula se usa en problemas de movimiento?", "Distancia = velocidad × tiempo."], ["¿Qué método suma las dos ecuaciones?", "El de reducción."], ["¿Por qué hay que cuidar las unidades?", "Para dar una respuesta con sentido."]],
    videos: ["problemas de sistemas de ecuaciones noveno grado", "problemas de mezclas con sistemas", "problemas de edades con sistemas"],
    n: 14
  },
  {
    tema: "Razones trigonométricas en el triángulo rectángulo",
    resumen: "Las razones trigonométricas relacionan los ángulos de un triángulo rectángulo con la razón entre sus lados. Las principales son seno, coseno y tangente.",
    objetivos: ["Identificarás catetos e hipotenusa respecto a un ángulo.", "Calcularás seno, coseno y tangente.", "Hallarás lados y ángulos desconocidos."],
    partes: [
      ["📐", "Los lados respecto a un ángulo", "En un triángulo rectángulo, dado un ángulo agudo θ:\n- La hipotenusa es el lado opuesto al ángulo recto (el más largo).\n- El cateto opuesto es el que está frente a θ.\n- El cateto adyacente es el que forma θ junto con la hipotenusa.", "Si cambias el ángulo que miras, el cateto opuesto y el adyacente se intercambian.", "Opuesto y adyacente dependen del ángulo."],
      ["🔢", "Seno, coseno y tangente", "- sen θ = cateto opuesto ÷ hipotenusa\n- cos θ = cateto adyacente ÷ hipotenusa\n- tan θ = cateto opuesto ÷ cateto adyacente\nUna ayuda para recordar es SOH-CAH-TOA (Sen = Op/Hip, Cos = Ady/Hip, Tan = Op/Ady).", "En un triángulo de lados 3, 4 y 5, con el ángulo A opuesto al lado 3:\n- sen A = 3/5 = 0,6\n- cos A = 4/5 = 0,8\n- tan A = 3/4 = 0,75", "SOH-CAH-TOA."],
      ["⭐", "Valores de ángulos notables", "- 30°: sen = 1/2; cos = √3/2; tan = √3/3\n- 45°: sen = √2/2; cos = √2/2; tan = 1\n- 60°: sen = √3/2; cos = 1/2; tan = √3", "En un triángulo con ángulo de 45°, los dos catetos son iguales porque tan 45° = 1.", "Estos valores se usan con frecuencia."],
      ["🔍", "Hallar un lado", "Si conoces un ángulo y un lado, eliges la razón que relaciona el lado que tienes con el que buscas y despejas.", "En un triángulo rectángulo con hipotenusa 10 y ángulo 30°, el cateto opuesto es:\n- sen 30° = x ÷ 10\n- x = 10 · 0,5 = 5", "Elige la razón según los lados que intervienen."],
      ["🎯", "Hallar un ángulo e identidad fundamental", "Si conoces dos lados, se halla el ángulo con las funciones inversas de la calculadora (sen⁻¹, cos⁻¹, tan⁻¹). Además, se cumple que sen²θ + cos²θ = 1.", "Si tan A = 3/4 = 0,75, entonces A = tan⁻¹(0,75) ≈ 36,9°.\nVerifica: 0,6² + 0,8² = 0,36 + 0,64 = 1.", "Con las funciones inversas se halla el ángulo."]
    ],
    mapa: ["Trigonometría básica", [["Lados", ["Hipotenusa", "Cateto opuesto", "Cateto adyacente"]], ["Razones", ["sen = op/hip", "cos = ady/hip", "tan = op/ady"]], ["Ángulos notables", ["30°", "45°", "60°"]], ["Usos", ["Hallar lados", "Hallar ángulos", "sen² + cos² = 1"]]]],
    tarjetas: [["¿Qué es el seno de un ángulo?", "Cateto opuesto ÷ hipotenusa."], ["¿Qué es el coseno?", "Cateto adyacente ÷ hipotenusa."], ["¿Qué es la tangente?", "Cateto opuesto ÷ cateto adyacente."], ["¿Cuánto vale sen 30°?", "1/2."], ["¿Cuánto vale tan 45°?", "1."], ["¿Cuánto vale cos 60°?", "1/2."], ["¿Qué significa SOH-CAH-TOA?", "Una regla para recordar seno, coseno y tangente."]],
    videos: ["razones trigonométricas noveno grado", "seno coseno y tangente explicados", "ángulos notables 30 45 60"],
    n: 14
  },
  {
    tema: "Aplicaciones de la trigonometría",
    resumen: "La trigonometría permite medir alturas, distancias y ángulos que no se pueden medir directamente. Se usa en la topografía, la construcción, la navegación y la ingeniería.",
    objetivos: ["Interpretarás ángulos de elevación y de depresión.", "Plantearás triángulos rectángulos a partir de situaciones.", "Resolverás problemas de alturas y distancias."],
    partes: [
      ["👀", "Ángulos de elevación y depresión", "- Ángulo de elevación: el que forma la línea de visión con la horizontal, cuando se mira hacia arriba.\n- Ángulo de depresión: el que se forma cuando se mira hacia abajo.\nEn ambos casos, se forma un triángulo rectángulo con la horizontal y la vertical.", "Al mirar la copa de un árbol, tu línea de visión sube y forma un ángulo de elevación.", "Elevación: mirar hacia arriba. Depresión: hacia abajo."],
      ["🏢", "Calcular una altura", "Se mide la distancia horizontal a la base y el ángulo de elevación. La altura es el cateto opuesto: h = distancia × tan θ.", "Estás a 20 m de un edificio y ves su parte alta con un ángulo de 35°:\n- tan 35° = h ÷ 20\n- h = 20 · 0,70 ≈ 14 m\nSi sumas la altura de tus ojos (1,5 m), el edificio mide unos 15,5 m.", "Altura = distancia × tangente."],
      ["🪜", "Escaleras y rampas", "Se usa seno o coseno cuando se conoce la longitud de una escalera o rampa (la hipotenusa) y su ángulo con el piso.", "Una escalera de 5 m forma 60° con el piso:\n- altura alcanzada: 5 · sen 60° ≈ 4,33 m\n- distancia de la base a la pared: 5 · cos 60° = 2,5 m", "La escalera es la hipotenusa."],
      ["🚢", "Ángulo de depresión", "Se usa, por ejemplo, desde un faro o un edificio hacia un objeto en el suelo o en el mar.", "Desde un faro de 30 m de altura se ve un barco con ángulo de depresión θ. Si el barco está a 40 m de la base:\n- tan θ = 30 ÷ 40 = 0,75\n- θ ≈ 36,9°", "El ángulo de depresión es igual al de elevación desde el barco al faro."],
      ["🧭", "Estrategia general", "1) Dibuja la situación y marca el triángulo rectángulo. 2) Anota los datos y lo que buscas. 3) Elige seno, coseno o tangente (o Pitágoras). 4) Resuelve con calculadora en modo grados. 5) Revisa que la respuesta tenga sentido.", "Un error típico es dejar la calculadora en radianes en vez de grados.", "Un buen dibujo resuelve la mitad del problema."]
    ],
    mapa: ["Aplicaciones trigonométricas", [["Ángulos", ["Elevación", "Depresión"]], ["Alturas", ["h = d · tan θ"]], ["Escaleras y rampas", ["Seno y coseno"]], ["Estrategia", ["Dibujar", "Elegir razón", "Calculadora en grados"]]]],
    tarjetas: [["¿Qué es el ángulo de elevación?", "El que forma la línea de visión con la horizontal al mirar hacia arriba."], ["¿Qué es el ángulo de depresión?", "El que se forma al mirar hacia abajo."], ["¿Qué razón se usa para hallar una altura conociendo la distancia?", "La tangente."], ["Una escalera de 10 m forma 30° con el piso. ¿Qué altura alcanza?", "5 m."], ["¿En qué modo debe estar la calculadora?", "En grados."], ["¿Qué debes hacer primero en un problema?", "Hacer un dibujo."], ["¿Para qué se usa la trigonometría en la vida real?", "Para medir alturas, distancias y ángulos."]],
    videos: ["aplicaciones de la trigonometría noveno grado", "ángulo de elevación y depresión", "problemas de trigonometría alturas"],
    n: 14
  },
  {
    tema: "Geometría analítica: distancia, punto medio y recta",
    resumen: "La geometría analítica estudia figuras con coordenadas y ecuaciones. Con fórmulas se calculan distancias, puntos medios y pendientes, y se describe una recta con su ecuación.",
    objetivos: ["Calcularás la distancia entre dos puntos.", "Hallarás el punto medio de un segmento.", "Escribirás la ecuación de una recta."],
    partes: [
      ["📏", "Distancia entre dos puntos", "Se obtiene con el teorema de Pitágoras: d = √((x₂ − x₁)² + (y₂ − y₁)²).", "Entre A(1, 2) y B(4, 6):\n- d = √(3² + 4²) = √25 = 5", "La distancia viene de Pitágoras."],
      ["🎯", "Punto medio", "El punto medio de un segmento es el promedio de las coordenadas de sus extremos: M = ((x₁ + x₂) ÷ 2, (y₁ + y₂) ÷ 2).", "El punto medio de A(1, 2) y B(4, 6) es M = (2,5; 4).", "Promedia las abscisas y las ordenadas."],
      ["⛰️", "La pendiente", "La pendiente mide la inclinación de una recta: m = (y₂ − y₁) ÷ (x₂ − x₁).\n- m > 0: la recta sube.\n- m < 0: la recta baja.\n- m = 0: horizontal.\n- Recta vertical: pendiente no definida.", "La recta por A(1, 2) y B(4, 6) tiene m = (6 − 2) ÷ (4 − 1) = 4/3.", "La pendiente es cuánto sube y por cada unidad en x."],
      ["📝", "Ecuaciones de la recta", "- Punto-pendiente: y − y₁ = m(x − x₁).\n- Pendiente-intercepto: y = mx + b.\n- General: Ax + By + C = 0.", "Recta por A(1, 2) con m = 4/3:\n- y − 2 = (4/3)(x − 1)\n- y = (4/3)x + 2/3\n- General: 4x − 3y + 2 = 0", "Con un punto y la pendiente basta."],
      ["🔀", "Rectas paralelas y perpendiculares", "- Paralelas: tienen la misma pendiente (m₁ = m₂).\n- Perpendiculares: el producto de las pendientes es −1 (m₁ · m₂ = −1).", "Una recta con m = 2 tiene una paralela con m = 2 y una perpendicular con m = −1/2.", "Perpendicular: pendiente inversa y de signo contrario."]
    ],
    mapa: ["Geometría analítica", [["Distancia", ["Raíz de la suma de cuadrados"]], ["Punto medio", ["Promedio de coordenadas"]], ["Recta", ["Pendiente m", "y = mx + b", "Punto-pendiente"]], ["Posiciones", ["Paralelas: m iguales", "Perpendiculares: m₁·m₂ = −1"]]]],
    tarjetas: [["¿Cuál es la fórmula de la distancia entre dos puntos?", "d = √((x₂ − x₁)² + (y₂ − y₁)²)."], ["Distancia entre (0, 0) y (3, 4).", "5."], ["Punto medio de (2, 4) y (6, 8).", "(4, 6)."], ["Pendiente de la recta por (1, 1) y (3, 5).", "2."], ["¿Qué pendiente tienen las rectas paralelas?", "La misma."], ["Pendiente de una perpendicular a una recta de pendiente 3.", "−1/3."], ["Ecuación de la recta con m = 2 que pasa por (0, 1).", "y = 2x + 1."]],
    videos: ["geometría analítica noveno grado", "distancia y punto medio", "ecuación de la recta pendiente"],
    n: 14
  },
  {
    tema: "Área y volumen de la esfera y sólidos compuestos",
    resumen: "La esfera es un cuerpo perfectamente redondo. Muchos objetos reales combinan varios sólidos, y su volumen y su área se obtienen sumando o restando los de las partes.",
    objetivos: ["Calcularás el área y el volumen de la esfera.", "Descompondrás sólidos compuestos.", "Resolverás problemas de capacidad."],
    partes: [
      ["⚽", "La esfera", "La esfera es el conjunto de puntos del espacio que están a la misma distancia (el radio r) de un centro. Su área superficial es A = 4πr² y su volumen es V = (4/3)πr³.", "Un balón de radio 11 cm tiene V = (4/3)π(11)³ ≈ 5.575 cm³ y A = 4π(11)² ≈ 1.521 cm².", "Área: 4πr². Volumen: (4/3)πr³."],
      ["🧮", "Ejemplo con radio 3", "Para r = 3:\n- Área: 4π · 9 = 36π ≈ 113,1 u²\n- Volumen: (4/3)π · 27 = 36π ≈ 113,1 u³\nEl área y el volumen coinciden numéricamente solo cuando r = 3.", "El radio se mide desde el centro hasta la superficie; el diámetro es el doble.", "Cuidado: si te dan el diámetro, divide entre 2."],
      ["🌓", "La semiesfera", "Una semiesfera es la mitad de una esfera. Su volumen es (2/3)πr³. Su superficie curva es 2πr², y si se incluye la base circular se suma πr².", "Una cúpula semiesférica de radio 5 m tiene un volumen de (2/3)π · 125 ≈ 261,8 m³.", "Semiesfera: la mitad del volumen."],
      ["🧩", "Sólidos compuestos", "Un sólido compuesto está formado por dos o más sólidos simples. Para su volumen, se suman (si se unen) o se restan (si hay un hueco). Para el área, se suman las superficies que quedan expuestas.", "Un tanque cilíndrico de r = 1 m y h = 3 m con dos tapas semiesféricas:\n- Cilindro: π · 1² · 3 = 3π\n- Esfera completa (dos semiesferas): (4/3)π\n- Volumen total: 3π + 4π/3 = 13π/3 ≈ 13,6 m³", "Divide la figura en partes conocidas."],
      ["🥛", "Capacidad y problemas", "Para pasar volumen a capacidad: 1 m³ = 1.000 L; 1 dm³ = 1 L; 1 cm³ = 1 mL. Se usan estos cálculos para saber cuánta agua cabe en un tanque o cuánta pintura se necesita para cubrir una superficie.", "El tanque anterior (13,6 m³) tiene una capacidad de unos 13.600 litros.", "Convierte unidades al final."]
    ],
    mapa: ["Esfera y sólidos compuestos", [["Esfera", ["A = 4πr²", "V = (4/3)πr³"]], ["Semiesfera", ["V = (2/3)πr³"]], ["Compuestos", ["Sumar volúmenes", "Restar huecos", "Superficies expuestas"]], ["Capacidad", ["1 m³ = 1.000 L"]]]],
    tarjetas: [["¿Cuál es la fórmula del volumen de la esfera?", "V = (4/3)πr³."], ["¿Cuál es la fórmula del área de la esfera?", "A = 4πr²."], ["Volumen de una esfera de radio 3.", "36π ≈ 113,1."], ["¿Cuál es el volumen de una semiesfera?", "(2/3)πr³."], ["¿Cómo se calcula el volumen de un sólido compuesto?", "Sumando o restando los volúmenes de las partes."], ["¿Cuántos litros hay en 1 m³?", "1.000."], ["Si te dan el diámetro, ¿qué haces para el radio?", "Lo divides entre 2."]],
    videos: ["volumen y área de la esfera noveno grado", "sólidos compuestos volumen", "problemas de volumen y capacidad"],
    n: 14
  },
  {
    tema: "Cuartiles y diagrama de cajas",
    resumen: "Los cuartiles dividen los datos ordenados en cuatro partes iguales. El diagrama de cajas los resume en un gráfico y permite ver la dispersión y los datos atípicos.",
    objetivos: ["Calcularás los cuartiles de un conjunto de datos.", "Construirás un diagrama de cajas.", "Identificarás valores atípicos."],
    partes: [
      ["📊", "Qué son los cuartiles", "Son tres valores que dividen los datos ordenados en cuatro grupos con la misma cantidad de datos:\n- Q₁: deja el 25 % de datos por debajo.\n- Q₂: la mediana, el 50 %.\n- Q₃: deja el 75 % por debajo.", "En un curso de 40 estudiantes ordenados por nota, Q₁ separa a los 10 con notas más bajas.", "Los cuartiles dividen los datos en cuatro partes."],
      ["🔢", "Cómo calcularlos", "1) Ordena los datos. 2) Halla la mediana (Q₂). 3) Q₁ es la mediana de la mitad inferior. 4) Q₃ es la mediana de la mitad superior.", "Datos: 2, 4, 5, 7, 8, 9, 12, 15\n- Q₂ = (7 + 8) ÷ 2 = 7,5\n- Mitad inferior: 2, 4, 5, 7 → Q₁ = (4 + 5) ÷ 2 = 4,5\n- Mitad superior: 8, 9, 12, 15 → Q₃ = (9 + 12) ÷ 2 = 10,5", "Q₁ y Q₃ son las medianas de cada mitad."],
      ["↔️", "Rango intercuartílico", "El rango intercuartílico (RIC) es Q₃ − Q₁. Mide la dispersión del 50 % central de los datos y no se afecta por valores extremos.", "En el ejemplo: RIC = 10,5 − 4,5 = 6.", "RIC = Q₃ − Q₁."],
      ["📦", "El diagrama de cajas", "Se dibuja con cinco valores: mínimo, Q₁, mediana, Q₃ y máximo. La caja va de Q₁ a Q₃, con una línea en la mediana, y los «bigotes» se extienden hasta el mínimo y el máximo (sin incluir atípicos).", "Con los datos anteriores: mínimo 2, Q₁ 4,5, mediana 7,5, Q₃ 10,5, máximo 15.", "Cinco números resumen los datos."],
      ["⚠️", "Valores atípicos e interpretación", "Un dato es atípico si queda por debajo de Q₁ − 1,5·RIC o por encima de Q₃ + 1,5·RIC. Si la mediana está al centro de la caja, los datos son más simétricos; una caja larga indica mayor dispersión.", "Límites en el ejemplo: 4,5 − 9 = −4,5 y 10,5 + 9 = 19,5. Un dato de 40 sería atípico.", "Los atípicos están lejos del resto."]
    ],
    mapa: ["Cuartiles", [["Cuartiles", ["Q₁: 25 %", "Q₂: mediana", "Q₃: 75 %"]], ["RIC", ["Q₃ − Q₁"]], ["Diagrama de cajas", ["Mínimo", "Q₁", "Mediana", "Q₃", "Máximo"]], ["Atípicos", ["Q₁ − 1,5·RIC", "Q₃ + 1,5·RIC"]]]],
    tarjetas: [["¿Qué porcentaje de datos queda por debajo de Q₁?", "El 25 %."], ["¿Qué cuartil es la mediana?", "Q₂."], ["¿Cómo se calcula el RIC?", "Q₃ − Q₁."], ["¿Cuántos valores resume un diagrama de cajas?", "Cinco."], ["¿Qué es un dato atípico?", "Uno muy lejano al resto de los datos."], ["¿Cuál es Q₂ de 1, 3, 5, 7, 9?", "5."], ["¿Qué indica una caja larga?", "Mayor dispersión de los datos."]],
    videos: ["cuartiles y diagrama de cajas noveno grado", "cómo calcular cuartiles", "datos atípicos y rango intercuartílico"],
    n: 14
  },
  {
    tema: "Permutaciones y combinaciones",
    resumen: "Las permutaciones y combinaciones cuentan agrupaciones de objetos. Se distinguen por si el orden importa o no. En 9° se profundiza con repeticiones, disposiciones circulares y problemas de la vida diaria.",
    objetivos: ["Decidirás si usar permutación o combinación.", "Calcularás permutaciones con repetición.", "Resolverás problemas de conteo."],
    partes: [
      ["🔀", "Permutaciones", "Cuentan las formas de ordenar r elementos escogidos de n, cuando el orden importa: P(n, r) = n! ÷ (n − r)!. Si se ordenan todos, es n!.", "Para repartir 3 premios (oro, plata, bronce) entre 8 personas: P(8, 3) = 8 · 7 · 6 = 336.", "Orden importa: permutación."],
      ["👥", "Combinaciones", "Cuentan las formas de escoger r elementos de n, cuando el orden NO importa: C(n, r) = n! ÷ (r! · (n − r)!). Cumplen C(n, r) = C(n, n − r).", "Para escoger un comité de 3 personas entre 8: C(8, 3) = 56.", "Orden no importa: combinación."],
      ["🔁", "Permutaciones con repetición", "Cuando algunos elementos se repiten, se divide el factorial total entre los factoriales de las repeticiones: n! ÷ (a! · b! · ...).", "Las letras de «MAMA» (2 M y 2 A): 4! ÷ (2! · 2!) = 24 ÷ 4 = 6 formas.", "Divide entre las repeticiones."],
      ["⭕", "Permutaciones circulares", "Cuando los elementos se acomodan alrededor de una mesa, un giro completo no cuenta como una forma nueva: (n − 1)!.", "Cinco amigos se sientan en una mesa redonda: (5 − 1)! = 24 formas.", "En círculo: (n − 1)!."],
      ["🧠", "Cómo decidir", "Pregúntate: ¿importa el orden? Si sí, permutación; si no, combinación. Si hay objetos iguales, divide. Usa el principio multiplicativo cuando haya pasos sucesivos.", "- Un código de 4 cifras con dígitos repetibles: 10⁴ = 10.000.\n- Un equipo de 5 entre 12 jugadores: C(12, 5) = 792.", "Primero decide si importa el orden."]
    ],
    mapa: ["Conteo", [["Permutaciones", ["Importa el orden", "P(n, r)"]], ["Combinaciones", ["No importa el orden", "C(n, r)"]], ["Casos especiales", ["Con repetición", "Circulares: (n − 1)!"]], ["Decisión", ["¿Importa el orden?", "¿Hay repetidos?"]]]],
    tarjetas: [["¿Cuándo se usa una permutación?", "Cuando el orden importa."], ["¿Cuándo se usa una combinación?", "Cuando el orden no importa."], ["¿Cuánto es C(5, 2)?", "10."], ["¿Cuánto es P(5, 2)?", "20."], ["¿De cuántas formas se ordenan 4 libros distintos en un estante?", "24."], ["Letras de «AAB» ordenadas de distintas formas.", "3."], ["¿Cuántas formas hay de sentar 4 personas en una mesa redonda?", "6."]],
    videos: ["permutaciones y combinaciones noveno grado", "permutaciones con repetición", "problemas de conteo ejercicios"],
    n: 16
  },
  {
    tema: "Probabilidad de eventos compuestos",
    resumen: "Un evento compuesto combina dos o más eventos. Su probabilidad depende de si los eventos son independientes o dependientes, y de si pueden ocurrir juntos o no.",
    objetivos: ["Distinguirás eventos independientes y dependientes.", "Calcularás probabilidades de intersecciones y uniones.", "Usarás diagramas de árbol."],
    partes: [
      ["🎯", "Eventos compuestos", "Un evento compuesto se forma al combinar eventos simples con «y» (intersección, ambos ocurren) o con «o» (unión, ocurre al menos uno). Se calcula su probabilidad según cómo se relacionen.", "Al lanzar un dado: «sale par y mayor que 3» o «sale par o mayor que 4».", "«Y» es intersección; «o» es unión."],
      ["🎲", "Eventos independientes", "Son independientes si el resultado de uno no afecta al otro. Entonces P(A y B) = P(A) · P(B).", "Al lanzar dos monedas, P(cara y cara) = 1/2 · 1/2 = 1/4.", "Independientes: se multiplican."],
      ["🔗", "Eventos dependientes", "Son dependientes si el resultado del primero cambia la probabilidad del segundo, por ejemplo, al sacar sin devolver. Entonces P(A y B) = P(A) · P(B dado A).", "Una bolsa tiene 3 bolas rojas y 2 azules. Se sacan dos sin devolver:\nP(roja y roja) = 3/5 · 2/4 = 6/20 = 3/10.", "Sin devolver, la segunda probabilidad cambia."],
      ["➕", "Unión de eventos", "- Mutuamente excluyentes (no pueden ocurrir a la vez): P(A o B) = P(A) + P(B).\n- No excluyentes: P(A o B) = P(A) + P(B) − P(A y B).", "Al lanzar un dado: P(par o mayor que 4). Pares: 3/6; mayores que 4: 2/6; ambos (el 6): 1/6.\nP = 3/6 + 2/6 − 1/6 = 4/6 = 2/3.", "Si se pueden solapar, resta la intersección."],
      ["🌳", "Diagrama de árbol", "El árbol muestra todas las posibilidades paso a paso. Se multiplican las probabilidades a lo largo de cada rama y se suman las de las ramas que cumplen el evento.", "Al sacar dos bolas sin devolver de la bolsa de 3 rojas y 2 azules, P(una de cada color) = 3/5·2/4 + 2/5·3/4 = 6/20 + 6/20 = 3/5.", "Multiplica por la rama; suma entre ramas."]
    ],
    mapa: ["Eventos compuestos", [["Tipos", ["Intersección «y»", "Unión «o»"]], ["Independientes", ["P(A y B) = P(A)·P(B)"]], ["Dependientes", ["Sin reemplazo", "P(B dado A)"]], ["Unión", ["Excluyentes: suma", "No excluyentes: resta intersección"]]]],
    tarjetas: [["¿Qué son eventos independientes?", "Los que no se afectan entre sí."], ["¿Cómo se calcula P(A y B) si son independientes?", "P(A) · P(B)."], ["Probabilidad de dos caras en dos monedas.", "1/4."], ["¿Qué son eventos mutuamente excluyentes?", "Los que no pueden ocurrir a la vez."], ["¿Cómo es P(A o B) si son excluyentes?", "P(A) + P(B)."], ["¿Cómo es P(A o B) si no son excluyentes?", "P(A) + P(B) − P(A y B)."], ["¿Para qué sirve un diagrama de árbol?", "Para mostrar todas las posibilidades paso a paso."]],
    videos: ["probabilidad de eventos compuestos noveno grado", "eventos independientes y dependientes", "diagrama de árbol probabilidad"],
    n: 16
  }
];
