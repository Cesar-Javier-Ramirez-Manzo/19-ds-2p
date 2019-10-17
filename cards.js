class Cartas{
    constructor(){
        this.m=new Array(14)
        this.sum=0
        for(var i=0;i<14;i++){
            this.m[i]=new Array(4)
            for(var c=0;c<4;c++){
                if(i==0){
                    if(c==0){
                        this.m[i][c]='Trebol'
                    }
                    if(c==1){
                        this.m[i][c]='Diamantes'
                    }
                    if(c==2){
                        this.m[i][c]='Corazones'
                    }
                    if(c==3){
                        this.m[i][c]='Picas'
                    }
                   
                }else{
                    this.m[i][c]=this.sum
                }
                
            }
            this.sum++
        }
    }
    printN(n,u){
        let wh=0
        if(n=='Trebol'){
            wh=0
        }
        if(n=='Diamantes'){
            wh=1
        }
        if(n=='Corazones'){
            wh=2
        }
        if(n=='Picas'){
            wh=3
        }
        let s=1
        
        for(var i=1;i<14;i++){
            for(var c=0;c<4;c++){
                if(c==wh&&this.m[i][c]==u){
                    return s
                    
                    
                }
                s++
            }
        }
       
    }
    printC(cont){
        let s=0
        let wh=0
        let a=new Array
        for(var i=1;i<14;i++){
            for(var c=0;c<4;c++){
                s++
                if(s==cont){
                    a.push(this.m[i][c])  
                    if(c==0){
                        wh='Trebol'
                    }
                    if(c==1){
                        wh='Dimanates'
                    }
                    if(c==2){
                        wh='Corazones'
                    }
                    if(c==3){
                        wh='Picas'
                    }
                    a.push(wh)
                }
                
            }
        }
        return a
    }
    threeOfAKind(){
        return ((54912)/(fact(52)/(fact(47)*fact(5))))*100+'%'

        function fact(z){
            if (z<=1){ 
                return 1 
           }
            else{
                
            return z* fact(--z)}
        }
    }
    getM(){
        return this.m
    }

}

let c1= new Cartas()
console.log(c1.getM())
console.log(c1.printN('Picas',3))
console.log(c1.printC(51))
console.log(c1.threeOfAKind())