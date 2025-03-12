
function matrixfeltoltes()
{
    let matrix = [];
    for(let i = 0; i<5; i++)
    {
        let st =[];
        for(let j = 0; j<6; j++)
        {
            st.push(1);
        }
        matrix.push(st);
    }
    return matrix;
       
   
}

function randomSzam(a,b)
{
    return Math.floor(Math.random() * (a-b+1) +a);
}

function mfeltoltes(sor,oszlop)
{
    let matrix = [];
    for(let i = 0; i<sor; i++)
    {
        let st =[];
        for(let j = 0; j<oszlop; j++)
        {
            if(randomSzam(1,100) <=50)
            {
                st.push(1);
            }
            else
            {
                st.push(0);
            }
            // st.push(randomSzam(0,1))
        }
        matrix.push(st);
    }
    return matrix;
}

function megszamolas(matrix,szam)
{
    let db = 0;
    for(let i = 0; i < matrix.length; i++)
    {
        for(let j = 0; i < matrix.length[i]; j++)
        {
            matrix[i][j]
        }
       
    }
    return db;
}
function egyesDbKigyujtesTombbe(matrix)
{
    let lista = [];
    for(let i =0; i < matrix.length;i++)
    {
        let db =0;
        for(let j = 0; i < matrix[i].length;j++)
        {
            if(matrix[i][j] === 1)
            {
                db++;
            }
        }
        lista.push(db)
    }
    return lista;
}

function legtobbEgyesSorIndex(matrix)
{
    let lista = [];
    for(let i =0; i < matrix.length;i++)
    {
        let db =0;
        for(let j = 0; i < matrix[i].length;j++)
        {
            if(matrix[i][j] === 1)
            {
                db++;
            }
        }
        lista.push(db)
    }
    let maxi = 0;
    for(let i = 0; i<lista.length; i++)
    {
        if(lista[i] > lista[maxi])
        {
            maxi = i;
        }
    }
    return maxi;
    
}

function maxmumIndexTomb(lista)
    {
        let maxi = 0;
        for(let i = 0; i<lista.length; i++)
        {
            if(lista[i] > lista[maxi])
            {
             maxi = i;
            }
        }
        return maxmumIndexTomb(tomb);
    }



function Main()
{
    // let matrix = [[]];
    // matrix.push=[2,3,3,4,5]
    // console.log(matrix[0]);
    let matrix = matrixfeltoltes();
    console.table(matrix);

    let m = mfeltoltes(5,6);
    console.log(m);

    let mennyiva = megszamolas(matrix);
    console.log(mennyiva,12);
    randomSzam();

    const index =legtobbEgyesSorIndex(matrix);
}


Main();