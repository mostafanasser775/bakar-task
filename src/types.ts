export interface CreditCardProps {
  holderName: string;
  cardNumber: string;
  expires: string;
  monthlyLimit: string;
  spent: string;
  status: string;
}
export interface Card {
  cardholderName: string;
  last4: string;
  expiryMonth: number;
  expiryYear: number;
  brand: string;
  cvc: string;
};

export interface Transaction {
  amount: number;
  currency: string;
  cardholder: string;
  status: string;
  created: string;
}