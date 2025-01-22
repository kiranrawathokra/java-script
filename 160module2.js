export function lowerCase(str) {
    if (typeof str !== "string")  {
        throw new Error("Input must be a string");
    }
    return str.toLowerCase();
    }

export function uppercase(str) {
    if (typeof str !== "string") {
        throw new Error("Input must be a string");
    }
    return str.toUpperCase();
    }

