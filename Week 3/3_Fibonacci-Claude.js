function fibo(num) {
    if (num <= 2) {
        return 1;
    }
    return fibo(num - 1) + fibo(num - 2);
}