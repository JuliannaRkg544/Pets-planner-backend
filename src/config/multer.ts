import multer from "multer";
import path from 'path';

const storage = multer.diskStorage({
  destination: path.resolve( "../../public/data/uploads") ,
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
}) 

const upload = multer({dest:"./uploads"})


export default  upload