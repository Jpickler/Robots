
const client = require ('./db/client.cjs');



const dropTable= async ()=>{
    try{
    await client.query(`
    DROP TABLE IF EXISTS robots
    `);
    console.log(`tables dropped`);
    }catch(err){
      console.log(err);
    }
  }; // end dropTable  


  const createTable = async () =>{
    try{
      await client.query(`
      CREATE TABLE robots (
      "RobotID" VARCHAR(100) NOT NULL,
      "Name" VARCHAR(50) NOT NULL,
      "ModelNumber" VARCHAR(50) NOT NULL,
      "Company" VARCHAR(50) NOT NULL,
      "ImageURL" VARCHAR(50) NOT NULL,
      "MonthsBeforeBreakdown" INTEGER NOT NULL,
      "IsSafeAroundChildren" BOOLEAN NOT NULL,
      "ReleaseDate" DATE NOT NULL
      )
      `);
      console.log(`tables created`);
    }catch(err){
      console.log(err);
    };
  }; // end createTable

const seedAndSync = async() =>{
  console.log(`inside the seedAndSync function`);

    try{
      await client.connect();
      console.log(`connected to the database`);
      await dropTable();
      await createTable();

      client.end();

  }catch(err){
    console.log(err);
  };
}; // end seedAndSync

seedAndSync();

module.exports = seedAndSync