import z from 'zod';

export type LoginSchemaType = z.infer<typeof loginSchema>;
export type RegisterSchemaType = z.infer<typeof registerSchema>;

export const loginSchema = z.object({
  email: z.email(),
  password: z.string().nonempty({ error: 'Password is required' }),
});

const onRegisterAccountTypeSchema = z
  .object({
    accountType: z.enum(['personal', 'company']),
    companyName: z.string().optional(),
    numberOfEmployees: z.coerce.number<number>().optional(),
    acceptTerms: z.literal(true, {
      error: 'You must accept the terms and conditions',
    }),
  })
  .superRefine((data, ctx) => {
    if (data.accountType === 'company' && !data.companyName) {
      ctx.addIssue({
        code: 'custom',
        path: ['companyName'],
        message: 'Company name is required',
      });
    }
    if (
      data.accountType === 'company' &&
      (!data.numberOfEmployees || data.numberOfEmployees < 1)
    ) {
      ctx.addIssue({
        code: 'custom',
        path: ['numberOfEmployees'],
        message: 'Number of employees is required',
      });
    }
  });

const onRegisterPasswordSchema = z
  .object({
    password: z
      .string()
      .min(8, 'Password must contain at least 8 characters')
      .refine((password) => {
        // Must contain at least 1 special character and 1 uppercase character
        return /^(?=.*[!@#$%^&*])(?=.*[A-Z]).*$/.test(password);
      }, 'Password must contain at least 1 special character and 1 uppercase character'),
    passwordConfirm: z.string(),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.passwordConfirm) {
      ctx.addIssue({
        code: 'custom',
        path: ['passwordConfirm'],
        message: 'Passwords do not match',
      });
    }
  });

export const registerSchema = z
  .object({
    email: z.email(),
    dateOfBirth: z.date({ error: 'Please select a date' }).refine((date) => {
      const today = new Date();
      const adultAge = new Date(
        today.getFullYear() - 18,
        today.getMonth(),
        today.getDate()
      );
      return date <= adultAge;
    }, 'You must be at least 18 years old'),
  })
  .and(onRegisterPasswordSchema)
  .and(onRegisterAccountTypeSchema);
