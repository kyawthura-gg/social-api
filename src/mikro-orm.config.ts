import { Options } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import path from "path";

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [Post],
  dbName: "node_graphql",
  user: "kanhaiyaaryal",
  password: "password",
  type: "postgresql",
  debug: !__prod__,
} as Options;
