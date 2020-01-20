let activateFunction = (activateId) => {
    let activatePower = document.getElementById(`${activateId}`);
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


document.querySelector("#activate-flight").addEventListener("click", () => activateFunction("flight"));

document.querySelector("#activate-mindreading").addEventListener("click", () => activateFunction("mindreading"));

document.querySelector("#activate-xray").addEventListener("click", () => activateFunction("xray"));

document.querySelector("#activate-all").addEventListener("click", () => changeAll("disabled", "enabled" ));

document.querySelector("#deactivate-all").addEventListener("click", () => changeAll("enabled", "disabled"));

