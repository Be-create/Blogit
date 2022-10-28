 display()
 async function display(){
try {
    let id  = localStorage.getItem("id")
    let res = await fetch(`http://localhost:3000/blogs/${id}`)
    let data =await res.json();
    console.log(data)
    document.getElementById("title").innerText = data.Title
    document.getElementById("body").innerText = data.body
    document.getElementById("Author").innerText= data.Author
    document.getElementById("categpry").innerText = data.category
    document.getElementById("tags").innerText= data.tags
} catch (error) {
    
}
 }
 
 
 
 
 
 document.getElementById("update").addEventListener("click",update)


 async function update(){
    let id  = localStorage.getItem("id")
    let obj = {
        title : document.getElementById("title").value, 
       body : document.getElementById("body").value,
       author : document.getElementById("Author").value,
       category : document.getElementById("category").value,
       tags : document.getElementById("tags").value
    }
    console.log(obj)

    let res = await fetch(`http://localhost:3000/blogs/${id}`,{
        method: "PUT",
        body :JSON.stringify(obj),
        headers : {
            "Content-Type":"application/json"
        }
        
    })
}
