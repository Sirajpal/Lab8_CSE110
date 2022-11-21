# Lab 8 - Starter
Siya Rajpal

1. Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why. \
    (1) Within a Github action that runs whenever code is pushed \
    It should be done at this point in the development pipleine due to the principles of continuous integration itself. We want to ensure that small changes, or pushes, and the way they interact with other parts of the code doesn't affect the whole applicaiton. Furthermore, by testing every small push, it allows us to have a working product at every point. 
2.  Would you use an end to end test to check if a function is returning the correct output? (yes/no) \
    NO \
3. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user. \
   You would not use unit tests to test the "message" feature. This is because unit tests don't really test individual components interacting on a feature level. In other words, testing the whole feature of messaging is too large to unit test. \
4. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters. \
   Yes, you would use a unit test to test the "max message length" feature. This is because this feature is super small, and changes in it won't affect other features. In other words, this feature is super small, and easy to test without testing how individual components interact with each other. \
