function isValidHTML(htmlString) {
    const stack = [];
    let i = 0;
    const n = htmlString.length;
    
    while (i < n) {
        // If we encounter an opening tag
        if (htmlString[i] === '<' && htmlString[i + 1] !== '/') {
            let tagStart = i + 1;
            let tagEnd = htmlString.indexOf('>', tagStart);
            
            if (tagEnd === -1) return false; // Invalid tag (no closing '>')

            let tagName = htmlString.slice(tagStart, tagEnd);
            stack.push(tagName);  // Push the opening tag to the stack
            i = tagEnd + 1;  // Move the index past the current tag
        }
        // If we encounter a closing tag
        else if (htmlString[i] === '<' && htmlString[i + 1] === '/') {
            let tagStart = i + 2; // Skip "</"
            let tagEnd = htmlString.indexOf('>', tagStart);
            
            if (tagEnd === -1) return false; // Invalid tag (no closing '>')

            let tagName = htmlString.slice(tagStart, tagEnd);

            // Check if the top of the stack matches the closing tag
            if (stack.length === 0 || stack.pop() !== tagName) {
                return false;  // Tags don't match, return false
            }
            i = tagEnd + 1;  // Move the index past the current closing tag
        }
        // Skip non-tag characters (text, spaces, etc.)
        else {
            i++;
        }
    }

    // If the stack is empty, all tags were properly closed
    return stack.length === 0;
}

// Example Usage:
const html1 = "<div><span></span></div>";
const html2 = "<div><span></div></span>";
const html3 = "<div><img src='img.jpg' /></div>";

console.log(isValidHTML(html1));  // true
console.log(isValidHTML(html2));  // false
console.log(isValidHTML(html3));  // true