fetch("data.json")

//calling the json
.then(function(response){
    return response.json();
})

//calling the data from the file
.then(function(extentions){
    let placeholder = document.querySelector("#data-output");
    let out = "";
    for (let extention of extentions){
        out += `
            <div class="extent-cont" data-att="">
                <div class="info">
                    <img src="${extention.logo}" alt="">
                    <div class ="descr">
                        <h3>${extention.name}</h3>
                        <p>${extention.description}</p>
                    </div>
                </div>
                <span class = "switch-btn">
                  <button class = "removeBtn" >Remove</button>  
                  <label class = "switch">
                    <input type="checkbox" class="switchT">
                    <span class="slider round"></span>
                </label>
                </span>
            </div>
        
        `
    }
    placeholder.innerHTML = out;

  ///////////////////////////////////////////////////

  //Adding disabled placeholder atr for cards upon loading
  console.log("theyre disabled");

  
  


  //Extention card enable switch
  const filterBtn = document.querySelectorAll(".slider.round");

  filterBtn.forEach((swt) => {
    swt.addEventListener("click", () => {

      console.log("This is a test.");
      const grandparent = swt.closest(".extent-cont");

      if (grandparent) {
        // Get the current data attribute value
        const current = grandparent.getAttribute("data-att");

        // Toggle between "enabled" and empty string
        if (current === "enabled") {
          grandparent.setAttribute("data-att", "");
        } else {
          grandparent.setAttribute("data-att", "enabled");
        }
      }

    });
  });

  //remove button function
  const removeBtn = document.querySelectorAll(".removeBtn");
  removeBtn.forEach((event)=>{
    event.addEventListener("click",()=>{
      const removeGp = event.closest(".extent-cont");
      console.log(removeGp);
      removeGp.remove();

    })
  })

  //Filter button
  const tglBtn = document.querySelectorAll(".filter-btn");
  const extCard = document.querySelectorAll(".extent-cont");
  tglBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Filter CSS styling
      tglBtn.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      
      // Get the filter value from button (for example: "enabled", "unactive", or "all")
      const filter = btn.getAttribute("data-att");

      // Loop through all cards
      extCard.forEach((card) => {
        const cardStatus = card.getAttribute("data-att"); // the card's data attribute

        if (filter === "all") {
          card.style.display = "block"; // show all
        } else if (cardStatus === filter) {
          card.style.display = "block"; // show only matching ones
        } else {
          card.style.display = "none"; // hide others
        }

      });

 
    });
  });

  

})