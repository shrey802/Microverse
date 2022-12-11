const clickbtn = document.querySelector("#hov-hove");
let counter = 0;
clickbtn.addEventListener("click", () => {
    alert("color change");
    document.getElementById('cochange').style.color = 'red'
    counter += 1;
    console.log(counter);
});
