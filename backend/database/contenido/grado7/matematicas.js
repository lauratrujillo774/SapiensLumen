// Teoría de Matemáticas, grado 7°. Formato compacto (ver grado6/matematicas.js).
export const area = "Matematicas";

export const temas = [
  {
    tema: "Números enteros y sus operaciones",
    resumen: "Los números enteros incluyen positivos, negativos y el cero. Se pueden sumar, restar, multiplicar y dividir siguiendo reglas de signos.",
    objetivos: ["Sumarás y restarás números enteros.", "Multiplicarás y dividirás aplicando la ley de signos.", "Resolverás operaciones combinadas con enteros."],
    partes: [
      ["➕", "Suma con el mismo signo", "Si los dos números tienen el mismo signo, se suman sus valores y se conserva el signo.", "- (+5) + (+3) = +8\n- (−3) + (−4) = −7\nSi debes $3.000 y luego debes otros $4.000, en total debes $7.000.", "Mismo signo: se suma y se conserva el signo."],
      ["⚖️", "Suma con distinto signo", "Si tienen distinto signo, se restan los valores y se escribe el signo del número que tiene mayor valor absoluto.", "- (−9) + 5: 9 − 5 = 4, gana el 9 que es negativo → −4\n- 8 + (−3): 8 − 3 = 5, gana el 8 que es positivo → +5", "Distinto signo: se resta y gana el de mayor valor absoluto."],
      ["➖", "Resta de enteros", "Restar es sumar el opuesto. Cambia el signo del segundo número y luego suma.", "- 5 − (−3) = 5 + 3 = 8\n- (−2) − 6 = (−2) + (−6) = −8", "Restar un número es sumar su opuesto."],
      ["✖️", "Multiplicación y división: ley de signos", "Se multiplican (o dividen) los valores y el signo se decide así:\n- + por + da +\n- − por − da +\n- + por − da −\n- − por + da −", "- (−4) × (−3) = +12\n- (−12) ÷ 3 = −4\n- 5 × (−2) = −10", "Signos iguales dan +; signos distintos dan −."],
      ["🧮", "Operaciones combinadas", "Se resuelven en orden: paréntesis, potencias, multiplicaciones y divisiones, y al final sumas y restas.", "Resuelve −2 + 3 × (−4):\n- Primero 3 × (−4) = −12\n- Luego −2 + (−12) = −14", "Respeta el orden de las operaciones."]
    ],
    mapa: ["Operaciones con enteros", [["Suma", ["Mismo signo: se suma", "Distinto signo: se resta"]], ["Resta", ["Se suma el opuesto"]], ["Multiplicación y división", ["+ por + = +", "− por − = +", "+ por − = −"]], ["Combinadas", ["Paréntesis", "× y ÷", "+ y −"]]]],
    tarjetas: [["¿Cuánto es (−3) + (−5)?", "−8."], ["¿Cuánto es (−7) + 4?", "−3."], ["¿Cuánto es 6 − (−2)?", "8."], ["¿Cuánto es (−5) × (−4)?", "20."], ["¿Cuánto es (−18) ÷ 3?", "−6."], ["¿Qué signo da − por −?", "Positivo."], ["¿Cómo se resta un entero?", "Sumando su opuesto."]],
    videos: ["operaciones con números enteros séptimo grado", "ley de signos multiplicación y división", "suma y resta de enteros"],
    n: 14
  },
  {
    tema: "Números racionales y representación en la recta",
    resumen: "Los números racionales son los que se pueden escribir como fracción. Incluyen los enteros, las fracciones y los decimales que terminan o se repiten.",
    objetivos: ["Reconocerás números racionales.", "Pasarás entre fracciones y decimales.", "Ubicarás y compararás racionales en la recta."],
    partes: [
      ["🔢", "Qué es un número racional", "Un número racional es el que se puede escribir como fracción a/b, con a y b enteros y b distinto de cero. Todo entero es racional: 5 = 5/1.", "- 3/4 es racional.\n- −2 = −2/1 es racional.\n- 0,5 = 1/2 es racional.", "Racional: se puede escribir como fracción."],
      ["🔄", "De fracción a decimal", "Para convertir una fracción en decimal, divide el numerador entre el denominador. El decimal puede ser exacto (termina) o periódico (se repite).", "- 3/4 = 0,75 (exacto)\n- 1/3 = 0,333... (periódico)", "Divide arriba entre abajo."],
      ["↩️", "De decimal a fracción", "Un decimal exacto se escribe como fracción con denominador 10, 100, 1.000... según sus cifras decimales. Luego se simplifica.", "- 0,25 = 25/100 = 1/4\n- 1,5 = 15/10 = 3/2", "Cuenta las cifras decimales para saber el denominador."],
      ["📏", "Ubicar en la recta numérica", "Para ubicar una fracción, divide cada unidad en tantas partes como indica el denominador y cuenta las partes que indica el numerador, hacia la derecha si es positiva y hacia la izquierda si es negativa.", "Para ubicar 3/4: divide el espacio entre 0 y 1 en 4 partes iguales y cuenta 3 partes. Para −1/2: ve a la mitad entre 0 y −1.", "Divide cada unidad según el denominador."],
      ["⚖️", "Comparar racionales", "Convierte a decimales o a fracciones con el mismo denominador. Un racional positivo es mayor que cualquiera negativo. Entre dos negativos, es mayor el más cercano a cero.", "Compara −1/2 y −1/3:\n- −1/2 = −0,5 y −1/3 = −0,33...\n- −0,33 está más cerca de 0.\nEntonces −1/3 > −1/2.", "Entre negativos, es mayor el más cercano al cero."]
    ],
    mapa: ["Números racionales", [["Qué son", ["Fracciones a/b", "Incluyen los enteros"]], ["Decimales", ["Exactos", "Periódicos"]], ["Recta numérica", ["Dividir la unidad", "Positivos a la derecha", "Negativos a la izquierda"]], ["Comparar", ["A decimales", "Mismo denominador"]]]],
    tarjetas: [["¿Qué es un número racional?", "Un número que se puede escribir como fracción."], ["¿Cuánto es 1/4 en decimal?", "0,25."], ["¿Cuánto es 0,5 en fracción?", "1/2."], ["¿1/3 es decimal exacto o periódico?", "Periódico: 0,333..."], ["¿Todo entero es racional?", "Sí, porque 5 = 5/1."], ["¿Cuál es mayor, −1/2 o −1/4?", "−1/4."], ["¿Cómo se ubica 3/4 en la recta?", "Dividiendo la unidad en 4 partes y tomando 3."]],
    videos: ["números racionales séptimo grado", "fracción a decimal y decimal a fracción", "ubicar racionales en la recta numérica"],
    n: 12
  },
  {
    tema: "Operaciones con números racionales",
    resumen: "Los racionales se suman, restan, multiplican y dividen con reglas parecidas a las de las fracciones, cuidando los signos.",
    objetivos: ["Sumarás y restarás racionales.", "Multiplicarás y dividirás racionales.", "Resolverás operaciones combinadas con racionales."],
    partes: [
      ["➕", "Suma y resta con el mismo denominador", "Se operan los numeradores con la regla de signos de los enteros y se conserva el denominador. Después se simplifica.", "- 3/8 + 2/8 = 5/8\n- 1/5 − 4/5 = −3/5", "Con igual denominador, opera solo los numeradores."],
      ["🔁", "Suma y resta con distinto denominador", "Busca el mcm de los denominadores, convierte las fracciones y opera.", "1/2 + (−1/3):\n- mcm de 2 y 3 = 6\n- 3/6 + (−2/6) = 1/6", "Primero iguala los denominadores."],
      ["✖️", "Multiplicación", "Se multiplican numeradores entre sí y denominadores entre sí. El signo sale de la ley de signos.", "(−2/3) × (3/4) = −6/12 = −1/2", "Arriba con arriba, abajo con abajo."],
      ["➗", "División", "Se multiplica la primera fracción por el inverso de la segunda.", "(−1/2) ÷ (1/4) = (−1/2) × (4/1) = −4/2 = −2", "Dividir es multiplicar por el inverso."],
      ["🧮", "Operaciones combinadas", "Se sigue el orden: paréntesis, potencias, multiplicaciones y divisiones, sumas y restas.", "1/2 + 1/3 × 3/2:\n- 1/3 × 3/2 = 3/6 = 1/2\n- 1/2 + 1/2 = 1", "El orden de las operaciones también aplica a las fracciones."]
    ],
    mapa: ["Operaciones con racionales", [["Suma y resta", ["Igual denominador", "Distinto: mcm"]], ["Multiplicación", ["Arriba × arriba", "Abajo × abajo"]], ["División", ["Multiplicar por el inverso"]], ["Signos", ["Ley de signos", "Simplificar al final"]]]],
    tarjetas: [["¿Cuánto es 2/5 + 1/5?", "3/5."], ["¿Cuánto es 1/2 + 1/4?", "3/4."], ["¿Cuánto es (−1/2) × (2/3)?", "−1/3."], ["¿Cuánto es (3/4) ÷ (3/8)?", "2."], ["¿Cuál es el inverso de 2/3?", "3/2."], ["¿Qué se hace primero en 1/2 + 1/3 × 3/2?", "La multiplicación."], ["¿Qué signo tiene (−2/3) × (−1/5)?", "Positivo."]],
    videos: ["operaciones con números racionales séptimo grado", "suma de fracciones con distinto denominador", "multiplicación y división de fracciones con signos"],
    n: 12
  },
  {
    tema: "Potenciación y radicación en racionales",
    resumen: "Las potencias y las raíces también se aplican a fracciones y números con signo. Existen propiedades que facilitan los cálculos.",
    objetivos: ["Calcularás potencias de racionales.", "Aplicarás las propiedades de las potencias.", "Calcularás raíces cuadradas de racionales."],
    partes: [
      ["⚡", "Potencia de una fracción", "Para elevar una fracción a un exponente, se eleva el numerador y el denominador.", "(2/3)² = 2²/3² = 4/9", "Se eleva el numerador y el denominador."],
      ["➖", "Signo de la potencia", "Un número negativo elevado a exponente par da resultado positivo. Elevado a exponente impar da resultado negativo.", "- (−2)² = 4\n- (−2)³ = −8", "Exponente par da +; exponente impar conserva el signo −."],
      ["🧩", "Propiedades de las potencias", "Con la misma base:\n- Producto: se suman los exponentes (aᵐ · aⁿ = aᵐ⁺ⁿ).\n- Cociente: se restan los exponentes (aᵐ ÷ aⁿ = aᵐ⁻ⁿ).\n- Potencia de una potencia: se multiplican los exponentes.", "- 2³ · 2² = 2⁵ = 32\n- 5⁶ ÷ 5⁴ = 5² = 25\n- (3²)³ = 3⁶", "Misma base: sumas, restas o multiplicas exponentes."],
      ["√", "Raíz cuadrada de un racional", "La raíz cuadrada de una fracción es la raíz del numerador entre la raíz del denominador. Solo existe en los racionales si el número es positivo.", "√(9/16) = √9 / √16 = 3/4", "La raíz de una fracción es la raíz de arriba entre la de abajo."],
      ["🧮", "Combinar potencias y raíces", "Resuelve cada parte en orden y simplifica el resultado.", "(1/2)² + √(1/4):\n- (1/2)² = 1/4\n- √(1/4) = 1/2\n- 1/4 + 1/2 = 3/4", "Resuelve potencias y raíces antes de sumar."]
    ],
    mapa: ["Potencias y raíces de racionales", [["Potencia", ["(a/b)ⁿ = aⁿ/bⁿ"]], ["Signo", ["Exponente par: +", "Exponente impar: signo del número"]], ["Propiedades", ["Producto: suma exponentes", "Cociente: resta exponentes", "Potencia de potencia: multiplica"]], ["Raíz cuadrada", ["√(a/b) = √a / √b"]]]],
    tarjetas: [["¿Cuánto es (1/2)³?", "1/8."], ["¿Cuánto es (−3)²?", "9."], ["¿Cuánto es (−2)³?", "−8."], ["¿Cuánto es 2⁴ · 2²?", "2⁶ = 64."], ["¿Cuánto es 7⁵ ÷ 7³?", "7² = 49."], ["¿Cuánto es √(4/9)?", "2/3."], ["¿Cuánto es (5²)³?", "5⁶."]],
    videos: ["potenciación de racionales séptimo grado", "propiedades de las potencias", "raíz cuadrada de fracciones"],
    n: 12
  },
  {
    tema: "Razones, proporciones y regla de tres",
    resumen: "Las razones comparan cantidades y las proporciones igualan dos razones. Con ellas resolvemos problemas de escalas, mezclas y precios.",
    objetivos: ["Escribirás razones y proporciones.", "Aplicarás la propiedad fundamental.", "Resolverás problemas con regla de tres simple directa."],
    partes: [
      ["⚖️", "Razón entre dos cantidades", "Una razón compara dos cantidades por medio de un cociente: a/b. Si las cantidades tienen distintas unidades, la razón se llama tasa, como km/h.", "Un ciclista recorre 60 km en 2 horas. La razón es 60/2 = 30 km por hora.", "Una razón es una comparación por división."],
      ["🟰", "Proporción", "Una proporción es la igualdad de dos razones. Se escribe a/b = c/d y se lee «a es a b como c es a d».", "2/5 = 6/15 es una proporción porque 2 × 15 = 5 × 6 = 30.", "Una proporción iguala dos razones."],
      ["✖️", "Propiedad fundamental", "En toda proporción, el producto de los extremos es igual al producto de los medios. Sirve para hallar un término desconocido.", "En 3/4 = x/12:\n- 3 × 12 = 36\n- x = 36 ÷ 4 = 9", "Producto cruzado: extremos = medios."],
      ["🗺️", "Escalas", "Una escala es una razón entre la medida en el dibujo o mapa y la medida real. Escala 1 : 50.000 significa que 1 cm en el mapa son 50.000 cm reales (500 m).", "Dos ciudades están a 4 cm en un mapa con escala 1 : 100.000.\n- 4 × 100.000 = 400.000 cm\n- Son 4 km.", "La escala relaciona el mapa con la realidad."],
      ["🛍️", "Regla de tres simple directa", "Se usa cuando dos cantidades aumentan o disminuyen en la misma proporción. Se plantea una proporción y se despeja la incógnita.", "6 empanadas cuestan $9.000. ¿Cuánto cuestan 10?\n- 6 → 9.000\n- 10 → x\n- x = 10 × 9.000 ÷ 6 = 15.000", "Multiplica en cruz y divide."]
    ],
    mapa: ["Razones y proporciones", [["Razón", ["Cociente a/b", "Tasas: km/h"]], ["Proporción", ["Igualdad de dos razones"]], ["Propiedad", ["Extremos × extremos = medios × medios"]], ["Aplicaciones", ["Escalas", "Regla de tres"]]]],
    tarjetas: [["¿Qué es una razón?", "La comparación de dos cantidades mediante una división."], ["¿Qué es una proporción?", "La igualdad de dos razones."], ["Halla x en 2/3 = x/9.", "x = 6."], ["¿Qué significa la escala 1 : 1.000?", "1 cm del dibujo equivale a 1.000 cm reales."], ["Si 4 libros cuestan $20.000, ¿cuánto cuestan 6?", "$30.000."], ["¿Qué es una tasa?", "Una razón entre cantidades con distinta unidad, como km/h."], ["¿Cuál es la propiedad fundamental de las proporciones?", "El producto de los extremos es igual al de los medios."]],
    videos: ["razones y proporciones séptimo grado", "regla de tres simple directa", "escalas en mapas y planos"],
    n: 14
  },
  {
    tema: "Proporcionalidad directa e inversa",
    resumen: "Dos magnitudes pueden estar relacionadas de forma directa o inversa. Reconocer el tipo de relación permite resolver problemas con regla de tres.",
    objetivos: ["Distinguirás proporcionalidad directa e inversa.", "Hallarás la constante de proporcionalidad.", "Resolverás problemas con regla de tres directa e inversa."],
    partes: [
      ["📈", "Proporcionalidad directa", "Dos magnitudes son directamente proporcionales si, cuando una aumenta, la otra aumenta en la misma proporción. Su razón (cociente) siempre es constante: y/x = k.", "El precio de los helados:\n- 1 helado: $2.000\n- 2 helados: $4.000\n- 3 helados: $6.000\nSiempre 2.000 por helado: k = 2.000.", "Directa: sube una, sube la otra; el cociente es constante."],
      ["📉", "Proporcionalidad inversa", "Dos magnitudes son inversamente proporcionales si, cuando una aumenta, la otra disminuye en la misma proporción. Su producto es constante: x · y = k.", "Tiempo para llenar un tanque:\n- 2 mangueras: 12 horas\n- 4 mangueras: 6 horas\n- 6 mangueras: 4 horas\nSiempre 2 × 12 = 4 × 6 = 6 × 4 = 24.", "Inversa: sube una, baja la otra; el producto es constante."],
      ["🔍", "Cómo saber cuál es", "Hazte una pregunta: si una cantidad se duplica, ¿la otra se duplica (directa) o se reduce a la mitad (inversa)?", "- Más kilos de arroz, más dinero: directa.\n- Más obreros, menos días de trabajo: inversa.", "Duplica una cantidad y mira qué pasa con la otra."],
      ["✖️", "Regla de tres inversa", "En la regla de tres inversa, el producto de las cantidades correspondientes es igual. Se multiplica en línea recta y se divide.", "4 obreros terminan una obra en 6 días. ¿Cuántos días tardan 8 obreros?\n- 4 × 6 = 8 × x\n- x = 24 ÷ 8 = 3 días", "En la inversa, multiplica en línea y divide."],
      ["📊", "En tablas y gráficas", "En la proporcionalidad directa, la gráfica es una línea recta que pasa por el origen. En la inversa, la gráfica es una curva que baja.", "Si y = 3x, los puntos (1, 3), (2, 6) y (3, 9) están sobre una recta que pasa por (0, 0).", "Directa: recta por el origen. Inversa: curva."]
    ],
    mapa: ["Proporcionalidad", [["Directa", ["Sube una, sube la otra", "Cociente constante", "Gráfica recta por el origen"]], ["Inversa", ["Sube una, baja la otra", "Producto constante", "Gráfica curva"]], ["Cómo distinguir", ["Duplica una magnitud y observa la otra"]], ["Regla de tres", ["Directa: en cruz", "Inversa: en línea"]]]],
    tarjetas: [["¿Qué es constante en la proporcionalidad directa?", "El cociente entre las magnitudes."], ["¿Qué es constante en la inversa?", "El producto."], ["Más trabajadores, menos tiempo: ¿qué tipo es?", "Inversa."], ["Más kilos, más precio: ¿qué tipo es?", "Directa."], ["Si 3 obreros hacen un trabajo en 12 días, ¿cuánto tardan 6?", "6 días."], ["¿Cómo es la gráfica de una relación directa?", "Una recta que pasa por el origen."], ["Si y = 5x, ¿cuál es la constante?", "5."]],
    videos: ["proporcionalidad directa e inversa séptimo grado", "regla de tres inversa", "constante de proporcionalidad"],
    n: 14
  },
  {
    tema: "Porcentajes, descuentos e intereses simples",
    resumen: "Los porcentajes se usan para descuentos, aumentos, impuestos e intereses. El interés simple es la ganancia que produce un dinero según el tiempo.",
    objetivos: ["Calcularás aumentos y descuentos porcentuales.", "Calcularás el IVA.", "Calcularás el interés simple."],
    partes: [
      ["💯", "Repaso: porcentaje de una cantidad", "El p % de una cantidad C es C × p ÷ 100. También se puede escribir el porcentaje como decimal: 25 % = 0,25.", "El 35 % de 200:\n- 200 × 35 ÷ 100 = 70\n- o 200 × 0,35 = 70", "p % de C = C × p ÷ 100."],
      ["🏷️", "Descuentos", "Un descuento disminuye el precio. Calcula el porcentaje del precio y réstalo. Otra forma: multiplica por (100 − descuento) ÷ 100.", "Un pantalón cuesta $90.000 con 20 % de descuento.\n- Descuento: 90.000 × 0,20 = 18.000\n- Precio final: 90.000 − 18.000 = 72.000", "Precio final = precio − descuento."],
      ["📈", "Aumentos y el IVA", "Un aumento incrementa el valor. En Colombia, el IVA (impuesto al valor agregado) general es del 19 %. Se suma al precio base.", "Un producto cuesta $100.000 sin IVA.\n- IVA: 100.000 × 0,19 = 19.000\n- Precio con IVA: 119.000", "Con IVA = precio × 1,19."],
      ["🏦", "Interés simple", "El interés es lo que paga o gana un dinero por el tiempo. En el interés simple se calcula sobre el capital inicial: I = C × r × t, donde C es el capital, r es la tasa por periodo (en decimal) y t es el número de periodos.", "Se depositan $1.000.000 con tasa del 2 % mensual durante 6 meses.\n- I = 1.000.000 × 0,02 × 6 = 120.000\nGana $120.000 de intereses.", "I = capital × tasa × tiempo."],
      ["🧾", "Monto final y variación", "El monto es el capital más el interés: M = C + I. La variación porcentual compara un valor nuevo con el inicial: (nuevo − inicial) ÷ inicial × 100.", "Un artículo sube de $50.000 a $60.000.\n- Aumento: 10.000\n- 10.000 ÷ 50.000 = 0,2 = 20 %", "Variación = cambio ÷ valor inicial × 100."]
    ],
    mapa: ["Porcentajes y finanzas", [["Porcentaje", ["Cantidad × % ÷ 100"]], ["Descuento y aumento", ["Restar o sumar el porcentaje", "IVA 19 %"]], ["Interés simple", ["I = C × r × t", "Monto = capital + interés"]], ["Variación", ["Cambio ÷ inicial × 100"]]]],
    tarjetas: [["¿Cuánto es el 10 % de 350?", "35."], ["Un artículo de $40.000 tiene 25 % de descuento. ¿Cuánto cuesta?", "$30.000."], ["¿Cuánto es el IVA del 19 % de $100.000?", "$19.000."], ["¿Cuál es la fórmula del interés simple?", "I = C × r × t."], ["Interés de $500.000 al 1 % mensual por 4 meses.", "$20.000."], ["¿Cómo se calcula el monto?", "Capital más interés."], ["Un valor sube de 80 a 100. ¿Qué porcentaje aumentó?", "25 %."]],
    videos: ["porcentajes y descuentos séptimo grado", "interés simple explicación", "cómo calcular el IVA"],
    n: 14
  },
  {
    tema: "Lenguaje algebraico y expresiones algebraicas",
    resumen: "El álgebra usa letras para representar números desconocidos o que cambian. Con ella escribimos reglas y resolvemos problemas de manera general.",
    objetivos: ["Traducirás frases a expresiones algebraicas.", "Reconocerás términos, coeficientes y variables.", "Reducirás términos semejantes."],
    partes: [
      ["🔤", "De palabras a símbolos", "En álgebra se usa una letra (variable) para un número que no conocemos o que puede cambiar. Así, las frases se convierten en expresiones.", "- «Un número aumentado en 5» → x + 5\n- «El doble de un número» → 2x\n- «La mitad de un número» → x/2\n- «El triple de un número menos 4» → 3x − 4", "Una letra representa un número desconocido."],
      ["🧱", "Partes de una expresión", "- Variable: la letra (x, y, a).\n- Coeficiente: el número que multiplica a la variable.\n- Término: cada parte separada por + o −.\n- Constante: un número sin variable.", "En 5x + 3:\n- Términos: 5x y 3\n- Coeficiente de x: 5\n- Constante: 3", "Coeficiente es el número que acompaña a la letra."],
      ["🔢", "Valor numérico", "Se obtiene reemplazando la variable por un número y calculando.", "Si x = 4, el valor de 3x − 2 es:\n- 3 × 4 − 2 = 12 − 2 = 10", "Reemplaza la letra por el número y opera."],
      ["🧩", "Términos semejantes", "Son los que tienen la misma parte literal (la misma letra con el mismo exponente). Solo estos se pueden sumar o restar.", "- 3x y 5x son semejantes.\n- 3x y 5y no lo son.\n- 3x + 5x = 8x", "Solo se suman términos con la misma letra."],
      ["✂️", "Reducir expresiones", "Reducir es agrupar los términos semejantes y operarlos.", "Reduce 4x + 3 + 2x − 1:\n- x: 4x + 2x = 6x\n- números: 3 − 1 = 2\nResultado: 6x + 2.", "Agrupa semejantes y opera."]
    ],
    mapa: ["Álgebra básica", [["Variable", ["Letra que representa un número"]], ["Partes", ["Coeficiente", "Término", "Constante"]], ["Valor numérico", ["Reemplazar la letra"]], ["Reducción", ["Términos semejantes", "Sumar coeficientes"]]]],
    tarjetas: [["Escribe «el doble de un número».", "2x."], ["Escribe «un número disminuido en 3».", "x − 3."], ["¿Cuál es el coeficiente en 7y?", "7."], ["¿Qué son términos semejantes?", "Los que tienen la misma parte literal."], ["Reduce 3a + 5a.", "8a."], ["Si x = 2, ¿cuánto vale 4x + 1?", "9."], ["¿Se pueden sumar 2x y 3y?", "No, no son semejantes."]],
    videos: ["lenguaje algebraico séptimo grado", "términos semejantes y reducción", "traducir frases a expresiones algebraicas"],
    n: 14
  },
  {
    tema: "Ecuaciones de primer grado",
    resumen: "Una ecuación es una igualdad con un número desconocido. Resolverla es encontrar el valor de la incógnita que la hace verdadera.",
    objetivos: ["Resolverás ecuaciones de primer grado.", "Comprobarás una solución.", "Plantearás y resolverás problemas con ecuaciones."],
    partes: [
      ["⚖️", "Qué es una ecuación", "Una ecuación es una igualdad que tiene una incógnita, es decir, un valor desconocido. Resolverla es hallar el valor que la hace verdadera. Es como una balanza equilibrada.", "En x + 3 = 8, la solución es x = 5, porque 5 + 3 = 8.", "Una ecuación es una balanza en equilibrio."],
      ["🔁", "Operaciones inversas", "Para despejar la incógnita se hace la operación contraria en ambos lados de la igualdad: la suma con la resta, y la multiplicación con la división.", "- x + 7 = 12 → x = 12 − 7 = 5\n- 3x = 15 → x = 15 ÷ 3 = 5", "Lo que haces de un lado, hazlo del otro."],
      ["🪜", "Ecuaciones en dos pasos", "Primero elimina el término que suma o resta y luego el coeficiente.", "Resuelve 2x + 3 = 11:\n- Resta 3: 2x = 8\n- Divide entre 2: x = 4", "Primero suma o resta; después multiplica o divide."],
      ["✅", "Comprobar la solución", "Reemplaza el valor encontrado en la ecuación original. Si los dos lados dan lo mismo, es correcta.", "Comprueba x = 4 en 2x + 3 = 11:\n- 2 × 4 + 3 = 11 ✔", "Siempre puedes verificar tu respuesta."],
      ["🧩", "Problemas con ecuaciones", "Pasos: 1) define la incógnita, 2) traduce el enunciado a una ecuación, 3) resuélvela, 4) responde y verifica.", "«El doble de un número, más 3, es 15».\n- 2x + 3 = 15\n- 2x = 12\n- x = 6", "Traduce el problema a una ecuación."]
    ],
    mapa: ["Ecuaciones de primer grado", [["Ecuación", ["Igualdad con incógnita", "Balanza equilibrada"]], ["Resolver", ["Operaciones inversas", "En ambos lados"]], ["Pasos", ["Eliminar suma o resta", "Eliminar coeficiente"]], ["Comprobar", ["Reemplazar la solución"]]]],
    tarjetas: [["Resuelve x + 4 = 10.", "x = 6."], ["Resuelve 5x = 20.", "x = 4."], ["Resuelve 2x − 1 = 9.", "x = 5."], ["Resuelve 3x + 2 = 14.", "x = 4."], ["¿Cómo se comprueba una solución?", "Reemplazándola en la ecuación original."], ["«El triple de un número es 21»: ¿qué ecuación es?", "3x = 21."], ["¿Qué operación elimina una suma?", "La resta."]],
    videos: ["ecuaciones de primer grado séptimo grado", "cómo resolver ecuaciones paso a paso", "problemas con ecuaciones"],
    n: 14
  },
  {
    tema: "Plano cartesiano y pares ordenados",
    resumen: "El plano cartesiano es un sistema para ubicar puntos con dos números. Se usa en mapas, gráficas, videojuegos y diseño.",
    objetivos: ["Ubicarás puntos en el plano cartesiano.", "Reconocerás los cuatro cuadrantes.", "Leerás las coordenadas de un punto."],
    partes: [
      ["🧭", "Los ejes", "El plano cartesiano tiene dos rectas numéricas que se cruzan en ángulo recto. El eje horizontal es el eje x (de las abscisas). El eje vertical es el eje y (de las ordenadas). Se cruzan en el origen, el punto (0, 0).", "Imagina un mapa de una cuadrícula: x te dice cuánto avanzas hacia los lados, y cuánto subes o bajas.", "Dos ejes que se cruzan en el origen."],
      ["📍", "Pares ordenados", "Cada punto se describe con un par ordenado (x, y). El primer número es x (horizontal) y el segundo es y (vertical). El orden importa: (2, 5) no es lo mismo que (5, 2).", "Para ubicar A(3, 2):\n- Avanza 3 a la derecha desde el origen.\n- Sube 2.", "Primero x, luego y."],
      ["🔲", "Los cuadrantes", "Los ejes dividen el plano en cuatro cuadrantes. Los signos de las coordenadas dicen en cuál está el punto:\n- I: (+, +)\n- II: (−, +)\n- III: (−, −)\n- IV: (+, −)", "- A(3, 2) está en el cuadrante I.\n- B(−2, 4) está en el II.\n- C(−3, −1) está en el III.\n- D(2, −5) está en el IV.", "Los signos de x y de y indican el cuadrante."],
      ["📏", "Puntos sobre los ejes y distancias", "Si un punto está sobre el eje x, su y vale 0: (4, 0). Si está sobre el eje y, su x vale 0: (0, −3). La distancia horizontal entre dos puntos con igual y es la diferencia de sus x.", "La distancia entre (1, 2) y (5, 2) es 5 − 1 = 4 unidades.", "Sobre el eje x, y = 0; sobre el eje y, x = 0."],
      ["🔄", "Figuras y simetría", "Al ubicar varios puntos y unirlos se forman figuras. Un reflejo (simetría) sobre el eje y cambia el signo de x; sobre el eje x cambia el signo de y.", "El reflejo de P(3, 2) sobre el eje y es P'(−3, 2).", "Una simetría cambia el signo de una coordenada."]
    ],
    mapa: ["Plano cartesiano", [["Ejes", ["Eje x horizontal", "Eje y vertical", "Origen (0, 0)"]], ["Par ordenado", ["(x, y)", "El orden importa"]], ["Cuadrantes", ["I (+,+)", "II (−,+)", "III (−,−)", "IV (+,−)"]], ["Aplicaciones", ["Distancias", "Figuras", "Simetrías"]]]],
    tarjetas: [["¿Cómo se llama el eje horizontal?", "Eje x o de las abscisas."], ["¿Cómo se llama el punto (0, 0)?", "El origen."], ["¿En qué cuadrante está (−3, 5)?", "En el cuadrante II."], ["¿En qué cuadrante está (4, −2)?", "En el cuadrante IV."], ["En el par (x, y), ¿cuál va primero?", "x."], ["¿Qué vale y en un punto sobre el eje x?", "0."], ["¿Cuál es el reflejo de (2, 3) sobre el eje x?", "(2, −3)."]],
    videos: ["plano cartesiano séptimo grado", "cuadrantes y pares ordenados", "ubicar puntos en el plano cartesiano"],
    n: 12
  },
  {
    tema: "Rectas paralelas, perpendiculares y transversales",
    resumen: "Las rectas pueden ser paralelas, secantes o perpendiculares. Cuando una transversal corta a dos paralelas, se forman ángulos con relaciones especiales.",
    objetivos: ["Distinguirás rectas paralelas, secantes y perpendiculares.", "Reconocerás ángulos entre paralelas y una transversal.", "Calcularás ángulos desconocidos."],
    partes: [
      ["↔️", "Rectas paralelas y secantes", "Las rectas paralelas están en el mismo plano y nunca se cortan, aunque se prolonguen (como los rieles del tren). Las rectas secantes sí se cortan en un punto.", "Los bordes de un cuaderno son paralelos. Las esquinas de una hoja forman rectas secantes.", "Paralelas no se cortan; secantes sí."],
      ["➕", "Rectas perpendiculares", "Las rectas perpendiculares se cortan formando ángulos rectos de 90°.", "Los lados contiguos de un cuadrado son perpendiculares. Una calle y su cruce en esquina suelen ser perpendiculares.", "Perpendiculares forman 90°."],
      ["🔀", "Ángulos opuestos por el vértice y adyacentes", "Cuando dos rectas se cortan:\n- Los ángulos opuestos por el vértice son iguales.\n- Los ángulos adyacentes suman 180°.", "Si un ángulo mide 70°, su opuesto mide 70° y su adyacente mide 180° − 70° = 110°.", "Opuestos iguales; adyacentes suman 180°."],
      ["📐", "Una transversal corta dos paralelas", "Una transversal es una recta que corta a otras dos. Si las dos son paralelas, se forman 8 ángulos con estas relaciones:\n- Correspondientes: iguales.\n- Alternos internos: iguales.\n- Alternos externos: iguales.\n- Conjugados internos: suman 180°.", "Si un ángulo mide 70°, su correspondiente mide 70°, su alterno interno mide 70° y su conjugado interno mide 110°.", "Entre paralelas: correspondientes y alternos son iguales."],
      ["🧮", "Calcular ángulos desconocidos", "Identifica qué relación tienen los ángulos y aplica la regla: igualdad o suma de 180°.", "Dos paralelas cortadas por una transversal. Un ángulo mide 3x y su alterno interno mide x + 40.\n- 3x = x + 40\n- 2x = 40\n- x = 20, entonces el ángulo mide 60°.", "Reconoce la relación y plantea una ecuación."]
    ],
    mapa: ["Rectas y ángulos", [["Tipos de rectas", ["Paralelas", "Secantes", "Perpendiculares"]], ["Dos rectas que se cortan", ["Opuestos iguales", "Adyacentes suman 180°"]], ["Transversal y paralelas", ["Correspondientes iguales", "Alternos iguales", "Conjugados suman 180°"]], ["Aplicación", ["Hallar ángulos con ecuaciones"]]]],
    tarjetas: [["¿Qué son rectas paralelas?", "Rectas que nunca se cortan."], ["¿Cuánto mide el ángulo entre rectas perpendiculares?", "90°."], ["Si un ángulo mide 50°, ¿cuánto mide su opuesto por el vértice?", "50°."], ["Si un ángulo mide 50°, ¿cuánto mide su adyacente?", "130°."], ["¿Cómo son los ángulos correspondientes entre paralelas?", "Iguales."], ["¿Cuánto suman los ángulos conjugados internos?", "180°."], ["¿Qué es una transversal?", "Una recta que corta a otras dos."]],
    videos: ["rectas paralelas y perpendiculares séptimo grado", "ángulos entre paralelas y una transversal", "ángulos correspondientes y alternos"],
    n: 12
  },
  {
    tema: "Triángulos: clasificación y propiedades",
    resumen: "Los triángulos se clasifican por sus lados y por sus ángulos. Cumplen propiedades como que sus ángulos suman 180° y la desigualdad triangular.",
    objetivos: ["Clasificarás triángulos por lados y ángulos.", "Calcularás ángulos de un triángulo.", "Aplicarás la desigualdad triangular."],
    partes: [
      ["🔺", "Clasificación", "- Por sus lados: equilátero (3 lados iguales), isósceles (2 iguales), escaleno (3 diferentes).\n- Por sus ángulos: acutángulo (3 agudos), rectángulo (un ángulo recto), obtusángulo (un ángulo obtuso).", "Un triángulo de lados 5, 5 y 5 es equilátero. Uno con ángulos de 90°, 40° y 50° es rectángulo.", "Se clasifican por lados y por ángulos."],
      ["➕", "Suma de los ángulos interiores", "Los tres ángulos interiores de cualquier triángulo suman 180°.", "Un triángulo tiene ángulos de 50° y 60°.\n- El tercero mide 180° − 50° − 60° = 70°.", "Los ángulos de un triángulo suman 180°."],
      ["↗️", "Ángulo exterior", "El ángulo exterior se forma al prolongar un lado. Es igual a la suma de los dos ángulos interiores que no están a su lado.", "Si dos ángulos interiores miden 50° y 60°, el ángulo exterior del tercer vértice mide 50° + 60° = 110°.", "Exterior = suma de los dos interiores no adyacentes."],
      ["📏", "Desigualdad triangular", "Para que tres segmentos formen un triángulo, la suma de las medidas de dos lados cualesquiera debe ser mayor que la medida del tercero.", "- 3, 4 y 5: 3 + 4 = 7 > 5 ✔ forman triángulo.\n- 3, 4 y 8: 3 + 4 = 7 < 8 ✘ no forman triángulo.", "Dos lados juntos deben superar al tercero."],
      ["📐", "Líneas notables", "- Altura: segmento perpendicular desde un vértice al lado opuesto.\n- Mediana: segmento desde un vértice hasta el punto medio del lado opuesto.\n- Bisectriz: divide un ángulo en dos iguales.\n- Mediatriz: perpendicular en el punto medio de un lado.", "El área de un triángulo usa la altura: (base × altura) ÷ 2.", "La altura es perpendicular a la base."]
    ],
    mapa: ["Triángulos", [["Por lados", ["Equilátero", "Isósceles", "Escaleno"]], ["Por ángulos", ["Acutángulo", "Rectángulo", "Obtusángulo"]], ["Propiedades", ["Ángulos suman 180°", "Ángulo exterior", "Desigualdad triangular"]], ["Líneas notables", ["Altura", "Mediana", "Bisectriz", "Mediatriz"]]]],
    tarjetas: [["¿Cuánto suman los ángulos de un triángulo?", "180°."], ["¿Cómo es un triángulo con dos lados iguales?", "Isósceles."], ["Un triángulo tiene ángulos de 40° y 70°. ¿Cuánto mide el tercero?", "70°."], ["¿Pueden formar triángulo los lados 2, 3 y 9?", "No, porque 2 + 3 < 9."], ["¿Cómo se llama un triángulo con un ángulo de 90°?", "Rectángulo."], ["¿Qué es la altura de un triángulo?", "El segmento perpendicular desde un vértice al lado opuesto."], ["¿A qué es igual un ángulo exterior?", "A la suma de los dos ángulos interiores no adyacentes."]],
    videos: ["clasificación de triángulos séptimo grado", "desigualdad triangular", "ángulo exterior de un triángulo"],
    n: 12
  },
  {
    tema: "Cuadriláteros y sus propiedades",
    resumen: "Los cuadriláteros son polígonos de cuatro lados. Se clasifican en paralelogramos, trapecios y trapezoides, y cada uno tiene propiedades y fórmulas de área.",
    objetivos: ["Clasificarás cuadriláteros.", "Reconocerás sus propiedades.", "Calcularás sus áreas."],
    partes: [
      ["🔲", "Qué es un cuadrilátero", "Es un polígono de cuatro lados, cuatro vértices y cuatro ángulos. Los ángulos interiores de cualquier cuadrilátero suman 360°.", "Si tres ángulos de un cuadrilátero miden 90°, 90° y 100°, el cuarto mide 360° − 280° = 80°.", "Los ángulos de un cuadrilátero suman 360°."],
      ["🟦", "Paralelogramos", "Tienen dos pares de lados paralelos. Sus lados opuestos son iguales y paralelos.\n- Cuadrado: 4 lados iguales y 4 ángulos rectos.\n- Rectángulo: 4 ángulos rectos.\n- Rombo: 4 lados iguales.\n- Romboide: lados opuestos iguales.", "Un cuaderno es un rectángulo. Un tablero de ajedrez es un cuadrado.", "Paralelogramo: dos pares de lados paralelos."],
      ["🔷", "Trapecios y trapezoides", "El trapecio tiene un solo par de lados paralelos (las bases). Puede ser isósceles, escaleno o rectángulo. El trapezoide no tiene lados paralelos.", "El techo de una casa visto de frente suele ser un trapecio.", "Trapecio: un par de lados paralelos."],
      ["📏", "Diagonales", "Las diagonales unen vértices opuestos.\n- En el rectángulo son iguales.\n- En el rombo son perpendiculares.\n- En el cuadrado son iguales y perpendiculares.", "Si en un rombo una diagonal mide 6 cm y otra 8 cm, se cruzan en ángulo recto.", "Cada cuadrilátero tiene propiedades en sus diagonales."],
      ["📐", "Áreas", "- Cuadrado: lado × lado.\n- Rectángulo y romboide: base × altura.\n- Rombo: (diagonal mayor × diagonal menor) ÷ 2.\n- Trapecio: ((base mayor + base menor) × altura) ÷ 2.", "Trapecio con bases 8 y 4 y altura 5:\n- (8 + 4) × 5 ÷ 2 = 30 cm².", "Cada cuadrilátero tiene su fórmula de área."]
    ],
    mapa: ["Cuadriláteros", [["Paralelogramos", ["Cuadrado", "Rectángulo", "Rombo", "Romboide"]], ["Trapecios", ["Un par de lados paralelos", "Isósceles, escaleno, rectángulo"]], ["Propiedades", ["Ángulos suman 360°", "Diagonales"]], ["Áreas", ["b × h", "(B + b) × h ÷ 2", "(D × d) ÷ 2"]]]],
    tarjetas: [["¿Cuánto suman los ángulos de un cuadrilátero?", "360°."], ["¿Qué tiene un paralelogramo?", "Dos pares de lados paralelos."], ["¿Cuántos pares de lados paralelos tiene un trapecio?", "Uno."], ["¿Cómo son las diagonales de un rombo?", "Perpendiculares."], ["Área de un rectángulo de 6 por 4.", "24."], ["Área de un rombo con diagonales 6 y 8.", "24."], ["¿Cuál es la fórmula del área del trapecio?", "(base mayor + base menor) × altura ÷ 2."]],
    videos: ["cuadriláteros séptimo grado", "clasificación de cuadriláteros", "área del trapecio y del rombo"],
    n: 14
  },
  {
    tema: "Área y volumen de prismas",
    resumen: "Un prisma es un sólido con dos bases iguales y paralelas y caras laterales rectangulares. Se calcula su área para saber cuánto material cubre y su volumen para saber cuánto cabe.",
    objetivos: ["Reconocerás los elementos de un prisma.", "Calcularás el área lateral y total.", "Calcularás el volumen."],
    partes: [
      ["📦", "Qué es un prisma", "Un prisma es un cuerpo geométrico con dos bases iguales y paralelas (que son polígonos) y caras laterales que son rectángulos o paralelogramos. Se nombra según su base: triangular, rectangular, pentagonal, etc.", "Una caja de zapatos es un prisma rectangular. Un chocolate triangular es un prisma triangular.", "Dos bases iguales y caras laterales."],
      ["🧩", "Elementos", "- Bases: los dos polígonos iguales.\n- Caras laterales: unen las bases.\n- Aristas: los segmentos donde se unen las caras.\n- Vértices: las esquinas.\n- Altura: la distancia entre las bases.", "Un prisma rectangular tiene 6 caras, 12 aristas y 8 vértices.", "Un prisma rectangular: 6 caras, 12 aristas, 8 vértices."],
      ["🎨", "Área lateral y total", "El área lateral es la suma de las áreas de las caras laterales: perímetro de la base × altura. El área total es el área lateral más las dos bases.", "Caja de 5 cm × 4 cm × 3 cm:\n- Bases: 5 × 4 = 20, dos bases = 40\n- Lateral: perímetro 18 × 3 = 54\n- Total: 40 + 54 = 94 cm².", "Área total = área lateral + 2 bases."],
      ["🧊", "Volumen", "El volumen es el espacio que ocupa el prisma. Se calcula multiplicando el área de la base por la altura: V = área de la base × altura. Se mide en unidades cúbicas (cm³, m³).", "Caja de 5 × 4 × 3: V = 20 × 3 = 60 cm³.\nPrisma triangular con base de 6 cm y altura de triángulo 4 cm, y altura de prisma 10 cm:\n- Base: 6 × 4 ÷ 2 = 12\n- V = 12 × 10 = 120 cm³.", "Volumen = área de la base × altura."],
      ["💧", "Capacidad y unidades", "La capacidad es cuánto líquido cabe. 1 dm³ equivale a 1 litro, y 1 litro tiene 1.000 cm³. Y 1 m³ equivale a 1.000 litros.", "Un tanque de 1 m × 1 m × 1 m contiene 1 m³ = 1.000 litros de agua.", "1 litro = 1 dm³ = 1.000 cm³."]
    ],
    mapa: ["Prismas", [["Elementos", ["Bases", "Caras laterales", "Aristas", "Vértices"]], ["Área", ["Lateral: perímetro × altura", "Total: lateral + 2 bases"]], ["Volumen", ["Área de la base × altura", "Unidades cúbicas"]], ["Capacidad", ["1 dm³ = 1 litro", "1 m³ = 1.000 litros"]]]],
    tarjetas: [["¿Cuántas aristas tiene un prisma rectangular?", "12."], ["¿Cuántos vértices tiene un prisma rectangular?", "8."], ["¿Cuál es la fórmula del volumen de un prisma?", "Área de la base × altura."], ["Volumen de una caja de 2 × 3 × 4.", "24."], ["¿Cuántos litros hay en 1 m³?", "1.000 litros."], ["¿Qué es el área lateral?", "La suma de las áreas de las caras laterales."], ["¿Con qué unidad se mide el volumen?", "Con unidades cúbicas, como cm³."]],
    videos: ["área y volumen de prismas séptimo grado", "volumen de un prisma rectangular", "elementos de un prisma"],
    n: 14
  },
  {
    tema: "Gráficos estadísticos y frecuencias",
    resumen: "Para analizar datos, se organizan en tablas de frecuencias y se representan en gráficos. Así podemos comparar y sacar conclusiones.",
    objetivos: ["Construirás tablas de frecuencia.", "Calcularás frecuencias relativas.", "Interpretarás gráficos de barras y circulares."],
    partes: [
      ["📋", "Población y muestra", "La población es el grupo completo que se estudia. La muestra es una parte de ella. Una variable puede ser cualitativa (cualidades, como el color favorito) o cuantitativa (números, como la edad).", "Para saber qué deporte prefieren los 800 estudiantes del colegio, se encuesta a 100 (la muestra).", "La muestra representa a la población."],
      ["🔢", "Frecuencia absoluta y relativa", "- Frecuencia absoluta (f): cuántas veces aparece un dato.\n- Frecuencia relativa (fr): f ÷ total, como fracción, decimal o porcentaje.", "En un curso de 20 estudiantes, 5 prefieren fútbol.\n- f = 5\n- fr = 5 ÷ 20 = 0,25 = 25 %", "Frecuencia relativa = f ÷ total."],
      ["➕", "Frecuencia acumulada", "La frecuencia acumulada (F) suma las frecuencias hasta ese dato. El último valor es el total de datos.", "f: 5, 8, 7 → F: 5, 13, 20.", "La acumulada va sumando."],
      ["📊", "Gráfico de barras", "Cada barra representa una categoría y su altura es la frecuencia. Sirve para comparar. Debe tener título, ejes con nombre y una escala.", "Si fútbol = 8, baloncesto = 5 y natación = 7, la barra de fútbol es la más alta.", "Las barras sirven para comparar categorías."],
      ["🥧", "Gráfico circular", "Muestra cómo se reparte el total. Cada sector tiene un ángulo igual a la frecuencia relativa por 360°.", "Si el fútbol es el 25 %, su sector mide 0,25 × 360° = 90°.", "Ángulo del sector = frecuencia relativa × 360°."]
    ],
    mapa: ["Estadística", [["Datos", ["Población", "Muestra", "Cualitativos y cuantitativos"]], ["Frecuencias", ["Absoluta", "Relativa", "Acumulada"]], ["Barras", ["Comparar categorías"]], ["Circular", ["Partes del total", "Ángulo = fr × 360°"]]]],
    tarjetas: [["¿Qué es la población?", "El grupo completo que se quiere estudiar."], ["¿Qué es la muestra?", "Una parte de la población."], ["¿Cómo se calcula la frecuencia relativa?", "f ÷ total."], ["En 40 estudiantes, 10 prefieren música. ¿Qué porcentaje es?", "25 %."], ["¿Cuánto mide el ángulo de un sector del 50 %?", "180°."], ["¿Qué suma la frecuencia acumulada?", "Las frecuencias hasta ese dato."], ["¿Para qué sirve un gráfico de barras?", "Para comparar categorías."]],
    videos: ["frecuencia absoluta y relativa séptimo grado", "gráfico circular cómo construirlo", "tablas de frecuencia"],
    n: 12
  },
  {
    tema: "Medidas de tendencia central",
    resumen: "La media, la mediana y la moda resumen un conjunto de datos con un solo número. También se calcula el rango para saber qué tan dispersos están.",
    objetivos: ["Calcularás media, mediana y moda.", "Usarás tablas de frecuencia para calcular la media.", "Calcularás el rango."],
    partes: [
      ["➗", "La media aritmética", "La media o promedio es la suma de todos los datos dividida entre el número de datos.", "Notas: 3,0; 4,0; 5,0; 4,0.\n- Suma: 16\n- Datos: 4\n- Media: 16 ÷ 4 = 4,0", "Media = suma de datos ÷ cantidad de datos."],
      ["🎯", "La mediana", "La mediana es el dato central cuando los datos están ordenados. Si hay una cantidad par de datos, se promedian los dos centrales.", "Datos: 2, 4, 6, 8.\n- Los centrales son 4 y 6.\n- Mediana: (4 + 6) ÷ 2 = 5", "Ordena primero y busca el centro."],
      ["🏆", "La moda", "La moda es el dato que más se repite. Puede haber una moda (unimodal), dos (bimodal) o ninguna.", "Datos: 3, 5, 5, 7, 5, 8. La moda es 5.", "La moda es el dato más frecuente."],
      ["📏", "El rango", "El rango es la diferencia entre el dato mayor y el menor. Indica qué tan separados están los datos.", "Edades: 11, 12, 12, 14, 15.\nRango: 15 − 11 = 4 años.", "Rango = dato mayor − dato menor."],
      ["📋", "Media con tabla de frecuencias", "Cuando los datos se repiten, multiplica cada dato por su frecuencia, suma los productos y divide entre el total de datos.", "Nota 3 (2 veces), nota 4 (5 veces), nota 5 (3 veces):\n- (3×2 + 4×5 + 5×3) ÷ 10\n- (6 + 20 + 15) ÷ 10 = 4,1", "Multiplica cada dato por su frecuencia."]
    ],
    mapa: ["Tendencia central", [["Media", ["Suma ÷ cantidad"]], ["Mediana", ["Dato central ordenado", "Par: promedio de los dos centrales"]], ["Moda", ["Dato más frecuente"]], ["Rango", ["Mayor − menor"]]]],
    tarjetas: [["¿Cuál es la media de 4, 6 y 8?", "6."], ["¿Cuál es la mediana de 1, 3, 5, 7?", "4."], ["¿Cuál es la moda de 2, 4, 4, 5, 4?", "4."], ["¿Cuál es el rango de 3, 8, 10, 15?", "12."], ["¿Cómo se halla la mediana con cantidad par de datos?", "Se promedian los dos centrales."], ["¿Qué mide el rango?", "Qué tan dispersos están los datos."], ["¿Puede un conjunto no tener moda?", "Sí, si ningún dato se repite."]],
    videos: ["media mediana moda y rango séptimo grado", "media con tabla de frecuencias", "medidas de tendencia central ejercicios"],
    n: 12
  },
  {
    tema: "Probabilidad: espacio muestral y eventos",
    resumen: "La probabilidad mide qué tan posible es un evento. Se calcula contando casos favorables y casos posibles, que se pueden organizar con tablas y diagramas de árbol.",
    objetivos: ["Describirás el espacio muestral.", "Calcularás probabilidades simples.", "Usarás eventos complementarios."],
    partes: [
      ["🎲", "Espacio muestral", "Es el conjunto de todos los resultados posibles de un experimento aleatorio. Se puede escribir con una lista, una tabla o un diagrama de árbol.", "Al lanzar dos monedas, el espacio muestral es:\n{CC, CS, SC, SS}\n(C = cara, S = sello). Son 4 resultados.", "Lista todos los resultados posibles."],
      ["🌳", "Diagrama de árbol", "Es un dibujo que ramifica las posibilidades paso a paso. Cada camino completo es un resultado.", "Al lanzar una moneda y luego un dado, hay 2 × 6 = 12 resultados posibles.", "Multiplicar las opciones de cada paso da el total."],
      ["🎯", "Eventos", "Un evento es un grupo de resultados del espacio muestral. Puede ser simple (un solo resultado) o compuesto (varios).", "Al lanzar un dado:\n- «Sale 4»: evento simple.\n- «Sale par»: evento compuesto {2, 4, 6}.", "Un evento es lo que nos interesa que ocurra."],
      ["🧮", "Probabilidad clásica", "P(evento) = casos favorables ÷ casos posibles. Va de 0 (imposible) a 1 (seguro). Puede escribirse como fracción, decimal o porcentaje.", "Al lanzar dos dados, hay 36 resultados. La suma 7 ocurre de 6 maneras: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1).\nP(suma 7) = 6/36 = 1/6.", "Probabilidad = favorables ÷ posibles."],
      ["🔄", "Evento complementario", "El complemento de un evento A es que A no ocurra. Sus probabilidades suman 1: P(no A) = 1 − P(A).", "La probabilidad de sacar un 6 en un dado es 1/6.\nLa de no sacar 6 es 1 − 1/6 = 5/6.", "P(no A) = 1 − P(A)."]
    ],
    mapa: ["Probabilidad", [["Espacio muestral", ["Todos los resultados", "Lista, tabla o árbol"]], ["Eventos", ["Simples", "Compuestos"]], ["Cálculo", ["Favorables ÷ posibles", "Entre 0 y 1"]], ["Complemento", ["P(no A) = 1 − P(A)"]]]],
    tarjetas: [["¿Cuántos resultados tiene lanzar dos monedas?", "4."], ["¿Cuál es la probabilidad de sacar un número par en un dado?", "3/6 = 1/2."], ["¿Cuál es la probabilidad de un evento imposible?", "0."], ["¿Cuál es la probabilidad de un evento seguro?", "1."], ["Si P(A) = 0,3, ¿cuánto vale P(no A)?", "0,7."], ["¿Cuántos resultados hay al lanzar un dado y una moneda?", "12."], ["¿Qué es un evento compuesto?", "Uno que tiene varios resultados."]],
    videos: ["probabilidad séptimo grado", "espacio muestral y diagrama de árbol", "eventos complementarios"],
    n: 14
  }
];
