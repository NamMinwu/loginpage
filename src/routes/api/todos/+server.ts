import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { PrismaClient } from '@prisma/client';

export const POST = (async (event) => {
    const data = await event.request.json();
    const prismaClient = new PrismaClient();
    const todo = await prismaClient.todo.create({data :
        {title : data.title, content : data.content}
    });
    return json(todo);
}) satisfies RequestHandler;