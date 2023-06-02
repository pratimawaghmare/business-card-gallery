// card model
export interface CardModel {
    name: string;
    first_name: string;
    last_name: string;
    current_title: string;
    location: string;
    phone_number?: string;
    personal_email?: string;
    linkedIn?: string;
    experience: string[];
    education: string[];
  }