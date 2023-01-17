import mongoose from "mongoose";

const mongoConnect = async () => {
    try {
        mongoose.set('strictQuery','true')
        await mongoose.connect('mongodb://localhost/comp-hausa-dic')
        console.log('connect')
    } catch (error) {
        console.log(error)
    }

}

export default mongoConnect