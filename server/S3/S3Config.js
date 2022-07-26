require('dotenv').config();
const fs = require('fs');
const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

aws.config.update({
	secretAccessKey: process.env.S3_ACCESS_KEY,
	accessKeyId: process.env.S3_ACCESS_KEY_ID,
	region: process.env.S3_REGION
});

const s3 = new aws.S3();

const fileFilter = (req, file, cb) => {
	if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg' || 
		file.mimetype === 'image/png'
	) {
		cb(null, true);
	} else {
		cb(new Error('Invalid file type, only JPEG, JPG, and PNG is allowed'),
			false);
	}
};

const upload = multer({
	fileFilter,
	storage: multerS3({
		acl: 'bucket-owner-read',
		s3,
		bucket: process.env.S3_BUCKET_NAME,
		metadata: function(req, file, cb) {
			cb(null, {fieldName: 'photo metadata'});
		},
		key: function(req, file, cb) {
			cb(null, Date.now().toString());
		},
	}),
});

module.exports = upload;