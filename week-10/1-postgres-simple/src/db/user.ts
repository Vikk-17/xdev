import { client } from "..";

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(username: string, password: string, name: string) {
    try{
        await client.connect(); 
        const createQuery = "INSERT INTO users (username, password, name) VALUES ($1, $2, $3) RETURNING username, password, name;"
        const values = [username, password, name];
        const result = await client.query(createQuery, values);
        return result.rows[0];
    } catch(err){
        console.error(`Error during the insertion: ${err}`);
        return null;
    } finally {
        await client.end();
    }
}


/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
    try{
        await client.connect(); 
        const getQuery = "SELECT * FROM users WHERE user_id=$1;"
        const values = [userId];
        const result = await client.query(getQuery, values);
        if(result.rows.length > 0){
            console.log("Todos found: ", result.rows);
            return result.rows;
        }else{
            console.log("No users found with the given userid");
            return [];
        }
        console.log(`Found: ${result}`);
    } catch(err){
        console.error(`Error during the searching: ${err}`);
        return null;
    } finally {
        await client.end();
    }
}
