(()=>{
const nombre: string ="Danna"

    function returnName(): string{
        return nombre
    }

    function returnName2(): void{
        console.log("Danna B")
    }

    console.log( typeof returnName)

 //-----------------------Pramaetroo requeridos-----------------------------
 const fullName = (Name: string, LastName: (string | boolean)): string =>{
        return `${Name} ${LastName}`
 }

 const nameFinal= fullName('Marlon', 'Perez')
console.log(nameFinal)



 //-----------------------Pramaetroo Opcionales-----------------------------
 const fullName2 = (Name: string, LastName?: (string | boolean)): string =>{
    return `${Name} ${LastName}`
}

const nameFinal2= fullName('Marlon', 'Perez')
console.log(nameFinal2)


 //-----------------------Pramaetros Rest-----------------------------
 const fullName3 = (Name: string, ...restoNombres: string[]): string =>{
    return `${Name} ${restoNombres.join(' ')}`
}

const nameFinal3= fullName3('Marlon', 'Perez', 'Villalba', 'Garzon')
console.log({nameFinal3})
})()