// fetch("ttp://localhost:8088/legoCreation")
// .then(colors => colors.json())
// .then(parsedColors => {
//     parsedColors.forEach(color => {

//         console.log(color)
//     });
// })

fetch("http://localhost:8088/legoCreation")
    .then(colors => colors.json())
    .then(parsedColors => {
        parsedColors.forEach(color => {
        console.log(color)
        let dropdownColors = document.querySelector("#lego__color")
        dropdownColors.innerHTML += `<option value="${color.id}">${color.name}</option>`
        })
    })



