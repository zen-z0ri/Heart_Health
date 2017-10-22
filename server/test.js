a =[];
a.forEach(x => {console.log(x)})
let today = new Date().toISOString();
console.log(today)
a = "21:33"

news = today.replace(/T.{5}/,"T"+a)

console.log(news)
