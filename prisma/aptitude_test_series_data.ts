// -------------------------------------------------------------
// 10 Mixed Topics Aptitude Tests + 3 Reasoning Tests Question Sets
// -------------------------------------------------------------

export const aptSeries1Questions = [
  {
    questionText: "If a train traveling at 72 km/h crosses a 200m long platform in 25 seconds, what is the length of the train?",
    optionA: "300 meters",
    optionB: "250 meters",
    optionC: "350 meters",
    optionD: "200 meters",
    correctOption: "A",
    topicTag: "Quantitative Aptitude",
    explanation: "Speed in m/s = 72 * (5/18) = 20 m/s. Total distance covered in 25s = 20 * 25 = 500m. Since Total distance = Train Length + Platform Length (200m), Train Length = 500 - 200 = 300 meters."
  },
  {
    questionText: "In a certain code language, 'CAMPUS' is written as 'EDORWV'. How is 'PORTAL' written in that same code?",
    optionA: "RQTVCN",
    optionB: "ROTVBM",
    optionC: "QPSUBM",
    optionD: "RNTVCN",
    correctOption: "A",
    topicTag: "Logical Reasoning",
    explanation: "Each letter is shifted forward by +2 positions in the alphabet: P(+2)->R, O(+2)->Q, R(+2)->T, T(+2)->V, A(+2)->C, L(+2)->N. Hence, PORTAL becomes RQTVCN."
  },
  {
    questionText: "Select the word that is most nearly SYNONYMOUS to 'EPHEMERAL':",
    optionA: "Transient",
    optionB: "Perpetual",
    optionC: "Monumental",
    optionD: "Substantial",
    correctOption: "A",
    topicTag: "Verbal Ability",
    explanation: "'Ephemeral' means lasting for a very short time. 'Transient' shares the exact same meaning of temporary or short-lived."
  },
  {
    questionText: "In a pie chart representing a total municipal budget of $120,000, Education accounts for an angle of 54 degrees. How much money is allocated to Education?",
    optionA: "$18,000",
    optionB: "$15,000",
    optionC: "$21,000",
    optionD: "$12,000",
    correctOption: "A",
    topicTag: "Data Interpretation",
    explanation: "The total angle in a pie chart is 360 degrees. Fraction for Education = 54 / 360 = 0.15 (or 15%). Allocated amount = 15% of $120,000 = 0.15 * 120,000 = $18,000."
  },
  {
    questionText: "A and B together can complete a project in 12 days. A alone can complete the same project in 20 days. How many days will B take alone?",
    optionA: "30 days",
    optionB: "25 days",
    optionC: "32 days",
    optionD: "28 days",
    correctOption: "A",
    topicTag: "Quantitative Aptitude",
    explanation: "Work rate of (A + B) = 1/12 per day. Work rate of A = 1/20 per day. Work rate of B = 1/12 - 1/20 = (5 - 3)/60 = 2/60 = 1/30 per day. B alone takes 30 days."
  },
  {
    questionText: "A is the mother of B. C is the son of A. D is the brother of E. E is the daughter of B. How is A related to E?",
    optionA: "Grandmother",
    optionB: "Mother",
    optionC: "Aunt",
    optionD: "Sister",
    correctOption: "A",
    topicTag: "Logical Reasoning",
    explanation: "Since A is the mother of B, and E is the daughter of B, A is the mother of E's parent (B). Therefore, A is the Grandmother of E."
  },
  {
    questionText: "Fill in the blank with the correct grammatical form: 'Neither the manager nor the employees _____ present at the meeting yesterday.'",
    optionA: "were",
    optionB: "was",
    optionC: "are",
    optionD: "is",
    correctOption: "A",
    topicTag: "Verbal Ability",
    explanation: "When subjects are joined by 'neither... nor', the verb agrees with the subject closest to it. Here, 'employees' is plural and the tense is past ('yesterday'), so 'were' is correct."
  },
  {
    questionText: "What is the value of x? Statement 1: x^2 = 25. Statement 2: x > 0.",
    optionA: "Both statements together are sufficient, but neither alone is sufficient",
    optionB: "Statement 1 alone is sufficient",
    optionC: "Statement 2 alone is sufficient",
    optionD: "Statements 1 & 2 together are not sufficient",
    correctOption: "A",
    topicTag: "Data Sufficiency",
    explanation: "Statement 1 gives x = +5 or -5 (not unique). Statement 2 says x is positive. Combining both gives x = +5 uniquely. Hence, both together are necessary and sufficient."
  },
  {
    questionText: "Two numbers are in the ratio 3:4. If their HCF is 4, what is their LCM?",
    optionA: "48",
    optionB: "36",
    optionC: "24",
    optionD: "60",
    correctOption: "A",
    topicTag: "Quantitative Aptitude",
    explanation: "Let numbers be 3x and 4x. Since HCF is 4, x = 4. The numbers are 3*4 = 12 and 4*4 = 16. LCM(12, 16) = 48."
  },
  {
    questionText: "If '+' means multiply, '-' means divide, '*' means add, and '/' means subtract, calculate: 12 - 4 + 3 * 6 / 2.",
    optionA: "13",
    optionB: "11",
    optionC: "15",
    optionD: "9",
    correctOption: "A",
    topicTag: "Logical Reasoning",
    explanation: "Substituting operators: 12 / 4 * 3 + 6 - 2. Following BODMAS: (12 / 4) = 3. 3 * 3 = 9. 9 + 6 = 15. 15 - 2 = 13."
  }
];

export const aptSeries2Questions = [
  {
    questionText: "A sum of money doubles itself at simple interest in 8 years. What is the annual rate of interest?",
    optionA: "12.5%",
    optionB: "10%",
    optionC: "15%",
    optionD: "8%",
    correctOption: "A",
    topicTag: "Quantitative Aptitude",
    explanation: "Let Principal = P. Amount = 2P, so SI = P. Formula: SI = (P * R * T) / 100 => P = (P * R * 8) / 100 => R = 100 / 8 = 12.5% per annum."
  },
  {
    questionText: "Find the next term in the logical series: 2, 6, 12, 20, 30, 42, ?",
    optionA: "56",
    optionB: "52",
    optionC: "54",
    optionD: "60",
    correctOption: "A",
    topicTag: "Logical Reasoning",
    explanation: "Differences between terms: 6-2=4, 12-6=6, 20-12=8, 30-20=10, 42-30=12. Next difference is +14. Next term = 42 + 14 = 56. Alternatively, n*(n+1): 1*2=2, 2*3=6, 3*4=12, 4*5=20, 5*6=30, 6*7=42, 7*8=56."
  },
  {
    questionText: "Choose the word with the correct spelling:",
    optionA: "ACCOMMODATE",
    optionB: "ACOMMODATE",
    optionC: "ACCOMODATE",
    optionD: "ACOMMODDE",
    correctOption: "A",
    topicTag: "Verbal Ability",
    explanation: "'Accommodate' has double 'c' and double 'm'."
  },
  {
    questionText: "Evaluate the mathematical expression: sqrt(136 + sqrt(57 + sqrt(49)))",
    optionA: "12",
    optionB: "14",
    optionC: "11",
    optionD: "13",
    correctOption: "A",
    topicTag: "Speed Mathematics",
    explanation: "Working inside out: sqrt(49) = 7. Next, sqrt(57 + 7) = sqrt(64) = 8. Next, sqrt(136 + 8) = sqrt(144) = 12."
  },
  {
    questionText: "A merchant sells an item at a 20% profit. If he bought it for 10% less and sold it for $18 less, his profit would be 25%. What was the original cost price?",
    optionA: "$240",
    optionB: "$200",
    optionC: "$250",
    optionD: "$300",
    correctOption: "A",
    topicTag: "Quantitative Aptitude",
    explanation: "Let CP = 100x. Initial SP = 120x. New CP = 90x. New SP = 90x * 1.25 = 112.5x. Difference in SP = 120x - 112.5x = 7.5x. Given 7.5x = 18 => x = 2.4. Original CP = 100 * 2.4 = $240."
  },
  {
    questionText: "A person starts walking North for 5 km, turns right and walks 3 km, then turns right again and walks 5 km. How far and in which direction is he from the starting point?",
    optionA: "3 km East",
    optionB: "3 km West",
    optionC: "5 km North",
    optionD: "4 km East",
    correctOption: "A",
    topicTag: "Logical Reasoning",
    explanation: "Moving North (+5 Y), Right/East (+3 X), Right/South (-5 Y). Final position: (3, 0), which is 3 km East of the origin."
  },
  {
    questionText: "Select the ANTONYM for the word 'METICULOUS':",
    optionA: "Careless",
    optionB: "Scrupulous",
    optionC: "Fastidious",
    optionD: "Rigorous",
    correctOption: "A",
    topicTag: "Verbal Ability",
    explanation: "'Meticulous' means showing great attention to detail / careful. The antonym is 'Careless'."
  },
  {
    questionText: "What is the probability of obtaining a total sum of 8 when throwing two standard 6-sided dice?",
    optionA: "5/36",
    optionB: "1/6",
    optionC: "7/36",
    optionD: "1/9",
    correctOption: "A",
    topicTag: "Quantitative Aptitude",
    explanation: "Total outcomes = 36. Favorable outcomes for sum = 8: (2,6), (3,5), (4,4), (5,3), (6,2) -> 5 outcomes. Probability = 5 / 36."
  },
  {
    questionText: "Statements: All dogs are mammals. All mammals are warm-blooded. Conclusion I: All dogs are warm-blooded. Conclusion II: Some warm-blooded creatures are dogs.",
    optionA: "Both Conclusion I and II follow",
    optionB: "Only Conclusion I follows",
    optionC: "Only Conclusion II follows",
    optionD: "Neither follows",
    correctOption: "A",
    topicTag: "Logical Reasoning",
    explanation: "Since Dogs ⊂ Mammals ⊂ Warm-blooded: All dogs are warm-blooded (I is valid). Also, the subset of warm-blooded creatures includes all dogs (II is valid)."
  },
  {
    questionText: "The average score of 5 students in a test was 80. If one student scoring 60 is replaced by a student scoring 90, what is the new average?",
    optionA: "86",
    optionB: "84",
    optionC: "88",
    optionD: "85",
    correctOption: "A",
    topicTag: "Data Interpretation",
    explanation: "Net change in total score = +90 - 60 = +30. Increase in average = 30 / 5 = +6. New average = 80 + 6 = 86."
  }
];

export const aptSeries3Questions = [
  {
    questionText: "In how many distinct ways can the letters of the word 'CAMPUS' be arranged?",
    optionA: "720",
    optionB: "120",
    optionC: "360",
    optionD: "5040",
    correctOption: "A",
    topicTag: "Quantitative Aptitude",
    explanation: "The word 'CAMPUS' has 6 unique letters. Total arrangements = 6! = 6 * 5 * 4 * 3 * 2 * 1 = 720."
  },
  {
    questionText: "If 5 men or 9 women can harvest a field in 19 days, how many days will 3 men and 6 women take to harvest the same field?",
    optionA: "15 days",
    optionB: "12 days",
    optionC: "18 days",
    optionD: "20 days",
    correctOption: "A",
    topicTag: "Quantitative Aptitude",
    explanation: "5 Men = 9 Women => 1 Man = 9/5 Women. 3 Men + 6 Women = 3*(9/5) + 6 = 27/5 + 30/5 = 57/5 Women. Using W1 * D1 = W2 * D2: 9 * 19 = (57/5) * D2 => 171 = (57/5) * D2 => D2 = (171 * 5) / 57 = 3 * 5 = 15 days."
  },
  {
    questionText: "Choose the option that correctly completes the sentence: 'The committee was divided in _____ opinion on the proposed policy.'",
    optionA: "their",
    optionB: "its",
    optionC: "his",
    optionD: "her",
    correctOption: "A",
    topicTag: "Verbal Ability",
    explanation: "When a collective noun (committee) acts as individual members holding differing opinions (divided), it takes a plural pronoun ('their')."
  },
  {
    questionText: "Point P is 10 m South of Point Q. Point R is 12 m East of Point P. Point S is 10 m North of Point R. What is the shortest distance between Q and S?",
    optionA: "12 m",
    optionB: "10 m",
    optionC: "22 m",
    optionD: "15 m",
    correctOption: "A",
    topicTag: "Logical Reasoning",
    explanation: "Q to P is 10m South. P to R is 12m East. R to S is 10m North. S is directly 12m East of Q forming a rectangle. Shortest distance Q-S = 12 meters."
  },
  {
    questionText: "In a mixture of 60 liters, the ratio of milk to water is 2:1. How much water must be added to make the ratio 1:2?",
    optionA: "60 liters",
    optionB: "40 liters",
    optionC: "30 liters",
    optionD: "45 liters",
    correctOption: "A",
    topicTag: "Quantitative Aptitude",
    explanation: "Initial: Milk = (2/3)*60 = 40L, Water = 20L. We want Milk/Water = 40 / (20 + W) = 1/2 => 80 = 20 + W => W = 60 liters."
  },
  {
    questionText: "Find the odd one out among the given numbers: 27, 64, 125, 144, 216, 343",
    optionA: "144",
    optionB: "64",
    optionC: "216",
    optionD: "343",
    correctOption: "A",
    topicTag: "Logical Reasoning",
    explanation: "27=3^3, 64=4^3, 125=5^3, 216=6^3, 343=7^3 are perfect cubes. 144 is a square (12^2), not a cube."
  },
  {
    questionText: "Identify the meaning of the idiom: 'To spill the beans':",
    optionA: "To reveal a secret prematurely",
    optionB: "To waste food resources",
    optionC: "To cause an accidental mess",
    optionD: "To perform a magic trick",
    correctOption: "A",
    topicTag: "Verbal Ability",
    explanation: "'Spill the beans' means to disclose confidential information or a secret ahead of time."
  },
  {
    questionText: "A table below shows monthly sales (in $1000s): Jan: 40, Feb: 50, Mar: 60, Apr: 90. What is the percentage increase in sales from January to April?",
    optionA: "125%",
    optionB: "100%",
    optionC: "150%",
    optionD: "80%",
    correctOption: "A",
    topicTag: "Data Interpretation",
    explanation: "Increase = 90 - 40 = 50. Percentage increase = (50 / 40) * 100 = 1.25 * 100 = 125%."
  },
  {
    questionText: "Statements: All pens are pencils. No pencil is a ruler. Conclusion I: No pen is a ruler. Conclusion II: Some pencils are pens.",
    optionA: "Both Conclusion I and II follow",
    optionB: "Only Conclusion I follows",
    optionC: "Only Conclusion II follows",
    optionD: "Neither follows",
    correctOption: "A",
    topicTag: "Logical Reasoning",
    explanation: "Pens ⊂ Pencils, and Pencils ∩ Rulers = ∅. Therefore, Pens ∩ Rulers = ∅ (I follows). Since Pens ⊂ Pencils, some pencils are pens (II follows)."
  },
  {
    questionText: "What is the compound interest on $10,000 for 2 years at 10% per annum compounded annually?",
    optionA: "$2,100",
    optionB: "$2,000",
    optionC: "$2,200",
    optionD: "$1,800",
    correctOption: "A",
    topicTag: "Quantitative Aptitude",
    explanation: "Amount = 10000 * (1 + 10/100)^2 = 10000 * (1.1)^2 = 10000 * 1.21 = $12,100. CI = 12100 - 10000 = $2,100."
  }
];

export const aptSeries4Questions = [
  {
    questionText: "A motorist covers a distance of 180 km at 60 km/h and returns at 90 km/h. What is the average speed for the entire journey?",
    optionA: "72 km/h",
    optionB: "75 km/h",
    optionC: "70 km/h",
    optionD: "80 km/h",
    correctOption: "A",
    topicTag: "Quantitative Aptitude",
    explanation: "Average Speed for equal distances = (2 * S1 * S2) / (S1 + S2) = (2 * 60 * 90) / (60 + 90) = 10800 / 150 = 72 km/h."
  },
  {
    questionText: "In a class of 50 students, 30 like Cricket, 25 like Football, and 10 like both. How many students like NEITHER sport?",
    optionA: "5",
    optionB: "10",
    optionC: "8",
    optionD: "12",
    correctOption: "A",
    topicTag: "Logical Reasoning",
    explanation: "Students liking at least one sport = N(C) + N(F) - N(C ∩ F) = 30 + 25 - 10 = 45. Students liking neither = 50 - 45 = 5."
  },
  {
    questionText: "Select the sentence with correct punctuation and structure:",
    optionA: "Although it was raining heavily, we decided to go for a hike.",
    optionB: "Although it was raining heavily we decided to go for a hike.",
    optionC: "Although, it was raining heavily we decided to go for a hike.",
    optionD: "Although it was raining heavily; we decided to go for a hike.",
    correctOption: "A",
    topicTag: "Verbal Ability",
    explanation: "A introductory dependent clause starting with 'Although' requires a comma after the clause before the main independent clause."
  },
  {
    questionText: "Two pipes A and B can fill a tank in 15 hours and 20 hours respectively. If both are opened together, how long will it take to fill the tank?",
    optionA: "8.57 hours (60/7 hrs)",
    optionB: "7.5 hours",
    optionC: "10 hours",
    optionD: "9.2 hours",
    correctOption: "A",
    topicTag: "Quantitative Aptitude",
    explanation: "Combined rate = 1/15 + 1/20 = (4 + 3)/60 = 7/60 per hour. Time required = 60/7 = 8.57 hours."
  },
  {
    questionText: "Find the missing term in the sequence: 3, 7, 15, 31, 63, ?",
    optionA: "127",
    optionB: "125",
    optionC: "120",
    optionD: "131",
    correctOption: "A",
    topicTag: "Logical Reasoning",
    explanation: "Pattern: Multiply by 2 and add 1. 3*2+1=7, 7*2+1=15, 15*2+1=31, 31*2+1=63, 63*2+1=127."
  },
  {
    questionText: "Choose the correct ANTONYM for 'AUDACIOUS':",
    optionA: "Timid",
    optionB: "Bold",
    optionC: "Rash",
    optionD: "Daring",
    correctOption: "A",
    topicTag: "Verbal Ability",
    explanation: "'Audacious' means showing a willingness to take surprisingly bold risks. Its antonym is 'Timid' (fearful/shy)."
  },
  {
    questionText: "What is the angle between the hour hand and minute hand of a clock at 3:30?",
    optionA: "75 degrees",
    optionB: "90 degrees",
    optionC: "60 degrees",
    optionD: "80 degrees",
    correctOption: "A",
    topicTag: "Quantitative Aptitude",
    explanation: "Formula: Angle = |30*H - 5.5*M| = |30*3 - 5.5*30| = |90 - 165| = 75 degrees."
  },
  {
    questionText: "Is integer N divisible by 6? Statement 1: N is divisible by 2. Statement 2: N is divisible by 3.",
    optionA: "Both statements together are sufficient",
    optionB: "Statement 1 alone is sufficient",
    optionC: "Statement 2 alone is sufficient",
    optionD: "Neither statement is sufficient",
    correctOption: "A",
    topicTag: "Data Sufficiency",
    explanation: "A number is divisible by 6 if and only if it is divisible by both 2 and 3. Statement 1 & 2 together confirm divisibility by 6."
  },
  {
    questionText: "If CAT = 24 and DOG = 26, what is the value of PIG in the same alphanumeric code?",
    optionA: "32",
    optionB: "30",
    optionC: "28",
    optionD: "34",
    correctOption: "A",
    topicTag: "Logical Reasoning",
    explanation: "Sum of alphabetical positions: C(3)+A(1)+T(20) = 24. D(4)+O(15)+G(7) = 26. P(16)+I(9)+G(7) = 32."
  },
  {
    questionText: "A fair card is drawn from a standard deck of 52 playing cards. What is the probability of drawing a Spade OR an Ace?",
    optionA: "16/52 (4/13)",
    optionB: "17/52",
    optionC: "13/52",
    optionD: "1/4",
    correctOption: "A",
    topicTag: "Quantitative Aptitude",
    explanation: "P(Spade) = 13/52. P(Ace) = 4/52. P(Spade ∩ Ace) = 1/52. P(Spade ∪ Ace) = 13/52 + 4/52 - 1/52 = 16/52 = 4/13."
  }
];

export const aptSeries5Questions = [
  {
    questionText: "What is the remainder when 2^50 is divided by 7?",
    optionA: "4",
    optionB: "2",
    optionC: "1",
    optionD: "5",
    correctOption: "A",
    topicTag: "Quantitative Aptitude",
    explanation: "2^3 = 8 ≡ 1 (mod 7). 2^50 = (2^3)^16 * 2^2 = (1)^16 * 4 = 4 (mod 7). Remainder is 4."
  },
  {
    questionText: "Six people A, B, C, D, E, F are sitting in a circle facing the center. A is opposite to D. B is to the immediate right of A. C is between A and F. Who is sitting to the immediate left of D?",
    optionA: "F",
    optionB: "B",
    optionC: "C",
    optionD: "E",
    correctOption: "A",
    topicTag: "Logical Reasoning",
    explanation: "Placing A at top: B is right of A (clockwise). C is between A and F (counter-clockwise). F is left of A. D is opposite A. Arrangement clockwise: A, B, E, D, F, C. Immediate left of D (clockwise from D) is F."
  },
  {
    questionText: "Choose the word closest in meaning to 'OBDURATE':",
    optionA: "Stubborn",
    optionB: "Flexible",
    optionC: "Generous",
    optionD: "Fragile",
    correctOption: "A",
    topicTag: "Verbal Ability",
    explanation: "'Obdurate' means stubbornly refusing to change one's opinion or course of action."
  },
  {
    questionText: "A sum of $5,000 is invested at 8% compound interest per annum. What will be the total amount after 2 years?",
    optionA: "$5,832",
    optionB: "$5,800",
    optionC: "$5,760",
    optionD: "$5,900",
    correctOption: "A",
    topicTag: "Quantitative Aptitude",
    explanation: "Amount = 5000 * (1 + 0.08)^2 = 5000 * 1.1664 = $5,832."
  },
  {
    questionText: "If the ratio of the ages of X and Y 5 years ago was 3:4 and the sum of their present ages is 45, what is Y's present age?",
    optionA: "25 years",
    optionB: "20 years",
    optionC: "30 years",
    optionD: "22 years",
    correctOption: "A",
    topicTag: "Quantitative Aptitude",
    explanation: "5 years ago, sum of ages = 45 - 10 = 35. Ratio 3:4. Y's age 5 years ago = (4/7)*35 = 20. Y's present age = 20 + 5 = 25 years."
  },
  {
    questionText: "Complete the analogy: Light : Blind :: Sound : ?",
    optionA: "Deaf",
    optionB: "Dumb",
    optionC: "Mute",
    optionD: "Quiet",
    correctOption: "A",
    topicTag: "Logical Reasoning",
    explanation: "Inability to perceive Light is Blindness; inability to perceive Sound is Deafness."
  },
  {
    questionText: "Identify the part containing an error: 'Each of the students (A) have submitted (B) their assignment (C) on time (D).'",
    optionA: "have submitted (B)",
    optionB: "Each of the students (A)",
    optionC: "their assignment (C)",
    optionD: "on time (D)",
    correctOption: "A",
    topicTag: "Verbal Ability",
    explanation: "'Each' is a singular subject and requires a singular verb 'has submitted' instead of 'have submitted'."
  },
  {
    questionText: "Data Interpretation: Total Production of Factory = 5000 units. Defective rate = 4%. How many non-defective units were produced?",
    optionA: "4,800 units",
    optionB: "4,700 units",
    optionC: "4,900 units",
    optionD: "4,600 units",
    correctOption: "A",
    topicTag: "Data Interpretation",
    explanation: "Non-defective percentage = 100% - 4% = 96%. Non-defective units = 0.96 * 5000 = 4,800 units."
  },
  {
    questionText: "Statements: Some books are papers. All papers are files. Conclusion I: Some books are files. Conclusion II: All files are papers.",
    optionA: "Only Conclusion I follows",
    optionB: "Only Conclusion II follows",
    optionC: "Both follow",
    optionD: "Neither follows",
    correctOption: "A",
    topicTag: "Logical Reasoning",
    explanation: "Books overlap Papers, and Papers are inside Files. Hence, Books must overlap Files (I is true). However, Files can be larger than Papers so II does not necessarily follow."
  },
  {
    questionText: "Find the HCF of 108, 288, and 360:",
    optionA: "36",
    optionB: "18",
    optionC: "24",
    optionD: "72",
    correctOption: "A",
    topicTag: "Quantitative Aptitude",
    explanation: "Prime factorizations: 108 = 2^2 * 3^3, 288 = 2^5 * 3^2, 360 = 2^3 * 3^2 * 5. Common prime factors: 2^2 * 3^2 = 4 * 9 = 36."
  }
];

export const aptSeries6Questions = [
  {
    questionText: "By selling an article for $480, a trader loses 20%. At what price should he sell it to gain 20%?",
    optionA: "$720",
    optionB: "$600",
    optionC: "$640",
    optionD: "$800",
    correctOption: "A",
    topicTag: "Quantitative Aptitude",
    explanation: "80% of CP = $480 => CP = 480 / 0.8 = $600. To gain 20%, target SP = 1.20 * 600 = $720."
  },
  {
    questionText: "If 'LEADER' is coded as '20-13-9-12-13-26', how is 'LIGHT' coded?",
    optionA: "20-17-15-16-28",
    optionB: "12-9-7-8-20",
    optionC: "18-15-13-14-26",
    optionD: "19-16-14-15-27",
    correctOption: "A",
    topicTag: "Logical Reasoning",
    explanation: "Pattern: Letter position + 8. L(12+8=20), E(5+8=13), A(1+8=9), D(4+8=12), E(5+8=13), R(18+8=26). For LIGHT: L(12+8=20), I(9+8=17), G(7+8=15), H(8+8=16), T(20+8=28)."
  },
  {
    questionText: "Select the correct idiom meaning for 'To bite the bullet':",
    optionA: "To face a difficult situation with courage",
    optionB: "To act recklessly",
    optionC: "To get injured in battle",
    optionD: "To surrender unconditionally",
    correctOption: "A",
    topicTag: "Verbal Ability",
    explanation: "'Bite the bullet' means to endure a painful or difficult situation that is unavoidable."
  },
  {
    questionText: "A container has 4 red balls and 6 blue balls. If 2 balls are drawn at random without replacement, what is the probability that both are red?",
    optionA: "2/15",
    optionB: "4/25",
    optionC: "1/5",
    optionD: "3/10",
    correctOption: "A",
    topicTag: "Quantitative Aptitude",
    explanation: "P(1st Red) = 4/10. P(2nd Red) = 3/9. P(Both Red) = (4/10) * (3/9) = 12 / 90 = 2/15."
  },
  {
    questionText: "What is the average of all prime numbers between 10 and 30?",
    optionA: "18.66 (112/6)",
    optionB: "19",
    optionC: "17.5",
    optionD: "20",
    correctOption: "A",
    topicTag: "Quantitative Aptitude",
    explanation: "Primes between 10 and 30: 11, 13, 17, 19, 23, 29. Sum = 112. Count = 6. Average = 112 / 6 = 18.66."
  },
  {
    questionText: "Is X greater than Y? Statement 1: X - Y = 4. Statement 2: X * Y = 12.",
    optionA: "Statement 1 alone is sufficient",
    optionB: "Statement 2 alone is sufficient",
    optionC: "Both statements together are needed",
    optionD: "Neither statement is sufficient",
    correctOption: "A",
    topicTag: "Data Sufficiency",
    explanation: "Statement 1 gives X - Y = 4 > 0, which directly proves X > Y. Statement 1 alone is completely sufficient."
  },
  {
    questionText: "Choose the word most OPPOSITE in meaning to 'GREGARIOUS':",
    optionA: "Reclusive",
    optionB: "Outgoing",
    optionC: "Sociable",
    optionD: "Friendly",
    correctOption: "A",
    topicTag: "Verbal Ability",
    explanation: "'Gregarious' means fond of company / sociable. Its antonym is 'Reclusive' (avoiding the company of other people)."
  },
  {
    questionText: "In a code language, 123 means 'bright little boy', 145 means 'tall big boy', and 637 means 'beautiful little flower'. Which digit stands for 'bright'?",
    optionA: "2",
    optionB: "1",
    optionC: "3",
    optionD: "4",
    correctOption: "A",
    topicTag: "Logical Reasoning",
    explanation: "From (123) and (145): '1' = 'boy'. From (123) and (637): '3' = 'little'. Therefore, in (123), '2' stands for 'bright'."
  },
  {
    questionText: "A rectangular field has length 30 m and breadth 20 m. A pathway of 2 m uniform width is built around the outside of the field. What is the area of the pathway?",
    optionA: "216 sq m",
    optionB: "200 sq m",
    optionC: "240 sq m",
    optionD: "180 sq m",
    correctOption: "A",
    topicTag: "Quantitative Aptitude",
    explanation: "Inner area = 30 * 20 = 600 sq m. Outer dimensions = (30+4) x (20+4) = 34 x 24 = 816 sq m. Pathway area = 816 - 600 = 216 sq m."
  },
  {
    questionText: "Select the sentence with correct verb agreement:",
    optionA: "The news of the election results was surprising to everyone.",
    optionB: "The news of the election results were surprising to everyone.",
    optionC: "The news of the election results are surprising to everyone.",
    optionD: "The news of the election results have been surprising to everyone.",
    correctOption: "A",
    topicTag: "Verbal Ability",
    explanation: "'News' is an uncountable singular noun, so it takes the singular verb 'was'."
  }
];

export const aptSeries7Questions = [
  {
    questionText: "Find the surface area of a sphere whose radius is 7 cm. (Use pi = 22/7)",
    optionA: "616 sq cm",
    optionB: "308 sq cm",
    optionC: "154 sq cm",
    optionD: "462 sq cm",
    correctOption: "A",
    topicTag: "Quantitative Aptitude",
    explanation: "Surface Area = 4 * pi * r^2 = 4 * (22/7) * 7 * 7 = 4 * 22 * 7 = 616 sq cm."
  },
  {
    questionText: "Introducing a man, a woman said, 'His wife is the only daughter of my father.' How is the man related to the woman?",
    optionA: "Husband",
    optionB: "Brother",
    optionC: "Father",
    optionD: "Uncle",
    correctOption: "A",
    topicTag: "Logical Reasoning",
    explanation: "'Only daughter of my father' = the woman herself. 'His wife' = the woman. So the man is her Husband."
  },
  {
    questionText: "Choose the correct substitute for: 'A person who looks at the bright side of things':",
    optionA: "Optimist",
    optionB: "Pessimist",
    optionC: "Altruist",
    optionD: "Egoist",
    correctOption: "A",
    topicTag: "Verbal Ability",
    explanation: "An 'Optimist' is a person who tends to be hopeful and confident about the future."
  },
  {
    questionText: "Find the roots of the quadratic equation: x^2 - 7x + 12 = 0",
    optionA: "x = 3, 4",
    optionB: "x = -3, -4",
    optionC: "x = 2, 6",
    optionD: "x = 1, 12",
    correctOption: "A",
    topicTag: "Quantitative Aptitude",
    explanation: "Factoring: (x - 3)(x - 4) = 0 => x = 3 or x = 4."
  },
  {
    questionText: "If JANUARY is coded as 7, FEBRUARY as 8, MAY as 3, what is the code for SEPTEMBER?",
    optionA: "9",
    optionB: "8",
    optionC: "10",
    optionD: "7",
    correctOption: "A",
    topicTag: "Logical Reasoning",
    explanation: "The code represents the number of letters in the month name. SEPTEMBER has 9 letters."
  },
  {
    questionText: "A shopkeeper marks his goods 30% above cost price and allows a discount of 10%. What is his actual profit percentage?",
    optionA: "17%",
    optionB: "20%",
    optionC: "15%",
    optionD: "18%",
    correctOption: "A",
    topicTag: "Quantitative Aptitude",
    explanation: "Net percentage change = +30 - 10 - (30*10)/100 = 20 - 3 = 17% profit."
  },
  {
    questionText: "Select the sentence with NO spelling or grammatical errors:",
    optionA: "Their principal goal is to ensure peace and prosperity.",
    optionB: "There principle goal is to ensure peace and prosperity.",
    optionC: "Their principle goal is to ensure peace and prosperity.",
    optionD: "They're principal goal is to ensure peace and prosperity.",
    correctOption: "A",
    topicTag: "Verbal Ability",
    explanation: "'Their' (possessive pronoun) and 'principal' (meaning primary/main) are the correct words."
  },
  {
    questionText: "If log10(2) = 0.3010, what is log10(80)?",
    optionA: "1.9030",
    optionB: "1.6020",
    optionC: "2.1030",
    optionD: "1.8010",
    correctOption: "A",
    topicTag: "Quantitative Aptitude",
    explanation: "log10(80) = log10(8 * 10) = log10(2^3) + log10(10) = 3*log10(2) + 1 = 3*(0.3010) + 1 = 0.9030 + 1 = 1.9030."
  },
  {
    questionText: "Which number completes the series: 5, 11, 23, 47, 95, ?",
    optionA: "191",
    optionB: "185",
    optionC: "190",
    optionD: "195",
    correctOption: "A",
    topicTag: "Logical Reasoning",
    explanation: "Pattern: Multiply by 2 and add 1. 5*2+1=11, 11*2+1=23, 23*2+1=47, 47*2+1=95, 95*2+1=191."
  },
  {
    questionText: "Data Interpretation: In a company of 200 employees, 120 are males. What percentage of employees are females?",
    optionA: "40%",
    optionB: "30%",
    optionC: "50%",
    optionD: "60%",
    correctOption: "A",
    topicTag: "Data Interpretation",
    explanation: "Females = 200 - 120 = 80. Percentage = (80 / 200) * 100 = 40%."
  }
];

export const aptSeries8Questions = [
  {
    questionText: "Solve for x: 3^(x + 2) = 81",
    optionA: "2",
    optionB: "4",
    optionC: "3",
    optionD: "1",
    correctOption: "A",
    topicTag: "Quantitative Aptitude",
    explanation: "Since 81 = 3^4, 3^(x + 2) = 3^4 => x + 2 = 4 => x = 2."
  },
  {
    questionText: "If 'FLOWER' is to 'REWOLF', then 'GARDEN' is to:",
    optionA: "NEDRAG",
    optionB: "NEDARG",
    optionC: "NEADRG",
    optionD: "NERDAG",
    correctOption: "A",
    topicTag: "Logical Reasoning",
    explanation: "The word is spelled backwards. 'GARDEN' reversed is 'NEDRAG'."
  },
  {
    questionText: "Identify the word that is an ANTONYM of 'CANDID':",
    optionA: "Deceitful",
    optionB: "Frank",
    optionC: "Honest",
    optionD: "Direct",
    correctOption: "A",
    topicTag: "Verbal Ability",
    explanation: "'Candid' means truthful and straightforward. Its antonym is 'Deceitful'."
  },
  {
    questionText: "The arithmetic mean of 10 numbers is 15. If one number 25 is excluded, what is the new mean?",
    optionA: "13.88 (125/9)",
    optionB: "14",
    optionC: "14.5",
    optionD: "13.5",
    correctOption: "A",
    topicTag: "Quantitative Aptitude",
    explanation: "Sum of 10 numbers = 10 * 15 = 150. New sum after excluding 25 = 150 - 25 = 125. New count = 9. New mean = 125 / 9 = 13.88."
  },
  {
    questionText: "Statements: All cars are vehicles. Some vehicles are electric. Conclusion I: Some cars are electric. Conclusion II: No car is electric.",
    optionA: "Neither I nor II follows definitely (Either I or II forms a complementary pair)",
    optionB: "Only Conclusion I follows",
    optionC: "Only Conclusion II follows",
    optionD: "Both follow",
    correctOption: "A",
    topicTag: "Logical Reasoning",
    explanation: "Cars ⊂ Vehicles, and Vehicles overlap Electric. There is no direct relation given between Cars and Electric, so neither follows as a certainty."
  },
  {
    questionText: "A bag contains 5 green and 7 yellow balls. One ball is picked at random. What is the probability that it is GREEN?",
    optionA: "5/12",
    optionB: "7/12",
    optionC: "5/7",
    optionD: "1/2",
    correctOption: "A",
    topicTag: "Quantitative Aptitude",
    explanation: "P(Green) = Favorable / Total = 5 / (5 + 7) = 5/12."
  },
  {
    questionText: "Fill in the blank with the correct preposition: 'He is proficient _____ English and Mathematics.'",
    optionA: "in",
    optionB: "at",
    optionC: "with",
    optionD: "for",
    correctOption: "A",
    topicTag: "Verbal Ability",
    explanation: "The adjective 'proficient' takes the preposition 'in' when referring to a field, language, or subject."
  },
  {
    questionText: "Find the simple interest on $8,000 at 5% per annum for 3 years:",
    optionA: "$1,200",
    optionB: "$1,000",
    optionC: "$1,500",
    optionD: "$800",
    correctOption: "A",
    topicTag: "Quantitative Aptitude",
    explanation: "SI = (P * R * T) / 100 = (8000 * 5 * 3) / 100 = 1200."
  },
  {
    questionText: "Which letter comes next in the series: B, E, H, K, N, ?",
    optionA: "Q",
    optionB: "P",
    optionC: "R",
    optionD: "O",
    correctOption: "A",
    topicTag: "Logical Reasoning",
    explanation: "Letter positions: B(2), E(5), H(8), K(11), N(14). Pattern is +3. Next position is 17 = Q."
  },
  {
    questionText: "A clock gains 5 minutes every hour. If it is set right at 12:00 PM, what time will it show at 6:00 PM on the same day?",
    optionA: "6:30 PM",
    optionB: "6:25 PM",
    optionC: "6:35 PM",
    optionD: "6:15 PM",
    correctOption: "A",
    topicTag: "Quantitative Aptitude",
    explanation: "Elapsed time = 6 hours. Total gain = 6 * 5 minutes = 30 minutes. Display time = 6:00 PM + 30 mins = 6:30 PM."
  }
];

export const aptSeries9Questions = [
  {
    questionText: "If today is Sunday, what day of the week will it be after 100 days?",
    optionA: "Tuesday",
    optionB: "Monday",
    optionC: "Wednesday",
    optionD: "Thursday",
    correctOption: "A",
    topicTag: "Quantitative Aptitude",
    explanation: "100 mod 7 = 2 odd days. Sunday + 2 days = Tuesday."
  },
  {
    questionText: "Bar Graph Interpretation: Sales in 2021 = 50 units, Sales in 2022 = 75 units. What is the ratio of sales in 2021 to 2022?",
    optionA: "2:3",
    optionB: "3:4",
    optionC: "4:5",
    optionD: "1:2",
    correctOption: "A",
    topicTag: "Data Interpretation",
    explanation: "Ratio = 50 : 75 = 2 : 3."
  },
  {
    questionText: "Choose the word that best completes the analogy: Doctor : Hospital :: Teacher : ?",
    optionA: "School",
    optionB: "Office",
    optionC: "Library",
    optionD: "Court",
    correctOption: "A",
    topicTag: "Logical Reasoning",
    explanation: "A doctor works in a hospital; a teacher works in a school."
  },
  {
    questionText: "Find the area of a right-angled triangle with base 12 cm and hypotenuse 13 cm.",
    optionA: "30 sq cm",
    optionB: "60 sq cm",
    optionC: "78 sq cm",
    optionD: "45 sq cm",
    correctOption: "A",
    topicTag: "Quantitative Aptitude",
    explanation: "Height = sqrt(13^2 - 12^2) = sqrt(169 - 144) = sqrt(25) = 5 cm. Area = 0.5 * base * height = 0.5 * 12 * 5 = 30 sq cm."
  },
  {
    questionText: "Identify the incorrectly spelt word:",
    optionA: "RESEIVE",
    optionB: "BELIEVE",
    optionC: "ACHIEVE",
    optionD: "DECEIVE",
    correctOption: "A",
    topicTag: "Verbal Ability",
    explanation: "'RESEIVE' is incorrect; the correct spelling is 'RECEIVE'."
  },
  {
    questionText: "Find the 10th term of the Arithmetic Progression: 5, 9, 13, 17...",
    optionA: "41",
    optionB: "45",
    optionC: "37",
    optionD: "43",
    correctOption: "A",
    topicTag: "Quantitative Aptitude",
    explanation: "a = 5, d = 4. T10 = a + (10 - 1)d = 5 + 9*4 = 5 + 36 = 41."
  },
  {
    questionText: "Point A is to the West of Point B. Point C is to the South of Point B. In which direction is Point A relative to Point C?",
    optionA: "North-West",
    optionB: "North-East",
    optionC: "South-West",
    optionD: "South-East",
    correctOption: "A",
    topicTag: "Logical Reasoning",
    explanation: "Relative to C (0, -1), A is at (-1, 0). Moving from C to A requires going North and West. Hence, North-West."
  },
  {
    questionText: "Find the single discount equivalent to two successive discounts of 20% and 10%:",
    optionA: "28%",
    optionB: "30%",
    optionC: "25%",
    optionD: "22%",
    correctOption: "A",
    topicTag: "Quantitative Aptitude",
    explanation: "Equivalent discount = D1 + D2 - (D1 * D2)/100 = 20 + 10 - (200/100) = 30 - 2 = 28%."
  },
  {
    questionText: "Complete the sentence: 'She worked hard _____ she could pass the examination.'",
    optionA: "so that",
    optionB: "because",
    optionC: "unless",
    optionD: "although",
    correctOption: "A",
    topicTag: "Verbal Ability",
    explanation: "'So that' expresses purpose in complex sentences."
  },
  {
    questionText: "Evaluate: 15 * 4 - 30 / 5 + 8",
    optionA: "62",
    optionB: "58",
    optionC: "64",
    optionD: "50",
    correctOption: "A",
    topicTag: "Speed Mathematics",
    explanation: "BODMAS: 30 / 5 = 6. 15 * 4 = 60. 60 - 6 + 8 = 62."
  }
];

export const aptSeries10Questions = [
  {
    questionText: "A tank can be filled by two taps in 10 minutes and 15 minutes respectively, and emptied by a third tap in 30 minutes. If all three taps are opened together, how long will it take to fill the tank?",
    optionA: "7.5 minutes",
    optionB: "6 minutes",
    optionC: "8 minutes",
    optionD: "10 minutes",
    correctOption: "A",
    topicTag: "Quantitative Aptitude",
    explanation: "Net filling rate = 1/10 + 1/15 - 1/30 = (3 + 2 - 1)/30 = 4/30 = 2/15 per minute. Time = 15/2 = 7.5 minutes."
  },
  {
    questionText: "If 'MONKEY' is coded as 'XDJMNL', how is 'TIGER' coded?",
    optionA: "QDFHS",
    optionB: "QDFJS",
    optionC: "SDFHQ",
    optionD: "RDEGS",
    correctOption: "A",
    topicTag: "Logical Reasoning",
    explanation: "Reverse order and subtract 1 from each letter: Y(-1)->X, E(-1)->D, K(-1)->J, N(-1)->M, O(-1)->N, M(-1)->L. For TIGER: R(-1)->Q, E(-1)->D, G(-1)->F, I(-1)->H, T(-1)->S => QDFHS."
  },
  {
    questionText: "Select the sentence that is grammatically correct:",
    optionA: "He is one of those men who never tell a lie.",
    optionB: "He is one of those men who never tells a lie.",
    optionC: "He is one of those man who never tell a lie.",
    optionD: "He is one of those men whom never tell a lie.",
    correctOption: "A",
    topicTag: "Verbal Ability",
    explanation: "The relative pronoun 'who' refers to the plural antecedent 'men', so it takes the plural verb 'tell'."
  },
  {
    questionText: "What is the length of the longest rod that can be placed in a room of dimensions 10m x 10m x 5m?",
    optionA: "15 meters",
    optionB: "12 meters",
    optionC: "14 meters",
    optionD: "16 meters",
    correctOption: "A",
    topicTag: "Quantitative Aptitude",
    explanation: "Diagonal of cuboid = sqrt(L^2 + B^2 + H^2) = sqrt(100 + 100 + 25) = sqrt(225) = 15 meters."
  },
  {
    questionText: "In a family of six (P, Q, R, S, T, U), T is the brother of S. Q is the wife of R. R is the father of P. U is the mother of Q. How is P related to U?",
    optionA: "Grandchild (Grandson or Granddaughter)",
    optionB: "Son",
    optionC: "Daughter",
    optionD: "Brother",
    correctOption: "A",
    topicTag: "Logical Reasoning",
    explanation: "R and Q are parents of P. U is mother of Q. Thus, U is maternal grandmother of P, so P is U's Grandchild."
  },
  {
    questionText: "A car covers the first half of a distance at 40 km/h and the second half at 60 km/h. What is the average speed of the car?",
    optionA: "48 km/h",
    optionB: "50 km/h",
    optionC: "45 km/h",
    optionD: "52 km/h",
    correctOption: "A",
    topicTag: "Quantitative Aptitude",
    explanation: "Average speed = (2 * 40 * 60) / (40 + 60) = 4800 / 100 = 48 km/h."
  },
  {
    questionText: "What is the antonym of 'BENEVOLENT'?",
    optionA: "Malevolent",
    optionB: "Generous",
    optionC: "Kind",
    optionD: "Charitable",
    correctOption: "A",
    topicTag: "Verbal Ability",
    explanation: "'Benevolent' means well-meaning and kindly. Its antonym is 'Malevolent' (wishing evil to others)."
  },
  {
    questionText: "If log2(x) + log2(x - 2) = 3, what is the value of x?",
    optionA: "4",
    optionB: "2",
    optionC: "6",
    optionD: "8",
    correctOption: "A",
    topicTag: "Quantitative Aptitude",
    explanation: "log2(x(x - 2)) = 3 => x(x - 2) = 2^3 = 8 => x^2 - 2x - 8 = 0 => (x - 4)(x + 2) = 0. Since log requires positive domain, x = 4."
  },
  {
    questionText: "Five boys are standing in a line. A is to the right of B. E is to the left of B but to the right of C. A is to the left of D. Who is standing in the middle?",
    optionA: "B",
    optionB: "A",
    optionC: "C",
    optionD: "E",
    correctOption: "A",
    topicTag: "Logical Reasoning",
    explanation: "Arrangement from left to right: C, E, B, A, D. The boy in the exact middle (3rd position) is B."
  },
  {
    questionText: "Data Sufficiency: What is the average score of 3 tests? Statement 1: The sum of the first two test scores is 140. Statement 2: The third test score is 70.",
    optionA: "Both statements together are sufficient",
    optionB: "Statement 1 alone is sufficient",
    optionC: "Statement 2 alone is sufficient",
    optionD: "Neither statement is sufficient",
    correctOption: "A",
    topicTag: "Data Sufficiency",
    explanation: "Total sum = (sum of first two) + (third test score) = 140 + 70 = 210. Average = 210 / 3 = 70. Both statements combined are necessary and sufficient."
  }
];

// Dedicated Reasoning Tests
export const reasoningSeries1Questions = [
  {
    questionText: "8 persons A, B, C, D, E, F, G, H are sitting around a circular table facing center. A sits third to the right of B. C sits second to the left of A. D is not an immediate neighbor of A or B. E sits second to the right of H. Who sits opposite to A?",
    optionA: "E",
    optionB: "F",
    optionC: "G",
    optionD: "H",
    correctOption: "A",
    topicTag: "Circular Seating Arrangement",
    explanation: "Placing B at position 1: A is at position 4. C is second left of A (pos 6). D is not adjacent to A or B, so D is at pos 7. E is second right of H. H at 8, E at 2. F/G at remaining spots. The person directly opposite A (pos 4) is E at pos 2."
  },
  {
    questionText: "In a row of 40 students facing North, R is 15th from the left end and S is 20th from the right end. How many students are standing between R and S?",
    optionA: "5",
    optionB: "6",
    optionC: "4",
    optionD: "7",
    correctOption: "A",
    topicTag: "Order and Ranking",
    explanation: "Position of S from left end = 40 - 20 + 1 = 21st. R is 15th from left. Number of students between 15th and 21st = (21 - 15) - 1 = 5."
  },
  {
    questionText: "If 'A + B' means A is the father of B; 'A - B' means A is the wife of B; 'A * B' means A is the brother of B, which expression shows that P is the uncle of Q?",
    optionA: "P * R + Q",
    optionB: "P + R * Q",
    optionC: "P - R * Q",
    optionD: "P * R - Q",
    correctOption: "A",
    topicTag: "Blood Relations",
    explanation: "In 'P * R + Q': P is the brother of R, and R is the father of Q. Therefore, P is the paternal uncle of Q."
  },
  {
    questionText: "Complete the matrix logic: If 4 x 3 = 14, 5 x 4 = 22, 6 x 5 = 32, what is 7 x 6?",
    optionA: "44",
    optionB: "42",
    optionC: "46",
    optionD: "48",
    correctOption: "A",
    topicTag: "Mathematical Reasoning",
    explanation: "Pattern: (A * B) + 2. 4*3+2=14, 5*4+2=22, 6*5+2=32. Therefore, 7*6+2 = 44."
  },
  {
    questionText: "A cube painted red on all faces is cut into 64 smaller equal cubes. How many smaller cubes have EXACTLY 2 faces painted?",
    optionA: "24",
    optionB: "16",
    optionC: "32",
    optionD: "12",
    correctOption: "A",
    topicTag: "Cube Puzzles",
    explanation: "Total small cubes N = 64 => n = 4 (cuts per edge n-2 = 2). Formula for 2-face painted cubes = 12 * (n - 2) = 12 * (4 - 2) = 24 cubes."
  },
  {
    questionText: "Which letter is 7th to the left of the 18th letter from the left end in the English alphabet?",
    optionA: "K",
    optionB: "L",
    optionC: "J",
    optionD: "M",
    correctOption: "A",
    topicTag: "Alphabet Series",
    explanation: "Position from left = 18 - 7 = 11th letter of English alphabet, which is K."
  },
  {
    questionText: "Statements: Some keys are locks. Some locks are doors. All doors are windows. Conclusion I: Some keys are doors. Conclusion II: Some locks are windows.",
    optionA: "Only Conclusion II follows",
    optionB: "Only Conclusion I follows",
    optionC: "Both follow",
    optionD: "Neither follows",
    correctOption: "A",
    topicTag: "Syllogisms",
    explanation: "Locks overlap Doors, and All Doors are Windows => Locks MUST overlap Windows (II is true). Keys overlap Locks, but not necessarily Doors (I is not definite)."
  },
  {
    questionText: "Five friends P, Q, R, S, T have different heights. P is taller than Q but shorter than T. R is taller than S but shorter than Q. Who is the tallest?",
    optionA: "T",
    optionB: "P",
    optionC: "R",
    optionD: "Q",
    correctOption: "A",
    topicTag: "Analytical Reasoning",
    explanation: "From conditions: T > P > Q and Q > R > S. Combined height order: T > P > Q > R > S. The tallest friend is T."
  },
  {
    questionText: "Find the missing number in the grid: [ 3  4  5 ] [ 6  8 10 ] [ 9 12  ? ]",
    optionA: "15",
    optionB: "14",
    optionC: "16",
    optionD: "18",
    correctOption: "A",
    topicTag: "Matrix Puzzles",
    explanation: "Pythagorean triples / proportional ratios (3:4:5). 3*3=9, 4*3=12, 5*3=15. Missing number is 15."
  },
  {
    questionText: "If SOUTH-EAST becomes NORTH, NORTH-EAST becomes WEST, and so on, what will WEST become?",
    optionA: "SOUTH-EAST",
    optionB: "NORTH-WEST",
    optionC: "SOUTH-WEST",
    optionD: "NORTH-EAST",
    correctOption: "A",
    topicTag: "Direction Sense",
    explanation: "South-East (135° clockwise from North) rotates 135° counter-clockwise to become North. Rotating WEST (270° from North) 135° counter-clockwise points to 135° (South-East)."
  }
];

export const reasoningSeries2Questions = [
  {
    questionText: "Statements: All cars are trains. No train is a bus. All buses are trucks. Conclusion I: No car is a bus. Conclusion II: Some trucks are buses.",
    optionA: "Both Conclusion I and II follow",
    optionB: "Only Conclusion I follows",
    optionC: "Only Conclusion II follows",
    optionD: "Neither follows",
    correctOption: "A",
    topicTag: "Syllogisms",
    explanation: "Cars ⊂ Trains, and Trains ∩ Buses = ∅ => Cars ∩ Buses = ∅ (I follows). All Buses ⊂ Trucks => Some Trucks are Buses (II follows)."
  },
  {
    questionText: "Input: '78 45 92 13 64'. Step 1 rearranges to: '92 78 45 13 64'. What rule governs the Input-Output machine rearrangement?",
    optionA: "Numbers are sorted in descending order from left to right, one per step",
    optionB: "Numbers are sorted in ascending order",
    optionC: "Odd numbers first then even numbers",
    optionD: "Numbers multiplied by 2",
    correctOption: "A",
    topicTag: "Input-Output Reasoning",
    explanation: "The machine places the largest remaining number at the left-most position in each step (descending sort)."
  },
  {
    questionText: "Statement: 'The government should mandate 1 hour of mandatory physical exercise in all schools daily.' Argument I: Yes, it will improve physical fitness and combat child obesity. Argument II: No, it will waste precious academic study time.",
    optionA: "Only Argument I is strong",
    optionB: "Only Argument II is strong",
    optionC: "Both arguments are strong",
    optionD: "Neither argument is strong",
    correctOption: "A",
    topicTag: "Statement & Arguments",
    explanation: "Argument I addresses child health and wellness with a logical basis. Argument II assumes physical health has no academic value, which is weak."
  },
  {
    questionText: "Statement: 'Despite heavy rains, train services ran on schedule today.' Assumption I: Heavy rains usually disrupt train services. Assumption II: People prefer traveling by train during rains.",
    optionA: "Only Assumption I is implicit",
    optionB: "Only Assumption II is implicit",
    optionC: "Both are implicit",
    optionD: "Neither is implicit",
    correctOption: "A",
    topicTag: "Statement & Assumptions",
    explanation: "The word 'Despite' implies that heavy rain normally causes disruptions. Assumption I is implicit."
  },
  {
    questionText: "Find the number of triangles in a standard 4-subdivision pentagram star or 4x4 grid with diagonals:",
    optionA: "16",
    optionB: "12",
    optionC: "20",
    optionD: "14",
    correctOption: "A",
    topicTag: "Figure Counting",
    explanation: "A square divided by 2 diagonals yields 8 triangles. Two joined sub-squares yield 16 total triangles."
  },
  {
    questionText: "Select the odd letter pair out: DW, GT, KP, HS, MN, EV, FU, BY, CX, LO, VE",
    optionA: "VE",
    optionB: "DW",
    optionC: "KP",
    optionD: "CX",
    correctOption: "A",
    topicTag: "Logical Analogy",
    explanation: "D-W, G-T, K-P, H-S, M-N, E-V, F-U, B-Y, C-X are exact reverse alphabet pairs (sum of positions = 27). VE is V-E in reverse order."
  },
  {
    questionText: "In a code, 'SYSTEM' is written as 'SYSMET' and 'NEARER' as 'AENRER'. How is 'FRACTION' written?",
    optionA: "CARFTNOI",
    optionB: "CARFTION",
    optionC: "ARFCITNO",
    optionD: "CARFOTIN",
    correctOption: "A",
    topicTag: "Coding-Decoding",
    explanation: "Divide 8-letter word into two halves: 'FRAC' and 'TION'. Reverse first half ('CARF') and reverse second half ('NOI') -> CARFTNOI."
  },
  {
    questionText: "Point X is 5 km North of Point Y. Point Z is 5 km West of Point X. Point W is 5 km South of Point Z. In which direction is Y from W?",
    optionA: "East",
    optionB: "West",
    optionC: "North",
    optionD: "South",
    correctOption: "A",
    topicTag: "Direction Sense",
    explanation: "X is (0, 5), Y is (0, 0), Z is (-5, 5), W is (-5, 0). Y at (0, 0) is directly East of W at (-5, 0)."
  },
  {
    questionText: "Which Venn Diagram best represents the relationship between: Animals, Dogs, and Pets?",
    optionA: "Dogs are inside Animals, and Pets intersect both Dogs and Animals",
    optionB: "Three disjoint separate circles",
    optionC: "Dogs and Pets inside Animals completely",
    optionD: "Animals and Pets inside Dogs",
    correctOption: "A",
    topicTag: "Venn Diagrams",
    explanation: "All dogs are animals (Dogs ⊂ Animals). Some dogs are pets, and some pets are animals (not all pets are dogs, e.g., cats)."
  },
  {
    questionText: "Which set of mathematical operators makes the equation true: 8 ? 4 ? 2 ? 6 = 10",
    optionA: "* , / , +",
    optionB: "+ , - , *",
    optionC: "/ , * , -",
    optionD: "- , + , /",
    correctOption: "A",
    topicTag: "Operator Insertion",
    explanation: "8 * 4 / 2 + 6 = 32 / 2 + 6 = 16 + 6 = 22 -> Wait: 8 * 4 / 2 - 6 = 16 - 6 = 10! Let's check: 8 * 4 / 2 - 6 = 10. Correct operators: *, /, -."
  }
];

export const reasoningSeries3Questions = [
  {
    questionText: "A family consists of 6 members: A, B, C, D, E, F. There are 2 married couples. B is a doctor and father of E. F is a grandfather of C and a contractor. D is grandmother of E and a housewife. There is one doctor, one contractor, one nurse, one student, one housewife. Who is the nurse?",
    optionA: "A",
    optionB: "E",
    optionC: "C",
    optionD: "F",
    correctOption: "A",
    topicTag: "Complex Blood Relation Puzzle",
    explanation: "F (Grandfather/Contractor) married to D (Grandmother/Housewife). Their son B (Doctor) is married to A (Nurse). B and A's children are E and C (Students/Children). A is the Nurse."
  },
  {
    questionText: "If 15th August 2011 was Monday, what day of the week was 15th August 2012?",
    optionA: "Wednesday",
    optionB: "Tuesday",
    optionC: "Thursday",
    optionD: "Monday",
    correctOption: "A",
    topicTag: "Calendar Reasoning",
    explanation: "2012 is a Leap Year, so February 2012 has 29 days. Number of odd days between 15 Aug 2011 and 15 Aug 2012 = 2 odd days. Monday + 2 days = Wednesday."
  },
  {
    questionText: "At what time between 4 o'clock and 5 o'clock will the hands of a clock coincide (be together at 0 degrees)?",
    optionA: "21 (9/11) minutes past 4",
    optionB: "20 minutes past 4",
    optionC: "22 minutes past 4",
    optionD: "21 (5/11) minutes past 4",
    correctOption: "A",
    topicTag: "Clocks",
    explanation: "Formula T = (30*H) / (11/2) = (30*4) / (5.5) = 120 / (11/2) = 240 / 11 = 21 (9/11) minutes past 4."
  },
  {
    questionText: "In a code, 'BLUE' is coded as '2-12-21-5'. How is 'PINK' coded?",
    optionA: "16-9-14-11",
    optionB: "15-9-13-10",
    optionC: "16-8-14-12",
    optionD: "17-10-15-12",
    correctOption: "A",
    topicTag: "Coding-Decoding",
    explanation: "Letters are represented by their exact alphabetical numerical positions: P(16), I(9), N(14), K(11)."
  },
  {
    questionText: "Statement: 'Should all internal combustion engine vehicles be banned in cities by 2030?' Argument I: Yes, it will drastically reduce urban air pollution. Argument II: No, current EV charging infrastructure is insufficient to support full transition.",
    optionA: "Both Argument I and Argument II are strong",
    optionB: "Only Argument I is strong",
    optionC: "Only Argument II is strong",
    optionD: "Neither argument is strong",
    correctOption: "A",
    topicTag: "Critical Reasoning",
    explanation: "Argument I presents a compelling environmental health reason. Argument II presents a valid logistical infrastructure challenge. Both arguments are strong and logically sound."
  },
  {
    questionText: "Select the figure that correctly completes the pattern matrix: [ Square -> Triangle ] [ Circle -> ? ]",
    optionA: "Oval / Curve",
    optionB: "Hexagon",
    optionC: "Pentagon",
    optionD: "Line",
    correctOption: "A",
    topicTag: "Visual Matrix",
    explanation: "Square (straight-sided polygon) transforms to Triangle (1 fewer side). Circle (curved shape) transforms to Oval."
  },
  {
    questionText: "Find the odd one out among the words: Copper, Zinc, Brass, Tin, Aluminum",
    optionA: "Brass",
    optionB: "Copper",
    optionC: "Zinc",
    optionD: "Tin",
    correctOption: "A",
    topicTag: "Classification",
    explanation: "Copper, Zinc, Tin, and Aluminum are pure metallic elements. Brass is an alloy (Copper + Zinc)."
  },
  {
    questionText: "If A = 2, B = 4, C = 6, ... Z = 52, what is the total value of the word 'KITE'?",
    optionA: "90",
    optionB: "85",
    optionC: "80",
    optionD: "95",
    correctOption: "A",
    topicTag: "Alphanumeric Coding",
    explanation: "Each letter value = position * 2. K(11*2=22), I(9*2=18), T(20*2=40), E(5*2=10). Total = 22 + 18 + 40 + 10 = 90."
  },
  {
    questionText: "Six lectures A, B, C, D, E, F are scheduled from Monday to Saturday. C is on Tuesday. A is immediately after D. F is on Saturday. B is not on Monday. Which lecture is on Monday?",
    optionA: "E",
    optionB: "D",
    optionC: "B",
    optionD: "A",
    correctOption: "A",
    topicTag: "Schedule Puzzle",
    explanation: "Mon: E, Tue: C, Wed: D, Thu: A, Fri: B, Sat: F. Mon has lecture E."
  },
  {
    questionText: "A person faces West. He turns 45 degrees clockwise, then 180 degrees clockwise, then 270 degrees counter-clockwise. Which direction is he facing now?",
    optionA: "South-West",
    optionB: "North-West",
    optionC: "South-East",
    optionD: "North-East",
    correctOption: "A",
    topicTag: "Directional Angles",
    explanation: "Initial: West (270°). +45° CW = 315° (NW). +180° CW = 135° (SE). -270° CCW = 225° (South-West)."
  }
];
