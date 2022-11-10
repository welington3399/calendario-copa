function createGame (flag1,country1, hour,country2, flag2) {
    return `  
        <li class="flags">
            <div>
                <img src="./assets/icon-${flag1}.svg" alt="brasil">
                <p>${country1}</p>
            </div>
            <span>${hour}</span>
            <div>
                <img src="./assets/icon-${flag2}.svg" alt="catar"></img>
                <p>${country2}</p>
            </div>
            
        </li>
        
    ` 
}

function createCard(date, day, games){
    return `
    <span class="card">
        <div class="date">
            <h2>${date}</h2>
            <h3>${day}</h3>
        </div>
        <ul>
            ${games}
        </ul>
        <input class="fechar" type="button" value="fechar">
    </span>
    
    `
}

var day1 = document.querySelector(".day20")
day1.addEventListener("click", function(click){
    document.querySelector(".sla").classList.add("desing"); 


    document.querySelector("#lateral").innerHTML =
    createCard("20/11","domingo",
        createGame("qatar","catar","13:00","equador","ecuador"))
        




        var fechar = document.querySelector(".fechar")

        fechar.addEventListener("click", function(click){
            document.querySelector("#lateral").removeChild(document.querySelector("span"))
        })

})



var day2 = document.querySelector(".day21")
day2.addEventListener("click", function(click){
    document.querySelector(".sla").classList.add("desing"); 


    document.querySelector("#lateral").innerHTML =
    createCard("21/11","domingo",
        createGame("england","inglaterra","10:00","irã","iran")+
        createGame("senegal","senegal","13:00","holanda","netherlands")+
        createGame("estados-unidos","eua","16:00","gales","wales"))
        
        var fechar = document.querySelector(".fechar")

        fechar.addEventListener("click", () =>{
            document.querySelector("#lateral").removeChild(document.querySelector("span"))
            // document.querySelector("#lateral").removeChild(document.querySelector(".fechar"))
            document.querySelector(".footer").classList.add("org_footer")
        })
        

})


