// Teoría de Matemáticas, grado 11°. Formato compacto.
export const area = "Matematicas";

export const temas = [
  {
    tema: "Límites de funciones",
    resumen: "El límite describe el valor al que se acerca una función cuando la variable se aproxima a un punto. Es la base del cálculo diferencial e integral.",
    objetivos: ["Interpretarás el límite gráfica y numéricamente.", "Calcularás límites algebraicos.", "Resolverás indeterminaciones y límites al infinito."],
    partes: [
      ["🎯", "Idea intuitiva", "lím_{x→a} f(x) = L significa que f(x) se acerca a L cuando x se acerca a a, sin importar el valor en a. Se pueden estudiar los límites laterales: por la izquierda (x→a⁻) y por la derecha (x→a⁺). El límite existe si ambos coinciden.", "Para f(x) = 2x + 1 cuando x→3: los valores se acercan a 7, así que el límite es 7.", "Acercarse no es llegar."],
      ["🧮", "Propiedades", "Si los límites existen: el límite de una suma es la suma de los límites; de un producto, el producto; de un cociente, el cociente (si el denominador no tiende a 0); de una constante por una función, la constante por el límite; y lím xⁿ = aⁿ.", "lím_{x→2} (x² + 3x) = 4 + 6 = 10.", "Sustituye cuando se pueda."],
      ["❓", "Indeterminación 0/0", "Si al sustituir resulta 0/0, se factoriza, se simplifica o se racionaliza antes de evaluar.", "lím_{x→2} (x² − 4)/(x − 2) = lím (x + 2) = 4.\nlím_{x→0} (√(x+1) − 1)/x = lím 1/(√(x+1) + 1) = 1/2.", "Factoriza, simplifica y sustituye."],
      ["♾️", "Límites al infinito", "Para funciones racionales, se comparan los grados: si el grado del numerador es menor, el límite es 0; si es igual, es el cociente de los coeficientes principales; si es mayor, el límite es infinito.", "lím_{x→∞} (3x² + 1)/(x² − 5) = 3.\nlím_{x→∞} 1/x = 0.", "Domina el término de mayor grado."],
      ["📏", "Asíntotas y límite notable", "Si lím_{x→a} f(x) = ∞, hay una asíntota vertical en x = a. Si lím_{x→∞} f(x) = L, hay una asíntota horizontal y = L. Un límite notable: lím_{x→0} (sen x)/x = 1.", "f(x) = 1/(x − 1) tiene asíntota vertical x = 1 y horizontal y = 0.", "Los límites revelan el comportamiento de la gráfica."]
    ],
    mapa: ["Límites", [["Concepto", ["x → a", "Límites laterales"]], ["Cálculo", ["Propiedades", "Factorizar", "Racionalizar"]], ["Infinito", ["Grados", "Asíntotas"]], ["Notable", ["sen x / x → 1"]]]],
    tarjetas: [["¿Qué significa lím f(x) = L?", "Que f(x) se acerca a L cuando x se acerca a a."], ["¿Cuándo existe el límite?", "Cuando los límites laterales coinciden."], ["Calcula lím_{x→3} (x² − 9)/(x − 3).", "6."], ["¿Qué es una indeterminación?", "Una expresión como 0/0 que no define el valor del límite."], ["Calcula lím_{x→∞} 1/x.", "0."], ["¿Qué es una asíntota vertical?", "Una recta x = a hacia la que la función tiende al infinito."], ["lím_{x→0} sen x / x", "1."]],
    videos: ["límites de funciones once grado", "límites indeterminados 0/0", "límites al infinito"],
    n: 16
  },
  {
    tema: "Continuidad",
    resumen: "Una función es continua en un punto si no tiene saltos, huecos ni asíntotas allí. La continuidad se define con límites y es esencial en cálculo.",
    objetivos: ["Aplicarás la definición de continuidad.", "Clasificarás discontinuidades.", "Usarás el teorema del valor intermedio."],
    partes: [
      ["✏️", "Definición", "f es continua en a si: 1) f(a) existe; 2) lím_{x→a} f(x) existe; 3) lím_{x→a} f(x) = f(a). Informalmente, la gráfica puede dibujarse sin levantar el lápiz.", "f(x) = x² es continua en todos los reales.", "Tres condiciones."],
      ["🧩", "Funciones continuas", "Son continuas en su dominio: polinomios, funciones racionales (donde el denominador no se anula), raíces, exponenciales, logaritmos y trigonométricas. La suma, el producto y la composición de continuas son continuas.", "f(x) = 1/(x − 2) es continua en todos los reales excepto en x = 2.", "Muchas funciones son continuas."],
      ["⚠️", "Tipos de discontinuidad", "- Evitable: el límite existe, pero f(a) no existe o es distinto; se puede «reparar».\n- De salto: los límites laterales existen y son distintos.\n- Infinita (asintótica): el límite es ∞.", "f(x) = (x² − 1)/(x − 1) tiene discontinuidad evitable en x = 1 (límite 2).", "Evitable, salto o infinita."],
      ["🔧", "Funciones a trozos", "Para que una función definida por partes sea continua, los límites laterales en el punto de unión deben ser iguales y coincidir con el valor de la función.", "f(x) = x + 1 si x < 2; kx si x ≥ 2: para continuidad 3 = 2k → k = 3/2.", "Iguala los límites laterales."],
      ["📈", "Teorema del valor intermedio", "Si f es continua en [a, b] y N está entre f(a) y f(b), existe un c en [a, b] con f(c) = N. Garantiza la existencia de raíces: si f(a) y f(b) tienen signos opuestos, hay una raíz entre a y b.", "f(x) = x³ − x − 1 tiene f(1) = −1 y f(2) = 5, así que hay una raíz entre 1 y 2.", "Sirve para localizar raíces."]
    ],
    mapa: ["Continuidad", [["Definición", ["f(a) existe", "Límite existe", "Límite = f(a)"]], ["Discontinuidades", ["Evitable", "Salto", "Infinita"]], ["Funciones a trozos", ["Límites laterales"]], ["TVI", ["Raíces en intervalos"]]]],
    tarjetas: [["¿Qué condiciones definen la continuidad?", "f(a) existe, el límite existe y son iguales."], ["¿Qué es una discontinuidad evitable?", "Una en que el límite existe pero no coincide con f(a)."], ["¿Qué es una discontinuidad de salto?", "Una con límites laterales distintos."], ["¿Dónde es discontinua 1/x?", "En x = 0."], ["¿Qué dice el teorema del valor intermedio?", "Una función continua toma todos los valores entre f(a) y f(b)."], ["¿Para qué sirve el TVI?", "Para garantizar la existencia de raíces."], ["¿Son continuos los polinomios?", "Sí, en todos los reales."]],
    videos: ["continuidad de funciones once grado", "tipos de discontinuidad", "teorema del valor intermedio"],
    n: 14
  },
  {
    tema: "La derivada: concepto e interpretación",
    resumen: "La derivada mide la rapidez con que cambia una función. Geométricamente es la pendiente de la recta tangente; físicamente, la velocidad instantánea.",
    objetivos: ["Definirás la derivada como límite.", "Interpretarás la derivada geométrica y físicamente.", "Hallarás la recta tangente."],
    partes: [
      ["📈", "Razón de cambio", "La razón de cambio promedio es Δy/Δx, la pendiente de la recta secante. Si Δx se hace cada vez más pequeño, se obtiene la razón de cambio instantánea.", "Un carro recorre 100 km en 2 h: velocidad media 50 km/h. El velocímetro marca la velocidad instantánea.", "De la media a la instantánea."],
      ["✏️", "Definición", "f'(x) = lím_{h→0} [f(x + h) − f(x)] / h. Si el límite existe, f es derivable en x. Otras notaciones: dy/dx, df/dx.", "Para f(x) = x²: f'(x) = lím [(x+h)² − x²]/h = lím (2x + h) = 2x.", "Derivar es calcular ese límite."],
      ["📐", "Interpretación geométrica", "f'(a) es la pendiente de la recta tangente a la gráfica en (a, f(a)). La recta tangente: y − f(a) = f'(a)(x − a). Si f'(a) > 0, f crece; si f'(a) < 0, decrece; si f'(a) = 0, tangente horizontal.", "Para f(x) = x² en x = 3: f'(3) = 6 y la tangente es y − 9 = 6(x − 3).", "Derivada = pendiente de la tangente."],
      ["🚗", "Interpretación física", "Si s(t) es la posición, la velocidad es v(t) = s'(t) y la aceleración a(t) = v'(t) = s''(t). En economía, la derivada del costo es el costo marginal.", "Si s(t) = t² + 2t, entonces v(t) = 2t + 2; en t = 3, v = 8 m/s.", "Velocidad = derivada de la posición."],
      ["⚠️", "Derivabilidad y continuidad", "Si f es derivable en a, es continua en a, pero lo contrario no es cierto. Puntos donde no es derivable: esquinas (|x| en x = 0), cúspides, tangentes verticales y discontinuidades.", "f(x) = |x| es continua en 0, pero no derivable (esquina).", "Derivable ⇒ continua."]
    ],
    mapa: ["Derivada", [["Concepto", ["Razón de cambio instantánea", "Límite del cociente"]], ["Geometría", ["Pendiente de la tangente"]], ["Física", ["Velocidad", "Aceleración"]], ["Derivabilidad", ["Esquinas", "Continuidad"]]]],
    tarjetas: [["¿Qué mide la derivada?", "La razón de cambio instantánea."], ["¿Cuál es la definición de f'(x)?", "lím_{h→0} [f(x+h) − f(x)]/h."], ["¿Qué representa f'(a) geométricamente?", "La pendiente de la recta tangente en a."], ["Derivada de x².", "2x."], ["¿Qué es la velocidad respecto a la posición?", "Su derivada."], ["¿Es |x| derivable en 0?", "No."], ["Si f'(a) = 0, ¿cómo es la tangente?", "Horizontal."]],
    videos: ["concepto de derivada once grado", "derivada por definición", "recta tangente y derivada"],
    n: 16
  },
  {
    tema: "Reglas de derivación",
    resumen: "Las reglas de derivación permiten calcular derivadas sin usar el límite: potencia, suma, producto, cociente, cadena y derivadas de funciones elementales.",
    objetivos: ["Derivarás polinomios y funciones elementales.", "Aplicarás las reglas del producto y del cociente.", "Usarás la regla de la cadena."],
    partes: [
      ["🔢", "Reglas básicas", "- Constante: (c)' = 0.\n- Potencia: (xⁿ)' = n·xⁿ⁻¹.\n- Constante por función: (c·f)' = c·f'.\n- Suma: (f + g)' = f' + g'.", "Si f(x) = 3x⁴ − 5x² + 2x − 7, entonces f'(x) = 12x³ − 10x + 2.", "Baja el exponente y réstale 1."],
      ["✖️", "Producto y cociente", "- Producto: (f·g)' = f'·g + f·g'.\n- Cociente: (f/g)' = (f'·g − f·g') / g².", "(x²·sen x)' = 2x·sen x + x²·cos x.\n(x/(x + 1))' = [(x + 1) − x]/(x + 1)² = 1/(x + 1)².", "No es el producto de las derivadas."],
      ["🔗", "Regla de la cadena", "Si y = f(g(x)), entonces y' = f'(g(x))·g'(x): derivada de la función exterior evaluada en la interior, por la derivada de la interior.", "(( 3x + 1)⁵)' = 5(3x + 1)⁴·3 = 15(3x + 1)⁴.\n(sen(x²))' = cos(x²)·2x.", "De afuera hacia adentro."],
      ["📚", "Derivadas elementales", "- (eˣ)' = eˣ; (aˣ)' = aˣ·ln a\n- (ln x)' = 1/x\n- (sen x)' = cos x; (cos x)' = −sen x; (tan x)' = sec²x\n- (√x)' = 1/(2√x)", "(ln(2x))' = 1/x.\n(e^{3x})' = 3e^{3x}.", "Memoriza la tabla."],
      ["🧮", "Derivadas de orden superior", "Se puede derivar varias veces: f'', f''', etc. La segunda derivada describe la concavidad y la aceleración.", "f(x) = x³ − 6x: f' = 3x² − 6; f'' = 6x.", "f'' es la derivada de f'."]
    ],
    mapa: ["Reglas de derivación", [["Básicas", ["Constante", "Potencia", "Suma"]], ["Combinadas", ["Producto", "Cociente"]], ["Cadena", ["f'(g)·g'"]], ["Tabla", ["eˣ", "ln x", "sen x", "cos x"]]]],
    tarjetas: [["Derivada de xⁿ.", "n·xⁿ⁻¹."], ["Derivada de una constante.", "0."], ["Regla del producto.", "f'g + fg'."], ["Regla del cociente.", "(f'g − fg')/g²."], ["Derivada de sen x.", "cos x."], ["Derivada de ln x.", "1/x."], ["Derivada de (2x + 1)³.", "6(2x + 1)²."]],
    videos: ["reglas de derivación once grado", "regla de la cadena", "derivada del producto y cociente"],
    n: 16
  },
  {
    tema: "Aplicaciones de la derivada: máximos y mínimos",
    resumen: "La derivada permite estudiar el comportamiento de una función: dónde crece o decrece, dónde tiene máximos y mínimos y cómo es su concavidad. Se aplica a problemas de optimización.",
    objetivos: ["Hallarás puntos críticos.", "Usarás los criterios de la primera y segunda derivada.", "Resolverás problemas de optimización."],
    partes: [
      ["📈", "Crecimiento y decrecimiento", "Si f'(x) > 0 en un intervalo, f es creciente; si f'(x) < 0, es decreciente.", "f(x) = x² − 4x: f'(x) = 2x − 4; es negativa para x < 2 y positiva para x > 2.", "Signo de f' = comportamiento de f."],
      ["📍", "Puntos críticos", "Un punto crítico es un x en que f'(x) = 0 o f' no existe. Los máximos y mínimos locales ocurren en puntos críticos.", "f(x) = x³ − 3x: f'(x) = 3x² − 3 = 0 → x = ±1.", "Resuelve f'(x) = 0."],
      ["🔍", "Criterios", "- Primera derivada: si f' cambia de + a −, hay un máximo local; de − a +, un mínimo local.\n- Segunda derivada: si f'(c) = 0 y f''(c) > 0, mínimo; si f''(c) < 0, máximo.", "En x³ − 3x: f'' = 6x. f''(−1) = −6 < 0 (máximo en x = −1); f''(1) = 6 > 0 (mínimo en x = 1).", "f'' > 0: cóncava hacia arriba (mínimo)."],
      ["🔄", "Concavidad e inflexión", "Si f'' > 0, la gráfica es cóncava hacia arriba; si f'' < 0, hacia abajo. Un punto de inflexión es donde cambia la concavidad (f'' cambia de signo).", "x³ tiene punto de inflexión en x = 0.", "f'' describe la curvatura."],
      ["📦", "Optimización", "Pasos: 1) Dibuja y define variables. 2) Escribe la función a optimizar. 3) Reduce a una variable con las restricciones. 4) Deriva e iguala a 0. 5) Verifica máximo o mínimo. 6) Responde.", "Con 100 m de malla se desea cercar un rectángulo de área máxima: A = x(50 − x); A' = 50 − 2x = 0 → x = 25; es un cuadrado de 25 × 25 y A = 625 m².", "El cálculo resuelve problemas reales."]
    ],
    mapa: ["Aplicaciones de la derivada", [["Monotonía", ["f' > 0 crece", "f' < 0 decrece"]], ["Críticos", ["f' = 0"]], ["Criterios", ["Primera derivada", "Segunda derivada"]], ["Optimización", ["Función objetivo", "Restricción"]]]],
    tarjetas: [["¿Qué indica f' > 0?", "Que f es creciente."], ["¿Qué es un punto crítico?", "Un punto donde f' = 0 o no existe."], ["Si f'' > 0 en un punto crítico, ¿qué hay?", "Un mínimo local."], ["Si f'' < 0, ¿qué hay?", "Un máximo local."], ["¿Qué es un punto de inflexión?", "Donde cambia la concavidad."], ["Máximo de f(x) = −x² + 4x.", "En x = 2, f = 4."], ["¿Cuál es el primer paso en optimización?", "Definir las variables y la función objetivo."]],
    videos: ["máximos y mínimos derivada", "problemas de optimización", "criterio de la segunda derivada"],
    n: 16
  },
  {
    tema: "La integral: concepto y área bajo la curva",
    resumen: "La integral es la operación inversa de la derivada y sirve para calcular áreas, acumulaciones y totales. La integral definida mide el área bajo la curva.",
    objetivos: ["Calcularás antiderivadas.", "Aplicarás el teorema fundamental del cálculo.", "Hallarás áreas bajo curvas."],
    partes: [
      ["↩️", "Antiderivada e integral indefinida", "F es una antiderivada de f si F' = f. La integral indefinida ∫f(x)dx = F(x) + C, con C una constante arbitraria.", "∫2x dx = x² + C porque (x²)' = 2x.", "Integrar es el camino inverso."],
      ["📚", "Reglas básicas", "- ∫xⁿ dx = xⁿ⁺¹/(n + 1) + C (n ≠ −1)\n- ∫1/x dx = ln|x| + C\n- ∫eˣ dx = eˣ + C\n- ∫sen x dx = −cos x + C; ∫cos x dx = sen x + C\n- ∫(f ± g) = ∫f ± ∫g; ∫k f = k ∫f", "∫(3x² + 2x − 5)dx = x³ + x² − 5x + C.", "Sube el exponente y divide."],
      ["📐", "Integral definida y área", "La integral definida ∫ₐᵇ f(x)dx es el área neta entre la curva y el eje x entre a y b (el área bajo el eje cuenta como negativa). Se define como el límite de sumas de Riemann (rectángulos).", "∫₀³ x dx es el área del triángulo de base 3 y altura 3: 4,5.", "Área = suma de rectángulos."],
      ["⭐", "Teorema fundamental del cálculo", "Si F es una antiderivada de f en [a, b]: ∫ₐᵇ f(x)dx = F(b) − F(a). Conecta derivada e integral.", "∫₁³ 2x dx = [x²]₁³ = 9 − 1 = 8.", "Evalúa en los extremos y resta."],
      ["📏", "Aplicaciones", "- Área entre curvas: ∫ₐᵇ [f(x) − g(x)] dx, con f ≥ g.\n- Desplazamiento a partir de la velocidad: ∫v(t) dt.\n- Acumulación de cantidades (agua en un tanque, ingresos).", "Área entre y = x y y = x² de 0 a 1: ∫(x − x²)dx = 1/2 − 1/3 = 1/6.", "Integrar acumula."]
    ],
    mapa: ["Integral", [["Indefinida", ["Antiderivada", "+ C"]], ["Reglas", ["Potencia", "eˣ", "sen y cos"]], ["Definida", ["Área bajo la curva", "Riemann"]], ["TFC", ["F(b) − F(a)"]]]],
    tarjetas: [["¿Qué es una antiderivada?", "Una función cuya derivada es la dada."], ["¿Por qué se agrega +C?", "Porque hay infinitas antiderivadas que difieren en una constante."], ["∫x² dx", "x³/3 + C."], ["∫1/x dx", "ln|x| + C."], ["¿Qué dice el teorema fundamental?", "∫ₐᵇ f = F(b) − F(a)."], ["∫₀² 3x² dx", "8."], ["¿Qué representa la integral definida?", "El área neta bajo la curva."]],
    videos: ["integral definida e indefinida", "teorema fundamental del cálculo", "área bajo la curva integral"],
    n: 16
  },
  {
    tema: "Cónicas: elipse e hipérbola",
    resumen: "La elipse y la hipérbola completan el estudio de las cónicas. Cada una se define por la suma o la diferencia de distancias a dos puntos fijos llamados focos.",
    objetivos: ["Escribirás la ecuación de la elipse y la hipérbola.", "Identificarás focos, vértices y excentricidad.", "Reconocerás aplicaciones."],
    partes: [
      ["⭕", "Elipse: definición", "Conjunto de puntos cuya suma de distancias a dos focos F₁ y F₂ es constante (2a). Elementos: centro, vértices, eje mayor (2a), eje menor (2b), focos a distancia c del centro, con c² = a² − b². Excentricidad e = c/a (0 < e < 1).", "Los planetas orbitan en elipses con el Sol en un foco.", "Suma constante de distancias."],
      ["📝", "Ecuación de la elipse", "Centro en el origen y eje mayor horizontal: x²/a² + y²/b² = 1 (a > b). Con eje mayor vertical: x²/b² + y²/a² = 1. Con centro (h, k): (x − h)²/a² + (y − k)²/b² = 1.", "x²/25 + y²/9 = 1: a = 5, b = 3, c = 4; focos en (±4, 0).", "a² es el denominador mayor."],
      ["〰️", "Hipérbola: definición", "Conjunto de puntos cuya diferencia de distancias a dos focos es constante (2a). Tiene dos ramas, vértices, focos a distancia c con c² = a² + b², y asíntotas. Excentricidad e = c/a > 1.", "Los sistemas de navegación LORAN usaron hipérbolas.", "Diferencia constante."],
      ["📝", "Ecuación de la hipérbola", "Eje transversal horizontal: x²/a² − y²/b² = 1, asíntotas y = ±(b/a)x. Eje vertical: y²/a² − x²/b² = 1.", "x²/16 − y²/9 = 1: a = 4, b = 3, c = 5; focos (±5, 0); asíntotas y = ±(3/4)x.", "Resta de términos."],
      ["🛰️", "Aplicaciones", "Elipse: órbitas, cúpulas de susurros, espejos de litotricia. Hipérbola: telescopios, trayectorias de cometas, torres de enfriamiento. Todas las cónicas (circunferencia, elipse, parábola, hipérbola) provienen de cortar un cono.", "En una galería de susurros, un sonido en un foco se oye en el otro.", "Las cónicas están en la naturaleza."]
    ],
    mapa: ["Elipse e hipérbola", [["Elipse", ["Suma de distancias", "c² = a² − b²"]], ["Hipérbola", ["Diferencia de distancias", "c² = a² + b²"]], ["Ecuaciones", ["x²/a² + y²/b² = 1", "x²/a² − y²/b² = 1"]], ["Usos", ["Órbitas", "Telescopios"]]]],
    tarjetas: [["¿Qué define a la elipse?", "La suma constante de distancias a dos focos."], ["¿Qué define a la hipérbola?", "La diferencia constante de distancias a dos focos."], ["Relación c, a, b en la elipse.", "c² = a² − b²."], ["Relación c, a, b en la hipérbola.", "c² = a² + b²."], ["Excentricidad de la elipse.", "Entre 0 y 1."], ["Excentricidad de la hipérbola.", "Mayor que 1."], ["¿Qué son las asíntotas de la hipérbola?", "Rectas a las que se acercan las ramas."]],
    videos: ["elipse ecuación y elementos", "hipérbola ecuación y asíntotas", "cónicas once grado"],
    n: 14
  },
  {
    tema: "Números complejos",
    resumen: "Los números complejos amplían los reales con la unidad imaginaria i, donde i² = −1. Permiten resolver ecuaciones sin solución real y se representan en el plano.",
    objetivos: ["Operarás con números complejos.", "Los representarás en el plano.", "Usarás forma polar y potencias."],
    partes: [
      ["🔢", "Definición", "Un número complejo es z = a + bi, con a, b reales e i = √(−1). a es la parte real y b la parte imaginaria. Los reales son complejos con b = 0.", "x² + 1 = 0 tiene soluciones x = ±i.", "i² = −1."],
      ["➕", "Operaciones", "- Suma/resta: se operan partes real e imaginaria.\n- Producto: se distribuye y se usa i² = −1.\n- Conjugado de a + bi: a − bi.\n- División: se multiplica numerador y denominador por el conjugado.", "(2 + 3i)(1 − i) = 2 − 2i + 3i − 3i² = 5 + i.\n(1 + i)/(1 − i) = (1 + i)²/2 = i.", "El conjugado elimina la i del denominador."],
      ["📍", "Plano complejo y módulo", "z = a + bi se ubica en el punto (a, b). El módulo |z| = √(a² + b²) es la distancia al origen. El argumento θ = tan⁻¹(b/a) es el ángulo con el eje real.", "Para z = 3 + 4i: |z| = 5 y θ ≈ 53,1°.", "Complejo = punto o vector."],
      ["🔄", "Forma polar", "z = r(cos θ + i sen θ) = r cis θ, con r = |z|. Producto: se multiplican módulos y se suman argumentos. Cociente: se dividen módulos y se restan argumentos.", "z = 1 + i = √2 cis 45°.", "Multiplicar = girar y escalar."],
      ["⚡", "Potencias y aplicaciones", "Teorema de De Moivre: zⁿ = rⁿ(cos nθ + i sen nθ). Los complejos se usan en electricidad (corriente alterna), ondas, señales y gráficos.", "(1 + i)⁴ = (√2)⁴ cis 180° = −4.", "De Moivre simplifica las potencias."]
    ],
    mapa: ["Números complejos", [["Forma binómica", ["a + bi", "i² = −1"]], ["Operaciones", ["Suma", "Producto", "Conjugado"]], ["Plano", ["Módulo", "Argumento"]], ["Polar", ["r cis θ", "De Moivre"]]]],
    tarjetas: [["¿Cuánto vale i²?", "−1."], ["¿Cuál es el conjugado de 3 − 2i?", "3 + 2i."], ["Módulo de 3 + 4i.", "5."], ["(1 + i)(1 − i)", "2."], ["¿Cómo se multiplican complejos en forma polar?", "Se multiplican los módulos y se suman los argumentos."], ["¿Qué dice De Moivre?", "zⁿ = rⁿ(cos nθ + i sen nθ)."], ["¿Dónde se usan?", "En electricidad, ondas y señales."]],
    videos: ["números complejos once grado", "forma polar y De Moivre", "operaciones con complejos"],
    n: 14
  },
  {
    tema: "Vectores en el plano",
    resumen: "Los vectores en el plano se describen por sus componentes. Se pueden sumar, multiplicar por escalares, medir su magnitud y calcular el producto escalar, que permite hallar ángulos y proyecciones.",
    objetivos: ["Operarás con vectores en componentes.", "Calcularás magnitud y dirección.", "Usarás el producto escalar."],
    partes: [
      ["➡️", "Vectores y componentes", "Un vector v = (a, b) se representa por una flecha desde el origen. Dados P(x₁, y₁) y Q(x₂, y₂), el vector PQ = (x₂ − x₁, y₂ − y₁). Los vectores unitarios i = (1, 0) y j = (0, 1) permiten escribir v = ai + bj.", "El vector de A(1, 2) a B(4, 6) es (3, 4).", "Componentes: cambio en x y en y."],
      ["📏", "Magnitud y dirección", "|v| = √(a² + b²). Ángulo con el eje x: θ = tan⁻¹(b/a). Un vector unitario en la dirección de v es v/|v|.", "v = (3, 4): |v| = 5; unitario (3/5, 4/5).", "Magnitud con Pitágoras."],
      ["➕", "Operaciones", "Suma: (a, b) + (c, d) = (a + c, b + d). Multiplicación por un escalar k: k(a, b) = (ka, kb). Dos vectores son paralelos si uno es múltiplo del otro.", "2(1, 3) − (4, 1) = (−2, 5).", "Opera componente a componente."],
      ["✖️", "Producto escalar", "u·v = u₁v₁ + u₂v₂ = |u||v| cos θ. Es un número. Si u·v = 0, los vectores son perpendiculares (ortogonales). El ángulo: cos θ = (u·v)/(|u||v|).", "u = (1, 2), v = (2, −1): u·v = 2 − 2 = 0, son perpendiculares.", "Producto cero = 90°."],
      ["📐", "Proyección y aplicaciones", "La proyección de u sobre v es (u·v/|v|²)·v. El trabajo de una fuerza F con desplazamiento d es W = F·d. Los vectores se aplican en física, gráficos por computador y navegación.", "Una fuerza (3, 4) N que desplaza un objeto (2, 0) m realiza W = 6 J.", "El producto escalar mide la alineación."]
    ],
    mapa: ["Vectores en el plano", [["Componentes", ["(a, b)", "i y j"]], ["Magnitud", ["√(a² + b²)", "Ángulo"]], ["Operaciones", ["Suma", "Escalar"]], ["Producto escalar", ["u·v", "Ortogonalidad", "Trabajo"]]]],
    tarjetas: [["Magnitud del vector (6, 8).", "10."], ["Suma de (1, 2) y (3, 4).", "(4, 6)."], ["¿Qué es el producto escalar?", "u₁v₁ + u₂v₂."], ["¿Cuándo son perpendiculares dos vectores?", "Cuando su producto escalar es 0."], ["¿Qué fórmula da el ángulo entre vectores?", "cos θ = u·v/(|u||v|)."], ["¿Qué vector va de (1,1) a (4,5)?", "(3, 4)."], ["¿Qué calcula F·d?", "El trabajo."]],
    videos: ["vectores en el plano once grado", "producto escalar y ángulo entre vectores", "magnitud y dirección de un vector"],
    n: 14
  },
  {
    tema: "Matrices y determinantes",
    resumen: "Una matriz es un arreglo rectangular de números. Se suman, multiplican e invierten, y los determinantes permiten resolver sistemas de ecuaciones y saber si una matriz tiene inversa.",
    objetivos: ["Operarás con matrices.", "Calcularás determinantes 2×2 y 3×3.", "Resolverás sistemas con matrices."],
    partes: [
      ["🔲", "Concepto", "Una matriz A de orden m×n tiene m filas y n columnas. aᵢⱼ es el elemento de la fila i, columna j. Tipos: cuadrada, identidad (I), nula, diagonal, transpuesta (Aᵀ).", "A = [[1, 2], [3, 4]] es 2×2.", "Filas por columnas."],
      ["➕", "Suma y producto por escalar", "Se suman matrices del mismo orden elemento a elemento; k·A multiplica cada elemento por k.", "[[1, 2], [3, 4]] + [[0, 1], [1, 0]] = [[1, 3], [4, 4]].", "Mismo orden para sumar."],
      ["✖️", "Producto de matrices", "A (m×n) por B (n×p) da una matriz m×p. El elemento cᵢⱼ es el producto punto de la fila i de A por la columna j de B. En general, AB ≠ BA.", "[[1, 2], [3, 4]]·[[1, 0], [2, 1]] = [[5, 2], [11, 4]].", "Filas por columnas; el orden importa."],
      ["🎲", "Determinantes", "Para 2×2: det [[a, b], [c, d]] = ad − bc. Para 3×3: regla de Sarrus o desarrollo por cofactores. Si det A ≠ 0, A tiene inversa. Propiedades: det(AB) = det A · det B.", "det [[3, 1], [2, 4]] = 12 − 2 = 10.", "det ≠ 0 ⇒ invertible."],
      ["🔁", "Inversa y sistemas", "La inversa A⁻¹ cumple A·A⁻¹ = I. Para 2×2: A⁻¹ = (1/det)·[[d, −b], [−c, a]]. Un sistema AX = B se resuelve con X = A⁻¹B (o con la regla de Cramer).", "x + y = 3; x − y = 1 → X = [2, 1].", "Las matrices resumen sistemas."]
    ],
    mapa: ["Matrices", [["Tipos", ["Cuadrada", "Identidad", "Transpuesta"]], ["Operaciones", ["Suma", "Producto"]], ["Determinante", ["ad − bc", "Sarrus"]], ["Inversa", ["A·A⁻¹ = I", "Sistemas"]]]],
    tarjetas: [["¿Qué es el orden de una matriz?", "Su número de filas por columnas."], ["¿Se cumple AB = BA siempre?", "No."], ["det [[a, b], [c, d]]", "ad − bc."], ["¿Cuándo una matriz tiene inversa?", "Cuando su determinante no es cero."], ["¿Qué es la matriz identidad?", "La que tiene unos en la diagonal y ceros fuera."], ["Producto de A (2×3) por B (3×4).", "Una matriz 2×4."], ["¿Para qué sirve la regla de Cramer?", "Para resolver sistemas con determinantes."]],
    videos: ["matrices y determinantes once grado", "producto de matrices", "inversa de una matriz y sistemas"],
    n: 14
  },
  {
    tema: "Distribución normal y muestreo",
    resumen: "La distribución normal es una curva en forma de campana que describe muchos fenómenos. El muestreo permite inferir características de una población a partir de una muestra.",
    objetivos: ["Usarás la distribución normal estándar.", "Calcularás probabilidades con z.", "Comprenderás muestreo y error."],
    partes: [
      ["🔔", "La distribución normal", "Simétrica respecto a la media μ, con dispersión σ. Se denota N(μ, σ). El área bajo la curva es 1. Regla empírica: ≈ 68 % a 1σ, 95 % a 2σ y 99,7 % a 3σ.", "Estaturas con μ = 165 cm y σ = 6 cm: el 95 % está entre 153 y 177 cm.", "Campana simétrica."],
      ["📏", "Estandarización", "El puntaje z = (x − μ)/σ lleva cualquier normal a la normal estándar N(0, 1). Con tablas o calculadora se halla P(Z ≤ z).", "Con μ = 70, σ = 10, x = 85: z = 1,5; P(Z ≤ 1,5) ≈ 0,933.", "z mide desviaciones respecto a la media."],
      ["🧮", "Cálculo de probabilidades", "P(a ≤ X ≤ b) = P(z_a ≤ Z ≤ z_b) = Φ(z_b) − Φ(z_a). Simetría: P(Z ≤ −z) = 1 − P(Z ≤ z).", "P(−1 ≤ Z ≤ 1) = 0,841 − 0,159 = 0,683.", "Resta áreas acumuladas."],
      ["👥", "Población y muestra", "La población es el conjunto total de estudio; la muestra, un subconjunto. Para inferir, la muestra debe ser representativa. Muestreo aleatorio simple, estratificado, sistemático y por conglomerados. Los sesgos (por ejemplo, encuestas solo en línea) distorsionan.", "Para estimar el gusto musical del colegio, se encuesta a estudiantes de todos los grados al azar.", "Muestra representativa."],
      ["📐", "Distribución de la media muestral", "Por el teorema del límite central, la media de muestras grandes (n ≥ 30) se distribuye aproximadamente normal con media μ y error estándar σ/√n. A mayor tamaño de muestra, menor error. Los intervalos de confianza dan un rango plausible para μ: x̄ ± z·σ/√n (z ≈ 1,96 para 95 %).", "Con x̄ = 50, σ = 10 y n = 100: IC 95 % ≈ 50 ± 1,96 = (48,04; 51,96).", "Más datos, más precisión."]
    ],
    mapa: ["Normal y muestreo", [["Normal", ["Campana", "μ y σ", "68-95-99,7"]], ["Estandarizar", ["z = (x − μ)/σ"]], ["Muestreo", ["Aleatorio", "Estratificado", "Sesgos"]], ["Inferencia", ["Límite central", "Intervalo de confianza"]]]],
    tarjetas: [["¿Cómo es la curva normal?", "Simétrica, en forma de campana."], ["Fórmula del puntaje z.", "z = (x − μ)/σ."], ["¿Qué porcentaje está a 2σ?", "Cerca del 95 %."], ["¿Qué es una muestra representativa?", "La que refleja a la población."], ["¿Qué dice el teorema del límite central?", "La media muestral tiende a una normal."], ["¿Qué es el error estándar?", "σ/√n."], ["¿Qué es un intervalo de confianza?", "Un rango plausible para un parámetro."]],
    videos: ["distribución normal once grado", "puntaje z y tabla normal", "intervalos de confianza introducción"],
    n: 16
  },
  {
    tema: "Distribución binomial",
    resumen: "La distribución binomial modela el número de éxitos en una cantidad fija de ensayos independientes con dos resultados posibles. Se usa en encuestas, control de calidad y juegos de azar.",
    objetivos: ["Reconocerás un experimento binomial.", "Calcularás probabilidades binomiales.", "Hallarás media y desviación."],
    partes: [
      ["🎲", "Ensayos de Bernoulli", "Un ensayo de Bernoulli tiene solo dos resultados: éxito (probabilidad p) o fracaso (q = 1 − p). Ejemplos: cara o sello, aprobar o no, defectuoso o no.", "Al lanzar un dado, «sale 6» tiene p = 1/6.", "Dos resultados posibles."],
      ["✅", "Condiciones binomiales", "1) Número fijo n de ensayos. 2) Cada ensayo tiene dos resultados. 3) Los ensayos son independientes. 4) La probabilidad p es constante. X = número de éxitos ~ B(n, p).", "Lanzar una moneda 10 veces y contar caras: B(10; 0,5).", "n, p constante e independencia."],
      ["🧮", "Fórmula", "P(X = k) = C(n, k)·pᵏ·(1 − p)ⁿ⁻ᵏ, con C(n, k) = n!/(k!(n − k)!).", "Probabilidad de exactamente 2 caras en 4 lanzamientos: C(4, 2)(0,5)²(0,5)² = 6/16 = 0,375.", "Combinaciones por probabilidades."],
      ["📊", "Media y desviación", "Media (valor esperado): μ = n·p. Varianza: σ² = n·p·q. Desviación: σ = √(npq).", "Con n = 100 y p = 0,3: μ = 30; σ = √21 ≈ 4,58.", "Esperanza = np."],
      ["🏭", "Aplicaciones", "Control de calidad (piezas defectuosas), encuestas (cuántos votarán por un candidato), medicina (efectividad de tratamientos). Probabilidad acumulada: P(X ≤ k) = suma de P(X = i).", "Si el 5 % de los productos es defectuoso y se revisan 20, ¿P(ninguno defectuoso)? 0,95²⁰ ≈ 0,358.", "Para n grande se aproxima por una normal."]
    ],
    mapa: ["Distribución binomial", [["Bernoulli", ["Éxito p", "Fracaso q"]], ["Condiciones", ["n fijo", "Independencia", "p constante"]], ["Fórmula", ["C(n,k) pᵏ qⁿ⁻ᵏ"]], ["Parámetros", ["μ = np", "σ² = npq"]]]],
    tarjetas: [["¿Qué es un ensayo de Bernoulli?", "Un experimento con dos resultados: éxito o fracaso."], ["Fórmula de la binomial.", "P(X = k) = C(n, k) pᵏ (1−p)ⁿ⁻ᵏ."], ["Media de una binomial.", "n·p."], ["Varianza de una binomial.", "n·p·q."], ["P(2 caras en 3 lanzamientos).", "3/8."], ["¿Qué condición exige independencia?", "Que un ensayo no afecte a los demás."], ["Media con n = 50 y p = 0,2.", "10."]],
    videos: ["distribución binomial once grado", "ensayos de Bernoulli", "probabilidad binomial ejercicios"],
    n: 16
  }
];
