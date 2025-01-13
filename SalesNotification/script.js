const client_info = [
    {
        f_Name: "Mujtaba",
        city: "Lahore",
        country: "Pakistan",
    },

    {
        f_Name: "Hammad",
        city: "Multan",
        country: "Pakistan",
    },

    {
        f_Name: "Ahsan",
        city: "Istambul",
        country: "Turkey",
    },

    {
        f_Name: "Irtaza",
        city: "New York",
        country: "USA",
    },

    {
        f_Name: "Rizwan",
        city: "Toronto",
        country: "Canada",
    }
]

const product_Info = [
    {
        name: "white shoes",
        img_URL: "./images/p-img-1.jpg"
    },
    {
        name: "black headphone",
        img_URL: "./images/p-img-2.png"
    },
    {
        name: "Hodie",
        img_URL: "./images/p-img-3.jpg"
    },
    {
        name: "converter",
        img_URL: "./images/p-img-4.jpg"
    },
    {
        name: "writing tablet",
        img_URL: "./images/p-img-5.webp"
    },

]

//console.log(Math.floor(Math.random() * 10))

// let random_index = Math.floor(Math.random() * client_info.length)
// let client_Info_Obj = client_info[random_index]
// let product_Info_obj = product_Info[random_index]



setInterval(() => {
    let random_index = Math.floor(Math.random() * client_info.length)
    let client_Info_Obj = client_info[random_index]
    let product_Info_obj = product_Info[Math.floor(Math.random() * client_info.length)]
    let purchasing_time = Math.floor(Math.random() * 59)
    const sales_notification_card = document.querySelector("#root")

    sales_notification_card.innerHTML = ` 
      <div id="sales-notification-card">
            <div id="product-Img-div">
                <img id = "product-Img" src="${product_Info_obj.img_URL}" alt="Product Image">  
            </div>
            <div id= content>   

                <div id="purchaser-info">
                    <p> ${client_Info_Obj.f_Name} from ${client_Info_Obj.city}, ${client_Info_Obj.country} just bought ${product_Info_obj.name} <span id = "purchasing_time"> ${purchasing_time} mint ago </sapn> </p>
                    <span id = "dismiss-Icon"> <i class="fa-regular fa-circle-xmark"></i> </span>
                </div>

                <div id="buy-Now-Verify-Purchased">
                    <span><a href="#" id="buy-now-btn">Buy Now ></a></span>
                    <div>
                        <i class="fa-solid fa-check"></i>
                        <span>Verified Purchase</span>
                    </div>
                </div>
          </div>
        </div>
    `
    const dismiss = document.querySelector("#dismiss-Icon")
    //console.log(dismiss);
    dismiss.addEventListener("click", function () {
        const dismis_Notification_Card = document.querySelector("#sales-notification-card")
        dismis_Notification_Card.style.display = "none"
    })

}, 8000)
