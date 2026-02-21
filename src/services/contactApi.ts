import axios from 'axios';

// TODO: Replace with your actual Express.js backend URL when deployed
const API_BASE_URL = 'https://your-api-endpoint.com/api';

export interface ContactSubmission {
  name: string;
  phone: string;
  contactMethod: string;
  service: string;
  details: string;
}

export const submitContactForm = async (data: ContactSubmission): Promise<{ success: boolean }> => {
  // TODO: Uncomment when your Express.js backend is ready
  // const response = await axios.post(`${API_BASE_URL}/contact`, data);
  // return response.data;

  // Placeholder: simulate API call
  return new Promise((resolve) => {
    setTimeout(() => resolve({ success: true }), 1000);
  });
};
