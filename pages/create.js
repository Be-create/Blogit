document.getElementById("post").addEventListener("click",post)


 async function post(){
    
    let obj = {
        title : document.getElementById("title").value, 
       body : document.getElementById("body").value,
       author : document.getElementById("Author").value,
       category : document.getElementById("category").value,
       tags : document.getElementById("tags").value
    }
    console.log(obj)

    let res = await fetch(`http://localhost:3000/blogs`,{
        method: "POST",
        body :JSON.stringify(obj),
        headers : {
            "Content-Type":"application/json"
        }
        
    })
}