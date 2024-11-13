import prisma from '../../lib/prisma';

export default async function handler(req, res) {
  const { method, body, query } = req;

  switch (method) {
    case 'POST':
      // Create a new post
      const post = await prisma.post.create({ data: body });
      res.status(200).json(post);
      break;
      
    case 'GET':
      // Fetch all posts
      const posts = await prisma.post.findMany();
      res.status(200).json(posts);
      break;
      
    case 'PUT':
      // Update an existing post by ID
      const { id } = query;
      const updatedPost = await prisma.post.update({
        where: { id: parseInt(id) },
        data: body,
      });
      res.status(200).json(updatedPost);
      break;
      
    case 'DELETE':
      // Delete a post by ID
      const { id: postId } = query;
      await prisma.post.delete({
        where: { id: parseInt(postId) },
      });
      res.status(204).end(); // No content
      break;

    default:
      res.status(405).end(); // Method Not Allowed
  }
}
