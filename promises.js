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


function createPost(post){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            posts.push({...post,createdAt:new Date().getTime()})

            const error=false

            if(!error){
                resolve()
            }else{
                reject('Something went wrong')
            }
    
        },1000)
    } )
  
}





function deletePost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          

            if(posts.length>0){
                resolve(posts.pop())

            }else{
                reject('Array is empty now')
            }

        },1000)

    })
}



createPost({title:'Post three', body:'This is post three'})
.then(getPost)
.catch(err=>console.log(err))

createPost({title:'Post Four', body:'This is post four'})
.then(()=>{
    getPost()
    deletePost().then(()=>{
        getPost()
        deletePost().then(()=>{
            getPost()
            deletePost().then(()=>{
                getPost()
                deletePost().then(()=>{
                    getPost()
                    deletePost()
                })
                .catch((err)=>console.log(err))
            }).catch((err)=>console.log(err))
        }).catch((err)=>console.log(err))
    }).catch((err)=>console.log(err))
}).catch(err=>console.log(err))



//Promise.all

const promise1= Promise.resolve('Hello world')
const promise2=10
const promise3=new Promise((resolve,reject)=>{
    setTimeout(resolve,2000, 'Good bye')
})


Promise.all([promise1,promise2,promise3]).then(values=>console.log(values))

const user={
    name:'raj',
    lastactivitytime:new Date()
}

function createNewPost(post){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let newPost=[]
        var post=newPost.push(post)
        resolve(post)
    })
  }).catch(()=>console.log('Something went wrong in create post'))
}


function updateLastActivityTime(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            user.lastactivitytime=new Date().getTime()
            resolve(user.lastactivitytime)

        })
    }).catch(()=>console.log('Some went wrong in update last activity'))
}

function userUpdatePost(){
    Promise.all([createNewPost,updateLastActivityTime])
    .then(([createResolve,updateResolve])=>{
  console.log(createResolve)
  console.log(updateResolve)
    })
    .catch(err=>console.log(err))
}

userUpdatePost()







