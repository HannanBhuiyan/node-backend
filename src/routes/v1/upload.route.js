const express = require("express");
const { uploadPostController, uploadGetController } = require("../../controllers/upload.controller");
const router = express.Router();



router.post("/", uploadPostController);
router.get('/imageList', uploadGetController);


module.exports = router;

/**
 * @swagger
 * /upload:
 *   post:
 *     summary: Image Upload
 *     tags: [ImageUpload]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - image 
 *             properties:
 *               image:
 *                 type: string
 *                 format: binary
 *             
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 Image:
 *                   $ref: '#/components/schemas/UploadImage'
 *                  
 */


/**
 * @swagger 
 * /upload/imageList:
 *   get:
 *     description: Only admins can retrieve all users.
 *     tags: [all Image]
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 results:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/ImageUpload'
 
 */
