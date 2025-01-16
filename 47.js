let teaprice=1000,sugerprice=40,zinjer=50,milkprice=50,lpg=80,waterprice=20,totalinvest=0,profit=0,kupprice=1;
let quintitytea=1,quintitysuger=4,quintityzinjer=1,milkquintity=30,totalcup=700,quintityLPG=5,quintitywater=25;
totalinvest=(teaprice*quintitytea)+(sugerprice*quintitysuger)+(zinjer*quintityzinjer)+(milkprice*milkquintity)+(waterprice*quintitywater)+(lpg*quintityLPG)+(kupprice*totalcup);
console.log("total:"+totalinvest);
let perteacupsell=10,perdaytesacupsell=800,totalincomeperday=0;;
totalincomeperday=perteacupsell*perdaytesacupsell,perdayprofit=0;
console.log("per day income: "+totalincomeperday);
perdayprofit=totalinvest-totalincomeperday;
console.log("perdayprofit:"+perdayprofit);
let percentageofprofit=0;
percentageofprofit=(perdayprofit/totalinvest)*100;
console.log("percentageofprofit:"+percentageofprofit);

