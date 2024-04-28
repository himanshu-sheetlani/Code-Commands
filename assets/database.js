import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'hackwave',
    password: 1234
});


try {
    connection.query("SELECT*FROM login", (err, result)=>{
        if(err) throw err;
        console.log(esult);
    })
} catch(err){
    console.log(err)
}
//     const [results, fields] = await connection.query(
//       ''
// );

//     console.log(results); // results contains rows returned by server
//     console.log(fields); // fields contains extra meta data about results, if available
//     } catch (err) {
//         console.log(err);
//     }