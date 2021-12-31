// import mongoose package
import mongoose from "mongoose";

// declare a Database string URI
const DB_URI = "mongodb://localhost:27017/url-shortener";

// create a connection to the database
const connect = async () => {
	await mongoose.connect(DB_URI);
	console.log("database connected");
};
// export the connection as a function to be executed
export default connect;
