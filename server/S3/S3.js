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

const fileFilter = function(req, file, cb) {

	/* Validation on the recipe name has to be done here, before the photos are 
	uploaded. The upload.array function that is used to upload the photos to the 
	S3 bucket will not execute if it is placed after the express-validator functions. 
	This is because the form submitted is multipart and Express cannot parse it. 
	Multer must be ran first so that it can populate req.body. The express-validator 
	functions will be ran after that. If the below code is excluded, then the photos 
	of a submitted recipe would still be uploaded to the S3 bucket even if the form 
	doesn't pass validation. This is undesireable. */
	if (req.body.name.length === 0) {
		cb(new Error('You must enter a recipe name'), false);
	}

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


const deletePhoto = function(key) {
	s3.deleteObject({
		Bucket: process.env.S3_BUCKET_NAME,
		Key: key
	}, function(err) {
		if (err) {
			console.log(err);
		}
	});
};

module.exports = {upload, deletePhoto};