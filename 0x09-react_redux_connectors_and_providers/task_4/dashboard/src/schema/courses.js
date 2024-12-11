import {normalize} from "normalizr";
import {schema} from "./schema";
import { Map } from "immutable";
import { fromJS } from "immutable";

const courseShema = new schema.Enity('courses');
const courseShema2 = new schema.Array(courseShema);

export const coursesNormalizer = (data) => normalize(data, courseShema2).Enity.courses;