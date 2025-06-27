###  Datatypes and their Memory Size

MongoDB supports the following data types:
- String       (UTF-8 encoded, variable size)
- Integer      (4 bytes - int32, 8 bytes - int64)
- Double       (8 bytes)
- Boolean      (1 byte)
- ObjectId     (12 bytes)
- Date         (8 bytes)
- Array        (Varies)
- Object       (Varies)
- Binary data  (Varies)


---

### Operators and Aggregation used sum,max,min,count,avg

student> db.students.aggregate([   { $group: { _id: "$name", totalMarks: { $sum: "$marks" } } }
...  ])
[
  { _id: 'Kavya', totalMarks: 85 },
  { _id: 'Mahalakshmi', totalMarks: 88 },
  { _id: 'Anjali', totalMarks: 92 }
  
]
student> db.students.aggregate([
...   { $group: { _id: "$name", maxMarks: { $max: "$marks" } } }
... ])
...
[
  { _id: 'Kavya', maxMarks: 91 },
  { _id: 'Mahalakshmi', maxMarks: 88 },
  { _id: 'Anjali', maxMarks: 92 }
  
]
student> db.students.aggregate([
...   { $group: { _id: "$name", minMarks: { $min: "$marks" } } }
... ])
...
[
  { _id: 'Kavya', minMarks: 85 },
  { _id: 'Mahalakshmi', minMarks: 88 },
  { _id: 'Anjali', minMarks: 92 }
  
]
student> db.students.aggregate([
...   { $group: { _id: "$name", subjectCount: { $sum: 1 } } }
... ])
...
[
  { _id: 'Kavya', subjectCount: 1 },
  { _id: 'Mahalakshmi', subjectCount: 1 },
  { _id: 'Anjali', subjectCount: 1 }
]
  
student> db.students.aggregate([
...   { $group: { _id: "$name", avgMarks: { $avg: "$marks" } } }
... ])
...
[
  { _id: 'Kavya', avgMarks: 88 },
  { _id: 'Mahalakshmi', avgMarks: 88 },
  { _id: 'Anjali', avgMarks: 92 }
  
]

### Setup Users and Roles

student> use admin
... switched to db admin

admin> db.createUser({
...   user: "maha",
...   pwd: "maha123",
...   roles: [ { role: "readWrite", db: "studentDB" } ]
... })
{ ok: 1 }
admin> db.auth("maha", "maha123")
... 1
1
admin>