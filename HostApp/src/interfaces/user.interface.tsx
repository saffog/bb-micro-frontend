export type AccountType="ENTERPRISE" | "PERSONAL";

export default interface User {
  accountType: AccountType;
  userName: string;
  userId: string;
}
