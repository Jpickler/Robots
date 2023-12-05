const client = require('./client.cjs');


const seedData = async () => {
  console.log(`seeding the data`);

  try {
    await client.query(`
    INSERT INTO "Robots" ("Name", "ModelNumber", "Company", "ImageUrl", "MonthsBeforeBreakdown", "IsSafeAroundChildren", "ReleaseDate")
    VALUES 
        ('Striker Eureka', '3241', 'Oceana Division of Pan Pacific Defense Corp', '../src/images/strikerEureka.jpg', 22, false, '2019-11-02'),
        ('Gipsy Danger', '61273', 'Pan Pacific Defense Corp', 'gipsyDanger.jpg', 18, true, '2017-10-07'),
        ('Valor Omega', 'MechFleet 0407', 'Pan Pacific Defense Corp', 'valorOmega.jpg', 13, true, '2018-07-22'),
        ('Gipsy Avenger', 'V5 20 Rev8', 'Next Gen Mech', 'gipsyAvenger.jpg', 23, true, '2018-02-14'),
        ('Chrimson Typhoon', 'Midnight Orb 9', 'Tri-Sun Horizon', 'chrimsonTyphoon.jpg', 17, false, '2018-08-22'),
        ('Bracer Phoenix', 'Phoenix Mark 7', 'Pan Pacific Defense Corp', 'bracerPhoenix.jpg', 11, false, '2018-12-11'),
        ('Guardian Bravo', 'D9-67T', 'Sequel Makers', 'guardianBravo.jpg', 23, true, '2019-04-27');


    INSERT INTO "Tasks" ("TaskName") 
    VALUES
      ('Dishwashing'),
      ('Playing Music'),
      ('Eliminating Enemies'),
      ('Driving'),
      ('Translating Speech');
  
    INSERT INTO  "Reviewers"("ReviewerEmail","ReviewerName", "ReviewerPhone")
    VALUES
    ('bob@aol.com', 'Bob Moses', 1234567),
    ('jenny@hotmail.com', 'Jenny Doe', 8675309),
    ('jjjhs@name.com', 'John Jacob JH Smith', 8760987),
    ('dixie@south.net', 'Dixie Normus', 8305839);
  
    INSERT INTO  "RobotReviewer"("RobotID","ReviewerID")
    VALUES
    (3,1),
    (5,2),
    (6,3),
    (4,4),
    (2,2),
    (1,4),
    (2,4),
    (5,1);
      
    INSERT INTO  "RobotTask"("RobotID","TaskID")
    VALUES
    (3,5),
    (5,4),
    (6,2),
    (4,1),
    (2,3),
    (1,5),
    (2,4),
    (5,2);
    `);


    console.log(`robot data created`);

  } catch (err) {
    console.log(err);
  } finally {
    client.end()
  }
}

module.exports = seedData;





