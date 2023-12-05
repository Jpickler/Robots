
const client = require ('./db/client.cjs');
const seedData = require('./db/seed.cjs');



const dropTable= async ()=>{
    try{
    await client.query(`
    DROP TABLE IF EXISTS "RobotTask";
    DROP TABLE IF EXISTS "RobotReviewer";
    DROP TABLE IF EXISTS "Reviewers";
    DROP TABLE IF EXISTS "Tasks";
    DROP TABLE IF EXISTS "Robots";

    `);
    console.log(`tables dropped`);
    }catch(err){
      console.log(err);
    }
  }; // end dropTable  


  const createTable = async () =>{
    try{
      await client.query(`
      CREATE TABLE "Robots" (
      "RobotID" SERIAL PRIMARY KEY NOT NULL,
      "Name" VARCHAR(50) NOT NULL,
      "ModelNumber" VARCHAR(50) NOT NULL,
      "Company" VARCHAR(50) NOT NULL,
      "ImageUrl" VARCHAR(50) NOT NULL,
      "MonthsBeforeBreakdown" INTEGER NOT NULL,
      "IsSafeAroundChildren" BOOLEAN NOT NULL,
      "ReleaseDate" DATE NOT NULL
      );

      CREATE TABLE "Tasks"(
        "TaskID" SERIAL PRIMARY KEY NOT NULL,
        "TaskName" VARCHAR(255) NOT NULL
      );

      CREATE TABLE "Reviewers"(
        "ReviewerID" SERIAL PRIMARY KEY NOT NULL,
        "ReviewerEmail" VARCHAR(100) NOT NULL,
        "ReviewerName" VARCHAR(100) NOT NULL,
        "ReviewerPhone" INTEGER NOT NULL
      );

      CREATE TABLE "RobotReviewer"(
        "RobotID" INTEGER NOT NULL,
        "ReviewerID" INTEGER NOT NULL
      );
    
      CREATE TABLE "RobotTask"(
        "RobotID" INTEGER NOT NULL,
        "TaskID" INTEGER NOT NULL
      );

      ALTER TABLE
        "RobotReviewer" ADD CONSTRAINT "robotreviewer_reviewerid_foreign" FOREIGN KEY("ReviewerID") REFERENCES "Reviewers"("ReviewerID");
      ALTER TABLE
        "RobotTask" ADD CONSTRAINT "robottask_taskid_foreign" FOREIGN KEY("TaskID") REFERENCES "Tasks"("TaskID");
      ALTER TABLE
        "RobotReviewer" ADD CONSTRAINT "robotreviewer_robotid_foreign" FOREIGN KEY("RobotID") REFERENCES "Robots"("RobotID");
      ALTER TABLE
        "RobotTask" ADD CONSTRAINT "robottask_robotid_foreign" FOREIGN KEY("RobotID") REFERENCES "Robots"("RobotID");

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
      await seedData();

      client.end();

  }catch(err){
    console.log(err);
  };
}; // end seedAndSync

seedAndSync();

module.exports = seedAndSync