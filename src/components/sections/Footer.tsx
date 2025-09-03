import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import Image from "next/image";
import logo from "../../../public/images/finalLogo-white.png";

export default function Footer() {
  return (
    <footer className="bg-[#1B1B26] text-gray-300 px-6 md:px-12 lg:px-16 py-10 md:py-12">
      <div className="max-w-5xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] lg:grid-cols-[400px_1fr] gap-10 border-b border-[#FFFFFF]/40 pb-10">
          {/* Left Section */}
          <div className="space-y-4 text-center md:text-left">
            <Image
              src={logo}
              alt="Snapcheck Logo"
              width={160}
              height={38}
              className="mx-auto md:mx-0 object-contain"
            />

            <p className="text-sm leading-[22px] text-[#FFFFFF]">
              Maximize your team&apos;s productivity today
            </p>

            {/* Store Buttons */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-2 border-t border-[#FFFFFF]/30 pt-4">
              <Image
                src="/images/app-store.png"
                alt="App Store"
                width={106}
                height={40}
              />
              <Image
                src="/images/google-play.png"
                alt="Google Play"
                width={106}
                height={40}
              />
              <Image
                src="/images/microsoft-app.png"
                alt="Microsoft Store"
                width={106}
                height={40}
              />
            </div>

            {/* Social Links */}
            <div className="text-[#FFFFFF]">
              <p className="mt-4 text-sm">Follow us</p>
              <div className="flex justify-center md:justify-start items-center gap-5 mt-3 text-xl">
                <a href="#">
                  <FaLinkedin />
                </a>
                <a href="#">
                  <FaFacebook />
                </a>
                <a href="#">
                  <FaInstagram />
                </a>
                <a href="#">
                  <FaYoutube />
                </a>
                <a href="#">
                  <FaXTwitter />
                </a>
              </div>
            </div>
          </div>

          {/* Right Menu Links */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 text-[#FFFFFF] text-center md:text-left">
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#">Attendance Tracker</a>
                </li>
                <li>
                  <a href="#">Time & Attendance Software</a>
                </li>
                <li>
                  <a href="#">Timesheet App</a>
                </li>
                <li>
                  <a href="#">Time Clock Software</a>
                </li>
                <li>
                  <a href="#">Project Time Tracker</a>
                </li>
                <li>
                  <a href="#">Integrations</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Industries</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#">Enterprises</a>
                </li>
                <li>
                  <a href="#">Freelancers</a>
                </li>
                <li>
                  <a href="#">Construction</a>
                </li>
                <li>
                  <a href="#">Accountants</a>
                </li>
                <li>
                  <a href="#">Consultants</a>
                </li>
                <li>
                  <a href="#">Healthcare</a>
                </li>
                <li>
                  <a href="#">Education</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#">Timesheet Calculator</a>
                </li>
                <li>
                  <a href="#">Timesheet Templates</a>
                </li>
                <li>
                  <a href="#">Time Tracking Resources</a>
                </li>
                <li>
                  <a href="#">Articles</a>
                </li>
                <li>
                  <a href="#">Tutorials</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#">Feedback</a>
                </li>
                <li>
                  <a href="#">Help Center</a>
                </li>
                <li>
                  <a href="#">Time Tracking FAQ</a>
                </li>
                <li>
                  <a href="#">Time Attendance FAQ</a>
                </li>
                <li>
                  <a href="#">Schedule a Demo</a>
                </li>
                <li>
                  <a href="#">Become a Partner</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white pt-6">
          <p>Copyright © 2025 Snapcheck.io Reserved</p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-3 md:mt-0">
            <a
              href="#"
              className="flex items-center gap-2 hover:text-gray-200 transition"
            >
              <TbWorld className="text-lg" />
              ENGLISH
            </a>
            <a href="#" className="hover:text-gray-200 transition">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-gray-200 transition">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
