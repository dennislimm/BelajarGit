console.log("nomor 1");

function pattern(a){
for(i=0;i>=a;i++);;
}
console.log(pattern(3));

console.log("nomor 2");

function multiples(n,b){
    console.log(n,b);
    let c = " ";
    let lastnumber =b+1;
    if (lastnumber <= n ){
        multiples(lastnumber);
    }
    }
multiples(10,0);
