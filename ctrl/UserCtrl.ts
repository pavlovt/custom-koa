import {JsonController, Param, Body, Get, Post, Put, Delete} from "routing-controllers";
import Person from '../models/Person';

@JsonController()
export default class UserCtrl {

    @Get("/users")
    async getAll() {
      const people = await Person.query();
      return people;
    }

    /*@Get("/users/:id")
    getOne(@Param("id") id: number) {
       return userRepository.findById(id);
    }

    @Post("/users")
    post(@Body() user: User) {
       return userRepository.insert(user);
    }*/
}