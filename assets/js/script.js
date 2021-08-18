addEventListener('DOMContentLoaded', () => {
    const contadores = document.querySelectorAll('.contador_cantidad')
    const velocidad = 100;

    const animarContadores = () => {
        for (const contador of contadores) {
            const actualizar_contador = () => {
                let cantidad_maxima = parseInt(contador.dataset.cantidadTotal),
                valor_actual = parseInt( contador.innerText ) ,
                incremento = cantidad_maxima / velocidad

                if(valor_actual < cantidad_maxima){
                    contador.innerText = Math.ceil(valor_actual + incremento)
                    setTimeout(actualizar_contador,200)
                }else{
                    contador.innerText = cantidad_maxima
                }
            }
            actualizar_contador();
        }
    }

    const mostrarContadores = elementos => {
        elementos.forEach(elemento => {
            if(elemento.isIntersecting){
                elemento.target.classList.add("animar")
                elemento.target.classList.remove("ocultar")
                setTimeout(animarContadores,300)
            }
        });
    }

    const observer = new IntersectionObserver(mostrarContadores,{
        threshold:0.75
    })
    const elementosHTML = document.querySelectorAll('.contador')
    elementosHTML.forEach(elementoHTML =>{
        observer.observe(elementoHTML)
    })
})