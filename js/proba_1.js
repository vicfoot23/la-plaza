var cont= -30;
var cont1= -10;
var cont2= 30;
var cont3= 10;
//let angle = 0.0;
//let jitter = 0.0;
//let paraules=['Víctor', 'és', 'el', 'puto', 'amo', 'xd', 'xD'];
let col;
let c=0;
let inc=0.05;
let check= false;
let colors=['FF530D','E82C0C','FF0000','E80C7A','FF0DFF'];
let direccio=["plaça","de","les","lletres"];
function setup () {
  // el tamaño es de 192x157 y se ajusta automaticamente
  createCanvas(windowWidth, windowHeight);
  background(255);
	textSize(18);
}

function draw() {
  background(255);
	from=color(255);
	to=color(0);
	c=c+inc;
	cont= cont+ 0.5;
	cont1= cont1+ 0.7;
	cont2= cont2+ 0.3;
	cont3= cont3+ 1;
	if (second() % 2 === 0) {
    jitter = random(-0.1, 0.1);
  }
	if(c>=1){
		check= true;
	}
	if(c<=0){
		check= false;
	}
	if(check== false){
		inc= 0.05;
	}
	if(check== true){
		inc=-0.05;
	}
	text("M",cont,100);
	if (cont>20){
		cont=20;
	}
	text("A",cont1,100);
	if (cont1>78){
		cont1=78;
	}
	text("D",cont2,100);
	if (cont2>128){
		cont2=128;
	}
	text("R",cont3,100);
	if (cont3>150){
		cont3=150;
	}
	col=lerpColor(from, to, c);
	//--------------- fila 1 ------------------
	fill(col);
	rect(0,0,36,50);
	fill(255);
	rect(36,0,72,50);
	fill(255);
	rect(108,0,60,50);
	fill(col);
	rect(168,0,24,50);
	//--------------- fila 2 ------------------
	fill(col);
	rect(0,50,108,50);
	fill(255);
	rect(72,50,40,50);
	fill(255);
	rect(108,50,60,50);
	fill(col);
	rect(168,50,60,50);
	//--------------- fila 3 ------------------
	fill(col);
	rect(0,100,24,57);
	fill(col);
	rect(24,100,96,57);
	fill(255);
	rect(120,100,48,57);
	fill(255);
	rect(168,100,60,57);
	//text(paraules[1],width/2,height/2);
	//----------------Lletra "M"-------------------
	textSize(20);
	fill(0);
	text('M',cont+47,35);
	//----------------Lletra "A"-------------------
	fill(0);
	text('A',cont1+45,35);
	//----------------Lletra "D"-------------------
	fill(0);
	text('D',cont2-45,cont1+5);
	//----------------Lletra "R"-------------------
	fill(0);
	text('R',cont3-20,cont1+5);
	//----------------Lletra "I"-------------------
	fill(0);
	text('I',cont+120,138);
	//----------------Lletra "D"-------------------
	fill(0);
	text('D',cont2+47,138);
	//----------------"plaça"-------------------
	textSize(10);
	push();
	translate(10,80);
	fill(100);
	text(direccio[0],textWidth(direccio[0])/2,0);
	pop();
	//----------------"de"-------------------
	fill(100);
	push();
	translate(170,80);
	text(direccio[1],textWidth(direccio[1])/2,0);
	pop();
	//----------------"les"-------------------
	fill(100);
	push();
	translate(0,135);
	text(direccio[2],textWidth(direccio[2])/2,0);
	pop();
	//----------------"lletres"-------------------
	fill(100);
	push();
	translate(45,135);
	text(direccio[3],textWidth(direccio[3])/2,0);
	pop();
	console.log(rotate);
}