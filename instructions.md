# Title: Anatomy of a Modern JavaScript Application

- Repository: `modern-javascript-application`
- Type of Challenge: `learning`
- Duration: `5 days`
- Deployment strategy: `Github pages`
- Team challenge : `solo`
- Author: `Manuele`

## Learning Objectives

You now know JavaScript well enough to write simple and complex frontend applications, and querying an API as well. You know the language, and you know its power, but something is still missing. The code seems convoluted and all over the place. Is this really how established developers work, you may wonder?  
At the end of this challenge you will:

- be able to organize your code with multiple functions
- be able to organize your code in multiple files
- be able to use a package manager to import third-party libraries in your code
- be able to use linters and formatters to make your code cleaner and more bug-free
- be able to optimize your code to be shipped to a browser faster

## Your mission

> It's Monday morning. I sit at my desk, start the computer, and my two screens light up.
>
> I open up my text editor and the terminal in the first screen. I type two simple words in the terminal: `npm start` and press <kbd>ENTER</kbd>. A few seconds later a browser tab launches in the second screen with a local server where I can see the application as I develop it.
>
> I need to add a small new feature. I already have the code in my head, and start typing it out. Before I even save, a red squiggly line under a piece of recent code alerts me that there is a problem, and suggests a fix. I accept the fix, which is automatically applied to my code. Phew, that would have taken 30 minutes of my time to find and fix manually.
>
> I realize that I need to work with dates in this new feature, and dates are tricky. Fortunately, there is a library that makes it easier. I type `npm install --save date-fns`, add a line to the top of my file to import such library, and voilà, I'm good to go!
>
> I keep typing, instantly solve two more problems, and hit Save. I'm not the best at keeping my code tidy and well indented, but my text editor is set to auto-format the code on save. Awesome, I don't even have to think about it and there I have my variables well aligned, my functions well indented, my nested conditionals well laid out. It's so much easier to read now.
>
> I now see that I could organize my code a little better, and that I could add an additional explanation for future me in a comment. I save again.
>
> I glance at my second screen. I haven't touched a thing since hitting Save, but the tab is automatically reloading with the new code applied. I watch the app load under my eyes, and I can immediately test it. Wow. That was a breeze, the new feature works!
>
> I type `npm build` in the terminal and all my SASS and JS is bundled, optimized and minified, ready to ship to the browser with optimal performance. Development never felt better.

If you also find this vision of a happy future enticing read on, and reach coding Nirvana in 5 days 😎

## Instructions

There will be a lot to take here. It's a lot of so-called _tooling_ that doesn't impact functionality directly, but it can improve several areas of development immensely.  
Let's take this short journey step by step, day by day.

### Day 1 - Refactor

1. Copy all your files over from the Weather App
2. Take your existing `script.js` from the Weather App, and reorganize (_refactor_) the code in as many functions as you can (try to have at least 2-3 functions). Do it one step at a time: you can start from the outside and go in, or from the inside out. A few principles to keep in mind:
   - Functions should do one thing
   - Function names should say what they do
   - Avoid side effects (keep as many functions as possible [_pure_](https://www.notion.so/mjsarfatti/Enough-JS-to-Be-Dangerous-d3be5beb31ad4778ada7161fb2cc1a7b#5bada0ad2ac84f56a84871dbfa28f714))
   - Functions can often be just a few lines long
3. There is no 3! That's all for day 1 :) If you want to know more about good practices, take a peek here (but don't stress too much, some of that stuff is quite advanced): https://github.com/ryanmcdermott/clean-code-javascript#functions

_Do you have time to spare? See if you can help someone, add "nice-to-have" features to your app, or refactor another app of yours!_

### Day 2 - JavaScript Modules

It's a lot of functions, in a long file. Guess what? In modern JavaScript, you can divide your code into multiple files for better organization, and import/export things (functions, variables, classes) from one file to another.

1. Divide your code into multiple files. If you don't know how, start with one function per file and name the file after the function. Don't worry about exporting/importing, for now just make a file structure that kind of makes sense and reflects your code.  
   _Just remember: keep `script.js` around, it will still be the origin file for everything_
2. Done? Now rename `script.js` to `index.js` - this is an industry convention and it ensures better compatibility with several tools (you'll see 😉)
3. Read up about "ES6 Modules" and the "ES6 import/export syntax"  
   _Note: If tutorials or guides talk about `npm`, or ask you to add a `package.json` to your project, or ask you to run `$ npm install somethingsomething` ignore them, we'll see all that in two days. Find out how to use "modules" in the browser directly._
4. Apply the import/export syntax to your JavaScript code. Don't forget to update your `index.html` as necessary since the previous way of including JavaScript will not work anymore (hint: you'll need to add `type="module"` somewhere)

### Day 3 - Modules and the Browser

If your code is divided between, say, 8 different files and you use JavaScript modules, the browser will have to download 8 files instead of one. Moreover, older browsers don't support modules.  
For this reason (and more) most JavaScript projects these days use something called a "bundler".

A bundler is a program that you run from the command line. At its core, a bundler takes your JavaScript files, reads all the import and export declarations, and generates a single output JavaScript file (often minified) that can be natively read by any browser. Kind of like what SASS does when it turns a number of `.sass/.scss` files into one compressed CSS file.

You really get the best of both worlds: you can keep your code well structured and organized, and the browser can easily parse it as a single file.

Popular bundlers include Parcel, Webpack, Rollup, and Browserify.

1. To use a bundler you need to use **npm**. We will look at **npm** more in-depth tomorrow, and for the moment I just ask that you blindly follow these instructions:  
   a. Make sure you have **Node.js** installed (prefer an <abbr title="Long Term Support">LTS</abbr> version)  
   b. In the terminal, go to your project's folder and type `npm init -y`  
   c. You may have a file called `.gitignore` (it starts with a dot) at the root of your project folder. If you don't, create one. Add the following in a new line:
   ```
   node_modules
   ```
2. Choose a bundler, follow its installation instructions, and use it from the command line (CLI) to generate the output JS file (often named `main.js`, or `bundle.js`).  
   _Don't know which bundler to pick? Webpack is the most popular, but not always easy to configure; Parcel is the simplest to get started with._
3. Edit your `index.html` so that it includes `main.js`.  
   _Hint: the generated JS file doesn't use "modules" anymore, we are back at plain old JS._
4. Optional: use your bundler to watch changes so that every time you edit and save your source files, a new output file is generated.
5. Optional: can you use your bundler to compile your SASS files as well?

## Good luck!

![](https://media.giphy.com/media/3ohzdCZQsrqHIqgTEk/giphy.gif)
