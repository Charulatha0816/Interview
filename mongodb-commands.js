// MongoDB Student Management

use Students

// 1. Display all students
db.students.find().pretty()

// 2. Find Charu
db.students.find({name: "charu"}).pretty()

// 3. Find CSE students
db.students.find({department: "CSE"}).pretty()

// 4. Find students with CGPA greater than 8
db.students.find({cgpa: {$gt: 8}}).pretty()

// 5. Limit the result
db.students.find().limit(3)

// 6. Update skills
db.students.updateOne(
  {name: "charu"},
  {$pull: {skills: "MongoDB"}}
)

// 7. Add email
db.students.updateOne(
  {name: "charu"},
  {$set: {email: "charu@gmail.com"}}
)

// 8. Delete one student
db.students.deleteOne({name: "TestUser"})

// 9. Delete multiple students
db.students.deleteMany({department: "TEMP"})

// 10. Create index
db.students.createIndex({department: 1})

// 11. Explain query
db.students.find({department: "CSE"}).explain("executionStats")