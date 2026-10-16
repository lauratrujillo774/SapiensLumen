/* ============================================================
   Sapiens Lumen – Contenido de lecciones estilo Duolingo
   Cada materia tiene unidades → lecciones → ejercicios
   Tipos: choice | truefalse | match | fill | order
   ============================================================ */

const LESSONS = {

  /* ===================== MATEMÁTICAS ===================== */
  math: {
    name: "Matemáticas",
    icon: "fa-calculator",
    color: "#FFA726",
    units: [
      {
        id: 1,
        title: "Números y operaciones",
        desc: "Suma, resta, multiplicación y división",
        lessons: [
          {
            id: "m1-1",
            title: "Sumas básicas",
            icon: "fa-plus",
            xp: 10,
            exercises: [
              { type: "choice", q: "¿Cuánto es 7 + 5?", options: ["10", "12", "13", "11"], answer: 1 },
              { type: "choice", q: "¿Cuánto es 15 + 8?", options: ["22", "23", "24", "21"], answer: 1 },
              { type: "truefalse", q: "8 + 9 = 17", answer: true },
              { type: "fill", q: "Completa: 12 + ___ = 20", blanks: ["8"], options: ["6", "8", "10", "7"] },
              { type: "choice", q: "¿Cuál es el resultado de 25 + 17?", options: ["40", "42", "43", "41"], answer: 1 }
            ]
          },
          {
            id: "m1-2",
            title: "Restas",
            icon: "fa-minus",
            xp: 10,
            exercises: [
              { type: "choice", q: "¿Cuánto es 14 − 6?", options: ["7", "8", "9", "6"], answer: 1 },
              { type: "truefalse", q: "20 − 9 = 12", answer: false },
              { type: "choice", q: "¿Cuánto es 50 − 23?", options: ["26", "27", "28", "25"], answer: 1 },
              { type: "fill", q: "Completa: 18 − ___ = 11", blanks: ["7"], options: ["5", "6", "7", "8"] },
              { type: "choice", q: "Si tienes 30 manzanas y das 12, ¿cuántas te quedan?", options: ["16", "18", "20", "17"], answer: 1 }
            ]
          },
          {
            id: "m1-3",
            title: "Multiplicación",
            icon: "fa-xmark",
            xp: 15,
            exercises: [
              { type: "choice", q: "¿Cuánto es 6 × 7?", options: ["40", "42", "48", "36"], answer: 1 },
              { type: "choice", q: "¿Cuánto es 9 × 8?", options: ["72", "64", "81", "70"], answer: 0 },
              { type: "truefalse", q: "5 × 5 = 25", answer: true },
              { type: "fill", q: "Completa: 4 × ___ = 28", blanks: ["7"], options: ["6", "7", "8", "5"] },
              { type: "choice", q: "¿Cuál es 12 × 3?", options: ["34", "36", "38", "32"], answer: 1 }
            ]
          },
          {
            id: "m1-chest",
            title: "Cofre de práctica",
            icon: "fa-box",
            type: "chest",
            xp: 20,
            exercises: [
              { type: "choice", q: "¿Cuánto es 8 × 6 + 4?", options: ["50", "52", "48", "54"], answer: 1 },
              { type: "choice", q: "¿Cuánto es (15 − 3) × 2?", options: ["22", "24", "26", "20"], answer: 1 },
              { type: "truefalse", q: "7 × 9 = 63", answer: true }
            ]
          }
        ]
      },
      {
        id: 2,
        title: "Fracciones y decimales",
        desc: "Entiende partes de un todo",
        lessons: [
          {
            id: "m2-1",
            title: "¿Qué es una fracción?",
            icon: "fa-pie-chart",
            xp: 15,
            exercises: [
              { type: "choice", q: "En la fracción 3/4, ¿cuál es el numerador?", options: ["3", "4", "7", "1"], answer: 0 },
              { type: "choice", q: "¿Qué fracción representa la mitad?", options: ["1/3", "1/2", "2/3", "1/4"], answer: 1 },
              { type: "truefalse", q: "2/4 es igual a 1/2", answer: true },
              { type: "match", pairs: [["1/2", "Mitad"], ["1/4", "Cuarto"], ["3/4", "Tres cuartos"], ["1/3", "Un tercio"]] },
              { type: "choice", q: "Si comes 2 de 8 porciones de pizza, ¿qué fracción comiste?", options: ["2/8", "1/4", "Ambas son correctas", "Ninguna"], answer: 2 }
            ]
          },
          {
            id: "m2-2",
            title: "Decimales",
            icon: "fa-percent",
            xp: 15,
            exercises: [
              { type: "choice", q: "¿Cómo se escribe 0.5 como fracción?", options: ["1/5", "1/2", "5/10", "Ambas B y C"], answer: 3 },
              { type: "truefalse", q: "0.25 = 1/4", answer: true },
              { type: "choice", q: "¿Cuál es mayor: 0.7 o 0.07?", options: ["0.7", "0.07", "Son iguales"], answer: 0 },
              { type: "fill", q: "0.75 es igual a ___ / 4", blanks: ["3"], options: ["2", "3", "4", "1"] },
              { type: "choice", q: "¿Cuánto es 0.3 + 0.4?", options: ["0.7", "0.07", "0.12", "0.34"], answer: 0 }
            ]
          },
          {
            id: "m2-boss",
            title: "Jefe: Fracciones",
            icon: "fa-dragon",
            type: "boss",
            xp: 30,
            exercises: [
              { type: "choice", q: "¿Cuánto es 1/2 + 1/4?", options: ["2/6", "3/4", "1/6", "2/4"], answer: 1 },
              { type: "choice", q: "Simplifica 6/9", options: ["2/3", "3/6", "1/3", "6/3"], answer: 0 },
              { type: "truefalse", q: "0.5 + 0.25 = 0.75", answer: true },
              { type: "choice", q: "¿Qué fracción es mayor: 2/3 o 3/5?", options: ["2/3", "3/5", "Son iguales"], answer: 0 },
              { type: "fill", q: "1/2 de 20 es ___", blanks: ["10"], options: ["5", "10", "15", "8"] }
            ]
          }
        ]
      },
      {
        id: 3,
        title: "Geometría básica",
        desc: "Figuras, perímetros y áreas",
        lessons: [
          {
            id: "m3-1",
            title: "Figuras planas",
            icon: "fa-shapes",
            xp: 10,
            exercises: [
              { type: "choice", q: "¿Cuántos lados tiene un triángulo?", options: ["2", "3", "4", "5"], answer: 1 },
              { type: "choice", q: "¿Qué figura tiene 4 lados iguales y 4 ángulos rectos?", options: ["Rectángulo", "Rombo", "Cuadrado", "Trapecio"], answer: 2 },
              { type: "truefalse", q: "Un círculo tiene lados", answer: false },
              { type: "match", pairs: [["Triángulo", "3 lados"], ["Cuadrado", "4 lados iguales"], ["Pentágono", "5 lados"], ["Hexágono", "6 lados"]] },
              { type: "choice", q: "¿Cuántos vértices tiene un rectángulo?", options: ["3", "4", "5", "2"], answer: 1 }
            ]
          },
          {
            id: "m3-2",
            title: "Perímetro y área",
            icon: "fa-ruler-combined",
            xp: 15,
            exercises: [
              { type: "choice", q: "Perímetro de un cuadrado de lado 5 cm:", options: ["20 cm", "25 cm", "10 cm", "15 cm"], answer: 0 },
              { type: "choice", q: "Área de un rectángulo de 4 × 6:", options: ["20", "24", "10", "12"], answer: 1 },
              { type: "truefalse", q: "El perímetro es la medida del interior de una figura", answer: false },
              { type: "fill", q: "Área de un cuadrado de lado 3: ___", blanks: ["9"], options: ["6", "9", "12", "3"] },
              { type: "choice", q: "Perímetro de un triángulo equilátero de lado 7:", options: ["14", "21", "28", "49"], answer: 1 }
            ]
          }
        ]
      }
,
      {
        id: 4,
        title: "Álgebra introductoria",
        desc: "Variables, ecuaciones simples",
        lessons: [
          {
            id: "m4-1", title: "Variables", icon: "fa-font", xp: 15,
            exercises: [
              { type: "choice", q: "En 3x + 2, ¿qué es x?", options: ["Un número fijo", "Una variable", "Un signo", "Una fracción"], answer: 1 },
              { type: "choice", q: "Si x = 4, ¿cuánto es 2x?", options: ["6", "8", "4", "2"], answer: 1 },
              { type: "truefalse", q: "Una variable puede tomar distintos valores", answer: true },
              { type: "fill", q: "Si x = 5, entonces x + 3 = ___", blanks: ["8"], options: ["7", "8", "9", "15"] },
              { type: "choice", q: "¿Cuánto es x si x + 7 = 12?", options: ["3", "5", "19", "4"], answer: 1 }
            ]
          },
          {
            id: "m4-2", title: "Ecuaciones simples", icon: "fa-equals", xp: 15,
            exercises: [
              { type: "choice", q: "Resuelve: x − 4 = 9", options: ["5", "13", "36", "4"], answer: 1 },
              { type: "truefalse", q: "Si 2x = 10, entonces x = 5", answer: true },
              { type: "choice", q: "Resuelve: 3x = 15", options: ["3", "5", "12", "45"], answer: 1 },
              { type: "fill", q: "x / 2 = 6 → x = ___", blanks: ["12"], options: ["3", "8", "12", "4"] },
              { type: "choice", q: "Si x + 5 = 5, x vale:", options: ["0", "1", "5", "10"], answer: 0 }
            ]
          },
          {
            id: "m4-boss", title: "Jefe: Álgebra", icon: "fa-dragon", type: "boss", xp: 30,
            exercises: [
              { type: "choice", q: "2x + 3 = 11 → x =", options: ["3", "4", "5", "8"], answer: 1 },
              { type: "truefalse", q: "5x = 0 implica x = 0", answer: true },
              { type: "choice", q: "x/4 = 3 → x =", options: ["7", "12", "1", "4"], answer: 1 },
              { type: "fill", q: "Si 4x = 20, x = ___", blanks: ["5"], options: ["4", "5", "16", "24"] },
              { type: "choice", q: "x − 8 = 2 → x =", options: ["6", "10", "16", "4"], answer: 1 }
            ]
          }
        ]
      },
      {
        id: 5,
        title: "Porcentajes",
        desc: "Tanto por ciento en la vida diaria",
        lessons: [
          {
            id: "m5-1", title: "¿Qué es un %?", icon: "fa-percent", xp: 15,
            exercises: [
              { type: "choice", q: "50% de 100 es:", options: ["25", "50", "75", "100"], answer: 1 },
              { type: "truefalse", q: "25% es lo mismo que 1/4", answer: true },
              { type: "choice", q: "10% de 80 es:", options: ["8", "10", "18", "70"], answer: 0 },
              { type: "fill", q: "20% de 50 = ___", blanks: ["10"], options: ["5", "10", "20", "30"] },
              { type: "choice", q: "100% de cualquier número es:", options: ["La mitad", "El mismo número", "El doble", "Cero"], answer: 1 }
            ]
          },
          {
            id: "m5-2", title: "Problemas con %", icon: "fa-cart-shopping", xp: 15,
            exercises: [
              { type: "choice", q: "Una camisa de $40 con 50% de descuento cuesta:", options: ["$10", "$20", "$30", "$40"], answer: 1 },
              { type: "truefalse", q: "Un aumento del 10% sobre 200 es 20", answer: true },
              { type: "choice", q: "¿Cuánto es el 25% de 200?", options: ["25", "50", "75", "100"], answer: 1 },
              { type: "fill", q: "15% de 100 = ___", blanks: ["15"], options: ["10", "15", "20", "25"] },
              { type: "choice", q: "Si apruebas el 80% de 20 preguntas, acertaste:", options: ["12", "14", "16", "18"], answer: 2 }
            ]
          }
        ]
      }
    ]
  },

  /* ===================== CIENCIAS ===================== */
  science: {
    name: "Ciencias",
    icon: "fa-flask",
    color: "#66BB6A",
    units: [
      {
        id: 1,
        title: "El cuerpo humano",
        desc: "Sistemas y órganos principales",
        lessons: [
          {
            id: "s1-1",
            title: "Sistemas del cuerpo",
            icon: "fa-heart-pulse",
            xp: 10,
            exercises: [
              { type: "choice", q: "¿Qué sistema transporta la sangre?", options: ["Digestivo", "Circulatorio", "Respiratorio", "Nervioso"], answer: 1 },
              { type: "choice", q: "¿Cuál es el órgano principal del sistema respiratorio?", options: ["Corazón", "Hígado", "Pulmones", "Estómago"], answer: 2 },
              { type: "truefalse", q: "El cerebro forma parte del sistema nervioso", answer: true },
              { type: "match", pairs: [["Corazón", "Circulatorio"], ["Pulmones", "Respiratorio"], ["Estómago", "Digestivo"], ["Cerebro", "Nervioso"]] },
              { type: "choice", q: "¿Qué sistema nos permite movernos?", options: ["Óseo y muscular", "Digestivo", "Inmunológico", "Endocrino"], answer: 0 }
            ]
          },
          {
            id: "s1-2",
            title: "Nutrición",
            icon: "fa-apple-whole",
            xp: 10,
            exercises: [
              { type: "choice", q: "¿Qué nutriente da energía rápida?", options: ["Proteínas", "Carbohidratos", "Vitaminas", "Minerales"], answer: 1 },
              { type: "truefalse", q: "Las proteínas ayudan a construir músculos", answer: true },
              { type: "choice", q: "¿Cuál es una buena fuente de calcio?", options: ["Leche", "Azúcar", "Aceite", "Refresco"], answer: 0 },
              { type: "fill", q: "La vitamina C se encuentra en las ___", blanks: ["naranjas"], options: ["naranjas", "carnes", "pan", "agua"] },
              { type: "choice", q: "¿Cuántos grupos de alimentos hay en el plato del buen comer?", options: ["3", "4", "5", "6"], answer: 0 }
            ]
          },
          {
            id: "s1-chest",
            title: "Cofre de salud",
            icon: "fa-box",
            type: "chest",
            xp: 20,
            exercises: [
              { type: "choice", q: "¿Cuántos huesos tiene aproximadamente el cuerpo adulto?", options: ["106", "206", "306", "156"], answer: 1 },
              { type: "truefalse", q: "El corazón late aproximadamente 100.000 veces al día", answer: true },
              { type: "choice", q: "¿Qué gas inhalamos principalmente?", options: ["CO₂", "Oxígeno", "Nitrógeno", "Helio"], answer: 1 }
            ]
          }
        ]
      },
      {
        id: 2,
        title: "Los seres vivos",
        desc: "Plantas, animales y ecosistemas",
        lessons: [
          {
            id: "s2-1",
            title: "Reinos de la vida",
            icon: "fa-leaf",
            xp: 15,
            exercises: [
              { type: "choice", q: "¿Qué reino incluye a los hongos?", options: ["Animal", "Vegetal", "Fungi", "Protista"], answer: 2 },
              { type: "truefalse", q: "Las plantas producen su propio alimento con la fotosíntesis", answer: true },
              { type: "choice", q: "¿Cuál NO es un mamífero?", options: ["Ballena", "Murciélago", "Tiburón", "Delfín"], answer: 2 },
              { type: "match", pairs: [["León", "Carnívoro"], ["Vaca", "Herbívoro"], ["Oso", "Omnívoro"], ["Águila", "Carnívoro"]] },
              { type: "choice", q: "¿Qué proceso es fundamental en las plantas para la fotosíntesis?", options: ["Oxígeno", "Dióxido de carbono", "Nitrógeno", "Helio"], answer: 1 }
            ]
          },
          {
            id: "s2-2",
            title: "Cadenas alimentarias",
            icon: "fa-seedling",
            xp: 15,
            exercises: [
              { type: "choice", q: "¿Quién está en la base de casi todas las cadenas alimentarias?", options: ["Carnívoros", "Productores (plantas)", "Descomponedores", "Herbívoros"], answer: 1 },
              { type: "truefalse", q: "Los descomponedores reciclan nutrientes", answer: true },
              { type: "order", items: ["Planta", "Insecto", "Rana", "Serpiente"], correct: [0,1,2,3] },
              { type: "choice", q: "Un animal que come plantas y carne es:", options: ["Herbívoro", "Carnívoro", "Omnívoro", "Productor"], answer: 2 },
              { type: "fill", q: "Los ___ se alimentan de cadáveres y materia muerta", blanks: ["descomponedores"], options: ["descomponedores", "productores", "herbívoros", "cazadores"] }
            ]
          },
          {
            id: "s2-boss",
            title: "Jefe: Ecosistemas",
            icon: "fa-dragon",
            type: "boss",
            xp: 30,
            exercises: [
              { type: "choice", q: "¿Qué es un ecosistema?", options: ["Solo animales", "Seres vivos + ambiente", "Solo plantas", "El clima"], answer: 1 },
              { type: "truefalse", q: "La biodiversidad es importante para la estabilidad de los ecosistemas", answer: true },
              { type: "choice", q: "¿Cuál es un ejemplo de factor abiótico?", options: ["Árbol", "Temperatura", "Insecto", "Hongo"], answer: 1 },
              { type: "choice", q: "La deforestación afecta principalmente a:", options: ["Solo a los árboles", "Todo el ecosistema", "Solo a los animales", "Nada"], answer: 1 },
              { type: "match", pairs: [["Productor", "Planta"], ["Consumidor primario", "Herbívoro"], ["Consumidor secundario", "Carnívoro"], ["Descomponedor", "Hongo"]] }
            ]
          }
        ]
      }
,
      {
        id: 3,
        title: "La materia y la energía",
        desc: "Estados de la materia y energía",
        lessons: [
          {
            id: "s3-1", title: "Estados de la materia", icon: "fa-droplet", xp: 15,
            exercises: [
              { type: "choice", q: "¿Cuáles son los 3 estados básicos de la materia?", options: ["Caliente, frío, tibio", "Sólido, líquido, gas", "Grande, mediano, pequeño"], answer: 1 },
              { type: "truefalse", q: "El hielo es agua en estado sólido", answer: true },
              { type: "choice", q: "El vapor de agua es un:", options: ["Sólido", "Líquido", "Gas"], answer: 2 },
              { type: "match", pairs: [["Hielo", "Sólido"], ["Agua", "Líquido"], ["Vapor", "Gas"], ["Roca", "Sólido"]] },
              { type: "fill", q: "Al calentar el hielo se convierte en ___", blanks: ["agua"], options: ["agua", "vapor", "nieve", "sal"] }
            ]
          },
          {
            id: "s3-2", title: "Formas de energía", icon: "fa-bolt", xp: 15,
            exercises: [
              { type: "choice", q: "La energía del sol se llama:", options: ["Eólica", "Solar", "Hidráulica", "Nuclear"], answer: 1 },
              { type: "truefalse", q: "La energía no se crea ni se destruye, solo se transforma", answer: true },
              { type: "choice", q: "¿Qué tipo de energía tiene un objeto en movimiento?", options: ["Potencial", "Cinética", "Química", "Térmica"], answer: 1 },
              { type: "match", pairs: [["Sol", "Solar"], ["Viento", "Eólica"], ["Agua en represa", "Hidráulica"], ["Comida", "Química"]] },
              { type: "choice", q: "Una pila convierte energía química en:", options: ["Sonido", "Eléctrica", "Nuclear", "Eólica"], answer: 1 }
            ]
          },
          {
            id: "s3-boss", title: "Jefe: Materia y energía", icon: "fa-dragon", type: "boss", xp: 30,
            exercises: [
              { type: "choice", q: "Pasar de líquido a gas se llama:", options: ["Fusión", "Evaporación", "Solidificación", "Condensación"], answer: 1 },
              { type: "truefalse", q: "La condensación es pasar de gas a líquido", answer: true },
              { type: "choice", q: "La energía que sentimos como calor es:", options: ["Sonora", "Térmica", "Luminosa", "Eólica"], answer: 1 },
              { type: "fill", q: "El agua hierve a ___ °C (a nivel del mar)", blanks: ["100"], options: ["0", "50", "100", "212"] },
              { type: "choice", q: "¿Cuál NO es una fuente de energía renovable?", options: ["Sol", "Viento", "Carbón", "Agua"], answer: 2 }
            ]
          }
        ]
      },
      {
        id: 4,
        title: "El sistema solar",
        desc: "Planetas y el espacio",
        lessons: [
          {
            id: "s4-1", title: "Los planetas", icon: "fa-earth-americas", xp: 15,
            exercises: [
              { type: "choice", q: "¿Cuántos planetas hay en el sistema solar?", options: ["7", "8", "9", "10"], answer: 1 },
              { type: "truefalse", q: "La Tierra es el tercer planeta desde el Sol", answer: true },
              { type: "choice", q: "El planeta más grande es:", options: ["Saturno", "Júpiter", "Neptuno", "Marte"], answer: 1 },
              { type: "order", items: ["Mercurio", "Venus", "Tierra", "Marte"], correct: [0,1,2,3] },
              { type: "fill", q: "El planeta rojo es ___", blanks: ["Marte"], options: ["Marte", "Venus", "Júpiter", "Mercurio"] }
            ]
          },
          {
            id: "s4-2", title: "Sol y Luna", icon: "fa-moon", xp: 15,
            exercises: [
              { type: "choice", q: "La Luna es un:", options: ["Planeta", "Satélite natural", "Estrella", "Cometa"], answer: 1 },
              { type: "truefalse", q: "El Sol es una estrella", answer: true },
              { type: "choice", q: "Un eclipse de Sol ocurre cuando:", options: ["La Tierra tapa la Luna", "La Luna tapa el Sol", "Marte pasa delante", "Es de noche"], answer: 1 },
              { type: "choice", q: "¿Cuánto tarda la Tierra en dar una vuelta al Sol?", options: ["1 día", "1 mes", "1 año", "1 semana"], answer: 2 },
              { type: "fill", q: "La luz del Sol tarda unos ___ minutos en llegar a la Tierra", blanks: ["8"], options: ["1", "8", "60", "24"] }
            ]
          }
        ]
      }
    ]
  },

  /* ===================== LECTURA / LENGUA ===================== */
  reading: {
    name: "Lectura",
    icon: "fa-book",
    color: "#9CCC65",
    units: [
      {
        id: 1,
        title: "Comprensión lectora",
        desc: "Entiende lo que lees",
        lessons: [
          {
            id: "r1-1",
            title: "Idea principal",
            icon: "fa-lightbulb",
            xp: 10,
            exercises: [
              { type: "choice", q: "La idea principal de un texto es:", options: ["Un detalle", "Lo más importante que dice", "El título", "La última frase"], answer: 1 },
              { type: "choice", q: "¿Dónde suele estar la idea principal?", options: ["Solo al final", "Al inicio o al final del párrafo", "En las notas", "En las imágenes"], answer: 1 },
              { type: "truefalse", q: "Los detalles apoyan la idea principal", answer: true },
              { type: "choice", q: "Lee: 'Los delfines son mamíferos inteligentes que viven en el mar y se comunican con sonidos.' ¿Idea principal?", options: ["Viven en el mar", "Los delfines son mamíferos inteligentes", "Se comunican", "Son grandes"], answer: 1 },
              { type: "fill", q: "La idea ___ resume el mensaje central del texto", blanks: ["principal"], options: ["principal", "secundaria", "final", "inicial"] }
            ]
          },
          {
            id: "r1-2",
            title: "Inferencias",
            icon: "fa-magnifying-glass",
            xp: 15,
            exercises: [
              { type: "choice", q: "Inferir significa:", options: ["Copiar el texto", "Sacar conclusiones a partir de pistas", "Memorizar", "Traducir"], answer: 1 },
              { type: "truefalse", q: "Para inferir usamos lo que dice el texto + lo que ya sabemos", answer: true },
              { type: "choice", q: "'Ana cerró el paraguas y sonrió al ver el sol.' ¿Qué se puede inferir?", options: ["Está lloviendo", "Dejó de llover", "Es de noche", "Hace frío"], answer: 1 },
              { type: "choice", q: "'Pedro llegó jadeando y se sentó.' ¿Qué se infiere?", options: ["Estaba cansado o corrió", "Tenía hambre", "Estaba feliz", "Se aburrió"], answer: 0 },
              { type: "truefalse", q: "Una inferencia siempre está escrita literalmente en el texto", answer: false }
            ]
          },
          {
            id: "r1-chest",
            title: "Cofre lector",
            icon: "fa-box",
            type: "chest",
            xp: 20,
            exercises: [
              { type: "choice", q: "¿Qué tipo de texto cuenta una historia inventada?", options: ["Informativo", "Narrativo", "Instructivo", "Argumentativo"], answer: 1 },
              { type: "truefalse", q: "Un texto informativo busca dar datos reales", answer: true },
              { type: "match", pairs: [["Narrativo", "Cuenta historias"], ["Informativo", "Da datos"], ["Instructivo", "Explica pasos"], ["Poético", "Usa rima y ritmo"]] }
            ]
          }
        ]
      },
      {
        id: 2,
        title: "Gramática y ortografía",
        desc: "Escribe correctamente",
        lessons: [
          {
            id: "r2-1",
            title: "Tipos de palabras",
            icon: "fa-spell-check",
            xp: 15,
            exercises: [
              { type: "choice", q: "¿Qué es un sustantivo?", options: ["Acción", "Nombre de persona, animal o cosa", "Calificativo", "Conector"], answer: 1 },
              { type: "choice", q: "En 'El gato negro corre', ¿cuál es el verbo?", options: ["gato", "negro", "corre", "El"], answer: 2 },
              { type: "truefalse", q: "Los adjetivos describen a los sustantivos", answer: true },
              { type: "match", pairs: [["Sustantivo", "casa"], ["Verbo", "correr"], ["Adjetivo", "bonito"], ["Adverbio", "rápidamente"]] },
              { type: "fill", q: "El ___ indica una acción o estado", blanks: ["verbo"], options: ["verbo", "sustantivo", "adjetivo", "artículo"] }
            ]
          },
          {
            id: "r2-2",
            title: "Acentuación",
            icon: "fa-font",
            xp: 15,
            exercises: [
              { type: "choice", q: "Las palabras agudas llevan tilde cuando terminan en:", options: ["Consonante", "n, s o vocal", "Cualquier letra", "Solo vocal"], answer: 1 },
              { type: "truefalse", q: "«canción» es una palabra aguda", answer: true },
              { type: "choice", q: "¿Cuál está bien escrita?", options: ["arbol", "árbol", "árból", "arból"], answer: 1 },
              { type: "choice", q: "Las palabras graves (llanas) llevan tilde cuando NO terminan en:", options: ["n, s o vocal", "consonante fuerte", "vocal"], answer: 0 },
              { type: "fill", q: "«médico» es una palabra ___", blanks: ["esdrújula"], options: ["aguda", "grave", "esdrújula", "sobreesdrújula"] }
            ]
          },
          {
            id: "r2-boss",
            title: "Jefe: Ortografía",
            icon: "fa-dragon",
            type: "boss",
            xp: 30,
            exercises: [
              { type: "choice", q: "¿Cuál es correcta?", options: ["hayer", "ayer", "hayér", "ahyer"], answer: 1 },
              { type: "truefalse", q: "Se escribe «haber» cuando es verbo auxiliar", answer: true },
              { type: "choice", q: "Elige la correcta: «Voy a ___ la tarea»", options: ["aser", "hacer", "acer", "hácer"], answer: 1 },
              { type: "choice", q: "¿Cuál lleva tilde?", options: ["camion", "camión", "camíon", "cámion"], answer: 1 },
              { type: "match", pairs: [["Ahí", "Lugar"], ["Hay", "Existe"], ["¡Ay!", "Exclamación"], ["Haya", "Verbo haber"]] }
            ]
          }
        ]
      }
,
      {
        id: 3,
        title: "Textos narrativos",
        desc: "Cuentos, personajes y trama",
        lessons: [
          {
            id: "r3-1", title: "Partes de un cuento", icon: "fa-book-open", xp: 15,
            exercises: [
              { type: "choice", q: "Las tres partes básicas de un cuento son:", options: ["Inicio, nudo y desenlace", "Título, autor y página", "Persona, lugar y cosa"], answer: 0 },
              { type: "truefalse", q: "El conflicto suele aparecer en el nudo", answer: true },
              { type: "choice", q: "El protagonista es:", options: ["El villano", "El personaje principal", "El narrador siempre", "El escenario"], answer: 1 },
              { type: "match", pairs: [["Inicio", "Presenta personajes"], ["Nudo", "Aparece el conflicto"], ["Desenlace", "Se resuelve la historia"], ["Narrador", "Cuenta la historia"]] },
              { type: "fill", q: "El lugar y el tiempo forman el ___", blanks: ["escenario"], options: ["escenario", "conflicto", "título", "autor"] }
            ]
          },
          {
            id: "r3-2", title: "Tipos de narrador", icon: "fa-comments", xp: 15,
            exercises: [
              { type: "choice", q: "Un narrador en primera persona usa:", options: ["Él / ella", "Yo", "Ustedes", "Se"], answer: 1 },
              { type: "truefalse", q: "El narrador omnisciente sabe lo que piensan todos los personajes", answer: true },
              { type: "choice", q: "«Juan abrió la puerta y sonrió» está en:", options: ["Primera persona", "Tercera persona", "Segunda persona"], answer: 1 },
              { type: "choice", q: "«Corrí lo más rápido que pude» es narrador:", options: ["Omnisciente", "En primera persona", "En segunda persona"], answer: 1 },
              { type: "fill", q: "El narrador que habla de «tú» está en ___ persona", blanks: ["segunda"], options: ["primera", "segunda", "tercera", "cuarta"] }
            ]
          },
          {
            id: "r3-boss", title: "Jefe: Narrativa", icon: "fa-dragon", type: "boss", xp: 30,
            exercises: [
              { type: "choice", q: "El mensaje o enseñanza de un texto se llama:", options: ["Tema o moraleja", "Título", "Párrafo", "Diálogo"], answer: 0 },
              { type: "truefalse", q: "Los diálogos van entre comillas o rayas", answer: true },
              { type: "choice", q: "Un cuento fantástico incluye:", options: ["Solo hechos reales", "Elementos mágicos o imposibles", "Solo biografías"], answer: 1 },
              { type: "match", pairs: [["Fábula", "Animales que hablan"], ["Leyenda", "Tradición popular"], ["Mito", "Dioses y origen del mundo"], ["Cuento", "Historia breve"]] },
              { type: "choice", q: "El antagonista es:", options: ["El héroe", "Quien se opone al protagonista", "El narrador", "El título"], answer: 1 }
            ]
          }
        ]
      },
      {
        id: 4,
        title: "Vocabulario y sinónimos",
        desc: "Amplía tu léxico",
        lessons: [
          {
            id: "r4-1", title: "Sinónimos y antónimos", icon: "fa-arrows-left-right", xp: 10,
            exercises: [
              { type: "choice", q: "Sinónimo de «feliz»:", options: ["Triste", "Alegre", "Enojado", "Cansado"], answer: 1 },
              { type: "truefalse", q: "«Grande» y «pequeño» son antónimos", answer: true },
              { type: "choice", q: "Antónimo de «rápido»:", options: ["Veloz", "Lento", "Ágil", "Pronto"], answer: 1 },
              { type: "match", pairs: [["Bonito", "Hermoso"], ["Inicio", "Comienzo"], ["Fin", "Final"], ["Casa", "Hogar"]] },
              { type: "fill", q: "Un sinónimo de «hablar» es ___", blanks: ["decir"], options: ["decir", "callar", "correr", "dormir"] }
            ]
          },
          {
            id: "r4-2", title: "Palabras homófonas", icon: "fa-ear-listen", xp: 15,
            exercises: [
              { type: "choice", q: "«Hola» / «ola»: ¿cuál saluda?", options: ["ola", "hola", "Ambas", "Ninguna"], answer: 1 },
              { type: "truefalse", q: "«Tener» y «tender» suenan igual pero significan distinto", answer: false },
              { type: "choice", q: "«Hay» / «ahí» / «ay»: ¿cuál indica lugar?", options: ["hay", "ahí", "ay"], answer: 1 },
              { type: "choice", q: "«Echo» (de echar) vs «hecho» (de hacer): «Ya está ___»", options: ["echo", "hecho", "echo/hecho igual"], answer: 1 },
              { type: "fill", q: "___ una vez un castillo (había)", blanks: ["Había"], options: ["Había", "Avía", "Havía", "Abía"] }
            ]
          }
        ]
      }
    ]
  },

  /* ===================== CIENCIAS SOCIALES ===================== */
  social: {
    name: "Ciencias Sociales",
    icon: "fa-earth-americas",
    color: "#29B6F6",
    units: [
      {
        id: 1,
        title: "Historia de Colombia",
        desc: "Desde la Independencia hasta hoy",
        lessons: [
          {
            id: "so1-1",
            title: "Independencia",
            icon: "fa-flag",
            xp: 10,
            exercises: [
              { type: "choice", q: "¿En qué año se proclamó la Independencia de Colombia?", options: ["1810", "1819", "1821", "1809"], answer: 0 },
              { type: "choice", q: "¿Quién es conocido como el Libertador?", options: ["Santander", "Bolívar", "Nariño", "Córdoba"], answer: 1 },
              { type: "truefalse", q: "El 20 de julio de 1810 se dio el Grito de Independencia", answer: true },
              { type: "match", pairs: [["Bolívar", "Libertador"], ["Santander", "Hombre de las leyes"], ["Nariño", "Precursor"], ["Policarpa", "Heroína"]] },
              { type: "choice", q: "¿Dónde se firmó el Acta de Independencia?", options: ["Cartagena", "Bogotá", "Tunja", "Popayán"], answer: 1 }
            ]
          },
          {
            id: "so1-2",
            title: "La República",
            icon: "fa-landmark",
            xp: 15,
            exercises: [
              { type: "choice", q: "¿Quién fue el primer presidente de Colombia?", options: ["Bolívar", "Santander", "Mosquera", "Núñez"], answer: 1 },
              { type: "truefalse", q: "Colombia formó parte de la Gran Colombia", answer: true },
              { type: "choice", q: "La Gran Colombia incluía a:", options: ["Solo Colombia", "Colombia, Venezuela, Ecuador y Panamá", "Solo Andes", "México"], answer: 1 },
              { type: "fill", q: "La capital de Colombia es ___", blanks: ["Bogotá"], options: ["Bogotá", "Medellín", "Cali", "Cartagena"] },
              { type: "choice", q: "¿En qué siglo se dio la Independencia?", options: ["XVI", "XVII", "XVIII", "XIX"], answer: 3 }
            ]
          },
          {
            id: "so1-chest",
            title: "Cofre histórico",
            icon: "fa-box",
            type: "chest",
            xp: 20,
            exercises: [
              { type: "choice", q: "¿Qué batalla consolidó la independencia?", options: ["Boyacá", "Carabobo", "Pichincha", "Todas"], answer: 3 },
              { type: "truefalse", q: "Policarpa Salavarrieta fue una espía patriota", answer: true },
              { type: "choice", q: "El himno nacional de Colombia fue escrito por:", options: ["Rafael Núñez", "José Joaquín Ortiz", "Julio Flórez", "José Asunción Silva"], answer: 0 }
            ]
          }
        ]
      },
      {
        id: 2,
        title: "Geografía",
        desc: "Regiones y relieve de Colombia",
        lessons: [
          {
            id: "so2-1",
            title: "Regiones naturales",
            icon: "fa-mountain",
            xp: 15,
            exercises: [
              { type: "choice", q: "¿Cuántas regiones naturales tiene Colombia?", options: ["4", "5", "6", "3"], answer: 2 },
              { type: "choice", q: "¿Cuál es la región más grande?", options: ["Andina", "Amazónica", "Caribe", "Pacífica"], answer: 1 },
              { type: "truefalse", q: "La región Andina es la más poblada", answer: true },
              { type: "match", pairs: [["Andina", "Cordilleras"], ["Caribe", "Costa norte"], ["Pacífica", "Selva húmeda"], ["Orinoquía", "Llanos"]] },
              { type: "choice", q: "¿En qué región está el desierto de La Guajira?", options: ["Andina", "Caribe", "Pacífica", "Amazónica"], answer: 1 }
            ]
          },
          {
            id: "so2-2",
            title: "Ríos y montañas",
            icon: "fa-water",
            xp: 15,
            exercises: [
              { type: "choice", q: "¿Cuál es el río más importante de Colombia?", options: ["Amazonas", "Magdalena", "Cauca", "Orinoco"], answer: 1 },
              { type: "truefalse", q: "El río Magdalena desemboca en el Caribe", answer: true },
              { type: "choice", q: "¿Cuál es la montaña más alta de Colombia?", options: ["Nevado del Ruiz", "Pico Cristóbal Colón", "Puracé", "Tolima"], answer: 1 },
              { type: "fill", q: "Las tres cordilleras se llaman Occidental, Central y ___", blanks: ["Oriental"], options: ["Oriental", "Norte", "Sur", "Media"] },
              { type: "choice", q: "El Amazonas es el río más ___ del mundo", options: ["Largo", "Caudaloso", "Frío", "Salado"], answer: 1 }
            ]
          },
          {
            id: "so2-boss",
            title: "Jefe: Geografía",
            icon: "fa-dragon",
            type: "boss",
            xp: 30,
            exercises: [
              { type: "choice", q: "Colombia tiene costas en:", options: ["Solo Caribe", "Solo Pacífico", "Caribe y Pacífico", "Ninguno"], answer: 2 },
              { type: "truefalse", q: "Colombia es el único país de Suramérica con costas en dos océanos", answer: true },
              { type: "choice", q: "¿Cuál NO es departamento de Colombia?", options: ["Antioquia", "Cundinamarca", "Quito", "Valle del Cauca"], answer: 2 },
              { type: "match", pairs: [["Bogotá", "Cundinamarca"], ["Medellín", "Antioquia"], ["Cali", "Valle"], ["Barranquilla", "Atlántico"]] },
              { type: "choice", q: "La capital del departamento de Antioquia es:", options: ["Bogotá", "Medellín", "Cali", "Cartagena"], answer: 1 }
            ]
          }
        ]
      }
,
      {
        id: 3,
        title: "Organización del Estado",
        desc: "Poderes y ciudadanía",
        lessons: [
          {
            id: "so3-1", title: "Los tres poderes", icon: "fa-landmark", xp: 15,
            exercises: [
              { type: "choice", q: "¿Cuáles son los tres poderes del Estado?", options: ["Rey, reina, príncipe", "Ejecutivo, legislativo, judicial", "Norte, sur, centro"], answer: 1 },
              { type: "truefalse", q: "El Congreso hace parte del poder legislativo", answer: true },
              { type: "choice", q: "El presidente pertenece al poder:", options: ["Judicial", "Ejecutivo", "Legislativo"], answer: 1 },
              { type: "match", pairs: [["Ejecutivo", "Gobierna"], ["Legislativo", "Hace las leyes"], ["Judicial", "Aplica justicia"], ["Constitución", "Ley fundamental"]] },
              { type: "fill", q: "La ___ es la norma más importante del país", blanks: ["Constitución"], options: ["Constitución", "Revista", "Canción", "Bandera"] }
            ]
          },
          {
            id: "so3-2", title: "Derechos y deberes", icon: "fa-scale-balanced", xp: 15,
            exercises: [
              { type: "choice", q: "Un derecho fundamental es:", options: ["No estudiar", "La educación", "Romper normas", "Ignorar a otros"], answer: 1 },
              { type: "truefalse", q: "Todos tenemos derechos y también deberes", answer: true },
              { type: "choice", q: "Cuidar el medio ambiente es un:", options: ["Solo derecho", "Deber ciudadano", "Castigo", "Juego"], answer: 1 },
              { type: "choice", q: "El derecho a la vida está protegido por:", options: ["La moda", "La Constitución", "Un anuncio", "Un deporte"], answer: 1 },
              { type: "fill", q: "Respetar a los demás es un ___ ciudadano", blanks: ["deber"], options: ["deber", "premio", "castigo", "juego"] }
            ]
          },
          {
            id: "so3-boss", title: "Jefe: Ciudadanía", icon: "fa-dragon", type: "boss", xp: 30,
            exercises: [
              { type: "choice", q: "Votar es un derecho de los:", options: ["Niños", "Ciudadanos en edad legal", "Solo alcaldes", "Turistas"], answer: 1 },
              { type: "truefalse", q: "La democracia se basa en la participación ciudadana", answer: true },
              { type: "choice", q: "¿Quién interpreta las leyes en último término?", options: ["Los jueces", "Los deportistas", "Los cantantes", "Los cocineros"], answer: 0 },
              { type: "match", pairs: [["Alcalde", "Municipio"], ["Gobernador", "Departamento"], ["Presidente", "País"], ["Concejal", "Concejo municipal"]] },
              { type: "choice", q: "La bandera, el escudo y el himno son:", options: ["Juguetes", "Símbolos patrios", "Comidas", "Deportes"], answer: 1 }
            ]
          }
        ]
      },
      {
        id: 4,
        title: "Culturas de Colombia",
        desc: "Diversidad y regiones culturales",
        lessons: [
          {
            id: "so4-1", title: "Diversidad cultural", icon: "fa-people-group", xp: 15,
            exercises: [
              { type: "choice", q: "Colombia es un país:", options: ["Monocultural", "Multicultural", "Sin tradiciones", "Sin idiomas"], answer: 1 },
              { type: "truefalse", q: "Existen pueblos indígenas con lenguas propias", answer: true },
              { type: "choice", q: "El carnaval de Barranquilla es patrimonio de:", options: ["Solo la ciudad", "La humanidad (UNESCO)", "Un colegio", "Un equipo"], answer: 1 },
              { type: "match", pairs: [["Cumbia", "Costa Caribe"], ["Bambuco", "Región Andina"], ["Joropo", "Llanos"], ["Currulao", "Pacífico"]] },
              { type: "fill", q: "La capital de Colombia es ___", blanks: ["Bogotá"], options: ["Bogotá", "Cali", "Medellín", "Cartagena"] }
            ]
          },
          {
            id: "so4-2", title: "Símbolos y tradiciones", icon: "fa-flag", xp: 10,
            exercises: [
              { type: "choice", q: "Los colores de la bandera de Colombia son:", options: ["Rojo, blanco, azul", "Amarillo, azul, rojo", "Verde, blanco, rojo"], answer: 1 },
              { type: "truefalse", q: "El amarillo en la bandera representa riqueza/soberanía", answer: true },
              { type: "choice", q: "El café es un producto:", options: ["Solo importado", "Importante en la economía colombiana", "Prohibido"], answer: 1 },
              { type: "choice", q: "Una tradición de fin de año en Colombia es:", options: ["El año viejo / muñeco", "Solo esquiar", "Solo nieve"], answer: 0 },
              { type: "fill", q: "El río más importante del país es el ___", blanks: ["Magdalena"], options: ["Magdalena", "Nilo", "Amazonas solo", "Danubio"] }
            ]
          }
        ]
      }
    ]
  },

  /* ===================== TECNOLOGÍA ===================== */
  tech: {
    name: "Tecnología",
    icon: "fa-laptop-code",
    color: "#2E7D32",
    units: [
      {
        id: 1,
        title: "Pensamiento computacional",
        desc: "Lógica y resolución de problemas",
        lessons: [
          {
            id: "t1-1",
            title: "Algoritmos",
            icon: "fa-list-ol",
            xp: 10,
            exercises: [
              { type: "choice", q: "Un algoritmo es:", options: ["Un virus", "Una secuencia de pasos para resolver un problema", "Un hardware", "Una red"], answer: 1 },
              { type: "truefalse", q: "Los algoritmos deben ser claros y ordenados", answer: true },
              { type: "order", items: ["Empezar", "Abrir la llave", "Mojarse las manos", "Enjabonar", "Enjuagar", "Secar"], correct: [0,1,2,3,4,5] },
              { type: "choice", q: "¿Cuál es un buen ejemplo de algoritmo cotidiano?", options: ["Receta de cocina", "Sueño", "Color favorito", "Nombre"], answer: 0 },
              { type: "fill", q: "Los pasos de un algoritmo deben ser ___ y precisos", blanks: ["claros"], options: ["claros", "largos", "secretos", "aleatorios"] }
            ]
          },
          {
            id: "t1-2",
            title: "Secuencias y bucles",
            icon: "fa-rotate",
            xp: 15,
            exercises: [
              { type: "choice", q: "Un bucle (loop) sirve para:", options: ["Terminar el programa", "Repetir acciones", "Borrar datos", "Imprimir"], answer: 1 },
              { type: "truefalse", q: "Una secuencia es un conjunto de instrucciones en orden", answer: true },
              { type: "choice", q: "Si quieres saludar a 10 personas, usas:", options: ["Un solo saludo", "Un bucle de 10 repeticiones", "Nada", "Un virus"], answer: 1 },
              { type: "choice", q: "¿Qué estructura permite decidir entre dos caminos?", options: ["Bucle", "Condicional (if)", "Variable", "Función"], answer: 1 },
              { type: "match", pairs: [["Secuencia", "Pasos en orden"], ["Bucle", "Repetir"], ["Condicional", "Decidir"], ["Variable", "Guardar dato"]] }
            ]
          },
          {
            id: "t1-chest",
            title: "Cofre lógico",
            icon: "fa-box",
            type: "chest",
            xp: 20,
            exercises: [
              { type: "choice", q: "¿Qué hace un 'si... entonces...'?", options: ["Repite", "Decide según una condición", "Borra", "Suma"], answer: 1 },
              { type: "truefalse", q: "Los errores en algoritmos se llaman 'bugs'", answer: true },
              { type: "choice", q: "Depurar (debug) significa:", options: ["Crear virus", "Encontrar y corregir errores", "Apagar la PC", "Instalar programas"], answer: 1 }
            ]
          }
        ]
      },
      {
        id: 2,
        title: "Informática básica",
        desc: "Hardware, software e internet",
        lessons: [
          {
            id: "t2-1",
            title: "Hardware y software",
            icon: "fa-microchip",
            xp: 15,
            exercises: [
              { type: "choice", q: "El hardware es:", options: ["Los programas", "Las partes físicas del computador", "Internet", "La nube"], answer: 1 },
              { type: "choice", q: "El software es:", options: ["El monitor", "Los programas e instrucciones", "El teclado", "El mouse"], answer: 1 },
              { type: "truefalse", q: "El sistema operativo es un tipo de software", answer: true },
              { type: "match", pairs: [["Monitor", "Hardware"], ["Windows", "Software"], ["Teclado", "Hardware"], ["Navegador", "Software"]] },
              { type: "fill", q: "El ___ es el 'cerebro' del computador", blanks: ["procesador"], options: ["procesador", "monitor", "teclado", "cable"] }
            ]
          },
          {
            id: "t2-2",
            title: "Internet seguro",
            icon: "fa-shield-halved",
            xp: 15,
            exercises: [
              { type: "choice", q: "¿Qué NO debes compartir en internet?", options: ["Tu color favorito", "Contraseñas y datos personales", "Fotos de paisajes", "Música"], answer: 1 },
              { type: "truefalse", q: "Una contraseña fuerte tiene letras, números y símbolos", answer: true },
              { type: "choice", q: "¿Qué es el phishing?", options: ["Un juego", "Engaño para robar datos", "Un antivirus", "Una red social"], answer: 1 },
              { type: "choice", q: "Antes de hacer clic en un enlace desconocido debes:", options: ["Hacer clic rápido", "Verificar que sea confiable", "Compartirlo", "Ignorarlo siempre"], answer: 1 },
              { type: "fill", q: "Nunca compartas tu ___ con desconocidos", blanks: ["contraseña"], options: ["contraseña", "comida", "juego", "libro"] }
            ]
          },
          {
            id: "t2-boss",
            title: "Jefe: Tecnología",
            icon: "fa-dragon",
            type: "boss",
            xp: 30,
            exercises: [
              { type: "choice", q: "¿Qué significa CPU?", options: ["Central Processing Unit", "Computer Personal Unit", "Control Power Unit", "Nothing"], answer: 0 },
              { type: "truefalse", q: "La RAM es memoria temporal de acceso rápido", answer: true },
              { type: "choice", q: "¿Cuál es un sistema operativo?", options: ["Chrome", "Linux", "Word", "Excel"], answer: 1 },
              { type: "match", pairs: [["Input", "Entrada"], ["Output", "Salida"], ["Storage", "Almacenamiento"], ["Processing", "Procesamiento"]] },
              { type: "choice", q: "La unidad de medida de almacenamiento más grande es:", options: ["KB", "MB", "GB", "TB"], answer: 3 }
            ]
          }
        ]
      }
,
      {
        id: 3,
        title: "Programación visual",
        desc: "Bloques, eventos y juegos simples",
        lessons: [
          {
            id: "t3-1", title: "Eventos", icon: "fa-hand-pointer", xp: 15,
            exercises: [
              { type: "choice", q: "Un evento en programación es:", options: ["Un error", "Algo que dispara una acción", "Solo un color", "Un cable"], answer: 1 },
              { type: "truefalse", q: "«Al hacer clic» es un ejemplo de evento", answer: true },
              { type: "choice", q: "Si quieres que algo pase al iniciar, usas el evento:", options: ["Al terminar", "Al iniciar", "Nunca", "Al borrar"], answer: 1 },
              { type: "match", pairs: [["Clic", "Evento de ratón"], ["Tecla", "Evento de teclado"], ["Temporizador", "Evento de tiempo"], ["Colisión", "Evento de choque"]] },
              { type: "fill", q: "Los programas reaccionan a ___ del usuario", blanks: ["eventos"], options: ["eventos", "comidas", "sueños", "nubes"] }
            ]
          },
          {
            id: "t3-2", title: "Variables en juegos", icon: "fa-database", xp: 15,
            exercises: [
              { type: "choice", q: "Una variable sirve para:", options: ["Decorar", "Guardar un valor que puede cambiar", "Apagar el PC"], answer: 1 },
              { type: "truefalse", q: "La puntuación de un juego suele guardarse en una variable", answer: true },
              { type: "choice", q: "Si vidas = 3 y pierdes una, vidas queda en:", options: ["3", "2", "0", "4"], answer: 1 },
              { type: "fill", q: "score = score + 1 sirve para ___ un punto", blanks: ["sumar"], options: ["sumar", "borrar", "ocultar", "apagar"] },
              { type: "choice", q: "¿Qué nombre es mejor para una variable de puntos?", options: ["x", "puntos", "a1", "zzz"], answer: 1 }
            ]
          },
          {
            id: "t3-boss", title: "Jefe: Juegos", icon: "fa-dragon", type: "boss", xp: 30,
            exercises: [
              { type: "choice", q: "Un bucle infinito sin salida puede:", options: ["Mejorar el juego", "Colgar el programa", "Borrar internet"], answer: 1 },
              { type: "truefalse", q: "Probar el programa ayuda a encontrar errores", answer: true },
              { type: "choice", q: "«Si toca el enemigo → restar vida» es:", options: ["Solo decoración", "Una condición + acción", "Un virus"], answer: 1 },
              { type: "order", items: ["Diseñar idea", "Programar bloques", "Probar", "Corregir errores"], correct: [0,1,2,3] },
              { type: "choice", q: "La interfaz es:", options: ["Solo el código oculto", "Lo que ve y usa el jugador", "El cable de red"], answer: 1 }
            ]
          }
        ]
      },
      {
        id: 4,
        title: "Internet y datos",
        desc: "Redes, privacidad y buena práctica",
        lessons: [
          {
            id: "t4-1", title: "Cómo funciona internet", icon: "fa-globe", xp: 15,
            exercises: [
              { type: "choice", q: "Internet es:", options: ["Un solo computador", "Una red mundial de computadores", "Solo WhatsApp"], answer: 1 },
              { type: "truefalse", q: "Una URL es la dirección de una página web", answer: true },
              { type: "choice", q: "HTTP/HTTPS sirven para:", options: ["Cocinar", "Transferir páginas web", "Imprimir solo"], answer: 1 },
              { type: "match", pairs: [["Navegador", "Chrome / Firefox"], ["Buscador", "Google"], ["Servidor", "Guarda páginas"], ["Cliente", "Tu computador"]] },
              { type: "fill", q: "www significa World Wide ___", blanks: ["Web"], options: ["Web", "Water", "Window", "Word"] }
            ]
          },
          {
            id: "t4-2", title: "Privacidad digital", icon: "fa-user-lock", xp: 15,
            exercises: [
              { type: "choice", q: "¿Qué debes hacer con una contraseña?", options: ["Compartirla", "Mantenerla secreta y fuerte", "Ponerla en la camiseta"], answer: 1 },
              { type: "truefalse", q: "No todo lo que aparece en internet es verdadero", answer: true },
              { type: "choice", q: "Antes de publicar una foto de otra persona conviene:", options: ["Nada", "Pedir permiso", "Editarla siempre"], answer: 1 },
              { type: "choice", q: "Un dato personal sensible es:", options: ["Color favorito público", "Número de documento", "Nombre de un dibujo"], answer: 1 },
              { type: "fill", q: "El ___ engaña para robar contraseñas", blanks: ["phishing"], options: ["phishing", "pintar", "bailar", "cocinar"] }
            ]
          }
        ]
      }
    ]
  },

  /* ===================== INGLÉS ===================== */
  english: {
    name: "Inglés",
    icon: "fa-comments",
    color: "#4FC3F7",
    units: [
      {
        id: 1,
        title: "Basics – Saludos y presentaciones",
        desc: "Hello, my name is...",
        lessons: [
          {
            id: "e1-1",
            title: "Greetings",
            icon: "fa-hand",
            xp: 10,
            exercises: [
              { type: "choice", q: "¿Cómo se dice «Hola» en inglés?", options: ["Goodbye", "Hello", "Thanks", "Please"], answer: 1 },
              { type: "choice", q: "«Good morning» significa:", options: ["Buenas noches", "Buenos días", "Buenas tardes", "Adiós"], answer: 1 },
              { type: "truefalse", q: "«Hi» es una forma informal de saludar", answer: true },
              { type: "match", pairs: [["Hello", "Hola"], ["Goodbye", "Adiós"], ["Good night", "Buenas noches"], ["See you", "Nos vemos"]] },
              { type: "fill", q: "___ morning! (Buenos días)", blanks: ["Good"], options: ["Good", "Bad", "Nice", "Happy"] }
            ]
          },
          {
            id: "e1-2",
            title: "Presentaciones",
            icon: "fa-user",
            xp: 10,
            exercises: [
              { type: "choice", q: "«My name is...» significa:", options: ["Tengo...", "Me llamo...", "Vivo en...", "Soy de..."], answer: 1 },
              { type: "choice", q: "¿Cómo preguntas el nombre de alguien?", options: ["How are you?", "What is your name?", "Where are you?", "How old are you?"], answer: 1 },
              { type: "truefalse", q: "«Nice to meet you» = Encantado de conocerte", answer: true },
              { type: "fill", q: "My name ___ Ana.", blanks: ["is"], options: ["is", "are", "am", "be"] },
              { type: "choice", q: "«I am from Colombia» significa:", options: ["Vivo en Colombia", "Soy de Colombia", "Voy a Colombia", "Me gusta Colombia"], answer: 1 }
            ]
          },
          {
            id: "e1-chest",
            title: "Treasure chest",
            icon: "fa-box",
            type: "chest",
            xp: 20,
            exercises: [
              { type: "choice", q: "«How are you?» se responde normalmente con:", options: ["I'm fine, thanks", "My name is...", "I am 10", "Goodbye"], answer: 0 },
              { type: "truefalse", q: "«Please» significa «por favor»", answer: true },
              { type: "match", pairs: [["Thank you", "Gracias"], ["Please", "Por favor"], ["Sorry", "Lo siento"], ["You're welcome", "De nada"]] }
            ]
          }
        ]
      },
      {
        id: 2,
        title: "Vocabulario – Colores y números",
        desc: "Colors & Numbers",
        lessons: [
          {
            id: "e2-1",
            title: "Colors",
            icon: "fa-palette",
            xp: 10,
            exercises: [
              { type: "choice", q: "«Red» es:", options: ["Azul", "Rojo", "Verde", "Amarillo"], answer: 1 },
              { type: "choice", q: "¿Cómo se dice «azul»?", options: ["Green", "Blue", "Yellow", "Black"], answer: 1 },
              { type: "truefalse", q: "«Green» significa verde", answer: true },
              { type: "match", pairs: [["Red", "Rojo"], ["Blue", "Azul"], ["Yellow", "Amarillo"], ["Black", "Negro"]] },
              { type: "fill", q: "The sky is ___.", blanks: ["blue"], options: ["blue", "red", "green", "black"] }
            ]
          },
          {
            id: "e2-2",
            title: "Numbers 1-20",
            icon: "fa-hashtag",
            xp: 15,
            exercises: [
              { type: "choice", q: "¿Cómo se dice «cinco»?", options: ["Four", "Five", "Six", "Three"], answer: 1 },
              { type: "choice", q: "«Twelve» es:", options: ["11", "12", "13", "20"], answer: 1 },
              { type: "truefalse", q: "«Ten» = 10", answer: true },
              { type: "match", pairs: [["One", "1"], ["Seven", "7"], ["Fifteen", "15"], ["Twenty", "20"]] },
              { type: "fill", q: "Eight + two = ___", blanks: ["ten"], options: ["ten", "nine", "eleven", "twelve"] }
            ]
          },
          {
            id: "e2-boss",
            title: "Boss: Vocabulary",
            icon: "fa-dragon",
            type: "boss",
            xp: 30,
            exercises: [
              { type: "choice", q: "«White» es:", options: ["Negro", "Blanco", "Gris", "Rosa"], answer: 1 },
              { type: "truefalse", q: "«Orange» puede ser color y fruta", answer: true },
              { type: "choice", q: "¿Cómo se dice «dieciocho»?", options: ["Eight", "Eighteen", "Eighty", "Eleven"], answer: 1 },
              { type: "match", pairs: [["Purple", "Morado"], ["Pink", "Rosa"], ["Brown", "Marrón"], ["Gray", "Gris"]] },
              { type: "choice", q: "Complete: I have ___ apples. (3)", options: ["two", "three", "four", "five"], answer: 1 }
            ]
          }
        ]
      },
      {
        id: 3,
        title: "Gramática básica",
        desc: "To be, articles & simple present",
        lessons: [
          {
            id: "e3-1",
            title: "Verb To Be",
            icon: "fa-a",
            xp: 15,
            exercises: [
              { type: "choice", q: "I ___ a student.", options: ["is", "am", "are", "be"], answer: 1 },
              { type: "choice", q: "She ___ happy.", options: ["am", "is", "are", "be"], answer: 1 },
              { type: "truefalse", q: "«They are friends» es correcto", answer: true },
              { type: "fill", q: "We ___ from Colombia.", blanks: ["are"], options: ["am", "is", "are", "be"] },
              { type: "choice", q: "¿Cuál es la forma negativa de «is»?", options: ["isn't", "aren't", "am not", "not is"], answer: 0 }
            ]
          },
          {
            id: "e3-2",
            title: "Articles a / an / the",
            icon: "fa-font",
            xp: 15,
            exercises: [
              { type: "choice", q: "___ apple (usa el artículo correcto)", options: ["a", "an", "the", "—"], answer: 1 },
              { type: "choice", q: "___ book", options: ["a", "an", "the", "—"], answer: 0 },
              { type: "truefalse", q: "Se usa «an» delante de sonido de vocal", answer: true },
              { type: "fill", q: "She is ___ teacher.", blanks: ["a"], options: ["a", "an", "the", "—"] },
              { type: "choice", q: "___ sun is bright.", options: ["A", "An", "The", "—"], answer: 2 }
            ]
          }
        ]
      }
,
      {
        id: 4,
        title: "Family & home",
        desc: "Familia y casa",
        lessons: [
          {
            id: "e4-1", title: "Family members", icon: "fa-people-roof", xp: 15,
            exercises: [
              { type: "choice", q: "«Mother» significa:", options: ["Padre", "Madre", "Hermano", "Tío"], answer: 1 },
              { type: "truefalse", q: "«Brother» = hermano", answer: true },
              { type: "choice", q: "¿Cómo se dice «padre»?", options: ["Mother", "Father", "Sister", "Baby"], answer: 1 },
              { type: "match", pairs: [["Mother", "Madre"], ["Father", "Padre"], ["Sister", "Hermana"], ["Brother", "Hermano"]] },
              { type: "fill", q: "My ___ is a teacher. (mamá)", blanks: ["mother"], options: ["mother", "table", "dog", "car"] }
            ]
          },
          {
            id: "e4-2", title: "Rooms of the house", icon: "fa-house", xp: 15,
            exercises: [
              { type: "choice", q: "«Kitchen» es:", options: ["Baño", "Cocina", "Sala", "Jardín"], answer: 1 },
              { type: "truefalse", q: "«Bedroom» = dormitorio", answer: true },
              { type: "choice", q: "¿Dónde duermes normalmente?", options: ["Kitchen", "Bedroom", "Garage"], answer: 1 },
              { type: "match", pairs: [["Bathroom", "Baño"], ["Living room", "Sala"], ["Garden", "Jardín"], ["Kitchen", "Cocina"]] },
              { type: "fill", q: "I take a shower in the ___", blanks: ["bathroom"], options: ["bathroom", "kitchen", "garden", "school"] }
            ]
          },
          {
            id: "e4-boss", title: "Boss: Family", icon: "fa-dragon", type: "boss", xp: 30,
            exercises: [
              { type: "choice", q: "«Grandfather» es:", options: ["Tío", "Abuelo", "Primo", "Sobrino"], answer: 1 },
              { type: "truefalse", q: "«Parents» = padres", answer: true },
              { type: "choice", q: "This is my ___. She is my mother's sister.", options: ["uncle", "aunt", "cousin"], answer: 1 },
              { type: "match", pairs: [["Uncle", "Tío"], ["Aunt", "Tía"], ["Cousin", "Primo/a"], ["Grandmother", "Abuela"]] },
              { type: "fill", q: "We watch TV in the living ___", blanks: ["room"], options: ["room", "car", "book", "fish"] }
            ]
          }
        ]
      },
      {
        id: 5,
        title: "Daily routines",
        desc: "Rutinas y verbos cotidianos",
        lessons: [
          {
            id: "e5-1", title: "Daily verbs", icon: "fa-clock", xp: 15,
            exercises: [
              { type: "choice", q: "«Wake up» significa:", options: ["Dormir", "Despertarse", "Comer", "Correr"], answer: 1 },
              { type: "truefalse", q: "«Go to school» = ir al colegio", answer: true },
              { type: "choice", q: "¿Qué haces con «eat breakfast»?", options: ["Cenas", "Desayunas", "Duermes"], answer: 1 },
              { type: "match", pairs: [["Sleep", "Dormir"], ["Study", "Estudiar"], ["Play", "Jugar"], ["Read", "Leer"]] },
              { type: "fill", q: "I ___ my teeth every morning. (brush)", blanks: ["brush"], options: ["brush", "eat", "fly", "swim"] }
            ]
          },
          {
            id: "e5-2", title: "Telling the time", icon: "fa-clock", xp: 15,
            exercises: [
              { type: "choice", q: "«What time is it?» pregunta:", options: ["Dónde estás", "Qué hora es", "Cómo te llamas"], answer: 1 },
              { type: "truefalse", q: "«It's three o'clock» = Son las tres", answer: true },
              { type: "choice", q: "Half past two es:", options: ["2:00", "2:30", "3:00", "1:30"], answer: 1 },
              { type: "choice", q: "«In the morning» significa:", options: ["Por la noche", "Por la mañana", "Al mediodía"], answer: 1 },
              { type: "fill", q: "I go to bed at ___ o'clock. (nine)", blanks: ["nine"], options: ["nine", "cat", "blue", "run"] }
            ]
          }
        ]
      }
    ]
  }
};

/* Helper: get lesson by subject + lessonId */
function getLesson(subjectKey, lessonId) {
  const subject = LESSONS[subjectKey];
  if (!subject) return null;
  for (const unit of subject.units) {
    for (const lesson of unit.lessons) {
      if (lesson.id === lessonId) return { subject, unit, lesson };
    }
  }
  return null;
}
