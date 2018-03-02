import React, { Component } from 'react';

class Faqs extends Component {

  constructor(props) {
    super(props)
    this.state = {
        english: [
          {
            header: "How do I join/sign up?",
            text: "You can sign up here by entering your name and email address. It’s that simple.",
            clicked: false
          },
          {
            header: "I’ve signed up. What’s next?",
            text: "Great! You will hear from us shortly via email. Remember to check your inbox from time to time.",
            clicked: false
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
          }
        ],
        bm: [
          {
            header: "Adakah program #KerjaYa percuma?",
            text: "Betul. Program #KerjaYa adalah percuma dan dianjurkan oleh PTPTN memulakan kerjaya."
          },
          {
            header: "Bagaimanakah persediaan kerjaya disampaikan?",
            text: "Latihan kerjaya akan disampaikan melalui dalam dan luar talian."
          },
          {
            header: "Siapakah yang menganjurkan latihan?",
            text: "Latihan akan disediakan oleh pihak rakan kongsi PTPTN."
          },
          {
            header: "Apakah syarat untuk memohon?",
            text: "Semua peminjam PTPTN yang mencari peluang pekerjaan layak memohon."
          }
        ]
    }
    // this.questions = {
    //   english: [
    //     {
    //       header: "How do I join/sign up?",
    //       text: "You can sign up here by entering your name and email address. It’s that simple."
    //     },
    //     {
    //       header: "I’ve signed up. What’s next?",
    //       text: "Great! You will hear from us shortly via email. Remember to check your inbox from time to time."
    //     },
    //     {
    //       header: "What is the interview process?",
    //       text: "The interview process will be done in-person, depending on the requirement of the prospective employers."
    //     },
    //     {
    //       header: "How do I get in touch with employers?",
    //       text: "[PLACEHOLDER]"
    //     },
    //     {
    //       header: "Who is TalentXchange?",
    //       text: "TalentXchange is the talent partner of #KerjaYa Programme. TalentXChange will help connect you to the right employers to kick start your career."
    //     },
    //     {
    //       header: "Are there any requirements?",
    //       text: "You must be a PTPTN graduated borrower."
    //     },
    //     {
    //       header: "What is the structure of the training? And how long is the training?",
    //       text: "[PLACEHOLDER]"
    //     },
    //     {
    //       header: "Do I have to pay for the training?",
    //       text: "Training will be provided for absolutely FREE of charge."
    //     },
    //     {
    //       header: "Is this program really FREE? Are there any hidden charges?",
    //       text: "Yes, this program is 100% free with no hidden charges."
    //     }
    //   ],
    //   bm: [
    //     {
    //       header: "Adakah program #KerjaYa percuma?",
    //       text: "Betul. Program #KerjaYa adalah percuma dan dianjurkan oleh PTPTN memulakan kerjaya."
    //     },
    //     {
    //       header: "Bagaimanakah persediaan kerjaya disampaikan?",
    //       text: "Latihan kerjaya akan disampaikan melalui dalam dan luar talian."
    //     },
    //     {
    //       header: "Siapakah yang menganjurkan latihan?",
    //       text: "Latihan akan disediakan oleh pihak rakan kongsi PTPTN."
    //     },
    //     {
    //       header: "Apakah syarat untuk memohon?",
    //       text: "Semua peminjam PTPTN yang mencari peluang pekerjaan layak memohon."
    //     }
    //   ],
    // }
  }

  // toggleExpand = (question) => {
  //   let english = this.state.english
  //   english[question].clicked = !this.state.english[question].clicked
  //
  //   this.setState({english: english})
  // }


  render() {
    let language = this.props.language
    return (
      <section className="faq">
        <div className="container">
          <h3>Common Questions</h3>
          <div className="faq-content">
            {this.state[language].map((question) => (
              <div className="faq-content-question" name={question.header} key={question.header}>
                <div className="faq-content-question-header">
                  <h5>Q: {question.header}</h5></div>
                <div className="faq-content-question-text"><p>{question.text}</p></div>

              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
}

export default Faqs
