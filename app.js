"Use Strict"
function monthDays(month,year)
{
    if(month%2!=0)
    {
        return 31;
    }
    else if(month=='feb')
    {
        if(year%400==0)
        {
            return 29;
        }
        return 28;

    }
    return 30;
}
function calc()
{
    let days=0;
    const curr=new Date();
    // const birth=new Date("13/05/2000");
    for (let i=6;i<13;i++)
    {
        days+=monthDays(i,2000);
    }
    for(let i=1;i<curr.getFullYear()-2000;i++)
    {
        if(i%400==0)
        {
            days+=366;
        }
        else{
            days+=365;
        }
    }

    for(let i=1;i<=curr.getMonth()+1;i++)
    {
        days+=monthDays(i,curr.getFullYear);
    }
    days+=curr.getUTCDate();
    // console.log(days);
    const par=document.querySelector(".col");
    // console.log(par);
    const chld=par.children;
    // console.log(chld);
    (chld[0].children)[0].value=`${days}`;
    // console.log(curr.getUTCDate());
    // born at 17:30
    let min=curr.getMinutes()+30;
    let hrs=curr.getHours()+17;
    if(min>=60)
    {
        hrs++;
        min%=60;
    }
    if(hrs>=24)
    {
        days++;
        hrs%=24;
    }
    (chld[1].children)[0].value=`${hrs}`;
    (chld[2].children)[0].value=`${min}`;
    (chld[3].children)[0].value=`${curr.getSeconds()}`;

}
setInterval(calc,1000);