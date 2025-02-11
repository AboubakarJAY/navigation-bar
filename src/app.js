"use strict";
let element = document.querySelectorAll("li");
let followMouse = document.getElementById("followMouse");
for (let i = 0; i < element.length; i++) {
    element[i].addEventListener("click", (e) => {
        for (let i = 0; i < element.length; i++) {
            let el = element[i];
            el.classList.remove("active");
        }
        let el = e.target;
        el.classList.add("active");
    });
}
for (let i = 0; i < element.length; i++) {
    element[i].addEventListener("mousemove", (e) => {
        followMouse.style.display = "block";
        let mouseposition = e;
        let target = e.target;
        let parent = target.parentElement;
        if (parent && target === parent.firstElementChild) {
            followMouse.style.left = `${mouseposition.clientX}px`;
            followMouse.style.top = `${mouseposition.clientY - 60}px`;
        }
        else {
            followMouse.style.left = `${mouseposition.clientX + 50}px`;
            followMouse.style.top = `${mouseposition.clientY - 50}px`;
        }
    });
}
for (let i = 0; i < element.length; i++) {
    element[i].addEventListener("mouseleave", () => {
        followMouse.style.display = "none";
    });
}
