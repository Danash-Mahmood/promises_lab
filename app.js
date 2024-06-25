const  getAllWainrights = async () => {
    const fetchResponse = await fetch("https://raw.githubusercontent.com/annahndr/annahndr.github.io/master/wainwrights_data/wainwrights.json");
    jsonData = await fetchResponse.json();
    addingWainrightToUl(jsonData);
    return jsonData;
    
}
const addingWainrightToUl = function(data){

    
    data.forEach(wainwright => {

        addWainwrightToPage(wainwright);
       
    });

}

const addWainwrightToPage = function(wainwright){

//    const nameOfPeak =  document.createElement("h2");
//    nameOfPeak.innerText = wainwright["name"];
//    document.body.appendChild(nameOfPeak);

//    const paragraph = document.createElement("li");
//    paragraph.innerText = "height in meters " + wainwright["heightMetres"];
//    document.body.appendChild(paragraph);

    const list = document.querySelector("#wainwrights-list");
    const item = document.createElement("li");
   item.innerText = wainwright["name"]+ "height's in meters " + wainwright["heightMetres"];
   list.appendChild(item);

}

document.querySelector("#input-form").addEventListener('submit', (event) => {
	event.preventDefault();
	console.log(event.target["new-input"].value);
    filterbyName(event.target["new-input"].value);
});


//making a filter function

const filterbyName = (input) => {
    const filteredNames = jsonData.filter((wainwright) => {
        wainwright["name"].toLowerCase().includes(input);
    })
};




getAllWainrights();


//need to make a function that will create new list elemnents and add them to the unordered list.


