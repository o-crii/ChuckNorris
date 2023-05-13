const loadingJoke = document.querySelector("#loadingJoke")
const copyJoke = document.querySelector("#CopyJoke")
const jokeTxt = document.querySelector("#joke")

loadingJoke.addEventListener('click', function(e){
	e.preventDefault()
	loadingJokeTxt()
})

function loadCategories(){
    let categories = ["animal","career","celebrity","dev","explicit","fashion","food","history","money","movie","music","political","religion","science","sport","travel"]
    //let category = categorySelect.value

    categories.forEach(category => {
        const option = document.createElement("option")
        option.value = category
        option.innerHTML = category
        categorySelect.appendChild(option)
    })

}

function loadingJokeTxt(){
	let url = 'https://api.chucknorris.io/jokes/random'
	let category = categorySelect.value

	if(category === "Casuale"){
        fetch("https://api.chucknorris.io/jokes/random")

            .then(ThenCallActive)

            .then(FinalCallBack)

            .catch(CatchCallActive)

    //prende una category random https://....../random    
    } else {
        fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)

            .then(ThenCallActive)

            .then(FinalCallBack)

            .catch(CatchCallActive)

    //prende la categoria da noi selezionata 
    }
}

function CatchCallActive(){
    document.querySelector(".ChuckNorrisPhraseContent").innerHTML = "Riprova!"
}

function ThenCallActive(response){
    if(response.status === 200){
        return response.json()
    }
}

function FinalCallBack(data){
    document.querySelector(".ChuckNorrisPhraseContent").innerHTML = data.value
    const urlContent = document.querySelector(".ChuckNorrisUrlsContent").innerHTML = data.url

    document.querySelector("#ChuckNorrisLink").addEventListener('click', function(){
        window.location.href = urlContent
    })
}

document.querySelector(".ChuckNorrisButtonCopied").addEventListener("click", function(e) {
    let CopyArea = document.querySelector(".ChuckNorrisPhraseContent");

    let range = document.createRange();
    range.selectNode(CopyArea);

    navigator.clipboard.writeText(CopyArea.textContent);
    let CopyAler = document.execCommand('copy');
    alert('testo copiato: '+ CopyArea.textContent);
    return CopyAler;
})

loadCategories()











