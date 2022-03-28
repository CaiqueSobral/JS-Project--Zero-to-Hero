//////////////////////////////////////////////////////////
////////////////// Coding Challenge #3 //////////////////
/*

There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
Your tasks:

1. Calculate the average score for each team, using the test data below

2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score)

3. Bonus 1: Include a requirement for a minimum score of 100. With this rule a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks

4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
both teams have the same score and both have a score greater or equal 100 
points. Otherwise, no team wins the trophy

Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😉 
*/

const dolpihnsScore1 = 97,
  dolpihnsScore2 = 112,
  dolpihnsScore3 = 101,
  dolphinsAvarage = (
    (dolpihnsScore1 + dolpihnsScore2 + dolpihnsScore3) /
    3
  ).toFixed(2),
  dolphinsMinimum = !(dolphinsAvarage <= 100);

const koalasScore1 = 109,
  koalasScore2 = 95,
  koalasScore3 = 106,
  koalasAvarage = ((koalasScore1 + koalasScore2 + koalasScore3) / 3).toFixed(2),
  koalasMinimum = !(koalasAvarage <= 100);

if (!dolphinsMinimum && !koalasMinimum) {
  console.log(`Dolphins avarage score is ${dolphinsAvarage}.
  Koalas avarage score is ${koalasAvarage}.
  No one wins the trophy!`);
} else if (dolphinsMinimum && !koalasMinimum) {
  console.log(`Dolphins avarage score is ${dolphinsAvarage}.
  Koalas avarage score is ${koalasAvarage}.
  The Dolphins wins the trophy!`);
} else if (!dolphinsMinimum && koalasMinimum) {
  console.log(`Dolphins avarage score is ${dolphinsAvarage}.
  Koalas avarage score is ${koalasAvarage}.
  The Koalas wins the trophy!`);
} else if (dolphinsAvarage > koalasAvarage) {
  console.log(`Dolphins avarage score is ${dolphinsAvarage}.
  Koalas avarage score is ${koalasAvarage}.
  The Dolphins wins the trophy!`);
} else if (dolphinsAvarage < koalasAvarage) {
  console.log(`Dolphins avarage score is ${dolphinsAvarage}.
  Koalas avarage score is ${koalasAvarage}.
  The Koalas wins the trophy!`);
} else {
  console.log(`Dolphins avarage score is ${dolphinsAvarage}.
  Koalas avarage score is ${koalasAvarage}.
  I's a Draw!`);
}
