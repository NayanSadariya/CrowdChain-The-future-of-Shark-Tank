export interface KYCFormData {
  aadharNumber: string;
  fullName: string;
  dateOfBirth: string;
  address: string;
  photo: File | null;
}

export interface ValidationErrors {
  aadharNumber?: string;
  fullName?: string;
  dateOfBirth?: string;
  address?: string;
  photo?: string;
}