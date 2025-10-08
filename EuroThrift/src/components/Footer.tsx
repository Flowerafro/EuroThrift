import { Facebook, Instagram, Twitter, Mail } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[var(--mint-green)] to-white border-t border-border mt-24">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-12 gap-8 mb-8">
          {/* Newsletter Signup */}
          <div className="col-span-6">
            <h3 className="mb-4">Subscribe to our newsletter</h3>
            <p className="text-muted-foreground mb-4">
              Get the latest budget travel tips and exclusive deals delivered to your inbox.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
              />
              <Button className="bg-[var(--light-sea-green)] hover:bg-[var(--light-sea-green)]/90 text-white rounded-lg">
                Subscribe
              </Button>
            </div>
          </div>

          {/* Social Media & Contact */}
          <div className="col-span-6 flex flex-col items-end">
            <h3 className="mb-4">Follow Us</h3>
            <div className="flex gap-3 mb-6">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow flex items-center justify-center text-[var(--light-sea-green)]"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow flex items-center justify-center text-[var(--light-sea-green)]"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow flex items-center justify-center text-[var(--light-sea-green)]"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow flex items-center justify-center text-[var(--light-sea-green)]"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-muted-foreground text-sm">
              contact@eurothrift.com
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border text-center text-muted-foreground text-sm">
          <p>&copy; 2025 EuroThrift. All rights reserved. Explore Europe for less.</p>
        </div>
      </div>
    </footer>
  );
}
