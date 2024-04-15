import { Client } from '../data-structure/Client';

// Primer filtro: Valida el formato del número de teléfono y lo devuelve con espacios entre cada dígito.
export const filtroTelefonoConEspacios = (input: Client): Client => {
    const telefono: string = input.telefono.trim().replace(/\s/g, ''); // Elimina los espacios en blanco
    let result: string = '';
    if (telefono.startsWith('09') && /^\d{9}$/.test(telefono)) {
        result = telefono.split('').join(' '); // Añade espacios entre cada dígito
    } else {
        throw new Error('Número de teléfono inválido');
    }
    console.log(`Filtro filtroTelefonoConEspacios, input ${JSON.stringify(input)}, output ${result}`);
    return input;
};

// Segundo filtro: Valida el formato del número de cédula.
export const filtroCedula = (input: Client): Client => {
    const cedula: number = input.cedula;
    const cedulaString: string = cedula.toString(); // Convertir a string para aplicar la expresión regular
    if (/^[1-9]\d{6,7}$/.test(cedulaString)) {
        console.log(`Filtro filtroCedula, input ${JSON.stringify(input)}, output ${cedula}`);
        return input;
    } else {
        throw new Error('Número de cédula inválido');
    }
};

// Tercer filtro: Verificar que el departamento sea válido entre los 19 de Uruguay
export const filtroDepartamentoValido = (input: Client): Client => {
    const departamentosUruguay = [
        "artigas", "canelones", "cerro largo", "colonia", "durazno",
        "flores", "florida", "lavalleja", "maldonado", "montevideo",
        "paysandu", "rio negro", "rivera", "rocha", "salto", "san jose",
        "soriano", "tacuarembo", "treinta y tres"
    ];

    const departamentoCliente = input.departamento.toLowerCase();

    if (departamentosUruguay.indexOf(departamentoCliente)!==-1) {
        throw new Error("El departamento proporcionado no es válido en Uruguay.");
    }

    return input;
};
