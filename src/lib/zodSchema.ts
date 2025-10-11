import * as z from "zod";


export const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .regex(/^\d{10}$/, "phone number must be 10 digits"),
  pincode: z
    .string()
    .regex(/^\d{6}$/, "Pincode must be 6 digits"),
  flatHouse: z.string().min(1, "This field is required"),
  areaStreet: z.string().min(1, "This field is required"),
  landmark: z.string().optional(),
  townCity: z.string().min(1, "Town/City is required"),
  state: z.string().min(1, "Please select a state"),
});