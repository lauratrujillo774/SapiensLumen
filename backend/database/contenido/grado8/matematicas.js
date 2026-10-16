// Teoría de Matemáticas, grado 8°. Formato compacto (ver grado6/matematicas.js).
export const area = "Matematicas";

export const temas = [
  {
    tema: "Números reales: racionales e irracionales",
    resumen: "Los números reales reúnen a los racionales y a los irracionales. Los irracionales tienen infinitas cifras decimales sin repetirse, como π y √2.",
    objetivos: ["Distinguirás números racionales e irracionales.", "Ubicarás números reales en la recta.", "Aproximarás irracionales con decimales."],
    partes: [
      ["🔢", "Los conjuntos numéricos", "Los números se organizan en conjuntos que se contienen unos a otros:\n- Naturales (N): 0, 1, 2, 3...\n- Enteros (Z): incluyen los negativos.\n- Racionales (Q): se escriben como fracción a/b.\n- Reales (R): incluyen a todos los anteriores y a los irracionales.", "El número 5 es natural, entero, racional (5/1) y real.", "N ⊂ Z ⊂ Q ⊂ R."],
      ["➗", "Números racionales", "Un racional se puede escribir como fracción de enteros. Su expresión decimal es exacta (0,25) o periódica (0,333...), es decir, con cifras que se repiten.", "- 3/4 = 0,75 (decimal exacto)\n- 2/3 = 0,666... (decimal periódico)\n- √9 = 3 (también es racional)", "Racional: decimal exacto o periódico."],
      ["🌀", "Números irracionales", "Un irracional no se puede escribir como fracción de enteros. Tiene infinitas cifras decimales que no se repiten. Los más conocidos son π (3,14159...), √2 (1,41421...) y el número e (2,71828...).", "- √2 y √5 son irracionales porque 2 y 5 no son cuadrados perfectos.\n- π es la razón entre el perímetro de una circunferencia y su diámetro.", "Irracional: decimales infinitos que no se repiten."],
      ["📏", "La recta real", "Todo número real corresponde a un punto de la recta numérica, y todo punto de la recta es un número real. Los irracionales también se pueden ubicar, por ejemplo con ayuda del teorema de Pitágoras.", "La diagonal de un cuadrado de lado 1 mide √2. Al trasladar esa medida sobre la recta desde el 0, ubicas √2 entre 1,4 y 1,5.", "La recta real no tiene huecos."],
      ["🎯", "Aproximaciones y comparación", "Los irracionales se aproximan con decimales: por defecto (un poco menos) o por exceso (un poco más). Para comparar, usa aproximaciones con las mismas cifras.", "√2 ≈ 1,41 (por defecto) y 1,42 (por exceso). Como π ≈ 3,14 y 22/7 ≈ 3,142..., 22/7 es una buena aproximación de π, pero no es igual a π.", "Un irracional se aproxima, pero nunca se escribe exacto en decimales."]
    ],
    mapa: ["Números reales", [["Racionales", ["Fracción a/b", "Decimal exacto o periódico"]], ["Irracionales", ["Decimales infinitos no periódicos", "π, √2, e"]], ["Reales", ["Racionales + irracionales", "Recta real completa"]], ["Aproximación", ["Por defecto", "Por exceso"]]]],
    tarjetas: [["¿Qué es un número racional?", "Uno que se puede escribir como fracción de enteros."], ["¿Cómo es el decimal de un irracional?", "Infinito y sin repetirse."], ["¿√2 es racional o irracional?", "Irracional."], ["¿√16 es racional o irracional?", "Racional, porque √16 = 4."], ["Nombra un número irracional famoso.", "π."], ["¿0,333... es racional?", "Sí, es 1/3."], ["¿Qué números forman los reales?", "Los racionales y los irracionales."]],
    videos: ["números reales octavo grado", "números racionales e irracionales", "cómo ubicar raíz de 2 en la recta"],
    n: 12
  },
  {
    tema: "Potencias y notación científica",
    resumen: "Las propiedades de las potencias facilitan calcular con números muy grandes o muy pequeños. La notación científica es una forma de escribirlos de manera abreviada.",
    objetivos: ["Aplicarás las propiedades de las potencias.", "Usarás exponentes cero y negativos.", "Escribirás y operarás números en notación científica."],
    partes: [
      ["⚡", "Propiedades de las potencias", "Con bases iguales:\n- aᵐ · aⁿ = aᵐ⁺ⁿ\n- aᵐ ÷ aⁿ = aᵐ⁻ⁿ\n- (aᵐ)ⁿ = aᵐ·ⁿ\nCon exponentes iguales:\n- (a·b)ⁿ = aⁿ · bⁿ", "- 2³ · 2⁴ = 2⁷ = 128\n- 5⁶ ÷ 5² = 5⁴\n- (3²)³ = 3⁶\n- (2·3)² = 2² · 3² = 36", "Misma base: sumas o restas exponentes."],
      ["0️⃣", "Exponente cero y negativo", "- Todo número distinto de cero elevado a 0 es 1: a⁰ = 1.\n- Un exponente negativo indica el inverso: a⁻ⁿ = 1/aⁿ.", "- 7⁰ = 1\n- 2⁻³ = 1/2³ = 1/8\n- 10⁻² = 1/100 = 0,01", "Exponente negativo = inverso."],
      ["🔬", "Qué es la notación científica", "Es una forma de escribir un número como a × 10ⁿ, donde a está entre 1 y 10 (1 ≤ a < 10) y n es un entero. Sirve para números muy grandes o muy pequeños.", "- La distancia de la Tierra al Sol, 150.000.000 km, es 1,5 × 10⁸ km.\n- Un virus mide 0,0000001 m = 1 × 10⁻⁷ m.", "Un número entre 1 y 10 por una potencia de 10."],
      ["🔁", "Convertir a notación científica", "- Número grande: cuenta cuántos lugares corres la coma hacia la izquierda; ese es el exponente positivo.\n- Número pequeño: cuenta los lugares hacia la derecha; el exponente es negativo.", "- 3.500.000 = 3,5 × 10⁶\n- 0,00042 = 4,2 × 10⁻⁴", "Coma a la izquierda: exponente +; a la derecha: −."],
      ["🧮", "Operar con notación científica", "- Multiplicación: se multiplican los números y se suman los exponentes.\n- División: se dividen los números y se restan los exponentes.\n- Si queda fuera de 1 a 10, se ajusta.", "(3 × 10⁴) · (2 × 10³) = 6 × 10⁷\n(8 × 10⁵) ÷ (2 × 10²) = 4 × 10³", "Multiplica números y suma exponentes."]
    ],
    mapa: ["Potencias y notación científica", [["Propiedades", ["Producto: suma exponentes", "Cociente: resta exponentes", "Potencia de potencia"]], ["Casos especiales", ["a⁰ = 1", "a⁻ⁿ = 1/aⁿ"]], ["Notación científica", ["a × 10ⁿ", "1 ≤ a < 10"]], ["Usos", ["Distancias astronómicas", "Tamaños microscópicos"]]]],
    tarjetas: [["¿Cuánto es 2⁵ · 2²?", "2⁷ = 128."], ["¿Cuánto es 10⁻³?", "0,001."], ["¿Cuánto es 9⁰?", "1."], ["Escribe 45.000 en notación científica.", "4,5 × 10⁴."], ["Escribe 0,0006 en notación científica.", "6 × 10⁻⁴."], ["¿Cuánto es (2 × 10³) · (4 × 10²)?", "8 × 10⁵."], ["¿Qué es 3⁻²?", "1/9."]],
    videos: ["notación científica octavo grado", "propiedades de las potencias", "exponentes negativos"],
    n: 14
  },
  {
    tema: "Polinomios: suma, resta y multiplicación",
    resumen: "Un polinomio es una suma de términos algebraicos. Se pueden sumar, restar y multiplicar con reglas que se basan en los términos semejantes y la propiedad distributiva.",
    objetivos: ["Reconocerás monomios y polinomios.", "Sumarás y restarás polinomios.", "Multiplicarás polinomios."],
    partes: [
      ["🧱", "Monomios y polinomios", "Un monomio tiene un coeficiente y una parte literal con exponentes enteros no negativos (5x², −3xy). Un polinomio es una suma de monomios. Según el número de términos: binomio (2), trinomio (3). El grado de un polinomio es el mayor exponente.", "P(x) = 3x² − 5x + 4 es un trinomio de grado 2.", "El grado es el mayor exponente."],
      ["📋", "Ordenar y completar", "Para operar es útil ordenar los términos de mayor a menor grado y dejar espacio (con coeficiente 0) donde falte un término.", "x³ + 2x − 7 se completa como x³ + 0x² + 2x − 7.", "Ordenar evita errores."],
      ["➕", "Suma y resta", "Se agrupan los términos semejantes y se suman o restan sus coeficientes. Al restar, se cambia el signo a todos los términos del polinomio que se resta.", "(3x² + 2x − 1) + (x² − 5x + 4) = 4x² − 3x + 3\n(5x² − 2x) − (3x² − x + 1) = 2x² − x − 1", "Agrupa semejantes; al restar, cambia los signos."],
      ["✖️", "Monomio por polinomio", "Se multiplica el monomio por cada término del polinomio (propiedad distributiva), aplicando la ley de signos y sumando exponentes.", "2x · (x² − 3x + 1) = 2x³ − 6x² + 2x", "Reparte el monomio entre todos los términos."],
      ["✖️", "Polinomio por polinomio", "Se multiplica cada término del primero por cada término del segundo, y luego se reducen los términos semejantes.", "(x + 2)(x + 3) = x² + 3x + 2x + 6 = x² + 5x + 6", "Cada término por cada término."]
    ],
    mapa: ["Polinomios", [["Elementos", ["Monomio", "Binomio", "Trinomio", "Grado"]], ["Suma y resta", ["Términos semejantes", "Cambiar signos al restar"]], ["Multiplicación", ["Monomio × polinomio", "Polinomio × polinomio"]], ["Reglas", ["Propiedad distributiva", "Ley de signos", "Suma de exponentes"]]]],
    tarjetas: [["¿Cuál es el grado de 4x³ − x + 2?", "3."], ["¿Cómo se llama un polinomio con 3 términos?", "Trinomio."], ["Suma (2x + 3) + (x − 5).", "3x − 2."], ["Resta (4x²) − (x² − 1).", "3x² + 1."], ["Multiplica 3x · (x + 2).", "3x² + 6x."], ["Multiplica (x + 1)(x + 4).", "x² + 5x + 4."], ["¿Qué se hace con los signos al restar un polinomio?", "Se cambian los signos de todos sus términos."]],
    videos: ["polinomios octavo grado", "suma resta y multiplicación de polinomios", "grado de un polinomio"],
    n: 14
  },
  {
    tema: "Productos notables",
    resumen: "Los productos notables son multiplicaciones de polinomios que siguen patrones y se pueden resolver rápido sin multiplicar término por término.",
    objetivos: ["Aplicarás el cuadrado de un binomio.", "Aplicarás el producto de suma por diferencia.", "Aplicarás el producto de binomios con término común."],
    partes: [
      ["⬜", "Cuadrado de una suma", "(a + b)² = a² + 2ab + b². Es el cuadrado del primero, más el doble del primero por el segundo, más el cuadrado del segundo.", "(x + 3)² = x² + 2·x·3 + 3² = x² + 6x + 9", "Cuadrado del primero + doble producto + cuadrado del segundo."],
      ["⬜", "Cuadrado de una diferencia", "(a − b)² = a² − 2ab + b². Solo cambia el signo del término del medio.", "(2x − 1)² = (2x)² − 2·2x·1 + 1² = 4x² − 4x + 1", "El término del medio lleva el signo de la operación."],
      ["➕➖", "Suma por diferencia", "(a + b)(a − b) = a² − b². Se llama diferencia de cuadrados.", "(x + 5)(x − 5) = x² − 25\n(3m + 2)(3m − 2) = 9m² − 4", "Suma por diferencia da diferencia de cuadrados."],
      ["🧩", "Binomios con término común", "(x + a)(x + b) = x² + (a + b)x + ab. Se suman los números para el término del medio y se multiplican para el último.", "(x + 2)(x + 7) = x² + 9x + 14\n(x − 3)(x + 5) = x² + 2x − 15", "Suma los números y multiplícalos."],
      ["🧠", "Aplicaciones", "Sirven para calcular mentalmente y para hallar áreas. En geometría, (a + b)² es el área de un cuadrado de lado a + b, que se divide en un cuadrado a², un cuadrado b² y dos rectángulos ab.", "51² = (50 + 1)² = 2500 + 100 + 1 = 2601\n49 · 51 = (50 − 1)(50 + 1) = 2500 − 1 = 2499", "Los productos notables ahorran cálculos."]
    ],
    mapa: ["Productos notables", [["Cuadrado de binomio", ["(a + b)² = a² + 2ab + b²", "(a − b)² = a² − 2ab + b²"]], ["Suma por diferencia", ["(a + b)(a − b) = a² − b²"]], ["Término común", ["(x + a)(x + b)", "x² + (a + b)x + ab"]], ["Usos", ["Cálculo mental", "Áreas"]]]],
    tarjetas: [["Desarrolla (x + 4)².", "x² + 8x + 16."], ["Desarrolla (x − 2)².", "x² − 4x + 4."], ["Desarrolla (x + 6)(x − 6).", "x² − 36."], ["Desarrolla (x + 3)(x + 5).", "x² + 8x + 15."], ["Calcula 31² con un producto notable.", "(30 + 1)² = 961."], ["¿Cómo se llama el producto (a + b)(a − b)?", "Suma por diferencia o diferencia de cuadrados."], ["¿Qué lleva el término del medio en (a − b)²?", "−2ab."]],
    videos: ["productos notables octavo grado", "cuadrado de un binomio", "suma por diferencia"],
    n: 14
  },
  {
    tema: "Factorización",
    resumen: "Factorizar es escribir un polinomio como producto de factores más simples. Es lo contrario de multiplicar y sirve para simplificar y resolver ecuaciones.",
    objetivos: ["Factorizarás por factor común.", "Factorizarás diferencias de cuadrados y trinomios cuadrados perfectos.", "Factorizarás trinomios de la forma x² + bx + c."],
    partes: [
      ["🔎", "Qué es factorizar", "Factorizar es descomponer una expresión en factores cuyo producto la reproduce. Se comprueba multiplicando los factores: debe dar el polinomio original.", "6 = 2 · 3 y x² − 9 = (x + 3)(x − 3).", "Factorizar es lo inverso de multiplicar."],
      ["🧩", "Factor común", "Se busca el mayor factor (número y letras) que está en todos los términos y se saca como factor.", "- 6x² + 9x = 3x(2x + 3)\n- 4a³ − 8a² = 4a²(a − 2)", "Saca lo que se repite en todos los términos."],
      ["⬜", "Diferencia de cuadrados", "a² − b² = (a + b)(a − b). Se halla la raíz de cada cuadrado.", "- x² − 49 = (x + 7)(x − 7)\n- 9m² − 16 = (3m + 4)(3m − 4)", "Dos cuadrados restados se factorizan como suma por diferencia."],
      ["⬜", "Trinomio cuadrado perfecto", "Un trinomio es cuadrado perfecto si el primer y el tercer término son cuadrados y el del medio es el doble producto de sus raíces. Se factoriza como (a ± b)².", "- x² + 10x + 25 = (x + 5)²\n- 4x² − 12x + 9 = (2x − 3)²", "Se reconoce porque viene de (a ± b)²."],
      ["🔢", "Trinomio x² + bx + c", "Se buscan dos números que multiplicados den c y sumados den b.", "x² + 5x + 6: los números son 2 y 3 (2·3 = 6 y 2+3 = 5).\nx² + 5x + 6 = (x + 2)(x + 3)\nx² − x − 12 = (x − 4)(x + 3)", "Busca dos números: producto c y suma b."]
    ],
    mapa: ["Factorización", [["Factor común", ["Sacar lo que se repite"]], ["Diferencia de cuadrados", ["a² − b² = (a + b)(a − b)"]], ["Trinomio cuadrado perfecto", ["(a ± b)²"]], ["Trinomio x² + bx + c", ["Dos números: producto c y suma b"]]]],
    tarjetas: [["Factoriza 5x + 10.", "5(x + 2)."], ["Factoriza x² − 25.", "(x + 5)(x − 5)."], ["Factoriza x² + 6x + 9.", "(x + 3)²."], ["Factoriza x² + 7x + 12.", "(x + 3)(x + 4)."], ["Factoriza 3a² − 6a.", "3a(a − 2)."], ["¿Cómo se comprueba una factorización?", "Multiplicando los factores."], ["¿Qué es lo contrario de factorizar?", "Multiplicar."]],
    videos: ["factorización octavo grado", "factor común y diferencia de cuadrados", "factorización de trinomios"],
    n: 14
  },
  {
    tema: "Ecuaciones lineales y problemas con ecuaciones",
    resumen: "Las ecuaciones lineales con una incógnita permiten resolver muchos problemas de la vida diaria: edades, números, dinero y medidas.",
    objetivos: ["Resolverás ecuaciones con paréntesis y fracciones.", "Resolverás ecuaciones con la incógnita en ambos lados.", "Plantearás problemas con ecuaciones."],
    partes: [
      ["⚖️", "Repaso de ecuaciones", "Una ecuación lineal tiene una incógnita con exponente 1. Se resuelve despejando con operaciones inversas, haciendo lo mismo en ambos lados.", "5x − 3 = 12 → 5x = 15 → x = 3", "Despejar es deshacer las operaciones."],
      ["🔲", "Ecuaciones con paréntesis", "Se elimina el paréntesis con la propiedad distributiva, luego se agrupan los términos.", "3(x − 2) = 2x + 5\n- 3x − 6 = 2x + 5\n- 3x − 2x = 5 + 6\n- x = 11", "Primero distribuye."],
      ["↔️", "Incógnita en los dos lados", "Se pasan los términos con x a un lado y los números al otro, cambiando de signo.", "7x − 4 = 3x + 8\n- 7x − 3x = 8 + 4\n- 4x = 12\n- x = 3", "Agrupa las x en un lado."],
      ["➗", "Ecuaciones con fracciones", "Se multiplican ambos lados por el mcm de los denominadores para eliminarlos.", "x/2 + x/3 = 10\n- mcm = 6 → 3x + 2x = 60\n- 5x = 60\n- x = 12", "Multiplica por el mcm para quitar denominadores."],
      ["🧩", "Problemas con ecuaciones", "Pasos: 1) lee y define la incógnita, 2) escribe la ecuación, 3) resuélvela, 4) comprueba y responde.", "- Tres números consecutivos suman 63: x + (x+1) + (x+2) = 63 → x = 20. Son 20, 21 y 22.\n- Ana tiene el triple de la edad de su hijo y juntos suman 48 años: x + 3x = 48 → x = 12. El hijo tiene 12 y Ana 36.", "Traduce el enunciado a una ecuación."]
    ],
    mapa: ["Ecuaciones lineales", [["Resolver", ["Operaciones inversas", "Paréntesis: distribuir"]], ["Incógnita en ambos lados", ["Agrupar x", "Cambiar de signo"]], ["Con fracciones", ["Multiplicar por el mcm"]], ["Problemas", ["Definir incógnita", "Plantear", "Comprobar"]]]],
    tarjetas: [["Resuelve 2(x + 3) = 14.", "x = 4."], ["Resuelve 5x − 2 = 3x + 6.", "x = 4."], ["Resuelve x/4 + 1 = 3.", "x = 8."], ["¿Qué se hace primero con un paréntesis?", "Se distribuye."], ["Tres números consecutivos suman 30. ¿Cuáles son?", "9, 10 y 11."], ["¿Por qué se multiplica por el mcm?", "Para eliminar los denominadores."], ["¿Qué se hace al final de un problema?", "Comprobar la respuesta."]],
    videos: ["ecuaciones lineales octavo grado", "problemas con ecuaciones de primer grado", "ecuaciones con fracciones"],
    n: 14
  },
  {
    tema: "Sistemas de ecuaciones lineales 2x2",
    resumen: "Un sistema 2x2 tiene dos ecuaciones y dos incógnitas. Resolverlo es encontrar los valores que cumplen las dos ecuaciones al mismo tiempo.",
    objetivos: ["Resolverás sistemas por sustitución, igualación y reducción.", "Interpretarás la solución gráficamente.", "Plantearás problemas con sistemas."],
    partes: [
      ["🔗", "Qué es un sistema", "Un sistema de ecuaciones 2x2 son dos ecuaciones lineales con las mismas incógnitas x e y. La solución es un par (x, y) que cumple las dos.", "x + y = 10 y x − y = 2. La solución es x = 6, y = 4 porque 6 + 4 = 10 y 6 − 4 = 2.", "La solución cumple las dos ecuaciones a la vez."],
      ["🔁", "Método de sustitución", "Se despeja una incógnita en una ecuación y se reemplaza en la otra.", "x + y = 10 y x − y = 2\n- De la primera: y = 10 − x\n- En la segunda: x − (10 − x) = 2 → 2x = 12 → x = 6\n- y = 10 − 6 = 4", "Despeja una letra y reemplázala."],
      ["🟰", "Método de igualación", "Se despeja la misma incógnita en las dos ecuaciones y se igualan las expresiones.", "y = 10 − x y y = x − 2\n- 10 − x = x − 2 → 12 = 2x → x = 6", "Despeja la misma letra en las dos y compárlas."],
      ["➖", "Método de reducción", "Se suman o restan las ecuaciones (multiplicándolas antes si hace falta) para eliminar una incógnita.", "x + y = 10 y x − y = 2\n- Sumando: 2x = 12 → x = 6\n- Luego y = 4", "Suma las ecuaciones para eliminar una incógnita."],
      ["📈", "Interpretación gráfica y casos", "Cada ecuación es una recta. La solución es el punto donde se cortan. Casos: se cortan en un punto (solución única), son paralelas (sin solución) o son la misma recta (infinitas soluciones).", "Si dos rectas tienen la misma pendiente y distinto corte con el eje y, son paralelas y el sistema no tiene solución.", "La solución es el punto de corte de las rectas."]
    ],
    mapa: ["Sistemas 2x2", [["Qué es", ["Dos ecuaciones", "Dos incógnitas"]], ["Métodos", ["Sustitución", "Igualación", "Reducción"]], ["Gráfica", ["Dos rectas", "Punto de corte"]], ["Casos", ["Solución única", "Sin solución", "Infinitas soluciones"]]]],
    tarjetas: [["¿Qué es la solución de un sistema?", "El par de valores que cumple las dos ecuaciones."], ["Resuelve x + y = 7 y x − y = 1.", "x = 4, y = 3."], ["¿Qué método suma las ecuaciones?", "El de reducción."], ["¿Qué representa gráficamente la solución?", "El punto donde se cortan las rectas."], ["¿Qué pasa si las rectas son paralelas?", "El sistema no tiene solución."], ["Si x = 2 y x + y = 5, ¿cuánto vale y?", "3."], ["¿Cuántas soluciones tiene si las rectas coinciden?", "Infinitas."]],
    videos: ["sistemas de ecuaciones 2x2 octavo grado", "método de sustitución, igualación y reducción", "interpretación gráfica de un sistema"],
    n: 14
  },
  {
    tema: "Función lineal y afín: pendiente y gráfica",
    resumen: "Las funciones lineal y afín describen situaciones donde una cantidad cambia a ritmo constante. Su gráfica es una recta con una pendiente y un punto de corte.",
    objetivos: ["Distinguirás función lineal y afín.", "Calcularás la pendiente.", "Graficarás e interpretarás una recta."],
    partes: [
      ["📈", "Qué es una función", "Una función relaciona cada valor de x con un único valor de y. Se puede representar con una tabla, una gráfica o una fórmula.", "Si y = 2x, cuando x = 3 entonces y = 6.", "Cada x tiene un solo y."],
      ["➡️", "Función lineal", "Tiene la forma y = mx. Su gráfica es una recta que pasa por el origen (0, 0). Representa una proporcionalidad directa. El número m es la pendiente.", "Si el kilo de arroz cuesta $4.000, el precio es y = 4.000x. Con 3 kg pagas $12.000.", "y = mx pasa por el origen."],
      ["📐", "Función afín", "Tiene la forma y = mx + b. La gráfica es una recta que corta el eje y en el punto (0, b). El número b es el intercepto.", "Un taxi cobra $3.000 de banderazo más $1.000 por kilómetro: y = 1.000x + 3.000. Aunque no recorras nada, ya pagas $3.000.", "En y = mx + b, b es el valor inicial."],
      ["⛰️", "La pendiente", "La pendiente m mide la inclinación de la recta: m = (y₂ − y₁) ÷ (x₂ − x₁).\n- Si m > 0, la función crece.\n- Si m < 0, decrece.\n- Si m = 0, es horizontal.", "La recta que pasa por (0, 3) y (2, 7) tiene m = (7 − 3) ÷ (2 − 0) = 2. Su ecuación es y = 2x + 3.", "La pendiente es cuánto sube y por cada unidad que avanza x."],
      ["🖊️", "Graficar una recta", "Se hace una tabla con dos o tres valores de x, se calculan los de y, se ubican los puntos en el plano y se unen con una recta.", "Para y = x + 1:\n- x = 0 → y = 1\n- x = 2 → y = 3\nSe unen (0, 1) y (2, 3).", "Dos puntos bastan para trazar una recta."]
    ],
    mapa: ["Función lineal y afín", [["Lineal", ["y = mx", "Pasa por el origen"]], ["Afín", ["y = mx + b", "Corta el eje y en b"]], ["Pendiente", ["m = Δy ÷ Δx", "Crece o decrece"]], ["Gráfica", ["Recta", "Tabla de valores"]]]],
    tarjetas: [["¿Cuál es la forma de una función lineal?", "y = mx."], ["¿Cuál es la forma de una función afín?", "y = mx + b."], ["¿Qué indica la pendiente?", "La inclinación de la recta."], ["¿Qué indica b en y = mx + b?", "Dónde corta la recta al eje y."], ["Si m > 0, ¿la función crece o decrece?", "Crece."], ["Pendiente de la recta por (0, 1) y (2, 5).", "2."], ["¿Cuántos puntos bastan para graficar una recta?", "Dos."]],
    videos: ["función lineal y afín octavo grado", "pendiente de una recta", "cómo graficar una función lineal"],
    n: 14
  },
  {
    tema: "Teorema de Pitágoras",
    resumen: "En un triángulo rectángulo, el cuadrado de la hipotenusa es igual a la suma de los cuadrados de los catetos. Permite calcular distancias y lados desconocidos.",
    objetivos: ["Enunciarás el teorema de Pitágoras.", "Calcularás lados de triángulos rectángulos.", "Resolverás problemas de aplicación."],
    partes: [
      ["📐", "El triángulo rectángulo", "Tiene un ángulo de 90°. Los lados que forman el ángulo recto se llaman catetos. El lado opuesto al ángulo recto, el más largo, se llama hipotenusa.", "En una escuadra, los dos lados cortos son los catetos y el lado inclinado, la hipotenusa.", "La hipotenusa es siempre el lado más largo."],
      ["📜", "El teorema", "En todo triángulo rectángulo: a² + b² = c², donde a y b son los catetos y c es la hipotenusa. Se le atribuye a Pitágoras, filósofo y matemático griego.", "Triángulo de catetos 3 y 4:\n- 3² + 4² = 9 + 16 = 25\n- c = √25 = 5", "Cateto² + cateto² = hipotenusa²."],
      ["🔍", "Hallar la hipotenusa", "Se elevan al cuadrado los catetos, se suman y se saca la raíz cuadrada.", "Catetos 6 y 8:\n- c² = 36 + 64 = 100\n- c = 10", "Suma los cuadrados y saca la raíz."],
      ["🔍", "Hallar un cateto", "Se resta al cuadrado de la hipotenusa el cuadrado del otro cateto y se saca la raíz.", "Hipotenusa 13 y un cateto 5:\n- b² = 169 − 25 = 144\n- b = 12", "Resta cuando buscas un cateto."],
      ["🪜", "Aplicaciones", "Sirve para hallar diagonales, alturas y distancias.", "- Una escalera de 5 m se apoya con su base a 3 m de la pared. Altura: √(25 − 9) = 4 m.\n- La diagonal de una cancha de 6 m por 8 m mide 10 m.", "Pitágoras sirve donde haya un ángulo recto."]
    ],
    mapa: ["Teorema de Pitágoras", [["Triángulo rectángulo", ["Dos catetos", "Una hipotenusa"]], ["Teorema", ["a² + b² = c²"]], ["Hallar lados", ["Hipotenusa: sumar", "Cateto: restar"]], ["Usos", ["Diagonales", "Alturas", "Distancias"]]]],
    tarjetas: [["¿Qué dice el teorema de Pitágoras?", "a² + b² = c²: la suma de los cuadrados de los catetos es el cuadrado de la hipotenusa."], ["¿Cuál es el lado más largo de un triángulo rectángulo?", "La hipotenusa."], ["Hallar la hipotenusa con catetos 5 y 12.", "13."], ["Hallar el cateto con hipotenusa 10 y un cateto 6.", "8."], ["¿Cuál es una terna pitagórica?", "3, 4 y 5."], ["Diagonal de un cuadrado de lado 1.", "√2."], ["¿El teorema sirve con cualquier triángulo?", "No, solo con los rectángulos."]],
    videos: ["teorema de Pitágoras octavo grado", "aplicaciones del teorema de Pitágoras", "ternas pitagóricas"],
    n: 12
  },
  {
    tema: "Congruencia y semejanza de triángulos",
    resumen: "Dos triángulos son congruentes si tienen la misma forma y el mismo tamaño. Son semejantes si tienen la misma forma pero distinto tamaño. Ambos conceptos sirven para medir distancias que no podemos alcanzar.",
    objetivos: ["Aplicarás los criterios de congruencia.", "Aplicarás los criterios de semejanza.", "Resolverás problemas con razón de semejanza."],
    partes: [
      ["🟰", "Triángulos congruentes", "Son triángulos que se pueden superponer exactamente: sus lados y ángulos correspondientes son iguales. Se escribe ≅.", "Dos baldosas triangulares iguales son congruentes.", "Congruentes: igual forma e igual tamaño."],
      ["✅", "Criterios de congruencia", "Para saber si dos triángulos son congruentes basta con:\n- LLL: tres lados iguales.\n- LAL: dos lados y el ángulo entre ellos.\n- ALA: dos ángulos y el lado entre ellos.", "Si dos triángulos tienen lados de 3, 4 y 5 cm, son congruentes por LLL.", "No hace falta comparar los seis elementos."],
      ["🔍", "Triángulos semejantes", "Tienen la misma forma: sus ángulos correspondientes son iguales y sus lados correspondientes son proporcionales. Se escribe ∼. La razón entre lados correspondientes se llama razón de semejanza (k).", "Un triángulo de lados 3, 4 y 5 y otro de 6, 8 y 10 son semejantes con k = 2.", "Semejantes: misma forma, distinto tamaño."],
      ["✅", "Criterios de semejanza", "- AA: dos ángulos iguales.\n- LAL: dos lados proporcionales y el ángulo entre ellos igual.\n- LLL: tres lados proporcionales.", "Si dos triángulos tienen ángulos de 50° y 60°, son semejantes por AA (el tercero será 70° en ambos).", "Con dos ángulos iguales basta."],
      ["🌳", "Aplicaciones", "La semejanza permite medir alturas con sombras. Los triángulos formados por un objeto y su sombra son semejantes si el sol da en el mismo ángulo. Si la razón de semejanza es k, las áreas se relacionan por k².", "Un poste de 2 m tiene sombra de 3 m. A la misma hora, un árbol tiene sombra de 12 m.\n- 2/3 = h/12 → h = 8 m.", "Si k es la razón de lados, el área cambia en k²."]
    ],
    mapa: ["Congruencia y semejanza", [["Congruencia", ["Igual forma y tamaño", "LLL, LAL, ALA"]], ["Semejanza", ["Igual forma", "Lados proporcionales", "AA, LAL, LLL"]], ["Razón de semejanza", ["k = lado ÷ lado", "Áreas: k²"]], ["Aplicaciones", ["Sombras y alturas", "Mapas y planos"]]]],
    tarjetas: [["¿Qué son triángulos congruentes?", "Los que tienen la misma forma y el mismo tamaño."], ["¿Qué significa LLL?", "Tres lados iguales."], ["¿Qué son triángulos semejantes?", "Los que tienen la misma forma pero distinto tamaño."], ["¿Qué criterio de semejanza usa dos ángulos?", "AA."], ["Triángulos de lados 2,3,4 y 4,6,8: ¿razón de semejanza?", "2."], ["Si k = 3, ¿cuántas veces más grande es el área?", "9 veces."], ["¿Para qué sirve la semejanza?", "Para medir alturas y distancias que no se pueden medir directamente."]],
    videos: ["congruencia y semejanza de triángulos octavo grado", "criterios de semejanza AA LAL LLL", "medir alturas con sombras"],
    n: 14
  },
  {
    tema: "Teorema de Tales",
    resumen: "El teorema de Tales dice que unas rectas paralelas cortan a dos transversales en segmentos proporcionales. Es una herramienta para calcular longitudes desconocidas.",
    objetivos: ["Enunciarás el teorema de Tales.", "Calcularás longitudes con proporciones.", "Relacionarás Tales con la semejanza."],
    partes: [
      ["📜", "Quién fue Tales", "Tales de Mileto fue un filósofo y matemático griego del siglo VI a. C. Según la tradición, midió la altura de una pirámide de Egipto comparando su sombra con la de un bastón.", "Cuando la sombra de un bastón mide lo mismo que el bastón, la sombra de la pirámide mide lo mismo que su altura.", "Tales usó las proporciones para medir."],
      ["📏", "El teorema", "Si tres o más rectas paralelas cortan a dos transversales, los segmentos que determinan en una transversal son proporcionales a los segmentos correspondientes de la otra: AB/BC = A'B'/B'C'.", "Si AB = 4, BC = 6 y A'B' = 2, entonces B'C' = 6 × 2 ÷ 4 = 3.", "Paralelas cortan transversales en partes proporcionales."],
      ["🔺", "El triángulo de Tales", "Si una recta paralela a un lado de un triángulo corta a los otros dos lados, forma un triángulo más pequeño semejante al original. Sus lados son proporcionales.", "En un triángulo ABC, una recta paralela a BC corta AB en D y AC en E: AD/AB = AE/AC = DE/BC.", "Una paralela a un lado forma un triángulo semejante."],
      ["🔢", "Resolver problemas", "Se plantea una proporción con los segmentos correspondientes y se despeja el valor desconocido.", "AD = 3, DB = 5 y AE = 6. Se pide EC:\n- 3/5 = 6/EC → EC = 10", "Plantea la proporción y multiplica en cruz."],
      ["🏗️", "Aplicaciones", "Se usa para medir alturas de edificios, anchos de ríos y para dividir un segmento en partes iguales con regla y paralelas.", "Para medir el ancho de un río, se forman triángulos semejantes con estacas en la orilla.", "Tales sirve para medir lo que no se puede alcanzar."]
    ],
    mapa: ["Teorema de Tales", [["Enunciado", ["Paralelas y transversales", "Segmentos proporcionales"]], ["Triángulo de Tales", ["Paralela a un lado", "Triángulo semejante"]], ["Cálculo", ["Proporción", "Multiplicar en cruz"]], ["Aplicaciones", ["Alturas", "Anchos de ríos"]]]],
    tarjetas: [["¿Qué dice el teorema de Tales?", "Rectas paralelas cortan a dos transversales en segmentos proporcionales."], ["¿Quién fue Tales?", "Un filósofo y matemático griego de Mileto."], ["Si AB = 2, BC = 3 y A'B' = 4, ¿cuánto vale B'C'?", "6."], ["¿Qué se forma al trazar una paralela a un lado de un triángulo?", "Un triángulo semejante al original."], ["¿Con qué concepto se relaciona Tales?", "Con la semejanza de triángulos."], ["¿Cómo se resuelve un problema con Tales?", "Planteando una proporción."], ["¿Para qué sirve el teorema?", "Para calcular longitudes desconocidas."]],
    videos: ["teorema de Tales octavo grado", "triángulo de Tales ejemplos", "aplicaciones del teorema de Tales"],
    n: 12
  },
  {
    tema: "Transformaciones en el plano: traslación, rotación y reflexión",
    resumen: "Las transformaciones geométricas mueven una figura en el plano. La traslación, la rotación y la reflexión son isometrías: conservan la forma y el tamaño.",
    objetivos: ["Aplicarás traslaciones a figuras.", "Aplicarás rotaciones y reflexiones.", "Describirás transformaciones con coordenadas."],
    partes: [
      ["🔄", "Qué es una transformación", "Es un movimiento que cambia la posición de una figura en el plano. Si la figura conserva su forma y su tamaño, la transformación es una isometría. La figura original es la imagen inicial y la nueva, su imagen.", "Mover una ficha de ajedrez de una casilla a otra es una transformación.", "Isometría: no cambia forma ni tamaño."],
      ["➡️", "Traslación", "Mueve todos los puntos de la figura la misma distancia, en la misma dirección y sentido, según un vector (a, b). Un punto (x, y) pasa a ser (x + a, y + b).", "Se traslada el triángulo A(1, 1), B(3, 1), C(1, 4) con el vector (2, −3):\n- A' = (3, −2)\n- B' = (5, −2)\n- C' = (3, 1)", "Traslación: sumar el vector a cada punto."],
      ["🔃", "Rotación", "Gira la figura un ángulo dado alrededor de un punto (el centro). En el plano, una rotación de 90° en sentido contrario a las manecillas del reloj, con centro en el origen, convierte (x, y) en (−y, x).", "El punto (2, 1) rotado 90° queda en (−1, 2). Rotado 180° queda en (−2, −1).", "Rotar es girar alrededor de un centro."],
      ["🪞", "Reflexión o simetría axial", "Voltea la figura respecto de una recta (eje de simetría), como un espejo.\n- Respecto del eje x: (x, y) → (x, −y).\n- Respecto del eje y: (x, y) → (−x, y).", "El reflejo de (3, 2) respecto del eje y es (−3, 2).", "La reflexión invierte la figura como en un espejo."],
      ["🎨", "Simetrías y teselados", "Una figura tiene simetría si al reflejarla o rotarla coincide consigo misma. Un teselado (o mosaico) cubre el plano con figuras que se repiten sin dejar huecos, usando traslaciones, giros y reflexiones, como en los diseños de los azulejos.", "Un hexágono regular tesela el plano; también lo hacen los cuadrados y los triángulos equiláteros.", "Los teselados combinan transformaciones."]
    ],
    mapa: ["Transformaciones", [["Isometrías", ["Conservan forma y tamaño"]], ["Traslación", ["Vector (a, b)", "(x + a, y + b)"]], ["Rotación", ["Centro y ángulo", "90°: (−y, x)"]], ["Reflexión", ["Eje de simetría", "Eje x: (x, −y)", "Eje y: (−x, y)"]]]],
    tarjetas: [["¿Qué es una isometría?", "Una transformación que conserva la forma y el tamaño."], ["Traslada (2, 3) con el vector (1, −2).", "(3, 1)."], ["Refleja (4, 5) respecto del eje x.", "(4, −5)."], ["Refleja (4, 5) respecto del eje y.", "(−4, 5)."], ["Rota (1, 0) 90° con centro en el origen.", "(0, 1)."], ["¿Qué es un teselado?", "Cubrir el plano con figuras repetidas sin huecos."], ["¿Qué necesita una rotación?", "Un centro y un ángulo."]],
    videos: ["transformaciones en el plano octavo grado", "traslación rotación y reflexión", "teselados y simetrías"],
    n: 14
  },
  {
    tema: "Área y volumen de cilindros, conos y pirámides",
    resumen: "Los cilindros, conos y pirámides son cuerpos geométricos muy comunes. Con sus fórmulas se calcula cuánto material los cubre (área) y cuánto espacio ocupan (volumen).",
    objetivos: ["Calcularás el área y el volumen de un cilindro.", "Calcularás el área y el volumen de un cono.", "Calcularás el volumen de una pirámide."],
    partes: [
      ["🥫", "El cilindro", "Tiene dos bases circulares iguales y una superficie lateral curva. Si r es el radio y h la altura:\n- Área lateral: 2πrh\n- Área total: 2πr(r + h)\n- Volumen: πr²h", "Una lata con r = 3 cm y h = 10 cm:\n- V = π · 3² · 10 = 90π ≈ 282,7 cm³", "Volumen del cilindro = área de la base × altura."],
      ["🍦", "El cono", "Tiene una base circular y termina en un vértice. La generatriz g es la distancia del vértice a la orilla de la base: g = √(r² + h²).\n- Área lateral: πrg\n- Área total: πr(r + g)\n- Volumen: ⅓πr²h", "Cono con r = 3 y h = 4:\n- g = √(9 + 16) = 5\n- Área lateral: π · 3 · 5 = 15π ≈ 47,1\n- V = ⅓ · π · 9 · 4 = 12π ≈ 37,7", "El volumen del cono es la tercera parte del del cilindro."],
      ["🔺", "La pirámide", "Tiene una base poligonal y caras laterales triangulares que se unen en un vértice. El volumen es la tercera parte del área de la base por la altura: V = ⅓ · Ab · h.", "Pirámide de base cuadrada de lado 6 y altura 5:\n- Ab = 36\n- V = ⅓ · 36 · 5 = 60", "Volumen de la pirámide = ⅓ · base × altura."],
      ["📐", "Área de la pirámide", "El área lateral es la suma de las áreas de sus triángulos. El área total es el área lateral más el área de la base.", "En una pirámide de base cuadrada con lado 6 y altura de cara 5: cada triángulo tiene área 6 · 5 ÷ 2 = 15. Hay 4 caras: 60. Con la base (36), el total es 96.", "Área total = lateral + base."],
      ["💧", "Capacidad y problemas", "Para convertir volumen en capacidad: 1 dm³ = 1 litro, 1 cm³ = 1 mililitro. Se usan estas fórmulas para saber cuánto cabe en un tanque o cuánta pintura cubre una superficie.", "Un tanque cilíndrico con r = 0,5 m y h = 2 m tiene V = π · 0,25 · 2 ≈ 1,57 m³ ≈ 1.570 litros.", "1 m³ = 1.000 litros."]
    ],
    mapa: ["Cuerpos geométricos", [["Cilindro", ["V = πr²h", "A lateral = 2πrh"]], ["Cono", ["V = ⅓πr²h", "g = √(r² + h²)"]], ["Pirámide", ["V = ⅓ · Ab · h"]], ["Capacidad", ["1 dm³ = 1 litro", "1 m³ = 1.000 litros"]]]],
    tarjetas: [["¿Cuál es la fórmula del volumen de un cilindro?", "V = πr²h."], ["¿Cuál es la fórmula del volumen de un cono?", "V = ⅓πr²h."], ["¿Cuál es la fórmula del volumen de una pirámide?", "V = ⅓ · área de la base · altura."], ["¿Qué es la generatriz de un cono?", "La distancia del vértice a la orilla de la base."], ["Volumen de una pirámide con base de 9 cm² y altura 6 cm.", "18 cm³."], ["¿A cuántos litros equivale 1 m³?", "A 1.000 litros."], ["¿Cuántas veces cabe el cono en el cilindro de igual base y altura?", "3 veces."]],
    videos: ["volumen de cilindros conos y pirámides octavo grado", "área del cilindro y del cono", "volumen de una pirámide"],
    n: 14
  },
  {
    tema: "Medidas de dispersión: rango y desviación",
    resumen: "Las medidas de dispersión indican qué tan separados están los datos respecto a su promedio. Dos grupos pueden tener la misma media y ser muy distintos.",
    objetivos: ["Calcularás el rango.", "Calcularás la desviación media.", "Calcularás la varianza y la desviación estándar."],
    partes: [
      ["📏", "Por qué importa la dispersión", "La media no cuenta toda la historia. Dos cursos con promedio 3,5 pueden ser muy diferentes: en uno todos sacan cerca de 3,5 y en el otro hay notas de 1,0 y de 5,0. La dispersión mide esa diferencia.", "Grupo A: 3,4; 3,5; 3,6. Grupo B: 1,0; 3,5; 6,0. Ambos tienen media 3,5, pero el B está mucho más disperso.", "Igual media no significa igual comportamiento."],
      ["↔️", "El rango", "Es la diferencia entre el dato mayor y el menor. Es fácil de calcular, pero solo usa dos datos.", "Datos: 2, 4, 4, 4, 5, 5, 7, 9. Rango = 9 − 2 = 7.", "Rango = mayor − menor."],
      ["📍", "Desviación respecto a la media", "La desviación de un dato es su diferencia con la media: x − x̄. La desviación media es el promedio de los valores absolutos de esas diferencias.", "Datos 2, 4, 6; media 4:\n- Desviaciones: −2, 0, 2\n- Valores absolutos: 2, 0, 2\n- Desviación media: (2 + 0 + 2) ÷ 3 ≈ 1,33", "Mide, en promedio, cuánto se alejan los datos de la media."],
      ["🧮", "Varianza y desviación estándar", "La varianza es el promedio de los cuadrados de las desviaciones. La desviación estándar (σ) es su raíz cuadrada y tiene las mismas unidades que los datos.", "Datos: 2, 4, 4, 4, 5, 5, 7, 9; media 5.\n- Cuadrados de las desviaciones: 9, 1, 1, 1, 0, 0, 4, 16 → suma 32\n- Varianza: 32 ÷ 8 = 4\n- Desviación estándar: √4 = 2", "Una desviación estándar pequeña indica datos agrupados."],
      ["🔍", "Interpretar", "Entre dos grupos con la misma media, el de menor desviación estándar es más homogéneo. En la vida real se usa para comparar la regularidad de resultados, temperaturas o tiempos de un deportista.", "Dos ciclistas con tiempo medio de 30 min: el de desviación 1 min es más constante que el de 5 min.", "Menor desviación = mayor regularidad."]
    ],
    mapa: ["Medidas de dispersión", [["Rango", ["Mayor − menor"]], ["Desviación", ["x − media", "Desviación media"]], ["Varianza", ["Promedio de cuadrados de desviaciones"]], ["Desviación estándar", ["Raíz de la varianza", "Menor = más agrupado"]]]],
    tarjetas: [["¿Cómo se calcula el rango?", "Dato mayor menos dato menor."], ["¿Qué es la desviación de un dato?", "Su diferencia con la media."], ["¿Qué es la varianza?", "El promedio de los cuadrados de las desviaciones."], ["¿Cómo se obtiene la desviación estándar?", "Sacando la raíz cuadrada de la varianza."], ["Si la varianza es 9, ¿cuál es la desviación estándar?", "3."], ["Rango de 3, 8, 10, 15.", "12."], ["¿Qué indica una desviación estándar pequeña?", "Que los datos están muy cerca de la media."]],
    videos: ["medidas de dispersión octavo grado", "varianza y desviación estándar paso a paso", "rango y desviación media"],
    n: 14
  },
  {
    tema: "Probabilidad y técnicas de conteo",
    resumen: "Las técnicas de conteo permiten saber cuántas formas hay de organizar o escoger elementos sin tener que escribirlas todas. Son la base para calcular probabilidades más complejas.",
    objetivos: ["Aplicarás el principio multiplicativo y aditivo.", "Distinguirás permutaciones y combinaciones.", "Calcularás probabilidades con técnicas de conteo."],
    partes: [
      ["✖️", "Principio multiplicativo", "Si una tarea se puede hacer de m formas y otra de n formas, juntas se pueden hacer de m × n formas. Se puede visualizar con un diagrama de árbol.", "Con 3 camisetas y 4 pantalones hay 3 × 4 = 12 combinaciones para vestirte.", "Si son pasos seguidos, se multiplica."],
      ["➕", "Principio aditivo", "Si una tarea puede hacerse de m formas o de n formas distintas (sin mezclarse), en total hay m + n formas.", "Para ir al colegio puedes tomar 2 rutas en bus o 3 rutas en bicicleta: tienes 2 + 3 = 5 opciones.", "Si es una cosa o la otra, se suma."],
      ["❗", "El factorial", "El factorial de n (n!) es el producto de todos los enteros desde 1 hasta n. Por convención, 0! = 1.", "- 4! = 4 × 3 × 2 × 1 = 24\n- 5! = 120", "n! = n × (n − 1) × ... × 1."],
      ["🔀", "Permutaciones", "Cuentan las formas de ordenar elementos, cuando el orden importa. Con todos los n elementos: n!. Con r de n elementos: P(n, r) = n! ÷ (n − r)!.", "- 5 personas se pueden formar en fila de 5! = 120 formas.\n- Para elegir presidente y secretaria entre 5 personas: P(5, 2) = 5 × 4 = 20.", "Permutación: el orden importa."],
      ["👥", "Combinaciones y probabilidad", "Las combinaciones cuentan formas de escoger elementos cuando el orden NO importa: C(n, r) = n! ÷ (r! · (n − r)!). Luego, la probabilidad es casos favorables ÷ casos posibles.", "Para formar un comité de 2 personas entre 5: C(5, 2) = 10.\nProbabilidad de que una pareja específica sea la elegida: 1 de 10 = 1/10.", "Combinación: el orden no importa."]
    ],
    mapa: ["Técnicas de conteo", [["Principios", ["Multiplicativo: pasos", "Aditivo: opciones"]], ["Factorial", ["n! = n × (n − 1) × ...", "0! = 1"]], ["Permutaciones", ["El orden importa", "P(n, r)"]], ["Combinaciones", ["El orden no importa", "C(n, r)"]]]],
    tarjetas: [["¿Cuánto es 5!?", "120."], ["¿Cuántas formas hay de vestirse con 2 camisas y 3 pantalones?", "6."], ["¿Cuándo se usan permutaciones?", "Cuando el orden importa."], ["¿Cuándo se usan combinaciones?", "Cuando el orden no importa."], ["¿Cuánto es C(4, 2)?", "6."], ["¿Cuánto es P(4, 2)?", "12."], ["¿Cuánto vale 0!?", "1."]],
    videos: ["técnicas de conteo octavo grado", "permutaciones y combinaciones", "principio multiplicativo y diagrama de árbol"],
    n: 16
  }
];
