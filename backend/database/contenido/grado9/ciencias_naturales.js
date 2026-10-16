// Teoría de Ciencias Naturales, grado 9°. Formato compacto (ver grado6/ciencias_naturales.js).
export const area = "Ciencias Naturales";

export const temas = [
  {
    tema: "ADN, genes y síntesis de proteínas",
    resumen: "El ADN guarda la información genética. Un gen es un fragmento de ADN que contiene las instrucciones para fabricar una proteína, mediante los procesos de transcripción y traducción.",
    objetivos: ["Describirás la estructura del ADN.", "Explicarás qué es un gen.", "Seguirás el camino de ADN a proteína."],
    partes: [
      ["🧬", "Estructura del ADN", "El ADN (ácido desoxirribonucleico) es una doble hélice formada por dos cadenas de nucleótidos. Cada nucleótido tiene un azúcar (desoxirribosa), un fosfato y una base nitrogenada: adenina (A), timina (T), citosina (C) o guanina (G). Las bases se emparejan: A con T y C con G.", "Si una cadena es ATTCGA, la complementaria es TAAGCT.", "A–T y C–G."],
      ["📍", "Genes y cromosomas", "Un gen es un segmento de ADN que codifica una proteína o un ARN. El ADN se empaqueta en cromosomas dentro del núcleo. Los seres humanos tenemos 46 cromosomas (23 pares) en casi todas las células, y aproximadamente 20.000 genes.", "Un gen del color de los ojos o de la hemoglobina contiene instrucciones específicas.", "Un gen es una receta para una proteína."],
      ["📝", "ARN y transcripción", "El ARN es una molécula de una sola cadena que tiene ribosa y uracilo (U) en lugar de timina. En la transcripción, una enzima copia un gen del ADN en un ARN mensajero (ARNm) en el núcleo.", "ADN: TAC GGT → ARNm: AUG CCA.", "En el ARN, la timina se reemplaza por uracilo."],
      ["🏭", "Traducción", "El ARNm sale del núcleo y llega a los ribosomas. Allí, cada grupo de tres bases (codón) se lee y se asocia a un aminoácido, traído por el ARN de transferencia (ARNt). Los aminoácidos se unen para formar una proteína.", "El codón AUG codifica el aminoácido metionina y señala el inicio de la proteína.", "Cada codón = un aminoácido."],
      ["⚠️", "Mutaciones y dogma central", "Una mutación es un cambio en la secuencia del ADN. Puede no tener efecto, ser dañina o ser beneficiosa. El flujo de la información es: ADN → ARN → proteína.", "La anemia falciforme se debe al cambio de una sola base en el gen de la hemoglobina.", "ADN → ARN → proteína."]
    ],
    mapa: ["ADN y proteínas", [["ADN", ["Doble hélice", "Bases A, T, C, G"]], ["Gen", ["Segmento de ADN", "Codifica proteínas"]], ["Transcripción", ["ADN a ARNm", "Núcleo"]], ["Traducción", ["Ribosoma", "Codones", "Aminoácidos"]]]],
    tarjetas: [["¿Con qué se empareja la adenina en el ADN?", "Con la timina."], ["¿Con qué se empareja la citosina?", "Con la guanina."], ["¿Qué es un gen?", "Un segmento de ADN que codifica una proteína."], ["¿Qué base tiene el ARN en lugar de la timina?", "Uracilo."], ["¿Dónde ocurre la traducción?", "En los ribosomas."], ["¿Qué es un codón?", "Un grupo de tres bases que codifica un aminoácido."], ["¿Qué es una mutación?", "Un cambio en la secuencia del ADN."]],
    videos: ["ADN genes y síntesis de proteínas", "transcripción y traducción explicación", "estructura del ADN noveno grado"],
    n: 16
  },
  {
    tema: "Biotecnología e ingeniería genética",
    resumen: "La biotecnología usa seres vivos o sus partes para crear productos y procesos útiles. La ingeniería genética modifica el ADN de un organismo para darle nuevas características.",
    objetivos: ["Definirás biotecnología e ingeniería genética.", "Reconocerás aplicaciones.", "Reflexionarás sobre sus implicaciones éticas."],
    partes: [
      ["🧪", "Qué es la biotecnología", "Es el uso de organismos vivos, como bacterias, levaduras o células, para obtener productos o realizar procesos. Existe desde hace siglos: el pan, el queso, el yogur y el vino se hacen con microorganismos. La biotecnología moderna se apoya en el conocimiento del ADN.", "Las levaduras fermentan el azúcar y producen el alcohol del vino y el gas que hace crecer el pan.", "Seres vivos al servicio de las personas."],
      ["✂️", "Ingeniería genética", "Consiste en cortar, copiar y transferir genes de un organismo a otro. Se usan enzimas de restricción (que cortan el ADN) y vectores (como plásmidos bacterianos) para introducir el gen. El resultado es un organismo modificado genéticamente (transgénico).", "Se insertó el gen humano de la insulina en bacterias, que ahora la producen para tratar la diabetes.", "Se transfieren genes entre organismos."],
      ["🌾", "Aplicaciones en agricultura y ambiente", "- Cultivos resistentes a plagas o sequías.\n- Alimentos con más nutrientes.\n- Bacterias que limpian derrames de petróleo (biorremediación).\n- Producción de biocombustibles.", "El maíz Bt produce una proteína que lo protege de ciertos insectos.", "Más producción con menos pérdidas."],
      ["💊", "Aplicaciones en medicina", "- Producción de insulina, hormona del crecimiento y vacunas.\n- Terapia génica: corregir genes defectuosos.\n- Pruebas de ADN para diagnóstico y paternidad.\n- Técnicas como CRISPR, que permiten editar genes con precisión.", "Algunas vacunas se producen con técnicas de ADN recombinante.", "La medicina usa la genética para curar."],
      ["⚖️", "Ética y riesgos", "Hay debates sobre la seguridad de los transgénicos, la propiedad de las semillas, el impacto ambiental, la privacidad de la información genética y la edición de embriones humanos. Es necesario informarse, regular y decidir con responsabilidad.", "¿Debemos modificar genes para curar enfermedades? ¿Y para mejorar rasgos? Son preguntas éticas.", "La ciencia necesita ética."]
    ],
    mapa: ["Biotecnología", [["Tradicional", ["Pan", "Queso", "Vino"]], ["Ingeniería genética", ["Transgénicos", "Enzimas de restricción", "CRISPR"]], ["Aplicaciones", ["Insulina", "Cultivos", "Biorremediación"]], ["Ética", ["Seguridad", "Ambiente", "Privacidad"]]]],
    tarjetas: [["¿Qué es la biotecnología?", "El uso de seres vivos para obtener productos o procesos."], ["¿Qué es un organismo transgénico?", "Uno con genes de otra especie."], ["¿Para qué sirven las enzimas de restricción?", "Para cortar el ADN."], ["¿Qué produce la bacteria con el gen de insulina humana?", "Insulina."], ["¿Qué es CRISPR?", "Una técnica para editar genes."], ["Da un ejemplo de biotecnología tradicional.", "El pan, el yogur o el vino."], ["¿Qué es la biorremediación?", "Usar organismos para limpiar contaminantes."]],
    videos: ["biotecnología e ingeniería genética noveno grado", "qué es CRISPR explicado", "organismos transgénicos pros y contras"],
    n: 14
  },
  {
    tema: "Biodiversidad y conservación",
    resumen: "La biodiversidad es la variedad de seres vivos en la Tierra. Colombia es uno de los países más biodiversos del mundo, y su conservación es clave para el equilibrio de los ecosistemas y el bienestar humano.",
    objetivos: ["Explicarás los niveles de la biodiversidad.", "Reconocerás amenazas.", "Propondrás estrategias de conservación."],
    partes: [
      ["🌿", "Qué es la biodiversidad", "Incluye tres niveles:\n- Diversidad de especies: cuántas especies hay.\n- Diversidad genética: variación dentro de una especie.\n- Diversidad de ecosistemas: variedad de hábitats.", "Un bosque tropical tiene muchas más especies que un desierto.", "Variedad de vida en sus tres niveles."],
      ["🇨🇴", "Colombia megadiverso", "Colombia es uno de los países megadiversos. Es el primero en diversidad de aves y de orquídeas, y está entre los primeros en anfibios, mariposas y plantas. Tiene Amazonía, Andes, Caribe, Pacífico y Orinoquía, con ecosistemas muy variados.", "El oso de anteojos, el cóndor y la rana dorada son especies emblemáticas.", "Una riqueza que debemos cuidar."],
      ["🎁", "Importancia", "La biodiversidad proporciona alimentos, medicinas, madera, agua limpia, polinización, regulación del clima y belleza. Un ecosistema diverso es más resistente a los cambios y enfermedades.", "Muchas medicinas se descubrieron en plantas, como la aspirina, inspirada en la corteza del sauce.", "Los servicios de la naturaleza son vitales."],
      ["⚠️", "Amenazas", "- Deforestación y pérdida de hábitat.\n- Contaminación.\n- Cambio climático.\n- Caza y tráfico ilegal de especies.\n- Especies invasoras.\n- Sobreexplotación de recursos.", "El tráfico de fauna silvestre amenaza a loros, tortugas y monos.", "La principal amenaza es la pérdida de hábitat."],
      ["🛡️", "Conservación", "- Áreas protegidas: parques nacionales y reservas.\n- Restauración de ecosistemas.\n- Leyes y control del tráfico ilegal.\n- Educación y consumo responsable.\n- Participación de comunidades locales.\n- Bancos de semillas y zoológicos que apoyan la reproducción.", "El Parque Nacional Natural Chiribiquete, en la Amazonía, es un área protegida de gran tamaño.", "Proteger hoy es asegurar el futuro."]
    ],
    mapa: ["Biodiversidad", [["Niveles", ["Especies", "Genética", "Ecosistemas"]], ["Colombia", ["Megadiverso", "Aves y orquídeas"]], ["Amenazas", ["Deforestación", "Tráfico", "Cambio climático"]], ["Conservación", ["Áreas protegidas", "Restauración", "Educación"]]]],
    tarjetas: [["¿Qué es la biodiversidad?", "La variedad de seres vivos en la Tierra."], ["¿Cuáles son los tres niveles de biodiversidad?", "Especies, genética y ecosistemas."], ["¿En qué grupo es Colombia primera en el mundo?", "En aves (y orquídeas)."], ["¿Cuál es la principal amenaza?", "La pérdida de hábitat."], ["¿Qué es un área protegida?", "Un lugar destinado a conservar la naturaleza."], ["¿Qué es una especie invasora?", "Una especie que llega a un lugar ajeno y desplaza a las nativas."], ["Da una forma de ayudar a conservar.", "Consumir de forma responsable y no comprar fauna silvestre."]],
    videos: ["biodiversidad y conservación noveno grado", "biodiversidad de Colombia", "amenazas a la biodiversidad"],
    n: 14
  },
  {
    tema: "Poblaciones y ecología",
    resumen: "La ecología estudia las relaciones entre los seres vivos y su ambiente. Una población es el conjunto de individuos de una especie en un lugar, y su tamaño cambia según los recursos y las interacciones.",
    objetivos: ["Distinguirás población, comunidad y ecosistema.", "Explicarás cómo crecen las poblaciones.", "Analizarás relaciones entre especies."],
    partes: [
      ["🌍", "Niveles de organización", "- Población: individuos de la misma especie en un área.\n- Comunidad: todas las poblaciones de un lugar.\n- Ecosistema: la comunidad más su ambiente físico (agua, suelo, clima).\n- Bioma: gran región con clima y vida característicos.", "Todos los frailejones de un páramo son una población.", "De la población al bioma."],
      ["📈", "Crecimiento de poblaciones", "Cuatro factores cambian el tamaño: natalidad (nacimientos), mortalidad (muertes), inmigración y emigración. Si hay recursos ilimitados, el crecimiento es exponencial; pero en la naturaleza, la población se estabiliza cuando alcanza la capacidad de carga del ambiente.", "Una población de conejos crece rápido en primavera, pero se frena si falta alimento.", "La capacidad de carga limita el crecimiento."],
      ["⛓️", "Factores limitantes", "- Dependientes de la densidad: competencia, depredación, enfermedades.\n- Independientes de la densidad: sequías, incendios, heladas.", "Una enfermedad se propaga más rápido en una población muy densa.", "Los recursos y el clima limitan el tamaño."],
      ["🤝", "Relaciones entre especies", "- Depredación: un animal caza a otro.\n- Competencia: ambos usan el mismo recurso.\n- Mutualismo: ambos se benefician (abejas y flores).\n- Comensalismo: uno se beneficia y el otro no se afecta.\n- Parasitismo: uno se beneficia y daña al otro.", "Los peces payaso y las anémonas tienen una relación mutualista.", "Cada relación afecta a las poblaciones."],
      ["⚡", "Flujo de energía y ciclos", "La energía entra por los productores (plantas), pasa a consumidores y a descomponedores. Solo alrededor del 10 % de la energía pasa de un nivel al siguiente. Los nutrientes, como el carbono y el nitrógeno, se reciclan en ciclos.", "Por eso hay muchas más plantas que herbívoros y más herbívoros que carnívoros.", "La energía fluye; la materia se recicla."]
    ],
    mapa: ["Ecología", [["Niveles", ["Población", "Comunidad", "Ecosistema"]], ["Crecimiento", ["Natalidad y mortalidad", "Migración", "Capacidad de carga"]], ["Relaciones", ["Depredación", "Competencia", "Mutualismo", "Parasitismo"]], ["Energía", ["Productores", "Consumidores", "10 %"]]]],
    tarjetas: [["¿Qué es una población?", "Individuos de la misma especie en un lugar."], ["¿Qué es una comunidad?", "El conjunto de todas las poblaciones de un lugar."], ["¿Qué es la capacidad de carga?", "El número máximo de individuos que el ambiente puede sostener."], ["¿Qué es el mutualismo?", "Una relación en la que ambos se benefician."], ["¿Qué es el parasitismo?", "Uno se beneficia y daña al otro."], ["¿Qué porcentaje de energía pasa al siguiente nivel?", "Cerca del 10 %."], ["¿Qué factores aumentan una población?", "Natalidad e inmigración."]],
    videos: ["poblaciones y ecología noveno grado", "relaciones entre especies ecología", "capacidad de carga y crecimiento poblacional"],
    n: 14
  },
  {
    tema: "Sistema inmunológico y salud",
    resumen: "El sistema inmunológico defiende al cuerpo de microorganismos y sustancias dañinas. Con las vacunas y los hábitos saludables podemos prevenir muchas enfermedades.",
    objetivos: ["Explicarás las defensas del cuerpo.", "Diferenciarás inmunidad innata y adquirida.", "Entenderás cómo actúan las vacunas."],
    partes: [
      ["🛡️", "Primera barrera", "Son las defensas que impiden la entrada de patógenos: la piel, las mucosas, las lágrimas, la saliva (con lisozima), el ácido del estómago y los cilios del sistema respiratorio.", "Estornudar y toser expulsan microbios de las vías respiratorias.", "Evita que el microbio entre."],
      ["⚔️", "Respuesta innata", "Si el patógeno entra, actúan células como los fagocitos (macrófagos y neutrófilos), que engullen y destruyen microbios. También ocurre la inflamación y la fiebre, que dificultan el crecimiento de los microbios. Es una respuesta rápida, pero general.", "La zona inflamada alrededor de una herida muestra la acción de las defensas.", "Respuesta rápida y no específica."],
      ["🎯", "Respuesta adaptativa", "Es específica y tiene memoria. Los linfocitos B producen anticuerpos que se unen a los antígenos (moléculas del patógeno). Los linfocitos T destruyen células infectadas y coordinan la respuesta. Luego quedan células de memoria que responden más rápido en un segundo contacto.", "Por eso, por lo general, la varicela solo se contrae una vez.", "Específica y con memoria."],
      ["💉", "Vacunas", "Una vacuna contiene microbios debilitados o muertos, o fragmentos de ellos, que enseñan al sistema inmunológico a reconocerlos sin causar la enfermedad. Así se desarrolla inmunidad activa. Si muchas personas están vacunadas, se protege también a quienes no pueden (inmunidad de grupo).", "Las vacunas han ayudado a erradicar la viruela y a controlar el sarampión y la poliomielitis.", "La vacuna entrena al sistema inmune."],
      ["⚠️", "Alteraciones y hábitos", "- Alergias: reacción exagerada a sustancias inofensivas.\n- Enfermedades autoinmunes: el cuerpo ataca sus propias células.\n- Inmunodeficiencias, como el VIH, que debilitan las defensas.\nPara cuidar el sistema inmune: dormir bien, alimentarse bien, hacer ejercicio, lavarse las manos y vacunarse.", "Lavarse las manos reduce el riesgo de infecciones.", "El estilo de vida fortalece las defensas."]
    ],
    mapa: ["Sistema inmunológico", [["Barreras", ["Piel", "Mucosas", "Ácido gástrico"]], ["Innata", ["Fagocitos", "Inflamación", "Fiebre"]], ["Adaptativa", ["Linfocitos B", "Linfocitos T", "Memoria"]], ["Prevención", ["Vacunas", "Higiene", "Hábitos saludables"]]]],
    tarjetas: [["¿Cuál es la primera barrera del cuerpo?", "La piel y las mucosas."], ["¿Qué hacen los fagocitos?", "Engullen y destruyen microbios."], ["¿Qué producen los linfocitos B?", "Anticuerpos."], ["¿Qué es un antígeno?", "Una molécula que el sistema inmune reconoce como ajena."], ["¿Cómo funciona una vacuna?", "Entrena al sistema inmune sin causar la enfermedad."], ["¿Qué es una alergia?", "Una reacción exagerada a una sustancia inofensiva."], ["¿Qué es la inmunidad de grupo?", "La protección de una comunidad cuando muchos están vacunados."]],
    videos: ["sistema inmunológico noveno grado", "cómo funcionan las vacunas", "anticuerpos y linfocitos"],
    n: 14
  },
  {
    tema: "Nomenclatura química",
    resumen: "La nomenclatura química da nombres sistemáticos a los compuestos. Los inorgánicos se clasifican en óxidos, hidróxidos, ácidos y sales, y cada grupo tiene reglas para nombrarlo y escribirlo.",
    objetivos: ["Reconocerás funciones inorgánicas.", "Nombrarás compuestos básicos.", "Escribirás fórmulas a partir de nombres."],
    partes: [
      ["🔤", "Números de oxidación", "El número de oxidación indica la carga aparente de un átomo en un compuesto. Algunos valores comunes: H +1; O −2; metales del grupo 1: +1; grupo 2: +2; Al +3; Cl −1 (en las sales). En un compuesto neutro, la suma de los números de oxidación es 0.", "En H₂O: 2(+1) + (−2) = 0.", "La suma es cero en un compuesto neutro."],
      ["🔥", "Óxidos", "Resultan de la unión de un elemento con el oxígeno.\n- Óxidos básicos: metal + O. Ej.: Na₂O (óxido de sodio), CaO (óxido de calcio).\n- Óxidos ácidos (anhídridos): no metal + O. Ej.: CO₂ (dióxido de carbono), SO₂ (dióxido de azufre).", "Si un metal tiene varios números de oxidación: FeO es óxido de hierro (II); Fe₂O₃ es óxido de hierro (III).", "Metal + O: óxido básico."],
      ["🧂", "Hidróxidos", "Resultan de un óxido básico con agua. Contienen el grupo OH⁻ (hidróxido). Se nombran «hidróxido de» + metal.", "- NaOH: hidróxido de sodio.\n- Ca(OH)₂: hidróxido de calcio.\n- Al(OH)₃: hidróxido de aluminio.", "Metal + OH⁻."],
      ["🍋", "Ácidos", "- Hidrácidos: H + no metal (sin oxígeno). HCl: ácido clorhídrico. H₂S: ácido sulfhídrico.\n- Oxácidos: contienen oxígeno. H₂SO₄: ácido sulfúrico; HNO₃: ácido nítrico; H₂CO₃: ácido carbónico.", "El HCl del estómago es ácido clorhídrico.", "Los ácidos liberan H⁺."],
      ["🧪", "Sales", "Se forman por la reacción de un ácido con un hidróxido (neutralización). Se nombran según el ácido de origen: «-hídrico» → «-uro»; «-ico» → «-ato»; «-oso» → «-ito».", "- NaCl: cloruro de sodio.\n- CaCO₃: carbonato de calcio.\n- K₂SO₄: sulfato de potasio.\n- NaNO₃: nitrato de sodio.", "Ácido + hidróxido → sal + agua."]
    ],
    mapa: ["Nomenclatura", [["Oxidación", ["Carga aparente", "Suma cero"]], ["Óxidos", ["Básicos", "Ácidos"]], ["Hidróxidos y ácidos", ["Metal + OH", "Hidrácidos", "Oxácidos"]], ["Sales", ["-uro", "-ato", "-ito"]]]],
    tarjetas: [["¿Cómo se llama el CO₂?", "Dióxido de carbono."], ["¿Cómo se llama el NaOH?", "Hidróxido de sodio."], ["¿Cómo se llama el HCl?", "Ácido clorhídrico."], ["¿Cómo se llama el NaCl?", "Cloruro de sodio."], ["¿Cuál es la fórmula del ácido sulfúrico?", "H₂SO₄."], ["¿Qué tipo de óxido forma un metal con oxígeno?", "Óxido básico."], ["¿Qué sal forma el ácido nítrico?", "Nitratos."]],
    videos: ["nomenclatura química inorgánica noveno grado", "óxidos hidróxidos ácidos y sales", "número de oxidación explicado"],
    n: 16
  },
  {
    tema: "Ecuaciones químicas y balanceo",
    resumen: "Una ecuación química representa una reacción con símbolos y fórmulas. Para cumplir la ley de conservación de la masa, debe estar balanceada: igual número de átomos de cada elemento a ambos lados.",
    objetivos: ["Interpretarás ecuaciones químicas.", "Balancearás por tanteo.", "Reconocerás tipos de reacciones."],
    partes: [
      ["⚗️", "Partes de una ecuación", "Reactivos (lo que reacciona) → productos (lo que se forma). Se usan estados: (s) sólido, (l) líquido, (g) gas, (ac) en solución acuosa. Los coeficientes (números antes de las fórmulas) indican cuántas moléculas o moles participan.", "2H₂ + O₂ → 2H₂O: dos moléculas de hidrógeno reaccionan con una de oxígeno para formar dos de agua.", "Reactivos → productos."],
      ["⚖️", "Conservación de la masa", "Según Lavoisier, en una reacción la materia ni se crea ni se destruye: los átomos solo se reordenan. Por eso, la cantidad de átomos de cada elemento debe ser igual en reactivos y productos.", "En 2H₂ + O₂ → 2H₂O hay 4 H y 2 O a cada lado.", "Los átomos se conservan."],
      ["🔢", "Balanceo por tanteo", "1) Cuenta los átomos de cada elemento. 2) Ajusta con coeficientes (nunca cambies los subíndices). 3) Empieza por los elementos que aparecen en un solo compuesto y deja el hidrógeno y el oxígeno para el final. 4) Verifica.", "N₂ + H₂ → NH₃\n- Balanceado: N₂ + 3H₂ → 2NH₃.\nCH₄ + O₂ → CO₂ + H₂O\n- Balanceado: CH₄ + 2O₂ → CO₂ + 2H₂O.", "Cambia coeficientes, no subíndices."],
      ["🔁", "Tipos de reacciones", "- Síntesis: A + B → AB.\n- Descomposición: AB → A + B.\n- Sustitución simple: A + BC → AC + B.\n- Doble sustitución: AB + CD → AD + CB.\n- Combustión: un combustible + O₂ → CO₂ + H₂O.", "2H₂O → 2H₂ + O₂ es una descomposición (electrólisis del agua).", "Aprende a reconocer el patrón."],
      ["🌡️", "Señales de reacción", "Indicadores de que ocurre una reacción: cambio de color, formación de gas (burbujas), formación de un sólido (precipitado), cambio de temperatura, luz u olor.", "Al mezclar vinagre con bicarbonato se observa efervescencia por el CO₂ liberado.", "Observa para reconocer una reacción."]
    ],
    mapa: ["Ecuaciones químicas", [["Partes", ["Reactivos", "Productos", "Coeficientes"]], ["Conservación", ["Lavoisier", "Mismos átomos"]], ["Balanceo", ["Tanteo", "No cambiar subíndices"]], ["Tipos", ["Síntesis", "Descomposición", "Combustión"]]]],
    tarjetas: [["¿Qué son los reactivos?", "Las sustancias que reaccionan."], ["¿Qué indican los coeficientes?", "Cuántas moléculas o moles participan."], ["¿Qué ley explica el balanceo?", "La conservación de la masa."], ["Balancea H₂ + O₂ → H₂O.", "2H₂ + O₂ → 2H₂O."], ["¿Qué se produce en una combustión completa?", "CO₂ y H₂O."], ["¿Qué es una reacción de descomposición?", "AB → A + B."], ["Señala una evidencia de reacción.", "Formación de gas, cambio de color o precipitado."]],
    videos: ["balanceo de ecuaciones químicas noveno grado", "tipos de reacciones químicas", "ley de conservación de la masa"],
    n: 16
  },
  {
    tema: "Estequiometría básica",
    resumen: "La estequiometría calcula las cantidades de reactivos y productos en una reacción química. Usa el mol, la masa molar y las proporciones de la ecuación balanceada.",
    objetivos: ["Calcularás masas molares.", "Convertirás entre gramos y moles.", "Resolverás cálculos con relaciones molares."],
    partes: [
      ["🔬", "El mol y la masa molar", "El mol es la unidad de cantidad de sustancia. Un mol contiene 6,022 × 10²³ partículas (número de Avogadro). La masa molar es la masa de un mol en gramos y se calcula sumando las masas atómicas.", "Masas atómicas: H = 1; C = 12; O = 16; Na = 23; Cl = 35,5.\n- H₂O: 2(1) + 16 = 18 g/mol\n- CO₂: 12 + 2(16) = 44 g/mol", "Masa molar = suma de masas atómicas."],
      ["🔄", "Gramos y moles", "- moles = masa (g) ÷ masa molar (g/mol)\n- masa (g) = moles × masa molar", "36 g de agua son 36 ÷ 18 = 2 moles.\n88 g de CO₂ son 88 ÷ 44 = 2 moles.", "Convierte siempre a moles."],
      ["⚖️", "Relación molar", "Los coeficientes de la ecuación balanceada indican la proporción en moles.", "En 2H₂ + O₂ → 2H₂O:\n- 2 mol de H₂ reaccionan con 1 mol de O₂ y producen 2 mol de H₂O.", "La ecuación balanceada es la receta."],
      ["🧮", "Cálculo paso a paso", "1) Balancea la ecuación. 2) Convierte los gramos dados a moles. 3) Usa la relación molar para hallar los moles buscados. 4) Convierte a gramos si lo piden.", "¿Cuántos gramos de agua se forman con 4 g de H₂?\n- 4 g ÷ 2 g/mol = 2 mol de H₂\n- Relación 2:2 → 2 mol de H₂O\n- 2 × 18 = 36 g de agua.", "Gramos → moles → moles → gramos."],
      ["🎯", "Reactivo límite y rendimiento", "El reactivo límite es el que se agota primero y determina cuánto producto se forma. El reactivo en exceso sobra. El rendimiento real puede ser menor al teórico: rendimiento % = (real ÷ teórico) × 100.", "En un sándwich con 10 panes y 3 jamones, el jamón limita la cantidad de sándwiches.", "El límite define la cantidad de producto."]
    ],
    mapa: ["Estequiometría", [["Mol", ["6,022 × 10²³", "Masa molar"]], ["Conversiones", ["g a mol", "mol a g"]], ["Ecuación", ["Balanceada", "Relación molar"]], ["Extra", ["Reactivo límite", "Rendimiento"]]]],
    tarjetas: [["¿Cuál es el número de Avogadro?", "6,022 × 10²³."], ["¿Cuál es la masa molar del agua?", "18 g/mol."], ["¿Cuál es la masa molar del CO₂?", "44 g/mol."], ["¿Cuántos moles hay en 36 g de agua?", "2 moles."], ["¿Qué es el reactivo límite?", "El que se agota primero."], ["¿Cómo se calcula el rendimiento?", "(Real ÷ teórico) × 100."], ["¿Qué debe estar antes de calcular?", "La ecuación balanceada."]],
    videos: ["estequiometría básica noveno grado", "mol y masa molar explicado", "reactivo límite ejercicios"],
    n: 16
  },
  {
    tema: "Soluciones y concentración",
    resumen: "Una solución es una mezcla homogénea de soluto y solvente. La concentración indica cuánto soluto hay en una cantidad de solución y se expresa con porcentajes y molaridad.",
    objetivos: ["Identificarás soluto y solvente.", "Calcularás concentraciones.", "Prepararás diluciones."],
    partes: [
      ["💧", "Soluto y solvente", "El soluto es lo que se disuelve (en menor cantidad) y el solvente es donde se disuelve (en mayor cantidad). El agua es el solvente universal. Las soluciones pueden ser sólidas (aleaciones), líquidas (agua con sal) o gaseosas (aire).", "En el agua de mar, el agua es el solvente y las sales, el soluto.", "Soluto + solvente = solución."],
      ["📊", "Solubilidad y saturación", "La solubilidad es la máxima cantidad de soluto que se disuelve en un solvente a una temperatura. Una solución es:\n- Insaturada: puede disolver más soluto.\n- Saturada: ya no admite más.\n- Sobresaturada: tiene más de lo normal (inestable).", "Al calentar el agua, se disuelve más azúcar.", "La temperatura cambia la solubilidad."],
      ["%", "Porcentaje de concentración", "- % masa/masa = (masa de soluto ÷ masa de solución) × 100\n- % masa/volumen = (g de soluto ÷ mL de solución) × 100\n- % volumen/volumen = (mL de soluto ÷ mL de solución) × 100", "Una solución con 5 g de sal en 100 g de solución es 5 % m/m. El alcohol al 70 % tiene 70 mL de alcohol por cada 100 mL de solución.", "El porcentaje es «por cada 100»."],
      ["🧮", "Molaridad", "La molaridad (M) es el número de moles de soluto por litro de solución: M = moles de soluto ÷ litros de solución.", "Se disuelven 58,5 g de NaCl (1 mol) en agua hasta completar 1 L: la concentración es 1 M.\nPara 0,5 mol en 2 L: M = 0,25.", "M = mol/L."],
      ["🔽", "Diluciones", "Diluir es agregar solvente para disminuir la concentración. La cantidad de soluto no cambia: C₁V₁ = C₂V₂.", "¿Cómo preparar 500 mL de solución 0,1 M a partir de una 1 M?\n- V₁ = (0,1 × 500) ÷ 1 = 50 mL\nSe toman 50 mL de la solución 1 M y se completan a 500 mL con agua.", "C₁V₁ = C₂V₂."]
    ],
    mapa: ["Soluciones", [["Componentes", ["Soluto", "Solvente"]], ["Tipos", ["Insaturada", "Saturada", "Sobresaturada"]], ["Concentración", ["% m/m", "% m/v", "% v/v", "Molaridad"]], ["Dilución", ["C₁V₁ = C₂V₂"]]]],
    tarjetas: [["¿Qué es el soluto?", "Lo que se disuelve."], ["¿Qué es el solvente?", "Donde se disuelve el soluto."], ["¿Qué es una solución saturada?", "La que ya no admite más soluto."], ["¿Qué es la molaridad?", "Moles de soluto por litro de solución."], ["¿Cuál es el solvente universal?", "El agua."], ["¿Qué fórmula se usa para diluir?", "C₁V₁ = C₂V₂."], ["¿Qué significa alcohol al 70 % v/v?", "70 mL de alcohol por cada 100 mL de solución."]],
    videos: ["soluciones y concentración noveno grado", "molaridad ejercicios resueltos", "porcentaje masa volumen"],
    n: 14
  },
  {
    tema: "Ácidos y bases",
    resumen: "Los ácidos y las bases son sustancias con propiedades opuestas. La escala de pH mide la acidez de una solución y permite entender procesos como la digestión, la lluvia ácida y la neutralización.",
    objetivos: ["Distinguirás ácidos y bases.", "Interpretarás la escala de pH.", "Explicarás la neutralización."],
    partes: [
      ["🍋", "Ácidos", "Son sustancias de sabor agrio que liberan iones hidrógeno (H⁺) en agua. Reaccionan con metales y colorean de rojo el papel tornasol azul. Ejemplos: el ácido cítrico del limón, el ácido acético del vinagre y el ácido clorhídrico del estómago.", "Nunca pruebes ácidos del laboratorio; algunos son corrosivos.", "Ácido: libera H⁺."],
      ["🧼", "Bases", "Son sustancias de sabor amargo y tacto jabonoso que liberan iones hidróxido (OH⁻) en agua. Colorean de azul el papel tornasol rojo. Ejemplos: el bicarbonato de sodio, el jabón y la soda cáustica.", "Los productos de limpieza suelen ser básicos.", "Base: libera OH⁻."],
      ["📏", "Escala de pH", "El pH mide la acidez de una solución, de 0 a 14.\n- pH < 7: ácido.\n- pH = 7: neutro (agua pura).\n- pH > 7: básico.\nCada unidad de pH representa un cambio de diez veces en la acidez.", "- Jugo gástrico: pH ≈ 2\n- Café: pH ≈ 5\n- Agua: pH 7\n- Sangre: pH ≈ 7,4\n- Jabón: pH ≈ 10\n- Cloro: pH ≈ 12", "pH menor a 7 es ácido; mayor, básico."],
      ["🧪", "Indicadores", "Los indicadores cambian de color según el pH: papel tornasol, fenolftaleína (incolora en ácidos, rosada en bases) y el extracto de repollo morado, un indicador casero.", "El repollo morado se vuelve rojo con el vinagre y verde con el bicarbonato.", "El color revela el pH."],
      ["⚖️", "Neutralización", "Un ácido y una base reaccionan para formar sal y agua: ácido + base → sal + agua. Se usa en antiácidos para el ardor estomacal, en el control de la acidez del suelo y en el tratamiento de aguas.", "HCl + NaOH → NaCl + H₂O.", "Ácido + base → sal + agua."]
    ],
    mapa: ["Ácidos y bases", [["Ácidos", ["Liberan H⁺", "Sabor agrio"]], ["Bases", ["Liberan OH⁻", "Tacto jabonoso"]], ["pH", ["0 a 14", "7 neutro"]], ["Neutralización", ["Sal + agua", "Antiácidos"]]]],
    tarjetas: [["¿Qué ion libera un ácido?", "H⁺."], ["¿Qué ion libera una base?", "OH⁻."], ["¿Qué pH tiene el agua pura?", "7."], ["Una solución con pH 3 es...", "Ácida."], ["Una solución con pH 11 es...", "Básica."], ["¿Qué se produce al neutralizar un ácido con una base?", "Una sal y agua."], ["¿Qué indicador casero cambia de color con el pH?", "El repollo morado."]],
    videos: ["ácidos y bases noveno grado", "escala de pH explicada", "reacción de neutralización"],
    n: 14
  },
  {
    tema: "Cinemática: movimiento acelerado y caída libre",
    resumen: "La cinemática describe el movimiento sin considerar sus causas. En el movimiento uniformemente acelerado la velocidad cambia de forma constante, y la caída libre es un caso con la aceleración de la gravedad.",
    objetivos: ["Aplicarás las ecuaciones del MUA.", "Interpretarás gráficas.", "Resolverás problemas de caída libre."],
    partes: [
      ["🚗", "Aceleración", "La aceleración es el cambio de velocidad en el tiempo: a = (v_f − v_i) ÷ t. Se mide en m/s². Si la aceleración es constante, el movimiento es uniformemente acelerado (MUA). Si es positiva, aumenta la rapidez; si es negativa (frenado), disminuye.", "Un carro que pasa de 0 a 20 m/s en 5 s tiene a = 20 ÷ 5 = 4 m/s².", "a = cambio de velocidad ÷ tiempo."],
      ["🧮", "Ecuaciones del MUA", "- v = v₀ + a·t\n- x = v₀·t + ½·a·t²\n- v² = v₀² + 2·a·x\n(v₀ velocidad inicial, v velocidad final, x desplazamiento, t tiempo.)", "Un ciclista parte del reposo con a = 2 m/s². Tras 5 s:\n- v = 0 + 2·5 = 10 m/s\n- x = ½·2·25 = 25 m", "Elige la ecuación según los datos."],
      ["📈", "Gráficas", "- Velocidad vs. tiempo: una recta inclinada; su pendiente es la aceleración y el área bajo la recta es el desplazamiento.\n- Posición vs. tiempo: una parábola.", "Una recta horizontal en la gráfica v–t indica velocidad constante (a = 0).", "Pendiente de v–t = aceleración."],
      ["⬇️", "Caída libre", "Es el movimiento de un cuerpo que cae solo por la acción de la gravedad, sin resistencia del aire. La aceleración es g ≈ 9,8 m/s² (se suele aproximar a 10 m/s²) hacia abajo, igual para todos los cuerpos sin importar su masa.", "En el vacío, una pluma y una piedra caen al mismo tiempo.", "Todos caen con g = 9,8 m/s²."],
      ["🏗️", "Problemas de caída libre", "Con v₀ = 0 al soltar: v = g·t; h = ½·g·t². Si se lanza hacia arriba, sube hasta que v = 0 y luego baja.", "Una piedra se suelta desde un puente y tarda 3 s en llegar al agua (g = 10 m/s²):\n- v = 30 m/s\n- h = ½·10·9 = 45 m.\nSi se lanza hacia arriba a 20 m/s, sube durante 2 s y alcanza 20 m.", "Escoge un sentido positivo y mantenlo."]
    ],
    mapa: ["Movimiento acelerado", [["Aceleración", ["a = Δv/t", "m/s²"]], ["Ecuaciones", ["v = v₀ + at", "x = v₀t + ½at²", "v² = v₀² + 2ax"]], ["Gráficas", ["v–t: pendiente = a", "x–t: parábola"]], ["Caída libre", ["g = 9,8 m/s²", "No depende de la masa"]]]],
    tarjetas: [["¿Qué es la aceleración?", "El cambio de velocidad por unidad de tiempo."], ["¿En qué se mide la aceleración?", "En m/s²."], ["¿Cuál es el valor de g?", "≈ 9,8 m/s²."], ["Ecuación de velocidad en MUA.", "v = v₀ + a·t."], ["¿Qué representa la pendiente de la gráfica v–t?", "La aceleración."], ["¿Dos cuerpos de distinta masa caen igual en el vacío?", "Sí."], ["¿Qué pasa con la velocidad al subir un objeto lanzado?", "Disminuye hasta ser cero en el punto más alto."]],
    videos: ["movimiento uniformemente acelerado noveno grado", "caída libre explicada con ejemplos", "gráficas de velocidad y tiempo"],
    n: 16
  },
  {
    tema: "Dinámica y fricción",
    resumen: "La dinámica estudia las fuerzas que causan el movimiento. Las leyes de Newton explican cómo se mueven los cuerpos, y la fricción es la fuerza que se opone al deslizamiento.",
    objetivos: ["Aplicarás las leyes de Newton.", "Calcularás peso, normal y fricción.", "Resolverás problemas de fuerza neta."],
    partes: [
      ["📜", "Leyes de Newton", "1) Inercia: un cuerpo mantiene su estado de reposo o movimiento si la fuerza neta es cero.\n2) F = m·a: la fuerza neta es igual a la masa por la aceleración.\n3) Acción y reacción: si A ejerce una fuerza sobre B, B ejerce una fuerza igual y opuesta sobre A.", "Al frenar un bus, tu cuerpo se va hacia adelante por inercia.", "F = m·a."],
      ["⚖️", "Peso y normal", "El peso es la fuerza con la que la Tierra atrae a un cuerpo: P = m·g. Se mide en newtons (N). La fuerza normal es la que ejerce una superficie perpendicular a ella; sobre un plano horizontal, N = P.", "Una persona de 50 kg pesa 50 × 9,8 = 490 N.", "La masa se mide en kg; el peso, en N."],
      ["🧊", "La fricción", "Es la fuerza que se opone al movimiento entre superficies en contacto. Depende del material y de la fuerza normal: f = μ·N, donde μ es el coeficiente de fricción.\n- Fricción estática: antes de que el objeto se mueva (mayor).\n- Fricción cinética: cuando ya se desliza (menor).", "Es más difícil empezar a mover un mueble que mantenerlo en movimiento.", "f = μ·N."],
      ["🧮", "Ejemplo con fricción", "Se empuja una caja de 20 kg con una fuerza de 100 N. μ = 0,2 (g = 10 m/s²).\n- N = 20 × 10 = 200 N\n- f = 0,2 × 200 = 40 N\n- Fuerza neta = 100 − 40 = 60 N\n- a = 60 ÷ 20 = 3 m/s².", "Si la fuerza aplicada fuera de 40 N, la caja se movería con velocidad constante.", "Fuerza neta = fuerza aplicada − fricción."],
      ["🖼️", "Diagrama de cuerpo libre", "Es un dibujo en el que se representan con flechas todas las fuerzas que actúan sobre un cuerpo: peso, normal, fricción y fuerzas aplicadas. Permite plantear la segunda ley en cada dirección.", "En un libro sobre una mesa: el peso va hacia abajo y la normal hacia arriba; son iguales y se anulan.", "Dibuja todas las fuerzas."]
    ],
    mapa: ["Dinámica", [["Leyes de Newton", ["Inercia", "F = m·a", "Acción y reacción"]], ["Fuerzas", ["Peso: m·g", "Normal", "Fricción: μ·N"]], ["Fricción", ["Estática", "Cinética"]], ["Herramienta", ["Diagrama de cuerpo libre", "Fuerza neta"]]]],
    tarjetas: [["¿Cuál es la segunda ley de Newton?", "F = m·a."], ["¿Qué dice la ley de inercia?", "Un cuerpo mantiene su estado si la fuerza neta es cero."], ["¿Cómo se calcula el peso?", "P = m·g."], ["¿Qué unidad se usa para la fuerza?", "El newton (N)."], ["¿Cómo se calcula la fricción?", "f = μ·N."], ["¿Qué es la fuerza normal?", "La fuerza perpendicular que ejerce una superficie."], ["¿Qué es un diagrama de cuerpo libre?", "Un dibujo de todas las fuerzas sobre un cuerpo."]],
    videos: ["leyes de Newton noveno grado", "fuerza de fricción ejercicios", "diagrama de cuerpo libre"],
    n: 16
  },
  {
    tema: "Trabajo, potencia y energía",
    resumen: "En física, el trabajo es la transferencia de energía mediante una fuerza que mueve un objeto. La potencia mide qué tan rápido se hace el trabajo, y la energía se transforma pero se conserva.",
    objetivos: ["Calcularás trabajo y potencia.", "Distinguirás energía cinética y potencial.", "Aplicarás la conservación de la energía."],
    partes: [
      ["💪", "Trabajo", "El trabajo (W) se realiza cuando una fuerza mueve un cuerpo en la dirección de la fuerza: W = F · d · cos θ. Se mide en julios (J). Si no hay desplazamiento, no hay trabajo.", "Empujar una caja con 50 N a lo largo de 4 m en línea recta: W = 50 × 4 = 200 J.\nSostener una maleta quieta no realiza trabajo en física.", "Trabajo = fuerza × distancia."],
      ["⚡", "Potencia", "Es el trabajo realizado por unidad de tiempo: P = W ÷ t. Se mide en vatios (W): 1 W = 1 J/s. Otra unidad es el caballo de fuerza (HP).", "Una persona que sube una carga con un trabajo de 600 J en 10 s tiene una potencia de 60 W.", "Potencia = trabajo ÷ tiempo."],
      ["🏃", "Energía cinética", "Es la energía del movimiento: Ec = ½·m·v². Depende de la masa y mucho más de la velocidad (se eleva al cuadrado).", "Un carro de 1.000 kg a 10 m/s tiene Ec = ½·1.000·100 = 50.000 J.", "Más velocidad, mucha más energía."],
      ["⛰️", "Energía potencial", "- Gravitacional: Ep = m·g·h; depende de la altura.\n- Elástica: la que almacena un resorte estirado o comprimido.", "Un libro de 2 kg a 3 m de altura tiene Ep = 2·10·3 = 60 J.", "Ep = m·g·h."],
      ["♻️", "Conservación de la energía", "La energía no se crea ni se destruye: se transforma. En un sistema sin fricción, la energía mecánica (cinética + potencial) se mantiene constante. Con fricción, parte se convierte en calor.", "En una montaña rusa, al bajar la energía potencial se transforma en cinética.", "La energía total se conserva."]
    ],
    mapa: ["Energía", [["Trabajo", ["W = F·d", "Julios"]], ["Potencia", ["P = W/t", "Vatios"]], ["Cinética", ["½·m·v²"]], ["Potencial", ["m·g·h", "Elástica"]]]],
    tarjetas: [["¿Cuál es la unidad del trabajo?", "El julio (J)."], ["¿Cómo se calcula la potencia?", "Trabajo dividido por tiempo."], ["Fórmula de energía cinética.", "Ec = ½·m·v²."], ["Fórmula de energía potencial gravitacional.", "Ep = m·g·h."], ["¿Un objeto que se sostiene quieto realiza trabajo?", "No, porque no hay desplazamiento."], ["¿Qué dice la conservación de la energía?", "La energía no se crea ni se destruye, se transforma."], ["¿Cuántos julios por segundo es 1 vatio?", "1 J/s."]],
    videos: ["trabajo potencia y energía noveno grado", "energía cinética y potencial", "conservación de la energía mecánica"],
    n: 16
  },
  {
    tema: "Ley de Ohm",
    resumen: "La ley de Ohm relaciona el voltaje, la corriente y la resistencia en un circuito eléctrico: V = I · R. Permite calcular cualquiera de las tres magnitudes si se conocen las otras dos.",
    objetivos: ["Definirás voltaje, corriente y resistencia.", "Aplicarás V = I·R.", "Analizarás circuitos en serie y paralelo."],
    partes: [
      ["⚡", "Magnitudes eléctricas", "- Voltaje (V): la diferencia de potencial que impulsa la corriente; se mide en voltios (V).\n- Corriente (I): el flujo de carga por segundo; se mide en amperios (A).\n- Resistencia (R): la oposición al paso de corriente; se mide en ohmios (Ω).", "Una pila de linterna entrega 1,5 V; el tomacorriente de una casa en Colombia, 120 V.", "Voltaje empuja, resistencia frena."],
      ["📐", "La ley de Ohm", "Establece que la corriente es proporcional al voltaje e inversamente proporcional a la resistencia: V = I·R, o también I = V ÷ R y R = V ÷ I.", "Con 12 V y una resistencia de 4 Ω, I = 12 ÷ 4 = 3 A.", "V = I · R."],
      ["🔗", "Circuito en serie", "Los componentes se conectan uno tras otro. La corriente es la misma en todos, el voltaje se reparte y la resistencia total es la suma: R_T = R₁ + R₂ + ...", "Con R₁ = 2 Ω y R₂ = 4 Ω en serie, R_T = 6 Ω. Con 12 V, I = 12 ÷ 6 = 2 A.", "Serie: si uno falla, se interrumpe todo."],
      ["🔀", "Circuito en paralelo", "Los componentes se conectan en ramas. El voltaje es el mismo en cada rama, la corriente se reparte y la resistencia total es menor: 1/R_T = 1/R₁ + 1/R₂ + ...", "Dos resistencias de 6 Ω en paralelo: 1/R_T = 1/6 + 1/6 = 1/3 → R_T = 3 Ω.\nLas lámparas de una casa están en paralelo.", "Paralelo: cada rama funciona de forma independiente."],
      ["🔌", "Potencia eléctrica y seguridad", "La potencia eléctrica es P = V · I (en vatios). La energía consumida se mide en kilovatios-hora (kWh), que es lo que aparece en la factura. Por seguridad, no se manipulan enchufes con las manos mojadas ni se sobrecargan las tomas.", "Un bombillo de 60 W encendido 5 horas consume 0,06 kW × 5 h = 0,3 kWh.", "La electricidad exige respeto."]
    ],
    mapa: ["Ley de Ohm", [["Magnitudes", ["Voltaje (V)", "Corriente (A)", "Resistencia (Ω)"]], ["Ley", ["V = I·R"]], ["Serie", ["R se suma", "Misma corriente"]], ["Paralelo", ["Mismo voltaje", "R total menor"]]]],
    tarjetas: [["¿Cuál es la ley de Ohm?", "V = I · R."], ["¿En qué se mide la resistencia?", "En ohmios (Ω)."], ["¿En qué se mide la corriente?", "En amperios (A)."], ["Con 10 V y 5 Ω, ¿cuánta corriente fluye?", "2 A."], ["¿Cómo se calcula R total en serie?", "Sumando las resistencias."], ["¿Qué magnitud es igual en todas las ramas de un paralelo?", "El voltaje."], ["¿Cómo se calcula la potencia eléctrica?", "P = V · I."]],
    videos: ["ley de Ohm noveno grado", "circuitos en serie y paralelo", "cómo calcular resistencia equivalente"],
    n: 16
  },
  {
    tema: "Magnetismo y electromagnetismo",
    resumen: "El magnetismo es la propiedad de los imanes de atraer ciertos metales. Está ligado a la electricidad: una corriente produce un campo magnético, y un campo magnético cambiante produce corriente.",
    objetivos: ["Describirás imanes y campos magnéticos.", "Explicarás el electroimán.", "Relacionarás el electromagnetismo con generadores y motores."],
    partes: [
      ["🧲", "Imanes y polos", "Un imán tiene dos polos: norte y sur. Polos iguales se repelen y polos distintos se atraen. Si se parte un imán, cada pedazo vuelve a tener dos polos. Los imanes atraen materiales como el hierro, el níquel y el cobalto.", "Una brújula funciona porque su aguja es un imán alineado con el campo magnético de la Tierra.", "Polos opuestos se atraen."],
      ["🌐", "Campo magnético", "Es la región alrededor de un imán donde se perciben sus efectos. Se representa con líneas de campo que salen del polo norte y entran al polo sur. La Tierra se comporta como un gran imán, y su campo nos protege de partículas del viento solar.", "Las auroras boreales ocurren cuando partículas solares interactúan con el campo terrestre.", "Las líneas de campo van de norte a sur."],
      ["🔌", "Corriente y magnetismo", "En 1820, Hans Christian Ørsted descubrió que una corriente eléctrica desvía la aguja de una brújula: la corriente produce un campo magnético. Un cable con corriente se rodea de un campo en forma de círculos.", "Cuanto mayor es la corriente, más fuerte es el campo.", "Corriente ⇒ campo magnético."],
      ["🔩", "Electroimán", "Es una bobina de alambre (solenoide) enrollada en un núcleo de hierro; al pasar corriente, se comporta como un imán que se puede encender y apagar. Su fuerza aumenta con más vueltas, más corriente y núcleo de hierro.", "Las grúas de las chatarrerías usan electroimanes para levantar metales.", "Se enciende y se apaga con la corriente."],
      ["🔄", "Inducción, motores y generadores", "En 1831, Faraday mostró que un campo magnético que cambia induce una corriente en un conductor (inducción electromagnética). Esto permite:\n- Generadores: convierten movimiento en electricidad (hidroeléctricas).\n- Motores: convierten electricidad en movimiento.\n- Transformadores: cambian el voltaje.", "En una hidroeléctrica, el agua hace girar turbinas que mueven imanes dentro de bobinas.", "Magnetismo cambiante ⇒ corriente."]
    ],
    mapa: ["Electromagnetismo", [["Imanes", ["Polos norte y sur", "Atracción y repulsión"]], ["Campo", ["Líneas de campo", "Campo terrestre"]], ["Corriente y campo", ["Ørsted", "Electroimán"]], ["Inducción", ["Faraday", "Generador", "Motor", "Transformador"]]]],
    tarjetas: [["¿Qué pasa entre polos iguales?", "Se repelen."], ["¿Qué descubrió Ørsted?", "Que la corriente produce un campo magnético."], ["¿Qué es un electroimán?", "Una bobina con corriente y núcleo de hierro que actúa como imán."], ["¿Qué descubrió Faraday?", "La inducción electromagnética."], ["¿Qué convierte un generador?", "Movimiento en electricidad."], ["¿Qué convierte un motor eléctrico?", "Electricidad en movimiento."], ["¿Cómo se aumenta la fuerza de un electroimán?", "Con más vueltas, más corriente y un núcleo de hierro."]],
    videos: ["magnetismo y electromagnetismo noveno grado", "electroimán cómo funciona", "inducción electromagnética Faraday"],
    n: 14
  }
];
