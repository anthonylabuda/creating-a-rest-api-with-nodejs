import multer from "multer";

import settings from "../settings.js";

const fileFilter = (req, file, callback) => {
    if (settings.middleware.multer.options.fileFilter.mimetypes.includes(file.mimetype)) return callback(null, true);

    callback(null, false);
}
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, settings.middleware.multer.options.storage.destination);
    },
    filename: (req, file, callback) => {
        callback(null, settings.middleware.multer.options.storage.filename(file.originalname));
    }
});

const options = {
    fileFilter,
    limits: settings.middleware.multer.options.limits,
    storage
};

export default multer(options);
