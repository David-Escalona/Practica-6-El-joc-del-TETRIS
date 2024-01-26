export const panel = { // Exporto un array llamado panel que tiene propiedades
    nivel: 1, // Creo el nivel 
    tiempo: 10,
    lineas: 0,
    puntos: 0,
    matriz: generateEmptyMatriz(),
  
    Nivel(nuevoNivel) {
      this.nivel = nuevoNivel;
      console.log(`Nivel: ${this.nivel}`);
    },
  
    Tiempo(incremento) {
      this.tiempo += incremento;
      console.log(`Tiempo ${this.tiempo} `);
    },
  
    Lineas() {
      this.lineas++;
      console.log(`Lineas ${this.lineas}`);
    },
  
    Puntos(puntosAñadidos) {
      this.puntos += puntosAñadidos;
      console.log(`Puntos ${this.puntos}`);
    },
  
    pintaPanel() {
      const panelDiv = document.getElementById('panel');
      panelDiv.innerHTML = ''; // Limpiar el contenido actual
  
      this.matriz.forEach((row, rowIndex) => {
        const filaDiv = document.createElement('div');
        filaDiv.className = 'fila d-flex justify-content-center';
  
        row.forEach((cell, colIndex) => {
          const celdaDiv = document.createElement('div');
          celdaDiv.className = `celda ${cell ? 'bg-dark' : 'bg-primary'} border border-white p-4`;
          filaDiv.appendChild(celdaDiv);
        });
  
        panelDiv.appendChild(filaDiv);
      });
    },
  };
  
  function generateEmptyMatriz() {
    const matriz = [];
    for (let i = 0; i < 22; i++) {
      const row = [];
      for (let j = 0; j < 12; j++) {
        if (j === 0 || j === 11 || i === 21) {
          row.push(1);
        } else {
          row.push(0);
        }
      }
      matriz.push(row);
    }
    return matriz;
  }
  
  
  
  