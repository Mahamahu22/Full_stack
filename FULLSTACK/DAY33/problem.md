##  Common Problems During Concurrent Operations

###  1. Dirty Reads
When a transaction reads data that has been written by another transaction but not yet committed.

| Timestamp | DB State     | Transaction 1            | Transaction 2                      |
|-----------|--------------|--------------------------|-------------------------------------|
| T1        | balance = 1000 |                          | Updates balance → 500 (not committed) |
| T2        |              | Reads balance = 500      |                                     |
| T3        |              |                          | Rolls back changes                 |
|  Result   |              | Transaction 1 reads **invalid** data |

---

###  2. Non-Repeatable Reads
When the same query in a transaction returns different results due to changes by another transaction.

| Timestamp | DB State     | Transaction 1       | Transaction 2        |
|-----------|--------------|---------------------|-----------------------|
| T1        | price = 100  | Reads price = 100   |                       |
| T2        |              |                     | Updates price = 120   |
| T3        |              | Reads price = 120   |                       |
|  Result   |              | Two different reads in same transaction |

---

###  3. Phantom Reads
Occurs when rows appear/disappear in two identical queries within the same transaction.

| Timestamp | DB State         | Transaction 1               | Transaction 2             |
|-----------|------------------|-----------------------------|----------------------------|
| T1        | 2 orders > 500   | Reads 2 orders              |                            |
| T2        |                  |                             | Inserts order of 600       |
| T3        |                  | Reads 3 orders now          |                            |
| Result    |                  | New data appeared mid-query |

---

###  4. Lost Update Problem
Two users update the same data concurrently, one change overwrites the other.

| Timestamp | DB State | User 1 Action        | User 2 Action        |
|-----------|----------|----------------------|----------------------|
| T1        | X = 5    |                      |                      |
| T2        |          | Reads X = 5          |                      |
| T3        |          |                      | Reads X = 5          |
| T4        |          | X = X + 2 → 7        |                      |
| T5        |          |                      | X = X - 1 → 4        |
|  Result   | X = 4     | Final value = 4, User 1’s update is lost |

---


## Solutions & Techniques to Handle Concurrent Operations in MongoDB

When multiple users access or modify the database at the same time, concurrency issues like lost updates or inconsistent reads may occur. MongoDB provides several techniques to handle these situations safely.

---

##  1. Atomic Operations

- MongoDB ensures **atomicity at the document level**.
- This means single-document updates (like `$inc`, `$set`, etc.) are completed fully or not at all.

###  Example:
```js
db.students.updateOne(
  { name: "Mahalakshmi" },
  { $inc: { marks: 5 } }
)

### 2. Versioning (Optimistic Locking)

Optimistic locking is a concurrency control technique used to prevent **lost updates** during concurrent operations.

It works by:
- Adding a `version` field to each document.
- When updating, checking the current `version`.
- If another process has already updated the document and changed the version, the current update fails — preventing data overwrite.

---

###   Example (MongoDB Shell)

```js
db.students.updateOne(
  { _id: ObjectId("685fc13234c71313f3a8d080"), version: 1 },
  { 
    $set: { marks: 90 },
    $inc: { version: 1 }
  }
)
----------
##  3. Transactions

MongoDB supports **multi-document transactions**, allowing you to group multiple operations into a single atomic unit.

If any part of the transaction fails, the entire operation is rolled back — ensuring **data integrity**.

---

###  Mongoose Example

```js
const session = await mongoose.startSession();
session.startTransaction();

try {
  await Student.updateOne(
    { name: "Maha" },
    { $set: { marks: 95 } },
    { session }
  );

  await Course.updateOne(
    { name: "Maths" },
    { $inc: { seats: -1 } },
    { session }
  );

  await session.commitTransaction();
  session.endSession();
} catch (err) {
  await session.abortTransaction();
  session.endSession();
}

-------

##  4. Read Concern & Write Concern

These settings control how strict MongoDB is about **read/write consistency**.

- **Read Concern**: Defines the level of isolation for read operations — how fresh or committed the data must be.
- **Write Concern**: Specifies the level of acknowledgment requested from MongoDB for write operations — ensuring safety and durability.

---
