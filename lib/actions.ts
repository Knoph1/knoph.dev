"use server"

import { z } from "zod"

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(10),
})

export async function sendContactForm(formData: z.infer<typeof formSchema>) {
  const validatedFields = formSchema.safeParse(formData)

  if (!validatedFields.success) {
    throw new Error("Invalid form data")
  }

  const { name, email, subject, message } = validatedFields.data

  try {
    // In a preview environment, we'll simulate sending an email
    // When deployed to a real environment, you would use the nodemailer code

    // Log the form data for debugging in preview
    console.log("Form submission:", {
      name,
      email,
      subject,
      message,
      to: process.env.EMAIL_USER,
    })

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // For demonstration purposes, we'll just return success
    // In production, you would uncomment and use the nodemailer code below

    /*
    // This code will work when deployed to a real environment
    const nodemailer = await import('nodemailer')
    
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST || "smtp.gmail.com",
      port: Number.parseInt(process.env.EMAIL_PORT || "465"),
      secure: process.env.EMAIL_SECURE === "true",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong></p>
             <p>${message.replace(/\n/g, "<br>")}</p>`,
    })
    */

    return { success: true }
  } catch (error) {
    console.error("Error processing form:", error)
    throw new Error("Failed to process form submission")
  }
}
