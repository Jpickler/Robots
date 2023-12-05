const client=require('./client.cjs');

const getRobots = async() =>{
  console.log(`getting robots`);

    try{
      const result = await client.query (`
      SELECT * FROM "Robots"
      `);
      console.log(result.rows);
      return result.rows;
    }catch(err){
      console.log(err);
    }
}

module.exports = {
  getRobots
}