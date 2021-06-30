//Pricing 
// $bold-blue-color = #252B42;
const cardPrice = document.querySelectorAll(".col-border");
console.log(cardPrice);
cardPrice[1].style.marginTop = "-70px";
cardPrice[1].style.borderRadius = "10px";
cardPrice[1].style.backgroundColor = '#252B42';
cardPrice[1].querySelector('h3.card-title').style.color = "#fff";
cardPrice[1].querySelectorAll('h6.card-title').forEach(el => 
    el.style.color = "#fff"
);


