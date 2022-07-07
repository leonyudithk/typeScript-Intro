(()=>{
    //-------------String Basicos 2---------------------/
    let nombre: string = "Yudith Basico 2"
        nombre = "Luz"
        const apellido: string ="Leon"
     
    console.log(nombre, apellido)

    //--------------Numeros---------------------/
    let edad: number =34
    console.log(edad)

    let edad2: number = 20
    
    if( edad > edad2){
  
        console.log("Esto es correcto")
    }else
    {
        console.log("Esto es Incorrecto")
    }
    //--------------Booleano------------------//
    let isCohorteOficial : boolean= true
    let isCohorteEtapa1 : boolean= false

   // isCohorteOficial = (isCohorteEtapa1)? 'hola': 'chao'
   isCohorteOficial = isCohorteEtapa1 ? true: false
   console.log(isCohorteOficial)
})()

