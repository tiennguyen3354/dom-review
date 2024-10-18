window.onload = function(){ 
    updateDOM(); 
}

function updateDOM() { 
    console.log("DOM loaded, dsjls")
    //select my button and respond when it is clicked 
    const button = document.querySelector("#clicker")
    button.onclick = handleClick;  

}

function handleClick() { 
    const atttractionsTittle = document.querySelector("#attractions h2"); 
    atttractionsTittle.textContent = "Points of interest"; 

    // select all li elements

    const items = document.querySelectorAll("li"); 
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        item.textContent
        
    } 

    const attractionDiv = document.createElement("div"); 
    const fridayHarborImg = document.createElement("img")
    const h3Title = document.createElement("h3")
    const parseDescription = document.createElement("p") 
    // select the attractionns section and add or new div 
    const attractionSection = document.querySelector(".grid-container")

    //set properties
    attractionDiv.className = "attraction"; 
    h3Title.textContent = "Friday Harbor"; 
    fridayHarborImg.src = "images/img3.png";
    fridayHarborImg.alt = "an image of friday harbor"
    parseDescription.textContent = "kfljg flgjjdflgj gfg sfg sdfsd fsd fs fsf sfsfsfsfs sfs fsfs fs f sf s fs fs fs f sf sf sfsf  sffs fs fs fs s fsfsf s fs fs fs  fs fs ffsfsfsfsfs fs fs fs f sf sf s fsf sf sf sffsf sfs fs sfs f"

    attractionDiv.appendChild(fridayHarborImg); 
    attractionDiv.appendChild(h3Title); 
    attractionDiv.appendChild(parseDescription)

    attractionSection.appendChild(attractionDiv); 

}
