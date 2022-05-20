const mongoose = require('mongoose');

module.exports = async () => {
	try {
		const connectionsParams = {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		};
		await mongoose.connect(
			"mongodb://localhost:3001/todo-app",
			connectionsParams,
		)
		console.log("Connected to database.");
	} catch (error) {
		console.log("Could not connect to database.", error);
	}
}