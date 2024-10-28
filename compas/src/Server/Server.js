// import express from 'express';
// import { createConnection } from 'mysql';
// const app = express();

// const db = createConnection({
//   host: 'localhost',
//   user: '',
//   password: '',
//   database: 'kb_itworx',
// });

// db.connect((err) => {
//   if (err) throw err;
//   console.log('MySQL Connected');
// });

// app.get('/api/data', (req, res) => {
//     const { practice, title } = req.query;
    
//     // let sqlPractice = `SELECT Title FROM ${practice}`;
//     let sqlTitle = `SELECT * FROM ${practice} WHERE Title = ${title}`;
//     let sql = console.log(`Enter Database... and ${practice} and ${title}`);
    
    
//     db.query(sql, (err, result) => {
//       if (err) throw err;
//       res.send(result);
//     });
// })

// const port = 5000;
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });