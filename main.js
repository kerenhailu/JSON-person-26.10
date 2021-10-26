//!משימת כיתה
// 1.	צרו פונקצית פרומיס שממירה את ה JSON  לאובייקט ומחזירה מערך,
// במידה והוא תקין.
// אם המערך ריק היא מחזירה אובייקט של שגיאה.
// צרו פונקציה אסיכרונית שקוראת לפרומיס ומחזירה את התוצאה.

const Person = JSON.stringify([
  {
    _id: "605acace4ab389d8ed54c496",
    age: 35,
    name: {
      last: "Hensley",
      first: "Dollie",
    },
    email: "dollie.hensley@undefined.org",
    index: 0,
    phone: "+1 (904) 421-3160",
    picture: "http://placehold.it/32x32",
  },
  {
    _id: "605acaceed1f0e1cfa1eee67",
    age: 21,
    name: {
      last: "Hunt",
      first: "Dolores",
    },
    email: "dolores.hunt@undefined.com",
    index: 1,
    phone: "+1 (967) 432-2905",
    picture: "http://placehold.it/32x32",
  },
  {
    _id: "605acacefedd0fe77874d78f",
    age: 28,
    name: {
      last: "Pennington",
      first: "Milagros",
    },
    email: "milagros.pennington@undefined.net",
    index: 2,
    phone: "+1 (922) 492-2085",
    picture: "http://placehold.it/32x32",
  },
  {
    _id: "605acace6d3f84fc9b40849f",
    age: 32,
    name: {
      last: "Anderson",
      first: "Myrtle",
    },
    email: "myrtle.anderson@undefined.biz",
    index: 3,
    phone: "+1 (858) 404-3273",
    picture: "http://placehold.it/32x32",
  },
  {
    _id: "605acace06d24518b6419d23",
    age: 29,
    name: {
      last: "York",
      first: "Terry",
    },
    email: "terry.york@undefined.co.uk",
    index: 4,
    phone: "+1 (816) 492-3475",
    picture: "http://placehold.it/32x32",
  },
  {
    _id: "605acace46f0669738455d6b",
    age: 38,
    name: {
      last: "Bridges",
      first: "Effie",
    },
    email: "effie.bridges@undefined.info",
    index: 5,
    phone: "+1 (856) 423-3786",
    picture: "http://placehold.it/32x32",
  },
  {
    _id: "605acace5ab5217354268532",
    age: 26,
    name: {
      last: "Walter",
      first: "Krista",
    },
    email: "krista.walter@undefined.me",
    index: 6,
    phone: "+1 (849) 513-2888",
    picture: "http://placehold.it/32x32",
  },
  {
    _id: "605acaced68677a5dca08a9b",
    age: 20,
    name: {
      last: "Buchanan",
      first: "Gomez",
    },
    email: "gomez.buchanan@undefined.biz",
    index: 7,
    phone: "+1 (888) 494-2462",
    picture: "http://placehold.it/32x32",
  },
  {
    _id: "605acaceb7ece55cb38e546a",
    age: 20,
    name: {
      last: "Potter",
      first: "Caitlin",
    },
    email: "caitlin.potter@undefined.io",
    index: 8,
    phone: "+1 (801) 514-3055",
    picture: "http://placehold.it/32x32",
  },
  {
    _id: "605acace98de45687c4c6279",
    age: 26,
    name: {
      last: "Dillon",
      first: "Guzman",
    },
    email: "guzman.dillon@undefined.ca",
    index: 9,
    phone: "+1 (857) 407-2403",
    picture: "http://placehold.it/32x32",
  },
]);
// function promiseFunction() {
//     return new Promise((resolve,reject)=>{
//       let ObjectPerson = JSON.parse(Person)
//       ObjectPerson.length>0? resolve(ObjectPerson):reject({sms:"error"});
//     })
// }
// async function asyncFunction(){
//     try{
//         return await promiseFunction()
//     }
//         catch(err){
//             return err
//         }
// }
// asyncFunction().then((res)=>{console.log(res);})
// .catch((rej)=>{console.log(rej);})
// =======================================================================2
// 2.	צרו פונקצית פרומיס שמקבלת
// id של משתמש,
//  הפונקציה ממירה את ה JSON  למערך ומחזירה את המשתמש המתאים,
//  במידה והמשתמש קיים.
// אם המשתמש לא קיים, היא מחזירה אובייקט של שגיאה,
//  שמודיע שהמשתמש לא קיים.
// צרו פונקציה אסיכרונית שקוראת לפרומיס ומחזירה את המשתמש.

// function getId() {
//   return new Promise((resolve, reject) => {
//     IdOfUserBtn.onclick = () => {
//       let IdOfUser = IdUser.value;
//       let ObjectPerson = JSON.parse(Person);
//       for (const person of ObjectPerson) {
//         if (person._id == IdOfUser) {
//           resolve(person);
//         }
//       }
//       reject({ sms: "error" });
//     };
//   });
// }
// async function asyncGetId() {
//   try {
//     return await getId();
//   } catch (error) {
//     return error;
//   }
// }
// asyncGetId()
//   .then((res)=>{IdOfUserDiv.innerHTML +=printDetails(res)})
//   .catch((rej) => {
//     IdOfUserDiv.innerHTML += `${rej.sms}`;
//   });

// function Details(res) {
//   IdOfUserDiv.innerHTML += `
// id: ${res._id}<br>
// age: ${res.age}<br>
// name: ${res.name.first}<br>
// last name: ${res.name.last}<br>
// email: ${res.email}<br>
// index: ${res.index}<br>
// phone: ${res.phone}<br>
// picture: ${res.picture}<br>
// `;
// }
// function printDetails(res) {
//     for (const item of res) {
//         for (const key in item) {
//          IdOfUserDiv.innerHTML+= `${key[item]}`
//         }

//     }
// }

// =======================================================================3
// 3.	צרו פונקצית פרומיס שמקבלת אימייל של משתמש
// , הפונקציה ממירה את ה JSON  למערך ומחזירה את המשתמש המתאים,
//  במידה והמשתמש קיים.
// אם המשתמש לא קיים, היא מחזירה אובייקט של שגיאה, שמודיע שהמשתמש לא קיים.
// צרו פונקציה אסיכרונית שקוראת לפרומיס ומחזירה את המשתמש.
// function GetEmailFromUser() {
//     return new Promise((resolve,reject)=>{
//       let ObjectPerson = JSON.parse(Person)
//     let EmailFromUser="krista.walter@undefined.me"
//     for (const person of ObjectPerson) {
//         if(person.email==EmailFromUser){
//             resolve(person.name.first)
//         }
//     }
//     reject({sms:"no Exists"})
//     })
// }
// async function emailExistsOrNo() {
//     try{
//         return await GetEmailFromUser()
//     }
//     catch(error){
//         return error
//     }
// }
// emailExistsOrNo().then((res)=>{console.log(res);})
// .catch((rej)=>{console.log(rej);})
// =======================================================================4
// 4.	צרו פונקצית פרומיס שמחזירה מערך של משתמשים שהגיל שלהם גבוה ממספר שמתקבל מבחוץ
// , במידה וישנם משתמשים.
// אם אין משתמשים, היא מחזירה אובייקט של שגיאה, שמודיע שאין משתמשים.
// צרו פונקציה אסיכרונית שקוראת לפרומיס ומחזירה את התוצאות.
// function HiAge() {
//     return new Promise((resolve,reject)=>{
//         let ObjectPerson=JSON.parse(Person)
//         let NumOfUser=prompt("choose a age")
//         let theHiAge=[]
//         for (const person of ObjectPerson) {
//             if(person.age>NumOfUser){
//                 theHiAge.push(person)
//             }
//             resolve(theHiAge)
//         }
//         reject({sms:"error"})
//     })
// }
// async function asyncHiAge() {
//     try{
//         return await HiAge()
//     }
//     catch(err){
//         return err
//     }
// }
// asyncHiAge().then((res)=>{console.log(res);})
// .catch((rej)=>{console.log(rej);})
// =======================================================================5
// 5.	צרו פונקצית פרומיס שמחזירה מערך של משתמשים שהשם הפרטי שלהם זהה לשם שמתקבל מבחוץ, במידה וישנם משתמשים.
// אם אין משתמשים, היא מחזירה אובייקט של שגיאה, שמודיע שאין משתמשים.
// צרו פונקציה אסיכרונית שקוראת לפרומיס ומחזירה את התוצאות.
//!איך להדפיס את השלילי
// function getTheSameName() {
//   return new Promise((resolve, reject) => {
//     nameOfUserBtn.onclick = () => {
//       let ObjectPerson = JSON.parse(Person);
//       let NameFormUser = nameUser.value;
//       for (const person of ObjectPerson) {
//         if (person.name.first == NameFormUser) {
//           resolve(person);
//         }
//       }
//       reject({ sms: "no Exists" });
//     };
//   });
// }

// async function theSameNameOrNot() {
//   try {
//     showGif();
//     return await getTheSameName();
//   } catch (err) {
//     return err.sms;
//   }
// }
// theSameNameOrNot()
//   .then((res) => {
//     nameOfUserDiv.innerHTML += `id: ${res._id}<br>
//  age: ${res.age}<br>
//  name: ${res.name.first}<br>
//  last name: ${res.name.last}<br>
//  email: ${res.email}<br>
//  index: ${res.index}<br>
//  phone: ${res.phone}<br>
//  picture: ${res.picture}<br>
//  `;
//   })
//   .catch((rej) => {
//     nameOfUserDiv.innerHTML += `${rej.sms}`;
//   })
//   .finally(() => {
//     HaidGif();
//   });

// =======================================================================6
// 6.	צרו טופס שמאפשר למשתמש לבצע חיפוש על פי פרמטרים,
//  כלומר, תצוגה שמפעילה את הפונקציות למעלה ומציגה למסך את התוצאות.
choose.oninput = () => {
  HaidGif()
  let ObjectPerson = JSON.parse(Person);
  let nameOfUser = choose.value;
  for (const Person of ObjectPerson) {
    if (nameOfUser == Person.name.first) {
      div.innerHTML += `<h3>${nameOfUser}:</h3> 
      last name : ${Person.name.last } <br> 
id : ${Person._id} <br>
age : ${Person.age} <br>
email : ${Person.email} <br>
index : ${Person.index} <br>
phone : ${Person.phone} <br>
picture : ${Person.picture} <br>
`;
      console.log(Person);
    }
  }
};

// =======================================================================7
// 7.	הוסיפו setTimeout לפונקציות, וגיף טעינה של משתמשים.
function showGif() {
  div.innerHTML += `<img id="img" src="https://www.dolfijngo.com/wp-content/uploads/AAPL/loaders/Teddy%20Bear%20Loading.gif" alt="" width="100%" height="100%">`;
}
function HaidGif() {
  img.style.display = "none";
}
