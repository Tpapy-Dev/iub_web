import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient, ObjectId } from 'mongodb';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { id } = req.query;

  let client;

  try {
    client = await MongoClient.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.error('Failed to connect to database: ', error);
    return res.status(500).json({ message: 'Failed to connect to database' });
  }

  const db = client.db();

  try {
    const result = await db.collection('iubrecords').findOne({ _id: new ObjectId(id) });
    if (!result) {
      console.log('record not found');
      return res.status(404).json({ message: 'Record not found' });
    }

    return res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <link rel="icon" href="./build/img/upao-logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>IUB Portal RECORDS | ${result.name}</title>
    </head>
    <body>
        <nav>
            <span>
              <img src='/img/upao-logo.png' alt='logo' style='width:40px'/>
            </span>
             
            <span class='navTitle'>IUB Record Portal</span>
          </nav>
    
          <section class='body'>
            <div class='bodyHeader'>
              <h3>${result.matric}</h3>
              <span>verified</span>
            </div>
    
            <span class='bodyDetails'>
              <table>  
                <tbody>
                  <tr>
                    <th>Name</th><td>${result.name}</td>
                  </tr>
                  <tr>
                    <th>Date of Birth</th> <td>${result.dob}</td>
                  </tr>
                  <tr>
                    <th>Gender</th> <td>${result.gender}</td>
                  </tr>
                  <tr>
                    <th>Matric No.</th><td>${result.matric}</td>
                  </tr>
                  <tr>
                    <th>Graduated</th><td>${result.year}</td>
                  </tr>
                  <tr>
                    <th>Department</th><td>${result.dept}</td>
                  </tr>
                  <tr>
                    <th>Grade</th> <td>${result.cgpa}</td>
                  </tr>
                </tbody>
              </table>
            </span>
          </section>
    
          <footer>
            &copy; IUB - ALL RIGHTS RESERVED, 2023
          </footer>
    </body>
    
    <style>
        *{
      padding:0;
      margin:0;
      transition:0.4s;
    }
    body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    
    nav{
      background-color:#fff;
      width:100vw;
      display:flex;
      align-items:center;
      justify-content: space-between;
      position:fixed;
      top:0;
    }
    nav span{
      padding:10px 30px;
    }
    .navTitle{
      font-size:20px;
      font-weight:500;
    }
    .body{
      padding-top:100px;
      display:flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width:100%;
    }
    .bodyHeader{
      width:300px;
      text-align:center;
      border:1px solid rgb(25, 112, 3);
      display:flex;
      justify-content: space-between;
      align-items: center;
    }
    .bodyHeader h3{
      width:70%;
      color:#52606b
    }
    .bodyHeader span{
      width:30%;
      background-color: #52606b;
      padding:12px;
      color:#fff;
    }
    .bodyDetails{
      padding-top:20px;
      width:700px;
      text-align: center;
    }
    .bodyDetails img{
      width:50%;
    }
    table{
      padding:50px;
      width:100%;
      border-collapse: collapse;
    }
    td, th {
      text-align: left;
      padding: 20px;
      font-size:14px;
    }
    tr:nth-child(even) {
      background-color: #dddddd;
    }
    
    footer{
      margin-top:30px;
      width:100%;
      text-align:center;
      position:static;
      bottom:0vh;
      font-size:10px;
    }
    
    @media only screen and (max-width:768px){
      .bodyDetails{
        width:90vw;
      }
    }
    </style>
    </html>
    `);
  } catch (error) {
    console.error('Failed to fetch record: ', error);
    return res.status(500).json({ message: 'Failed to fetch record' });
  } finally {
    client.close();
  }
}

