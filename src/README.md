# Title: Anatomy of a Modern JavaScript Application

Link to the [original repo.](https://github.com/becodeorg/gnt-verou-1-26/tree/master/2.The-Hill/4.Anatomy-of-a-modern-javascript-application)

## Objectives

Building further on the [weather app](https://chadriae.github.io/weather-app/), which was based on Vanilla JS, we built further to make it a more modern javascript application.

A summary of the objectives learnt in this exercise:

- be able to organize your code with multiple functions
- be able to organize your code in multiple files
- be able to use a package manager to import third-party libraries in your code
- be able to use linters and formatters to make your code cleaner and more bug-free
- be able to optimize your code to be shipped to a browser faster

Each of these were divided in steps, a more detailed summary in the next chapter.

## Steps

1. **Refactor** the code in as many functions as possible.
   I managed to create 6 seperate functions, each with their own function. Some of them are larger than others, so I might have made some smaller for better readibility.
2. Divide the code into multiple files, export and import them as Javascript **modules**.
   I had some difficulties at first with the right syntax, some parts broke at first. But I got it working and my code looks more structured.
3. For browser compatibility, we use a **bundler** on (bigger) Javascript projects.
   I used the [_Parcel_](https://parceljs.org/getting_started.html) bundler, which went very smooth and easy.
