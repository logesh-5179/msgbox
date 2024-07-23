const ask=[
        "What is your name?",
        "What is your fav place?",
        "What is your hobby?"
    ]
function acc()
{
    const input = document.getElementById("inp").value;
    let now = false;
    for(let i=0;i<ask.length;i++)
    {
        if(ask[i]==inp)
        now=true;
    
    const con = document.getElementById("Ask");
    if(now)
    {
        con.style.backgroundColor="green";
    }
    else
    {
        con.style.backgroundColor="red";
    }
}
}

function dec()
{
    const input=document.getElementById("inp")
    inp.value="";
}