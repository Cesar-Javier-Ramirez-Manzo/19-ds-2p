class Calendar {
    constructor() {
        

    }
    dayPlus(d,n){
        let x=0
       
        let dia=0;
        switch(d){
            case 'Lunes':
                  x=0
                  break;  
            case 'Martes':
                  x=1;
                  break;
            case 'Miercoles':
                    x=2;
                  break;
            case  'Jueves': 
                     x=3;
                  break;
            case 'Viernes':
                    x=4;
                    break;
            case  'Sabado':
                    x=5;
                    break;
            case  'Domingo':
                    x=6;
                    break;
        
        }
        dia=(x+n)%7
        switch(dia){
            case 0:
                  return "Lunes"  
            case 1:
                  return "Martes"
            case 2:
                  return "Miercoles"
            case  3: 
                   return "Jueves"
            case 4:
                   return "Viernes"
            case  5:
                   return "Sabado"
            case  6:
                   return "Domingo"
        
        }
    }
    leapYear(y) {
        let b = true
        if ((y % 4) == 0 && (y % 100) != 0) {
            b = true
        } else {
            b = false
        }
        return b
    }
    firstDayY(y) {
        let x = (y + Math.floor((y - 1) / 4) - Math.floor((y - 1 / 100)) + Math.floor((y - 1 / 400))) % 7

        switch (x) {
            case 1:
                return 'Domingo'

            case 2:
                return 'Lunes'
            case 3:
                return 'Martes'

            case 4:
                return 'Miercoles'
            case 5:
                return 'Jueves'

            case 6:
                return 'Viernes'

            case 7:
                return 'Sabado'
        }
    
    }
    getCal(m,y){
      
        let sum=1
        let comp=0
        switch(m){
            case 1:
            comp=31
            break
            case 2:{
           
            }
         
            case 3:
            comp =30
            break
            case 4:
            comp =31
            break
            case 5:
            comp =30
            break
            case 6:
            comp=31
            break
            case 7:
            comp=30
            break
            case 8:
            comp=31
            break
            case 9:
            comp=30
            break
            case 10:
            comp=31
            break
            case 11:
            comp=30
            break
            case 12:
            comp=31
            break 
        }
        
        let b=new Array(5)
        for(var i=0;i<5;i++){
            b[i]= []
         for(var c=0;c<7;c++){

             b[i][c]=sum
            sum++
            if(sum==comp)
            break
         }   
        }
        return b

    }

}


let cal1 = new Calendar()
console.log(cal1.leapYear(2020))
console.log(cal1.firstDayY(2020))
console.log(cal1.getCal(4,2020))
console.log(cal1.dayPlus("Martes", 3))