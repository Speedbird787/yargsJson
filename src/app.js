let fs = require('fs');
const { JSON } = require('stream/consumers');

exports.add =(title,actor)=> {
    let Movie= {
        title: title,
        actor: actor
    }
  let str=  JSON.stringify(Movie)

    fs.writeFileSync ('./netflix.json',str)
};
// exports.list = () => {
//     let list = fs.readFileSync("./netflix.json")
//     let listParse = JSON.parse(list)
//     console.log(listParse)

//efficent method
exports.list =() => {

    let list=JSON.parse(fs.readFileSync('./netflix.json'))
    console.log(list)
}