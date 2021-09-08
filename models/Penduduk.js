const mongoose = require("mongoose");

const pendudukScheme = new mongoose.Schema({
    nama: {
        type: String,
        required: true,
    },
    alamat:{
        type: String,
        required: true,
    },
    jenis_kelamin:{
        type: String,
        required: true,
    },
    pekerjaan:{
        type:String,
        required: true,
    },
    no_telp:{
        type: Number,
        required: true,
    }
})

module.exports = mongoose.model("Penduduk", pendudukScheme);