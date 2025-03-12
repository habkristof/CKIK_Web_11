
function random(a,b)
{
    return Math.floor(Math.random()* (b-a+1) +a)
}


function tombfeltoltes(n)
{
    let tomb = [];
    for(let i =0; i < n; i++)
    {
        tomb.push(random(10,120)*50);
    }
    return tomb
}

function MaxiErtek(tomb)
{
    let maxe =0;
    for(let i = 0; i < tomb.length; i++)
    {
        if(tomb[i] > tomb[maxe])
        {
            maxe = tomb[i];
        }
    }
    return maxe;
}

function MaxiIndex(tomb)
{
    let maxi =0;
    for(let i = 0; i < tomb.length; i++)
    {
        if(tomb[i] > tomb[maxi])
        {
            maxi = i;
        }
    }
    return maxi;
}

function vanECucs(tomb)
{
    let i = 1;
    while(i < tomb.length-1 && !(tomb[i]>1000 && tomb[i-1]<tomb[i] && tomb[i+1]<tomb[i]))
    {
        i++;
    }
    return i<tomb.length-1;
}



function main()
{
    let tomb  = tombfeltoltes(13);
    console.log('Tömbnek a feltöltése:' + tomb)

    let maxe = MaxiErtek(tomb);
    console.log(maxe)

    let vane = vanECucs(tomb);
    console.log(vane);
}

main();