(()=>{

        let persona:  { nombre: string,  apellido: string, getProfesion?: ()=> string, edad?: number, lenguajes?: string[],  } =
                {
            nombre: "Yudith",
            apellido: "Leon",
            getProfesion(){
                 return this.nombre
                }
                 

        }
        persona={
            nombre: "Yudith2",
            apellido: "Leon2",
             edad: 30,
            lenguajes: ["Js", "Ts", "React", "C++", "Java"]


        }

             
        //--------------------------------Tipos--------------------------------------------------------------/

        type auto ={
            carroceria: string,
             modelo: number, 
             pasajeros: number, 
             precio?: ()=> void
        }
        
            const autoFamiliar: auto ={
                carroceria: "Negra",
                modelo: 2022,
                pasajeros:6

            }
            
            const autoCarrera : auto={
                carroceria: "Rojo",
                modelo: 2019,
                pasajeros: 1

            }
            

    })()