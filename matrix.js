class Matrix{
    constructor(x,y){
        this.x=new Array(x)
        for(var i=0;i<x;i++){
            this.x[i]=new Array(y)
            for (var c=0;c<x;c++){
                this.x[i][c]=0
            }
        } 
        this.l=x
        this.y=y       
    }
    InitR(){
   
        
        
        for(var i=0;i<this.l;i++){
            this.x[i] = []
            for(var c=0;c<this.y;c++){
                this.x[i][c]=Math.random()
            }
        }
        
        return this.x
        }
        getRow(r){
           
           return this.x[r-1]
        }
        getCow(c){
            let a=[]
            for(var i=0;i<this.l;i++){
                a.push(this.x[i][c-1])
            }
            return a

        }
        isSquared(){
            if(this.l==this.y){
                return true
            }else{
                return false
            }

        }
        isSymetr(){
            let b=true
            if(this.isSquared()==true){
                for(var i=0;i<this.l;i++){
                    
                    for(var c=0;c<this.y;c++){
                        if( this.x[i][c]!=this.x[c][i]){
                 
                            
                            b=false
                            i=this.l
                            break
                        }
                       
                    }
                }
                return b
            }else{
                return 'NO es simetrica'
            }
        }
        isIdentity(){
            let b=true
            if(this.isSquared()==true){
                for(var i=0;i<this.l;i++){
                  
                    for(var c=0;c<this.y;c++){
                        if( i==c){
                            if(this.x[i][c]!=1){
                                b=false
                            }else{
                                if(this.x[i][c]!=0){
                                    b=false
                                }
                            }
                        }
                       
                    }
                }
                return b
            }else{
                return 'NO es identidad'
            }
        }
        getData(){
            return this.x
        }
}
var x=new Matrix(3,3)
//console.log(x.InitR())
//console.log(x.getCow(1))
//console.log(x.getRow(2))
//console.log(x.isSquared())
console.log(x.isSymetr())
//console.log(x.getData())
console.log(x.isIdentity())