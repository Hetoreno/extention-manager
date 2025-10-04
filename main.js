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
            <div class="extent-cont">
                <div class="info">
                    <img src="${extention.logo}" alt="">
                    <div class ="descr">
                        <h3>${extention.name}</h3>
                        <p>${extention.description}</p>
                    </div>
                </div>
                <span>
                  <button>Remove</button>  
                  <button>Remove</button>  
                </span>
            </div>
        
        `
    }

    placeholder.innerHTML = out;
})