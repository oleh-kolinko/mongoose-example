const mongoose = require('mongoose');//Get mongoose module

//Connect to dataBase   path ->localhost/exampleApp
mongoose.connect('mongodb://localhost/exampleApp');
//                                         |
//                                    use exampleApp (mongoShell)


//Constructor func for creating new objects type of Cat :
//                         DocumentName       Schema{fieldName: type}
const Cat = mongoose.model(       'Cat'    ,      { name: String}  );
//     |
//     ----------------
//                     |
//Interacts with the 'cats' collection

const kitty = new Cat({ name : 'Ginger'});//Create new cat following Schema

//Save kitty to DB:
//kityy.save() === db.cats.insertOne({name: 'Ginger'});
kitty.save(err=>{
  if(err) throw err;

  console.log(`meow! New cat added  ${kitty.name} - ${kitty._id}`);
});

//Find objects in cats(Cat) collection
//Collection.find( {filter} , {projection}, callback)
//Cat.find() === db.cats.find( {}, {} );
Cat.find( {}, {}, (err,cats)=>{
  if(err) throw err;

  cats.forEach( cat =>{
    console.log(`  --> cat ${cat.name} - ${cat._id}`);
  });
});
