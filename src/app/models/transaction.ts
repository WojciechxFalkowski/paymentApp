export interface Transaction {
  account_id: string;
  ref_id: string;
  transaction: string;
  type_transaction: string; //wpływ na rachunek,zakup przy uzyciu karty
  amount: number;
  iso_currency_code: string;
  status: string;
  country: string;
  authorized_date: Date;
  date: Date;
}
