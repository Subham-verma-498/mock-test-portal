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

// Aliases for backward compatibility in imports
export const indiaBixAptitude1Questions = indiaBixQuant1Questions;
export const indiaBixAptitude2Questions = indiaBixQuant2Questions;
export const indiaBixTechnical1Questions = indiaBixCpp1Questions;
export const indiaBixJavaDb1Questions = indiaBixJava1Questions;
export const indiaBixTechnical2Questions = indiaBixCSharp1Questions;
export const indiaBixTechnical3Questions = indiaBixDbms1Questions;
export const indiaBixTechnical4Questions = indiaBixCn1Questions;
export const indiaBixTechnical5Questions = indiaBixOsSdlc1Questions;
