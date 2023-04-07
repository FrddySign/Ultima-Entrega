const $generate = document.getElementById('generate'),
    $reset = document.getElementById('reset'),
    $showColor = document.querySelector('.color-hex-bga-hsl');

let hex = [1, 2, 3, 4, 5, 6, 7, 8, 9,"A","B","C","D","E","F"];

document.addEventListener('click', e =>{
    if (e.target === $generate){
        let color = "#";
        for(let i = 0; i < 6; i++){
            color += hex[randomNumber()]
        }
        $showColor.innerHTML = color;
        document.body.style.background = color;
    }
    if (e.target === $reset){
        $showColor.innerHTML = "#FFFFFF";
        document.body.style.background = "#FFFFFF";
    }
})

function randomNumber(){
    return Math.floor(Math.random() *hex.length)
}


const favoriteButton = document.getElementById("favoritos");
const storageKey = "favoritos";

favoriteButton.addEventListener("click", () => {

        const storage = localStorage.getItem(storageKey);

        const currentFavorites = storage ? JSON.parse(storage) : [];

        currentFavorites.push(
            {
                url: window.location.href,
                title: document.title
            }
        );

        localStorage.setItem(storageKey, JSON.stringify(currentFavorites));

        favoriteButton.innerText = "❤";
    });

    document.getElementById("favoritos");

    document.addEventListener('click', () =>{
    
        const favoritos = document.getElementById("favoritos");
        favoritos.onclick = function(){
    Swal.fire({
        title: '¿Quieres agregar el color a favorito?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Guardar',
        denyButtonText: `Descartar`,
        }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire('Saved!', '', 'success')
            } else if (result.isDenied) {
            Swal.fire('Changes are not saved', '', 'info')
            }
        })
    }
    });
    

