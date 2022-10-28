async function getdata(display){
    
    try {
        let res = await fetch(`http://localhost:3000/blogs`)
        let data = await res.json();
        //console.log(data)
        //console.log("data")
        display(data)
    } catch (error) {
        console.log(error)
    }
}
export {getdata}