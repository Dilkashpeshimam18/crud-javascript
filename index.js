let timestamp=new Date()
let posts=[
    {
        title:'Post one',
        body:'This is post one',
        createdAt:timestamp.getTime()
    },
    {
        title:'Post two',
        body:'This is post two',
        createdAt:timestamp.getTime()

    }
]

let interval=0


function getPost(){
    clearInterval(interval)
    interval=setInterval(()=>{
        let output=''

        posts.forEach((post,index)=>{
            output+=`<li>${post.body} - created ${(new Date().getTime()-post.createdAt)/1000} seconds ago</li>`
        })
        document.body.innerHTML=output

    },1000)
}


function createPost(post,callback){
    setTimeout(()=>{
        posts.push({...post,createdAt:new Date().getTime()})
        callback()

    },2000)
}

function create4thPost(post,callback){
    setTimeout(()=>{
        posts.push({...post,createdAt:new Date().getTime()})
        callback()
    },2000)
}

getPost()
createPost({title:'Post Three', body:'This is post three',

},getPost)

create4thPost({title:'Post Three', body:'This is post four'},getPost)