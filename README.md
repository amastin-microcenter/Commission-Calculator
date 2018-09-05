# Commission Calculator
The purpose of this calculator is to provide employees with an idea of how much they are making per hour, so they can more accurately gauge how they are doing on a particular day.

## General Sales
When a user inputs sales information from Sales Lookup, the following happens:

  - Each transaction is turned into an object, with the same properties that each line in Sales Lookup has.
  - The calculator then goes through each transaction and calculates the commission of each item based on its price.
  ..* $9.99 and under: 6%
  ..* $99.99 and under: 3%
  ..* $100.00 and up: 1.5%
  ..* Service plans: 10%
  ..* Items not in department: 0.75%

  - Earned commission is then grouped into categories (items under $10, items under $100, items over $100).
  
Once all calculations are complete, the form disappears from the page, and the output dialog appears. The user's estimated hourly wage is displayed here. The user can also press the '+' button to show additional statistics about their sales.

## Build Your Own
*Not yet implemented*

## Systems
*Not yet implemented*