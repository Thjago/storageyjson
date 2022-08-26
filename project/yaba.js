const carrito=[];

function ropa(marca,color,talle) {

    this.marca=marca;
    this.color=color;
    this.talle=talle;
}
const buzo1= new ropa("yor","negro","Saxl");
const gorro2= new ropa("yor","bordo","unico");
const jogger3= new ropa("yor","negro","salxl");

let buzocanguro=document.getElementById("buzo1");
let gorrolana=document.getElementById("gorro2");
let joggers=document.getElementById("jogger3");

buzocanguro.onclick=()=>{    
    alert("Agregaste un buzo canguro al carrito");
    carrito.push(buzo1);
    console.log(carrito);

    localStorage.setItem("carrito", JSON.stringify(carrito));
}


gorrolana.onclick=()=>{    
    alert("Agregaste un gorro de lana al carrito");
    carrito.push(gorro2);
    console.log(carrito);

localStorage.setItem("carrito", JSON.stringify(carrito));
}

joggers.onclick=()=>{    
    alert("Agregaste un jogger al carrito");
    carrito.push(jogger3);
    console.log(carrito);

    localStorage.setItem("carrito", JSON.stringify(carrito));
}


