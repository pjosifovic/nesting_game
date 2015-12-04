//question1

    var count = 0;
    while (count != 1) {
    var question1 = prompt('Did you eat breakfast this morning?');
    if (question1.toLowerCase() === 'y' || question1.toUpperCase() === 'YES'){

    var count = 0;
    while (count != 1) {
    var question1 = prompt('Did you eat breakfast this morning?');
    if (question1 == 'yes' || question1 == 'Yes' || question1 =="Y" || question1 == 'y') {
      console.log('First answer is ' + question1);
      alert('You anwsered ' + question1);
      alert('Yay, I did have breakfast. I had some eggs and bakey!')
      count++;
    }
    else if (question1.toLowerCase() === 'n' || question1.toUpperCase() === 'NO') {
    else if (question1 == 'No' || question1 == 'no' || question1 == "N" || question3 == 'n') {
      console.log('First answer is ' + question1);
      alert('No, I didn\'t have time to eat breakfast!')
      count = count +1;
    }
    else {
      alert('Please answer with yes or no');
    }
    }

//question2

    var count = 0;
    while (count != 1) {
    var question2 = prompt('Did you hear that it will snow in a couple of days?');
    if (question2.toLowerCase() === 'y' || question2.toUpperCase() === 'YES'){
      alert('Please answer with yes/Yes/Y or No/no/N');
    }
    }

    var count = 0;
    while (count != 1) {
    var question2 = prompt('Did you hear that it will snow in a couple of days?');
    if (question2 == 'yes' || question2 == 'Yes' || question2 =="Y" || question1 == 'y') {
      console.log('First answer is ' + question2);
      alert('You anwsered ' + question2);
      alert('Yay, I love snow!');
      count++;
    }
    else if (question2.toLowerCase() === 'n' || question2.toUpperCase() === 'NO') {
    else if (question2 == 'No' || question2 == 'no' || question2 == "N" || question3 == 'n') {
      console.log('First answer is ' + question2);
      alert('You anwsered ' + question2);
      alert('Good, coz I hate snow!');
      count++;
    }
    else {
      alert('Please answer with yes or no');
    }
    }

//question3

    var count = 0;
    while (count != 1) {
    var question3 = prompt('Do you dring enough water?');
    if (question3.toLowerCase() === 'y' || question3.toUpperCase() === 'YES') {
      alert('Please answer with yes/Yes/Y or No/no/N');
    }
    }

    var count = 0;
    while (count != 1) {
    var question3 = prompt('Do you dring enough water?');
    if (question3 == 'yes' || question3 == 'Yes' || question3 =="Y" || question1 == 'y') {
      console.log('First answer is ' + question3);
      alert('You anwsered ' + question3);
      alert('Yay, gotta stay hydrated!');
      count++;
    }
    else if (question3.toLowerCase() === 'n' || question3.toUpperCase() === 'NO') {
    else if (question3 == 'No' || question3 == 'no' || question3 == "N" || question3 == 'n') {
      console.log('First answer is ' + question3);
      alert('You anwsered ' + question3);
      alert('No, I like coffee more!');
      count++;
      }
    else {
      alert('Please answer with yes or no');
    }
    }



//question5

      var answer = 66;
      while (ques != answer) {
      var ques = prompt('What number am I thinking of? To give you a hint, it\' between 0-100.');
          if (ques < 66) {
          alert('Try higher!');
          }
          else if (ques > 66) {
          alert('Try lower!');
          }
      }
      alert('Good job Mindreader');


//question6

var arr = ['cat','dog','mouse','rhino'];
var correct = false;
while (correct !== true) {
  var question6 = prompt('What animal Am I thinking of');
  question6 = question6.toLowerCase();
for (var i = 0; i < arr.length; i++) {
      // console.log('inside for loop');
      if (question6 === arr[i]){
        // console.log("in if statement");
        correct = true;
        // console.log("this better not fire! it should have returned...");
      } else {
      }
}
}
alert("Your got it right!");
      alert('Please answer with yes/Yes/Y or No/no/N!');
    }
    }
