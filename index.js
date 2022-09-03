
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
    .then(json => {
        json.forEach(user => console.log(`${user.name}`))
    })
}
logUsers()


function getBizUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(json => {
        console.log(json.filter((user => user.email.includes('.biz'))))
    })
}
getBizUsers()


function longestPost () {
    let longest = ''
    fetch(`https://jsonplaceholder.typicode.com/posts/`)
    .then(res => res.json())
    .then(json => {
    //   for(let i = 0; i < json.length; i++) {
    //     if(json[i]["body"].length > longest.length) {
    //         longest = json[i].body
    //     }
    //   }
        console.log(json.reduce((prev, curr) => {return prev.length < curr.body.length ? curr.body : prev}, ''))
    })
}
longestPost() 


function getCompletedTasks(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(json => {
        console.log(json.filter(task => task.completed))
    })
}
getCompletedTasks()


function displayPhotos(){
    let photoUrl = [];
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(json => {
        for(let i = 1; i <= 9; i++){
            photoUrl.push(json[i].thumbnailUrl)
        }
        photoUrl.forEach(photo => {
            let image = document.createElement('img')
            image.src = photo
            document.body.appendChild(image)
        })
    })
}
displayPhotos()


function numOfLongPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(json => {
        console.log(json.filter((post) => post.body.length > 20))
    })
}
numOfLongPosts()


function getUserFromPost(title){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => {
        let post = posts.find(el => el.title === title)
        const userId = post.userId
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(res => res.json())
        .then(user => {
            console.log(user.name)
        })
    })
}
getUserFromPost('qui est esse')
