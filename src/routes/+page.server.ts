import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { PrismaClient } from '@prisma/client';

export const load = (async () => {
    const prismaClient = new PrismaClient();
    const todos = await prismaClient.todo.findMany();
    console.log(todos);
    return {todos}
}) satisfies PageServerLoad;