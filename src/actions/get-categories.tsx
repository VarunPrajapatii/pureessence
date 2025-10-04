import { Category } from '@/types';

// Fallback to localhost if environment variable is not set
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api/8ce60fbe-1d23-42f8-8506-6a65dec6aa77';
const URL = `${API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
  try {
    const res = await fetch(URL);
    
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    
    const contentType = res.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      throw new Error('Response is not JSON');
    }
    
    return res.json();
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
};

export default getCategories;
