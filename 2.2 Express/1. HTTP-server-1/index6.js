// FETCH
// Example 

function getAnimalData() {
    let data = [];
    fetch('https://fakerapi.it/api/v1/persons')
    .them(res => res.json())
    .then(res => data = res);

    // To print in html
    // document.getElementByIf('userData').innerHTML = JSON.stringify(data);
}

// Another way using Async await

async function getAnimalData2(){
    const response = await fetch('https://fakerapi.it/api/v1/persons');
    const finalData = await response.json();

    data = finalData;

    // TO DO fetch using AXIOS
    

}