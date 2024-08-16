Taly Automation with Cypress
Description
This repository contains automated tests for the Taly project, using the Cypress testing framework. The tests cover various aspects of the application, including functionality, user interface, and performance.

Project Structure
cypress/integration/: Contains the test files.
cypress/fixtures/: Static data used in the tests.
cypress/support/: Support files, such as custom commands.
cypress.json: Cypress configuration file.
Requirements
Node.js (version 14 or higher)
Cypress (version 12 or higher)
Installation
Clone this repository:

bash
Copy code
git clone https://github.com/eportugal/taly-automation-cy.git
Navigate to the project directory:

bash
Copy code
cd taly-automation-cy
Install the dependencies:

bash
Copy code
npm install
Running Tests
To run the tests, use the command:

bash
Copy code
npx cypress open
This will open the Cypress graphical interface, where you can select and run the tests.

To run the tests in headless mode (without a graphical interface):

bash
Copy code
npx cypress run
Contribution
If you want to contribute with improvements or fixes, follow these steps:

Fork this repository.
Create a new branch for your feature or fix.
Make the changes and submit a pull request.
Contact
For questions or more information, contact:

Email: eportugal@live.com
GitHub: eportugal
License
This project is licensed under the MIT License.
