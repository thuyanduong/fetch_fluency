
function logPost(id){
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => res.json())
    .then(data => {
        console.log(`Title: ${data.title}`)
        console.log(`Post: ${data.body}`)
    })
}
logPost(1)


function logUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(json => json.map(user => {
        console.log(`${user.name}`);
    }))
}
logUsers()


function getBizUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(json => {
        const biz = json.filter((obj => obj.email.includes('.biz')))
        console.log(biz)
    })
}
getBizUsers()


function longestPost () {
    let longestPost = ''
    fetch(`https://jsonplaceholder.typicode.com/posts/`)
    .then(res => res.json())
    .then(json => {
      for(let i = 0; i < json.length; i++) {
        if(json[i]["body"].length > longestPost.length) {
          longestPost = json[i].body
        }
      }
    })
    console.log(longestPost)
}
longestPost() 


function getCompletedTasks(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(json => {
        const tasks = json.filter((obj) => obj.completed === true)
        console.log(tasks)
    })
}
getCompletedTasks()


function displayPhotos(){
    let photoUrl = [];
    await fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => {
        for(let i = 1; i <= 9; i++){
            photoUrl.push(data[i].thumbnailUrl)
        }
    })
    photoUrl.forEach(photo => {
        let image = document.createElement('img')
        let div = document.querySelector('#photos')
        image.src = photo
        div.appendChild(image)
    })
}
displayPhotos()

9.
function numOfLongPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(json => {
        const long = json.filter((obj) => obj.body.length > 20)
        console.log(long.length)
    })
}
numOfLongPosts()


function getUserFromPost(title){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => {
        let user = data.find(el => el.title === title)
        console.log(user.userId)
    })
}
getUserFromPost('sunt aut facere repellat provident occaecati excepturi optio reprehenderit')
