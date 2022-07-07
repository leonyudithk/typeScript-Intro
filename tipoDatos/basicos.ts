(()=>{
    //-------------String---------------------/
    let nombre: string = "Yudith"
        nombre = "Luz"
        const apellido: string ="Leon"
     
    console.log(nombre, apellido)
    console.log(nombre.length)

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

   //----------------------------Arreglos-------------------------------//
   let nombreCompleto: string [] = ["Yudith", "Karina", "Leon", "Villasmil"]

      //---------------------------Tuplas-------------------------------//
     let Persona : [string, number, string, boolean] = ["Yudith", 34, "Leon", true]


     //-------------------------enumeraciones-----------------------------------------//
     enum FuerzaPOkemons{
       pikachu= 100,
      Saidor = 10,
      Vulpix= 70,
      Squirtle= 80,
     }

     const fuerzaPikachu : FuerzaPOkemons= FuerzaPOkemons.pikachu
     const fuerzaSaidor : FuerzaPOkemons= FuerzaPOkemons.Saidor
     const fuerzaVulpix : FuerzaPOkemons= FuerzaPOkemons.Vulpix
     const fuerzaSquirtle : FuerzaPOkemons= FuerzaPOkemons.Squirtle


     //--------------------Aserciones de Tipo---------------------------------------------------//

    const fuerza: any = '100'
    const fuerzaFinal : number = (fuerza as string).length
    console.log(fuerzaFinal)
})()

