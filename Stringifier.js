//JSON http://www.JSON.org/js.html
//stringfier http://www.ecma-international.org/ecma-262/5.1/#sec-15.12.3
// Todo
// 1.  handle escaped quotes
// 


var person = {
    name: "Anwar asseef",
    location: {
        city: {
            name: "Thrissur",
            population: 167674
        },
        state: {
            name: "Kerala",
            abbreviation: "KL",
            population: 6403000
        }
    },
    DOB: "21-04-1992",
};

var arr = [1, 2, 4]


function type(obj) {
  return Object.prototype.toString.call(obj).match(/[A-Z]\w*/)[0];
}
function myStringifier(obj) {
  switch (type(obj)) {
     default          :  return {}
     case "Function"  :  return null
     case "Undefined" :  return null
     case "Null"      :  return null
     case "Math"      :  return null
     case "Number"    :  return '"' + obj + '"'
     case "String"    :  return '"' + obj + '"'
     case "Array":
      var result = obj.map(function(a) {return myStringifier(a)})
      return '[' + result.join(',') + ']'
     case "Object":
      var output = []
      Object.keys(obj).forEach(function(key) {
       var val = myStringifier(obj[key])
       if (val!== null) {
         output.push('"'+ key + '":' + val)
       };
      })
      return "{" + output.join(',') + "}"
      break;
    }

}

console.log(myStringifier(arr))
console.log(type(myStringifier(arr)))
console.log(type(myStringifier(12)))
console.log(myStringifier("Hello"))
console.log(type(myStringifier(Date())))

