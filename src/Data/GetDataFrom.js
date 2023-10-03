
export default async function  GetData(url) {
    const response = await fetch(url);
    const paquete = await response.json();
    return paquete
    
  }
