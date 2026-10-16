// Teoría de Matemáticas, grado 10°. Formato compacto.
export const area = "Matematicas";

export const temas = [
  {
    tema: "Funciones: concepto, composición e inversa",
    resumen: "Una función asigna a cada entrada una única salida. Las funciones se pueden combinar (composición) y, si son uno a uno, se pueden «deshacer» con su función inversa.",
    objetivos: ["Evaluarás funciones y operarás con ellas.", "Compondrás funciones.", "Hallarás la función inversa."],
    partes: [
      ["🔄", "Repaso del concepto", "Una función f asigna a cada x del dominio un único valor f(x). Se puede definir con una fórmula, una tabla o una gráfica. El dominio son los x permitidos y el rango los y obtenidos.", "Si f(x) = 2x + 3, entonces f(4) = 11 y f(−1) = 1.", "Cada entrada tiene una sola salida."],
      ["➕", "Operaciones con funciones", "Se pueden sumar, restar, multiplicar y dividir funciones: (f + g)(x) = f(x) + g(x), (f·g)(x) = f(x)·g(x), (f/g)(x) = f(x)/g(x) con g(x) ≠ 0.", "Con f(x) = x² y g(x) = x + 1:\n- (f + g)(x) = x² + x + 1\n- (f·g)(x) = x³ + x²", "Opera sobre las fórmulas."],
      ["🔗", "Composición", "La composición (f ∘ g)(x) = f(g(x)) aplica primero g y luego f. En general, f ∘ g ≠ g ∘ f. El dominio de f ∘ g exige que x esté en el dominio de g y que g(x) esté en el de f.", "Con f(x) = 2x + 1 y g(x) = x²:\n- (f ∘ g)(x) = 2x² + 1\n- (g ∘ f)(x) = (2x + 1)²", "El orden importa."],
      ["🎯", "Funciones uno a uno", "Una función es inyectiva (uno a uno) si valores distintos de x dan valores distintos de y. En la gráfica se verifica con la prueba de la recta horizontal: ninguna recta horizontal corta la gráfica en más de un punto. Solo estas funciones tienen inversa.", "f(x) = 2x + 1 es uno a uno; f(x) = x² no lo es (f(2) = f(−2)).", "Para tener inversa: uno a uno."],
      ["↩️", "Función inversa", "La inversa f⁻¹ deshace a f: f(f⁻¹(x)) = x. Para hallarla: 1) escribe y = f(x). 2) Intercambia x e y. 3) Despeja y. Las gráficas de f y f⁻¹ son simétricas respecto a la recta y = x.", "f(x) = 2x + 3:\n- x = 2y + 3\n- y = (x − 3)/2\nf⁻¹(x) = (x − 3)/2.", "Intercambia x e y y despeja."]
    ],
    mapa: ["Funciones", [["Operaciones", ["Suma", "Producto", "Cociente"]], ["Composición", ["f(g(x))", "El orden importa"]], ["Uno a uno", ["Recta horizontal"]], ["Inversa", ["Intercambiar x e y", "Simétrica en y = x"]]]],
    tarjetas: [["¿Qué es (f ∘ g)(x)?", "f(g(x))."], ["¿Se cumple siempre f ∘ g = g ∘ f?", "No."], ["¿Qué función tiene inversa?", "La que es uno a uno."], ["Inversa de f(x) = x + 5.", "f⁻¹(x) = x − 5."], ["¿Qué prueba comprueba si es uno a uno?", "La de la recta horizontal."], ["Si f(x) = 3x y g(x) = x + 2, ¿cuánto es f(g(1))?", "9."], ["¿Respecto a qué recta son simétricas f y f⁻¹?", "y = x."]],
    videos: ["composición de funciones", "función inversa paso a paso", "funciones uno a uno"],
    n: 14
  },
  {
    tema: "Funciones polinómicas",
    resumen: "Las funciones polinómicas son sumas de potencias de x con coeficientes. Su gráfica es continua y suave, y su comportamiento depende del grado y del coeficiente principal.",
    objetivos: ["Reconocerás el grado y el coeficiente principal.", "Hallarás ceros y factorizarás.", "Describirás la forma de la gráfica."],
    partes: [
      ["🧮", "Definición", "Una función polinómica tiene la forma f(x) = aₙxⁿ + ... + a₁x + a₀, con n entero no negativo. El grado es la mayor potencia y aₙ es el coeficiente principal. Casos: constante (grado 0), lineal (1), cuadrática (2), cúbica (3).", "f(x) = 2x³ − 5x + 1 tiene grado 3 y coeficiente principal 2.", "El grado es el mayor exponente."],
      ["↗️", "Comportamiento en los extremos", "Depende del grado y del signo del coeficiente principal:\n- Grado par y a > 0: sube en ambos extremos.\n- Grado par y a < 0: baja en ambos.\n- Grado impar y a > 0: baja a la izquierda y sube a la derecha.\n- Grado impar y a < 0: al revés.", "x³ va de abajo a arriba; −x³ va de arriba a abajo.", "Los términos de mayor grado mandan."],
      ["🔍", "Ceros y factorización", "Un cero es un valor c tal que f(c) = 0 (corte con el eje x). Si c es un cero, (x − c) es un factor. Un polinomio de grado n tiene a lo sumo n ceros reales.", "f(x) = x² − 5x + 6 = (x − 2)(x − 3), con ceros 2 y 3.", "Cero ↔ factor (x − c)."],
      ["➗", "División sintética y teorema del residuo", "El teorema del residuo dice que el residuo de dividir f(x) entre (x − c) es f(c). Si f(c) = 0, (x − c) es factor (teorema del factor). Para buscar ceros racionales se prueban los divisores del término independiente entre los del coeficiente principal.", "f(x) = x³ − 6x² + 11x − 6. f(1) = 1 − 6 + 11 − 6 = 0, así que (x − 1) es factor.", "Prueba valores y factoriza."],
      ["🖊️", "Cómo graficar", "1) Halla los ceros. 2) Halla el corte con el eje y (f(0)). 3) Determina el comportamiento en los extremos. 4) Evalúa el signo entre ceros. 5) Traza una curva suave que cruce o toque el eje en cada cero.", "Para (x − 1)(x − 2)(x − 3): ceros 1, 2, 3; sube en la derecha porque el grado es 3 y a > 0.", "La gráfica no tiene saltos ni picos."]
    ],
    mapa: ["Polinómicas", [["Elementos", ["Grado", "Coeficiente principal"]], ["Extremos", ["Par: ambos lados iguales", "Impar: lados opuestos"]], ["Ceros", ["Factorizar", "Teorema del factor"]], ["Gráfica", ["Ceros", "Corte en y", "Signos"]]]],
    tarjetas: [["¿Qué es el grado?", "La mayor potencia de x."], ["¿Qué es un cero?", "Un valor de x donde f(x) = 0."], ["Si f(2) = 0, ¿qué factor tiene?", "(x − 2)."], ["¿Cuántos ceros reales tiene como máximo un polinomio de grado 4?", "4."], ["¿Cómo se comporta −x² en los extremos?", "Baja en ambos lados."], ["¿Qué dice el teorema del residuo?", "El residuo de dividir entre (x − c) es f(c)."], ["¿Una polinómica tiene saltos?", "No, es continua."]],
    videos: ["funciones polinómicas décimo grado", "teorema del residuo y del factor", "graficar polinomios"],
    n: 14
  },
  {
    tema: "Función exponencial",
    resumen: "En una función exponencial la variable está en el exponente: f(x) = aˣ. Modela crecimientos y decrecimientos rápidos, como poblaciones, inversiones y desintegración radiactiva.",
    objetivos: ["Identificarás crecimiento y decrecimiento.", "Graficarás funciones exponenciales.", "Resolverás problemas de aplicación."],
    partes: [
      ["📈", "Definición", "f(x) = aˣ con base a > 0 y a ≠ 1. Su dominio son todos los reales y su rango es y > 0. La gráfica pasa siempre por (0, 1) y tiene como asíntota horizontal el eje x.", "f(x) = 2ˣ: f(0) = 1, f(3) = 8, f(−1) = 1/2.", "La variable está en el exponente."],
      ["↗️", "Crecimiento y decrecimiento", "- Si a > 1: crece (por ejemplo, 2ˣ).\n- Si 0 < a < 1: decrece (por ejemplo, (1/2)ˣ).\nLa función eˣ, con e ≈ 2,718, tiene un papel especial en las ciencias.", "Una población de bacterias que se duplica cada hora sigue P = P₀·2ᵗ.", "a > 1 crece; a < 1 decrece."],
      ["🔧", "Propiedades de los exponentes", "aˣ·aʸ = aˣ⁺ʸ; aˣ/aʸ = aˣ⁻ʸ; (aˣ)ʸ = aˣʸ; a⁻ˣ = 1/aˣ; a⁰ = 1. Con ellas se resuelven ecuaciones exponenciales igualando bases.", "2ˣ = 32 → 2ˣ = 2⁵ → x = 5.", "Si las bases son iguales, igualan los exponentes."],
      ["💰", "Modelos de crecimiento", "Modelo: A = A₀(1 + r)ᵗ para crecimiento con tasa r; A = A₀(1 − r)ᵗ para decrecimiento. Interés compuesto: A = P(1 + r/n)^(nt).", "$1.000.000 al 5 % anual durante 3 años: A = 1.000.000·(1,05)³ ≈ $1.157.625.", "Cada período se multiplica por el mismo factor."],
      ["☢️", "Vida media", "En la desintegración radiactiva o la eliminación de un medicamento, la cantidad se reduce a la mitad en cada período: A = A₀·(1/2)^(t/T), con T la vida media.", "Un fármaco con vida media de 6 h: de 80 mg quedan 40 mg a las 6 h y 20 mg a las 12 h.", "Decrece a la mitad en cada vida media."]
    ],
    mapa: ["Exponencial", [["Forma", ["f(x) = aˣ", "Pasa por (0,1)"]], ["Tipos", ["a > 1: crece", "0 < a < 1: decrece"]], ["Ecuaciones", ["Igualar bases"]], ["Aplicaciones", ["Interés compuesto", "Población", "Vida media"]]]],
    tarjetas: [["¿Cuál es el rango de aˣ?", "y > 0."], ["¿Por qué punto pasa siempre aˣ?", "Por (0, 1)."], ["Resuelve 3ˣ = 81.", "x = 4."], ["¿Cuánto es a⁰?", "1."], ["¿Qué asíntota tiene aˣ?", "El eje x (y = 0)."], ["¿Cómo es (1/2)ˣ?", "Decreciente."], ["¿Qué es la vida media?", "El tiempo en que una cantidad se reduce a la mitad."]],
    videos: ["función exponencial décimo grado", "crecimiento exponencial ejemplos", "interés compuesto función exponencial"],
    n: 14
  },
  {
    tema: "Función logarítmica",
    resumen: "El logaritmo es el exponente al que hay que elevar una base para obtener un número. La función logarítmica es la inversa de la exponencial y sirve para trabajar con magnitudes muy grandes o pequeñas.",
    objetivos: ["Definirás logaritmos.", "Aplicarás sus propiedades.", "Resolverás ecuaciones exponenciales y logarítmicas."],
    partes: [
      ["🔢", "Definición", "log_a(x) = y significa aʸ = x, con a > 0, a ≠ 1 y x > 0. Los más usados son el logaritmo decimal (base 10, log) y el natural (base e, ln).", "- log₂ 8 = 3 porque 2³ = 8\n- log 1000 = 3\n- ln e = 1", "El logaritmo es un exponente."],
      ["📏", "Propiedades", "- log_a(xy) = log_a x + log_a y\n- log_a(x/y) = log_a x − log_a y\n- log_a(xⁿ) = n·log_a x\n- log_a 1 = 0 y log_a a = 1\n- Cambio de base: log_a x = log x / log a", "log 20 + log 5 = log 100 = 2.\nlog₂ 32 = 5·log₂ 2 = 5.", "El logaritmo convierte productos en sumas."],
      ["📈", "Función logarítmica", "f(x) = log_a x tiene dominio x > 0 y rango todos los reales. Pasa por (1, 0), tiene asíntota vertical en x = 0 y es la reflexión de aˣ respecto a la recta y = x.", "La gráfica de log₂ x crece lento: pasa por (2, 1) y (8, 3).", "Es la inversa de la exponencial."],
      ["🧮", "Ecuaciones", "- Exponencial: se aplican logaritmos a ambos lados.\n- Logarítmica: se usa la definición o se agrupan logaritmos.", "- 3ˣ = 20 → x = log 20 / log 3 ≈ 2,73\n- log₂(x + 1) = 4 → x + 1 = 16 → x = 15", "Verifica que el argumento sea positivo."],
      ["🌋", "Aplicaciones", "Se usan escalas logarítmicas: la escala de Richter (sismos), el pH = −log[H⁺], los decibeles (sonido). Un aumento de una unidad en la escala representa multiplicar la intensidad por un factor.", "Un sismo de magnitud 7 es diez veces más amplio que uno de magnitud 6.", "Comprimen rangos muy grandes."]
    ],
    mapa: ["Logaritmos", [["Definición", ["log_a x = y ↔ aʸ = x"]], ["Propiedades", ["Producto", "Cociente", "Potencia"]], ["Función", ["x > 0", "Pasa por (1,0)"]], ["Aplicaciones", ["pH", "Richter", "Decibeles"]]]],
    tarjetas: [["¿Cuánto es log₂ 8?", "3."], ["¿Cuánto es log 1000?", "3."], ["¿Cuánto es log_a 1?", "0."], ["¿Qué hace log(xy)?", "log x + log y."], ["¿Cuál es el dominio de log x?", "x > 0."], ["¿De qué función es inversa log_a x?", "De aˣ."], ["Resuelve log₃ x = 2.", "x = 9."]],
    videos: ["función logarítmica décimo grado", "propiedades de los logaritmos", "ecuaciones logarítmicas"],
    n: 14
  },
  {
    tema: "Ángulos en radianes y círculo unitario",
    resumen: "El radián es otra unidad para medir ángulos, basada en el radio de la circunferencia. El círculo unitario permite definir seno y coseno para cualquier ángulo.",
    objetivos: ["Convertirás entre grados y radianes.", "Ubicarás ángulos en el círculo unitario.", "Reconocerás valores de seno y coseno notables."],
    partes: [
      ["📐", "El radián", "Un radián es el ángulo que abarca un arco de longitud igual al radio. Una vuelta completa mide 2π rad, es decir, 360°. Por eso, 180° = π rad.", "Un ángulo de 1 rad mide unos 57,3°.", "360° = 2π rad."],
      ["🔄", "Conversión", "- Grados a radianes: multiplica por π/180.\n- Radianes a grados: multiplica por 180/π.", "- 90° = π/2 rad\n- 60° = π/3 rad\n- 3π/4 rad = 135°", "Usa 180° = π."],
      ["📏", "Longitud de arco", "Con el ángulo θ en radianes, la longitud de arco es s = r·θ y el área del sector circular es A = ½·r²·θ.", "Una circunferencia de radio 5 y θ = 2 rad: s = 10 y A = 25.", "s = r·θ (θ en radianes)."],
      ["⭕", "El círculo unitario", "Es la circunferencia de radio 1 centrada en el origen. Para un ángulo θ medido desde el eje x positivo, el punto del círculo es (cos θ, sin θ). Así, sen θ es la ordenada y cos θ la abscisa. Se cumple sen²θ + cos²θ = 1.", "Para θ = 90° el punto es (0, 1): cos 90° = 0 y sen 90° = 1.", "Punto = (cos θ, sen θ)."],
      ["⭐", "Ángulos notables y cuadrantes", "- 0°: (1, 0) · 30°: (√3/2, 1/2) · 45°: (√2/2, √2/2) · 60°: (1/2, √3/2) · 90°: (0, 1).\nEn el cuadrante I todas las razones son positivas; en el II, solo el seno; en el III, solo la tangente; en el IV, solo el coseno. El ángulo de referencia ayuda a hallar valores.", "sen 150° = sen 30° = 1/2 (cuadrante II, seno positivo). cos 150° = −√3/2.", "Cuadrante y ángulo de referencia."]
    ],
    mapa: ["Radianes y círculo unitario", [["Radián", ["π rad = 180°", "Conversión"]], ["Arco y sector", ["s = rθ", "A = ½r²θ"]], ["Círculo unitario", ["(cos θ, sen θ)", "Radio 1"]], ["Signos", ["I: todas +", "II: seno", "III: tangente", "IV: coseno"]]]],
    tarjetas: [["¿Cuántos radianes es 180°?", "π."], ["¿Cuántos grados es π/2?", "90°."], ["¿Cuánto vale 60° en radianes?", "π/3."], ["¿Cuál es el punto del círculo unitario para θ?", "(cos θ, sen θ)."], ["¿Cuánto es sen²θ + cos²θ?", "1."], ["¿Cómo se calcula la longitud de arco?", "s = r·θ."], ["¿Cuánto es cos 90°?", "0."]],
    videos: ["radianes y grados", "círculo unitario explicado", "ángulos notables seno coseno"],
    n: 14
  },
  {
    tema: "Funciones trigonométricas",
    resumen: "Las funciones seno, coseno y tangente describen fenómenos periódicos como las ondas, el sonido y las estaciones. Sus gráficas se repiten cada cierto intervalo llamado período.",
    objetivos: ["Graficarás seno, coseno y tangente.", "Identificarás amplitud y período.", "Modelarás fenómenos periódicos."],
    partes: [
      ["〰️", "Seno y coseno", "f(x) = sen x y g(x) = cos x tienen dominio todos los reales y rango [−1, 1]. Su período es 2π. La gráfica del seno pasa por el origen; la del coseno empieza en 1. El coseno es el seno desplazado π/2 a la izquierda.", "sen 0 = 0, sen(π/2) = 1, sen π = 0, sen(3π/2) = −1, sen 2π = 0.", "Ondas con período 2π."],
      ["↕️", "Amplitud y período", "En f(x) = A·sen(Bx):\n- Amplitud = |A| (altura máxima).\n- Período = 2π/|B|.\nEl cambio de amplitud estira verticalmente; el de B comprime o estira horizontalmente.", "f(x) = 3·sen(2x): amplitud 3 y período π.", "A: altura. B: rapidez."],
      ["↔️", "Desplazamientos", "En f(x) = A·sen(B(x − C)) + D:\n- C: desplazamiento horizontal (fase).\n- D: desplazamiento vertical (línea media).", "f(x) = sen(x − π/2) + 1 es un seno movido π/2 a la derecha y 1 unidad hacia arriba.", "C mueve a los lados; D, arriba o abajo."],
      ["📈", "Tangente", "tan x = sen x / cos x. Su período es π, su rango son todos los reales y tiene asíntotas verticales donde cos x = 0 (x = π/2 + kπ).", "tan 0 = 0, tan(π/4) = 1, y tan crece sin límite al acercarse a π/2.", "Período π y asíntotas."],
      ["🌊", "Modelos periódicos", "Los fenómenos que se repiten se modelan con senos y cosenos: mareas, ondas sonoras, corriente alterna, estaciones y ciclos biológicos.", "Una marea que varía entre 1 m y 5 m cada 12 h: h(t) = 3 + 2·sen(πt/6).", "Amplitud, período y línea media."]
    ],
    mapa: ["Funciones trigonométricas", [["Seno y coseno", ["Rango [−1,1]", "Período 2π"]], ["Parámetros", ["Amplitud |A|", "Período 2π/B"]], ["Tangente", ["Período π", "Asíntotas"]], ["Modelos", ["Mareas", "Ondas"]]]],
    tarjetas: [["¿Cuál es el período de sen x?", "2π."], ["¿Cuál es el rango de cos x?", "[−1, 1]."], ["¿Cuál es el período de tan x?", "π."], ["¿Qué amplitud tiene 4 sen x?", "4."], ["¿Qué período tiene sen(2x)?", "π."], ["¿Dónde tiene asíntotas tan x?", "En π/2 + kπ."], ["¿Qué hace D en A sen(Bx) + D?", "Desplaza la gráfica verticalmente."]],
    videos: ["funciones trigonométricas gráficas", "amplitud y período seno", "modelos periódicos trigonometría"],
    n: 14
  },
  {
    tema: "Identidades trigonométricas",
    resumen: "Las identidades trigonométricas son igualdades que se cumplen para todos los ángulos. Sirven para simplificar expresiones, resolver ecuaciones y demostrar otras igualdades.",
    objetivos: ["Reconocerás las identidades fundamentales.", "Simplificarás expresiones.", "Demostrarás identidades."],
    partes: [
      ["📚", "Identidades fundamentales", "- Recíprocas: csc x = 1/sen x; sec x = 1/cos x; cot x = 1/tan x.\n- Cociente: tan x = sen x/cos x; cot x = cos x/sen x.\n- Pitagórica: sen²x + cos²x = 1.", "Si sen x = 3/5 en el cuadrante I, cos²x = 1 − 9/25 = 16/25, así que cos x = 4/5.", "sen² + cos² = 1."],
      ["📐", "Otras identidades pitagóricas", "Al dividir sen²x + cos²x = 1 entre cos²x o sen²x:\n- 1 + tan²x = sec²x\n- 1 + cot²x = csc²x", "Si tan x = 2, sec²x = 1 + 4 = 5.", "Derivan de la fundamental."],
      ["➕", "Suma y diferencia de ángulos", "- sen(a ± b) = sen a cos b ± cos a sen b\n- cos(a ± b) = cos a cos b ∓ sen a sen b", "sen 75° = sen(45° + 30°) = (√2/2)(√3/2) + (√2/2)(1/2) = (√6 + √2)/4.", "Obtiene valores no notables."],
      ["2️⃣", "Ángulo doble", "- sen 2x = 2 sen x cos x\n- cos 2x = cos²x − sen²x = 1 − 2 sen²x = 2 cos²x − 1", "Si sen x = 3/5 y cos x = 4/5: sen 2x = 2·(3/5)(4/5) = 24/25.", "El ángulo doble sale de la suma."],
      ["🧩", "Cómo demostrar una identidad", "Se trabaja un solo lado hasta que sea igual al otro: 1) Escribe todo en senos y cosenos. 2) Usa factor común, común denominador o conjugados. 3) Aplica identidades conocidas. No se mueven términos de un lado al otro.", "Demostrar (1 − cos²x)/sen x = sen x: el numerador es sen²x, entonces sen²x / sen x = sen x. ✔", "Parte del lado más complejo."]
    ],
    mapa: ["Identidades", [["Fundamentales", ["Recíprocas", "Cociente", "sen² + cos² = 1"]], ["Pitagóricas", ["1 + tan² = sec²", "1 + cot² = csc²"]], ["Ángulos", ["Suma y diferencia", "Ángulo doble"]], ["Demostrar", ["Un solo lado", "Senos y cosenos"]]]],
    tarjetas: [["¿Cuánto es sen²x + cos²x?", "1."], ["¿A qué es igual tan x?", "sen x / cos x."], ["¿A qué es igual sec x?", "1 / cos x."], ["Fórmula de sen 2x.", "2 sen x cos x."], ["¿A qué es igual 1 + tan²x?", "sec²x."], ["Fórmula de sen(a + b).", "sen a cos b + cos a sen b."], ["¿Qué se hace al demostrar una identidad?", "Se transforma un lado hasta igualar el otro."]],
    videos: ["identidades trigonométricas décimo grado", "demostrar identidades trigonométricas", "suma y diferencia de ángulos"],
    n: 14
  },
  {
    tema: "Ley del seno y ley del coseno",
    resumen: "Las leyes del seno y del coseno permiten resolver cualquier triángulo, no solo los rectángulos, calculando lados y ángulos desconocidos.",
    objetivos: ["Aplicarás la ley del seno.", "Aplicarás la ley del coseno.", "Resolverás problemas de triángulos oblicuángulos."],
    partes: [
      ["🔺", "Triángulos oblicuángulos", "Son los triángulos sin ángulo recto. Para resolverlos se usan las leyes del seno y del coseno, según los datos conocidos. En un triángulo, a es el lado opuesto al ángulo A, b al B y c al C. Los ángulos suman 180°.", "Si A = 50° y B = 60°, entonces C = 70°.", "Los ángulos suman 180°."],
      ["📏", "Ley del seno", "a/sen A = b/sen B = c/sen C. Se usa cuando se conocen: dos ángulos y un lado (ALA o AAL), o dos lados y un ángulo opuesto a uno de ellos (LLA).", "Con A = 40°, B = 60° y a = 10:\n- b = 10·sen 60° / sen 40° ≈ 13,5.", "Lados proporcionales a los senos."],
      ["⚠️", "El caso ambiguo", "Con LLA puede haber 0, 1 o 2 triángulos. Al hallar un ángulo con sen⁻¹, el ángulo suplementario (180° − ángulo) también puede ser solución; se verifica que los tres ángulos sumen menos de 180°.", "Si sen B = 0,8 → B ≈ 53,1° o B ≈ 126,9°.", "Revisa las dos soluciones."],
      ["📐", "Ley del coseno", "- c² = a² + b² − 2ab·cos C\n- a² = b² + c² − 2bc·cos A\nSe usa cuando se conocen dos lados y el ángulo entre ellos (LAL) o los tres lados (LLL). Si C = 90°, se reduce al teorema de Pitágoras.", "a = 5, b = 7 y C = 60°: c² = 25 + 49 − 2·5·7·0,5 = 39 → c ≈ 6,24.", "Pitágoras generalizado."],
      ["🧭", "Aplicaciones y área", "Se usan en topografía, navegación y construcción. El área de un triángulo es A = ½·a·b·sen C.", "Dos lados de 8 m y 6 m forman 30°: A = ½·8·6·0,5 = 12 m².", "Elige la ley según los datos."]
    ],
    mapa: ["Leyes del seno y coseno", [["Seno", ["a/sen A = b/sen B", "ALA, LLA"]], ["Coseno", ["c² = a² + b² − 2ab cos C", "LAL, LLL"]], ["Caso ambiguo", ["0, 1 o 2 soluciones"]], ["Área", ["½ab sen C"]]]],
    tarjetas: [["Enuncia la ley del seno.", "a/sen A = b/sen B = c/sen C."], ["Enuncia la ley del coseno.", "c² = a² + b² − 2ab cos C."], ["¿Qué ley usas con LAL?", "La del coseno."], ["¿Qué ley usas con dos ángulos y un lado?", "La del seno."], ["¿A qué se reduce la ley del coseno si C = 90°?", "Al teorema de Pitágoras."], ["¿Cuánto suman los ángulos de un triángulo?", "180°."], ["Fórmula del área con dos lados y el ángulo entre ellos.", "½·a·b·sen C."]],
    videos: ["ley del seno y ley del coseno", "resolver triángulos oblicuángulos", "caso ambiguo ley del seno"],
    n: 14
  },
  {
    tema: "Sucesiones y series aritméticas y geométricas",
    resumen: "Una sucesión es una lista ordenada de números que sigue un patrón. Las aritméticas suman una diferencia constante; las geométricas multiplican por una razón constante. Una serie es la suma de sus términos.",
    objetivos: ["Hallarás el término general.", "Calcularás sumas de términos.", "Resolverás problemas de crecimiento."],
    partes: [
      ["🔢", "Sucesiones", "Una sucesión es una función cuyo dominio son los enteros positivos: a₁, a₂, a₃, ... Puede definirse por un término general aₙ o por recurrencia (cada término en función del anterior).", "2, 5, 8, 11, ... tiene término general aₙ = 3n − 1.", "Busca el patrón."],
      ["➕", "Sucesión aritmética", "Cada término se obtiene sumando una diferencia constante d: aₙ = a₁ + (n − 1)d. La suma de los n primeros términos es Sₙ = n(a₁ + aₙ)/2.", "Para 3, 7, 11, ...: d = 4. a₁₀ = 3 + 9·4 = 39. S₁₀ = 10(3 + 39)/2 = 210.", "Suma constante: d."],
      ["✖️", "Sucesión geométrica", "Cada término se obtiene multiplicando por una razón constante r: aₙ = a₁·rⁿ⁻¹. La suma de los n primeros términos es Sₙ = a₁(rⁿ − 1)/(r − 1) (r ≠ 1).", "Para 2, 6, 18, ...: r = 3. a₅ = 2·3⁴ = 162. S₅ = 2(3⁵ − 1)/2 = 242.", "Multiplicación constante: r."],
      ["♾️", "Serie geométrica infinita", "Si |r| < 1, la suma de infinitos términos converge: S = a₁/(1 − r). Si |r| ≥ 1, no converge.", "1 + 1/2 + 1/4 + ... = 1/(1 − 1/2) = 2.", "Solo converge si |r| < 1."],
      ["🏦", "Aplicaciones", "Las aritméticas modelan ahorros con aportes iguales, y las geométricas, interés compuesto, depreciación y crecimiento de poblaciones.", "Si ahorras $20.000 el primer mes y aumentas $5.000 cada mes, en 12 meses: a₁₂ = 20.000 + 11·5.000 = 75.000; S₁₂ = 12(20.000 + 75.000)/2 = 570.000.", "Identifica si suma o multiplica."]
    ],
    mapa: ["Sucesiones y series", [["Aritmética", ["aₙ = a₁ + (n − 1)d", "Sₙ = n(a₁ + aₙ)/2"]], ["Geométrica", ["aₙ = a₁rⁿ⁻¹", "Sₙ = a₁(rⁿ − 1)/(r − 1)"]], ["Infinita", ["S = a₁/(1 − r)", "|r| < 1"]], ["Usos", ["Ahorro", "Interés", "Poblaciones"]]]],
    tarjetas: [["¿Qué tiene constante una sucesión aritmética?", "La diferencia."], ["¿Qué tiene constante una geométrica?", "La razón."], ["Término 10 de 2, 4, 6, ...", "20."], ["Razón de 3, 6, 12, ...", "2."], ["Suma de 1 + 2 + ... + 100.", "5.050."], ["¿Cuándo converge una serie geométrica infinita?", "Cuando |r| < 1."], ["Suma infinita de 1 + 1/3 + 1/9 + ...", "3/2."]],
    videos: ["sucesiones aritméticas y geométricas", "suma de series geométricas", "término general de una sucesión"],
    n: 16
  },
  {
    tema: "La recta en el plano cartesiano",
    resumen: "La recta se estudia con su pendiente y su ecuación. En 10° se profundiza en sus formas, posiciones relativas, distancia de un punto a una recta y sistemas de rectas.",
    objetivos: ["Escribirás la ecuación de la recta de distintas formas.", "Determinarás paralelismo y perpendicularidad.", "Calcularás la distancia de un punto a una recta."],
    partes: [
      ["⛰️", "Pendiente y ángulo", "La pendiente m = (y₂ − y₁)/(x₂ − x₁) = tan θ, donde θ es el ángulo de inclinación respecto al eje x. m > 0 si θ es agudo; m < 0 si es obtuso.", "Una recta con m = 1 tiene θ = 45°; con m = √3, θ = 60°.", "m = tan θ."],
      ["📝", "Formas de la ecuación", "- Punto-pendiente: y − y₁ = m(x − x₁).\n- Pendiente-intercepto: y = mx + b.\n- Dos puntos: se calcula m y se usa la anterior.\n- General: Ax + By + C = 0 (m = −A/B).\n- Segmentaria: x/a + y/b = 1.", "La recta por (0, 3) y (2, 7): m = 2, y = 2x + 3, o 2x − y + 3 = 0.", "Convierte entre formas."],
      ["🔀", "Posiciones relativas", "- Paralelas: m₁ = m₂.\n- Perpendiculares: m₁·m₂ = −1.\n- Secantes: m₁ ≠ m₂; su punto de corte se halla resolviendo el sistema.", "La perpendicular a y = 2x + 1 por (0, 0) es y = −x/2.", "Compara pendientes."],
      ["📏", "Distancia de un punto a una recta", "La distancia de P(x₀, y₀) a la recta Ax + By + C = 0 es d = |Ax₀ + By₀ + C| / √(A² + B²).", "Distancia de (1, 2) a 3x + 4y − 5 = 0: d = |3 + 8 − 5|/5 = 6/5.", "Sustituye el punto en la ecuación."],
      ["🧩", "Aplicaciones", "Se usan para modelar relaciones lineales, hallar puntos de equilibrio, mediatrices y alturas de triángulos.", "Si el costo es C = 500x + 2.000 y el ingreso I = 800x, el equilibrio es en 500x + 2.000 = 800x → x ≈ 6,7 unidades.", "El punto de corte es la solución común."]
    ],
    mapa: ["La recta", [["Pendiente", ["m = tan θ", "m = Δy/Δx"]], ["Ecuaciones", ["Punto-pendiente", "y = mx + b", "General"]], ["Posiciones", ["Paralelas", "Perpendiculares", "Secantes"]], ["Distancia", ["|Ax₀ + By₀ + C|/√(A²+B²)"]]]],
    tarjetas: [["¿Qué es la pendiente?", "La razón entre el cambio en y y el cambio en x."], ["¿A qué es igual m con el ángulo?", "m = tan θ."], ["¿Qué cumplen las perpendiculares?", "m₁·m₂ = −1."], ["Pendiente de 2x + 3y − 6 = 0.", "−2/3."], ["¿Qué cumplen las paralelas?", "Tienen la misma pendiente."], ["Fórmula de la distancia punto-recta.", "|Ax₀ + By₀ + C|/√(A² + B²)."], ["¿Cómo se halla el corte de dos rectas?", "Resolviendo el sistema de sus ecuaciones."]],
    videos: ["ecuación de la recta décimo grado", "distancia de un punto a una recta", "rectas paralelas y perpendiculares"],
    n: 14
  },
  {
    tema: "Cónicas: circunferencia y parábola",
    resumen: "Las cónicas son curvas que resultan de cortar un cono con un plano. La circunferencia y la parábola se describen con ecuaciones sencillas a partir de sus elementos.",
    objetivos: ["Hallarás la ecuación de una circunferencia.", "Describirás la parábola con foco y directriz.", "Pasarás de la forma general a la canónica."],
    partes: [
      ["🔵", "Circunferencia", "Es el conjunto de puntos a una distancia fija r (radio) de un centro C(h, k). Su ecuación canónica es (x − h)² + (y − k)² = r². Si el centro es el origen: x² + y² = r².", "Centro (2, −1) y radio 3: (x − 2)² + (y + 1)² = 9.", "Todos los puntos equidistan del centro."],
      ["🧮", "Forma general", "x² + y² + Dx + Ey + F = 0. Para hallar centro y radio se completa el cuadrado.", "x² + y² − 4x + 6y − 12 = 0 → (x − 2)² + (y + 3)² = 12 + 4 + 9 = 25. Centro (2, −3), radio 5.", "Completa cuadrados."],
      ["🎯", "Parábola", "Es el conjunto de puntos que equidistan de un punto fijo (foco) y una recta fija (directriz). El vértice está a medio camino. Con vértice en el origen y eje vertical: x² = 4py, con foco (0, p) y directriz y = −p.", "x² = 8y: p = 2, foco (0, 2), directriz y = −2, abre hacia arriba.", "Foco y directriz equidistan."],
      ["↔️", "Parábola horizontal y desplazada", "- Eje horizontal: y² = 4px (foco (p, 0), directriz x = −p).\n- Con vértice (h, k): (x − h)² = 4p(y − k) o (y − k)² = 4p(x − h).", "(y − 1)² = 12(x + 2): vértice (−2, 1), p = 3, abre a la derecha.", "El signo de p indica la apertura."],
      ["🛰️", "Aplicaciones", "La parábola concentra señales en el foco: antenas parabólicas, faros, hornos solares y puentes colgantes. La circunferencia aparece en ruedas, engranajes y órbitas aproximadas.", "Una antena parabólica refleja las ondas hacia el receptor ubicado en el foco.", "Propiedad reflectora de la parábola."]
    ],
    mapa: ["Cónicas", [["Circunferencia", ["(x − h)² + (y − k)² = r²", "Centro y radio"]], ["Forma general", ["Completar cuadrados"]], ["Parábola", ["Foco", "Directriz", "x² = 4py"]], ["Usos", ["Antenas", "Faros"]]]],
    tarjetas: [["Ecuación de la circunferencia con centro en el origen.", "x² + y² = r²."], ["Centro y radio de (x − 1)² + (y + 2)² = 16.", "Centro (1, −2), radio 4."], ["¿Qué es el foco de una parábola?", "Un punto fijo equidistante de la directriz."], ["En x² = 4py, ¿dónde está el foco?", "En (0, p)."], ["¿Qué se hace para pasar a la forma canónica?", "Completar cuadrados."], ["¿Qué abre x² = −8y?", "Hacia abajo."], ["¿Dónde se pone el receptor de una antena parabólica?", "En el foco."]],
    videos: ["ecuación de la circunferencia", "parábola foco y directriz", "completar cuadrados cónicas"],
    n: 14
  },
  {
    tema: "Desviación estándar y distribución de datos",
    resumen: "La desviación estándar mide cuánto se alejan los datos de su promedio. Junto con la varianza y la distribución normal, ayuda a entender la dispersión y a comparar conjuntos de datos.",
    objetivos: ["Calcularás varianza y desviación estándar.", "Interpretarás la dispersión.", "Usarás la regla empírica de la distribución normal."],
    partes: [
      ["📊", "Medidas de dispersión", "Además de las medidas de tendencia central (media, mediana, moda), se necesitan medidas de dispersión: rango, rango intercuartílico, varianza y desviación estándar. Dos grupos pueden tener la misma media y distinta dispersión.", "Notas A: 3, 3, 3, 3 y notas B: 1, 2, 4, 5 tienen media 3, pero B está más dispersa.", "La media sola no cuenta todo."],
      ["🧮", "Varianza y desviación estándar", "Para datos x₁, ..., xₙ con media x̄:\n- Varianza: σ² = Σ(xᵢ − x̄)² / n\n- Desviación estándar: σ = √σ²\n(Para una muestra, se divide entre n − 1.)", "Datos 2, 4, 6: media 4; desviaciones −2, 0, 2; cuadrados 4, 0, 4; varianza 8/3 ≈ 2,67; σ ≈ 1,63.", "σ es la raíz de la varianza."],
      ["🔍", "Interpretación", "Una σ pequeña indica datos agrupados cerca de la media; una σ grande, datos dispersos. Tiene las mismas unidades que los datos. El coeficiente de variación (σ/media) permite comparar conjuntos con distintas escalas.", "Si en una prueba σ = 0,3, casi todos los estudiantes obtuvieron notas muy parecidas.", "Menor σ, mayor uniformidad."],
      ["🔔", "Distribución normal", "Muchos fenómenos (estatura, errores de medición) siguen una distribución en forma de campana, simétrica alrededor de la media. Regla empírica 68–95–99,7: aproximadamente el 68 % de los datos está a 1σ de la media, el 95 % a 2σ y el 99,7 % a 3σ.", "Si la estatura media es 165 cm y σ = 6 cm, cerca del 95 % mide entre 153 y 177 cm.", "68 %, 95 % y 99,7 %."],
      ["📏", "Puntaje z", "El puntaje z indica a cuántas desviaciones estándar está un dato de la media: z = (x − x̄)/σ. Permite comparar valores de distintas distribuciones.", "Con media 70 y σ = 10, una nota de 90 tiene z = 2.", "z mide la posición relativa."]
    ],
    mapa: ["Dispersión", [["Medidas", ["Rango", "Varianza", "Desviación estándar"]], ["Cálculo", ["Desviaciones", "Cuadrados", "Raíz"]], ["Normal", ["Campana", "68–95–99,7"]], ["Puntaje z", ["(x − media)/σ"]]]],
    tarjetas: [["¿Qué mide la desviación estándar?", "La dispersión de los datos respecto a la media."], ["¿Cómo se obtiene a partir de la varianza?", "Con la raíz cuadrada."], ["¿Qué indica una σ pequeña?", "Datos agrupados cerca de la media."], ["¿Qué porcentaje está a 1σ en una normal?", "Cerca del 68 %."], ["¿Qué porcentaje está a 2σ?", "Cerca del 95 %."], ["Fórmula del puntaje z.", "z = (x − media)/σ."], ["¿Cómo es la curva normal?", "Simétrica, en forma de campana."]],
    videos: ["desviación estándar y varianza", "distribución normal regla empírica", "puntaje z explicado"],
    n: 14
  },
  {
    tema: "Probabilidad condicional y eventos independientes",
    resumen: "La probabilidad condicional mide la probabilidad de un evento sabiendo que otro ya ocurrió. Dos eventos son independientes cuando saber uno no cambia la probabilidad del otro.",
    objetivos: ["Calcularás probabilidades condicionales.", "Verificarás independencia.", "Usarás tablas de contingencia y el teorema de Bayes."],
    partes: [
      ["🎲", "Probabilidad condicional", "P(A | B) es la probabilidad de A sabiendo que B ocurrió: P(A | B) = P(A ∩ B) / P(B), con P(B) > 0. Se reduce el espacio muestral a B.", "En un grupo hay 12 mujeres y 18 hombres; 5 mujeres y 6 hombres usan gafas. P(gafas | mujer) = 5/12.", "El nuevo espacio muestral es B."],
      ["✖️", "Regla del producto", "P(A ∩ B) = P(B)·P(A | B). Sirve para eventos sucesivos sin reemplazo.", "En una bolsa con 4 bolas rojas y 6 azules, P(roja y luego roja) = 4/10 · 3/9 = 2/15.", "Multiplica y actualiza."],
      ["🔗", "Eventos independientes", "A y B son independientes si P(A | B) = P(A), o lo que es lo mismo, P(A ∩ B) = P(A)·P(B). Si no se cumple, son dependientes.", "Al lanzar un dado y una moneda, «sale 6» y «sale cara» son independientes: 1/6 · 1/2 = 1/12.", "Independencia: P(A ∩ B) = P(A)P(B)."],
      ["📋", "Tablas de contingencia", "Resumen de los datos en filas y columnas. Permite calcular probabilidades conjuntas, marginales y condicionales.", "Si el 40 % de los estudiantes practica fútbol y de ellos el 25 % también juega baloncesto: P(fútbol ∩ baloncesto) = 0,4 · 0,25 = 0,10.", "Lee bien «dado que»."],
      ["🧠", "Probabilidad total y Bayes", "Si B₁, B₂ forman una partición: P(A) = P(B₁)P(A|B₁) + P(B₂)P(A|B₂). El teorema de Bayes invierte la condición: P(B₁|A) = P(B₁)P(A|B₁)/P(A).", "Una prueba detecta una enfermedad que afecta al 1 %. Si hay falsos positivos, P(enfermo | positivo) puede ser mucho menor de lo que se espera.", "Bayes actualiza creencias con evidencia."]
    ],
    mapa: ["Probabilidad condicional", [["Condicional", ["P(A|B) = P(A∩B)/P(B)"]], ["Producto", ["P(A∩B) = P(B)P(A|B)"]], ["Independencia", ["P(A∩B) = P(A)P(B)"]], ["Bayes", ["Probabilidad total", "Actualizar"]]]],
    tarjetas: [["¿Qué mide P(A | B)?", "La probabilidad de A dado que B ocurrió."], ["Fórmula de P(A | B).", "P(A ∩ B) / P(B)."], ["¿Cuándo son independientes dos eventos?", "Cuando P(A ∩ B) = P(A)·P(B)."], ["Prob. de sacar dos ases sin reemplazo de una baraja de 52.", "4/52 · 3/51 = 1/221."], ["¿Para qué sirve el teorema de Bayes?", "Para invertir una probabilidad condicional."], ["¿Qué es una tabla de contingencia?", "Una tabla que resume dos variables categóricas."], ["Si A y B son independientes, ¿cuánto es P(A | B)?", "P(A)."]],
    videos: ["probabilidad condicional décimo grado", "eventos independientes y dependientes", "teorema de Bayes explicado"],
    n: 16
  }
];
