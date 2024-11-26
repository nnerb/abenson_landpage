import { z } from "zod";

export const schema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters long" }),
  email: z.string()
  .min(3, { message: "Email is required" })
  .email({ message: "Invalid email" }),
  resume: z
    .instanceof(FileList)
    .refine((files) => files.length > 0, { message: "Resume is required" })
    .refine((files) => files.length === 1, { message: "Only one file is allowed" })
    .refine((files) => {
      const file = files[0];
      return file && file.type === "application/pdf";
    }, { message: "Only PDF file is allowed" })
    .refine((files) => {
      const file = files[0];
      return file && file.size <= 5 * 1024 * 1024;
    }, { message: "File size must be less than 5MB" }),
});