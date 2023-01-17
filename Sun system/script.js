//constantes onde estão localizados os botões de ações das imagens
const terra = document.getElementById( 'planetEarth' );
const marte = document.getElementById( 'planetMars' );
const netuno = document.getElementById( 'planetNeptune' );
const júpiter = document.getElementById( 'planetJupiter' );
const uranos = document.getElementById( 'planetUranus' );
const saturno = document.getElementById( 'planetSaturn' );
const buracoNegro = document.getElementById( 'blackHole' );        
const vênus = document.getElementById( 'planetVenus' );
const image = document.getElementById( 'image' );

//função para bloquear as ações do cliente e fazer com o que mesmo recarregue a página 
function isBlackHole() {
    return image.src.indexOf ( 'imagens/blackHole.png' ) > -1
}
//função que armazena as imagens ultilizadas
function blackBuraco() {
                        image.src = 'imagens/blackHole.png'
}

function martePlanet() {
    if ( !isBlackHole () ) {
                        image.src = 'imagens/Mars.png'
    }
}
function terraPlanet() {   
    if ( !isBlackHole () ) {
                        image.src = 'imagens/planetaTerra.png'
    }
}
function netunoPlanet() {
    if ( !isBlackHole () ) {
                        image.src = 'imagens/30_neptune.png'
    }
}
function júpiterPlanet() {
    if ( !isBlackHole () ) {
                        image.src = 'imagens/jupiter.png'
    }
}
function uranosPlanet() {
    if ( !isBlackHole () ) {
                        image.src = 'imagens/uranus.png'
    }
}
function saturnoPlanet() {
    if ( !isBlackHole () ) {
                        image.src = 'imagens/planetaSaturn.png'
    }
}
function vênusPlanet() {
    if ( !isBlackHole () ) {
                        image.src = 'imagens/venus.png'
    }
}

buracoNegro.addEventListener( 'dblclick', blackBuraco );//função para escolher imagem por dois cliques "dblclick"
//função para escolher imagem por passamento de mouse "mouseleave"
marte.addEventListener ( 'click', martePlanet );
terra.addEventListener ( 'click', terraPlanet );
netuno.addEventListener ( 'click', netunoPlanet );
júpiter.addEventListener ( 'click', júpiterPlanet );
uranos.addEventListener ( 'click', uranosPlanet );
saturno.addEventListener ( 'click', saturnoPlanet );
vênus.addEventListener ( 'click', vênusPlanet );

