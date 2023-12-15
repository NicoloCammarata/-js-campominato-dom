const myButton = document.getElementById('button')




function getRndInteger(min, max) {
    return Math.floor(Math.random() * (100 - 1) ) + min;

    
    
}



myButton.addEventListener('click', function () {
    let Container = document.getElementById("container")
    Container.classList.add('d-block');

    
    const Bomb = []
    for(let i = 1; i <= 16; i++){
        const randomNum = getRndInteger(1, 100);
        console.log(randomNum)
        if(Bomb.includes(randomNum) == false){
            
            Bomb.push(randomNum)

        }

        

        
       
    }; 

    console.log(Bomb)
    
    

    for(let i = 1; i <= 100; i++){
        const newCell = document.createElement("div");
        newCell.classList.add('col-2');
        newCell.innerHTML = i;
        
        grid.append(newCell)

        
        


        newCell.addEventListener('click', function () {

            const NumbernewCell = parseInt(this.innerText);

            if (Bomb.includes(NumbernewCell) == true) {
                
                newCell.classList.add("lost")
                
            }
            else {
                newCell.classList.add("clicked")
    
            }
        
        });
    
        
    
        
        
    } 
    
 

});




const grid = document.getElementById('griglia')
console.log(griglia)

//const Number = [];










    

    









