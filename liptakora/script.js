console.log('Lipták szeret engem!')

let adatok =["Béla",4.6, 1234, "Csilla", 4.7, 784, "Józsi", 3.5, 983, "Jani", 3.87, 1473, "Kata", 4.3, 10022];

let osszes=0;
let darab=0;
for(let i=1;i<adatok.length;i+=3){
    darab++;
    osszes+=adatok[i];
    
}
console.log("1",osszes/darab);
let i=1;
while(i<adatok.length && adatok[i]!==5){
    i+=3;
}
if(i<adatok.length){
    console.log("Van kitünő átlag")
}
else{
    console.log("Nincs kitünő átlag")
}

let maxi=1;
for(let i=1;i<adatok.length;i+=3){
    if(adatok[i]>adatok[maxi]){
        maxi=i;
    }
}
console.log("3",adatok[maxi-1]);


let minimum=2;
for (let i= 2;i<adatok.length;i+=3){
    if(adatok[i]<adatok[minimum]){
        minimum=i;
    }
}
console.log("4",adatok[minimum-2]);

let db = 0;
for(let i =2; i<adatok.length; i +=3){
    if(adatok[i] < 1000){
        db++;
    }
}
console.log(db)



    

