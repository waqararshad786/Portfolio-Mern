import User from '../model/userModel.js';


        // api for creating the data 

export const create = async(req , res) =>{
    try {

        const userData = new User(req.body);

        if(!userData){
            return res.status(404).json({msg: " user data not found"})
        }

        const savedData = await userData.save();
        res.status(200).json({msg : "you have submit the form succesfuuly"});


    } catch (error) {
        res.status(500).json({error: error});
    }
}