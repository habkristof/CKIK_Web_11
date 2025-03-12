console.log('Kapcsolat')

function ertekekMegadasa(){
    let a = 13;
    let b = 19;
    console.log(`${a}, ${b}`);
}

function randomSzam(a , b){
    if(b<a){
        let c = a;
        a = b;
        b = c;
    }
    return Math.floor(Math.random()*(b-a+1)+a);
}

function TombGeneralas(n){
    let t = [];
    for(let i = 0; i<n;i++){
        t.push(randomSzam(-10,10));
    }
    return t;
}

function TombAtlag(tomb){
    let osszeg = 0;
    for(let i = 0; i<tomb.length;i++){
        osszeg += tomb[i];
    }
    return osszeg / tomb.length;
}

function TombMaxIndex(tomb) {
    let maxi = 0;
    for (let i = 1; i < tomb.length; i++) {
        if ( tomb[i] > tomb[maxi]) {
            maxi = i;
        }
    }
    return maxi;
}



function negativSzam(tomb)
{
    for (let i = 0; i < tomb.length; i++)
        {
            if(tomb[i] < 0){
                console.log('Van negatív szám')
            }
            else
            {
                console.log('Nincs negatív szám')
            }
        }
}


function masnegativ(tomb)
{
    while (i<tomb.length && tomb[i] < 0) 
        {
            i++;
    }
    if(i< tomb.length)
    {
        return true;
    }
    else
    {
        return false;
    }

}


function PozitivAtlag(tomb)
{
    let osszeg = 0;
    let db = 0;
    for(let i = 0; i < tomb.length; i++)
    {
        if(tomb[i]>0)
        {
            osszeg += tomb[i];
            db++;
        }
        return osszeg / db;
    }
}

function HanyadikHelyenVan(tomb,szam)
{
    let i = 0;
    while(i< tomb.length && tomb[i] != szam)
    {
        i++;
    }
    if(i< tomb.length)
    {
        return i;
    }
    else
    {
        return -1;
    }
    
}

function main(){
    console.log("Függvény belső magja");
    ertekekMegadasa();   
    let rnd = randomSzam(-10,10); 
    console.log(rnd);


    let tomb = TombGeneralas(13);
    console.log(tomb);

    // fv - Visszaadja a tomb elemeinek átlagát!
    // fv - Visszaadja a tomb legnagyobb elemének indexét!
    // fv - Van-e a számok között nulla?

    let atlag = TombAtlag(tomb);
    console.log("Tömb elemeinek átlaga:"+atlag.toFixed(2));

    console.log("max:"+(TombMaxIndex(tomb)+1));

   
 
    //Hány darab negatív szám van?

    //Pozitív számok átlaga?
    //Ha van benne 10-es akkor hányadik helyen?

    let negativ = negativSzam(tomb);
    console.log('Van e negatív szám:' + negativ)

    console.log(masnegativ(tomb));
}

main();