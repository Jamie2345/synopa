"use client";
import React, { useState } from "react";

export default function Testimonials() {
  const [activeButton, setActiveButton] = useState(1);

  const handleClick = (id: any) => {
    setActiveButton(id);
  };

  return (
    <div className="flex items-center justify-center flex-col text-center p-20">
      <div className="max-w-[500px] mb-8">
        <h2 className="font-bold text-4xl sm:text-5xl capitalize mb-7">
          <span>Why People Love</span>
          <br />
          <span>
            Using <strong className="underline text-secondary">Synopa.</strong>
          </span>
        </h2>
        <p className="text-lg text-secondary-content font-extralight">
          Join thousands of users who learn faster than they ever thought
          possible.
        </p>
      </div>
      <div className="mt-10 mb-20 max-w-[1000px]">
        <blockquote className="text-xl font-semibold">
          {activeButton === 1
            ? "Synopa has changed the way I learn online. Its summaries are clear, organized, and easy to understand. I can quickly catch up on new topics and stay current with industry trends. Synopa is a must-have tool that's saved me hours of time and stress."
            : activeButton === 2
            ? "I was thrilled with how effortlessly I could stay current with my favorite podcasts! Synopa's summaries allowed me to quickly grasp key points and skip unnecessary details. It's a lifesaver for anyone seeking to maximize their online learning potential."
            : "I'm absolutely delighted with Synopa! Its ability to summarize complex information into concise and easily digestible bits has revolutionized the way I approach online learning. I can quickly grasp key points, identify what's relevant, and prioritize my time – it's a total win-win!"}
        </blockquote>
      </div>
      <div className="flex text-xl m-auto">
        <button
          className={`flex pt-6 px-8 items-center relative duration-100 transition-all ${
            activeButton !== 1
              ? "opacity-50 hover:opacity-100 hover:scale-[1.01]"
              : ""
          }`}
          onClick={() => handleClick(1)}
        >
          <div
            className={`bar absolute top-0 left-0 h-1 bg-black transition-all duration-500 ease-out ${
              activeButton === 1 ? "w-full opacity-100" : "w-0 opacity-0"
            }`}
          ></div>
          <img
            className="w-12 h-12 rounded-[100%] border-none bg-primary mr-5 object-contain"
            src="person1.png"
            alt=""
          />
          <span className="text-primary-content font-bold">Arthur Jenkins</span>
        </button>
        <button
          className={`flex pt-6 px-8 items-center relative duration-100 transition-all ${
            activeButton !== 2
              ? "opacity-50 hover:opacity-100 hover:scale-[1.01]"
              : ""
          }`}
          onClick={() => handleClick(2)}
        >
          <div
            className={`bar absolute top-0 left-0 h-1 bg-black transition-all duration-500 ease-out ${
              activeButton === 2 ? "w-full opacity-100" : "w-0 opacity-0"
            }`}
          ></div>
          <img
            className="w-12 h-12 rounded-[100%] border-none bg-primary mr-5 object-contain"
            src="person5.png"
            alt=""
          />
          <span className="text-primary-content font-bold">Jasmine Winters</span>
        </button>
        <button
          className={`flex pt-6 px-8 items-center relative duration-100 transition-all ${
            activeButton !== 3
              ? "opacity-50 hover:opacity-100 hover:scale-[1.01]"
              : ""
          }`}
          onClick={() => handleClick(3)}
        >
          <div
            className={`bar absolute top-0 left-0 h-1 bg-black transition-all duration-500 ease-out ${
              activeButton === 3 ? "w-full opacity-100" : "w-0 opacity-0"
            }`}
          ></div>
          <img
            className="w-12 h-12 rounded-[100%] border-none bg-primary mr-5 object-contain"
            src="person6.png"
            alt=""
          />
          <span className="text-primary-content font-bold">Kofi Brown</span>
        </button>
      </div>

      <button className="btn btn-primary btn-lg my-16 text-black hidden">Sign up for free</button>
      
    </div>
  );
}
