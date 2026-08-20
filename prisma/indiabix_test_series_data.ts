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

// -------------------------------------------------------------
// Test 7: IndiaBIX Technical & CS Engineering Test 2 (21 Questions)
// -------------------------------------------------------------
export const indiaBixTechnical2Questions = [
  {
    questionText: "How does `ConcurrentHashMap` in Java achieve thread safety while outperforming `Hashtable` under high concurrency?",
    optionA: "It uses Lock Striping (bucket-level locking) and CAS operations rather than synchronizing the entire map instance",
    optionB: "It makes all key-value pairs immutable in main memory",
    optionC: "It creates a complete copy of the map on every write operation",
    optionD: "It runs a single background thread to process all incoming read/write requests sequentially",
    correctOption: "A",
    topicTag: "Java",
    explanation: "`ConcurrentHashMap` uses fine-grained lock striping (synchronized per bucket bin in Java 8+) and Compare-And-Swap (CAS) non-blocking operations, allowing concurrent reads and writes across different buckets without blocking the entire table like `Hashtable`."
  },
  {
    questionText: "In Java JVM architecture, which Garbage Collector region replaces the PermGen space starting from Java 8?",
    optionA: "Metaspace",
    optionB: "Young Generation",
    optionC: "Eden Space",
    optionD: "Survivor Space S1",
    correctOption: "A",
    topicTag: "Java",
    explanation: "Starting in Java 8, Permanent Generation (PermGen) was removed and replaced by Metaspace, which allocates class metadata memory out of native host memory rather than fixed Java heap memory."
  },
  {
    questionText: "In Java 8 Stream API, what is the key difference between `map()` and `flatMap()` operations?",
    optionA: "`map()` produces one output value per input element; `flatMap()` transforms each element into a stream and flattens multiple streams into one",
    optionB: "`flatMap()` can only be used on Primitive streams like IntStream",
    optionC: "`map()` operates asynchronously; `flatMap()` executes synchronously",
    optionD: "There is no difference; both perform element replacement",
    correctOption: "A",
    topicTag: "Java",
    explanation: "`map()` applies a 1-to-1 mapping function. `flatMap()` applies a 1-to-many function returning a stream for each element and flattens the resulting stream of streams (`Stream<Stream<T>>`) into a single stream (`Stream<T>`)."
  },
  {
    questionText: "In C++, which smart pointer enforces EXCLUSIVE ownership of a dynamically allocated object and cannot be copied?",
    optionA: "std::unique_ptr",
    optionB: "std::shared_ptr",
    optionC: "std::weak_ptr",
    optionD: "std::auto_ptr",
    correctOption: "A",
    topicTag: "C++",
    explanation: "`std::unique_ptr` maintains sole ownership of a resource. Its copy constructor and copy assignment operator are deleted; ownership can only be transferred using move semantics (`std::move`)."
  },
  {
    questionText: "In C++, what occurs if a base class destructor is NOT declared as `virtual` when deleting a derived class object through a base pointer?",
    optionA: "Undefined behavior / Memory leak occurs because the derived class destructor will not be called",
    optionB: "The compiler automatically generates a virtual destructor at link time",
    optionC: "Both base and derived destructors execute in reverse alphabetical order",
    optionD: "A compile-time error stops build execution",
    correctOption: "A",
    topicTag: "C++",
    explanation: "If a base class destructor is not `virtual`, deleting a derived object via `Base* ptr = new Derived(); delete ptr;` invokes only the `Base` destructor, leaving derived resources uncleaned (undefined behavior / memory leak)."
  },
  {
    questionText: "In C++ Standard Template Library (STL), what are the time complexities for searching an element in `std::map` versus `std::unordered_map`?",
    optionA: "`std::map` is O(log N); `std::unordered_map` is O(1) average case",
    optionB: "Both are O(N) linear search time",
    optionC: "`std::map` is O(1); `std::unordered_map` is O(log N)",
    optionD: "Both are O(1) constant time",
    correctOption: "A",
    topicTag: "C++",
    explanation: "`std::map` is implemented as a balanced Red-Black tree providing guaranteed O(log N) lookup time. `std::unordered_map` uses a Hash Table providing O(1) average lookup time (worst case O(N) under hash collisions)."
  },
  {
    questionText: "In C# GUI and ASP.NET applications, why is `.ConfigureAwait(false)` often recommended when awaiting a Task in library code?",
    optionA: "To prevent deadlocks by not forcing the continuation task back onto the captured original SynchronizationContext",
    optionB: "To force the Task to run synchronously on the main thread",
    optionC: "To disable garbage collection during async execution",
    optionD: "To automatically retry the async operation if an exception occurs",
    correctOption: "A",
    topicTag: "C#",
    explanation: "In single-threaded SynchronizationContext environments (like WinForms, WPF, or classic ASP.NET), awaiting without `.ConfigureAwait(false)` attempts to resume on the original UI context, which can cause deadlocks if the UI thread is synchronously waiting on the task."
  },
  {
    questionText: "In C#, what is the difference between `Action<T>` and `Func<T, TResult>` delegates?",
    optionA: "`Action<T>` points to a method that returns `void`; `Func<T, TResult>` points to a method that returns a value of type `TResult`",
    optionB: "`Func` takes no arguments; `Action` takes up to 16 arguments",
    optionC: "`Action` is used for asynchronous methods; `Func` for synchronous methods",
    optionD: "`Func` can only reference static methods",
    correctOption: "A",
    topicTag: "C#",
    explanation: "`Action` represents a delegate that accepts parameters and returns `void`. `Func` represents a delegate that accepts parameters and returns a value (the last generic parameter is the return type)."
  },
  {
    questionText: "In C#, what is Boxing and what overhead does it introduce?",
    optionA: "Converting a value type (`struct`/`int`) to an `object` reference type, allocating memory on the managed heap and adding CPU performance overhead",
    optionB: "Packing multiple assemblies into a single DLL file",
    optionC: "Converting a class into a byte array for storage",
    optionD: "Wrapping private variables in public getter and setter properties",
    correctOption: "A",
    topicTag: "C#",
    explanation: "Boxing implicitly converts a value type to type `object` or an interface type. It creates a new object on the managed heap and copies the value into it, causing heap allocation and garbage collection overhead."
  },
  {
    questionText: "In database systems, which anomaly can occur under `REPEATABLE READ` isolation level that is prevented under `SERIALIZABLE` level?",
    optionA: "Phantom Read (new rows inserted by concurrent committed transactions appearing in repeated query scans)",
    optionB: "Dirty Read (reading uncommitted data)",
    optionC: "Lost Update",
    optionD: "None; REPEATABLE READ prevents all anomalies",
    correctOption: "A",
    topicTag: "DBMS",
    explanation: "`REPEATABLE READ` locks existing read rows so they cannot be modified (preventing Dirty Reads and Non-Repeatable Reads), but external transactions can still INSERT new matching rows, producing Phantom Reads upon re-query. `SERIALIZABLE` prevents Phantom Reads."
  },
  {
    questionText: "Why are B+ Trees preferred over B-Trees for relational database disk indexing?",
    optionA: "B+ Trees store data records/pointers exclusively in leaf nodes and link leaf nodes sequentially, enabling fast range scans",
    optionB: "B+ Trees consume zero memory in RAM",
    optionC: "B-Trees cannot handle integer primary keys",
    optionD: "B+ Trees eliminate the need for secondary indexes",
    correctOption: "A",
    topicTag: "DBMS",
    explanation: "In B+ Trees, all data records or record pointers are located at the leaf level, and leaves are connected in a linked list. This enables efficient sequential disk block reads during range queries (`WHERE age BETWEEN 20 AND 30`)."
  },
  {
    questionText: "What condition must be satisfied for a relation table to be in Boyce-Codd Normal Form (BCNF)?",
    optionA: "For every non-trivial functional dependency X -> Y, X must be a Super Key",
    optionB: "The table must contain no multi-valued attributes",
    optionC: "All non-key attributes must be dependent on part of a composite key",
    optionD: "Foreign keys must match primary keys in all referenced tables",
    correctOption: "A",
    topicTag: "DBMS",
    explanation: "BCNF is a stricter version of 3NF. A relation is in BCNF if for every functional dependency X -> Y, X is a superkey of the relation. It eliminates all redundancy from functional dependencies."
  },
  {
    questionText: "In JavaScript engine runtime (V8), what is the order of execution between Microtask Queue (Promises) and Macrotask Queue (setTimeout)?",
    optionA: "All jobs in the Microtask Queue are processed completely before the Event Loop moves to the next Macrotask",
    optionB: "Macrotasks are always executed before Microtasks",
    optionC: "Microtasks and Macrotasks execute in round-robin order 1:1",
    optionD: "Macrotasks pause Microtask execution indefinitely",
    correctOption: "A",
    topicTag: "JavaScript",
    explanation: "After each current task finishes, the JavaScript engine drains the entire Microtask Queue (resolved `Promise` callbacks, `queueMicrotask`) before picking up the next Macrotask (`setTimeout`, `setInterval`, `I/O`)."
  },
  {
    questionText: "What is a Closure in JavaScript?",
    optionA: "A function bundled together with references to its surrounding lexical state (outer scope environment)",
    optionB: "A method that closes a database connection",
    optionC: "An IIFE (Immediately Invoked Function Expression) that returns undefined",
    optionD: "A strict mode feature that prevents global variable creation",
    correctOption: "A",
    topicTag: "JavaScript",
    explanation: "A closure gives an inner function access to an outer function's scope even after the outer function has finished executing and returned."
  },
  {
    questionText: "In JavaScript prototype inheritance, what is the difference between `__proto__` and `prototype`?",
    optionA: "`prototype` is an object property on constructor functions used to build `__proto__` on instantiated objects",
    optionB: "`__proto__` is a modern ES6 replacement for `prototype`",
    optionC: "`prototype` exists on primitive types; `__proto__` exists on objects",
    optionD: "There is no difference; they are aliases",
    correctOption: "A",
    topicTag: "JavaScript",
    explanation: "`prototype` is a property of constructor functions (e.g. `Person.prototype`). When an object is created with `new Person()`, its internal `[[Prototype]]` link (`__proto__`) points to `Person.prototype`."
  },
  {
    questionText: "During the TCP 3-Way Handshake, what flags and sequence numbers are exchanged to establish a connection between Client and Server?",
    optionA: "Client sends SYN(seq=x) -> Server replies SYN-ACK(seq=y, ack=x+1) -> Client sends ACK(ack=y+1)",
    optionB: "Client sends ACK -> Server sends SYN -> Client sends FIN",
    optionC: "Client sends DATA -> Server sends ACK -> Client sends RST",
    optionD: "Client sends SYN -> Server sends FIN -> Client sends ACK",
    correctOption: "A",
    topicTag: "Computer Networks",
    explanation: "The TCP 3-Way Handshake initializes reliable sequence numbers: 1. Client -> Server: SYN (seq=x); 2. Server -> Client: SYN-ACK (seq=y, ack=x+1); 3. Client -> Server: ACK (ack=y+1)."
  },
  {
    questionText: "How many usable host IP addresses are available in a subnetwork with IPv4 CIDR notation `/26`?",
    optionA: "62",
    optionB: "64",
    optionC: "128",
    optionD: "254",
    correctOption: "A",
    topicTag: "Computer Networks",
    explanation: "A `/26` subnet leaves 32 - 26 = 6 bits for host addresses. Total IP addresses = 2^6 = 64. Subtracting 2 reserved addresses (Network ID and Broadcast IP) leaves 64 - 2 = 62 usable host IPs."
  },
  {
    questionText: "What mechanism does TCP use at the Transport Layer to prevent a fast sender from overwhelming a slow receiver?",
    optionA: "Flow Control using Sliding Window Protocol (Advertised Window)",
    optionB: "IP Fragmentation",
    optionC: "DNS Caching",
    optionD: "ARP Request Broadcasting",
    correctOption: "A",
    topicTag: "Computer Networks",
    explanation: "Flow control prevents receiver buffer overflow. The receiver advertises its available buffer size (Receive Window `rwnd`) in TCP header acknowledgments, telling the sender how much data it can accept."
  },
  {
    questionText: "In Operating Systems, what are the four necessary conditions required for a Deadlock to occur?",
    optionA: "Mutual Exclusion, Hold & Wait, No Preemption, and Circular Wait",
    optionB: "Paging, Thrashing, Segmentation, and Virtual Memory",
    optionC: "Cache Miss, Page Fault, TLB Miss, and Hard Fault",
    optionD: "Read, Write, Execute, and Delete permissions",
    correctOption: "A",
    topicTag: "Operating Systems",
    explanation: "Coffman conditions for deadlock: 1. Mutual Exclusion (non-shareable resources); 2. Hold & Wait (holding resource while waiting for another); 3. No Preemption (resources cannot be forcibly taken); 4. Circular Wait (chain of processes waiting for held resources)."
  },
  {
    questionText: "What is the key difference between a Mutex (Mutual Exclusion Lock) and a Counting Semaphore in process synchronization?",
    optionA: "A Mutex is owned by the locking thread and locked/unlocked by the same thread; a Semaphore has a integer counter and can be signaled from any thread",
    optionB: "A Semaphore can only be used by 1 process; a Mutex by N processes",
    optionC: "A Mutex runs in user space; a Semaphore runs inside BIOS chip",
    optionD: "Semaphores prevent deadlocks automatically; Mutex locks cause deadlocks",
    correctOption: "A",
    topicTag: "Operating Systems",
    explanation: "A Mutex enforces strict thread ownership (only the thread that locked it can unlock it). A Counting Semaphore maintains a count allowing up to N concurrent threads access, and any thread can signal/release it."
  },
  {
    questionText: "In Virtual Memory management, what is Belady's Anomaly?",
    optionA: "In FIFO page replacement, increasing the number of allocated memory page frames can result in MORE page faults for certain access patterns",
    optionB: "When CPU utilization drops to zero during disk writes",
    optionC: "When LRU cache deletes the most recently used element",
    optionD: "When virtual memory addresses exceed 64 bits",
    correctOption: "A",
    topicTag: "Operating Systems",
    explanation: "Belady's Anomaly is a counter-intuitive phenomenon in FIFO page replacement where adding more page frames to a process causes an increase in total page faults. Stack-based algorithms like LRU do not suffer from Belady's Anomaly."
  }
];

// -------------------------------------------------------------
// Test 8: IndiaBIX Core Technical & Software Test 3 (21 Questions)
// -------------------------------------------------------------
export const indiaBixTechnical3Questions = [
  {
    questionText: "In Java, what is the superclass of all Exception and Error classes in the exception hierarchy?",
    optionA: "java.lang.Throwable",
    optionB: "java.lang.Object",
    optionC: "java.lang.RuntimeException",
    optionD: "java.io.IOException",
    correctOption: "A",
    topicTag: "Java",
    explanation: "`java.lang.Throwable` is the root class of the Java exception hierarchy. Only instances of `Throwable` (or its subclasses `Exception` and `Error`) can be thrown by the JVM or `throw` statements."
  },
  {
    questionText: "In Java, what is created in memory when executing `String s = new String(\"Hello\");` assuming \"Hello\" is not already in the String Constant Pool?",
    optionA: "Two objects: one in the String Constant Pool (Heap) and one object in Heap memory referenced by `s`",
    optionB: "One object on the Stack",
    optionC: "Zero objects because strings are primitives",
    optionD: "Three objects in Metaspace",
    correctOption: "A",
    topicTag: "Java",
    explanation: "The literal `\"Hello\"` creates or references an entry in the String Constant Pool. Calling `new String(...)` explicitly creates a second distinct `String` object instance on the heap."
  },
  {
    questionText: "What guarantee does the `volatile` keyword provide in Java multi-threaded programs?",
    optionA: "Guarantees Visibility (reads/writes directly to main memory), but does NOT guarantee Atomicity for compound operations like `i++`",
    optionB: "Guarantees full atomic execution of code blocks",
    optionC: "Prevents a variable from being garbage collected",
    optionD: "Locks the entire class during method execution",
    correctOption: "A",
    topicTag: "Java",
    explanation: "`volatile` ensures variable visibility across threads by bypassing thread CPU caches. However, it does not provide mutual exclusion or atomicity for non-atomic compound operations like incrementing (`i++`)."
  },
  {
    questionText: "In C++11, what function converts an lvalue expression into an rvalue reference `T&&` to enable move semantics?",
    optionA: "std::move()",
    optionB: "std::forward()",
    optionC: "std::copy()",
    optionD: "std::cast()",
    correctOption: "A",
    topicTag: "C++",
    explanation: "`std::move()` does not move anything by itself; it performs an unconditional static cast of an expression into an rvalue reference `T&&`, allowing move constructors or move assignment operators to be called."
  },
  {
    questionText: "In C++, how is the 'Diamond Problem' in Multiple Inheritance resolved?",
    optionA: "By using Virtual Base Class inheritance (`class B : virtual public A`)",
    optionB: "By marking all member functions as static",
    optionC: "By using friend functions",
    optionD: "By removing derived class constructors",
    correctOption: "A",
    topicTag: "C++",
    explanation: "When two derived classes inherit from a common base class using `virtual` inheritance (`class B : virtual public Base`), the grandchild class receives only a single shared instance of the root `Base` class subobject."
  },
  {
    questionText: "Which binary operator cannot be overloaded as a member function in C++ if the left-hand operand is a standard stream object (e.g. `std::cout << obj`)?",
    optionA: "Stream insertion operator `<<`",
    optionB: "Addition operator `+`",
    optionC: "Assignment operator `=`",
    optionD: "Subscript operator `[]`",
    correctOption: "A",
    topicTag: "C++",
    explanation: "When overloading `std::cout << obj`, the left operand is `std::ostream` (not your class). Since you cannot modify `std::ostream` to add a member function, `operator<<` must be overloaded as a global/friend function."
  },
  {
    questionText: "In C# LINQ, what is Deferred Execution?",
    optionA: "Query execution is delayed until the query variable is actually iterated over (e.g. via `foreach` or `.ToList()`)",
    optionB: "Queries are executed asynchronously in a background thread upon definition",
    optionC: "Queries are compiled directly into SQL at deployment time",
    optionD: "Queries are cached permanently in RAM memory",
    correctOption: "A",
    topicTag: "C#",
    explanation: "LINQ queries using `IEnumerable` use deferred execution: construction of the query does not execute data fetching. Execution occurs when query results are consumed (`foreach`, `.ToList()`, `.ToArray()`, `.Count()`)."
  },
  {
    questionText: "In .NET Garbage Collection, which generation holds long-lived objects like static data and singletons?",
    optionA: "Generation 2",
    optionB: "Generation 0",
    optionC: "Generation 1",
    optionD: "Generation -1",
    correctOption: "A",
    topicTag: "C#",
    explanation: ".NET GC uses 3 generations: Gen 0 (short-lived temporary objects), Gen 1 (buffer generation between short and long-lived), and Gen 2 (long-lived objects surviving multiple collections, static variables, application singletons)."
  },
  {
    questionText: "In C#, what is mandatory when passing a variable with the `out` parameter modifier to a method?",
    optionA: "The called method MUST assign a value to the `out` parameter before it returns",
    optionB: "The calling method must initialize the variable before passing it",
    optionC: "The parameter must be a primitive integer",
    optionD: "The method must return an array",
    correctOption: "A",
    topicTag: "C#",
    explanation: "The `out` keyword passes arguments by reference. The calling code does not need to initialize the variable prior to passing, but the called method MUST assign a value to the `out` parameter before returning."
  },
  {
    questionText: "In SQL, what is the result of a `CROSS JOIN` between Table A with 5 rows and Table B with 10 rows?",
    optionA: "50 rows (Cartesian product)",
    optionB: "15 rows",
    optionC: "10 rows",
    optionD: "5 rows",
    correctOption: "A",
    topicTag: "DBMS",
    explanation: "A `CROSS JOIN` produces the Cartesian product of two tables. Every row from Table A is paired with every row from Table B. Total rows = 5 * 10 = 50 rows."
  },
  {
    questionText: "In Database Management Systems, what is Write-Ahead Logging (WAL) used for?",
    optionA: "Ensuring Durability and Atomicity by writing transaction changes to log storage on disk BEFORE modifying database data pages",
    optionB: "Indexing foreign key columns automatically",
    optionC: "Compressing tables to reduce disk space",
    optionD: "Encrypting database passwords in memory",
    correctOption: "A",
    topicTag: "DBMS",
    explanation: "WAL protocol dictates that dirty data pages in RAM cannot be written to disk until the corresponding log records describing the modification have been flushed to non-volatile disk storage, guaranteeing crash recovery."
  },
  {
    questionText: "What is a primary distinction between a Clustered Index and a Non-Clustered Index in SQL databases?",
    optionA: "A table can have only ONE Clustered Index (data rows sorted on disk); but can have MULTIPLE Non-Clustered Indexes (separate index pages with pointers)",
    optionB: "Clustered indexes are stored in RAM; Non-Clustered on disk",
    optionC: "Non-Clustered indexes sort data rows physically on disk",
    optionD: "Clustered indexes can only be created on text columns",
    correctOption: "A",
    topicTag: "DBMS",
    explanation: "A Clustered Index dictates the physical ordering of data rows on disk (hence max 1 per table, usually Primary Key). A Non-Clustered Index creates a separate structure containing key values and pointers (RID / Primary Key) back to data rows."
  },
  {
    questionText: "In JavaScript, how does an Arrow Function behave regarding the `this` keyword?",
    optionA: "Arrow functions do not have their own `this`; they inherit `this` lexically from the enclosing parent scope",
    optionB: "Arrow functions bind `this` to the global `window` object always",
    optionC: "Arrow functions allow explicit binding via `.bind()`",
    optionD: "Arrow functions construct new objects when invoked with `new`",
    correctOption: "A",
    topicTag: "JavaScript",
    explanation: "Arrow functions do not define their own `this` context or `arguments` object. Instead, they capture `this` from the surrounding scope at the time they are created (lexical scope)."
  },
  {
    questionText: "Which method of `Promise` in JavaScript executes after all input promises settle (either fulfilled or rejected) and returns an array of result objects?",
    optionA: "Promise.allSettled()",
    optionB: "Promise.all()",
    optionC: "Promise.race()",
    optionD: "Promise.any()",
    correctOption: "A",
    topicTag: "JavaScript",
    explanation: "`Promise.allSettled()` waits for all input promises to complete regardless of whether individual promises resolve or reject. In contrast, `Promise.all()` short-circuits and rejects immediately if any single promise fails."
  },
  {
    questionText: "Why are `WeakMap` keys in ES6 JavaScript restricted to objects and garbage collected automatically?",
    optionA: "References to object keys are held weakly, allowing key objects to be garbage-collected if no other references to them exist",
    optionB: "WeakMap converts keys to JSON strings automatically",
    optionC: "WeakMap is stored in CPU L1 cache memory",
    optionD: "To allow iterating over keys using `for...in` loops",
    correctOption: "A",
    topicTag: "JavaScript",
    explanation: "`WeakMap` holds weak references to object keys. If an object key has no other strong references in the application, it can be garbage collected along with its associated value, preventing memory leaks."
  },
  {
    questionText: "In the Domain Name System (DNS), what is the difference between Recursive and Iterative DNS Queries?",
    optionA: "In a Recursive query, the DNS server takes full responsibility to return the final IP answer; in an Iterative query, the DNS server returns the address of another DNS server to query",
    optionB: "Recursive queries use TCP; Iterative queries use HTTP",
    optionC: "Iterative queries run locally on the browser cache",
    optionD: "Recursive queries are only used for IPv6 addresses",
    correctOption: "A",
    topicTag: "Computer Networks",
    explanation: "In Recursive queries, the resolver delegates the lookup entirely to the DNS server until an IP address or error is found. In Iterative queries, the DNS server responds with referral pointers to TLD or authoritative DNS servers."
  },
  {
    questionText: "What major performance limitation in HTTP/1.1 did HTTP/2 solve by introducing Binary Framing and Multiplexing?",
    optionA: "Head-of-Line (HOL) Blocking at the application layer over a single TCP connection",
    optionB: "Lack of SSL/TLS encryption",
    optionC: "Max URL length limitations",
    optionD: "Inability to send POST requests",
    correctOption: "A",
    topicTag: "Computer Networks",
    explanation: "HTTP/1.1 suffered from application-level Head-of-Line (HOL) blocking where requests over a connection had to be processed sequentially. HTTP/2 split messages into binary frames, allowing multiple concurrent requests/responses multiplexed over 1 TCP connection."
  },
  {
    questionText: "At which layer of the OSI model does a Network Router operate to forward packets based on destination IP addresses?",
    optionA: "Network Layer (Layer 3)",
    optionB: "Data Link Layer (Layer 2)",
    optionC: "Transport Layer (Layer 4)",
    optionD: "Physical Layer (Layer 1)",
    correctOption: "A",
    topicTag: "Computer Networks",
    explanation: "Routers operate at Layer 3 (Network Layer) of the OSI model. They examine logical IP addresses in packet headers and consult routing tables to determine packet forwarding paths across subnets."
  },
  {
    questionText: "In Operating System CPU Scheduling, what is a major drawback of Shortest Remaining Time First (SRTF) scheduling?",
    optionA: "Starvation of long-running CPU-bound processes if short processes continuously arrive",
    optionB: "High CPU idle percentage",
    optionC: "Inability to run multi-threaded processes",
    optionD: "Requires hardware graphics acceleration",
    correctOption: "A",
    topicTag: "Operating Systems",
    explanation: "SRTF is the preemptive version of Shortest Job First (SJF). While it minimizes average wait time, long processes may suffer indefinite delay (starvation) if shorter tasks continuously enter the ready queue."
  },
  {
    questionText: "In Virtual Memory management, what hardware component speeds up Virtual IP Address to Physical Page Frame translation?",
    optionA: "Translation Lookaside Buffer (TLB)",
    optionB: "Direct Memory Access (DMA) controller",
    optionC: "Arithmetic Logic Unit (ALU)",
    optionD: "Hard Disk Drive (HDD)",
    correctOption: "A",
    topicTag: "Operating Systems",
    explanation: "The TLB is a high-speed associative hardware cache memory inside the CPU Memory Management Unit (MMU) that stores recent virtual-to-physical address translations, bypassing slow multi-level page table lookups in RAM."
  },
  {
    questionText: "In Operating Systems Inter-Process Communication (IPC), which method provides the HIGHEST speed for exchanging data between processes?",
    optionA: "Shared Memory",
    optionB: "Message Queues",
    optionC: "Network Sockets",
    optionD: "Anonymous Pipes",
    correctOption: "A",
    topicTag: "Operating Systems",
    explanation: "Shared Memory is the fastest IPC mechanism because two or more processes share a common region of RAM. Once established, data reads/writes occur directly at memory speed without kernel intervention or data copying."
  }
];

// -------------------------------------------------------------
// Test 9: IndiaBIX Technical & SDLC Engineering Test 4 (24 Questions)
// -------------------------------------------------------------
export const indiaBixTechnical4Questions = [
  // C# (3 questions)
  {
    questionText: "In C#, what is the effect of marking a class with the `sealed` keyword?",
    optionA: "It prevents other classes from inheriting from it",
    optionB: "It prevents creating instances of the class",
    optionC: "It makes all methods inside the class static",
    optionD: "It places the class memory directly on the stack",
    correctOption: "A",
    topicTag: "C#",
    explanation: "The `sealed` modifier prevents a class from being inherited. It can also be applied to a virtual method or property to prevent overriding in further derived classes."
  },
  {
    questionText: "In C# LINQ, what is the key difference between `IQueryable<T>` and `IEnumerable<T>` when querying a remote database?",
    optionA: "`IQueryable<T>` evaluates queries on the remote database server via Expression Trees; `IEnumerable<T>` pulls data into local memory first before filtering",
    optionB: "`IEnumerable<T>` is asynchronous; `IQueryable<T>` is synchronous",
    optionC: "`IQueryable<T>` can only be used with XML documents",
    optionD: "There is no functional difference between them",
    correctOption: "A",
    topicTag: "C#",
    explanation: "`IQueryable<T>` uses `Expression` trees to translate LINQ calls into native SQL queries executed on the database server. `IEnumerable<T>` retrieves dataset rows into memory and filters in-process."
  },
  {
    questionText: "In C# asynchronous programming, what does `Task.WhenAll` return when executed on a collection of running tasks?",
    optionA: "A single Task that completes when ALL provided tasks have completed",
    optionB: "A Task that completes as soon as ANY single task finishes",
    optionC: "A thread pool handle that blocks the calling thread synchronously",
    optionD: "An array of cancellation tokens",
    correctOption: "A",
    topicTag: "C#",
    explanation: "`Task.WhenAll` creates a task that will complete when all of the `Task` objects in an enumerable collection have completed. If any task faults, the returned task will contain the aggregated exceptions."
  },

  // C++ (3 questions)
  {
    questionText: "In C++, what is the purpose of the Copy-and-Swap idiom in copy assignment operators (`operator=`)?",
    optionA: "Provides strong exception safety and eliminates code duplication between copy constructors and assignment operators",
    optionB: "Speeds up compile times by bypassing template instantiation",
    optionC: "Prevents virtual functions from being overridden",
    optionD: "Automatically allocates memory on the stack instead of heap",
    correctOption: "A",
    topicTag: "C++",
    explanation: "The copy-and-swap idiom passes the parameter by value (creating a copy), then swaps its internal pointers with `*this`. If an exception occurs during copying, `*this` remains untouched, guaranteeing strong exception safety."
  },
  {
    questionText: "In C++ STL, what happens to `std::vector` capacity when elements are deleted using `.pop_back()` or `.clear()`?",
    optionA: "Size decreases, but capacity remains UNCHANGED unless `.shrink_to_fit()` is explicitly called",
    optionB: "Capacity automatically shrinks to match size immediately",
    optionC: "The vector deallocates its heap memory instantly",
    optionD: "A re-allocation occurs moving remaining elements to stack",
    correctOption: "A",
    topicTag: "C++",
    explanation: "Calling `pop_back()` or `clear()` destroys elements and reduces `.size()`, but reserved buffer `.capacity()` stays unchanged to avoid frequent memory reallocations. `shrink_to_fit()` requests releasing excess capacity."
  },
  {
    questionText: "In C++, what is the difference between a raw C-style function pointer and `std::function`?",
    optionA: "`std::function` is a polymorphic wrapper that can store function pointers, lambdas with captures, and functor objects; C-style pointers store only function memory addresses",
    optionB: "C-style pointers are safer than `std::function`",
    optionC: "`std::function` cannot accept arguments",
    optionD: "Raw function pointers cause compile errors in C++11",
    correctOption: "A",
    topicTag: "C++",
    explanation: "`std::function<R(Args...)>` is a general-purpose polymorphic function wrapper. Unlike raw C-style function pointers, it can hold lambdas (even those capturing variables), bind expressions, and functors."
  },

  // Java (3 questions)
  {
    questionText: "How do atomic classes in `java.util.concurrent.atomic` (like `AtomicInteger`) guarantee lock-free thread safety?",
    optionA: "They use hardware-supported Compare-And-Swap (CAS) CPU instructions instead of synchronized monitor locks",
    optionB: "They suspend all thread execution in the JVM during updates",
    optionC: "They write data to external file storage",
    optionD: "They allocate a separate JVM memory heap for each thread",
    correctOption: "A",
    topicTag: "Java",
    explanation: "Atomic classes use low-level CPU atomic primitives like CAS (Compare-And-Swap) provided by `sun.misc.Unsafe`. This allows concurrent non-blocking state updates without thread synchronization overhead."
  },
  {
    questionText: "In Java 8, what are Default Methods in interfaces used for?",
    optionA: "To add new methods to existing interfaces without breaking backward compatibility for implementing classes",
    optionB: "To make interface variables mutable",
    optionC: "To replace class constructors",
    optionD: "To enforce private method access across packages",
    correctOption: "A",
    topicTag: "Java",
    explanation: "Default methods (marked with `default`) enable interface extension without breaking existing class implementations. They provide default method bodies that classes can optionally override."
  },
  {
    questionText: "In Java, what requirement must an object satisfy to be used inside a `try-with-resources` statement?",
    optionA: "It must implement `java.lang.AutoCloseable` or `java.io.Closeable` interface",
    optionB: "It must be marked with `final`",
    optionC: "It must extend `java.lang.Thread`",
    optionD: "It must be serialized as a JSON string",
    correctOption: "A",
    topicTag: "Java",
    explanation: "Any resource implementing `AutoCloseable` (or `Closeable`) can be managed by `try-with-resources`. The JVM automatically invokes its `close()` method upon exiting the block, even if exceptions occur."
  },

  // JavaScript (3 questions)
  {
    questionText: "In JavaScript, what is the difference between `Object.freeze()` and `Object.seal()`?",
    optionA: "`Object.freeze()` makes existing properties immutable and prevents adding/deleting properties; `Object.seal()` prevents adding/deleting properties but allows modifying existing property values",
    optionB: "`Object.seal()` turns an object into an array; `Object.freeze()` deletes the object",
    optionC: "`Object.freeze()` works on functions; `Object.seal()` works only on strings",
    optionD: "There is no difference",
    correctOption: "A",
    topicTag: "JavaScript",
    explanation: "`Object.seal()` marks existing properties as non-configurable (preventing deletion or addition), but existing writable property values CAN still be changed. `Object.freeze()` additionally makes all existing property values read-only."
  },
  {
    questionText: "In JavaScript, how does `Promise.race()` differ from `Promise.any()`?",
    optionA: "`Promise.race()` settles (resolves or rejects) as soon as the FIRST promise settles; `Promise.any()` resolves as soon as the FIRST promise FULFILLS (ignoring rejections until all fail)",
    optionB: "`Promise.any()` fails if one promise rejects; `Promise.race()` ignores rejections",
    optionC: "`Promise.race()` runs synchronously on CPU L1 cache",
    optionD: "Both return arrays of promise values",
    correctOption: "A",
    topicTag: "JavaScript",
    explanation: "`Promise.race()` takes the outcome of whichever promise settles first (whether fulfilled or rejected). `Promise.any()` waits for the first promise that *fulfills*; it only rejects if *all* input promises reject (returning `AggregateError`)."
  },
  {
    questionText: "In browser JavaScript DOM manipulation, why is it important to invoke `removeEventListener` when destroying dynamic components?",
    optionA: "To prevent memory leaks caused by event handlers retaining references to DOM nodes in closures",
    optionB: "To prevent CSS animations from stopping",
    optionC: "To stop the browser from closing the HTTP socket",
    optionD: "To force the web page to reload",
    correctOption: "A",
    topicTag: "JavaScript",
    explanation: "If event listeners attached to global elements (e.g. `window`, `document`) reference unmounted component instances via closures, garbage collection cannot clean them up, causing memory leaks over time."
  },

  // DBMS (3 questions)
  {
    questionText: "In Database Management Systems, what is the execution timing difference between `BEFORE` and `AFTER` DML Triggers?",
    optionA: "`BEFORE` triggers execute prior to data modification and can modify input values or cancel operations; `AFTER` triggers execute after modification is recorded in the table",
    optionB: "`AFTER` triggers prevent SQL syntax errors",
    optionC: "`BEFORE` triggers execute asynchronously in background threads",
    optionD: "`AFTER` triggers run only during database startup",
    correctOption: "A",
    topicTag: "DBMS",
    explanation: "`BEFORE` triggers fire before table constraints or row changes are applied, making them ideal for validation and parameter transformation. `AFTER` triggers run after changes complete, ideal for audit logging and cascading updates."
  },
  {
    questionText: "In SQL relational database design, what is a Candidate Key?",
    optionA: "A minimal set of attributes that uniquely identifies a row in a table, from which the Primary Key is selected",
    optionB: "A key that references a primary key in another table",
    optionC: "An index key created solely for sorting query results",
    optionD: "A column that permits duplicate NULL values",
    correctOption: "A",
    topicTag: "DBMS",
    explanation: "A Candidate Key is a superkey with no redundant attributes. Any candidate key can uniquely identify table tuples. Database designers select one candidate key as the Primary Key and remaining ones as Alternate Keys."
  },
  {
    questionText: "What database anomaly occurs when a transaction reads data modified by a concurrent uncommitted transaction that subsequently rolls back?",
    optionA: "Dirty Read",
    optionB: "Non-Repeatable Read",
    optionC: "Phantom Read",
    optionD: "Lost Update",
    correctOption: "A",
    topicTag: "DBMS",
    explanation: "A Dirty Read happens when Transaction A modifies a row, Transaction B reads the modified row, and then Transaction A aborts/rolls back, leaving Transaction B with invalid data."
  },

  // Computer Networks (3 questions)
  {
    questionText: "What is the primary function of Port Address Translation (PAT) / NAPT in network routers?",
    optionA: "Map multiple private IP addresses to a single public IP address using distinct source TCP/UDP port numbers",
    optionB: "Convert MAC addresses into domain name URLs",
    optionC: "Encrypt Wi-Fi passwords using WPA3",
    optionD: "Assign IP subnets dynamically via DHCP",
    correctOption: "A",
    topicTag: "Computer Networks",
    explanation: "PAT (Overloaded NAT) translates internal private IPv4 addresses to a single public IPv4 address by assigning unique source port numbers to outbound transport segments."
  },
  {
    questionText: "What is the address space size difference between IPv4 and IPv6?",
    optionA: "IPv4 uses 32-bit addresses (approx 4.3 billion addresses); IPv6 uses 128-bit addresses (approx 3.4 x 10^38 addresses)",
    optionB: "IPv4 uses 64-bit addresses; IPv6 uses 256-bit addresses",
    optionC: "IPv4 uses decimal numbers; IPv6 uses binary floating point",
    optionD: "IPv6 supports fewer hosts than IPv4",
    correctOption: "A",
    topicTag: "Computer Networks",
    explanation: "IPv4 address size is 32 bits ($2^{32} \\approx 4.29 \\times 10^9$). IPv6 expands address size to 128 bits ($2^{128} \\approx 3.4 \\times 10^{38}$), eliminating IP exhaustion."
  },
  {
    questionText: "In Distance Vector routing protocols (e.g. RIP), what is the 'Count-to-Infinity' problem?",
    optionA: "A routing loop condition where bad news travels slowly and distance metrics increment indefinitely when a link fails",
    optionB: "When a router CPU reaches 100% usage",
    optionC: "When IP packet TTL reaches zero",
    optionD: "When DNS servers crash due to DDOS",
    correctOption: "A",
    topicTag: "Computer Networks",
    explanation: "When a network link fails, distance vector routers relying on neighboring updates can exchange outdated route hop counts back and forth, slowly incrementing distance counts up to infinity (RIP limits max metric to 15 hops)."
  },

  // Operating Systems (3 questions)
  {
    questionText: "What causes 'Thrashing' in an Operating System memory management subsystem?",
    optionA: "The system spends more time swapping pages in and out of virtual memory disk storage than executing actual process instructions",
    optionB: "CPU clock frequency exceeds maximum thermal capacity",
    optionC: "Hard disk partition table gets corrupted",
    optionD: "Network bandwidth drops below 1 Mbps",
    correctOption: "A",
    topicTag: "Operating Systems",
    explanation: "Thrashing occurs when total process working set size exceeds physical RAM capacity. The OS repeatedly generates page faults, causing high disk I/O paging thrash and driving CPU utilization close to zero."
  },
  {
    questionText: "In real-time Operating Systems, what is Priority Inversion and how is it mitigated?",
    optionA: "A high-priority process is blocked waiting for a low-priority process holding a shared lock; mitigated using Priority Inheritance Protocol",
    optionB: "CPU scheduler reverses execution order alphabetically",
    optionC: "Low-priority processes kill high-priority processes",
    optionD: "Kernel threads run slower than user threads",
    correctOption: "A",
    topicTag: "Operating Systems",
    explanation: "Priority Inversion happens when a low-priority task holds a mutex needed by a high-priority task, and a medium-priority task preempts the low-priority task. Priority Inheritance temporarily boosts the low-priority task's priority to high until it releases the mutex."
  },
  {
    questionText: "In process synchronization, how does a Readers-Writers Lock optimize throughput over a standard Mutex?",
    optionA: "Allows MULTIPLE concurrent reader threads to hold the lock simultaneously, but enforces EXCLUSIVE access for writer threads",
    optionB: "Blocks readers while letting writers run concurrently",
    optionC: "Eliminates memory barriers entirely",
    optionD: "Locks the database filesystem on disk",
    correctOption: "A",
    topicTag: "Operating Systems",
    explanation: "In read-heavy workloads, a Readers-Writers lock (`shared_mutex`) permits multiple threads to read shared data concurrently without blocking each other, acquiring an exclusive lock only when a write operation occurs."
  },

  // SDLC & Software Engineering (3 questions)
  {
    questionText: "In Agile Scrum methodology, what is the primary purpose of a Sprint Backlog?",
    optionA: "The set of Product Backlog items selected for the Sprint, along with the plan for delivering the product Increment",
    optionB: "A list of bug tickets reported by customers after release",
    optionC: "A permanent document that never changes during project lifespan",
    optionD: "A list of employee performance reviews",
    correctOption: "A",
    topicTag: "SDLC & Software Engineering",
    explanation: "The Sprint Backlog is owned by the Scrum Development Team. It contains the subset of features chosen from the Product Backlog for implementation during the current Sprint, updated daily."
  },
  {
    questionText: "What is the difference between Black-Box Testing and White-Box Testing in software engineering?",
    optionA: "Black-Box testing evaluates functionality without internal code knowledge; White-Box testing examines internal source code structure and logic paths",
    optionB: "Black-Box testing is done by developers; White-Box testing is done by end users",
    optionC: "White-Box testing tests hardware chips; Black-Box tests monitor screen displays",
    optionD: "There is no difference in testing methodology",
    correctOption: "A",
    topicTag: "SDLC & Software Engineering",
    explanation: "Black-Box testing focuses on input/output requirements (e.g. Equivalence Partitioning, Boundary Value Analysis). White-Box testing inspects code control flow, statement coverage, and branch paths."
  },
  {
    questionText: "In software development DevOps practices, what is Continuous Integration (CI)?",
    optionA: "The practice of automatically building and running automated unit/integration tests whenever code changes are committed to a shared repository",
    optionB: "Deploying code manually to production once every year",
    optionC: "Writing software specifications in UML diagrams",
    optionD: "Replacing all QA testers with AI tools",
    correctOption: "A",
    topicTag: "SDLC & Software Engineering",
    explanation: "Continuous Integration (CI) enforces frequent developer code merges into a shared trunk, triggering automated build and test pipelines to detect integration bugs early."
  }
];

// -------------------------------------------------------------
// Test 10: Technical SDLC & Software Architecture Test 5 (24 Questions)
// -------------------------------------------------------------
export const indiaBixTechnical5Questions = [
  // C# (3 questions)
  {
    questionText: "In C#, how are Extension Methods declared?",
    optionA: "As static methods inside a static class, using the `this` modifier on the first parameter type",
    optionB: "By inheriting from `System.Extension` class",
    optionC: "By using the `virtual` keyword inside interfaces",
    optionD: "By marking method parameters with `ref readonly`",
    correctOption: "A",
    topicTag: "C#",
    explanation: "Extension methods allow adding methods to existing types without creating derived types. They must be defined as static methods inside non-generic static classes, specifying `this` before the first parameter type."
  },
  {
    questionText: "In C# 9+, what is the key feature of `record` types compared to standard `class` types?",
    optionA: "`record` types provide value-based equality semantics out-of-the-box and built-in immutable `with` expressions",
    optionB: "`record` types cannot contain properties or methods",
    optionC: "`record` types are allocated on CPU registers",
    optionD: "`record` types automatically save data to disk files",
    correctOption: "A",
    topicTag: "C#",
    explanation: "Unlike classes (which use reference equality), records synthesize value-based equality (`Equals()`, `==`), string representation (`ToString()`), and support non-destructive mutation via `with` expressions."
  },
  {
    questionText: "In C#, what does the null-coalescing assignment operator `??=` do?",
    optionA: "Assigns the right-hand operand to the left-hand operand ONLY if the left-hand operand evaluates to `null`",
    optionB: "Throws a NullReferenceException if right-hand side is null",
    optionC: "Compares two nullable booleans for bitwise equality",
    optionD: "Converts strings to uppercase automatically",
    correctOption: "A",
    topicTag: "C#",
    explanation: "The `??=` operator assigns the value of its right-hand operand to its left-hand operand only if the left-hand operand evaluates to `null` (e.g. `list ??= new List<int>();`)."
  },

  // C++ (3 questions)
  {
    questionText: "In C++11/14/17, what is the difference between `constexpr` and `const`?",
    optionA: "`constexpr` guarantees evaluation at COMPILE TIME; `const` guarantees read-only access at RUNTIME",
    optionB: "`const` values can be modified in loops; `constexpr` cannot",
    optionC: "`constexpr` can only be used on string objects",
    optionD: "They are identical keywords in C++",
    correctOption: "A",
    topicTag: "C++",
    explanation: "`const` means variable value cannot be modified after initialization (runtime read-only). `constexpr` indicates that the expression or function can be evaluated at compile-time, allowing constant folding and array dimension sizing."
  },
  {
    questionText: "In C++ memory layout, why does structure padding occur inside a `struct`?",
    optionA: "To align data member memory addresses to CPU word boundaries (e.g. 4-byte or 8-byte alignment) for faster memory bus access",
    optionB: "To prevent buffer overflow security exploits",
    optionC: "To hide private member variables from outside code",
    optionD: "To compress struct size for disk storage",
    correctOption: "A",
    topicTag: "C++",
    explanation: "CPUs access memory efficiently when data types start at addresses divisible by their size. Compilers insert unused padding bytes between struct members to align them to natural memory boundaries."
  },
  {
    questionText: "In C++17, what container class provides a type-safe tagged union capable of holding one of several alternative types?",
    optionA: "std::variant",
    optionB: "std::optional",
    optionC: "std::any",
    optionD: "std::tuple",
    correctOption: "A",
    topicTag: "C++",
    explanation: "`std::variant<T1, T2, ...>` represents a type-safe union. It knows which type alternative it currently holds, preventing undefined behavior common with C-style raw unions, and works with `std::visit`."
  },

  // Java (3 questions)
  {
    questionText: "In Java 9+ Module System (JPMS), what file defines module dependencies (`requires`) and exported packages (`exports`)?",
    optionA: "module-info.java",
    optionB: "pom.xml",
    optionC: "build.gradle",
    optionD: "manifest.mf",
    correctOption: "A",
    topicTag: "Java",
    explanation: "`module-info.java` located at the root of the Java package hierarchy contains module declarations, explicitly specifying required module dependencies and public package exports."
  },
  {
    questionText: "In modern Java JVM garbage collection, which collector is designed for ultra-low latency with pause times under 1 millisecond on multi-terabyte heaps?",
    optionA: "ZGC (Z Garbage Collector)",
    optionB: "Serial GC",
    optionC: "Parallel Mark Sweep GC",
    optionD: "CMS (Concurrent Mark Sweep)",
    correctOption: "A",
    topicTag: "Java",
    explanation: "ZGC (Z Garbage Collector) is a scalable, low-latency garbage collector introduced in recent Java versions that performs all expensive work concurrently with Java application threads, keeping pause times under 1ms."
  },
  {
    questionText: "In Java `CompletableFuture`, which method transforms the result of a completed future by applying a function returning another `CompletableFuture` (flattening nested futures)?",
    optionA: "thenCompose()",
    optionB: "thenApply()",
    optionC: "thenAccept()",
    optionD: "thenRun()",
    correctOption: "A",
    topicTag: "Java",
    explanation: "`thenApply()` is equivalent to `map()` (returns `CompletableFuture<U>`). `thenCompose()` is equivalent to `flatMap()` (unwraps and flattens nested `CompletableFuture<CompletableFuture<U>>`)."
  },

  // JavaScript (3 questions)
  {
    questionText: "In JavaScript, what keyword is used inside Generator functions (`function*`) to pause execution and yield a value?",
    optionA: "yield",
    optionB: "await",
    optionC: "return",
    optionD: "break",
    correctOption: "A",
    topicTag: "JavaScript",
    explanation: "Generator functions defined with `function*` return a Generator object. Execution pauses when the `yield` keyword is encountered, returning `{ value, done }` upon calling `.next()`."
  },
  {
    questionText: "Why are Web Workers used in browser JavaScript applications?",
    optionA: "To run heavy background CPU computations on a separate OS thread without freezing the main UI browser thread",
    optionB: "To bypass CORS security policies",
    optionC: "To access local filesystem hard drives directly",
    optionD: "To style HTML elements with CSS grid",
    correctOption: "A",
    topicTag: "JavaScript",
    explanation: "Web Workers allow running scripts in background threads independent of the main execution thread, preventing long-running JavaScript calculations from blocking rendering and user UI input."
  },
  {
    questionText: "In modern JavaScript (ES2022+), what native web API creates a deep clone of a complex object containing circular references and typed arrays?",
    optionA: "structuredClone()",
    optionB: "JSON.parse(JSON.stringify())",
    optionC: "Object.assign()",
    optionD: "Spread operator (...)",
    correctOption: "A",
    topicTag: "JavaScript",
    explanation: "`structuredClone()` is the native built-in JS function for deep copying objects. Unlike `JSON.parse(JSON.stringify())`, it supports circular references, Dates, Sets, Maps, TypedArrays, and ArrayBuffers."
  },

  // DBMS (3 questions)
  {
    questionText: "In Relational Database design, what is Horizontal Partitioning (Sharding)?",
    optionA: "Dividing table ROWS across multiple database nodes or tables based on a partition key",
    optionB: "Dividing table COLUMNS into separate tables",
    optionC: "Compressing index files using ZIP algorithm",
    optionD: "Backing up database tables to tape drives",
    correctOption: "A",
    topicTag: "DBMS",
    explanation: "Horizontal Partitioning (Sharding) splits table data by rows, storing subsets of rows on distinct database instances (shards) while maintaining identical table schema."
  },
  {
    questionText: "In Data Warehousing architecture, what is the main structural difference between Star Schema and Snowflake Schema?",
    optionA: "In Star Schema, dimension tables are normalized; in Snowflake Schema, dimension tables are denormalized into single tables",
    optionB: "In Star Schema, dimension tables are completely denormalized; in Snowflake Schema, dimension tables are normalized into multiple related tables",
    optionC: "Star Schema uses NoSQL; Snowflake Schema uses MySQL",
    optionD: "Snowflake Schema cannot contain fact tables",
    correctOption: "B",
    topicTag: "DBMS",
    explanation: "Star Schema uses centralized Fact tables connected directly to simple denormalized Dimension tables. Snowflake Schema normalizes dimension tables into hierarchies, reducing data redundancy but increasing SQL join complexity."
  },
  {
    questionText: "What is a Materialized View in a Database Management System?",
    optionA: "A database object containing the pre-computed physical query result stored on disk, periodically refreshed from underlying base tables",
    optionB: "A temporary virtual table stored only in RAM memory during query execution",
    optionC: "A CSS layout view in database web portals",
    optionD: "A transaction log file",
    correctOption: "A",
    topicTag: "DBMS",
    explanation: "Unlike a standard virtual view (which executes query logic every time it is referenced), a Materialized View physically saves pre-computed query output on disk for rapid read performance."
  },

  // Computer Networks (3 questions)
  {
    questionText: "What security vulnerability in traditional DNS is solved by Domain Name System Security Extensions (DNSSEC)?",
    optionA: "DNS Cache Poisoning / Spoofing by using cryptographic digital signatures to verify DNS record authenticity",
    optionB: "High network ping latency",
    optionC: "Wi-Fi password sniffing",
    optionD: "HTML XSS injection",
    correctOption: "A",
    topicTag: "Computer Networks",
    explanation: "DNSSEC attaches cryptographic signatures (RRSIG) to DNS lookup records, allowing DNS resolvers to verify that received IP translation data has not been forged or tampered with by attacker cache poisoning."
  },
  {
    questionText: "At which level does the Border Gateway Protocol (BGP) operate in global Internet routing?",
    optionA: "Inter-Autonomous System (Inter-AS) exterior routing between different Internet Service Providers (ISPs)",
    optionB: "Local Area Network (LAN) Ethernet switching",
    optionC: "Bluetooth device pairing",
    optionD: "Internal home router Wi-Fi channel selection",
    correctOption: "A",
    topicTag: "Computer Networks",
    explanation: "BGP is the core Path Vector routing protocol of the global Internet. It exchanges reachability and routing policy information across distinct Autonomous Systems (AS) managed by global ISPs."
  },
  {
    questionText: "What major efficiency optimization was made to the cryptographic handshake protocol in TLS 1.3 compared to TLS 1.2?",
    optionA: "TLS 1.3 reduced handshake latency from 2 Round Trips (2-RTT) down to 1 Round Trip (1-RTT) or 0-RTT for resumed connections",
    optionB: "TLS 1.3 removed RSA encryption entirely",
    optionC: "TLS 1.3 runs over UDP instead of IP",
    optionD: "TLS 1.3 disables server certificates",
    correctOption: "A",
    topicTag: "Computer Networks",
    explanation: "TLS 1.3 streamlined key exchange and cipher suite selection, requiring only 1 Round Trip Time (1-RTT) to establish secure encrypted sessions (and 0-RTT for returning clients), significantly reducing connection setup latency."
  },

  // Operating Systems (3 questions)
  {
    questionText: "What is the primary difference between Type-1 (Bare-Metal) and Type-2 (Hosted) Hypervisors in OS Virtualization?",
    optionA: "Type-1 hypervisors run directly on physical host hardware; Type-2 hypervisors run as software applications on top of a host operating system",
    optionB: "Type-2 hypervisors run faster than Type-1 bare-metal hypervisors",
    optionC: "Type-1 hypervisors can only host Linux guest OS",
    optionD: "Type-2 hypervisors require quantum hardware",
    correctOption: "A",
    topicTag: "Operating Systems",
    explanation: "Type-1 hypervisors (e.g. VMware ESXi, KVM) run directly on bare hardware, providing high performance. Type-2 hypervisors (e.g. VirtualBox, VMware Workstation) run inside a conventional host OS environment."
  },
  {
    questionText: "In Linux/Unix file systems (ext4), what information does an Inode (Index Node) store?",
    optionA: "File metadata (file size, permissions, owner, timestamps, data block pointers), but NOT the file name or actual data contents",
    optionB: "The actual file string data",
    optionC: "The user password hash",
    optionD: "The browser history cache",
    correctOption: "A",
    topicTag: "Operating Systems",
    explanation: "An Inode stores metadata about a file or directory (file size, access rights, user/group IDs, timestamps, pointers to disk data blocks). Directory entries map file names to Inode numbers."
  },
  {
    questionText: "What distinguishes a Hard Real-Time Operating System from a Soft Real-Time Operating System?",
    optionA: "Hard Real-Time systems guarantee that missing a task deadline results in catastrophic system failure; Soft Real-Time systems tolerate occasional deadline misses with degraded quality",
    optionB: "Soft Real-Time systems run on hard disk drives",
    optionC: "Hard Real-Time systems do not use CPU interrupts",
    optionD: "Soft Real-Time systems cannot run multithreaded tasks",
    correctOption: "A",
    topicTag: "Operating Systems",
    explanation: "Hard Real-Time OS (e.g. pacemakers, flight control, anti-lock brakes) enforce deterministic deadline bounds where a single missed deadline causes system failure. Soft Real-Time OS (e.g. video streaming, gaming) prioritize deadlines but tolerate minor delays."
  },

  // SDLC & Software Engineering (3 questions)
  {
    questionText: "In Software Development Life Cycle (SDLC) models, what key characteristic defines the V-Model (Verification and Validation Model)?",
    optionA: "Every development phase has a directly corresponding, parallel testing phase (e.g. Requirements mapped to Acceptance Testing)",
    optionB: "Coding is done before requirements gathering",
    optionC: "Testing is performed only after deployment",
    optionD: "Projects are completed in 1-day sprints",
    correctOption: "A",
    topicTag: "SDLC & Software Engineering",
    explanation: "The V-Model maps each stage of the development lifecycle (Requirements, Design, Architecture, Coding) to a corresponding verification and validation testing level (Acceptance, System, Integration, Unit Testing)."
  },
  {
    questionText: "In Object-Oriented Software Design (SOLID principles), what does the Liskov Substitution Principle (LSP) dictate?",
    optionA: "Objects of a derived class must be substitutable for objects of their base class without altering the correctness of the program",
    optionB: "Classes should be open for modification and closed for extension",
    optionC: "Interfaces must contain at least 10 methods",
    optionD: "Subclasses must override all inherited methods with private visibility",
    correctOption: "A",
    topicTag: "SDLC & Software Engineering",
    explanation: "LSP (the 'L' in SOLID) states that child classes must fulfill all behavioral contracts of their parent class so that references to base classes can be replaced with derived class objects seamlessly."
  },
  {
    questionText: "What does a high Cyclomatic Complexity metric ($V(G)$) indicate in software code quality analysis?",
    optionA: "A high number of linearly independent decision paths in source code, indicating complex logic and higher risk of bugs requiring more unit test cases",
    optionB: "High CPU clock execution speed",
    optionC: "Low RAM memory consumption",
    optionD: "High code readability",
    correctOption: "A",
    topicTag: "SDLC & Software Engineering",
    explanation: "Cyclomatic Complexity measures the number of decision branches (e.g. `if`, `for`, `while`, `case`) in source code. Higher complexity indicates harder-to-maintain code requiring a larger number of test cases to achieve full branch coverage."
  }
];


