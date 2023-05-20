document.querySelector('#loadingJoke').addEventListener('submit', function(e) {
	e.preventDefalut()

	let categoria = document.querySelector('.select[name=select]').value

	if (categoria==='Random') {
		fetch("https://api.chucknorris.io/jokes/random")
		.then(thenCallback)
		.then(finalCallback)
		.catch(catchCallback)
	} else {
		fetch(`https://api.chucknorris.io/jokes/random?category=${categoria}`)

		.then(thenCallback)
		.then(finalCallback)
		.catch(catchCallback)
	}


})

function thenCallback(response){

    if(response.status === 200){
        return response.json()
    }
}

function finalCallback(data) {
    console.log(data)

    
    document.querySelector("#joke").innerHTML = data.value

    /*document.querySelector(".urlBox").setAttribute('href', data.url)
    document.querySelector(".urlBox").classList.remove("disabled")*/    
}

function catchCallback(error) {
    error = "Errore104!"
    document.querySelector("#joke").innerHTML = error
}
