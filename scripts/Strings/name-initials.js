// A function that receives a string as a parameter (name) and returns the initials of that stirng (name)

// A function that receives a string (name)
// and returns the initials of that name.

const nameInitials = (name) => {
    // Validate input
    if (typeof name !== "string") {
        throw new Error("The name must be a string.");
    }

    // Remove leading/trailing whitespace
    name = name.trim();

    if (name.length === 0) {
        throw new Error("The name must be given.");
    }

    // Replace one or more hyphens with spaces
    const words = name
        .replace(/-+/g, " ")
        .split(/\s+/);

    let initials = "";

    for (const word of words) {
        initials += word.charAt(0).toUpperCase();
    }

    return initials;
};

// ======================
// Testing examples
// ======================

console.log(nameInitials("Vlad Mocanu"));                 // VM
console.log(nameInitials("John Smith"));                  // JS
console.log(nameInitials("Mary Jane Watson"));            // MJW
console.log(nameInitials("Jean-Claude Van Damme"));       // JCVD
console.log(nameInitials("  Ana   Maria  Popescu  "));    // AMP
console.log(nameInitials("vlad"));                        // V

// Error examples
try {
    console.log(nameInitials(""));
} catch (error) {
    console.log(error.message);
}

try {
    console.log(nameInitials(123));
} catch (error) {
    console.log(error.message);
}