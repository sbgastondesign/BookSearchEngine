const mongoose = require('mongoose');

// mongoose.connect(
//   process.env.MONGODB_URI || 'mongodb://localhost/infinite-lowlands-20725',
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false
//   }
// );

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/google-books',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);
module.exports = mongoose.connection;