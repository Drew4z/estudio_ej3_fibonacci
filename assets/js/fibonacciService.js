export const fibonacci = (n)=>{
    if (n === 0 || n === 1) {
        return n;
    }

    const result = fibonacci(n - 1) + fibonacci(n - 2);
    return result;
}