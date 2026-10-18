import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ContactForm } from '@/components/ContactForm';

const fill = async () => {
  await userEvent.type(screen.getByLabelText(/Name/i), 'Jane');
  await userEvent.type(screen.getByLabelText(/Email/i), 'jane@example.com');
  await userEvent.type(screen.getByLabelText(/Message/i), 'Hello');
};

describe('ContactForm', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('renders all required input fields and the submit button', () => {
    render(<ContactForm />);

    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();

    const submitBtn = screen.getByRole('button', { name: /Send Message/i });
    expect(submitBtn).toBeInTheDocument();
    expect(submitBtn).not.toBeDisabled();
  });

  it('shows a success state after a successful submit', async () => {
    global.fetch = jest.fn().mockResolvedValue({ ok: true }) as unknown as typeof fetch;
    render(<ContactForm />);
    await fill();
    await userEvent.click(screen.getByRole('button', { name: /Send Message/i }));

    await waitFor(() => expect(screen.getByRole('button', { name: /Message Sent/i })).toBeDisabled());
    expect(screen.getByRole('status')).toHaveTextContent('Your message was sent.');
  });

  it('shows an error state when the request fails', async () => {
    global.fetch = jest.fn().mockRejectedValue(new Error('network')) as unknown as typeof fetch;
    render(<ContactForm />);
    await fill();
    await userEvent.click(screen.getByRole('button', { name: /Send Message/i }));

    await waitFor(() => expect(screen.getByRole('button', { name: /Failed to Send/i })).toBeEnabled());
    expect(screen.getByRole('status')).toHaveTextContent('could not be sent');
  });

  it('disables the button while submitting', async () => {
    global.fetch = jest.fn(() => new Promise(() => {})) as unknown as typeof fetch;
    render(<ContactForm />);
    await fill();
    await userEvent.click(screen.getByRole('button', { name: /Send Message/i }));

    expect(await screen.findByRole('button', { name: /Sending/i })).toBeDisabled();
  });
});
