# Exercise 2: Unit Testing
Write a 4-5 number of unit tests for your application for any of the modules. This exercise will be evaluated not based on the complexity of the test cases but on the elegance of how it is written. You should have used dependency injection in your application, so mock the dependencies.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

## Running unit tests

Run `ng test` to execute the unit tests.

The Following Test Cases are created:
## TitleCasePipe
transforms "Abc" to "abc" ✅

transforms "ABC" to "abc" ✅

## UserComponent
titletesting ✅

htmltesting ✅

## AppComponent
should have the 'exercise2' title ✅

should create the app ✅

should render title ✅

## SwitchComponent
#clicked() should toggle #isOn ✅
