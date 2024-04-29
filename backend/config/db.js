import mongose from 'mongoose'

// a mongoose stuf (mongoose.connect ....) return always a promise
const connectDB = async () => {
    try{
        const conn = await mongose.connect(process.env.MONGODB_URI,{
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        })
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (error) {
      console.error(`Error: ${error.message}`)
            process.exit(1)
    }
}

export default connectDB