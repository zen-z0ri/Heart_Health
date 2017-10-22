a =[];
a.forEach(x => {console.log(x)})
let today = new Date().toISOString();
console.log(today)
a = "21:33"

news = today.replace(/T.{5}/,"T"+a)

console.log(news)

this.score = [4, 4, 4, 4 ,4];
for (let i in this.score){
  this.score[i] = this.score[i]+ Math.round(Math.random() * 6);
}

console.log(this.score)
