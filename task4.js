//  /*              ***               Part(1)              ***               */

// const express = require("express");
// const app = express();
// const port = 5001;


// app.use(express.json())

// app.post("/user" ,
//     (req ,res , next)=>{
//         if(req.body.emali == "user@emali.com"){
//          console.log("message:Emali already exists.");
//          return   res.status(409).json({message:"Emali already exists."})
//         }
//         next()
//     },
    
//     (req , res , next)=>{
//     res.status(201).json({message:"user added successfully" , body:req.body})
//     console.log("message: user added successfully ");
// })


// app.patch("/user/:id" ,
//     (req , res , next )=>{
//         if(req.params.id != 99){
//           return  res.status(200).json({body: req.body})
//         }
//         next()
//     },
    
//     (req , res , next )=>{
//     res.status(409).json({message:"user id not found" , params :req.params})
//     console.log("message:user id not found");
    
// })

// app.delete("/user{/:id}" ,
//     (req , res , next)=>{
//         if(req.params.id != 99){
//             console.log("message:user delete successfully " );
//             return res.status(200).json({message:"user delete successfully " , params :req.params})
//         }
//         next()
//     },
    
//     (req , res , next)=>{
//      res.status(404).json({message:"user id not found" , params :req.params})
//     console.log("message:user id not found");
    
// })



// app.get("/user/getByName" ,
//     (req , res , next)=>{
//         if(req.query.name != "ali"){
//             console.log("user name not found");
//            return res.status(404).json({message:"user name not found" , query :req.query })
//         }
//          next()
//     },
    
    
//     (req , res , next)=>{
//     res.status(200).json({message:"wellcom user" ,id :1 ,  name :"ali" , age:27 , emali:"user@emali.com"  })
//     console.log("Wellcom Ali");
// })

// app.get("/user" , (req , res , next)=>{
//     res.status(201).json({body :req.body})

// })

// const users = [
//   { id: 1, name: "ali", age: 27, email: "user1@email.com" },
//   { id: 2, name: "ahmed", age: 26, email: "user2@email.com" },
//   { id: 3, name: "mona", age: 20, email: "user3@email.com" },
// ];


// app.get("/user/filter", (req, res) => {
//   const minAge = parseInt(req.query.minAge);

  
//   if (isNaN(minAge)) {
//     return res.status(400).json({ message: "minAge query parameter is required and must be a number" });
//   }

//   const filteredUsers = users.filter((user) => user.age >= minAge);

//   if (filteredUsers.length === 0) {
//     return res.json({ message: "no user found" });
//   }

//   return res.json(filteredUsers);
// });

// app.get("/user/:id" ,

//        (req , res , next)=> {
//         if(req.params.id !=1){
//             console.log("user not found");
//              return  res.status(409).json({message : "user not found"})
//         }
//         next()
//     },

//     (req , res , next )=>{
//         res.status(201).json({id :1 ,  name :"user 1" , age:27 , emali:"user@emali.com"})
//     })

// app.use("{/*demo}" , (req , res , next)=>{
//     res.status(404).json({message :"Not Found", statusCode: 404})
// })


// app.listen(port , ()=>{
//     console.log(`server is running on port ${port}`);
    
// })


// /*              ***               Part(2)              ***               */


// Musician

//  MusicianID (PK)
//  Name
//  Street
//  City
//  Phone

// Instrument

//  InstrumentName (PK)
//  MusicalKey

// Album

//  AlbumID (PK)
//  Title (Unique)
//  CopyrightDate
//  ProducerID (FK -> Musician.MusicianID)

// Song

//  SongTitle (PK)
//  Author
//  AlbumID (FK -> Album.AlbumID)

// MusicianInstrument

//  MusicianID (PK, FK)
//  InstrumentName (PK, FK)

// Performance

//  MusicianID (PK, FK)
//  SongTitle (PK, FK)

// Relationships (Crow's Foot Notation):

// 1. Musician ---- produces ---- Album
//     Cardinality: 1 Musician produces 0..* Albums
//     Foreign Key: Album.ProducerID

// 2. Album ---- contains ---- Song
//     Cardinality: 1 Album contains 1..* Songs
//     Foreign Key: Song.AlbumID

// 3. Musician ---- performs ---- Song (via Performance)
//     Cardinality: 0..* Musicians perform 1..* Songs
//     Association Table: Performance

// 4. Musician ---- plays ---- Instrument (via MusicianInstrument)
//     Cardinality: 0..* Musicians play 0..* Instruments
//     Association Table: MusicianInstrument

// /*              ***               ennd             ***               */