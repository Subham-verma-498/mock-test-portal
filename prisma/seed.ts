import { PrismaClient, Role } from '@prisma/client';
import {
  aptSeries1Questions,
  aptSeries2Questions,
  aptSeries3Questions,
  aptSeries4Questions,
  aptSeries5Questions,
  aptSeries6Questions,
  aptSeries7Questions,
  aptSeries8Questions,
  aptSeries9Questions,
  aptSeries10Questions,
  reasoningSeries1Questions,
  reasoningSeries2Questions,
  reasoningSeries3Questions,
} from './aptitude_test_series_data.js';
import {
  indiaBixAptitude1Questions,
  indiaBixAptitude2Questions,
  indiaBixReasoning1Questions,
  indiaBixVerbal1Questions,
  indiaBixTechnical1Questions,
  indiaBixJavaDb1Questions,
  indiaBixTechnical2Questions,
  indiaBixTechnical3Questions,
} from './indiabix_test_series_data.js';

const prisma = new PrismaClient();

// -------------------------------------------------------------
// Test 1: Technical Mock Test (OOPs, C++, C# Core)
// -------------------------------------------------------------
const technicalQuestions = [
  {
    questionText: "Which of the following correctly describes the difference between Function Overloading and Function Overriding?",
    optionA: "Function overloading occurs at compile-time within the same class; overriding occurs at runtime across base and derived classes",
    optionB: "Function overloading requires inheritance; function overriding does not",
    optionC: "Function overriding happens at compile-time; overloading happens at runtime",
    optionD: "Function overloading requires virtual keywords; function overriding does not",
    correctOption: "A",
    topicTag: "OOPs",
    explanation: "Function overloading occurs in the same class at compile time (static polymorphism) by changing method signatures. Function overriding occurs across base and derived classes at runtime (dynamic polymorphism) using virtual and override keywords."
  },
  {
    questionText: "In Object-Oriented Programming, what is a primary difference between an Abstract Class and an Interface?",
    optionA: "An abstract class can contain concrete methods and fields; an interface primarily defines method contracts without state",
    optionB: "A class can inherit multiple abstract classes, but only one interface",
    optionC: "Abstract classes cannot have constructors; interfaces can",
    optionD: "Interface methods are private by default; abstract class methods are public",
    correctOption: "A",
    topicTag: "OOPs",
    explanation: "Abstract classes can hold state (fields) and implement full concrete methods alongside abstract ones. Interfaces define stateless method contracts that implementing classes must fulfill."
  },
  {
    questionText: "In C++, when an object of a derived class is instantiated, in what order are constructors executed?",
    optionA: "Derived class constructor first, then Base class constructor",
    optionB: "Base class constructor first, then Derived class constructor",
    optionC: "Only the Derived class constructor executes",
    optionD: "Constructors execute simultaneously in parallel threads",
    correctOption: "B",
    topicTag: "C++",
    explanation: "In C++, constructor call order flows from top of inheritance hierarchy to bottom: Base class constructor executes first to set up base state, followed by Derived class constructor."
  },
  {
    questionText: "In what order are destructors executed when a derived class object goes out of scope?",
    optionA: "Base class destructor first, then Derived class destructor",
    optionB: "Derived class destructor first, then Base class destructor",
    optionC: "Only the Base class destructor executes",
    optionD: "Destructors execute in arbitrary order determined by the runtime",
    correctOption: "B",
    topicTag: "C++",
    explanation: "Destructors execute in exact reverse order of constructors: Derived class destructor runs first to clean up derived resources, followed by Base class destructor."
  },
  {
    questionText: "What characterizes a 'static' member variable in a class?",
    optionA: "It is re-created every time a new object instance is created",
    optionB: "It is shared among all instances of the class and allocated once in global memory",
    optionC: "It can only be accessed from within main()",
    optionD: "It cannot be modified after object creation",
    correctOption: "B",
    topicTag: "OOPs"
  },
  {
    questionText: "What happens when a large object is passed by value (without reference or pointer) to a function in C++?",
    optionA: "The function modifies the original object directly",
    optionB: "A duplicate copy of the object is created using the copy constructor, incurring memory/time overhead",
    optionC: "A compilation error occurs",
    optionD: "The object is automatically moved using rvalue semantics",
    correctOption: "B",
    topicTag: "C++"
  },
  {
    questionText: "If a virtual function with a default parameter is overridden in a derived class, which default value is used when called via a base class pointer?",
    optionA: "The default parameter defined in the Base class",
    optionB: "The default parameter defined in the Derived class",
    optionC: "Neither; a runtime exception is thrown",
    optionD: "Both default values are concatenated",
    correctOption: "A",
    topicTag: "C++"
  },
  {
    questionText: "In C++, what special access privilege does a function declared with the 'friend' keyword possess?",
    optionA: "It can inherit from private base classes",
    optionB: "It can access private and protected members of the class declaring it as a friend",
    optionC: "It automatically executes before the class constructor",
    optionD: "It prevents other functions from modifying class fields",
    correctOption: "B",
    topicTag: "C++"
  },
  {
    questionText: "Why are String objects immutable in Java and C#?",
    optionA: "To prevent strings from taking up memory in heap",
    optionB: "To ensure thread safety, security (hashing/caching), and string pooling optimizations",
    optionC: "Because strings are primitive data types in RAM",
    optionD: "To force developers to use char arrays instead",
    correctOption: "B",
    topicTag: "Java / C#"
  },
  {
    questionText: "In structured exception handling (try-catch-finally), when is the 'finally' block executed?",
    optionA: "Only if an exception is thrown",
    optionB: "Only if no exception is thrown",
    optionC: "Always executed regardless of whether an exception occurred or was caught",
    optionD: "Only if the catch block throws another exception",
    correctOption: "C",
    topicTag: "Programming Fundamentals"
  },
  {
    questionText: "What is the purpose of the 'explicit' keyword in C++ constructor declarations?",
    optionA: "To mark a constructor as virtual",
    optionB: "To prevent implicit type conversions during single-argument constructor calls",
    optionC: "To allow direct access from external namespaces",
    optionD: "To force inline compilation of the constructor",
    correctOption: "B",
    topicTag: "C++"
  },
  {
    questionText: "In C#, what is the difference between 'ref' and 'out' parameters?",
    optionA: "'ref' requires variable initialization before calling; 'out' does not require initialization before passing",
    optionB: "'out' requires variable initialization before calling; 'ref' does not",
    optionC: "'ref' passes by value; 'out' passes by pointer",
    optionD: "There is no functional difference between 'ref' and 'out'",
    correctOption: "A",
    topicTag: "C#"
  },
  {
    questionText: "What is Diamond Problem in Multiple Inheritance and how is it resolved in C++?",
    optionA: "Ambiguity when inheriting from multiple classes with identical method names; solved using Virtual Inheritance",
    optionB: "Memory leakage in recursive functions; solved using smart pointers",
    optionC: "Stack overflow in deeply nested loops; solved using static casting",
    optionD: "Compilation error when returning pointers; solved using references",
    correctOption: "A",
    topicTag: "C++"
  },
  {
    questionText: "What is the key difference between Shallow Copy and Deep Copy?",
    optionA: "Shallow copy copies references to heap objects; deep copy recursively duplicates all dynamically allocated objects",
    optionB: "Deep copy is faster than shallow copy",
    optionC: "Shallow copy creates new memory allocations for all members",
    optionD: "Deep copy is only used for primitive integer types",
    correctOption: "A",
    topicTag: "OOPs"
  },
  {
    questionText: "In C++11, what is the main benefit of Move Semantics (`std::move`) over Copy Semantics?",
    optionA: "It enables multi-threaded parallel execution",
    optionB: "It transfers ownership of resources without expensive deep copying",
    optionC: "It converts pointers to references automatically",
    optionD: "It encrypts object data in memory",
    correctOption: "B",
    topicTag: "C++"
  },
  {
    questionText: "What is a vtable (Virtual Table) in C++?",
    optionA: "A lookup table of function pointers created per class to resolve virtual function calls dynamically at runtime",
    optionB: "A table stored on disk to cache database queries",
    optionC: "A stack structure storing local variables",
    optionD: "A compile-time list of all overloaded operators",
    correctOption: "A",
    topicTag: "C++"
  },
  {
    questionText: "In C#, what is Garbage Collection (GC) non-deterministic finalization?",
    optionA: "Developers cannot predict the exact moment when `Finalize` or destructor runs during GC collection",
    optionB: "Objects are never cleaned up from heap",
    optionC: "GC runs only when system power is turned off",
    optionD: "Memory allocation occurs deterministically every 10 seconds",
    correctOption: "A",
    topicTag: "C#"
  },
  {
    questionText: "Which smart pointer in C++11 enforces EXCLUSIVE ownership of a dynamically allocated resource?",
    optionA: "std::shared_ptr",
    optionB: "std::unique_ptr",
    optionC: "std::weak_ptr",
    optionD: "std::auto_ptr",
    correctOption: "B",
    topicTag: "C++"
  },
  {
    questionText: "What is encapsulation in OOP?",
    optionA: "Hiding internal state implementation details and exposing public interfaces for object interaction",
    optionB: "Deriving new classes from existing base classes",
    optionC: "Invoking different methods using the same signature",
    optionD: "Executing multiple threads in parallel",
    correctOption: "A",
    topicTag: "OOPs"
  },
  {
    questionText: "In C#, what is the difference between `const` and `readonly` fields?",
    optionA: "`const` is a compile-time constant; `readonly` is evaluated at runtime and can be set inside constructor",
    optionB: "`readonly` is evaluated at compile time; `const` at runtime",
    optionC: "`const` can be modified anytime; `readonly` cannot",
    optionD: "There is no difference between them",
    correctOption: "A",
    topicTag: "C#"
  },
  {
    questionText: "What is RAII (Resource Acquisition Is Initialization) in C++?",
    optionA: "Resource lifetime is bound to object lifetime so resource cleanup occurs automatically in destructor",
    optionB: "Allocating all memory at system boot time",
    optionC: "Initializing all variables to zero in main()",
    optionD: "Running a background thread for garbage collection",
    correctOption: "A",
    topicTag: "C++"
  },
  {
    questionText: "What is Polymorphism in Object-Oriented Design?",
    optionA: "The ability of different objects to respond to the same method call in class-specific ways",
    optionB: "Storing multiple data types in a single array",
    optionC: "Preventing inheritance on a class",
    optionD: "Converting objects into JSON streams",
    correctOption: "A",
    topicTag: "OOPs"
  },
  {
    questionText: "In C++, what occurs if a destructor of a base class is NOT declared as `virtual` when deleting a derived object via a base pointer?",
    optionA: "Undefined behavior / Memory leak because derived destructor is never invoked",
    optionB: "Compilation error before build",
    optionC: "Both base and derived destructors execute normally",
    optionD: "The program restarts automatically",
    correctOption: "A",
    topicTag: "C++"
  },
  {
    questionText: "In C#, what is a `delegate`?",
    optionA: "A type-safe object that holds a reference to a method with a specific signature",
    optionB: "A special keyword used for database connection",
    optionC: "A value type stored exclusively on the stack",
    optionD: "An interface for multi-threading",
    correctOption: "A",
    topicTag: "C#"
  },
  {
    questionText: "What is a Pure Virtual Function in C++?",
    optionA: "A virtual function declared with `= 0` that makes the class abstract and must be overridden by derived classes",
    optionB: "A function that has no parameter list",
    optionC: "A static function defined in global namespace",
    optionD: "A function that returns `void` only",
    correctOption: "A",
    topicTag: "C++"
  },
  {
    questionText: "In Java/C#, what is boxing and unboxing?",
    optionA: "Boxing converts a value type to an object reference type; unboxing extracts the value type from object",
    optionB: "Compressing files into a ZIP archive",
    optionC: "Encapsulating private fields into public properties",
    optionD: "Converting floating point numbers to integers",
    correctOption: "A",
    topicTag: "Java / C#"
  },
  {
    questionText: "Which keyword in C++ is used to modify a class member inside a `const` member function?",
    optionA: "volatile",
    optionB: "mutable",
    optionC: "static",
    optionD: "extern",
    correctOption: "B",
    topicTag: "C++"
  },
  {
    questionText: "What is the primary usage of an Interface in C# / Java?",
    optionA: "To define a contract of operations that implementing classes must fulfill, enabling loose coupling",
    optionB: "To store global state variables",
    optionC: "To replace database tables",
    optionD: "To execute native C++ code",
    correctOption: "A",
    topicTag: "OOPs"
  },
  {
    questionText: "What is operator overloading in C++?",
    optionA: "Providing custom implementation for standard language operators when applied to user-defined classes",
    optionB: "Calling an operator multiple times in a loop",
    optionC: "Replacing arithmetic operators with logic gates",
    optionD: "Deleting default assignment operators",
    correctOption: "A",
    topicTag: "C++"
  },
  {
    questionText: "What is the static constructor in C# used for?",
    optionA: "To initialize static data or perform actions required once before the first instance is created or static member called",
    optionB: "To copy instances across threads",
    optionC: "To allocate stack memory for local variables",
    optionD: "To destroy static objects during app exit",
    correctOption: "A",
    topicTag: "C#"
  }
];

// -------------------------------------------------------------
// Test 2: Full-Stack & System Design Mock Test
// -------------------------------------------------------------
const fullstackQuestions = [
  {
    questionText: "In RESTful Web Services, what is the primary distinction between HTTP PUT and HTTP PATCH methods?",
    optionA: "PUT replaces the entire resource target representation; PATCH applies partial modifications to a resource",
    optionB: "PATCH is idempotent while PUT is not idempotent",
    optionC: "PUT is used exclusively for reading data; PATCH is for deletion",
    optionD: "PATCH requires URL query parameters while PUT requires JSON payload",
    correctOption: "A",
    topicTag: "System Design"
  },
  {
    questionText: "What problem does GraphQL primarily solve compared to traditional REST APIs?",
    optionA: "Over-fetching and under-fetching of data by allowing clients to specify exact required response fields",
    optionB: "Slow network latency by replacing TCP with UDP",
    optionC: "Database deadlocks in high concurrency environments",
    optionD: "Automatic generation of database SQL schema",
    correctOption: "A",
    topicTag: "Web Architecture"
  },
  {
    questionText: "What are the three structural parts of a JSON Web Token (JWT)?",
    optionA: "Header, Payload, and Signature",
    optionB: "Username, Password, and Salt",
    optionC: "API Key, Secret Key, and Session ID",
    optionD: "Issuer, Subject, and Expiration Timestamp",
    correctOption: "A",
    topicTag: "Web Security"
  },
  {
    questionText: "What triggers a CORS (Cross-Origin Resource Sharing) Preflight request from a web browser?",
    optionA: "A non-simple HTTP request (e.g. methods like PUT/DELETE or custom headers like Authorization)",
    optionB: "Any HTTP GET request to a same-origin domain",
    optionC: "Loading a standard CSS stylesheet file from CDN",
    optionD: "Submitting a standard HTML form with POST method",
    correctOption: "A",
    topicTag: "Web Security"
  },
  {
    questionText: "In Redis caching, what is the 'Cache-Aside' (Lazy Loading) pattern?",
    optionA: "App reads from cache; on cache miss, app reads from DB, updates cache, and returns result",
    optionB: "App writes directly to cache, and cache asynchronously writes to DB in background",
    optionC: "DB updates cache automatically whenever a table row changes",
    optionD: "Cache automatically purges all records every 60 seconds",
    correctOption: "A",
    topicTag: "System Design"
  },
  {
    questionText: "What is the Circuit Breaker pattern in microservices architecture used for?",
    optionA: "To prevent cascading failures across services by failing fast when a downstream dependency is unresponsive",
    optionB: "To encrypt incoming user passwords before saving to database",
    optionC: "To automatically scale Kubernetes pods up and down",
    optionD: "To balance network load between DNS servers",
    correctOption: "A",
    topicTag: "System Design"
  },
  {
    questionText: "How does a Content Delivery Network (CDN) accelerate static website asset delivery?",
    optionA: "By caching static content (images, JS, CSS) on edge servers geographically closer to the end user",
    optionB: "By compiling JavaScript to native C++ machine code",
    optionC: "By converting all images to vector graphics automatically",
    optionD: "By storing database tables directly inside browser cookies",
    correctOption: "A",
    topicTag: "Web Architecture"
  },
  {
    questionText: "What is the SQL N+1 Query Problem in Object-Relational Mapping (ORM) frameworks like Hibernate or Prisma?",
    optionA: "Executing 1 query to fetch parent records, followed by N separate queries to fetch related child records",
    optionB: "Creating N+1 indexes on a single table",
    optionC: "Exceeding the maximum connection limit by 1 connection",
    optionD: "Running N queries in parallel on a single core CPU",
    correctOption: "A",
    topicTag: "Full-Stack DB"
  },
  {
    questionText: "In Web Security, how does a Cross-Site Request Forgery (CSRF) token protect web applications?",
    optionA: "It is a secret, unique token validated on state-changing requests to ensure requests originate from the user's authentic UI",
    optionB: "It encrypts all HTTP response bodies using RSA",
    optionC: "It prevents users from taking screenshots of the webpage",
    optionD: "It blocks all cross-domain JavaScript execution",
    correctOption: "A",
    topicTag: "Web Security"
  },
  {
    questionText: "What is the key difference between WebSockets and Server-Sent Events (SSE)?",
    optionA: "WebSockets provide full-duplex bi-directional communication; SSE provides mono-directional server-to-client streaming over HTTP",
    optionB: "SSE allows binary payload transfer; WebSockets only allow text",
    optionC: "WebSockets run over UDP; SSE runs over TCP",
    optionD: "WebSockets require client polling every 1 second",
    correctOption: "A",
    topicTag: "Web Architecture"
  },
  {
    questionText: "In distributed message queues (e.g., Apache Kafka / RabbitMQ), what is the difference between Point-to-Point and Publish-Subscribe models?",
    optionA: "Point-to-Point delivers each message to exactly one consumer; Pub-Sub delivers messages to all subscribed consumers",
    optionB: "Pub-Sub guarantees zero memory usage; Point-to-Point requires infinite disk storage",
    optionC: "Point-to-Point requires HTTPS; Pub-Sub requires FTP",
    optionD: "Point-to-Point is asynchronous; Pub-Sub is strictly synchronous",
    correctOption: "A",
    topicTag: "System Design"
  },
  {
    questionText: "What is Consistent Hashing and why is it used in distributed caching systems?",
    optionA: "A hashing scheme that minimizes key remapping when cache nodes are added or removed from the cluster",
    optionB: "A hash function that always generates 64-bit integers",
    optionC: "A method to encrypt user passwords in database",
    optionD: "An algorithm to sort arrays in linear time",
    correctOption: "A",
    topicTag: "System Design"
  },
  {
    questionText: "What is a primary architectural difference between Docker Containers and Virtual Machines (VMs)?",
    optionA: "Containers share the host OS kernel and isolate user space; VMs run a complete guest OS on top of a hypervisor",
    optionB: "VMs are lighter and boot faster than containers",
    optionC: "Containers require dedicated hardware chips",
    optionD: "Docker containers cannot run Linux applications",
    correctOption: "A",
    topicTag: "DevOps & Infrastructure"
  },
  {
    questionText: "In HTTP/2, how does Multiplexing improve web performance compared to HTTP/1.1?",
    optionA: "Allows multiple requests and responses to be sent concurrently over a single TCP connection without head-of-line blocking",
    optionB: "Compresses images before sending over network",
    optionC: "Replaces domain names with IP addresses automatically",
    optionD: "Eliminates the need for SSL/TLS certificates",
    correctOption: "A",
    topicTag: "Web Architecture"
  },
  {
    questionText: "In OAuth 2.0, why is PKCE (Proof Key for Code Exchange) recommended for SPA and Mobile applications?",
    optionA: "It protects against Authorization Code Interception attacks on public clients without client secret storage",
    optionB: "It encrypts user passwords before submitting login form",
    optionC: "It generates multi-factor authentication SMS codes",
    optionD: "It speeds up database SQL queries",
    correctOption: "A",
    topicTag: "Web Security"
  },
  {
    questionText: "What is Rate Limiting in Web API Gateways and which algorithm uses a fixed capacity bucket filled at a constant rate?",
    optionA: "Token Bucket Algorithm",
    optionB: "Round Robin Algorithm",
    optionC: "Dijkstra Algorithm",
    optionD: "Binary Search Tree",
    correctOption: "A",
    topicTag: "System Design"
  },
  {
    questionText: "How does Content Security Policy (CSP) help mitigate Cross-Site Scripting (XSS) attacks?",
    optionA: "By restricting trusted domains from which scripts, styles, and assets can be loaded and executed by the browser",
    optionB: "By disabling JavaScript in user browser entirely",
    optionC: "By blocking all incoming SQL queries on the backend",
    optionD: "By storing access tokens in localStorage",
    correctOption: "A",
    topicTag: "Web Security"
  },
  {
    questionText: "What is Database Sharding in high-scalability web applications?",
    optionA: "Horizontal partitioning of database data across multiple server nodes based on a Shard Key",
    optionB: "Creating a duplicate copy of a database table on the same disk",
    optionC: "Converting database tables to CSV format",
    optionD: "Running database queries inside web worker threads",
    correctOption: "A",
    topicTag: "System Design"
  },
  {
    questionText: "In Web Development, what is Server-Side Rendering (SSR) in frameworks like Next.js?",
    optionA: "HTML content is generated on the server per request and sent to client, improving initial load speed and SEO",
    optionB: "HTML is built once at deploy time and never updated",
    optionC: "JavaScript code runs entirely inside browser DOM without server involvement",
    optionD: "Web pages are rendered inside database stored procedures",
    correctOption: "A",
    topicTag: "Full-Stack Web"
  },
  {
    questionText: "What is the CAP Theorem in distributed database systems?",
    optionA: "A distributed system can simultaneously guarantee at most 2 out of 3: Consistency, Availability, and Partition Tolerance",
    optionB: "Cache, API, and Persistence must always run on 1 machine",
    optionC: "CPU, Memory, and Network must operate at 100% capacity",
    optionD: "Code, Assets, and Packages must be compiled before deployment",
    correctOption: "A",
    topicTag: "System Design"
  },
  {
    questionText: "In microservices, what is the Saga Pattern used for?",
    optionA: "Managing distributed transactions across multiple microservices via a sequence of local transactions and compensating actions",
    optionB: "Serving static media files over CDN",
    optionC: "Compressing JSON responses with Gzip",
    optionD: "Authenticating users via fingerprint scans",
    correctOption: "A",
    topicTag: "System Design"
  },
  {
    questionText: "What is a Reverse Proxy (e.g. Nginx, HAProxy) used for in web deployments?",
    optionA: "Sits in front of backend servers to handle load balancing, SSL termination, caching, and security filtering",
    optionB: "Protects user browser from cookies",
    optionC: "Replaces JavaScript engine inside V8",
    optionD: "Generates frontend UI components dynamically",
    correctOption: "A",
    topicTag: "DevOps & Infrastructure"
  },
  {
    questionText: "In modern database systems, what is Optimistic Concurrency Control (Optimistic Locking)?",
    optionA: "Record is updated assuming no conflict; update fails/retries if version timestamp changed since record fetch",
    optionB: "Locking the entire table exclusively whenever any row is selected",
    optionC: "Disabling database transactions completely",
    optionD: "Writing all changes to log files without updating tables",
    correctOption: "A",
    topicTag: "Full-Stack DB"
  },
  {
    questionText: "What is the purpose of an Ingress Controller in Kubernetes?",
    optionA: "To manage HTTP/HTTPS routing rules into services within a Kubernetes cluster from outside",
    optionB: "To build container Docker images inside pods",
    optionC: "To monitor CPU voltage on physical server host",
    optionD: "To execute scheduled SQL database backups",
    correctOption: "A",
    topicTag: "DevOps & Infrastructure"
  },
  {
    questionText: "In Node.js, how does the Event Loop handle non-blocking asynchronous I/O operations?",
    optionA: "Delegates I/O tasks to libuv worker pool or OS kernel, executing callback functions on event queue processing phase",
    optionB: "Creates a new OS thread for every incoming HTTP request",
    optionC: "Blocks execution until disk write completes",
    optionD: "Executes all callbacks synchronously in main thread before listening for connections",
    correctOption: "A",
    topicTag: "Full-Stack Web"
  },
  {
    questionText: "What is the purpose of Database Connection Pooling (e.g. HikariCP, PgBouncer)?",
    optionA: "Reusing a set of pre-established database connections to avoid TCP handshake overhead on every query",
    optionB: "Encrypting database disk storage",
    optionC: "Merging multiple database schemas into 1 table",
    optionD: "Replacing primary keys with UUIDs automatically",
    correctOption: "A",
    topicTag: "System Design"
  },
  {
    questionText: "In web applications, what makes a cookie secure against XSS attacks?",
    optionA: "Setting the `HttpOnly` flag so client-side JavaScript cannot access `document.cookie`",
    optionB: "Setting cookie value in uppercase letters",
    optionC: "Expiring cookie after 5 seconds",
    optionD: "Storing cookie in browser local storage instead",
    correctOption: "A",
    topicTag: "Web Security"
  },
  {
    questionText: "What is the API Gateway pattern in microservice architectures?",
    optionA: "A single entry point for clients that handles request routing, authentication, rate limiting, and protocol translation",
    optionB: "A dedicated hardware router installed on client devices",
    optionC: "A database table that stores user passwords",
    optionD: "A CSS framework for responsive layout",
    correctOption: "A",
    topicTag: "System Design"
  },
  {
    questionText: "What is the primary advantage of gRPC over REST with JSON payload?",
    optionA: "Uses Protocol Buffers (Protobuf) over HTTP/2 for smaller binary payloads and faster serialization",
    optionB: "Runs directly inside HTML tags without JavaScript",
    optionC: "Does not require network connection",
    optionD: "Eliminates server code requirements",
    correctOption: "A",
    topicTag: "Web Architecture"
  },
  {
    questionText: "In Web Performance, what is hydration in SSR applications?",
    optionA: "The client-side process where JavaScript attaches event listeners to pre-rendered HTML DOM elements sent by server",
    optionB: "Cleaning up unused RAM memory in browser",
    optionC: "Downloading images in background",
    optionD: "Minifying CSS files before deployment",
    correctOption: "A",
    topicTag: "Full-Stack Web"
  }
];

// -------------------------------------------------------------
// Test 3: Data Structures & Algorithms Advanced Mock Test
// -------------------------------------------------------------
const dsaQuestions = [
  {
    questionText: "What is the time complexity to build a Binary Heap from an unsorted array of N elements using Floyd's heapify algorithm?",
    optionA: "O(N)",
    optionB: "O(N log N)",
    optionC: "O(N^2)",
    optionD: "O(log N)",
    correctOption: "A",
    topicTag: "Data Structures"
  },
  {
    questionText: "What technique does Floyd's Cycle Detection algorithm use to find a loop in a Linked List?",
    optionA: "Two Pointers moving at different speeds (Slow pointer 1 step, Fast pointer 2 steps)",
    optionB: "Hashing every node address into a Set",
    optionC: "Sorting linked list nodes by value",
    optionD: "Reversing linked list pointers recursively",
    correctOption: "A",
    topicTag: "Algorithms"
  },
  {
    questionText: "What is the time complexity of Dijkstra's Shortest Path algorithm implemented with a Min-Priority Queue (Fibonacci/Binary Heap) for graph with V vertices and E edges?",
    optionA: "O((V + E) log V)",
    optionB: "O(V^3)",
    optionC: "O(V * E)",
    optionD: "O(V + E)",
    correctOption: "A",
    topicTag: "Graph Algorithms"
  },
  {
    questionText: "What is the main difference between 0/1 Knapsack Problem and Fractional Knapsack Problem in optimization?",
    optionA: "0/1 Knapsack requires Dynamic Programming (items cannot be divided); Fractional Knapsack can be solved using Greedy Strategy",
    optionB: "Fractional Knapsack requires NP-Complete proof; 0/1 Knapsack runs in O(1) time",
    optionC: "0/1 Knapsack works only on graph nodes",
    optionD: "Fractional Knapsack cannot yield optimal solutions",
    correctOption: "A",
    topicTag: "Dynamic Programming"
  },
  {
    questionText: "What is the time complexity for inserting a word of length L into a Trie (Prefix Tree)?",
    optionA: "O(L)",
    optionB: "O(26^L)",
    optionC: "O(N log L)",
    optionD: "O(L^2)",
    correctOption: "A",
    topicTag: "Advanced Data Structures"
  },
  {
    questionText: "What type of graph is REQUIRED to perform a valid Topological Sort?",
    optionA: "Directed Acyclic Graph (DAG)",
    optionB: "Undirected Cyclic Graph",
    optionC: "Complete Bipartite Graph",
    optionD: "Weighted Tree with negative edges",
    correctOption: "A",
    topicTag: "Graph Algorithms"
  },
  {
    questionText: "What is the time complexity of Kadane's Algorithm for finding Maximum Subarray Sum in an array of size N?",
    optionA: "O(N) Time and O(1) Auxiliary Space",
    optionB: "O(N log N) Time and O(N) Space",
    optionC: "O(N^2) Time and O(1) Space",
    optionD: "O(2^N) Time and O(N) Space",
    correctOption: "A",
    topicTag: "Algorithms"
  },
  {
    questionText: "Which data structure provides O(1) time for finding both Minimum and Maximum elements while supporting dynamic insertions?",
    optionA: "Min-Max Heap / Balanced BST",
    optionB: "Unsorted Array",
    optionC: "Singly Linked List",
    optionD: "Queue",
    correctOption: "A",
    topicTag: "Data Structures"
  },
  {
    questionText: "What is the time complexity of Kruskal's Minimum Spanning Tree algorithm for graph with E edges and V vertices?",
    optionA: "O(E log E) or O(E log V)",
    optionB: "O(V^2)",
    optionC: "O(V + E)",
    optionD: "O(E^2)",
    correctOption: "A",
    topicTag: "Graph Algorithms"
  },
  {
    questionText: "In a Segment Tree covering N elements, what is the time complexity for a Range Sum Query and Point Update?",
    optionA: "O(log N) for Query, O(log N) for Update",
    optionB: "O(1) for Query, O(N) for Update",
    optionC: "O(N) for Query, O(1) for Update",
    optionD: "O(N log N) for Query, O(N) for Update",
    correctOption: "A",
    topicTag: "Advanced Data Structures"
  },
  {
    questionText: "Which Bitwise expression checks whether a positive integer `n` is a power of 2?",
    optionA: "(n > 0) && ((n & (n - 1)) == 0)",
    optionB: "(n % 2) == 0",
    optionC: "(n | (n + 1)) == 0",
    optionD: "(n ^ n) == 1",
    correctOption: "A",
    topicTag: "Bit Manipulation"
  },
  {
    questionText: "What is the worst-case space complexity of recursive Depth-First Search (DFS) on a binary tree of height H?",
    optionA: "O(H) due to call stack space",
    optionB: "O(2^H)",
    optionC: "O(1)",
    optionD: "O(H^2)",
    correctOption: "A",
    topicTag: "Algorithms"
  },
  {
    questionText: "Which algorithm finds all-pairs shortest paths in a weighted graph in O(V^3) time complexity?",
    optionA: "Floyd-Warshall Algorithm",
    optionB: "Dijkstra Algorithm",
    optionC: "Breadth-First Search",
    optionD: "Kruskal Algorithm",
    correctOption: "A",
    topicTag: "Graph Algorithms"
  },
  {
    questionText: "How can the number of Inversions in an array be counted in O(N log N) time complexity?",
    optionA: "By modifying the Merge Phase of Merge Sort",
    optionB: "By running Bubble Sort until sorted",
    optionC: "By using Binary Search Tree insertion",
    optionD: "By using Depth-First Search",
    correctOption: "A",
    topicTag: "Algorithms"
  },
  {
    questionText: "What data structure is optimal for solving the 'Sliding Window Maximum' problem in O(N) time?",
    optionA: "Double-ended Queue (Deque) storing indices in monotonic decreasing order",
    optionB: "Stack",
    optionC: "Hash Map",
    optionD: "Binary Search Tree",
    correctOption: "A",
    topicTag: "Data Structures"
  },
  {
    questionText: "What is the worst-case time complexity of Bellman-Ford shortest path algorithm?",
    optionA: "O(V * E)",
    optionB: "O((V + E) log V)",
    optionC: "O(V log V)",
    optionD: "O(E log E)",
    correctOption: "A",
    topicTag: "Graph Algorithms"
  },
  {
    questionText: "Why is Bellman-Ford algorithm preferred over Dijkstra's algorithm in certain graph scenarios?",
    optionA: "Bellman-Ford can handle negative edge weights and detect negative weight cycles",
    optionB: "Bellman-Ford is faster than Dijkstra on all graphs",
    optionC: "Bellman-Ford uses less memory than BFS",
    optionD: "Dijkstra cannot be used on directed graphs",
    correctOption: "A",
    topicTag: "Graph Algorithms"
  },
  {
    questionText: "What data structure is utilized in Disjoint Set Union (DSU) to achieve near O(1) amortized time per operation?",
    optionA: "Union-Find with Path Compression and Union by Rank/Size",
    optionB: "Min-Heap with Fibonacci Pointers",
    optionC: "Red-Black Tree with Threaded Links",
    optionD: "Circular Doubly Linked List",
    correctOption: "A",
    topicTag: "Advanced Data Structures"
  },
  {
    questionText: "What is the amortized time complexity per operation in DSU with path compression and union by rank?",
    optionA: "O(α(N)) where α is the inverse Ackermann function (effectively constant O(1))",
    optionB: "O(log N)",
    optionC: "O(N)",
    optionD: "O(N^2)",
    correctOption: "A",
    topicTag: "Advanced Data Structures"
  },
  {
    questionText: "In Dynamic Programming, what condition must a problem satisfy to be solvable via DP?",
    optionA: "Optimal Substructure and Overlapping Subproblems",
    optionB: "Greedy Choice Property and Sorted Inputs",
    optionC: "Linear Complexity and Constant Memory",
    optionD: "Bipartite Graph Structure",
    correctOption: "A",
    topicTag: "Dynamic Programming"
  },
  {
    questionText: "What is the time complexity of finding Longest Common Subsequence (LCS) of two strings of lengths M and N using DP?",
    optionA: "O(M * N)",
    optionB: "O(2^(M+N))",
    optionC: "O(M + N)",
    optionD: "O(M log N)",
    correctOption: "A",
    topicTag: "Dynamic Programming"
  },
  {
    questionText: "What is the optimal time complexity to find the Median of two sorted arrays of sizes M and N?",
    optionA: "O(log(min(M, N))) using Binary Search on partition sizes",
    optionB: "O(M + N)",
    optionC: "O((M + N) log(M + N))",
    optionD: "O(1)",
    correctOption: "A",
    topicTag: "Algorithms"
  },
  {
    questionText: "In Knuth-Morris-Pratt (KMP) string search algorithm, what does the Longest Prefix Suffix (LPS) array store?",
    optionA: "Length of longest proper prefix of substring matching a proper suffix",
    optionB: "ASCII codes of characters",
    optionC: "Frequency count of vowels",
    optionD: "Locations of spaces in string",
    correctOption: "A",
    topicTag: "Advanced Algorithms"
  },
  {
    questionText: "What is the overall time complexity of KMP Pattern Searching algorithm for text length N and pattern length M?",
    optionA: "O(N + M)",
    optionB: "O(N * M)",
    optionC: "O(N log M)",
    optionD: "O(N^2)",
    correctOption: "A",
    topicTag: "Advanced Algorithms"
  },
  {
    questionText: "Which algorithm finds Strongly Connected Components (SCC) in a directed graph in O(V + E) time using 2 DFS passes?",
    optionA: "Kosaraju's Algorithm",
    optionB: "Prim's Algorithm",
    optionC: "Dijkstra's Algorithm",
    optionD: "A* Search Algorithm",
    correctOption: "A",
    topicTag: "Graph Algorithms"
  },
  {
    questionText: "What is the time complexity of Quickselect algorithm to find the K-th smallest element in an unsorted array on average?",
    optionA: "O(N) average time complexity",
    optionB: "O(N^2) average time complexity",
    optionC: "O(N log N) average time complexity",
    optionD: "O(log N) average time complexity",
    correctOption: "A",
    topicTag: "Algorithms"
  },
  {
    questionText: "What is Boyer-Moore Majority Vote Algorithm used for?",
    optionA: "Finding element that appears more than N/2 times in an array in O(N) time and O(1) extra space",
    optionB: "Sorting elements in ascending order",
    optionC: "Calculating factorial of large numbers",
    optionD: "Searching pattern in text file",
    correctOption: "A",
    topicTag: "Algorithms"
  },
  {
    questionText: "What data structure is utilized in A* Search Algorithm to pick the next node to expand?",
    optionA: "Priority Queue ordered by evaluation function f(n) = g(n) + h(n)",
    optionB: "First-In-First-Out Queue",
    optionC: "Stack",
    optionD: "Hash Table",
    correctOption: "A",
    topicTag: "Advanced Algorithms"
  },
  {
    questionText: "What is a Fenwick Tree (Binary Indexed Tree) primarily used for?",
    optionA: "Efficient prefix sum updates and point queries in O(log N) time",
    optionB: "Storing string dictionaries",
    optionC: "Rendering 3D graphics",
    optionD: "Executing SQL joins",
    correctOption: "A",
    topicTag: "Advanced Data Structures"
  },
  {
    questionText: "What is the space complexity of Tarjan's algorithm for finding bridges in a graph?",
    optionA: "O(V + E)",
    optionB: "O(V^2)",
    optionC: "O(1)",
    optionD: "O(E^2)",
    correctOption: "A",
    topicTag: "Graph Algorithms"
  }
];

// -------------------------------------------------------------
// Test 4: Core CS Fundamentals Mock Test (OS, DBMS, Networks, SOLID)
// -------------------------------------------------------------
const coreCsQuestions = [
  {
    questionText: "In Operating Systems, what is a Page Fault?",
    optionA: "An interrupt raised when a program accesses a virtual memory page that is currently not loaded into physical RAM",
    optionB: "A hardware failure in physical RAM memory chip",
    optionC: "A syntax error in C program code",
    optionD: "Deleting a file from hard disk drive",
    correctOption: "A",
    topicTag: "Operating Systems"
  },
  {
    questionText: "What is the primary difference between a Mutex and a Counting Semaphore?",
    optionA: "A Mutex is a locking mechanism owned by 1 thread at a time; a Semaphore is a signaling mechanism with counter N",
    optionB: "A Semaphore can only be used by 1 thread; Mutex by unlimited threads",
    optionC: "Mutex operates in user space only; Semaphore in hardware only",
    optionD: "There is no functional difference between them",
    correctOption: "A",
    topicTag: "Operating Systems"
  },
  {
    questionText: "What is the Banker's Algorithm in OS used for?",
    optionA: "Deadlock Avoidance by testing safe states before resource allocation",
    optionB: "CPU clock speed frequency adjustment",
    optionC: "Database index creation",
    optionD: "Disk defragmentation scheduling",
    correctOption: "A",
    topicTag: "Operating Systems"
  },
  {
    questionText: "In Database Systems, what does 3rd Normal Form (3NF) mandate?",
    optionA: "Table must be in 2NF and contain no transitive functional dependencies",
    optionB: "Table must contain no multi-valued attributes only",
    optionC: "Table must have exactly 3 columns",
    optionD: "Table must be stored in a single binary file",
    correctOption: "A",
    topicTag: "DBMS"
  },
  {
    questionText: "Which Database Isolation Level prevents Dirty Reads, Non-Repeatable Reads, AND Phantom Reads?",
    optionA: "Serializable",
    optionB: "Read Committed",
    optionC: "Repeatable Read",
    optionD: "Read Uncommitted",
    correctOption: "A",
    topicTag: "DBMS"
  },
  {
    questionText: "In Computer Networks, what takes place during the TCP 3-Way Handshake?",
    optionA: "Client sends SYN, Server responds with SYN-ACK, Client sends ACK",
    optionB: "Client sends DATA, Server sends ACK, Client sends FIN",
    optionC: "Client sends HELLO, Server sends OK, Client sends START",
    optionD: "Client sends PING, Server sends PONG, Client sends DONE",
    correctOption: "A",
    topicTag: "Computer Networks"
  },
  {
    questionText: "What is the purpose of Write-Ahead Logging (WAL) in database engines?",
    optionA: "To guarantee Durability (ACID) by logging changes to non-volatile disk before modifying actual database pages",
    optionB: "To format query results into HTML tables",
    optionC: "To compress database tables before saving",
    optionD: "To block duplicate user sign-ups",
    correctOption: "A",
    topicTag: "DBMS"
  },
  {
    questionText: "What is Belady's Anomaly in Operating Systems memory management?",
    optionA: "For FIFO page replacement, increasing the number of page frames results in MORE page faults for certain access patterns",
    optionB: "CPU runs out of registers during deep recursion",
    optionC: "Hard disk write speed decreases when RAM is full",
    optionD: "Virtual memory allocation fails on 64-bit systems",
    correctOption: "A",
    topicTag: "Operating Systems"
  },
  {
    questionText: "Which SOLID design principle states that 'Software entities should be open for extension, but closed for modification'?",
    optionA: "Open/Closed Principle (OCP)",
    optionB: "Single Responsibility Principle (SRP)",
    optionC: "Liskov Substitution Principle (LSP)",
    optionD: "Dependency Inversion Principle (DIP)",
    correctOption: "A",
    topicTag: "SOLID Principles"
  },
  {
    questionText: "What is the function of the Translation Lookaside Buffer (TLB) in OS virtual memory hardware?",
    optionA: "A hardware cache storing recent Virtual-to-Physical page address translations to speed up memory access",
    optionB: "A queue storing pending disk read requests",
    optionC: "A register storing thread stack pointers",
    optionD: "A network buffer storing TCP packets",
    correctOption: "A",
    topicTag: "Operating Systems"
  },
  {
    questionText: "In OSI Model, at which layer do Routers operate to forward packets based on IP addresses?",
    optionA: "Network Layer (Layer 3)",
    optionB: "Data Link Layer (Layer 2)",
    optionC: "Transport Layer (Layer 4)",
    optionD: "Application Layer (Layer 7)",
    correctOption: "A",
    topicTag: "Computer Networks"
  },
  {
    questionText: "What is the Liskov Substitution Principle (LSP) in Object-Oriented Design?",
    optionA: "Derived classes must be substitutable for their base classes without altering program correctness",
    optionB: "Interfaces must contain no default method implementations",
    optionC: "Objects must only be created using factory functions",
    optionD: "Classes must not contain static member fields",
    correctOption: "A",
    topicTag: "SOLID Principles"
  },
  {
    questionText: "What is Copy-on-Write (COW) during process creation via `fork()` in Unix/Linux?",
    optionA: "Parent and child share the same memory pages until one process writes to a page, at which point a private copy is made",
    optionB: "Memory pages are immediately copied to disk before child execution",
    optionC: "Child process executes in read-only mode forever",
    optionD: "Parent process pauses execution until child completes",
    correctOption: "A",
    topicTag: "Operating Systems"
  },
  {
    questionText: "In B+ Trees used for database indexes, why are all data records/pointers stored ONLY in the leaf nodes?",
    optionA: "Allows leaf nodes to be linked sequentially for fast range scans and maintains constant search depth",
    optionB: "Reduces disk space by 90%",
    optionC: "Prevents duplicate keys from existing",
    optionD: "Eliminates need for root node",
    correctOption: "A",
    topicTag: "DBMS"
  },
  {
    questionText: "What is the key difference between TCP and UDP transport protocols?",
    optionA: "TCP is connection-oriented, reliable, and ordered; UDP is connectionless, lightweight, and unordered",
    optionB: "UDP guarantees zero packet loss; TCP does not",
    optionC: "TCP operates at Layer 7; UDP operates at Layer 2",
    optionD: "UDP is slower than TCP",
    correctOption: "A",
    topicTag: "Computer Networks"
  },
  {
    questionText: "What is Dependency Inversion Principle (DIP)?",
    optionA: "High-level modules should not depend on low-level modules; both should depend on abstractions",
    optionB: "Classes must inherit from at least 3 interfaces",
    optionC: "Functions must pass all parameters by value",
    optionD: "Database queries must depend on SQL scripts",
    correctOption: "A",
    topicTag: "SOLID Principles"
  },
  {
    questionText: "What occurs during an OS Context Switch?",
    optionA: "Saving state of running process/thread in PCB/TCB and restoring state of next scheduled process/thread",
    optionB: "Rebooting operating system kernel",
    optionC: "Converting C++ code to Assembly code",
    optionD: "Clearing browser cache memory",
    correctOption: "A",
    topicTag: "Operating Systems"
  },
  {
    questionText: "What is Dirty Read in database transaction execution?",
    optionA: "A transaction reads uncommitted data written by another concurrent transaction that might later roll back",
    optionB: "Reading data from a corrupted hard drive sector",
    optionC: "Querying a table without an index",
    optionD: "Reading data after system shutdown",
    correctOption: "A",
    topicTag: "DBMS"
  },
  {
    questionText: "What is the function of Domain Name System (DNS)?",
    optionA: "Translating human-readable domain names (e.g. google.com) into numerical IP addresses",
    optionB: "Encrypting web pages using HTTPS",
    optionC: "Compressing video files for fast streaming",
    optionD: "Storing user session passwords",
    correctOption: "A",
    topicTag: "Computer Networks"
  },
  {
    questionText: "In OS CPU Scheduling, what is the 'Convoy Effect'?",
    optionA: "Short processes waiting a long time behind a long CPU-bound process in First-Come First-Served (FCFS) scheduling",
    optionB: "Multiple threads executing in parallel on multi-core CPU",
    optionC: "CPU frequency throttling due to high temperature",
    optionD: "Page fault loop caused by insufficient RAM",
    correctOption: "A",
    topicTag: "Operating Systems"
  },
  {
    questionText: "What is the Interface Segregation Principle (ISP)?",
    optionA: "Clients should not be forced to depend upon interfaces that they do not use",
    optionB: "Every interface must have at least 10 methods",
    optionC: "Classes should never implement interfaces",
    optionD: "Interfaces must be stored in separate DLL files",
    correctOption: "A",
    topicTag: "SOLID Principles"
  },
  {
    questionText: "What is maximum transmission unit (MTU) in IP Networking?",
    optionA: "The largest size packet or frame (in bytes) that can be sent in a single network layer transaction",
    optionB: "The maximum number of users connected to a router",
    optionC: "The total length of optical fiber cable in meters",
    optionD: "The speed limit of Wi-Fi router in Mbps",
    correctOption: "A",
    topicTag: "Computer Networks"
  },
  {
    questionText: "What is the difference between Internal and External Memory Fragmentation?",
    optionA: "Internal: allocated memory block larger than requested data; External: total free memory sufficient but non-contiguous",
    optionB: "External fragmentation occurs inside CPU cache; Internal inside hard drive",
    optionC: "Internal fragmentation only happens on 32-bit systems",
    optionD: "There is no difference between them",
    correctOption: "A",
    topicTag: "Operating Systems"
  },
  {
    questionText: "What is a Database View?",
    optionA: "A virtual table based on the result-set of an SQL statement that does not store data physically (unless materialized)",
    optionB: "A screenshot of database table data",
    optionC: "A tool used to format CSS styles in database",
    optionD: "A physical hard drive backup file",
    correctOption: "A",
    topicTag: "DBMS"
  },
  {
    questionText: "What is HTTP/3 protocol built on top of instead of TCP?",
    optionA: "QUIC protocol (running over UDP)",
    optionB: "FTP protocol",
    optionC: "SMTP protocol",
    optionD: "ICMP protocol",
    correctOption: "A",
    topicTag: "Computer Networks"
  },
  {
    questionText: "In OS, what is Kernel Mode vs User Mode CPU privilege level?",
    optionA: "Kernel mode has unrestricted access to hardware and memory (Ring 0); User mode has restricted execution (Ring 3)",
    optionB: "User mode executes faster than Kernel mode",
    optionC: "Kernel mode is only active during system installation",
    optionD: "User mode can directly execute disk writes without OS calls",
    correctOption: "A",
    topicTag: "Operating Systems"
  },
  {
    questionText: "What is Boyce-Codd Normal Form (BCNF)?",
    optionA: "A stricter version of 3NF where for every functional dependency X -> Y, X must be a Super Key",
    optionB: "A normal form requiring all columns to be strings",
    optionC: "A database model used exclusively in NoSQL",
    optionD: "A state where table has zero foreign keys",
    correctOption: "A",
    topicTag: "DBMS"
  },
  {
    questionText: "What is ARP (Address Resolution Protocol) used for in Ethernet networks?",
    optionA: "Resolving IP addresses to physical MAC addresses on a local network segment",
    optionB: "Mapping domain names to IP addresses",
    optionC: "Encrypting wireless Wi-Fi signals",
    optionD: "Assigning IP addresses dynamically to host computers",
    correctOption: "A",
    topicTag: "Computer Networks"
  },
  {
    questionText: "In DBMS, what is Phantom Read?",
    optionA: "When a transaction re-runs a query reading a set of rows and finds new rows added by another committed transaction",
    optionB: "Reading data from a deleted table",
    optionC: "Querying database without index",
    optionD: "Failure of primary key constraint",
    correctOption: "A",
    topicTag: "DBMS"
  },
  {
    questionText: "What is Spooling (Simultaneous Peripheral Operations On-Line) in OS?",
    optionA: "Buffering data for asynchronous processing by slow I/O devices (e.g., printer spooling queue)",
    optionB: "Running 2 web browsers at the same time",
    optionC: "Formatting a USB flash drive",
    optionD: "Compiling C++ programs",
    correctOption: "A",
    topicTag: "Operating Systems"
  }
];

// -------------------------------------------------------------
// Test 5: Aptitude Mock Test (Quant, Logical, Verbal)
// -------------------------------------------------------------
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
    correctOption: "B", // 1/(1/10 + 1/15) = 6 days
    topicTag: "Quant"
  },
  {
    questionText: "An article is sold for $240 at a gain of 20%. What was the cost price of the article?",
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
    correctOption: "C", // 25, 26, 27, 28, 29 -> Max = 29
    topicTag: "Quant"
  },
  {
    questionText: "Two numbers are in the ratio 3 : 5. If their HCF is 8, what is their LCM?",
    optionA: "40",
    optionB: "80",
    optionC: "120",
    optionD: "160",
    correctOption: "C", // LCM = 3 * 5 * 8 = 120
    topicTag: "Quant"
  },
  {
    questionText: "In how many different ways can the letters of the word 'LEADER' be arranged?",
    optionA: "360",
    optionB: "720",
    optionC: "144",
    optionD: "180",
    correctOption: "A", // 6! / 2! = 360
    topicTag: "Quant"
  },
  {
    questionText: "What is the probability of getting a sum of 7 when two unbiased dice are thrown simultaneously?",
    optionA: "1/4",
    optionB: "1/6",
    optionC: "5/36",
    optionD: "1/12",
    correctOption: "B", // 6/36 = 1/6
    topicTag: "Quant"
  },
  {
    questionText: "A sum of money doubles itself in 5 years at simple interest. What is the rate of interest per annum?",
    optionA: "10%",
    optionB: "15%",
    optionC: "20%",
    optionD: "25%",
    correctOption: "C", // 100/5 = 20%
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
    correctOption: "B", // (1.5)^2 - 1 = 125%
    topicTag: "Quant"
  },

  // Logical Reasoning (Questions 11 - 20)
  {
    questionText: "Complete the series: 3, 7, 15, 31, 63, ?",
    optionA: "95",
    optionB: "115",
    optionC: "127",
    optionD: "129",
    correctOption: "C", // 63 * 2 + 1 = 127
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
    correctOption: "B",
    topicTag: "Logical"
  },
  {
    questionText: "Which word does NOT belong with the others?",
    optionA: "Leopard",
    optionB: "Cougar",
    optionC: "Elephant",
    optionD: "Jaguar",
    correctOption: "C",
    topicTag: "Logical"
  },
  {
    questionText: "Statements: All cats are animals. All animals are mammals. Conclusion: (I) All cats are mammals. (II) Some mammals are cats.",
    optionA: "Only I follows",
    optionB: "Only II follows",
    optionC: "Both I and II follow",
    optionD: "Neither I nor II follows",
    correctOption: "C",
    topicTag: "Logical"
  },
  {
    questionText: "If South-East becomes North, North-East becomes West and so on, what will West become?",
    optionA: "North-East",
    optionB: "South-East",
    optionC: "North-West",
    optionD: "South-West",
    correctOption: "B",
    topicTag: "Logical"
  },
  {
    questionText: "Find the odd one out: 8, 27, 64, 100, 125, 216",
    optionA: "27",
    optionB: "64",
    optionC: "100",
    optionD: "125",
    correctOption: "C",
    topicTag: "Logical"
  },
  {
    questionText: "In a row of students, Rahul is 10th from the left and 15th from the right. How many total students are in the row?",
    optionA: "24",
    optionB: "25",
    optionC: "26",
    optionD: "27",
    correctOption: "A", // 10 + 15 - 1 = 24
    topicTag: "Logical"
  },
  {
    questionText: "If '+' means multiply, '-' means divide, '*' means add, and '/' means subtract, calculate: 12 + 4 - 2 * 6 / 3",
    optionA: "27",
    optionB: "30",
    optionC: "21",
    optionD: "18",
    correctOption: "A", // 12 * 4 / 2 + 6 - 3 = 27
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
    correctOption: "B",
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

// -------------------------------------------------------------
// Test 6: Advanced Placement Aptitude Mock Test II
// -------------------------------------------------------------
const aptitudeAdvancedQuestions = [
  // Quantitative (Questions 1 - 10)
  {
    questionText: "In a committee of 8 people, in how many ways can a Chairman and a Vice-Chairman be selected assuming one person cannot hold both posts?",
    optionA: "56",
    optionB: "64",
    optionC: "28",
    optionD: "16",
    correctOption: "A", // 8 * 7 = 56
    topicTag: "Advanced Quant"
  },
  {
    questionText: "Two cards are drawn at random from a pack of 52 cards without replacement. What is the probability that both are Aces?",
    optionA: "1/221",
    optionB: "1/169",
    optionC: "1/26",
    optionD: "4/663",
    correctOption: "A", // (4/52) * (3/51) = (1/13) * (1/17) = 1/221
    topicTag: "Advanced Quant"
  },
  {
    questionText: "A and B start walking from the same point in opposite directions at speeds of 4 km/hr and 6 km/hr respectively. After how many hours will they be 25 km apart?",
    optionA: "2.5 hours",
    optionB: "3 hours",
    optionC: "3.5 hours",
    optionD: "4 hours",
    correctOption: "A", // Relative speed = 10 km/h -> 25/10 = 2.5 hours
    topicTag: "Advanced Quant"
  },
  {
    questionText: "The difference between Compound Interest and Simple Interest on a sum at 10% per annum for 2 years is $40. Find the principal sum:",
    optionA: "$4,000",
    optionB: "$3,500",
    optionC: "$4,500",
    optionD: "$5,000",
    correctOption: "A", // CI - SI = P(r/100)^2 -> 40 = P(1/100) -> P = $4,000
    topicTag: "Advanced Quant"
  },
  {
    questionText: "In what ratio must water be mixed with milk costing $12 per liter to obtain a mixture worth $8 per liter?",
    optionA: "1 : 2",
    optionB: "2 : 1",
    optionC: "1 : 3",
    optionD: "3 : 1",
    correctOption: "A", // Allegation: (12 - 8) : (8 - 0) = 4 : 8 = 1 : 2 (Water : Milk)
    topicTag: "Advanced Quant"
  },
  {
    questionText: "At what angle are the hands of a clock inclined at 3 hours and 30 minutes?",
    optionA: "75 degrees",
    optionB: "80 degrees",
    optionC: "85 degrees",
    optionD: "90 degrees",
    correctOption: "A", // |30*3 - 5.5*30| = |90 - 165| = 75 degrees
    topicTag: "Advanced Quant"
  },
  {
    questionText: "If 1st January 2024 was a Monday, what day of the week will 1st January 2025 be? (Note: 2024 is a Leap Year)",
    optionA: "Wednesday",
    optionB: "Tuesday",
    optionC: "Thursday",
    optionD: "Monday",
    correctOption: "A", // Leap year has 2 odd days -> Monday + 2 = Wednesday
    topicTag: "Advanced Quant"
  },
  {
    questionText: "The present ages of three persons are in the ratio 4 : 7 : 9. Eight years ago, the sum of their ages was 56. Find their present ages:",
    optionA: "16, 28, 36",
    optionB: "20, 35, 45",
    optionC: "12, 21, 27",
    optionD: "24, 42, 54",
    correctOption: "A", // Sum now = 56 + 24 = 80. 4x + 7x + 9x = 20x = 80 -> x=4. Ages: 16, 28, 36.
    topicTag: "Advanced Quant"
  },
  {
    questionText: "A trader marks his goods 20% above the cost price and allows a discount of 10% on the marked price. Find his net profit percentage:",
    optionA: "8%",
    optionB: "10%",
    optionC: "12%",
    optionD: "15%",
    correctOption: "A", // 1.20 * 0.90 = 1.08 -> 8% profit
    topicTag: "Advanced Quant"
  },
  {
    questionText: "A boat goes 12 km downstream in 48 minutes. If the speed of the current is 3 km/hr, what is the speed of the boat in still water?",
    optionA: "12 km/hr",
    optionB: "15 km/hr",
    optionC: "18 km/hr",
    optionD: "10 km/hr",
    correctOption: "A", // Downstream speed = 12 / (48/60) = 15 km/h. Speed in still water = 15 - 3 = 12 km/h
    topicTag: "Advanced Quant"
  },

  // Logical Reasoning (Questions 11 - 20)
  {
    questionText: "Eight friends A, B, C, D, E, F, G, H are sitting around a circular table facing the center. A is third to the left of B. C is second to the right of A. Who is sitting directly opposite to A if E is adjacent to B and C?",
    optionA: "E or F",
    optionB: "D",
    optionC: "G",
    optionD: "H",
    correctOption: "A",
    topicTag: "Advanced Logical"
  },
  {
    questionText: "If 'A + B' means A is the brother of B; 'A - B' means A is the sister of B; 'A * B' means A is the father of B, which expression shows that P is the uncle of Q?",
    optionA: "P + R * Q",
    optionB: "P - R * Q",
    optionC: "P * R + Q",
    optionD: "P + Q * R",
    correctOption: "A", // P is brother of R, R is father of Q -> P is uncle of Q
    topicTag: "Advanced Logical"
  },
  {
    questionText: "Statements: Some doctors are teachers. All teachers are counselors. Conclusions: (I) Some doctors are counselors. (II) Some counselors are teachers.",
    optionA: "Both I and II follow",
    optionB: "Only I follows",
    optionC: "Only II follows",
    optionD: "Neither I nor II follows",
    correctOption: "A",
    topicTag: "Advanced Logical"
  },
  {
    questionText: "A cube of side 4 cm is painted red on all 6 faces and then cut into smaller 1 cm cubes. How many small cubes have EXACTLY 2 faces painted?",
    optionA: "24",
    optionB: "16",
    optionC: "8",
    optionD: "32",
    correctOption: "A", // Formula: 12 * (n - 2) = 12 * (4 - 2) = 24
    topicTag: "Advanced Logical"
  },
  {
    questionText: "A person starts walking North, turns right after 5km, walks 3km, turns right again and walks 9km. How far and in which direction is he from the starting point?",
    optionA: "5 km, South-East",
    optionB: "5 km, North-East",
    optionC: "7 km, South-West",
    optionD: "4 km, South",
    correctOption: "A", // Net North = 5 - 9 = -4 (4km South), East = 3km. Distance = sqrt(3^2 + 4^2) = 5km South-East
    topicTag: "Advanced Logical"
  },
  {
    questionText: "Statement: 'The government should initiate free skill training programs for rural youth to curb unemployment.' Assumption I: Rural youth are willing to undergo training. Assumption II: Unemployment is a pressing rural issue.",
    optionA: "Both Assumptions I and II are implicit",
    optionB: "Only Assumption I is implicit",
    optionC: "Only Assumption II is implicit",
    optionD: "Neither I nor II is implicit",
    correctOption: "A",
    topicTag: "Advanced Logical"
  },
  {
    questionText: "Complete the series: ZW1, YV2, XU4, WT8, ?",
    optionA: "VS16",
    optionB: "VS12",
    optionC: "UR16",
    optionD: "VT16",
    correctOption: "A", // Z->Y->X->W->V; W->V->U->T->S; 1->2->4->8->16
    topicTag: "Advanced Logical"
  },
  {
    questionText: "In a certain code, 'LIGHT' is written as 'MJHIU'. How is 'FLAME' written in that code?",
    optionA: "GMBNF",
    optionB: "GMBNF",
    optionC: "GMCNF",
    optionD: "GLBNF",
    correctOption: "A", // +1 to each character: F->G, L->M, A->B, M->N, E->F
    topicTag: "Advanced Logical"
  },
  {
    questionText: "If it was a Sunday on 1st January 2006, what was the day of the week on 1st January 2010?",
    optionA: "Friday",
    optionB: "Thursday",
    optionC: "Saturday",
    optionD: "Sunday",
    correctOption: "A", // 2006(1), 2007(1), 2008(2 leap), 2009(1) = 5 odd days -> Sunday + 5 = Friday
    topicTag: "Advanced Logical"
  },
  {
    questionText: "Five children are participating in a tournament. Each child plays with every other child once. How many total games will be played?",
    optionA: "10",
    optionB: "15",
    optionC: "20",
    optionD: "25",
    correctOption: "A", // 5C2 = (5 * 4) / 2 = 10
    topicTag: "Advanced Logical"
  },

  // Verbal Ability (Questions 21 - 30)
  {
    questionText: "Choose the word most nearly SYNONYMOUS with 'TACITURN':",
    optionA: "Reserved / Reticent",
    optionB: "Loquacious",
    optionC: "Garrulous",
    optionD: "Talkative",
    correctOption: "A",
    topicTag: "Advanced Verbal"
  },
  {
    questionText: "Choose the word most nearly OPPOSITE in meaning to 'SYCOPHANT':",
    optionA: "Outspoken / Independent critic",
    optionB: "Flatterer",
    optionC: "Parasite",
    optionD: "Admirer",
    correctOption: "A",
    topicTag: "Advanced Verbal"
  },
  {
    questionText: "Rearrange the jumbled sentences: (P) which is essential for innovation (Q) curiosity drives learning (R) and problem solving (S) in modern software engineering.",
    optionA: "QPRS",
    optionB: "PQRS",
    optionC: "RSPQ",
    optionD: "SQPR",
    correctOption: "A", // Curiosity drives learning (Q), which is essential for innovation (P), and problem solving (R), in modern software engineering (S).
    topicTag: "Advanced Verbal"
  },
  {
    questionText: "What does the Latin phrase 'Status Quo' mean?",
    optionA: "The existing state of affairs",
    optionB: "A sudden unexpected change",
    optionC: "Without prior notice",
    optionD: "A formal written document",
    correctOption: "A",
    topicTag: "Advanced Verbal"
  },
  {
    questionText: "Select the sentence with the correct Subject-Verb Agreement:",
    optionA: "The committee has submitted its final recommendation report to the board.",
    optionB: "The committee have submitted its final recommendation report to the board.",
    optionC: "The committee were submitting their final recommendation report to the board.",
    optionD: "The committee are submitting its final recommendation report to the board.",
    correctOption: "A",
    topicTag: "Advanced Verbal"
  },
  {
    questionText: "Choose the correct idiom: After hours of futile debate, the team decided to call it a day and _____.",
    optionA: "hit the sack",
    optionB: "burn bridges",
    optionC: "kick the bucket",
    optionD: "bark up the wrong tree",
    correctOption: "A",
    topicTag: "Advanced Verbal"
  },
  {
    questionText: "Find the correctly spelled word:",
    optionA: "Entrepreneur",
    optionB: "Entreprenuer",
    optionC: "Enterpreneur",
    optionD: "Entreprenur",
    correctOption: "A",
    topicTag: "Advanced Verbal"
  },
  {
    questionText: "Identify the figure of speech in the sentence: 'The wind whispered soft secrets through the weeping willow trees.'",
    optionA: "Personification",
    optionB: "Metaphor",
    optionC: "Simile",
    optionD: "Hyperbole",
    correctOption: "A",
    topicTag: "Advanced Verbal"
  },
  {
    questionText: "Complete the analogy: Architect : Blueprint :: Sculptor : ?",
    optionA: "Maquette / Model",
    optionB: "Chisel",
    optionC: "Marble",
    optionD: "Painting",
    correctOption: "A",
    topicTag: "Advanced Verbal"
  },
  {
    questionText: "Select the correct indirect speech form: He said, 'I will complete the assignment tomorrow.'",
    optionA: "He said that he would complete the assignment the next day.",
    optionB: "He said that I will complete the assignment tomorrow.",
    optionC: "He said that he will complete the assignment the following day.",
    optionD: "He said that he complete the assignment tomorrow.",
    correctOption: "A",
    topicTag: "Advanced Verbal"
  }
];

// -------------------------------------------------------------
// Test 7: Aptitude Mock Test 3 (Data Interpretation & Spatial Reasoning)
// -------------------------------------------------------------
const aptitudeDataInterpQuestions = [
  // Quant & Pipes/Time/Distance (Questions 1 - 10)
  {
    questionText: "Pipe A can fill a tank in 12 minutes, Pipe B in 15 minutes, and Pipe C can empty it in 20 minutes. If all three pipes are opened together, how long will it take to fill the tank?",
    optionA: "8 minutes",
    optionB: "10 minutes",
    optionC: "12 minutes",
    optionD: "15 minutes",
    correctOption: "B",
    topicTag: "Quantitative Aptitude",
    explanation: "Net filling rate per minute = 1/12 + 1/15 - 1/20 = (5 + 4 - 3)/60 = 6/60 = 1/10. Therefore, the tank gets completely filled in 10 minutes."
  },
  {
    questionText: "Two trains of lengths 140 meters and 160 meters are running in opposite directions on parallel tracks at speeds of 60 km/h and 48 km/h respectively. How many seconds will they take to cross each other completely?",
    optionA: "8 seconds",
    optionB: "10 seconds",
    optionC: "12 seconds",
    optionD: "14 seconds",
    correctOption: "B",
    topicTag: "Quantitative Aptitude",
    explanation: "Relative speed in opposite directions = 60 + 48 = 108 km/h = 108 * (5/18) = 30 m/s. Total distance to cover = 140m + 160m = 300m. Time taken = 300 / 30 = 10 seconds."
  },
  {
    questionText: "A trader offers a double successive discount of 20% and 10% on an item priced at $500. What is the final selling price after both discounts?",
    optionA: "$350",
    optionB: "$360",
    optionC: "$370",
    optionD: "$380",
    correctOption: "B",
    topicTag: "Quantitative Aptitude",
    explanation: "After first 20% discount: $500 * (1 - 0.20) = $400. After second 10% discount: $400 * (1 - 0.10) = $360."
  },
  {
    questionText: "Calculate the Compound Interest accrued on $10,000 for 2 years at an interest rate of 8% per annum compounded annually:",
    optionA: "$1,600",
    optionB: "$1,664",
    optionC: "$1,680",
    optionD: "$1,728",
    correctOption: "B",
    topicTag: "Quantitative Aptitude",
    explanation: "Amount A = P(1 + r/100)^n = 10000 * (1.08)^2 = 10000 * 1.1664 = $11,664. Compound Interest CI = $11,664 - $10,000 = $1,664."
  },
  {
    questionText: "The average age of a class of 30 students is 15 years. When the teacher's age is included, the average age of the group increases by 1 year. What is the age of the teacher?",
    optionA: "42 years",
    optionB: "46 years",
    optionC: "48 years",
    optionD: "50 years",
    correctOption: "B",
    topicTag: "Quantitative Aptitude",
    explanation: "Total age of 30 students = 30 * 15 = 450 years. Total age of 31 people (students + teacher) = 31 * 16 = 496 years. Teacher's age = 496 - 450 = 46 years."
  },
  {
    questionText: "A sum of $1,050 is divided among A, B, and C such that A's share is 2/3 of the combined share of B and C. What is A's share?",
    optionA: "$350",
    optionB: "$420",
    optionC: "$450",
    optionD: "$630",
    correctOption: "B",
    topicTag: "Quantitative Aptitude",
    explanation: "Let A's share be 2x and (B+C)'s share be 3x. Total sum = 5x = $1,050 => x = 210. A's share = 2 * 210 = $420."
  },
  {
    questionText: "Find the remainder when 2^31 is divided by 5:",
    optionA: "1",
    optionB: "2",
    optionC: "3",
    optionD: "4",
    correctOption: "C",
    topicTag: "Number System",
    explanation: "2^4 ≡ 1 (mod 5). Thus 2^31 = (2^4)^7 * 2^3 ≡ (1)^7 * 8 ≡ 8 ≡ 3 (mod 5). Remainder is 3."
  },
  {
    questionText: "12 men or 18 women can finish a construction project in 14 days. How many days will 8 men and 16 women take to finish the same work?",
    optionA: "7 days",
    optionB: "9 days",
    optionC: "10 days",
    optionD: "12 days",
    correctOption: "B",
    topicTag: "Time & Work",
    explanation: "12 Men = 18 Women => 1 Man = 1.5 Women. Thus (8 Men + 16 Women) = 8(1.5) + 16 = 28 Women. Since 18 Women take 14 days, 28 Women will take (18 * 14) / 28 = 9 days."
  },
  {
    questionText: "What is the exact square root of the integer 5,476?",
    optionA: "72",
    optionB: "74",
    optionC: "76",
    optionD: "78",
    correctOption: "B",
    topicTag: "Speed Math",
    explanation: "70^2 = 4900 and 80^2 = 6400. Since 5,476 ends in 6 and lies between 4900 and 6400, checking 74: 74 * 74 = 5,476."
  },
  {
    questionText: "If the price of sugar increases by 25%, by what percentage must a household reduce its consumption so that total expenditure on sugar remains unchanged?",
    optionA: "15%",
    optionB: "20%",
    optionC: "22.5%",
    optionD: "25%",
    correctOption: "B",
    topicTag: "Quantitative Aptitude",
    explanation: "Percentage reduction formula = [R / (100 + R)] * 100 = (25 / 125) * 100 = (1/5) * 100 = 20%."
  },

  // Data Interpretation & Graphs (Questions 11 - 13)
  {
    questionText: "In a company's annual budget allocation, 30% is spent on Rent, 25% on Food, 20% on Savings, 15% on Salaries, and 10% on Miscellaneous. If the amount saved is $4,000, what is the expenditure on Rent?",
    optionA: "$5,000",
    optionB: "$6,000",
    optionC: "$7,500",
    optionD: "$8,000",
    correctOption: "B",
    topicTag: "Data Interpretation",
    explanation: "20% of total budget = $4,000 => 1% of budget = $200. Rent allocation = 30% => 30 * $200 = $6,000."
  },
  {
    questionText: "Company Alpha's revenue grew from $50 Million in 2022 to $75 Million in 2024. What was the overall percentage growth in revenue over these two years?",
    optionA: "33.33%",
    optionB: "50.00%",
    optionC: "60.00%",
    optionD: "75.00%",
    correctOption: "B",
    topicTag: "Data Interpretation",
    explanation: "Percentage Growth = [(New Value - Old Value) / Old Value] * 100 = [(75 - 50) / 50] * 100 = (25 / 50) * 100 = 50%."
  },
  {
    questionText: "A bar graph shows annual laptop sales: Brand X = 120,000 units, Brand Y = 180,000 units. What is the simplified ratio of Brand X sales to Brand Y sales?",
    optionA: "2 : 3",
    optionB: "3 : 4",
    optionC: "3 : 2",
    optionD: "4 : 5",
    correctOption: "A",
    topicTag: "Data Interpretation",
    explanation: "Ratio = 120,000 : 180,000. Dividing both terms by 60,000 yields 2 : 3."
  },

  // Logical Reasoning & Puzzles (Questions 14 - 20)
  {
    questionText: "In a certain substitution code, 'COMPUTER' is written as 'RFUVQNPC'. Following the exact same pattern, how will 'MEDICINE' be written?",
    optionA: "EOJDJEFM",
    optionB: "EOJDEJFM",
    optionC: "MFEJDJOE",
    optionD: "MFEJDJEF",
    correctOption: "A",
    topicTag: "Logical Reasoning",
    explanation: "Pattern: Reverse the word and increment all intermediate characters by +1 while retaining the first and last position offsets. MEDICINE becomes EOJDJEFM."
  },
  {
    questionText: "A person facing SOUTH turns 135 degrees anti-clockwise and then turns 180 degrees clockwise. Which direction is he facing now?",
    optionA: "North-East",
    optionB: "North-West",
    optionC: "South-East",
    optionD: "South-West",
    correctOption: "B",
    topicTag: "Direction Sense",
    explanation: "Initial direction: South. Turning 135° anti-clockwise points to South-East. Turning 180° from South-East points directly opposite to North-West."
  },
  {
    questionText: "Pointing to a woman in a photo, Vikram says: 'Her mother's husband's sister is my aunt.' How is the woman in the photo related to Vikram?",
    optionA: "Sister (or Cousin)",
    optionB: "Mother",
    optionC: "Niece",
    optionD: "Daughter",
    correctOption: "A",
    topicTag: "Blood Relations",
    explanation: "Woman's mother's husband = Woman's father. Father's sister = Woman's aunt. Since Vikram shares the same aunt, the woman is Vikram's sister (or cousin)."
  },
  {
    questionText: "Identify the next number in the mathematical series: 4, 18, 48, 100, 180, ?",
    optionA: "240",
    optionB: "270",
    optionC: "294",
    optionD: "316",
    correctOption: "C",
    topicTag: "Logical Reasoning",
    explanation: "Series follows the formula T(n) = n^3 - n^2 starting from n=2: 2^3-4=4, 3^3-9=18, 4^3-16=48, 5^3-25=100, 6^3-36=180. For n=7: 7^3 - 49 = 343 - 49 = 294."
  },
  {
    questionText: "On what day of the week did India gain Independence on 15th August 1947?",
    optionA: "Thursday",
    optionB: "Friday",
    optionC: "Saturday",
    optionD: "Sunday",
    correctOption: "B",
    topicTag: "Clocks & Calendars",
    explanation: "Calculating odd days up to 15th August 1947 yields 5 odd days (0=Sunday, 1=Mon, 2=Tue, 3=Wed, 4=Thu, 5=Friday). Hence, 15th Aug 1947 was a Friday."
  },
  {
    questionText: "Two positions of a single standard dice are shown. If face 3 is at the bottom, which number will be on the top face?",
    optionA: "2",
    optionB: "4",
    optionC: "5",
    optionD: "6",
    correctOption: "B",
    topicTag: "Cube & Dice",
    explanation: "On a standard dice, the sum of opposite faces is always equal to 7. Therefore, opposite of 3 is 7 - 3 = 4."
  },
  {
    questionText: "Six friends A, B, C, D, E, F are sitting in a row facing North. C is sitting between A and E. D is not at any end and is sitting second to the right of F. Who is sitting at the extreme right end?",
    optionA: "B",
    optionB: "D",
    optionC: "E",
    optionD: "F",
    correctOption: "A",
    topicTag: "Seating Arrangement",
    explanation: "Satisfying all linear conditions places the 6 friends in order from left to right as: F - C - A - E - D - B. Thus, B is at the extreme right end."
  },

  // English Verbal & Grammar (Questions 21 - 28)
  {
    questionText: "Choose the word most nearly SYNONYMOUS with 'PARSIMONIOUS':",
    optionA: "Generous",
    optionB: "Frugal / Stingy",
    optionC: "Extravagant",
    optionD: "Sympathetic",
    correctOption: "B",
    topicTag: "Verbal Ability",
    explanation: "'Parsimonious' means extremely frugal, unwilling to spend money, or stingy. 'Frugal / Stingy' is the closest synonym."
  },
  {
    questionText: "Choose the word most nearly OPPOSITE (Antonym) in meaning to 'GREGARIOUS':",
    optionA: "Sociable",
    optionB: "Friendly",
    optionC: "Reclusive / Solitary",
    optionD: "Outgoing",
    correctOption: "C",
    topicTag: "Verbal Ability",
    explanation: "'Gregarious' describes someone who is fond of company and sociable. Its antonym is 'Reclusive / Solitary'."
  },
  {
    questionText: "Identify the correct grammatical sentence correction for: 'Each of the boys have completed their homework assignment.'",
    optionA: "Each of the boys have completed his homework assignment.",
    optionB: "Each of the boys has completed his homework assignment.",
    optionC: "Each of the boys have completed their homeworks.",
    optionD: "Each of the boys has completed their homework.",
    correctOption: "B",
    topicTag: "Verbal Ability",
    explanation: "'Each' is a singular indefinite pronoun requiring a singular verb ('has') and singular possessive pronoun ('his')."
  },
  {
    questionText: "What is the true meaning of the idiom 'To spill the beans'?",
    optionA: "To drop food accidentally",
    optionB: "To reveal secret information prematurely",
    optionC: "To waste financial resources",
    optionD: "To cook a lavish meal",
    correctOption: "B",
    topicTag: "Verbal Ability",
    explanation: "'To spill the beans' means to disclose confidential or secret information, often unintentionally or prematurely."
  },
  {
    questionText: "Choose the exact 'One-Word Substitution' for: 'A person who hates or distrusts all of mankind':",
    optionA: "Philanthropist",
    optionB: "Misanthrope",
    optionC: "Misogynist",
    optionD: "Optimist",
    correctOption: "B",
    topicTag: "Verbal Ability",
    explanation: "A 'Misanthrope' is a person who dislikes humankind and avoids human society."
  },
  {
    questionText: "Fill in the blank with the most appropriate word: 'The CEO's _____ decision to cancel bonuses without explanation angered the workforce.'",
    optionA: "arbitrary",
    optionB: "benevolent",
    optionC: "judicious",
    optionD: "harmonious",
    correctOption: "A",
    topicTag: "Verbal Ability",
    explanation: "'Arbitrary' means based on random choice or personal whim rather than reason or system, fitting the negative context."
  },
  {
    questionText: "Rearrange the jumbled sentence parts into a meaningful order: (P) environmental conservation (Q) is imperative (R) for the survival (S) of future generations.",
    optionA: "PQRS",
    optionB: "QPRS",
    optionC: "RSPQ",
    optionD: "SQPR",
    correctOption: "A",
    topicTag: "Verbal Ability",
    explanation: "The coherent sentence order is P-Q-R-S: 'Environmental conservation (P) is imperative (Q) for the survival (R) of future generations (S).'"
  },
  {
    questionText: "Select the sentence with the correct usage of the homophones 'Affect' vs 'Effect':",
    optionA: "The new policy will have a positive effect on company productivity.",
    optionB: "The new policy will have a positive affect on company productivity.",
    optionC: "The weather does not effect my mood.",
    optionD: "His speech had a deep affect on the audience.",
    correctOption: "A",
    topicTag: "Verbal Ability",
    explanation: "'Effect' is used as a noun meaning a result or outcome ('have a positive effect'). 'Affect' is typically used as a verb."
  },

  // Spatial & Speed Math (Questions 29 - 30)
  {
    questionText: "Evaluate the speed math approximation: 49.99% of 640.01 + 29.98% of 799.92 = ?",
    optionA: "520",
    optionB: "560",
    optionC: "580",
    optionD: "600",
    correctOption: "B",
    topicTag: "Speed Math",
    explanation: "Approximate: (50% of 640) + (30% of 800) = 320 + 240 = 560."
  },
  {
    questionText: "In Spatial Pattern Reasoning, if a 2D square sheet is folded into a 3D cube, how many total vertices (corners) does the resulting cube possess?",
    optionA: "6 vertices",
    optionB: "8 vertices",
    optionC: "12 vertices",
    optionD: "16 vertices",
    correctOption: "B",
    topicTag: "Spatial Reasoning",
    explanation: "A standard 3D cube has 6 faces, 12 edges, and exactly 8 corner vertices."
  }
];

// -------------------------------------------------------------
// Test 8: Aptitude Mock Test 4 (Business Analytics & Advanced Placement Reasoning)
// -------------------------------------------------------------
const aptitudeAnalyticsQuestions = [
  // Permutations, Combinations & Probability (Questions 1 - 5)
  {
    questionText: "In how many different ways can 5 boys and 4 girls be seated in a straight row such that all 4 girls ALWAYS sit together?",
    optionA: "2,880",
    optionB: "14,400",
    optionC: "17,280",
    optionD: "40,320",
    correctOption: "C",
    topicTag: "Permutations & Combinations",
    explanation: "Treat the 4 girls as a single entity. Now we arrange 5 boys + 1 girl entity = 6 units in 6! = 720 ways. The 4 girls can be arranged among themselves in 4! = 24 ways. Total ways = 720 * 24 = 17,280."
  },
  {
    questionText: "Three unbiased coins are tossed simultaneously. What is the probability of getting AT LEAST 2 heads?",
    optionA: "1/4",
    optionB: "3/8",
    optionC: "1/2",
    optionD: "5/8",
    correctOption: "C",
    topicTag: "Probability",
    explanation: "Total possible outcomes = 2^3 = 8. Outcomes with at least 2 heads: {HHH, HHT, HTH, THH} = 4 outcomes. Probability = 4 / 8 = 1/2."
  },
  {
    questionText: "Find the roots of the quadratic equation: 2x^2 - 7x + 6 = 0",
    optionA: "x = 2 and x = 3/2",
    optionB: "x = -2 and x = -3/2",
    optionC: "x = 3 and x = 1",
    optionD: "x = 4 and x = 1/2",
    correctOption: "A",
    topicTag: "Algebra",
    explanation: "Factorizing 2x^2 - 7x + 6 = 0 gives 2x^2 - 4x - 3x + 6 = 0 => 2x(x - 2) - 3(x - 2) = 0 => (2x - 3)(x - 2) = 0. Therefore, x = 2 and x = 3/2."
  },
  {
    questionText: "If the length of a rectangle is increased by 20% and its breadth is decreased by 10%, what is the net percentage change in its area?",
    optionA: "6% increase",
    optionB: "8% increase",
    optionC: "10% increase",
    optionD: "12% increase",
    correctOption: "B",
    topicTag: "Mensuration",
    explanation: "Net percentage change formula = A + B + (AB/100) = 20 + (-10) + [(20 * -10)/100] = 10 - 2 = +8% (an 8% increase)."
  },
  {
    questionText: "Simplify the radical expression: (81)^(3/4)",
    optionA: "9",
    optionB: "18",
    optionC: "27",
    optionD: "54",
    correctOption: "C",
    topicTag: "Surds & Indices",
    explanation: "81 can be written as 3^4. Therefore, (3^4)^(3/4) = 3^(4 * 3/4) = 3^3 = 27."
  },

  // Business Analytics & Mixtures (Questions 6 - 10)
  {
    questionText: "A and B start a business investing $5,000 and $6,000 respectively. After 6 months, C joins them with an investment of $8,000. In what ratio should the annual profit be distributed among A, B, and C?",
    optionA: "5 : 6 : 4",
    optionB: "5 : 6 : 8",
    optionC: "10 : 12 : 9",
    optionD: "5 : 6 : 6",
    correctOption: "A",
    topicTag: "Partnership & Business",
    explanation: "Capital-Month products: A = 5000 * 12 = 60,000; B = 6000 * 12 = 72,000; C = 8000 * 6 = 48,000. Ratio A:B:C = 60:72:48 = 5 : 6 : 4."
  },
  {
    questionText: "A jar contains a mixture of milk and water in the ratio 7 : 5. When 9 liters of mixture are drawn off and replaced with water, the ratio becomes 7 : 9. How many liters of milk were initially in the jar?",
    optionA: "18 liters",
    optionB: "21 liters",
    optionC: "24 liters",
    optionD: "28 liters",
    correctOption: "B",
    topicTag: "Allegation & Mixture",
    explanation: "Let initial quantity be 12x (Milk = 7x, Water = 5x). After drawing 9L and adding 9L water: (7x - 7/12*9)/(5x - 5/12*9 + 9) = 7/9 => x = 3. Initial milk = 7 * 3 = 21 liters."
  },
  {
    questionText: "A boat's speed in still water is 15 km/h and the speed of the river current is 3 km/h. What is the total time taken by the boat to travel 36 km downstream AND 24 km upstream?",
    optionA: "3 hours",
    optionB: "4 hours",
    optionC: "5 hours",
    optionD: "6 hours",
    correctOption: "B",
    topicTag: "Boats & Streams",
    explanation: "Downstream speed = 15 + 3 = 18 km/h => Time = 36 / 18 = 2 hours. Upstream speed = 15 - 3 = 12 km/h => Time = 24 / 12 = 2 hours. Total time = 4 hours."
  },
  {
    questionText: "Evaluate the logarithmic expression: log2(64) + log3(27)",
    optionA: "7",
    optionB: "8",
    optionC: "9",
    optionD: "10",
    correctOption: "C",
    topicTag: "Algebra",
    explanation: "log2(64) = log2(2^6) = 6. log3(27) = log3(3^3) = 3. Sum = 6 + 3 = 9."
  },
  {
    questionText: "In a survey of 100 students, 60 play Cricket, 50 play Football, and 20 play both sports. How many students play NEITHER sport?",
    optionA: "5 students",
    optionB: "10 students",
    optionC: "15 students",
    optionD: "20 students",
    correctOption: "B",
    topicTag: "Set Theory",
    explanation: "Students playing at least one sport = N(C ∪ F) = N(C) + N(F) - N(C ∩ F) = 60 + 50 - 20 = 90. Students playing neither = 100 - 90 = 10 students."
  },

  // Logical Reasoning & Data Sufficiency (Questions 11 - 20)
  {
    questionText: "Data Sufficiency: Is integer X an odd number?\nStatement I: (X + 1) is an even integer.\nStatement II: (X^2) is an odd integer.",
    optionA: "Statement I alone is sufficient, but Statement II alone is not",
    optionB: "Statement II alone is sufficient, but Statement I alone is not",
    optionC: "EITHER Statement I alone OR Statement II alone is sufficient",
    optionD: "BOTH Statements I and II together are necessary",
    correctOption: "C",
    topicTag: "Data Sufficiency",
    explanation: "From St I: If X+1 is even, X must be odd (Sufficient). From St II: If X^2 is odd, X must be odd (Sufficient). Therefore, either statement alone is sufficient."
  },
  {
    questionText: "Statement: 'Should single-use plastic bags be completely banned across the country?'\nArgument I: Yes, they cause catastrophic environmental pollution and drain blockage.\nArgument II: No, they are extremely cheap and convenient for consumers.",
    optionA: "Only Argument I is strong",
    optionB: "Only Argument II is strong",
    optionC: "Both Arguments I and II are strong",
    optionD: "Neither Argument I nor II is strong",
    correctOption: "A",
    topicTag: "Critical Logic",
    explanation: "Argument I addresses severe ecological impact and public welfare (strong). Argument II focuses on minor convenience over major environmental damage (weak)."
  },
  {
    questionText: "If CAT is coded as 24, DOG is coded as 26, what will be the numerical code for PIG?",
    optionA: "28",
    optionB: "30",
    optionC: "32",
    optionD: "34",
    correctOption: "C",
    topicTag: "Coding-Decoding",
    explanation: "Sum of alphabetical positions: C(3)+A(1)+T(20)=24. D(4)+O(15)+G(7)=26. P(16)+I(9)+G(7) = 32."
  },
  {
    questionText: "Find the next alphanumeric term in the series: A1Z, B2Y, C4X, D8W, ?",
    optionA: "E16V",
    optionB: "E12V",
    optionC: "E16U",
    optionD: "F16V",
    correctOption: "A",
    topicTag: "Logical Reasoning",
    explanation: "First letter advances +1 (A, B, C, D, E). Middle number doubles *2 (1, 2, 4, 8, 16). Last letter steps backward -1 (Z, Y, X, W, V). Result: E16V."
  },
  {
    questionText: "Syllogism:\nStatements:\n1. All tables are chairs.\n2. No chair is a couch.\nConclusions:\nI. No table is a couch.\nII. Some chairs are tables.",
    optionA: "Only Conclusion I follows",
    optionB: "Only Conclusion II follows",
    optionC: "Both Conclusions I and II follow",
    optionD: "Neither Conclusion I nor II follows",
    correctOption: "C",
    topicTag: "Syllogisms",
    explanation: "Since all tables are inside chairs and no chair touches couch, no table can touch couch (I follows). Since all tables are chairs, some chairs are definitely tables (II follows)."
  },
  {
    questionText: "In a class ranking list, Swati's rank is 7th from the top and 28th from the bottom. How many total students are in the class?",
    optionA: "33",
    optionB: "34",
    optionC: "35",
    optionD: "36",
    correctOption: "B",
    topicTag: "Ordering & Ranking",
    explanation: "Total students formula = (Rank from Top + Rank from Bottom) - 1 = (7 + 28) - 1 = 34 students."
  },
  {
    questionText: "Find the missing number in the sequence: 2, 6, 12, 20, 30, 42, ?",
    optionA: "50",
    optionB: "54",
    optionC: "56",
    optionD: "60",
    correctOption: "C",
    topicTag: "Logical Reasoning",
    explanation: "Differences between terms increase by 2: +4, +6, +8, +10, +12, +14. Next term = 42 + 14 = 56 (also n^2 + n for n=7: 49 + 7 = 56)."
  },
  {
    questionText: "Determine the Cause and Effect relationship:\nStatement I: The municipal body has temporarily cut off water supply in Sector 4.\nStatement II: A major pipeline burst occurred in Sector 4 early this morning.",
    optionA: "Statement I is the cause and Statement II is its effect",
    optionB: "Statement II is the cause and Statement I is its effect",
    optionC: "Both statements are independent causes",
    optionD: "Both statements are effects of independent causes",
    correctOption: "B",
    topicTag: "Critical Logic",
    explanation: "The major pipeline burst (Statement II) led the municipal body to cut off water supply for repair (Statement I). Thus, Statement II is cause and I is effect."
  },
  {
    questionText: "In a coded matrix, if 'ROSE' is written as '6821' and 'CHAIR' is written as '73456', how is 'SEARCH' written?",
    optionA: "214735",
    optionB: "214573",
    optionC: "214673",
    optionD: "214567",
    correctOption: "C",
    topicTag: "Coding-Decoding",
    explanation: "Direct letter-to-digit mapping: S=2, E=1, A=4, R=6, C=7, H=3. Therefore, SEARCH = 214673."
  },
  {
    questionText: "Complete the analogy: Doctor : Hospital :: Judge : ?",
    optionA: "Lawyer",
    optionB: "Courtroom",
    optionC: "Police Station",
    optionD: "Prison",
    correctOption: "B",
    topicTag: "Verbal Analogies",
    explanation: "A doctor works in a hospital; similarly, a judge presides in a courtroom."
  },

  // Advanced Verbal & Critical Reasoning (Questions 21 - 30)
  {
    questionText: "Select the word most nearly SYNONYMOUS with 'LOQUACIOUS':",
    optionA: "Silent",
    optionB: "Talkative / Voluble",
    optionC: "Timid",
    optionD: "Modest",
    correctOption: "B",
    topicTag: "Verbal Ability",
    explanation: "'Loquacious' means tending to talk a great deal or talkative. 'Talkative / Voluble' is the exact synonym."
  },
  {
    questionText: "Select the word most nearly OPPOSITE (Antonym) in meaning to 'AUDACIOUS':",
    optionA: "Bold",
    optionB: "Daring",
    optionC: "Timid / Fearful",
    optionD: "Reckless",
    correctOption: "C",
    topicTag: "Verbal Ability",
    explanation: "'Audacious' means showing a willingness to take surprisingly bold risks. Its antonym is 'Timid / Fearful'."
  },
  {
    questionText: "Identify the part of the sentence containing a grammatical error: 'She is (A) / senior than (B) / all her colleagues (C) / in the firm. (D)'",
    optionA: "Part A",
    optionB: "Part B",
    optionC: "Part C",
    optionD: "Part D",
    correctOption: "B",
    topicTag: "Verbal Ability",
    explanation: "Adjectives ending in '-ior' (senior, junior, superior, prior) take the preposition 'to', not 'than'. Correction: 'senior to'."
  },
  {
    questionText: "Choose the correct phrase to complete the sentence: 'The board decided to _____ the annual general meeting until next month.'",
    optionA: "postpone / put off",
    optionB: "call out",
    optionC: "bring about",
    optionD: "carry on",
    correctOption: "A",
    topicTag: "Verbal Ability",
    explanation: "'Postpone' or 'put off' means to delay an event to a later date."
  },
  {
    questionText: "Convert the sentence into Passive Voice: 'The lead architect designed the new corporate skyscraper.'",
    optionA: "The new corporate skyscraper is designed by the lead architect.",
    optionB: "The new corporate skyscraper was designed by the lead architect.",
    optionC: "The new corporate skyscraper had been designed by the lead architect.",
    optionD: "The new corporate skyscraper has been designed by the lead architect.",
    correctOption: "B",
    topicTag: "Verbal Ability",
    explanation: "Simple past active ('designed') converts to simple past passive ('was designed by')."
  },
  {
    questionText: "Select the correctly spelled English word:",
    optionA: "Bureaucracy",
    optionB: "Beureaucracy",
    optionC: "Bureacracy",
    optionD: "Bureaucrasy",
    correctOption: "A",
    topicTag: "Verbal Ability",
    explanation: "The correct spelling is 'Bureaucracy'."
  },
  {
    questionText: "Critical Reasoning: 'Company X implemented remote work, leading to a 20% increase in output. Therefore, remote work always increases productivity.' Which statement WEAKENS this argument?",
    optionA: "Company X also invested heavily in new automation tools during the same period",
    optionB: "Employees at Company X reported higher satisfaction",
    optionC: "Other companies have considered remote work",
    optionD: "Remote work reduces office rental expenses",
    correctOption: "A",
    topicTag: "Critical Logic",
    explanation: "Showing an alternative cause (heavy investment in automation tools) weakens the claim that remote work alone caused the productivity surge."
  },
  {
    questionText: "What does the Latin legal phrase 'Prima Facie' translate to?",
    optionA: "At first face / Based on first impression",
    optionB: "By the fact itself",
    optionC: "For the public good",
    optionD: "Without fixed date",
    correctOption: "A",
    topicTag: "Verbal Ability",
    explanation: "'Prima Facie' is a Latin expression meaning 'at first sight' or 'based on first impression'."
  },
  {
    questionText: "Fill in the blank with the correct conditional structure: 'If he _____ harder, he would have cleared the entrance examination.'",
    optionA: "had studied",
    optionB: "studied",
    optionC: "has studied",
    optionD: "would study",
    correctOption: "A",
    topicTag: "Verbal Ability",
    explanation: "Third conditional structure: 'If + past perfect (had studied), ... would have + past participle'."
  },
  {
    questionText: "Complete the numerical series: 1, 8, 27, 64, 125, 216, ?",
    optionA: "343",
    optionB: "256",
    optionC: "289",
    optionD: "512",
    correctOption: "A",
    topicTag: "Logical Reasoning",
    explanation: "Series consists of perfect cubes of consecutive integers: 1^3=1, 2^3=8, 3^3=27, 4^3=64, 5^3=125, 6^3=216. Next term is 7^3 = 343."
  }
];

// -------------------------------------------------------------
// Test 9: Aptitude Mock Test 5 (Campus Placement Grand Aptitude Test)
// -------------------------------------------------------------
const aptitudeGrandQuestions = [
  {
    questionText: "A train 240 meters long passes a telegraph post in 16 seconds. Find the speed of the train in km/hr:",
    optionA: "50 km/hr",
    optionB: "54 km/hr",
    optionC: "60 km/hr",
    optionD: "72 km/hr",
    correctOption: "B",
    topicTag: "Quantitative Aptitude",
    explanation: "Speed in m/s = 240m / 16s = 15 m/s. Converting to km/h: 15 * (18 / 5) = 54 km/hr."
  },
  {
    questionText: "The ratio of ages of two persons A and B is 4 : 5. Six years hence, the ratio of their ages will be 6 : 7. What is A's present age?",
    optionA: "12 years",
    optionB: "15 years",
    optionC: "18 years",
    optionD: "24 years",
    correctOption: "A",
    topicTag: "Quantitative Aptitude",
    explanation: "Let present ages be 4x and 5x. After 6 years: (4x + 6) / (5x + 6) = 6 / 7 => 28x + 42 = 30x + 36 => 2x = 6 => x = 3. A's present age = 4 * 3 = 12 years."
  },
  {
    questionText: "A shopkeeper marks an item at $800 and gives a discount of 15%. If he still makes a profit of 20%, what was the cost price of the item?",
    optionA: "$540",
    optionB: "$566.67",
    optionC: "$580",
    optionD: "$600",
    correctOption: "B",
    topicTag: "Quantitative Aptitude",
    explanation: "Selling Price SP = $800 * 0.85 = $680. Since SP = CP * 1.20, Cost Price CP = 680 / 1.20 = $566.67."
  },
  {
    questionText: "Find the HCF of 36, 54, and 90:",
    optionA: "9",
    optionB: "12",
    optionC: "18",
    optionD: "27",
    correctOption: "C",
    topicTag: "Number System",
    explanation: "Prime factors: 36 = 2^2 * 3^2, 54 = 2 * 3^3, 90 = 2 * 3^2 * 5. HCF = 2^1 * 3^2 = 18."
  },
  {
    questionText: "If 15 workers can build a wall in 20 days, how many workers are needed to build the same wall in 12 days?",
    optionA: "20 workers",
    optionB: "25 workers",
    optionC: "28 workers",
    optionD: "30 workers",
    correctOption: "B",
    topicTag: "Time & Work",
    explanation: "Man-days formula: M1 * D1 = M2 * D2 => 15 * 20 = M2 * 12 => M2 = 300 / 12 = 25 workers."
  },
  {
    questionText: "Find the simple interest on $4,500 at 6% per annum for 3 years:",
    optionA: "$720",
    optionB: "$810",
    optionC: "$890",
    optionD: "$950",
    correctOption: "B",
    topicTag: "Quantitative Aptitude",
    explanation: "SI = (Principal * Rate * Time) / 100 = (4500 * 6 * 3) / 100 = $810."
  },
  {
    questionText: "What is the perimeter of a rectangle whose area is 96 sq cm and length is 12 cm?",
    optionA: "32 cm",
    optionB: "40 cm",
    optionC: "44 cm",
    optionD: "48 cm",
    correctOption: "B",
    topicTag: "Mensuration",
    explanation: "Breadth = Area / Length = 96 / 12 = 8 cm. Perimeter = 2 * (Length + Breadth) = 2 * (12 + 8) = 40 cm."
  },
  {
    questionText: "Find the average of first five prime numbers:",
    optionA: "5.0",
    optionB: "5.6",
    optionC: "6.2",
    optionD: "7.0",
    correctOption: "B",
    topicTag: "Quantitative Aptitude",
    explanation: "First 5 primes are 2, 3, 5, 7, 11. Sum = 28. Average = 28 / 5 = 5.6."
  },
  {
    questionText: "A box contains 4 red, 5 green, and 3 blue balls. If one ball is drawn at random, what is the probability that it is GREEN?",
    optionA: "5/12",
    optionB: "1/3",
    optionC: "1/4",
    optionD: "5/7",
    correctOption: "A",
    topicTag: "Probability",
    explanation: "Total balls = 4 + 5 + 3 = 12. Favorable green balls = 5. Probability = 5 / 12."
  },
  {
    questionText: "A motorist covers 120 km at 40 km/h and returns at 60 km/h. What is his average speed for the entire journey?",
    optionA: "48 km/h",
    optionB: "50 km/h",
    optionC: "52 km/h",
    optionD: "55 km/h",
    correctOption: "A",
    topicTag: "Speed, Distance, Time",
    explanation: "Average speed for equal distances = 2xy / (x + y) = (2 * 40 * 60) / (40 + 60) = 4800 / 100 = 48 km/h."
  },

  // Logical Reasoning (Questions 11 - 20)
  {
    questionText: "If 'TIGER' is coded as 'ELOPB', how is 'HORSE' coded under the same rule?",
    optionA: "ELOPB",
    optionB: "EONRD",
    optionC: "EGQRD",
    optionD: "FNPQE",
    correctOption: "A",
    topicTag: "Logical Reasoning",
    explanation: "Pattern: Subtract 3 from alphabetical index of each letter. H(8)-3=E, O(15)-3=L, R(18)-3=O, S(19)-3=P, E(5)-3=B => ELOPB."
  },
  {
    questionText: "Which word is the odd one out among the options?",
    optionA: "Mercury",
    optionB: "Venus",
    optionC: "Moon",
    optionD: "Mars",
    correctOption: "C",
    topicTag: "Logical Reasoning",
    explanation: "Mercury, Venus, and Mars are planets; the Moon is a natural satellite."
  },
  {
    questionText: "In a family, P is the brother of Q. R is the mother of Q. S is the father of R. How is P related to S?",
    optionA: "Grandson",
    optionB: "Grandfather",
    optionC: "Son",
    optionD: "Uncle",
    correctOption: "A",
    topicTag: "Blood Relations",
    explanation: "R is mother of P & Q. S is father of R. Therefore, P is the grandson of S."
  },
  {
    questionText: "Complete the series: 5, 11, 23, 47, 95, ?",
    optionA: "191",
    optionB: "185",
    optionC: "190",
    optionD: "201",
    correctOption: "A",
    topicTag: "Logical Reasoning",
    explanation: "Pattern: Multiply by 2 and add 1 (n * 2 + 1). 95 * 2 + 1 = 191."
  },
  {
    questionText: "If it is 3:00 PM, what is the angle between the hour hand and minute hand of a clock?",
    optionA: "60 degrees",
    optionB: "75 degrees",
    optionC: "90 degrees",
    optionD: "120 degrees",
    correctOption: "C",
    topicTag: "Clocks & Calendars",
    explanation: "Each hour mark represents 30 degrees. At 3:00 PM, the hour hand is at 3 and minute hand at 12, forming 3 * 30° = 90°."
  },
  {
    questionText: "Statements: All cars are vehicles. Some vehicles are electric. Conclusions: I. Some cars are electric. II. Some vehicles are cars.",
    optionA: "Only I follows",
    optionB: "Only II follows",
    optionC: "Both I and II follow",
    optionD: "Neither follows",
    correctOption: "B",
    topicTag: "Syllogisms",
    explanation: "Since all cars are vehicles, some vehicles are definitely cars (II follows). We cannot ascertain if any car is electric (I does not necessarily follow)."
  },
  {
    questionText: "If NORTH becomes WEST, and SOUTH-EAST becomes NORTH-EAST, what does WEST become?",
    optionA: "SOUTH",
    optionB: "EAST",
    optionC: "NORTH",
    optionD: "SOUTH-WEST",
    correctOption: "A",
    topicTag: "Direction Sense",
    explanation: "The directional compass is rotated 90 degrees anti-clockwise. West rotated 90° anti-clockwise becomes South."
  },
  {
    questionText: "A man walks 6 km East, then 8 km North. What is his direct distance from the starting point?",
    optionA: "10 km",
    optionB: "12 km",
    optionC: "14 km",
    optionD: "16 km",
    correctOption: "A",
    topicTag: "Direction Sense",
    explanation: "Using Pythagoras Theorem: Distance = sqrt(6^2 + 8^2) = sqrt(36 + 64) = sqrt(100) = 10 km."
  },
  {
    questionText: "Which diagram best represents the relationship between: Earth, Sea, and Sun?",
    optionA: "Sea is completely inside Earth, Sun is separate",
    optionB: "All three overlap",
    optionC: "Sun inside Sea inside Earth",
    optionD: "Three separate disjoint circles",
    correctOption: "A",
    topicTag: "Venn Diagrams",
    explanation: "Sea is entirely contained within Earth; Sun is a separate celestial body outside Earth."
  },
  {
    questionText: "If '+' means '-', '-' means '*', '*' means '/', and '/' means '+', solve: 20 - 4 / 10 + 5 * 5",
    optionA: "89",
    optionB: "92",
    optionC: "85",
    optionD: "79",
    correctOption: "A",
    topicTag: "Logical Reasoning",
    explanation: "Replacing operators: 20 * 4 + 10 - (5 / 5) = 80 + 10 - 1 = 89."
  },

  // Verbal Ability (Questions 21 - 30)
  {
    questionText: "Find the synonym of 'PRUDENT':",
    optionA: "Wise / Cautious",
    optionB: "Reckless",
    optionC: "Foolish",
    optionD: "Careless",
    correctOption: "A",
    topicTag: "Verbal Ability",
    explanation: "'Prudent' means acting with or showing care and thought for the future; wise or cautious."
  },
  {
    questionText: "Find the antonym of 'BENEVOLENT':",
    optionA: "Malevolent / Hostile",
    optionB: "Kind",
    optionC: "Generous",
    optionD: "Friendly",
    correctOption: "A",
    topicTag: "Verbal Ability",
    explanation: "'Benevolent' means well-meaning and kindly. Its antonym is 'Malevolent / Hostile'."
  },
  {
    questionText: "Identify the correctly spelled word:",
    optionA: "Maintenance",
    optionB: "Maintainance",
    optionC: "Maintenence",
    optionD: "Mentenance",
    correctOption: "A",
    topicTag: "Verbal Ability",
    explanation: "The standard spelling is 'Maintenance'."
  },
  {
    questionText: "Complete the sentence: 'He had hardly entered the room _____ the lights went out.'",
    optionA: "when",
    optionB: "than",
    optionC: "then",
    optionD: "after",
    correctOption: "A",
    topicTag: "Verbal Ability",
    explanation: "The conjunction pair 'hardly ... when' is grammatically required."
  },
  {
    questionText: "What does the idiom 'Burn the midnight oil' mean?",
    optionA: "To work or study late into the night",
    optionB: "To waste fuel unnecessarily",
    optionC: "To cause an accidental fire",
    optionD: "To sleep early",
    correctOption: "A",
    topicTag: "Verbal Ability",
    explanation: "'Burn the midnight oil' means to work or study late into the night."
  },
  {
    questionText: "One-word substitution: 'A government by the people, of the people, for the people':",
    optionA: "Democracy",
    optionB: "Autocracy",
    optionC: "Bureaucracy",
    optionD: "Oligarchy",
    correctOption: "A",
    topicTag: "Verbal Ability",
    explanation: "'Democracy' is a system of government by the whole population through elected representatives."
  },
  {
    questionText: "Choose the correct passive voice: 'The engineers fixed the database server.'",
    optionA: "The database server was fixed by the engineers.",
    optionB: "The database server is fixed by the engineers.",
    optionC: "The database server had fixed by the engineers.",
    optionD: "The database server has fixed by the engineers.",
    correctOption: "A",
    topicTag: "Verbal Ability",
    explanation: "Simple past active ('fixed') converts to simple past passive ('was fixed by')."
  },
  {
    questionText: "Select the sentence with correct punctuation:",
    optionA: "She said, 'We are ready to deploy.'" ,
    optionB: "She said 'We are ready to deploy'",
    optionC: "She said, We are ready to deploy.",
    optionD: "She said 'We are ready to deploy.'",
    correctOption: "A",
    topicTag: "Verbal Ability",
    explanation: "Direct speech requires a comma before the quotation mark and proper punctuation inside quotes."
  },
  {
    questionText: "Fill in the blank with suitable preposition: 'He is proficient _____ Python and TypeScript.'",
    optionA: "in",
    optionB: "at",
    optionC: "with",
    optionD: "for",
    correctOption: "A",
    topicTag: "Verbal Ability",
    explanation: "The adjective 'proficient' takes the preposition 'in' when referring to skills or languages."
  },
  {
    questionText: "Find the odd word out:",
    optionA: "Euphoria",
    optionB: "Ecstasy",
    optionC: "Bliss",
    optionD: "Melancholy",
    correctOption: "D",
    topicTag: "Verbal Ability",
    explanation: "Euphoria, Ecstasy, and Bliss refer to extreme happiness, whereas Melancholy means deep sadness."
  }
];

async function withRetry<T>(fn: () => Promise<T>, retries = 5): Promise<T> {
  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (err) {
      if (i === retries - 1) throw err;
      await prisma.$connect().catch(() => {});
      await new Promise((r) => setTimeout(r, 1000 * (i + 1)));
    }
  }
  throw new Error('Failed after retries');
}

async function main() {
  console.log('🌱 Starting Comprehensive Mock Test Portal Database Seeding...');

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

  // 1. Seed Courses
  const courseDefs = [
    {
      title: 'Aptitude Masterclass Test Series 2026',
      slug: 'aptitude-masterclass-series',
      category: 'Aptitude',
      badge: '15 Tests',
      icon: 'Brain',
      description: 'Comprehensive 15-test aptitude suite covering Quantitative Aptitude, Logical Reasoning, Data Interpretation, Verbal Ability, and Data Sufficiency with mixed topic assessments.',
    },
    {
      title: 'Logical & Analytical Reasoning Series',
      slug: 'logical-reasoning-series',
      category: 'Reasoning',
      badge: '3 Tests',
      icon: 'Sparkles',
      description: 'Targeted reasoning tests focusing on seating arrangements, blood relations, syllogisms, coding-decoding, direction sense, and critical puzzles.',
    },
    {
      title: 'Technical Placement & System Design Series',
      slug: 'technical-system-design-track',
      category: 'Technical',
      badge: '3 Tests',
      icon: 'Server',
      description: 'Comprehensive technical evaluation covering OOPs, C++, C#, Microservices, System Design, REST APIs, and Core CS Fundamentals.',
    },
    {
      title: 'Advanced DSA & Problem Solving Series',
      slug: 'advanced-dsa-series',
      category: 'Technical',
      badge: '1 Test',
      icon: 'Code2',
      description: 'Master complex data structures, Dynamic Programming, Graph algorithms, Trie, Segment Trees, and Bit Manipulation.',
    },
    {
      title: 'IndiaBIX Placement Exam Test Series 2026',
      slug: 'indiabix-test-series',
      category: 'IndiaBIX',
      badge: '8 New Tests',
      icon: 'Award',
      description: 'Authentic IndiaBIX exam preparation series with 8 dedicated tests covering Quant, Logical Reasoning, Verbal Ability, Java, C++, C#, DBMS, JavaScript, Computer Networks (CN), and Operating Systems (OS).',
    },
  ];

  const courseMap: Record<string, string> = {};
  for (const cDef of courseDefs) {
    const course = await prisma.course.upsert({
      where: { slug: cDef.slug },
      update: {
        title: cDef.title,
        category: cDef.category,
        badge: cDef.badge,
        icon: cDef.icon,
        description: cDef.description,
      },
      create: {
        title: cDef.title,
        slug: cDef.slug,
        category: cDef.category,
        badge: cDef.badge,
        icon: cDef.icon,
        description: cDef.description,
      },
    });
    courseMap[cDef.slug] = course.id;
  }
  console.log(`📚 Seeded ${courseDefs.length} Course Series Tracks!`);

  // Test definitions list
  const testDefs = [
    {
      title: 'Technical Mock Test 1',
      category: 'Technical',
      courseSlug: 'technical-system-design-track',
      description: 'OOPs concepts, C++ memory management, inheritance, dynamic polymorphism, and core language fundamentals.',
      totalQuestions: 30,
      timePerQuestion: 60,
      marksPerQuestion: 2,
      questions: technicalQuestions,
    },
    {
      title: 'Technical Mock Test 2',
      category: 'Technical',
      courseSlug: 'technical-system-design-track',
      description: 'Full-Stack architecture, microservices, REST/GraphQL APIs, database sharding, Redis caching, and Web Security.',
      totalQuestions: 30,
      timePerQuestion: 60,
      marksPerQuestion: 2,
      questions: fullstackQuestions,
    },
    {
      title: 'Technical Mock Test 3',
      category: 'Technical',
      courseSlug: 'advanced-dsa-series',
      description: 'Data Structures & Algorithms: Dynamic Programming, Graph Traversal (DFS/BFS, Dijkstra), Trie, Segment Trees, and Bit Manipulation.',
      totalQuestions: 30,
      timePerQuestion: 60,
      marksPerQuestion: 2,
      questions: dsaQuestions,
    },
    {
      title: 'Technical Mock Test 4',
      category: 'Technical',
      courseSlug: 'technical-system-design-track',
      description: 'Core Computer Science: Operating Systems concurrency, DBMS isolation levels, TCP/IP networking, and SOLID design principles.',
      totalQuestions: 30,
      timePerQuestion: 60,
      marksPerQuestion: 2,
      questions: coreCsQuestions,
    },
    {
      title: 'Aptitude Mock Test 1',
      category: 'Aptitude',
      courseSlug: 'aptitude-masterclass-series',
      description: 'Quantitative Aptitude, Logical Reasoning series, Data Interpretation, and English Verbal Ability.',
      totalQuestions: 30,
      timePerQuestion: 60,
      marksPerQuestion: 2,
      questions: aptitudeQuestions,
    },
    {
      title: 'Aptitude Mock Test 2',
      category: 'Aptitude',
      courseSlug: 'aptitude-masterclass-series',
      description: 'Advanced Placement Reasoning: Permutations & Combinations, Circular Seating Puzzles, Syllogisms, and Critical Logic.',
      totalQuestions: 30,
      timePerQuestion: 60,
      marksPerQuestion: 2,
      questions: aptitudeAdvancedQuestions,
    },
    {
      title: 'Aptitude Mock Test 3',
      category: 'Aptitude',
      courseSlug: 'aptitude-masterclass-series',
      description: 'Data Interpretation, Speed Mathematics, Pipes & Cisterns, Relative Velocity, and Spatial Pattern Reasoning.',
      totalQuestions: 30,
      timePerQuestion: 60,
      marksPerQuestion: 2,
      questions: aptitudeDataInterpQuestions,
    },
    {
      title: 'Aptitude Mock Test 4',
      category: 'Aptitude',
      courseSlug: 'aptitude-masterclass-series',
      description: 'Business Analytics Aptitude: Permutations & Combinations, Mixtures & Allegation, Data Sufficiency, and Critical Reasoning.',
      totalQuestions: 30,
      timePerQuestion: 60,
      marksPerQuestion: 2,
      questions: aptitudeAnalyticsQuestions,
    },
    {
      title: 'Aptitude Mock Test 5',
      category: 'Aptitude',
      courseSlug: 'aptitude-masterclass-series',
      description: 'Campus Placement Grand Aptitude Test: Comprehensive Quant, Clocks & Calendars, Syllogisms, Blood Relations, and English Proficiency.',
      totalQuestions: 30,
      timePerQuestion: 60,
      marksPerQuestion: 2,
      questions: aptitudeGrandQuestions,
    },
    // New 10 Mixed Aptitude Tests
    {
      title: 'Aptitude Series Test 1',
      category: 'Aptitude',
      courseSlug: 'aptitude-masterclass-series',
      description: 'Mixed Aptitude Essentials: Speed-Time-Distance, Letter Coding, Pie Chart DI, Work-Time, Blood Relations, and Grammar.',
      totalQuestions: 10,
      timePerQuestion: 60,
      marksPerQuestion: 2,
      questions: aptSeries1Questions,
    },
    {
      title: 'Aptitude Series Test 2',
      category: 'Aptitude',
      courseSlug: 'aptitude-masterclass-series',
      description: 'Speed Math & Puzzles: Simple Interest, Square Root Expressions, Profit/Loss, Directions, Syllogisms, and Probability.',
      totalQuestions: 10,
      timePerQuestion: 60,
      marksPerQuestion: 2,
      questions: aptSeries2Questions,
    },
    {
      title: 'Aptitude Series Test 3',
      category: 'Aptitude',
      courseSlug: 'aptitude-masterclass-series',
      description: 'DI & Permutations: Word Arrangements, Men-Women Work, Direction Rectangles, Mixtures, Odd One Out, and Compound Interest.',
      totalQuestions: 10,
      timePerQuestion: 60,
      marksPerQuestion: 2,
      questions: aptSeries3Questions,
    },
    {
      title: 'Aptitude Series Test 4',
      category: 'Aptitude',
      courseSlug: 'aptitude-masterclass-series',
      description: 'Time-Speed & Grammar: Average Speed, Venn Diagram Sets, Pipe Efficiency, Number Series, Clock Angles, and Alphanumeric Coding.',
      totalQuestions: 10,
      timePerQuestion: 60,
      marksPerQuestion: 2,
      questions: aptSeries4Questions,
    },
    {
      title: 'Aptitude Series Test 5',
      category: 'Aptitude',
      courseSlug: 'aptitude-masterclass-series',
      description: 'Number Theory & Arrangements: Modular Remainders, Circular Seating, Compound Growth, Age Ratios, and Error Spotting.',
      totalQuestions: 10,
      timePerQuestion: 60,
      marksPerQuestion: 2,
      questions: aptSeries5Questions,
    },
    {
      title: 'Aptitude Series Test 6',
      category: 'Aptitude',
      courseSlug: 'aptitude-masterclass-series',
      description: 'Profit-Loss & Data Sufficiency: Target Selling Prices, Number-Letter Codes, Probability Draws, Area Pathways, and Subject-Verb Agreement.',
      totalQuestions: 10,
      timePerQuestion: 60,
      marksPerQuestion: 2,
      questions: aptSeries6Questions,
    },
    {
      title: 'Aptitude Series Test 7',
      category: 'Aptitude',
      courseSlug: 'aptitude-masterclass-series',
      description: 'Geometry & Blood Relations: Sphere Surface Area, Family Relations, Quadratic Equations, Successive Discounts, and Logarithmic Expansion.',
      totalQuestions: 10,
      timePerQuestion: 60,
      marksPerQuestion: 2,
      questions: aptSeries7Questions,
    },
    {
      title: 'Aptitude Series Test 8',
      category: 'Aptitude',
      courseSlug: 'aptitude-masterclass-series',
      description: 'Algebra & Letter Series: Exponential Equations, Word Inversion, Excluded Means, Ball Probability, Prepositions, and Gaining Clocks.',
      totalQuestions: 10,
      timePerQuestion: 60,
      marksPerQuestion: 2,
      questions: aptSeries8Questions,
    },
    {
      title: 'Aptitude Series Test 9',
      category: 'Aptitude',
      courseSlug: 'aptitude-masterclass-series',
      description: 'Clocks & Bar Charts: Calendar Odd Days, Bar Chart Ratios, Triangle Geometry, Arithmetic Progressions, and Equivalent Discounts.',
      totalQuestions: 10,
      timePerQuestion: 60,
      marksPerQuestion: 2,
      questions: aptSeries9Questions,
    },
    {
      title: 'Aptitude Series Test 10',
      category: 'Aptitude',
      courseSlug: 'aptitude-masterclass-series',
      description: 'Grand Speed Aptitude: 3-Tap Cisterns, Reverse Shift Coding, Cuboid Diagonals, Family Tree Puzzles, and Log Equations.',
      totalQuestions: 10,
      timePerQuestion: 60,
      marksPerQuestion: 2,
      questions: aptSeries10Questions,
    },
    // New Reasoning Tests
    {
      title: 'Reasoning Series Test 1',
      category: 'Reasoning',
      courseSlug: 'logical-reasoning-series',
      description: 'Seating Arrangements & Puzzles: Circular Seating, Order Ranking, Coded Blood Relations, Cube Painting, and Matrix Puzzles.',
      totalQuestions: 10,
      timePerQuestion: 60,
      marksPerQuestion: 2,
      questions: reasoningSeries1Questions,
    },
    {
      title: 'Reasoning Series Test 2',
      category: 'Reasoning',
      courseSlug: 'logical-reasoning-series',
      description: 'Syllogisms & Input-Output: 3-Statement Syllogisms, Machine Step Rearrangements, Arguments & Assumptions, and Figure Counting.',
      totalQuestions: 10,
      timePerQuestion: 60,
      marksPerQuestion: 2,
      questions: reasoningSeries2Questions,
    },
    {
      title: 'Reasoning Series Test 3',
      category: 'Reasoning',
      courseSlug: 'logical-reasoning-series',
      description: 'Blood Relations & Directions: Occupation Puzzles, Leap Year Calendars, Clock Coincidence, Critical Arguments, and Angle Rotations.',
      totalQuestions: 10,
      timePerQuestion: 60,
      marksPerQuestion: 2,
      questions: reasoningSeries3Questions,
    },
    // IndiaBIX Specialized 15-Question Test Series (30 Marks total, 2 marks per question)
    {
      title: 'IndiaBIX Aptitude Series Test 1',
      category: 'IndiaBIX',
      courseSlug: 'indiabix-test-series',
      description: 'IndiaBIX Quantitative Aptitude Test 1: 15 questions covering Problems on Trains, Work-Time, Simple Interest, Profit/Loss, Alligation Mixtures, Probability, and Logarithms. (Score out of 30, 2 marks per question)',
      totalQuestions: 15,
      timePerQuestion: 60,
      marksPerQuestion: 2,
      questions: indiaBixAptitude1Questions,
    },
    {
      title: 'IndiaBIX Aptitude Series Test 2',
      category: 'IndiaBIX',
      courseSlug: 'indiabix-test-series',
      description: 'IndiaBIX Quantitative Aptitude Test 2: 15 questions covering Compound Interest, Ratio & Proportion, Averages, Pipes & Cisterns, HCF/LCM, and Percentages. (Score out of 30, 2 marks per question)',
      totalQuestions: 15,
      timePerQuestion: 60,
      marksPerQuestion: 2,
      questions: indiaBixAptitude2Questions,
    },
    {
      title: 'IndiaBIX Logical Reasoning Test 1',
      category: 'IndiaBIX',
      courseSlug: 'indiabix-test-series',
      description: 'IndiaBIX Logical Reasoning Test 1: 15 questions covering Number & Letter Series, Syllogisms, Blood Relations, Seating Arrangements, Coding-Decoding, and Direction Sense. (Score out of 30, 2 marks per question)',
      totalQuestions: 15,
      timePerQuestion: 60,
      marksPerQuestion: 2,
      questions: indiaBixReasoning1Questions,
    },
    {
      title: 'IndiaBIX Verbal Ability Test 1',
      category: 'IndiaBIX',
      courseSlug: 'indiabix-test-series',
      description: 'IndiaBIX English Verbal Ability Test 1: 15 questions covering Synonyms, Antonyms, Error Spotting, One-Word Substitutes, Active/Passive Voice, and Sentence Completion. (Score out of 30, 2 marks per question)',
      totalQuestions: 15,
      timePerQuestion: 60,
      marksPerQuestion: 2,
      questions: indiaBixVerbal1Questions,
    },
    {
      title: 'IndiaBIX Technical & C/C++ Test 1',
      category: 'IndiaBIX',
      courseSlug: 'indiabix-test-series',
      description: 'IndiaBIX Technical C & C++ Test 1: 15 questions covering Pointers, Storage Classes, Memory Allocation, Virtual Functions, OOPs, QuickSort, and Data Structures. (Score out of 30, 2 marks per question)',
      totalQuestions: 15,
      timePerQuestion: 60,
      marksPerQuestion: 2,
      questions: indiaBixTechnical1Questions,
    },
    {
      title: 'IndiaBIX Technical & Database Systems Test 1',
      category: 'IndiaBIX',
      courseSlug: 'indiabix-test-series',
      description: 'IndiaBIX Java & SQL Test 1: 15 questions covering JVM Heap vs Stack, Java Collections, SQL Joins, 3NF Normalization, ACID Transactions, and Indexing. (Score out of 30, 2 marks per question)',
      totalQuestions: 15,
      timePerQuestion: 60,
      marksPerQuestion: 2,
      questions: indiaBixJavaDb1Questions,
    },
    {
      title: 'IndiaBIX Technical & CS Engineering Test 2',
      category: 'IndiaBIX',
      courseSlug: 'indiabix-test-series',
      description: 'IndiaBIX Technical CS Test 2: 21 questions covering Java ConcurrentHashMap/Streams, C++ Smart Pointers/STL, C# Async/Boxing, DBMS Isolation/BCNF, JS Microtasks/Closures, CN TCP/Subnetting, and OS Deadlocks/Belady. (Score out of 42, 2 marks per question)',
      totalQuestions: 21,
      timePerQuestion: 60,
      marksPerQuestion: 2,
      questions: indiaBixTechnical2Questions,
    },
    {
      title: 'IndiaBIX Core Technical & Software Test 3',
      category: 'IndiaBIX',
      courseSlug: 'indiabix-test-series',
      description: 'IndiaBIX Technical Software Test 3: 21 questions covering Java Exception/String Pool, C++ Rvalue/Virtual Inheritance, C# LINQ/GC Gens, DBMS WAL/Indexes, JS Arrow/Promises, CN DNS/HTTP2, and OS SRTF/Shared Memory. (Score out of 42, 2 marks per question)',
      totalQuestions: 21,
      timePerQuestion: 60,
      marksPerQuestion: 2,
      questions: indiaBixTechnical3Questions,
    },
  ];

  // Ensure tests exist and questions are safely upserted without purging attempts
  for (const tDef of testDefs) {
    const courseId = courseMap[tDef.courseSlug];
    let test = await prisma.test.findFirst({
      where: { title: tDef.title }
    });

    if (!test) {
      test = await prisma.test.create({
        data: {
          title: tDef.title,
          category: tDef.category,
          description: tDef.description,
          totalQuestions: tDef.questions.length,
          timePerQuestion: tDef.timePerQuestion,
          marksPerQuestion: tDef.marksPerQuestion,
          courseId: courseId,
        }
      });
    } else {
      // Update existing test metadata
      test = await prisma.test.update({
        where: { id: test.id },
        data: {
          category: tDef.category,
          description: tDef.description,
          totalQuestions: tDef.questions.length,
          timePerQuestion: tDef.timePerQuestion,
          marksPerQuestion: tDef.marksPerQuestion,
          courseId: courseId,
        }
      });
    }

    // Upsert questions safely with randomized option positions in parallel
    await Promise.all(
      tDef.questions.map(async (q) => {
        const optKey = `option${q.correctOption}` as keyof typeof q;
        const correctVal = q[optKey] as string;

        // Fisher-Yates shuffle options
        const rawOptions = [q.optionA, q.optionB, q.optionC, q.optionD];
        const shuffledOptions = [...rawOptions];
        for (let i = shuffledOptions.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffledOptions[i], shuffledOptions[j]] = [shuffledOptions[j], shuffledOptions[i]];
        }

        const optionKeys = ['A', 'B', 'C', 'D'];
        const newCorrectIdx = shuffledOptions.indexOf(correctVal);
        const newCorrectOption = optionKeys[newCorrectIdx];

        let explanation = (q as any).explanation;
        if (!explanation) {
          explanation =
            `Option ${newCorrectOption} ("${correctVal}") is the correct answer. ` +
            `Why this answer: Under ${q.topicTag} principles, "${correctVal}" is correct because it directly solves the requirement of "${q.questionText}". ` +
            `The alternative choices represent common misconceptions or invalid operations in ${q.topicTag}.`;
        } else {
          explanation = explanation.replace(/^Option [ABCD] \("(.*?)"\)/, `Option ${newCorrectOption} ("$1")`);
        }

        await withRetry(async () => {
          const existingQuestion = await prisma.question.findFirst({
            where: { testId: test.id, questionText: q.questionText },
          });

          if (existingQuestion) {
            await prisma.question.update({
              where: { id: existingQuestion.id },
              data: {
                optionA: shuffledOptions[0],
                optionB: shuffledOptions[1],
                optionC: shuffledOptions[2],
                optionD: shuffledOptions[3],
                correctOption: newCorrectOption,
                topicTag: q.topicTag,
                explanation: explanation,
              },
            });
          } else {
            await prisma.question.create({
              data: {
                testId: test.id,
                questionText: q.questionText,
                optionA: shuffledOptions[0],
                optionB: shuffledOptions[1],
                optionC: shuffledOptions[2],
                optionD: shuffledOptions[3],
                correctOption: newCorrectOption,
                topicTag: q.topicTag,
                explanation: explanation,
              },
            });
          }
        });
      })
    );
    console.log(`✅ Seeded ${tDef.questions.length} questions for "${test.title}" [${test.category}]`);
  }

  console.log('🎉 Seeding successfully completed for all tests!');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
