// Teoría de Física, grado 10°. Formato compacto.
export const area = "Fisica";

export const temas = [
  {
    tema: "Magnitudes físicas y medición",
    resumen: "La física describe la naturaleza con magnitudes que se pueden medir. El Sistema Internacional de Unidades, la notación científica y el análisis de errores permiten medir y comunicar con precisión.",
    objetivos: ["Distinguirás magnitudes fundamentales y derivadas.", "Convertirás unidades.", "Reconocerás la incertidumbre y las cifras significativas."],
    partes: [
      ["📏", "Magnitudes y unidades", "Una magnitud es una propiedad que se puede medir. El Sistema Internacional (SI) usa siete fundamentales; las principales: longitud (metro, m), masa (kilogramo, kg), tiempo (segundo, s), temperatura (kelvin, K) y corriente eléctrica (amperio, A). Las derivadas se obtienen combinando: velocidad (m/s), fuerza (newton, N = kg·m/s²), energía (julio, J).", "La densidad ρ = m/V se mide en kg/m³.", "Fundamentales y derivadas."],
      ["🔁", "Conversión de unidades", "Se usan factores de conversión que valen 1. Prefijos: kilo (10³), mega (10⁶), giga (10⁹), centi (10⁻²), mili (10⁻³), micro (10⁻⁶), nano (10⁻⁹).", "72 km/h = 72 · 1000 m / 3600 s = 20 m/s.", "Multiplica por fracciones iguales a 1."],
      ["🔢", "Notación científica", "Se escribe un número como a × 10ⁿ con 1 ≤ a < 10. Facilita manejar cantidades muy grandes o muy pequeñas.", "- Velocidad de la luz: 3 × 10⁸ m/s.\n- Radio de un átomo: 1 × 10⁻¹⁰ m.", "a × 10ⁿ."],
      ["🎯", "Precisión, exactitud y error", "- Exactitud: qué tan cerca está la medida del valor real.\n- Precisión: qué tan cercanas entre sí son varias medidas.\n- Error absoluto = |medida − valor real|; error relativo = error absoluto / valor real.", "Una balanza que siempre marca 2 g de más es precisa, pero no exacta.", "Exacto ≠ preciso."],
      ["🧮", "Cifras significativas e instrumentos", "Las cifras significativas indican la confiabilidad de una medida. Al sumar o restar, el resultado conserva los decimales del dato menos preciso; al multiplicar o dividir, las cifras significativas del dato con menos. Se usan instrumentos: regla, calibrador, balanza, cronómetro, dinamómetro.", "12,5 cm + 3,25 cm = 15,8 cm (se redondea a un decimal).", "Reporta con la precisión del instrumento."]
    ],
    mapa: ["Medición", [["Magnitudes", ["Fundamentales", "Derivadas", "SI"]], ["Conversión", ["Factores", "Prefijos"]], ["Notación científica", ["a × 10ⁿ"]], ["Error", ["Exactitud", "Precisión", "Cifras significativas"]]]],
    tarjetas: [["¿Cuál es la unidad de masa en el SI?", "El kilogramo."], ["¿Cuál es la unidad de fuerza?", "El newton (N)."], ["¿Cuántos m/s son 36 km/h?", "10 m/s."], ["¿Qué es la notación científica?", "a × 10ⁿ con 1 ≤ a < 10."], ["Diferencia exactitud y precisión.", "Exactitud: cercanía al valor real; precisión: cercanía entre medidas."], ["¿Cuánto es 1 mm en metros?", "10⁻³ m."], ["¿Qué mide un dinamómetro?", "La fuerza."]],
    videos: ["magnitudes físicas y unidades SI", "conversión de unidades física", "cifras significativas y error"],
    n: 14
  },
  {
    tema: "Vectores",
    resumen: "Los vectores representan magnitudes con valor, dirección y sentido, como la fuerza y la velocidad. Se pueden sumar, descomponer y representar gráfica y analíticamente.",
    objetivos: ["Distinguirás escalares y vectores.", "Sumarás vectores gráfica y analíticamente.", "Descompondrás un vector en componentes."],
    partes: [
      ["➡️", "Escalares y vectores", "Un escalar solo tiene magnitud (masa, tiempo, temperatura, rapidez). Un vector tiene magnitud, dirección y sentido (fuerza, velocidad, desplazamiento, aceleración). Se representan con flechas.", "«Voy a 60 km/h» es rapidez (escalar); «voy a 60 km/h al norte» es velocidad (vector).", "Vector: valor + dirección."],
      ["📐", "Componentes rectangulares", "Un vector A de magnitud A y ángulo θ con el eje x tiene componentes: Aₓ = A·cos θ y A_y = A·sen θ. La magnitud es A = √(Aₓ² + A_y²) y el ángulo θ = tan⁻¹(A_y/Aₓ).", "Una fuerza de 100 N a 30°: Fx ≈ 86,6 N y Fy = 50 N.", "Descompón en x e y."],
      ["➕", "Suma gráfica", "- Método del triángulo/cola con punta: se coloca el inicio del segundo vector en la punta del primero; la resultante va del inicio del primero a la punta del segundo.\n- Método del paralelogramo: los vectores parten del mismo punto y la resultante es la diagonal.", "Caminar 3 m al este y luego 4 m al norte da un desplazamiento resultante de 5 m.", "La resultante cierra el triángulo."],
      ["🧮", "Suma analítica", "Se suman las componentes por separado: Rₓ = Aₓ + Bₓ y R_y = A_y + B_y. Luego se halla la magnitud y el ángulo de la resultante.", "A = (3, 1) y B = (2, 4) dan R = (5, 5), |R| = √50 ≈ 7,07.", "Suma componente a componente."],
      ["🔄", "Resta, producto por escalar y usos", "Restar es sumar el opuesto: A − B = A + (−B). Multiplicar por un escalar cambia la magnitud (y el sentido si es negativo). Los vectores se usan en fuerzas, velocidades, campos y navegación.", "Un bote cruza un río: la velocidad del bote y la de la corriente se suman como vectores.", "Los vectores describen el movimiento real."]
    ],
    mapa: ["Vectores", [["Tipos", ["Escalar", "Vector"]], ["Componentes", ["A cos θ", "A sen θ"]], ["Suma", ["Gráfica", "Analítica"]], ["Usos", ["Fuerzas", "Velocidades"]]]],
    tarjetas: [["¿Qué caracteriza a un vector?", "Magnitud, dirección y sentido."], ["Da un ejemplo de escalar.", "La masa o la temperatura."], ["Componente x de un vector A con ángulo θ.", "A·cos θ."], ["Componente y.", "A·sen θ."], ["¿Cómo se suman vectores analíticamente?", "Sumando sus componentes."], ["Magnitud de un vector (3, 4).", "5."], ["¿Qué es la resultante?", "El vector suma de varios vectores."]],
    videos: ["vectores física décimo grado", "suma de vectores componentes", "descomposición de vectores"],
    n: 14
  },
  {
    tema: "Cinemática: movimiento rectilíneo",
    resumen: "La cinemática describe el movimiento sin analizar sus causas. En el movimiento rectilíneo uniforme (MRU) la velocidad es constante; en el uniformemente acelerado (MRUA) la aceleración es constante.",
    objetivos: ["Distinguirás posición, desplazamiento, velocidad y aceleración.", "Aplicarás las ecuaciones del MRU y MRUA.", "Interpretarás gráficas."],
    partes: [
      ["📍", "Conceptos básicos", "- Posición x: ubicación respecto a un origen.\n- Desplazamiento Δx = x_f − x_i (vector).\n- Distancia: longitud total recorrida (escalar).\n- Velocidad media v = Δx/Δt; rapidez media = distancia/tiempo.\n- Aceleración a = Δv/Δt.", "Ir de A a B y volver: la distancia es 2d, pero el desplazamiento es 0.", "Desplazamiento ≠ distancia."],
      ["➡️", "MRU", "Velocidad constante, aceleración cero: x = x₀ + v·t. La gráfica x–t es una recta; la v–t, una recta horizontal.", "Un bus a 20 m/s recorre 600 m en 30 s.", "x = x₀ + vt."],
      ["🚀", "MRUA", "Aceleración constante:\n- v = v₀ + a·t\n- x = x₀ + v₀·t + ½·a·t²\n- v² = v₀² + 2·a·Δx", "Un carro parte del reposo con a = 3 m/s²: tras 4 s, v = 12 m/s y x = 24 m.", "Elige la ecuación según los datos."],
      ["📈", "Gráficas", "- x–t: pendiente = velocidad.\n- v–t: pendiente = aceleración; área bajo la curva = desplazamiento.\n- a–t: área bajo la curva = cambio de velocidad.", "Una v–t que es una recta inclinada indica MRUA.", "Lee pendientes y áreas."],
      ["🧩", "Problemas de encuentro", "Dos móviles se encuentran cuando sus posiciones son iguales en el mismo instante. Se plantean las ecuaciones de posición de cada uno y se igualan.", "A sale de x = 0 a 10 m/s y B de x = 100 m a 5 m/s hacia A: 10t = 100 − 5t → t ≈ 6,7 s.", "Iguala posiciones."]
    ],
    mapa: ["Cinemática", [["Conceptos", ["Posición", "Velocidad", "Aceleración"]], ["MRU", ["v constante", "x = x₀ + vt"]], ["MRUA", ["a constante", "v = v₀ + at"]], ["Gráficas", ["Pendiente", "Área"]]]],
    tarjetas: [["¿Qué es el MRU?", "Movimiento con velocidad constante en línea recta."], ["¿Qué es el MRUA?", "Movimiento con aceleración constante."], ["Fórmula de v en MRUA.", "v = v₀ + a·t."], ["¿Qué representa el área bajo v–t?", "El desplazamiento."], ["¿Qué representa la pendiente de x–t?", "La velocidad."], ["Diferencia entre distancia y desplazamiento.", "La distancia es escalar; el desplazamiento es vectorial."], ["¿Cuál es la unidad de la aceleración?", "m/s²."]],
    videos: ["MRU y MRUA física décimo grado", "gráficas de movimiento rectilíneo", "problemas de encuentro cinemática"],
    n: 16
  },
  {
    tema: "Caída libre",
    resumen: "En caída libre, un cuerpo se mueve solo por la acción de la gravedad. Todos los cuerpos caen con la misma aceleración en el vacío: g ≈ 9,8 m/s².",
    objetivos: ["Aplicarás las ecuaciones de caída libre.", "Resolverás lanzamientos verticales.", "Interpretarás el efecto del aire."],
    partes: [
      ["⬇️", "Qué es la caída libre", "Es un MRUA con aceleración g = 9,8 m/s² dirigida hacia abajo (en cálculos rápidos, 10 m/s²). Galileo mostró que cuerpos de distinta masa caen igual si se ignora el aire.", "En 1971, en la Luna, el astronauta David Scott soltó una pluma y un martillo y cayeron juntos.", "Todos caen con g."],
      ["🧮", "Ecuaciones", "Eligiendo hacia arriba como positivo (a = −g):\n- v = v₀ − g·t\n- y = y₀ + v₀·t − ½·g·t²\n- v² = v₀² − 2g·Δy\nSi se suelta (v₀ = 0): v = g·t y h = ½·g·t².", "Se suelta una piedra desde 80 m (g = 10): t = √(2·80/10) = 4 s; v = 40 m/s.", "Fija un sentido positivo."],
      ["⬆️", "Lanzamiento vertical", "Un objeto lanzado hacia arriba sube hasta que v = 0 y luego baja. Tiempo de subida = v₀/g; altura máxima = v₀²/(2g). El tiempo de subida es igual al de bajada.", "Con v₀ = 20 m/s: t_subida = 2 s, h_max = 20 m, vuelve al punto de partida a los 4 s con v = −20 m/s.", "En el punto más alto v = 0, pero a = −g."],
      ["💨", "Resistencia del aire y velocidad terminal", "En el aire, la fricción aumenta con la velocidad. Al equilibrarse con el peso, el cuerpo deja de acelerar y cae con velocidad constante: la velocidad terminal. Un paracaídas la reduce al aumentar la resistencia.", "Una gota de lluvia cae a unos 9 m/s, no a cientos de m/s.", "Aire = fuerza contraria al movimiento."],
      ["🧗", "Aplicaciones", "Se usa para calcular la profundidad de un pozo (soltando una piedra), el tiempo de caída de objetos o la altura alcanzada en saltos. La g varía ligeramente con la altitud y la latitud.", "Si una piedra tarda 2 s en llegar al fondo de un pozo, su profundidad es ½·10·4 = 20 m.", "g depende del lugar."]
    ],
    mapa: ["Caída libre", [["Aceleración", ["g = 9,8 m/s²"]], ["Ecuaciones", ["v = gt", "h = ½gt²"]], ["Lanzamiento vertical", ["Sube y baja", "v = 0 en la cima"]], ["Aire", ["Resistencia", "Velocidad terminal"]]]],
    tarjetas: [["¿Cuál es el valor de g?", "≈ 9,8 m/s²."], ["Fórmula de altura de caída desde el reposo.", "h = ½·g·t²."], ["¿Cuál es la velocidad en el punto más alto de un lanzamiento vertical?", "Cero."], ["¿Y la aceleración en ese punto?", "−g (9,8 m/s² hacia abajo)."], ["¿Qué es la velocidad terminal?", "La velocidad constante que alcanza un cuerpo en el aire."], ["¿Caen distinto una pluma y una piedra en el vacío?", "No, caen igual."], ["Tiempo de subida si v₀ = 30 m/s y g = 10.", "3 s."]],
    videos: ["caída libre física décimo grado", "lanzamiento vertical hacia arriba", "velocidad terminal explicada"],
    n: 14
  },
  {
    tema: "Movimiento de proyectiles",
    resumen: "Un proyectil es un cuerpo lanzado que se mueve bajo la acción de la gravedad. Su movimiento se analiza como la combinación de un MRU horizontal y un MRUA vertical, independientes entre sí.",
    objetivos: ["Descompondrás la velocidad inicial.", "Calcularás alcance, altura máxima y tiempo de vuelo.", "Analizarás lanzamientos horizontales."],
    partes: [
      ["🏹", "Idea clave", "En el movimiento parabólico, horizontal y vertical son independientes: horizontalmente, v constante (MRU); verticalmente, aceleración −g (MRUA). Se desprecia el aire. La trayectoria es una parábola.", "Una pelota que rueda al borde de una mesa cae al mismo tiempo que otra soltada desde el reposo a esa altura.", "Dos movimientos independientes."],
      ["🔀", "Componentes de la velocidad", "Con velocidad inicial v₀ y ángulo θ: v₀ₓ = v₀·cos θ y v₀ᵧ = v₀·sen θ.\n- Horizontal: x = v₀ₓ·t\n- Vertical: y = v₀ᵧ·t − ½·g·t², vᵧ = v₀ᵧ − g·t", "Con v₀ = 20 m/s y θ = 30°: v₀ₓ ≈ 17,3 m/s y v₀ᵧ = 10 m/s.", "Descompón primero."],
      ["📐", "Fórmulas de lanzamiento oblicuo", "- Tiempo de subida: t = v₀ᵧ/g; tiempo de vuelo: T = 2v₀ᵧ/g.\n- Altura máxima: H = v₀ᵧ²/(2g).\n- Alcance: R = v₀²·sen(2θ)/g, máximo con θ = 45°.", "Con v₀ = 20 m/s, θ = 30° y g = 10: T = 2 s, H = 5 m, R ≈ 34,6 m.", "45° da el mayor alcance."],
      ["⬇️", "Lanzamiento horizontal", "Si el objeto se lanza horizontalmente desde una altura h: v₀ᵧ = 0, t = √(2h/g) y el alcance horizontal es x = v₀·t.", "Una pelota sale de una mesa de 1,25 m a 4 m/s: t = 0,5 s y x = 2 m.", "La altura define el tiempo."],
      ["⚽", "Aplicaciones", "Se usa en deportes (fútbol, baloncesto, lanzamiento de jabalina), ingeniería, balística y fuentes de agua. El aire real reduce el alcance.", "En un tiro libre de fútbol, el balón sigue una trayectoria parecida a una parábola.", "Física en el deporte."]
    ],
    mapa: ["Proyectiles", [["Independencia", ["Horizontal: MRU", "Vertical: MRUA"]], ["Componentes", ["v₀ cos θ", "v₀ sen θ"]], ["Fórmulas", ["Tiempo de vuelo", "Altura máxima", "Alcance"]], ["Casos", ["Oblicuo", "Horizontal"]]]],
    tarjetas: [["¿Qué trayectoria sigue un proyectil?", "Una parábola."], ["¿Qué movimiento tiene en horizontal?", "MRU."], ["¿Qué movimiento tiene en vertical?", "MRUA con a = −g."], ["¿Con qué ángulo es máximo el alcance?", "45°."], ["Altura máxima.", "H = v₀ᵧ²/(2g)."], ["Tiempo de vuelo.", "T = 2v₀ᵧ/g."], ["¿Qué componente de la velocidad cambia en el aire?", "La vertical."]],
    videos: ["movimiento de proyectiles física", "tiro parabólico alcance y altura", "lanzamiento horizontal"],
    n: 16
  },
  {
    tema: "Movimiento circular",
    resumen: "El movimiento circular describe cuerpos que se mueven sobre una circunferencia. Se caracteriza por el período, la frecuencia, la velocidad angular y la aceleración centrípeta.",
    objetivos: ["Calcularás período, frecuencia y velocidades.", "Relacionarás velocidad lineal y angular.", "Entenderás la aceleración y la fuerza centrípetas."],
    partes: [
      ["🔄", "Magnitudes", "- Período T: tiempo de una vuelta (s).\n- Frecuencia f = 1/T: vueltas por segundo (Hz).\n- Velocidad angular ω = 2π/T = 2πf (rad/s).\n- Velocidad lineal v = ω·r = 2πr/T.", "Una rueda de radio 0,5 m con T = 2 s: ω = π rad/s ≈ 3,14 rad/s y v ≈ 1,57 m/s.", "ω = 2π f."],
      ["➡️", "Movimiento circular uniforme (MCU)", "La rapidez es constante, pero la velocidad cambia de dirección en todo momento. Por eso hay aceleración, aunque la rapidez no cambie.", "Un carro que toma una curva a rapidez constante acelera porque cambia su dirección.", "Rapidez constante ≠ velocidad constante."],
      ["🎯", "Aceleración centrípeta", "Apunta hacia el centro de la circunferencia: a_c = v²/r = ω²·r.", "Un cuerpo a 10 m/s en una curva de 5 m de radio: a_c = 100/5 = 20 m/s².", "Siempre hacia el centro."],
      ["💪", "Fuerza centrípeta", "Es la fuerza neta hacia el centro: F_c = m·v²/r. No es una fuerza nueva: la producen la tensión, la fricción, la gravedad, etc.", "Al girar una piedra con una cuerda, la tensión es la fuerza centrípeta; si se corta, la piedra sale en línea recta por la tangente.", "Sin fuerza centrípeta no hay giro."],
      ["🚗", "Aplicaciones", "Curvas de carreteras, ruedas, satélites, centrifugadoras y lavadoras. El peralte de las curvas ayuda a que el carro no derrape.", "En una lavadora, el agua sale por los agujeros del tambor porque la ropa es forzada a girar y el agua sigue en línea recta.", "El giro está en todas partes."]
    ],
    mapa: ["Movimiento circular", [["Magnitudes", ["Período", "Frecuencia", "ω", "v"]], ["MCU", ["Rapidez constante", "Dirección cambia"]], ["Centrípeta", ["a_c = v²/r", "F_c = m v²/r"]], ["Usos", ["Curvas", "Satélites", "Centrífugas"]]]],
    tarjetas: [["¿Qué es el período?", "El tiempo de una vuelta."], ["¿Cómo se relaciona f con T?", "f = 1/T."], ["Fórmula de velocidad angular.", "ω = 2π/T."], ["Relación entre v y ω.", "v = ω·r."], ["¿Hacia dónde apunta la aceleración centrípeta?", "Hacia el centro."], ["Fórmula de aceleración centrípeta.", "a_c = v²/r."], ["¿Qué pasa si se corta la cuerda de una piedra que gira?", "Sale en línea recta por la tangente."]],
    videos: ["movimiento circular uniforme", "aceleración centrípeta explicada", "período frecuencia velocidad angular"],
    n: 14
  },
  {
    tema: "Leyes de Newton",
    resumen: "Las tres leyes de Newton explican la relación entre fuerza y movimiento: la inercia, la proporcionalidad entre fuerza y aceleración, y la acción-reacción.",
    objetivos: ["Enunciarás las tres leyes.", "Aplicarás F = m·a.", "Construirás diagramas de cuerpo libre."],
    partes: [
      ["🚌", "Primera ley: inercia", "Un cuerpo permanece en reposo o con velocidad constante si la fuerza neta sobre él es cero. La inercia es la resistencia a cambiar el estado de movimiento y depende de la masa.", "Al frenar un bus, los pasajeros se inclinan hacia adelante.", "Sin fuerza neta no hay cambio de movimiento."],
      ["🧮", "Segunda ley: F = m·a", "La aceleración es proporcional a la fuerza neta e inversamente proporcional a la masa: ΣF = m·a. La unidad de fuerza es el newton (N = kg·m/s²).", "Una fuerza neta de 20 N sobre 4 kg produce a = 5 m/s².", "ΣF = m·a."],
      ["↔️", "Tercera ley: acción y reacción", "Si un cuerpo A ejerce una fuerza sobre B, B ejerce sobre A una fuerza de igual magnitud y sentido opuesto. Actúan sobre cuerpos distintos, por eso no se cancelan.", "Al caminar empujas el suelo hacia atrás y el suelo te empuja hacia adelante.", "Las fuerzas vienen en pares."],
      ["⚖️", "Fuerzas comunes", "- Peso: W = m·g (hacia abajo).\n- Normal: perpendicular a la superficie.\n- Tensión: en cuerdas.\n- Fricción: se opone al deslizamiento.\n- Fuerza aplicada y fuerza elástica (ley de Hooke: F = kx).", "Un libro sobre una mesa: peso y normal se equilibran.", "Identifica las fuerzas del cuerpo."],
      ["🖼️", "Diagrama de cuerpo libre", "Se dibuja el cuerpo como un punto y se trazan todas las fuerzas que actúan sobre él. Se eligen ejes, se descomponen y se aplica ΣF = m·a en cada eje.", "En un ascensor que sube con aceleración a: N − mg = ma.", "Dibuja y luego calcula."]
    ],
    mapa: ["Leyes de Newton", [["1.ª ley", ["Inercia"]], ["2.ª ley", ["ΣF = m·a"]], ["3.ª ley", ["Acción y reacción"]], ["Herramientas", ["Diagrama de cuerpo libre", "Peso", "Normal"]]]],
    tarjetas: [["¿Qué dice la primera ley?", "Un cuerpo mantiene su estado si la fuerza neta es cero."], ["Fórmula de la segunda ley.", "ΣF = m·a."], ["¿Qué dice la tercera ley?", "A toda acción corresponde una reacción igual y opuesta."], ["¿Qué es un newton?", "kg·m/s²."], ["¿Por qué no se cancelan acción y reacción?", "Porque actúan sobre cuerpos distintos."], ["Peso de 10 kg (g = 10).", "100 N."], ["¿Qué es la inercia?", "La resistencia a cambiar el estado de movimiento."]],
    videos: ["leyes de Newton física décimo grado", "diagrama de cuerpo libre", "segunda ley de Newton problemas"],
    n: 16
  },
  {
    tema: "Fricción y planos inclinados",
    resumen: "La fricción es una fuerza que se opone al deslizamiento entre superficies. En un plano inclinado, el peso se descompone en una componente paralela y otra perpendicular al plano.",
    objetivos: ["Calcularás la fuerza de fricción.", "Descompondrás el peso en un plano inclinado.", "Resolverás problemas de deslizamiento."],
    partes: [
      ["🧊", "Fricción estática y cinética", "- Estática: actúa antes de que el cuerpo se mueva; f_s ≤ μ_s·N.\n- Cinética: actúa cuando ya se desliza; f_k = μ_k·N.\nGeneralmente μ_s > μ_k. N es la fuerza normal.", "Cuesta más empezar a mover una caja pesada que mantenerla en movimiento.", "f = μ·N."],
      ["📐", "Peso en un plano inclinado", "Con un ángulo θ: la componente paralela al plano es mg·sen θ (hace deslizar) y la perpendicular es mg·cos θ (es equilibrada por la normal: N = mg·cos θ).", "Un bloque de 10 kg en un plano de 30° (g = 10): paralela = 50 N, N = 86,6 N.", "Paralela: seno. Perpendicular: coseno."],
      ["⬇️", "Plano sin fricción", "La aceleración es a = g·sen θ, independiente de la masa.", "A 30°: a = 5 m/s².", "El seno del ángulo manda."],
      ["🧮", "Plano con fricción", "ΣF paralela = mg·sen θ − μ_k·mg·cos θ = m·a → a = g(sen θ − μ_k cos θ). Si el resultado es negativo o cero, el cuerpo no desliza (o se detiene).", "Con θ = 30° y μ_k = 0,2: a = 10(0,5 − 0,2·0,866) ≈ 3,27 m/s².", "Desliza si mg sen θ supera la fricción."],
      ["🚗", "Aplicaciones", "Frenos, neumáticos, ruedas en carreteras mojadas, escaleras, rampas y calzado. La lubricación reduce la fricción; los neumáticos con buen dibujo la aumentan.", "Una carretera mojada reduce μ y aumenta la distancia de frenado.", "Fricción: aliada y enemiga."]
    ],
    mapa: ["Fricción y planos", [["Fricción", ["Estática", "Cinética", "f = μN"]], ["Plano inclinado", ["mg sen θ", "mg cos θ"]], ["Sin fricción", ["a = g sen θ"]], ["Con fricción", ["a = g(sen θ − μ cos θ)"]]]],
    tarjetas: [["Fórmula de la fricción cinética.", "f = μ_k·N."], ["¿Cuál es mayor, μ_s o μ_k?", "Generalmente μ_s."], ["Componente del peso paralela al plano.", "mg·sen θ."], ["Normal en un plano inclinado.", "N = mg·cos θ."], ["Aceleración en un plano sin fricción.", "a = g·sen θ."], ["¿Depende a de la masa en un plano sin fricción?", "No."], ["¿Qué reduce la fricción?", "La lubricación."]],
    videos: ["plano inclinado con fricción", "fuerza de fricción estática y cinética", "problemas de planos inclinados"],
    n: 16
  },
  {
    tema: "Trabajo, energía y potencia",
    resumen: "El trabajo es la energía transferida por una fuerza que produce un desplazamiento. La energía puede ser cinética o potencial y la potencia mide la rapidez con que se realiza un trabajo.",
    objetivos: ["Calcularás trabajo con fuerza constante.", "Aplicarás el teorema trabajo-energía.", "Calcularás potencia y rendimiento."],
    partes: [
      ["💪", "Trabajo", "W = F·d·cos θ, donde θ es el ángulo entre la fuerza y el desplazamiento. Unidad: julio (J = N·m). Es positivo si la fuerza favorece el movimiento, negativo si se opone (fricción) y cero si es perpendicular.", "Empujar con 50 N una caja 4 m: W = 200 J. La fuerza normal no realiza trabajo en una superficie horizontal.", "Solo cuenta la componente en la dirección del movimiento."],
      ["🏃", "Energía cinética y potencial", "- Cinética: Ec = ½·m·v².\n- Potencial gravitacional: Ep = m·g·h.\n- Potencial elástica: Ee = ½·k·x².", "Un carro de 1.000 kg a 20 m/s: Ec = 200.000 J.", "Movimiento, altura y deformación almacenan energía."],
      ["🔗", "Teorema trabajo-energía", "El trabajo neto sobre un cuerpo es igual al cambio de su energía cinética: W_neto = ΔEc = ½mv_f² − ½mv_i².", "Una fuerza neta de 100 N sobre 10 kg a lo largo de 5 m: W = 500 J → v = 10 m/s desde el reposo.", "Trabajo ↔ cambio de energía."],
      ["⚡", "Potencia", "P = W/t = F·v. Unidad: vatio (W = J/s). 1 HP ≈ 746 W. La energía eléctrica se factura en kWh (1 kWh = 3,6 × 10⁶ J).", "Subir una carga de 500 J en 10 s requiere una potencia de 50 W.", "Potencia: rapidez de la energía."],
      ["⚙️", "Rendimiento", "El rendimiento (eficiencia) es η = (energía útil / energía total) × 100 %. Ninguna máquina real tiene 100 % por la fricción y el calor.", "Un motor que recibe 1.000 J y entrega 300 J útiles tiene η = 30 %.", "Siempre hay pérdidas."]
    ],
    mapa: ["Trabajo y energía", [["Trabajo", ["W = F d cos θ", "Julios"]], ["Energía", ["Cinética", "Potencial"]], ["Teorema", ["W neto = ΔEc"]], ["Potencia", ["P = W/t", "Rendimiento"]]]],
    tarjetas: [["Fórmula del trabajo.", "W = F·d·cos θ."], ["Energía cinética.", "½·m·v²."], ["Energía potencial gravitacional.", "m·g·h."], ["Teorema trabajo-energía.", "W neto = ΔEc."], ["Fórmula de la potencia.", "P = W/t."], ["¿Cuántos vatios es 1 HP?", "≈ 746 W."], ["¿Qué hace un trabajo negativo?", "Se opone al movimiento (por ejemplo la fricción)."]],
    videos: ["trabajo energía y potencia física", "teorema trabajo energía", "potencia y rendimiento"],
    n: 16
  },
  {
    tema: "Conservación de la energía",
    resumen: "La energía no se crea ni se destruye, solo se transforma. En ausencia de fricción, la energía mecánica (cinética + potencial) se conserva; con fricción, parte se transforma en calor.",
    objetivos: ["Aplicarás la conservación de la energía mecánica.", "Analizarás transformaciones de energía.", "Incluirás el trabajo de fuerzas no conservativas."],
    partes: [
      ["♻️", "Principio general", "La energía total de un sistema aislado es constante. Se transforma de una forma a otra: química → cinética, potencial → cinética, eléctrica → luz y calor.", "En una hidroeléctrica: energía potencial del agua → cinética → eléctrica.", "Se transforma, no se pierde."],
      ["🎢", "Energía mecánica", "Em = Ec + Ep. Si solo actúan fuerzas conservativas (gravedad, elástica), Em es constante: ½mv₁² + mgh₁ = ½mv₂² + mgh₂.", "Una bola cae desde 20 m (g = 10): al llegar al suelo, ½mv² = mgh → v = √(2·10·20) = 20 m/s.", "Altura se convierte en velocidad."],
      ["🌀", "Resorte y péndulo", "En un resorte: ½mv² + ½kx² = constante. En un péndulo: en el punto más alto toda es potencial; en el más bajo, cinética.", "Un péndulo soltado desde 0,2 m de altura pasa por el punto más bajo con v = √(2·10·0,2) = 2 m/s.", "Intercambio continuo."],
      ["🔥", "Fuerzas no conservativas", "La fricción y la resistencia del aire disipan energía en forma de calor: W_nc = ΔEm = Em_final − Em_inicial (negativo).", "Un bloque que desliza por una rampa con fricción llega abajo con menor velocidad que sin ella.", "La energía mecánica disminuye."],
      ["🌍", "Fuentes de energía y eficiencia", "Fuentes renovables (solar, eólica, hidráulica) y no renovables (petróleo, carbón, gas). La eficiencia energética busca obtener lo mismo con menos energía: bombillos LED, electrodomésticos eficientes y buen aislamiento.", "Un LED consume mucho menos que un bombillo incandescente para dar la misma luz.", "Ahorrar energía cuida el planeta."]
    ],
    mapa: ["Conservación de la energía", [["Principio", ["No se crea ni se destruye"]], ["Mecánica", ["Ec + Ep constante"]], ["Fricción", ["Pérdida en calor"]], ["Fuentes", ["Renovables", "No renovables"]]]],
    tarjetas: [["¿Qué dice la conservación de la energía?", "Se transforma, no se crea ni se destruye."], ["¿Qué es la energía mecánica?", "Ec + Ep."], ["¿Cuándo se conserva Em?", "Si solo actúan fuerzas conservativas."], ["¿Qué pasa con la energía por la fricción?", "Se transforma en calor."], ["Velocidad al caer desde h (sin aire).", "v = √(2gh)."], ["¿Qué fuerza es conservativa?", "La gravedad."], ["Da una fuente renovable.", "Solar, eólica o hidráulica."]],
    videos: ["conservación de la energía mecánica", "transformaciones de energía", "energía y fricción problemas"],
    n: 14
  },
  {
    tema: "Cantidad de movimiento y choques",
    resumen: "La cantidad de movimiento (momentum) es el producto de la masa por la velocidad. En un sistema aislado se conserva, lo que permite analizar choques y explosiones.",
    objetivos: ["Calcularás cantidad de movimiento e impulso.", "Aplicarás su conservación.", "Distinguirás choques elásticos e inelásticos."],
    partes: [
      ["🏈", "Cantidad de movimiento", "p = m·v (vector). Unidad: kg·m/s. Un cuerpo más masivo o más veloz tiene mayor cantidad de movimiento.", "Un camión de 5.000 kg a 10 m/s: p = 50.000 kg·m/s.", "p = m v."],
      ["🤜", "Impulso", "El impulso es el producto de la fuerza por el tiempo que actúa: J = F·Δt = Δp (teorema impulso-cantidad de movimiento). Un mismo cambio de p con más tiempo implica menos fuerza: por eso los airbags y los cascos protegen.", "Una pelota de 0,5 kg que cambia su velocidad de 10 m/s a −10 m/s recibe Δp = 10 kg·m/s.", "Más tiempo, menos fuerza."],
      ["⚖️", "Conservación", "En un sistema aislado (sin fuerzas externas netas): p_total antes = p_total después. Se aplica a choques, explosiones y retrocesos.", "Un patinador de 60 kg lanza un objeto de 2 kg a 6 m/s: él retrocede a 0,2 m/s.", "El total no cambia."],
      ["💥", "Choques elásticos e inelásticos", "- Elástico: se conservan p y la energía cinética (como bolas de billar).\n- Inelástico: se conserva p, pero parte de la energía cinética se pierde.\n- Perfectamente inelástico: los cuerpos quedan unidos (m₁v₁ + m₂v₂ = (m₁ + m₂)v).", "Un vagón de 2.000 kg a 3 m/s choca y se acopla con otro de 1.000 kg en reposo: v = 6.000/3.000 = 2 m/s.", "Siempre se conserva p."],
      ["🚀", "Aplicaciones", "Cohetes (expulsan gases hacia atrás y avanzan), retroceso de armas, choques de vehículos, deportes (golpe de un balón). El diseño de zonas de deformación en los carros aumenta el tiempo de choque.", "Un cohete avanza porque los gases expulsados llevan cantidad de movimiento en sentido contrario.", "Acción-reacción y momentum."]
    ],
    mapa: ["Momentum y choques", [["Momentum", ["p = m v", "Vector"]], ["Impulso", ["F Δt = Δp"]], ["Conservación", ["Sistema aislado"]], ["Choques", ["Elástico", "Inelástico"]]]],
    tarjetas: [["Fórmula de la cantidad de movimiento.", "p = m·v."], ["¿Qué es el impulso?", "J = F·Δt = Δp."], ["¿Qué se conserva en todo choque?", "La cantidad de movimiento."], ["¿Qué se conserva solo en el choque elástico?", "La energía cinética."], ["¿Para qué sirve un airbag?", "Para aumentar el tiempo de choque y reducir la fuerza."], ["¿Cómo avanza un cohete?", "Expulsando gases en sentido contrario."], ["Unidad de la cantidad de movimiento.", "kg·m/s."]],
    videos: ["cantidad de movimiento e impulso", "choques elásticos e inelásticos", "conservación del momentum"],
    n: 16
  },
  {
    tema: "Gravitación universal",
    resumen: "La ley de gravitación universal de Newton explica que dos masas se atraen con una fuerza que depende de sus masas y de la distancia. Esta ley rige el movimiento de planetas, satélites y mareas.",
    objetivos: ["Aplicarás la ley de gravitación.", "Relacionarás gravedad, peso y órbitas.", "Enunciarás las leyes de Kepler."],
    partes: [
      ["🍎", "Ley de gravitación", "F = G·m₁·m₂/r², con G = 6,67 × 10⁻¹¹ N·m²/kg². La fuerza es de atracción, proporcional al producto de las masas e inversamente proporcional al cuadrado de la distancia.", "Si se duplica la distancia entre dos cuerpos, la fuerza se reduce a la cuarta parte.", "Ley del inverso del cuadrado."],
      ["🌍", "Gravedad en la superficie", "En la superficie de un planeta: g = G·M/R². En la Tierra, g ≈ 9,8 m/s²; en la Luna ≈ 1,6 m/s². La masa no cambia, pero el peso (W = m·g) sí varía según el lugar.", "Una persona de 60 kg pesa unos 588 N en la Tierra y unos 96 N en la Luna.", "Masa constante, peso variable."],
      ["🛰️", "Satélites y órbitas", "Un satélite orbita porque cae continuamente alrededor de la Tierra. La gravedad provee la fuerza centrípeta: G·M·m/r² = m·v²/r → v = √(G·M/r). Los satélites geoestacionarios tardan 24 h y parecen fijos sobre un punto.", "La Estación Espacial Internacional orbita a unos 400 km con v ≈ 7,7 km/s.", "La órbita es una caída sin fin."],
      ["🪐", "Leyes de Kepler", "1) Los planetas describen órbitas elípticas con el Sol en un foco.\n2) La línea Sol-planeta barre áreas iguales en tiempos iguales.\n3) T² es proporcional a r³ (T² = k·r³).", "Los planetas se mueven más rápido cuando están más cerca del Sol.", "Orden en el Sistema Solar."],
      ["🌊", "Efectos de la gravedad", "Produce mareas (por la atracción de la Luna y el Sol), mantiene la atmósfera, forma estrellas y galaxias, y determina la velocidad de escape (unos 11,2 km/s en la Tierra). La ingravidez en el espacio es caída libre, no ausencia de gravedad.", "Los astronautas flotan porque caen junto con la nave.", "La gravedad domina el universo."]
    ],
    mapa: ["Gravitación", [["Ley de Newton", ["F = G m₁ m₂/r²"]], ["Gravedad", ["g = GM/R²", "Peso variable"]], ["Satélites", ["v = √(GM/r)", "Geoestacionarios"]], ["Kepler", ["Elipses", "Áreas iguales", "T² ~ r³"]]]],
    tarjetas: [["Fórmula de la gravitación universal.", "F = G·m₁·m₂/r²."], ["¿Qué pasa con la fuerza si la distancia se duplica?", "Se reduce a la cuarta parte."], ["¿Cuánto vale g en la Tierra?", "≈ 9,8 m/s²."], ["¿Cuál es la primera ley de Kepler?", "Las órbitas son elipses con el Sol en un foco."], ["¿Qué es un satélite geoestacionario?", "Uno que parece fijo sobre un punto de la Tierra."], ["¿Por qué flotan los astronautas?", "Porque están en caída libre junto con la nave."], ["¿Qué causa las mareas?", "La atracción gravitacional de la Luna y el Sol."]],
    videos: ["ley de gravitación universal", "leyes de Kepler explicadas", "satélites y órbitas física"],
    n: 14
  }
];
