import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  name: string;
  phone: string;
  email: string;
  volunteer: string;
  dob: string;
  consent: boolean;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  volunteer?: string;
  dob?: string;
  consent?: string;
}

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    volunteer: '',
    dob: '',
    consent: false
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\(\d{3}\)\s\d{3}-\d{4}$/.test(formData.phone) && !/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.volunteer.trim()) {
      newErrors.volunteer = 'Please share why you want to volunteer';
    }
    
    if (!formData.dob.trim()) {
      newErrors.dob = 'Date of Birth is required';
    }
    
    if (!formData.consent) {
      newErrors.consent = 'Agreeing to the terms is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Appllied successfully!",
        description: "Thank you for Applying to volunteer with Hope in Hand. We will review your application and get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        volunteer: '',
        dob: '',
        consent: false
      });
      setErrors({});
      
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <section id="contact" className="py-10 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-dark text-stone-700 mb-6">
            Volunteer Form
          </h2>
          <div className="w-19 h-px bg-slate-400 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-light text-stone-700 mb-8">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-stone-800 p-3 rounded-full">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-stone-800">Phone</h4>
                  <p className="text-gray-600">(+91) 9922 132460</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-stone-800 p-3 rounded-full">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-stone-800">Email</h4>
                  <p className="text-gray-600">hopeinhand@ngo.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-stone-800 p-3 rounded-full">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-stone-800">Office</h4>
                  <p className="text-gray-600">Lonavala, Mumbai<br />India</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 bg-white p-8 border border-gray-100 shadow-sm">
              <h4 className="font-bold text-lg text-stone-800 mb-6">Office Hours</h4>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-base text-gray-600">Monday To Saturday: 10:00 AM – 6:00 PM</p>
                </div>
                
              </div>
            </div>
          </div>
          
          <div className="bg-white shadow-lg p-8 border border-gray-100">
            <h3 className="text-2xl font-light text-stone-800 mb-8">
              Join Us at Hope in Hand
            <p>Make a Difference in a Child’s Life</p>
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-sm font-dark text-stone-800">Full Name *</Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className={errors.name ? 'border-red-400' : 'border-gray-200'}
                  placeholder="Your full name"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>
              
              <div>
                <Label htmlFor="phone" className="text-sm font-dark text-stone-800">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className={errors.phone ? 'border-red-400' : 'border-gray-200'}
                  placeholder="+91 xxxx-xxxxxx"
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>
              
              <div>
                <Label htmlFor="email" className="text-sm font-dark text-stone-800">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={errors.email ? 'border-red-400' : 'border-gray-200'}
                  placeholder="your.email@example.com"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
              
              
              <div>
                <Label htmlFor="dob" className="text-sm font-dark text-stone-800">Date of Birth *</Label>
                <Input
                  id="dob"
                  type="date"
                  value={formData.dob}
                  onChange={(e) => handleInputChange('dob', e.target.value)}
                  className={errors.dob ? 'border-red-400' : 'border-gray-200'}
                />
                {errors.dob && <p className="text-red-500 text-xs mt-1">{errors.dob}</p>}
              </div>
              
              <div>
                <Label htmlFor="volunteer" className="text-sm font-dark text-stone-800">Why do you want to volunteer with Hope in Hand? *</Label>
                <Textarea
                  id="volunteer"
                  value={formData.volunteer}
                  onChange={(e) => handleInputChange('volunteer', e.target.value)}
                  className={errors.volunteer ? 'border-red-400' : 'border-gray-200'}
                  placeholder="A Few Words from You"
                  rows={4}
                />
                {errors.volunteer && <p className="text-red-500 text-xs mt-1">{errors.volunteer}</p>}
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="consent"
                  checked={formData.consent}
                  onCheckedChange={(checked) => handleInputChange('consent', checked as boolean)}
                />
                <Label htmlFor="consent" className="text-xs text-gray-600">
                  I hereby consent to volunteer with Hope in Hand, and agree to follow all guidelines, maintain child safety and confidentiality, and allow the organization to use my photos/videos for awareness purposes. *
                </Label>
              </div>
              {errors.consent && <p className="text-red-500 text-xs">{errors.consent}</p>}
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-gray-700 hover:bg-gray-800 text-white py-3 text-base font-medium"
              >
                {isSubmitting ? 'Applying...' : 'Apply Now'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
