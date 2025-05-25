import { client } from "..";
/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function createTodo(userId: number, title: string, description: string) {
    try{
        await client.connect();
        const createQuery = "INSERT INTO todo (user_id, title, description) VALUES ($1, $2, $3) RETURNING title, description, done, id;";
        const values = [userId, title, description];
        const result = await client.query(createQuery, values);
        return result.rows[0];
    } catch(err) {
        console.error(`Error during insertion: ${err}`);
        return null;
    } finally{
        await client.end();
    }
}
/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number) {
    try{
        await client.connect();
        const updateQuery = "UPDATE todos SET done = true WHERE id = $1 RETURNING title, description, done, id;"
        const values = [todoId];
        const result = await client.query(updateQuery, values);

        if(result.rows.length > 0) {
            console.log(`Todo updated succefully: ${result.rows[0]}`);
            return result.rows[0];
        }
    } catch(err){
        console.error(`Error while updating todos: ${err}`);
        return null;
    } finally {
        await client.end();
    }
}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number) {
    try{
        await client.connect();
        const getQuery = "SELECT * FROM todos WHERE user_id = $1;";
        const values = [userId];
        const result = await client.query(getQuery, values);

        if(result.rows.length > 0) {
            console.log(`Found ${result.rows.length} for ${userId};`);
            return result.rows;
        }
    } catch (err){
        console.error(`Error while getting todos: ${err}`);
        return [];
    } finally{
        await client.end();
    }
}
