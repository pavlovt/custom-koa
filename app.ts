import "reflect-metadata"; // this shim is required
import {createKoaServer} from "routing-controllers";
import conf from './conf';
import UserCtrl from "./ctrl/UserCtrl";

// import Knex from 'knex';
const Knex = require('knex');

// console.log(conf);
const { Model } = require('objection');
// import { Model } from 'objection';
// Initialize knex.
const knex = Knex(conf.knex);

/*knex.select().from('persons')
.then((res) => {
  console.log('res', res);
})*/

// Bind all Models to a knex instance. If you only have one database in
// your server this is all you have to do. For multi database systems, see
// the Model.bindKnex method.
Model.knex(knex);

// creates koa app, registers all controller routes and returns you express app instance
const app = createKoaServer({
   controllers: [UserCtrl]
});

app.listen(3000);