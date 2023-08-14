const fetchbtn = document.getElementById("fetch")

fetchbtn.addEventListener("click", async ()=>{
     // console.log(fetchbtn)
     try {
          const get = await axios({
               method: "get",
               url: "https://api.github.com/users"
          })
          console.log(get)
     } catch (error) {
          console.log(error);
     }
})