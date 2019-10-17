class Factorial{
    constructor(x){
        this.x=x
        

    } 
    val(z=this.x){
        
        if (z<=1){ 
            return 1 
       }
        else{
            
        return z* this.val(--z)}
        
    }
    cost(){
        let c=0
       function val2(z){
        if (z<=1){ 
            return 1 
       }
        else{
            c++  
        return z* val2(--z)}
        
       }
       val2(this.x)
       return c
         
    }
    suce(){
        let a=[]
        for(var i=1;i<=this.x;i++){
            function val3(z){
                if (z<=1){ 
                       
                    return 1 
               }
                else{
                
                return z* val3(--z)}
                
            }
            a.push(val3(i))
        }
        
        return a
    }
    table(){
        let c=this.x
        let a=[]
        for(var i=0;i<=c;i++){
            this.x=i
            a.push(this.val())
            a.push(this.cost())
            
            
        }
        this.x=c
        return a
    }
}


var fact5=new Factorial(5)
console.log(fact5.val())
console.log(fact5.cost())
console.log(fact5.suce())
console.log(fact5.table())
console.log(fact5)