'use client'

import { useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { ContactSchema } from '@/lib/schemas'
import { sendContactForm } from '@/lib/actions'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { toast } from '@/components/ui/use-toast'
import { useFormStatus } from 'react-dom'

type ContactFormData = z.infer<typeof ContactSchema>

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(ContactSchema),
  })

  const onSubmit = async (values: ContactFormData) => {
    try {
      await sendContactForm(values)
      reset()
      window.scrollTo({ top: 0, behavior: 'smooth' })
      headingRef.current?.focus()
      toast({
        title: 'Message sent!',
        description: "Thank you for your message. I'll get back to you soon.",
      })
    } catch (error) {
      toast({
        title: 'Something went wrong.',
        description: "Your message couldn't be sent. Please try again later.",
        variant: 'destructive',
      })
    }
  }

  return (
    <div className="container mx-auto py-16 px-4">
      <h1
        ref={headingRef}
        tabIndex={-1}
        className="text-4xl font-bold tracking-tight mb-8"
      >
        Contact Me
      </h1>
      <form
        ref={formRef}
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6"
      >
        <div>
          <Input placeholder="Your Name" {...register('name')} />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <Input placeholder="Your Email" {...register('email')} />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <Textarea placeholder="Your Message" {...register('message')} />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </div>
  )
}
