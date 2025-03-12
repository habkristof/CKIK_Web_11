
function randomSzam(a,b)
{
    return Math.floor(Math.random() *(b-a+1)+a);
}

function TombGeneralas(n)
{
    let tomb = [];
    for(let i = 0; i < n; i++)
    {
        tomb.push(randomSzam(10,120)/ 50);
    }
    return tomb;
}

function tombMaxi(tomb)
{
    let maxi =0;
    for(let i = 0; i < tomb.length; i++)
    {
        if(tomb[i] > tomb[maxi])
        {
            maxi = i;
        }
    }
    return maxi
}

function tombMaxi(tomb)
{
    let maxe =0;
    for(let i = 0; i < tomb.length; i++)
    {
        if(tomb[i] > tomb[maxe])
        {
            maxe = i;
        }
    }
    return tomb[maxe]
}

function TombAtlag(tomb)
{
    let osszeg =0;
    for(let i = 0; i < tomb.length; i++)
    {
        osszeg = tomb[i]
    }
    return osszeg / tomb.length;
}

function PozitivAtlag(tomb)
{
    let db = 0;
    let osszeg = 0;
    for(let i = 0; i < tomb.length; i++)
    {
        if(tomb[i] > 0)
        {
            osszeg = tomb[i]
            db++;
        }
    }
    return osszeg / db;
}


 function main()
{

    let rnd = randomSzam(-10,10); 
    console.log(rnd);

    let tomb = TombGeneralas(13);
    console.log(tomb);

    let maxe = tombMaxi(tomb);
    console.log('Tömb Maxi:' + maxe);

    let atlag = TombAtlag(tomb);
    console.log('Átlag' + atlag.toFixed(2))

    let pozitivatlag = PozitivAtlag(tomb);
    console.log("pozitiv atlag" + pozitivatlag);
}


main();