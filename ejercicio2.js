/**
 * Helper para simular retardo
 */
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// -------------------------------------------------------------
// 2. Entrega de paquetes con tiempos variables
// -------------------------------------------------------------
async function ejercicio2() {
    console.log('\n--- 2. ENTREGA DE PAQUETES ---');
    console.log('Iniciando reparto de paquetes...');

    const paquetes = [
        { id: 101, destino: 'Zona Norte', tiempo: 2000 },
        { id: 102, destino: 'Zona Sur', tiempo: 1500 },
        { id: 103, destino: 'Zona Centro', tiempo: 1000 },
        { id: 104, destino: 'Zona Error', tiempo: 500, fallar: true } // Caso de fallo
    ];

    const promesas = paquetes.map(async (paquete) => {
        try {
            await wait(paquete.tiempo);
            if (paquete.fallar) throw new Error('Dirección no encontrada');
            console.log(`> Paquete ${paquete.id} entregado en ${paquete.destino}`);
            return { id: paquete.id, estado: 'Entregado' };
        } catch (error) {
            console.log(`> Error en paquete ${paquete.id}: ${error.message}`);
            return { id: paquete.id, estado: 'Fallido', error: error.message };
        }
    });

    const resultados = await Promise.all(promesas);

    console.log(`Resumen Final:`);
    console.table(resultados);
}

ejercicio2();
