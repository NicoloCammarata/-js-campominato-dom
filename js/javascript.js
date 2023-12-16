const myButton = document.getElementById('button')
let points = 0;
function wasted (){
    let Container = document.getElementById("container")
    Container.innerHTML = "<div><strong>" + 
                                "wasted" + "<div>" + "Punteggio: " + points + "</div>" ;
                            "</strong></div>" ;
    Container.classList.add('wasted')
}; 

function win (){
    let Container = document.getElementById("container")
    Container.innerHTML = "<div><strong>" + 
                                "You win" + "<div>" + "Punteggio: " + points + "</div>" ;
                            "</strong></div>" ;
    Container.classList.add('win')
}; 




/*function punteggio (){
    let punteggio = document.getElementById("punteggio")
    punteggio.innerText = "<div>" + "Punteggio:" + points + "</div>" ;
    Container.classList.add('wasted')
}; */



function getRndInteger(min, max) {
    return Math.floor(Math.random() * (100 - 1) ) + min;

    
    
}





myButton.addEventListener('click', function () {
    let Container = document.getElementById("container")
    Container.classList.add('d-block');

    
    const Bomb = []
    let i = 0;
    while( Bomb.length < 16){
        const randomNum = getRndInteger(1, 100);
        console.log(randomNum)
        if(Bomb.includes(randomNum) == false){
            
            Bomb.push(randomNum)

        }
        
        i++ 

        
        
    }; 

    console.log(Bomb)
    
    

    for(let i = 1; i <= 100; i++){
        const newCell = document.createElement("div");
        newCell.classList.add('col-2');
        newCell.innerHTML = i;
        
        grid.append(newCell)

        
        


        newCell.addEventListener('click', function () {

            

            const clickedCell = parseInt(this.innerText);
    
            if (Bomb.includes(clickedCell) == true) {
                
                newCell.classList.add("lost")

                setTimeout(wasted, 500);

                 
            }
            
            else if(Bomb.includes(clickedCell) == false){
                

                if(newCell.classList.contains("clicked") == false){
                    newCell.classList.add("clicked")
                    
                        
                    points++;
                    console.log(points)

                    
        
                }
                
    
     
    
            }

            if(points == 84){
                setTimeout(win, 500);
                console.log('you win')
            }
            
            

            
            
                

            

            
        
        });
    
        
    
        
        
    } 
    
 

});




const grid = document.getElementById('griglia')
console.log(griglia)

//const Number = [];










    

    









