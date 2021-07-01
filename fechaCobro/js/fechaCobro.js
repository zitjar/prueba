// declaracion de dias feriados en un objeto
const feriado=[{
        "dia": 1,
        "mes": 12
    },
    {
        "dia": 1,
        "mes": 2
    },
    {
        "dia": 15,
        "mes": 3
    },
    {
        "dia": 1,
        "mes": 5
    },
    {
        "dia": 16,
        "mes": 9
    },
    {
        "dia": 15,
        "mes": 10
    },
    {
        "dia": 25,
        "mes": 12
    }
]
//obtencion de la fecha Actua
const fecha = new Date('1/7/2021');//se puede cambiar la fecha agregando dentro de Date la fecha elegida ejemplo(M/d/yyyy)
//meter fecha en variable para poder sacar solamente los dias Habiles
let cobro = fecha;
console.log(cobro);
//recorre el arreglo de dias feriados 
//para saber si hay considencia con
//la fecha de cobro
Object.values(feriado).forEach(dias => {
    if(dias === cobro.getDay()&&dias===cobro.getMonth()){
        let diaHabil = 1;
        cobro.setDate(fecha.getDay() + diaHabil);
        console.log(cobro);
        let mes = cobro.getMonth(); 
        let anio = cobro.getFullYear();
        let dia = cobro.getDay();
        console.log("La fecha de cobro es: "+dia+"/"+mes+"/"+anio);
    }
  });

//if para Validar el que el dia no sea inhabil
if(cobro.getDay()>23 || cobro.getDay()<=31){
    //secuencia para agregar sumar los dias necesarios para el siguiente
    //dia hábil 
    let diaHabil = 1;
    cobro.setDate(fecha.getDay() + diaHabil);
    console.log(cobro);
    let mes = cobro.getMonth();
    let anio = cobro.getFullYear();
    let dia = cobro.getDay();
    console.log("La fecha de cobro es: "+dia+"/"+mes+"/"+anio);
    
}
else{
    console.log("Se ha aplicado el cargo");
}



