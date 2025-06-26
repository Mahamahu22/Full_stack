test> show dbs
admin   40.00 KiB
config  12.00 KiB
local   40.00 KiB

test> use studentDB
switched to db students

studentDB> db.students.insertMany([
  { name: "Mahalakshmi", age: 21, subject: "Maths", marks: 88 },
  { name: "Anjali", age: 22, subject: "Physics", marks: 92 },
  { name: "Kavya", age: 20, subject: "Biology", marks: 85 },
  { name: "Divya", age: 23, subject: "Chemistry", marks: 90 }
])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('685d2faeceb82b983f748a63'),
    '1': ObjectId('685d2faeceb82b983f748a64'),
    '2': ObjectId('685d2faeceb82b983f748a65'),
    '3': ObjectId('685d2faeceb82b983f748a66')
  }
}

studentDB> db.students.find()
[
  {
    _id: ObjectId('685d2faeceb82b983f748a63'),
    name: 'Mahalakshmi',
    age: 21,
    subject: 'Maths',
    marks: 88
  },
  {
    _id: ObjectId('685d2faeceb82b983f748a64'),
    name: 'Anjali',
    age: 22,
    subject: 'Physics',
    marks: 92
  },
  {
    _id: ObjectId('685d2faeceb82b983f748a65'),
    name: 'Kavya',
    age: 20,
    subject: 'Biology',
    marks: 85
  },
  {
    _id: ObjectId('685d2faeceb82b983f748a66'),
    name: 'Divya',
    age: 23,
    subject: 'Chemistry',
    marks: 90
  }
]

studentDB> db.students.updateOne(
  { name: "Kavya" },
  { $set: { marks: 91 } }
)
{
  acknowledged: true,
  matchedCount: 1,
  modifiedCount: 1
}

studentDB> db.students.deleteOne({ name: "Divya" })
{
  acknowledged: true,
  deletedCount: 1
}

studentDB> db.students.find()
[
  {
    _id: ObjectId('685d2faeceb82b983f748a63'),
    name: 'Mahalakshmi',
    age: 21,
    subject: 'Maths',
    marks: 88
  },
  {
    _id: ObjectId('685d2faeceb82b983f748a64'),
    name: 'Anjali',
    age: 22,
    subject: 'Physics',
    marks: 92
  },
  {
    _id: ObjectId('685d2faeceb82b983f748a65'),
    name: 'Kavya',
    age: 20,
    subject: 'Biology',
    marks: 91
  }
]
