const ubicaciones= [
      {
        "latitude": 40.416875,
        "longitude": -3.703308,
        "city": "Ciudad de México",
        "description": "Paseo de la reforma"
      },
      {
        "latitude": 40.417438,
        "longitude": -3.693363,
        "city": "Monterrey",
        "description": "Parque Fundidora"
      },
      {
        "latitude": 40.407015,
        "longitude": -3.691163,
        "city": "Guadalajara",
        "description": "Centro historico"
      }
    ]


Object.values(ubicaciones).forEach(direccion => {
  //La función sort sirve para acomodar los valores por orden
  //tomando como referencia el codigo ascii
  ubicaciones.sort();
  console.table(direccion);
});

