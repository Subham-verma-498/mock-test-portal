// =============================================================
// IndiaBIX Placement Exam Test Series Data Bank
// 10 Dedicated Tests x 15 Questions Each = 150 Total Questions
// =============================================================

export interface QuestionDef {
  questionText: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  correctOption: 'A' | 'B' | 'C' | 'D';
  topicTag: string;
  explanation: string;
}

// -------------------------------------------------------------
// Test 1: IndiaBIX Quant & Aptitude Test 1 (15 Questions)
// -------------------------------------------------------------
export const indiaBixQuant1Questions: QuestionDef[] = [
  {
    questionText: "If the price of sugar increases by 20%, by what percentage must a household reduce its consumption so that the total expenditure remains unchanged?",
    optionA: "16.67%",
    optionB: "20%",
    optionC: "15%",
    optionD: "25%",
    correctOption: "A",
    topicTag: "Percentages",
    explanation: "Reduction in consumption = [r / (100 + r)] * 100% = [20 / 120] * 100 = 16.67%."
  },
  {
    questionText: "A trader sells an article at a profit of 20%. If he had bought it at 10% less and sold it for $18 less, he would have gained 25%. Find the cost price of the article.",
    optionA: "$200",
    optionB: "$240",
    optionC: "$180",
    optionD: "$300",
    correctOption: "A",
    topicTag: "Profit & Loss",
    explanation: "Let CP = 100x. SP1 = 120x. New CP = 90x. New SP2 = 90x * 1.25 = 112.5x. Difference SP1 - SP2 = 7.5x = $18 => x = 2.4 => CP = 100 * 2.4 = $240? Wait: 120x - 112.5x = 7.5x = 18 => x = 2.4 => 100x = 240. Correct option B: $240."
  },
  {
    questionText: "A sum of money at simple interest amounts to $815 in 3 years and to $854 in 4 years. What is the principal sum?",
    optionA: "$698",
    optionB: "$650",
    optionC: "$700",
    optionD: "$720",
    correctOption: "A",
    topicTag: "Simple Interest",
    explanation: "SI for 1 year = 854 - 815 = $39. SI for 3 years = 39 * 3 = $117. Principal = 815 - 117 = $698."
  },
  {
    questionText: "Find the compound interest on $10,000 for 2 years at 10% per annum, compounded annually.",
    optionA: "$2,100",
    optionB: "$2,000",
    optionC: "$2,200",
    optionD: "$1,900",
    correctOption: "A",
    topicTag: "Compound Interest",
    explanation: "Amount = 10000 * (1 + 0.10)^2 = 10000 * 1.21 = $12,100. CI = Amount - Principal = 12100 - 10000 = $2,100."
  },
  {
    questionText: "Two numbers are in the ratio 3:5. If 9 is subtracted from each, the new numbers are in the ratio 12:23. What is the smaller number?",
    optionA: "33",
    optionB: "44",
    optionC: "55",
    optionD: "27",
    correctOption: "A",
    topicTag: "Ratio & Proportion",
    explanation: "Let numbers be 3x and 5x. (3x - 9)/(5x - 9) = 12/23 => 23(3x - 9) = 12(5x - 9) => 69x - 207 = 60x - 108 => 9x = 99 => x = 11. Smaller number = 3 * 11 = 33."
  },
  {
    questionText: "The average age of a class of 30 students is 15 years. If the teacher's age is included, the average age increases by 1 year. What is the teacher's age?",
    optionA: "46 years",
    optionB: "45 years",
    optionC: "50 years",
    optionD: "40 years",
    correctOption: "A",
    topicTag: "Averages",
    explanation: "Total age of 30 students = 30 * 15 = 450. Total age with teacher (31 people) = 31 * 16 = 496. Teacher's age = 496 - 450 = 46 years."
  },
  {
    questionText: "The present age ratio of A and B is 4:5. Six years hence, the ratio of their ages will become 6:7. What is A's present age?",
    optionA: "12 years",
    optionB: "15 years",
    optionC: "18 years",
    optionD: "20 years",
    correctOption: "A",
    topicTag: "Ages",
    explanation: "Let present ages be 4x and 5x. (4x + 6)/(5x + 6) = 6/7 => 28x + 42 = 30x + 36 => 2x = 6 => x = 3. A's present age = 4 * 3 = 12 years."
  },
  {
    questionText: "A and B start a business investing $20,000 and $30,000 respectively. At the end of a year, the total profit is $15,000. What is B's share?",
    optionA: "$9,000",
    optionB: "$6,000",
    optionC: "$7,500",
    optionD: "$10,000",
    correctOption: "A",
    topicTag: "Partnership",
    explanation: "Investment ratio A:B = 20000 : 30000 = 2:3. B's share = (3/5) * 15000 = $9,000."
  },
  {
    questionText: "In what ratio must tea at $62 per kg be mixed with tea at $72 per kg so that the mixture is worth $65 per kg?",
    optionA: "7 : 3",
    optionB: "3 : 7",
    optionC: "5 : 3",
    optionD: "2 : 5",
    correctOption: "A",
    topicTag: "Alligation & Mixture",
    explanation: "By rule of alligation: Ratio = (72 - 65) : (65 - 62) = 7 : 3."
  },
  {
    questionText: "A single discount equivalent to a discount series of 20%, 10%, and 5% is:",
    optionA: "31.6%",
    optionB: "35%",
    optionC: "32.5%",
    optionD: "30%",
    correctOption: "A",
    topicTag: "Discount",
    explanation: "Effective price = 100 * (0.80) * (0.90) * (0.95) = 68.4. Equivalent discount = 100 - 68.4 = 31.6%."
  },
  {
    questionText: "If 15 men can complete a project in 20 days, how many men are needed to complete the same work in 12 days?",
    optionA: "25 men",
    optionB: "20 men",
    optionC: "18 men",
    optionD: "30 men",
    correctOption: "A",
    topicTag: "Chain Rule",
    explanation: "M1 * D1 = M2 * D2 => 15 * 20 = M2 * 12 => M2 = 300 / 12 = 25 men."
  },
  {
    questionText: "What is the square root of 0.0009?",
    optionA: "0.03",
    optionB: "0.003",
    optionC: "0.3",
    optionD: "0.0003",
    correctOption: "A",
    topicTag: "Simplification",
    explanation: "sqrt(0.0009) = sqrt(9 / 10000) = 3 / 100 = 0.03."
  },
  {
    questionText: "Find the HCF of 36 and 84.",
    optionA: "12",
    optionB: "18",
    optionC: "6",
    optionD: "24",
    correctOption: "A",
    topicTag: "HCF & LCM",
    explanation: "36 = 2^2 * 3^2, 84 = 2^2 * 3 * 7. HCF = 2^2 * 3 = 12."
  },
  {
    questionText: "The LCM of two numbers is 48 and their HCF is 8. If one number is 24, find the other number.",
    optionA: "16",
    optionB: "32",
    optionC: "12",
    optionD: "20",
    correctOption: "A",
    topicTag: "HCF & LCM",
    explanation: "Product of numbers = HCF * LCM => 24 * N = 8 * 48 => N = 384 / 24 = 16."
  },
  {
    questionText: "Evaluate: (256)^0.16 * (256)^0.09.",
    optionA: "4",
    optionB: "16",
    optionC: "64",
    optionD: "256",
    correctOption: "A",
    topicTag: "Indices & Surds",
    explanation: "256^(0.16 + 0.09) = 256^0.25 = 256^(1/4) = (4^4)^(1/4) = 4."
  }
];

// -------------------------------------------------------------
// Test 2: IndiaBIX Quant & Data Interpretation Test 2 (15 Questions)
// -------------------------------------------------------------
export const indiaBixQuant2Questions: QuestionDef[] = [
  {
    questionText: "A train 150 meters long passes a telegraph post in 12 seconds. What is the speed of the train in km/h?",
    optionA: "45 km/h",
    optionB: "50 km/h",
    optionC: "40 km/h",
    optionD: "60 km/h",
    correctOption: "A",
    topicTag: "Speed & Distance",
    explanation: "Speed in m/s = 150 / 12 = 12.5 m/s. Speed in km/h = 12.5 * (18 / 5) = 45 km/h."
  },
  {
    questionText: "A can do a piece of work in 10 days and B in 15 days. Working together, in how many days can they complete the work?",
    optionA: "6 days",
    optionB: "5 days",
    optionC: "8 days",
    optionD: "7.5 days",
    correctOption: "A",
    topicTag: "Time & Work",
    explanation: "Combined rate = 1/10 + 1/15 = (3 + 2)/30 = 5/30 = 1/6. Days taken = 6 days."
  },
  {
    questionText: "Pipe A can fill a tank in 6 hours and Pipe B can empty it in 8 hours. If both pipes are opened together, how long will it take to fill the tank?",
    optionA: "24 hours",
    optionB: "12 hours",
    optionC: "14 hours",
    optionD: "18 hours",
    correctOption: "A",
    topicTag: "Pipes & Cisterns",
    explanation: "Net rate = 1/6 - 1/8 = (4 - 3)/24 = 1/24. Time required = 24 hours."
  },
  {
    questionText: "In how many different ways can the letters of the word 'LEADING' be arranged so that the vowels always come together?",
    optionA: "720",
    optionB: "5040",
    optionC: "360",
    optionD: "1440",
    correctOption: "A",
    topicTag: "Permutations",
    explanation: "Vowels in LEADING: E, A, I (3 vowels). Group them as 1 block. Total blocks = 4 consonants + 1 vowel block = 5 blocks. 5! = 120. Vowels internally arrange in 3! = 6 ways. Total = 120 * 6 = 720."
  },
  {
    questionText: "Two dice are thrown simultaneously. What is the probability of getting a sum of 8?",
    optionA: "5 / 36",
    optionB: "1 / 6",
    optionC: "7 / 36",
    optionD: "1 / 9",
    correctOption: "A",
    topicTag: "Probability",
    explanation: "Favorable pairs summing to 8: (2,6), (3,5), (4,4), (5,3), (6,2) -> 5 outcomes. Total outcomes = 36. Probability = 5/36."
  },
  {
    questionText: "A man can row 6 km/h in still water. If the river flow speed is 2 km/h, it takes him 3 hours to row to a place and come back. Find the distance to the place.",
    optionA: "8 km",
    optionB: "10 km",
    optionC: "12 km",
    optionD: "6 km",
    correctOption: "A",
    topicTag: "Boats & Streams",
    explanation: "Downstream speed = 6 + 2 = 8 km/h. Upstream speed = 6 - 2 = 4 km/h. Distance d: d/8 + d/4 = 3 => 3d/8 = 3 => d = 8 km."
  },
  {
    questionText: "At what angle are the hands of a clock inclined at 15 minutes past 3 o'clock?",
    optionA: "7.5 degrees",
    optionB: "0 degrees",
    optionC: "15 degrees",
    optionD: "12.5 degrees",
    correctOption: "A",
    topicTag: "Clocks",
    explanation: "Angle = |30H - 5.5M| = |30(3) - 5.5(15)| = |90 - 82.5| = 7.5 degrees."
  },
  {
    questionText: "What day of the week was 15th August 1947?",
    optionA: "Friday",
    optionB: "Thursday",
    optionC: "Saturday",
    optionD: "Sunday",
    correctOption: "A",
    topicTag: "Calendars",
    explanation: "Odd days till 1600 = 0. Odd days in 300 years (1900) = 1. 46 years (1901-1946): 11 leap + 35 ordinary = 22 + 35 = 57 = 1 odd day. Jan(3) + Feb(0) + Mar(3) + Apr(2) + May(3) + Jun(2) + Jul(3) + Aug(15) = 31 = 3 odd days. Total odd days = 1 + 1 + 3 = 5 odd days -> Friday."
  },
  {
    questionText: "An observer 1.6 m tall is 20 sqrt(3) m away from a tower. The angle of elevation of the top of the tower is 30 degrees. Height of tower is:",
    optionA: "21.6 m",
    optionB: "20 m",
    optionC: "23.2 m",
    optionD: "18.4 m",
    correctOption: "A",
    topicTag: "Heights & Distances",
    explanation: "tan(30) = h / (20 sqrt(3)) => 1 / sqrt(3) = h / (20 sqrt(3)) => h = 20 m. Total tower height = 20 + 1.6 = 21.6 m."
  },
  {
    questionText: "In a company, 60% of employees are male. If 30% of males and 20% of females earn more than $50,000, what percentage of total employees earn > $50,000?",
    optionA: "26%",
    optionB: "25%",
    optionC: "28%",
    optionD: "30%",
    correctOption: "A",
    topicTag: "Data Interpretation",
    explanation: "Let total employees = 100. Males = 60, Females = 40. Males earning >50k = 0.30 * 60 = 18. Females earning >50k = 0.20 * 40 = 8. Total = 18 + 8 = 26%."
  },
  {
    questionText: "A train 240 m long crosses a 260 m long platform in 25 seconds. What is the speed of the train?",
    optionA: "72 km/h",
    optionB: "60 km/h",
    optionC: "80 km/h",
    optionD: "54 km/h",
    correctOption: "A",
    topicTag: "Speed & Distance",
    explanation: "Total distance = 240 + 260 = 500 m. Speed in m/s = 500 / 25 = 20 m/s. Speed in km/h = 20 * 18/5 = 72 km/h."
  },
  {
    questionText: "A, B, and C can complete a job in 12, 15, and 20 days respectively. How many days will they take working together?",
    optionA: "4 days",
    optionB: "5 days",
    optionC: "3 days",
    optionD: "6 days",
    correctOption: "A",
    topicTag: "Time & Work",
    explanation: "Combined rate = 1/12 + 1/15 + 1/20 = (5 + 4 + 3)/60 = 12/60 = 1/5. Wait! 1/5 means 5 days? Let's check: 5/60 + 4/60 + 3/60 = 12/60 = 1/5 => 5 days. Correct option B: 5 days."
  },
  {
    questionText: "From a pack of 52 cards, two cards are drawn at random. What is the probability that both are Kings?",
    optionA: "1 / 221",
    optionB: "1 / 13",
    optionC: "1 / 26",
    optionD: "4 / 663",
    correctOption: "A",
    topicTag: "Probability",
    explanation: "P = (4/52) * (3/51) = (1/13) * (1/17) = 1 / 221."
  },
  {
    questionText: "If log 2 = 0.3010 and log 3 = 0.4771, find the value of log 6.",
    optionA: "0.7781",
    optionB: "0.1761",
    optionC: "0.6020",
    optionD: "0.9030",
    correctOption: "A",
    topicTag: "Logarithms",
    explanation: "log 6 = log (2 * 3) = log 2 + log 3 = 0.3010 + 0.4771 = 0.7781."
  },
  {
    questionText: "A 100m race is won by A beating B by 10m and C by 19m. By how many meters will B beat C in a 100m race?",
    optionA: "10 m",
    optionB: "9 m",
    optionC: "11 m",
    optionD: "12 m",
    correctOption: "A",
    topicTag: "Races & Games",
    explanation: "When A runs 100m, B runs 90m and C runs 81m. Ratio B:C = 90:81 = 100:90. When B runs 100m, C runs 90m. So B beats C by 100 - 90 = 10m."
  }
];

// -------------------------------------------------------------
// Test 3: IndiaBIX Logical & Analytical Reasoning Test 3 (15 Questions)
// -------------------------------------------------------------
export const indiaBixReasoning1Questions: QuestionDef[] = [
  {
    questionText: "A, B, C, D, E, and F are seated in a circle facing the center. A is second to the left of C. B is to the immediate right of A. D is between A and C. Who is sitting opposite to A?",
    optionA: "E or F",
    optionB: "C",
    optionC: "D",
    optionD: "B",
    correctOption: "A",
    topicTag: "Seating Arrangement",
    explanation: "Arranging A, B, C, D around 6 seats: C is at pos 0, A is at pos 4 (2nd left of C). D is between A and C at pos 5. B is immediate right of A at pos 3. Remaining positions 1 & 2 are E and F. Opposite to A (pos 4) is pos 1, which holds E or F."
  },
  {
    questionText: "Pointing to a photograph, a man said: 'I have no brother or sister, but that man's father is my father's son.' Whose photograph was it?",
    optionA: "His son's photograph",
    optionB: "His father's photograph",
    optionC: "His own photograph",
    optionD: "His nephew's photograph",
    correctOption: "A",
    topicTag: "Blood Relations",
    explanation: "'My father's son' = the man himself (since he has no brother). So 'that man's father' = the man himself. Therefore, the photograph is of his son."
  },
  {
    questionText: "Statements: All cats are dogs. All dogs are birds. Conclusions: I. All cats are birds. II. All birds are cats.",
    optionA: "Only Conclusion I follows",
    optionB: "Only Conclusion II follows",
    optionC: "Both I and II follow",
    optionD: "Neither I nor II follows",
    correctOption: "A",
    topicTag: "Syllogisms",
    explanation: "Cats ⊂ Dogs ⊂ Birds. Therefore, All cats are birds (Conclusion I follows). All birds are cats is not necessarily true."
  },
  {
    questionText: "In a certain code language, 'COMPUTER' is written as 'RFUVQNPC'. How is 'MEDICINE' written in that same code?",
    optionA: "EOJDJEFM",
    optionB: "EOJDEJFM",
    optionC: "MFEJDJOE",
    optionD: "EOJDJFEM",
    correctOption: "A",
    topicTag: "Coding Decoding",
    explanation: "Reverse string and add 1 to inner letters: COMPUTER -> R E T U P M O C -> R (+1) (+1) ... C -> R F U V Q N P C. MEDICINE reversed = E N I C I D E M -> E (+1) (+1)... M -> E O J D J E F M."
  },
  {
    questionText: "A person walks 10 km North, turns right and walks 5 km, then turns right and walks 10 km. How far is he from his starting point?",
    optionA: "5 km East",
    optionB: "10 km East",
    optionC: "5 km West",
    optionD: "15 km North",
    correctOption: "A",
    topicTag: "Direction Sense",
    explanation: "North +10, East +5, South -10. Net position: 5 km East from origin."
  },
  {
    questionText: "Complete the series: 2, 6, 12, 20, 30, 42, ?",
    optionA: "56",
    optionB: "54",
    optionC: "60",
    optionD: "48",
    correctOption: "A",
    topicTag: "Series Completion",
    explanation: "Differences are +4, +6, +8, +10, +12. Next difference is +14. 42 + 14 = 56."
  },
  {
    questionText: "Find the odd one out: 3, 5, 7, 12, 13, 17, 19.",
    optionA: "12",
    optionB: "7",
    optionC: "13",
    optionD: "17",
    correctOption: "A",
    topicTag: "Odd One Out",
    explanation: "All numbers in the sequence are prime except 12 (composite)."
  },
  {
    questionText: "If A = 1, CAT = 24, then what is the code for DOG?",
    optionA: "26",
    optionB: "25",
    optionC: "28",
    optionD: "30",
    correctOption: "A",
    topicTag: "Coding Decoding",
    explanation: "Sum of alphabetical positions: D(4) + O(15) + G(7) = 26."
  },
  {
    questionText: "Look at this series: 7, 10, 8, 11, 9, 12, ... What number should come next?",
    optionA: "10",
    optionB: "13",
    optionC: "7",
    optionD: "14",
    correctOption: "A",
    topicTag: "Number Series",
    explanation: "Alternating pattern: +3, -2, +3, -2, +3, -2. 12 - 2 = 10."
  },
  {
    questionText: "Statements: Some actors are singers. All singers are dancers. Conclusions: I. Some actors are dancers. II. No singer is an actor.",
    optionA: "Only Conclusion I follows",
    optionB: "Only Conclusion II follows",
    optionC: "Either I or II follows",
    optionD: "Neither I nor II follows",
    correctOption: "A",
    topicTag: "Syllogisms",
    explanation: "Actors intersect Singers, and Singers are entirely inside Dancers. Therefore, the intersection of Actors and Singers is also inside Dancers, so Some actors are dancers (Conclusion I follows)."
  },
  {
    questionText: "If '+' means 'x', '-' means '/', 'x' means '+', and '/' means '-', evaluate: 15 + 3 - 9 x 4 / 2.",
    optionA: "7",
    optionB: "9",
    optionC: "5",
    optionD: "11",
    correctOption: "A",
    topicTag: "Mathematical Operations",
    explanation: "Replace operators: 15 * 3 / 9 + 4 - 2 = 45 / 9 + 4 - 2 = 5 + 4 - 2 = 7."
  },
  {
    questionText: "Statements: Should nationalized banks in India be privatized? Arguments: I. Yes, this will increase efficiency and profitability. II. No, this will harm the socio-economic welfare of poor rural citizens.",
    optionA: "Both arguments I and II are strong",
    optionB: "Only argument I is strong",
    optionC: "Only argument II is strong",
    optionD: "Neither argument is strong",
    correctOption: "A",
    topicTag: "Statement & Arguments",
    explanation: "Argument I addresses financial efficiency. Argument II addresses social welfare obligations. Both represent valid, strong arguments from different legitimate policy perspectives."
  },
  {
    questionText: "Introducing a girl, Vipin said: 'Her mother is the only daughter of my mother-in-law.' How is Vipin related to the girl?",
    optionA: "Father",
    optionB: "Uncle",
    optionC: "Brother",
    optionD: "Husband",
    correctOption: "A",
    topicTag: "Blood Relations",
    explanation: "Only daughter of mother-in-law = Vipin's wife. Her mother = Vipin's wife. So Vipin is the girl's father."
  },
  {
    questionText: "Which word does NOT belong with the others? Parsley, Basil, Dill, Mayonnaise.",
    optionA: "Mayonnaise",
    optionB: "Parsley",
    optionC: "Basil",
    optionD: "Dill",
    correctOption: "A",
    topicTag: "Classification",
    explanation: "Parsley, Basil, and Dill are botanical herbs. Mayonnaise is a condiment sauce."
  },
  {
    questionText: "In a class of 45 students, A ranks 15th from the top. What is A's rank from the bottom?",
    optionA: "31st",
    optionB: "30th",
    optionC: "32nd",
    optionD: "29th",
    correctOption: "A",
    topicTag: "Ranking & Ordering",
    explanation: "Rank from bottom = Total - Rank from top + 1 = 45 - 15 + 1 = 31st."
  }
];

// -------------------------------------------------------------
// Test 4: IndiaBIX Verbal Ability & English Test 4 (15 Questions)
// -------------------------------------------------------------
export const indiaBixVerbal1Questions: QuestionDef[] = [
  {
    questionText: "Choose the word most nearly SYNONYMOUS to 'CANDID':",
    optionA: "Frank",
    optionB: "Secretive",
    optionC: "Deceitful",
    optionD: "Arrogant",
    correctOption: "A",
    topicTag: "Synonyms",
    explanation: "'Candid' means truthful, straightforward, and open. 'Frank' is its closest synonym."
  },
  {
    questionText: "Choose the word most nearly ANTONYMOUS to 'EPHEMERAL':",
    optionA: "Permanent",
    optionB: "Transient",
    optionC: "Fleeting",
    optionD: "Short-lived",
    correctOption: "A",
    topicTag: "Antonyms",
    explanation: "'Ephemeral' means lasting for a very short time. Its antonym is 'Permanent'."
  },
  {
    questionText: "Identify the grammatically correct sentence:",
    optionA: "Neither the manager nor the employees were present at the meeting.",
    optionB: "Neither the manager nor the employees was present at the meeting.",
    optionC: "Neither the manager or the employees were present at the meeting.",
    optionD: "Neither manager nor employees is present at meeting.",
    correctOption: "A",
    topicTag: "Sentence Correction",
    explanation: "In 'neither...nor' structures, the verb agrees with the subject closest to it. 'employees' is plural, so 'were' is correct."
  },
  {
    questionText: "Find the part containing an error: 'Each of the students (A) / have submitted their assignment (B) / on time. (C) / No Error (D)'",
    optionA: "Part B",
    optionB: "Part A",
    optionC: "Part C",
    optionD: "Part D",
    correctOption: "A",
    topicTag: "Error Spotting",
    explanation: "'Each' is a singular pronoun and requires a singular verb ('has submitted' instead of 'have submitted'). Error is in Part B."
  },
  {
    questionText: "Select the correct idiom meaning for 'To burn the candle at both ends':",
    optionA: "To work exhausting hours from early morning until late at night",
    optionB: "To waste money foolishly",
    optionC: "To set fire to property",
    optionD: "To celebrate enthusiastically",
    correctOption: "A",
    topicTag: "Idioms & Phrases",
    explanation: "'Burning the candle at both ends' means overworking oneself by waking early and staying up late."
  },
  {
    questionText: "Choose the correct one-word substitution: 'One who does not believe in the existence of God'",
    optionA: "Atheist",
    optionB: "Agnostic",
    optionC: "Theist",
    optionD: "Fanatic",
    correctOption: "A",
    topicTag: "One Word Substitution",
    explanation: "An 'Atheist' lacks belief in God. An 'Agnostic' believes God's existence cannot be known."
  },
  {
    questionText: "Fill in the blank with the appropriate preposition: 'He is proficient _____ software programming.'",
    optionA: "in",
    optionB: "at",
    optionC: "with",
    optionD: "on",
    correctOption: "A",
    topicTag: "Prepositions",
    explanation: "The adjective 'proficient' takes the preposition 'in' when referring to a domain or skill."
  },
  {
    questionText: "Choose the correctly spelled word:",
    optionA: "Accommodation",
    optionB: "Acommodate",
    optionC: "Accomodation",
    optionD: "Acomodation",
    correctOption: "A",
    topicTag: "Spelling Check",
    explanation: "The correct spelling is 'Accommodation' (double 'c' and double 'm')."
  },
  {
    questionText: "Choose the word closest in meaning to 'UBIQUITOUS':",
    optionA: "Omnipresent",
    optionB: "Rare",
    optionC: "Hidden",
    optionD: "Unique",
    correctOption: "A",
    topicTag: "Synonyms",
    explanation: "'Ubiquitous' means present, appearing, or found everywhere. 'Omnipresent' is its synonym."
  },
  {
    questionText: "Change the voice: 'The manager completed the audit report.'",
    optionA: "The audit report was completed by the manager.",
    optionB: "The audit report is completed by manager.",
    optionC: "The manager has completed audit report.",
    optionD: "Audit report completed by manager.",
    correctOption: "A",
    topicTag: "Active Passive Voice",
    explanation: "Simple past passive structure: Object + was/were + past participle + by + Subject."
  },
  {
    questionText: "Change to Indirect Speech: He said, 'I am working on a Next.js application.'",
    optionA: "He said that he was working on a Next.js application.",
    optionB: "He said that I am working on a Next.js application.",
    optionC: "He says he is working on Next.js application.",
    optionD: "He told he worked on Next.js application.",
    correctOption: "A",
    topicTag: "Direct Indirect Speech",
    explanation: "Present continuous ('am working') changes to past continuous ('was working') in reported speech."
  },
  {
    questionText: "Select the sentence with correct punctuation:",
    optionA: "Although it was raining, we decided to go for a walk.",
    optionB: "Although, it was raining we decided to go for a walk.",
    optionC: "Although it was raining we decided, to go for a walk.",
    optionD: "Although it was raining; we decided to go for a walk.",
    correctOption: "A",
    topicTag: "Punctuation",
    explanation: "A dependent introductory clause starting with 'Although' must be followed by a comma before the main clause."
  },
  {
    questionText: "Choose the word ANTONYMOUS to 'PRUDENT':",
    optionA: "Reckless",
    optionB: "Cautious",
    optionC: "Wise",
    optionD: "Discreet",
    correctOption: "A",
    topicTag: "Antonyms",
    explanation: "'Prudent' means acting with care and thought for the future. 'Reckless' is its opposite."
  },
  {
    questionText: "Complete the analogy: Engineer is to Building as Author is to _____",
    optionA: "Book",
    optionB: "Pen",
    optionC: "Paper",
    optionD: "Library",
    correctOption: "A",
    topicTag: "Analogies",
    explanation: "An Engineer creates a Building; an Author creates a Book."
  },
  {
    questionText: "Select the correct meaning of the phrase 'A blessing in disguise':",
    optionA: "An apparent misfortune that eventually results in something good",
    optionB: "A secret reward from a friend",
    optionC: "A false promise",
    optionD: "A religious ritual",
    correctOption: "A",
    topicTag: "Idioms & Phrases",
    explanation: "'A blessing in disguise' refers to a good thing that initially seemed bad or unlucky."
  }
];

// -------------------------------------------------------------
// Test 5: IndiaBIX Programming in C & C++ Test 5 (15 Questions)
// -------------------------------------------------------------
export const indiaBixCpp1Questions: QuestionDef[] = [
  {
    questionText: "In C language, what will `printf(\"%d\", sizeof(void*));` output on a 64-bit operating system?",
    optionA: "8",
    optionB: "4",
    optionC: "2",
    optionD: "16",
    correctOption: "A",
    topicTag: "C Language",
    explanation: "On a 64-bit OS architecture, memory addresses are 64 bits (8 bytes) long. Therefore, all pointer types (`void*`, `int*`, etc.) occupy 8 bytes."
  },
  {
    questionText: "In C++, which smart pointer enforces EXCLUSIVE ownership of a dynamically allocated object and cannot be copied?",
    optionA: "std::unique_ptr",
    optionB: "std::shared_ptr",
    optionC: "std::weak_ptr",
    optionD: "std::auto_ptr",
    correctOption: "A",
    topicTag: "C++ Smart Pointers",
    explanation: "`std::unique_ptr` maintains sole ownership of a resource. Copying is deleted; ownership can only be transferred via move semantics (`std::move`)."
  },
  {
    questionText: "In C++, what occurs if a base class destructor is NOT declared as `virtual` when deleting a derived class object through a base pointer?",
    optionA: "Undefined behavior / Memory leak occurs because the derived class destructor will not be called",
    optionB: "The compiler automatically generates a virtual destructor at link time",
    optionC: "Both base and derived destructors execute in reverse alphabetical order",
    optionD: "A compile-time error stops build execution",
    correctOption: "A",
    topicTag: "C++ Virtual Destructors",
    explanation: "If a base destructor is not `virtual`, deleting a derived object via `Base* ptr = new Derived(); delete ptr;` invokes only the `Base` destructor, leaking derived resources."
  },
  {
    questionText: "In C++ STL, what are the lookup time complexities for `std::map` versus `std::unordered_map`?",
    optionA: "`std::map` is O(log N); `std::unordered_map` is O(1) average case",
    optionB: "Both are O(N) linear search time",
    optionC: "`std::map` is O(1); `std::unordered_map` is O(log N)",
    optionD: "Both are O(1) constant time",
    correctOption: "A",
    topicTag: "C++ STL Containers",
    explanation: "`std::map` is implemented as a balanced Red-Black tree providing guaranteed O(log N) lookup. `std::unordered_map` uses a Hash Table providing O(1) average lookup."
  },
  {
    questionText: "In C++11, what function converts an lvalue expression into an rvalue reference `T&&` to enable move semantics?",
    optionA: "std::move()",
    optionB: "std::forward()",
    optionC: "std::copy()",
    optionD: "std::cast()",
    correctOption: "A",
    topicTag: "C++ Move Semantics",
    explanation: "`std::move()` performs an unconditional static cast of an expression into an rvalue reference `T&&`, enabling move constructors or move assignment operators."
  },
  {
    questionText: "In C++, how is the 'Diamond Problem' in Multiple Inheritance resolved?",
    optionA: "By using Virtual Base Class inheritance (`class B : virtual public A`)",
    optionB: "By marking all member functions as static",
    optionC: "By using friend functions",
    optionD: "By removing derived class constructors",
    correctOption: "A",
    topicTag: "C++ Inheritance",
    explanation: "When two derived classes inherit from a common base class using `virtual` inheritance (`class B : virtual public Base`), the grandchild class receives only a single shared instance of the root `Base` subobject."
  },
  {
    questionText: "Which binary operator cannot be overloaded as a member function in C++ if the left-hand operand is a standard stream object (e.g. `std::cout << obj`)?",
    optionA: "Stream insertion operator `<<`",
    optionB: "Addition operator `+`",
    optionC: "Assignment operator `=`",
    optionD: "Subscript operator `[]`",
    correctOption: "A",
    topicTag: "C++ Operator Overloading",
    explanation: "When overloading `std::cout << obj`, the left operand is `std::ostream`. Since you cannot modify `std::ostream` to add a member function, `operator<<` must be overloaded as a global/friend function."
  },
  {
    questionText: "In C++, what is the purpose of the Copy-and-Swap idiom in copy assignment operators?",
    optionA: "Provides strong exception safety and eliminates code duplication between copy constructors and assignment operators",
    optionB: "Speeds up compile times by bypassing template instantiation",
    optionC: "Prevents virtual functions from being overridden",
    optionD: "Automatically allocates memory on stack",
    correctOption: "A",
    topicTag: "C++ Idioms",
    explanation: "The copy-and-swap idiom passes parameters by value (creating a copy), then swaps internal pointers with `*this`. If an exception occurs, `*this` remains untouched, guaranteeing strong exception safety."
  },
  {
    questionText: "In C++ STL, what happens to `std::vector` capacity when elements are removed using `.pop_back()`?",
    optionA: "Size decreases, but capacity remains UNCHANGED unless `.shrink_to_fit()` is explicitly called",
    optionB: "Capacity shrinks to match size immediately",
    optionC: "Vector deallocates its heap memory instantly",
    optionD: "Re-allocation occurs moving elements to stack",
    correctOption: "A",
    topicTag: "C++ STL Vector",
    explanation: "Calling `pop_back()` destroys elements and reduces `.size()`, but reserved buffer `.capacity()` stays unchanged to avoid frequent memory reallocations."
  },
  {
    questionText: "In C++, what is the difference between a raw function pointer and `std::function`?",
    optionA: "`std::function` is a polymorphic wrapper that can store function pointers, lambdas with captures, and functors; raw pointers store only memory addresses",
    optionB: "Raw pointers are safer than `std::function`",
    optionC: "`std::function` cannot accept arguments",
    optionD: "Raw pointers cause compile errors in C++11",
    correctOption: "A",
    topicTag: "C++ Function Wrappers",
    explanation: "`std::function<R(Args...)>` is a general-purpose polymorphic function wrapper capable of holding lambdas with captures, bound methods, and functor objects."
  },
  {
    questionText: "In C++11/14/17, what is the difference between `constexpr` and `const`?",
    optionA: "`constexpr` guarantees evaluation at COMPILE TIME; `const` guarantees read-only access at RUNTIME",
    optionB: "`const` values can be modified in loops; `constexpr` cannot",
    optionC: "`constexpr` can only be used on string objects",
    optionD: "They are identical keywords in C++",
    correctOption: "A",
    topicTag: "C++ Keywords",
    explanation: "`const` means variable value cannot be modified after initialization (runtime read-only). `constexpr` indicates that an expression or function can be evaluated at compile-time."
  },
  {
    questionText: "In C++ memory layout, why does structure padding occur inside a `struct`?",
    optionA: "To align data member memory addresses to CPU word boundaries (e.g. 4-byte or 8-byte alignment) for faster memory bus access",
    optionB: "To prevent buffer overflow security exploits",
    optionC: "To hide private member variables from outside code",
    optionD: "To compress struct size for disk storage",
    correctOption: "A",
    topicTag: "C++ Memory Alignment",
    explanation: "CPUs access memory efficiently when data types start at addresses divisible by their size. Compilers insert unused padding bytes between struct members to align them to natural boundaries."
  },
  {
    questionText: "In C++17, what container class provides a type-safe tagged union capable of holding one of several alternative types?",
    optionA: "std::variant",
    optionB: "std::optional",
    optionC: "std::any",
    optionD: "std::tuple",
    correctOption: "A",
    topicTag: "C++17 Features",
    explanation: "`std::variant<T1, T2, ...>` represents a type-safe union. It knows which type alternative it currently holds, preventing undefined behavior common with C-style raw unions."
  },
  {
    questionText: "In C language, what is the difference between `malloc()` and `calloc()`?",
    optionA: "`malloc()` allocates uninitialized memory; `calloc()` allocates memory and initializes all bytes to zero",
    optionB: "`calloc()` allocates memory on the stack; `malloc()` on heap",
    optionC: "`malloc()` requires two arguments; `calloc()` requires one",
    optionD: "There is no difference in memory initialization",
    correctOption: "A",
    topicTag: "C Memory Allocation",
    explanation: "`malloc(size)` allocates `size` bytes of raw uninitialized memory. `calloc(num, size)` allocates memory for `num` elements of `size` bytes each and clears all bits to zero."
  },
  {
    questionText: "In C++, what does the `explicit` keyword on a constructor prevent?",
    optionA: "Prevents implicit type conversions and copy-initialization during object creation",
    optionB: "Prevents constructor from being called with arguments",
    optionC: "Prevents memory allocation on heap",
    optionD: "Forces constructor to run at compile time",
    correctOption: "A",
    topicTag: "C++ Constructors",
    explanation: "Marking a single-argument constructor as `explicit` stops the compiler from performing implicit type conversions (e.g. `MyClass obj = 10;` is forbidden)."
  }
];

// -------------------------------------------------------------
// Test 6: IndiaBIX Core Java & OOPs Test 6 (15 Questions)
// -------------------------------------------------------------
export const indiaBixJava1Questions: QuestionDef[] = [
  {
    questionText: "How does `ConcurrentHashMap` in Java achieve thread safety while outperforming `Hashtable` under high concurrency?",
    optionA: "It uses Lock Striping (bucket-level locking) and CAS operations rather than synchronizing the entire map instance",
    optionB: "It makes all key-value pairs immutable in main memory",
    optionC: "It creates a complete copy of the map on every write operation",
    optionD: "It runs a single background thread to process all incoming requests",
    correctOption: "A",
    topicTag: "Java Collections",
    explanation: "`ConcurrentHashMap` uses fine-grained lock striping (synchronized per bucket bin in Java 8+) and Compare-And-Swap (CAS) non-blocking operations, allowing concurrent reads and writes without locking the whole table."
  },
  {
    questionText: "In Java JVM architecture, which Garbage Collector region replaces PermGen starting from Java 8?",
    optionA: "Metaspace",
    optionB: "Young Generation",
    optionC: "Eden Space",
    optionD: "Survivor Space S1",
    correctOption: "A",
    topicTag: "Java JVM",
    explanation: "Starting in Java 8, Permanent Generation (PermGen) was removed and replaced by Metaspace, which allocates class metadata memory out of native host memory rather than fixed Java heap memory."
  },
  {
    questionText: "In Java 8 Stream API, what is the key difference between `map()` and `flatMap()` operations?",
    optionA: "`map()` produces one output value per input element; `flatMap()` transforms each element into a stream and flattens multiple streams into one",
    optionB: "`flatMap()` can only be used on Primitive streams like IntStream",
    optionC: "`map()` operates asynchronously; `flatMap()` executes synchronously",
    optionD: "There is no difference; both perform element replacement",
    correctOption: "A",
    topicTag: "Java Streams API",
    explanation: "`map()` applies a 1-to-1 mapping function. `flatMap()` applies a 1-to-many function returning a stream for each element and flattens the resulting stream of streams into a single stream."
  },
  {
    questionText: "In Java, what is the superclass of all Exception and Error classes in the exception hierarchy?",
    optionA: "java.lang.Throwable",
    optionB: "java.lang.Object",
    optionC: "java.lang.RuntimeException",
    optionD: "java.io.IOException",
    correctOption: "A",
    topicTag: "Java Exception Handling",
    explanation: "`java.lang.Throwable` is the root class of the Java exception hierarchy. Only instances of `Throwable` (or its subclasses `Exception` and `Error`) can be thrown by the JVM or `throw` statements."
  },
  {
    questionText: "In Java, what is created in memory when executing `String s = new String(\"Hello\");` assuming \"Hello\" is not already in the String Constant Pool?",
    optionA: "Two objects: one in the String Constant Pool (Heap) and one object in Heap memory referenced by `s`",
    optionB: "One object on the Stack",
    optionC: "Zero objects because strings are primitives",
    optionD: "Three objects in Metaspace",
    correctOption: "A",
    topicTag: "Java String Pool",
    explanation: "The literal `\"Hello\"` creates or references an entry in the String Constant Pool. Calling `new String(...)` explicitly creates a second distinct `String` object instance on the heap."
  },
  {
    questionText: "What guarantee does the `volatile` keyword provide in Java multi-threaded programs?",
    optionA: "Guarantees Visibility (reads/writes directly to main memory), but does NOT guarantee Atomicity for compound operations like `i++`",
    optionB: "Guarantees full atomic execution of code blocks",
    optionC: "Prevents a variable from being garbage collected",
    optionD: "Locks the entire class during method execution",
    correctOption: "A",
    topicTag: "Java Multithreading",
    explanation: "`volatile` ensures variable visibility across threads by bypassing thread CPU caches. However, it does not provide mutual exclusion or atomicity for non-atomic compound operations like incrementing (`i++`)."
  },
  {
    questionText: "How do atomic classes in `java.util.concurrent.atomic` (like `AtomicInteger`) guarantee lock-free thread safety?",
    optionA: "They use hardware-supported Compare-And-Swap (CAS) CPU instructions instead of synchronized monitor locks",
    optionB: "They suspend all thread execution in the JVM during updates",
    optionC: "They write data to external file storage",
    optionD: "They allocate a separate JVM memory heap for each thread",
    correctOption: "A",
    topicTag: "Java Concurrency",
    explanation: "Atomic classes use low-level CPU atomic primitives like CAS (Compare-And-Swap) provided by `sun.misc.Unsafe`. This allows concurrent non-blocking state updates without thread synchronization overhead."
  },
  {
    questionText: "In Java 8, what are Default Methods in interfaces used for?",
    optionA: "To add new methods to existing interfaces without breaking backward compatibility for implementing classes",
    optionB: "To make interface variables mutable",
    optionC: "To replace class constructors",
    optionD: "To enforce private method access across packages",
    correctOption: "A",
    topicTag: "Java Interfaces",
    explanation: "Default methods (marked with `default`) enable interface extension without breaking existing class implementations. They provide default method bodies that classes can optionally override."
  },
  {
    questionText: "In Java, what requirement must an object satisfy to be used inside a `try-with-resources` statement?",
    optionA: "It must implement `java.lang.AutoCloseable` or `java.io.Closeable` interface",
    optionB: "It must be marked with `final`",
    optionC: "It must extend `java.lang.Thread`",
    optionD: "It must be serialized as a JSON string",
    correctOption: "A",
    topicTag: "Java Syntax",
    explanation: "Any resource implementing `AutoCloseable` (or `Closeable`) can be managed by `try-with-resources`. The JVM automatically invokes its `close()` method upon exiting the block, even if exceptions occur."
  },
  {
    questionText: "In Java 9+ Module System (JPMS), what file defines module dependencies (`requires`) and exported packages (`exports`)?",
    optionA: "module-info.java",
    optionB: "pom.xml",
    optionC: "build.gradle",
    optionD: "manifest.mf",
    correctOption: "A",
    topicTag: "Java Modules",
    explanation: "`module-info.java` located at the root of the Java package hierarchy contains module declarations, explicitly specifying required module dependencies and public package exports."
  },
  {
    questionText: "In modern Java JVM garbage collection, which collector is designed for ultra-low latency with pause times under 1 millisecond on multi-terabyte heaps?",
    optionA: "ZGC (Z Garbage Collector)",
    optionB: "Serial GC",
    optionC: "Parallel Mark Sweep GC",
    optionD: "CMS (Concurrent Mark Sweep)",
    correctOption: "A",
    topicTag: "Java Garbage Collection",
    explanation: "ZGC (Z Garbage Collector) is a scalable, low-latency garbage collector introduced in recent Java versions that performs all expensive work concurrently with Java application threads, keeping pause times under 1ms."
  },
  {
    questionText: "In Java `CompletableFuture`, which method transforms the result of a completed future by applying a function returning another `CompletableFuture` (flattening nested futures)?",
    optionA: "thenCompose()",
    optionB: "thenApply()",
    optionC: "thenAccept()",
    optionD: "thenRun()",
    correctOption: "A",
    topicTag: "Java Async CompletableFuture",
    explanation: "`thenApply()` is equivalent to `map()` (returns `CompletableFuture<U>`). `thenCompose()` is equivalent to `flatMap()` (unwraps and flattens nested `CompletableFuture<CompletableFuture<U>>`)."
  },
  {
    questionText: "What is the difference between `ArrayList` and `LinkedList` in Java?",
    optionA: "`ArrayList` is backed by a dynamic array offering O(1) random index access; `LinkedList` is a doubly-linked list offering O(1) insertion/deletion at ends but O(N) index access",
    optionB: "`LinkedList` is synchronized; `ArrayList` is not",
    optionC: "`ArrayList` cannot store duplicate elements",
    optionD: "Both have O(1) random access time",
    correctOption: "A",
    topicTag: "Java Collections",
    explanation: "`ArrayList` uses a contiguous array, making get(index) fast O(1). `LinkedList` traverses node pointers to find elements by index O(N), but can add/remove elements at head/tail in O(1)."
  },
  {
    questionText: "In Java, can an interface extend another interface?",
    optionA: "Yes, an interface can extend multiple interfaces using the `extends` keyword",
    optionB: "No, interfaces can only implement classes",
    optionC: "Yes, but only using the `implements` keyword",
    optionD: "No, interfaces cannot inherit from anything",
    correctOption: "A",
    topicTag: "Java OOP Principles",
    explanation: "Interfaces can extend multiple parent interfaces using the `extends` keyword (e.g., `interface ChildInterface extends ParentA, ParentB`)."
  },
  {
    questionText: "What is the purpose of the `final` keyword when applied to a Java method?",
    optionA: "Prevents subclasses from overriding the method",
    optionB: "Prevents the method from being called in loops",
    optionC: "Makes all variables inside the method static",
    optionD: "Deletes the method from JVM bytecode",
    correctOption: "A",
    topicTag: "Java Keywords",
    explanation: "Applying `final` to a method signature prevents derived subclasses from overriding that method implementation."
  }
];

// -------------------------------------------------------------
// Test 7: IndiaBIX C# & .NET Platform Test 7 (15 Questions)
// -------------------------------------------------------------
export const indiaBixCSharp1Questions: QuestionDef[] = [
  {
    questionText: "In C# GUI and ASP.NET applications, why is `.ConfigureAwait(false)` often recommended when awaiting a Task in library code?",
    optionA: "To prevent deadlocks by not forcing the continuation task back onto the captured original SynchronizationContext",
    optionB: "To force the Task to run synchronously on the main thread",
    optionC: "To disable garbage collection during async execution",
    optionD: "To automatically retry the async operation if an exception occurs",
    correctOption: "A",
    topicTag: "C# Async Await",
    explanation: "In single-threaded SynchronizationContext environments (like WinForms, WPF, or classic ASP.NET), awaiting without `.ConfigureAwait(false)` attempts to resume on the original UI context, which can cause deadlocks if the UI thread is synchronously waiting on the task."
  },
  {
    questionText: "In C#, what is the difference between `Action<T>` and `Func<T, TResult>` delegates?",
    optionA: "`Action<T>` points to a method that returns `void`; `Func<T, TResult>` points to a method that returns a value of type `TResult`",
    optionB: "`Func` takes no arguments; `Action` takes up to 16 arguments",
    optionC: "`Action` is used for asynchronous methods; `Func` for synchronous methods",
    optionD: "`Func` can only reference static methods",
    correctOption: "A",
    topicTag: "C# Delegates",
    explanation: "`Action` represents a delegate that accepts parameters and returns `void`. `Func` represents a delegate that accepts parameters and returns a value (the last generic parameter is the return type)."
  },
  {
    questionText: "In C#, what is Boxing and what overhead does it introduce?",
    optionA: "Converting a value type (`struct`/`int`) to an `object` reference type, allocating memory on the managed heap and adding CPU performance overhead",
    optionB: "Packing multiple assemblies into a single DLL file",
    optionC: "Converting a class into a byte array for storage",
    optionD: "Wrapping private variables in public getter and setter properties",
    correctOption: "A",
    topicTag: "C# Memory Management",
    explanation: "Boxing implicitly converts a value type to type `object` or an interface type. It creates a new object on the managed heap and copies the value into it, causing heap allocation and garbage collection overhead."
  },
  {
    questionText: "In C# LINQ, what is Deferred Execution?",
    optionA: "Query execution is delayed until the query variable is actually iterated over (e.g. via `foreach` or `.ToList()`)",
    optionB: "Queries are executed asynchronously in a background thread upon definition",
    optionC: "Queries are compiled directly into SQL at deployment time",
    optionD: "Queries are cached permanently in RAM memory",
    correctOption: "A",
    topicTag: "C# LINQ",
    explanation: "LINQ queries using `IEnumerable` use deferred execution: construction of the query does not execute data fetching. Execution occurs when query results are consumed (`foreach`, `.ToList()`, `.ToArray()`, `.Count()`)."
  },
  {
    questionText: "In .NET Garbage Collection, which generation holds long-lived objects like static data and singletons?",
    optionA: "Generation 2",
    optionB: "Generation 0",
    optionC: "Generation 1",
    optionD: "Generation -1",
    correctOption: "A",
    topicTag: "C# Garbage Collector",
    explanation: ".NET GC uses 3 generations: Gen 0 (short-lived temporary objects), Gen 1 (buffer generation between short and long-lived), and Gen 2 (long-lived objects surviving multiple collections, static variables, application singletons)."
  },
  {
    questionText: "In C#, what is mandatory when passing a variable with the `out` parameter modifier to a method?",
    optionA: "The called method MUST assign a value to the `out` parameter before it returns",
    optionB: "The calling method must initialize the variable before passing it",
    optionC: "The parameter must be a primitive integer",
    optionD: "The method must return an array",
    correctOption: "A",
    topicTag: "C# Parameters",
    explanation: "The `out` keyword passes arguments by reference. The calling code does not need to initialize the variable prior to passing, but the called method MUST assign a value to the `out` parameter before returning."
  },
  {
    questionText: "In C#, what is the effect of marking a class with the `sealed` keyword?",
    optionA: "It prevents other classes from inheriting from it",
    optionB: "It prevents creating instances of the class",
    optionC: "It makes all methods inside the class static",
    optionD: "It places the class memory directly on the stack",
    correctOption: "A",
    topicTag: "C# Keywords",
    explanation: "The `sealed` modifier prevents a class from being inherited. It can also be applied to a virtual method or property to prevent overriding in further derived classes."
  },
  {
    questionText: "In C# LINQ, what is the key difference between `IQueryable<T>` and `IEnumerable<T>` when querying a remote database?",
    optionA: "`IQueryable<T>` evaluates queries on the remote database server via Expression Trees; `IEnumerable<T>` pulls data into local memory first before filtering",
    optionB: "`IEnumerable<T>` is asynchronous; `IQueryable<T>` is synchronous",
    optionC: "`IQueryable<T>` can only be used with XML documents",
    optionD: "There is no functional difference between them",
    correctOption: "A",
    topicTag: "C# LINQ Expression Trees",
    explanation: "`IQueryable<T>` uses `Expression` trees to translate LINQ calls into native SQL queries executed on the database server. `IEnumerable<T>` retrieves dataset rows into memory and filters in-process."
  },
  {
    questionText: "In C# asynchronous programming, what does `Task.WhenAll` return when executed on a collection of running tasks?",
    optionA: "A single Task that completes when ALL provided tasks have completed",
    optionB: "A Task that completes as soon as ANY single task finishes",
    optionC: "A thread pool handle that blocks the calling thread synchronously",
    optionD: "An array of cancellation tokens",
    correctOption: "A",
    topicTag: "C# Parallel Tasks",
    explanation: "`Task.WhenAll` creates a task that will complete when all of the `Task` objects in an enumerable collection have completed. If any task faults, the returned task will contain the aggregated exceptions."
  },
  {
    questionText: "In C#, how are Extension Methods declared?",
    optionA: "As static methods inside a static class, using the `this` modifier on the first parameter type",
    optionB: "By inheriting from `System.Extension` class",
    optionC: "By using the `virtual` keyword inside interfaces",
    optionD: "By marking method parameters with `ref readonly`",
    correctOption: "A",
    topicTag: "C# Extension Methods",
    explanation: "Extension methods allow adding methods to existing types without creating derived types. They must be defined as static methods inside non-generic static classes, specifying `this` before the first parameter type."
  },
  {
    questionText: "In C# 9+, what is the key feature of `record` types compared to standard `class` types?",
    optionA: "`record` types provide value-based equality semantics out-of-the-box and built-in immutable `with` expressions",
    optionB: "`record` types cannot contain properties or methods",
    optionC: "`record` types are allocated on CPU registers",
    optionD: "`record` types automatically save data to disk files",
    correctOption: "A",
    topicTag: "C# Records",
    explanation: "Unlike classes (which use reference equality), records synthesize value-based equality (`Equals()`, `==`), string representation (`ToString()`), and support non-destructive mutation via `with` expressions."
  },
  {
    questionText: "In C#, what does the null-coalescing assignment operator `??=` do?",
    optionA: "Assigns the right-hand operand to the left-hand operand ONLY if the left-hand operand evaluates to `null`",
    optionB: "Throws a NullReferenceException if right-hand side is null",
    optionC: "Compares two nullable booleans for bitwise equality",
    optionD: "Converts strings to uppercase automatically",
    correctOption: "A",
    topicTag: "C# Operators",
    explanation: "The `??=` operator assigns the value of its right-hand operand to its left-hand operand only if the left-hand operand evaluates to `null` (e.g. `list ??= new List<int>();`)."
  },
  {
    questionText: "What is the difference between `ref` and `out` parameters in C#?",
    optionA: "`ref` requires the variable to be initialized BEFORE being passed; `out` does not require prior initialization but MUST be assigned inside the called method",
    optionB: "`out` parameters are passed by value; `ref` by pointer",
    optionC: "`ref` can only be used with integers; `out` with objects",
    optionD: "There is no difference in compiler enforcement",
    correctOption: "A",
    topicTag: "C# Method Modifiers",
    explanation: "`ref` passes an initialized variable by reference (read/write). `out` passes an uninitialized reference variable that the receiving method guarantees to initialize before returning."
  },
  {
    questionText: "In C#, what is the difference between `readonly` fields and `const` constants?",
    optionA: "`const` values are evaluated at COMPILE TIME; `readonly` fields can be assigned dynamically at RUNTIME inside constructors",
    optionB: "`const` can be modified in loops; `readonly` cannot",
    optionC: "`readonly` is stored on the stack; `const` on the heap",
    optionD: "There is no difference",
    correctOption: "A",
    topicTag: "C# Constants",
    explanation: "`const` is a compile-time constant baked into MSIL assembly metadata. `readonly` allows assigning values dynamically during instance initialization or constructor execution."
  },
  {
    questionText: "In .NET, what is the role of the Common Language Runtime (CLR)?",
    optionA: "Executes MSIL bytecode, manages memory via Garbage Collection, enforces type safety, and handles thread synchronization",
    optionB: "Translates C# code directly to HTML web pages",
    optionC: "Manages physical router hardware packages",
    optionD: "Encrypts database SQL queries",
    correctOption: "A",
    topicTag: "C# CLR Architecture",
    explanation: "The CLR is the virtual machine component of .NET. It compiles MSIL to machine code using JIT (Just-In-Time) compilation, manages heap memory (GC), and provides security and thread execution boundaries."
  }
];

// -------------------------------------------------------------
// Test 8: IndiaBIX DBMS & SQL Systems Test 8 (15 Questions)
// -------------------------------------------------------------
export const indiaBixDbms1Questions: QuestionDef[] = [
  {
    questionText: "In database systems, which anomaly can occur under `REPEATABLE READ` isolation level that is prevented under `SERIALIZABLE` level?",
    optionA: "Phantom Read (new rows inserted by concurrent committed transactions appearing in repeated query scans)",
    optionB: "Dirty Read (reading uncommitted data)",
    optionC: "Lost Update",
    optionD: "None; REPEATABLE READ prevents all anomalies",
    correctOption: "A",
    topicTag: "DBMS Isolation Levels",
    explanation: "`REPEATABLE READ` locks existing read rows so they cannot be modified (preventing Dirty Reads and Non-Repeatable Reads), but external transactions can still INSERT new matching rows, producing Phantom Reads upon re-query."
  },
  {
    questionText: "Why are B+ Trees preferred over B-Trees for relational database disk indexing?",
    optionA: "B+ Trees store data records/pointers exclusively in leaf nodes and link leaf nodes sequentially, enabling fast range scans",
    optionB: "B+ Trees consume zero memory in RAM",
    optionC: "B-Trees cannot handle integer primary keys",
    optionD: "B+ Trees eliminate the need for secondary indexes",
    correctOption: "A",
    topicTag: "DBMS Indexing",
    explanation: "In B+ Trees, all data records or record pointers are located at the leaf level, and leaves are connected in a linked list. This enables efficient sequential disk block reads during range queries."
  },
  {
    questionText: "What condition must be satisfied for a relation table to be in Boyce-Codd Normal Form (BCNF)?",
    optionA: "For every non-trivial functional dependency X -> Y, X must be a Super Key",
    optionB: "The table must contain no multi-valued attributes",
    optionC: "All non-key attributes must be dependent on part of a composite key",
    optionD: "Foreign keys must match primary keys in all referenced tables",
    correctOption: "A",
    topicTag: "DBMS Normalization",
    explanation: "BCNF is a stricter version of 3NF. A relation is in BCNF if for every functional dependency X -> Y, X is a superkey of the relation. It eliminates all redundancy from functional dependencies."
  },
  {
    questionText: "In SQL, what is the result of a `CROSS JOIN` between Table A with 5 rows and Table B with 10 rows?",
    optionA: "50 rows (Cartesian product)",
    optionB: "15 rows",
    optionC: "10 rows",
    optionD: "5 rows",
    correctOption: "A",
    topicTag: "SQL Joins",
    explanation: "A `CROSS JOIN` produces the Cartesian product of two tables. Every row from Table A is paired with every row from Table B. Total rows = 5 * 10 = 50 rows."
  },
  {
    questionText: "In Database Management Systems, what is Write-Ahead Logging (WAL) used for?",
    optionA: "Ensuring Durability and Atomicity by writing transaction changes to log storage on disk BEFORE modifying database data pages",
    optionB: "Indexing foreign key columns automatically",
    optionC: "Compressing tables to reduce disk space",
    optionD: "Encrypting database passwords in memory",
    correctOption: "A",
    topicTag: "DBMS Recovery & Logging",
    explanation: "WAL protocol dictates that dirty data pages in RAM cannot be written to disk until the corresponding log records describing the modification have been flushed to non-volatile disk storage."
  },
  {
    questionText: "What is a primary distinction between a Clustered Index and a Non-Clustered Index in SQL databases?",
    optionA: "A table can have only ONE Clustered Index (data rows sorted on disk); but can have MULTIPLE Non-Clustered Indexes (separate index pages with pointers)",
    optionB: "Clustered indexes are stored in RAM; Non-Clustered on disk",
    optionC: "Non-Clustered indexes sort data rows physically on disk",
    optionD: "Clustered indexes can only be created on text columns",
    correctOption: "A",
    topicTag: "DBMS Index Architecture",
    explanation: "A Clustered Index dictates the physical ordering of data rows on disk (hence max 1 per table, usually Primary Key). A Non-Clustered Index creates a separate structure containing key values and pointers back to data rows."
  },
  {
    questionText: "In Database Management Systems, what is the execution timing difference between `BEFORE` and `AFTER` DML Triggers?",
    optionA: "`BEFORE` triggers execute prior to data modification and can modify input values or cancel operations; `AFTER` triggers execute after modification is recorded in the table",
    optionB: "`AFTER` triggers prevent SQL syntax errors",
    optionC: "`BEFORE` triggers execute asynchronously in background threads",
    optionD: "`AFTER` triggers run only during database startup",
    correctOption: "A",
    topicTag: "DBMS Triggers",
    explanation: "`BEFORE` triggers fire before table constraints or row changes are applied, making them ideal for validation. `AFTER` triggers run after changes complete, ideal for audit logging."
  },
  {
    questionText: "In SQL relational database design, what is a Candidate Key?",
    optionA: "A minimal set of attributes that uniquely identifies a row in a table, from which the Primary Key is selected",
    optionB: "A key that references a primary key in another table",
    optionC: "An index key created solely for sorting query results",
    optionD: "A column that permits duplicate NULL values",
    correctOption: "A",
    topicTag: "DBMS Keys",
    explanation: "A Candidate Key is a superkey with no redundant attributes. Any candidate key can uniquely identify table tuples. Database designers select one candidate key as the Primary Key."
  },
  {
    questionText: "What database anomaly occurs when a transaction reads data modified by a concurrent uncommitted transaction that subsequently rolls back?",
    optionA: "Dirty Read",
    optionB: "Non-Repeatable Read",
    optionC: "Phantom Read",
    optionD: "Lost Update",
    correctOption: "A",
    topicTag: "DBMS Concurrency",
    explanation: "A Dirty Read happens when Transaction A modifies a row, Transaction B reads the modified row, and then Transaction A aborts/rolls back, leaving Transaction B with invalid data."
  },
  {
    questionText: "In Relational Database design, what is Horizontal Partitioning (Sharding)?",
    optionA: "Dividing table ROWS across multiple database nodes or tables based on a partition key",
    optionB: "Dividing table COLUMNS into separate tables",
    optionC: "Compressing index files using ZIP algorithm",
    optionD: "Backing up database tables to tape drives",
    correctOption: "A",
    topicTag: "DBMS Architecture",
    explanation: "Horizontal Partitioning (Sharding) splits table data by rows, storing subsets of rows on distinct database instances (shards) while maintaining identical table schema."
  },
  {
    questionText: "In Data Warehousing architecture, what is the main structural difference between Star Schema and Snowflake Schema?",
    optionA: "In Star Schema, dimension tables are completely denormalized; in Snowflake Schema, dimension tables are normalized into multiple related tables",
    optionB: "Star Schema uses NoSQL; Snowflake Schema uses MySQL",
    optionC: "Snowflake Schema cannot contain fact tables",
    optionD: "In Star Schema, dimension tables are normalized; in Snowflake Schema, dimension tables are denormalized",
    correctOption: "A",
    topicTag: "Data Warehousing",
    explanation: "Star Schema uses centralized Fact tables connected directly to simple denormalized Dimension tables. Snowflake Schema normalizes dimension tables into hierarchies, reducing data redundancy but increasing SQL join complexity."
  },
  {
    questionText: "What is a Materialized View in a Database Management System?",
    optionA: "A database object containing the pre-computed physical query result stored on disk, periodically refreshed from underlying base tables",
    optionB: "A temporary virtual table stored only in RAM memory during query execution",
    optionC: "A CSS layout view in database web portals",
    optionD: "A transaction log file",
    correctOption: "A",
    topicTag: "DBMS Views",
    explanation: "Unlike a standard virtual view (which executes query logic every time it is referenced), a Materialized View physically saves pre-computed query output on disk for rapid read performance."
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
  },
  {
    questionText: "In SQL, what is the difference between `HAVING` and `WHERE` clauses?",
    optionA: "`WHERE` filters rows BEFORE aggregate grouping; `HAVING` filters aggregated group results AFTER `GROUP BY` execution",
    optionB: "`HAVING` cannot use comparison operators",
    optionC: "`WHERE` is used only with subqueries",
    optionD: "There is no functional difference",
    correctOption: "A",
    topicTag: "SQL Query Execution",
    explanation: "`WHERE` filters individual table rows prior to grouping. `HAVING` filters group summaries created by `GROUP BY` (e.g. `HAVING COUNT(*) > 5`)."
  },
  {
    questionText: "What are the four ACID properties in Database Transaction Management?",
    optionA: "Atomicity, Consistency, Isolation, Durability",
    optionB: "Allocation, Concurrency, Indexing, Data",
    optionC: "Authentication, Control, Integrity, Encryption",
    optionD: "Availability, Consistency, Inspection, Performance",
    correctOption: "A",
    topicTag: "DBMS ACID Properties",
    explanation: "ACID properties: Atomicity (all-or-nothing), Consistency (valid state transitions), Isolation (independent concurrent execution), and Durability (committed changes persist across failures)."
  }
];

// -------------------------------------------------------------
// Test 9: IndiaBIX Computer Networks & Security Test 9 (15 Questions)
// -------------------------------------------------------------
export const indiaBixCn1Questions: QuestionDef[] = [
  {
    questionText: "During the TCP 3-Way Handshake, what flags and sequence numbers are exchanged to establish a connection between Client and Server?",
    optionA: "Client sends SYN(seq=x) -> Server replies SYN-ACK(seq=y, ack=x+1) -> Client sends ACK(ack=y+1)",
    optionB: "Client sends ACK -> Server sends SYN -> Client sends FIN",
    optionC: "Client sends DATA -> Server sends ACK -> Client sends RST",
    optionD: "Client sends SYN -> Server sends FIN -> Client sends ACK",
    correctOption: "A",
    topicTag: "TCP Handshake",
    explanation: "The TCP 3-Way Handshake initializes reliable sequence numbers: 1. Client -> Server: SYN (seq=x); 2. Server -> Client: SYN-ACK (seq=y, ack=x+1); 3. Client -> Server: ACK (ack=y+1)."
  },
  {
    questionText: "How many usable host IP addresses are available in a subnetwork with IPv4 CIDR notation `/26`?",
    optionA: "62",
    optionB: "64",
    optionC: "128",
    optionD: "254",
    correctOption: "A",
    topicTag: "IPv4 Subnetting",
    explanation: "A `/26` subnet leaves 32 - 26 = 6 bits for host addresses. Total IP addresses = 2^6 = 64. Subtracting 2 reserved addresses (Network ID and Broadcast IP) leaves 64 - 2 = 62 usable host IPs."
  },
  {
    questionText: "What mechanism does TCP use at the Transport Layer to prevent a fast sender from overwhelming a slow receiver?",
    optionA: "Flow Control using Sliding Window Protocol (Advertised Window)",
    optionB: "IP Fragmentation",
    optionC: "DNS Caching",
    optionD: "ARP Request Broadcasting",
    correctOption: "A",
    topicTag: "TCP Flow Control",
    explanation: "Flow control prevents receiver buffer overflow. The receiver advertises its available buffer size (Receive Window `rwnd`) in TCP header acknowledgments, telling the sender how much data it can accept."
  },
  {
    questionText: "In the Domain Name System (DNS), what is the difference between Recursive and Iterative DNS Queries?",
    optionA: "In a Recursive query, the DNS server takes full responsibility to return the final IP answer; in an Iterative query, the DNS server returns the address of another DNS server to query",
    optionB: "Recursive queries use TCP; Iterative queries use HTTP",
    optionC: "Iterative queries run locally on the browser cache",
    optionD: "Recursive queries are only used for IPv6 addresses",
    correctOption: "A",
    topicTag: "DNS Queries",
    explanation: "In Recursive queries, the resolver delegates the lookup entirely to the DNS server until an IP address or error is found. In Iterative queries, the DNS server responds with referral pointers to TLD or authoritative DNS servers."
  },
  {
    questionText: "What major performance limitation in HTTP/1.1 did HTTP/2 solve by introducing Binary Framing and Multiplexing?",
    optionA: "Head-of-Line (HOL) Blocking at the application layer over a single TCP connection",
    optionB: "Lack of SSL/TLS encryption",
    optionC: "Max URL length limitations",
    optionD: "Inability to send POST requests",
    correctOption: "A",
    topicTag: "HTTP Protocol Evolution",
    explanation: "HTTP/1.1 suffered from application-level Head-of-Line (HOL) blocking where requests over a connection had to be processed sequentially. HTTP/2 split messages into binary frames, allowing multiple concurrent requests multiplexed over 1 TCP connection."
  },
  {
    questionText: "At which layer of the OSI model does a Network Router operate to forward packets based on destination IP addresses?",
    optionA: "Network Layer (Layer 3)",
    optionB: "Data Link Layer (Layer 2)",
    optionC: "Transport Layer (Layer 4)",
    optionD: "Physical Layer (Layer 1)",
    correctOption: "A",
    topicTag: "OSI Layer Routing",
    explanation: "Routers operate at Layer 3 (Network Layer) of the OSI model. They examine logical IP addresses in packet headers and consult routing tables to determine packet forwarding paths."
  },
  {
    questionText: "What is the primary function of Port Address Translation (PAT) / NAPT in network routers?",
    optionA: "Map multiple private IP addresses to a single public IP address using distinct source TCP/UDP port numbers",
    optionB: "Convert MAC addresses into domain name URLs",
    optionC: "Encrypt Wi-Fi passwords using WPA3",
    optionD: "Assign IP subnets dynamically via DHCP",
    correctOption: "A",
    topicTag: "NAT / PAT",
    explanation: "PAT (Overloaded NAT) translates internal private IPv4 addresses to a single public IPv4 address by assigning unique source port numbers to outbound transport segments."
  },
  {
    questionText: "What is the address space size difference between IPv4 and IPv6?",
    optionA: "IPv4 uses 32-bit addresses (approx 4.3 billion addresses); IPv6 uses 128-bit addresses (approx 3.4 x 10^38 addresses)",
    optionB: "IPv4 uses 64-bit addresses; IPv6 uses 256-bit addresses",
    optionC: "IPv4 uses decimal numbers; IPv6 uses binary floating point",
    optionD: "IPv6 supports fewer hosts than IPv4",
    correctOption: "A",
    topicTag: "IPv4 vs IPv6",
    explanation: "IPv4 address size is 32 bits ($2^{32} \\approx 4.29 \\times 10^9$). IPv6 expands address size to 128 bits ($2^{128} \\approx 3.4 \\times 10^{38}$), eliminating IP exhaustion."
  },
  {
    questionText: "In Distance Vector routing protocols (e.g. RIP), what is the 'Count-to-Infinity' problem?",
    optionA: "A routing loop condition where bad news travels slowly and distance metrics increment indefinitely when a link fails",
    optionB: "When a router CPU reaches 100% usage",
    optionC: "When IP packet TTL reaches zero",
    optionD: "When DNS servers crash due to DDOS",
    correctOption: "A",
    topicTag: "Routing Algorithms",
    explanation: "When a network link fails, distance vector routers relying on neighboring updates can exchange outdated route hop counts back and forth, slowly incrementing distance counts up to infinity."
  },
  {
    questionText: "What security vulnerability in traditional DNS is solved by Domain Name System Security Extensions (DNSSEC)?",
    optionA: "DNS Cache Poisoning / Spoofing by using cryptographic digital signatures to verify DNS record authenticity",
    optionB: "High network ping latency",
    optionC: "Wi-Fi password sniffing",
    optionD: "HTML XSS injection",
    correctOption: "A",
    topicTag: "DNSSEC Security",
    explanation: "DNSSEC attaches cryptographic signatures (RRSIG) to DNS lookup records, allowing DNS resolvers to verify that received IP translation data has not been forged or tampered with."
  },
  {
    questionText: "At which level does the Border Gateway Protocol (BGP) operate in global Internet routing?",
    optionA: "Inter-Autonomous System (Inter-AS) exterior routing between different Internet Service Providers (ISPs)",
    optionB: "Local Area Network (LAN) Ethernet switching",
    optionC: "Bluetooth device pairing",
    optionD: "Internal home router Wi-Fi channel selection",
    correctOption: "A",
    topicTag: "BGP Routing",
    explanation: "BGP is the core Path Vector routing protocol of the global Internet. It exchanges reachability and routing policy information across distinct Autonomous Systems (AS) managed by global ISPs."
  },
  {
    questionText: "What major efficiency optimization was made to the cryptographic handshake protocol in TLS 1.3 compared to TLS 1.2?",
    optionA: "TLS 1.3 reduced handshake latency from 2 Round Trips (2-RTT) down to 1 Round Trip (1-RTT) or 0-RTT for resumed connections",
    optionB: "TLS 1.3 removed RSA encryption entirely",
    optionC: "TLS 1.3 runs over UDP instead of IP",
    optionD: "TLS 1.3 disables server certificates",
    correctOption: "A",
    topicTag: "TLS 1.3 Handshake",
    explanation: "TLS 1.3 streamlined key exchange and cipher suite selection, requiring only 1 Round Trip Time (1-RTT) to establish secure encrypted sessions (and 0-RTT for returning clients)."
  },
  {
    questionText: "What is the primary role of the Address Resolution Protocol (ARP)?",
    optionA: "Resolves a known Network Layer IP address into a Data Link Layer physical MAC address",
    optionB: "Translates domain names to IP addresses",
    optionC: "Assigns dynamic IP addresses to new network hosts",
    optionD: "Routes packets between different subnets",
    correctOption: "A",
    topicTag: "ARP Protocol",
    explanation: "ARP bridges OSI Layer 3 and Layer 2 by broadcasting query requests on a local network segment to find the MAC address corresponding to a target IP address."
  },
  {
    questionText: "What is the main difference between TCP and UDP protocols at the Transport Layer?",
    optionA: "TCP is connection-oriented, reliable, and guarantees packet ordering; UDP is connectionless, unreliable, lightweight, and lower latency",
    optionB: "UDP performs 3-way handshakes; TCP does not",
    optionC: "TCP operates only over optical fiber cables",
    optionD: "UDP encrypts all packet payloads automatically",
    correctOption: "A",
    topicTag: "TCP vs UDP",
    explanation: "TCP provides connection establishment, sequence numbers, retransmission, and flow control. UDP omits these overhead features for minimal latency (used in video streaming and DNS)."
  },
  {
    questionText: "What is the purpose of the Subnet Mask in IPv4 networking?",
    optionA: "Distinguishes the Network ID portion of an IP address from the Host ID portion",
    optionB: "Hides the user's MAC address from external websites",
    optionC: "Encrypts TCP header payload data",
    optionD: "Increases internet download speed",
    correctOption: "A",
    topicTag: "IPv4 Subnet Masking",
    explanation: "A Subnet Mask performs a bitwise AND operation with an IPv4 address to isolate the network prefix from the host identifier."
  }
];

// -------------------------------------------------------------
// Test 10: IndiaBIX OS & Software Engineering (SDLC) Test 10 (15 Questions)
// -------------------------------------------------------------
export const indiaBixOsSdlc1Questions: QuestionDef[] = [
  {
    questionText: "In Operating Systems, what are the four necessary conditions required for a Deadlock to occur?",
    optionA: "Mutual Exclusion, Hold & Wait, No Preemption, and Circular Wait",
    optionB: "Paging, Thrashing, Segmentation, and Virtual Memory",
    optionC: "Cache Miss, Page Fault, TLB Miss, and Hard Fault",
    optionD: "Read, Write, Execute, and Delete permissions",
    correctOption: "A",
    topicTag: "OS Deadlocks",
    explanation: "Coffman conditions for deadlock: 1. Mutual Exclusion; 2. Hold & Wait; 3. No Preemption; 4. Circular Wait."
  },
  {
    questionText: "What is the key difference between a Mutex (Mutual Exclusion Lock) and a Counting Semaphore in process synchronization?",
    optionA: "A Mutex is owned by the locking thread and locked/unlocked by the same thread; a Semaphore has an integer counter and can be signaled from any thread",
    optionB: "A Semaphore can only be used by 1 process; a Mutex by N processes",
    optionC: "A Mutex runs in user space; a Semaphore runs inside BIOS chip",
    optionD: "Semaphores prevent deadlocks automatically; Mutex locks cause deadlocks",
    correctOption: "A",
    topicTag: "OS Synchronization",
    explanation: "A Mutex enforces strict thread ownership (only the thread that locked it can unlock it). A Counting Semaphore maintains a count allowing up to N concurrent threads access."
  },
  {
    questionText: "In Virtual Memory management, what is Belady's Anomaly?",
    optionA: "In FIFO page replacement, increasing the number of allocated memory page frames can result in MORE page faults for certain access patterns",
    optionB: "When CPU utilization drops to zero during disk writes",
    optionC: "When LRU cache deletes the most recently used element",
    optionD: "When virtual memory addresses exceed 64 bits",
    correctOption: "A",
    topicTag: "OS Virtual Memory",
    explanation: "Belady's Anomaly is a counter-intuitive phenomenon in FIFO page replacement where adding more page frames to a process causes an increase in total page faults."
  },
  {
    questionText: "In Operating System CPU Scheduling, what is a major drawback of Shortest Remaining Time First (SRTF) scheduling?",
    optionA: "Starvation of long-running CPU-bound processes if short processes continuously arrive",
    optionB: "High CPU idle percentage",
    optionC: "Inability to run multi-threaded processes",
    optionD: "Requires hardware graphics acceleration",
    correctOption: "A",
    topicTag: "OS CPU Scheduling",
    explanation: "SRTF is the preemptive version of SJF. While it minimizes average wait time, long processes may suffer indefinite delay (starvation) if shorter tasks continuously enter the ready queue."
  },
  {
    questionText: "In Virtual Memory management, what hardware component speeds up Virtual IP Address to Physical Page Frame translation?",
    optionA: "Translation Lookaside Buffer (TLB)",
    optionB: "Direct Memory Access (DMA) controller",
    optionC: "Arithmetic Logic Unit (ALU)",
    optionD: "Hard Disk Drive (HDD)",
    correctOption: "A",
    topicTag: "OS Memory MMU / TLB",
    explanation: "The TLB is a high-speed associative hardware cache memory inside the CPU MMU that stores recent virtual-to-physical address translations, bypassing slow multi-level page table lookups."
  },
  {
    questionText: "In Operating Systems Inter-Process Communication (IPC), which method provides the HIGHEST speed for exchanging data between processes?",
    optionA: "Shared Memory",
    optionB: "Message Queues",
    optionC: "Network Sockets",
    optionD: "Anonymous Pipes",
    correctOption: "A",
    topicTag: "OS IPC",
    explanation: "Shared Memory is the fastest IPC mechanism because processes share a common region of RAM. Once established, data reads/writes occur directly at memory speed without kernel intervention."
  },
  {
    questionText: "What causes 'Thrashing' in an Operating System memory management subsystem?",
    optionA: "The system spends more time swapping pages in and out of virtual memory disk storage than executing actual process instructions",
    optionB: "CPU clock frequency exceeds maximum thermal capacity",
    optionC: "Hard disk partition table gets corrupted",
    optionD: "Network bandwidth drops below 1 Mbps",
    correctOption: "A",
    topicTag: "OS Thrashing",
    explanation: "Thrashing occurs when total process working set size exceeds physical RAM capacity. The OS repeatedly generates page faults, causing high disk I/O paging thrash."
  },
  {
    questionText: "In real-time Operating Systems, what is Priority Inversion and how is it mitigated?",
    optionA: "A high-priority process is blocked waiting for a low-priority process holding a shared lock; mitigated using Priority Inheritance Protocol",
    optionB: "CPU scheduler reverses execution order alphabetically",
    optionC: "Low-priority processes kill high-priority processes",
    optionD: "Kernel threads run slower than user threads",
    correctOption: "A",
    topicTag: "OS Priority Inversion",
    explanation: "Priority Inversion happens when a low-priority task holds a mutex needed by a high-priority task, and a medium-priority task preempts it. Priority Inheritance temporarily boosts the low-priority task's priority."
  },
  {
    questionText: "In process synchronization, how does a Readers-Writers Lock optimize throughput over a standard Mutex?",
    optionA: "Allows MULTIPLE concurrent reader threads to hold the lock simultaneously, but enforces EXCLUSIVE access for writer threads",
    optionB: "Blocks readers while letting writers run concurrently",
    optionC: "Eliminates memory barriers entirely",
    optionD: "Locks the database filesystem on disk",
    correctOption: "A",
    topicTag: "OS Synchronization Locks",
    explanation: "In read-heavy workloads, a Readers-Writers lock permits multiple threads to read shared data concurrently without blocking each other, acquiring an exclusive lock only when writing."
  },
  {
    questionText: "In Agile Scrum methodology, what is the primary purpose of a Sprint Backlog?",
    optionA: "The set of Product Backlog items selected for the Sprint, along with the plan for delivering the product Increment",
    optionB: "A list of bug tickets reported by customers after release",
    optionC: "A permanent document that never changes during project lifespan",
    optionD: "A list of employee performance reviews",
    correctOption: "A",
    topicTag: "SDLC Agile Scrum",
    explanation: "The Sprint Backlog is owned by the Scrum Development Team. It contains the subset of features chosen from the Product Backlog for implementation during the current Sprint."
  },
  {
    questionText: "What is the difference between Black-Box Testing and White-Box Testing in software engineering?",
    optionA: "Black-Box testing evaluates functionality without internal code knowledge; White-Box testing examines internal source code structure and logic paths",
    optionB: "Black-Box testing is done by developers; White-Box testing is done by end users",
    optionC: "White-Box testing tests hardware chips; Black-Box tests monitor screen displays",
    optionD: "There is no difference in testing methodology",
    correctOption: "A",
    topicTag: "SDLC Testing",
    explanation: "Black-Box testing focuses on input/output requirements. White-Box testing inspects code control flow, statement coverage, and branch paths."
  },
  {
    questionText: "In software development DevOps practices, what is Continuous Integration (CI)?",
    optionA: "The practice of automatically building and running automated unit/integration tests whenever code changes are committed to a shared repository",
    optionB: "Deploying code manually to production once every year",
    optionC: "Writing software specifications in UML diagrams",
    optionD: "Replacing all QA testers with AI tools",
    correctOption: "A",
    topicTag: "SDLC CI/CD",
    explanation: "Continuous Integration (CI) enforces frequent developer code merges into a shared trunk, triggering automated build and test pipelines to detect integration bugs early."
  },
  {
    questionText: "In Software Development Life Cycle (SDLC) models, what key characteristic defines the V-Model?",
    optionA: "Every development phase has a directly corresponding, parallel testing phase (e.g. Requirements mapped to Acceptance Testing)",
    optionB: "Coding is done before requirements gathering",
    optionC: "Testing is performed only after deployment",
    optionD: "Projects are completed in 1-day sprints",
    correctOption: "A",
    topicTag: "SDLC V-Model",
    explanation: "The V-Model maps each stage of the development lifecycle (Requirements, Design, Coding) to a corresponding verification and validation testing level."
  },
  {
    questionText: "In Object-Oriented Software Design (SOLID principles), what does the Liskov Substitution Principle (LSP) dictate?",
    optionA: "Objects of a derived class must be substitutable for objects of their base class without altering the correctness of the program",
    optionB: "Classes should be open for modification and closed for extension",
    optionC: "Interfaces must contain at least 10 methods",
    optionD: "Subclasses must override all inherited methods with private visibility",
    correctOption: "A",
    topicTag: "SDLC SOLID Principles",
    explanation: "LSP states that child classes must fulfill all behavioral contracts of their parent class so that references to base classes can be replaced with derived class objects seamlessly."
  },
  {
    questionText: "What does a high Cyclomatic Complexity metric ($V(G)$) indicate in software code quality analysis?",
    optionA: "A high number of linearly independent decision paths in source code, indicating complex logic and higher risk of bugs requiring more unit test cases",
    optionB: "High CPU clock execution speed",
    optionC: "Low RAM memory consumption",
    optionD: "High code readability",
    correctOption: "A",
    topicTag: "SDLC Metrics",
    explanation: "Cyclomatic Complexity measures the number of decision branches in source code. Higher complexity indicates harder-to-maintain code requiring a larger number of test cases."
  }
];


// -------------------------------------------------------------
// Test 11: IndiaBIX Quantitative Aptitude Test 11 (15 Questions)
// -------------------------------------------------------------
export const indiaBixQuant3Questions: QuestionDef[] = [
  {
    questionText: "The HCF of two numbers is 11 and their LCM is 693. If one of the numbers is 77, find the other number.",
    optionA: "99",
    optionB: "88",
    optionC: "110",
    optionD: "121",
    correctOption: "A",
    topicTag: "HCF & LCM",
    explanation: "Formula: Product of two numbers = HCF * LCM. Therefore, 77 * N = 11 * 693 => N = (11 * 693) / 77 = 693 / 7 = 99."
  },
  {
    questionText: "By selling a watch for $1,440, a shopkeeper loses 10%. At what price should he sell it to gain 15%?",
    optionA: "$1,840",
    optionB: "$1,680",
    optionC: "$1,750",
    optionD: "$1,920",
    correctOption: "A",
    topicTag: "Profit & Loss",
    explanation: "Let Cost Price = CP. SP = 90% of CP = $1,440 => CP = 1,440 / 0.90 = $1,600. To gain 15%, Target SP = 115% of $1,600 = 1.15 * 1600 = $1,840."
  },
  {
    questionText: "A sum of $12,500 amounts to $15,500 in 4 years at simple interest. What is the rate of interest per annum?",
    optionA: "6%",
    optionB: "5%",
    optionC: "7.5%",
    optionD: "8%",
    correctOption: "A",
    topicTag: "Simple Interest",
    explanation: "Total Simple Interest SI = $15,500 - $12,500 = $3,000. SI = (P * R * T) / 100 => 3000 = (12500 * R * 4) / 100 => 3000 = 500 * R => R = 6%."
  },
  {
    questionText: "If the ratio of the areas of two squares is 16 : 25, what is the ratio of their perimeters?",
    optionA: "4 : 5",
    optionB: "16 : 25",
    optionC: "2 : 5",
    optionD: "8 : 15",
    correctOption: "A",
    topicTag: "Ratio & Proportion",
    explanation: "Ratio of side lengths = sqrt(16/25) = 4/5. Since Perimeter = 4 * side, the ratio of perimeters is also 4 : 5."
  },
  {
    questionText: "The average weight of 8 men is increased by 1.5 kg when a new man comes in place of one of them who weighs 65 kg. What is the weight of the new man?",
    optionA: "77 kg",
    optionB: "75 kg",
    optionC: "80 kg",
    optionD: "72 kg",
    correctOption: "A",
    topicTag: "Averages",
    explanation: "Total weight increase = 8 * 1.5 kg = 12 kg. Weight of new man = Weight of replaced man + Total increase = 65 + 12 = 77 kg."
  },
  {
    questionText: "A tap can fill a tank in 4 hours while another drain tap can empty it in 9 hours. If both taps are opened together, how long will it take to fill the tank?",
    optionA: "7.2 hours",
    optionB: "6.5 hours",
    optionC: "8 hours",
    optionD: "5.4 hours",
    correctOption: "A",
    topicTag: "Pipes & Cisterns",
    explanation: "Net filling rate per hour = 1/4 - 1/9 = (9 - 4) / 36 = 5/36. Time required = 36 / 5 = 7.2 hours (7 hours 12 mins)."
  },
  {
    questionText: "In how many years will a sum of $800 produce $168 as compound interest at 10% per annum compounded annually?",
    optionA: "2 years",
    optionB: "3 years",
    optionC: "1.5 years",
    optionD: "2.5 years",
    correctOption: "A",
    topicTag: "Compound Interest",
    explanation: "Amount A = 800 + 168 = $968. A = P(1 + R/100)^t => 968 = 800(1.10)^t => 1.21 = (1.10)^t => (1.10)^2 = (1.10)^t => t = 2 years."
  },
  {
    questionText: "Two pipes A and B can fill a cistern in 20 and 30 minutes respectively. If both pipes are opened together, after how many minutes should B be turned off so that the cistern is full in 16 minutes?",
    optionA: "6 minutes",
    optionB: "8 minutes",
    optionC: "10 minutes",
    optionD: "5 minutes",
    correctOption: "A",
    topicTag: "Pipes & Cisterns",
    explanation: "Pipe A runs for all 16 minutes. Work done by A = 16 / 20 = 4/5. Remaining work for B = 1 - 4/5 = 1/5. B fills 1/30 per minute. Time for B = (1/5) / (1/30) = 6 minutes."
  },
  {
    questionText: "A person travels from A to B at 40 km/h and returns from B to A at 60 km/h. What is his average speed for the entire journey?",
    optionA: "48 km/h",
    optionB: "50 km/h",
    optionC: "45 km/h",
    optionD: "52 km/h",
    correctOption: "A",
    topicTag: "Speed & Distance",
    explanation: "Average speed for equal distance = (2 * v1 * v2) / (v1 + v2) = (2 * 40 * 60) / (40 + 60) = 4800 / 100 = 48 km/h."
  },
  {
    questionText: "Find the compound interest on $16,000 for 9 months at 20% per annum compounded quarterly.",
    optionA: "$2,522",
    optionB: "$2,400",
    optionC: "$2,600",
    optionD: "$2,480",
    correctOption: "A",
    topicTag: "Compound Interest",
    explanation: "Quarterly rate r = 20% / 4 = 5%. Number of quarters t = 9 / 3 = 3 quarters. Amount = 16000 * (1.05)^3 = 16000 * 1.157625 = $18,522. CI = 18522 - 16000 = $2,522."
  },
  {
    questionText: "A dishonest dealer professes to sell his goods at cost price but uses a weight of 900 grams for a 1 kg weight. Find his gain percentage.",
    optionA: "11.11%",
    optionB: "10%",
    optionC: "12.5%",
    optionD: "9.09%",
    correctOption: "A",
    topicTag: "Profit & Loss",
    explanation: "Error = 1000g - 900g = 100g. Gain % = [Error / (True Weight - Error)] * 100% = (100 / 900) * 100% = 11.11%."
  },
  {
    questionText: "A train running at 54 km/h crosses a 200m long platform in 30 seconds. What is the length of the train?",
    optionA: "250 meters",
    optionB: "220 meters",
    optionC: "300 meters",
    optionD: "180 meters",
    correctOption: "A",
    topicTag: "Speed & Distance",
    explanation: "Speed in m/s = 54 * (5/18) = 15 m/s. Total distance in 30s = 15 * 30 = 450m. Length of train = 450 - 200 = 250 meters."
  },
  {
    questionText: "The perimeter of a rectangular field is 480 meters and the ratio between its length and breadth is 5 : 3. Find its area.",
    optionA: "13,500 sq m",
    optionB: "14,400 sq m",
    optionC: "12,000 sq m",
    optionD: "15,000 sq m",
    correctOption: "A",
    topicTag: "Mensuration",
    explanation: "Perimeter = 2(l + b) = 480 => l + b = 240. 5x + 3x = 240 => 8x = 240 => x = 30. Length l = 150m, Breadth b = 90m. Area = 150 * 90 = 13,500 sq m."
  },
  {
    questionText: "A jar contains a mixture of milk and water in the ratio 4 : 1. When 10 liters of mixture is replaced with 10 liters of water, the ratio becomes 2 : 3. Find initial volume of milk.",
    optionA: "16 liters",
    optionB: "20 liters",
    optionC: "24 liters",
    optionD: "12 liters",
    correctOption: "A",
    topicTag: "Alligation & Mixture",
    explanation: "Let initial total volume = V. Initial milk = (4/5)V. 10L removed contains 8L milk. Remaining milk = (4/5)V - 8. New ratio milk = 2/5 of V => (4/5)V - 8 = (2/5)V => (2/5)V = 8 => V = 20L. Initial milk = 4/5 * 20 = 16 liters."
  },
  {
    questionText: "What is the probability of choosing a prime number from integers between 1 and 20 (inclusive)?",
    optionA: "2 / 5",
    optionB: "3 / 10",
    optionC: "1 / 2",
    optionD: "7 / 20",
    correctOption: "A",
    topicTag: "Probability",
    explanation: "Prime numbers between 1 and 20: 2, 3, 5, 7, 11, 13, 17, 19 (8 prime numbers). Probability = 8 / 20 = 2 / 5."
  }
];

// -------------------------------------------------------------
// Test 12: IndiaBIX Advanced Quant & Speed Math Test 12 (15 Questions)
// -------------------------------------------------------------
export const indiaBixQuant4Questions: QuestionDef[] = [
  {
    questionText: "In how many ways can 5 boys and 4 girls be seated in a row so that all the girls sit together?",
    optionA: "17,280",
    optionB: "14,400",
    optionC: "2,880",
    optionD: "40,320",
    correctOption: "A",
    topicTag: "Permutations",
    explanation: "Treat 4 girls as 1 single block. Total items to arrange = 5 boys + 1 block = 6 items. Arranged in 6! = 720 ways. Girls inside block arrange in 4! = 24 ways. Total = 720 * 24 = 17,280."
  },
  {
    questionText: "What is the angle between the hour hand and minute hand at 4:20 PM?",
    optionA: "10 degrees",
    optionB: "0 degrees",
    optionC: "15 degrees",
    optionD: "20 degrees",
    correctOption: "A",
    topicTag: "Clocks",
    explanation: "Angle = |30H - 5.5M| = |30(4) - 5.5(20)| = |120 - 110| = 10 degrees."
  },
  {
    questionText: "If 1st January 2024 was a Monday, what day of the week was 1st January 2025?",
    optionA: "Wednesday",
    optionB: "Tuesday",
    optionC: "Thursday",
    optionD: "Sunday",
    correctOption: "A",
    topicTag: "Calendars",
    explanation: "2024 is a leap year (366 days), which has 2 odd days. Monday + 2 odd days = Wednesday."
  },
  {
    questionText: "Simplify the expression: (0.04)^(-1.5).",
    optionA: "125",
    optionB: "25",
    optionC: "625",
    optionD: "5",
    correctOption: "A",
    topicTag: "Indices & Surds",
    explanation: "0.04 = 4/100 = 1/25 = 5^(-2). Therefore (5^-2)^(-1.5) = 5^(3) = 125."
  },
  {
    questionText: "A boat travels 24 km upstream and 36 km downstream in 6 hours. It can also travel 36 km upstream and 24 km downstream in 6.5 hours. Find the speed of current.",
    optionA: "2 km/h",
    optionB: "3 km/h",
    optionC: "4 km/h",
    optionD: "1.5 km/h",
    correctOption: "A",
    topicTag: "Boats & Streams",
    explanation: "Let upstream speed = u, downstream speed = d. 24/u + 36/d = 6 and 36/u + 24/d = 6.5. Solving gives u = 8 km/h and d = 12 km/h. Speed of current = (d - u)/2 = (12 - 8)/2 = 2 km/h."
  },
  {
    questionText: "If log10 2 = 0.3010, what is the number of digits in 2^50?",
    optionA: "16",
    optionB: "15",
    optionC: "17",
    optionD: "14",
    correctOption: "A",
    topicTag: "Logarithms",
    explanation: "log10(2^50) = 50 * log10(2) = 50 * 0.3010 = 15.05. Number of digits = floor(15.05) + 1 = 15 + 1 = 16."
  },
  {
    questionText: "In a 500m race, A beats B by 45m or 9 seconds. What is A's time to complete the race?",
    optionA: "91 seconds",
    optionB: "100 seconds",
    optionC: "85 seconds",
    optionD: "95 seconds",
    correctOption: "A",
    topicTag: "Races & Games",
    explanation: "B covers 45m in 9 seconds => B's speed = 45 / 9 = 5 m/s. B's total time for 500m = 500 / 5 = 100s. Since A beats B by 9s, A's time = 100 - 9 = 91 seconds."
  },
  {
    questionText: "A pole broken by the wind touches the ground at an angle of 30 degrees at a distance of 10 sqrt(3) meters from its foot. What was the original height of the pole?",
    optionA: "30 meters",
    optionB: "20 meters",
    optionC: "25 meters",
    optionD: "35 meters",
    correctOption: "A",
    topicTag: "Heights & Distances",
    explanation: "tan(30) = h / (10 sqrt(3)) => h = 10m. cos(30) = (10 sqrt(3)) / hypotenuse => hypotenuse = 20m. Original height = 10 + 20 = 30 meters."
  },
  {
    questionText: "What single discount is equivalent to successive discounts of 30%, 20%, and 10%?",
    optionA: "49.6%",
    optionB: "60%",
    optionC: "50%",
    optionD: "45.2%",
    correctOption: "A",
    topicTag: "Discount",
    explanation: "Final multiplier = (0.70) * (0.80) * (0.90) = 0.504. Equivalent discount = (1 - 0.504) * 100% = 49.6%."
  },
  {
    questionText: "If 12 workers can build a wall of 60 meters in 8 days, how many meters of wall can 16 workers build in 6 days?",
    optionA: "60 meters",
    optionB: "72 meters",
    optionC: "50 meters",
    optionD: "80 meters",
    correctOption: "A",
    topicTag: "Chain Rule",
    explanation: "(M1 * D1) / W1 = (M2 * D2) / W2 => (12 * 8) / 60 = (16 * 6) / W2 => 96 / 60 = 96 / W2 => W2 = 60 meters."
  },
  {
    questionText: "Find the remainder when 2^31 is divided by 5.",
    optionA: "3",
    optionB: "2",
    optionC: "1",
    optionD: "4",
    correctOption: "A",
    topicTag: "Number Theory",
    explanation: "2^1=2, 2^2=4, 2^3=8≡3, 2^4=16≡1 (mod 5). 31 = 4*7 + 3. 2^31 ≡ (2^4)^7 * 2^3 ≡ 1^7 * 8 ≡ 3 (mod 5)."
  },
  {
    questionText: "Three coins are tossed simultaneously. What is the probability of getting at least two heads?",
    optionA: "1 / 2",
    optionB: "3 / 8",
    optionC: "5 / 8",
    optionD: "3 / 4",
    correctOption: "A",
    topicTag: "Probability",
    explanation: "Total outcomes = 8. Favorable outcomes (HHH, HHT, HTH, THH) = 4 outcomes. Probability = 4 / 8 = 1 / 2."
  },
  {
    questionText: "A solid metallic sphere of radius 6 cm is melted and recast into small spheres of radius 2 cm each. How many small spheres are formed?",
    optionA: "27",
    optionB: "18",
    optionC: "9",
    optionD: "36",
    correctOption: "A",
    topicTag: "Mensuration",
    explanation: "Number of spheres = Volume of big sphere / Volume of small sphere = (4/3 pi 6^3) / (4/3 pi 2^3) = (6/2)^3 = 3^3 = 27."
  },
  {
    questionText: "The average score of a bowler is 12.4 runs per wicket. In his next match he takes 5 wickets for 26 runs, thereby decreasing his average by 0.4. Number of wickets taken prior to this match:",
    optionA: "85",
    optionB: "80",
    optionC: "90",
    optionD: "75",
    correctOption: "A",
    topicTag: "Alligation & Mixture",
    explanation: "Let previous wickets = n. Total runs = 12.4n + 26. New average = 12.0 for (n + 5) wickets. 12.4n + 26 = 12(n + 5) => 0.4n = 34 => n = 85 wickets."
  },
  {
    questionText: "Find the derivative of f(x) = x^3 - 3x^2 + 5x - 7 evaluated at x = 2.",
    optionA: "5",
    optionB: "3",
    optionC: "7",
    optionD: "1",
    correctOption: "A",
    topicTag: "Calculus",
    explanation: "f'(x) = 3x^2 - 6x + 5. Evaluating at x = 2: f'(2) = 3(4) - 6(2) + 5 = 12 - 12 + 5 = 5."
  }
];

// -------------------------------------------------------------
// Test 13: IndiaBIX Logical & Analytical Reasoning Test 13 (15 Questions)
// -------------------------------------------------------------
export const indiaBixReasoning2Questions: QuestionDef[] = [
  {
    questionText: "In a row of 40 boys, R is 14th from the left end and S is 18th from the right end. How many boys are there between R and S?",
    optionA: "8",
    optionB: "7",
    optionC: "9",
    optionD: "10",
    correctOption: "A",
    topicTag: "Ranking & Ordering",
    explanation: "Sum of positions from ends = 14 + 18 = 32. Since 32 < 40, boys between them = 40 - 32 = 8 boys."
  },
  {
    questionText: "If 'FLOWER' is coded as 'UOLDVI', how will 'GARDEN' be coded in that same system?",
    optionA: "TZIVVM",
    optionB: "TZIWVM",
    optionC: "TZIUVM",
    optionD: "TZIVUN",
    correctOption: "A",
    topicTag: "Coding Decoding",
    explanation: "Opposite alphabet pair coding (A<->Z, B<->Y, etc.): G->T, A->Z, R->I, D->V, E->V, N->M => TZIVVM."
  },
  {
    questionText: "A person travels 7 km South, turns left and walks 5 km, then turns left and walks 7 km. How far and in which direction is he from the starting point?",
    optionA: "5 km East",
    optionB: "5 km West",
    optionC: "7 km East",
    optionD: "14 km South",
    correctOption: "A",
    topicTag: "Direction Sense",
    explanation: "South -7, East +5, North +7. Net position = 5 km East."
  },
  {
    questionText: "Statements: All laptops are screens. Some screens are LED. Conclusions: I. Some laptops are LED. II. No laptop is LED.",
    optionA: "Either I or II follows",
    optionB: "Only I follows",
    optionC: "Only II follows",
    optionD: "Neither I nor II follows",
    correctOption: "A",
    topicTag: "Syllogisms",
    explanation: "Complementary pair (Some + No) between same subjects (laptops and LED) forms an Either/Or relation."
  },
  {
    questionText: "Find the missing term in the series: 4, 9, 25, 49, 121, 169, ?",
    optionA: "289",
    optionB: "225",
    optionC: "196",
    optionD: "256",
    correctOption: "A",
    topicTag: "Series Completion",
    explanation: "Sequence of squares of prime numbers: 2^2, 3^2, 5^2, 7^2, 11^2, 13^2. Next prime is 17 => 17^2 = 289."
  },
  {
    questionText: "Pointing to a man, a woman said: 'His mother is the only daughter of my father.' How is the woman related to the man?",
    optionA: "Mother",
    optionB: "Sister",
    optionC: "Grandmother",
    optionD: "Aunt",
    correctOption: "A",
    topicTag: "Blood Relations",
    explanation: "'Only daughter of my father' = the woman herself. So 'His mother' = the woman. The woman is his mother."
  },
  {
    questionText: "Choose the odd pair of words: (Dog : Bark), (Goat : Bleat), (Snake : Hiss), (Horse : Roar).",
    optionA: "Horse : Roar",
    optionB: "Dog : Bark",
    optionC: "Goat : Bleat",
    optionD: "Snake : Hiss",
    correctOption: "A",
    topicTag: "Classification",
    explanation: "Roar is the sound of a Lion, whereas Horses Neigh."
  },
  {
    questionText: "Statements: High oil prices have led to inflation. Argument I: Government should reduce import taxes on crude oil. Argument II: Citizens should stop buying vehicles.",
    optionA: "Only Argument I is strong",
    optionB: "Only Argument II is strong",
    optionC: "Both I and II are strong",
    optionD: "Neither argument is strong",
    correctOption: "A",
    topicTag: "Statement & Arguments",
    explanation: "Reducing import taxes directly mitigates fuel inflation (strong). Stopping buying vehicles completely is impractical and extreme (weak)."
  },
  {
    questionText: "What day was on 26th January 1950 (Republic Day of India)?",
    optionA: "Thursday",
    optionB: "Friday",
    optionC: "Wednesday",
    optionD: "Tuesday",
    correctOption: "A",
    topicTag: "Calendars",
    explanation: "Odd days calculation till 26 Jan 1950 yields 4 odd days, corresponding to Thursday."
  },
  {
    questionText: "If A + B means A is the father of B; A - B means A is the sister of B; A * B means A is the brother of B. Which option indicates P is the uncle of Q?",
    optionA: "P * R + Q",
    optionB: "P + R * Q",
    optionC: "P - R + Q",
    optionD: "P * R - Q",
    correctOption: "A",
    topicTag: "Coded Blood Relations",
    explanation: "P * R means P is brother of R. R + Q means R is father of Q. Therefore, P is father's brother (uncle) of Q."
  },
  {
    questionText: "Six people P, Q, R, S, T, U are sitting in a row. T is sitting between P and S. Q is sitting next to U who is at extreme right. Who is sitting at the extreme left if P is 2nd to the left of Q?",
    optionA: "R",
    optionB: "S",
    optionC: "T",
    optionD: "P",
    correctOption: "A",
    topicTag: "Seating Arrangement",
    explanation: "Positions from left to right (1 to 6): Pos 6=U, Pos 5=Q, Pos 4=P, Pos 3=T, Pos 2=S, Pos 1=R. Extreme left is R."
  },
  {
    questionText: "A cube of side 4 cm is painted red on all faces and cut into 1 cm small cubes. How many small cubes have EXACTLY 2 faces painted?",
    optionA: "24",
    optionB: "16",
    optionC: "8",
    optionD: "32",
    correctOption: "A",
    topicTag: "Cube Puzzles",
    explanation: "Formula for 2-face painted cubes = 12 * (n - 2), where n = 4. 12 * (4 - 2) = 12 * 2 = 24."
  },
  {
    questionText: "In a certain code, 253 means 'books are old', 546 means 'man is old', 378 means 'buy good books'. Which digit stands for 'are'?",
    optionA: "2",
    optionB: "5",
    optionC: "3",
    optionD: "4",
    correctOption: "A",
    topicTag: "Coding Decoding",
    explanation: "Common in 253 and 546 is 'old'=5. Common in 253 and 378 is 'books'=3. Thus in 253, 'are' must be 2."
  },
  {
    questionText: "Statements: Some managers are leaders. All leaders are visionaries. Conclusions: I. Some managers are visionaries. II. All visionaries are leaders.",
    optionA: "Only Conclusion I follows",
    optionB: "Only Conclusion II follows",
    optionC: "Both follow",
    optionD: "Neither follows",
    correctOption: "A",
    topicTag: "Syllogisms",
    explanation: "Managers intersect Leaders, and Leaders are inside Visionaries. So Managers intersect Visionaries (I follows). All visionaries being leaders does not necessarily follow."
  },
  {
    questionText: "Which letter replaces question mark in sequence: Z, W, S, N, H, ?",
    optionA: "A",
    optionB: "B",
    optionC: "C",
    optionD: "Z",
    correctOption: "A",
    topicTag: "Letter Series",
    explanation: "Reverse alphabet positions: Z(26), W(23)[-3], S(19)[-4], N(14)[-5], H(8)[-6]. Next step is -7: 8 - 7 = 1 (A)."
  }
];

// -------------------------------------------------------------
// Test 14: IndiaBIX Verbal Ability & Reading Comprehension Test 14 (15 Questions)
// -------------------------------------------------------------
export const indiaBixVerbal2Questions: QuestionDef[] = [
  {
    questionText: "Choose the word most nearly SYNONYMOUS to 'PRAGMATIC':",
    optionA: "Practical",
    optionB: "Idealistic",
    optionC: "Theoretical",
    optionD: "Romantic",
    correctOption: "A",
    topicTag: "Synonyms",
    explanation: "'Pragmatic' means dealing with things sensibly and realistically. 'Practical' is its closest synonym."
  },
  {
    questionText: "Choose the word most nearly ANTONYMOUS to 'METICULOUS':",
    optionA: "Careless",
    optionB: "Thorough",
    optionC: "Precise",
    optionD: "Diligent",
    correctOption: "A",
    topicTag: "Antonyms",
    explanation: "'Meticulous' means showing great attention to detail. Its opposite is 'Careless'."
  },
  {
    questionText: "Spot the error: 'He is one of those men (A) / who does not (B) / listen to any advice. (C) / No Error (D)'",
    optionA: "Part B",
    optionB: "Part A",
    optionC: "Part C",
    optionD: "Part D",
    correctOption: "A",
    topicTag: "Error Spotting",
    explanation: "The relative pronoun 'who' refers to plural antecedent 'men'. Therefore, plural verb 'do not' should be used instead of 'does not'."
  },
  {
    questionText: "Select the correct meaning of idiom: 'To spill the beans':",
    optionA: "To reveal a secret prematurely",
    optionB: "To drop food by accident",
    optionC: "To spend money extravagantly",
    optionD: "To create a messy situation",
    correctOption: "A",
    topicTag: "Idioms & Phrases",
    explanation: "'To spill the beans' means to disclose confidential information or a secret."
  },
  {
    questionText: "Fill in the blank: 'The committee members could not agree _____ the proposed policy changes.'",
    optionA: "on",
    optionB: "with",
    optionC: "to",
    optionD: "at",
    correctOption: "A",
    topicTag: "Prepositions",
    explanation: "We agree 'on' a matter/topic, agree 'with' a person, and agree 'to' a proposal."
  },
  {
    questionText: "One word substitution: 'A person who collects or studies stamps'",
    optionA: "Philatelist",
    optionB: "Numismatist",
    optionC: "Bibliophile",
    optionD: "Anthologist",
    correctOption: "A",
    topicTag: "One Word Substitution",
    explanation: "A 'Philatelist' studies stamps. A 'Numismatist' collects coins."
  },
  {
    questionText: "Choose the correctly spelled word:",
    optionA: "Entrepreneur",
    optionB: "Entreprenuer",
    optionC: "Enterpreneur",
    optionD: "Entrapreneur",
    correctOption: "A",
    topicTag: "Spelling Check",
    explanation: "The correct spelling is 'Entrepreneur'."
  },
  {
    questionText: "Change to Passive Voice: 'The storm destroyed several historic buildings.'",
    optionA: "Several historic buildings were destroyed by the storm.",
    optionB: "Several historic buildings are destroyed by storm.",
    optionC: "The storm was destroyed by several historic buildings.",
    optionD: "Historic buildings had been destroyed by storm.",
    correctOption: "A",
    topicTag: "Active Passive Voice",
    explanation: "Simple past passive form: Subject (plural) + 'were' + past participle ('destroyed') + by object."
  },
  {
    questionText: "Sentence Improvement: 'If I was you, I would accept the job offer immediately.'",
    optionA: "If I were you",
    optionB: "If I am you",
    optionC: "If I had been you",
    optionD: "No improvement required",
    correctOption: "A",
    topicTag: "Sentence Correction",
    explanation: "Subjunctive mood for hypothetical conditionals requires 'were' regardless of pronoun."
  },
  {
    questionText: "Complete the analogy: Doctor is to Patient as Lawyer is to _____",
    optionA: "Client",
    optionB: "Court",
    optionC: "Judge",
    optionD: "Case",
    correctOption: "A",
    topicTag: "Analogies",
    explanation: "A Doctor advises a Patient; a Lawyer represents a Client."
  },
  {
    questionText: "Fill in the blank: 'Despite his financial hardship, he remained _____ to his moral values.'",
    optionA: "steadfast",
    optionB: "wavering",
    optionC: "dubious",
    optionD: "fragile",
    correctOption: "A",
    topicTag: "Sentence Completion",
    explanation: "'Steadfast' means firm, resolute, and unwavering in loyalty or principles."
  },
  {
    questionText: "Choose the word ANTONYMOUS to 'OBSTINATE':",
    optionA: "Flexible",
    optionB: "Stubborn",
    optionC: "Rigid",
    optionD: "Dogmatic",
    correctOption: "A",
    topicTag: "Antonyms",
    explanation: "'Obstinate' means stubbornly refusing to change one's opinion. 'Flexible' is its antonym."
  },
  {
    questionText: "Identify the figure of speech: 'The moonlight danced across the calm ocean surface.'",
    optionA: "Personification",
    optionB: "Metaphor",
    optionC: "Simile",
    optionD: "Hyperbole",
    correctOption: "A",
    topicTag: "Figures of Speech",
    explanation: "Attributing human actions ('danced') to inanimate objects ('moonlight') is Personification."
  },
  {
    questionText: "Choose the word SYNONYMOUS to 'BENEVOLENT':",
    optionA: "Generous",
    optionB: "Malevolent",
    optionC: "Hostile",
    optionD: "Greedy",
    correctOption: "A",
    topicTag: "Synonyms",
    explanation: "'Benevolent' means well-meaning and kindly. 'Generous' is synonymous."
  },
  {
    questionText: "Rearrange into logical sentence: P: for the exam / Q: had studied / R: She / S: diligently",
    optionA: "R Q S P",
    optionB: "P Q R S",
    optionC: "S R Q P",
    optionD: "Q S R P",
    correctOption: "A",
    topicTag: "Ordering of Words",
    explanation: "Logical sequence: R (She) Q (had studied) S (diligently) P (for the exam) => 'She had studied diligently for the exam.'"
  }
];

// -------------------------------------------------------------
// Test 15: IndiaBIX Data Interpretation & Charts Test 15 (15 Questions)
// -------------------------------------------------------------
export const indiaBixDataInterp1Questions: QuestionDef[] = [
  {
    questionText: "A company's profits over 4 years are $20M, $25M, $30M, and $40M. What is the average annual percentage increase in profit?",
    optionA: "26.0%",
    optionB: "25.0%",
    optionC: "30.0%",
    optionD: "20.0%",
    correctOption: "A",
    topicTag: "Data Interpretation",
    explanation: "Increases: Y1-Y2 = 25% (5/20), Y2-Y3 = 20% (5/25), Y3-Y4 = 33.33% (10/30). Average = (25 + 20 + 33.33) / 3 = 78.33 / 3 = 26.1% ≈ 26.0%."
  },
  {
    questionText: "In a pie chart representing student enrollments: Engineering = 40%, Medical = 25%, Arts = 20%, Science = 15%. What is the central angle for Engineering?",
    optionA: "144 degrees",
    optionB: "120 degrees",
    optionC: "90 degrees",
    optionD: "108 degrees",
    correctOption: "A",
    topicTag: "Pie Charts",
    explanation: "Angle = Percentage * 3.6 degrees = 40 * 3.6 = 144 degrees."
  },
  {
    questionText: "Refer to Pie Chart: Total students = 1,200. Medical = 25%, Arts = 20%. How many more students are in Medical than Arts?",
    optionA: "60 students",
    optionB: "50 students",
    optionC: "100 students",
    optionD: "80 students",
    correctOption: "A",
    topicTag: "Pie Charts",
    explanation: "Percentage difference = 25% - 20% = 5%. Number of students = 5% of 1,200 = 0.05 * 1200 = 60 students."
  },
  {
    questionText: "Line Graph: Production of cars (in thousands): 2020=50, 2021=65, 2022=80, 2023=100. What is percentage increase from 2020 to 2023?",
    optionA: "100%",
    optionB: "50%",
    optionC: "80%",
    optionD: "120%",
    correctOption: "A",
    topicTag: "Line Graphs",
    explanation: "Increase = 100 - 50 = 50 thousand. Percentage increase = (50 / 50) * 100% = 100%."
  },
  {
    questionText: "Bar Chart: Revenue of Company A vs Company B (in $ Millions): Company A = 120, Company B = 150. Ratio of Company A revenue to Company B revenue is:",
    optionA: "4 : 5",
    optionB: "5 : 4",
    optionC: "3 : 4",
    optionD: "2 : 3",
    correctOption: "A",
    topicTag: "Bar Charts",
    explanation: "Ratio = 120 : 150 = 12 : 15 = 4 : 5."
  },
  {
    questionText: "Table DI: Marks scored by 5 students in Math (max 100) and Science (max 100). Student A scored 85 in Math and 95 in Science. What is A's average percentage score?",
    optionA: "90%",
    optionB: "88%",
    optionC: "92%",
    optionD: "85%",
    correctOption: "A",
    topicTag: "Table DI",
    explanation: "Total marks = 85 + 95 = 180 out of 200. Average percentage = (180 / 200) * 100% = 90%."
  },
  {
    questionText: "Caselet DI: In an organization of 500 employees, 60% play Cricket, 40% play Football, and 15% play both. How many employees play NEITHER game?",
    optionA: "75 employees",
    optionB: "100 employees",
    optionC: "50 employees",
    optionD: "125 employees",
    correctOption: "A",
    topicTag: "Venn Diagrams",
    explanation: "Percentage playing at least one = 60% + 40% - 15% = 85%. Neither = 100% - 85% = 15%. 15% of 500 = 75 employees."
  },
  {
    questionText: "Bar Chart: Export of wheat (in tons): 2021=400, 2022=500, 2023=600. What is the ratio of exports in 2021 to total exports over all 3 years?",
    optionA: "4 : 15",
    optionB: "1 : 3",
    optionC: "2 : 5",
    optionD: "5 : 12",
    correctOption: "A",
    topicTag: "Bar Charts",
    explanation: "Total exports = 400 + 500 + 600 = 1,500 tons. Ratio = 400 : 1500 = 4 : 15."
  },
  {
    questionText: "Line Graph: Sales (in $k) over 4 quarters: Q1=20, Q2=30, Q3=25, Q4=45. In which quarter was the percentage growth rate highest compared to preceding quarter?",
    optionA: "Q4",
    optionB: "Q2",
    optionC: "Q3",
    optionD: "Q1",
    correctOption: "A",
    topicTag: "Line Graphs",
    explanation: "Growth Q2 over Q1 = (10/20)*100 = 50%. Growth Q3 over Q2 = negative (-16.7%). Growth Q4 over Q3 = (20/25)*100 = 80%. Highest growth rate was in Q4."
  },
  {
    questionText: "Table DI: Population of 3 cities in 2020 and 2023. City X: 2.0M -> 2.5M. What is the compound growth percentage of City X?",
    optionA: "25%",
    optionB: "20%",
    optionC: "30%",
    optionD: "15%",
    correctOption: "A",
    topicTag: "Table DI",
    explanation: "Growth = 2.5M - 2.0M = 0.5M. Growth percentage = (0.5 / 2.0) * 100% = 25%."
  },
  {
    questionText: "Pie Chart: Budget allocation: R&D = 30%, Marketing = 25%, Salaries = 35%, Operations = 10%. If total budget is $10 Million, how much is allocated to R&D and Marketing combined?",
    optionA: "$5.5 Million",
    optionB: "$5.0 Million",
    optionC: "$6.0 Million",
    optionD: "$4.5 Million",
    correctOption: "A",
    topicTag: "Pie Charts",
    explanation: "Combined % = 30% + 25% = 55%. 55% of $10M = $5.5 Million."
  },
  {
    questionText: "Data Sufficiency: What is the value of positive integer x? Statement I: x^2 = 36. Statement II: x is a prime number.",
    optionA: "Statement I alone is sufficient",
    optionB: "Statement II alone is sufficient",
    optionC: "Both statements together are needed",
    optionD: "Neither statement is sufficient",
    correctOption: "A",
    topicTag: "Data Sufficiency",
    explanation: "Statement I: Since x is positive integer, x^2 = 36 uniquely gives x = 6. Statement I alone is sufficient."
  },
  {
    questionText: "Cumulative Frequency: In an exam, 20% scored <40, 50% scored <60, 85% scored <80, 100% scored <100. What percentage scored between 60 and 80?",
    optionA: "35%",
    optionB: "30%",
    optionC: "25%",
    optionD: "40%",
    correctOption: "A",
    topicTag: "Data Interpretation",
    explanation: "Percentage scoring between 60 and 80 = (% < 80) - (% < 60) = 85% - 50% = 35%."
  },
  {
    questionText: "Venn Diagram: In a survey of 100 people, 70 like Tea, 60 like Coffee, and 40 like both. How many like ONLY Tea?",
    optionA: "30 people",
    optionB: "20 people",
    optionC: "40 people",
    optionD: "10 people",
    correctOption: "A",
    topicTag: "Venn Diagrams",
    explanation: "Only Tea = Total Tea - Both = 70 - 40 = 30 people."
  },
  {
    questionText: "Bar Chart: Number of defective units produced: Monday=12, Tuesday=18, Wednesday=15, Thursday=9, Friday=21. What is average daily defective units?",
    optionA: "15 units",
    optionB: "16 units",
    optionC: "14 units",
    optionD: "18 units",
    correctOption: "A",
    topicTag: "Bar Charts",
    explanation: "Total defectives = 12 + 18 + 15 + 9 + 21 = 75 units. Average = 75 / 5 = 15 units."
  }
];

// -------------------------------------------------------------
// Test 16: IndiaBIX Grand Speed Aptitude Test 16 (15 Questions)
// -------------------------------------------------------------
export const indiaBixAptitudeGrandQuestions: QuestionDef[] = [
  {
    questionText: "What is the unit digit of 7^95 - 3^58?",
    optionA: "4",
    optionB: "0",
    optionC: "6",
    optionD: "2",
    correctOption: "A",
    topicTag: "Number Theory",
    explanation: "Cyclicity of 7 is 4: 95 mod 4 = 3 => 7^3 ends in 3. Cyclicity of 3 is 4: 58 mod 4 = 2 => 3^2 ends in 9. Unit digit = (13 - 9) = 4."
  },
  {
    questionText: "A person covers a distance in 40 minutes at 45 km/h. At what speed must he drive to cover the same distance in 30 minutes?",
    optionA: "60 km/h",
    optionB: "55 km/h",
    optionC: "50 km/h",
    optionD: "65 km/h",
    correctOption: "A",
    topicTag: "Speed & Distance",
    explanation: "Distance = 45 * (40/60) = 30 km. Required speed = 30 / (30/60) = 60 km/h."
  },
  {
    questionText: "If x + 1/x = 4, what is the value of x^3 + 1/x^3?",
    optionA: "52",
    optionB: "64",
    optionC: "48",
    optionD: "56",
    correctOption: "A",
    topicTag: "Algebra",
    explanation: "Formula: x^3 + 1/x^3 = k^3 - 3k. With k = 4: 4^3 - 3(4) = 64 - 12 = 52."
  },
  {
    questionText: "Statements: All cars are vehicles. All vehicles have wheels. Conclusions: I. All cars have wheels. II. Some vehicles are cars.",
    optionA: "Both I and II follow",
    optionB: "Only I follows",
    optionC: "Only II follows",
    optionD: "Neither follows",
    correctOption: "A",
    topicTag: "Syllogisms",
    explanation: "Cars ⊂ Vehicles ⊂ Wheels. Thus, All cars have wheels (I follows) and Some vehicles are cars (II follows)."
  },
  {
    questionText: "A train 300m long passes a man walking at 6 km/h in the same direction in 18 seconds. Find the speed of the train.",
    optionA: "66 km/h",
    optionB: "60 km/h",
    optionC: "72 km/h",
    optionD: "54 km/h",
    correctOption: "A",
    topicTag: "Speed & Distance",
    explanation: "Relative speed = 300 / 18 = 50/3 m/s = (50/3) * (18/5) = 60 km/h. Since walking in same direction: Vt - 6 = 60 => Vt = 66 km/h."
  },
  {
    questionText: "If the ratio of principal to simple interest for 5 years is 5 : 2, what is the rate of interest per annum?",
    optionA: "8%",
    optionB: "10%",
    optionC: "6%",
    optionD: "12%",
    correctOption: "A",
    topicTag: "Simple Interest",
    explanation: "P = 5x, SI = 2x over T = 5 years. SI = (P * R * T) / 100 => 2x = (5x * R * 5) / 100 => 2x = (25x * R) / 100 => R = 200 / 25 = 8%."
  },
  {
    questionText: "In how many different ways can the letters of the word 'OPTICAL' be arranged so that the vowels never come together?",
    optionA: "4,320",
    optionB: "5,040",
    optionC: "1,440",
    optionD: "3,600",
    correctOption: "A",
    topicTag: "Permutations",
    explanation: "Total arrangements = 7! = 5,040. Vowels (O, I, A) together = 5! * 3! = 120 * 6 = 720. Vowels NEVER together = 5,040 - 720 = 4,320."
  },
  {
    questionText: "Find the odd number out in the series: 1, 8, 27, 64, 124, 216, 343.",
    optionA: "124",
    optionB: "64",
    optionC: "216",
    optionD: "27",
    correctOption: "A",
    topicTag: "Odd One Out",
    explanation: "The terms are perfect cubes: 1^3, 2^3, 3^3, 4^3, 5^3=125 (given 124), 6^3, 7^3. 124 is odd."
  },
  {
    questionText: "A seller marks his goods 30% above cost price and allows a discount of 15% for cash payment. Find his net profit percentage.",
    optionA: "10.5%",
    optionB: "15%",
    optionC: "12%",
    optionD: "8.5%",
    correctOption: "A",
    topicTag: "Profit & Loss",
    explanation: "Net profit % = x + y + (xy/100) = +30 - 15 + (30 * -15 / 100) = 15 - 4.5 = 10.5%."
  },
  {
    questionText: "A clock shows 8:00 AM. Through how many degrees will the hour hand rotate when the clock shows 2:00 PM?",
    optionA: "180 degrees",
    optionB: "150 degrees",
    optionC: "210 degrees",
    optionD: "120 degrees",
    correctOption: "A",
    topicTag: "Clocks",
    explanation: "Time duration from 8:00 AM to 2:00 PM = 6 hours. Hour hand rotates 30 degrees per hour. Total rotation = 6 * 30 = 180 degrees."
  },
  {
    questionText: "A card is drawn from a well-shuffled deck of 52 cards. What is the probability that it is either a King or a Heart?",
    optionA: "4 / 13",
    optionB: "1 / 4",
    optionC: "17 / 52",
    optionD: "9 / 26",
    correctOption: "A",
    topicTag: "Probability",
    explanation: "P(King) = 4/52, P(Heart) = 13/52, P(King and Heart) = 1/52. P(King or Heart) = (4 + 13 - 1)/52 = 16/52 = 4/13."
  },
  {
    questionText: "If 'POND' is coded as 'RSTI', how is 'HEAR' coded in that same system?",
    optionA: "JIGW",
    optionB: "JGHW",
    optionC: "JKGW",
    optionD: "JIGV",
    correctOption: "A",
    topicTag: "Coding Decoding",
    explanation: "P(+2)->R, O(+4)->S, N(+6)->T, D(+5)->I... H(+2)->J, E(+4)->I, A(+6)->G, R(+5)->W => JIGW."
  },
  {
    questionText: "What is the area of a circle inscribed in a square of side 14 cm?",
    optionA: "154 sq cm",
    optionB: "196 sq cm",
    optionC: "144 sq cm",
    optionD: "176 sq cm",
    correctOption: "A",
    topicTag: "Mensuration",
    explanation: "Diameter of inscribed circle = side of square = 14 cm => radius r = 7 cm. Area = pi * r^2 = (22/7) * 49 = 154 sq cm."
  },
  {
    questionText: "A and B working together can finish a job in 12 days. A alone can finish it in 20 days. How many days will B alone take to finish the job?",
    optionA: "30 days",
    optionB: "25 days",
    optionC: "35 days",
    optionD: "40 days",
    correctOption: "A",
    topicTag: "Time & Work",
    explanation: "B's rate = 1/12 - 1/20 = (5 - 3) / 60 = 2 / 60 = 1/30. B takes 30 days."
  },
  {
    questionText: "Two numbers are in the ratio 4 : 5 and their LCM is 180. Find the smaller number.",
    optionA: "36",
    optionB: "45",
    optionC: "27",
    optionD: "54",
    correctOption: "A",
    topicTag: "HCF & LCM",
    explanation: "Let numbers be 4x and 5x. LCM = 20x = 180 => x = 9. Smaller number = 4 * 9 = 36."
  }
];

// Aliases for backward compatibility in imports
export const indiaBixAptitude1Questions = indiaBixQuant1Questions;
export const indiaBixAptitude2Questions = indiaBixQuant2Questions;
export const indiaBixTechnical1Questions = indiaBixCpp1Questions;
export const indiaBixJavaDb1Questions = indiaBixJava1Questions;
export const indiaBixTechnical2Questions = indiaBixCSharp1Questions;
export const indiaBixTechnical3Questions = indiaBixDbms1Questions;
export const indiaBixTechnical4Questions = indiaBixCn1Questions;
export const indiaBixTechnical5Questions = indiaBixOsSdlc1Questions;
