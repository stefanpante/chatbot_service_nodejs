import * as Joi from 'joi';
import * as validation from './validation';
import createService = require('./service');
import { Request, Response, NextFunction } from 'express';
import { ServiceConfig, ChatbotMessage } from './types';

const createController = (config: ServiceConfig) =>
     async(req: Request, res: Response, next: NextFunction) => {
       try {
         const result = Joi.validate(
           req.body,
           Joi.object().keys(validation.messagevalidation),
         );
         if (result.error !== null) {
           throw(result.error);
         }
         const service = createService(config);
         const returnMessage = await service(req.body);
         res.json(returnMessage);
       } catch (e) {
         console.log('Something went wrong in the serviceController', e);
         next(e);
       }
     };
export = createController;