document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("form").addEventListener("submit", function(e) {
        e.preventDefault();

        const x = parseFloat(document.getElementById("x").value);
        const y = parseFloat(document.getElementById("y").value);
        const operation = document.getElementById("działanie").value;

        let result;
        if (isNaN(x) || isNaN(y)) {
            result = "Invalid Input";
        } else {
            switch (operation) {
                case "multiply":
                    result = x * y;
                    break;
                case "divide":
                    result = y !== 0 ? x / y : "Cannot divide by zero";
                    break;
                case "add":
                    result = x + y;
                    break;
                case "subtract":
                    result = x - y;
                    break;
            }
        }

        document.getElementById("output").textContent = result;
    });
});
