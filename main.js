"use strict";
(() => {
    let persona = {
        nombre: "Yudith",
        apellido: "Leon",
        getProfesion() {
            return this.nombre;
        }
    };
    persona = {
        nombre: "Yudith2",
        apellido: "Leon2",
        edad: 30,
        lenguajes: ["Js", "Ts", "React", "C++", "Java"]
    };
    const autoFamiliar = {
        carroceria: "Negra",
        modelo: 2022,
        pasajeros: 6
    };
    const autoCarrera = {
        carroceria: "Rojo",
        modelo: 2019,
        pasajeros: 1
    };
})();
(() => {
    let nombre = "Yudith";
    nombre = "Luz";
    const apellido = "Leon";
    console.log(nombre, apellido);
    console.log(nombre.length);
    let edad = 34;
    console.log(edad);
    let edad2 = 20;
    if (edad > edad2) {
        console.log("Esto es correcto");
    }
    else {
        console.log("Esto es Incorrecto");
    }
    let isCohorteOficial = true;
    let isCohorteEtapa1 = false;
    isCohorteOficial = isCohorteEtapa1 ? true : false;
    console.log(isCohorteOficial);
    let nombreCompleto = ["Yudith", "Karina", "Leon", "Villasmil"];
    let Persona = ["Yudith", 34, "Leon", true];
    let FuerzaPOkemons;
    (function (FuerzaPOkemons) {
        FuerzaPOkemons[FuerzaPOkemons["pikachu"] = 100] = "pikachu";
        FuerzaPOkemons[FuerzaPOkemons["Saidor"] = 10] = "Saidor";
        FuerzaPOkemons[FuerzaPOkemons["Vulpix"] = 70] = "Vulpix";
        FuerzaPOkemons[FuerzaPOkemons["Squirtle"] = 80] = "Squirtle";
    })(FuerzaPOkemons || (FuerzaPOkemons = {}));
    const fuerzaPikachu = FuerzaPOkemons.pikachu;
    const fuerzaSaidor = FuerzaPOkemons.Saidor;
    const fuerzaVulpix = FuerzaPOkemons.Vulpix;
    const fuerzaSquirtle = FuerzaPOkemons.Squirtle;
    const fuerza = '100';
    const fuerzaFinal = fuerza.length;
    console.log(fuerzaFinal);
})();
(() => {
    class Persona {
        constructor(name, age, sexo) {
            this.name = name;
            this.age = age;
            this.sexo = sexo;
        }
    }
    const Alumno = new Persona("Francisco", 20, "masculino");
    console.log(Alumno.name, Alumno);
    class Persona2 {
        constructor(name, age, sexo = "femenino") {
            this.name = name;
            this.age = age;
        }
    }
    Persona2.sexo = "femenino";
    const Alumno2 = new Persona2("Francisco", 20, "masculino");
    console.log(Alumno2.name, Alumno2);
    class Persona3 {
        constructor(name, age, sexo = "femenino") {
            this.name = name;
            this.age = age;
            this.sexo = sexo;
            console.log("constructor llamados desde las clases");
        }
        getFullName() {
            return `${this.name} (${this.age}) ${this.sexo}`;
        }
    }
    class empleados extends Persona3 {
        constructor(cargo, antiguedad, profesion) {
            super(cargo, antiguedad, profesion);
            console.log('dentro de empleados');
        }
        getFullNameEmpleados() {
            console.log(super.getFullName());
        }
    }
    const empleadosAccacademia = new empleados("Melnai", 20, "femenino");
    console.log(empleadosAccacademia);
    empleadosAccacademia.getFullNameEmpleados();
})();
(() => {
    const nombre = "Danna";
    function returnName() {
        return nombre;
    }
    function returnName2() {
        console.log("Danna B");
    }
    console.log(typeof returnName);
    const fullName = (Name, LastName) => {
        return `${Name} ${LastName}`;
    };
    const nameFinal = fullName('Marlon', 'Perez');
    console.log(nameFinal);
    const fullName2 = (Name, LastName) => {
        return `${Name} ${LastName}`;
    };
    const nameFinal2 = fullName('Marlon', 'Perez');
    console.log(nameFinal2);
    const fullName3 = (Name, ...restoNombres) => {
        return `${Name} ${restoNombres.join(' ')}`;
    };
    const nameFinal3 = fullName3('Marlon', 'Perez', 'Villalba', 'Garzon');
    console.log({ nameFinal3 });
})();
(() => {
    const autoFamiliar = (Auto) => {
        Auto.carroceria = "Negra",
            Auto.encender = true,
            Auto.modelo = 2022,
            Auto.veloacidadMax = 150;
    };
    const autoCarrera = {
        carroceria: "Negra",
        encender: true,
        modelo: 2022,
        veloacidadMax: 150,
    };
})();
//# sourceMappingURL=main.js.map