

const btn = document.querySelector('.btn');
const input = document.querySelector('.input');
const responseBox = document.querySelector('.response');

console.log(btn);

btn.addEventListener('click', function (event) {
    event.preventDefault(); //prevents refresh

    //get input value, convert to number
    const value = input.value;

    const result = fillerorcanon(Number(value));
    //run function with number

    //set container.innerHTML = returned value
    responseBox.innerHTML = result;
});



function fillerorcanon(episode){
    if(episode >= 1 && episode <= 4){
        return "Canon: Romance Dawn Arc"
    }
    else if(episode >= 4 && episode <= 8){
        return "Canon: Orange Town Arc"
    }
    else if(episode >= 9 && episode <= 18){
        return "Canon: Syrup Village Arc"
    }
    else if(episode >= 19 && episode <= 30){
        return "Canon: Baratie Arc"
    }
    else if(episode >=31 && episode <= 44){
        return "Canon: Arlong Park Arc"
    }
    else if(episode === 45){
        return "Canon: Loguetown Arc"
    }
    else if(episode >= 48 && episode <=53){
        return "Canon: Loguetown Arc"
    }
    else if(episode === 46 || episode === 47){
        return "Filler: Skip to episode 48"
    }
    else if(episode >= 54 && episode <= 61){
        return "Filler: Skip to episode 62"
    }
    else if(episode === 62 || episode === 63){
        return "Canon: Reverse Mountain Arc"
    }
    else if(episode >= 64 && episode <=67){
        return "Canon: Whisky Peak Arc"
    }
    else if(episode === 68 || episode === 69){
        return "Canon: Diary of Koby-Meppo"
    }
    else if(episode >= 70 && episode <= 77){
        return "Canon: Little Garden Arc"
    }
    else if(episode >= 78 && episode <= 91){
        return "Canon: Drum Island Arc"
    }
    else if(episode >= 92 && episode <= 130){
        return "Canon: Arabasta Arc"
    }
    else if(episode >= 131 && episode <= 143){
        return "Filler: Skip to episode 144"
    }
    else if (episode >= 144 && episode <= 152){
        return "Canon: Jaya Arc"
    }
    else if(episode >= 153 && episode <= 195){
        return "Canon: Skypiea Arc"
    }
    else if(episode >= 196 && episode <= 206){
        return "Filler: Skip to episode 207"
    }
    else if(episode >= 207 && episode <= 219){
        return "Canon: Long Ring Long Land Arc"
    }
    else if(episode >= 220 && episode <= 228){
        return "Filler: Skip to episode 229"
    }
    else if(episode >= 229 && episode <= 263){
        return "Canon: Water 7 Arc"
    }
    else if(episode >= 264 && episode <= 278){
        return "Canon: Enies Lobby Arc"
    }
    else if(episode >= 279 && episode <= 283){
        return "Filler: Skip to episode 284"
    }
    else if (episode >= 284 && episode <= 290){
        return "Canon: Enies Lobby Arc"
    }
    else if(episode === 291 || episode === 292){
        return "Filler: Skip to episode 293"
    }
    else if(episode >= 293 && episode <= 302){
        return "Canon: Enies Lobby Arc"
    }
    else if(episode === 303){
        return "Filler: Skip to episode 304"
    }
    else if(episode >= 304 && episode <= 312){
        return "Canon: Enies Lobby Arc"
    }
    else if(episode >= 313 && episode <= 325){
        return "Canon: Post-Enies Lobby Arc"
    }
    else if(episode >= 326 && episode <= 336){
        return "Filler: Skip to episode 337"
    }
    else if(episode >= 337 && episode <= 381){
        return "Canon: Thriller Bark Arc"
    }
    else if(episode >= 382 && episode <= 384){
        return "Filler: Skip to episode 385"
    }
    else if(episode >= 385 && episode <= 405){
        return "Canon: Sabaody Archipelago Arc"
    }
    else if(episode >= 408 && episode <= 421){
        return "Canon: Amazon Lily Arc"
    }
    else if(episode >= 422 && episode <= 425){
        return "Canon: Impel Down Arc"
    }
    else if(episode >= 426 && episode <= 429){
        return "Filler: Skip to episode 430"
    }
    else if(episode >= 430 && episode <= 452){
        return "Canon: Impel Down Arc"
    }
    else if(episode >= 453 && episode <= 456){
        return "Canon: Straw Hat's Separation Serial"
    }
    else if(episode >= 457 && episode <= 489){
        return "Canon: Marineford Arc"
    }
    else if(episode === 490 || episode === 491){
        return "Canon: Post-War Arc"
    }
    else if(episode === 492){
        return "Filler: Skip to episode 493"
    }
    else if(episode >= 493 && episode <= 516){
        return "Canon: Post-War Arc"
    }
    else if(episode >= 517 && episode <= 522){
        return "Canon: Return to Sabaody Arc"
    }
    else if(episode >= 523 && episode <= 541){
        return "Canon: Fish-Man Island Arc"
    }
    else if(episode === 542){
        return "Filler: Skip to episode 543"
    }
    else if(episode >= 543 && episode <= 574){
        return "Canon: Fish-Man Island Arc"
    }
    else if(episode >= 575 && episode <= 578){
        return "Filler: Skip to episode 579"
    }
    else if(episode >= 579 && episode <= 589){
        return "Canon: Punk Hazard Arc"
    }
    else if(episode === 590){
        return "Filler: Skip to episode 591"
    }
    else if(episode >= 591 && episode <= 625){
        return "Canon: Punk Hazard Arc"
    }
    else if(episode >= 626 && episode <= 628){
        return "Filler: Skip to episode 629"
    }
    else if(episode >= 629 && episode <= 746){
        return "Canon: Dressrosa Arc"
    }
    else if(episode >= 747 && episode <= 750){
        return "Filler: Skip to episode 751"
    }
    else if(episode >= 751 && episode <= 779){
        return "Canon: Zou Arc"
    }
    else if(episode >= 780 && episode <= 782){
        return "Filler: Skip to episode 783"
    }
    else if(episode >= 783 && episode <= 877){
        return "Canon: Whole Cake Island Arc"
    }
    else if(episode >= 878 && episode <= 889){
        return "Canon: Levely Arc"
    }
    else if (episode >= 890 && episode <= 894){
        return "Canon: Wano Country Arc"
    }
    else if (episode >= 895 && episode <= 896){
        return "Filler: Skip to episode 897"
    }
    else if (episode >= 897 && episode <= 906){
        return "Canon: Wano Country Arc"
    }
    else if(episode === 907){
        return "Filler: Skip to episode 908"
    }
    else if(episode >= 908){
        return "Canon: Wano Country Arc"
    }
    }



