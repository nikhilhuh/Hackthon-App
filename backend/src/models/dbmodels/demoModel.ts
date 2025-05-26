import mongoose from "mongoose";

const demoSchema = new mongoose.Schema({
  rollNo: Number,
  name: String,
  age: Number,
  course: String,
});

const demoModel = mongoose.model("DemoCollection", demoSchema, "DemoCollection");
// by default, mongoose will pluralise the collection name so third argument ensures it uses the exact name "DemoCollection"
export {demoModel};
// Usage: Import this model in your routes or controllers to interact with the 'DemoCollection' in MongoDB
