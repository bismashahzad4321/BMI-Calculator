
const height = document.querySelector(".height");
const weight = document.querySelector(".weight");
const btn = document.querySelector(".btn");
const showResult = document.querySelector(".showResult");

btn.addEventListener("click", () => {

    const heightInput = Number(height.value);
    const weightInput = Number(weight.value);

    if (heightInput <= 0 || weightInput <= 0) {
        alert("InValid ")
        return;
    }

    const heightToCm = heightInput / 100;
    const BMI = (weightInput / (heightToCm * heightToCm));
    const roundedBMI = Number(BMI.toFixed(2));
    showResult.innerHTML = "";
    const para = document.createElement("p");
    showResult.style.paddingTop = "20px";
    if (roundedBMI < 18.5) {
        para.innerText = `Your BMI is ${roundedBMI} and you are underweight`;
        para.style.background = "red"
        para.style.padding = "17px"
        para.style.color = "white"

    }
    else if (roundedBMI >= 18.5 && roundedBMI <= 24.9) {
        para.innerText = `Your BMI is ${roundedBMI} which is Normal`;
        para.style.background = "green"
        para.style.padding = "17px"
        para.style.color = "black"
    }
    else if (roundedBMI >= 25 && roundedBMI <= 29.9) {
        para.innerText = `Your BMI is ${roundedBMI} and you are overweight`;
        para.style.background = "orange"
        para.style.padding = "17px"
        para.style.color = "black"
    }
    else {
        para.innerText = `Your BMI is ${roundedBMI} which is Obese`;
        para.style.background = "black"
        para.style.padding = "17px"
        para.style.color = "white"
    }
    showResult.appendChild(para);
    height.value = "";
    weight.value = "";
    
})