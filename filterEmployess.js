const JSONdata = `[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`, 

  function solution(string,criteria){
      let data;
      let propName,propValue;
      if (criteria !== 'all'){
        [propName,propValue] = criteria.split("-");
      }
      try {
      data = JSON.parse(string);
      } catch {
          data = [];
      }
data.filter(function (i){
    return propName ? i[propName] === propValue : true;
}).forEach((item,i) => console.log(`${i}. ${item.first_name} ${item.last_name} - ${item.email}`))
}

const r1 = solution(JSONdata,'all');
const r2 = solution(JSONdata,'gender-Female');

console.log(r1);
console.log(r2);