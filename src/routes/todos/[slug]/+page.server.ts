import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { PrismaClient } from '@prisma/client';

export const load = (async ({ params }) => {
    const prismaClient = new PrismaClient();
    const todo = await prismaClient.todo.findUnique({where:
        {id:Number(params.slug)}
    })
    if(todo === null) throw error(404);
    return todo

}) satisfies PageServerLoad;