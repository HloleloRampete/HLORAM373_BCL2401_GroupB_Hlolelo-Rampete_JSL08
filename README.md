# [JSL08] Submission: Singleton Pattern for Bank Branch Management

## Overview
This project utilizes the Singleton design pattern to manage bank branch information efficiently in a JavaScript environment. The Singleton pattern ensures that there's only one instance of a class and provides a global point of access to that instance.

### How it Works
**Singleton Class Definition**
The BankBranch class is defined to manage branch information. It includes:

***1. Constructor***: Takes *branchInfo* as a parameter. If no instance exists (bankBranchInstance is null), it creates a new instance with the provided *branchInfo* and assigns it to *bankBranchInstance*. If an instance already exists, it returns the existing instance.

***2. getBranchInfo()***: A method that returns the branch information stored in the instance.

**Usage**
To use the Bank Branch Management system:
1. Create instances of the *BankBranch* class using different branch information.
2. Retrieve branch information using the *getBranchInfo()* method.

Example

```
const branchA = new BankBranch("Main Street Branch"); // Create an instance with branch information "Main Street Branch"
console.log(branchA.getBranchInfo()); // Output: "Main Street Branch"

const branchB = new BankBranch("Second Street Branch"); // Create another instance with branch information "Second Street Branch"
console.log(branchB.getBranchInfo()); // Output: "Second Street Branch"
console.log(branchA === branchB); // Verify that both instances refer to the same instance (Output: true)
```

### Challenges and Benefits
**Challenges**
1. Global State: Singleton pattern introduces a global state, which can make debugging and testing more challenging.
2. Dependency Injection: Singleton pattern doesn't support dependency injection well, which might lead to tight coupling.
**Benefits**
1. Single Instance: Guarantees that there's only one instance of the class, preventing multiple instances from being created accidentally.
2. Global Access: Provides a global point of access to the instance, making it easy to manage and access branch information from anywhere in the codebase.
3. Memory Efficiency: Ensures efficient memory usage by reusing the same instance throughout the application.
   
By leveraging the Singleton pattern, this Bank Branch Management system maintains a centralized and efficient approach to managing branch information, akin to how a well-organized bank efficiently handles its operations and services.
