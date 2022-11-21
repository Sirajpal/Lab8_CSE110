// unit.test.js

const { executablePath } = require('puppeteer');
const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

//Phone number tests
test('test a valid phone number with parenthesis', () => {
    expect(functions.isPhoneNumber("(123) 456-7891")).toBe(true);
});
test('test a valid phone number no parenthesis', () => {
    expect(functions.isPhoneNumber("123-456-7891")).toBe(true);
});
test('test an invalid phone number with parenthesis', () => {
    expect(functions.isPhoneNumber("(1234)56-7891")).toBe(false);
});
test('test an invalid phone number no parenthesis', () => {
    expect(functions.isPhoneNumber("(1234-56-7891")).toBe(false);
});

//valid email tests

test('test a valid email all letters', () => {
    expect(functions.isEmail("abcd@gmail.com")).toBe(true);
});
test('test a valid email letters and numbers', () => {
    expect(functions.isEmail("abcd1@gmail.com")).toBe(true);
});
test('test an invalid email one letter after dot', () => {
    expect(functions.isEmail("abcd@gmail.c")).toBe(false);
});
test('test an invalid email nothing before at', () => {
    expect(functions.isEmail("@gmail.com")).toBe(false);
});


//strong password tests

test('test a valid password with letters and numbers', () => {
    expect(functions.isStrongPassword("A1llBot")).toBe(true);
});
test('test a valid password with letters and an underscore', () => {
    expect(functions.isStrongPassword("All_Bot")).toBe(true);
});
test('test an invalid password - too short', () => {
    expect(functions.isStrongPassword("a")).toBe(false);
});
test('test an invalid password - does not start with a letter', () => {
    expect(functions.isStrongPassword("1lol")).toBe(false);
});


// valid date tests
test('test a valid date with month and day 1 digit', () => {
    expect(functions.isDate("1/1/2022")).toBe(true);
});
test('test a valid date with month and day 2 digits', () => {
    expect(functions.isDate("01/01/2022")).toBe(true);
});
test('test an invalid date with a letter', () => {
    expect(functions.isDate("a/1/2022")).toBe(false);
});
test('test an invalid date with a 2 digit year', () => {
    expect(functions.isDate("1/1/22")).toBe(false);
});


//valid hex code tests 

test('test a 3 character long hex code', () => {
    expect(functions.isHexColor("ff9")).toBe(true);
});
test('test a 6 character long hex code', () => {
    expect(functions.isHexColor("fffaa9")).toBe(true);
});
test('test a short hex code', () => {
    expect(functions.isHexColor("ff")).toBe(false);
});
test('test a too long hex code', () => {
    expect(functions.isHexColor("fff999a")).toBe(false);
});


