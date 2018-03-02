import React, { Component } from 'react';

function Faq() {
  const questions = [
    {
      header: "How do I join/sign up?",
      text: "You can sign up here by entering your name and email address. It’s that simple."
    },
    {
      header: "I’ve signed up. What’s next?",
      text: "Great! You will hear from us shortly via email. Remember to check your inbox from time to time."
    },
    {
      header: "What is the interview process?",
      text: "The interview process will be done in-person, depending on the requirement of the prospective employers."
    },
    {
      header: "How do I get in touch with employers?",
      text: "[PLACEHOLDER]"
    },
    {
      header: "Who is TalentXchange?",
      text: "TalentXchange is the talent partner of #KerjaYa Programme. TalentXChange will help connect you to the right employers to kick start your career."
    },
    {
      header: "Are there any requirements?",
      text: "You must be a PTPTN graduated borrower."
    },
    {
      header: "What is the structure of the training? And how long is the training?",
      text: "[PLACEHOLDER]"
    },
    {
      header: "Do I have to pay for the training?",
      text: "Training will be provided for absolutely FREE of charge."
    },
    {
      header: "Is this program really FREE? Are there any hidden charges?",
      text: "Yes, this program is 100% free with no hidden charges."
    },
  ]

  return (
    <section className="faq">
      <div className="container">
        <h3>Common Questions</h3>
        <ul className="faq-content">
          {questions.map((question) => (
            <li>
              <h5>Q: {question.header}</h5>
              <p>{question.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Faq
