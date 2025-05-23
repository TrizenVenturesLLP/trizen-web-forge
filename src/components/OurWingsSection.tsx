import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { GraduationCap, FlaskRound, Briefcase, Rocket, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const OurWingsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-trizen-light to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-trizen-light/60 to-transparent"></div>
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-trizen-purple/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-trizen-blue/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-trizen-purple mb-4">Our Wings</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Discover the various divisions of Trizen and how we're making an impact across multiple domains.
          </p>
          <Separator className="w-32 h-1 bg-trizen-purple mx-auto mt-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

          {/* Trizen Research */}
          <Card className="...">
            {/* ...Decorations omitted for brevity */}
            <CardHeader className="pb-2">
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="bg-trizen-light p-4 rounded-full shadow-md group-hover:bg-trizen-purple/10 transition-colors duration-300 group-hover:shadow-lg">
                  <FlaskRound className="h-10 w-10 text-trizen-purple" />
                </div>
              </div>
              <CardTitle className="text-2xl font-bold text-center text-trizen-dark">Trizen Research</CardTitle>
            </CardHeader>
            <CardContent className="text-center px-6">
               <p className="text-gray-600 text-lg">
                Your Partner in Transformative Research and Smart Solutions
              </p> 
            </CardContent>
            <CardFooter className="flex justify-center pb-6">
              <Link to="/research">
                <Button variant="outline" className="group border-trizen-purple text-trizen-purple hover:bg-trizen-purple hover:text-white transition-all duration-300">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
            </CardFooter>
          </Card>

          {/* Trizen Consulting */}
          <Card className="...">
            {/* ...Decorations omitted for brevity */}
            <CardHeader className="pb-2">
              <div className="flex justify-center mb-4">
                <div className="bg-trizen-light p-4 rounded-full shadow-md group-hover:bg-trizen-purple/10 transition-colors duration-300 group-hover:shadow-lg">
                  <Briefcase className="h-10 w-10 text-trizen-purple" />
                </div>
              </div>
              <CardTitle className="text-2xl font-bold text-center text-trizen-dark">Trizen Consulting</CardTitle>
            </CardHeader>
            <CardContent className="text-center px-6">
              <p className="text-gray-600 text-lg">
                Your Partner in Digital Transformation
              </p>
            </CardContent>
            <CardFooter className="flex justify-center pb-6">
              <Link to="/consulting">
                <Button variant="outline" className="group border-trizen-purple text-trizen-purple hover:bg-trizen-purple hover:text-white transition-all duration-300">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
            </CardFooter>
          </Card>

          {/* Trizen Training */}
          <Card className="...">
            {/* ...Decorations omitted for brevity */}
            <CardHeader className="pb-2">
              <div className="flex justify-center mb-4">
                <div className="bg-trizen-light p-4 rounded-full shadow-md group-hover:bg-trizen-purple/10 transition-colors duration-300 group-hover:shadow-lg">
                  <GraduationCap className="h-10 w-10 text-trizen-purple" />
                </div>
              </div>
              <CardTitle className="text-2xl font-bold text-center text-trizen-dark">Trizen Training</CardTitle>
            </CardHeader>
            <CardContent className="text-center px-6">
              <p className="text-gray-600 text-lg">
                Empowering Future-Ready Talent with Industry-Aligned Skills
              </p>
            </CardContent>
            <CardFooter className="flex justify-center pb-6">
              <Link to="/training">
                <Button variant="outline" className="group border-trizen-purple text-trizen-purple hover:bg-trizen-purple hover:text-white transition-all duration-300">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
            </CardFooter>
          </Card>

          {/* Trizen Ventures */}
          <Card className="...">
            {/* ...Decorations omitted for brevity */}
            <CardHeader className="pb-2">
              <div className="flex justify-center mb-4">
                <div className="bg-trizen-light p-4 rounded-full shadow-md group-hover:bg-trizen-purple/10 transition-colors duration-300 group-hover:shadow-lg">
                  <Rocket className="h-10 w-10 text-trizen-purple" />
                </div>
              </div>
              <CardTitle className="text-2xl font-bold text-center text-trizen-dark">Trizen Ventures</CardTitle>
            </CardHeader>
            <CardContent className="text-center px-6">
              <p className="text-gray-600 text-lg">
                From Vision to Venture — Powered by Trizen
              </p>
            </CardContent>
            <CardFooter className="flex justify-center pb-6">
              <Link to="/ventures">
                <Button variant="outline" className="group border-trizen-purple text-trizen-purple hover:bg-trizen-purple hover:text-white transition-all duration-300">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default OurWingsSection;
