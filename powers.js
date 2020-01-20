let flightHandleFunction = () => {
    console.log("button clicked");
    document.getElementById("flight").classList.remove("disabled");
}

document.querySelector("#activate-flight").addEventListener("click", flightHandleFunction);