function esParOImpar(numero: number): string {
    if (numero % 2 === 0) {
      return "El número es par";
    } else {
      return "El número es impar";
    }
  }
  
  const numero: number = 7; // Puedes cambiar este número por el que desees verificar
  
  const resultado: string = esParOImpar(numero);
  
  console.log(`El resultado es: ${resultado}`);
  