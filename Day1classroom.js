let empName="Priyadharshini"
let targetChar = "x"
let count = 0
for (let i = 0 ;  i<empName.length ; i++)
{
    if(empName.charAt(i)===targetChar)
    {
        count++
    }
}
console.log("total no of repeated " + targetChar + " characters are : " + count)