---
layout: gist
title: Testivus
---

[The Way of Testivus](http://www.agitar.com/downloads/TheWayOfTestivus.pdf)
- If you write code, write tests.
- Don’t get stuck on unit testing dogma.
- Embrace unit testing karma.
- Think of code and test as one.
- The test is more important than the unit.
- The best time to test is when the code is fresh.
- Tests not run waste away.
- An imperfect test today is better than a perfect test someday.
- An ugly test is better than no test.
- Sometimes, the test justifies the means.
- Only fools use no tools.
- Good tests fail.

## The Way of Testivus

### If you write code, write tests

The pupil asked the master programmer:  
“When can I stop writing tests?”


The master answered:  
“When you stop writing code.”

The pupil asked:  
“When do I stop writing code?”

The master answered:  
“When you become a manager.”

The pupil trembled and asked:  
“When do I become a manager?”

The master answered:  
“When you stop writing tests.”

The pupil rushed to write some tests. He left skid marks.

If the code deserves to be written, it deserves to have tests.

### Don’t get stuck on unit testing dogma

Dogma says:  
”Do this.  
Do only this.  
Do it only this way.  
And do it because I tell you.”

Dogma is inflexible. Testing needs flexibility.

Dogma kills creativity. Testing needs creativity.

### Embrace unit testing karma

Karma says:
“Do good things and good things will happen to you.  
Do them the way you know.  
Do them the way you like.”

Karma is flexible. Testing needs flexibility.

Karma thrives on creativity. Testing needs creativity.

### Think of code and test as one

When writing the code, think of the test.

When writing the test, think of the code.

When you think of code and test as one, testing is easy and code is beautiful.

### The test is more important than the unit

The pupil asked the great master programmer Flying Feathers:  
“What makes a test a unit test?”

This great master programmer answered:  
“If it talks to the database, it is not a unit test.  
If it communicates across the network, it is not a unit test.  
If it touches the file system, it is not a unit test.  
If it can’t run at the same time as any other unit tests, it is not a unit test.  
If you have to do special things to your environment to run it, it is not a unit test.”

Other master programmers, hearing this conversation, jumped in with dissenting opinions and started to argue loudly.

“Sorry I asked”, said the pupil said the pupil as he left.

Later that night, he received a note from the great grand master programmer:  
“The answer from the great master Flying Feathers is an excellent guide. If you follow it most of the time you will do well. But don’t get stuck on any dogma. Write the test that needs to be written.”

The pupil slept well. The other masters continued to argue long into the night.

### The best time to test is when the code is fresh

Your code is like clay. When it’s fresh, it’s soft and malleable. As it ages, it becomes hard and brittle.

If you write tests when the code is fresh and easy to change, testing will be easy, and both the code and the tests will be strong.

If you write the tests when the code is old and hard to change, testing will be hard and both the tests and the code will be brittle.

### Tests not run waste away

Run your tests often.

Don’t let them get stale.

Rejoice when they pass.

Rejoice when they fail.

An imperfect test today is better than a perfect test someday  
The perfect is the enemy of the good.

Don’t wait for best to do better.

Don’t wait for better to do good.

Write the test you can today.

### An ugly test is better than no test

When the code is ugly, the tests may be ugly.

You don’t like to write ugly tests, but ugly code needs testing the most.

Don’t let ugly code stop you from writing tests, but let ugly code stop you from writing more of it.

### Sometimes, the test justifies the means

The pupil asked two master programmers:  
“I cannot test this code without mocking and violating encapsulation. What should I do?”

One master programmer answered:  
“Mocking is bad, and you should never violate encapsulation.
Rewrite the code so you can test it properly.”

The other master programmer answered:  
“Mocking is good and testing trumps encapsulation.”

The pupil, confused, went out for a beer.

At the local watering hole he saw the great grand master programmer drinking beer and eating buffalo wings.

“Great grand master,” said the pupil, “I thought you did not drink.  
And aren’t you a vegetarian?”

The great grand master smiled and replied:  
“Sometimes your thirst is best quenched by beer and your hunger by buffalo wings.”

The pupil was no longer confused.

### Only fools use no tools

The farmer who does not use a plow is not a good farmer.

The accountant that does not use an abacus is not a good accountant.

Some tasks are best done with bare hands.

Other tasks are best done with tools.

It is not noble to do by hand what can be done better with a tool.

It is not wise to use your head when your head is not needed.

### Good tests fail

The pupil went to the master programmer and said:  
“All my tests pass all the time. Don’t I deserve a raise?”

The master slapped the pupil and replied:  
“If all your tests pass, all the time, you need to write better tests.”

With a red cheek, the pupil went to HR to complain.

But that’s another story.

## Testivus On Test Coverage

Early one morning, a programmer asked the great master:  
“I am ready to write some unit tests. What code coverage should I aim for?”

The great master replied:  
“Don’t worry about coverage, just write some good tests.”

The programmer smiled, bowed, and left.

...

Later that day, a second programmer asked the same question.

The great master pointed at a pot of boiling water and said:  
“How many grains of rice should I put in that pot?”

The programmer, looking puzzled, replied:  
“How can I possibly tell you? It depends on how many people you need to feed, how hungry they are, what other food you are serving, how much rice you have available, and so on.”

“Exactly,” said the great master.

The second programmer smiled, bowed, and left.

...

Toward the end of the day, a third programmer came and asked the same question about code coverage.  
“Eighty percent and no less!” Replied the master in a stern voice, pounding his fist on the table.

The third programmer smiled, bowed, and left.

...

After this last reply, a young apprentice approached the great master:  
“Great master, today I overheard you answer the same question about code coverage with three different answers. Why?”

The great master stood up from his chair:  
“Come get some fresh tea with me and let’s talk about it.”

After they filled their cups with smoking hot green tea, the great master began to answer:  

“The first programmer is new and just getting started with testing. Right now he has a lot of code and no tests. He has a long way to go; focusing on code coverage at this time would be depressing and quite useless. He’s better off just getting used to writing and running some tests. He can worry about coverage later.”

“The second programmer, on the other hand, is quite experience both at programming and testing. When I replied by asking her how many grains of rice I should put in a pot, I helped her realize that the amount of testing necessary depends on a number of factors, and she knows those factors better than I do – it’s her code after all. There is no single, simple, answer, and she’s smart enough to handle the truth and work with that.”

“I see,” said the young apprentice, “but if there is no single simple answer, then why did you answer the third programmer ‘Eighty percent and no less’?”

The great master laughed so hard and loud that his belly, evidence that he drank more than just green tea, flopped up and down.

“The third programmer wants only simple answers – even when there are no simple answers … and then does not follow them anyway.”

The young apprentice and the grizzled great master finished drinking their tea in contemplative silence.
