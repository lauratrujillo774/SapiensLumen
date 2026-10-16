// Teoría de Química, grado 11°. Formato compacto.
export const area = "Quimica";

export const temas = [
  {
    tema: "Unidades de concentración",
    resumen: "La concentración indica cuánto soluto hay en una cantidad de solución o de solvente. Se expresa en unidades físicas (porcentajes, ppm) y químicas (molaridad, molalidad, normalidad y fracción molar).",
    objetivos: ["Calcularás concentraciones en distintas unidades.", "Convertirás entre unidades.", "Prepararás y diluirás soluciones."],
    partes: [
      ["%", "Unidades físicas", "- % m/m = (g soluto / g solución) × 100\n- % m/v = (g soluto / mL solución) × 100\n- % v/v = (mL soluto / mL solución) × 100\n- ppm = mg soluto / L de solución (o mg/kg).", "Una solución de 20 g de azúcar en 180 g de agua: % m/m = 20/200 × 100 = 10 %.", "Porcentaje: «por cada 100»."],
      ["🧮", "Molaridad (M)", "M = moles de soluto / litros de solución. Moles = masa / masa molar.", "Para preparar 250 mL de NaOH 0,5 M: moles = 0,5·0,25 = 0,125 mol; masa = 0,125 · 40 = 5 g.", "M = n/V."],
      ["⚖️", "Molalidad, normalidad y fracción molar", "- Molalidad (m) = moles de soluto / kg de solvente (no cambia con la temperatura).\n- Normalidad (N) = equivalentes de soluto / L de solución. N = M × (número de H⁺ u OH⁻ que libera cada fórmula).\n- Fracción molar X = moles del componente / moles totales.", "H₂SO₄ 1 M tiene N = 2 (libera 2 H⁺).", "Cada unidad responde a un uso."],
      ["🔁", "Conversión entre unidades", "Para pasar de % m/m a molaridad se necesita la densidad. M = (% m/m × ρ × 10) / masa molar (con ρ en g/mL).", "HCl al 37 % m/m, ρ = 1,19 g/mL, M(HCl) = 36,5: M = 37·1,19·10/36,5 ≈ 12,06 M.", "La densidad conecta masa y volumen."],
      ["🔽", "Diluciones y mezclas", "Dilución: C₁V₁ = C₂V₂. Mezcla de soluciones del mismo soluto: M_final = (M₁V₁ + M₂V₂)/(V₁ + V₂). Siempre se agrega el ácido al agua, lentamente. Se usan matraces aforados y pipetas para la precisión.", "Para obtener 100 mL de HCl 1 M a partir de uno 12 M: V₁ = 1·100/12 ≈ 8,3 mL.", "La cantidad de soluto se conserva al diluir."]
    ],
    mapa: ["Concentración", [["Físicas", ["% m/m", "% m/v", "ppm"]], ["Químicas", ["Molaridad", "Molalidad", "Normalidad"]], ["Conversión", ["Densidad"]], ["Dilución", ["C₁V₁ = C₂V₂"]]]],
    tarjetas: [["¿Qué es la molaridad?", "Moles de soluto por litro de solución."], ["¿Qué es la molalidad?", "Moles de soluto por kilogramo de solvente."], ["¿Qué es la normalidad?", "Equivalentes de soluto por litro de solución."], ["¿Qué es ppm?", "Partes por millón (mg por litro)."], ["Fórmula de dilución.", "C₁V₁ = C₂V₂."], ["¿Cuál es la normalidad de H₂SO₄ 1 M?", "2 N."], ["¿Qué es una fracción molar?", "Moles del componente entre moles totales."]],
    videos: ["unidades de concentración molaridad molalidad", "ejercicios de concentración química", "diluciones química"],
    n: 16
  },
  {
    tema: "Propiedades coligativas",
    resumen: "Las propiedades coligativas dependen de la cantidad de partículas de soluto disueltas, no de su naturaleza. Incluyen el descenso de la presión de vapor, la elevación del punto de ebullición, el descenso del punto de congelación y la presión osmótica.",
    objetivos: ["Reconocerás las cuatro propiedades coligativas.", "Calcularás cambios en ebullición y congelación.", "Explicarás la ósmosis."],
    partes: [
      ["🧂", "Idea central", "Al disolver un soluto no volátil en un solvente, cambian sus propiedades según la cantidad de partículas (no su tipo). Las sustancias iónicas aportan más partículas: el factor de van't Hoff (i) indica cuántas partículas produce cada unidad (NaCl: i ≈ 2; CaCl₂: i ≈ 3; glucosa: i = 1).", "Un mol de CaCl₂ en agua produce unos 3 moles de partículas.", "Más partículas, más efecto."],
      ["💨", "Descenso de la presión de vapor", "Ley de Raoult: P_solución = X_solvente · P°. Las partículas de soluto ocupan parte de la superficie y dificultan la evaporación.", "Una solución concentrada de azúcar se evapora más lentamente que el agua pura.", "El soluto reduce la evaporación."],
      ["🔥", "Ebullición y congelación", "- Elevación ebulloscópica: ΔT_e = i·K_e·m.\n- Descenso crioscópico: ΔT_c = i·K_c·m.\nPara el agua: K_e = 0,512 °C·kg/mol y K_c = 1,86 °C·kg/mol.", "Una solución 1 m de glucosa congela a −1,86 °C. Se echa sal a las carreteras con hielo y anticongelante a los radiadores.", "Hierve a más temperatura y congela a menos."],
      ["🌱", "Presión osmótica", "Ósmosis: paso de solvente a través de una membrana semipermeable desde la solución más diluida a la más concentrada. Presión osmótica: π = i·M·R·T. Aplicaciones: las células en agua pura se hinchan y en soluciones muy concentradas se arrugan; los sueros intravenosos son isotónicos; la ósmosis inversa desaliniza agua.", "Un pepino en agua salada pierde agua y se arruga.", "El solvente fluye hacia el soluto."],
      ["🧮", "Ejemplo y aplicaciones", "Calcula el punto de congelación de 58,5 g de NaCl en 1 kg de agua: m = 1; i = 2; ΔT_c = 2·1,86·1 = 3,72 °C → T_c = −3,72 °C. Aplicaciones: anticongelantes, conservación de alimentos (sal, azúcar), desalinización, diálisis, suero fisiológico (0,9 % NaCl).", "Los peces de agua dulce y de mar regulan su equilibrio osmótico de forma distinta.", "Las coligativas están en la cocina, en la medicina y en la industria."]
    ],
    mapa: ["Propiedades coligativas", [["Idea", ["Cantidad de partículas", "Factor i"]], ["Presión de vapor", ["Raoult"]], ["Ebullición y congelación", ["ΔT = i K m"]], ["Ósmosis", ["π = i M R T", "Membrana"]]]],
    tarjetas: [["¿De qué dependen las propiedades coligativas?", "Del número de partículas de soluto."], ["¿Cuáles son las cuatro?", "Presión de vapor, ebullición, congelación y presión osmótica."], ["¿Qué es el factor de van't Hoff?", "El número de partículas que produce cada unidad de soluto."], ["¿Qué es la ósmosis?", "El paso de solvente por una membrana semipermeable."], ["¿Por qué se echa sal al hielo de las vías?", "Porque baja el punto de congelación del agua."], ["¿Qué hace un anticongelante?", "Baja el punto de congelación y sube el de ebullición."], ["Constante crioscópica del agua.", "1,86 °C·kg/mol."]],
    videos: ["propiedades coligativas química", "descenso crioscópico ejercicios", "ósmosis y presión osmótica"],
    n: 14
  },
  {
    tema: "Equilibrio químico",
    resumen: "Muchas reacciones son reversibles y alcanzan un estado de equilibrio dinámico en el que las velocidades de ida y vuelta se igualan. La constante de equilibrio y el principio de Le Châtelier permiten predecir y controlar estas reacciones.",
    objetivos: ["Explicarás el equilibrio dinámico.", "Escribirás y calcularás Kc.", "Aplicarás Le Châtelier."],
    partes: [
      ["🔁", "Reacciones reversibles", "Una reacción reversible (⇌) ocurre en ambos sentidos. El equilibrio se alcanza cuando la velocidad directa es igual a la inversa. Es dinámico: las reacciones continúan, pero las concentraciones permanecen constantes. Ocurre en sistemas cerrados.", "N₂(g) + 3H₂(g) ⇌ 2NH₃(g) (proceso Haber para producir amoníaco).", "Equilibrio: velocidades iguales."],
      ["🧮", "Constante de equilibrio", "Para aA + bB ⇌ cC + dD: Kc = [C]ᶜ[D]ᵈ / ([A]ᵃ[B]ᵇ). Los sólidos y líquidos puros no aparecen. Si Kc ≫ 1, predominan los productos; si Kc ≪ 1, predominan los reactivos. Kc depende solo de la temperatura. Kp se usa con presiones.", "Para N₂ + 3H₂ ⇌ 2NH₃: Kc = [NH₃]² / ([N₂][H₂]³).", "Productos sobre reactivos."],
      ["📊", "Cociente de reacción Q", "Q tiene la misma forma que Kc pero con concentraciones en cualquier momento. Si Q < Kc, la reacción avanza hacia productos; si Q > Kc, hacia reactivos; si Q = Kc, está en equilibrio.", "Si Q < Kc, falta formar productos.", "Compara Q con K."],
      ["⚡", "Principio de Le Châtelier", "Si se perturba un sistema en equilibrio, este se desplaza para contrarrestar el cambio:\n- Aumentar la concentración de un reactivo: se desplaza a productos.\n- Aumentar la presión: hacia el lado con menos moles de gas.\n- Aumentar la temperatura: favorece el sentido endotérmico.\n- Un catalizador acelera, pero no cambia el equilibrio.", "En la síntesis del amoníaco, la alta presión favorece la producción de NH₃.", "El sistema se opone al cambio."],
      ["🏭", "Aplicaciones", "Industria (amoníaco, ácido sulfúrico), la regulación del pH en la sangre (equilibrio carbonato-bicarbonato), la formación de estalactitas, la disolución del CO₂ en bebidas. Equilibrio de solubilidad: Kps.", "Al destapar una gaseosa baja la presión y el CO₂ sale: el equilibrio se desplaza.", "Controlar equilibrios para obtener más producto."]
    ],
    mapa: ["Equilibrio químico", [["Reversibilidad", ["⇌", "Dinámico"]], ["Constante", ["Kc", "Q vs. K"]], ["Le Châtelier", ["Concentración", "Presión", "Temperatura"]], ["Aplicaciones", ["Haber", "Sangre", "Gaseosas"]]]],
    tarjetas: [["¿Qué es el equilibrio químico?", "Un estado en que las velocidades de reacción directa e inversa son iguales."], ["¿Cómo se escribe Kc?", "Productos entre reactivos, elevados a sus coeficientes."], ["¿Qué indica Kc ≫ 1?", "Que predominan los productos."], ["¿Qué dice Le Châtelier?", "El sistema se desplaza para contrarrestar la perturbación."], ["¿Qué efecto tiene un catalizador?", "Acelera sin cambiar la posición del equilibrio."], ["¿De qué depende Kc?", "De la temperatura."], ["Si Q < Kc, ¿hacia dónde avanza?", "Hacia productos."]],
    videos: ["equilibrio químico constante Kc", "principio de Le Châtelier", "proceso Haber amoníaco"],
    n: 16
  },
  {
    tema: "Cinética química",
    resumen: "La cinética química estudia la velocidad de las reacciones y los factores que la modifican: concentración, temperatura, superficie de contacto, catalizadores y mecanismo de reacción.",
    objetivos: ["Definirás velocidad de reacción.", "Explicarás la teoría de colisiones.", "Aplicarás factores que cambian la velocidad."],
    partes: [
      ["⏱️", "Velocidad de reacción", "Es el cambio de concentración de un reactivo o producto por unidad de tiempo: v = −Δ[reactivo]/Δt = Δ[producto]/Δt (mol/L·s). Disminuye normalmente con el tiempo, a medida que se consumen los reactivos.", "Si [A] baja de 1,0 a 0,6 M en 20 s, v = 0,02 M/s.", "Qué tan rápido cambia la concentración."],
      ["💥", "Teoría de colisiones", "Para reaccionar, las partículas deben chocar con orientación adecuada y energía mayor o igual a la energía de activación (Ea). Solo una fracción de las colisiones es efectiva. El complejo activado es el estado de transición.", "Dos moléculas que chocan con poca energía simplemente rebotan.", "Choque + energía + orientación."],
      ["📈", "Factores que modifican la velocidad", "- Concentración: más partículas, más colisiones.\n- Temperatura: más energía; una regla es que 10 °C más suele duplicar la velocidad.\n- Superficie de contacto: sólidos pulverizados reaccionan más rápido.\n- Naturaleza de los reactivos.\n- Catalizadores: bajan la Ea sin consumirse.", "Un cubo de azúcar se disuelve más lento que el azúcar en polvo.", "Más choques efectivos, más velocidad."],
      ["📐", "Ley de velocidad", "Relaciona la velocidad con las concentraciones: v = k·[A]ᵐ[B]ⁿ. El orden de reacción (m, n) se determina experimentalmente. k es la constante de velocidad y depende de la temperatura (ecuación de Arrhenius). Orden total = m + n.", "Si al duplicar [A] la velocidad se cuadruplica, la reacción es de segundo orden respecto a A.", "Los órdenes se miden, no se deducen."],
      ["🧪", "Catálisis y mecanismo", "Un catalizador ofrece una ruta alternativa de menor Ea. Tipos: homogéneo (misma fase) y heterogéneo (fase distinta, como el convertidor catalítico de los carros). Las enzimas son catalizadores biológicos. El mecanismo es la secuencia de pasos elementales; el paso más lento determina la velocidad.", "La amilasa de la saliva acelera la digestión del almidón.", "Las enzimas aceleran la vida."]
    ],
    mapa: ["Cinética química", [["Velocidad", ["Δ[C]/Δt"]], ["Colisiones", ["Ea", "Orientación"]], ["Factores", ["Concentración", "Temperatura", "Superficie", "Catalizador"]], ["Ley de velocidad", ["v = k[A]ᵐ", "Orden"]]]],
    tarjetas: [["¿Qué es la velocidad de reacción?", "El cambio de concentración por unidad de tiempo."], ["¿Qué es la energía de activación?", "La energía mínima para que una colisión sea efectiva."], ["¿Qué hace un catalizador?", "Baja la energía de activación sin consumirse."], ["¿Cómo afecta la temperatura?", "La aumenta."], ["¿Qué es una enzima?", "Un catalizador biológico."], ["¿Cómo se determina el orden de reacción?", "Experimentalmente."], ["¿Qué determina la velocidad en un mecanismo?", "El paso más lento."]],
    videos: ["cinética química velocidad de reacción", "teoría de colisiones y energía de activación", "catalizadores y enzimas"],
    n: 14
  },
  {
    tema: "Ácidos, bases y pH",
    resumen: "Los ácidos y las bases se definen por distintas teorías (Arrhenius, Brønsted-Lowry y Lewis). El pH mide la acidez, y las constantes Ka y Kb miden su fuerza. Las soluciones buffer resisten cambios de pH.",
    objetivos: ["Aplicarás las teorías ácido-base.", "Calcularás pH y pOH.", "Reconocerás ácidos y bases fuertes y débiles y los buffers."],
    partes: [
      ["📚", "Teorías", "- Arrhenius: ácido libera H⁺; base libera OH⁻ en agua.\n- Brønsted-Lowry: ácido dona protones; base los acepta (pares conjugados).\n- Lewis: ácido acepta un par de electrones; base lo dona.", "NH₃ + H₂O ⇌ NH₄⁺ + OH⁻: el agua es ácido (dona H⁺) y el amoníaco, base.", "Brønsted: transferencia de protones."],
      ["🔢", "pH y pOH", "pH = −log[H⁺]; pOH = −log[OH⁻]; a 25 °C, pH + pOH = 14 y Kw = [H⁺][OH⁻] = 10⁻¹⁴. pH < 7 ácido; pH = 7 neutro; pH > 7 básico.", "[H⁺] = 10⁻³ M → pH = 3. [OH⁻] = 10⁻² M → pOH = 2 → pH = 12.", "Escala logarítmica."],
      ["⚡", "Fuerza de ácidos y bases", "Fuertes: se ionizan casi totalmente (HCl, HNO₃, H₂SO₄, NaOH, KOH). Débiles: ionización parcial (CH₃COOH, NH₃). Ka = [H⁺][A⁻]/[HA]: a mayor Ka, ácido más fuerte. Para ácidos débiles: [H⁺] ≈ √(Ka·C).", "Para ácido acético 0,1 M (Ka = 1,8×10⁻⁵): [H⁺] ≈ 1,3×10⁻³ M → pH ≈ 2,9.", "Fuerte ≠ concentrado."],
      ["🧪", "Neutralización y titulación", "Ácido + base → sal + agua. En una titulación se determina la concentración desconocida con una solución patrón y un indicador (fenolftaleína). En el punto de equivalencia: moles de H⁺ = moles de OH⁻; M₁V₁ = M₂V₂ para ácido y base monopróticos.", "25 mL de HCl se neutralizan con 20 mL de NaOH 0,1 M: M(HCl) = 0,08 M.", "Equivalencia: moles iguales."],
      ["🛡️", "Soluciones buffer y aplicaciones", "Un buffer (tampón) resiste cambios de pH: mezcla de un ácido débil y su base conjugada. pH = pKa + log([A⁻]/[HA]) (Henderson-Hasselbalch). Ejemplos: sangre (pH ≈ 7,4), jugos gástricos, productos de limpieza. Lluvia ácida y antiácidos.", "El buffer bicarbonato mantiene el pH de la sangre.", "Los buffers protegen la vida."]
    ],
    mapa: ["Ácidos, bases y pH", [["Teorías", ["Arrhenius", "Brønsted-Lowry", "Lewis"]], ["pH", ["−log[H⁺]", "pH + pOH = 14"]], ["Fuerza", ["Ka", "Kb", "Fuertes y débiles"]], ["Aplicaciones", ["Titulación", "Buffer"]]]],
    tarjetas: [["¿Qué es un ácido de Brønsted?", "Un donador de protones."], ["Fórmula del pH.", "pH = −log[H⁺]."], ["¿Cuánto es pH + pOH a 25 °C?", "14."], ["Da un ácido fuerte.", "HCl."], ["¿Qué es una titulación?", "Un procedimiento para hallar una concentración desconocida."], ["¿Qué es un buffer?", "Una solución que resiste cambios de pH."], ["pH de [H⁺] = 10⁻⁵ M.", "5."]],
    videos: ["ácidos y bases pH ejercicios", "titulación ácido-base", "soluciones buffer Henderson-Hasselbalch"],
    n: 16
  },
  {
    tema: "Oxidación-reducción y electroquímica",
    resumen: "Las reacciones redox implican transferencia de electrones. La electroquímica estudia cómo esas reacciones producen electricidad (celdas galvánicas, pilas) o la usan para provocar reacciones (electrólisis).",
    objetivos: ["Identificarás oxidación y reducción.", "Describirás celdas galvánicas y electrolíticas.", "Calcularás potenciales de celda."],
    partes: [
      ["⚡", "Redox", "Oxidación: pérdida de electrones (aumenta el número de oxidación). Reducción: ganancia de electrones (disminuye). El agente oxidante se reduce; el agente reductor se oxida. Se balancean por el método del ion-electrón.", "Zn + Cu²⁺ → Zn²⁺ + Cu: el Zn se oxida y el Cu²⁺ se reduce.", "OIL RIG."],
      ["🔋", "Celda galvánica (pila)", "Convierte energía química en eléctrica. Tiene dos semiceldas, un puente salino y un circuito externo. Ánodo: donde ocurre la oxidación (−); cátodo: donde ocurre la reducción (+). Los electrones fluyen del ánodo al cátodo. Notación: Zn | Zn²⁺ || Cu²⁺ | Cu.", "La pila Daniell usa Zn y Cu.", "Ánodo oxida, cátodo reduce."],
      ["📏", "Potenciales estándar", "El potencial estándar de reducción E° (en voltios) mide la tendencia a reducirse, con referencia al electrodo de hidrógeno (0 V). E°_celda = E°_cátodo − E°_ánodo. Si E°_celda > 0, la reacción es espontánea. Zn²⁺/Zn: −0,76 V; Cu²⁺/Cu: +0,34 V → E°_celda = 1,10 V.", "A mayor E°, mayor poder oxidante.", "Restar ánodo del cátodo."],
      ["🔌", "Electrólisis", "Usa corriente eléctrica para forzar una reacción no espontánea. Aplicaciones: obtención de metales (aluminio, sodio, cobre), descomposición del agua, galvanoplastia (cromado, niquelado), refinación. Leyes de Faraday: la masa depositada es proporcional a la carga que circula: m = (M·I·t)/(n·F), con F = 96.485 C/mol.", "La electrólisis del agua produce H₂ en el cátodo y O₂ en el ánodo.", "La electricidad impulsa la reacción."],
      ["🔋", "Pilas, baterías y corrosión", "Pilas secas, alcalinas, de litio y baterías recargables (ion-litio). Celdas de combustible (hidrógeno). Corrosión: oxidación del hierro (óxido); se previene con pintura, galvanizado, ánodos de sacrificio. Importancia ambiental: reciclaje de baterías.", "El zinc protege al hierro en el acero galvanizado.", "La energía portátil y la corrosión."]
    ],
    mapa: ["Electroquímica", [["Redox", ["Oxidación", "Reducción"]], ["Celda galvánica", ["Ánodo (−)", "Cátodo (+)", "Puente salino"]], ["Potenciales", ["E° cátodo − E° ánodo"]], ["Electrólisis", ["Faraday", "Galvanoplastia"]]]],
    tarjetas: [["¿Qué ocurre en el ánodo?", "La oxidación."], ["¿Qué ocurre en el cátodo?", "La reducción."], ["¿Qué hace un puente salino?", "Mantiene el equilibrio de cargas."], ["¿Cuándo es espontánea una celda?", "Cuando E°_celda > 0."], ["¿Qué es la electrólisis?", "Una reacción forzada por corriente eléctrica."], ["¿Qué es la corrosión?", "La oxidación de un metal por el ambiente."], ["Fórmula del potencial de celda.", "E°_celda = E°_cátodo − E°_ánodo."]],
    videos: ["electroquímica celdas galvánicas", "potencial de celda y electrólisis", "corrosión y cómo prevenirla"],
    n: 16
  },
  {
    tema: "Termoquímica",
    resumen: "La termoquímica estudia el calor de las reacciones químicas. Se clasifican en exotérmicas y endotérmicas, y se calculan con la entalpía, la ley de Hess y las energías de enlace.",
    objetivos: ["Distinguirás reacciones exo y endotérmicas.", "Calcularás ΔH con entalpías de formación y ley de Hess.", "Relacionarás entalpía, entropía y espontaneidad."],
    partes: [
      ["🔥", "Calor y entalpía", "La entalpía (H) es el calor a presión constante: ΔH = Q_p. Exotérmica: libera calor, ΔH < 0 (combustión, neutralización). Endotérmica: absorbe calor, ΔH > 0 (fotosíntesis, fusión del hielo). Se expresa en kJ/mol.", "CH₄ + 2O₂ → CO₂ + 2H₂O, ΔH = −890 kJ/mol.", "Signo negativo: libera calor."],
      ["📊", "Entalpía de formación", "ΔH°f es el calor al formar un mol de compuesto a partir de sus elementos en estado estándar (los elementos puros valen 0). ΔH°reacción = Σ n·ΔH°f(productos) − Σ n·ΔH°f(reactivos).", "Para H₂ + ½O₂ → H₂O(l): ΔH°f = −286 kJ/mol.", "Productos menos reactivos."],
      ["➕", "Ley de Hess", "El cambio de entalpía de una reacción es el mismo si ocurre en un paso o en varios: se suman ecuaciones y sus ΔH. Si se invierte una ecuación, cambia el signo; si se multiplica, se multiplica el ΔH.", "C + O₂ → CO₂ (−394) se obtiene sumando C + ½O₂ → CO (−111) y CO + ½O₂ → CO₂ (−283).", "La entalpía es función de estado."],
      ["🔗", "Energías de enlace y calorimetría", "ΔH ≈ Σ(energías de enlaces rotos) − Σ(energías de enlaces formados). Romper enlaces requiere energía; formarlos la libera. La calorimetría mide el calor con q = m·c·ΔT.", "Quemar 1 g de combustible en un calorímetro de 500 g de agua que sube 5 °C: q = 500·4,18·5 ≈ 10,5 kJ.", "Romper cuesta, formar libera."],
      ["🎲", "Entropía y espontaneidad", "La entropía (S) mide el desorden. Energía libre de Gibbs: ΔG = ΔH − T·ΔS. Si ΔG < 0, el proceso es espontáneo. Un proceso endotérmico puede ser espontáneo si aumenta mucho el desorden. Aplicaciones: combustibles, alimentos (kcal), compresas frías y calientes.", "El hielo se funde espontáneamente a más de 0 °C porque aumenta la entropía.", "ΔG < 0: espontáneo."]
    ],
    mapa: ["Termoquímica", [["Entalpía", ["Exotérmica ΔH<0", "Endotérmica ΔH>0"]], ["Formación", ["ΔH°f", "Σproductos − Σreactivos"]], ["Hess", ["Sumar ecuaciones"]], ["Gibbs", ["ΔG = ΔH − TΔS"]]]],
    tarjetas: [["¿Qué es una reacción exotérmica?", "La que libera calor (ΔH < 0)."], ["¿Qué es una endotérmica?", "La que absorbe calor (ΔH > 0)."], ["¿Qué dice la ley de Hess?", "El ΔH total es la suma de los ΔH de los pasos."], ["¿Qué es la entropía?", "Una medida del desorden."], ["¿Cuándo es espontáneo un proceso?", "Cuando ΔG < 0."], ["Fórmula de ΔG.", "ΔG = ΔH − T·ΔS."], ["¿Cuánto vale ΔH°f de un elemento puro?", "Cero."]],
    videos: ["termoquímica entalpía ley de Hess", "reacciones exotérmicas y endotérmicas", "energía libre de Gibbs"],
    n: 16
  },
  {
    tema: "Hidrocarburos",
    resumen: "Los hidrocarburos son compuestos formados solo por carbono e hidrógeno. Se clasifican en alcanos, alquenos, alquinos y aromáticos, y son la base de los combustibles y de muchos materiales.",
    objetivos: ["Clasificarás los hidrocarburos.", "Nombrarás compuestos sencillos.", "Reconocerás sus propiedades y usos."],
    partes: [
      ["⚛️", "El carbono", "El carbono tiene 4 electrones de valencia y forma 4 enlaces covalentes. Puede formar cadenas largas, ramificadas y cíclicas, y enlaces simples, dobles y triples. Hibridaciones: sp³ (tetraédrica), sp² (plana), sp (lineal).", "El metano (CH₄) es tetraédrico.", "El carbono forma 4 enlaces."],
      ["🔗", "Alcanos", "Hidrocarburos saturados (solo enlaces simples). Fórmula general: CₙH₂ₙ₊₂. Nombres: metano (1 C), etano (2), propano (3), butano (4), pentano (5), hexano (6), heptano (7), octano (8), nonano (9), decano (10). Los sustituyentes (alquilo) se nombran con -il: metil, etil.", "CH₃–CH₂–CH₃ es el propano. El 2-metilbutano tiene un metil en el carbono 2.", "Terminación -ano."],
      ["〰️", "Alquenos y alquinos", "- Alquenos: al menos un doble enlace; CₙH₂ₙ; terminación -eno (eteno o etileno, propeno).\n- Alquinos: un triple enlace; CₙH₂ₙ₋₂; terminación -ino (etino o acetileno).\nSe numera la cadena para que el enlace múltiple tenga el menor número.", "CH₂=CH₂ es el eteno; HC≡CH, el etino (usado en soldadura).", "Son insaturados y más reactivos."],
      ["🔷", "Aromáticos y cíclicos", "El benceno (C₆H₆) tiene un anillo con electrones deslocalizados (resonancia) y es muy estable. Derivados: tolueno, fenol, naftaleno. Los cicloalcanos (ciclopropano, ciclohexano) forman anillos.", "El benceno es un solvente tóxico y cancerígeno; se usa con precaución.", "El anillo bencénico es muy estable."],
      ["🛢️", "Propiedades, usos e impacto", "Poco polares, insolubles en agua, menos densos que ella; puntos de ebullición crecen con la masa. Combustión: CₙHₘ + O₂ → CO₂ + H₂O (completa) o CO/C (incompleta). Fuentes: petróleo y gas natural, con refinación por destilación fraccionada. Usos: gasolina, GLP, plásticos, asfalto. Impacto: emisiones de CO₂ y cambio climático; derrames de petróleo.", "El GLP es una mezcla de propano y butano.", "Energía útil con impacto ambiental."]
    ],
    mapa: ["Hidrocarburos", [["Alcanos", ["CₙH₂ₙ₊₂", "-ano"]], ["Alquenos", ["Doble enlace", "-eno"]], ["Alquinos", ["Triple enlace", "-ino"]], ["Aromáticos", ["Benceno", "Resonancia"]]]],
    tarjetas: [["¿Qué son los hidrocarburos?", "Compuestos de carbono e hidrógeno."], ["Fórmula general de los alcanos.", "CₙH₂ₙ₊₂."], ["¿Qué terminación tienen los alquenos?", "-eno."], ["¿Cuál es el alquino más sencillo?", "El etino o acetileno."], ["Nombre de CH₃CH₂CH₂CH₃.", "Butano."], ["Fórmula del benceno.", "C₆H₆."], ["¿Cómo se separa el petróleo?", "Por destilación fraccionada."]],
    videos: ["hidrocarburos alcanos alquenos alquinos", "nomenclatura de hidrocarburos", "benceno y compuestos aromáticos"],
    n: 16
  },
  {
    tema: "Grupos funcionales",
    resumen: "Un grupo funcional es un átomo o conjunto de átomos que determina las propiedades y reacciones de una molécula orgánica. Los principales son alcoholes, éteres, aldehídos, cetonas, ácidos carboxílicos, ésteres, aminas y amidas.",
    objetivos: ["Reconocerás los grupos funcionales.", "Nombrarás compuestos sencillos.", "Relacionarás grupos con propiedades y usos."],
    partes: [
      ["🧩", "Qué es un grupo funcional", "Es la parte reactiva de una molécula. Compuestos con el mismo grupo funcional tienen propiedades similares. Se identifican por su estructura y por sufijos o prefijos en su nombre.", "El grupo –OH hace que un compuesto sea alcohol.", "El grupo define la función."],
      ["🧴", "Oxigenados (I)", "- Alcoholes (R–OH): -ol. Metanol (CH₃OH), etanol (C₂H₅OH), glicerol.\n- Éteres (R–O–R'): -éter. Dietiléter.\n- Fenoles: –OH unido a un anillo aromático.\nEl etanol está en licores, desinfectantes y biocombustibles.", "El alcohol antiséptico es etanol o isopropanol.", "Alcoholes: –OH."],
      ["🍋", "Oxigenados (II)", "- Aldehídos (R–CHO): -al. Formaldehído o metanal, etanal.\n- Cetonas (R–CO–R'): -ona. Propanona (acetona).\n- Ácidos carboxílicos (R–COOH): ácido -oico. Ácido metanoico (fórmico), etanoico (acético).\n- Ésteres (R–COO–R'): -ato de -ilo; dan aromas de frutas.", "El vinagre es una solución de ácido acético; la acetona es solvente de esmalte.", "Carbonilo C=O en varios grupos."],
      ["🧪", "Nitrogenados y otros", "- Aminas (R–NH₂): -amina; son bases débiles (metilamina).\n- Amidas (R–CONH₂): -amida; enlace peptídico de las proteínas.\n- Nitrilos, halogenuros de alquilo (R–X), tioles (R–SH).", "La urea es una amida; el enlace peptídico une los aminoácidos.", "N en aminas y amidas."],
      ["🔍", "Propiedades y reacciones", "Los grupos con O–H y N–H forman puentes de hidrógeno: mayor punto de ebullición y solubilidad (alcoholes, ácidos). Reacciones: oxidación de alcoholes (a aldehídos/cetonas/ácidos), esterificación (ácido + alcohol → éster + agua), neutralización de ácidos carboxílicos, sustitución de halogenuros.", "Etanol → etanal → ácido acético por oxidación.", "El grupo determina la reactividad."]
    ],
    mapa: ["Grupos funcionales", [["Alcohol y éter", ["–OH", "–O–"]], ["Carbonilo", ["Aldehído", "Cetona", "Ácido", "Éster"]], ["Nitrogenados", ["Amina", "Amida"]], ["Reacciones", ["Oxidación", "Esterificación"]]]],
    tarjetas: [["¿Qué es un grupo funcional?", "La parte reactiva que define las propiedades de un compuesto."], ["¿Cuál es el grupo de los alcoholes?", "–OH."], ["¿Cuál es el grupo de los ácidos carboxílicos?", "–COOH."], ["¿Qué es la acetona?", "Una cetona (propanona)."], ["¿Qué grupo tienen los ésteres?", "–COO–."], ["¿Qué une a los aminoácidos?", "El enlace peptídico (amida)."], ["¿Qué es la esterificación?", "Ácido + alcohol → éster + agua."]],
    videos: ["grupos funcionales química orgánica", "alcoholes aldehídos cetonas ácidos", "esterificación y ésteres"],
    n: 16
  },
  {
    tema: "Isomería",
    resumen: "Los isómeros son compuestos con la misma fórmula molecular pero distinta estructura o disposición en el espacio, y por eso tienen propiedades diferentes. Se clasifican en estructurales y estereoisómeros.",
    objetivos: ["Definirás isomería.", "Distinguirás isomería estructural y estereoisomería.", "Reconocerás la quiralidad y sus implicaciones."],
    partes: [
      ["🧬", "Qué es la isomería", "Isómeros: misma fórmula molecular, diferente fórmula estructural o disposición espacial. Por ejemplo, C₄H₁₀ tiene dos isómeros: butano y 2-metilpropano (isobutano). A mayor número de carbonos, más isómeros posibles.", "El pentano (C₅H₁₂) tiene tres isómeros estructurales.", "Misma fórmula, distinta estructura."],
      ["🔀", "Isomería estructural", "- De cadena: distinta ramificación (butano / isobutano).\n- De posición: el grupo o el enlace múltiple está en otra posición (1-propanol / 2-propanol; 1-buteno / 2-buteno).\n- De función: distinto grupo funcional (etanol C₂H₆O / dimetil éter C₂H₆O).", "El etanol es líquido y el dimetil éter, gas: mismas fórmulas, distinto comportamiento.", "Cambia el esqueleto o el grupo."],
      ["🔁", "Isomería geométrica (cis-trans)", "Se da en alquenos y cicloalcanos por la rotación restringida del doble enlace. Cis: sustituyentes iguales del mismo lado; trans: lados opuestos. Tienen distintos puntos de fusión y propiedades biológicas. Se usa también E/Z.", "Los ácidos grasos trans (grasas trans) son menos saludables que los cis.", "El doble enlace no rota."],
      ["🪞", "Isomería óptica", "Una molécula es quiral si no se superpone con su imagen en el espejo (como las manos). Un carbono quiral (asimétrico) tiene cuatro sustituyentes diferentes. Los enantiómeros son imágenes especulares: desvían la luz polarizada en sentidos opuestos (dextrógiro (+) o levógiro (−)). Una mezcla 50:50 se llama racémica.", "El aminoácido alanina, la glucosa y muchos fármacos son quirales.", "Imágenes especulares no superponibles."],
      ["💊", "Importancia", "Los isómeros pueden tener efectos biológicos muy distintos. Los sistemas vivos suelen usar una forma (por ejemplo, L-aminoácidos y D-azúcares). El caso de la talidomida (años 50-60): una forma era sedante y la otra causaba malformaciones. Por eso la industria farmacéutica estudia y separa los isómeros.", "El limoneno tiene una forma con olor a naranja y otra con olor a limón.", "La forma importa en la vida."]
    ],
    mapa: ["Isomería", [["Concepto", ["Misma fórmula", "Distinta estructura"]], ["Estructural", ["Cadena", "Posición", "Función"]], ["Geométrica", ["cis", "trans"]], ["Óptica", ["Quiralidad", "Enantiómeros"]]]],
    tarjetas: [["¿Qué son los isómeros?", "Compuestos con la misma fórmula molecular y distinta estructura."], ["¿Qué es un carbono quiral?", "Un carbono con cuatro sustituyentes diferentes."], ["¿Qué son los enantiómeros?", "Imágenes especulares no superponibles."], ["¿Qué es un isómero cis?", "Aquel con sustituyentes iguales del mismo lado del doble enlace."], ["¿Qué isómeros tiene el C₄H₁₀?", "Butano e isobutano."], ["¿Qué es una mezcla racémica?", "Una mezcla 50:50 de dos enantiómeros."], ["¿Por qué importa la isomería en los fármacos?", "Porque los isómeros pueden tener efectos distintos."]],
    videos: ["isomería estructural geométrica y óptica", "carbono quiral y enantiómeros", "isómeros cis trans"],
    n: 14
  },
  {
    tema: "Polímeros y biomoléculas",
    resumen: "Los polímeros son macromoléculas formadas por la unión de muchas unidades pequeñas (monómeros). Las biomoléculas —carbohidratos, lípidos, proteínas y ácidos nucleicos— son polímeros y compuestos esenciales para la vida.",
    objetivos: ["Explicarás la polimerización.", "Clasificarás polímeros sintéticos y naturales.", "Describirás las biomoléculas y sus funciones."],
    partes: [
      ["🔗", "Polímeros sintéticos", "Se forman por polimerización: de adición (polietileno, PVC, polipropileno, teflón) o de condensación (nailon, poliéster/PET, Bakelita), con pérdida de moléculas pequeñas como agua. Clasificación: termoplásticos (se ablandan con calor) y termoestables (no). Usos: empaques, tuberías, ropa, botellas. Problemas: residuos plásticos, microplásticos.", "El PET (botellas) se puede reciclar; el reciclaje reduce la contaminación.", "Muchos monómeros, una cadena larga."],
      ["🍞", "Carbohidratos", "Fórmula general Cₙ(H₂O)ₙ. Monosacáridos (glucosa, fructosa), disacáridos (sacarosa, lactosa) y polisacáridos (almidón, glucógeno, celulosa). Funciones: energía (4 kcal/g) y estructura (celulosa).", "El almidón es la reserva de las plantas; el glucógeno, de los animales.", "Energía rápida y estructura."],
      ["🥑", "Lípidos", "Insolubles en agua. Triglicéridos (grasas y aceites), fosfolípidos (membranas celulares), esteroides (colesterol, hormonas), ceras. Saturados (sólidos, de origen animal) y insaturados (líquidos, de origen vegetal). Funciones: reserva de energía (9 kcal/g), aislamiento, membranas.", "Las grasas trans son perjudiciales para la salud cardiovascular.", "Reserva y membranas."],
      ["🥚", "Proteínas", "Polímeros de aminoácidos (20 tipos) unidos por enlaces peptídicos. Niveles estructurales: primaria, secundaria (hélice α, lámina β), terciaria y cuaternaria. Funciones: estructural (colágeno), enzimática, transporte (hemoglobina), defensa (anticuerpos), hormonal. La desnaturalización (calor, pH) cambia su forma y función.", "Al cocinar un huevo, la clara se desnaturaliza y se vuelve blanca.", "Estructura determina función."],
      ["🧬", "Ácidos nucleicos y metabolismo", "ADN y ARN son polímeros de nucleótidos (azúcar, fosfato, base nitrogenada). Guardan y transmiten la información genética. Además, las vitaminas y los minerales cumplen funciones reguladoras. El ATP es la «moneda de energía» de la célula. Las enzimas catalizan las reacciones metabólicas.", "Una dieta equilibrada aporta carbohidratos, lípidos, proteínas, vitaminas y minerales.", "Información y energía."]
    ],
    mapa: ["Polímeros y biomoléculas", [["Polímeros sintéticos", ["Adición", "Condensación", "Plásticos"]], ["Carbohidratos", ["Glucosa", "Almidón", "Celulosa"]], ["Lípidos y proteínas", ["Grasas", "Aminoácidos"]], ["Ácidos nucleicos", ["ADN", "ARN", "ATP"]]]],
    tarjetas: [["¿Qué es un polímero?", "Una macromolécula formada por muchos monómeros."], ["¿Qué es un monómero?", "La unidad que se repite en un polímero."], ["¿De qué son polímeros las proteínas?", "De aminoácidos."], ["¿Qué enlace une a los aminoácidos?", "El enlace peptídico."], ["¿Qué funciones cumplen los lípidos?", "Reserva de energía, aislamiento y membranas."], ["¿Qué es el ATP?", "La molécula que transporta energía en la célula."], ["¿Qué es la desnaturalización de una proteína?", "La pérdida de su estructura y función por calor o pH."]],
    videos: ["polímeros y biomoléculas", "carbohidratos lípidos proteínas", "plásticos reciclaje y microplásticos"],
    n: 16
  },
  {
    tema: "Química ambiental",
    resumen: "La química ambiental estudia las sustancias químicas en el aire, el agua y el suelo, sus fuentes y efectos. Permite comprender y enfrentar problemas como la contaminación, la lluvia ácida, el efecto invernadero y la capa de ozono.",
    objetivos: ["Reconocerás los principales contaminantes.", "Explicarás fenómenos como lluvia ácida y ozono.", "Propondrás soluciones basadas en la química verde."],
    partes: [
      ["🌫️", "Contaminación del aire", "Contaminantes: CO₂, CO, NOₓ, SO₂, partículas (PM2,5 y PM10), O₃ troposférico, compuestos orgánicos volátiles. Fuentes: tráfico, industria, quema de biomasa, minería. Efectos: enfermedades respiratorias y cardiovasculares. En ciudades de Colombia se monitorea la calidad del aire y se aplican medidas como el pico y placa.", "El smog fotoquímico se forma por reacción de NOₓ y compuestos orgánicos con la luz solar.", "El aire que respiramos."],
      ["🌧️", "Lluvia ácida", "El SO₂ y los NOₓ emitidos por combustibles reaccionan con agua y forman ácidos sulfúrico y nítrico (SO₂ + O₂ + H₂O → H₂SO₄). La lluvia con pH < 5,6 daña bosques, lagos, edificios y estatuas de mármol (CaCO₃).", "El mármol se disuelve: CaCO₃ + H₂SO₄ → CaSO₄ + H₂O + CO₂.", "Los óxidos forman ácidos."],
      ["🌍", "Efecto invernadero y capa de ozono", "Gases de efecto invernadero (CO₂, CH₄, N₂O, vapor de agua) retienen calor y su exceso causa el calentamiento global. El ozono estratosférico (O₃) absorbe la radiación UV; los CFC (clorofluorocarbonos) lo destruyen. El Protocolo de Montreal (1987) prohibió los CFC y la capa se está recuperando.", "Un solo átomo de cloro puede destruir miles de moléculas de ozono.", "Un tratado ambiental que funcionó."],
      ["💧", "Contaminación del agua y del suelo", "Contaminantes: metales pesados (mercurio de la minería, plomo), nutrientes (nitratos y fosfatos que causan eutrofización), plásticos, pesticidas, aguas residuales y derrames de petróleo. Indicadores: pH, oxígeno disuelto (OD), DBO, DQO, turbidez, coliformes. Tratamiento: filtración, sedimentación, cloración, plantas de tratamiento.", "El mercurio se bioacumula en los peces y llega a las personas.", "El agua limpia es vida."],
      ["♻️", "Química verde y soluciones", "Principios: prevenir residuos, usar materias primas renovables, diseñar productos biodegradables, eficiencia energética y catalizadores. Estrategias: energías limpias, economía circular, reciclaje, tratamiento de residuos, biorremediación, producción más limpia. Acciones personales: ahorrar agua y energía, usar transporte sostenible, reducir plásticos.", "Reemplazar solventes tóxicos por agua o CO₂ supercrítico es un ejemplo de química verde.", "La química como solución."]
    ],
    mapa: ["Química ambiental", [["Aire", ["Smog", "PM2,5", "NOₓ"]], ["Lluvia ácida", ["SO₂", "H₂SO₄"]], ["Atmósfera", ["Efecto invernadero", "Capa de ozono"]], ["Agua y suelo", ["Metales pesados", "Eutrofización"]]]],
    tarjetas: [["¿Qué causa la lluvia ácida?", "Los óxidos de azufre y nitrógeno."], ["¿Qué es el pH de la lluvia normal?", "Aproximadamente 5,6."], ["¿Qué destruye la capa de ozono?", "Los CFC."], ["¿Qué tratado protege la capa de ozono?", "El Protocolo de Montreal."], ["¿Qué es la eutrofización?", "El exceso de nutrientes que provoca el crecimiento descontrolado de algas."], ["Menciona un gas de efecto invernadero.", "CO₂ o metano."], ["¿Qué busca la química verde?", "Prevenir la contaminación desde el diseño de los procesos."]],
    videos: ["química ambiental contaminación", "lluvia ácida y capa de ozono", "química verde principios"],
    n: 14
  }
];
