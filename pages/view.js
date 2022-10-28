getdata()
async function getdata(){
    let id = localStorage.getItem("id")
    try {
        let res = await fetch(`http://localhost:3000/blogs/${id}`)
        let data = await res.json();
        console.log(data)
        //console.log("data")
        display(data)
    } catch (error) {
        console.log(error)
    }
}
function display(data){
   
     let card =   document.createElement("div")
     card.className="card"
     let head = document.createElement("div")
     head.className="head"
     let title = document.createElement("h2")
     title.innerText= data.Title
     let category = document.createElement("h2")
     category.innerText= data.category
     head.append(title,category)
     let body = document.createElement("p")
     body.innerText = data.body
     body.className="body"
     let tail =document.createElement("div")
     tail.className="tail"
     let buttons = document.createElement("div")
     
     let editbtn = document.createElement("button")
     editbtn.innerText= "EDIT"
     
     let deletebtn = document.createElement("button")
     deletebtn.innerText= "DELETE"
     deletebtn.addEventListener("click",async function(){
        try {
            let res = await fetch(`http://localhost:3000/blogs/${data.id}`,{
                method : "DELETE"
            })
            
        } catch (error) {
            console.log(error)
        }
     } )
     buttons.append(editbtn, deletebtn)
     let author = document.createElement("h3")
     author.innerText= data.Author
     let tags = document.createElement("h3")
     tags.innerText= data.tags
     tail.append(author,buttons,tags)
     card.append(head,body,tail)
     
document.getElementById("blogs").append(card)
   ;
}