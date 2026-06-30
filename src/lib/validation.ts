import { z } from "zod";

export const leadSchema = z.object({
  fullName: z.string().min(2, "Enter your full name").max(120),
  email: z.string().email("Enter a valid email"),
  phone: z.string().max(30).optional().or(z.literal("")),
  zipcode: z
    .string()
    .regex(/^\d{5}$/, "Enter a 5-digit zip code"),
  category: z.string().min(1, "Choose a service"),
  title: z.string().min(4, "Give the job a short title").max(120),
  description: z.string().min(10, "Add a few details about the job").max(2000),
  preferredDate: z.string().max(60).optional().or(z.literal("")),
  budgetMin: z.coerce.number().int().nonnegative().optional(),
  budgetMax: z.coerce.number().int().nonnegative().optional(),
  source: z.string().optional(),
});

export type LeadInput = z.infer<typeof leadSchema>;

export const craftsmanApplicationSchema = z.object({
  fullName: z.string().min(2, "Enter your full name").max(120),
  businessName: z.string().max(150).optional().or(z.literal("")),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(7, "Enter a phone number").max(30),
  zipcode: z
    .string()
    .regex(/^\d{5}$/, "Enter a 5-digit zip code"),
  trades: z.array(z.string()).min(1, "Pick at least one trade"),
  yearsExperience: z.coerce.number().int().nonnegative().optional(),
  portfolioUrl: z
    .string()
    .url("Enter a full URL (including https://)")
    .optional()
    .or(z.literal("")),
  notes: z.string().max(2000).optional().or(z.literal("")),
});

export type CraftsmanApplicationInput = z.infer<typeof craftsmanApplicationSchema>;
