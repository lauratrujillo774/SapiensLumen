// Teoría de Tecnología e Informática, grado 9°. Formato compacto (ver grado6/tecnologia.js).
export const area = "Tecnologia e Informatica";

export const temas = [
  {
    tema: "Programación en Python: primeros pasos",
    resumen: "Python es un lenguaje de programación sencillo y muy usado. En este tema aprenderás a mostrar mensajes, guardar datos en variables, tomar decisiones y repetir acciones.",
    objetivos: ["Usarás print, variables y tipos de datos.", "Escribirás condicionales.", "Usarás ciclos for y while."],
    partes: [
      ["🐍", "Qué es Python y primer programa", "Python es un lenguaje de alto nivel, fácil de leer. Un programa es una serie de instrucciones que el computador ejecuta en orden. La función print() muestra un mensaje en pantalla.", "print(\"Hola, mundo\")\nResultado: Hola, mundo", "print() muestra información."],
      ["📦", "Variables y tipos de datos", "Una variable guarda un valor con un nombre. Tipos básicos: int (enteros), float (decimales), str (texto) y bool (verdadero o falso). La función input() pide datos al usuario y type() muestra el tipo.", "nombre = \"Ana\"\nedad = 15\naltura = 1.60\nprint(nombre, edad, altura)", "El signo = asigna un valor."],
      ["🧮", "Operadores", "Aritméticos: + - * / // (división entera) % (residuo) ** (potencia). De comparación: == != < > <= >=. Lógicos: and, or, not. Para texto, + une cadenas.", "x = 7\nprint(x % 2)   # 1 (residuo)\nprint(x ** 2)  # 49", "= asigna; == compara."],
      ["🔀", "Condicionales", "if, elif y else permiten decidir según una condición. La sangría (indentación) indica qué instrucciones pertenecen al bloque.", "nota = 4.2\nif nota >= 3.0:\n    print(\"Aprobó\")\nelse:\n    print(\"Debe recuperar\")", "La sangría es obligatoria."],
      ["🔁", "Ciclos", "- for: repite un número conocido de veces; range(n) genera 0 hasta n−1.\n- while: repite mientras una condición sea verdadera. Cuidado con los ciclos infinitos.", "for i in range(1, 4):\n    print(\"Vuelta\", i)\ncontador = 3\nwhile contador > 0:\n    print(contador)\n    contador = contador - 1", "Para repetir tareas."]
    ],
    mapa: ["Python básico", [["Salida y entrada", ["print()", "input()"]], ["Variables", ["int", "float", "str", "bool"]], ["Decisiones", ["if", "elif", "else"]], ["Repetición", ["for", "while", "range()"]]]],
    tarjetas: [["¿Qué hace print()?", "Muestra información en pantalla."], ["¿Qué es una variable?", "Un nombre que guarda un valor."], ["¿Qué tipo es 3.5?", "float."], ["¿Qué hace el operador %?", "Da el residuo de una división."], ["¿Para qué sirve if?", "Para tomar decisiones."], ["¿Cuál es la diferencia entre = y ==?", "= asigna; == compara."], ["¿Qué genera range(3)?", "0, 1 y 2."]],
    videos: ["programación en Python para principiantes", "Python variables y condicionales", "ciclos for y while en Python"],
    n: 16
  },
  {
    tema: "Funciones y listas en Python",
    resumen: "Las listas guardan varios datos en una sola variable y las funciones agrupan instrucciones reutilizables. Juntas permiten escribir programas más ordenados y potentes.",
    objetivos: ["Crearás y recorrerás listas.", "Definirás funciones con parámetros y retorno.", "Combinarás listas y funciones."],
    partes: [
      ["📋", "Listas", "Una lista guarda varios elementos entre corchetes y separados por comas. Cada elemento tiene un índice que empieza en 0. Se puede acceder, cambiar y recorrer.", "frutas = [\"mango\", \"pera\", \"uva\"]\nprint(frutas[0])    # mango\nfrutas[1] = \"kiwi\"\nprint(len(frutas))  # 3", "El primer índice es 0."],
      ["🔧", "Métodos de las listas", "- append(x): agrega al final.\n- insert(i, x): inserta en la posición i.\n- remove(x): quita un valor.\n- pop(): quita y devuelve el último.\n- sort(): ordena.\n- len(lista): cantidad de elementos.", "numeros = [3, 1, 2]\nnumeros.append(5)\nnumeros.sort()\nprint(numeros)   # [1, 2, 3, 5]", "Las listas son modificables."],
      ["🔁", "Recorrer listas", "Con for se visita cada elemento. Se puede combinar con condicionales para filtrar o con acumuladores para sumar.", "notas = [3.5, 4.0, 2.8]\ntotal = 0\nfor n in notas:\n    total = total + n\nprint(total / len(notas))", "for elemento in lista."],
      ["🧩", "Funciones", "Una función se define con def, puede recibir parámetros y devolver un valor con return. Sirve para no repetir código y organizarlo.", "def saludar(nombre):\n    return \"Hola, \" + nombre\nprint(saludar(\"Luis\"))", "def nombre(parametros):"],
      ["🚀", "Listas y funciones juntas", "Se pueden pasar listas a funciones y devolver resultados. Por ejemplo, una función que calcula el promedio o busca el mayor.", "def promedio(lista):\n    return sum(lista) / len(lista)\nprint(promedio([3, 4, 5]))   # 4.0", "Reutiliza tu código."]
    ],
    mapa: ["Listas y funciones", [["Listas", ["Índices desde 0", "Corchetes"]], ["Métodos", ["append", "remove", "sort", "len"]], ["Recorrer", ["for", "Acumuladores"]], ["Funciones", ["def", "Parámetros", "return"]]]],
    tarjetas: [["¿Cómo se escribe una lista?", "Con corchetes y comas."], ["¿Qué índice tiene el primer elemento?", "0."], ["¿Qué hace append()?", "Agrega un elemento al final."], ["¿Qué hace len()?", "Da la cantidad de elementos."], ["¿Con qué palabra se define una función?", "def."], ["¿Qué hace return?", "Devuelve un valor desde la función."], ["¿Qué hace sort()?", "Ordena la lista."]],
    videos: ["listas en Python tutorial", "funciones en Python para principiantes", "listas y funciones Python ejercicios"],
    n: 16
  },
  {
    tema: "Bases de datos: tablas y consultas",
    resumen: "Una base de datos almacena información organizada en tablas. Con el lenguaje SQL se pueden consultar, agregar, modificar y eliminar datos de forma rápida y segura.",
    objetivos: ["Entenderás tablas, filas y columnas.", "Distinguirás clave primaria y foránea.", "Escribirás consultas SQL básicas."],
    partes: [
      ["🗄️", "Qué es una base de datos", "Es un conjunto organizado de datos relacionados que se guarda y gestiona con un sistema gestor (SGBD), como MySQL, PostgreSQL o SQLite. Se usan en colegios, bancos, tiendas y aplicaciones como esta plataforma.", "Los datos de usuarios, temas y puntajes de Sapiens Lumen se guardan en una base de datos MySQL.", "Datos organizados y accesibles."],
      ["📊", "Tablas, filas y columnas", "Los datos se organizan en tablas. Cada columna (campo) es un atributo; cada fila (registro) es un elemento.", "Tabla estudiantes:\n- id | nombre | grado\n- 1 | Ana | 9\n- 2 | Luis | 9", "Columna = atributo; fila = registro."],
      ["🔑", "Claves y relaciones", "- Clave primaria: identifica de forma única cada fila (como id).\n- Clave foránea: referencia a la clave primaria de otra tabla y crea relaciones.\nEl modelo relacional evita repetir datos.", "En la tabla notas, id_estudiante es una clave foránea hacia estudiantes.", "La clave primaria no se repite."],
      ["🔍", "Consultas SQL básicas", "- SELECT columnas FROM tabla;\n- WHERE: filtra filas.\n- ORDER BY: ordena.\n- LIMIT: limita el número de filas.", "SELECT nombre FROM estudiantes WHERE grado = 9 ORDER BY nombre;", "SELECT … FROM … WHERE …"],
      ["✏️", "Modificar datos", "- INSERT INTO: agrega filas.\n- UPDATE: cambia datos.\n- DELETE: borra filas.\nSiempre se debe usar WHERE en UPDATE y DELETE para no afectar toda la tabla.", "INSERT INTO estudiantes (nombre, grado) VALUES ('Sara', 9);\nUPDATE estudiantes SET grado = 10 WHERE id = 1;", "Sin WHERE se afecta toda la tabla."]
    ],
    mapa: ["Bases de datos", [["Estructura", ["Tablas", "Filas", "Columnas"]], ["Claves", ["Primaria", "Foránea"]], ["Consultas", ["SELECT", "WHERE", "ORDER BY"]], ["Cambios", ["INSERT", "UPDATE", "DELETE"]]]],
    tarjetas: [["¿Qué es una base de datos?", "Un conjunto organizado de datos."], ["¿Qué es una fila?", "Un registro de la tabla."], ["¿Qué es una columna?", "Un atributo o campo."], ["¿Qué es una clave primaria?", "Un campo que identifica de forma única cada fila."], ["¿Para qué sirve SELECT?", "Para consultar datos."], ["¿Para qué sirve WHERE?", "Para filtrar filas."], ["¿Qué hace INSERT INTO?", "Agrega una fila nueva."]],
    videos: ["bases de datos y SQL para principiantes", "SELECT WHERE ORDER BY SQL", "clave primaria y clave foránea"],
    n: 14
  },
  {
    tema: "Páginas web con HTML y CSS",
    resumen: "HTML da estructura a una página web y CSS le da estilo. Con ambos lenguajes se pueden crear páginas con títulos, textos, imágenes, enlaces y diseños atractivos.",
    objetivos: ["Escribirás la estructura básica de HTML.", "Usarás etiquetas comunes.", "Aplicarás estilos con CSS."],
    partes: [
      ["🏗️", "Estructura de HTML", "HTML (HyperText Markup Language) usa etiquetas que encierran el contenido. Una página básica tiene <!DOCTYPE html>, <html>, <head> (información) y <body> (contenido visible).", "<!DOCTYPE html>\n<html>\n<head><title>Mi página</title></head>\n<body>\n<h1>Hola</h1>\n</body>\n</html>", "head: información. body: contenido."],
      ["🏷️", "Etiquetas comunes", "- <h1> a <h6>: títulos.\n- <p>: párrafo.\n- <a href=\"url\">: enlace.\n- <img src=\"foto.jpg\" alt=\"descripción\">: imagen.\n- <ul> y <li>: lista con viñetas.\n- <div>: contenedor.", "<a href=\"https://www.colombia.co\">Colombia</a>\n<img src=\"perro.jpg\" alt=\"Un perro\">", "Siempre agrega alt a las imágenes."],
      ["🎨", "CSS: estilos", "CSS (Cascading Style Sheets) define colores, tamaños y posiciones. Un estilo tiene un selector y declaraciones: selector { propiedad: valor; }. Puede ir en un archivo .css enlazado con <link>.", "h1 {\n  color: darkblue;\n  text-align: center;\n}\np {\n  font-size: 18px;\n}", "selector { propiedad: valor; }"],
      ["📦", "Clases, colores y modelo de caja", "Las clases (.nombre) dan estilo a varios elementos; los ids (#nombre) a uno solo. Cada elemento es una caja con contenido, padding (relleno), border (borde) y margin (margen).", ".tarjeta {\n  background: #f0f0f0;\n  padding: 16px;\n  border-radius: 8px;\n  margin: 10px;\n}", "Contenido, padding, borde, margen."],
      ["📱", "Buenas prácticas", "- Usar títulos y listas con sentido.\n- Escribir textos alternativos en las imágenes (accesibilidad).\n- Adaptar el diseño a celulares con CSS responsive (por ejemplo, @media).\n- Probar la página en diferentes navegadores.", "Una página accesible la pueden usar personas con discapacidad visual mediante lectores de pantalla.", "Diseña para todos."]
    ],
    mapa: ["HTML y CSS", [["HTML", ["Estructura", "Etiquetas"]], ["Etiquetas", ["h1", "p", "a", "img", "ul"]], ["CSS", ["Selectores", "Propiedades"]], ["Buenas prácticas", ["Accesibilidad", "Responsive"]]]],
    tarjetas: [["¿Qué significa HTML?", "HyperText Markup Language."], ["¿Para qué sirve CSS?", "Para dar estilo a la página."], ["¿Qué etiqueta crea un enlace?", "<a>."], ["¿Qué etiqueta muestra una imagen?", "<img>."], ["¿Para qué sirve alt?", "Para describir la imagen (accesibilidad)."], ["¿Cómo se estructura una regla CSS?", "selector { propiedad: valor; }"], ["¿Qué es el margin?", "El espacio exterior de una caja."]],
    videos: ["curso básico HTML y CSS", "crear una página web con HTML y CSS", "modelo de caja CSS"],
    n: 14
  },
  {
    tema: "Sensores y electrónica digital",
    resumen: "Los sensores convierten magnitudes físicas, como luz, temperatura o distancia, en señales eléctricas. La electrónica digital trabaja con dos niveles (0 y 1) y es la base de los computadores y dispositivos inteligentes.",
    objetivos: ["Reconocerás distintos sensores.", "Diferenciarás señales analógicas y digitales.", "Comprenderás compuertas lógicas básicas."],
    partes: [
      ["📡", "Qué son los sensores", "Un sensor detecta una magnitud del entorno y la transforma en una señal eléctrica. Se usan en celulares, carros, casas inteligentes y fábricas.", "El celular usa sensores de luz (para ajustar brillo), acelerómetro (para girar la pantalla) y huella dactilar.", "Sensan el mundo físico."],
      ["🔍", "Tipos de sensores", "- De temperatura (termistor, LM35).\n- De luz (LDR, fotodiodo).\n- De distancia (ultrasónico, infrarrojo).\n- De movimiento (PIR).\n- De humedad y de gas.\n- Pulsadores e interruptores.", "El sensor ultrasónico de un carro avisa al parquear lo cerca que está de un obstáculo.", "Cada sensor mide algo distinto."],
      ["〰️", "Analógico y digital", "- Señal analógica: varía de forma continua (por ejemplo, la temperatura).\n- Señal digital: solo tiene dos valores, 0 (apagado, 0 V) y 1 (encendido, 5 V o 3,3 V).\nUn conversor ADC transforma una señal analógica en digital.", "Un interruptor es digital (abierto o cerrado); una resistencia que varía con la luz es analógica.", "Digital: 0 o 1."],
      ["🧮", "Sistema binario y compuertas lógicas", "Los dispositivos digitales usan el sistema binario (base 2). Las compuertas lógicas procesan bits:\n- AND: 1 solo si ambas entradas son 1.\n- OR: 1 si al menos una entrada es 1.\n- NOT: invierte la entrada.", "Binario 101 = 1·4 + 0·2 + 1·1 = 5.\nAND(1,0) = 0; OR(1,0) = 1; NOT(1) = 0.", "AND, OR y NOT son la base de la lógica digital."],
      ["⚙️", "Aplicaciones", "Los sensores y circuitos digitales permiten automatizar: luces que se encienden al detectar oscuridad, alarmas, riego automático, semáforos y robots. Una cadena típica: sensor → procesamiento → actuador (luz, motor, parlante).", "Un sensor de humedad del suelo puede activar una bomba de agua para el riego.", "Entrada, proceso y salida."]
    ],
    mapa: ["Sensores y electrónica digital", [["Sensores", ["Luz", "Temperatura", "Distancia", "Movimiento"]], ["Señales", ["Analógica", "Digital"]], ["Lógica", ["Binario", "AND", "OR", "NOT"]], ["Sistema", ["Sensor", "Procesamiento", "Actuador"]]]],
    tarjetas: [["¿Qué hace un sensor?", "Convierte una magnitud física en una señal eléctrica."], ["¿Qué mide un LDR?", "La luz."], ["¿Qué valores tiene una señal digital?", "0 y 1."], ["¿Qué es una señal analógica?", "Una señal que varía de forma continua."], ["¿Qué hace la compuerta NOT?", "Invierte la entrada."], ["Convierte 101 binario a decimal.", "5."], ["¿Qué hace un conversor ADC?", "Pasa una señal analógica a digital."]],
    videos: ["sensores y electrónica digital noveno grado", "señales analógicas y digitales", "compuertas lógicas AND OR NOT"],
    n: 14
  },
  {
    tema: "Microcontroladores y Arduino",
    resumen: "Un microcontrolador es un pequeño computador en un chip que controla dispositivos. Arduino es una plataforma que facilita programarlos para crear proyectos de electrónica interactiva.",
    objetivos: ["Entenderás qué es un microcontrolador.", "Reconocerás las partes de una placa Arduino.", "Escribirás un programa básico."],
    partes: [
      ["🧠", "El microcontrolador", "Es un circuito integrado que incluye procesador, memoria y pines de entrada/salida. Ejecuta el programa que le cargamos y controla sensores y actuadores. Está presente en lavadoras, juguetes, carros y electrodomésticos.", "Arduino UNO usa el microcontrolador ATmega328P.", "Un mini computador para controlar cosas."],
      ["🧰", "La placa Arduino", "Arduino es una plataforma abierta de hardware y software. Una placa Arduino UNO tiene pines digitales (0–13), pines analógicos (A0–A5), salidas de 5 V y GND (tierra) y un puerto USB para cargar el programa. Se programa con el entorno Arduino IDE.", "El LED incorporado en la placa está conectado al pin 13.", "Pines de entrada y salida."],
      ["📝", "Estructura de un programa", "Un programa (sketch) tiene dos funciones:\n- setup(): se ejecuta una vez al inicio; configura los pines con pinMode().\n- loop(): se repite sin parar.\nFunciones útiles: digitalWrite(), digitalRead(), analogRead(), delay().", "void setup() {\n  pinMode(13, OUTPUT);\n}\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(1000);\n  digitalWrite(13, LOW);\n  delay(1000);\n}\nEste programa hace parpadear un LED cada segundo.", "setup una vez; loop siempre."],
      ["🔌", "Conexiones básicas", "Un LED necesita una resistencia (por ejemplo, 220 Ω) en serie para no quemarse. Se conecta el ánodo (pata larga) al pin y el cátodo (pata corta) a GND. Los pulsadores se conectan a un pin de entrada. Las protoboards permiten armar circuitos sin soldar.", "Nunca conectes componentes con la placa alimentada: desconecta el USB antes de cambiar el circuito.", "El LED siempre lleva resistencia."],
      ["💡", "Proyectos y seguridad", "Con Arduino se pueden hacer semáforos, alarmas, medidores de temperatura, robots y sistemas de riego. Para trabajar seguro: revisar las conexiones, no sobrepasar el voltaje, no tocar cables pelados y pedir ayuda a un adulto si no estás seguro.", "Un proyecto sencillo: un sensor de luz que enciende una lámpara cuando oscurece.", "Prueba paso a paso."]
    ],
    mapa: ["Arduino", [["Microcontrolador", ["CPU", "Memoria", "Pines"]], ["Placa", ["Pines digitales", "Pines analógicos", "GND"]], ["Programa", ["setup()", "loop()", "delay()"]], ["Proyectos", ["LED", "Sensores", "Robots"]]]],
    tarjetas: [["¿Qué es un microcontrolador?", "Un pequeño computador en un chip."], ["¿Qué es Arduino?", "Una plataforma abierta de hardware y software."], ["¿Para qué sirve setup()?", "Para configurar al inicio, una sola vez."], ["¿Qué hace loop()?", "Se repite continuamente."], ["¿Qué hace delay(1000)?", "Espera un segundo."], ["¿Por qué un LED lleva resistencia?", "Para limitar la corriente y no quemarse."], ["¿Con qué función se enciende un pin?", "digitalWrite(pin, HIGH)."]],
    videos: ["Arduino para principiantes", "primer programa Arduino LED parpadeando", "qué es un microcontrolador"],
    n: 14
  },
  {
    tema: "Inteligencia artificial: conceptos básicos",
    resumen: "La inteligencia artificial (IA) permite que las máquinas realicen tareas que normalmente requieren inteligencia humana, como reconocer imágenes, entender el lenguaje o tomar decisiones. Aprende de los datos.",
    objetivos: ["Definirás IA y aprendizaje automático.", "Reconocerás sus aplicaciones.", "Reflexionarás sobre su uso ético."],
    partes: [
      ["🤖", "Qué es la IA", "Es la rama de la informática que crea sistemas capaces de percibir, razonar, aprender y actuar. Hoy se habla de IA «estrecha» (hace una tarea específica, como recomendar videos) y de IA general (hipotética, con inteligencia como la humana).", "El asistente de voz del celular y el traductor automático son ejemplos de IA.", "Máquinas que aprenden y deciden."],
      ["📚", "Aprendizaje automático", "El aprendizaje automático (machine learning) permite que un sistema aprenda de ejemplos en lugar de seguir reglas escritas a mano.\n- Supervisado: aprende con ejemplos etiquetados.\n- No supervisado: encuentra patrones sin etiquetas.\n- Por refuerzo: aprende por prueba y error con recompensas.", "Para reconocer gatos, se entrena con miles de fotos etiquetadas «gato» y «no gato».", "Aprender de los datos."],
      ["🧠", "Redes neuronales e IA generativa", "Las redes neuronales artificiales se inspiran en el cerebro y tienen capas de nodos conectados. Con muchas capas se habla de aprendizaje profundo. La IA generativa crea textos, imágenes, música o código a partir de lo aprendido.", "Los chatbots modernos usan modelos de lenguaje entrenados con enormes cantidades de texto.", "Capas de neuronas artificiales."],
      ["🌟", "Aplicaciones", "- Salud: apoyo al diagnóstico por imágenes.\n- Educación: tutores y recomendaciones personalizadas.\n- Transporte: vehículos autónomos.\n- Agricultura: detección de plagas.\n- Comercio: recomendaciones.\n- Accesibilidad: subtitulado y lectura de pantalla.", "Una app puede reconocer una enfermedad de las hojas de café a partir de una foto.", "La IA está en todas partes."],
      ["⚖️", "Ética y uso responsable", "La IA puede cometer errores, tener sesgos (si los datos son sesgados), afectar la privacidad y reemplazar ciertos trabajos. Se debe verificar la información que genera, proteger datos personales, citar cuando se use y mantener el criterio humano.", "Una IA entrenada con pocos datos de ciertos grupos puede equivocarse más con ellos.", "Úsala con criterio y responsabilidad."]
    ],
    mapa: ["Inteligencia artificial", [["Concepto", ["Máquinas que aprenden", "IA estrecha"]], ["Aprendizaje", ["Supervisado", "No supervisado", "Por refuerzo"]], ["Técnicas", ["Redes neuronales", "IA generativa"]], ["Ética", ["Sesgos", "Privacidad", "Verificar"]]]],
    tarjetas: [["¿Qué es la inteligencia artificial?", "Sistemas que realizan tareas que requieren inteligencia humana."], ["¿Qué es el aprendizaje automático?", "Que el sistema aprende de ejemplos y datos."], ["¿Qué es el aprendizaje supervisado?", "Aprender con ejemplos etiquetados."], ["¿Qué es una red neuronal?", "Un modelo con capas de nodos inspirado en el cerebro."], ["¿Qué es la IA generativa?", "La que crea texto, imágenes u otros contenidos."], ["¿Qué es un sesgo?", "Un error sistemático por datos o diseño injustos."], ["¿Por qué verificar lo que genera una IA?", "Porque puede equivocarse."]],
    videos: ["inteligencia artificial para estudiantes", "qué es el machine learning", "ética de la inteligencia artificial"],
    n: 14
  },
  {
    tema: "Ciberseguridad",
    resumen: "La ciberseguridad protege la información, los dispositivos y las personas en el mundo digital. Conocer las amenazas y las buenas prácticas ayuda a evitar fraudes, robos de datos y acoso en línea.",
    objetivos: ["Reconocerás amenazas comunes.", "Crearás contraseñas seguras.", "Aplicarás hábitos de protección."],
    partes: [
      ["🛡️", "Qué es y por qué importa", "Es el conjunto de prácticas y herramientas que protegen la confidencialidad, la integridad y la disponibilidad de la información. Nuestros datos (fotos, contraseñas, datos bancarios) tienen valor y pueden ser robados.", "Un robo de cuenta puede permitir que alguien se haga pasar por ti.", "Protege tu identidad digital."],
      ["🐛", "Amenazas comunes", "- Malware: software dañino (virus, troyanos, ransomware).\n- Phishing: mensajes falsos que imitan a entidades para robar datos.\n- Ingeniería social: engañar a las personas para que revelen información.\n- Ciberacoso (ciberbullying) y grooming.\n- Redes wifi públicas inseguras.", "Un correo que dice «Tu cuenta será bloqueada, haz clic aquí» suele ser phishing.", "Desconfía de enlaces y mensajes urgentes."],
      ["🔐", "Contraseñas seguras", "Una buena contraseña es larga (mínimo 12 caracteres), mezcla mayúsculas, minúsculas, números y símbolos, no usa datos personales (nombre, cumpleaños) y es distinta en cada cuenta. Se recomienda un gestor de contraseñas y la verificación en dos pasos (2FA).", "Mala: 12345678. Mejor: una frase como «Mi-perro-corre-3-km-al-dia!».", "Larga, única y con 2FA."],
      ["🧰", "Hábitos de protección", "- Mantener actualizados el sistema y las apps.\n- Instalar antivirus y usar firewall.\n- Descargar de fuentes oficiales.\n- Hacer copias de seguridad.\n- No compartir datos personales con desconocidos.\n- Cerrar sesión en equipos compartidos.\n- Revisar la configuración de privacidad.", "Una copia de seguridad permite recuperar tus archivos si un ransomware los bloquea.", "Prevenir es mejor que reparar."],
      ["⚖️", "Derechos, huella digital y qué hacer", "Todo lo que publicas deja una huella digital. En Colombia existe la Ley 1581 de 2012 de protección de datos personales y la Ley 1273 de 2009 sobre delitos informáticos. Si eres víctima: guarda las pruebas, bloquea al agresor, cuéntale a un adulto de confianza y reporta (en Colombia, por ejemplo, ante la Policía o canales como «Te protejo»).", "Piensa antes de publicar: lo que subes puede ser copiado y difundido.", "Cuida lo que publicas y pide ayuda."]
    ],
    mapa: ["Ciberseguridad", [["Amenazas", ["Malware", "Phishing", "Ingeniería social", "Ciberacoso"]], ["Contraseñas", ["Largas", "Únicas", "2FA"]], ["Hábitos", ["Actualizar", "Antivirus", "Copias de seguridad"]], ["Derechos", ["Ley 1581", "Ley 1273", "Reportar"]]]],
    tarjetas: [["¿Qué es el phishing?", "Mensajes falsos que buscan robar datos."], ["¿Qué es el malware?", "Software dañino."], ["¿Qué es el ransomware?", "Un malware que bloquea archivos y pide dinero."], ["¿Qué es la verificación en dos pasos?", "Una segunda comprobación para entrar a una cuenta."], ["¿Cómo debe ser una buena contraseña?", "Larga, única y sin datos personales."], ["¿Para qué sirven las copias de seguridad?", "Para recuperar la información si se pierde."], ["¿Qué debes hacer si sufres ciberacoso?", "Guardar pruebas, bloquear y contárselo a un adulto de confianza."]],
    videos: ["ciberseguridad para adolescentes", "qué es el phishing y cómo evitarlo", "cómo crear contraseñas seguras"],
    n: 14
  },
  {
    tema: "Gestión de proyectos tecnológicos",
    resumen: "Un proyecto tecnológico es un conjunto de actividades organizadas para resolver un problema o necesidad con una solución tecnológica. Se planea, se desarrolla, se prueba y se evalúa.",
    objetivos: ["Identificarás las fases de un proyecto.", "Planificarás tareas, tiempo y recursos.", "Evaluarás los resultados."],
    partes: [
      ["🎯", "Identificar el problema", "Todo proyecto comienza con una necesidad real. Se describe el problema, a quiénes afecta y qué se espera lograr. Se plantean objetivos claros, medibles y alcanzables.", "Problema: en el colegio se desperdicia mucha agua en los bebederos. Objetivo: crear un sistema que corte el agua cuando no se usa.", "Un buen proyecto resuelve un problema real."],
      ["💡", "Diseñar la solución", "Se investigan alternativas, se hacen bocetos o planos y se escoge la mejor. Se definen requisitos (qué debe hacer), materiales, herramientas y costos. Se elabora un presupuesto.", "Se comparan alternativas: un sensor de movimiento, un pulsador temporizado o una válvula manual.", "Compara opciones antes de decidir."],
      ["📅", "Planificar", "Se divide el trabajo en tareas, se asignan responsables y se fijan fechas. Una herramienta común es el diagrama de Gantt o un cronograma. También se identifican riesgos y qué hacer si algo sale mal.", "Tarea 1: investigar (semana 1). Tarea 2: construir el prototipo (semanas 2-3). Tarea 3: probar (semana 4).", "Organiza tareas, tiempos y responsables."],
      ["🛠️", "Construir y probar", "Se desarrolla un prototipo (una primera versión funcional) y se prueba para comprobar que cumple los requisitos. Se registran los errores y se mejora. Se aplican normas de seguridad en el trabajo.", "Se prueba si el sensor detecta bien la mano y cuánto tiempo mantiene abierta la llave.", "Probar, corregir y mejorar."],
      ["📣", "Evaluar y comunicar", "Se mide si se cumplió el objetivo, se analizan costos, tiempo e impacto (social y ambiental) y se identifican mejoras. Finalmente, se presenta el proyecto con un informe, una exposición o una demostración.", "Resultado: el sistema ahorró un 30 % de agua en un mes. Se presenta con gráficos y un video.", "Comunicar los resultados es parte del proyecto."]
    ],
    mapa: ["Proyecto tecnológico", [["Problema", ["Necesidad", "Objetivos"]], ["Diseño", ["Bocetos", "Requisitos", "Presupuesto"]], ["Planeación", ["Tareas", "Cronograma", "Riesgos"]], ["Ejecución", ["Prototipo", "Pruebas", "Evaluación"]]]],
    tarjetas: [["¿Con qué empieza un proyecto?", "Con un problema o necesidad."], ["¿Qué es un prototipo?", "Una primera versión funcional de la solución."], ["¿Qué es un cronograma?", "Un calendario de tareas y fechas."], ["¿Qué es un presupuesto?", "El cálculo de costos del proyecto."], ["¿Para qué se prueba el prototipo?", "Para comprobar que cumple los requisitos."], ["¿Qué se evalúa al final?", "Si se cumplió el objetivo y su impacto."], ["¿Qué es un riesgo?", "Algo que podría salir mal."]],
    videos: ["gestión de proyectos tecnológicos colegio", "fases de un proyecto tecnológico", "cómo hacer un cronograma de proyecto"],
    n: 12
  },
  {
    tema: "Energías renovables y tecnología",
    resumen: "Las energías renovables provienen de fuentes que se regeneran de forma natural: el sol, el viento, el agua, la biomasa y el calor de la Tierra. La tecnología permite aprovecharlas para reducir la contaminación.",
    objetivos: ["Distinguirás fuentes renovables y no renovables.", "Explicarás cómo funcionan las principales tecnologías.", "Valorarás su importancia para Colombia y el planeta."],
    partes: [
      ["♻️", "Renovables y no renovables", "- Renovables: solar, eólica, hidráulica, biomasa, geotérmica y mareomotriz. Se regeneran y emiten pocos gases de efecto invernadero.\n- No renovables: petróleo, carbón y gas natural. Se agotan y contaminan; su uso es la principal causa del cambio climático.", "El carbón y el petróleo tardaron millones de años en formarse; el sol sale cada día.", "Las renovables no se agotan."],
      ["☀️", "Energía solar", "Los paneles fotovoltaicos convierten la luz solar en electricidad mediante celdas de silicio. Los colectores solares térmicos calientan agua. Es útil en zonas aisladas, como La Guajira, y en techos de casas y colegios.", "Un panel solar en una escuela rural puede alimentar luces y computadores.", "Energía directa del Sol."],
      ["🌬️", "Energía eólica", "Los aerogeneradores usan la fuerza del viento para mover aspas que giran un generador. Se instalan en zonas con vientos constantes. En Colombia, el parque eólico Jepírachi, en La Guajira, fue pionero.", "Un molino de viento moderno puede generar electricidad para cientos de hogares.", "Viento que se convierte en electricidad."],
      ["💧", "Energía hidráulica y otras", "Las centrales hidroeléctricas usan la caída del agua para mover turbinas; en Colombia producen la mayor parte de la electricidad (cerca de dos tercios). La biomasa aprovecha residuos orgánicos para producir biogás o biocombustibles. La geotérmica usa el calor del interior de la Tierra.", "La central de Guatapé, en Antioquia, aprovecha el agua del embalse.", "El agua es clave para Colombia."],
      ["🌱", "Ventajas, retos y acciones", "- Ventajas: menos contaminación, fuentes inagotables, ahorro a largo plazo, empleo.\n- Retos: costos iniciales, intermitencia (el sol y el viento no siempre están), almacenamiento (baterías) y efectos en el territorio.\n- Acciones: ahorrar energía, usar bombillos LED, apagar aparatos, y apoyar la transición energética.", "Colombia busca ampliar la energía solar y eólica para diversificar su matriz energética.", "Cada persona puede ahorrar energía."]
    ],
    mapa: ["Energías renovables", [["Tipos", ["Solar", "Eólica", "Hidráulica", "Biomasa"]], ["No renovables", ["Petróleo", "Carbón", "Gas"]], ["Tecnología", ["Paneles", "Aerogeneradores", "Turbinas"]], ["Retos", ["Costos", "Almacenamiento", "Intermitencia"]]]],
    tarjetas: [["¿Qué es una energía renovable?", "Una que se regenera de forma natural."], ["Menciona una fuente no renovable.", "Petróleo, carbón o gas natural."], ["¿Qué convierte un panel fotovoltaico?", "La luz solar en electricidad."], ["¿Qué usa un aerogenerador?", "La fuerza del viento."], ["¿Qué fuente aporta más electricidad en Colombia?", "La hidráulica."], ["¿Qué es la biomasa?", "Materia orgánica usada como fuente de energía."], ["¿Cuál es un reto de la energía solar y eólica?", "La intermitencia y el almacenamiento."]],
    videos: ["energías renovables noveno grado", "cómo funciona un panel solar", "energía eólica e hidráulica en Colombia"],
    n: 14
  }
];
