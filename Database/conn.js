import mongoose from "mongoose";

async function connect(){
   await mongoose.connect(process.env.DB_CONNECT, { useUnifiedTopology: true, useNewUrlParser: true }),
   () => console.log("connected to db")
}

export default connect