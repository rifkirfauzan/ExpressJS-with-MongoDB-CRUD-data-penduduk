// membuat variable router dengan require atau export variabel express
// Dan menggunakan metode Router

const router = require("express").Router();
// export controller yang ingin dipakai
const pendudukController = require("../controllers/pendudukController");

// endpoint karyawan
router.get("/", pendudukController.viewPenduduk); // Untuk view
router.post("/", pendudukController.addPenduduk);// Untuk add data
router.put("/", pendudukController.editPenduduk);
router.delete("/:id", pendudukController.deletePenduduk);

// Lalu export routernya
module.exports = router;