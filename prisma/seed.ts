import { PrismaClient, Role } from '@prisma/client';

const prisma = new PrismaClient();

const technicalQuestions = [
  // OOPs & C++ Concepts (Questions 1 - 15)
  {
    questionText: "Which OOP concept allows a class to inherit properties and behaviors from another class?",
    optionA: "Encapsulation",
    optionB: "Inheritance",
    optionC: "Polymorphism",
    optionD: "Abstraction",
    correctOption: "B",
    topicTag: "OOPs"
  },
  {
    questionText: "In C++, which keyword is used to declare a member variable that can be accessed only within its class and by derived classes?",
    optionA: "private",
    optionB: "public",
    optionC: "protected",
    optionD: "internal",
    correctOption: "C",
    topicTag: "C++"
  },
  {
    questionText: "What feature in C++ enables runtime polymorphism?",
    optionA: "Function overloading",
    optionB: "Operator overloading",
    optionC: "Virtual functions",
    optionD: "Templates",
    correctOption: "C",
    topicTag: "C++"
  },
  {
    questionText: "Which of the following is true about pure virtual functions in C++?",
    optionA: "They must have a body in the base class",
    optionB: "They are declared using syntax: virtual void func() = 0;",
    optionC: "They prevent classes from being derived",
    optionD: "They can be called directly without creating an object",
    correctOption: "B",
    topicTag: "C++"
  },
  {
    questionText: "What is the result of attempting to instantiate an abstract class in C++?",
    optionA: "Runtime error",
    optionB: "Compilation error",
    optionC: "A null reference is returned",
    optionD: "Undefined behavior",
    correctOption: "B",
    topicTag: "OOPs"
  },
  {
    questionText: "Which constructor is invoked when an object is created by copying an existing object of the same class?",
    optionA: "Default constructor",
    optionB: "Parameterized constructor",
    optionC: "Copy constructor",
    optionD: "Conversion constructor",
    correctOption: "C",
    topicTag: "C++"
  },
  {
    questionText: "In C++, what does the 'explicit' keyword prevent when applied to a single-parameter constructor?",
    optionA: "Memory allocation",
    optionB: "Implicit type conversion",
    optionC: "Class inheritance",
    optionD: "Virtual table creation",
    correctOption: "B",
    topicTag: "C++"
  },
  {
    questionText: "Which standard smart pointer in C++ maintains a reference count of owned object instances?",
    optionA: "std::unique_ptr",
    optionB: "std::shared_ptr",
    optionC: "std::auto_ptr",
    optionD: "std::scoped_ptr",
    correctOption: "B",
    topicTag: "C++"
  },
  {
    questionText: "What happens if a destructor throws an exception during stack unwinding in C++?",
    optionA: "The exception is caught by main()",
    optionB: "std::terminate() is called immediately",
    optionC: "The object remains in memory",
    optionD: "Compilation fails",
    correctOption: "B",
    topicTag: "C++"
  },
  {
    questionText: "Which operator cannot be overloaded in C++?",
    optionA: "+=",
    optionB: "[]",
    optionC: "::",
    optionD: "->",
    correctOption: "C",
    topicTag: "C++"
  },
  {
    questionText: "In object-oriented design, hiding internal implementation details and exposing only essential interfaces is known as:",
    optionA: "Abstraction",
    optionB: "Generalization",
    optionC: "Aggregation",
    optionD: "Composition",
    correctOption: "A",
    topicTag: "OOPs"
  },
  {
    questionText: "What type of inheritance causes the 'Diamond Problem' in OOP?",
    optionA: "Single inheritance",
    optionB: "Multilevel inheritance",
    optionC: "Multiple inheritance",
    optionD: "Hierarchical inheritance",
    correctOption: "C",
    topicTag: "OOPs"
  },
  {
    questionText: "How is the Diamond Problem resolved in C++?",
    optionA: "Using final keyword",
    optionB: "Using virtual inheritance",
    optionC: "Using static member functions",
    optionD: "Using namespace qualifiers",
    correctOption: "B",
    topicTag: "C++"
  },
  {
    questionText: "What is the default access specifier for members of a C++ class if none is specified?",
    optionA: "public",
    optionB: "private",
    optionC: "protected",
    optionD: "internal",
    correctOption: "B",
    topicTag: "C++"
  },
  {
    questionText: "What is the memory size of an empty class object in C++ to guarantee unique addresses?",
    optionA: "0 bytes",
    optionB: "1 byte",
    optionC: "4 bytes",
    optionD: "8 bytes",
    correctOption: "B",
    topicTag: "C++"
  },

  // C# & OOPs Advanced (Questions 16 - 30)
  {
    questionText: "In C#, which keyword is used to pass an argument by reference requiring it to be initialized before passing?",
    optionA: "out",
    optionB: "ref",
    optionC: "in",
    optionD: "params",
    correctOption: "B",
    topicTag: "C#"
  },
  {
    questionText: "In C#, what is the key difference between the 'out' and 'ref' keywords for method parameters?",
    optionA: "'out' variables must be initialized before passing; 'ref' variables do not need initialization",
    optionB: "'ref' variables must be initialized before passing; 'out' variables must be assigned inside the method",
    optionC: "'out' works only with value types, while 'ref' works only with reference types",
    optionD: "'ref' is asynchronous, while 'out' is synchronous",
    correctOption: "B",
    topicTag: "C#"
  },
  {
    questionText: "Which keyword in C# allows a derived class method to explicitly override a virtual method in a base class?",
    optionA: "new",
    optionB: "override",
    optionC: "extends",
    optionD: "implements",
    correctOption: "B",
    topicTag: "C#"
  },
  {
    questionText: "What is the effect of using the 'sealed' keyword on a class in C#?",
    optionA: "It makes all fields static",
    optionB: "It prevents the class from being inherited",
    optionC: "It forces the class to be abstract",
    optionD: "It makes all methods private",
    correctOption: "B",
    topicTag: "C#"
  },
  {
    questionText: "In C#, which interface must be implemented to support custom object disposal via the 'using' statement?",
    optionA: "ICloneable",
    optionB: "IDisposable",
    optionC: "IComparable",
    optionD: "IEnumerable",
    correctOption: "B",
    topicTag: "C#"
  },
  {
    questionText: "What is Boxing in C#?",
    optionA: "Converting a reference type to a value type",
    optionB: "Converting a value type to the object type",
    optionC: "Serializing an object to XML",
    optionD: "Casting an interface to an abstract class",
    correctOption: "B",
    topicTag: "C#"
  },
  {
    questionText: "In C#, what type does a method return if it is marked with the 'async' modifier but produces no return value?",
    optionA: "void",
    optionB: "Task",
    optionC: "Future",
    optionD: "Thread",
    correctOption: "B",
    topicTag: "C#"
  },
  {
    questionText: "Which access modifier in C# restricts access to the containing assembly or types derived from the containing class?",
    optionA: "internal",
    optionB: "protected internal",
    optionC: "private protected",
    optionD: "protected",
    correctOption: "C",
    topicTag: "C#"
  },
  {
    questionText: "In C#, what is the null-coalescing operator?",
    optionA: "?:",
    optionB: "?.",
    optionC: "??",
    optionD: "!!",
    correctOption: "C",
    topicTag: "C#"
  },
  {
    questionText: "In C#, what is a Delegate?",
    optionA: "A pointer to a memory address of a variable",
    optionB: "A type-safe function pointer that references a method",
    optionC: "A background execution worker",
    optionD: "An interface for database connections",
    correctOption: "B",
    topicTag: "C#"
  },
  {
    questionText: "What type of collection in C# stores key-value pairs and guarantees O(1) average time complexity for lookups?",
    optionA: "List<T>",
    optionB: "LinkedList<T>",
    optionC: "Dictionary<TKey, TValue>",
    optionD: "Queue<T>",
    correctOption: "C",
    topicTag: "C#"
  },
  {
    questionText: "In C# garbage collection, which generation contains short-lived objects such as temporary variables?",
    optionA: "Generation 0",
    optionB: "Generation 1",
    optionC: "Generation 2",
    optionD: "Large Object Heap",
    correctOption: "A",
    topicTag: "C#"
  },
  {
    questionText: "Which statement is true regarding Interfaces in C# 8.0 and later?",
    optionA: "Interfaces cannot contain properties",
    optionB: "Interfaces can include default implementation for members",
    optionC: "A class can inherit from multiple abstract classes",
    optionD: "Interfaces cannot be generic",
    correctOption: "B",
    topicTag: "C#"
  },
  {
    questionText: "In C#, what is method hiding (shadowing) achieved with?",
    optionA: "The override keyword",
    optionB: "The new keyword",
    optionC: "The static keyword",
    optionD: "The virtual keyword",
    correctOption: "B",
    topicTag: "C#"
  },
  {
    questionText: "What is the purpose of the 'readonly' keyword in C#?",
    optionA: "It restricts variable modification only to constructor execution or inline initialization",
    optionB: "It evaluates value at compile-time like const",
    optionC: "It makes a class immutable automatically",
    optionD: "It prevents variable access from outside the class",
    correctOption: "A",
    topicTag: "C#"
  }
];

const aptitudeQuestions = [
  // Quantitative Aptitude (Questions 1 - 10)
  {
    questionText: "A train running at a speed of 60 km/hr passes a pole in 9 seconds. What is the length of the train in meters?",
    optionA: "120 meters",
    optionB: "150 meters",
    optionC: "180 meters",
    optionD: "200 meters",
    correctOption: "B", // (60 * 5/18) * 9 = 150m
    topicTag: "Quant"
  },
  {
    questionText: "If A can do a work in 10 days and B can do the same work in 15 days, how many days will they take to complete the work together?",
    optionA: "5 days",
    optionB: "6 days",
    optionC: "7.5 days",
    optionD: "8 days",
    correctOption: "B", // 1/(1/10 + 1/15) = 1/(5/30) = 6 days
    topicTag: "Quant"
  },
  {
    questionText: "A article is sold for $240 at a gain of 20%. What was the cost price of the article?",
    optionA: "$180",
    optionB: "$200",
    optionC: "$210",
    optionD: "$220",
    correctOption: "B", // CP = 240 / 1.2 = $200
    topicTag: "Quant"
  },
  {
    questionText: "The average of 5 consecutive numbers is 27. What is the largest of these numbers?",
    optionA: "27",
    optionB: "28",
    optionC: "29",
    optionD: "30",
    correctOption: "C", // Numbers: 25, 26, 27, 28, 29. Max = 29
    topicTag: "Quant"
  },
  {
    questionText: "Two numbers are in the ratio 3 : 5. If their HCF is 8, what is their LCM?",
    optionA: "40",
    optionB: "80",
    optionC: "120",
    optionD: "160",
    correctOption: "C", // Numbers: 24, 40. LCM = 3 * 5 * 8 = 120
    topicTag: "Quant"
  },
  {
    questionText: "In how many different ways can the letters of the word 'LEADER' be arranged?",
    optionA: "360",
    optionB: "720",
    optionC: "144",
    optionD: "180",
    correctOption: "A", // 6! / 2! = 720 / 2 = 360
    topicTag: "Quant"
  },
  {
    questionText: "What is the probability of getting a sum of 7 when two unbiased dice are thrown simultaneously?",
    optionA: "1/4",
    optionB: "1/6",
    optionC: "5/36",
    optionD: "1/12",
    correctOption: "B", // Outcomes: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) -> 6/36 = 1/6
    topicTag: "Quant"
  },
  {
    questionText: "A sum of money doubles itself in 5 years at simple interest. What is the rate of interest per annum?",
    optionA: "10%",
    optionB: "15%",
    optionC: "20%",
    optionD: "25%",
    correctOption: "C", // SI = P -> P*R*5/100 = P -> R = 20%
    topicTag: "Quant"
  },
  {
    questionText: "A tank can be filled by Pipe A in 4 hours and emptied by Pipe B in 6 hours. If both pipes are opened, how long will it take to fill the tank?",
    optionA: "8 hours",
    optionB: "10 hours",
    optionC: "12 hours",
    optionD: "14 hours",
    correctOption: "C", // 1/4 - 1/6 = 1/12 -> 12 hours
    topicTag: "Quant"
  },
  {
    questionText: "If the radius of a circle is increased by 50%, by what percentage does its area increase?",
    optionA: "100%",
    optionB: "125%",
    optionC: "150%",
    optionD: "225%",
    correctOption: "B", // (1.5)^2 - 1 = 2.25 - 1 = 1.25 = 125%
    topicTag: "Quant"
  },

  // Logical Reasoning (Questions 11 - 20)
  {
    questionText: "Complete the series: 3, 7, 15, 31, 63, ?",
    optionA: "95",
    optionB: "115",
    optionC: "127",
    optionD: "129",
    correctOption: "C", // Pattern: *2 + 1. 63*2+1 = 127
    topicTag: "Logical"
  },
  {
    questionText: "If 'PENCIL' is coded as 'RGPENK' in a certain code language, how is 'ERASER' coded?",
    optionA: "GTCTGT",
    optionB: "GTCUGT",
    optionC: "GPCUGT",
    optionD: "FTCTGT",
    correctOption: "B",
    topicTag: "Logical"
  },
  {
    questionText: "Pointing to a photograph, a man said, 'I have no brother or sister, but that man's father is my father's son.' Whose photograph was it?",
    optionA: "His own photograph",
    optionB: "His son's photograph",
    optionC: "His father's photograph",
    optionD: "His nephew's photograph",
    correctOption: "B", // "my father's son" = himself. "that man's father" = himself -> that man is his son.
    topicTag: "Logical"
  },
  {
    questionText: "Which word does NOT belong with the others?",
    optionA: "Leopard",
    optionB: "Cougar",
    optionC: "Elephant",
    optionD: "Jaguar",
    correctOption: "C", // Elephant is a feline exception
    topicTag: "Logical"
  },
  {
    questionText: "Statements: All cats are animals. All animals are mammals. Conclusion: (I) All cats are mammals. (II) Some mammals are cats.",
    optionA: "Only I follows",
    optionB: "Only II follows",
    optionC: "Both I and II follow",
    optionD: "Neither I nor II follows",
    correctOption: "C", // Both are valid deductions
    topicTag: "Logical"
  },
  {
    questionText: "If South-East becomes North, North-East becomes West and so on, what will West become?",
    optionA: "North-East",
    optionB: "South-East",
    optionC: "North-West",
    optionD: "South-West",
    correctOption: "B", // Rotation by 135 degrees counter-clockwise. West -> South-East.
    topicTag: "Logical"
  },
  {
    questionText: "Find the odd one out: 8, 27, 64, 100, 125, 216",
    optionA: "27",
    optionB: "64",
    optionC: "100",
    optionD: "125",
    correctOption: "C", // 100 is not a perfect cube (10^2, others are 2^3, 3^3, 4^3, 5^3, 6^3)
    topicTag: "Logical"
  },
  {
    questionText: "In a row of students, Rahul is 10th from the left and 15th from the right. How many total students are in the row?",
    optionA: "24",
    optionB: "25",
    optionC: "26",
    optionD: "27",
    correctOption: "A", // Total = 10 + 15 - 1 = 24
    topicTag: "Logical"
  },
  {
    questionText: "If '+' means multiply, '-' means divide, '*' means add, and '/' means subtract, calculate: 12 + 4 - 2 * 6 / 3",
    optionA: "27",
    optionB: "30",
    optionC: "21",
    optionD: "18",
    correctOption: "A", // 12 * 4 / 2 + 6 - 3 = 48 / 2 + 6 - 3 = 24 + 6 - 3 = 27
    topicTag: "Logical"
  },
  {
    questionText: "Complete the analogy: Clock : Time :: Thermometer : ?",
    optionA: "Heat",
    optionB: "Temperature",
    optionC: "Mercury",
    optionD: "Energy",
    correctOption: "B",
    topicTag: "Logical"
  },

  // Verbal Ability (Questions 21 - 30)
  {
    questionText: "Choose the word most nearly OPPOSITE in meaning to 'METICULOUS':",
    optionA: "Careful",
    optionB: "Careless",
    optionC: "Painstaking",
    optionD: "Methodical",
    correctOption: "B",
    topicTag: "Verbal"
  },
  {
    questionText: "Choose the word that best expresses the SYNONYM of 'CANDID':",
    optionA: "Frank",
    optionB: "Secretive",
    optionC: "Deceptive",
    optionD: "Reserved",
    correctOption: "A",
    topicTag: "Verbal"
  },
  {
    questionText: "Identify the error in the sentence: 'Neither of the two candidate (A) / are eligible (B) / for the position. (C)'",
    optionA: "Part A",
    optionB: "Part B",
    optionC: "Part C",
    optionD: "No error",
    correctOption: "B", // 'Neither of...' takes a singular verb: 'is eligible'
    topicTag: "Verbal"
  },
  {
    questionText: "Fill in the blank with the correct idiom: He decided to _____ and apologize to his manager.",
    optionA: "bite the bullet",
    optionB: "burn the midnight oil",
    optionC: "break a leg",
    optionD: "spill the beans",
    correctOption: "A",
    topicTag: "Verbal"
  },
  {
    questionText: "Choose the correctly spelled word:",
    optionA: "Accomodate",
    optionB: "Accommodate",
    optionC: "Acommodate",
    optionD: "Accommodat",
    correctOption: "B",
    topicTag: "Verbal"
  },
  {
    questionText: "Select the correct passive form: 'She wrote a magnificent essay.'",
    optionA: "A magnificent essay is written by her.",
    optionB: "A magnificent essay was written by her.",
    optionC: "A magnificent essay had been written by her.",
    optionD: "A magnificent essay has written by her.",
    correctOption: "B",
    topicTag: "Verbal"
  },
  {
    questionText: "Select the antonym for 'EPHEMERAL':",
    optionA: "Transient",
    optionB: "Fleeting",
    optionC: "Permanent",
    optionD: "Short-lived",
    correctOption: "C",
    topicTag: "Verbal"
  },
  {
    questionText: "Choose the appropriate preposition: She has been working here _____ 2021.",
    optionA: "for",
    optionB: "since",
    optionC: "from",
    optionD: "during",
    correctOption: "B",
    topicTag: "Verbal"
  },
  {
    questionText: "What does the phrase 'Once in a blue moon' mean?",
    optionA: "Frequently",
    optionB: "Very rarely",
    optionC: "During full moon",
    optionD: "Never",
    correctOption: "B",
    topicTag: "Verbal"
  },
  {
    questionText: "Complete the sentence with the correct conjunction: He worked hard, _____ he failed to qualify.",
    optionA: "so",
    optionB: "yet",
    optionC: "because",
    optionD: "unless",
    correctOption: "B",
    topicTag: "Verbal"
  }
];

async function main() {
  console.log('🌱 Starting Mock Test Portal database seeding...');

  // Create default admin user
  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@mocktestportal.com' },
    update: { role: Role.ADMIN },
    create: {
      name: 'Portal Administrator',
      email: 'admin@mocktestportal.com',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
      role: Role.ADMIN
    }
  });

  // Create demo student user
  const studentUser = await prisma.user.upsert({
    where: { email: 'student@demo.com' },
    update: { role: Role.STUDENT },
    create: {
      name: 'Demo Student',
      email: 'student@demo.com',
      image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150',
      role: Role.STUDENT
    }
  });

  console.log(`👤 Created Users: Admin (${adminUser.email}), Student (${studentUser.email})`);

  // Create Technical Mock Test
  let techTest = await prisma.test.findFirst({
    where: { title: 'Technical Mock Test' }
  });

  if (!techTest) {
    techTest = await prisma.test.create({
      data: {
        title: 'Technical Mock Test',
        category: 'Technical',
        description: 'Comprehensive evaluation of OOPs principles, C++, and C# core concepts for technical campus placements.',
        totalQuestions: 30,
        timePerQuestion: 60,
        marksPerQuestion: 2
      }
    });
  }

  // Clear old questions for tech test if re-seeding
  await prisma.question.deleteMany({ where: { testId: techTest.id } });

  // Insert 30 technical questions
  for (const q of technicalQuestions) {
    await prisma.question.create({
      data: {
        testId: techTest.id,
        ...q
      }
    });
  }
  console.log(`✅ Seeded 30 questions for "${techTest.title}"`);

  // Create Aptitude Mock Test
  let aptTest = await prisma.test.findFirst({
    where: { title: 'Aptitude Mock Test' }
  });

  if (!aptTest) {
    aptTest = await prisma.test.create({
      data: {
        title: 'Aptitude Mock Test',
        category: 'Aptitude',
        description: 'Test your speed and accuracy in Quantitative Aptitude, Logical Reasoning, and Verbal Ability.',
        totalQuestions: 30,
        timePerQuestion: 60,
        marksPerQuestion: 2
      }
    });
  }

  // Clear old questions for apt test if re-seeding
  await prisma.question.deleteMany({ where: { testId: aptTest.id } });

  // Insert 30 aptitude questions
  for (const q of aptitudeQuestions) {
    await prisma.question.create({
      data: {
        testId: aptTest.id,
        ...q
      }
    });
  }
  console.log(`✅ Seeded 30 questions for "${aptTest.title}"`);

  console.log('🎉 Seeding successfully completed!');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
