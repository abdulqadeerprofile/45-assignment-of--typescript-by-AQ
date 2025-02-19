// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a 
// message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message,
//  and a shirt of any size with a different message.

function make_shirt2(size: string, message: string): void {
    console.log(`You have ordered a ${size}-sized shirt with the message: "${message}".`);
}

// Example usage:
make_shirt2('Medium', 'I adore TypeScript');
make_shirt2('Small', 'Code with confidence!');
make_shirt2('X-large', 'Code with qadeer!');