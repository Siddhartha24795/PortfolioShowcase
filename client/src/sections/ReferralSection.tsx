import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { apiRequest } from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { FaCloudUploadAlt } from "react-icons/fa";
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
  name: z.string().min(3, { message: "Name must be at least 3 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  company: z.string().min(1, { message: "Company name is required" }),
  position: z.string().min(1, { message: "Position is required" }),
  jobLink: z.string().url().optional().or(z.literal("")),
  message: z.string().optional(),
  consent: z.boolean().refine(val => val === true, {
    message: "You must consent to share your information",
  }),
});

type ReferralFormValues = z.infer<typeof referralSchema>;

const ReferralSection = () => {
  const { toast } = useToast();
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  
  const form = useForm<ReferralFormValues>({
    resolver: zodResolver(referralSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      position: "",
      jobLink: "",
      message: "",
      consent: false,
    },
  });
  
  const referralMutation = useMutation({
    mutationFn: async (data: FormData) => {
      const response = await apiRequest("POST", "/api/referrals", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Referral Request Submitted",
        description: "Your referral request has been successfully submitted. You'll be contacted shortly.",
        variant: "default",
      });
      form.reset();
      setResumeFile(null);
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
    if (!resumeFile) {
      toast({
        title: "Resume Required",
        description: "Please upload your resume before submitting.",
        variant: "destructive",
      });
      return;
    }
    
    const formData = new FormData();
    
    // Append form fields
    Object.entries(data).forEach(([key, value]) => {
      if (value !== undefined && key !== 'consent') {
        formData.append(key, value.toString());
      }
    });
    
    // Append resume file
    formData.append("resume", resumeFile);
    
    referralMutation.mutate(formData);
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      // Check if file is PDF
      if (file.type !== "application/pdf") {
        toast({
          title: "Invalid File Type",
          description: "Please upload only PDF files.",
          variant: "destructive",
        });
        return;
      }
      
      // Check file size (5MB max)
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "File Too Large",
          description: "Please upload a file smaller than 5MB.",
          variant: "destructive",
        });
        return;
      }
      
      setResumeFile(file);
    }
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
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input 
                          type="tel"
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
                    <FormLabel>Message (Optional)</FormLabel>
                    <FormControl>
                      <Textarea 
                        rows={4} 
                        {...field} 
                        className="border-blue-300 dark:border-blue-600 bg-white dark:bg-gray-800 focus:border-sky-400 focus:ring focus:ring-sky-200 dark:focus:ring-sky-800 dark:focus:border-sky-500" 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Upload Resume</label>
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-blue-300 dark:border-blue-600 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <FaCloudUploadAlt className="text-blue-500 dark:text-blue-400 text-3xl mb-2" />
                      <p className="mb-1 text-sm text-blue-600 dark:text-blue-400" id="file-name-display">
                        {resumeFile ? resumeFile.name : "PDF files only (max 5MB)"}
                      </p>
                      <p className="text-xs text-blue-500 dark:text-blue-400">Drag and drop or click to upload</p>
                    </div>
                    <input 
                      id="resume" 
                      name="resume" 
                      type="file" 
                      className="hidden" 
                      accept=".pdf" 
                      onChange={handleFileChange}
                    />
                  </label>
                </div>
              </div>
              
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
