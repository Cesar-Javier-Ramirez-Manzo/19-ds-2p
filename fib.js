class Fibo{
    constructor(x){
        this.x=x
    }

    getValue(x=this.x){
        if(x<2){
            
           return x
        }else{
            
            return this.getValue(x-2)+this.getValue(x-1)
        }
       
    }
    getCost(){
        let z=0
        function cost(x){
            if(x<2){
            
                return z
             }else{
                 z++
                 return cost(x-2)+cost(x-1)
                 
             }
        }
      cost(this.x)
        return z+1
     }
    
    getSuce(){
        let a=[]
       
        for(var i=0;i<=this.x;i++){
            function suce(x){
                if(x<2){
            
                    return x
                 }else{
                     
                     return suce(x-2)+suce(x-1)
                 }
            }
            a.push(suce(i))
        }
        return a

    }
    getTable(){
        let c=this.x
        let a=[]
        for(var i=0;i<=c;i++){
            this.x=i
            a.push('['+this.getValue())
            a.push(this.getCost()+']')
            
            
        }
        this.x=c
        return a
    }
}
let z=0

let one=new Fibo(10)
console.log(one.getValue())
console.log(one.getSuce())
console.log(one.getCost())
console.log(one.getTable())
