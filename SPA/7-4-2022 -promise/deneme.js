let users = [{
        name: 'sevde',
        age: 27,
        city: 'izmir'
    },
    {
        name: 'semih',
        age: 28,
        city: 'ankara'
    }
]

let names=[]
    const getNameUsers = async () => {
        users.forEach(user => {
              names = await user.name
            })
            console.log(names);
    }

    setTimeout(() => {
       getNameUsers() 
    }, 3000);
    
    
const getAgeUsers = () => {
    users.forEach(user => {
        console.log(user.age);
    })
}


getAgeUsers()
    


