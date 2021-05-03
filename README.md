# Cypress Random Tester (Monkey)
This repository contains the code for a random tester developed using [Cypress](https://www.cypress.io/). Two versions are developed, including a full random tester and a smarter random tester, and the differences between these two remain in the type of commands that each can execute. The detail is explained in sections below

## The testers
Cypress is an E2E test runner built over JavaScript. We used this technology due to the facility for managing web pages in a variety of browsers including Chrome, Canary, Edge, Electron, etc. and the record-and-replay functionality. The idea of the first tester is to perform a completely random test on a web application, inspired on a similar tester, the [Android Monkey](https://developer.android.com/studio/test/monkey). The second tester exists due to the high rate of errors and low probability of getting events that change the application's state of the Monkey tester.

# Executing the scenarios build in Cypress-monkey
To execute the testing tool use the following command:

```
 npx cypress open

```

Next:

```
Click on the test that you created in the integration folder to execute the randomTest for against the webpage configured in the test scenario and analyze the results for : monkey_testing.spec

```


## Results
When the test finishes running, an HTML report and a video of the execution in a browser will be generated in the results folder.
