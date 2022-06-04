import { Router } from 'express';
import { IAuthPayload } from './songs/mmodels';
import * as yup from 'yup';
import UserModel from './songs/models/user';
import {login} from './songs/models/user';
export const AuthRouter = Router();
import jwt from 'jsonwebtoken';





let authPayloadSchema = yup.object().shape({
	password: yup.string().required(),

	email: yup.string().email().required(),
});

AuthRouter.post('/register', async (req, res) => {
	const authPayload: IAuthPayload = req.body;

	try {
		const isPayloadValid = await authPayloadSchema.validate(authPayload);

        const newUserObj = new UserModel(isPayloadValid)
        const newUser = await newUserObj.save()

		
		res.status(201).json({
            _id:newUser._id,
            email:newUser.email,
            createdAt: newUser.createdAt
        });
	} catch (error) {
		console.log(error);
		res.status(422).json({ errors: error.errors });
	}
});

//asagidaki key envoirement saxlanmali.env de saxlanmalidir.deploymente cixmali deyil.JUst for tapshiriq case
let JWT_SECRET_KEY='verysecretkey'

AuthRouter.post('/login', async (req, res) =>{
    const loginPayload:IAuthPayload = req.body
    try {
        const validPayload = await authPayloadSchema.validate(loginPayload)
        

        try {
            const user = await login(validPayload.email,validPayload.password);
            const token = jwt.sign({_id:user._id,email:user.email},JWT_SECRET_KEY,{
                expiresIn:'30s'
            });
            res.json({token})
        } catch (error) {
            res.status(422).json({errors:error.message})
        }




    } catch (error) {
        res.status(422).json({error: error.message})
    }

}
	
);
