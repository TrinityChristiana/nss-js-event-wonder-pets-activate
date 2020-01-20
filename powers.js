let activateFunction = (ids) => {

    let idOne = ids[0];
    let idTwo = ids[1];
    let activatePower = document.getElementById(`${idTwo}`);
    activatePower.classList.remove("disabled");
    activatePower.classList.add("enabled");
}

let changeAll = (remove, add) => {
    let allPowers = document.querySelectorAll(".power");
    allPowers.forEach(element => {
        element.classList.remove(`${remove}`);
        element.classList.add(`${add}`);
    });
}



document.querySelector("#activate-flight").addEventListener("click", () => activateFunction(event.target.id.split("-")));

document.querySelector("#activate-mindreading").addEventListener("click", () => activateFunction(event.target.id.split("-")));

document.querySelector("#activate-xray").addEventListener("click", () => activateFunction(event.target.id.split("-")));

document.querySelector("#activate-all").addEventListener("click", () => changeAll("disabled", "enabled" ));

document.querySelector("#deactivate-all").addEventListener("click", () => changeAll("enabled", "disabled"));

