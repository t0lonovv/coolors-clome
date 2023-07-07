let name = document.querySelector(".input1")
let lastName = document.querySelector(".input2")
let image = document.querySelector(".input3")
let btn_click = document.querySelector('.btn_click')
let list =document.querySelector('.list')
// let btn_del =document.querySelector('.btn_del')

// btn_del.

read();
btn_click.addEventListener('click', () => {
    let odj = {
        name: name.value,
        lastName: lastName.value,
        image: image.value,
    }
    let data = JSON.parse(localStorage.getItem('tudu')) || []
    data.push(odj)
    localStorage.setItem("tudu",JSON.stringify(data))
    read()
})


// function add(){
//     let odj = {
//         name: name.value,
//         lastName: lastName.value,
//         image: image.value,
//     }
//     let data = JSON.parse(localStorage.getItem('tudu')) || []
//       data.push(odj)
//     localStorage.setItem("tudu",JSON.stringify(data))
// })


function read(){
    let newData = JSON.parse(localStorage.getItem("tudu")) || []
    newData.forEach((el) => {
        list.innerHTML +=`
        <p>${el.name}</p>
        <p>${el.lastName}</p>
        <img src=${el.image}  alt="img"/>
        <button><belt></belt></button>

        `
    })
}
function read(){
    list.innerHTML = ""
    let newData = JSON.parse(localStorage.getItem("tudu")) || []
    newData.forEach((el, index) => {
     let blockkInfo = document.createElement("div")
     let blockP = document.createElement("div")
     let blockimg = document.createElement("div")
        let blockBtn = document.createElement("div")

        let p1 =document.createElement("p")
        let p2 =document.createElement("p")
        let img =document.createElement("img")
        btn_del = document.createElement('button')

        btn_del.style.backgroundColor = "#139db8"
        btn_del.style.color = "#ffffff"
        btn_del.style.borderColor = "#139db8"



        blockkInfo.classList.add("blockInfo")
        p1.classList.add("p1")
        p1.classList.add("p2")
        img.classList.add("img")
        blockP.classList.add("blockP")
        blockimg.classList.add("blockimg")
        btn_del.innerText = "delete"


        p1.innerText = `${el.name}`
        p2.innerText = `${el.lastName}`
        img.src =el.image

        blockP.append(p1);
        blockP.append(p2);
        blockimg.append(img)
        blockBtn.append(btn_del)

        blockkInfo.append(blockimg);
        blockkInfo.append(blockP)
        blockkInfo.append(blockBtn)
        list.append(blockkInfo)
        btn_del.addEventListener("click", () => {
            del(index)
        })

    });
}

function del(id){
    let data = JSON.parse(localStorage.getItem("tudu")) || [];
    data.splice(id, 1)
    localStorage.setItem("tudu", JSON.stringify(data))
    read()
}












