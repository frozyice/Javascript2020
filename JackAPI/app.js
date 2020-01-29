document.querySelector('.get-jokes').addEventListener('click', getJokes)

function getJokes(event){

    const numberOfJokes = document.querySelector('input[type="number"]').value;

    fetch(`http://api.icndb.com/jokes/random/${numberOfJokes}`).then(responce => {
        console.log(responce);
        return responce.json();
    })
    event.preventDefault();
}