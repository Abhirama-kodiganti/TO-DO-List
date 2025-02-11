const mongoose = require("mongoose");

const conn = async () => {
  try {
    await mongoose
      .connect("mongodb+srv://Abhiramk:Pocom2%402004@cluster0.ugwhb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
      .then(() => {
        console.log("Connected");
      });
  } catch (error) {
    console.log("Not Connected");
  }
};

conn();
