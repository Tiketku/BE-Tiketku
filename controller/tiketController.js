const { tiket_airplane } = require('../models')

const getData = async (req,res) => {
    try{
        data = await tiket_airplane.findAll({
            include: ["seat","flight","passenger"]
        })
        console.log(data)
        if(data){
            return res.status(200).json({
                status: "success",
                data : data
            })
        }else{
            return res.status(200).json({
                status: "success",
                data : "tidak ada"
            })
        }
        
    }catch(error){
        res.status(400).json({
            status: "failed",
            message: error.message
          })
    }
}

module.exports = {
    getData
}