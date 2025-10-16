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
                    <input type="checkbox">
                    <span class="slider round"></span>
                </label>
                </span>
            </div>
        
        `
    }

    placeholder.innerHTML = out;
})






const tglBtn = document.querySelectorAll(".filter-btn");
const container = document.getElementById("data-output");

tglBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Reset button states
    tglBtn.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const content = btn.textContent.trim().toLowerCase();
    const list = container.querySelectorAll(".extent-cont");

    list.forEach((current) => {
      let attr = current.getAttribute("data-att");

      // Normalize boolean strings to match button text
      attr = attr === "true" ? "active" : "unactive";

      if (content === "all" || attr === content) {
        current.style.display = "block";
      } else {
        current.style.display = "none";
      }
    });
  });
});

