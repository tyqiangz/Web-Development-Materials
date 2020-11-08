const DOG_BREEDS_URL = "https://dog.ceo/api/breeds/list/all";

/* adding breeds to the dropdown list */
const dropdown = document.querySelector(".dropdown");
const breedsPromise = fetch(DOG_BREEDS_URL);
breedsPromise
    .then(function(response) {
        const processingPromise = response.json();
        return processingPromise;
    })
    .then(function(processedResponse) {
        breeds = processedResponse.message;
        for (var breed in breeds) {
            var dropdown = document.querySelector(".dropdown");
            console.log();

            if (breeds[breed].length === 0) {
                var option = document.createElement("option");
                var node = document.createTextNode(breed);
                option.appendChild(node);
                dropdown.appendChild(option);
            }
            else {
                for (var subbreed in breeds[breed]) {
                    var option = document.createElement("option");
                    var node = document.createTextNode(breed  + " " + breeds[breed][subbreed]);
                    option.appendChild(node);
                    dropdown.appendChild(option);
                }
            }
        }
    });

/* adding photos upon clicking a button */
const doggos = document.querySelector(".doggos");
function addNewDoggo() {
    var e = document.querySelector(".dropdown");
    var breed = e.options[e.selectedIndex].text.split(" ").join("/");

    /* display loading gif while image not loaded */
    const loading = document.createElement("img");
    loading.src = "./ajax-loader.gif";
    loading.alt = "Loading";
    loading.className = "loading";

    doggos.prepend(loading);

    /* fetch dog image from api */
    const DOG_URL = "https://dog.ceo/api/breed/" + breed + "/images/random";
    const promise = fetch(DOG_URL);
    promise
        .then(function(response) {
            const processingPromise = response.json();
            return processingPromise;
        })
        .then(function(processedResponse){
            const img = document.createElement("img");
            img.src = processedResponse.message;
            img.alt = "Cute doggo";
            img.className = "doggo-img";
            img.style = "width:300px; height:300px; margin:5px";
            doggos.prepend(img);
            return doggos
        })
        .then(function(doggos){
            doggos.removeChild(document.getElementsByClassName("loading")[0]);
            console.log("Number of photos: " + doggos.getElementsByClassName("doggo-img").length);
        });
}

console.log("this will log first");

document.querySelector(".add-doggo").addEventListener("click", addNewDoggo);