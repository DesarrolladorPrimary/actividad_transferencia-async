/**
 * Helper para simular retardo
 */
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// -------------------------------------------------------------
// 5. Integración de servicios
// -------------------------------------------------------------
async function ejercicio5() {
    console.log('\n--- 5. INTEGRACIÓN DE SERVICIOS ---');
    console.log('Consultando servicios...');

    const tiempoInicio = Date.now();

    const servicioA = async () => {
        await wait(1000);
        return 'Disponibilidad OK';
    };

    const servicioB = async () => {
        await wait(1500);
        return { tipo: 'Usuario VIP', id: 999 };
    };

    const servicioC = async () => {
        await wait(1000);
        return ['Compra 1', 'Compra 2'];
    };

    const servicioD = async (infoB, infoC) => {
        // Depende de B y C
        await wait(500);
        return `Recomendación basada en ${infoB.tipo} y ${infoC.length} compras`;
    };

    try {
        // Ejecutamos A, B, C en paralelo
        const promA = servicioA();
        const promB = servicioB();
        const promC = servicioC();

        const [resA, resB, resC] = await Promise.all([promA, promB, promC]);

        console.log(`Servicio A: ${resA}`);
        console.log(`Servicio B:`, resB);
        console.log(`Servicio C:`, resC);

        // Ahora D
        const resD = await servicioD(resB, resC);
        console.log(`Servicio D: ${resD}`);

        const tiempoTotal = Date.now() - tiempoInicio;
        console.log(`Integración exitosa.`);
        console.log(`Tiempo total: ${tiempoTotal}ms`);

    } catch (error) {
        console.log(`Error en integración: ${error.message}`);
    }
}

ejercicio5();
