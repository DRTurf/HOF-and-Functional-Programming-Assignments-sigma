const auth=[
    {
        author:"a",
        year:"2010"
    },
    {
        author:"b",
        year:"2000"
    },
    {
        author:"c",
        year:"2020"
    },
    {
        author:"d",
        year:"1999"
    },
    ]
    const after2010=[];
    auth.filter((ele)=>{
        if(ele.year>=2010){
            after2010.push({
                name:ele.author.toUpperCase(),
                year:ele.year
            })
        }
    })
    console.log(after2010);