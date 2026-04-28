document.querySelectorAll("p").forEach(
    x => {
        x.innerHTML = x.innerHTML
            .replaceAll("|start|", "<span class=\"code\">")
            .replaceAll("|end|", "</span>");
    }
)