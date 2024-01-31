import * as z from 'zod';

export const speedDialFormSchema = z.object({
  name: z.string().min(1, 'The name should be at least one character'),
  link: z.string().url('The link should be a valid URL'),
});
