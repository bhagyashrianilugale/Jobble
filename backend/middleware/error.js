// const ExpressError = require("../utils/ExpressError.js");
 
// const errorHandler = (err, req, res, next)=>{
//     let {error} = {err}
//     let statusCode = err.statusCode || 500;
//     let errorMessage = err.message || "Internal Server Error";

//    //Mongoose Duplicate error handler
//     if (err instanceof mongoose.Error) {
//         if (err.code === 11000) {
//           errorMessage = 'Duplicate key error. This resource already exists.';
//           statusCode = 400;
//           error = new ExpressError(message, 400);

//         } 
//     }

//     else if (err instanceof mongoose.CastError){
//         errorMessage = `Page not found ${err.value}`;
//         error = new ExpressError(message, 404);
//     }
       

//     // Handle custom Job-BoardError

//     else if (err instanceof ExpressError) {
//             statusCode = err.statusCode;
//             errorMessage = err.message;
//          }
      

//     // Handle JSON parse errors

//     else if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
//         errorMessage = "Invalid JSON format in the request body.";
//         statusCode = 400;
//         error = new ExpressError(message, 400);

//       }

//     // Log the error for further investigation
//      console.error(err.stack);
    
//      res.status(statusCode).json({
//         error: {
//           message: errorMessage || "server error",
//         },
//      }) 
//   };


// module.exports = errorHandler;