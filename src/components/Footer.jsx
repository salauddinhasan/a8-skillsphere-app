import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="relative mt-24 border-t border-divider bg-background">
      {/* Subtle Gradient Glow for Professional Look */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-tr 
        from-primary/5 via-transparent to-secondary/5 
        blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand & Contact Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold tracking-tight text-primary">
                SkillSphere
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-default-500 max-w-xs">
              Empowering learners worldwide with industry-leading courses and
              expert mentorship.
            </p>
            <div className="text-sm text-default-600">
              <p>Email: support@skillsphere.com</p>
              <p>Phone: +880 1234 567890</p>
              <p>Habiganj, Sylhet, Bangladesh</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Explore
            </h3>
            <ul className="space-y-3 text-sm text-default-500">
              <li>
                <Link href="/" className="hover:text-primary transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-primary transition">
                  All Courses
                </Link>
              </li>
              <li>
                <Link href="/profile" className="hover:text-primary transition">
                  My Profile
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Company */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Legal
            </h3>
            <ul className="space-y-3 text-sm text-default-500">
              <li>
                <Link href="/terms" className="hover:text-primary transition">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-primary transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links & Newsletter */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Follow Us
            </h3>
            <div className="flex gap-4">
              <Link
                href="https://github.com"
                className="text-default-400 hover:text-primary transition text-xl"
              >
                GitHub
              </Link>
              <Link
                href="https://linkedin.com"
                className="text-default-400 hover:text-primary transition text-xl"
              >
                LinkedIn
              </Link>
            </div>
            <p className="text-xs text-default-400 mt-4">
              Join our community of 50,000+ students.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 h-px w-full bg-divider" />

        {/* Bottom Section */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-default-400">
          <p>&copy; {new Date().getFullYear()} SkillSphere. All rights reserved.</p>
          <p>Built with ❤️ for Web Developers</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
