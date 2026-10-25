const alerts = [
    { id: 1, service: "payments" },
    { id: 2, service: "users" },
    { id: 3, service: "payments" },
    { id: 4, service: "orders" }
];

// Return unique services names from the alerts array

const services = [
    ...new Set(alerts.map(alert => alert.service))
];

// What does Set do?

// Set is a built-in JavaScript object that allows you to store unique values of any type.
// In this case, it's used to remove duplicate service names from the array.

// Why do you use the spread operator?

// The spread operator (...) is used to expand the elements of the Set into an array.
// This is necessary because Set objects are not directly iterable as arrays.