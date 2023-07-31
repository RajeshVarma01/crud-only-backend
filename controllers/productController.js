import Product from "../model/Product.js";

// //Add new product
export const postproduct_new = async (req, res) => {
    const {name, email, password, batch} = req.body
    let existingStudent;
    try{
        existingStudent = await Product.findOne({email})
    }catch(err){
        console.log(err)
    }
    if(existingStudent){
        return res.status(400).json({
            message: "user already there"
        })
    }
    // Imported bcryptjs package and used bcrypt.hashSync(password) method to convert the password into unreadeble format.

//    const hashedPassword = bcrypt.hashSync(password);
   //    console.log(hashedPassword)
   
      const newStudent = new Product({
       name: name,
       email: email,
       password: password,
       batch: batch
      })
      try{
      await newStudent.save()
      }catch(e){
       console.log(e)
      } 
      res.status(200).json({
       message:"NEW STUDENT CREATED"
      })
   }

//Get single product
// export const getproduct_single = async (req, res) => {
//     let singleproduct;
//     try{
//         singleproduct = await Product.findById(req.params.ProductId)
//         console.log(singleproduct)
//     }catch(err){

//     }
//     if(!singleproduct){
//         res.status(400).json({
//             message: "single user not found"
//         })
//     }
//     res.status(200).json(singleproduct)
// }

// Get all products
export const getproduct_all = async (req, res) => {
    let products;
    try{
        products = await Product.find()
        console.log(products)
    }catch(err){

    }if(!products){
        res.status(400).json({
            message: "No data found"
        })
    }res.status(200).json(products)
}

// //Delete product
export const deleteproduct_delete = async (req, res) => {
    const id = req.params.id
    let productId;
    try{
        productId = await Product.findOne({id})
    }catch(err){
        console.log(err)
    }
    if(!productId){
        res.status(400).json({
            message:"No product found to delete them"
        })
    }
    try{
        await Product.deleteOne({id})
    }catch(err){
        console.log(err)
    }
    res.status(200).json({
        message: "Product successfully deleted"
    })
}

// //Update product
// export const updateproduct_update = async (req, res) => {
//     const id = req.params.id
//     const { name, password, email, batch } = req.body
//     let product;
//     try{
//         product = await Product.findByIdAndUpdate(id, {
//             name,
//             password,
//             email,
//             batch
//         })
//     }catch(err){
//         console.log(err)
//     }
//     if(!product){
//         res.status(400).json({
//             message: "No user found to edit"
//         })
//     }
//     res.status(200).json({product})
// }

export const updateStudentController = async (req, res) =>{
    const id =  req.params.id
    const {name,password, email, batch} = req.body

    let upproduct
    try{
        console.log("first")
        upproduct = await Product.findByIdAndUpdate(id,{
            name,
            email,
            password,
            batch
        })
        console.log("last")
    }catch(e){
        console.log(e)
    }

    if(!upproduct){
        res.status(400).json({
            message:"No used found"
        })
    }

    res.status(200).json({upproduct})
    

}
