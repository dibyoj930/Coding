function isValidHTML(input) {
    const stack = [];
    let i = 0;

    while (i < input.length) {
        if (input[i] === '<') {
            let isClosing = input[i + 1] === '/';
            let j = isClosing ? i + 2 : i + 1;
            let tagName = "";

            // Read until '>' to get tag name
            while (j < input.length && input[j] !== '>') {
                tagName += input[j];
                j++;
            }

            if (tagName.length === 0 || j === input.length) {
                // Malformed tag
                return false;
            }

            if (isClosing) {
                // Closing tag
                if (stack.length === 0 || stack.pop() !== tagName) {
                    return false;
                }
            } else {
                // Opening tag
                stack.push(tagName);
            }

            i = j + 1; // Move past '>'
        } else {
            i++; // Ignore other characters
        }
    }

    return stack.length === 0;
}
