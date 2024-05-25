import { error } from "console";
import { UserModel } from "../models/UserModel.js";
import bcrypt from "bcrypt";
// GET ALL USERS
export const getusers = async (req, res) => {
    let id = req.params.id;
    try {
        let users = await UserModel.find({ _id: id });
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};
export const getAllusers = async (req, res) => {
    try {
        let users = await UserModel.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

// ADD USERS

export const addUsers = async (req, res) => {
    try{
        const hashedPassword = await bcrypt.hash(req.body.password,10);
        //console.log(hashedPassword);
        const users = new UserModel({
            username: req.body.username,
            password: hashedPassword
        });
        await users.save();
        res.status(201).json(users);
    }catch(err){
        res.status(500).json({error:err});
    }
};


// authenticate

export const login = async (req, res) => {
    try {
        const users = await UserModel.findOne({ username: req.body.username });
        
        if (!users) {
            return res.status(400).send('Cannot find user');
        }
        
        const isPasswordValid = await bcrypt.compare(req.body.password, users.password);
        
        if (isPasswordValid) {
            res.send('Success');
        } else {
            res.send('Incorrect password');
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};



