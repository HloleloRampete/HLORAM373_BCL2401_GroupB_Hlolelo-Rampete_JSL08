// Create a variable to store the singleton instance of the bank branch. "bankBranchInstance"
let bankBranchInstance = null;
// Define a class called `BankBranch` for managing branch information.
class BankBranch {  // 3. In the `BankBranch` class:
    constructor(branchInfo) {  // Create a constructor that takes `branchInfo` as a parameter.
      if (!bankBranchInstance) {  // check if the `bankBranchInstance` variable is null (indicating no instance exists).
        this.branchInfo = branchInfo; // If `bankBranchInstance` is null, create a new instance with the provided `branchInfo` and assign it to `bankBranchInstance`.
        bankBranchInstance = this;
      }
      return bankBranchInstance;   //    - Return the `bankBranchInstance` whether it's newly created or existing.
    }
    getBranchInfo() {   // methods to the `BankBranch` class for managing branch-related information.
        return this.branchInfo;
      }
    
      // Other methods related to branch management
}

// Usage section:
const branchA = new BankBranch("Main Street Branch"); // Creating instances of the `BankBranch` class, such as `branchA` and `branchB`, with different branch information.
console.log(branchA.getBranchInfo()); // Used the `getBranchInfo` method to retrieve branch information from the instances.

const branchB = new BankBranch("Second Street Branch");
console.log(branchB.getBranchInfo());
console.log(branchA === branchB); // Verify that `branchA` and `branchB` are both referring to the same instance by comparing them using `===`.

// This pseudo-code provides a step-by-step explanation of how to implement the Singleton Pattern for managing a single instance of the `BankBranch` class throughout the application, ensuring that multiple instances refer to the same object.

// NOTES:
// This example demonstrates the Singleton pattern by creating a single instance of the `BankBranch` class.
// Even if we attempt to create another instance of the branch, we receive the original instance,
// ensuring that there is only one set of branch information throughout the application.

// - We define a `BankBranch` class that represents bank branch information.
// - We use the Singleton pattern to ensure that there is only one instance of the `BankBranch` class.
// - The `bankBranchInstance` variable is used to hold the single instance of the class.
// - When a new `BankBranch` instance is created, it checks if `bankBranchInstance` already exists.
//   If it does, it returns the existing instance; otherwise, it creates a new one.
// - The `getBranchInfo` method allows us to retrieve the branch information from the singleton instance.
// - We demonstrate the Singleton pattern by creating two instances (`branchA` and `branchB`) and show that they both point to the same instance,
//   ensuring that there is only one set of branch information throughout the application.
