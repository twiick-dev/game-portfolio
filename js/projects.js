let mousePointer=document.querySelector('#mousePointer')
const mouseX = document.getElementById('mouseX');
const mouseY = document.getElementById('mouseY');

let tvVideo=document.querySelector('.tvVideo')
let upButton=document.querySelector('.upButton')
let downButton=document.querySelector('.downButton')

let returnButton=document.querySelector('.return')

document.addEventListener('mousemove', (event) => {
    const x = event.pageX;
    const y = event.pageY;
    mousePointer.style.top=y+'px'
    mousePointer.style.left=x+'px'
    const returnRect = returnButton.getBoundingClientRect();
    if(x>returnRect.left && x<returnRect.left+returnButton.offsetWidth && y>returnRect.top && y<returnRect.top+returnButton.offsetHeight){
        mousePointer.src='../assets/images/CabezaAzulFlecha.png'
    }
    else{
        mousePointer.src='../assets/images/CabezaFlecha.png'
    }
});

let myVideos=['../assets/videos/project1.mp4','../assets/videos/project2.mp4','../assets/videos/project3.mp4','../assets/videos/project4.mp4']

chanel=-1

upButton.addEventListener('click',()=>{
    chanel+=1
    if(chanel>myVideos.length-1){
        chanel=0
    }
    changeChanel(chanel)
})
downButton.addEventListener('click',()=>{
    chanel-=1
    if(chanel<0){
        chanel=myVideos.length-1
    }
    changeChanel(chanel)
})

function changeChanel(newChanel){
    upButton.disabled = true;
    downButton.disabled = true;
    upButton.style.filter = "grayscale(100%)";
    downButton.style.filter = "grayscale(100%)";
    tvVideo.src='../assets/videos/estatica.mp4#t=2'
    setTimeout(()=>{
        tvVideo.src=myVideos[newChanel]
        upButton.disabled = false;
        downButton.disabled = false;
        upButton.style.filter = "grayscale(0%)";
        downButton.style.filter = "grayscale(0%)";
    },500)
}