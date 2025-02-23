//standardised error and response from the server

const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
     //here next is middleware
            Promise.resolve(requestHandler(req, res, next))
            .catch((err) => next(err)); 
    
    }
}

export { asyncHandler }