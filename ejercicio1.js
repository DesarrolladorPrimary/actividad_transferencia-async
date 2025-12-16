/**
 * Helper para simular retardo
 */
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// -------------------------------------------------------------
// 1. Gestión de una cola de atención
// -------------------------------------------------------------
async function ejercicio1() {
    console.log('\n--- 1. GESTIÓN DE UNA COLA DE ATENCIÓN ---');
    console.log('Iniciando proceso de atención...');

    const usuarios = [
        { nombre: 'Usuario A', tiempo: 2000 },
        { nombre: 'Usuario B', tiempo: 1000 },
        { nombre: 'Usuario C', tiempo: 3000 }
    ];

    const tiempoInicio = Date.now();

    for (const usuario of usuarios) {
        console.log(`Atendiendo a ${usuario.nombre}...`);
        await wait(usuario.tiempo); // Secuencial
        console.log(`Finalizó atención de ${usuario.nombre} (${usuario.tiempo}ms)`);
    }

    const tiempoTotal = Date.now() - tiempoInicio;
    console.log(`Proceso finalizado.`);
    console.log(`Tiempo total del proceso: ${tiempoTotal}ms`);
}

ejercicio1();
