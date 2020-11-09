const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
	res.send({h1 : "There"});
});

app.listen(PORT, () => {
	console.log(`App runing on port ${PORT}`);
} );
