//2. feladat

let szam=Number(prompt("Adja meg a számot:"));
let hatvany=Number(prompt("Adja meg a hatvány mértékét:"));

let eredmeny= Math.pow(szam, hatvany);
document.write("Az eredmény:" + eredmeny)

document.write("<hr>");

//1. feladat

let nev=String(prompt("Adja meg a dokumentum készítőjének nevét:"));
let csoport=String(prompt("Adja meg a csoportját:"));
let megertes1=Number(prompt("Adja meg a skálán lévő értéket html:"));
let megertes2=Number(prompt("Adja meg a skálán lévő értéket css:"));
let megertes3=Number(prompt("Adja meg a skálán lévő értéket javascript:"));

document.write(` ${nev} a dokumentum készítője`);
document.write("<br>");
document.write(` ${csoport} a csoport megnevezése`);
document.write("<br>");
document.write(`A html megértése 100-as skálát tekintve: ${megertes1}`);
document.write("<br>");
document.write(`A css megértése 100-as skálát tekintve: ${megertes2}`);
document.write("<br>");
document.write(`A javascript megértése 100-as skálát tekintve: ${megertes3}`);

document.write("<hr>");

//3. feladat <-Rosszul értelmeztem a feladatot.

let kezdo=Number (prompt("Adja meg a kezdő értéket:"));
let vegertek=Number(prompt("Adja meg a végértéket:"));

for (let i=kezdo; i<=vegertek; i++){
    if (i % 2 === 0){
        document.write(i+",");
    }
}

document.write("<hr>");

let szamkezdo=Number (prompt("Adja meg a kezdő értéket:"));
let szamvegertek=Number(prompt("Adja meg a végértéket:"));

let generaltszam=Math.round(Math.random()*(szamvegertek-szamkezdo))+szamkezdo;

if(generaltszam%2==0){
	document.write(`A generált páros szám a ${szamkezdo}:${szamvegertek} intervallumban:${generaltszam}`);
}
else if(generaltszam!=felso){
	document.write(`A generált páros szám a ${szamkezdo}:${szamvegertek} intervallumban:${generaltszam+1}`);
}
else{
	document.write(`A generált páros szám a ${szamkezdo}:${szamvegertek} intervallumban:${generaltszam-1}`);
}

document.write("<hr>");

//5. feladat

let ertek=Number(prompt("Adja meg az értéket:"));
let oszto=Number(prompt("Adja meg az osztó értékét:"));

if (ertek % oszto === 0){
    document.write(ertek+" szám osztható maradéktalanul");
}
else  document.write("A szám nem osztható maradéktalanul");

document.write("<hr>");

//6. feladat

for (let i = 1; i <= 10 ;i++){
    let eredmenye=Math.pow( i, 2);
    document.write(eredmenye+",");
}

document.write("<hr>");

// <-Eddig sikerült megoldani. Az első feladatot túlkomplikáltam. Egyet pedig elrontottam.


//4. feladat
let eletkor=Number (prompt("Adja meg az életkorát:"));

if(eletkor>0 && eletkor<=6){
    document.write(`${eletkor} évesen kisgyermekkorban vagy`);
}
else if(eletkor>6 && eletkor<=12){
	document.write(`${eletkor} évesen gyermekkorban vagy`);
}
else if(eletkor>12 && eletkor<=16){
	document.write(`${eletkor} évesen serdülőkorban vagy`);
}
else if(eletkor>16 && eletkor<=20){
	document.write(`${eletkor} évesen ifjúkorban vagy`);
}
else if(eletkor>20 && eletkor<=30){
	document.write(`${eletkor} évesen fiatal felnőtt korban vagy`);
}
else if(eletkor>30 && eletkor<=60){
	document.write(`${eletkor} évesen felnőtt korban vagy`);
}
else if(eletkor>60 && eletkor<=120){
	document.write(`${eletkor} évesen aggkorban vagy`);
}
else{
	document.write(`${eletkor} NEM létezik az adatbázisban mint lehetőség!`);
} 
  
document.write("<hr>");
