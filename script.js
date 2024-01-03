
let root = document.getElementById("root");
let scoreheading = document.getElementById("score");
let score = 0;
// let coindrop = new Audio("./coin.mp3");

setInterval( ()=>{
    let image = document.createElement("img");
    let available = true;

    image.setAttribute("src","https://w7.pngwing.com/pngs/273/94/png-transparent-dollar-coin-icon-symbol-trademark-yellow-coin-us-dollar-gold-coin-trademark-orange-thumbnail.png");
    image.style.setProperty("height" ,"50px");
    image.style.setProperty("position" ,"absolute");
    
    let left = parseInt(Math.random()*window.innerWidth);
    let top = parseInt(Math.random()*window.innerHeight);
    image.style.setProperty("left" ,`${left}px`);
    image.style.setProperty("top" ,`${top}px`);
    root.appendChild(image);

    setTimeout(()=>{
        if(available){
            root.removeChild(image);
        }
    } , 3000);


    image.onmouseover = ()=>{
        let coindrop = new Audio("./coin.mp3");
        console.log(`ping`);
        root.removeChild(image);
        available = false;  
        score +=10;
        scoreheading.innerHTML = `Score : ${score}`;
        coindrop.play();

    }

},1000);

