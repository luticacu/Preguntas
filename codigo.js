let preguntas = [
    {
      "pregunta": "¿Qué es la fotosíntesis?",
      "opciones": [
        "1. Un proceso de respiración celular",
        "2. Un proceso de conversión de luz en energía",
        "3. Un tipo de digestión en las plantas",
        "4. Un proceso de descomposición de materia orgánica"
      ],
      "respuesta_correcta": 2
    },
    {
      "pregunta": "¿Cuál es la fórmula química de la fotosíntesis?",
      "opciones": [
        "1. CO2 + H2O + luz → C6H12O6 + O2",
        "2. C6H12O6 + O2 → CO2 + H2O",
        "3. CO2 + H2O → C6H12O6 + O2",
        "4. C6H12O6 + O2 → CO2 + H2O + luz"
      ],
      "respuesta_correcta": 1
    },
    {
      "pregunta": "¿Qué organismos realizan la fotosíntesis?",
      "opciones": [
        "1. Solo las plantas",
        "2. Solo las bacterias",
        "3. Las plantas, algas y algunas bacterias",
        "4. Solo los animales"
      ],
      "respuesta_correcta": 3
    },
    {
      "pregunta": "¿Dónde ocurre la fotosíntesis dentro de la célula vegetal?",
      "opciones": [
        "1. En el núcleo",
        "2. En el citoplasma",
        "3. En las mitocondrias",
        "4. En los cloroplastos"
      ],
      "respuesta_correcta": 4
    },
    {
      "pregunta": "¿Qué sustancias son necesarias para la fotosíntesis?",
      "opciones": [
        "1. Oxígeno, clorofila, agua",
        "2. Agua, dióxido de carbono y luz",
        "3. Glucosa, oxígeno, nitrógeno",
        "4. Clorofila, nitrógeno, luz"
      ],
      "respuesta_correcta": 2
    },
    {
      "pregunta": "¿Qué productos genera la fotosíntesis?",
      "opciones": [
        "1. Dióxido de carbono y agua",
        "2. Glucosa y oxígeno",
        "3. Oxígeno y nitrógeno",
        "4. Glucosa y dióxido de carbono"
      ],
      "respuesta_correcta": 2
    },
    {
      "pregunta": "¿Cuál es el rol de la clorofila en la fotosíntesis?",
      "opciones": [
        "1. Absorber luz solar",
        "2. Realizar la descomposición de agua",
        "3. Producir glucosa",
        "4. Liberar oxígeno"
      ],
      "respuesta_correcta": 1
    },
    {
      "pregunta": "¿Cómo se llama el proceso en el que las plantas convierten la luz solar en energía?",
      "opciones": [
        "1. Quimiosíntesis",
        "2. Fotosíntesis",
        "3. Respiración celular",
        "4. Transpiración"
      ],
      "respuesta_correcta": 2
    },
    {
      "pregunta": "¿Qué es el ciclo de Calvin en la fotosíntesis?",
      "opciones": [
        "1. El proceso de captación de luz solar",
        "2. La fase de producción de glucosa",
        "3. La fase en la que se produce oxígeno",
        "4. La conversión de energía en ATP"
      ],
      "respuesta_correcta": 2
    },
    {
      "pregunta": "¿Por qué la fotosíntesis es importante para los seres vivos?",
      "opciones": [
        "1. Porque produce la energía que consumen los animales",
        "2. Porque genera dióxido de carbono",
        "3. Porque transforma el oxígeno en glucosa",
        "4. Porque produce alimentos para los seres vivos"
      ],
      "respuesta_correcta": 4
    }
  ]
  
  let posicion = 0
  let respuestas = []
  function cargarpregunta(posicion){
    document.getElementById("titulo").innerText = `${posicion + 1}/${preguntas.length} = ${preguntas[posicion].pregunta}`
    document.getElementById("opc1").innerText = preguntas[posicion].opciones[0]
    document.getElementById("opc2").innerText = preguntas[posicion].opciones[1]
    document.getElementById("opc3").innerText = preguntas[posicion].opciones[2]
    document.getElementById("opc4").innerText = preguntas[posicion].opciones[3]

  }function Opcion_Seleccionada() {
    const radioButtons = document.getElementsByName('opciones');
    for (let i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            respuestas[posicion] = i;
        }
    }
}
function Marcar_Opcion_Seleccionada() {
  const radioButtons = document.getElementsByName('opciones');
  if (respuestas[posicion] !== undefined) {
      radioButtons[respuestas[posicion]].checked = true;
  } else {
      desmarcarTodos();
  }
}

function avanzar() {
  Opcion_Seleccionada();
  if (posicion < preguntas.length - 1) {
      posicion += 1;
      document.getElementById('batras').style.display = 'block';
      cargarpregunta(posicion);
      Marcar_Opcion_Seleccionada();
  }
  if (posicion === preguntas.length - 1) {
      document.getElementById('bavanzar').style.display = 'none';
  }
}

  function atras() {
  Opcion_Seleccionada();
  if (posicion >= 1) {
      posicion -= 1;
      document.getElementById('bavanzar').style.display = 'block';
      cargarpregunta(posicion);
      Marcar_Opcion_Seleccionada();
  }
  if (posicion === 0) {
      document.getElementById('batras').style.display = 'none';
  }
}

   function desmarcarTodos() {
    const radioButtons = document.getElementsByName('opciones');
    for (let i = 0; i < radioButtons.length; i++) {
      radioButtons[i].checked = false;
    }
  }

   document.getElementById('batras').style.display = 'none'
  cargarpregunta(posicion)