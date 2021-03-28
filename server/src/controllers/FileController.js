const fs = require('fs')

exports.upload = (req, res, next) => {
  console.log('fileController.upload: started', req.file)
  const file = req.file
  return res.status(200).json({
    status: "success"
  })
}

exports.download = (req, res, next) => {
  console.log('fileController.download: started')
  const path = req.body.path
  const file = fs.createReadStream(path)
  const filename = (new Date()).toISOString()
  res.setHeader('Content-Disposition', 'attachment: filename="' + filename + '"')
  file.pipe(res)
}