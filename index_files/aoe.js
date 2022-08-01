const baseUrl = "index_files/aoe/villager/";
const anims = ["villager_carry_gold_1.gif", "villager_carry_gold_2.gif", "villager_carry_gold_3.gif","villager_carry_gold_4.gif","villager_carry_gold_5.gif"];
function myMove() {
    let id = null;
    let i = 0;
    const elem = document.getElementById("animate");   
    // let pos = 0;
    // clearInterval(id);
    // id = setInterval(frame, 5);
    // function frame() {
    //   if (pos == 350) {
    //     clearInterval(id);
    //   } else {
    //     console.debug("frame " + pos);
    //     pos++; 
    //     elem.style.top = pos + "px"; 
    //     elem.style.left = pos + "px"; 
    //   }
    // }
    id = setInterval(frame,500);
    function frame() {
        i++;
        i = i % anims.length;
        elem.src = baseUrl + anims[i];
    }
  }
  myMove();