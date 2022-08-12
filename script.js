window.addEventListener("load", function(){
    fetch ("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
    let index = 0;
    response.json().then(function(data) {
    const container = document.getElementById ("container");
        for (index = 0; index < data.length; index++) {    
        container.innerHTML += `
        <div class = "astronaut">
        <div class = "bio">
        <h3> ${data[index].firstName} ${data[index].lastName} </h3>
        <ul>
            <li>Hours in space: ${data[index].hoursInSpace}</li>
            <li class = "${data[index].active}"> Active: ${data[index].active}</li>
            <li> Skills: ${data[index].skills}</li>
        </ul>
        </div>
        <img class = "avatar" src = ${data[index].picture}
        </div>
        `;
        }
        container.innerHTML += `<p id = "astroTotal">Total astronaut count: ${index}</p>`
    });
});
});