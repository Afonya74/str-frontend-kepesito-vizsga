function changeOuterLinks() {

     const navElements = document.querySelectorAll('nav#link-list a');
    navElements.forEach(element => {
        if (element.innerHTML.includes('outer-link')) {
            element.target = '_blank';
            element.innerHTML = `<strong>${element.innerHTML}</strong>`;
        }
    })

     document.querySelectorAll("nav").forEach((item) => {
        item.style.display = "flex";
        item.style.flexDirection = "column";
        item.style.margin = "0px auto";
        item.style.width = "30%";
        item.style.border = "1px solid blue";
        item.style.padding = "16px";
    });

}


export { changeOuterLinks };