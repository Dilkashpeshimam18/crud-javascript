let posts=[
    {
        title:'Post one',
        body:'This is post one',
    },
    {
        title:'Post two',
        body:'This is post two',

    }
]


const createPost=(post)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve( posts.push(post))


        },1000)
    

    })


}

const create=async(p)=>{
    let created=await createPost(p)
    console.log(created)
    console.log(posts)

}

create({title:'Post 3', body:'This is post3 '})
create({title:'Post 4', body:'This is post4 '})

const deletePost=()=>{
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

const deleted=async()=>{
    let dlt= await deletePost()
    console.log(dlt)
    console.log(posts)

}

deleted()
deleted()