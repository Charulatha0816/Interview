// MongoDB Student Management

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

// Supplier Management
db.suppliers.insertOne({
  supplierId: "SUP001",
  supplierName: "ABC Suppliers",
  phone: "9876543210",
  email: "abc@gmail.com",
  address: "Chennai"
})

// Product Management
db.products.insertOne({
  productId: "PROD001",
  productName: "Laptop",
  category: "Electronics",
  price: 55000,
  supplierId: "SUP001"
})

// Stock Management
db.stocks.insertOne({
  stockId: "STK001",
  productId: "PROD001",
  quantity: 50,
  reorderLevel: 10,
  location: "Warehouse A"
})

// Customer Management
db.customers.insertOne({
  customerId: "CUS001",
  customerName: "Charu",
  phone: "9876543210",
  email: "charu@gmail.com",
  address: "Coimbatore"
})

// Order Management
db.orders.insertOne({
  orderId: "ORD001",
  customerId: "CUS001",
  orderDate: "2026-09-21",
  products: [
    {
      productId: "PROD001",
      quantity: 2,
      price: 55000
    }
  ],
  totalAmount: 110000,
  status: "Pending"
})

// Display all management data
db.suppliers.find().pretty()
db.products.find().pretty()
db.stocks.find().pretty()
db.customers.find().pretty()
db.orders.find().pretty()