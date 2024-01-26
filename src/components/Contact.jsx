import { useForm } from 'react-hook-form';
import Button from '../ui/Button';
import { sendMessage } from '../services/messageApi';
import { FaCheck } from 'react-icons/fa';

function Contact() {
  const { register, handleSubmit, reset, formState } = useForm();
  console.log(formState);

  return (
    <div className="container mx-auto mb-16">
      <h2 className=" mb-6 text-center text-3xl font-bold">Send a message</h2>
      <p className="mb-4 text-center">
        Feel free to send me a message and I&lsquo;ll get back to you ASAP!
      </p>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
          sendMessage(data);
          reset();
        })}
        className=" mx-auto flex max-w-[800px] flex-col justify-center space-y-4"
      >
        <label>
          Name:{' '}
          <input
            type="text"
            {...register('name')}
            className="block w-full border"
          />
        </label>
        <label>
          Email:{' '}
          <input
            type="text"
            {...register('email')}
            className="block w-full border"
          />
        </label>
        <label>
          Title:{' '}
          <input
            type="text"
            {...register('title')}
            className="block w-full border"
          />
        </label>
        <label>
          Message:{' '}
          <textarea
            type="text"
            {...register('message')}
            className="block w-full border"
          />
        </label>
        {formState.isSubmitSuccessful && (
          <p className="text-green-600">
            <FaCheck className="mr-4 inline text-green-600" />
            Message was sent successfully!
          </p>
        )}
        <Button
          type="submit"
          buttonClass="border border-gray-700 hover:bg-gray-300 transition-all duration-500"
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default Contact;
