const express = require("express")
const mysql = require("mysql2")
const app = express()
const port =3001

const Connection =mysql.createConnection({
    host:"127.0.0.1",
    database:"retail_store_db",
    user:"root",
    password:"root"
})

Connection.connect((err)=>{
    if(err)
    {
        console.log(err);
    }
    else
    {
         console.log("DB is connected successfully...❤️");
    }

})

app.use(express.json())
app.get("/",(req , res , next)=>{
    res.status(200).json({message : "welcome on my app ....❤️"})

})

//Api 1
app.get("/products/create-tables", (req, res , next) => {

    const createSuppliersTable = `
        CREATE TABLE IF NOT EXISTS suppliers (
            supplier_id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            contactNumber VARCHAR(20)
        )
    `;

    const createProductsTable = `
        CREATE TABLE IF NOT EXISTS products (
            product_id INT AUTO_INCREMENT PRIMARY KEY,
            product_name VARCHAR(100) NOT NULL,
            price DECIMAL(10,2) NOT NULL,
            stock_quantity INT NOT NULL,
            supplier_id INT,
            CONSTRAINT fk_products_suppliers
            FOREIGN KEY (supplier_id)
            REFERENCES suppliers(supplier_id)
            ON DELETE RESTRICT
            ON UPDATE RESTRICT
        )
    `;

    Connection.execute(createSuppliersTable, (err) => {
        if (err) {
            return res.status(500).json({ message: "Error creating suppliers table", err });
        }

        Connection.execute(createProductsTable, (err) => {
            if (err) {
                return res.status(500).json({ message: "Error creating products table", err });
            }

            res.status(200).json({
                message: "Tables created successfully ✅"
            });
        });
    });
});
//Api 2
app.get("/products/add-column" , (req , res , next)=>{
    query = `ALTER TABLE products ADD COLUMN Category INT(11) NOT NULL`
    Connection.execute(query, (err)=>{
        if(err){
           return res.status(404).json({message:`err in query`})
        }
        res.status(200).json({message : "done create column Category"})

    })
})
//Api 3
app.get("/products/drop-column" , (req , res , next)=>{
    query = `ALTER TABLE products DROP COLUMN Category `
    Connection.execute(query, (err)=>{
        if(err){
           return res.status(404).json({message:`err in query`})
        }
        res.status(200).json({message : "done drop column Category"})

    })
})
//Api 4
app.get("/suppliers/change" , (req , res , next)=>{
 const query = `ALTER TABLE suppliers MODIFY contact_number VARCHAR(15)`;
    Connection.execute(query, (err)=>{
        if(err){
           return res.status(500).json({message:`err in query`})
        }
        res.status(200).json({message : "contactNumber column updated successfully"})

    })
})
//Api 5
app.get("/products/add-not-null" , (req , res , next)=>{
 const query = `ALTER TABLE products MODIFY product_name VARCHAR(100) NOT NULL;`;
    Connection.execute(query, (err)=>{
        if(err){
           return res.status(500).json({message:`err in query`})
        }
        res.status(200).json({message : " done product_name not null "})

    })
})
//Api 6-a
app.post("/suppliers/add", (req, res ,next) => {

    const { supplier_name, contact_number } = req.body;
    const insertQuery = `INSERT INTO suppliers(supplier_name, contact_number) VALUES (?, ?)`;
    Connection.execute(insertQuery, [supplier_name, contact_number], (err, result) => {
        if (err) return res.status(500).json({ message: "Error in query", err });
         result.affectedRows > 0 ?
         res.status(201).json({message : `done cerate`}):
         res.status(404).json({message : `filde cereated`})

    });
});
//Api 6-b
app.post("/products/aadd", (req, res) => {
    const getSupplierQuery = `SELECT supplier_id FROM suppliers WHERE supplier_name = 'FreshFoods'`;

    Connection.execute(getSupplierQuery, (err, result) => {
        if (err) return res.status(500).json({ message: "Error fetching supplier", err });
        if (result.length === 0) return res.status(404).json({ message: "Supplier 'FreshFoods' not found" });
        const supplierId = result[0].supplier_id;

        const insertProductsQuery = `
        INSERT INTO products (product_name, product_price, product_stockQuantity, Supplier_id)
        VALUES 
        ('Milk', 15.00, 50, ?),
        ('Bread', 10.00, 30, ?),
        ('Eggs', 20.00, 40, ?)
        `;

        Connection.execute(insertProductsQuery, [supplierId, supplierId, supplierId], (err, result) => {
            if (err) return res.status(500).json({ message: "Error inserting products", err });
            res.status(201).json({ message: "Products added successfully" });
        });
    });

});
//Api 6-c
app.post("/sales/add", (req, res) => {
    const { product_id, quantity_sold, sale_date } = req.body;
    const checkProductQuery = `SELECT * FROM products WHERE product_id=?`;
    Connection.execute(checkProductQuery, [product_id], (err, result) => {
        if (err) return res.status(500).json({ message: "Error checking product", err });
        if (result.length === 0) return res.status(404).json({ message: "Product not found" });
        const insertSaleQuery = `
            INSERT INTO sales (product_id, quantity_sold, sale_date)
            VALUES (?, ?, ?)
        `;

        Connection.execute(insertSaleQuery, [product_id, quantity_sold, sale_date], (err, result) => {
            if (err) return res.status(500).json({ message: "Error inserting sale", err });

            res.status(201).json({ message: "Sale record added successfully " });
        });
    });
});
//Api 7
app.patch("/products/price/:id", (req, res) => {
  const {id} = req.params
  const {product_name,product_price} =req.body
  let arr =[]
  if(product_name) arr.push(product_name)
  if(product_price) arr.push(product_price)
 const query =`update  products set ${product_name ? "product_name=?": ""} ${product_price ? ",product_price=?": ""}  where product_id=?`
  Connection.execute(query , [...arr , id] , (err , result)=>{
    if(err)
    {
        return res.status(404).json({message:`err in query`})
    }
     result.affectedRows > 0 ?
        res.status(201).json({message : "done update"}):
        res.status(404).json({message : " fild to update"})

  })

});
//Api 8
app.delete("/products/delete/:id", (req, res) => {
    const { id } = req.params;
    const query = `DELETE FROM products WHERE product_id=?`;

    Connection.execute(query, [id], (err, result) => {
        if (err) {
            console.log(err); 
            return res.status(500).json({ message: "Error in query", err });
        }

        if (result.affectedRows > 0) {
            res.status(200).json({ message: "Product deleted successfully ✅" });
        } else {
            res.status(404).json({ message: "Product not found" });
        }
    });
});
//Api 9
app.get("/sales/total", (req, res) => {

    const query = `
        SELECT p.product_name, SUM(s.quantity_sold) AS total_sold
        FROM products p
        LEFT JOIN sales s ON p.product_id = s.product_id
        GROUP BY p.product_name
    `;

    Connection.execute(query, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ message: "Error fetching total sales", err });
        }

        res.status(200).json({ total_sales: result });
    });
});
//Api 10
app.get("/products/highest-stock", (req, res) => {

    const query = `
            SELECT * 
        FROM products 
        ORDER BY product_stockQuantity DESC 
        LIMIT 1
    `;

    Connection.execute(query, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ message: "Error fetching total sales", err });
        }
         

          if (result.length === 0) {
            return res.status(404).json({ message: "No products found" });
        }
        res.status(200).json({ highest_stock_product: result[0] });
    });
});
//Api 11
app.get("/suppliers/starts-with-f", (req, res) => {

    const query = `
       SELECT * 
    FROM suppliers 
    WHERE supplier_name LIKE 'F%';

    `;

    Connection.execute(query, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(404).json({message:`err in query` , err})
        }
      
          if (result.length === 0) {
            return res.status(404).json({ message: "No products found" });
        }
        res.status(200).json({ suppliersStartsWithF : result });
    });
});
//12
app.get("/products/never-sold", (req, res) => {

    const query = `
    SELECT p.*
    FROM products p
    LEFT JOIN sales s ON p.product_id = s.product_id
    WHERE s.product_id IS NULL;


    `;

    Connection.execute(query, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(404).json({message:`err in query` , err})
        }
      
          if (result.length === 0) {
            return res.status(404).json({ message: "No products found" });
        }
        res.status(200).json({ suppliersStartsWithF : result });
    });
});
//13
app.get("/sales/all", (req, res) => {

    const query = `
       SELECT s.sale_id, p.product_name, s.quantity_sold, s.sale_date
        FROM sales s
        JOIN products p ON s.product_id = p.product_id;


    `;

    Connection.execute(query, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(404).json({message:`err in query` , err})
        }
      
      
          if (result.length === 0) {
            return res.status(404).json({ message: "No products found" });
        }
        res.status(200).json({ salesAll : result });
    });
});
// 14 api
// 15 api
// 16 api
app.use("{/*demo}" , (req , res , next)=>{
    res.status(404).json({message:`url ${req.originalUrl} NOT FOUND`})
})

app.listen(port , ()=>{
     console.log(`the server is runnig on port ${port}....❤️ 📌`);

})