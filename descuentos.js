// const precioOriginal = 120;
// const descuento = 18;

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// });

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    // const inputDiscount = document.getElementById("InputDiscount");
    // const discountValue = inputDiscount.value;
    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    let descuento;

    //El primer if permite aplicar el error first
    if(!coupons.includes(couponValue)){
        alert("El cupón " + couponValue + " no es válido.");
    }
    else if (couponValue === "JuanDC_es_Batman"){
        descuento = 15;
    }
    else if (couponValue === "pero_no_le_digas_a_nadie"){
        descuento = 30;
    }
    else if(couponValue ===  "es_un_secreto"){
        descuento = 25;
    }

    // switch(descuento){
    //     case "JuanDC_es_Batman":
    //         descuento = 15;
    //         break;
    //     case "pero_no_le_digas_a_nadie":
    //         descuento = 30;
    //         break;
    //     case "es_un_secreto":
    //         descuento = 25;
    //         break;
    // }

    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento es $" + precioConDescuento;
}

//Reto: funciones más inteligentes
const coupons = [
    {
        name: "JuanDC_es_Batman",
        discount: 15,
    },
    {
        name: "pero_no_le_digas_a_nadie",
        discount: 30,
    },
    {
        name: "es_un_secreto",
        discount: 25,
    },
];

const isCouponValueValid = function(coupon){
    return coupon.value === couponValue;
};

const userCoupon = coupons.find(isCouponValueValid);

if(!userCoupon){
    alert ("El cupón " + userCouponValue + " no es válido.");
}
else{
    const descuento = userCoupon.discount;
    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    const ResultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento es $" + precioConDescuento
}