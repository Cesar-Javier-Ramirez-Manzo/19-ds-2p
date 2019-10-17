class Vector{
    constructor(v){
        this.v=v
    }
    validate(a){
        let y1=this.v
       
        if(y1.length!=a.v.length){
            return new Error
        }
        return a.v.length
    }
    vectSum(a){
        let d=a.v.length
        let n=[]

        for(var i=0;i<d;i++){
            
            n.push(a.v[i]+this.v[i])
        }
        return n
    }
    vectSubt(a){
        let d=a.v.length
        let n=[]

        for(var i=0;i<d;i++){
            
            n.push(a.v[i]-this.v[i])
        }
        return n
    }
    vectMul(a){
        let d=a.v.length
        let n=[]

        for(var i=0;i<d;i++){
            
            n.push(a.v[i]*this.v[i])
        }
        return n
    }
}

let x=new Vector([1,2,3,4,5])
let z=new Vector([6,7,8,9,10])
console.log(x.validate(z))
console.log(x.vectSum(z))
console.log(x.vectSubt(z))
console.log(x.vectMul(z))