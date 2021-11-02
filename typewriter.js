const sentence = "hello there from lighthouse labs";
let timeoutInterval = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, timeoutInterval); // <= 1s delay to make it noticeable. Can dial it down later.
  timeoutInterval += 50;
}
