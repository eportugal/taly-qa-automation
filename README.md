Taly Automation with Cypress
Description
<p>This repository contains automated tests for the Taly project, using the Cypress testing framework. The tests cover various aspects of the application, including functionality, user interface, and performance.</p>
Project Structure
<pre>
taly-automation-cy/
├── cypress/
│   ├── fixtures/          # Static data used in the tests
│   ├── integration/       # Test files
│   ├── support/           # Support files, such as custom commands
├── cypress.json           # Cypress configuration file
├── package.json           # Project metadata and dependencies
└── README.md              # Project documentation
</pre>
Requirements
<ul>
  <li>Node.js (version 14 or higher)</li>
  <li>Cypress (version 12 or higher)</li>
</ul>
Installation
<ol>
  <li>Clone this repository:
    <pre><code>git clone https://github.com/eportugal/taly-automation-cy.git</code></pre>
  </li>
  <li>Navigate to the project directory:
    <pre><code>cd taly-automation-cy</code></pre>
  </li>
  <li>Install the dependencies:
    <pre><code>npm install</code></pre>
  </li>
</ol>
Running Tests
<p>To run the tests, use the command:</p>
<pre><code>npx cypress open</code></pre>
<p>This will open the Cypress graphical interface, where you can select and run the tests.</p>
<p>To run the tests in headless mode (without a graphical interface):</p>
<pre><code>npx cypress run</code></pre>
Contribution
<p>If you want to contribute with improvements or fixes, follow these steps:</p>
<ol>
  <li>Fork this repository.</li>
  <li>Create a new branch for your feature or fix.</li>
  <li>Make the changes and submit a pull request.</li>
</ol>
Contact
<p>For questions or more information, contact:</p>
<ul>
  <li>Email: <a href="mailto:eportugal@live.com">eportugal@live.com</a></li>
  <li>GitHub: <a href="https://github.com/eportugal">eportugal</a></li>
</ul>
License
<p>This project is licensed under the <a href="LICENSE">MIT License</a>.</p>
