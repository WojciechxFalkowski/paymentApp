import { Component, OnInit } from '@angular/core';
import { Dispute } from './../models/dispute';
@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css'],
})
export class HelpComponent implements OnInit {
  disputes: Array<Dispute> = [
    {
      titleLetter: 'A',
      title: 'Customer Receives A Demand To Repay Debt In Full',

      example:
        'Customer receives a demand requesting full repayment of all debts within 30 days or failure to pay in full will result in commencement of legal action. Dispute Assist has successfully helped many customers to avoid legal action and resolve the dispute with their bank and regularly receives referrals from solicitors and accountants with customers in this situation.',
      resolution:
        'Dispute Assist can act as your agent and handle all communications on your behalf with the bank and other parties. Dispute Assist has been successful in resolving these types of bank disputes by tailoring a solution depending on each individual’s circumstance and provide assistance to help customers find an acceptable solution to resolve their bank dispute. For example:',
      ul: {
        li: [
          'Obtain a STAY/PREVENT any proposed legal action.',
          'Negotiate compensation for any wrong doing on the banks part.',
          'Obtain time to enable the customer’s situation to improve, obtain refinance, reduction in debt, or obtain an orderly private sale etc.',
          'Provide assistance to customers in regard to what is acceptable to resolve their bank dispute',
        ],
      },
    },
    {
      titleLetter: 'B',
      title: 'Customers Unable To Make Loan Repayments',
      example:
        'Customer is unable to make loan repayments either from the commencement of the loan or due to unforeseen circumstances.',
      resolution:
        'Dispute Assist has helped many clients experiencing difficulty in maintaining their loan repayments.  Dispute Assist can act as your agent and handle all communications on your behalf with the bank and other parties.Dispute Assist has been successful in resolving these types of bank disputes by tailoring a solution depending on each individual’s circumstance and provide assistance to customers in regard to what is acceptable to resolve their bank dispute. For example:',
      ul: {
        li: [
          'Obtain a STAY/PREVENT any proposed legal action.',
          'Negotiate a reduction in debt.',
          'Negotiating to reduce interest rate providing for a reduction in repayment.',
          'Capitalisation of arrears.',
          'Moratorium for a period of time.',
          'Obtain more time to enable the customer’s situation to improve, or to obtain refinance, or reduction in debt, or obtain orderly private sale etc.',
        ],
      },
    },
    {
      titleLetter: 'C',
      title: 'Freezing Accounts, Issuing Demand',
      example:
        'The bank froze the customer’s working cheque account without notice and simultaneously entered discussions to restructure the customer loans whilst simultaneously issuing demands for repayment of debt in full and a letter to vacate the property advising the customer that legal action had commenced when in fact it had not commenced legal action.',
      resolution:
        'Dispute Assist successfully negotiated between the bank and the customer to resolve the issues in dispute and obtained a reduction in the customer’s debt. Dispute Assist acted as the agent and handled all communications between the bank and other parties. Dispute Assist attended to research and completion of outline of the issues in dispute, attended to conciliation and pre-conciliation documentation, provided assistance in assessing acceptable resolve of the issues in dispute, negotiate settlement, negotiations for preparation and amendment of final deed of agreement.',
      ul: {
        li: [],
      },
    },
    {
      titleLetter: 'D',
      title: 'Customers Unable To Navigate Through Ombudsman Process',
      example:
        'Dispute Assist has successfully assisted many customers who were unable to deal with the Ombudsman process. Dispute Assist acted as the agent on the customers behalf and handled all communications with the Ombudsman, the bank and other parties.',
      resolution:
        'Dispute Assist has successfully assisted customers for example:',
      ul: {
        li: [
          'The Ombudsman has closed complaints and Dispute Assist has been successful in reopening the bank complaint and resolving the bank dispute.',
          'Research customers file and compile report of all issues in dispute.',
          'Correspond on customer’s behalf with Ombudsman regarding losses, jurisdiction, responding to banks correspondence and evidencing issues in dispute etc.',
          'Provide assistance to customers in regard to what is acceptable to resolve their bank dispute.',
          'Negotiate increase in settlement directly with bank.',
        ],
      },
    },
    {
      titleLetter: '',
      title: '',
      example: '',
      resolution: '',
      ul: {
        li: ['', '', ''],
      },
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
