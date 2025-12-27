import z from 'zod';

export type LoginSchemaType = z.infer<typeof formSchema>;

export const formSchema = z.object({
  email: z.email(),
  password: z.string().nonempty({ error: 'Password is required' }),
});
