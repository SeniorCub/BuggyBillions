fetch('https://api.github.com/users')
.then (data => data.json())
.then(data2 => data2.forEach(element => {
     document.querySelector('body').innerHTML += `
          <nav class="goat">
               <h1>${element.login}</h1>
               <ul>
                    <li>${element.node_id}</li>
                    <img src = ${element.avatar_url} />
               </ul>
          </nav>
     `
}))