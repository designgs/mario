// // // let age = prompt("Введите ваш возвраст", "");
// // // if (age >= 18) {
// // //   alert("вам разрешен доступ");
// // // } else age > 18;
// // // alert("Вам запрещен доступ");
// // let userName = prompt("Ваше имя", "");
// // let age = prompt("Введите ваш возвраст", "");
// // if (age >= 18) {
// //   alert("Вам разрешен доступ");
// // } else {
// //   alert("Вам запрещен доступ");
// // }
// // alert("Вас зовут: " + userName + " Ваш возвораст:" + age);

// // let a = 20;
// // do {
// //   alert(a);
// //   a++;
// // } while (a <= 30);

// for (let a = 200; a <= 250; a++) {
//   alert(a);
// }
/*  Anti bot 0.0001 version =)  */
// let age = prompt("Введите:I'm not a robot", "");
// let ageKey = "I'm not a robot";
// if (age == ageKey) {
//   alert("Вам разрешен доступ");
// } else {
//   alert("Вам запрещен доступ");
//   window.close();
// }
// PerIfo
// let personAge = prompt("Введите ваш возвраст", "");
// let personMounth = personAge * 12;
// let personWeek = personAge * 52;
// let personHour = personAge * 8760;
// let personMinutes = personAge * 525600;
// let personSeconds = personAge * 31536000;

// alert(
//   "Вам Лет: " +
//     personAge +
//     " Месяцев: " +
//     personMounth +
//     " Недель:" +
//     personWeek +
//     " Часов: " +
//     personHour +
//     " Минут: " +
//     personMinutes +
//     " Секунд: " +
//     personSeconds
// );

// let userFrags = prompt("Сколько игроков вы убили?", "");
// switch (userFrags) {
//   case 1:
//     alert("Вы заработали 100 опыта ");
//     break;
//   case 3:
//     alert("Вы заработали 400 опыта ");
//     break;
//   case 5:
//     alert("Вы заработали 700 опыта ");
//     break;
//   case 10:
//     alert("Вы заработали 1000 опыта ");
//     break;
//   default:
//     alert("Вы заработали опыта: " + userFrags * 100);
// }

const jsHero = {
  defense: 1,
  attack: 2,
  coordinate: 0,
  expirience: 0,
  goRight: function () {
    this.coordinate++;
    alert("go to right");
  },
  goLeft: function () {
    this.coordinate--;
    alert("go to left");
  },
  heroAttack: function () {
    this.attack++;
    alert("attack enemies");
  },
  heroDefense: function () {
    alert("defense");
    this.defense++;
  },
};
