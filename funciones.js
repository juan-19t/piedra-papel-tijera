let piedraElement = document.getElementById('piedra');
let papelElement = document.getElementById('papel');
let tijeraElement = document.getElementById('tijera');
let elegirJugada = document.querySelector('h3');
let puntosJugadorElement = document.getElementById('puntos-jug');
let puntosPcElement = document.getElementById('puntos-pc');
let leyendaResultado = document.querySelector('h2');
let pElement = document.querySelector('p');
pElement.style.display = 'none';

const opciones = ['piedra','papel','tijera'];
let pcPuntos = 0;
let jugadorPuntos = 0;
let contador = 0;

puntosJugadorElement.textContent=jugadorPuntos;
puntosPcElement.textContent=pcPuntos;

function tuJugada(jugada){
    let jugadaPC = opciones[Math.floor(Math.random()*opciones.length)]
    leyendaResultado.textContent='';
    piedraElement.classList.add('--piedra');
    papelElement.classList.add('--papel');
    tijeraElement.classList.add('--tijera');
    elegirJugada.style.display='none';

    setTimeout(()=>{
        elegirJugada.style.display='block';
        piedraElement.classList.remove('--piedra');
        papelElement.classList.remove('--papel');
        tijeraElement.classList.remove('--tijera');

        switch(jugada){
            case 'piedra':
                switch(jugadaPC){
                    case 'tijera':
                        leyendaResultado.textContent = 'PC eligió tijera, tu ganas!'
                        jugadorPuntos++
                        puntosJugadorElement.textContent=jugadorPuntos;
                    break;
                    case 'papel':
                        leyendaResultado.textContent = 'PC eligió papel, tu pierdes!'
                        pcPuntos++
                        puntosPcElement.textContent=pcPuntos;
                    break;
                    default:
                        leyendaResultado.textContent = 'PC eligió piedra ¡empate!'
                }
            break;

            case 'papel':
                switch(jugadaPC){
                    case 'piedra':
                        leyendaResultado.textContent = 'PC eligió piedra, tu ganas!'
                        jugadorPuntos++
                        puntosJugadorElement.textContent=jugadorPuntos;
                    break;
                    case 'tijera':
                        leyendaResultado.textContent = 'PC eligió tijera, tu pierdes!'
                        pcPuntos++
                        puntosPcElement.textContent=pcPuntos;
                    break;
                    default:
                        leyendaResultado.textContent = 'PC eligió papel ¡empate!'
                        
                }
            break;

            default:
                switch(jugadaPC){
                    case 'papel':
                        leyendaResultado.textContent = 'PC eligió papel, tu ganas!'
                        jugadorPuntos++
                        puntosJugadorElement.textContent=jugadorPuntos;
                    break;
                    case 'piedra':
                        leyendaResultado.textContent = 'PC eligió piedra, tu pierdes!'
                        pcPuntos++
                        puntosPcElement.textContent=pcPuntos;
                    break;
                    default:
                        leyendaResultado.textContent = 'PC eligió tijera ¡empate!'
                        
                }
    
        }
        contador++
        if(contador===3){
            if(jugadorPuntos>pcPuntos){
                pElement.textContent='¡Has ganado!'
                pElement.style.display = 'flex'
            }else if(jugadorPuntos<pcPuntos){
                pElement.textContent='¡Has perdido!'
                pElement.style.display = 'flex'
            }else{
                pElement.textContent='¡Empate!'
                pElement.style.display = 'flex'
            }
        }
    },2000)
        
}

pElement.addEventListener('click',()=>{
    pcPuntos=0;
    jugadorPuntos=0;
    contador=0;
    pElement.style.display='none';
    puntosJugadorElement.textContent = jugadorPuntos;
    puntosPcElement.textContent=pcPuntos;
    leyendaResultado.textContent='';
})

piedraElement.addEventListener('click', ()=> tuJugada('piedra'));
papelElement.addEventListener('click', ()=> tuJugada('papel'));
tijeraElement.addEventListener('click', ()=> tuJugada('tijera'));


