// Teoría de Física, grado 11°. Formato compacto.
export const area = "Fisica";

export const temas = [
  {
    tema: "Estática: equilibrio de cuerpos",
    resumen: "La estática estudia los cuerpos en equilibrio. Un cuerpo está en equilibrio cuando la suma de fuerzas y la suma de momentos (torques) sobre él son cero.",
    objetivos: ["Aplicarás las condiciones de equilibrio.", "Calcularás torques.", "Resolverás problemas de palancas y estructuras."],
    partes: [
      ["⚖️", "Equilibrio de traslación", "Primera condición: ΣF = 0. En el plano, ΣFx = 0 y ΣFy = 0. Un cuerpo en reposo o con velocidad constante cumple esta condición. Se construye el diagrama de cuerpo libre y se descomponen las fuerzas.", "Un cuadro colgado de dos cuerdas simétricas: las componentes verticales de la tensión equilibran el peso.", "La fuerza neta es cero."],
      ["🔄", "Torque o momento de una fuerza", "El torque mide la tendencia de una fuerza a hacer girar un cuerpo: τ = F·d·sen θ, donde d es la distancia al eje de giro. Unidad: N·m. Convención: positivo antihorario, negativo horario.", "Una fuerza de 20 N a 0,5 m del eje, perpendicular: τ = 10 N·m.", "Más brazo de palanca, más torque."],
      ["🔧", "Equilibrio de rotación", "Segunda condición: Στ = 0 respecto a cualquier punto. Se elige como eje el punto donde actúan fuerzas desconocidas para simplificar.", "Una viga apoyada en dos puntos con una carga en el medio: el torque respecto a un apoyo permite hallar la reacción en el otro.", "Escoge bien el punto de giro."],
      ["📍", "Centro de gravedad", "Es el punto donde se considera aplicado el peso del cuerpo. En objetos simétricos y homogéneos coincide con el centro geométrico. Un cuerpo es estable si su centro de gravedad está sobre la base de apoyo y bajo.", "Los carros deportivos son bajos para que su centro de gravedad sea bajo y no vuelquen.", "Estabilidad y base de apoyo."],
      ["🏗️", "Aplicaciones", "- Palancas: la ley de la palanca F₁·d₁ = F₂·d₂ (tijeras, balancines, carretillas).\n- Poleas.\n- Puentes y estructuras.\n- Balanzas.", "Un niño de 30 kg a 2 m del pivote equilibra a otro de 20 kg a 3 m.", "Equilibrio en estructuras y máquinas simples."]
    ],
    mapa: ["Estática", [["Condiciones", ["ΣF = 0", "Στ = 0"]], ["Torque", ["τ = F d sen θ"]], ["Centro de gravedad", ["Punto del peso", "Estabilidad"]], ["Aplicaciones", ["Palancas", "Puentes"]]]],
    tarjetas: [["¿Cuáles son las condiciones de equilibrio?", "ΣF = 0 y Στ = 0."], ["Fórmula del torque.", "τ = F·d·sen θ."], ["¿Qué es el brazo de palanca?", "La distancia perpendicular desde el eje a la línea de acción de la fuerza."], ["¿Qué es el centro de gravedad?", "El punto donde se considera aplicado el peso."], ["Ley de la palanca.", "F₁·d₁ = F₂·d₂."], ["¿Qué unidad tiene el torque?", "N·m."], ["¿Cómo se gana estabilidad?", "Bajando el centro de gravedad y ampliando la base."]],
    videos: ["estática equilibrio de cuerpos once grado", "torque y palancas", "centro de gravedad y estabilidad"],
    n: 14
  },
  {
    tema: "Fluidos: presión y principio de Arquímedes",
    resumen: "Los fluidos (líquidos y gases) ejercen presión y fuerzas de flotación. El principio de Pascal explica la transmisión de presión y el de Arquímedes, la flotación.",
    objetivos: ["Calcularás presión y presión hidrostática.", "Aplicarás los principios de Pascal y Arquímedes.", "Explicarás flotación."],
    partes: [
      ["📏", "Densidad y presión", "Densidad ρ = m/V (kg/m³; el agua: 1.000 kg/m³). Presión P = F/A (pascal: 1 Pa = 1 N/m²). Otras unidades: atm (1 atm ≈ 101.325 Pa), mmHg, bar.", "Una persona de 600 N sobre unos zapatos de 0,04 m² de área ejerce 15.000 Pa.", "A menor área, mayor presión."],
      ["🌊", "Presión hidrostática", "La presión en un fluido en reposo aumenta con la profundidad: P = P₀ + ρ·g·h. Depende de la profundidad, no de la forma del recipiente (paradoja hidrostática). A 10 m de profundidad en agua, la presión aumenta cerca de 1 atm.", "Por eso las presas son más gruesas en la base.", "Más profundo, más presión."],
      ["🔧", "Principio de Pascal", "La presión aplicada a un fluido encerrado se transmite sin pérdida a todos sus puntos: F₁/A₁ = F₂/A₂. Se usa en prensas, frenos y gatos hidráulicos.", "Con A₂ = 50 A₁, una fuerza de 100 N produce 5.000 N en el pistón grande.", "Una pequeña fuerza se multiplica."],
      ["🛟", "Principio de Arquímedes", "Todo cuerpo sumergido en un fluido recibe un empuje vertical hacia arriba igual al peso del fluido desalojado: E = ρ_fluido·g·V_sumergido. Si E > peso, flota; si E < peso, se hunde; si son iguales, queda en equilibrio.", "Un bloque de 0,002 m³ sumergido en agua recibe E = 1.000·10·0,002 = 20 N.", "Empuje = peso del fluido desalojado."],
      ["🚢", "Flotación y aplicaciones", "Un cuerpo flota si su densidad media es menor que la del fluido. Los barcos flotan porque su forma desaloja mucho agua. Aplicaciones: submarinos (lastres), globos aerostáticos, densímetros. La presión atmosférica (Torricelli, 760 mmHg) y los barómetros.", "El mar Muerto tiene mucha sal, mayor densidad, y es más fácil flotar en él.", "Densidad media decide si flota."]
    ],
    mapa: ["Fluidos", [["Presión", ["P = F/A", "Hidrostática ρgh"]], ["Pascal", ["F₁/A₁ = F₂/A₂"]], ["Arquímedes", ["Empuje = ρ g V"]], ["Aplicaciones", ["Frenos", "Barcos", "Submarinos"]]]],
    tarjetas: [["Fórmula de la presión.", "P = F/A."], ["Presión hidrostática.", "P = ρ·g·h."], ["¿Qué dice el principio de Pascal?", "La presión se transmite igual en todo el fluido encerrado."], ["¿Qué dice el principio de Arquímedes?", "El empuje es igual al peso del fluido desalojado."], ["¿Cuándo flota un cuerpo?", "Cuando el empuje supera o iguala su peso."], ["¿Cuántos pascales tiene una atmósfera?", "≈ 101.325 Pa."], ["¿Para qué sirve una prensa hidráulica?", "Para multiplicar fuerzas."]],
    videos: ["presión hidrostática y Pascal", "principio de Arquímedes explicado", "flotación de los cuerpos"],
    n: 16
  },
  {
    tema: "Hidrodinámica y ecuación de Bernoulli",
    resumen: "La hidrodinámica estudia los fluidos en movimiento. La ecuación de continuidad y la de Bernoulli relacionan velocidad, presión y altura en un fluido ideal.",
    objetivos: ["Aplicarás la ecuación de continuidad.", "Usarás la ecuación de Bernoulli.", "Explicarás fenómenos como la sustentación."],
    partes: [
      ["💧", "Fluido ideal y caudal", "Un fluido ideal es incompresible, sin viscosidad y con flujo estacionario. El caudal Q = A·v (m³/s) es el volumen que pasa por una sección en la unidad de tiempo.", "Por una tubería de 0,01 m² pasa agua a 2 m/s: Q = 0,02 m³/s.", "Caudal = área × velocidad."],
      ["🔁", "Ecuación de continuidad", "En un flujo estacionario, el caudal es constante: A₁v₁ = A₂v₂. Si la tubería se estrecha, la velocidad aumenta.", "Al tapar parcialmente una manguera con el dedo, el agua sale más rápido.", "Menos área, más velocidad."],
      ["⚡", "Ecuación de Bernoulli", "Expresa la conservación de la energía en un fluido ideal: P + ½ρv² + ρgh = constante. Donde la velocidad es mayor, la presión es menor (a igual altura).", "Entre dos puntos: P₁ + ½ρv₁² + ρgh₁ = P₂ + ½ρv₂² + ρgh₂.", "Velocidad alta, presión baja."],
      ["✈️", "Aplicaciones", "- Sustentación de un ala: el aire que va más rápido por encima produce menor presión y una fuerza neta hacia arriba.\n- Tubo de Venturi (mide velocidades).\n- Atomizadores y carburadores.\n- Tubo de Pitot en aviones.", "En un tubo de Venturi, la presión es menor en la parte estrecha.", "Bernoulli explica el vuelo."],
      ["🚰", "Teorema de Torricelli y límites", "La velocidad de salida de un líquido por un orificio a una profundidad h es v = √(2gh). Los fluidos reales tienen viscosidad; el flujo puede ser laminar o turbulento (número de Reynolds).", "Un tanque con un orificio a 1,25 m bajo la superficie: v = √(2·10·1,25) = 5 m/s.", "Los fluidos reales disipan energía."]
    ],
    mapa: ["Hidrodinámica", [["Caudal", ["Q = A v"]], ["Continuidad", ["A₁v₁ = A₂v₂"]], ["Bernoulli", ["P + ½ρv² + ρgh"]], ["Aplicaciones", ["Alas", "Venturi", "Torricelli"]]]],
    tarjetas: [["¿Qué es el caudal?", "El volumen de fluido que pasa por segundo."], ["Ecuación de continuidad.", "A₁v₁ = A₂v₂."], ["Ecuación de Bernoulli.", "P + ½ρv² + ρgh = constante."], ["¿Qué pasa con la presión donde la velocidad es mayor?", "Disminuye."], ["¿Cómo se sustenta un ala?", "Por la diferencia de presión entre sus caras."], ["Teorema de Torricelli.", "v = √(2gh)."], ["¿Qué es un fluido ideal?", "Incompresible y sin viscosidad."]],
    videos: ["ecuación de Bernoulli explicada", "ecuación de continuidad caudal", "sustentación de un ala"],
    n: 16
  },
  {
    tema: "Temperatura y calor",
    resumen: "La temperatura mide la energía cinética promedio de las partículas; el calor es la energía que se transfiere entre cuerpos por diferencia de temperatura. Se estudian escalas, dilatación, capacidad calorífica y cambios de fase.",
    objetivos: ["Convertirás escalas de temperatura.", "Calcularás calor y equilibrio térmico.", "Distinguirás formas de transferencia de calor."],
    partes: [
      ["🌡️", "Temperatura y escalas", "Escalas: Celsius (°C), Fahrenheit (°F) y Kelvin (K). K = °C + 273,15; °F = 1,8·°C + 32. El cero absoluto es 0 K (−273,15 °C).", "37 °C = 310 K = 98,6 °F.", "Usa kelvin en cálculos físicos."],
      ["📈", "Dilatación térmica", "Los materiales se expanden al calentarse. Lineal: ΔL = α·L₀·ΔT; volumétrica: ΔV = β·V₀·ΔT. Por eso hay juntas en puentes y rieles. El agua es una excepción cerca de 4 °C.", "Un riel de 10 m de acero (α ≈ 12 × 10⁻⁶ /°C) crece unos 4,8 mm con 40 °C más.", "El calor dilata."],
      ["🔥", "Calor y calor específico", "Q = m·c·ΔT, donde c es el calor específico (J/kg·K). Agua: c ≈ 4.186 J/kg·K (1 cal = 4,186 J). Equilibrio térmico: calor cedido = calor ganado.", "Calentar 2 kg de agua 10 °C requiere Q = 2·4.186·10 ≈ 83.720 J.", "El agua almacena mucho calor."],
      ["🧊", "Cambios de fase", "Durante un cambio de fase, el calor no cambia la temperatura: Q = m·L (calor latente). Fusión del hielo: 334 kJ/kg; vaporización del agua: 2.260 kJ/kg.", "Fundir 1 kg de hielo a 0 °C requiere 334 kJ sin que cambie la temperatura.", "Calor latente: cambia el estado."],
      ["♨️", "Transferencia de calor", "- Conducción: por contacto en sólidos (metales conducen bien).\n- Convección: movimiento de fluidos calientes (corrientes).\n- Radiación: ondas electromagnéticas (el calor del Sol).\nAplicaciones: aislantes, termos, ropa, calentadores solares y el efecto invernadero.", "Un termo reduce las tres formas de transferencia.", "Tres formas de viajar el calor."]
    ],
    mapa: ["Temperatura y calor", [["Escalas", ["°C", "K", "°F"]], ["Dilatación", ["Lineal", "Volumétrica"]], ["Calor", ["Q = mcΔT", "Latente"]], ["Transferencia", ["Conducción", "Convección", "Radiación"]]]],
    tarjetas: [["¿Cuántos kelvin son 0 °C?", "273,15 K."], ["Fórmula del calor sensible.", "Q = m·c·ΔT."], ["¿Qué es el calor latente?", "El calor necesario para cambiar de fase sin cambiar la temperatura."], ["¿Cómo se transfiere el calor del Sol?", "Por radiación."], ["¿Qué es el equilibrio térmico?", "Cuando dos cuerpos alcanzan la misma temperatura."], ["¿Qué calor específico tiene el agua?", "≈ 4.186 J/kg·K."], ["¿Qué es la convección?", "Transferencia por movimiento de un fluido."]],
    videos: ["temperatura y calor física", "calor específico y calor latente", "formas de transferencia de calor"],
    n: 14
  },
  {
    tema: "Leyes de la termodinámica",
    resumen: "La termodinámica estudia la energía, el calor y el trabajo. Sus leyes establecen la conservación de la energía, la dirección de los procesos naturales y el límite de la eficiencia de las máquinas térmicas.",
    objetivos: ["Enunciarás las leyes de la termodinámica.", "Aplicarás ΔU = Q − W.", "Calcularás eficiencia de máquinas térmicas."],
    partes: [
      ["🔰", "Ley cero", "Si A está en equilibrio térmico con C y B también con C, entonces A y B están en equilibrio entre sí. Es la base del concepto de temperatura y de los termómetros.", "Un termómetro marca la temperatura cuando llega al equilibrio con el cuerpo.", "Equilibrio térmico transitivo."],
      ["⚡", "Primera ley", "La energía se conserva: ΔU = Q − W, donde ΔU es el cambio de energía interna, Q el calor recibido y W el trabajo realizado por el sistema. Procesos: isotérmico (T constante), isobárico (P constante), isocórico (V constante, W = 0) y adiabático (Q = 0).", "Si un gas recibe 500 J de calor y realiza 200 J de trabajo, ΔU = 300 J.", "Calor y trabajo cambian la energía interna."],
      ["➡️", "Segunda ley", "El calor fluye espontáneamente del cuerpo caliente al frío. No existe una máquina que convierta todo el calor en trabajo (Kelvin-Planck) ni que pase calor del frío al caliente sin trabajo (Clausius). La entropía (desorden) de un sistema aislado tiende a aumentar.", "Un café caliente se enfría solo; nunca se calienta solo en una habitación fría.", "Los procesos tienen dirección."],
      ["⚙️", "Máquinas térmicas y eficiencia", "Una máquina térmica toma calor Q_h de una fuente caliente, produce trabajo W y cede Q_c a una fuente fría. Eficiencia: η = W/Q_h = 1 − Q_c/Q_h. El ciclo de Carnot da el máximo teórico: η = 1 − T_c/T_h (temperaturas en kelvin). Refrigeradores y bombas de calor funcionan al revés.", "Con T_h = 600 K y T_c = 300 K: η_max = 50 %.", "Ninguna máquina real es 100 % eficiente."],
      ["🌍", "Tercera ley y aplicaciones", "Es imposible alcanzar el cero absoluto en un número finito de pasos. Aplicaciones: motores de combustión, centrales térmicas, refrigeradores, aire acondicionado y la eficiencia energética. Entropía y flecha del tiempo.", "Los motores de los carros convierten solo una parte de la energía del combustible en movimiento.", "La energía se conserva, pero se degrada."]
    ],
    mapa: ["Termodinámica", [["Ley cero", ["Equilibrio térmico"]], ["Primera ley", ["ΔU = Q − W"]], ["Segunda ley", ["Entropía", "Dirección del calor"]], ["Máquinas", ["Eficiencia", "Carnot"]]]],
    tarjetas: [["¿Qué dice la primera ley?", "La energía se conserva: ΔU = Q − W."], ["¿Qué dice la segunda ley?", "El calor fluye del caliente al frío y la entropía aumenta."], ["¿Qué es la entropía?", "Una medida del desorden de un sistema."], ["¿Qué es un proceso adiabático?", "Uno sin intercambio de calor."], ["Eficiencia de una máquina térmica.", "η = W/Q_h."], ["Eficiencia máxima de Carnot.", "1 − T_c/T_h."], ["¿Qué dice la ley cero?", "Establece la transitividad del equilibrio térmico."]],
    videos: ["leyes de la termodinámica explicadas", "primera ley ΔU = Q − W", "ciclo de Carnot y eficiencia"],
    n: 16
  },
  {
    tema: "Movimiento ondulatorio",
    resumen: "Una onda transporta energía sin transportar materia. Se caracteriza por su amplitud, longitud de onda, frecuencia y velocidad. Existen ondas mecánicas y electromagnéticas, transversales y longitudinales.",
    objetivos: ["Describirás los parámetros de una onda.", "Aplicarás v = λ·f.", "Explicarás reflexión, refracción, interferencia y difracción."],
    partes: [
      ["🌊", "Qué es una onda", "Es una perturbación que se propaga. Mecánicas: necesitan un medio (sonido, olas, ondas en cuerdas). Electromagnéticas: no lo necesitan (luz, radio). Transversales: la vibración es perpendicular a la propagación (cuerda); longitudinales: paralela (sonido).", "Una ola en el mar mueve la energía, pero un corcho flotante solo sube y baja.", "Energía sin transporte de materia."],
      ["📏", "Parámetros", "- Amplitud A: máxima separación desde el equilibrio.\n- Longitud de onda λ: distancia entre dos crestas.\n- Período T: tiempo de una oscilación; frecuencia f = 1/T (Hz).\n- Velocidad: v = λ·f.", "Una onda de 2 m de longitud y 5 Hz viaja a 10 m/s.", "v = λ f."],
      ["🔁", "Reflexión y refracción", "Reflexión: la onda rebota al llegar a una frontera (eco). Refracción: cambia de dirección al pasar a otro medio por cambio de velocidad. Ley de la reflexión: ángulo de incidencia = ángulo de reflexión.", "El eco es la reflexión del sonido.", "Rebotan y se desvían."],
      ["➕", "Interferencia y difracción", "Principio de superposición: cuando dos ondas coinciden, sus amplitudes se suman. Interferencia constructiva (aumenta) y destructiva (disminuye). Difracción: las ondas se curvan al pasar por aberturas u obstáculos de tamaño similar a su longitud de onda.", "Los auriculares con cancelación de ruido usan interferencia destructiva.", "Las ondas se suman."],
      ["🎸", "Ondas estacionarias y resonancia", "En una cuerda fija, las ondas que van y vienen forman ondas estacionarias con nodos (sin movimiento) y antinodos. Frecuencias de la cuerda: fₙ = n·v/(2L). La resonancia ocurre cuando una fuerza externa coincide con la frecuencia natural y la amplitud crece.", "Un columpio alcanza gran amplitud si se empuja al ritmo adecuado; un puente puede dañarse por resonancia.", "Instrumentos de cuerda y resonancia."]
    ],
    mapa: ["Ondas", [["Tipos", ["Mecánicas", "Electromagnéticas", "Transversales", "Longitudinales"]], ["Parámetros", ["Amplitud", "λ", "f", "v = λ f"]], ["Fenómenos", ["Reflexión", "Refracción", "Interferencia"]], ["Estacionarias", ["Nodos", "Resonancia"]]]],
    tarjetas: [["¿Qué transporta una onda?", "Energía, no materia."], ["Fórmula de la velocidad de una onda.", "v = λ·f."], ["¿Qué es la longitud de onda?", "La distancia entre dos crestas consecutivas."], ["¿Qué es una onda longitudinal?", "Aquella cuya vibración es paralela a su propagación."], ["¿Qué es la interferencia destructiva?", "Cuando las ondas se cancelan parcial o totalmente."], ["¿Qué es la resonancia?", "Un aumento de amplitud cuando la frecuencia externa coincide con la natural."], ["¿Qué ondas no necesitan medio?", "Las electromagnéticas."]],
    videos: ["movimiento ondulatorio once grado", "interferencia y difracción", "ondas estacionarias y resonancia"],
    n: 14
  },
  {
    tema: "El sonido",
    resumen: "El sonido es una onda mecánica longitudinal que se propaga por un medio material. Se caracteriza por su altura, intensidad y timbre, y tiene aplicaciones en música, medicina y tecnología.",
    objetivos: ["Describirás el sonido como onda.", "Relacionarás cualidades del sonido con parámetros físicos.", "Explicarás el efecto Doppler y la resonancia en tubos."],
    partes: [
      ["🔊", "Naturaleza del sonido", "Se produce por la vibración de un cuerpo y se propaga como variaciones de presión. No viaja en el vacío. Velocidad: en el aire a 20 °C ≈ 343 m/s; en el agua ≈ 1.480 m/s; en el acero ≈ 5.000 m/s. Aumenta con la temperatura (v ≈ 331 + 0,6·T m/s en el aire).", "Primero se ve el relámpago y luego se oye el trueno porque la luz es mucho más rápida.", "Necesita un medio."],
      ["🎼", "Cualidades del sonido", "- Altura (tono): grave o agudo, depende de la frecuencia. El oído humano percibe aproximadamente de 20 Hz a 20.000 Hz.\n- Intensidad (volumen): depende de la amplitud; se mide en decibelios (dB).\n- Timbre: distingue instrumentos y voces; depende de los armónicos.", "Infrasonidos (< 20 Hz) y ultrasonidos (> 20.000 Hz) no los oímos.", "Frecuencia, amplitud y armónicos."],
      ["📣", "Nivel de intensidad y salud", "El decibelio es una escala logarítmica: 0 dB es el umbral de audición; 60 dB una conversación; 85 dB tráfico intenso (riesgo con exposición prolongada); 120 dB umbral de dolor. La contaminación auditiva produce estrés y pérdida de audición. Protección: bajar el volumen y usar protectores.", "Cada +10 dB equivale a 10 veces más intensidad.", "Cuida tu audición."],
      ["🎺", "Tubos y cuerdas", "Tubo abierto: fₙ = n·v/(2L). Tubo cerrado en un extremo: fₙ = n·v/(4L) con n impar. Cuerdas fijas: fₙ = n·v/(2L). Los instrumentos musicales usan estas resonancias. Pulsaciones: dos frecuencias muy cercanas producen variaciones de volumen con f_p = |f₁ − f₂|.", "Una flauta cambia de nota al tapar orificios, que modifica la longitud efectiva del tubo.", "La longitud define la nota."],
      ["🚑", "Efecto Doppler y aplicaciones", "Efecto Doppler: la frecuencia percibida cambia por el movimiento relativo entre la fuente y el observador (la sirena de una ambulancia que se acerca suena más aguda y más grave al alejarse). Aplicaciones: sonar, ecografía, radar, ecolocalización de murciélagos y delfines.", "La ecografía usa ultrasonidos para ver el interior del cuerpo sin radiación.", "El movimiento cambia la frecuencia."]
    ],
    mapa: ["Sonido", [["Onda", ["Mecánica", "Longitudinal", "343 m/s en el aire"]], ["Cualidades", ["Altura", "Intensidad", "Timbre"]], ["Instrumentos", ["Cuerdas", "Tubos"]], ["Aplicaciones", ["Doppler", "Sonar", "Ecografía"]]]],
    tarjetas: [["¿Viaja el sonido en el vacío?", "No."], ["¿Cuál es la velocidad del sonido en el aire a 20 °C?", "≈ 343 m/s."], ["¿De qué depende la altura del sonido?", "De la frecuencia."], ["¿En qué se mide la intensidad sonora?", "En decibelios (dB)."], ["¿Qué es el timbre?", "La cualidad que distingue un instrumento de otro."], ["¿Qué es el efecto Doppler?", "El cambio de frecuencia por el movimiento relativo."], ["¿Qué rango de frecuencias oye una persona?", "De unos 20 Hz a 20.000 Hz."]],
    videos: ["el sonido física once grado", "cualidades del sonido", "efecto Doppler explicado"],
    n: 14
  },
  {
    tema: "Luz y óptica geométrica",
    resumen: "La óptica geométrica estudia la luz como rayos que se propagan en línea recta. Con ella se explican la reflexión, la refracción, los espejos y las lentes, y funcionan instrumentos como la cámara, el microscopio y las gafas.",
    objetivos: ["Aplicarás las leyes de reflexión y refracción.", "Describirás espejos y lentes.", "Usarás la ecuación de lentes."],
    partes: [
      ["💡", "Naturaleza de la luz", "La luz es una onda electromagnética visible (≈ 400 a 700 nm). Viaja en el vacío a c = 3 × 10⁸ m/s. Se propaga en línea recta en medios homogéneos (rayos). Tiene comportamiento ondulatorio y de partículas (fotones).", "La luz del Sol tarda unos 8 minutos en llegar a la Tierra.", "Rayos de luz."],
      ["🪞", "Reflexión y espejos", "Ley de la reflexión: ángulo de incidencia = ángulo de reflexión. Espejo plano: imagen virtual, derecha y del mismo tamaño. Espejos esféricos: cóncavo (converge, f positivo) y convexo (diverge). Ecuación: 1/f = 1/p + 1/q; aumento m = −q/p.", "Los retrovisores laterales son convexos para ampliar el campo de visión.", "La imagen depende de dónde esté el objeto."],
      ["🔀", "Refracción", "Al pasar de un medio a otro, la luz cambia de dirección. Índice de refracción n = c/v. Ley de Snell: n₁·sen θ₁ = n₂·sen θ₂. Reflexión total interna: ocurre cuando la luz pasa de un medio más denso a uno menos denso con un ángulo mayor que el crítico (fibra óptica).", "Un lápiz parece doblado dentro de un vaso con agua. n agua ≈ 1,33; vidrio ≈ 1,5.", "Snell: n sen θ constante."],
      ["🔍", "Lentes", "- Convergente (convexa): une los rayos; corrige la hipermetropía.\n- Divergente (cóncava): separa los rayos; corrige la miopía.\nEcuación de las lentes delgadas: 1/f = 1/p + 1/q. Potencia en dioptrías: P = 1/f (m).", "Una lupa es una lente convergente.", "Convergente une, divergente separa."],
      ["🔭", "Instrumentos y el ojo", "El ojo funciona como una lente convergente que forma una imagen real e invertida en la retina. Instrumentos: cámara, lupa, microscopio, telescopio, proyector. La dispersión de la luz en un prisma muestra el arcoíris.", "El arcoíris se forma por refracción, dispersión y reflexión en gotas de agua.", "La óptica explica cómo vemos."]
    ],
    mapa: ["Óptica geométrica", [["Luz", ["Onda EM", "c = 3×10⁸ m/s"]], ["Reflexión", ["Espejos planos", "Espejos curvos"]], ["Refracción", ["Snell", "Reflexión total"]], ["Lentes", ["Convergente", "Divergente", "1/f = 1/p + 1/q"]]]],
    tarjetas: [["¿Cuál es la velocidad de la luz en el vacío?", "3 × 10⁸ m/s."], ["¿Qué dice la ley de la reflexión?", "El ángulo de incidencia es igual al de reflexión."], ["Ley de Snell.", "n₁ sen θ₁ = n₂ sen θ₂."], ["¿Qué es el índice de refracción?", "n = c/v."], ["¿Qué lente corrige la miopía?", "La divergente."], ["¿Qué es la reflexión total interna?", "Cuando toda la luz se refleja en la frontera, como en la fibra óptica."], ["Ecuación de las lentes delgadas.", "1/f = 1/p + 1/q."]],
    videos: ["óptica geométrica once grado", "leyes de reflexión y refracción", "lentes y espejos"],
    n: 16
  },
  {
    tema: "Electrostática: carga y campo eléctrico",
    resumen: "La electrostática estudia las cargas eléctricas en reposo. La ley de Coulomb describe la fuerza entre cargas, y el campo eléctrico es la región donde una carga ejerce fuerza sobre otras.",
    objetivos: ["Aplicarás la ley de Coulomb.", "Calcularás el campo eléctrico.", "Interpretarás líneas de campo."],
    partes: [
      ["⚡", "Carga eléctrica", "Existen cargas positivas (protones) y negativas (electrones). Se conserva y está cuantizada: e = 1,6 × 10⁻¹⁹ C. Unidad: coulomb (C). Cargas del mismo signo se repelen; de signo contrario, se atraen. Un cuerpo se carga por frotamiento, contacto o inducción. Conductores y aislantes.", "Frotar un globo con el cabello lo carga y atrae trocitos de papel.", "Signos iguales se repelen."],
      ["📐", "Ley de Coulomb", "F = k·|q₁·q₂|/r², con k = 9 × 10⁹ N·m²/C². La fuerza es proporcional al producto de las cargas e inversamente proporcional al cuadrado de la distancia. Es una fuerza de atracción o repulsión a lo largo de la línea que une las cargas.", "Dos cargas de 1 μC separadas 0,3 m: F = 9×10⁹ · 10⁻¹² / 0,09 = 0,1 N.", "Parecida a la gravitación, pero con repulsión."],
      ["🧲", "Campo eléctrico", "Es la fuerza por unidad de carga de prueba: E = F/q (N/C). Para una carga puntual Q: E = k·Q/r². Dirección: sale de cargas positivas y entra en negativas. Principio de superposición: el campo total es la suma vectorial.", "A 1 m de una carga de 1 nC: E = 9 N/C.", "E = F/q."],
      ["〰️", "Líneas de campo", "Son líneas que indican la dirección del campo. Salen de las cargas positivas y entran en las negativas; no se cruzan; su densidad indica la intensidad. Entre dos placas paralelas con cargas opuestas, el campo es uniforme: E = σ/ε₀ (o V/d).", "Entre las placas de un condensador, una carga positiva se acelera hacia la placa negativa.", "El campo es un mapa de fuerzas."],
      ["🌩️", "Aplicaciones y fenómenos", "Pararrayos, fotocopiadoras, impresoras láser, filtros electrostáticos, pintura electrostática y descargas eléctricas (rayos). La jaula de Faraday protege el interior de campos externos.", "Dentro de un carro, durante una tormenta, estás relativamente protegido por el efecto de jaula de Faraday.", "La electricidad estática en la vida diaria."]
    ],
    mapa: ["Electrostática", [["Carga", ["Positiva y negativa", "Cuantizada", "Conservada"]], ["Coulomb", ["F = k q₁q₂/r²"]], ["Campo eléctrico", ["E = F/q", "E = kQ/r²"]], ["Líneas", ["Salen de +", "Entran en −"]]]],
    tarjetas: [["¿Qué dice la ley de Coulomb?", "La fuerza entre cargas depende de su producto y del inverso del cuadrado de la distancia."], ["¿Cuál es el valor de k?", "9 × 10⁹ N·m²/C²."], ["Definición de campo eléctrico.", "Fuerza por unidad de carga."], ["¿Cuál es la carga del electrón?", "−1,6 × 10⁻¹⁹ C."], ["¿Cómo son las líneas de campo?", "Salen de las cargas positivas y entran en las negativas."], ["¿Qué hace un pararrayos?", "Conduce la descarga a tierra."], ["¿Qué ocurre entre cargas de igual signo?", "Se repelen."]],
    videos: ["electrostática ley de Coulomb", "campo eléctrico explicado", "líneas de campo eléctrico"],
    n: 16
  },
  {
    tema: "Potencial eléctrico y condensadores",
    resumen: "El potencial eléctrico es la energía potencial por unidad de carga; la diferencia de potencial es el voltaje. Los condensadores almacenan carga y energía en un campo eléctrico.",
    objetivos: ["Calcularás potencial y diferencia de potencial.", "Relacionarás campo y potencial.", "Analizarás condensadores en serie y paralelo."],
    partes: [
      ["🔋", "Energía y potencial", "Potencial V = U/q (voltios, 1 V = 1 J/C). Para una carga puntual: V = k·Q/r. La diferencia de potencial ΔV entre dos puntos es el trabajo por unidad de carga para moverla: W = q·ΔV. Las cargas positivas se mueven espontáneamente hacia menor potencial.", "Una carga de 2 C que atraviesa 12 V gana o cede 24 J.", "Voltaje = energía por carga."],
      ["↔️", "Campo y potencial", "En un campo uniforme: ΔV = E·d, es decir E = V/d (V/m = N/C). Las superficies equipotenciales son perpendiculares a las líneas de campo. El campo apunta hacia donde el potencial disminuye.", "Entre placas separadas 2 cm con 100 V: E = 5.000 V/m.", "E apunta del mayor al menor potencial."],
      ["🪫", "Condensadores", "Dos conductores separados por un aislante (dieléctrico). Capacidad: C = Q/V (faradio, F; en la práctica μF y pF). Para placas paralelas: C = ε₀·A/d. Un dieléctrico aumenta la capacidad.", "Una cámara fotográfica usa un condensador para el flash.", "Almacena carga."],
      ["🔗", "Asociaciones", "- En paralelo: C_eq = C₁ + C₂ + ... (mismo voltaje).\n- En serie: 1/C_eq = 1/C₁ + 1/C₂ + ... (misma carga).", "Dos condensadores de 4 μF en serie: C_eq = 2 μF; en paralelo: 8 μF.", "Opuesto a las resistencias."],
      ["⚡", "Energía almacenada y usos", "U = ½·C·V² = ½·Q·V = Q²/(2C). Aplicaciones: filtros de fuentes, sintonizadores de radio, pantallas táctiles, desfibriladores, memorias.", "Un condensador de 100 μF cargado a 10 V almacena 5 mJ.", "Energía en el campo."]
    ],
    mapa: ["Potencial y condensadores", [["Potencial", ["V = U/q", "V = kQ/r"]], ["Campo y potencial", ["E = V/d", "Equipotenciales"]], ["Condensador", ["C = Q/V", "Dieléctrico"]], ["Asociaciones", ["Serie", "Paralelo", "U = ½CV²"]]]],
    tarjetas: [["¿Qué es el potencial eléctrico?", "La energía potencial por unidad de carga."], ["¿En qué se mide?", "En voltios."], ["Relación entre E y V en un campo uniforme.", "E = V/d."], ["¿Qué es un condensador?", "Un dispositivo que almacena carga y energía."], ["Fórmula de la capacidad.", "C = Q/V."], ["Capacidad equivalente en paralelo.", "La suma de las capacidades."], ["Energía de un condensador.", "U = ½·C·V²."]],
    videos: ["potencial eléctrico y diferencia de potencial", "condensadores serie y paralelo", "energía almacenada en un condensador"],
    n: 16
  },
  {
    tema: "Corriente y circuitos eléctricos",
    resumen: "La corriente eléctrica es el flujo de cargas. En los circuitos se relacionan voltaje, corriente y resistencia mediante la ley de Ohm, y se analizan asociaciones en serie, paralelo y mixtas, junto con la potencia eléctrica.",
    objetivos: ["Aplicarás la ley de Ohm.", "Resolverás circuitos serie, paralelo y mixtos.", "Calcularás potencia y consumo de energía."],
    partes: [
      ["🔌", "Corriente y resistencia", "Corriente I = Δq/Δt (amperios). La resistencia R se opone al paso de corriente (ohmios). Depende del material, longitud y área: R = ρ·L/A. Ley de Ohm: V = I·R (en materiales óhmicos).", "Un cable más largo o más delgado tiene más resistencia.", "V = I R."],
      ["🔗", "Circuito en serie", "Una única trayectoria: la corriente es la misma, los voltajes se reparten y R_eq = R₁ + R₂ + ... Si un elemento falla, se interrumpe todo.", "Con 12 V y R₁ = 2 Ω, R₂ = 4 Ω: R_eq = 6 Ω; I = 2 A; V₁ = 4 V; V₂ = 8 V.", "Misma corriente."],
      ["🔀", "Circuito en paralelo", "Varias ramas: el voltaje es el mismo en todas, las corrientes se suman y 1/R_eq = 1/R₁ + 1/R₂ + ... La R_eq es menor que cualquiera.", "6 Ω y 3 Ω en paralelo: R_eq = 2 Ω. Las lámparas de una casa están en paralelo.", "Mismo voltaje."],
      ["🧮", "Leyes de Kirchhoff y circuitos mixtos", "- Ley de nodos: la suma de corrientes que entran a un nodo es igual a la que sale.\n- Ley de mallas: la suma de las variaciones de voltaje en una malla cerrada es cero.\nSe simplifican circuitos mixtos reduciendo paralelos y series paso a paso.", "Una rama de 2 Ω en serie con dos resistencias de 6 Ω en paralelo (3 Ω): R_eq = 5 Ω.", "Reduce por partes."],
      ["💡", "Potencia y energía", "P = V·I = I²R = V²/R (vatios). Energía: E = P·t (kWh en la factura). Ley de Joule: el calor disipado en una resistencia es Q = I²R t. Seguridad: fusibles, interruptores automáticos y puesta a tierra.", "Un bombillo de 60 W encendido 5 h consume 0,3 kWh.", "Ahorra energía y evita sobrecargas."]
    ],
    mapa: ["Circuitos", [["Ohm", ["V = I R"]], ["Serie", ["R suma", "I igual"]], ["Paralelo", ["V igual", "1/R suma"]], ["Potencia", ["P = V I", "kWh"]]]],
    tarjetas: [["Ley de Ohm.", "V = I·R."], ["¿Qué es la corriente eléctrica?", "El flujo de carga por unidad de tiempo."], ["R equivalente en serie.", "La suma de las resistencias."], ["¿Qué magnitud es igual en un paralelo?", "El voltaje."], ["Fórmula de la potencia eléctrica.", "P = V·I."], ["Ley de nodos de Kirchhoff.", "La suma de corrientes que entran es igual a la que sale."], ["¿Cuánto consume un aparato de 100 W en 10 h?", "1 kWh."]],
    videos: ["circuitos eléctricos serie y paralelo", "leyes de Kirchhoff", "potencia eléctrica y consumo"],
    n: 16
  },
  {
    tema: "Magnetismo e inducción electromagnética",
    resumen: "Las cargas en movimiento crean campos magnéticos y los campos magnéticos ejercen fuerza sobre ellas. La inducción electromagnética de Faraday explica los generadores, motores y transformadores.",
    objetivos: ["Calcularás fuerza magnética sobre cargas y corrientes.", "Aplicarás la ley de Faraday y Lenz.", "Explicarás generadores, motores y transformadores."],
    partes: [
      ["🧲", "Campo magnético y fuerza", "El campo magnético B se mide en teslas (T). Una carga q con velocidad v en un campo B sufre una fuerza F = q·v·B·sen θ, perpendicular a v y B (regla de la mano derecha). Describe trayectorias circulares con radio r = m·v/(q·B).", "Los ciclotrones y los espectrómetros de masas usan este principio.", "La fuerza magnética no realiza trabajo."],
      ["🔌", "Campos de corrientes", "Un hilo recto con corriente I produce a una distancia r: B = μ₀·I/(2πr). Un solenoide: B = μ₀·n·I. Fuerza sobre un conductor: F = B·I·L·sen θ. Dos cables paralelos con corrientes en el mismo sentido se atraen.", "Los electroimanes se basan en solenoides con núcleo de hierro.", "Corriente produce campo."],
      ["🔄", "Inducción de Faraday", "El flujo magnético Φ = B·A·cos θ (Wb). La fem inducida es ε = −ΔΦ/Δt. Una fem aparece cuando el flujo cambia: al mover un imán, variar B, el área o el ángulo.", "Mover un imán dentro de una bobina enciende un LED conectado.", "Flujo cambiante genera voltaje."],
      ["🚫", "Ley de Lenz", "El sentido de la corriente inducida se opone a la causa que la produce (el signo negativo). Es una consecuencia de la conservación de la energía. Explica el frenado magnético y las corrientes de Foucault.", "Un imán cae lentamente dentro de un tubo de cobre porque se inducen corrientes que lo frenan.", "La naturaleza se opone al cambio."],
      ["⚙️", "Aplicaciones", "- Generadores: giran bobinas en un campo magnético para producir corriente alterna (hidroeléctricas, eólicas).\n- Motores: convierten electricidad en movimiento.\n- Transformadores: V₁/V₂ = N₁/N₂ cambian el voltaje de la corriente alterna.\n- Inducción: cocinas, carga inalámbrica.", "Las redes eléctricas elevan el voltaje con transformadores para reducir pérdidas en el transporte.", "La electricidad que usamos."]
    ],
    mapa: ["Magnetismo e inducción", [["Fuerza magnética", ["F = qvB sen θ", "Órbitas circulares"]], ["Campos de corrientes", ["Hilo", "Solenoide"]], ["Inducción", ["Faraday", "Lenz"]], ["Aplicaciones", ["Generador", "Motor", "Transformador"]]]],
    tarjetas: [["¿En qué se mide el campo magnético?", "En teslas."], ["Fuerza magnética sobre una carga.", "F = q·v·B·sen θ."], ["Ley de Faraday.", "ε = −ΔΦ/Δt."], ["¿Qué dice la ley de Lenz?", "La corriente inducida se opone a la causa que la produce."], ["¿Qué hace un transformador?", "Cambia el voltaje de una corriente alterna."], ["¿Qué es el flujo magnético?", "Φ = B·A·cos θ."], ["¿Cómo funciona un generador?", "Una bobina gira en un campo magnético e induce corriente."]],
    videos: ["inducción electromagnética Faraday y Lenz", "fuerza magnética sobre cargas", "transformadores y generadores"],
    n: 16
  },
  {
    tema: "Introducción a la física moderna",
    resumen: "La física moderna surgió a principios del siglo XX con la relatividad y la mecánica cuántica. Explica fenómenos a velocidades cercanas a la de la luz y a escalas atómicas, y dio origen a tecnologías como láseres, semiconductores y energía nuclear.",
    objetivos: ["Explicarás los postulados de la relatividad especial.", "Describirás el efecto fotoeléctrico y la dualidad onda-partícula.", "Reconocerás aplicaciones y la física nuclear."],
    partes: [
      ["🚀", "Relatividad especial (Einstein, 1905)", "Postulados: 1) Las leyes de la física son iguales en todos los sistemas inerciales. 2) La velocidad de la luz en el vacío es constante (c ≈ 3 × 10⁸ m/s) para todos los observadores. Consecuencias: dilatación del tiempo, contracción de la longitud y equivalencia masa-energía: E = m·c².", "Los relojes de los satélites GPS necesitan correcciones relativistas para funcionar con precisión.", "Nada supera la velocidad de la luz."],
      ["🌌", "Relatividad general", "Einstein (1915) describió la gravedad como la curvatura del espacio-tiempo causada por la masa y la energía. Predicciones comprobadas: desviación de la luz por el Sol (1919), ondas gravitacionales (detectadas en 2015) y agujeros negros (imagen en 2019).", "Los objetos masivos curvan el espacio-tiempo como una bola pesada en una tela elástica.", "La gravedad como geometría."],
      ["💡", "Efecto fotoeléctrico y fotones", "Planck propuso que la energía se emite en cuantos: E = h·f (h = 6,63 × 10⁻³⁴ J·s). Einstein explicó el efecto fotoeléctrico (1905): la luz se comporta como partículas (fotones) que arrancan electrones de un metal si f supera una frecuencia umbral. Ecuación: E_c = h·f − φ.", "Las celdas solares y las cámaras digitales usan el efecto fotoeléctrico.", "La luz tiene naturaleza cuántica."],
      ["🌊", "Dualidad onda-partícula y cuántica", "De Broglie propuso que la materia también tiene comportamiento ondulatorio: λ = h/(m·v). El principio de incertidumbre de Heisenberg: no se pueden conocer con exactitud simultáneamente la posición y el momento de una partícula. Los electrones se describen por funciones de onda y probabilidades. Modelo atómico cuántico y orbitales.", "Los microscopios electrónicos usan la naturaleza ondulatoria de los electrones.", "Probabilidad, no certeza."],
      ["☢️", "Física nuclear y aplicaciones", "El núcleo se mantiene por la fuerza nuclear fuerte. Radiactividad: desintegraciones alfa, beta y gamma; vida media. Fisión (reactores, bombas) y fusión (el Sol). Aplicaciones: medicina nuclear, radioterapia, datación con carbono-14, energía. Riesgos y protección radiológica. Tecnologías cuánticas: láser, transistores, computadores cuánticos.", "El carbono-14 permite datar restos orgánicos de hasta unos 50.000 años.", "La física moderna transformó el mundo."]
    ],
    mapa: ["Física moderna", [["Relatividad", ["E = mc²", "Dilatación del tiempo", "Curvatura del espacio-tiempo"]], ["Cuántica", ["E = hf", "Fotón", "Incertidumbre"]], ["Dualidad", ["De Broglie", "Onda-partícula"]], ["Nuclear", ["Fisión", "Fusión", "Radiactividad"]]]],
    tarjetas: [["¿Qué postula la relatividad sobre la velocidad de la luz?", "Que es constante para todos los observadores."], ["¿Qué expresa E = mc²?", "La equivalencia entre masa y energía."], ["¿Qué es un fotón?", "Un cuanto de luz."], ["¿Qué explicó Einstein con el efecto fotoeléctrico?", "Que la luz se comporta como partículas."], ["¿Qué dice el principio de incertidumbre?", "No se pueden conocer con exactitud a la vez posición y momento."], ["¿Qué es la fisión nuclear?", "La ruptura de un núcleo pesado en otros más ligeros."], ["¿Qué proceso alimenta al Sol?", "La fusión nuclear."]],
    videos: ["introducción a la física moderna", "relatividad especial explicada", "efecto fotoeléctrico y dualidad onda-partícula"],
    n: 14
  }
];
