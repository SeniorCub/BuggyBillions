// GEt Button
let getBtn = document.querySelector('.get')
let result = document.querySelector('.result')
const getBtnClick = async() => {
     try {
          const get = await axios({
               method: "get",
               url: "https://jsonplaceholder.typicode.com/users/",
               params : {
                    _limit : 5
               }
          })
          let str = JSON.stringify(get)
          console.log(str)
          console.log(JSON.parse(str))

          result.textContent = str
     } catch (error) {
          console.error(error)
     }
}

// Post Button
let postBtn = document.querySelector('.post')
const postBtnClick = async() => {
     try {
          const post = await axios({
               method: "post",
               url: "https://jsonplaceholder.typicode.com/users/",
               data: {
                    name: "Reuben Farinde",
                    username: "SeniorCub",
                    email: "farinderif@gmail.com"
               }
          })
          let pos = JSON.stringify(post.data)
          console.log(pos)
          console.log(JSON.parse(pos))

          result.textContent = pos
     } catch (error) {
          console.error(error)
     }
}

getBtn.addEventListener("click", getBtnClick)
postBtn.addEventListener("click", postBtnClick)