(()=>{

    //crear interfaces
    interface auto {
        carroceria: string,
        encender: boolean,
         modelo: number, 
         veloacidadMax?: number, 
         acelarar?: ()=> void
    }
    
        const autoFamiliar =(Auto: auto): void=>{
            Auto.carroceria= "Negra",
            Auto.encender= true,
            Auto.modelo= 2022,
            Auto.veloacidadMax= 150

        }
        
        const autoCarrera : auto={
           carroceria: "Negra",
            encender: true,
            modelo: 2022,
            veloacidadMax: 150,

        }

})()