import { render, screen } from '@testing-library/react';
import { ContactForm } from '@/components/ContactForm';

// Mock Formspree useForm hook to allow rendering the component without actual context
jest.mock('@formspree/react', () => ({
  useForm: () => [{ submitting: false, succeeded: false, errors: [] }, jest.fn()],
  ValidationError: () => null,
}));

describe('ContactForm', () => {
  it('renders all required input fields and the submit button', () => {
    render(<ContactForm />);

    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();

    const submitBtn = screen.getByRole('button', { name: /Send Message/i });
    expect(submitBtn).toBeInTheDocument();
    expect(submitBtn).not.toBeDisabled();
  });
});
