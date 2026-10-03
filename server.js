const express = require("express");
const cors = require("cors");

const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Sports Equipment Booking API is running!"); //running the equipment API 
});

app.get("/equipment",(req,res)=>{
    const sql="SELECT * FROM equipment";

    db.query(sql,(err,result)=>{
        if(err){
            return res.status(500).json({error:error.message});
        }
            return res.json(result);
        
    });
});

//bookings API 

app.post("/bookings",(req,res)=>{
    const { student_name, equipment_id, booking_date } = req.body;

    const sql=`INSERT INTO bookings(student_name, equipment_id, booking_date,status)
            VALUES(?,?,?,?)`

            const values=[
                student_name,
                 equipment_id,
                  booking_date,
                  "Booked"
            ]

            //then sending the API 

           db.query(sql,(err,result)=>{
        if(err){
            return res.status(500).json({error:error.message});
        }

        res.status(201).json({
            message: "Equipment booked successfully!",
            booking_id: result.insertId
        });

    });
});


//get all the booksings

app.get("/bookings",(req,res)=>{
    const sql=`SELECT * FROM BOOKINGS`

    //incase of any error 
    db.query(sql,(err,result)=>{
        res.status(500).json({error:error.message});
    });

    res.status(result);
});

//last API return 

app.put

app.listen(3000, () => {  //creating the port 
    console.log("Server running on port 3000");
});