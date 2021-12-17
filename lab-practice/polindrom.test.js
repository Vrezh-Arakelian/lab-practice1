const polindrom = require("./polindrom");

test(
    "is polindrom", 
    () => {
       expect(polindrom("топот")).toBe(true);
    }
);