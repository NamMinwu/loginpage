import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { PrismaClient } from '@prisma/client';

export const POST = (async ({ request, locals }) => {
	const data = await request.json();
	const prismaClient = new PrismaClient();
	const user = locals.user;
    if(user == null) return json({ error: 'Not logged in' }, { status: 401 }
	const todo = await prismaClient.todo.create({
		data: { title: data.title, content: data.content, userId: user.id }
	});
	return json(todo);
}) satisfies RequestHandler;
