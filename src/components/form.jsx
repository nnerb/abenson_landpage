import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const Form = () => {
  // Define the Zod schema
  const schema = z.object({
    name: z
      .string()
      .min(3, { message: "Name must be at least 3 characters long" }),
    email: z
      .string()
      .email({ message: "Invalid email" })
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema), // Use Zod for validation
  });

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
  };

  return (
    <section className="py-4 flex flex-col items-center gap-[30px] text-primary-gray">
      <div className="w-full flex flex-col items-center gap-2 max-w-[280px] px-6">
        <h1 className="text-lg font-poppins-semibold vertical-trim">Not on the List</h1>
        <p className="text-xs leading-[18px]">Send us your resume</p>
      </div>
      <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        {/* Name Field */}
        <div className="relative">
          <input
            type="text"
            {...register("name")}
            className={`px-[14px] py-3 rounded-[28px] text-xs outline-none appearance-none ring-1 peer w-full ${
              errors.name ? "ring-error text-error" : "ring-primary-bg-gray-hover focus:ring-primary-button"
            }`}
          />
          <label
            className={`absolute top-0 left-0 -translate-y-[7px] translate-x-2 bg-white text-[11px] leading-[14.3px] font-poppins-semibold px-1 transition-colors ${
              errors.name ? "text-error" : "peer-focus:text-primary-button"
            }`}
          >
            Name
          </label>
          {errors.name && <p className="text-error text-[10px] mt-1 ml-3">{errors.name.message}</p>}
        </div>

        {/* Email Field */}
        <div className="relative">
          <input
            {...register("email")}
            className={`
              px-[14px] py-3 rounded-[28px] text-xs outline-none 
              appearance-none ring-1 peer w-full 
              ${ errors.email 
                ? `ring-error text-error` 
                :`ring-primary-bg-gray-hover focus:ring-primary-button`
              }
            `}
          />
          <label
            className={`absolute top-0 left-0 -translate-y-[7px] translate-x-2 
              bg-white text-[11px] leading-[14.3px] font-poppins-semibold px-1 transition-colors 
              ${ errors.email ? "text-error" : "peer-focus:text-primary-button"}`
            }
          >
            Email Address
          </label>
          {errors.email && <p className="text-error text-[11px] leading-[12.54px]">{errors.email.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-primary-button text-white py-2 px-6 
          rounded-[28px] font-poppins-semibold text-xs"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Form;
