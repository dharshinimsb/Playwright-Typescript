//

let data = [44,67,20,5,678,937,1,44,"Universe",,5,true]
data.sort((a,b)=> a-b)
console.log(data)

for (let i = 0;i<data.length;i++)
{
    console.log(data[i])
}

// splice >> Replace the old value to the new value in reference of Index position 
 let arr=[37, 90,"Love", false]
 arr.splice(1,900)
 console.log(arr)


 //Duplicate Number 
 
 for (let i=0; i<data.length; i++)
 {
    for(let j=i+1; j<data.length; j++)
    {
        if( data[i]===data[j])
        {
            console.log("Duplicate value is : " + data[j])

        }
    }
 }


 
