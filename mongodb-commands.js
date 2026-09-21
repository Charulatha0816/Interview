use Students

db.students.find().pretty()

db.students.find({name: "charu"}).pretty()

db.students.updateOne(
  {name: "charu"},
  {$pull: {skills: "MongoDB"}}
)

db.students.deleteOne({name: "TestUser"})

db.students.deleteMany({department: "TEMP"})

db.students.createIndex({department: 1})

db.students.find({department: "CSE"}).explain("executionStats")