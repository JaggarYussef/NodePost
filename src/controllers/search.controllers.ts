import express, { Request, Response } from 'express';
import { User } from '../model/user.model';
import blogPost from '../model/blogPost.model';
import comment from  '../model/comment.model';
import mongoose, { Schema } from 'mongoose';



const getAllUsers= async (req: Request, res: Response)=> {

    const allUsers = await User.find();
    res.send(allUsers);

}

const getUserById = async (req: Request, res: Response) => {
    const id = req.params.userId;
    const oneUser=  await User.findById(id, {password: 0});
    res.send(oneUser)
}

const getCommentById = async (req: Request, res: Response) => {
    const id = req.params.userId;
    const userComments=  await comment.find({userId: id})
    res.send(userComments)

}

const getBlogPostById = async (req: Request, res: Response) => {
    const id = req.params.userId;
    const userPosts = await blogPost.find({user: id})
    res.send(userPosts);
}

export {getAllUsers, getUserById, getCommentById, getBlogPostById};    