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
            <div class="extent-cont" data-att="${extention.isActive}">
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
                    <input type="checkbox">
                    <span class="slider round"></span>
                </label>
                </span>
            </div>
        
        `
    }

    placeholder.innerHTML = out;
})






// Filter function
const tglBtn = document.querySelectorAll(".filter-btn");
const list = document.querySelectorAll(".extent-cont");

tglBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Reset all buttons
    tglBtn.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const content = btn.textContent.toLowerCase();

    list.forEach((current) => {
      const attr = current.getAttribute("data-att").toLowerCase();
      current.style.display =
        content === "all" || attr === content ? "block" : "none";
    });
  });
});

