import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { apiRequest } from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

// Custom form input component with blue border and sky blue focus state
const FormInput = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  (props, ref) => {
    return (
      <Input
        className="border-blue-300 dark:border-blue-600 bg-white dark:bg-gray-800 focus:border-sky-400 focus:ring focus:ring-sky-200 dark:focus:ring-sky-800 dark:focus:border-sky-500"
        ref={ref}
        {...props}
      />
    );
  }
);

const referralSchema = z.object({
  name: z.string().min(3, { message: "Full name is required (at least 3 characters)" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  countryCode: z.string().min(1, { message: "Country code is required" }),
  phone: z.string().length(10, { message: "Phone number must be exactly 10 digits" })
    .regex(/^\d{10}$/, { message: "Phone number must contain only digits" }),
  company: z.string().min(1, { message: "Target company name is required" }),
  position: z.string().min(1, { message: "Position/Role is required" }),
  resumeLink: z.string().url({ message: "Please provide a valid resume link" }),
  jobLink: z.string().url().optional().or(z.literal("")),
  message: z.string().min(30, { message: "Please explain how you align with the open role (at least 30 characters)" }),
  consent: z.boolean().refine(val => val === true, {
    message: "You must consent to share your information",
  }),
});

type ReferralFormValues = z.infer<typeof referralSchema>;

const ReferralSection = () => {
  const { toast } = useToast();
  
  const form = useForm<ReferralFormValues>({
    resolver: zodResolver(referralSchema),
    defaultValues: {
      name: "",
      email: "",
      countryCode: "+91",
      phone: "",
      company: "",
      position: "",
      resumeLink: "",
      jobLink: "",
      message: "",
      consent: false,
    },
  });
  
  const referralMutation = useMutation({
    mutationFn: async (data: ReferralFormValues) => {
      const response = await apiRequest("POST", "/api/referrals", JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Referral Request Submitted",
        description: "Your referral request has been successfully submitted. You'll be contacted shortly.",
        variant: "default",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Submission Failed",
        description: error.message || "There was an error submitting your referral request. Please try again.",
        variant: "destructive",
      });
    },
  });
  
  const onSubmit = (data: ReferralFormValues) => {
    // Remove consent field as it's not needed in the backend
    const { consent, ...submissionData } = data;
    referralMutation.mutate(submissionData);
  };

  return (
    <section id="referrals" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Request a Referral</h2>
        
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8">
          <p className="text-gray-700 dark:text-gray-300 mb-6 text-center">
            Interested in working at Samsung Research, Qualcomm, or another company in my network? Fill out the form below to request a referral.
          </p>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input 
                          {...field}
                          className="border-blue-300 dark:border-blue-600 bg-white dark:bg-gray-800 focus:border-sky-400 focus:ring focus:ring-sky-200 dark:focus:ring-sky-800 dark:focus:border-sky-500"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input 
                          type="email"
                          {...field}
                          className="border-blue-300 dark:border-blue-600 bg-white dark:bg-gray-800 focus:border-sky-400 focus:ring focus:ring-sky-200 dark:focus:ring-sky-800 dark:focus:border-sky-500"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="countryCode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Country Code</FormLabel>
                      <select 
                        {...field}
                        className="w-full rounded-md border border-blue-300 dark:border-blue-600 bg-white dark:bg-gray-800 focus:border-sky-400 focus:ring focus:ring-sky-200 dark:focus:ring-sky-800 dark:focus:border-sky-500 p-2"
                      >
                        <option value="+91">India (+91)</option>
                        <option value="+1">USA/Canada (+1)</option>
                        <option value="+44">UK (+44)</option>
                        <option value="+61">Australia (+61)</option>
                        <option value="+86">China (+86)</option>
                        <option value="+81">Japan (+81)</option>
                        <option value="+49">Germany (+49)</option>
                        <option value="+33">France (+33)</option>
                        <option value="+65">Singapore (+65)</option>
                        <option value="+971">UAE (+971)</option>
                        <option value="+82">South Korea (+82)</option>
                      </select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number (10 digits)</FormLabel>
                      <FormControl>
                        <Input 
                          type="tel"
                          placeholder="10-digit number without spaces or dashes"
                          {...field}
                          maxLength={10}
                          onChange={(e) => {
                            // Only allow digits
                            const value = e.target.value.replace(/\D/g, '');
                            field.onChange(value);
                          }}
                          className="border-blue-300 dark:border-blue-600 bg-white dark:bg-gray-800 focus:border-sky-400 focus:ring focus:ring-sky-200 dark:focus:ring-sky-800 dark:focus:border-sky-500"
                        />
                      </FormControl>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        Enter exactly 10 digits without country code (e.g., 9876543210)
                      </p>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Target Company</FormLabel>
                      <FormControl>
                        <Input 
                          {...field}
                          className="border-blue-300 dark:border-blue-600 bg-white dark:bg-gray-800 focus:border-sky-400 focus:ring focus:ring-sky-200 dark:focus:ring-sky-800 dark:focus:border-sky-500"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="position"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Position/Role</FormLabel>
                      <FormControl>
                        <Input 
                          {...field}
                          className="border-blue-300 dark:border-blue-600 bg-white dark:bg-gray-800 focus:border-sky-400 focus:ring focus:ring-sky-200 dark:focus:ring-sky-800 dark:focus:border-sky-500"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="jobLink"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Job Link (if available)</FormLabel>
                      <FormControl>
                        <Input 
                          type="url"
                          {...field}
                          className="border-blue-300 dark:border-blue-600 bg-white dark:bg-gray-800 focus:border-sky-400 focus:ring focus:ring-sky-200 dark:focus:ring-sky-800 dark:focus:border-sky-500"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea 
                        rows={4} 
                        placeholder="Explain why you're a good fit for this role and how your experience aligns with the position requirements..."
                        {...field} 
                        className="border-blue-300 dark:border-blue-600 bg-white dark:bg-gray-800 focus:border-sky-400 focus:ring focus:ring-sky-200 dark:focus:ring-sky-800 dark:focus:border-sky-500" 
                      />
                    </FormControl>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      Minimum 30 characters required. Please clearly explain why you're interested in this position and how you align with the role requirements.
                    </p>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="resumeLink"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Resume Link</FormLabel>
                    <FormControl>
                      <Input 
                        type="url"
                        placeholder="https://drive.google.com/your-resume"
                        {...field}
                        className="border-blue-300 dark:border-blue-600 bg-white dark:bg-gray-800 focus:border-sky-400 focus:ring focus:ring-sky-200 dark:focus:ring-sky-800 dark:focus:border-sky-500"
                      />
                    </FormControl>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      Please provide a link to your resume (Google Drive, Dropbox, etc). Make sure the link is public and accessible.
                    </p>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="consent"
                render={({ field }) => (
                  <FormItem className="flex items-center space-x-2">
                    <FormControl>
                      <Checkbox 
                        checked={field.value} 
                        onCheckedChange={field.onChange} 
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        I consent to having my information shared for referral purposes
                      </FormLabel>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
              
              <Button 
                type="submit" 
                className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors shadow-md dark:bg-blue-500 dark:hover:bg-blue-600 dark:text-white text-lg"
                disabled={referralMutation.isPending}
              >
                {referralMutation.isPending ? "Submitting..." : "Submit Referral Request"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default ReferralSection;
