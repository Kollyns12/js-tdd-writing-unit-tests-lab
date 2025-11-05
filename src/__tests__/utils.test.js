
import { isPalindrome } from "../utils";


test("returns true if the word is a palindrome", () => {
  expect(isPalindrome("racecar")).toBe(true);
});

test("returns false if the word is not a palindrome", () => {
  expect(isPalindrome("car")).toBe(false);
});


test("returns true for mixed case palindromes", () => {
  expect(isPalindrome("RaceCar")).toBe(true);
});

test("returns false for an empty string", () => {
  expect(isPalindrome("")).toBe(false);
});


test("throws an error if the word contains non-alphabetic characters", () => {
  expect(() => isPalindrome("racecar123")).toThrow("Word must contain only alphabetic characters");
});

test("throws an error if input is not a string", () => {
  expect(() => isPalindrome(12321)).toThrow("Input must be a string");
});
