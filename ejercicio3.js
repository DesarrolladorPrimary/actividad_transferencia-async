/**
 * Helper para simular retardo
 */
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// -------------------------------------------------------------
// 3. Validación de un formulario
// -------------------------------------------------------------
async function ejercicio3() {
    console.log('\n--- 3. VALIDACIÓN DE FORMULARIO ---');
    console.log('Validando formulario...');

    const validaciones = [
        { nombre: 'Correo', tiempo: 1000 },
        { nombre: 'Documento', tiempo: 2000 },
        { nombre: 'Disponibilidad', tiempo: 1500 }
        // Para probar error, se podría descomentar: { nombre: 'Anti-Bot', tiempo: 500, fallar: true }
    ];

    const tiempoInicio = Date.now();

    const promesas = validaciones.map(async (v) => {
        await wait(v.tiempo);
        if (v.fallar) throw new Error(`${v.nombre} inválido`);
        return { nombre: v.nombre, valido: true };
    });

    try {
        const resultados = await Promise.all(promesas); // Si una falla, salta al catch

        const tiempoTotal = Date.now() - tiempoInicio;
        console.log('Estado Individual:');
        resultados.forEach(r => console.log(`- ${r.nombre}: OK`));

        console.log(`Resultado Final: Formulario validado`);
        console.log(`Tiempo total: ${tiempoTotal}ms`);

    } catch (error) {
        console.log(`Error detectado: ${error.message}`);
        console.log(`Resultado Final: Validación fallida`);
    }
}

ejercicio3();
