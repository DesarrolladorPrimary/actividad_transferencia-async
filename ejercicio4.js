/**
 * Helper para simular retardo
 */
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// -------------------------------------------------------------
// 4. Procesamiento de pedidos
// -------------------------------------------------------------
async function ejercicio4() {
    console.log('\n--- 4. PROCESAMIENTO DE PEDIDOS ---');
    console.log('Procesando pedido...');

    const pedido = { id: 'ORD-555' };

    // Pasos obligatorios
    const validarStock = async () => {
        await wait(1000);
        console.log('Stock validado.');
        return true;
    };

    const calcularCostos = async () => {
        await wait(1000);
        console.log('Costos calculados.');
        return true;
    };

    // Paso opcional (paralelo)
    const generarRecomendaciones = async () => {
        console.log('Generando recomendaciones (segundo plano)...');
        await wait(2500); // Tarda más
        console.log('>> Recomendaciones de pedido listas.');
    };

    // Paso dependiente
    const enviarFactura = async () => {
        console.log('Enviando factura electrónica...');
        await wait(500);
        console.log('Factura enviada.');
    };

    try {
        // Lanzamos recomendacion sin await para no bloquear el flujo principal
        generarRecomendaciones();

        // Pasos obligatorios secuenciales
        await validarStock();
        await calcularCostos();

        // Si llega aquí, stock y costos OK.
        await enviarFactura();

        console.log(`Pedido ${pedido.id} completado con éxito (obligatorios).`);

    } catch (error) {
        console.log(`Error en el pedido: ${error.message}`);
    }
}

ejercicio4();
