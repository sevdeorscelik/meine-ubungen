const getRand = (from, to) => Math.floor(Math.random() * ((to - from) + 1)) + from; 


const startElapsedTime = () => {
    return process.hrtime();
};
 
const getElapsedTime = (timer) => {
    const padLeft = (num, size) => {
        num = num.toString();
        while (num.length < size) num = "0" + num;
        return num;
    }
    const ms = parseInt(process.hrtime(timer)[1] / 1000000);
    const paddedMs = padLeft(ms, 3);
    return `${process.hrtime(timer)[0]}.${paddedMs} seconds`;
}



 const getEmployees = async () => {
     return new Promise((resolve, reject) => {
         const ms = getRand(1000, 3000)
         const num = getRand(1,2)
         setTimeout(() => {
             if(num !== 1){
                 resolve([{ name: "Jack", age: 34 }, { name: "Angie", age: 55 }])
             }else{
                 reject(new Error('API could not process your request.'))
             }

         }, ms)
     })
 }


 const apiDataServer = async() => {
   const timer = startElapsedTime()

   const obj = {
       errors : [],
       employees: [],
       info:{
           service: "Api data service",
           versiton: "v6.34",
           elapsedTime: ''
       }
   }
   try{
       obj.employees = await getEmployees()
   }
   catch(e) {
       obj.employees = []
       obj.errors.push(e.message)
   }
   obj.info.elapsedTime = getElapsedTime()
   return obj

}

(async () => {
    const data = await apiDataServer()
    console.log(data);
})();

