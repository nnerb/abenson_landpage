import { useForm, useWatch } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const Form = () => {

  const schema = z.object({
    name: z
      .string()
      .min(3, { message: "Name must be at least 3 characters long" }),
    email: z
      .string()
      .email({ message: "Invalid email" }),
    resume: z
      .instanceof(FileList)
      .refine((files) => files.length > 0, { message: "Resume is required" }) 
      .refine((files) => files.length === 1, { message: "Only one file is allowed" }) // Only one file allowed
      .refine((files) => {
        const file = files[0]; 
        return file && file.type === "application/pdf"; // Ensure it's a PDF file
      }, { message: "Only PDF file is allowed" })
      .refine((files) => {
        const file = files[0];
        return file && file.size <= 5 * 1024 * 1024; // Ensure the file size is less than 5MB
      }, { message: "File size must be less than 5MB" })
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
    control
  } = useForm({
    resolver: zodResolver(schema),
  })

  const resumeFile = useWatch({
    control,
    name: "resume",
  });

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
  };

  const fileName = resumeFile?.[0]?.name || '';

  return (
    <section 
      className=" text-primary-gray px-4 custom-sm:px-0  
      w-full mx-auto max-w-[1300px] custom-sm:max-w-[362px]"
    >
      <div className="py-4 custom-sm:px-4 flex flex-col items-center gap-[30px] w-full">
        <div 
          className="w-full flex flex-col items-center gap-2 
          custom-sm:gap-3 max-w-[280px] px-6"
        >
          <h1 
            className="text-lg custom-sm:text-[28px] custom-sm:leading-9 
            font-poppins-semibold vertical-trim custom-sm:no-vertical-trim"
          >
              Not on the List?
          </h1>
          <p 
            className="text-xs leading-[18px] custom-sm:text-xl custom-sm:leading-[22.8px]"
          >
            Send us your resume
          </p>
        </div>
        <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          {/* Name Field */}
          <div className="relative">
            <input
              type="text"
              {...register("name")}
              className={`
                px-[14px] py-[13px] custom-sm:py-[11.5px] rounded-[28px] 
                text-xs outline-none appearance-none ring-1 peer w-full leading-[18px]
                custom-sm:text-[14px] custom-sm:leading-[21px]
                ${ errors.name 
                  ? `ring-error text-error` 
                  :`ring-primary-bg-gray-hover focus:ring-primary-button`
                }
              `}
            />
            <label
              className={`
                absolute top-0 left-0 -translate-y-[7px] translate-x-2 
                bg-white text-[11px] leading-[14.3px] font-poppins-semibold 
                px-1 transition-colors 
                ${ errors.name 
                  ? "text-error" 
                  : "peer-focus:text-primary-button"
                }
              `}
            >
              Name
            </label>
            {errors.name && 
              <p className="text-error text-[11px] leading-[12.54px] px-[14px] mt-[2px]">
                {errors.name.message}
              </p>
            }
          </div>

          {/* Email Field */}
          <div className="relative">
            <input
              type="text"
              {...register("email")}
              className={`
                px-[14px] py-[13px] custom-sm:py-[11.5px] rounded-[28px] 
                text-xs outline-none appearance-none ring-1 peer w-full leading-[18px]
                custom-sm:text-[14px] custom-sm:leading-[21px]
                ${ errors.email 
                  ? `ring-error text-error` 
                  :`ring-primary-bg-gray-hover focus:ring-primary-button`
                }
              `}
            />
            <label
              className={`
                absolute top-0 left-0 -translate-y-[7px] translate-x-2 
                bg-white text-[11px] leading-[14.3px] font-poppins-semibold 
                px-1 transition-colors  
                ${ errors.email 
                  ? "text-error" 
                  : "peer-focus:text-primary-button"
                }
              `}
            >
              Email Address
            </label>
            {errors.email && 
              <p className="text-error text-[11px] leading-[12.54px] px-[14px] mt-[3px]">
                {errors.email.message}
              </p>
            }
          </div>

          {/* Resume Field */}
          <div className="relative w-full">
             {/* Input to display the file name */}
            <input
              type="text"
              value={fileName}
              readOnly
              className={`
                px-[14px] py-3 custom-sm:py-[10.5px] rounded-full text-xs 
                custom-sm:text-[14px] custom-sm:leading-[21px] outline-none
                appearance-none ring-1 leading-[18px] w-full pr-36 peer
                ${errors.resume 
                  ? "ring-error text-error" 
                  : "ring-primary-bg-gray-hover focus:ring-primary-button"
                }
              `}
            />
             <label
              className={`
                absolute top-0 right-0 text-[13px] custom-sm:text-[13.5px] 
                font-poppins-medium cursor-pointer h-[42px] w-[131px]
                grid place-items-center text-center leading-[14.82px] rounded-full 
                ring-1
                ${errors.resume ? "ring-error text-error" : "ring-primary-button text-primary-button"}
              `}
            >
              Browse Files
              <input
                type="file"
                {...register("resume")}
                className="hidden peer"
              />
            </label>
            {/* Label for "Attach Resume" */}
            <label
              className={`
                absolute top-0 left-0 -translate-y-[7px] translate-x-2 
                bg-white text-[11px] leading-[14.3px] font-poppins-semibold px-1 transition-colors 
                ${ errors.resume 
                  ? `ring-error text-error` 
                  :`ring-primary-bg-gray-hover peer-focus:text-primary-button`
                }
              `}
            >
              Attach Resume
            </label>
            {/* Error message for resume */}
            {errors.resume && (
              <p className="text-error text-[11px] leading-[12.54px] px-[14px] mt-[2px]">
                {errors.resume.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-primary-button text-[13px] inline-flex items-center justify-center h-[42px]
            text-white py-[13.5px] text-center rounded-full font-poppins-medium text-xs
            custom-sm:text-[15px] custom-sm:leading-[22.5px] custom-sm:tracking-[-0.3px]"
          >
            Submit
          </button>
        </form>
      </div>
      
    </section>
  );
};

export default Form;
