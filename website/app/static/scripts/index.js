let s = "";

window.addEventListener("keypress", (e) => {
    if(e.key=="e") {
        s = "e";
    } else {
        s += e.key
    }
    if(s.length == 3) {
        if(s == "egg") {
            const node = document.getElementsByClassName("error-code")[0];
            div = document.createElement("div");
            div.className = "image-container";
            div.innerHTML = `
                <a href="test/"><img src="app/static/images/test/eggs/egg1.png"></a>
            `;
            node.replaceChild(div, node.children[1]);
            txt = document.createElement("h3");
            txt.innerText = "Wow you found an Easter Egg !";
            node.parentNode.insertBefore(txt, node.nextSibling);
        } else {
            s = "";
        }
    }
})