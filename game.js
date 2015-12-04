//question1
var oneEl = document.getElementById('one');
function quest1() {
    var count = 0;
    while (count != 1) {
      var question1 = prompt('Did you eat breakfast this morning?');
      if (question1.toLowerCase() === 'y' || question1.toUpperCase() === 'YES'){
      console.log('First answer is ' + question1);
      oneEl.textContent = ('Yay, I did have breakfast. I had some eggs and bakey!');
      oneEl.className = 'right';
      count++;
      }
      else if (question1.toLowerCase() === 'n' || question1.toUpperCase() === 'NO') {
      console.log('First answer is ' + question1);
      oneEl.textContent = ('No, I didn\'t have time to eat breakfast!');
      oneEl.className = 'wrong';
      count++;
      }
      else {
      alert('Please answer with yes or no');
      }
    }
}

quest1();

// question2

var two = document.getElementById('two');
function quest2() {
    var count = 0;
    while (count != 1) {
      var question2 = prompt('Did you hear that it will snow in a couple of days?');
      if (question2.toLowerCase() === 'y' || question2.toUpperCase() === 'YES'){
      // console.log('First answer is ' + question2);
      two.textContent = ('Yay, I love snow!');
      count++;
      two.className = 'right';
      }
      else if (question2.toLowerCase() === 'n' || question2.toUpperCase() === 'NO') {
      // console.log('First answer is ' + question2);
      two.textContent = ('Good, coz I hate snow!');
      count++;
      two.className = 'wrong';
      }
      else {
      alert('Please answer with yes or no');
      }
    }
}
quest2();

// question3
var three = document.getElementById('three');
function quest3() {
    var count = 0;
    while (count != 1) {
      var question3 = prompt('Do you dring enough water?');
      if (question3.toLowerCase() === 'y' || question3.toUpperCase() === 'YES') {
      // console.log('First answer is ' + question3);
      three.textContent = ('Yay, gotta stay hydrated!');
      count++;
      three.className = 'right';
      }
      else if (question3.toLowerCase() === 'n' || question3.toUpperCase() === 'NO') {
      // console.log('First answer is ' + question3);
      three.textContent = ('No, I like coffee more!');
      count++;
      three.className = 'wrong';
      }
      else {
      alert('Please answer with yes or no');
      }
    }
}
quest3();

// question5

var five = document.getElementById('five');
var fiveCorrect = document.getElementById('fiveCorrect');
function quest5() {
      var answer = 66;
      while (ques != answer) {
          var ques = prompt('What number am I thinking of? To give you a hint, it\' between 0-100.');
          // console.log('inside WHILE loop');
          if (ques < 66) {
          five.textContent = ('Try higher!');
          five.className = 'right';
          // console.log('inside if loop');
          }
          else if (ques > 66) {
          five.textContent = ('Try lower!');
          five.className = "wrong";
          // console.log('inside else if loop');
          }
      }
          fiveCorrect.textContent = ('Good job Mindreader');
          fiveCorrect.className = 'right';
  }
  quest5();




//question6

var six = document.getElementById('six');
var arr = ['cat','dog','mouse','rhino'];
var correct = false;
function quest6() {
  while (correct !== true) {
    var question6 = prompt('What animal Am I thinking of');
    question6 = question6.toLowerCase();
    for (var i = 0; i < arr.length; i++) {
      // console.log('inside for loop');
      if (question6 === arr[i]){
        // console.log("in if statement");
        correct = true;
        // console.log("this better not fire! it should have returned...");
      }
      else {
      }
    }
  }
  six.textContent = ("Your got it right!");
  six.className = 'right';
  }
quest6();
