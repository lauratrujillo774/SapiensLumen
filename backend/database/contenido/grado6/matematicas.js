// Teoría de Matemáticas, grado 6°. Formato compacto:
// partes: [emoji, título, explicación, ejemplo, idea clave]  ·  mapa: [centro, [[rama, [hijos]]]]
// tarjetas: [frente, reverso]  ·  videos: búsquedas de YouTube  ·  n: preguntas sugeridas para el juego
export const area = "Matematicas";

export const temas = [
  {
    tema: "Sistema de numeración decimal y números naturales",
    resumen: "Los números naturales sirven para contar. Los escribimos con diez cifras y el lugar de cada cifra cambia su valor.",
    objetivos: ["Leerás y escribirás números naturales grandes.", "Identificarás el valor de posición de cada cifra.", "Compararás y ordenarás números naturales."],
    partes: [
      ["🔢", "Los números naturales", "Los números naturales son 0, 1, 2, 3, 4... y siguen sin parar. Sirven para contar y ordenar cosas. Cada número tiene un siguiente: se obtiene sumando 1.", "Un bus lleva 38 pasajeros. Cuando sube 1 más, lleva 39. El siguiente de 38 es 39.", "Los naturales sirven para contar y nunca se acaban."],
      ["🧱", "Las diez cifras", "Con solo diez cifras (0, 1, 2, 3, 4, 5, 6, 7, 8, 9) escribimos cualquier número. Se llama sistema decimal porque agrupamos de 10 en 10.", "- 10 unidades = 1 decena\n- 10 decenas = 1 centena\n- 10 centenas = 1 unidad de mil", "Cada 10 unidades de un lugar forman 1 del lugar siguiente."],
      ["📍", "Valor de posición", "El lugar de una cifra le da su valor. De derecha a izquierda están las unidades, las decenas, las centenas y las unidades de mil.", "En 3.452:\n- 2 son unidades → 2\n- 5 son decenas → 50\n- 4 son centenas → 400\n- 3 son unidades de mil → 3.000", "La misma cifra vale distinto según el lugar que ocupa."],
      ["📖", "Leer y escribir números grandes", "Separamos el número en grupos de tres cifras con un punto. Leemos cada grupo y decimos su nombre: millones, mil, unidades.", "1.250.300 se lee: un millón doscientos cincuenta mil trescientos.", "Los números grandes se leen por grupos de tres cifras."],
      ["⚖️", "Comparar y ordenar", "Si un número tiene más cifras, es mayor. Si tienen las mismas cifras, compara de izquierda a derecha. Usamos > (mayor que), < (menor que) e = (igual).", "Compara 4.307 y 4.370:\n- Ambos tienen 4 cifras.\n- Las dos primeras cifras son iguales.\n- Decenas: 0 es menor que 7.\nEntonces 4.307 < 4.370.", "Compara primero cuántas cifras tiene y luego cifra por cifra."]
    ],
    mapa: ["Números naturales", [["Qué son", ["Sirven para contar", "Empiezan en 0", "Nunca terminan"]], ["Sistema decimal", ["Diez cifras", "Se agrupa de 10 en 10"]], ["Valor de posición", ["Unidades", "Decenas", "Centenas", "Unidades de mil"]], ["Comparar", ["Mayor que >", "Menor que <", "Igual ="]]]],
    tarjetas: [["¿Cuántas cifras tiene el sistema decimal?", "Diez: del 0 al 9."], ["¿Cuántas unidades forman una decena?", "Diez unidades."], ["¿Qué valor tiene el 5 en 3.052?", "50, porque está en las decenas."], ["¿Cómo se lee 2.000?", "Dos mil."], ["¿Cuál es el siguiente de 99?", "100."], ["¿Cuál es mayor, 4.307 o 4.370?", "4.370."], ["¿Qué significa el símbolo <?", "Menor que."]],
    videos: ["números naturales sexto grado", "valor de posición números naturales", "comparar y ordenar números naturales"],
    n: 10
  },
  {
    tema: "Operaciones con números naturales",
    resumen: "Con los naturales podemos sumar, restar, multiplicar y dividir. Cuando hay varias operaciones juntas, se resuelven en un orden.",
    objetivos: ["Resolverás sumas, restas, multiplicaciones y divisiones.", "Aplicarás el orden de las operaciones.", "Resolverás problemas de la vida diaria."],
    partes: [
      ["➕", "Suma y resta", "Sumar es juntar cantidades. Restar es quitar o comparar. Al sumar o restar en columnas, alinea las cifras: unidades con unidades, decenas con decenas.", "Compras un cuaderno de $4.500 y un lápiz de $1.200.\n- Suma: 4.500 + 1.200 = 5.700\nPagas con $10.000.\n- Resta: 10.000 − 5.700 = 4.300 de cambio.", "Alinea las cifras por su valor de posición."],
      ["✖️", "Multiplicación", "Multiplicar es sumar el mismo número varias veces. Los números que se multiplican se llaman factores y el resultado se llama producto.", "Una caja trae 6 arepas. En 5 cajas hay 5 × 6 = 30 arepas.", "Multiplicar es una suma repetida."],
      ["➗", "División", "Dividir es repartir en partes iguales. Tiene dividendo (lo que se reparte), divisor (entre cuántos) y cociente (lo que le toca a cada uno). A veces sobra algo: el residuo.", "Repartes 17 dulces entre 5 amigos.\n- 17 ÷ 5 = 3, sobran 2.\nCada amigo recibe 3 dulces y quedan 2.", "Dividendo = divisor × cociente + residuo."],
      ["🧮", "Orden de las operaciones", "Con varias operaciones, se resuelve en este orden:\n- 1.º los paréntesis\n- 2.º multiplicaciones y divisiones, de izquierda a derecha\n- 3.º sumas y restas, de izquierda a derecha", "Resuelve 3 + 4 × 2:\n- Primero la multiplicación: 4 × 2 = 8\n- Luego la suma: 3 + 8 = 11\nEl resultado no es 14.", "Primero paréntesis, luego × y ÷, al final + y −."],
      ["🛒", "Resolver problemas", "Para resolver un problema: lee con calma, busca los datos, decide qué operación usar, resuélvela y comprueba si el resultado tiene sentido.", "Sofía ahorra $2.000 cada semana. ¿Cuánto tiene en 8 semanas?\n- Datos: 2.000 por semana y 8 semanas.\n- Operación: 2.000 × 8 = 16.000.\nTiene $16.000.", "Lee, busca los datos, elige la operación y comprueba."]
    ],
    mapa: ["Operaciones con naturales", [["Suma", ["Juntar", "Sumandos", "Total"]], ["Resta", ["Quitar", "Minuendo", "Sustraendo", "Diferencia"]], ["Multiplicación", ["Suma repetida", "Factores", "Producto"]], ["División", ["Repartir", "Dividendo y divisor", "Cociente", "Residuo"]], ["Orden", ["Paréntesis", "× y ÷", "+ y −"]]]],
    tarjetas: [["¿Cómo se llama el resultado de una suma?", "Total o suma."], ["¿Qué es multiplicar 4 × 3?", "Sumar 3 + 3 + 3 + 3, que da 12."], ["En 17 ÷ 5, ¿cuál es el residuo?", "2."], ["¿Qué se resuelve primero?", "Los paréntesis."], ["¿Cuánto es 3 + 4 × 2?", "11."], ["¿Cómo se llama el resultado de una multiplicación?", "Producto."], ["¿Qué se hace primero al resolver un problema?", "Leer con calma y buscar los datos."]],
    videos: ["operaciones con números naturales", "orden de las operaciones sexto grado", "problemas de suma y resta"],
    n: 10
  },
  {
    tema: "Múltiplos, divisores y criterios de divisibilidad",
    resumen: "Un múltiplo se obtiene multiplicando un número por 1, 2, 3... Un divisor divide a otro número sin dejar residuo. Los criterios de divisibilidad ayudan a saberlo rápido.",
    objetivos: ["Escribirás los múltiplos de un número.", "Encontrarás los divisores de un número.", "Usarás los criterios de divisibilidad."],
    partes: [
      ["✖️", "Múltiplos", "Los múltiplos de un número son los resultados de multiplicarlo por 1, 2, 3, 4... Cada número tiene infinitos múltiplos.", "Múltiplos de 4:\n- 4 × 1 = 4\n- 4 × 2 = 8\n- 4 × 3 = 12\n- 4 × 4 = 16\nSon 4, 8, 12, 16, 20...", "Los múltiplos aparecen en la tabla de multiplicar."],
      ["➗", "Divisores", "Un divisor de un número lo divide exactamente, sin dejar residuo. El 1 y el mismo número siempre son divisores.", "Divisores de 12:\n- 1 × 12\n- 2 × 6\n- 3 × 4\nSon 1, 2, 3, 4, 6 y 12.", "Un divisor divide exacto: el residuo es 0."],
      ["🔗", "Múltiplo y divisor van juntos", "Si 3 es divisor de 12, entonces 12 es múltiplo de 3. Son dos formas de decir lo mismo.", "20 = 4 × 5.\n- 20 es múltiplo de 4 y de 5.\n- 4 y 5 son divisores de 20.", "Si a divide a b, entonces b es múltiplo de a."],
      ["✅", "Criterios por 2, 3 y 5", "Son reglas para saber si un número se divide exacto sin hacer la división.\n- Por 2: termina en 0, 2, 4, 6 u 8.\n- Por 3: la suma de sus cifras es múltiplo de 3.\n- Por 5: termina en 0 o en 5.", "¿Es 435 divisible por 3?\n- Suma las cifras: 4 + 3 + 5 = 12\n- 12 es múltiplo de 3.\nSí. También es divisible por 5, porque termina en 5.", "Para el 3, suma las cifras del número."],
      ["✅", "Criterios por 6, 9 y 10", "- Por 6: es divisible por 2 y por 3 a la vez.\n- Por 9: la suma de sus cifras es múltiplo de 9.\n- Por 10: termina en 0.", "¿Es 1.278 divisible por 9?\n- 1 + 2 + 7 + 8 = 18\n- 18 es múltiplo de 9.\nSí. Como también termina en 8 (par), es divisible por 6.", "Para el 9, suma las cifras y mira si da múltiplo de 9."]
    ],
    mapa: ["Múltiplos y divisores", [["Múltiplos", ["Se multiplica por 1, 2, 3...", "Son infinitos"]], ["Divisores", ["Dividen exacto", "Son finitos", "Incluyen 1 y el número"]], ["Criterios", ["Por 2: termina en par", "Por 3: suma de cifras", "Por 5: termina en 0 o 5", "Por 10: termina en 0"]]]],
    tarjetas: [["¿Cuáles son los 4 primeros múltiplos de 5?", "5, 10, 15 y 20."], ["¿Cuáles son los divisores de 10?", "1, 2, 5 y 10."], ["¿Cuándo un número es divisible por 2?", "Cuando termina en 0, 2, 4, 6 u 8."], ["¿Cuándo es divisible por 5?", "Cuando termina en 0 o en 5."], ["¿Es 24 divisible por 3?", "Sí: 2 + 4 = 6, que es múltiplo de 3."], ["Si 7 es divisor de 21, ¿qué es 21 de 7?", "Un múltiplo."], ["¿Cuándo es divisible por 10?", "Cuando termina en 0."]],
    videos: ["múltiplos y divisores sexto grado", "criterios de divisibilidad", "divisibilidad por 2, 3 y 5"],
    n: 10
  },
  {
    tema: "Números primos, compuestos y factorización",
    resumen: "Un número primo solo se divide por 1 y por sí mismo. Un número compuesto tiene más divisores. Todo compuesto se puede escribir como una multiplicación de primos.",
    objetivos: ["Reconocerás números primos y compuestos.", "Encontrarás primos con la criba de Eratóstenes.", "Factorizarás un número en primos."],
    partes: [
      ["🔒", "Números primos", "Un número primo tiene exactamente dos divisores: el 1 y él mismo. El 1 no es primo. El 2 es el único primo que es par.", "- 7: sus divisores son 1 y 7 → es primo.\n- 9: sus divisores son 1, 3 y 9 → no es primo.\nPrimos pequeños: 2, 3, 5, 7, 11, 13, 17, 19.", "Un primo solo se divide exacto por 1 y por sí mismo."],
      ["🧩", "Números compuestos", "Un número compuesto tiene más de dos divisores. Se puede formar multiplicando números más pequeños.", "12 tiene divisores 1, 2, 3, 4, 6 y 12. Es compuesto porque 12 = 3 × 4.", "Compuesto = más de dos divisores."],
      ["🔎", "La criba de Eratóstenes", "Es un método para encontrar primos. Escribe los números del 2 al 50. Tacha los múltiplos de 2 (menos el 2), luego los de 3, de 5 y de 7. Los que quedan sin tachar son primos.", "Del 2 al 20, quedan sin tachar: 2, 3, 5, 7, 11, 13, 17 y 19.", "Los números que nadie tacha son los primos."],
      ["🌳", "Factorización en primos", "Factorizar es escribir un número como multiplicación de primos. Divide por el primo más pequeño que se pueda, una y otra vez, hasta llegar a 1.", "Factoriza 60:\n- 60 ÷ 2 = 30\n- 30 ÷ 2 = 15\n- 15 ÷ 3 = 5\n- 5 ÷ 5 = 1\nEntonces 60 = 2 × 2 × 3 × 5 = 2² × 3 × 5.", "Divide siempre por primos hasta llegar a 1."]
    ],
    mapa: ["Primos y compuestos", [["Primos", ["Dos divisores", "El 2 es el único par", "El 1 no es primo"]], ["Compuestos", ["Más de dos divisores", "Se forman multiplicando"]], ["Criba de Eratóstenes", ["Escribir la lista", "Tachar múltiplos", "Quedan los primos"]], ["Factorización", ["Dividir por primos", "Llegar a 1", "Usar exponentes"]]]],
    tarjetas: [["¿Cuántos divisores tiene un primo?", "Exactamente dos: 1 y él mismo."], ["¿Es 1 un número primo?", "No."], ["¿Cuál es el único primo par?", "El 2."], ["¿Es 15 primo o compuesto?", "Compuesto: 15 = 3 × 5."], ["Escribe los primos menores que 12.", "2, 3, 5, 7 y 11."], ["Factoriza 12.", "2 × 2 × 3 = 2² × 3."], ["¿Qué es factorizar?", "Escribir un número como multiplicación de primos."]],
    videos: ["números primos y compuestos sexto grado", "criba de Eratóstenes", "descomposición en factores primos"],
    n: 10
  },
  {
    tema: "Máximo común divisor y mínimo común múltiplo",
    resumen: "El MCD es el divisor más grande que dos números tienen en común. El mcm es el múltiplo más pequeño que tienen en común. Sirven para resolver problemas de repartos y coincidencias.",
    objetivos: ["Calcularás el MCD de dos números.", "Calcularás el mcm de dos números.", "Usarás MCD y mcm para resolver problemas."],
    partes: [
      ["🎯", "El máximo común divisor (MCD)", "El MCD de dos números es el divisor más grande que tienen en común. Primero escribe los divisores de cada número y luego busca los comunes.", "Divisores de 12: 1, 2, 3, 4, 6, 12.\nDivisores de 18: 1, 2, 3, 6, 9, 18.\nComunes: 1, 2, 3 y 6.\nEl MCD de 12 y 18 es 6.", "El MCD es el mayor de los divisores comunes."],
      ["🧮", "MCD por factorización", "Factoriza ambos números. El MCD es el producto de los primos que se repiten en los dos, con el menor exponente.", "12 = 2² × 3 y 18 = 2 × 3².\n- Primos comunes: 2 y 3.\n- Menor exponente: 2¹ y 3¹.\nMCD = 2 × 3 = 6.", "En el MCD tomas solo los primos comunes."],
      ["🎯", "El mínimo común múltiplo (mcm)", "El mcm de dos números es el múltiplo más pequeño, distinto de cero, que tienen en común. Escribe los múltiplos de cada uno y busca el primero que se repite.", "Múltiplos de 4: 4, 8, 12, 16, 20...\nMúltiplos de 6: 6, 12, 18...\nEl primero en común es 12. El mcm de 4 y 6 es 12.", "El mcm es el menor de los múltiplos comunes."],
      ["🧮", "mcm por factorización", "Factoriza los números. El mcm es el producto de todos los primos, comunes y no comunes, con el mayor exponente.", "4 = 2² y 6 = 2 × 3.\n- Tomamos 2² y 3.\nmcm = 4 × 3 = 12.", "En el mcm tomas todos los primos con su mayor exponente."],
      ["🧩", "Problemas con MCD y mcm", "Usa el MCD para repartir o formar grupos iguales lo más grandes posible. Usa el mcm para saber cuándo coinciden cosas que se repiten.", "Dos buses salen juntos. Uno vuelve cada 4 horas y otro cada 6 horas.\n- Vuelven a coincidir en el mcm de 4 y 6.\n- mcm = 12.\nCoinciden dentro de 12 horas.", "MCD sirve para repartir; mcm sirve para saber cuándo coinciden."]
    ],
    mapa: ["MCD y mcm", [["MCD", ["Mayor divisor común", "Sirve para repartir", "Primos comunes, menor exponente"]], ["mcm", ["Menor múltiplo común", "Sirve para coincidencias", "Todos los primos, mayor exponente"]], ["Métodos", ["Listar divisores o múltiplos", "Factorizar en primos"]]]],
    tarjetas: [["¿Cuál es el MCD de 8 y 12?", "4."], ["¿Cuál es el mcm de 3 y 4?", "12."], ["¿Qué significa MCD?", "Máximo común divisor."], ["¿Qué significa mcm?", "Mínimo común múltiplo."], ["¿Para qué sirve el MCD?", "Para repartir o formar grupos iguales lo más grandes posible."], ["¿Para qué sirve el mcm?", "Para saber cuándo coinciden eventos que se repiten."], ["¿Cuál es el mcm de 5 y 10?", "10."]],
    videos: ["máximo común divisor sexto grado", "mínimo común múltiplo sexto grado", "problemas de MCD y mcm"],
    n: 12
  },
  {
    tema: "Potenciación y radicación con naturales",
    resumen: "Una potencia es una multiplicación repetida del mismo número. La raíz hace la operación contraria. Sirven para calcular áreas, volúmenes y números muy grandes.",
    objetivos: ["Calcularás potencias con base y exponente.", "Calcularás raíces cuadradas y cúbicas exactas.", "Relacionarás potencias con áreas y volúmenes."],
    partes: [
      ["⚡", "Qué es una potencia", "En 2³ el 2 es la base y el 3 es el exponente. El exponente dice cuántas veces se multiplica la base por sí misma.", "2³ = 2 × 2 × 2 = 8\n5² = 5 × 5 = 25\n10³ = 10 × 10 × 10 = 1.000", "El exponente dice cuántas veces se multiplica la base."],
      ["1️⃣", "Casos especiales", "Todo número elevado a 1 es el mismo número. Todo número distinto de 0 elevado a 0 es 1. El 1 elevado a cualquier exponente es 1.", "- 7¹ = 7\n- 7⁰ = 1\n- 1⁵ = 1", "Un exponente 1 deja igual el número; un exponente 0 da 1."],
      ["🟦", "Cuadrados y cubos", "Elevar al cuadrado es multiplicar un número por sí mismo. Elevar al cubo es multiplicarlo tres veces. Se relacionan con áreas y volúmenes.", "- Un cuadrado de lado 4 cm tiene área 4² = 16 cm².\n- Un cubo de arista 3 cm tiene volumen 3³ = 27 cm³.", "Cuadrado → área. Cubo → volumen."],
      ["√", "La raíz cuadrada", "La raíz cuadrada hace lo contrario de elevar al cuadrado. √25 = 5 porque 5² = 25.", "√49 = 7 porque 7 × 7 = 49.\n√100 = 10 porque 10 × 10 = 100.", "La raíz cuadrada busca el número que multiplicado por sí mismo da el resultado."],
      ["∛", "La raíz cúbica", "La raíz cúbica busca el número que multiplicado tres veces por sí mismo da el resultado. Se escribe ∛.", "∛8 = 2 porque 2 × 2 × 2 = 8.\n∛27 = 3 porque 3 × 3 × 3 = 27.", "La raíz cúbica busca el número que al cubo da el resultado."]
    ],
    mapa: ["Potencias y raíces", [["Potencia", ["Base", "Exponente", "Multiplicación repetida"]], ["Casos especiales", ["a¹ = a", "a⁰ = 1"]], ["Raíces", ["Cuadrada √", "Cúbica ∛", "Operación contraria"]], ["Usos", ["Áreas", "Volúmenes"]]]],
    tarjetas: [["¿Cuánto es 2⁴?", "16."], ["¿Cómo se llama el 3 en 5³?", "Exponente."], ["¿Cuánto es 9⁰?", "1."], ["¿Cuánto es √64?", "8."], ["¿Cuánto es ∛27?", "3."], ["¿Cuánto es 10²?", "100."], ["¿Qué calcula 6² en un cuadrado de lado 6?", "Su área: 36."]],
    videos: ["potenciación sexto grado", "raíz cuadrada para niños", "potencias y raíces cuadradas y cúbicas"],
    n: 10
  },
  {
    tema: "Fracciones: concepto, equivalencia y comparación",
    resumen: "Una fracción representa partes de un todo dividido en partes iguales. Dos fracciones pueden verse distintas y valer lo mismo. Podemos compararlas para saber cuál es mayor.",
    objetivos: ["Leerás y representarás fracciones.", "Encontrarás fracciones equivalentes y simplificarás.", "Compararás fracciones."],
    partes: [
      ["🍕", "Qué es una fracción", "Una fracción se escribe con dos números. El numerador (arriba) dice cuántas partes tomamos. El denominador (abajo) dice en cuántas partes iguales se dividió el todo.", "Una pizza se corta en 8 porciones iguales. Te comes 3.\nComiste 3/8 de la pizza.\n- Numerador: 3\n- Denominador: 8", "Arriba, las partes que tomo; abajo, las partes en que se divide el todo."],
      ["📚", "Tipos de fracciones", "- Propia: el numerador es menor que el denominador (3/4). Vale menos de 1.\n- Impropia: el numerador es mayor o igual (5/4). Vale 1 o más.\n- Mixta: tiene parte entera y fracción (1 y 1/4).", "5/4 es lo mismo que 1 y 1/4: una unidad completa y un cuarto más.", "Una fracción impropia se puede escribir como número mixto."],
      ["🟰", "Fracciones equivalentes", "Fracciones equivalentes valen lo mismo, aunque se vean distintas. Se obtienen multiplicando o dividiendo numerador y denominador por el mismo número.", "1/2 = 2/4 = 3/6 = 4/8\n- 1 × 2 = 2 y 2 × 2 = 4, entonces 1/2 = 2/4.", "Multiplica o divide arriba y abajo por el mismo número."],
      ["✂️", "Simplificar", "Simplificar es dividir numerador y denominador por un divisor común, hasta que ya no se pueda más. El resultado es la fracción irreducible.", "Simplifica 12/18:\n- Divide entre 2: 6/9\n- Divide entre 3: 2/3\nLa fracción simplificada es 2/3.", "Simplifica dividiendo arriba y abajo por un divisor común."],
      ["⚖️", "Comparar fracciones", "Con igual denominador, es mayor la de mayor numerador. Con distinto denominador, conviértelas a fracciones con el mismo denominador y compara.", "Compara 2/3 y 3/4:\n- mcm de 3 y 4 = 12\n- 2/3 = 8/12 y 3/4 = 9/12\n- 8/12 es menor que 9/12\nEntonces 2/3 < 3/4.", "Para comparar, busca un denominador común."]
    ],
    mapa: ["Fracciones", [["Partes", ["Numerador", "Denominador", "Todo dividido en partes iguales"]], ["Tipos", ["Propia", "Impropia", "Mixta"]], ["Equivalentes", ["Mismo valor", "Multiplicar o dividir arriba y abajo"]], ["Comparar", ["Igual denominador", "Distinto denominador: mcm"]]]],
    tarjetas: [["¿Qué indica el denominador?", "En cuántas partes iguales se divide el todo."], ["¿Qué indica el numerador?", "Cuántas partes se toman."], ["¿3/4 es propia o impropia?", "Propia."], ["Escribe una fracción equivalente a 1/2.", "2/4 (o 3/6, 4/8...)."], ["Simplifica 4/8.", "1/2."], ["¿Cuál es mayor, 3/5 o 2/5?", "3/5."], ["¿Cómo se escribe 7/4 como mixto?", "1 y 3/4."]],
    videos: ["fracciones sexto grado", "fracciones equivalentes y simplificación", "comparar fracciones con distinto denominador"],
    n: 12
  },
  {
    tema: "Operaciones con fracciones",
    resumen: "Las fracciones se pueden sumar, restar, multiplicar y dividir. Cada operación tiene su regla. También se usan para hallar una parte de una cantidad.",
    objetivos: ["Sumarás y restarás fracciones.", "Multiplicarás y dividirás fracciones.", "Calcularás la fracción de una cantidad."],
    partes: [
      ["➕", "Suma y resta con igual denominador", "Se suman o se restan los numeradores y se deja el mismo denominador.", "- 2/7 + 3/7 = 5/7\n- 6/9 − 2/9 = 4/9", "Con igual denominador, solo operas los numeradores."],
      ["🔁", "Suma y resta con distinto denominador", "Primero busca el mcm de los denominadores. Convierte cada fracción a ese denominador. Luego suma o resta los numeradores.", "1/2 + 1/3:\n- mcm de 2 y 3 = 6\n- 1/2 = 3/6 y 1/3 = 2/6\n- 3/6 + 2/6 = 5/6", "Primero iguala los denominadores."],
      ["✖️", "Multiplicación", "Se multiplican los numeradores entre sí y los denominadores entre sí. Después puedes simplificar.", "2/3 × 4/5 = (2 × 4) / (3 × 5) = 8/15", "Arriba con arriba, abajo con abajo."],
      ["➗", "División", "Se multiplica la primera fracción por el inverso de la segunda. El inverso se obtiene volteando la fracción.", "2/3 ÷ 4/5:\n- Voltea la segunda: 5/4\n- 2/3 × 5/4 = 10/12\n- Simplifica: 5/6", "Dividir es multiplicar por la fracción volteada."],
      ["🧮", "Fracción de una cantidad", "Para hallar una fracción de una cantidad, divide la cantidad entre el denominador y multiplica por el numerador.", "¿Cuánto es 3/4 de 20 estudiantes?\n- 20 ÷ 4 = 5\n- 5 × 3 = 15\nSon 15 estudiantes.", "Divide entre el denominador y multiplica por el numerador."]
    ],
    mapa: ["Operaciones con fracciones", [["Suma y resta", ["Igual denominador: sumar numeradores", "Distinto: usar el mcm"]], ["Multiplicación", ["Numerador × numerador", "Denominador × denominador"]], ["División", ["Voltear la segunda", "Multiplicar"]], ["Fracción de una cantidad", ["Dividir entre el denominador", "Multiplicar por el numerador"]]]],
    tarjetas: [["¿Cuánto es 1/5 + 2/5?", "3/5."], ["¿Cuánto es 1/2 + 1/4?", "3/4."], ["¿Cuánto es 2/3 × 3/4?", "6/12 = 1/2."], ["¿Cuánto es 1/2 ÷ 1/4?", "2."], ["¿Cuánto es 1/4 de 20?", "5."], ["¿Cómo se divide una fracción por otra?", "Multiplicando por la fracción volteada."], ["¿Qué se necesita para sumar con distinto denominador?", "Un denominador común (el mcm)."]],
    videos: ["suma y resta de fracciones sexto grado", "multiplicación y división de fracciones", "fracción de una cantidad"],
    n: 12
  },
  {
    tema: "Números decimales y sus operaciones",
    resumen: "Los decimales sirven para representar partes de la unidad. Tienen una parte entera y una parte decimal, separadas por una coma. Se pueden comparar y operar.",
    objetivos: ["Leerás y escribirás números decimales.", "Compararás y ordenarás decimales.", "Resolverás operaciones con decimales."],
    partes: [
      ["🔢", "Qué es un decimal", "Un número decimal tiene una parte entera y una parte decimal, separadas por una coma. La parte decimal son partes de la unidad: décimas, centésimas y milésimas.", "3,25 tiene:\n- 3 unidades\n- 2 décimas\n- 5 centésimas\nSe lee: tres con veinticinco centésimas.", "La coma separa las unidades enteras de las partes de la unidad."],
      ["📍", "Valor de posición decimal", "Después de la coma, cada lugar vale 10 veces menos que el anterior: décimas (1/10), centésimas (1/100) y milésimas (1/1.000).", "- 0,7 = 7/10\n- 0,07 = 7/100\n- 0,007 = 7/1.000", "Cada lugar a la derecha vale 10 veces menos."],
      ["⚖️", "Comparar y ordenar", "Compara primero la parte entera. Si es igual, compara las décimas, luego las centésimas, y así. Puedes agregar ceros a la derecha sin cambiar el valor.", "Compara 2,5 y 2,45:\n- Enteros iguales: 2.\n- Escribe 2,50 y 2,45.\n- Décimas: 5 es mayor que 4.\nEntonces 2,5 > 2,45.", "Agregar ceros a la derecha no cambia el valor."],
      ["➕", "Suma y resta", "Alinea las comas, una debajo de la otra. Si falta una cifra, agrega ceros. Opera como con números naturales y pon la coma en el resultado.", "3,5 + 2,75:\n- Escribe 3,50 + 2,75.\n- Centésimas: 0 + 5 = 5\n- Décimas: 5 + 7 = 12 → escribo 2 y llevo 1\n- Unidades: 3 + 2 + 1 = 6\nResultado: 6,25.", "Alinea siempre las comas."],
      ["✖️", "Multiplicación", "Multiplica como si no hubiera comas. Al final, pon en el resultado tantas cifras decimales como tengan los dos factores juntos.", "1,2 × 0,3:\n- 12 × 3 = 36\n- 1,2 tiene 1 decimal y 0,3 tiene 1 decimal: son 2 en total.\nResultado: 0,36.", "Cuenta los decimales de los dos factores y suma."]
    ],
    mapa: ["Números decimales", [["Partes", ["Parte entera", "Coma", "Parte decimal"]], ["Posiciones", ["Décimas", "Centésimas", "Milésimas"]], ["Comparar", ["Primero la parte entera", "Luego décima por décima"]], ["Operaciones", ["Alinear comas", "Contar decimales al multiplicar"]]]],
    tarjetas: [["¿Qué valor tiene el 5 en 0,05?", "Cinco centésimas."], ["¿Cuál es mayor, 0,6 o 0,59?", "0,6."], ["¿Cuánto es 1,5 + 2,25?", "3,75."], ["¿Cuánto es 5 − 1,5?", "3,5."], ["¿Cuánto es 0,2 × 0,3?", "0,06."], ["¿Qué separa la coma decimal?", "La parte entera de la parte decimal."], ["¿2,5 es igual a 2,50?", "Sí."]],
    videos: ["números decimales sexto grado", "suma y resta de decimales", "multiplicación de números decimales"],
    n: 12
  },
  {
    tema: "Razones y proporciones",
    resumen: "Una razón compara dos cantidades con una división. Una proporción es la igualdad de dos razones. Se usan para resolver problemas como precios, mezclas y escalas.",
    objetivos: ["Escribirás razones entre dos cantidades.", "Reconocerás proporciones.", "Resolverás problemas con regla de tres directa."],
    partes: [
      ["⚖️", "Qué es una razón", "Una razón compara dos cantidades por medio de una división. Se escribe a : b o a/b y se lee «a es a b».", "En un curso hay 12 niñas y 18 niños.\n- Razón de niñas a niños: 12 : 18\n- Simplificada: 2 : 3", "Una razón compara dos cantidades."],
      ["🟰", "Qué es una proporción", "Una proporción es la igualdad de dos razones: a/b = c/d. Los números de los lados se llaman extremos (a y d) y los del centro, medios (b y c).", "2/3 = 4/6 es una proporción.\nCuando simplificas 4/6, obtienes 2/3.", "Una proporción une dos razones iguales."],
      ["✖️", "Propiedad fundamental", "En una proporción, el producto de los extremos es igual al producto de los medios: a × d = b × c.", "En 3 : 5 = 6 : 10:\n- Extremos: 3 × 10 = 30\n- Medios: 5 × 6 = 30\nSon iguales, es una proporción.", "Extremos por extremos = medios por medios."],
      ["❓", "Hallar el valor desconocido", "Para encontrar un valor x en una proporción, multiplica en cruz y divide entre el número que queda.", "3/5 = x/20:\n- 3 × 20 = 60\n- 60 ÷ 5 = 12\nEntonces x = 12.", "Multiplica en cruz y divide."],
      ["🛍️", "Regla de tres simple directa", "Si una cantidad aumenta, la otra aumenta en la misma proporción. Se organiza una proporción con la incógnita.", "5 panes cuestan $4.000. ¿Cuánto cuestan 8 panes?\n- 5 panes → 4.000\n- 8 panes → x\n- x = 8 × 4.000 ÷ 5 = 6.400\nCuestan $6.400.", "En la regla de tres directa, más cantidad cuesta más."]
    ],
    mapa: ["Razones y proporciones", [["Razón", ["Compara dos cantidades", "Se escribe a : b", "Se puede simplificar"]], ["Proporción", ["Igualdad de razones", "Extremos y medios"]], ["Propiedad", ["Extremos por extremos", "Medios por medios"]], ["Regla de tres", ["Multiplicar en cruz", "Dividir"]]]],
    tarjetas: [["¿Qué es una razón?", "Una comparación entre dos cantidades por medio de una división."], ["Simplifica la razón 10 : 15.", "2 : 3."], ["¿Qué es una proporción?", "La igualdad de dos razones."], ["¿Es 2/4 = 3/6 una proporción?", "Sí: 2 × 6 = 4 × 3 = 12."], ["Si 3 lápices cuestan $6.000, ¿cuánto cuestan 6?", "$12.000."], ["En 4/6 = x/3, ¿cuánto vale x?", "2."], ["¿Cómo se llaman los números del centro de una proporción?", "Medios."]],
    videos: ["razones y proporciones sexto grado", "regla de tres simple directa", "propiedad fundamental de las proporciones"],
    n: 12
  },
  {
    tema: "Porcentajes",
    resumen: "Un porcentaje es una razón con denominador 100. Se usa para hablar de descuentos, notas, encuestas y estadísticas de la vida diaria.",
    objetivos: ["Entenderás qué significa un porcentaje.", "Calcularás el porcentaje de una cantidad.", "Resolverás problemas de descuentos."],
    partes: [
      ["💯", "Qué es un porcentaje", "Un porcentaje es una razón con denominador 100. El 25 % significa 25 de cada 100. Se escribe con el símbolo %.", "25 % = 25/100 = 1/4 = 0,25.", "Por ciento significa «de cada cien»."],
      ["🧮", "Porcentaje de una cantidad", "Para hallar el p % de una cantidad, multiplícala por p y divide entre 100.", "El 20 % de 150:\n- 150 × 20 = 3.000\n- 3.000 ÷ 100 = 30\nEl 20 % de 150 es 30.", "Multiplica por el porcentaje y divide entre 100."],
      ["⚡", "Porcentajes fáciles", "Algunos porcentajes se calculan rápido:\n- 50 % es la mitad.\n- 25 % es la cuarta parte.\n- 10 % es dividir entre 10.", "En un grupo de 40 personas:\n- El 50 % son 20.\n- El 25 % son 10.\n- El 10 % son 4.", "50 % = mitad, 25 % = cuarta parte, 10 % = dividir entre 10."],
      ["🏷️", "Descuentos", "Un descuento es un porcentaje del precio. Calcula el descuento y réstalo al precio original.", "Unos tenis cuestan $80.000 y tienen 15 % de descuento.\n- Descuento: 80.000 × 15 ÷ 100 = 12.000\n- Precio final: 80.000 − 12.000 = 68.000", "Precio final = precio − descuento."],
      ["🔍", "Qué porcentaje es", "Para saber qué porcentaje es una parte del total, divide la parte entre el total y multiplica por 100.", "En un curso de 30 estudiantes faltaron 6.\n- 6 ÷ 30 = 0,2\n- 0,2 × 100 = 20\nFaltó el 20 %.", "Parte ÷ total × 100."]
    ],
    mapa: ["Porcentajes", [["Qué es", ["Razón sobre 100", "Símbolo %"]], ["Calcular", ["Cantidad × % ÷ 100"]], ["Atajos", ["50 % mitad", "25 % cuarta parte", "10 % entre 10"]], ["Usos", ["Descuentos", "Encuestas", "Notas"]]]],
    tarjetas: [["¿Qué significa 30 %?", "30 de cada 100."], ["¿Cuál es el 50 % de 80?", "40."], ["¿Cuál es el 10 % de 250?", "25."], ["¿Cuál es el 25 % de 200?", "50."], ["Un libro de $20.000 tiene 10 % de descuento. ¿Cuánto se paga?", "$18.000."], ["¿Cómo se escribe 0,5 como porcentaje?", "50 %."], ["¿Qué porcentaje es 5 de 20?", "25 %."]],
    videos: ["porcentajes sexto grado", "cómo calcular un porcentaje", "descuentos y porcentajes problemas"],
    n: 12
  },
  {
    tema: "Introducción a los números enteros",
    resumen: "Los números enteros incluyen los naturales, el cero y los números negativos. Sirven para representar deudas, temperaturas bajo cero o pisos bajo el nivel de la calle.",
    objetivos: ["Reconocerás los números enteros positivos y negativos.", "Ubicarás enteros en la recta numérica.", "Compararás enteros y hallarás su valor absoluto."],
    partes: [
      ["➖", "Qué son los enteros", "Los enteros son: ..., −3, −2, −1, 0, 1, 2, 3... Los positivos están a la derecha del cero y los negativos a la izquierda. Los negativos se usan para deudas, temperaturas bajo cero o profundidades.", "- Una temperatura de −3 °C son tres grados bajo cero.\n- Estar en el sótano −2 es estar dos pisos bajo la calle.\n- Deber $5.000 se escribe −5.000.", "Los negativos representan «menos que cero»."],
      ["📏", "La recta numérica", "En la recta numérica el cero está en el centro. Los positivos van a la derecha y los negativos a la izquierda. Cuanto más a la derecha, mayor es el número.", "−5 < −2 < 0 < 3.\nEl −5 está más a la izquierda, por eso es el menor.", "Más a la derecha significa mayor."],
      ["🪞", "Opuestos", "El opuesto de un número está a la misma distancia del cero, pero al otro lado. El opuesto de 4 es −4 y el de −7 es 7.", "- Opuesto de 9: −9.\n- Opuesto de −2: 2.\n- Opuesto de 0: 0.", "Los opuestos están a igual distancia del cero."],
      ["📐", "Valor absoluto", "El valor absoluto es la distancia de un número al cero. Se escribe con barras: |−5| = 5. Nunca es negativo.", "- |8| = 8\n- |−8| = 8\n- |0| = 0", "El valor absoluto es una distancia, por eso no es negativo."],
      ["⚖️", "Comparar enteros", "Todo positivo es mayor que cualquier negativo. Entre dos negativos, es mayor el que está más cerca del cero.", "−2 > −9 porque −2 está más cerca del cero.\n3 > −10 porque todo positivo supera a un negativo.", "Entre negativos, gana el más cercano al cero."]
    ],
    mapa: ["Números enteros", [["Tipos", ["Positivos", "Cero", "Negativos"]], ["Recta numérica", ["Cero al centro", "Derecha: mayores", "Izquierda: menores"]], ["Opuestos y valor absoluto", ["Opuesto: cambia el signo", "Valor absoluto: distancia al cero"]], ["Usos", ["Temperaturas", "Deudas", "Pisos bajo la calle"]]]],
    tarjetas: [["¿Cuál es el opuesto de 6?", "−6."], ["¿Cuál es el valor absoluto de −9?", "9."], ["¿Cuál es mayor, −3 o −8?", "−3."], ["¿Qué número está en el centro de la recta?", "El cero."], ["¿Cómo se escribe «cinco grados bajo cero»?", "−5 °C."], ["Ordena de menor a mayor: 2, −4, 0.", "−4, 0, 2."], ["¿Un valor absoluto puede ser negativo?", "No."]],
    videos: ["números enteros sexto grado", "recta numérica números enteros", "valor absoluto y opuesto de un número"],
    n: 10
  },
  {
    tema: "Ángulos y su medida",
    resumen: "Un ángulo se forma cuando dos semirrectas parten de un mismo punto. Se mide en grados con el transportador y se clasifica según su abertura.",
    objetivos: ["Identificarás los elementos de un ángulo.", "Medirás ángulos con el transportador.", "Clasificarás ángulos según su medida."],
    partes: [
      ["📐", "Qué es un ángulo", "Un ángulo se forma cuando dos semirrectas parten del mismo punto, llamado vértice. Las semirrectas son los lados. Su abertura se mide en grados (°).", "Las manecillas de un reloj forman un ángulo. A las 3:00 miden 90°.", "Un ángulo tiene un vértice y dos lados."],
      ["📏", "Medir con el transportador", "El transportador es la herramienta para medir ángulos. Pon su centro sobre el vértice y alinea un lado con el 0°. Lee la marca donde cae el otro lado.", "Si el segundo lado cae sobre la marca 60, el ángulo mide 60°.", "Centro en el vértice y un lado sobre el 0°."],
      ["🗂️", "Clasificación de los ángulos", "- Agudo: menos de 90°.\n- Recto: exactamente 90°.\n- Obtuso: más de 90° y menos de 180°.\n- Llano: exactamente 180°.\n- Completo: 360°.", "La esquina de una hoja es un ángulo recto (90°). Unas tijeras casi cerradas forman un ángulo agudo.", "Recto = 90°, llano = 180°, completo = 360°."],
      ["➕", "Complementarios y suplementarios", "Dos ángulos son complementarios si suman 90°. Son suplementarios si suman 180°.", "- Complemento de 30°: 90° − 30° = 60°.\n- Suplemento de 110°: 180° − 110° = 70°.", "Complementarios suman 90°; suplementarios suman 180°."]
    ],
    mapa: ["Ángulos", [["Elementos", ["Vértice", "Lados", "Abertura"]], ["Medida", ["Grados °", "Transportador"]], ["Tipos", ["Agudo < 90°", "Recto = 90°", "Obtuso > 90°", "Llano = 180°"]], ["Pares de ángulos", ["Complementarios: 90°", "Suplementarios: 180°"]]]],
    tarjetas: [["¿Cuánto mide un ángulo recto?", "90°."], ["¿Cómo se llama un ángulo de 45°?", "Agudo."], ["¿Cómo se llama un ángulo de 120°?", "Obtuso."], ["¿Cuánto mide un ángulo llano?", "180°."], ["¿Cuál es el complemento de 40°?", "50°."], ["¿Cuál es el suplemento de 100°?", "80°."], ["¿Con qué herramienta se mide un ángulo?", "Con el transportador."]],
    videos: ["ángulos y su medida sexto grado", "cómo usar el transportador", "clasificación de ángulos"],
    n: 10
  },
  {
    tema: "Polígonos y triángulos",
    resumen: "Un polígono es una figura plana cerrada formada por segmentos. Los triángulos son polígonos de tres lados y se clasifican por sus lados y por sus ángulos.",
    objetivos: ["Reconocerás polígonos y sus elementos.", "Distinguirás polígonos regulares e irregulares.", "Clasificarás triángulos."],
    partes: [
      ["🔷", "Qué es un polígono", "Un polígono es una figura plana y cerrada formada por segmentos de recta. Se nombra según su número de lados: triángulo (3), cuadrilátero (4), pentágono (5), hexágono (6) y octágono (8).", "Una señal de PARE tiene 8 lados: es un octágono.", "El nombre del polígono depende del número de lados."],
      ["🧩", "Elementos de un polígono", "Un polígono tiene lados, vértices (las esquinas) y ángulos. En un polígono, el número de lados es igual al de vértices.", "Un hexágono tiene 6 lados, 6 vértices y 6 ángulos.", "Lados, vértices y ángulos son siempre la misma cantidad."],
      ["⚖️", "Regulares e irregulares", "Un polígono regular tiene todos sus lados y todos sus ángulos iguales. Si no, es irregular.", "El cuadrado y el triángulo equilátero son regulares. Un rectángulo no lo es, porque sus lados no son todos iguales.", "Regular: todo igual; irregular: no."],
      ["🔺", "Triángulos según sus lados", "- Equilátero: tiene los 3 lados iguales.\n- Isósceles: tiene 2 lados iguales.\n- Escaleno: tiene los 3 lados diferentes.", "Un triángulo con lados de 5 cm, 5 cm y 8 cm es isósceles.", "Cuenta cuántos lados iguales tiene."],
      ["📐", "Triángulos según sus ángulos", "- Acutángulo: tiene 3 ángulos agudos.\n- Rectángulo: tiene un ángulo recto.\n- Obtusángulo: tiene un ángulo obtuso.\nLos ángulos interiores de cualquier triángulo suman 180°.", "Un triángulo tiene ángulos de 50° y 60°.\n- El tercero mide 180° − 50° − 60° = 70°.", "Los tres ángulos de un triángulo siempre suman 180°."]
    ],
    mapa: ["Polígonos y triángulos", [["Polígonos", ["Figura plana cerrada", "Lados, vértices y ángulos"]], ["Nombres", ["Triángulo 3", "Cuadrilátero 4", "Pentágono 5", "Hexágono 6"]], ["Triángulos por lados", ["Equilátero", "Isósceles", "Escaleno"]], ["Triángulos por ángulos", ["Acutángulo", "Rectángulo", "Obtusángulo"]]]],
    tarjetas: [["¿Cuántos lados tiene un pentágono?", "5."], ["¿Cuántos lados tiene un hexágono?", "6."], ["¿Cómo se llama el triángulo con 3 lados iguales?", "Equilátero."], ["¿Cómo se llama el triángulo con 3 lados distintos?", "Escaleno."], ["¿Cuánto suman los ángulos de un triángulo?", "180°."], ["Un triángulo tiene un ángulo de 90°, ¿cómo se llama?", "Rectángulo."], ["¿Qué es un polígono regular?", "Uno con todos los lados y ángulos iguales."]],
    videos: ["polígonos sexto grado", "clasificación de triángulos", "suma de los ángulos de un triángulo"],
    n: 10
  },
  {
    tema: "Perímetro y área de figuras planas",
    resumen: "El perímetro es la medida del contorno de una figura. El área es la cantidad de superficie que cubre. Cada una se mide con unidades distintas.",
    objetivos: ["Calcularás el perímetro de figuras planas.", "Calcularás el área de cuadrados, rectángulos y triángulos.", "Decidirás cuándo usar perímetro y cuándo área."],
    partes: [
      ["🔲", "El perímetro", "El perímetro es la longitud del contorno de una figura. Se obtiene sumando todos sus lados. Se mide en unidades de longitud: cm, m, km.", "Un terreno rectangular mide 10 m por 6 m:\n10 + 6 + 10 + 6 = 32 m de perímetro.", "El perímetro se mide alrededor de la figura."],
      ["🧮", "Fórmulas del perímetro", "- Cuadrado: 4 × lado.\n- Rectángulo: 2 × (base + altura).\n- Triángulo: suma de los tres lados.", "Cuadrado de lado 7 cm:\n4 × 7 = 28 cm.", "Perímetro es la suma de todos los lados."],
      ["⬜", "El área", "El área es la cantidad de superficie que cubre una figura. Se mide en unidades cuadradas: cm², m², km².", "Un piso cubierto con 12 baldosas de 1 m² cada una tiene 12 m² de área.", "El área se mide en unidades cuadradas."],
      ["📐", "Fórmulas del área", "- Cuadrado: lado × lado.\n- Rectángulo: base × altura.\n- Triángulo: (base × altura) ÷ 2.", "Triángulo de base 8 cm y altura 5 cm:\n(8 × 5) ÷ 2 = 20 cm².", "El área del triángulo es la mitad de base por altura."],
      ["🧩", "Perímetro o área", "Usa el perímetro cuando necesites rodear o cercar. Usa el área cuando necesites cubrir o pintar una superficie.", "Un patio de 4 m × 3 m:\n- Para cercarlo: perímetro = 14 m.\n- Para ponerle piso: área = 12 m².", "Rodear → perímetro. Cubrir → área."]
    ],
    mapa: ["Perímetro y área", [["Perímetro", ["Contorno", "Suma de lados", "Unidades: m, cm"]], ["Área", ["Superficie", "Unidades: m², cm²"]], ["Fórmulas de área", ["Cuadrado: l × l", "Rectángulo: b × h", "Triángulo: b × h ÷ 2"]], ["Cuándo usar", ["Cercar: perímetro", "Cubrir: área"]]]],
    tarjetas: [["¿Cuál es el perímetro de un cuadrado de lado 5?", "20."], ["¿Cuál es el área de un rectángulo de 6 por 4?", "24."], ["¿Cuál es el área de un triángulo de base 10 y altura 4?", "20."], ["¿Con qué unidad se mide el área?", "Con unidades cuadradas, como m²."], ["¿Qué calculas para poner una cerca?", "El perímetro."], ["¿Qué calculas para pintar una pared?", "El área."], ["Perímetro de un rectángulo de 8 por 3.", "22."]],
    videos: ["perímetro y área sexto grado", "área del triángulo, cuadrado y rectángulo", "diferencia entre perímetro y área"],
    n: 12
  },
  {
    tema: "Tablas, gráficos de barras y pictogramas",
    resumen: "La estadística organiza datos para entenderlos. Las tablas, los gráficos de barras y los pictogramas nos ayudan a ver cuál dato se repite más y a comparar.",
    objetivos: ["Organizarás datos en una tabla de frecuencias.", "Leerás gráficos de barras y pictogramas.", "Interpretarás la información de un gráfico."],
    partes: [
      ["📋", "Datos y tablas de frecuencias", "Un dato es una información que recogemos, como la mascota favorita. Una tabla de frecuencias muestra cuántas veces aparece cada dato.", "Encuesta de mascotas favoritas en un curso:\n- Perro: 12\n- Gato: 8\n- Pez: 5\n- Otra: 3", "Una tabla de frecuencias organiza y cuenta los datos."],
      ["🔢", "La frecuencia", "La frecuencia es el número de veces que aparece un dato. Si sumas todas las frecuencias, obtienes el total de datos.", "12 + 8 + 5 + 3 = 28 estudiantes encuestados.", "La suma de las frecuencias es el total de datos."],
      ["📊", "Gráfico de barras", "En un gráfico de barras, cada barra representa un dato y su altura indica la frecuencia. Debe tener título, nombre en los ejes y una escala.", "La barra de perros llega hasta 12 y la de gatos hasta 8.\nLa barra más alta es la de perros.", "Barra más alta = dato más frecuente."],
      ["🖼️", "Pictograma", "Un pictograma usa dibujos o símbolos para representar cantidades. Siempre debe decir cuánto vale cada símbolo.", "Si cada 🍎 vale 2 manzanas y dibujamos 4 🍎:\n4 × 2 = 8 manzanas.", "Revisa siempre cuánto vale cada dibujo."],
      ["🔍", "Interpretar un gráfico", "Para leer un gráfico: 1) lee el título, 2) mira los ejes y la escala, 3) compara las barras o los dibujos, 4) responde la pregunta.", "En el gráfico de mascotas, la preferida es el perro (12) y la menos elegida es «otra» (3).", "Lee título, ejes y escala antes de responder."]
    ],
    mapa: ["Estadística básica", [["Datos", ["Información recogida", "Se organizan en tablas"]], ["Frecuencia", ["Cuántas veces aparece", "Su suma es el total"]], ["Gráfico de barras", ["Título", "Ejes", "Altura = frecuencia"]], ["Pictograma", ["Símbolos", "Valor de cada símbolo"]]]],
    tarjetas: [["¿Qué es la frecuencia?", "El número de veces que aparece un dato."], ["¿Qué muestra una tabla de frecuencias?", "Cuántas veces se repite cada dato."], ["¿Qué indica la altura de una barra?", "La frecuencia del dato."], ["¿Qué es un pictograma?", "Un gráfico que usa dibujos para representar cantidades."], ["Si cada ⭐ vale 5 y hay 3 ⭐, ¿cuánto es?", "15."], ["¿Qué debe tener un buen gráfico?", "Título, ejes con nombre y escala."], ["¿Qué barra indica el dato más común?", "La más alta."]],
    videos: ["tablas de frecuencia sexto grado", "gráfico de barras y pictograma", "interpretar gráficos estadísticos"],
    n: 10
  },
  {
    tema: "Media, mediana y moda",
    resumen: "La media, la mediana y la moda son números que resumen un conjunto de datos. Cada una nos cuenta algo distinto sobre esos datos.",
    objetivos: ["Calcularás la media de un conjunto de datos.", "Hallarás la mediana y la moda.", "Elegirás la medida más útil para cada situación."],
    partes: [
      ["📊", "Resumir datos con un número", "Las medidas de tendencia central resumen un conjunto de datos con un solo número. Las tres más usadas son la media, la mediana y la moda.", "Notas de un estudiante: 3, 4, 5, 4, 4.\nLas tres medidas nos dicen qué tan altas o bajas son sus notas en general.", "Media, mediana y moda resumen datos."],
      ["➗", "La media o promedio", "La media se calcula sumando todos los datos y dividiendo entre la cantidad de datos.", "Notas: 3, 4, 5, 4, 4.\n- Suma: 3 + 4 + 5 + 4 + 4 = 20\n- Son 5 datos.\n- Media: 20 ÷ 5 = 4.", "Media = suma de datos ÷ cantidad de datos."],
      ["🎯", "La mediana", "La mediana es el dato del centro cuando los datos están ordenados de menor a mayor. Si hay dos datos en el centro, se promedian.", "Datos: 7, 2, 9, 4, 5.\n- Ordenados: 2, 4, 5, 7, 9.\n- El del centro es 5.\nLa mediana es 5.", "Primero ordena los datos, luego busca el del centro."],
      ["🏆", "La moda", "La moda es el dato que más se repite. Puede haber más de una moda, o ninguna si todos los datos aparecen una vez.", "Tallas de zapatos: 36, 37, 37, 38, 37, 39.\nLa moda es 37 porque aparece 3 veces.", "La moda es el dato más frecuente."],
      ["🤔", "Cuál usar", "La media usa todos los datos. La mediana no se afecta por datos muy extremos. La moda sirve incluso con datos que no son números, como colores favoritos.", "Cinco sueldos: 1, 1, 1, 1 y 100 millones.\nLa media se dispara por el 100, pero la mediana (1) muestra mejor lo habitual.", "Elige la medida que mejor describa los datos."]
    ],
    mapa: ["Medidas de tendencia central", [["Media", ["Suma de datos", "Dividir entre la cantidad"]], ["Mediana", ["Ordenar los datos", "Dato del centro"]], ["Moda", ["Dato que más se repite", "Puede haber varias"]], ["Cuándo usarlas", ["Media: usa todos", "Mediana: resiste extremos", "Moda: sirve con categorías"]]]],
    tarjetas: [["¿Cuál es la media de 2, 4 y 6?", "4."], ["¿Cuál es la mediana de 1, 3, 5, 7, 9?", "5."], ["¿Cuál es la moda de 2, 3, 3, 4, 3?", "3."], ["¿Cómo se calcula la media?", "Sumando los datos y dividiendo entre cuántos son."], ["¿Qué hay que hacer antes de hallar la mediana?", "Ordenar los datos."], ["¿Puede haber dos modas?", "Sí."], ["¿Cuál medida sirve con colores favoritos?", "La moda."]],
    videos: ["media mediana y moda sexto grado", "cómo calcular el promedio", "mediana y moda ejemplos"],
    n: 12
  },
  {
    tema: "Probabilidad: experimentos y posibles resultados",
    resumen: "La probabilidad mide qué tan posible es que algo ocurra. Se estudia con experimentos al azar, como lanzar una moneda o un dado.",
    objetivos: ["Reconocerás experimentos aleatorios.", "Escribirás el espacio muestral de un experimento.", "Calcularás una probabilidad simple."],
    partes: [
      ["🎲", "Experimentos aleatorios", "Un experimento aleatorio es una acción cuyo resultado no se puede saber antes de hacerla. Lanzar un dado, lanzar una moneda o sacar una bolita de una bolsa son experimentos aleatorios.", "Si lanzas un dado no sabes qué número saldrá. Eso es un experimento aleatorio.", "El resultado de un experimento aleatorio depende del azar."],
      ["📝", "Espacio muestral", "El espacio muestral es la lista de todos los resultados posibles de un experimento.", "- Moneda: {cara, sello}\n- Dado: {1, 2, 3, 4, 5, 6}", "El espacio muestral reúne todos los resultados posibles."],
      ["🎯", "Eventos", "Un evento es un resultado o un grupo de resultados que nos interesa. Un evento puede ser seguro, posible o imposible.", "Con un dado:\n- Sacar un número menor que 7 es seguro.\n- Sacar un número par es posible.\n- Sacar el 7 es imposible.", "Seguro, posible o imposible."],
      ["🧮", "Medir la probabilidad", "La probabilidad se calcula dividiendo los casos favorables entre los casos posibles. Es un número entre 0 (imposible) y 1 (seguro).", "Probabilidad de sacar un 3 con un dado:\n- Casos favorables: 1\n- Casos posibles: 6\nProbabilidad = 1/6.", "Probabilidad = casos favorables ÷ casos posibles."],
      ["⚖️", "Comparar probabilidades", "Si hay más casos favorables, el evento es más probable. Si hay menos, es menos probable.", "Una bolsa tiene 5 bolitas rojas y 1 azul.\n- Sacar roja: 5/6\n- Sacar azul: 1/6\nEs más probable sacar una roja.", "Más casos favorables significa mayor probabilidad."]
    ],
    mapa: ["Probabilidad", [["Experimento aleatorio", ["Depende del azar", "Dado, moneda, bolsa"]], ["Espacio muestral", ["Todos los resultados posibles"]], ["Eventos", ["Seguro", "Posible", "Imposible"]], ["Cálculo", ["Favorables ÷ posibles", "Entre 0 y 1"]]]],
    tarjetas: [["¿Cuál es el espacio muestral de una moneda?", "Cara y sello."], ["¿Cuántos resultados posibles tiene un dado?", "6."], ["¿Cuál es la probabilidad de sacar un número par con un dado?", "3/6 = 1/2."], ["¿Qué es un evento imposible?", "Uno que nunca ocurre, con probabilidad 0."], ["¿Qué es un evento seguro?", "Uno que siempre ocurre, con probabilidad 1."], ["¿Cómo se calcula una probabilidad?", "Casos favorables ÷ casos posibles."], ["En una bolsa hay 3 bolitas verdes y 1 roja. ¿Qué es más probable?", "Sacar una verde."]],
    videos: ["probabilidad sexto grado", "espacio muestral y eventos", "probabilidad simple con dados y monedas"],
    n: 10
  }
];
