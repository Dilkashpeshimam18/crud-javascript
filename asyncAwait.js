function goToCollege(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           resolve('Go To College')
        },1000)
    })
}

function goToCafe(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           resolve('Go To Cafe')
        },2000)
    })
}

function goToMovie(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           resolve('Go To Movie')
        },1000)
    })
}

function goToHome(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           resolve('Go To home')
        },3000)
    })
}


const dayOut = async()=>{
    let college=await goToCollege()
    console.log(college)

    let cafe=await goToCafe()
    console.log(cafe)

    let movie=await goToMovie()
    console.log(movie)

    let home=await goToHome()
    console.log(home)

}

dayOut().then(()=>console.log('What a fun day'))