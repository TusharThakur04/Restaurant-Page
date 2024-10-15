export const menuload = function(){
    document.addEventListener("DOMContentLoaded", () => {
        const div = document.querySelector('#content');
        const div2 = document.createElement('div');
        div2.className= 'menu';
        div.appendChild(div2);
        const list  = document.createElement('ul');
        div2.appendChild(list) ;
        const menu = [
            "Truffle Mushroom Risotto",
            "Saffron Infused Lobster Ravioli",
            "Charcoal-Grilled Wagyu Steak",
            "Beetroot & Goat Cheese Salad",
            "Lavender Crème Brûlée"
          ];

        for(let i=0 ; i < menu.length; i++){
            const li = document.createElement('li');
            li.textContent= menu[i];
            list.appendChild(li);

        }
          

    })

}
