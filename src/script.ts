document.getElementById("input")?.addEventListener("click", (_) => {
    let out = document.getElementById("output")
    if (out) {
        out.innerText = String(1 + Number(out.innerHTML))
    }
})
