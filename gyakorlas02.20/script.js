console.log("Lipták leakart kapni a buliban!")

let tomb =[];
for(let i = 0; i < 10; i++)
    {
        let db =Math.floor(Math.random() *7);
        tomb.push(db);
        for(let j = 0; j< db; j++)
            {
                let rnd =Math.floor(Math.random() *26+11);
                tomb.push(rnd)
        }
}
console.log(tomb)

let atlagok = [];
for(let i =0; i<tomb.length; i++)
{
    let darab = tomb[i];
    let osszeg = 0;
    for(let j = i+1; j<i+darab; j++)
    {
        osszeg += tomb[j];
    }
    if(darab != 0)
    {
        atlagok.push(osszeg/darab);
        i+= darab;
    }
    else
    {
        atlagok.push(0);
    }
   
}
console.log(atlagok);


let maxi = 0;
for(let i = 1; i<atlagok.length; i++)
{
    if(atlagok[maxi] <atlagok[i])
    {
        maxi = i;
    }
}
console.log(maxi+1);
