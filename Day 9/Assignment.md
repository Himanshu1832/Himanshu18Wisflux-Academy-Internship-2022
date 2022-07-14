## 1.What is NodeJS?
Ans-Node.js is an open-source, cross-platform JavaScript runtime environment with a focus on server-side and networking applications.

Node.js allows developers to build fast, scalable network applications using easy-to-understand code. It runs on Windows OS, Mac OSX, Linux, Unix, and other operating systems. It has support for ARM processors, like Raspberry Pi or Beaglebone Black.

The idea behind Node was conceived in early 2009 by Ryan Dahl. He had previously developed Web Machine. That was the first web application framework written in Google’s Chrome browser.

The project started as a simple experiment. Still, it gained momentum among engineers looking for ways to write high-performance programs. This was without dealing with the complexities of traditional languages.

## 2.What is V8 Engine?
Ans-V8 is a free and open-source JavaScript engine developed by the Chromium Project for Google Chrome and Chromium web browsers.The project’s creator is Lars Bak. The first version of the V8 engine was released at the same time as the first version of Chrome: 2 September 2008. It has also been used on the server side, for example in Couchbase and Node.js.

The cool thing is that the JavaScript engine is independent of the browser in which it's hosted. This key feature enabled the rise of Node.js. V8 was chosen to be the engine that powered Node.js back in 2009, and as the popularity of Node.js exploded, V8 became the engine that now powers an incredible amount of server-side code written in JavaScript.

## 3.What is Event Loop in NodeJS.
Ans-Event loop is an endless loop, which waits for tasks, executes them and then sleeps until it receives more tasks.
The event loop executes tasks from the event queue only when the call stack is empty i.e. there is no ongoing task.
The event loop allows us to use callbacks and promises.
The event loop executes the tasks starting from the oldest first.

Since most modern kernels are multi-threaded, they can handle multiple operations executing in the background. 

## 4.What is the use of tsconfig.json file?
Ans-The tsconfig. json file specifies the root files and the compiler options required to compile the project. JavaScript projects can use a jsconfig. json file instead, which acts almost the same but has some JavaScript-related compiler flags enabled by default.

## 5.What are the methods provided by `fs` module to manipulate files?
Ans-fs.access(): check if the file exists and Node.js can access it with its permissions
fs.appendFile(): append data to a file. If the file does not exist, it's created
fs.chmod(): change the permissions of a file specified by the filename passed. Related: fs.lchmod(), fs.fchmod()
fs.chown(): change the owner and group of a file specified by the filename passed. Related: fs.fchown(), fs.lchown()
fs.close(): close a file descriptor
fs.copyFile(): copies a file
fs.createReadStream(): create a readable file stream
fs.createWriteStream(): create a writable file stream
fs.link(): create a new hard link to a file
fs.mkdir(): create a new folder
fs.mkdtemp(): create a temporary directory
 
 ## 6.What is API?
Ans-AAPI stands for Application Programming Interface (main participant of all the interactivity)
It is like a messenger that takes our requests to a system and returns a response back to us via seamless connectivity.
We use APIs in many cases like to get data for a web application or to connect to a remote server that has data like weather that keeps changing or to enable two applications to exchange data among each other.
API not only provide reusability of code but also uses the concept of Abstraction (showing functionality by hiding complexity).

## 7.What is JSON format?
Ans-JSON stands for JavaScript Object Notation

JSON is a lightweight format for storing and transporting data

JSON is often used when data is sent from a server to a web page

JSON is "self-describing" and easy to understand

## 8.Why we use JSON format for API?
Ans-Why is JSON used in REST API?
REST APIs should accept JSON for request payload and also send responses to JSON. JSON is the standard for transferring data. Almost every networked technology can use it: JavaScript has built-in methods to encode and decode JSON either through the Fetch API or another HTTP client.

## 9.What is a Framework?
Ans-A framework in programming is a tool that provides ready-made components or solutions that are customized in order to speed up development. A framework may include a library, but is defined by the principle of inversion of control (IoC). With traditional programming, the custom code calls into the library to access reusable code. With IoC, the framework calls on custom pieces of code when necessary.
## 10.How an HTTP Communication works.
Ans-As a request-response protocol, HTTP gives users a way to interact with web resources such as HTML files by transmitting hypertext messages between clients and servers. HTTP clients generally use Transmission Control Protocol (TCP) connections to communicate with servers.

HTTP utilizes specific request methods in order to perform various tasks. All HTTP servers use the GET and HEAD methods, but not all support the rest of these request methods:

GET requests a specific resource in its entirety
HEAD requests a specific resource without the body content
POST adds content, messages, or data to a new page under an existing web resource
PUT directly modifies an existing web resource or creates a new URI if need be
DELETE gets rid of a specified resource
TRACE shows users any changes or additions made to a web resource
OPTIONS shows users which HTTP methods are available for a specific URL
CONNECT converts the request connection to a transparent TCP/IP tunnel
PATCH partially modifies a web resource

## 11.What is Middleware in ExpressJS.
Ans-Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application's request-response cycle. These functions are used to modify req and res objects for tasks like parsing request bodies, adding response headers, etc
