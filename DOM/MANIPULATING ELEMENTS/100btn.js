const elementSelect = document.querySelector("#container");

for (let i = 0; i < 100; i++) {
    const btn = document.createElement("button");
    btn.append("THIS IS A BUTTON!");
    elementSelect.append(btn);
}

