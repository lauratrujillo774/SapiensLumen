// Teoría de Tecnología e Informática, grado 10°. Formato compacto.
export const area = "Tecnologia e Informatica";

export const temas = [
  {
    tema: "Programación orientada a objetos",
    resumen: "La programación orientada a objetos (POO) organiza el código en objetos que combinan datos y comportamientos. Sus pilares son clases, encapsulamiento, herencia y polimorfismo.",
    objetivos: ["Definirás clase y objeto.", "Explicarás los cuatro pilares de la POO.", "Escribirás una clase sencilla."],
    partes: [
      ["🧱", "Clases y objetos", "Una clase es un molde o plantilla que define atributos (datos) y métodos (acciones). Un objeto es una instancia concreta de una clase.", "Clase Perro: atributos nombre y edad; método ladrar(). Objetos: miPerro (Rocky, 3), otroPerro (Luna, 5).", "La clase es el molde; el objeto, la pieza."],
      ["🐍", "Ejemplo en Python", "El método __init__ inicializa los atributos; self representa al objeto.", "class Perro:\n    def __init__(self, nombre, edad):\n        self.nombre = nombre\n        self.edad = edad\n    def ladrar(self):\n        print(self.nombre, \"dice guau\")\n\nrocky = Perro(\"Rocky\", 3)\nrocky.ladrar()", "self es el propio objeto."],
      ["🔒", "Encapsulamiento", "Consiste en ocultar los datos internos y exponer solo lo necesario mediante métodos. Así se protege la información y se evitan cambios indebidos. En Python se usa el guion bajo para indicar atributos privados.", "Una cuenta bancaria no debe permitir cambiar el saldo directamente: usa depositar() y retirar().", "Protege los datos."],
      ["👪", "Herencia", "Una clase hija hereda atributos y métodos de una clase padre y puede añadir o modificar los suyos. Permite reutilizar código.", "class Animal: ...\nclass Gato(Animal): ...  # Gato hereda de Animal", "Reutiliza código."],
      ["🎭", "Polimorfismo y abstracción", "Polimorfismo: distintos objetos responden al mismo método de formas diferentes. Abstracción: representar solo lo esencial de un objeto.", "Perro.hablar() imprime «guau» y Gato.hablar() imprime «miau»; ambos tienen el método hablar().", "Un mismo método, varias formas."]
    ],
    mapa: ["POO", [["Conceptos", ["Clase", "Objeto", "Atributos", "Métodos"]], ["Encapsulamiento", ["Datos ocultos"]], ["Herencia", ["Padre e hija", "Reutilizar"]], ["Polimorfismo", ["Mismo método", "Distinto resultado"]]]],
    tarjetas: [["¿Qué es una clase?", "Un molde que define atributos y métodos."], ["¿Qué es un objeto?", "Una instancia de una clase."], ["¿Qué es el encapsulamiento?", "Ocultar los datos internos de un objeto."], ["¿Qué es la herencia?", "Que una clase obtenga atributos y métodos de otra."], ["¿Qué es el polimorfismo?", "Que un mismo método actúe de forma diferente según el objeto."], ["¿Qué es self en Python?", "El propio objeto."], ["¿Qué hace __init__?", "Inicializa los atributos del objeto."]],
    videos: ["programación orientada a objetos Python", "clases y objetos explicados", "herencia y polimorfismo"],
    n: 14
  },
  {
    tema: "Estructuras de datos",
    resumen: "Las estructuras de datos son formas de organizar y guardar información para usarla de manera eficiente. Las principales son listas, pilas, colas, diccionarios y árboles.",
    objetivos: ["Distinguirás estructuras de datos básicas.", "Reconocerás cuándo usar cada una.", "Usarás operaciones comunes."],
    partes: [
      ["📋", "Listas y arreglos", "Colección ordenada de elementos accesibles por índice. Permiten agregar, quitar y recorrer elementos. Son útiles cuando el orden importa.", "notas = [4.5, 3.8, 5.0]\nprint(notas[2])  # 5.0", "Acceso por posición."],
      ["📚", "Pilas (stack)", "Estructura LIFO (último en entrar, primero en salir). Operaciones: push (apilar) y pop (desapilar). Se usa en el botón «deshacer» y en la navegación hacia atrás.", "pila = []\npila.append(1)\npila.append(2)\npila.pop()  # 2", "Como una pila de platos."],
      ["🚶", "Colas (queue)", "Estructura FIFO (primero en entrar, primero en salir). Operaciones: encolar y desencolar. Se usa en filas de impresión, turnos y atención al cliente.", "from collections import deque\ncola = deque()\ncola.append(\"Ana\")\ncola.append(\"Luis\")\ncola.popleft()  # Ana", "Como una fila del banco."],
      ["🔑", "Diccionarios y conjuntos", "Un diccionario guarda pares clave-valor para acceder rápido por clave. Un conjunto (set) guarda elementos únicos sin orden.", "edades = {\"Ana\": 15, \"Luis\": 16}\nprint(edades[\"Ana\"])  # 15\nletras = {\"a\", \"b\", \"a\"}  # {'a', 'b'}", "Clave → valor."],
      ["🌳", "Árboles y grafos", "Un árbol organiza datos de forma jerárquica (raíz, ramas, hojas), como un árbol genealógico o las carpetas de un computador. Un grafo conecta nodos con aristas, como un mapa de rutas o una red social.", "Google Maps representa las calles como un grafo para hallar la ruta más corta.", "Jerarquías y relaciones."]
    ],
    mapa: ["Estructuras de datos", [["Lineales", ["Lista", "Pila (LIFO)", "Cola (FIFO)"]], ["Asociativas", ["Diccionario", "Conjunto"]], ["No lineales", ["Árbol", "Grafo"]], ["Elegir", ["Orden", "Velocidad", "Relaciones"]]]],
    tarjetas: [["¿Qué significa LIFO?", "Último en entrar, primero en salir."], ["¿Qué significa FIFO?", "Primero en entrar, primero en salir."], ["¿Qué estructura es una pila?", "LIFO."], ["¿Para qué sirve un diccionario?", "Para guardar pares clave-valor."], ["¿Qué guarda un conjunto?", "Elementos únicos."], ["Da un ejemplo de árbol.", "Las carpetas de un computador."], ["Da un ejemplo de grafo.", "Un mapa de rutas o una red social."]],
    videos: ["estructuras de datos básicas Python", "pilas y colas explicadas", "diccionarios en Python"],
    n: 14
  },
  {
    tema: "JavaScript y desarrollo web",
    resumen: "JavaScript es el lenguaje que da interactividad a las páginas web. Permite responder a clics, validar formularios, modificar el contenido y conectarse con servidores.",
    objetivos: ["Escribirás código JavaScript básico.", "Manipularás el DOM.", "Manejarás eventos."],
    partes: [
      ["🌐", "Web: HTML, CSS y JS", "HTML estructura la página, CSS la estiliza y JavaScript le da comportamiento. El navegador ejecuta JavaScript directamente. También existe Node.js para ejecutar JS fuera del navegador (como en el servidor de esta plataforma).", "Cuando haces clic en «Me gusta» y el contador sube sin recargar la página, hay JavaScript.", "JavaScript añade interactividad."],
      ["📦", "Variables, tipos y funciones", "Se declaran con let (puede cambiar) y const (constante). Tipos: number, string, boolean, array, object. Las funciones agrupan instrucciones.", "const nombre = \"Ana\";\nlet edad = 15;\nfunction saludar(n) {\n  return \"Hola, \" + n;\n}\nconsole.log(saludar(nombre));", "const por defecto; let si cambia."],
      ["🔀", "Condicionales y ciclos", "if / else para decidir; for y while para repetir; los arreglos se recorren con for...of.", "const notas = [3, 4, 5];\nfor (const n of notas) {\n  if (n >= 4) console.log(n, \"alta\");\n}", "Igual que en otros lenguajes."],
      ["🧩", "El DOM", "El DOM (Document Object Model) representa la página como un árbol de elementos. JavaScript puede buscar elementos (querySelector) y cambiar su texto, estilo o atributos.", "document.querySelector(\"#titulo\").textContent = \"Hola, mundo\";", "El DOM es la página como objetos."],
      ["🖱️", "Eventos", "Un evento es algo que ocurre (clic, teclado, envío de formulario). Con addEventListener se ejecuta una función al ocurrir.", "const boton = document.querySelector(\"#btn\");\nboton.addEventListener(\"click\", () => {\n  alert(\"¡Hiciste clic!\");\n});", "Evento → función."]
    ],
    mapa: ["JavaScript", [["Web", ["HTML", "CSS", "JavaScript"]], ["Lenguaje", ["let / const", "Funciones", "Arreglos"]], ["DOM", ["querySelector", "textContent"]], ["Eventos", ["click", "addEventListener"]]]],
    tarjetas: [["¿Para qué sirve JavaScript?", "Para dar interactividad a las páginas web."], ["¿Qué es el DOM?", "La representación de la página como un árbol de objetos."], ["¿Con qué se declara una constante?", "const."], ["¿Qué hace addEventListener?", "Asocia una función a un evento."], ["¿Qué hace console.log?", "Muestra información en la consola."], ["¿Qué hace querySelector?", "Busca un elemento de la página."], ["¿Qué es Node.js?", "Un entorno para ejecutar JavaScript fuera del navegador."]],
    videos: ["JavaScript para principiantes", "DOM y eventos JavaScript", "primer proyecto web con JavaScript"],
    n: 16
  },
  {
    tema: "Bases de datos con SQL",
    resumen: "SQL es el lenguaje estándar para trabajar con bases de datos relacionales. Permite crear tablas, consultar, relacionar y modificar datos con instrucciones claras.",
    objetivos: ["Crearás tablas y claves.", "Harás consultas con filtros y agrupaciones.", "Unirás tablas con JOIN."],
    partes: [
      ["🏗️", "Crear tablas", "Con CREATE TABLE se definen columnas, tipos de dato y claves. PRIMARY KEY identifica cada fila; FOREIGN KEY relaciona tablas.", "CREATE TABLE estudiantes (\n  id INT PRIMARY KEY,\n  nombre VARCHAR(50),\n  grado INT\n);", "Define estructura y claves."],
      ["✏️", "Insertar, actualizar y borrar", "INSERT INTO agrega filas; UPDATE modifica; DELETE elimina. Siempre usa WHERE en UPDATE y DELETE.", "INSERT INTO estudiantes VALUES (1, 'Ana', 10);\nUPDATE estudiantes SET grado = 11 WHERE id = 1;\nDELETE FROM estudiantes WHERE id = 1;", "Sin WHERE afectas todas las filas."],
      ["🔍", "Consultas con SELECT", "SELECT columnas FROM tabla WHERE condición ORDER BY columna LIMIT n. Operadores: =, <>, >, <, LIKE, AND, OR, IN, BETWEEN.", "SELECT nombre FROM estudiantes\nWHERE grado >= 10 AND nombre LIKE 'A%'\nORDER BY nombre;", "Filtra, ordena y limita."],
      ["📊", "Funciones y agrupación", "Funciones de agregación: COUNT, SUM, AVG, MIN, MAX. GROUP BY agrupa; HAVING filtra los grupos.", "SELECT grado, COUNT(*) AS total\nFROM estudiantes\nGROUP BY grado;", "Resume muchos datos en pocos."],
      ["🔗", "JOIN: unir tablas", "Los JOIN combinan filas de tablas relacionadas mediante claves. INNER JOIN muestra solo las coincidencias; LEFT JOIN muestra todas las de la izquierda.", "SELECT e.nombre, n.nota\nFROM estudiantes e\nINNER JOIN notas n ON n.id_estudiante = e.id;", "Relaciona tablas con ON."]
    ],
    mapa: ["SQL", [["Estructura", ["CREATE TABLE", "PRIMARY KEY"]], ["Modificar", ["INSERT", "UPDATE", "DELETE"]], ["Consultar", ["SELECT", "WHERE", "ORDER BY"]], ["Avanzado", ["GROUP BY", "JOIN"]]]],
    tarjetas: [["¿Para qué sirve CREATE TABLE?", "Para crear una tabla."], ["¿Qué hace SELECT?", "Consulta datos."], ["¿Qué hace GROUP BY?", "Agrupa filas para resumirlas."], ["¿Qué hace COUNT?", "Cuenta filas."], ["¿Qué hace INNER JOIN?", "Une filas que coinciden en ambas tablas."], ["¿Qué es una clave foránea?", "Un campo que referencia la clave primaria de otra tabla."], ["¿Qué pasa si usas DELETE sin WHERE?", "Se borran todas las filas."]],
    videos: ["SQL básico para principiantes", "JOIN en SQL explicado", "GROUP BY y funciones de agregación"],
    n: 16
  },
  {
    tema: "Redes y protocolos",
    resumen: "Una red conecta dispositivos para compartir información. Los protocolos son las reglas que permiten que se comuniquen. Internet es la red de redes, basada en TCP/IP.",
    objetivos: ["Reconocerás tipos de redes.", "Comprenderás direcciones IP y DNS.", "Distinguirás protocolos de uso común."],
    partes: [
      ["🌐", "Tipos de redes", "Por tamaño: PAN (personal), LAN (local, como la de un colegio), MAN (metropolitana) y WAN (amplia, como Internet). Por conexión: cableada (Ethernet) e inalámbrica (Wi-Fi).", "El wifi de tu casa es una LAN.", "LAN, MAN y WAN."],
      ["🧰", "Dispositivos de red", "- Router: conecta redes y dirige el tráfico.\n- Switch: conecta dispositivos dentro de una LAN.\n- Módem: conecta con el proveedor de Internet.\n- Punto de acceso: ofrece Wi-Fi.\n- Servidor y clientes.", "El router asigna direcciones a tus dispositivos.", "Cada equipo cumple un papel."],
      ["🔢", "Direcciones IP y DNS", "Cada dispositivo tiene una dirección IP única. IPv4 usa 4 números (192.168.1.10) y IPv6 usa direcciones más largas. El DNS traduce nombres de dominio (www.colombia.co) a direcciones IP, como una guía telefónica.", "Cuando escribes un sitio web, el DNS encuentra el servidor correcto.", "El DNS traduce nombres a números."],
      ["📜", "Modelo y protocolos", "El modelo TCP/IP organiza la comunicación en capas. Protocolos comunes: HTTP/HTTPS (web), FTP (archivos), SMTP/IMAP (correo), TCP (entrega confiable), UDP (rápida), DHCP (asigna IP) y Wi-Fi/Ethernet.", "HTTPS cifra la información entre tu navegador y el sitio, y se reconoce por el candado.", "Los protocolos son reglas compartidas."],
      ["🛡️", "Seguridad y diagnóstico", "Buenas prácticas: contraseña segura de Wi-Fi (WPA2/WPA3), firewall, actualizar el router y evitar redes públicas para datos sensibles. Comandos útiles: ping (probar conexión) y ipconfig o ifconfig (ver tu IP).", "Un ping lento puede indicar problemas en la red.", "Red segura y verificada."]
    ],
    mapa: ["Redes y protocolos", [["Tipos", ["LAN", "WAN", "Wi-Fi"]], ["Dispositivos", ["Router", "Switch", "Módem"]], ["Direcciones", ["IP", "DNS"]], ["Protocolos", ["HTTP/HTTPS", "TCP/IP", "SMTP"]]]],
    tarjetas: [["¿Qué es una LAN?", "Una red de área local."], ["¿Qué hace un router?", "Conecta redes y dirige el tráfico."], ["¿Qué es una dirección IP?", "El identificador de un dispositivo en una red."], ["¿Qué hace el DNS?", "Traduce nombres de dominio a direcciones IP."], ["¿Qué significa HTTPS?", "HTTP seguro (cifrado)."], ["¿Para qué sirve ping?", "Para probar la conexión con otro equipo."], ["¿Qué es un protocolo?", "Un conjunto de reglas de comunicación."]],
    videos: ["redes de computadores básico", "qué es una dirección IP y DNS", "modelo TCP/IP explicado"],
    n: 14
  },
  {
    tema: "Internet de las cosas",
    resumen: "El Internet de las cosas (IoT) conecta objetos cotidianos a Internet para que recojan datos, se comuniquen y actúen sin intervención constante. Se usa en hogares, ciudades, agricultura e industria.",
    objetivos: ["Definirás IoT.", "Reconocerás sus componentes.", "Analizarás aplicaciones y riesgos."],
    partes: [
      ["🔌", "Qué es IoT", "Es una red de objetos físicos con sensores, software y conectividad que intercambian datos. Ejemplos: termostatos inteligentes, relojes, bombillos, cámaras, carros conectados y sensores agrícolas.", "Una nevera que avisa cuando falta leche usa IoT.", "Objetos que se conectan."],
      ["🧩", "Componentes", "- Sensores y actuadores.\n- Microcontroladores (Arduino, ESP32).\n- Conectividad (Wi-Fi, Bluetooth, LoRa, 4G/5G).\n- Plataforma en la nube para almacenar y analizar datos.\n- Aplicación de usuario.", "Cadena típica: sensor → microcontrolador → red → nube → app.", "De la medición a la acción."],
      ["🌆", "Aplicaciones", "- Hogar inteligente: luces, cerraduras, seguridad.\n- Ciudades inteligentes: semáforos, alumbrado, residuos.\n- Agricultura de precisión: riego automático.\n- Salud: monitoreo de pacientes.\n- Industria: mantenimiento predictivo.", "Un sensor de humedad activa el riego de un cultivo de café solo cuando hace falta.", "Eficiencia y automatización."],
      ["📡", "Protocolos para IoT", "MQTT es un protocolo ligero de mensajería muy usado, basado en publicación y suscripción. También se usa HTTP y CoAP. Un dispositivo publica datos en un «tema» y las aplicaciones suscritas los reciben.", "El sensor publica «temperatura/sala = 24» y la app lo muestra.", "MQTT: ligero y eficiente."],
      ["⚠️", "Riesgos y ética", "Riesgos: ciberataques a dispositivos poco protegidos, pérdida de privacidad, dependencia de la tecnología y residuos electrónicos. Buenas prácticas: cambiar contraseñas por defecto, actualizar el firmware y limitar los datos que se recogen.", "Una cámara con contraseña de fábrica puede ser vulnerada.", "Conectividad con seguridad."]
    ],
    mapa: ["Internet de las cosas", [["Qué es", ["Objetos conectados"]], ["Componentes", ["Sensores", "Microcontrolador", "Nube"]], ["Aplicaciones", ["Hogar", "Agricultura", "Ciudad"]], ["Riesgos", ["Privacidad", "Seguridad"]]]],
    tarjetas: [["¿Qué es el IoT?", "Una red de objetos con sensores conectados a Internet."], ["Da un ejemplo de IoT.", "Un termostato inteligente."], ["¿Qué es MQTT?", "Un protocolo ligero de publicación y suscripción."], ["¿Para qué sirve la nube en IoT?", "Para almacenar y analizar los datos."], ["¿Qué es un actuador?", "Un componente que ejecuta una acción."], ["¿Qué riesgo tiene el IoT?", "Ataques y pérdida de privacidad."], ["¿Qué conviene cambiar de fábrica?", "Las contraseñas por defecto."]],
    videos: ["internet de las cosas explicado", "IoT aplicaciones agricultura", "MQTT protocolo IoT"],
    n: 12
  },
  {
    tema: "Diseño 3D e impresión",
    resumen: "El diseño 3D crea modelos digitales de objetos que se pueden visualizar, simular o fabricar con una impresora 3D. Es usado en ingeniería, arquitectura, medicina y arte.",
    objetivos: ["Reconocerás los conceptos básicos del modelado 3D.", "Explicarás cómo funciona una impresora 3D.", "Prepararás un modelo para imprimir."],
    partes: [
      ["🧊", "Modelado 3D", "Un modelo 3D se construye con formas básicas (cubo, esfera, cilindro) que se combinan, escalan y modifican. Los programas más usados: Tinkercad (para principiantes), Blender, Fusion 360, FreeCAD y SketchUp. Se trabaja en tres ejes: X, Y y Z.", "Una taza puede hacerse con un cilindro al que se le resta otro cilindro interior.", "Formas simples → objetos complejos."],
      ["🛠️", "Operaciones básicas", "- Mover, rotar y escalar.\n- Unir (suma) y restar (hueco).\n- Alinear y agrupar.\n- Medir con precisión (milímetros).\n- Exportar a STL u OBJ.", "El formato STL guarda la forma del objeto como una malla de triángulos.", "STL es el formato para imprimir."],
      ["🖨️", "Impresión 3D", "La más común es la FDM (modelado por deposición fundida): la impresora derrite filamento plástico (PLA, ABS, PETG) y lo deposita capa por capa. También existe la impresión con resina (SLA) y con polvo (SLS).", "El PLA es biodegradable y fácil de imprimir; el ABS es más resistente al calor.", "Se construye capa por capa."],
      ["⚙️", "Preparación: el slicer", "El slicer (por ejemplo Cura) convierte el modelo en capas e instrucciones (G-code). Se configuran: altura de capa, relleno (infill), soportes, velocidad y temperatura.", "Un relleno del 20 % ahorra material y mantiene la resistencia en piezas simples.", "Slicer → G-code → impresora."],
      ["🌍", "Aplicaciones y consideraciones", "Se fabrican prototipos, prótesis, piezas de repuesto, maquetas, juguetes y órganos artificiales en investigación. Buenas prácticas: ventilar el espacio, no tocar la boquilla caliente y reciclar los residuos de plástico.", "Existen prótesis de mano impresas en 3D de bajo costo.", "Innovación con responsabilidad."]
    ],
    mapa: ["Diseño 3D", [["Modelado", ["Formas básicas", "Ejes X, Y, Z"]], ["Software", ["Tinkercad", "Blender", "Fusion 360"]], ["Impresión", ["FDM", "PLA / ABS", "Capas"]], ["Preparación", ["STL", "Slicer", "G-code"]]]],
    tarjetas: [["¿Qué es un modelo STL?", "Un archivo con la forma 3D del objeto."], ["¿Qué hace el slicer?", "Convierte el modelo en capas e instrucciones."], ["¿Qué es FDM?", "Impresión por deposición de filamento fundido."], ["¿Cuáles son los ejes del espacio 3D?", "X, Y y Z."], ["¿Qué es el infill?", "El relleno interior de la pieza."], ["Menciona un filamento común.", "PLA o ABS."], ["¿Qué programa es sencillo para principiantes?", "Tinkercad."]],
    videos: ["diseño 3D Tinkercad principiantes", "cómo funciona una impresora 3D", "slicer Cura configuración básica"],
    n: 12
  },
  {
    tema: "Algoritmos de búsqueda y ordenamiento",
    resumen: "Los algoritmos de búsqueda encuentran un dato en una colección y los de ordenamiento lo ponen en orden. Se comparan por su eficiencia: cuánto tiempo y memoria necesitan.",
    objetivos: ["Aplicarás búsqueda lineal y binaria.", "Ordenarás con burbuja, selección e inserción.", "Compararás eficiencia."],
    partes: [
      ["🔍", "Búsqueda lineal", "Recorre los elementos uno por uno hasta encontrar el buscado. Funciona en listas desordenadas, pero en el peor caso revisa todos los elementos.", "def buscar(lista, x):\n    for i, v in enumerate(lista):\n        if v == x:\n            return i\n    return -1", "Revisa uno por uno."],
      ["✂️", "Búsqueda binaria", "Funciona solo en listas ordenadas. Compara con el elemento del medio y descarta la mitad en cada paso. Es mucho más rápida: para 1.000.000 de datos hace unas 20 comparaciones.", "Buscar 7 en [1, 3, 5, 7, 9, 11]: el medio es 5 (menor), se continúa en [7, 9, 11] y se encuentra.", "Divide y descarta la mitad."],
      ["🫧", "Ordenamiento burbuja", "Compara pares de elementos vecinos y los intercambia si están en mal orden; se repite hasta que no haya cambios. Es sencillo pero lento en listas grandes.", "[5, 2, 4] → [2, 5, 4] → [2, 4, 5]", "Los mayores «suben» como burbujas."],
      ["🎯", "Selección e inserción", "- Selección: busca el menor y lo coloca al inicio; repite con el resto.\n- Inserción: toma cada elemento y lo inserta en su lugar entre los ya ordenados (como ordenar cartas en la mano).", "Inserción funciona bien con listas pequeñas o casi ordenadas.", "Dos formas intuitivas de ordenar."],
      ["⏱️", "Eficiencia", "La notación Big O describe cómo crece el tiempo con el tamaño n: búsqueda lineal O(n), búsqueda binaria O(log n), burbuja/selección/inserción O(n²). Algoritmos más eficientes: merge sort y quicksort, O(n log n). Python usa sorted() o .sort(), muy optimizados.", "Para 1.000 datos, O(n²) hace unas 1.000.000 de operaciones; O(n log n), unas 10.000.", "Elegir bien ahorra mucho tiempo."]
    ],
    mapa: ["Búsqueda y ordenamiento", [["Búsqueda", ["Lineal O(n)", "Binaria O(log n)"]], ["Ordenamiento simple", ["Burbuja", "Selección", "Inserción"]], ["Eficientes", ["Merge sort", "Quicksort"]], ["Análisis", ["Big O", "Tiempo y memoria"]]]],
    tarjetas: [["¿Qué requiere la búsqueda binaria?", "Que la lista esté ordenada."], ["¿Cuál es el costo de la búsqueda lineal?", "O(n)."], ["¿Cuál es el costo de la búsqueda binaria?", "O(log n)."], ["¿Cómo funciona el ordenamiento burbuja?", "Intercambia vecinos que están en mal orden."], ["¿Qué costo tiene la burbuja?", "O(n²)."], ["Menciona un algoritmo eficiente de ordenamiento.", "Merge sort o quicksort."], ["¿Qué mide la notación Big O?", "Cómo crece el tiempo con el tamaño de los datos."]],
    videos: ["algoritmos de ordenamiento explicados", "búsqueda binaria vs lineal", "notación Big O para principiantes"],
    n: 14
  },
  {
    tema: "Propiedad intelectual y ética digital",
    resumen: "La propiedad intelectual protege las creaciones de la mente: obras, marcas e inventos. La ética digital orienta el uso responsable de la tecnología, respetando derechos de autor, privacidad y a otras personas.",
    objetivos: ["Distinguirás derechos de autor, marcas y patentes.", "Conocerás licencias abiertas.", "Aplicarás principios de ética digital."],
    partes: [
      ["©️", "Derechos de autor", "Protegen obras literarias, artísticas y científicas: libros, música, fotos, películas y software. Existen derechos morales (reconocimiento del autor) y patrimoniales (uso y explotación económica). En Colombia, la Ley 23 de 1982 y la Dirección Nacional de Derecho de Autor los regulan. La protección dura toda la vida del autor y 80 años después.", "Copiar y vender una película sin permiso es piratería.", "El autor decide cómo se usa su obra."],
      ["®️", "Marcas y patentes", "- Marca: signo que distingue productos o servicios (nombre, logo). Se registra ante la Superintendencia de Industria y Comercio (SIC).\n- Patente: protege un invento nuevo y útil por unos 20 años.", "El logo de una empresa de bebidas es una marca registrada.", "Marca: identifica. Patente: protege inventos."],
      ["🔓", "Licencias abiertas", "Creative Commons permite compartir obras con condiciones: reconocer al autor (BY), no uso comercial (NC), sin obras derivadas (ND), compartir igual (SA). El software libre y el de código abierto (Linux, Python) permiten usar, estudiar y modificar el programa.", "Wikipedia usa licencias abiertas para que su contenido pueda compartirse.", "Compartir con reglas claras."],
      ["⚠️", "Plagio y uso responsable", "El plagio es presentar como propio el trabajo ajeno. Evítalo citando y parafraseando. Usa imágenes, música y software con licencia o de bancos gratuitos. La inteligencia artificial también plantea preguntas sobre autoría.", "Si usas una foto de internet en un trabajo, cita la fuente.", "Cita siempre tus fuentes."],
      ["🤝", "Ética digital", "Principios: respeto (no ciberacoso), honestidad (no suplantar), privacidad (no difundir datos ajenos), responsabilidad (verificar antes de compartir) y empatía. La Ley 1581 de 2012 protege los datos personales y la Ley 1273 de 2009 sanciona delitos informáticos.", "Compartir una foto de alguien sin permiso puede vulnerar su privacidad.", "Actúa en línea como lo harías en persona."]
    ],
    mapa: ["Propiedad intelectual y ética", [["Derechos de autor", ["Morales", "Patrimoniales"]], ["Industrial", ["Marcas", "Patentes"]], ["Licencias", ["Creative Commons", "Software libre"]], ["Ética digital", ["Respeto", "Privacidad", "Honestidad"]]]],
    tarjetas: [["¿Qué protegen los derechos de autor?", "Obras literarias, artísticas y científicas."], ["¿Qué protege una patente?", "Un invento."], ["¿Qué identifica una marca?", "Productos o servicios de una empresa."], ["¿Qué es Creative Commons?", "Un sistema de licencias para compartir obras."], ["¿Qué es el plagio?", "Presentar el trabajo ajeno como propio."], ["¿Qué ley colombiana protege los datos personales?", "La Ley 1581 de 2012."], ["¿Qué significa software libre?", "Que se puede usar, estudiar, modificar y compartir."]],
    videos: ["propiedad intelectual explicada", "Creative Commons licencias", "ética digital para estudiantes"],
    n: 12
  },
  {
    tema: "Seguridad informática",
    resumen: "La seguridad informática protege sistemas, redes y datos frente a accesos no autorizados y daños. Se basa en tres pilares: confidencialidad, integridad y disponibilidad.",
    objetivos: ["Explicarás la tríada CIA.", "Reconocerás ataques comunes.", "Aplicarás defensas básicas como cifrado y copias de seguridad."],
    partes: [
      ["🔐", "Tríada CIA", "- Confidencialidad: solo accede quien está autorizado.\n- Integridad: los datos no se alteran sin permiso.\n- Disponibilidad: los sistemas están disponibles cuando se necesitan.", "Un ataque de denegación de servicio (DDoS) afecta la disponibilidad.", "Confidencialidad, integridad, disponibilidad."],
      ["🐛", "Amenazas y ataques", "- Malware: virus, gusanos, troyanos, ransomware, spyware.\n- Phishing: engaño por correo o mensajes.\n- Ataques de fuerza bruta a contraseñas.\n- Inyección SQL.\n- Ataque de intermediario (man-in-the-middle).\n- DDoS.\n- Ingeniería social.", "Un troyano parece un programa útil, pero esconde un código malicioso.", "Los ataques explotan fallas técnicas y humanas."],
      ["🧰", "Defensas", "- Antivirus y firewall.\n- Actualizaciones de software.\n- Contraseñas fuertes y autenticación en dos pasos (2FA).\n- Copias de seguridad (regla 3-2-1).\n- Control de accesos y permisos mínimos.\n- Capacitación de los usuarios.", "Regla 3-2-1: 3 copias, en 2 tipos de medios, 1 fuera del lugar.", "Prevención en capas."],
      ["🔑", "Criptografía", "Cifrar es transformar información legible en ilegible con una clave. Simétrico: la misma clave cifra y descifra (AES). Asimétrico: clave pública y privada (RSA). Un hash convierte datos en una huella única; las contraseñas se guardan con hash, no en texto plano.", "El candado de HTTPS indica que la comunicación va cifrada.", "Cifrar protege la información."],
      ["🚨", "Buenas prácticas y respuesta", "Usa Wi-Fi seguro, evita enlaces sospechosos, revisa permisos de las apps y cierra sesiones. Si sufres un incidente: desconecta el equipo, cambia contraseñas, avisa a un responsable, restaura desde copia y reporta (por ejemplo, ante el CAI Virtual de la Policía).", "Un buen hábito es revisar la URL antes de ingresar tus datos.", "Prevenir y saber reaccionar."]
    ],
    mapa: ["Seguridad informática", [["Pilares", ["Confidencialidad", "Integridad", "Disponibilidad"]], ["Ataques", ["Malware", "Phishing", "DDoS"]], ["Defensas", ["Firewall", "2FA", "Copias"]], ["Criptografía", ["Simétrica", "Asimétrica", "Hash"]]]],
    tarjetas: [["¿Qué significa CIA en seguridad?", "Confidencialidad, integridad y disponibilidad."], ["¿Qué es un DDoS?", "Un ataque que satura un servicio."], ["¿Qué es el ransomware?", "Un malware que bloquea archivos y pide rescate."], ["¿Qué es el cifrado?", "Convertir datos en ilegibles con una clave."], ["¿Qué es un hash?", "Una huella única de un dato."], ["¿Qué es la regla 3-2-1?", "3 copias, 2 medios distintos, 1 fuera del lugar."], ["¿Qué es la 2FA?", "Autenticación en dos pasos."]],
    videos: ["seguridad informática conceptos básicos", "tipos de ataques informáticos", "criptografía simétrica y asimétrica"],
    n: 14
  }
];
