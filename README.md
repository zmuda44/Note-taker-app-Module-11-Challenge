# Generate README app

  ## License: [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [MIT License](https://opensource.org/licenses/MIT)

  ## Table of Contents
  * [Description](#description)
  * [Installation Instructions](#installation)
  * [Usage Instructions](#usage)
  * [Contribution Information](#contributions)
  * [Test Information](#testing)
  * [Questions](#questions)
  
  ## Description: 
  This app will create a personalized README for any project. Simply install the app and run 'node index.js' from the command line in the folder where the index.js is stored. You will be prompted through a series of questions to respond to. When finished with all of the questions, the app will generate a custom README broken down by section with the information that you have entered.

  ## Tutorial Video:
  https://www.youtube.com/watch?v=7F7qgaZnkOw

  ## Installation: 
  First, clone this repository to your computer using 'git clone git@github.com:zmuda44/Module-9-Challenge.git' or 'git clone https://github.com/zmuda44/Module-9-Challenge.git'. cd into the folder containing the index.js. Run 'npm init' from the command line to create your package.json. You will need inquirer to run this app. To install inquirer run 'npm i inquirer@8.2.4' to install the modules and dependencies.
  ![alt text](<images/git clone.png>)
  ![alt text](images/inquirer.png)

  ## Usage: 
  To use app, run 'node index.js' from the command line in the folder containing your index.js. You will be prompted for a series of questions. The questions about the title, description and license of your README are mandatory as well as your github user and email address, so please answer those questions. All other questions are optional and will not populate in the README. Once all questions are answered, a customized README will be generated to use as you see fit.

  ## Contributions: 
  Contributions to this app are welcome. Simply fork the repository to your github account by pressing the fork button above.  This will create a repository on your own github which you can clone and push to like any other repository. If you wish for your changes or additions to be part of this app, click on the 'Pull requests' button towards the top of the forked repository in your github account. Follow the prompts for a pull request and if approved, your code will be accepted into this app's repository.

  ## Testing: 
  You can test this code or any modified code after cloning or forking using JEST. To install JEST run 'npm i jest' from the command line while in the folder containing index.js. Be sure to added test to your "scripts" in your package.json folder. Add the following code into your "scripts" key so it should read as follows: "scripts": { "test": "jest"}. After this is complete create a test folder and a file inside entitled index.test.js. To test the generateMarkdown.js follow the same instructions but create the test folder in the 'utils' folder of his repository.  

  ## Questions: 
  Github: [github.com/zmuda44](https://github.com/zmuda44) Email: gregbailey617@gmail.com

  ## Citations:
  works cited: <br>
  https://github.com/coding-boot-camp/potential-enigma<br>
  https://github.com/connietran-dev/readme-generator<br>

  license badges:<br>
  https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba<br>
  https://gist.github.com/kofiav/c1059e1075b67582e86b07aa9759e20d<br>
  No code was used in this project as naming and logic changed, but these are the 2 sites that got me started and the site where the badges were obtained.
 