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
            <div class="extent-cont" data-att="${extention.isActive ? 'active' : 'unactive'}">
                <div class="info">
                    <img src="${extention.logo}" alt="">
                    <div class ="descr">
                        <h3>${extention.name}</h3>
                        <p>${extention.description}</p>
                    </div>
                </div>
                <span>
                  <button>Remove</button>  
                  <label class="switch">
                    <input type="checkbox" class="switchT">
                    <span class="slider round"></span>
                </label>
                </span>
            </div>
        
        `
    }

    placeholder.innerHTML = out;



    console.log("theyre disabled");
  const filterBtn = document.querySelectorAll(".slider.round");
  filterBtn.forEach((swt) => {
    swt.addEventListener("click", () => {

      console.log("This is a test.");
      swt.classList.toggle("enabled");
          
    });
  });

})

//Filter button
const tglBtn = document.querySelectorAll(".filter-btn");
const extCard = document.querySelectorAll(".extent-cont");

tglBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Reset button states
    tglBtn.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    //work on progress fixxxxxxxxxxxxxxxxxxx
    filterBtn.forEach((swt) => {
      if (btn.classList.contains('enabled') && swt.classList.contains('enabled')) {
        console.log("they’re enabled");
      }

     });

    
  });
});

