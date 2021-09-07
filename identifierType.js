// Functional scope identifier/variable specifier 'var'
var a = 10;

// Block scope identifier specifier 'const' and 'let'

// 'let' - block level scope
{
  let x;
  x = 10;
  x = 20;

  console.log(x); // Display 20 as o/p

  console.log(a); // Displays 10 as o/p
}
console.log(x); // Generates reference error,since calling x out of its block

// 'const' - immutable and has block level scope
{
  const y = "picasso";
  console.log(y); // Displays picasso as o/p

  y = "Samsher"; // Generates error, since const variable cannot be modified

  console.log(a); // Displays 10 as o/p
}
console.log(y); // Generates reference error,since calling y out of its block

console.log(a); // Displays 10 as o/p
