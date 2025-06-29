const mongoose = require('mongoose');

// ✅ Step 1: Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/academyDB')
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ MongoDB Connection Failed", err));

// ✅ Step 2: Schema and Model
const learnerSchema = new mongoose.Schema({
  studentName: String,
  level: String,
  score: Number,
  batch: String,
  isCertified: Boolean
});

const Learner = mongoose.model('Learner', learnerSchema);

// ✅ Step 3: CRUD Operations

// CREATE
const createLearner = async () => {
  const learner = new Learner({
    studentName: "Mahalakshmi",
    level: "Intermediate",
    score: 89,
    batch: "Batch-7A",
    isCertified: false
  });
  await learner.save();
  console.log("📌 Created:", learner);
};

// READ
const readLearners = async () => {
  const learners = await Learner.find();
  console.log("📚 Learner List:", learners);
};

// UPDATE
const updateLearner = async () => {
  const result = await Learner.updateOne(
    { studentName: "Mahalakshmi" },
    { $set: { score: 93, isCertified: true } }
  );
  console.log("✏️ Updated:", result);
};

// DELETE
const deleteLearner = async () => {
  const result = await Learner.deleteOne({ studentName: "Mahalakshmi" });
  console.log("🗑️ Deleted:", result);
};

// ✅ Step 4: Execute All
const run = async () => {
  await createLearner();
  await readLearners();
  await updateLearner();
  await readLearners();
  await deleteLearner();
  await readLearners();
  mongoose.connection.close();
};

run();
