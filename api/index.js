var exp_data= {
      "mod1": {
        "name1": "Ruth",
        "job1": "programmer"
      },
      "mod2": {
        "name2": "Miut",
        "job2": "contacter"
      }
    }

module.exports=(req,res)=>{
  res.json(exp_data);
}
