let addbtns = document.querySelectorAll('.addtocart');
let carts = document.querySelector('.cart');

let counters = document.getElementById('count');
let click = 0;
// counts.innerHTML = click;

addbtns.forEach((add)=>{
    add.addEventListener('click',(e)=>{
        // console.log(e.target.parentElement)    
        click ++;
        counters.innerHTML = click;

        let price = e.target.previousElementSibling ;
        let name = e.target.previousElementSibling.previousElementSibling;
        // console.log(price)
        let clone = name.cloneNode(true);
         let clonePrice = price.cloneNode(true);
    
        let create = document.createElement('div');
        create.classList.add('cart')
        carts.appendChild(clone);
        carts.appendChild(clonePrice);

        let data = []
        let priceClone = carts.querySelectorAll('.price');
        priceClone.forEach((pri)=>{
            let innerPrice = Number(pri.innerText);
            data.push(innerPrice);
            // console.log(data)

         let finalPrice = data.reduce((prev,next)=>{
            return prev + next;
         },0);

        //  console.log(finalPrice);

         let price = document.getElementById('price');
        //  console.log(price)
         price.textContent = finalPrice;
        });
    })
})