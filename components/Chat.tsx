"use client";
import { answersType, changeInputType, submitFormType } from "@/types";
import { useEffect, useState } from "react";
import React from "react";
import { LoremIpsum } from "lorem-ipsum";

const Chat = () => {
  const [inputValue, setInputValue] = useState<string | undefined>();
  const [answers, setAnswers] = useState<answersType>([]);
  const handleInputChange = (e: changeInputType) =>
    setInputValue(e.target.value);

  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 5,
      min: 3,
    },
    wordsPerSentence: {
      max: 5,
      min: 2,
    },
  });

  const handleSubmit = (e: submitFormType) => {
    e.preventDefault();
    if (inputValue && inputValue.trim() !== "") {
      setAnswers((prevAnswers) => [
        ...prevAnswers,
        { question: inputValue, answer: lorem.generateSentences(4) },
      ]);

      setInputValue("");
    }
  };
  useEffect(() => {
    handleScroll();
  }, [answers]);

  const handleScroll = () => {
    const element = document.querySelector(`#item-${answers.length - 1}`);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  };

  return (
    <div className='w-full bg-gray-200 text-black'>
      {answers.length > 0 && (
        <div className='flex flex-col max-h-60 overflow-scroll m-4'>
          {answers.length > 0 &&
            answers.map((e, i) => (
              <div className='flex flex-col p-2 border-b'>
                <p className='flex justify-end bg-gray-700 text-white ml-auto p-1 m-1 rounded-md'>
                  q: {e.question}
                </p>
                <p
                  className='bg-gray-400 mr-auto p-1 m-1 rounded-md'
                  id={`item-${i}`}
                >
                  answer: {e.answer}
                </p>
              </div>
            ))}
        </div>
      )}

      <form
        className='flex flex-row border border-spacing-80'
        onSubmit={handleSubmit}
      >
        <input
          className='w-3/4 m-1 p-1 text-slate-700 bg-gray-100 rounded-sm border border-slate-300 outline-none'
          type='text'
          value={inputValue}
          onChange={handleInputChange}
        />
        <button className='btn-primary w-1/4' type='submit'>
          ask
        </button>
      </form>
    </div>
  );
};

export default Chat;
