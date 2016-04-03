let greet = (name) => {
    if (name) {
        return "Hello, " + name;
    } else {
        return "Hello";
    }
};

exports.greet = greet;
