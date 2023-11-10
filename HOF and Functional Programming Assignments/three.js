const usPrices=[
{
    name:"A",
    price:"100"
},
{
    name:"B",
    price:"200"
},
{
    name:"C",
    price:"300"
},
]
const exchange=80;
const indPrices=[];
usPrices.map((ele)=>{
    indPrices.push({
        name:ele.name,
        price:ele.price*exchange
    })
})
console.log(indPrices);