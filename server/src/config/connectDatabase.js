// sau khi chạy hàm này thì đã kết nối được với database của mysql 
const { Sequelize } = require('sequelize');


// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('phongtro123', 'root', null, {
  host: 'localhost',
  dialect: 'mysql',
  logging: false // tắt ghi nhật ký
});

// viết hàm kiểm tra xem đã kết nối được với DB chưa
const connectDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

export default connectDatabase