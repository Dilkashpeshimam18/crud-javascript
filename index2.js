//Promises
console.log('person1:shows ticket')
console.log('person2:shows ticket')

const promiseTicket=new Promise((resolve,reject)=>{
  setTimeout(()=>{
      resolve('ticket')
  },3000)
})

const promisePopcorn=promiseTicket.then((t)=>{
    console.log(`wife:i have the ${t}`)

    console.log('husband:lets go in')
    console.log('wife:no i need a popcorn')

    return new Promise((resolve,reject)=>{
         resolve(`husband:Bought you the popcorn `)
    })

})

const promiseButterOnPopcorn=promisePopcorn.then((t)=>{
console.log(t)
console.log('wife: i need some butter on my popcorn. Please have some')
return new Promise((resolve,reject)=>{
    resolve(`husband:Ok darling i have added butter also on popcorn `)
})

})

const getColdDrinks=promiseButterOnPopcorn.then((b)=>{
 console.log(b)
 console.log('wife: we need some cold drinks also')
 return new Promise((resolve,reject)=>{
    resolve('husband:here is the cold drinks also baby! Lets go in we are late')
 })
})

getColdDrinks.then((m)=>{
    console.log(m)
    console.log('wife:Yeah! we should go in')

})






const watchMovie= async()=>{
    const promiseTicket=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('ticket')
        },3000)
      })

      const promisePopcorn=new Promise((resolve,reject)=>{
        resolve('husband:bought you the popcorn')
      })

      const promiseButter=new Promise((resolve,reject)=>{
        resolve('husband:Ok darling i have added butter also on popcorn')
      })
     
      const getColdDrinks=new Promise((resolve,reject)=>{
        resolve('husband:here is the cold drinks also baby! Lets go in we are late')
      })
      let ticket = await promiseTicket
      console.log(`wife:i have the ${ticket}`)

    console.log('husband:lets go in')
    console.log('wife:no i need a popcorn')

    let popcorn= await promisePopcorn
    console.log(popcorn)
    console.log('wife: i need some butter on my popcorn. Please have some')
    let butter = await promiseButter

    console.log(butter)
    console.log('wife: we need cold drinks also!')
    let coldDrinks=await getColdDrinks
    console.log(coldDrinks)

    console.log('wife:Yeah! we should go in')
    const getIcecream=new Promise((resolve,reject)=>resolve('ice-cream'))
    const getSnacks=new Promise((resolve,reject)=>resolve('snacks'))
    // let [icecream,snacks] =Promise.all([getIcecream,getSnacks])
    // console.log(`${icecream} ${snacks}`)

    return ticket


}

watchMovie().then((message)=>console.log(`person3: shows ${message}`))
console.log('person4:shows ticket')
console.log('person5:shows ticket')


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
           

        },1000)
      let error=false
        if(!error){
            resolve( posts.push(post))
        }else{
            reject('Something went wrong')
        }

    })


}

const create=async()=>{
    let created=await createPost({title:'Post 3', body:'This is post three'})
    console.log(created)

}

create()

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
    let dlt= await deletePost
    console.log(dlt)

}

deleted()
