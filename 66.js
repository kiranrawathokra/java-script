function areAnagrams(str1, str2) {
    str1 = str1.replace(/\s+/g, "").toLowerCase();
    str2 = str2.replace(/\s+/g, "").toLowerCase();

    return str1.split("").sort().join("") === str2.split("").sort().join("");
}

const string1 = "listen";
const string2 = "silent";

if (areAnagrams(string1, string2)) {
    console.log(`"${string1}" and "${string2}" are anagrams.`);
} else {
    console.log(`"${string1}" and "${string2}" are not anagrams.`);
}
