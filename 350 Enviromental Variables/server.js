const app = require('http')
    .createServer((req, res)=> res.sendDate('oh hi there!'));

const PORT = process.env.PORT;

app.listen(PORT, () => {
console.log(`Server is running on ${PORT}`);
})

console.log(process.env);

//Test only