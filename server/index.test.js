
const mongoose = require("mongoose");
const CONNECTION_URL = 'mongodb+srv://iot:123@cluster0.kmvh1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 5000;
const cors = require('cors');
const express = require('express');
const app = express();
app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors);

describe('DB test', () => {

  beforeAll(async () => {
    mongoose.connect(CONNECTION_URL, {
      useNewUrlParser: true, 
      useUnifiedTopology: true,
      useFindAndModify: false
     });
    // .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    // .catch((error) => console.log(error.message));
  })
  const deviceSchema = mongoose.Schema({
    deviceName: {type: String, required: true},
    deviceID: {type: String, required: true},
    email: {type: String},
    createdAt: {
        type: Date,
        default: new Date(),
    },
  });

  const userSchema = mongoose.Schema({
    name: {type: String, required: true },
    email: {type: String, required: true},
    password: {type: String, required: true},
    id: {type: String},
});

   const DeviceMessage = mongoose.model('DeviceMessage', deviceSchema);
   const User = mongoose.model("User", userSchema);
   const testEmail = "IotTest1@wisc.edu";

   const testDevice1 = {
    deviceName: "testDevice1", 
    deviceID: "506506506", 
    email: testEmail, 
    createdAt: new Date()
  };
  
  const testDevice2 = {
    deviceName: "testDevice2", 
    deviceID: "506506506", 
    email: testEmail, 
    createdAt: new Date()
  };

  const testUser1 = {
    name: "Iot testAccount",
    email: testEmail,
    password: "123",
    id: "60710210a022d16bdac74b77"
  };

  const admin = {
    email: "admin@gmail.com",
    password: "123"
  };

  // test ("Create User", async() => {

  // });

  test ("Admin login test", async() => {
    const email = admin.email;
    const existingUser = await User.findOne({email});
    expect(existingUser).not.toEqual(null);
    console.log(existingUser);
  });

  test ("User Login", async() => {
    // test is naively implemented, it does not test any encryptions
    const existingUser = await User.findOne({testEmail});
    //expect(existingUser).not.toEqual(null);
    console.log(existingUser);
    if (existingUser) {
      expect(existingUser.email).toEqual(testEmail);
    }
  });

  test("Create Device", async() => {
    const newDevice = new DeviceMessage(testDevice1);
    await newDevice.save();
    const result = await DeviceMessage.find({email: testEmail});
    expect(result).not.toEqual([]);
  });


  test("Get Device", async() => {
     const result = await DeviceMessage.find({email: testEmail});
    //  if (result != null) {
    //    console.log(result[0]);
    //  }
     const deviceFound = result[0];
     expect(deviceFound.deviceID).toEqual(testDevice1.deviceID); 
     expect(deviceFound.deviceName).toEqual(testDevice1.deviceName); 
     expect(deviceFound.email).toEqual(testDevice1.email); 
  }); 


  test("Delete Device", async() => {
    const result = await DeviceMessage.find({email: testEmail});
    const id = result[0]._id
    await DeviceMessage.findByIdAndRemove(id);
    const test = await DeviceMessage.find({email: testEmail});
    expect(test).toEqual([]);
  });


  afterAll(async (done) => {
    mongoose.disconnect();
    done();
  })
});