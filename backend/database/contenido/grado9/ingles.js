// Teoría de Inglés, grado 9°. Explicación en español, ejemplos en inglés con traducción.
export const area = "Ingles";

export const temas = [
  {
    tema: "Present perfect vs. past simple",
    resumen: "El present perfect conecta el pasado con el presente; el past simple habla de acciones terminadas en un momento concreto del pasado. Elegir bien depende de si se menciona cuándo ocurrió la acción.",
    objetivos: ["Formarás el present perfect.", "Distinguirás su uso del past simple.", "Usarás las palabras clave (ever, never, already, yet, for, since)."],
    partes: [
      ["🔧", "Formación", "Present perfect: have / has + participio pasado. Con I, you, we, they se usa have; con he, she, it, has. Los verbos regulares terminan en -ed; los irregulares cambian (go → gone, see → seen, do → done).", "- I have finished my homework. (Ya terminé mi tarea.)\n- She has visited Cartagena. (Ella ha visitado Cartagena.)", "have / has + participio."],
      ["🎯", "Cuándo usar el present perfect", "- Experiencias de vida sin decir cuándo.\n- Acciones que empezaron en el pasado y siguen en el presente.\n- Resultados presentes de una acción reciente.", "- Have you ever eaten arepas? (¿Has comido arepas alguna vez?)\n- We have lived here for five years. (Vivimos aquí hace cinco años.)", "Pasado con relevancia en el presente."],
      ["⏰", "Cuándo usar el past simple", "Se usa para acciones terminadas en un tiempo específico del pasado (yesterday, last week, in 2020, two days ago). Se forma con el verbo en pasado (regular -ed o irregular).", "- I visited Medellín last year. (Visité Medellín el año pasado.)\n- She saw that movie yesterday. (Ella vio esa película ayer.)", "Con tiempo específico, usa past simple."],
      ["🔑", "Palabras clave", "- Present perfect: ever, never, already, yet, just, so far, recently, for (duración), since (punto de inicio).\n- Past simple: yesterday, last…, ago, in + año.", "- I have never seen snow. (Nunca he visto nieve.)\n- He has lived in Cali since 2019. (Vive en Cali desde 2019.)\n- They have already eaten. (Ya comieron.)", "For = cuánto tiempo; since = desde cuándo."],
      ["⚖️", "Comparación", "Si dices cuándo, usa past simple; si no importa cuándo y te interesa la experiencia o el resultado, usa present perfect. Negativas: haven't / hasn't + participio; didn't + verbo base.", "- I have lost my keys. (Ahora no los tengo.)\n- I lost my keys yesterday. (Los perdí ayer.)\n- Have you finished? / Did you finish it last night?", "No mezcles «yesterday» con present perfect."]
    ],
    mapa: ["Present perfect vs. past simple", [["Present perfect", ["have/has + participio", "Experiencias", "Conexión con el presente"]], ["Past simple", ["Verbo en pasado", "Tiempo terminado"]], ["Clave PP", ["ever, never, already, yet", "for, since"]], ["Clave PS", ["yesterday, last, ago"]]]],
    tarjetas: [["¿Cómo se forma el present perfect?", "have/has + participio pasado."], ["Traduce: «She has finished».", "Ella ha terminado."], ["¿Cuál se usa con «yesterday»?", "Past simple."], ["¿Qué indica «for»?", "Cuánto tiempo (duración)."], ["¿Qué indica «since»?", "Desde cuándo (inicio)."], ["Participio de «go».", "Gone."], ["Completa: I ___ never ___ sushi (eat).", "have never eaten."]],
    videos: ["present perfect vs past simple", "present perfect for and since", "present perfect ever never already yet"],
    n: 14
  },
  {
    tema: "Primer condicional",
    resumen: "El primer condicional expresa situaciones posibles o probables en el futuro y sus consecuencias. Se construye con if + presente simple y will + verbo base.",
    objetivos: ["Formarás oraciones en primer condicional.", "Usarás if y unless.", "Hablarás de posibilidades futuras."],
    partes: [
      ["🔧", "Estructura", "If + presente simple, will + verbo base.\nLa condición (if) y el resultado (will) pueden ir en cualquier orden. Si empieza con if, se usa una coma.", "- If it rains, we will stay home. (Si llueve, nos quedaremos en casa.)\n- We will stay home if it rains.", "If + presente, will + verbo."],
      ["🎯", "Uso", "Habla de situaciones reales o posibles en el futuro: promesas, advertencias, planes y predicciones. No se usa will en la parte del if.", "- If you study, you will pass the exam. (Si estudias, aprobarás el examen.)\n- If you touch that, you will burn yourself. (Si lo tocas, te quemarás.)", "No pongas will después de if."],
      ["🚫", "Negativas y preguntas", "Negativas: don't / doesn't en el if, won't en el resultado. Preguntas: What will happen if…?", "- If you don't hurry, you won't arrive on time. (Si no te apuras, no llegarás a tiempo.)\n- What will you do if it rains? (¿Qué harás si llueve?)", "won't = will not."],
      ["⚠️", "Unless", "«Unless» significa «a menos que» (if… not). Se usa con un verbo afirmativo.", "- Unless you hurry, you will be late. (A menos que te apures, llegarás tarde.)\n- = If you don't hurry, you will be late.", "Unless = if … not."],
      ["🔄", "Otras opciones", "En lugar de will, se pueden usar can, may, might, should o el imperativo.", "- If you see him, tell him to call me. (Si lo ves, dile que me llame.)\n- If it's sunny, we might go to the beach. (Si hace sol, quizá vayamos a la playa.)", "El resultado puede usar modales."]
    ],
    mapa: ["Primer condicional", [["Estructura", ["If + presente", "will + verbo base"]], ["Uso", ["Posibilidades futuras", "Promesas", "Advertencias"]], ["Unless", ["a menos que", "if … not"]], ["Variantes", ["can", "might", "imperativo"]]]],
    tarjetas: [["¿Qué estructura tiene el primer condicional?", "If + presente simple, will + verbo base."], ["Traduce: «If it rains, I will stay home».", "Si llueve, me quedaré en casa."], ["¿Se usa will después de if?", "No."], ["¿Qué significa «unless»?", "A menos que."], ["Completa: If you ___ (study), you will pass.", "study."], ["Forma negativa de will.", "Won't."], ["Completa: If she ___ (come), we will go.", "comes."]],
    videos: ["first conditional english", "primer condicional en inglés ejemplos", "unless vs if not"],
    n: 12
  },
  {
    tema: "Voz pasiva (presente y pasado)",
    resumen: "En la voz pasiva, el foco está en lo que recibe la acción y no en quien la realiza. Se forma con el verbo to be + participio pasado.",
    objetivos: ["Formarás la voz pasiva en presente y pasado.", "Pasarás oraciones de activa a pasiva.", "Usarás by para mencionar al agente."],
    partes: [
      ["🔄", "Activa vs. pasiva", "En la voz activa el sujeto realiza la acción; en la pasiva el sujeto la recibe. Se usa cuando el agente es desconocido, obvio o menos importante que la acción.", "- Active: Shakira sings this song. (Shakira canta esta canción.)\n- Passive: This song is sung by Shakira. (Esta canción es cantada por Shakira.)", "El objeto de la activa pasa a ser sujeto."],
      ["⏰", "Presente simple pasivo", "am / is / are + participio pasado.", "- English is spoken in many countries. (El inglés se habla en muchos países.)\n- The rooms are cleaned every day. (Las habitaciones se limpian todos los días.)", "is / are + participio."],
      ["📜", "Pasado simple pasivo", "was / were + participio pasado.", "- The Mona Lisa was painted by Leonardo da Vinci. (La Mona Lisa fue pintada por Leonardo da Vinci.)\n- The windows were broken last night. (Las ventanas se rompieron anoche.)", "was / were + participio."],
      ["🔧", "Cómo pasar de activa a pasiva", "1) El objeto de la activa pasa a ser el sujeto. 2) Se usa be en el mismo tiempo verbal + participio. 3) El sujeto de la activa pasa al final con by (opcional).", "- Active: They built this bridge in 1990.\n- Passive: This bridge was built in 1990 (by them).", "Mismo tiempo para be."],
      ["❓", "Negativas y preguntas", "Negativas: is not / was not + participio. Preguntas: se invierte be y el sujeto. Se omite by cuando el agente no importa.", "- The letter wasn't sent. (La carta no fue enviada.)\n- Was the door locked? (¿Estaba cerrada la puerta?)\n- Where are these cars made? (¿Dónde se fabrican estos carros?)", "Pregunta: be + sujeto + participio."]
    ],
    mapa: ["Voz pasiva", [["Idea", ["El foco está en la acción", "by + agente"]], ["Presente", ["am / is / are + participio"]], ["Pasado", ["was / were + participio"]], ["Pasos", ["Objeto a sujeto", "be + participio"]]]],
    tarjetas: [["¿Cómo se forma la pasiva en presente?", "am/is/are + participio."], ["¿Cómo se forma la pasiva en pasado?", "was/were + participio."], ["Pasa a pasiva: «Tom writes the letter».", "The letter is written by Tom."], ["Traduce: «The cake was eaten».", "El pastel fue comido."], ["¿Para qué sirve «by»?", "Para indicar quién hace la acción."], ["Participio de «make».", "Made."], ["Pregunta pasiva: «Was it built?»", "¿Fue construido?"]],
    videos: ["passive voice english present and past", "voz pasiva en inglés", "active to passive voice"],
    n: 14
  },
  {
    tema: "Oraciones de relativo",
    resumen: "Las oraciones de relativo añaden información sobre una persona, cosa o lugar usando pronombres relativos como who, which, that, where y whose.",
    objetivos: ["Usarás los pronombres relativos.", "Distinguirás oraciones especificativas y explicativas.", "Combinarás oraciones con relativos."],
    partes: [
      ["👤", "Who", "Se usa para personas. Reemplaza al sujeto o al objeto.", "- The girl who lives next door is my friend. (La chica que vive al lado es mi amiga.)\n- I know the man who called you. (Conozco al hombre que te llamó.)", "Who = personas."],
      ["📦", "Which y that", "Which se usa para cosas y animales; that puede usarse para personas y cosas (en relativas especificativas).", "- The book which I bought is interesting. (El libro que compré es interesante.)\n- The car that he drives is red. (El carro que conduce es rojo.)", "Which = cosas. That = ambos."],
      ["📍", "Where y whose", "- Where: para lugares.\n- Whose: indica posesión («cuyo/a»).", "- This is the school where I study. (Esta es la escuela donde estudio.)\n- She is the girl whose bike was stolen. (Es la chica cuya bicicleta fue robada.)", "Where = lugar. Whose = posesión."],
      ["📝", "Especificativas y explicativas", "- Especificativas (defining): dan información necesaria; no llevan comas; se puede usar that.\n- Explicativas (non-defining): dan información extra; van entre comas; no se usa that.", "- The student who won the prize is my cousin. (necesaria)\n- My cousin, who lives in Bogotá, is a doctor. (extra)", "Información extra: entre comas."],
      ["✂️", "Omitir el relativo", "En relativas especificativas, el pronombre que funciona como objeto se puede omitir.", "- The movie (that) we watched was great. (La película que vimos estuvo genial.)\n- No se puede omitir si es sujeto: The man who called is here.", "Se omite solo si es objeto."]
    ],
    mapa: ["Oraciones de relativo", [["Pronombres", ["who", "which", "that", "where", "whose"]], ["Tipos", ["Especificativas", "Explicativas (comas)"]], ["Uso", ["Personas", "Cosas", "Lugares", "Posesión"]], ["Omisión", ["Solo si es objeto"]]]],
    tarjetas: [["¿Qué pronombre se usa para personas?", "Who."], ["¿Qué pronombre se usa para lugares?", "Where."], ["¿Qué pronombre indica posesión?", "Whose."], ["Completa: The book ___ I read was long.", "that / which."], ["¿Cuándo se omite el relativo?", "Cuando es el objeto en una relativa especificativa."], ["¿Las explicativas llevan comas?", "Sí."], ["Traduce: «the man who lives here».", "el hombre que vive aquí."]],
    videos: ["relative clauses english who which that", "oraciones de relativo en inglés", "defining and non-defining relative clauses"],
    n: 12
  },
  {
    tema: "Estilo indirecto (reported speech)",
    resumen: "El estilo indirecto sirve para contar lo que otra persona dijo sin repetir sus palabras exactas. Al hacerlo, suelen cambiar los tiempos verbales, los pronombres y las expresiones de tiempo.",
    objetivos: ["Reportarás afirmaciones.", "Cambiarás los tiempos verbales.", "Reportarás preguntas y órdenes."],
    partes: [
      ["💬", "Directo vs. indirecto", "En el estilo directo se citan las palabras exactas entre comillas. En el indirecto, se cuentan con un verbo introductorio (said, told) y se hacen cambios.", "- Direct: She said, «I am tired.»\n- Reported: She said (that) she was tired. (Dijo que estaba cansada.)", "Said (that) + oración."],
      ["⏪", "Retroceso de tiempos", "Cuando el verbo de reporte está en pasado, el tiempo verbal retrocede un paso:\n- Presente simple → pasado simple\n- Presente continuo → pasado continuo\n- Pasado simple → past perfect\n- Present perfect → past perfect\n- will → would; can → could", "- «I work here.» → He said he worked there.\n- «I will help.» → She said she would help.\n- «We can go.» → They said they could go.", "El tiempo retrocede."],
      ["🔁", "Pronombres y tiempo", "Los pronombres cambian según quién habla. Las expresiones de tiempo y lugar también: today → that day; tomorrow → the next day; yesterday → the day before; now → then; here → there; this → that.", "- «I'll see you tomorrow.» → He said he would see me the next day.", "Ajusta pronombres y expresiones."],
      ["❓", "Preguntas", "Preguntas con wh-: palabra interrogativa + orden de afirmación. Sí/No: if o whether. Se usa asked.", "- «Where do you live?» → She asked where I lived.\n- «Are you ready?» → He asked if I was ready.", "Sin inversión en la pregunta indirecta."],
      ["📣", "Órdenes y peticiones", "Se usa told / asked + persona + to + verbo. Para negativas: not to.", "- «Close the door.» → She told me to close the door.\n- «Don't be late.» → He told us not to be late.", "told + persona + to + verbo."]
    ],
    mapa: ["Reported speech", [["Verbos", ["said", "told", "asked"]], ["Retroceso", ["Presente a pasado", "will a would", "can a could"]], ["Cambios", ["Pronombres", "Tiempo y lugar"]], ["Preguntas y órdenes", ["if / whether", "to + verbo"]]]],
    tarjetas: [["¿Cómo cambia el presente simple en indirecto?", "Pasa a pasado simple."], ["¿En qué cambia «will»?", "En «would»."], ["¿En qué cambia «can»?", "En «could»."], ["«tomorrow» en indirecto.", "The next day."], ["«here» en indirecto.", "There."], ["Reporta: «Are you tired?»", "He asked if I was tired."], ["Reporta: «Sit down».", "She told me to sit down."]],
    videos: ["reported speech english", "estilo indirecto en inglés", "reported questions and commands"],
    n: 14
  },
  {
    tema: "Phrasal verbs",
    resumen: "Los phrasal verbs son verbos combinados con una partícula (preposición o adverbio) que forman un significado nuevo, a menudo distinto al del verbo solo. Son muy frecuentes en el inglés cotidiano.",
    objetivos: ["Comprenderás qué es un phrasal verb.", "Aprenderás los más comunes.", "Distinguirás los separables de los inseparables."],
    partes: [
      ["🧩", "Qué son", "Un phrasal verb es verbo + partícula (up, down, on, off, out, in, away…). El significado suele ser idiomático, es decir, no se deduce de las palabras por separado.", "- give up = rendirse\n- look after = cuidar\n- turn on = encender", "El significado cambia con la partícula."],
      ["📚", "Phrasal verbs comunes (I)", "- wake up: despertarse\n- get up: levantarse\n- turn on / turn off: encender / apagar\n- put on / take off: ponerse / quitarse (ropa)\n- sit down / stand up: sentarse / levantarse", "- I wake up at six. (Me despierto a las seis.)\n- Please turn off the light. (Por favor apaga la luz.)", "Frecuentes en la rutina diaria."],
      ["📖", "Phrasal verbs comunes (II)", "- look for: buscar\n- find out: averiguar\n- give up: rendirse\n- come back: regresar\n- take care of / look after: cuidar\n- run out of: quedarse sin\n- get along with: llevarse bien con", "- I'm looking for my keys. (Estoy buscando mis llaves.)\n- We ran out of milk. (Nos quedamos sin leche.)", "Aprende por contexto."],
      ["↔️", "Separables e inseparables", "- Separables: el objeto puede ir en medio o al final. Si es un pronombre, va en medio.\n- Inseparables: el objeto va después de la partícula.", "- Turn the TV off. / Turn off the TV. / Turn it off. (Apágalo.)\n- I look after my sister. (Cuido a mi hermana.) → I look after her.", "Con pronombre: separa (turn it off)."],
      ["🧠", "Cómo estudiarlos", "Aprende los phrasal verbs en frases completas, agrúpalos por partícula o por tema, repásalos con tarjetas y úsalos al hablar o escribir. Muchos tienen más de un significado.", "«Give up» puede significar «rendirse» o «dejar un hábito» (give up smoking).", "Memoriza en contexto."]
    ],
    mapa: ["Phrasal verbs", [["Concepto", ["Verbo + partícula", "Significado nuevo"]], ["Rutina", ["wake up", "get up", "turn on/off"]], ["Otros", ["look for", "find out", "give up", "run out of"]], ["Gramática", ["Separables", "Inseparables"]]]],
    tarjetas: [["¿Qué significa «give up»?", "Rendirse."], ["¿Qué significa «look for»?", "Buscar."], ["¿Qué significa «turn off»?", "Apagar."], ["¿Qué significa «run out of»?", "Quedarse sin."], ["¿Qué significa «find out»?", "Averiguar."], ["¿Cómo se dice «apágalo»?", "Turn it off."], ["¿Qué significa «look after»?", "Cuidar."]],
    videos: ["phrasal verbs más comunes en inglés", "phrasal verbs separables e inseparables", "phrasal verbs con ejemplos"],
    n: 14
  },
  {
    tema: "Medio ambiente",
    resumen: "Este tema reúne el vocabulario y las estructuras para hablar del medio ambiente: problemas como la contaminación y el cambio climático, y acciones para cuidar el planeta.",
    objetivos: ["Aprenderás vocabulario ambiental.", "Hablarás de problemas y soluciones.", "Expresarás opiniones sobre el ambiente."],
    partes: [
      ["🌍", "Vocabulario básico", "- environment: medio ambiente\n- pollution: contaminación\n- climate change: cambio climático\n- global warming: calentamiento global\n- deforestation: deforestación\n- waste / garbage: residuos / basura\n- endangered species: especies en peligro", "- Pollution is a big problem in many cities. (La contaminación es un gran problema en muchas ciudades.)", "Aprende los sustantivos clave."],
      ["⚠️", "Problemas", "- air / water / soil pollution: contaminación del aire / agua / suelo\n- greenhouse gases: gases de efecto invernadero\n- melting glaciers: glaciares que se derriten\n- plastic waste: residuos plásticos\n- drought: sequía", "- Plastic waste is polluting the oceans. (Los residuos plásticos están contaminando los océanos.)", "Los problemas están conectados."],
      ["♻️", "Soluciones: las tres R", "Reduce (reducir), Reuse (reutilizar), Recycle (reciclar). Otras acciones: save energy (ahorrar energía), plant trees (plantar árboles), use public transport (usar transporte público), use renewable energy (usar energía renovable).", "- We should recycle paper and glass. (Deberíamos reciclar papel y vidrio.)\n- Turn off the lights to save energy. (Apaga las luces para ahorrar energía.)", "Reduce, reuse, recycle."],
      ["🗣️", "Dar consejos y opiniones", "- should / shouldn't: deberíamos / no deberíamos\n- We must…: debemos…\n- In my opinion…: en mi opinión…\n- If we don't act, the planet will suffer. (Si no actuamos, el planeta sufrirá.)", "- We shouldn't waste water. (No deberíamos desperdiciar agua.)\n- In my opinion, everyone must help. (En mi opinión, todos debemos ayudar.)", "Usa modales para dar consejos."],
      ["✍️", "Hablar y escribir", "Para escribir un texto corto: presenta el problema, da causas, propone soluciones y concluye. Usa conectores como because, so, however y therefore.", "- Many animals are in danger because their habitats are disappearing. (Muchos animales están en peligro porque sus hábitats desaparecen.)", "Problema, causas y soluciones."]
    ],
    mapa: ["Medio ambiente", [["Vocabulario", ["pollution", "climate change", "deforestation"]], ["Problemas", ["air pollution", "plastic waste", "drought"]], ["Soluciones", ["reduce", "reuse", "recycle"]], ["Lenguaje", ["should", "must", "In my opinion"]]]],
    tarjetas: [["¿Qué significa «pollution»?", "Contaminación."], ["¿Qué significa «global warming»?", "Calentamiento global."], ["¿Qué significa «endangered species»?", "Especies en peligro."], ["¿Qué son las tres R?", "Reduce, reuse, recycle."], ["Traduce: «We should save energy».", "Deberíamos ahorrar energía."], ["¿Qué es «deforestation»?", "La tala masiva de bosques."], ["¿Qué significa «renewable energy»?", "Energía renovable."]],
    videos: ["vocabulario de medio ambiente en inglés", "environment vocabulary", "the three Rs reduce reuse recycle"],
    n: 12
  },
  {
    tema: "Profesiones y carreras",
    resumen: "Este tema permite hablar de trabajos, carreras y planes futuros en inglés: nombrar profesiones, describir lo que hacen y expresar lo que quieres estudiar o ser.",
    objetivos: ["Aprenderás nombres de profesiones.", "Describirás lo que hacen.", "Hablarás de tus metas profesionales."],
    partes: [
      ["👩‍⚕️", "Profesiones comunes", "- doctor, nurse, dentist: médico, enfermera, dentista\n- teacher, engineer, architect: profesor, ingeniero, arquitecto\n- lawyer, accountant: abogado, contador\n- chef, farmer, mechanic: cocinero, agricultor, mecánico\n- programmer, designer, journalist: programador, diseñador, periodista", "- My mother is a nurse. (Mi madre es enfermera.)\n- He wants to be an engineer. (Él quiere ser ingeniero.)", "Usa a / an antes de la profesión."],
      ["🛠️", "Qué hacen", "Se usa el presente simple para describir las tareas de un trabajo.", "- A teacher teaches students. (Un profesor enseña a estudiantes.)\n- A doctor treats patients. (Un médico atiende pacientes.)\n- A programmer writes code. (Un programador escribe código.)", "Presente simple para describir tareas."],
      ["🎓", "Estudios y habilidades", "- study / major in: estudiar una carrera\n- university degree: título universitario\n- skills: habilidades; qualities: cualidades\n- be good at: ser bueno en; be interested in: estar interesado en", "- She is good at math, so she wants to study engineering. (Ella es buena en matemáticas, así que quiere estudiar ingeniería.)", "Relaciona gustos con carreras."],
      ["🔮", "Planes futuros", "- I want to be… / I'd like to be…\n- I'm going to study…\n- I hope to…\n- I will be… (predicción)", "- I'm going to study medicine. (Voy a estudiar medicina.)\n- I'd like to work abroad. (Me gustaría trabajar en el exterior.)", "Be going to expresa un plan."],
      ["💼", "Hablar en una entrevista", "Frases útiles: «I have experience in…», «I am responsible and hard-working», «My strengths are…», «I would like to work here because…». Se mantiene un tono formal y se responde con claridad.", "- I am organized and I work well in a team. (Soy organizado y trabajo bien en equipo.)", "Muestra tus fortalezas."]
    ],
    mapa: ["Profesiones", [["Profesiones", ["doctor", "engineer", "teacher", "programmer"]], ["Tareas", ["Presente simple"]], ["Estudios", ["degree", "skills", "good at"]], ["Futuro", ["want to be", "going to"]]]],
    tarjetas: [["¿Cómo se dice «ingeniero»?", "Engineer."], ["¿Cómo se dice «abogado»?", "Lawyer."], ["Traduce: «She wants to be a doctor».", "Ella quiere ser doctora."], ["¿Qué significa «be good at»?", "Ser bueno en."], ["¿Qué significa «skills»?", "Habilidades."], ["¿Qué estructura expresa un plan?", "Be going to + verbo."], ["¿Qué hace un programmer?", "Escribe código."]],
    videos: ["vocabulario de profesiones en inglés", "jobs and occupations english", "talking about future plans and careers"],
    n: 12
  },
  {
    tema: "Conectores de secuencia",
    resumen: "Los conectores de secuencia organizan las ideas en orden: indican qué ocurre primero, después y al final. Son muy útiles para narrar historias y explicar procesos.",
    objetivos: ["Usarás conectores de orden.", "Narrarás una secuencia de hechos.", "Explicarás un proceso paso a paso."],
    partes: [
      ["1️⃣", "Para comenzar", "- First / First of all: primero\n- To begin with: para empezar\n- At first: al principio", "- First, wash your hands. (Primero, lávate las manos.)\n- To begin with, preheat the oven. (Para empezar, precalienta el horno.)", "Marca el inicio."],
      ["➡️", "Para continuar", "- Then: luego\n- Next: a continuación\n- After that: después de eso\n- Later: más tarde\n- Meanwhile: mientras tanto\n- Second, third: segundo, tercero", "- Then, add the flour. (Luego, añade la harina.)\n- After that, mix everything. (Después de eso, mezcla todo.)", "Hilan los pasos intermedios."],
      ["🏁", "Para terminar", "- Finally: finalmente\n- Lastly: por último\n- In the end: al final\n- At last: por fin", "- Finally, serve the cake. (Finalmente, sirve el pastel.)\n- In the end, they won the game. (Al final, ganaron el juego.)", "Marca el cierre."],
      ["⏱️", "Conectores de tiempo", "- Before / after: antes / después\n- When / as soon as: cuando / tan pronto como\n- While: mientras\n- Until: hasta que", "- I brush my teeth before I go to bed. (Me cepillo los dientes antes de acostarme.)\n- Wait until the water boils. (Espera hasta que hierva el agua.)", "Conectan dos acciones."],
      ["✍️", "Cómo usarlos", "Se colocan al inicio de la oración, seguidos de coma. Al escribir un texto, usa conectores distintos para no repetir. Funcionan en recetas, instrucciones y relatos.", "- First, I woke up. Then, I had breakfast. After that, I went to school. Finally, I came home.\n(Primero me desperté. Luego desayuné. Después fui al colegio. Finalmente regresé a casa.)", "Variar los conectores mejora el texto."]
    ],
    mapa: ["Conectores de secuencia", [["Inicio", ["First", "To begin with"]], ["Continuar", ["Then", "Next", "After that"]], ["Final", ["Finally", "Lastly", "In the end"]], ["Tiempo", ["before", "after", "while", "until"]]]],
    tarjetas: [["¿Qué significa «first»?", "Primero."], ["¿Qué significa «then»?", "Luego."], ["¿Qué significa «finally»?", "Finalmente."], ["¿Qué significa «meanwhile»?", "Mientras tanto."], ["¿Qué significa «after that»?", "Después de eso."], ["¿Qué significa «until»?", "Hasta que."], ["¿Cómo se dice «por último»?", "Lastly."]],
    videos: ["sequence connectors english", "conectores de secuencia en inglés", "first then next finally"],
    n: 12
  },
  {
    tema: "Cuantificadores",
    resumen: "Los cuantificadores indican cantidad: much, many, a lot of, some, any, few, little y más. Su uso depende de si el sustantivo es contable o incontable.",
    objetivos: ["Distinguirás sustantivos contables e incontables.", "Usarás much, many, some, any, few y little.", "Preguntarás por cantidades."],
    partes: [
      ["🔢", "Contables e incontables", "- Contables: se pueden contar (apple, book, student). Tienen plural.\n- Incontables: no se cuentan (water, rice, money, information). No tienen plural.", "- two apples (dos manzanas)\n- some water (algo de agua)", "Contable: se cuenta. Incontable: no."],
      ["➕", "Some y any", "- Some: en afirmaciones (y en ofrecimientos o peticiones).\n- Any: en negaciones y preguntas.", "- I have some friends. (Tengo algunos amigos.)\n- I don't have any money. (No tengo nada de dinero.)\n- Do you have any questions? (¿Tienes alguna pregunta?)\n- Would you like some tea? (¿Quieres té?)", "Some afirma; any niega o pregunta."],
      ["🧮", "Much y many", "- Many: con contables (en negativas y preguntas).\n- Much: con incontables (en negativas y preguntas).\n- How many…? / How much…?: preguntas por cantidad.", "- How many students are there? (¿Cuántos estudiantes hay?)\n- There isn't much milk. (No hay mucha leche.)\n- How much does it cost? (¿Cuánto cuesta?)", "Many = contables. Much = incontables."],
      ["📈", "A lot of, lots of", "Se usan con contables e incontables, en afirmaciones.", "- I have a lot of books. (Tengo muchos libros.)\n- She drinks a lot of water. (Ella toma mucha agua.)", "A lot of sirve para ambos."],
      ["📉", "Few, a few, little, a little", "- A few (contables) / a little (incontables): hay algunos, lo suficiente.\n- Few (contables) / little (incontables): casi no hay, poco, con sentido negativo.", "- I have a few friends. (Tengo unos pocos amigos.)\n- I have few friends. (Tengo muy pocos amigos.)\n- There is a little sugar. (Hay un poco de azúcar.)\n- There is little time. (Hay poco tiempo.)", "Con «a» es positivo; sin «a», negativo."]
    ],
    mapa: ["Cuantificadores", [["Tipos de sustantivo", ["Contables", "Incontables"]], ["Some y any", ["some: afirmación", "any: negación y pregunta"]], ["Many y much", ["many: contables", "much: incontables"]], ["Pocos", ["a few", "few", "a little", "little"]]]],
    tarjetas: [["¿Qué cuantificador se usa con contables en preguntas?", "Many."], ["¿Qué cuantificador se usa con incontables en preguntas?", "Much."], ["¿Cuándo se usa «any»?", "En negaciones y preguntas."], ["¿Qué significa «a lot of»?", "Mucho(s)."], ["¿Es «water» contable?", "No, es incontable."], ["Diferencia entre «a few» y «few».", "A few es algunos; few es casi ninguno."], ["Traduce: «How much sugar?»", "¿Cuánta azúcar?"]],
    videos: ["cuantificadores en inglés much many", "some any much many a lot of", "few little a few a little"],
    n: 14
  },
  {
    tema: "Escribir un correo electrónico",
    resumen: "Escribir un correo en inglés exige un asunto claro, un saludo adecuado, un cuerpo ordenado y una despedida. El tono cambia si es formal o informal.",
    objetivos: ["Reconocerás la estructura de un correo.", "Distinguirás tono formal e informal.", "Escribirás un correo sencillo."],
    partes: [
      ["📧", "Estructura", "- Subject (asunto): breve y claro.\n- Greeting (saludo).\n- Body (cuerpo): el mensaje.\n- Closing (despedida).\n- Signature (firma): tu nombre.", "Subject: Question about the homework (Asunto: Pregunta sobre la tarea)", "Un asunto claro ayuda al lector."],
      ["👋", "Saludos", "- Formal: Dear Mr. / Ms. Smith, / Dear Sir or Madam,\n- Informal: Hi Ana, / Hello Carlos, / Hey Sam,", "- Dear Ms. Brown, (Estimada Sra. Brown,)\n- Hi Laura, (Hola Laura,)", "Elige el saludo según la relación."],
      ["📝", "Cuerpo del mensaje", "Se empieza con el propósito. Frases útiles:\n- I am writing to… (Escribo para…)\n- I would like to ask… (Me gustaría preguntar…)\n- Could you please…? (¿Podría usted…?)\n- I am attaching… (Adjunto…)\n- Thank you for your help. (Gracias por su ayuda.)", "- I am writing to ask about the project deadline. (Escribo para preguntar sobre la fecha límite del proyecto.)", "Sé claro y breve."],
      ["👋", "Despedidas", "- Formal: Sincerely, / Best regards, / Kind regards,\n- Informal: Best, / Take care, / See you soon, / Love,", "- Best regards,\n  Maria (Cordialmente, María)\n- See you soon!\n  Tom (¡Hasta pronto! Tom)", "Termina con tu nombre."],
      ["✅", "Formal vs. informal y revisión", "- Formal: oraciones completas, sin abreviaturas, sin jerga («I would like to…»).\n- Informal: contracciones y frases cortas («I wanna know…» solo entre amigos).\nAntes de enviar, revisa ortografía, el destinatario y el archivo adjunto.", "- Formal: I would be grateful if you could send me the information.\n- Informal: Can you send me the info?", "Revisa antes de enviar."]
    ],
    mapa: ["Correo electrónico", [["Partes", ["Subject", "Greeting", "Body", "Closing"]], ["Formal", ["Dear Ms. …", "Sincerely"]], ["Informal", ["Hi …", "Take care"]], ["Frases", ["I am writing to…", "Could you please…?"]]]],
    tarjetas: [["¿Qué es el «subject»?", "El asunto del correo."], ["Saludo formal para una mujer.", "Dear Ms. …"], ["Saludo informal.", "Hi …"], ["Despedida formal.", "Sincerely / Best regards."], ["¿Cómo se dice «Escribo para…»?", "I am writing to…"], ["¿Cómo se dice «adjunto»?", "Attached / I am attaching."], ["¿Cómo se pide algo con cortesía?", "Could you please…?"]],
    videos: ["cómo escribir un email en inglés", "formal and informal email english", "frases para correos en inglés"],
    n: 12
  }
];
