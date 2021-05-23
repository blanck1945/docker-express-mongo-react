import mongoose from "mongoose"

class MongoConnection {
  url = "mongodb://mongodb/kanasBE";

  options = { useUnifiedTopology: true, useNewUrlParser: true };

  async connectDB() {
    try {
      const db = await mongoose.connect(this.url, this.options);
      console.log("Server Connected to DB on Host " + db.connection.host);
    } catch (err) {
      console.error(err);
    }
  }
}

export default new MongoConnection()
