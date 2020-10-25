import { Injectable, NestMiddleware } from '@nestjs/common';

import {Controller , Response, Post ,Body, Get , Param, Patch , Delete,UseGuards, Request} from '@nestjs/common'
import jwt_decode from "jwt-decode";


@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(@Request() req, @Response() res, next: any) {
    const header = req.headers.authorization
        const head_split = header.substr(7,header.length-7)
        const decoded = jwt_decode(head_split);
        req.decoded = decoded
    next();
  }
}
