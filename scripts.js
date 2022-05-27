window.addEventListener('load',()=>{
    const sounds = document.querySelectorAll(".beat");
    const colorPads = document.querySelectorAll(".color-pads div");
    const visual = document.querySelector(".visual");
    const colors = [
        "#b16b6b",
        "#c7ae3d",
        "#85bb40",
        "#3cc9aa",
        "#a252d8",
        "#79043e"
    ];
    colorPads.forEach((pad,index)=>{
        pad.addEventListener('click',function(){
            //reset time to allow multiple clicks to sounds
            sounds[index].currentTime=0;
            sounds[index].play();
            createBubble(index);
        });
    });
    //bubble effect
    const createBubble = (index) =>{
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.background = colors[index];
        bubble.style.animation = 'jump 1s ease';
        //clear bubble
        bubble.addEventListener("animationend",function(){
            visual.removeChild(this);
        })
    }
})