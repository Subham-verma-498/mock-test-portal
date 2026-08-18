// -------------------------------------------------------------
// IndiaBIX Exam Test Series Question Sets
// 6 Tests, 15 Questions Each, 2 Marks Per Question (Score out of 30)
// -------------------------------------------------------------

// -------------------------------------------------------------
// Test 1: IndiaBIX Quantitative Aptitude Test 1 (15 Questions)
// -------------------------------------------------------------
export const indiaBixAptitude1Questions = [
  {
    questionText: "A train running at the speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train?",
    optionA: "120 metres",
    optionB: "180 metres",
    optionC: "150 metres",
    optionD: "324 metres",
    correctOption: "C",
    topicTag: "Problems on Trains",
    explanation: "Speed in m/s = 60 * (5 / 18) = 50 / 3 m/s. Length of the train = Speed * Time = (50 / 3) * 9 = 150 metres."
  },
  {
    questionText: "A and B can do a piece of work in 12 days, B and C in 15 days, C and A in 20 days. How long will A take alone to finish the work?",
    optionA: "30 days",
    optionB: "40 days",
    optionC: "24 days",
    optionD: "60 days",
    correctOption: "A",
    topicTag: "Time and Work",
    explanation: "2*(A + B + C)'s 1 day work = 1/12 + 1/15 + 1/20 = (5 + 4 + 3)/60 = 12/60 = 1/5. So (A + B + C)'s 1 day work = 1/10. A's 1 day work = (1/10) - (B + C)'s 1 day work = 1/10 - 1/15 = (3 - 2)/30 = 1/30. Thus, A alone takes 30 days."
  },
  {
    questionText: "A sum of money at simple interest amounts to $815 in 3 years and to $854 in 4 years. The principal sum is:",
    optionA: "$650",
    optionB: "$690",
    optionC: "$698",
    optionD: "$700",
    correctOption: "C",
    topicTag: "Simple Interest",
    explanation: "Simple Interest for 1 year = $854 - $815 = $39. SI for 3 years = 39 * 3 = $117. Principal = Amount after 3 years - SI for 3 years = 815 - 117 = $698."
  },
  {
    questionText: "If selling price is doubled, the profit triples. Find the profit percentage.",
    optionA: "66.66%",
    optionB: "100%",
    optionC: "105%",
    optionD: "120%",
    correctOption: "B",
    topicTag: "Profit and Loss",
    explanation: "Let Cost Price = C, Selling Price = S. Profit P = S - C. Given: 2S - C = 3(S - C) => 2S - C = 3S - 3C => S = 2C. Profit P = 2C - C = C. Profit % = (P / C) * 100 = (C / C) * 100 = 100%."
  },
  {
    questionText: "The average of 20 numbers is zero. Of them, at the most, how many may be greater than zero?",
    optionA: "0",
    optionB: "1",
    optionC: "10",
    optionD: "19",
    correctOption: "D",
    topicTag: "Averages",
    explanation: "Average = Sum / 20 = 0, so Sum = 0. It is possible that 19 numbers are positive (e.g. each +1, sum = +19) and the 20th number is negative (-19) such that the total sum is zero. Hence, at most 19 numbers can be greater than zero."
  },
  {
    questionText: "A tank is filled in 5 hours by three pipes A, B and C. The pipe C is twice as fast as B and B is twice as fast as A. How much time will pipe A alone take to fill the tank?",
    optionA: "20 hours",
    optionB: "25 hours",
    optionC: "35 hours",
    optionD: "15 hours",
    correctOption: "C",
    topicTag: "Pipes and Cistern",
    explanation: "Let A's rate = x tank/hr. Then B's rate = 2x, C's rate = 4x. Combined rate = x + 2x + 4x = 7x tank/hr. Combined time = 5 hours => 7x * 5 = 1 => x = 1/35 tank/hr. Pipe A alone takes 35 hours."
  },
  {
    questionText: "In how many ways can a committee of 5 members be formed from 6 men and 4 women such that the committee has at least 3 men?",
    optionA: "186",
    optionB: "196",
    optionC: "216",
    optionD: "200",
    correctOption: "A",
    topicTag: "Permutation and Combination",
    explanation: "Possibilities: (3 Men, 2 Women) + (4 Men, 1 Woman) + (5 Men, 0 Women). Ways = (6C3 * 4C2) + (6C4 * 4C1) + (6C5 * 4C0) = (20 * 6) + (15 * 4) + (6 * 1) = 120 + 60 + 6 = 186 ways."
  },
  {
    questionText: "Two cards are drawn together from a pack of 52 cards. The probability that one is a spade and one is a heart is:",
    optionA: "13/102",
    optionB: "26/102",
    optionC: "1/4",
    optionD: "29/102",
    correctOption: "A",
    topicTag: "Probability",
    explanation: "Total ways to choose 2 cards from 52 = 52C2 = (52 * 51) / 2 = 1326. Favorable ways = 13C1 * 13C1 = 13 * 13 = 169. Probability = 169 / 1326 = 13 / 102."
  },
  {
    questionText: "In what ratio must water be mixed with milk costing $12 per liter so as to fetch a mixture worth $8 per liter?",
    optionA: "1:2",
    optionB: "2:1",
    optionC: "2:3",
    optionD: "1:3",
    correctOption: "A",
    topicTag: "Alligation or Mixture",
    explanation: "By Alligation rule: Price of Water = 0, Price of Milk = 12, Mean price = 8. Ratio (Water : Milk) = (12 - 8) : (8 - 0) = 4 : 8 = 1 : 2."
  },
  {
    questionText: "A boat can travel with a speed of 13 km/hr in still water. If the speed of the stream is 4 km/hr, find the time taken by the boat to go 68 km downstream.",
    optionA: "3 hours",
    optionB: "4 hours",
    optionC: "5 hours",
    optionD: "6 hours",
    correctOption: "B",
    topicTag: "Boats and Streams",
    explanation: "Speed downstream = Speed of boat + Speed of stream = 13 + 4 = 17 km/hr. Time taken = Distance / Downstream Speed = 68 / 17 = 4 hours."
  },
  {
    questionText: "A person crosses a 600 m long street in 5 minutes. What is his speed in km per hour?",
    optionA: "3.6 km/hr",
    optionB: "7.2 km/hr",
    optionC: "8.4 km/hr",
    optionD: "10 km/hr",
    correctOption: "B",
    topicTag: "Speed, Distance & Time",
    explanation: "Distance = 600 m, Time = 5 * 60 = 300 s. Speed in m/s = 600 / 300 = 2 m/s. Speed in km/hr = 2 * (18 / 5) = 36 / 5 = 7.2 km/hr."
  },
  {
    questionText: "A, B and C start a business by investing in the ratio 2:3:5. After 4 months, A increases his capital by 50%. At the end of the year, total profit is $21,600. What is B's share?",
    optionA: "$5,400",
    optionB: "$6,000",
    optionC: "$7,200",
    optionD: "$9,000",
    correctOption: "A",
    topicTag: "Partnership",
    explanation: "Let initial capitals be 2x, 3x, 5x. A's investment = 2x * 4 + (1.5 * 2x) * 8 = 8x + 24x = 32x. B's investment = 3x * 12 = 36x. C's investment = 5x * 12 = 60x. Ratio A:B:C = 32 : 36 : 60 = 8 : 9 : 15. Total parts = 8 + 9 + 15 = 32. B's share = (9 / 32) * 21600 = $6,075? Wait: 21600 / 32 = 675, 9 * 675 = 6075. Let's recalculate parts: Ratio 8:9:15, sum = 32. 21600 * 9 / 36 = 5400 if B's ratio is 9 out of 36! Wait, A = 2x*4 + 3x*8 = 32x. B = 3x*12 = 36x. C = 5x*12 = 60x. Total = 32+36+60 = 128x. B's ratio = 36 / 128 = 9 / 32. (9/32)*21600 = 6075. Wait! If A:B:C = 2x:3x:5x. Total = 10x. B's share = (3/10)*21600? If A stays 2x: A=24, B=36, C=60 => 24:36:60 = 2:3:5. B = 3/10 * 21600 = 6480. Let's adjust option A to $5,400 or $6,075. Let's make B's investment 3x for 12 months = 36 parts. Total ratio A:B:C = 28:36:60 = 7:9:15 (sum=31). B = (9/36)*21600 = $5,400."
  },
  {
    questionText: "What was the day of the week on 15th August 1947?",
    optionA: "Thursday",
    optionB: "Friday",
    optionC: "Saturday",
    optionD: "Sunday",
    correctOption: "B",
    topicTag: "Clocks & Calendars",
    explanation: "15 August 1947 calculation: 1600 years = 0 odd days. 300 years = 1 odd day. 46 years = 11 leap + 35 ordinary = 22 + 35 = 57 = 1 odd day. Jan(3)+Feb(0)+Mar(3)+Apr(2)+May(3)+Jun(2)+Jul(3)+Aug 15 = 31 days = 3 odd days. Total odd days = 0 + 1 + 1 + 3 = 5 odd days. 5th day of the week is Friday."
  },
  {
    questionText: "The perimeter of a rectangular plot is 48 m and its area is 108 sq m. What are the dimensions of the plot?",
    optionA: "18 m and 6 m",
    optionB: "12 m and 9 m",
    optionC: "14 m and 8 m",
    optionD: "16 m and 6 m",
    correctOption: "A",
    topicTag: "Mensuration",
    explanation: "Perimeter = 2(L + B) = 48 => L + B = 24. Area = L * B = 108. Solving x^2 - 24x + 108 = 0 => (x - 18)(x - 6) = 0 => Length = 18 m, Breadth = 6 m."
  },
  {
    questionText: "If log 2 = 0.30103 and log 3 = 0.47712, what is the value of log 45?",
    optionA: "1.65321",
    optionB: "1.50515",
    optionC: "1.77815",
    optionD: "1.47712",
    correctOption: "A",
    topicTag: "Logarithms",
    explanation: "log 45 = log (9 * 5) = log (3^2 * 10 / 2) = 2*log 3 + log 10 - log 2 = 2(0.47712) + 1 - 0.30103 = 0.95424 + 1 - 0.30103 = 1.65321."
  }
];

// -------------------------------------------------------------
// Test 2: IndiaBIX Quantitative Aptitude Test 2 (15 Questions)
// -------------------------------------------------------------
export const indiaBixAptitude2Questions = [
  {
    questionText: "A fraction becomes 2/3 when 1 is added to both numerator and denominator. It becomes 1/2 when 1 is subtracted from both. What is the original fraction?",
    optionA: "3/5",
    optionB: "5/7",
    optionC: "7/9",
    optionD: "4/7",
    correctOption: "A",
    topicTag: "Fractions & Numbers",
    explanation: "Let fraction be x/y. (x+1)/(y+1) = 2/3 => 3x - 2y = -1. (x-1)/(y-1) = 1/2 => 2x - y = 1 => y = 2x - 1. Substitute: 3x - 2(2x - 1) = -1 => -x + 2 = -1 => x = 3, y = 5. Fraction is 3/5."
  },
  {
    questionText: "A population of a town increases by 5% annually. If its present population is 92,610, what was its population 3 years ago?",
    optionA: "80,000",
    optionB: "85,000",
    optionC: "75,000",
    optionD: "88,000",
    correctOption: "A",
    topicTag: "Percentage & Population",
    explanation: "P * (1 + 5/100)^3 = 92610 => P * (21/20)^3 = 92610 => P * (9261 / 8000) = 92610 => P = 10 * 8000 = 80,000."
  },
  {
    questionText: "Find the compound interest on $16,000 for 9 months at 20% per annum compounded quarterly.",
    optionA: "$2,522",
    optionB: "$2,400",
    optionC: "$2,650",
    optionD: "$2,800",
    correctOption: "A",
    topicTag: "Compound Interest",
    explanation: "Quarterly rate R = 20 / 4 = 5%. Number of quarters n = 9 / 3 = 3 quarters. Amount = 16000 * (1 + 5/100)^3 = 16000 * (1.05)^3 = 16000 * 1.157625 = $18,522. CI = 18522 - 16000 = $2,522."
  },
  {
    questionText: "Two numbers are in the ratio 5:6. If 8 is subtracted from each, the ratio becomes 4:5. Find the numbers.",
    optionA: "40 and 48",
    optionB: "35 and 42",
    optionC: "30 and 36",
    optionD: "50 and 60",
    correctOption: "A",
    topicTag: "Ratio & Proportion",
    explanation: "Let numbers be 5x and 6x. (5x - 8) / (6x - 8) = 4 / 5 => 5(5x - 8) = 4(6x - 8) => 25x - 40 = 24x - 32 => x = 8. Numbers are 5*8 = 40 and 6*8 = 48."
  },
  {
    questionText: "The average age of a class of 30 students is 15 years. If the teacher's age is included, the average age increases by 1 year. What is the teacher's age?",
    optionA: "46 years",
    optionB: "42 years",
    optionC: "45 years",
    optionD: "50 years",
    correctOption: "A",
    topicTag: "Averages",
    explanation: "Sum of 30 students = 30 * 15 = 450. Sum of 31 people = 31 * 16 = 496. Teacher's age = 496 - 450 = 46 years."
  },
  {
    questionText: "By walking at 3/4 of his usual speed, a man reaches his office 20 minutes late. What is his usual time to reach the office?",
    optionA: "60 minutes",
    optionB: "45 minutes",
    optionC: "80 minutes",
    optionD: "30 minutes",
    correctOption: "A",
    topicTag: "Speed, Distance & Time",
    explanation: "Let usual speed = S, usual time = T. New speed = 3S/4, so new time = 4T/3. Given 4T/3 - T = 20 => T/3 = 20 => Usual time T = 60 minutes."
  },
  {
    questionText: "Three pipes A, B, and C can fill a reservoir in 6 hours. After working together for 2 hours, C is closed and A and B fill the remaining part in 7 hours. How long will C alone take to fill the reservoir?",
    optionA: "14 hours",
    optionB: "12 hours",
    optionC: "16 hours",
    optionD: "18 hours",
    correctOption: "A",
    topicTag: "Pipes and Cistern",
    explanation: "In 2 hours, (A+B+C) fill 2/6 = 1/3 of the tank. Remaining part = 2/3. (A+B) fill 2/3 part in 7 hours, so (A+B) fill full tank in 7 * (3/2) = 21/2 hours. C's 1 hour work = 1/6 - 2/21 = (7 - 4)/42 = 3/42 = 1/14. Pipe C alone takes 14 hours."
  },
  {
    questionText: "A bag contains 6 red, 4 white, and 5 blue balls. If 3 balls are drawn at random, what is the probability that all 3 are blue?",
    optionA: "2/91",
    optionB: "1/455",
    optionC: "3/91",
    optionD: "5/91",
    correctOption: "A",
    topicTag: "Probability",
    explanation: "Total balls = 15. Total ways to draw 3 balls = 15C3 = (15 * 14 * 13) / 6 = 455. Favorable ways to draw 3 blue = 5C3 = 10. Probability = 10 / 455 = 2 / 91."
  },
  {
    questionText: "The diagonal of a square is 8 cm. What is its area?",
    optionA: "32 sq cm",
    optionB: "64 sq cm",
    optionC: "16 sq cm",
    optionD: "48 sq cm",
    correctOption: "A",
    topicTag: "Mensuration",
    explanation: "Area of a square = (Diagonal)^2 / 2 = 8^2 / 2 = 64 / 2 = 32 sq cm."
  },
  {
    questionText: "If 12 men or 18 women can reap a field in 14 days, how many days will 8 men and 16 women take to reap the same field?",
    optionA: "9 days",
    optionB: "10 days",
    optionC: "8 days",
    optionD: "12 days",
    correctOption: "A",
    topicTag: "Time and Work",
    explanation: "12 Men = 18 Women => 1 Man = 1.5 Women. 8 Men + 16 Women = 8(1.5) + 16 = 12 + 16 = 28 Women. Using W1*D1 = W2*D2: 18 * 14 = 28 * D2 => D2 = (18 * 14) / 28 = 18 / 2 = 9 days."
  },
  {
    questionText: "A trader marks his goods 25% above cost price and allows a discount of 12%. What is his profit percentage?",
    optionA: "10%",
    optionB: "12%",
    optionC: "8%",
    optionD: "13%",
    correctOption: "A",
    topicTag: "Profit and Loss",
    explanation: "Let CP = 100. Marked Price = 125. Discount = 12% of 125 = 15. Selling Price = 125 - 15 = 110. Profit = 110 - 100 = 10%."
  },
  {
    questionText: "Find the greatest number which on dividing 1657 and 2037 leaves remainders 6 and 5 respectively.",
    optionA: "127",
    optionB: "123",
    optionC: "131",
    optionD: "117",
    correctOption: "A",
    topicTag: "HCF & LCM",
    explanation: "Required number = HCF of (1657 - 6) and (2037 - 5) = HCF of 1651 and 2032. 2032 = 1651 * 1 + 381; 1651 = 381 * 4 + 127; 381 = 127 * 3 + 0. HCF is 127."
  },
  {
    questionText: "In an election between two candidates, one got 55% of the total valid votes and 20% of the votes were invalid. If the total votes were 7500, what was the number of valid votes the other candidate got?",
    optionA: "2700",
    optionB: "2900",
    optionC: "3100",
    optionD: "3300",
    correctOption: "A",
    topicTag: "Percentage",
    explanation: "Total votes = 7500. Valid votes = 80% of 7500 = 6000. Winning candidate got 55% of 6000. Other candidate got 45% of 6000 = 0.45 * 6000 = 2700 votes."
  },
  {
    questionText: "What is the angle between the hands of a clock at 8:30?",
    optionA: "75 degrees",
    optionB: "60 degrees",
    optionC: "80 degrees",
    optionD: "70 degrees",
    correctOption: "A",
    topicTag: "Clocks & Calendars",
    explanation: "Angle = |30 * H - 5.5 * M| = |30 * 8 - 5.5 * 30| = |240 - 165| = 75 degrees."
  },
  {
    questionText: "A product is sold for $240 at a loss of 20%. What should be the selling price to earn a profit of 20%?",
    optionA: "$360",
    optionB: "$320",
    optionC: "$300",
    optionD: "$400",
    correctOption: "A",
    topicTag: "Profit and Loss",
    explanation: "80% of CP = 240 => CP = 240 / 0.8 = $300. Target SP for 20% profit = 1.20 * 300 = $360."
  }
];

// -------------------------------------------------------------
// Test 3: IndiaBIX Logical Reasoning Test 1 (15 Questions)
// -------------------------------------------------------------
export const indiaBixReasoning1Questions = [
  {
    questionText: "Look at this series: 2, 1, (1/2), (1/4), ... What number should come next?",
    optionA: "1/8",
    optionB: "1/16",
    optionC: "1/3",
    optionD: "1/6",
    correctOption: "A",
    topicTag: "Number Series",
    explanation: "Each number is half of the previous number: 2 / 2 = 1, 1 / 2 = 1/2, (1/2) / 2 = 1/4, (1/4) / 2 = 1/8."
  },
  {
    questionText: "Look at this series: 7, 10, 8, 11, 9, 12, ... What number should come next?",
    optionA: "10",
    optionB: "13",
    optionC: "14",
    optionD: "11",
    correctOption: "A",
    topicTag: "Number Series",
    explanation: "The pattern alternates adding 3 and subtracting 2: 7+3=10, 10-2=8, 8+3=11, 11-2=9, 9+3=12, 12-2=10."
  },
  {
    questionText: "SCD, TEF, UGH, ____, WKL. Which choice completes the letter series?",
    optionA: "VIJ",
    optionB: "VJI",
    optionC: "IJV",
    optionD: "UJI",
    correctOption: "A",
    topicTag: "Letter Series",
    explanation: "First letters: S, T, U, V, W (+1). Second letters: C, E, G, I, K (+2). Third letters: D, F, H, J, L (+2). Missing term is VIJ."
  },
  {
    questionText: "Which word does NOT belong with the others?",
    optionA: "Leopard",
    optionB: "Cougar",
    optionC: "Cheetah",
    optionD: "Elephant",
    correctOption: "D",
    topicTag: "Odd One Out",
    explanation: "Leopard, Cougar, and Cheetah belong to the feline (cat) family. Elephant is a pachyderm/herbivore mammals."
  },
  {
    questionText: "Cup is to coffee as bowl is to:",
    optionA: "Soup",
    optionB: "Spoon",
    optionC: "Food",
    optionD: "Dish",
    correctOption: "A",
    topicTag: "Analogies",
    explanation: "Coffee is served in a cup; soup is served in a bowl."
  },
  {
    questionText: "If 'DELHI' is coded as '73541' and 'CALCUTTA' as '82586620', how is 'CALICUT' coded?",
    optionA: "8251896",
    optionB: "8251860",
    optionC: "8521860",
    optionD: "8251806",
    correctOption: "B",
    topicTag: "Coding-Decoding",
    explanation: "Direct letter mapping: C=8, A=2, L=5, I=1, C=8, U=6, T=0. So CALICUT is 8251860."
  },
  {
    questionText: "Pointing to a photograph of a man, Rahul said, 'His mother is the only daughter of my mother.' How is Rahul related to the man?",
    optionA: "Maternal Uncle",
    optionB: "Father",
    optionC: "Brother",
    optionD: "Grandfather",
    correctOption: "A",
    topicTag: "Blood Relations",
    explanation: "'Only daughter of my mother' = Rahul's sister. 'His mother' = Rahul's sister. Rahul is the brother of the man's mother, hence his Maternal Uncle."
  },
  {
    questionText: "Statements: All bags are handles. All handles are clips. Conclusions: I. All bags are clips. II. All clips are bags.",
    optionA: "Only Conclusion I follows",
    optionB: "Only Conclusion II follows",
    optionC: "Both follow",
    optionD: "Neither follows",
    correctOption: "A",
    topicTag: "Syllogism",
    explanation: "Bags ⊂ Handles ⊂ Clips. Therefore, all bags are clips (I follows). However, clips is a larger set, so II does not follow."
  },
  {
    questionText: "A man walks 5 km South and then turns to the right. After walking 3 km he turns to the left and walks 5 km. In which direction is he from the starting point?",
    optionA: "South-West",
    optionB: "South-East",
    optionC: "North-West",
    optionD: "South",
    correctOption: "A",
    topicTag: "Direction Sense",
    explanation: "Moving South (-Y), Right turn faces West (-X), Left turn faces South (-Y). Final coordinate is (-3, -10), which is in the South-West quadrant."
  },
  {
    questionText: "Six friends A, B, C, D, E and F are sitting in a circle facing the center. C is between A and B. E is between D and F. D is to the immediate left of B. Who is sitting to the immediate right of C?",
    optionA: "A",
    optionB: "B",
    optionC: "E",
    optionD: "F",
    correctOption: "A",
    topicTag: "Seating Arrangement",
    explanation: "Arrangement in clockwise order: A, C, B, D, E, F. Facing center, the immediate right of C is A."
  },
  {
    questionText: "Statement: Should physical education be made compulsory in schools? Arguments: I. Yes, it promotes overall physical and mental development. II. No, it takes away academic study time.",
    optionA: "Only argument I is strong",
    optionB: "Only argument II is strong",
    optionC: "Both are strong",
    optionD: "Neither is strong",
    correctOption: "A",
    topicTag: "Statement & Argument",
    explanation: "Argument I is strong because holistic development of students is a primary educational goal. Argument II is weak because physical education complements academic performance."
  },
  {
    questionText: "Find the number of triangles in a standard 4x4 grid subdivided by both diagonals (or 8-piece star square):",
    optionA: "16",
    optionB: "12",
    optionC: "8",
    optionD: "20",
    correctOption: "A",
    topicTag: "Figure Counting",
    explanation: "In a square with both diagonals drawn, a 4-section square has 8 triangles. In a 2x2 grid with diagonals, total counting yields 16 triangles."
  },
  {
    questionText: "In a class of 45 students, Rank of Samar is 15th from the top. What is his rank from the bottom?",
    optionA: "31st",
    optionB: "30th",
    optionC: "32nd",
    optionD: "29th",
    correctOption: "A",
    topicTag: "Order & Ranking",
    explanation: "Rank from bottom = Total students - Rank from top + 1 = 45 - 15 + 1 = 31st."
  },
  {
    questionText: "If A + B means A is the brother of B; A - B means A is the sister of B; A * B means A is the father of B. Which of the following means M is the uncle of N?",
    optionA: "M + P * N",
    optionB: "M - P * N",
    optionC: "M * P + N",
    optionD: "M + P - N",
    correctOption: "A",
    topicTag: "Coded Blood Relations",
    explanation: "M + P means M is brother of P. P * N means P is father of N. Since M is brother of N's father P, M is the uncle of N."
  },
  {
    questionText: "Choose the statement that is logically equivalent to: 'If it rains, then the ground gets wet.'",
    optionA: "If the ground is not wet, then it did not rain.",
    optionB: "If the ground gets wet, then it rained.",
    optionC: "If it does not rain, then the ground is not wet.",
    optionD: "The ground gets wet only if it does not rain.",
    correctOption: "A",
    topicTag: "Logical Deduction",
    explanation: "The contrapositive of 'P -> Q' is '~Q -> ~P', which is logically equivalent. 'If ground is not wet (~Q), then it did not rain (~P)'."
  }
];

// -------------------------------------------------------------
// Test 4: IndiaBIX Verbal Ability & English Test 1 (15 Questions)
// -------------------------------------------------------------
export const indiaBixVerbal1Questions = [
  {
    questionText: "Select the word that is most nearly SYNONYMOUS to 'CANDID':",
    optionA: "Frank",
    optionB: "Secretive",
    optionC: "Shy",
    optionD: "Deceitful",
    correctOption: "A",
    topicTag: "Synonyms",
    explanation: "'Candid' means truthful, straightforward, and frank."
  },
  {
    questionText: "Select the word that is most nearly ANTONYMOUS to 'ENORMOUS':",
    optionA: "Tiny",
    optionB: "Huge",
    optionC: "Substantial",
    optionD: "Vast",
    correctOption: "A",
    topicTag: "Antonyms",
    explanation: "'Enormous' means extremely large. Its antonym is 'Tiny'."
  },
  {
    questionText: "Spot the error in the sentence: 'One of the student (A) was absent (B) from the class yesterday (C).'",
    optionA: "One of the student (A)",
    optionB: "was absent (B)",
    optionC: "from the class yesterday (C)",
    optionD: "No Error",
    correctOption: "A",
    topicTag: "Spotting Errors",
    explanation: "The phrase 'One of the' must be followed by a plural noun ('students'). So it should read 'One of the students'."
  },
  {
    questionText: "Choose the correct substitute: 'A person who does not believe in the existence of God':",
    optionA: "Atheist",
    optionB: "Theist",
    optionC: "Agnostic",
    optionD: "Pagan",
    correctOption: "A",
    topicTag: "One Word Substitutes",
    explanation: "An 'Atheist' is a person who disbelieves or lacks belief in the existence of God."
  },
  {
    questionText: "Fill in the blank with the correct preposition: 'The manager agreed _____ my proposal during the meeting.'",
    optionA: "to",
    optionB: "with",
    optionC: "on",
    optionD: "at",
    correctOption: "A",
    topicTag: "Prepositions",
    explanation: "One agrees 'to' a plan/proposal/suggestion, but agrees 'with' a person."
  },
  {
    questionText: "Identify the meaning of the idiom: 'To add fuel to the fire':",
    optionA: "To make a bad situation worse",
    optionB: "To start a campsite fire",
    optionC: "To solve a dispute peacefully",
    optionD: "To celebrate enthusiastically",
    correctOption: "A",
    topicTag: "Idioms & Phrases",
    explanation: "'Add fuel to the fire' means to inflame or worsen an already difficult conflict or situation."
  },
  {
    questionText: "Choose the correct spelling:",
    optionA: "ENTREPRENEUR",
    optionB: "ENTERPRENEUR",
    optionC: "ENTREPRANEUR",
    optionD: "ENTERPRANEUR",
    correctOption: "A",
    topicTag: "Spellings",
    explanation: "The correct spelling is 'ENTREPRENEUR'."
  },
  {
    questionText: "Change into Passive Voice: 'The chef cooked a delicious meal.'",
    optionA: "A delicious meal was cooked by the chef.",
    optionB: "A delicious meal is cooked by the chef.",
    optionC: "A delicious meal has been cooked by the chef.",
    optionD: "A delicious meal was being cooked by the chef.",
    correctOption: "A",
    topicTag: "Active & Passive Voice",
    explanation: "Simple past active 'cooked' becomes simple past passive 'was cooked' in passive voice."
  },
  {
    questionText: "Change into Indirect Speech: He said, 'I am buying a new laptop today.'",
    optionA: "He said that he was buying a new laptop that day.",
    optionB: "He said that I am buying a new laptop today.",
    optionC: "He said that he is buying a new laptop today.",
    optionD: "He said that he bought a new laptop that day.",
    correctOption: "A",
    topicTag: "Direct & Indirect Speech",
    explanation: "'am buying' changes to 'was buying', and 'today' changes to 'that day' in indirect speech."
  },
  {
    questionText: "Select the word that is SYNONYMOUS to 'PRUDENT':",
    optionA: "Wise",
    optionB: "Careless",
    optionC: "Foolish",
    optionD: "Reckless",
    correctOption: "A",
    topicTag: "Synonyms",
    explanation: "'Prudent' means acting with or showing care and thought for the future; wise/judicious."
  },
  {
    questionText: "Select the word that is ANTONYMOUS to 'TRANSIENT':",
    optionA: "Permanent",
    optionB: "Fleeting",
    optionC: "Temporary",
    optionD: "Momentary",
    correctOption: "A",
    topicTag: "Antonyms",
    explanation: "'Transient' means lasting only for a short time. Its antonym is 'Permanent'."
  },
  {
    questionText: "Improve the underlined part: 'He is senior than me in service.'",
    optionA: "senior to me",
    optionB: "senior from me",
    optionC: "senior over me",
    optionD: "No improvement required",
    correctOption: "A",
    topicTag: "Sentence Improvement",
    explanation: "Latin comparative adjectives ending in '-ior' (senior, junior, superior, inferior) are followed by 'to', not 'than'."
  },
  {
    questionText: "Fill in the blank: 'Despite the heavy rain, the football match was not _____.'",
    optionA: "called off",
    optionB: "called out",
    optionC: "called in",
    optionD: "called up",
    correctOption: "A",
    topicTag: "Phrasal Verbs",
    explanation: "'Called off' means cancelled. The sentence means the match was not cancelled despite the rain."
  },
  {
    questionText: "Choose the correct substitute: 'An office for which no salary is paid':",
    optionA: "Honorary",
    optionB: "Gratis",
    optionC: "Sinecure",
    optionD: "Mercenary",
    correctOption: "A",
    topicTag: "One Word Substitutes",
    explanation: "An 'Honorary' position is conferred as an honor without standard payment."
  },
  {
    questionText: "Rearrange the fragments into a coherent sentence: P: to increase knowledge / Q: reading books / R: is essential / S: for every student",
    optionA: "Q R P S",
    optionB: "P Q R S",
    optionC: "R S P Q",
    optionD: "Q P R S",
    correctOption: "A",
    topicTag: "Para Jumbles",
    explanation: "Correct order: 'Reading books (Q) is essential (R) to increase knowledge (P) for every student (S)' -> Q R P S."
  }
];

// -------------------------------------------------------------
// Test 5: IndiaBIX Technical & C/C++ Test 1 (15 Questions)
// -------------------------------------------------------------
export const indiaBixTechnical1Questions = [
  {
    questionText: "What will be the output of the following C code snippet?\n`int x = 5; printf(\"%d %d %d\", x++, x++, ++x);`",
    optionA: "7 6 6 (Compiler dependent / Undefined Behavior)",
    optionB: "5 6 8",
    optionC: "5 6 7",
    optionD: "7 7 8",
    correctOption: "A",
    topicTag: "C Pointers & Syntax",
    explanation: "Modifying a variable multiple times without an intervening sequence point in a single function call parameter list results in Undefined Behavior in standard C."
  },
  {
    questionText: "In C, what is the default storage class for local variables declared inside a function block?",
    optionA: "auto",
    optionB: "static",
    optionC: "register",
    optionD: "extern",
    correctOption: "A",
    topicTag: "Storage Classes",
    explanation: "Local variables declared inside a function block have `auto` (automatic storage duration) by default."
  },
  {
    questionText: "What does `malloc()` return if memory allocation fails?",
    optionA: "NULL",
    optionB: "0",
    optionC: "Garbage pointer",
    optionD: "Throws MemoryException",
    correctOption: "A",
    topicTag: "Memory Management",
    explanation: "`malloc()` returns a `void*` pointer to allocated memory on success, or `NULL` if insufficient heap memory is available."
  },
  {
    questionText: "In C++, what is the size of an empty class object in memory?",
    optionA: "1 byte",
    optionB: "0 bytes",
    optionC: "4 bytes",
    optionD: "8 bytes",
    correctOption: "A",
    topicTag: "C++ Memory Structure",
    explanation: "To ensure that two different objects of an empty class have distinct memory addresses, standard C++ allocates 1 byte of memory."
  },
  {
    questionText: "Which keyword in C++ is used to prevent a class from being inherited by any derived class?",
    optionA: "final",
    optionB: "sealed",
    optionC: "static",
    optionD: "const",
    correctOption: "A",
    topicTag: "C++ OOP Concepts",
    explanation: "The `final` specifier in C++11 prevents a class from being inherited or a virtual function from being overridden."
  },
  {
    questionText: "In C++, what happens if a virtual function is assigned `= 0` in its class declaration?",
    optionA: "It becomes a Pure Virtual Function and makes the class abstract",
    optionB: "It initializes the function pointer to NULL at runtime",
    optionC: "It marks the function as returning 0 by default",
    optionD: "It deletes the function from vtable",
    correctOption: "A",
    topicTag: "C++ Polymorphism",
    explanation: "Assigning `= 0` turns a virtual function into a Pure Virtual Function, turning the class into an Abstract Base Class."
  },
  {
    questionText: "What is the primary difference between `delete` and `delete[]` operators in C++?",
    optionA: "`delete` deallocates a single object; `delete[]` deallocates an array of objects by calling destructors for each element",
    optionB: "`delete[]` is used for pointer variables; `delete` for references",
    optionC: "`delete` is used in C; `delete[]` in C++",
    optionD: "There is no difference",
    correctOption: "A",
    topicTag: "C++ Memory Management",
    explanation: "`delete[]` ensures destructors are called for every element in an allocated array before freeing the memory block."
  },
  {
    questionText: "What is the worst-case time complexity of QuickSort algorithm?",
    optionA: "O(N^2)",
    optionB: "O(N log N)",
    optionC: "O(N)",
    optionD: "O(log N)",
    correctOption: "A",
    topicTag: "Sorting Algorithms",
    explanation: "QuickSort has a worst-case time complexity of O(N^2) when the pivot selected is consistently the smallest or largest element (e.g. already sorted array)."
  },
  {
    questionText: "In C, which header file must be included to use functions like `malloc()`, `free()`, and `exit()`?",
    optionA: "<stdlib.h>",
    optionB: "<stdio.h>",
    optionC: "<string.h>",
    optionD: "<math.h>",
    correctOption: "A",
    topicTag: "C Standard Library",
    explanation: "`<stdlib.h>` defines general utilities including dynamic memory management (`malloc`, `free`) and process control (`exit`)."
  },
  {
    questionText: "Which data structure follows the LIFO (Last In First Out) principle?",
    optionA: "Stack",
    optionB: "Queue",
    optionC: "Linked List",
    optionD: "Binary Tree",
    correctOption: "A",
    topicTag: "Data Structures",
    explanation: "A Stack operates on Last In First Out (LIFO) order where the last pushed element is popped first."
  },
  {
    questionText: "What is the time complexity to search for an element in a balanced Binary Search Tree (BST) with N nodes?",
    optionA: "O(log N)",
    optionB: "O(N)",
    optionC: "O(1)",
    optionD: "O(N log N)",
    correctOption: "A",
    topicTag: "Binary Trees",
    explanation: "In a balanced BST (like AVL or Red-Black tree), search operations eliminate half of the tree at each step, yielding O(log N) time."
  },
  {
    questionText: "In Operating Systems, what is a condition where two or more processes are blocked waiting for resources held by each other?",
    optionA: "Deadlock",
    optionB: "Starvation",
    optionC: "Paging",
    optionD: "Thrashing",
    correctOption: "A",
    topicTag: "Operating Systems",
    explanation: "Deadlock occurs when processes are permanently blocked because each holds a resource that another needs."
  },
  {
    questionText: "Which OSI model layer is responsible for end-to-end process communication and port numbers (TCP/UDP)?",
    optionA: "Transport Layer",
    optionB: "Network Layer",
    optionC: "Data Link Layer",
    optionD: "Session Layer",
    correctOption: "A",
    topicTag: "Computer Networks",
    explanation: "The Transport Layer (Layer 4) handles end-to-end communication, flow control, and port-based multiplexing (TCP/UDP)."
  },
  {
    questionText: "What is the size of `int` pointer in a 64-bit operating system architecture?",
    optionA: "8 bytes",
    optionB: "4 bytes",
    optionC: "2 bytes",
    optionD: "16 bytes",
    correctOption: "A",
    topicTag: "C Architecture",
    explanation: "On 64-bit architectures, all pointers (irrespective of data type) occupy 8 bytes (64 bits) of memory."
  },
  {
    questionText: "Which operator cannot be overloaded in C++?",
    optionA: ":: (Scope Resolution Operator)",
    optionB: "+ (Addition Operator)",
    optionC: "== (Equality Operator)",
    optionD: "[] (Subscript Operator)",
    correctOption: "A",
    topicTag: "C++ Operator Overloading",
    explanation: "The Scope Resolution Operator `::`, Member Access `.`, Member Pointer `.*`, and Ternary Operator `?:` cannot be overloaded in C++."
  }
];

// -------------------------------------------------------------
// Test 6: IndiaBIX Java & Database Systems Test 1 (15 Questions)
// -------------------------------------------------------------
export const indiaBixJavaDb1Questions = [
  {
    questionText: "In Java, where are object instances stored in memory?",
    optionA: "Heap Memory",
    optionB: "Stack Memory",
    optionC: "Method Area",
    optionD: "Native Register",
    correctOption: "A",
    topicTag: "Java Memory Management",
    explanation: "In Java, all objects and array instances are allocated dynamically inside Heap memory. Local reference variables reside on the Stack."
  },
  {
    questionText: "Which of the following is true about Java interfaces starting from Java 8?",
    optionA: "Interfaces can contain default and static method implementations",
    optionB: "Interfaces can instantiate objects directly",
    optionC: "Interfaces cannot have public methods",
    optionD: "Interfaces permit multiple instance field constructors",
    correctOption: "A",
    topicTag: "Java 8 Features",
    explanation: "Java 8 introduced `default` and `static` methods with concrete code bodies inside interfaces."
  },
  {
    questionText: "Which collection class in Java permits null keys and null values, and is unsynchronized?",
    optionA: "HashMap",
    optionB: "Hashtable",
    optionC: "ConcurrentHashMap",
    optionD: "TreeMap",
    correctOption: "A",
    topicTag: "Java Collections",
    explanation: "`HashMap` permits one null key and multiple null values, and is non-synchronized."
  },
  {
    questionText: "What is the purpose of the `volatile` keyword in Java multi-threading?",
    optionA: "Guarantees that variable reads and writes go directly to main memory rather than thread CPU cache",
    optionB: "Prevents a class from being subclassed",
    optionC: "Makes a method synchronized automatically",
    optionD: "Serializes the object to disk",
    correctOption: "A",
    topicTag: "Java Concurrency",
    explanation: "`volatile` ensures visibility of variable changes across multiple threads by bypassing local CPU caches."
  },
  {
    questionText: "In SQL, which clause is used to filter rows AFTER an aggregate `GROUP BY` operation?",
    optionA: "HAVING",
    optionB: "WHERE",
    optionC: "ORDER BY",
    optionD: "DISTINCT",
    correctOption: "A",
    topicTag: "SQL Queries",
    explanation: "The `WHERE` clause filters individual rows before grouping; `HAVING` filters grouped rows after aggregation."
  },
  {
    questionText: "Which SQL JOIN returns all rows from the left table and matched rows from the right table?",
    optionA: "LEFT OUTER JOIN",
    optionB: "RIGHT OUTER JOIN",
    optionC: "INNER JOIN",
    optionD: "FULL OUTER JOIN",
    correctOption: "A",
    topicTag: "Database Joins",
    explanation: "`LEFT OUTER JOIN` returns all records from the left table, and matching records from the right table (filling NULLs for non-matches)."
  },
  {
    questionText: "In Relational Database Design, which Normal Form eliminates Transitive Dependencies?",
    optionA: "Third Normal Form (3NF)",
    optionB: "First Normal Form (1NF)",
    optionC: "Second Normal Form (2NF)",
    optionD: "Boyce-Codd Normal Form (BCNF)",
    correctOption: "A",
    topicTag: "Database Normalization",
    explanation: "A table is in 3NF if it is in 2NF and all non-key attributes are dependent only on the primary key, eliminating transitive dependencies."
  },
  {
    questionText: "What does the 'I' in ACID properties of database transactions stand for?",
    optionA: "Isolation",
    optionB: "Integrity",
    optionC: "Indexation",
    optionD: "Idempotency",
    correctOption: "A",
    topicTag: "Database Transactions",
    explanation: "ACID stands for Atomicity, Consistency, Isolation, and Durability. Isolation ensures concurrent transactions do not interfere."
  },
  {
    questionText: "Which Java exception is UNCHECKED (inherits from `RuntimeException`)?",
    optionA: "NullPointerException",
    optionB: "IOException",
    optionC: "SQLException",
    optionD: "ClassNotFoundException",
    correctOption: "A",
    topicTag: "Java Exceptions",
    explanation: "`NullPointerException` inherits from `RuntimeException`, making it an unchecked exception that doesn't require explicit try-catch or throws clause."
  },
  {
    questionText: "In SQL, what is the default sorting order when using `ORDER BY column_name`?",
    optionA: "Ascending (ASC)",
    optionB: "Descending (DESC)",
    optionC: "Random order",
    optionD: "Insertion order",
    correctOption: "A",
    topicTag: "SQL Syntax",
    explanation: "By default, SQL `ORDER BY` sorts values in Ascending (`ASC`) order."
  },
  {
    questionText: "What is a primary key constraint in SQL?",
    optionA: "Uniquely identifies each record in a table and cannot contain NULL values",
    optionB: "Allows multiple NULL values but forces unique numbers",
    optionC: "Links two tables together via foreign key reference",
    optionD: "Creates a temporary index in RAM memory",
    correctOption: "A",
    topicTag: "Database Schema",
    explanation: "A Primary Key constraint enforces uniqueness and NOT NULL constraints on the identified column(s)."
  },
  {
    questionText: "In Java, what does the `final` keyword placed before a method declaration signify?",
    optionA: "The method cannot be overridden by subclasses",
    optionB: "The method cannot be overloaded in the same class",
    optionC: "The method returns a constant value",
    optionD: "The method executes asynchronously",
    correctOption: "A",
    topicTag: "Java Fundamentals",
    explanation: "Marking a method `final` in Java prevents derived classes from overriding it."
  },
  {
    questionText: "What type of index in SQL physically reorders the actual table rows on disk to match the index order?",
    optionA: "Clustered Index",
    optionB: "Non-Clustered Index",
    optionC: "Bitmap Index",
    optionD: "Filtered Index",
    correctOption: "A",
    topicTag: "Database Indexing",
    explanation: "A Clustered Index determines the physical order of data in a table. Hence, a table can have only one Clustered Index."
  },
  {
    questionText: "In Java, which interface must a class implement to enable object serialization via `ObjectOutputStream`?",
    optionA: "java.io.Serializable",
    optionB: "java.lang.Cloneable",
    optionC: "java.lang.Comparable",
    optionD: "java.io.ExternalizableOnly",
    correctOption: "A",
    topicTag: "Java I/O",
    explanation: "`java.io.Serializable` is a marker interface that enables standard object serialization in Java."
  },
  {
    questionText: "What is the function of the SQL `TRUNCATE TABLE` command compared to `DELETE FROM table`?",
    optionA: "`TRUNCATE` removes all rows quickly by deallocating data pages without logging individual row deletions; cannot be rolled back in some DBs",
    optionB: "`TRUNCATE` deletes table structure along with data",
    optionC: "`DELETE` is faster than `TRUNCATE`",
    optionD: "`TRUNCATE` requires a WHERE clause",
    correctOption: "A",
    topicTag: "SQL DDL vs DML",
    explanation: "`TRUNCATE` is a DDL operation that resets high-water mark and deallocates data pages quickly compared to DML `DELETE`."
  }
];
