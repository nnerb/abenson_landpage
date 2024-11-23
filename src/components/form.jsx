import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const Form = () => {

  const [fileName, setFileName] = useState("");
  // Define the Zod schema
  const schema = z.object({
    name: z
      .string()
      .min(3, { message: "Name must be at least 3 characters long" }),
    email: z
      .string()
      .email({ message: "Invalid email" }),
    resume: z
    .custom((v) => v instanceof File, {
      message: 'Please attach your resume',
    })
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: zodResolver(schema),
  })

  const onSubmit = (data) => {
    console.log("Form submitted: ", data)
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name); // Display file name
      setValue("resume", e.target.files); // Set the file list into the form value
    }
  };

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
                px-[14px] py-3 rounded-[28px] text-xs outline-none 
                appearance-none ring-1 peer w-full leading-[18px]
                ${ errors.email 
                  ? `ring-error text-error` 
                  :`ring-primary-bg-gray-hover focus:ring-primary-button`
                }
              `}
            />
            <label
              className={`
                absolute top-0 left-0 -translate-y-[7px] translate-x-2 
                bg-white text-[11px] leading-[14.3px] font-poppins-semibold px-1 transition-colors 
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
                 px-[14px] py-3 rounded-full text-xs outline-none
                appearance-none ring-1 leading-[18px] w-full pr-40 peer
                ${errors.resume 
                  ? "ring-error text-error" 
                  : "ring-primary-bg-gray-hover focus:ring-primary-button"
                }
              `}
            />
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
            <label
              className={`
                absolute right-0 text-[14px] font-poppins-medium cursor-pointer
                py-[13px] custom-sm:py-[13.5px] leading-[14.82px] px-4 rounded-full flex-shrink-0 ring-1 custom-sm:px-[25.5px] 
                ${errors.resume ? "ring-error text-error" : "ring-primary-button text-primary-button"}
              `}
            >
              Browse Files
              <input
                type="file"
                {...register("resume")}
                onChange={handleFileChange}
                className="hidden peer"
              />
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
            className="bg-primary-button text-[13px] leading-[14.82px] 
            text-white py-[13.5px] px-6 rounded-full font-poppins-medium text-xs
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
