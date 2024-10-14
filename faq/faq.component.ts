import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {

  faqs = [
    {
      question: 'How do I place an order?',
      answer: 'To place an order, browse our catalog, select the items you want, and proceed to checkout.',
      showAnswer: false
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept various payment methods including credit/debit cards, UPI, and net banking.',
      showAnswer: false
    },
    {
      question: 'How can I track my order?',
      answer: 'You can track your order through the "Orders Tracking" link provided in the footer.',
      showAnswer: false
    },
    {
      question: 'What is your return policy?',
      answer: 'We offer a 15-day return policy on most items. Please refer to our Return Policy page for more details.',
      showAnswer: false
    },
    {
      question: 'How do I contact customer support?',
      answer: 'You can contact customer support by emailing support&#64;oliviafashionstudio.com or via the Contact Us page.',
      showAnswer: false
    },
    {
      question: 'Do you offer international shipping?',
      answer: 'Currently, we only ship within India. International shipping options will be available soon.',
      showAnswer: false
    },
    {
      question: 'How do I change my shipping address?',
      answer: 'To change your shipping address, log in to your account and update your address details under the "My Account" section.',
      showAnswer: false
    },
    {
      question: 'What should I do if I receive a damaged item?',
      answer: 'If you receive a damaged item, please contact our support team immediately for assistance.',
      showAnswer: false
    },
    {
      question: 'Can I cancel or modify my order after it has been placed?',
      answer: 'Orders can be canceled or modified within 24 hours of placing them. Please contact customer support for assistance.',
      showAnswer: false
    }
  ];

  toggleAnswer(faq: any) {
    faq.showAnswer = !faq.showAnswer;
  }
}


