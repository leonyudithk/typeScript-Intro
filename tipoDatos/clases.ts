(()=>{
        //--------------------Clase en typeScript--------------------------------
    class Persona {
       public name: string;
        private age: number;
        static sexo: string;

        constructor(name: string, age: number, sexo: string ){
            this.name = name;
            this.age= age;
            this.sexo = sexo;
           
        }
    }

    const Alumno: Persona= new Persona("Francisco", 20, "masculino");
    console.log(Alumno.name, Alumno)

            //--------------------Clase en typeScript forma corta--------------------------------
            class Persona2 {
                 static sexo: string="femenino";
         
                 constructor(
                    public name: string,
                    private age: number,
                     sexo: string= "femenino" )
                 {
                  
                    
                 }
             }
         
             const Alumno2: Persona2= new Persona2("Francisco", 20, "masculino");
             console.log(Alumno2.name, Alumno2)


             //------------------------------Clase extendidas------------------------------------------------------//
             class Persona3 {
                      
                constructor(
                   public name: string,
                   private age: number,
                    public sexo: string= "femenino" )
                {
                 console.log("constructor llamados desde las clases")
                   
                }
                protected getFullName(){
                        return `${this.name} (${this.age}) ${this.sexo}`
                }
            }

            class empleados extends Persona3{
                constructor(
                        cargo: string,
                        antiguedad: number,
                        profesion: string,

                ){
                        super(cargo, antiguedad, profesion)
                        console.log('dentro de empleados')
                }
                getFullNameEmpleados(){
                    console.log(super.getFullName())

                }

            }

            const empleadosAccacademia = new empleados("Melnai", 20, "femenino")
            console.log(empleadosAccacademia)
            empleadosAccacademia.getFullNameEmpleados()
 })()