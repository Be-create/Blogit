import {navbar} from "../components/navbar.js"
import{getdata} from "../scripts/getdatautil.js"
document.querySelector("nav").innerHTML= navbar()
document.getElementById("search").addEventListener("input",displaysearchblog)
getdata(display)


function display(data){
    data.forEach(element => {
     let card =   document.createElement("div")
     card.className=" bg-red-400 card"
     
     let head = document.createElement("div")
     head.className="head"
     let title = document.createElement("h2")
     title.innerText= element.Title
     let category = document.createElement("h2")
     category.innerText= element.category
     head.append(title,category)
     let body = document.createElement("p")
     body.innerText = element.body
     body.className="body"
     let tail =document.createElement("div")
     tail.className="tail"
     let buttons = document.createElement("div")
     let editbtn = document.createElement("button")
     editbtn.innerText= "EDIT"
     editbtn.addEventListener("click",function(){
        gotoeditpage(element)
     } )
     let viewbtn = document.createElement("button")
     viewbtn.innerText= "VIEW"
     viewbtn.addEventListener("click",function(){
        gotoviewpage(element)
     } )
     let deletebtn = document.createElement("button")
     deletebtn.innerText= "DELETE"
     deletebtn.addEventListener("click",async function(){
        try {
            let res = await fetch(`http://localhost:3000/blogs/${element.id}`,{
                method : "DELETE"
            })
            
        } catch (error) {
            console.log(error)
        }
     } )
     buttons.append(editbtn,viewbtn,deletebtn)
     let author = document.createElement("h3")
     author.innerText= element.Author
     let tags = document.createElement("h3")
     tags.innerText= element.tags
     tail.append(author,buttons,tags)
     card.append(head,body,tail)
     
document.getElementById("blogs").append(card)
    });
}

function gotoeditpage(element){
    localStorage.setItem("id",element.id)
    location.href= "edit.html"
}
function gotoviewpage(element){
    localStorage.setItem("id",element.id)
    location.href= "view.html"
}

async function displaysearchblog(){
    document.getElementById('blogs').innerHTML=""
    let query = document.getElementById('search').value 
    try {
        let res = await fetch (`http://localhost:3000/blogs?q=${query}`)
        let data = await res.json()
        display(data)
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}