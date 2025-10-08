import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

export function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="mb-4">Get in Touch</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Have questions about budget travel in Europe? We're here to help! 
          Send us a message and our team will get back to you within 24 hours.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* Contact Form */}
        <div className="col-span-7">
          <Card className="rounded-2xl border border-border shadow-lg">
            <CardHeader className="p-8 pb-6">
              <h2>Send us a message</h2>
              <p className="text-muted-foreground text-sm mt-2">
                Fill out the form below and we'll respond as soon as possible.
              </p>
            </CardHeader>
            <CardContent className="p-8 pt-0">
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="John"
                      className="mt-2"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="Doe"
                      className="mt-2"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john.doe@example.com"
                    className="mt-2"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="How can we help you?"
                    className="mt-2"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your question or feedback..."
                    className="mt-2 min-h-32"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[var(--light-sea-green)] hover:bg-[var(--light-sea-green)]/90 text-white rounded-lg"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <div className="col-span-5 space-y-6">
          <Card className="rounded-2xl border border-border shadow-lg overflow-hidden">
            <CardHeader className="p-8 bg-gradient-to-br from-[var(--mint-green)] to-white">
              <h3>Contact Information</h3>
              <p className="text-muted-foreground text-sm mt-2">
                Reach out to us through any of these channels
              </p>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--light-sea-green)]/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[var(--light-sea-green)]" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <p>contact@eurothrift.com</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--light-sea-green)]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[var(--light-sea-green)]" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Phone</p>
                    <p>+44 20 1234 5678</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--light-sea-green)]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[var(--light-sea-green)]" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Office</p>
                    <p>123 Travel Street<br />London, UK EC1A 1BB</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border border-border shadow-lg">
            <CardHeader className="p-8 pb-6">
              <h3>Office Hours</h3>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="p-6 bg-gradient-to-br from-[var(--orange-peel)]/10 to-[var(--hunyadi-yellow)]/10 rounded-2xl border border-border">
            <h4 className="mb-2">Quick Response Guarantee</h4>
            <p className="text-sm text-muted-foreground">
              We aim to respond to all inquiries within 24 hours during business days. 
              For urgent matters, please call us directly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
