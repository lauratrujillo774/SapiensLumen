// Teoría de Química, grado 10°. Formato compacto.
export const area = "Quimica";

export const temas = [
  {
    tema: "La materia y la medición",
    resumen: "La química estudia la materia y sus transformaciones. Se clasifica en sustancias puras y mezclas, tiene propiedades medibles y puede cambiar de estado o de composición.",
    objetivos: ["Clasificarás la materia.", "Distinguirás propiedades y cambios físicos y químicos.", "Medirás y convertirás magnitudes."],
    partes: [
      ["🧪", "Clasificación de la materia", "- Sustancias puras: elementos (O₂, Fe) y compuestos (H₂O, NaCl).\n- Mezclas: homogéneas o soluciones (agua con sal) y heterogéneas (arena con agua).\nLas mezclas se separan por métodos físicos; los compuestos, solo por métodos químicos.", "El aire es una mezcla homogénea de gases; el agua pura es un compuesto.", "Pura o mezcla."],
      ["🔍", "Propiedades", "- Físicas: se observan sin cambiar la composición (color, densidad, punto de fusión, solubilidad).\n- Químicas: describen cómo reacciona (inflamabilidad, oxidación).\n- Extensivas dependen de la cantidad (masa, volumen); intensivas, no (densidad, temperatura de ebullición).", "La densidad del agua es 1 g/mL, sin importar la cantidad.", "Intensivas identifican sustancias."],
      ["🔁", "Cambios", "- Físicos: cambian de forma o estado, no de sustancia (fusión, evaporación).\n- Químicos: se forman sustancias nuevas (combustión, oxidación, fermentación).\nIndicios: gas, color, olor, luz, calor, precipitado.", "Quemar papel es un cambio químico; romperlo es físico.", "Sustancia nueva = cambio químico."],
      ["🌡️", "Estados y cambios de estado", "Sólido, líquido, gaseoso (y plasma). Cambios: fusión, solidificación, vaporización (evaporación y ebullición), condensación, sublimación y deposición. Se relacionan con la energía y las fuerzas entre partículas.", "El hielo seco se sublima: pasa de sólido a gas.", "La energía cambia el estado."],
      ["📏", "Medición y densidad", "Se usan unidades del SI. La densidad ρ = m/V. Para separar mezclas: filtración, decantación, destilación, cristalización, cromatografía, magnetismo.", "Un bloque de 200 g y 50 cm³ tiene ρ = 4 g/cm³.", "Elige el método según la mezcla."]
    ],
    mapa: ["Materia", [["Clasificación", ["Sustancias puras", "Mezclas"]], ["Propiedades", ["Físicas", "Químicas"]], ["Cambios", ["Físicos", "Químicos"]], ["Medición", ["Densidad", "SI"]]]],
    tarjetas: [["¿Qué es una mezcla homogénea?", "Una mezcla de aspecto uniforme (solución)."], ["¿Qué es un compuesto?", "Una sustancia formada por elementos combinados químicamente."], ["¿Qué es un cambio químico?", "Uno en que se forman sustancias nuevas."], ["¿Qué es la densidad?", "Masa por unidad de volumen."], ["¿Cómo se separa una mezcla de agua y sal?", "Por evaporación o destilación."], ["¿Qué es la sublimación?", "Paso de sólido a gas."], ["Da una propiedad intensiva.", "La densidad."]],
    videos: ["clasificación de la materia", "cambios físicos y químicos", "métodos de separación de mezclas"],
    n: 12
  },
  {
    tema: "Estructura atómica y modelos",
    resumen: "El átomo está formado por protones, neutrones y electrones. A lo largo de la historia, los modelos atómicos han evolucionado desde Dalton hasta el modelo cuántico actual.",
    objetivos: ["Describirás las partículas subatómicas.", "Calcularás número atómico, de masa e isótopos.", "Compararás los modelos atómicos."],
    partes: [
      ["⚛️", "Partículas subatómicas", "- Protón (+): en el núcleo; define el elemento (número atómico Z).\n- Neutrón (0): en el núcleo.\n- Electrón (−): alrededor del núcleo; masa casi despreciable.\nEn un átomo neutro, protones = electrones.", "El carbono tiene Z = 6: 6 protones y 6 electrones.", "Z = número de protones."],
      ["🔢", "Número de masa e isótopos", "El número de masa A = protones + neutrones. Los isótopos son átomos del mismo elemento con distinto número de neutrones. Un ion es un átomo con carga: catión (pierde electrones, +) y anión (gana electrones, −).", "El carbono-12 y el carbono-14 son isótopos: ambos con 6 protones; tienen 6 y 8 neutrones.", "Isótopos: distinto A, igual Z."],
      ["📜", "Modelos atómicos (I)", "- Dalton (1803): átomos indivisibles como esferas.\n- Thomson (1897): descubre el electrón; «pudín de pasas».\n- Rutherford (1911): núcleo pequeño y denso con electrones alrededor (experimento de la lámina de oro).", "Casi todas las partículas alfa atravesaron la lámina: el átomo está casi vacío.", "Del átomo macizo al núcleo."],
      ["📜", "Modelos atómicos (II)", "- Bohr (1913): electrones en órbitas con niveles de energía definidos; al saltar emiten o absorben luz.\n- Modelo cuántico (Schrödinger, Heisenberg): los electrones se describen por orbitales (probabilidad de encontrarlos), no por trayectorias.", "Los colores de los fuegos artificiales provienen de saltos electrónicos.", "El electrón es una nube de probabilidad."],
      ["🧮", "Cálculos", "Neutrones = A − Z. Electrones = Z − carga del ion. La masa atómica de un elemento es el promedio ponderado de sus isótopos.", "²³Na⁺: Z = 11, A = 23 → 12 neutrones; 10 electrones.", "Resta para hallar neutrones."]
    ],
    mapa: ["Estructura atómica", [["Partículas", ["Protón", "Neutrón", "Electrón"]], ["Números", ["Z", "A", "Isótopos"]], ["Modelos", ["Dalton", "Thomson", "Rutherford", "Bohr"]], ["Cuántico", ["Orbitales", "Probabilidad"]]]],
    tarjetas: [["¿Qué define el número atómico?", "El número de protones."], ["¿Cómo se calcula A?", "Protones + neutrones."], ["¿Qué son los isótopos?", "Átomos del mismo elemento con distinto número de neutrones."], ["¿Quién descubrió el electrón?", "Thomson."], ["¿Qué demostró Rutherford?", "Que el átomo tiene un núcleo pequeño y denso."], ["¿Qué postuló Bohr?", "Niveles de energía definidos para los electrones."], ["¿Cuántos electrones tiene el Na⁺ (Z = 11)?", "10."]],
    videos: ["modelos atómicos historia", "partículas subatómicas número atómico", "isótopos e iones"],
    n: 14
  },
  {
    tema: "Configuración electrónica",
    resumen: "La configuración electrónica describe cómo se distribuyen los electrones en los niveles y subniveles de energía de un átomo. Determina las propiedades químicas del elemento.",
    objetivos: ["Reconocerás números cuánticos y subniveles.", "Escribirás configuraciones electrónicas.", "Relacionarás la configuración con la tabla periódica."],
    partes: [
      ["🔢", "Niveles y subniveles", "Los electrones ocupan niveles (n = 1, 2, 3…) y subniveles s, p, d, f. Capacidad máxima: s = 2, p = 6, d = 10, f = 14 electrones. El nivel n tiene como máximo 2n² electrones.", "El nivel 1 tiene solo el subnivel s (2 e⁻); el nivel 2 tiene s y p (8 e⁻).", "s, p, d, f."],
      ["📋", "Principios", "- Aufbau: se llenan primero los subniveles de menor energía.\n- Pauli: un orbital admite máximo 2 electrones con espines opuestos.\n- Hund: en orbitales de igual energía, los electrones ocupan uno a uno antes de aparearse.", "En un subnivel p (3 orbitales), los 3 primeros electrones van uno en cada orbital.", "Mínima energía y máxima dispersión."],
      ["🧭", "Orden de llenado", "1s 2s 2p 3s 3p 4s 3d 4p 5s 4d 5p 6s 4f 5d 6p 7s 5f 6d 7p (regla de la diagonal o de Madelung).", "El 4s se llena antes que el 3d.", "Sigue la diagonal."],
      ["✍️", "Ejemplos", "- H (Z=1): 1s¹\n- O (Z=8): 1s² 2s² 2p⁴\n- Na (Z=11): 1s² 2s² 2p⁶ 3s¹ ([Ne] 3s¹)\n- Cl (Z=17): [Ne] 3s² 3p⁵\n- Fe (Z=26): [Ar] 4s² 3d⁶\nLos electrones de valencia son los del último nivel.", "El Cl tiene 7 electrones de valencia.", "La notación [gas noble] abrevia."],
      ["🧪", "Configuración e iones", "Un catión pierde electrones del nivel más externo; un anión gana. Los iones tienden a alcanzar la configuración de un gas noble (8 electrones, regla del octeto).", "Na⁺: 1s² 2s² 2p⁶ (como el neón). Cl⁻: [Ar].", "Octeto: estabilidad."]
    ],
    mapa: ["Configuración electrónica", [["Subniveles", ["s: 2", "p: 6", "d: 10", "f: 14"]], ["Principios", ["Aufbau", "Pauli", "Hund"]], ["Notación", ["1s² 2s² 2p⁶", "[Ne] 3s¹"]], ["Valencia", ["Último nivel", "Octeto"]]]],
    tarjetas: [["¿Cuántos electrones cabe en un subnivel p?", "6."], ["Configuración del oxígeno.", "1s² 2s² 2p⁴."], ["¿Qué dice el principio de Pauli?", "Un orbital admite máximo 2 electrones con espín opuesto."], ["¿Qué son los electrones de valencia?", "Los del nivel más externo."], ["¿Qué subnivel se llena después del 3p?", "El 4s."], ["¿Cuál es la regla del octeto?", "Los átomos tienden a tener 8 electrones en su último nivel."], ["Configuración del Na⁺.", "1s² 2s² 2p⁶."]],
    videos: ["configuración electrónica paso a paso", "principio de Aufbau Pauli Hund", "electrones de valencia"],
    n: 14
  },
  {
    tema: "Tabla periódica y propiedades periódicas",
    resumen: "La tabla periódica organiza los elementos por número atómico creciente. Su posición revela la configuración electrónica y permite predecir propiedades como el radio atómico, la electronegatividad y la energía de ionización.",
    objetivos: ["Ubicarás elementos por grupo y período.", "Reconocerás familias.", "Predecirás tendencias periódicas."],
    partes: [
      ["🗂️", "Organización", "Los períodos (filas, 1 a 7) indican el nivel de energía más externo. Los grupos (columnas, 1 a 18) agrupan elementos con igual número de electrones de valencia. Bloques: s, p, d y f. Mendeléyev la propuso en 1869; hoy se ordena por Z (Moseley).", "El sodio está en el período 3 y grupo 1.", "Período = nivel; grupo = valencia."],
      ["👪", "Familias", "- Metales alcalinos (grupo 1): muy reactivos.\n- Alcalinotérreos (grupo 2).\n- Halógenos (grupo 17): muy reactivos, forman sales.\n- Gases nobles (grupo 18): muy estables.\n- Metales de transición (grupos 3-12).\n- Metaloides: propiedades intermedias.", "Los halógenos (F, Cl, Br, I) tienen 7 electrones de valencia.", "Familia = propiedades parecidas."],
      ["📏", "Radio atómico", "Aumenta hacia abajo en un grupo (más niveles) y disminuye hacia la derecha en un período (mayor carga nuclear efectiva).", "El cesio tiene un radio mayor que el litio; el flúor es más pequeño que el litio.", "Crece ↓, decrece →."],
      ["⚡", "Energía de ionización y electroafinidad", "- Energía de ionización: energía para quitar un electrón; aumenta hacia la derecha y hacia arriba.\n- Afinidad electrónica: energía liberada al ganar un electrón; mayor en los halógenos.", "Los gases nobles tienen las mayores energías de ionización.", "Más difícil quitar electrones a la derecha y arriba."],
      ["🧲", "Electronegatividad y carácter metálico", "La electronegatividad (capacidad de atraer electrones en un enlace) aumenta hacia la derecha y arriba (el flúor es el más electronegativo). El carácter metálico aumenta hacia la izquierda y abajo.", "El flúor (4,0 en la escala de Pauling) es el elemento más electronegativo.", "Flúor: arriba a la derecha."]
    ],
    mapa: ["Tabla periódica", [["Estructura", ["Períodos", "Grupos", "Bloques"]], ["Familias", ["Alcalinos", "Halógenos", "Gases nobles"]], ["Radio atómico", ["Crece ↓", "Decrece →"]], ["Otras", ["Ionización", "Electronegatividad"]]]],
    tarjetas: [["¿Qué indica el período?", "El número de niveles de energía."], ["¿Qué comparten los elementos de un grupo?", "El mismo número de electrones de valencia."], ["¿Qué elemento es el más electronegativo?", "El flúor."], ["¿Cómo varía el radio atómico en un grupo hacia abajo?", "Aumenta."], ["¿Cómo varía la energía de ionización en un período?", "Aumenta hacia la derecha."], ["¿Qué familia es la más estable?", "Los gases nobles."], ["¿Quién propuso la primera tabla periódica?", "Mendeléyev."]],
    videos: ["tabla periódica propiedades periódicas", "radio atómico electronegatividad", "familias de la tabla periódica"],
    n: 14
  },
  {
    tema: "Enlace químico: iónico, covalente y metálico",
    resumen: "El enlace químico es la fuerza que une átomos. Puede formarse por transferencia de electrones (iónico), por compartirlos (covalente) o por una nube de electrones compartida entre metales (metálico).",
    objetivos: ["Distinguirás los tres tipos de enlace.", "Representarás estructuras de Lewis.", "Relacionarás el enlace con las propiedades."],
    partes: [
      ["🔌", "Regla del octeto y Lewis", "Los átomos se enlazan para alcanzar 8 electrones de valencia (excepto el H con 2). Las estructuras de Lewis representan los electrones de valencia con puntos y los enlaces con rayas.", "En H₂O, el O comparte un par con cada H y le quedan 2 pares libres.", "Compartir o transferir para completar el octeto."],
      ["⚡", "Enlace iónico", "Se da entre un metal y un no metal con gran diferencia de electronegatividad (> 1,7). El metal cede electrones (catión) y el no metal los gana (anión); se atraen por fuerzas electrostáticas. Forman redes cristalinas. Propiedades: sólidos con altos puntos de fusión, solubles en agua, conducen la electricidad fundidos o disueltos.", "NaCl: Na → Na⁺ + e⁻; Cl + e⁻ → Cl⁻.", "Transferencia de electrones."],
      ["🤝", "Enlace covalente", "Se da entre no metales que comparten pares de electrones. Puede ser:\n- Sencillo, doble o triple.\n- Polar: electronegatividades distintas (H–Cl).\n- Apolar: electronegatividades iguales o parecidas (H–H, O=O).\nPropiedades: gases, líquidos o sólidos de bajo punto de fusión, poca conductividad.", "El N₂ tiene un triple enlace (N≡N), muy fuerte.", "Compartir electrones."],
      ["🪙", "Enlace metálico", "Los átomos metálicos ceden sus electrones de valencia a una «nube» deslocalizada que mantiene unidos a los cationes. Explica el brillo, la maleabilidad, la ductilidad y la conductividad eléctrica y térmica.", "El cobre se usa en cables porque conduce muy bien la electricidad.", "Mar de electrones."],
      ["📊", "Resumen y polaridad", "Según la diferencia de electronegatividad: > 1,7 iónico; entre 0,4 y 1,7 covalente polar; < 0,4 covalente apolar. La geometría molecular (por ejemplo, la forma angular del agua) determina si la molécula es polar.", "El CO₂ tiene enlaces polares, pero es una molécula apolar por su forma lineal simétrica.", "Diferencia de electronegatividad decide el tipo."]
    ],
    mapa: ["Enlace químico", [["Iónico", ["Metal + no metal", "Transferencia"]], ["Covalente", ["No metales", "Compartir", "Polar y apolar"]], ["Metálico", ["Mar de electrones"]], ["Herramientas", ["Octeto", "Lewis", "Electronegatividad"]]]],
    tarjetas: [["¿Qué enlace hay en NaCl?", "Iónico."], ["¿Qué enlace hay entre dos átomos de H?", "Covalente apolar."], ["¿Qué explica el enlace metálico?", "La conductividad y la maleabilidad de los metales."], ["¿Qué es un enlace covalente polar?", "El que comparte electrones de forma desigual."], ["¿Cuántos pares comparte el N₂?", "Tres (triple enlace)."], ["¿Qué es la regla del octeto?", "La tendencia a tener 8 electrones de valencia."], ["¿Por qué el agua es polar?", "Por su forma angular y enlaces polares."]],
    videos: ["enlace iónico covalente y metálico", "estructuras de Lewis", "polaridad de las moléculas"],
    n: 14
  },
  {
    tema: "Fuerzas intermoleculares",
    resumen: "Las fuerzas intermoleculares son las atracciones entre moléculas. Determinan los puntos de fusión y de ebullición, la solubilidad y otras propiedades de las sustancias covalentes.",
    objetivos: ["Reconocerás los tipos de fuerzas intermoleculares.", "Relacionarlas con las propiedades físicas.", "Explicarás el comportamiento del agua."],
    partes: [
      ["🧲", "Qué son", "Son atracciones entre moléculas (mucho más débiles que los enlaces). A mayor fuerza intermolecular, mayores puntos de fusión y ebullición. Se clasifican según la polaridad.", "El agua hierve a 100 °C y el metano (CH₄) a −162 °C porque sus fuerzas son distintas.", "Más fuerza, más temperatura de ebullición."],
      ["🌫️", "Fuerzas de dispersión de London", "Existen en todas las moléculas, polares y apolares. Se deben a dipolos instantáneos. Aumentan con el tamaño y la masa de la molécula.", "Los halógenos: F₂ y Cl₂ son gases; Br₂ es líquido; I₂ es sólido.", "Mayor molécula, mayor dispersión."],
      ["➕➖", "Dipolo-dipolo", "Entre moléculas polares: el extremo positivo de una atrae el negativo de otra.", "El HCl y la acetona tienen fuerzas dipolo-dipolo.", "Polar con polar."],
      ["💧", "Puentes de hidrógeno", "Son una forma especial y fuerte de dipolo-dipolo. Se dan cuando un H unido a F, O o N es atraído por un par libre de F, O o N de otra molécula. Explican el alto punto de ebullición del agua, el hielo flotante y la estructura del ADN.", "El hielo es menos denso que el agua líquida porque los puentes de hidrógeno forman una estructura abierta.", "H unido a F, O o N."],
      ["🔍", "Consecuencias", "- Solubilidad: «semejante disuelve a semejante» (polar con polar, apolar con apolar).\n- Tensión superficial y capilaridad del agua.\n- Viscosidad y estado físico.", "El aceite (apolar) no se mezcla con el agua (polar).", "Semejante disuelve a semejante."]
    ],
    mapa: ["Fuerzas intermoleculares", [["London", ["Todas las moléculas"]], ["Dipolo-dipolo", ["Moléculas polares"]], ["Puentes de hidrógeno", ["F, O, N", "Agua", "ADN"]], ["Efectos", ["Punto de ebullición", "Solubilidad"]]]],
    tarjetas: [["¿Qué son las fuerzas intermoleculares?", "Atracciones entre moléculas."], ["¿Qué fuerza existe en todas las moléculas?", "La de dispersión de London."], ["¿Qué es un puente de hidrógeno?", "Una atracción fuerte entre H unido a F, O o N y un par libre."], ["¿Por qué el hielo flota?", "Por la estructura abierta de los puentes de hidrógeno."], ["¿Qué significa «semejante disuelve a semejante»?", "Lo polar disuelve lo polar y lo apolar lo apolar."], ["¿Por qué el agua tiene alto punto de ebullición?", "Por sus puentes de hidrógeno."], ["¿Aumenta London con el tamaño molecular?", "Sí."]],
    videos: ["fuerzas intermoleculares", "puentes de hidrógeno agua", "fuerzas de London dipolo-dipolo"],
    n: 12
  },
  {
    tema: "Nomenclatura inorgánica",
    resumen: "La nomenclatura inorgánica da nombre y fórmula a los compuestos: óxidos, hidróxidos, ácidos, sales e hidruros. Se usan números de oxidación y reglas de la IUPAC.",
    objetivos: ["Usarás números de oxidación.", "Nombrarás compuestos inorgánicos.", "Escribirás fórmulas a partir del nombre."],
    partes: [
      ["🔢", "Números de oxidación", "Son las cargas aparentes. Reglas: elemento libre = 0; H = +1 (−1 en hidruros metálicos); O = −2 (−1 en peróxidos); metales grupo 1 = +1; grupo 2 = +2; halógenos = −1 (en sales binarias). La suma en un compuesto neutro es cero.", "En H₂SO₄: 2(+1) + S + 4(−2) = 0 → S = +6.", "La suma es cero."],
      ["🔥", "Óxidos", "- Óxidos metálicos (básicos): metal + O. Fe₂O₃: óxido de hierro (III); CaO: óxido de calcio.\n- Óxidos no metálicos (ácidos): no metal + O. CO₂: dióxido de carbono; SO₃: trióxido de azufre.\nLa nomenclatura de Stock indica el número de oxidación con números romanos; la sistemática, con prefijos (mono, di, tri…).", "N₂O₅: pentóxido de dinitrógeno.", "Prefijos o números romanos."],
      ["🧂", "Hidróxidos e hidruros", "Hidróxidos: metal + OH⁻. NaOH: hidróxido de sodio; Fe(OH)₃: hidróxido de hierro (III). Hidruros: metal + H (NaH, hidruro de sodio); hidruros no metálicos: NH₃ (amoníaco), H₂O.", "Ca(OH)₂: hidróxido de calcio.", "Hidróxido: grupo OH."],
      ["🍋", "Ácidos", "- Hidrácidos: H + no metal (HCl: ácido clorhídrico; H₂S: ácido sulfhídrico).\n- Oxácidos: H + no metal + O. H₂SO₄: ácido sulfúrico; HNO₃: ácido nítrico; H₃PO₄: ácido fosfórico; H₂CO₃: ácido carbónico; HClO: ácido hipocloroso.\nSufijos: -oso (menor oxidación) / -ico (mayor).", "HNO₂: ácido nitroso; HNO₃: ácido nítrico.", "oso < ico."],
      ["🧪", "Sales", "Sales binarias: metal + no metal (NaCl: cloruro de sodio). Oxisales: provienen de oxácidos (-ico → -ato; -oso → -ito). Ejemplos: CaCO₃ carbonato de calcio; Na₂SO₄ sulfato de sodio; KNO₃ nitrato de potasio; NaClO hipoclorito de sodio.", "CuSO₄: sulfato de cobre (II).", "Ácido -ico forma sal -ato."]
    ],
    mapa: ["Nomenclatura inorgánica", [["Oxidación", ["Reglas", "Suma 0"]], ["Óxidos", ["Metálicos", "No metálicos"]], ["Hidróxidos e hidruros", ["OH⁻", "NaH"]], ["Ácidos y sales", ["Hidrácidos", "Oxácidos", "-ato / -ito"]]]],
    tarjetas: [["¿Cómo se llama el Fe₂O₃?", "Óxido de hierro (III)."], ["¿Cómo se llama el H₂SO₄?", "Ácido sulfúrico."], ["¿Cómo se llama el CaCO₃?", "Carbonato de calcio."], ["¿Cómo se llama el NaOH?", "Hidróxido de sodio."], ["¿Cómo se llama el NH₃?", "Amoníaco."], ["¿Qué número de oxidación tiene el O normalmente?", "−2."], ["¿Qué sufijo tiene la sal de un ácido -ico?", "-ato."]],
    videos: ["nomenclatura inorgánica IUPAC", "óxidos hidróxidos ácidos y sales", "número de oxidación cómo calcular"],
    n: 16
  },
  {
    tema: "Reacciones químicas y balanceo",
    resumen: "Una reacción química transforma reactivos en productos. Debe cumplirse la conservación de la masa, por lo que las ecuaciones se balancean. Se clasifican en varios tipos, entre ellos las redox.",
    objetivos: ["Balancearás ecuaciones por tanteo y redox.", "Clasificarás reacciones.", "Identificarás agentes oxidantes y reductores."],
    partes: [
      ["⚗️", "Ecuaciones químicas", "Reactivos → productos, con estados (s, l, g, ac). Los coeficientes indican las proporciones. Deben conservarse los átomos de cada elemento y la carga.", "2H₂(g) + O₂(g) → 2H₂O(l)", "Átomos iguales a ambos lados."],
      ["🔢", "Balanceo por tanteo", "1) Cuenta átomos de cada elemento. 2) Ajusta coeficientes (no subíndices). 3) Deja H y O para el final. 4) Verifica.", "C₃H₈ + 5O₂ → 3CO₂ + 4H₂O\nFe + O₂ → Fe₂O₃ se balancea como 4Fe + 3O₂ → 2Fe₂O₃.", "Prueba y verifica."],
      ["🔁", "Tipos de reacciones", "- Síntesis: A + B → AB.\n- Descomposición: AB → A + B.\n- Desplazamiento simple: A + BC → AC + B.\n- Doble desplazamiento: AB + CD → AD + CB (incluye neutralización y precipitación).\n- Combustión: CxHy + O₂ → CO₂ + H₂O.", "Zn + 2HCl → ZnCl₂ + H₂ es un desplazamiento simple.", "Reconoce el patrón."],
      ["⚡", "Reacciones redox", "Hay transferencia de electrones. Oxidación: pérdida de electrones (aumenta el número de oxidación). Reducción: ganancia de electrones (disminuye). El agente oxidante se reduce; el reductor se oxida.", "Fe + Cu²⁺ → Fe²⁺ + Cu: el hierro se oxida y el cobre se reduce.", "OIL RIG: Oxidación pierde, Reducción gana."],
      ["⚖️", "Balanceo redox (método del ion-electrón)", "1) Asigna números de oxidación. 2) Escribe semirreacciones de oxidación y reducción. 3) Balancea átomos y cargas con electrones. 4) Iguala los electrones y suma. 5) Verifica.", "Zn → Zn²⁺ + 2e⁻ y Cu²⁺ + 2e⁻ → Cu: Zn + Cu²⁺ → Zn²⁺ + Cu.", "Los electrones ganados = perdidos."]
    ],
    mapa: ["Reacciones químicas", [["Ecuación", ["Reactivos", "Productos", "Coeficientes"]], ["Tanteo", ["Átomos iguales"]], ["Tipos", ["Síntesis", "Descomposición", "Combustión"]], ["Redox", ["Oxidación", "Reducción", "Ion-electrón"]]]],
    tarjetas: [["¿Qué se conserva en una ecuación balanceada?", "Los átomos de cada elemento."], ["Balancea CH₄ + O₂ → CO₂ + H₂O.", "CH₄ + 2O₂ → CO₂ + 2H₂O."], ["¿Qué es la oxidación?", "La pérdida de electrones."], ["¿Qué es un agente oxidante?", "El que gana electrones y se reduce."], ["¿Qué es una reacción de síntesis?", "A + B → AB."], ["¿Qué es una combustión?", "Reacción de un combustible con oxígeno."], ["¿Qué son los coeficientes?", "Los números que indican las proporciones."]],
    videos: ["balanceo de ecuaciones químicas", "reacciones redox ion-electrón", "tipos de reacciones químicas"],
    n: 16
  },
  {
    tema: "El mol y la estequiometría",
    resumen: "El mol es la unidad de cantidad de sustancia. La estequiometría usa el mol y las ecuaciones balanceadas para calcular cantidades de reactivos y productos, incluidos el reactivo límite y el rendimiento.",
    objetivos: ["Convertirás entre masa, moles y partículas.", "Resolverás cálculos estequiométricos.", "Determinarás reactivo límite y rendimiento."],
    partes: [
      ["🔬", "El mol", "Un mol contiene 6,022 × 10²³ partículas (número de Avogadro). La masa molar (g/mol) es la masa de un mol; se obtiene sumando las masas atómicas.", "H₂O: 2(1) + 16 = 18 g/mol. CO₂: 12 + 2(16) = 44 g/mol.", "1 mol = 6,022 × 10²³."],
      ["🔄", "Conversiones", "- moles = masa / masa molar.\n- partículas = moles × 6,022 × 10²³.\n- Para gases en condiciones normales (CN: 0 °C y 1 atm), 1 mol ocupa 22,4 L.", "54 g de agua = 3 mol = 1,8 × 10²⁴ moléculas.", "El mol es el puente."],
      ["🧮", "Cálculos estequiométricos", "Se usan los coeficientes como relación molar: masa A → moles A → moles B → masa B.", "2H₂ + O₂ → 2H₂O. ¿Cuánta agua con 8 g de H₂?\n- 8/2 = 4 mol H₂ → 4 mol H₂O → 4 × 18 = 72 g.", "Sigue la ruta masa-mol-mol-masa."],
      ["🎯", "Reactivo límite", "Es el reactivo que se agota primero y limita el producto. Se calcula el producto que daría cada reactivo; el menor valor indica el límite.", "Con 2 mol de N₂ y 3 mol de H₂ en N₂ + 3H₂ → 2NH₃: el H₂ alcanza para 2 mol de NH₃; el N₂, para 4. El límite es H₂.", "El que produce menos."],
      ["📈", "Rendimiento y pureza", "Rendimiento % = (real / teórico) × 100. Pureza % = (masa pura / masa total) × 100. En la industria se busca maximizar el rendimiento y reducir residuos.", "Si el rendimiento teórico es 50 g y se obtienen 40 g: 80 %.", "Real ≤ teórico."]
    ],
    mapa: ["Mol y estequiometría", [["Mol", ["6,022 × 10²³", "Masa molar", "22,4 L en CN"]], ["Conversiones", ["g ↔ mol", "mol ↔ partículas"]], ["Ecuación", ["Relación molar"]], ["Extras", ["Reactivo límite", "Rendimiento"]]]],
    tarjetas: [["¿Cuántas partículas hay en un mol?", "6,022 × 10²³."], ["¿Qué volumen ocupa un mol de gas en CN?", "22,4 L."], ["Masa molar del CO₂.", "44 g/mol."], ["¿Qué es el reactivo límite?", "El que se agota primero."], ["Fórmula del rendimiento.", "(real/teórico) × 100."], ["¿Cuántos moles hay en 36 g de agua?", "2."], ["¿Qué usa la estequiometría de la ecuación?", "Los coeficientes como relación molar."]],
    videos: ["mol y estequiometría ejercicios", "reactivo límite y rendimiento", "masa molar y número de Avogadro"],
    n: 16
  },
  {
    tema: "Leyes de los gases",
    resumen: "Los gases se comportan de manera predecible según la presión, el volumen, la temperatura y la cantidad. Las leyes de Boyle, Charles y Gay-Lussac, y la ecuación del gas ideal, describen estas relaciones.",
    objetivos: ["Aplicarás las leyes de Boyle, Charles y Gay-Lussac.", "Usarás la ecuación PV = nRT.", "Interpretarás la teoría cinética."],
    partes: [
      ["🎈", "Teoría cinética", "Los gases están formados por partículas en movimiento aleatorio, con colisiones elásticas y fuerzas de atracción despreciables. La temperatura es proporcional a la energía cinética promedio. La presión es el resultado de los choques con las paredes. Las temperaturas deben expresarse en kelvin: K = °C + 273.", "0 °C = 273 K; 25 °C = 298 K.", "Siempre usa kelvin."],
      ["📉", "Ley de Boyle", "A temperatura constante, la presión y el volumen son inversamente proporcionales: P₁V₁ = P₂V₂.", "Un gas a 1 atm y 4 L se comprime a 2 L: P₂ = 2 atm.", "Menos volumen, más presión."],
      ["📈", "Ley de Charles", "A presión constante, el volumen es directamente proporcional a la temperatura (K): V₁/T₁ = V₂/T₂.", "Un globo de 2 L a 300 K se calienta a 600 K: V₂ = 4 L.", "Más temperatura, más volumen."],
      ["🌡️", "Ley de Gay-Lussac", "A volumen constante, la presión es directamente proporcional a la temperatura (K): P₁/T₁ = P₂/T₂.", "Una lata cerrada a 300 K y 1 atm se calienta a 450 K: P₂ = 1,5 atm. Por eso no se deben calentar envases cerrados.", "Más temperatura, más presión."],
      ["🧮", "Gas ideal y ley combinada", "Ley combinada: P₁V₁/T₁ = P₂V₂/T₂. Ecuación del gas ideal: PV = nRT, con R = 0,082 atm·L/(mol·K).", "¿Volumen de 1 mol a 1 atm y 273 K? V = nRT/P = 1·0,082·273/1 ≈ 22,4 L.", "PV = nRT."]
    ],
    mapa: ["Leyes de los gases", [["Boyle", ["P y V inversos"]], ["Charles", ["V y T directos"]], ["Gay-Lussac", ["P y T directos"]], ["Gas ideal", ["PV = nRT", "R = 0,082"]]]],
    tarjetas: [["¿Qué dice la ley de Boyle?", "A T constante, P y V son inversamente proporcionales."], ["¿Qué dice la ley de Charles?", "A P constante, V es proporcional a T."], ["¿Qué dice la ley de Gay-Lussac?", "A V constante, P es proporcional a T."], ["¿En qué unidad se usa la temperatura?", "En kelvin."], ["Convierte 27 °C a kelvin.", "300 K."], ["Ecuación del gas ideal.", "PV = nRT."], ["¿Cuánto vale R en atm·L/(mol·K)?", "0,082."]],
    videos: ["leyes de los gases Boyle Charles Gay-Lussac", "ecuación del gas ideal problemas", "teoría cinética de los gases"],
    n: 16
  },
  {
    tema: "Soluciones químicas",
    resumen: "Una solución es una mezcla homogénea de soluto y solvente. Su concentración se expresa en porcentajes, molaridad y otras unidades, y se pueden preparar por dilución.",
    objetivos: ["Calcularás concentraciones.", "Prepararás diluciones.", "Reconocerás factores que afectan la solubilidad."],
    partes: [
      ["💧", "Componentes y tipos", "Soluto: lo que se disuelve; solvente: donde se disuelve. Según la cantidad de soluto: insaturada, saturada y sobresaturada. Según el estado: sólidas (aleaciones), líquidas y gaseosas.", "El acero es una solución sólida de hierro y carbono.", "Soluto + solvente."],
      ["🌡️", "Solubilidad", "Es la cantidad máxima de soluto que se disuelve en una cantidad de solvente a una temperatura. En sólidos, normalmente aumenta con la temperatura; en gases, disminuye con la temperatura y aumenta con la presión.", "Las bebidas gaseosas pierden gas al calentarse.", "Temperatura y presión influyen."],
      ["%", "Unidades físicas", "- % m/m = (g soluto / g solución) × 100\n- % m/v = (g soluto / mL solución) × 100\n- % v/v = (mL soluto / mL solución) × 100\n- ppm = mg de soluto / L de solución (para concentraciones bajas).", "Una solución con 10 g de sal en 90 g de agua: % m/m = 10/100 × 100 = 10 %.", "Solución = soluto + solvente."],
      ["🧮", "Unidades químicas", "- Molaridad (M) = moles de soluto / L de solución.\n- Molalidad (m) = moles de soluto / kg de solvente.\n- Fracción molar X = moles del componente / moles totales.", "Para preparar 500 mL de NaCl 0,2 M: moles = 0,2 × 0,5 = 0,1 mol → 0,1 × 58,5 = 5,85 g.", "M = mol/L."],
      ["🔽", "Diluciones", "C₁V₁ = C₂V₂. Al diluir, la cantidad de soluto no cambia. Para prepararlas: se toma el volumen V₁, se coloca en un matraz aforado y se completa con solvente hasta V₂.", "Para obtener 250 mL de HCl 0,5 M a partir de HCl 2 M: V₁ = 0,5 × 250/2 = 62,5 mL.", "Siempre agrega ácido al agua."]
    ],
    mapa: ["Soluciones", [["Tipos", ["Insaturada", "Saturada", "Sobresaturada"]], ["Físicas", ["% m/m", "% m/v", "ppm"]], ["Químicas", ["Molaridad", "Molalidad"]], ["Dilución", ["C₁V₁ = C₂V₂"]]]],
    tarjetas: [["¿Qué es el soluto?", "La sustancia que se disuelve."], ["¿Qué es la molaridad?", "Moles de soluto por litro de solución."], ["¿Qué fórmula se usa para diluir?", "C₁V₁ = C₂V₂."], ["¿Qué es una solución saturada?", "La que no admite más soluto a esa temperatura."], ["¿Qué es ppm?", "Miligramos de soluto por litro de solución."], ["¿Qué pasa con la solubilidad de un gas al calentar?", "Disminuye."], ["¿Qué se agrega primero en una dilución de ácido?", "El agua; luego el ácido, despacio."]],
    videos: ["soluciones químicas concentración", "molaridad y diluciones ejercicios", "solubilidad de sólidos y gases"],
    n: 16
  }
];
