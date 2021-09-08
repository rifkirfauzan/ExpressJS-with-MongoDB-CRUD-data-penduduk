const Penduduk = require("../models/Penduduk");
module.exports = {
    viewPenduduk: async (req,res) => {
        try{
            const penduduk = await Penduduk.find();
            const alertMessage = req.flash("alertMessage");
            const alertStatus = req.flash("alertStatus");
            const alert = { message: alertMessage, status: alertStatus};
            res.render("index", {
                penduduk,
                alert,
                title: "CRUD DATA PENDUDUK",
            });
        }catch (error){
            res.redirect("/penduduk");
        }
    },

    addPenduduk: async (req, res) => {
        try {
            const { nama, alamat, jenis_kelamin, pekerjaan, no_telp } = req.body;
             await Penduduk.create({nama, alamat, jenis_kelamin, pekerjaan, no_telp });
             req.flash("alertMessage", "Data penduduk berhasil ditambahkan");
             req.flash("alertStatus", "success");
             res.redirect("/penduduk");
           }catch (error) {
            req.flash("alertMessage", `${error.message}`);
            req.flash("alertStatus", "danger");
            res.redirect("/penduduk");
          }
        },

 editPenduduk: async (req, res) => {
  try {
    const { id, nama, alamat, jenis_kelamin, pekerjaan, no_telp } = req.body;
    const penduduk = await Penduduk.findOne({ _id: id });
    penduduk.nama = nama;
    penduduk.alamat = alamat;
    penduduk.jenis_kelamin = jenis_kelamin;
    penduduk.pekerjaan = pekerjaan;
    penduduk.no_telp = no_telp;
    await penduduk.save();
    req.flash("alertMessage", "Data penduduk berhasil diedit");
    req.flash("alertStatus", "success");
    res.redirect("/penduduk");
  } catch (error) {
    req.flash("alertMessage", `${error.message}`);
    req.flash("alertStatus", "danger");
    res.redirect("/penduduk");
  }
},

  deletePenduduk: async (req, res) => {
    try {
      const { id } = req.params;
      const penduduk = await Penduduk.findOne({ _id: id });
      await penduduk.remove();
      req.flash("alertMessage", "Data penduduk berhasil dihapus");
      req.flash("alertStatus", "warning");
      res.redirect("/penduduk");
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/penduduk");
    }
  },


}