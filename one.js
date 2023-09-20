let a = +prompt("a sonni kiriting"),
    b = +prompt("b sonni kiriting"),
    c = +prompt("c sonni kiriting");

if (a > 0 && b > 0 && c > 0) {
    console.log(a , b , c);
}else if(a <= 0 && b > 0 && c > 0){
    console.log(0);
}else if(a > 0 && b <= 0 && c > 0){
    console.log(0);
}else if( a > 0 && b > 0 && c <= 0){
    console.log(0);
}