let $=el=>document.querySelector(el);
let clientW=document.body.clientWidth
let clientH=document.body.clientHeight
class Name{
    constructor(x,y,color) {
        this.x=x;
        this.y=y;
        this.color=color;
        this.el=document.createElement('div')
    }
    draw(){
        this.el.style.left=this.x+'px'
        this.el.style.top=this.y+'px'
        this.el.innerText='熊偲研'
        this.el.style.color=this.color
        $('.names').append(this.el)
    }
    move(){
        this.y<(0-this.el.offsetHeight)&&(this.setXY())
        this.y-=1;
        this.draw();
    }
    setXY(){
        this.x=randomInt(0,clientW-this.el.offsetWidth)
        this.y=randomInt(clientH+200,clientH+1500)
    }
}

function randomInt(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}
for (let i=0;i<20;i++){
    let name=new Name(0,randomInt(clientH+200,clientH+1500),`rgba(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`)
    name.x=randomInt(0,clientW-name.el.offsetWidth)
    setInterval(()=>{
        name.move();
    },10)
}