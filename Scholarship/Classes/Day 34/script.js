let getBtn = document.querySelector('.get')
let result = document.querySelector('.result')
const getBtnClick = async() => {
     try {
          const get = await axios('https://fakestoreapi.com/products')
          let str = JSON.stringify(get)
          console.log(str)
          console.log(JSON.parse(str))

          result.textContent = str
     } catch (error) {
          console.error(error)
     }
}
getBtn.addEventListener("click", getBtnClick)