import stringHash from "string-hash";
import * as cookie from 'cookie'
import { v4 as uuidv4} from 'uuid'
import { Tedis } from "tedis";

const db = new Tedis({
    host: "127.0.0.1",
    port: 6379
});

export async function post({ body })
{
    
};
